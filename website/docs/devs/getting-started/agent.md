# Hutch Agent

### Installation
First, make sure you install [`poetry`](https://python-poetry.org/docs/#installation).

Once you have `poetry` installed, run:
```shell
poetry install
```
and this will set up your environment to use the agent with RabbitMQ.

If you would like to set the agent up to work as an Azure Function, run:
```shell
poetry install -E azure-queue
```
and this will set it up to work with Azure Storage Queue.

### Running `hutchagent`
To run `hutchagent`, run:
```shell
poetry run hutchagent
```
and use `Ctrl+C` to shut it down.

### DB for logging
The agent writes logs to a database. It also writes to the standard output as a backup in case the connection fails. The creation of the logging database is handled by `HutchManager` normally, but if you want to work with the agent without the manager for development purposes, perform the following steps:

At the root of the repo run:
```shell
docker-compose up -d
```
and you will get a fresh postgresql db.

Then in `app/HutchAgent`, run:
```shell
poetry run build-log-db -u <username> -p <password> -d <database> --drivername <drivername>
```
Help can be found by running:
```shell
poetry run build-log-db --help
```

### Testing and Building
To run the tests and build `hutchagent`'s `sdist` and `wheel`, run:
```shell
poetry run tox
```
That's it!

### Adding and removing deps
To add a dependency, run:
```shell
# For requirements
poetry add <package_name>
# For dev-only
poetry add --dev <package_name>
```
To remove a dependency, run:
```shell
# For requirements
poetry remove <package_name>
# For dev-only
poetry remove --dev <package_name>
```
