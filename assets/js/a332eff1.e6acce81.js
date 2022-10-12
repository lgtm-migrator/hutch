"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[768],{8570:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(79);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,k=u["".concat(i,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(2203),r=(n(79),n(8570));const o={sidebar_position:2},l="Endpoint Schema",s={unversionedId:"devs/external-systems/bcos/endpoint-schema",id:"devs/external-systems/bcos/endpoint-schema",title:"Endpoint Schema",description:"This document contains more detail on the request and response schema for BC|OS REST API v2 endpoints used by Hutch.",source:"@site/docs/devs/external-systems/bcos/endpoint-schema.md",sourceDirName:"devs/external-systems/bcos",slug:"/devs/external-systems/bcos/endpoint-schema",permalink:"/hutch/docs/devs/external-systems/bcos/endpoint-schema",draft:!1,editUrl:"https://github.com/hdruk/hutch/tree/main/website/docs/devs/external-systems/bcos/endpoint-schema.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"devGuide",previous:{title:"Hutch Usage",permalink:"/hutch/docs/devs/external-systems/bcos/hutch-usage"},next:{title:"Rules mapping",permalink:"/hutch/docs/devs/external-systems/bcos/rules-mapping"}},i={},d=[{value:"<code>/api/task/nextjob/{collectionId}</code>",id:"apitasknextjobcollectionid",level:2},{value:"Response Codes",id:"response-codes",level:3},{value:"Sample Response Body",id:"sample-response-body",level:3},{value:"<code>200</code>",id:"200",level:4},{value:"<code>/api/task/result/{uuid}/{collectionid}</code>",id:"apitaskresultuuidcollectionid",level:2},{value:"Sample Request Body",id:"sample-request-body",level:3},{value:"Response Codes",id:"response-codes-1",level:3},{value:"Sample Response Body",id:"sample-response-body-1",level:3},{value:"<code>200</code>",id:"200-1",level:4}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"endpoint-schema"},"Endpoint Schema"),(0,r.kt)("p",null,"This document contains more detail on the request and response schema for BC|OS REST API v2 endpoints used by Hutch."),(0,r.kt)("p",null,"This information was gathered during Hutch development and reflects the usage in the Hutch codebase today."),(0,r.kt)("p",null,"It should be used to supplement the BC|OS ",(0,r.kt)("a",{parentName:"p",href:"open-api"},"OpenAPI spec"),"."),(0,r.kt)("h1",{id:"tasks"},"Tasks"),(0,r.kt)("h2",{id:"apitasknextjobcollectionid"},(0,r.kt)("inlineCode",{parentName:"h2"},"/api/task/nextjob/{collectionId}")),(0,r.kt)("h3",{id:"response-codes"},"Response Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Content"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"200")),(0,r.kt)("td",{parentName:"tr",align:null},"OK")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"204")),(0,r.kt)("td",{parentName:"tr",align:null},"No tasks in the queue for this Collection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"401")),(0,r.kt)("td",{parentName:"tr",align:null},"Unauthorised")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"404")),(0,r.kt)("td",{parentName:"tr",align:null},"Collection not found")))),(0,r.kt)("h3",{id:"sample-response-body"},"Sample Response Body"),(0,r.kt)("h4",{id:"200"},(0,r.kt)("inlineCode",{parentName:"h4"},"200")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "owner": "user1",\n  "cohort": {\n    "groups": [\n      {\n        "rules": [\n          {\n            "varname": "SEX",\n            "type": "ALT",\n            "oper": "=",\n            "value": "1"\n          }\n        ],\n        "rules_oper": "OR"\n      }\n    ],\n    "groups_oper": "AND"\n  },\n  "collection": "RQ-CC-56ed86bc-999e-45e9-8efe-c4ca53b18479",\n  "protocol_version": "v2",\n  "char_salt": "8e012537-66a5-4da4-9375-93347ab8716d",\n  "uuid": "816bbdf0-f0b0-4710-9b76-f6e5ea14513e"\n}\n')),(0,r.kt)("h2",{id:"apitaskresultuuidcollectionid"},(0,r.kt)("inlineCode",{parentName:"h2"},"/api/task/result/{uuid}/{collectionid}")),(0,r.kt)("h3",{id:"sample-request-body"},"Sample Request Body"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "collection_id": "RQ-CC-3278e0f7-b22d-4806-a654-700de32e11cc",\n  "status": "OK",\n  "protocolVersion": "2",\n  "queryResult": {\n    "count": 765,\n    "files": []\n  }\n}\n')),(0,r.kt)("h3",{id:"response-codes-1"},"Response Codes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Content"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"200")),(0,r.kt)("td",{parentName:"tr",align:null},"Job Saved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"404")),(0,r.kt)("td",{parentName:"tr",align:null},"UUID not found; Collection ID not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"500")),(0,r.kt)("td",{parentName:"tr",align:null},"Job submitting failed null")))),(0,r.kt)("h3",{id:"sample-response-body-1"},"Sample Response Body"),(0,r.kt)("h4",{id:"200-1"},(0,r.kt)("inlineCode",{parentName:"h4"},"200")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"// TODO\n")))}c.isMDXComponent=!0}}]);