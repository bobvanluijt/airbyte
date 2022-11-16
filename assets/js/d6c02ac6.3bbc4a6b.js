"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[14748],{17440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(83117),r=(n(67294),n(3905));const l={},o="Mongo DB",i={unversionedId:"archive/mongodb",id:"archive/mongodb",title:"Mongo DB",description:"The MongoDB source supports Full Refresh and Incremental sync strategies.",source:"@site/../docs/archive/mongodb.md",sourceDirName:"archive",slug:"/archive/mongodb",permalink:"/archive/mongodb",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/archive/mongodb.md",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Resulting schema",id:"resulting-schema",level:2},{value:"Step 1. Find all unique properties",id:"step-1-find-all-unique-properties",level:3},{value:"Note",id:"note",level:4},{value:"Step 2. Determine property types",id:"step-2-determine-property-types",level:3},{value:"Features",id:"features",level:2},{value:"Full Refresh sync",id:"full-refresh-sync",level:3},{value:"Incremental sync",id:"incremental-sync",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Create users",id:"create-users",level:3},{value:"Configure application",id:"configure-application",level:3},{value:"Enable MongoDB authentication",id:"enable-mongodb-authentication",level:3},{value:"Configure firewall",id:"configure-firewall",level:3},{value:"Possible configuration Parameters",id:"possible-configuration-parameters",level:4},{value:"Changelog",id:"changelog",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mongo-db"},"Mongo DB"),(0,r.kt)("p",null,"The MongoDB source supports Full Refresh and Incremental sync strategies."),(0,r.kt)("h2",{id:"resulting-schema"},"Resulting schema"),(0,r.kt)("p",null,"MongoDB does not have anything like table definition, thus we have to define column types from actual attributes and their values. Discover phase have two steps:"),(0,r.kt)("h3",{id:"step-1-find-all-unique-properties"},"Step 1. Find all unique properties"),(0,r.kt)("p",null,"Connector runs the map-reduce command which returns all unique document props in the collection. Map-reduce approach should be sufficient even for large clusters."),(0,r.kt)("h4",{id:"note"},"Note"),(0,r.kt)("p",null,"To work with Atlas MongoDB, a ",(0,r.kt)("strong",{parentName:"p"},"non-free")," tier is required, as the free tier does not support the ability to perform the mapReduce operation."),(0,r.kt)("h3",{id:"step-2-determine-property-types"},"Step 2. Determine property types"),(0,r.kt)("p",null,"For each property found, connector selects 10k documents from the collection where this property is not empty. If all the selected values have the same type - connector will set appropriate type to the property. In all other cases connector will fallback to ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," type."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,r.kt)("h3",{id:"full-refresh-sync"},"Full Refresh sync"),(0,r.kt)("p",null,"Works as usual full refresh sync."),(0,r.kt)("h3",{id:"incremental-sync"},"Incremental sync"),(0,r.kt)("p",null,"Cursor field can not be nested. Currently only top level document properties are supported."),(0,r.kt)("p",null,"Cursor should ",(0,r.kt)("strong",{parentName:"p"},"never")," be blank. In case cursor is blank - the incremental sync results might be unpredictable and will totally rely on MongoDB comparison algorithm."),(0,r.kt)("p",null,"Only ",(0,r.kt)("inlineCode",{parentName:"p"},"datetime")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"integer")," cursor types are supported. Cursor type is determined based on the cursor field name:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"datetime")," - if cursor field name contains a string from: ",(0,r.kt)("inlineCode",{parentName:"li"},"time"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"date"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"_at"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"timestamp"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ts")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"integer")," - otherwise")),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("p",null,"This guide describes in details how you can configure MongoDB for integration with Airbyte."),(0,r.kt)("h3",{id:"create-users"},"Create users"),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"mongo")," shell, switch to ",(0,r.kt)("inlineCode",{parentName:"p"},"admin")," database and create a ",(0,r.kt)("inlineCode",{parentName:"p"},"READ_ONLY_USER"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"READ_ONLY_USER")," will be used for Airbyte integration. Please make sure that user has read-only privileges."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'mongo\nuse admin;\ndb.createUser({user: "READ_ONLY_USER", pwd: "READ_ONLY_PASSWORD", roles: [{role: "read", db: "TARGET_DATABASE"}]}\n')),(0,r.kt)("p",null,"Make sure the user have appropriate access levels."),(0,r.kt)("h3",{id:"configure-application"},"Configure application"),(0,r.kt)("p",null,"In case your application uses MongoDB without authentication you will have to adjust code base and MongoDB config to enable MongoDB authentication. ",(0,r.kt)("strong",{parentName:"p"},"Otherwise your application might go down once MongoDB authentication will be enabled.")),(0,r.kt)("h3",{id:"enable-mongodb-authentication"},"Enable MongoDB authentication"),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/mongod.conf")," and add/replace specific keys:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"net:\n  bindIp: 0.0.0.0\n\nsecurity:\n  authorization: enabled\n")),(0,r.kt)("p",null,"Binding to ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0")," will allow to connect to database from any IP address."),(0,r.kt)("p",null,"The last line will enable MongoDB security. Now only authenticated users will be able to access the database."),(0,r.kt)("h3",{id:"configure-firewall"},"Configure firewall"),(0,r.kt)("p",null,"Make sure that MongoDB is accessible from external servers. Specific commands will depend on the firewall you are using ","(","UFW/iptables/AWS/etc",")",". Please refer to appropriate documentation."),(0,r.kt)("p",null,"Your ",(0,r.kt)("inlineCode",{parentName:"p"},"READ_ONLY_USER")," should now be ready for use with Airbyte."),(0,r.kt)("h4",{id:"possible-configuration-parameters"},"Possible configuration Parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/connection-string/#mongodb-urioption-urioption.authSource"},"Authentication Source")),(0,r.kt)("li",{parentName:"ul"},"Host: URL of the database"),(0,r.kt)("li",{parentName:"ul"},"Port: Port to use for connecting to the database"),(0,r.kt)("li",{parentName:"ul"},"User: username to use when connecting"),(0,r.kt)("li",{parentName:"ul"},"Password: used to authenticate the user"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.mongodb.com/manual/reference/connection-string/#mongodb-urioption-urioption.replicaSet"},"Replica Set")),(0,r.kt)("li",{parentName:"ul"},"Whether to enable SSL")),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2021-07-20"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4669"},"4669")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Subscriptions Stream now returns all kinds of subscriptions (including expired and canceled)")))))}c.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);