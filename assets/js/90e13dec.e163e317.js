"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[47924],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},68972:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={},o="Teradata",l={unversionedId:"integrations/destinations/teradata",id:"integrations/destinations/teradata",title:"Teradata",description:"This page guides you through the process of setting up the Teradata destination connector.",source:"@site/../docs/integrations/destinations/teradata.md",sourceDirName:"integrations/destinations",slug:"/integrations/destinations/teradata",permalink:"/integrations/destinations/teradata",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/destinations/teradata.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Streamr",permalink:"/integrations/destinations/streamr"},next:{title:"TiDB",permalink:"/integrations/destinations/tidb"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Set up the Teradata Destination connector",id:"set-up-the-teradata-destination-connector",level:4},{value:"CHANGELOG",id:"changelog",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"teradata"},"Teradata"),(0,r.kt)("p",null,"This page guides you through the process of setting up the Teradata destination connector."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To use the Teradata destination connector, you'll need:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Access to a Teradata Vantage instance"),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("strong",{parentName:"p"},"Note:")," If you need a new instance of Vantage, you can install a free version called Vantage Express in the cloud on ",(0,r.kt)("a",{parentName:"p",href:"https://quickstarts.teradata.com/vantage.express.gcp.html"},"Google Cloud"),", ",(0,r.kt)("a",{parentName:"p",href:"https://quickstarts.teradata.com/run-vantage-express-on-microsoft-azure.html"},"Azure"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://quickstarts.teradata.com/run-vantage-express-on-aws.html"},"AWS"),". You can also run Vantage Express on your local machine using ",(0,r.kt)("a",{parentName:"p",href:"https://quickstarts.teradata.com/getting.started.vmware.html"},"VMware"),", ",(0,r.kt)("a",{parentName:"p",href:"https://quickstarts.teradata.com/getting.started.vbox.html"},"VirtualBox"),", or ",(0,r.kt)("a",{parentName:"p",href:"https://quickstarts.teradata.com/getting.started.utm.html"},"UTM"),"."))),(0,r.kt)("p",null,"You'll need the following information to configure the Teradata destination:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Host")," - The host name of the Teradata Vantage instance."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Username")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Password")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Default Schema Name")," - Specify the schema (or several schemas separated by commas) to be set in the search-path. These schemas will be used to resolve unqualified object names used in statements executed over this connection."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"JDBC URL Params")," (optional)")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://downloads.teradata.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html#BGBHDDGB"},"Refer to this guide for more details")),(0,r.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,r.kt)("h3",{id:"output-schema"},"Output schema"),(0,r.kt)("p",null,"Each stream will be output into its own table in Teradata. Each table will contain 3 columns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_ab_id"),": a uuid assigned by Airbyte to each event that is processed. The column type in Teradata is ",(0,r.kt)("inlineCode",{parentName:"li"},"VARCHAR(256)"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_emitted_at"),": a timestamp representing when the event was pulled from the data source. The column type in Teradata is ",(0,r.kt)("inlineCode",{parentName:"li"},"TIMESTAMP(6)"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_airbyte_data"),": a json blob representing with the event data. The column type in Teradata is ",(0,r.kt)("inlineCode",{parentName:"li"},"JSON"),".")),(0,r.kt)("h3",{id:"features"},"Features"),(0,r.kt)("p",null,"The Teradata destination connector supports the\nfollowing",(0,r.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"}," sync modes"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Incremental - Deduped History"),(0,r.kt)("td",{parentName:"tr",align:"left"},"No"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"You need a Teradata user with the following permissions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"can create tables and write permission."),(0,r.kt)("li",{parentName:"ul"},"can create schemas e.g:")),(0,r.kt)("p",null,"You can create such a user by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE USER airbyte_user  as perm=10e6, PASSWORD=<password>;\nGRANT ALL on dbc to airbyte_user;\n\n")),(0,r.kt)("p",null,"You can also use a pre-existing user but we highly recommend creating a dedicated user for Airbyte."),(0,r.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,r.kt)("h4",{id:"set-up-the-teradata-destination-connector"},"Set up the Teradata Destination connector"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Log into your Airbyte Open Source account.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Destinations")," and then click ",(0,r.kt)("strong",{parentName:"p"},"+ New destination"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"On the Set up the destination page, select ",(0,r.kt)("strong",{parentName:"p"},"Teradata")," from the ",(0,r.kt)("strong",{parentName:"p"},"Destination type")," dropdown.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the ",(0,r.kt)("strong",{parentName:"p"},"Name")," for the Teradata connector.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"Host"),", enter the host domain of the Teradata instance")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"Default Schema"),", enter the Default Schema name. The default value is public.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"For ",(0,r.kt)("strong",{parentName:"p"},"User")," and ",(0,r.kt)("strong",{parentName:"p"},"Password"),", enter the database username and password.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To customize the JDBC connection beyond common options, specify additional supported ",(0,r.kt)("a",{parentName:"p",href:"https://downloads.teradata.com/doc/connectivity/jdbc/reference/current/jdbcug_chapter_2.html#BGBHDDGB"},"JDBC URL parameters")," as key-value pairs separated by the symbol & in the ",(0,r.kt)("strong",{parentName:"p"},"JDBC URL Params")," field."),(0,r.kt)("p",{parentName:"li"},"Example: key1=value1&key2=value2&key3=value3"),(0,r.kt)("p",{parentName:"li"},"These parameters will be added at the end of the JDBC URL that the AirByte will use to connect to your Teradata database."))),(0,r.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2022-12-13"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20428"},"https://github.com/airbytehq/airbyte/pull/20428")),(0,r.kt)("td",{parentName:"tr",align:"left"},"New Destination Teradata Vantage")))))}c.isMDXComponent=!0}}]);