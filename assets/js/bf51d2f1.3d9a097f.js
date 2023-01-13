"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[27330],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),s=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=s(a),u=n,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||l;return a?r.createElement(k,o(o({ref:e},p),{},{components:a})):r.createElement(k,o({ref:e},p))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},546:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={},o="Snowflake",i={unversionedId:"integrations/sources/snowflake",id:"integrations/sources/snowflake",title:"Snowflake",description:"Overview",source:"@site/../docs/integrations/sources/snowflake.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/snowflake",permalink:"/integrations/sources/snowflake",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/snowflake.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Snapchat Marketing",permalink:"/integrations/sources/snapchat-marketing"},next:{title:"Sonar Cloud API",permalink:"/integrations/sources/sonar-cloud"}},d={},s=[{value:"Overview",id:"overview",level:2},{value:"Resulting schema",id:"resulting-schema",level:4},{value:"Features",id:"features",level:4},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"1. Additional information about Snowflake connection parameters could be found here.",id:"1-additional-information-about-snowflake-connection-parameters-could-be-found-here",level:4},{value:"2. Create a dedicated read-only user with access to the relevant schemas (Recommended but optional)",id:"2-create-a-dedicated-read-only-user-with-access-to-the-relevant-schemas-recommended-but-optional",level:4},{value:"There are 2 way ways of oauth supported: loginpass and oauth2.",id:"there-are-2-way-ways-of-oauth-supported-loginpass-and-oauth2",level:4},{value:"Login and Password",id:"login-and-password",level:3},{value:"OAuth 2.0",id:"oauth-20",level:3},{value:"Network policies",id:"network-policies",level:3},{value:"Changelog",id:"changelog",level:2}],p={toc:s};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"snowflake"},"Snowflake"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Snowflake source allows you to sync data from Snowflake. It supports both Full Refresh and Incremental syncs. You can choose if this connector will copy only the new or updated data, or all rows in the tables and columns you set up for replication, every time a sync is run."),(0,n.kt)("p",null,"This Snowflake source connector is built on top of the source-jdbc code base and is configured to rely on JDBC  3.13.22 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/snowflakedb/snowflake-jdbc"},"Snowflake driver")," as described in Snowflake ",(0,n.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/jdbc.html"},"documentation"),"."),(0,n.kt)("h4",{id:"resulting-schema"},"Resulting schema"),(0,n.kt)("p",null,"The Snowflake source does not alter the schema present in your warehouse. Depending on the destination connected to this source, however, the result schema may be altered. See the destination's documentation for more details."),(0,n.kt)("h4",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"You'll need the following information to configure the Snowflake source:"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Host")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Role")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Warehouse")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Database")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Schema")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Username")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Password")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"JDBC URL Params")," (Optional)"),(0,n.kt)("li",{parentName:"ol"},"Create a dedicated read-only Airbyte user and role with access to all schemas needed for replication.")),(0,n.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h4",{id:"1-additional-information-about-snowflake-connection-parameters-could-be-found-here"},"1. Additional information about Snowflake connection parameters could be found ",(0,n.kt)("a",{parentName:"h4",href:"https://docs.snowflake.com/en/user-guide/jdbc-configure.html#connection-parameters"},"here"),"."),(0,n.kt)("h4",{id:"2-create-a-dedicated-read-only-user-with-access-to-the-relevant-schemas-recommended-but-optional"},"2. Create a dedicated read-only user with access to the relevant schemas ","(","Recommended but optional",")"),(0,n.kt)("p",null,"This step is optional but highly recommended to allow for better permission control and auditing. Alternatively, you can use Airbyte with an existing user in your database."),(0,n.kt)("p",null,"To create a dedicated database user, run the following commands against your database:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},"-- set variables (these need to be uppercase)\nSET AIRBYTE_ROLE = 'AIRBYTE_ROLE';\nSET AIRBYTE_USERNAME = 'AIRBYTE_USER';\n\n-- set user password\nSET AIRBYTE_PASSWORD = '-password-';\n\nBEGIN;\n\n-- create Airbyte role\nCREATE ROLE IF NOT EXISTS $AIRBYTE_ROLE;\n\n-- create Airbyte user\nCREATE USER IF NOT EXISTS $AIRBYTE_USERNAME\nPASSWORD = $AIRBYTE_PASSWORD\nDEFAULT_ROLE = $AIRBYTE_ROLE\nDEFAULT_WAREHOUSE= $AIRBYTE_WAREHOUSE;\n\n-- grant Airbyte schema access\nGRANT OWNERSHIP ON SCHEMA $AIRBYTE_SCHEMA TO ROLE $AIRBYTE_ROLE;\n\nCOMMIT;\n")),(0,n.kt)("p",null,"You can limit this grant down to specific schemas instead of the whole database. Note that to replicate data from multiple Snowflake databases, you can re-run the command above to grant access to all the relevant schemas, but you'll need to set up multiple sources connecting to the same db on multiple schemas."),(0,n.kt)("p",null,"Your database user should now be ready for use with Airbyte."),(0,n.kt)("p",null,"###Authentication"),(0,n.kt)("h4",{id:"there-are-2-way-ways-of-oauth-supported-loginpass-and-oauth2"},"There are 2 way ways of oauth supported: login\\pass and oauth2."),(0,n.kt)("h3",{id:"login-and-password"},"Login and Password"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.snowflake.com/en/user-guide/admin-account-identifier.html"},"Host")),(0,n.kt)("td",{parentName:"tr",align:null},"The host domain of the snowflake instance (must include the account, region, cloud environment, and end with snowflakecomputing.com). Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"accountname.us-east-2.aws.snowflakecomputing.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.snowflake.com/en/user-guide/security-access-control-overview.html#roles"},"Role")),(0,n.kt)("td",{parentName:"tr",align:null},"The role you created in Step 1 for Airbyte to access Snowflake. Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"AIRBYTE_ROLE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.snowflake.com/en/user-guide/warehouses-overview.html#overview-of-warehouses"},"Warehouse")),(0,n.kt)("td",{parentName:"tr",align:null},"The warehouse you created in Step 1 for Airbyte to sync data into. Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"AIRBYTE_WAREHOUSE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.snowflake.com/en/sql-reference/ddl-database.html#database-schema-share-ddl"},"Database")),(0,n.kt)("td",{parentName:"tr",align:null},"The database you created in Step 1 for Airbyte to sync data into. Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"AIRBYTE_DATABASE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.snowflake.com/en/sql-reference/ddl-database.html#database-schema-share-ddl"},"Schema")),(0,n.kt)("td",{parentName:"tr",align:null},"The schema whose tables this replication is targeting. If no schema is specified, all tables with permission will be presented regardless of their schema.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Username"),(0,n.kt)("td",{parentName:"tr",align:null},"The username you created in Step 2 to allow Airbyte to access the database. Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"AIRBYTE_USER"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Password"),(0,n.kt)("td",{parentName:"tr",align:null},"The password associated with the username.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.snowflake.com/en/user-guide/jdbc-parameters.html"},"JDBC URL Params")," (Optional)"),(0,n.kt)("td",{parentName:"tr",align:null},"Additional properties to pass to the JDBC URL string when connecting to the database formatted as ",(0,n.kt)("inlineCode",{parentName:"td"},"key=value")," pairs separated by the symbol ",(0,n.kt)("inlineCode",{parentName:"td"},"&"),". Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"key1=value1&key2=value2&key3=value3"))))),(0,n.kt)("h3",{id:"oauth-20"},"OAuth 2.0"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.snowflake.com/en/user-guide/admin-account-identifier.html"},"Host")),(0,n.kt)("td",{parentName:"tr",align:null},"The host domain of the snowflake instance (must include the account, region, cloud environment, and end with snowflakecomputing.com). Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"accountname.us-east-2.aws.snowflakecomputing.com"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.snowflake.com/en/user-guide/security-access-control-overview.html#roles"},"Role")),(0,n.kt)("td",{parentName:"tr",align:null},"The role you created in Step 1 for Airbyte to access Snowflake. Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"AIRBYTE_ROLE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.snowflake.com/en/user-guide/warehouses-overview.html#overview-of-warehouses"},"Warehouse")),(0,n.kt)("td",{parentName:"tr",align:null},"The warehouse you created in Step 1 for Airbyte to sync data into. Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"AIRBYTE_WAREHOUSE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.snowflake.com/en/sql-reference/ddl-database.html#database-schema-share-ddl"},"Database")),(0,n.kt)("td",{parentName:"tr",align:null},"The database you created in Step 1 for Airbyte to sync data into. Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"AIRBYTE_DATABASE"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.snowflake.com/en/sql-reference/ddl-database.html#database-schema-share-ddl"},"Schema")),(0,n.kt)("td",{parentName:"tr",align:null},"The schema whose tables this replication is targeting. If no schema is specified, all tables with permission will be presented regardless of their schema.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OAuth2"),(0,n.kt)("td",{parentName:"tr",align:null},"The Login name and password to obtain auth token.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://docs.snowflake.com/en/user-guide/jdbc-parameters.html"},"JDBC URL Params")," (Optional)"),(0,n.kt)("td",{parentName:"tr",align:null},"Additional properties to pass to the JDBC URL string when connecting to the database formatted as ",(0,n.kt)("inlineCode",{parentName:"td"},"key=value")," pairs separated by the symbol ",(0,n.kt)("inlineCode",{parentName:"td"},"&"),". Example: ",(0,n.kt)("inlineCode",{parentName:"td"},"key1=value1&key2=value2&key3=value3"))))),(0,n.kt)("h3",{id:"network-policies"},"Network policies"),(0,n.kt)("p",null,"By default, Snowflake allows users to connect to the service from any computer or device IP address. A security administrator (i.e. users with the SECURITYADMIN role) or higher can create a network policy to allow or deny access to a single IP address or a list of addresses."),(0,n.kt)("p",null,"If you have any issues connecting with Airbyte Cloud please make sure that the list of IP addresses is on the allowed list"),(0,n.kt)("p",null,"To determine whether a network policy is set on your account or for a specific user, execute the ",(0,n.kt)("em",{parentName:"p"},"SHOW PARAMETERS")," command."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Account")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    SHOW PARAMETERS LIKE 'network_policy' IN ACCOUNT;\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"User")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    SHOW PARAMETERS LIKE 'network_policy' IN USER <username>;\n")),(0,n.kt)("p",null,"To read more please check official ",(0,n.kt)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/network-policies.html#"},"Snowflake documentation")),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.28"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20465"},"20465")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Improve the schema config field to only discover tables from the specified scehma and make the field optional")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.27"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20407"},"20407")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix an issue with integer values converted to floats during replication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.26"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19314"},"19314")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set application id in JDBC URL params based on OSS/Cloud environment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.25"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15535"},"15535")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update incremental query to avoid data missing when new data is inserted at the same time as a sync starts under non-CDC incremental mode")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.24"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17144"},"17144")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed bug with incorrect date-time datatypes handling")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.23"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17116"},"17116")),(0,n.kt)("td",{parentName:"tr",align:"left"},"added connection string identifier")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16766"},"16766")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update JDBC Driver version to 3.13.22")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.21"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15668"},"15668")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Wrap logs in AirbyteLogMessage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.20"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16258"},"16258")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Emit state messages more frequently")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.19"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15797"},"15797")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Allow using role during oauth")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.18"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14356"},"14356")),(0,n.kt)("td",{parentName:"tr",align:"left"},"DB Sources: only show a table can sync incrementally if at least one column can be used as a cursor field")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.17"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15314"},"15314")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Discover integer columns as integers rather than floats")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.16"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15314"},"15314")),(0,n.kt)("td",{parentName:"tr",align:"left"},"(broken, do not use) Discover integer columns as integers rather than floats")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14828"},"14828")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Source Snowflake: Source/Destination doesn't respect DATE data type")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14714"},"14714")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Clarified error message when invalid cursor column selected")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14574"},"14574")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Removed additionalProperties:false from JDBC source connectors")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12480"},"12480")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Query tables with adaptive fetch size to optimize JDBC memory consumption")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10953"},"10953")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Implement OAuth flow")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10242"},"10242")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed cursor for old connectors that use non-microsecond format. Now connectors work with both formats")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10242"},"10242")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Updated timestamp transformation with microseconds")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/10256"},"10256")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"-XX:+ExitOnOutOfMemoryError")," JVM option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9623"},"9623")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add jdbc_url_params support for optional JDBC parameters")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9567"},"9567")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added parameter for keeping JDBC session alive")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9203"},"9203")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-01-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9304"},"9304")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Upgrade version of JDBC driver")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7257"},"7257")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fixed parsing of extreme values for FLOAT and NUMBER data types")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4699"},"4699")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added json config validator")))))}m.isMDXComponent=!0}}]);