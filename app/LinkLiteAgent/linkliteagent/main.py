import sys
import logging
import pika
import linkliteagent.message_queue as mq
import linkliteagent.config as ll_config
from linkliteagent.db_manager import SyncDBManager
from linkliteagent.db_logging import SyncLogDBHandler
from linkliteagent.query import query_callback


async def async_main():
    """An asynchronous version of the main function"""
    pass


def main():
    """The main method"""
    format = logging.Formatter(
        ll_config.MSG_FORMAT,
        datefmt=ll_config.DATE_FORMAT,
    )

    # set up the backup logger
    backup_handler = logging.StreamHandler(sys.stdout)
    backup_handler.setFormatter(format)
    backup_logger = logging.getLogger(ll_config.BACKUP_LOGGER_NAME)
    backup_logger.setLevel(logging.INFO)
    backup_logger.addHandler(backup_handler)

    # set up the db logger
    db_manager = SyncDBManager(**ll_config.LOGS_AND_CONFIG_DB)
    db_handler = SyncLogDBHandler(db_manager, ll_config.BACKUP_LOGGER_NAME)
    db_handler.setFormatter(format)
    db_logger = logging.getLogger(ll_config.DB_LOGGER_NAME)
    db_logger.setLevel(logging.INFO)
    db_logger.addHandler(db_handler)
    db_logger.addHandler(backup_handler)

    # Connect to RabbitMQ
    try:
        db_logger.info("Connecting to queue.")
        channel = mq.connect(ll_config.QUEUE_NAME)
        channel.basic_consume(
            ll_config.QUEUE_NAME, on_message_callback=query_callback, auto_ack=True
        )
        db_logger.info("Successfully connected to queue. Press Ctrl+C to exit.")
        channel.start_consuming()  # starts a `while True` loop.
    except pika.exceptions.AMQPConnectionError:
        db_logger.critical("Unable to connect to queue. Exiting...", exc_info=True)
        exit(-1)
    except KeyboardInterrupt:
        # shut down on Ctrl+C
        db_logger.info("Disconnecting from queue...")
        if channel.connection.is_open:
            mq.disconnect(channel)

    db_logger.info("Successfully shut down :)")


if __name__ == "__main__":
    main()