"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[61129],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),m=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=m(a),k=n,N=c["".concat(o,".").concat(k)]||c[k]||s[k]||p;return a?r.createElement(N,l(l({ref:t},d),{},{components:a})):r.createElement(N,l({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=a.length,l=new Array(p);l[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var m=2;m<p;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},55937:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>p,metadata:()=>i,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const p={},l="Amazon Seller Partner",i={unversionedId:"integrations/sources/amazon-seller-partner",id:"integrations/sources/amazon-seller-partner",title:"Amazon Seller Partner",description:"This page guides you through the process of setting up the Amazon Seller Partner source connector.",source:"@site/../docs/integrations/sources/amazon-seller-partner.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/amazon-seller-partner",permalink:"/integrations/sources/amazon-seller-partner",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/amazon-seller-partner.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Amazon Ads",permalink:"/integrations/sources/amazon-ads"},next:{title:"Amazon SQS",permalink:"/integrations/sources/amazon-sqs"}},o={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Step 1: Set up Amazon Seller Partner",id:"step-1-set-up-amazon-seller-partner",level:2},{value:"Step 2: Set up the source connector in Airbyte",id:"step-2-set-up-the-source-connector-in-airbyte",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Supported streams",id:"supported-streams",level:2},{value:"Report options",id:"report-options",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Changelog",id:"changelog",level:2}],d={toc:m};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"amazon-seller-partner"},"Amazon Seller Partner"),(0,n.kt)("p",null,"This page guides you through the process of setting up the Amazon Seller Partner source connector."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Authenticating this Alpha connector is currently blocked. This is a known issue being tracked here: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/14734"},"https://github.com/airbytehq/airbyte/issues/14734"))),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"app_id"),(0,n.kt)("li",{parentName:"ul"},"lwa_app_id"),(0,n.kt)("li",{parentName:"ul"},"lwa_client_secret"),(0,n.kt)("li",{parentName:"ul"},"refresh_token"),(0,n.kt)("li",{parentName:"ul"},"aws_access_key"),(0,n.kt)("li",{parentName:"ul"},"aws_secret_key"),(0,n.kt)("li",{parentName:"ul"},"role_arn"),(0,n.kt)("li",{parentName:"ul"},"aws_environment"),(0,n.kt)("li",{parentName:"ul"},"region"),(0,n.kt)("li",{parentName:"ul"},"replication_start_date")),(0,n.kt)("h2",{id:"step-1-set-up-amazon-seller-partner"},"Step 1: Set up Amazon Seller Partner"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/registering-your-application"},"Register")," Amazon Seller Partner application.\n",(0,n.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/general/latest/gr/aws-sec-cred-types.html"},"Create")," IAM user."),(0,n.kt)("h2",{id:"step-2-set-up-the-source-connector-in-airbyte"},"Step 2: Set up the source connector in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account. "),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),". "),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"Amazon Seller Partner")," from the Source type dropdown and enter a name for this connector."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Authenticate your account"),"."),(0,n.kt)("li",{parentName:"ol"},"Log in and Authorize to the Amazon Seller Partner account."),(0,n.kt)("li",{parentName:"ol"},"Paste all other data to required fields using your IAM user."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Using developer application from Step 1, ",(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/self-authorization"},"generate")," refresh token. "),(0,n.kt)("li",{parentName:"ol"},"Go to local Airbyte page."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),". "),(0,n.kt)("li",{parentName:"ol"},"On the Set up the source page, enter the name for the Amazon Seller Partner connector and select ",(0,n.kt)("strong",{parentName:"li"},"Amazon Seller Partner")," from the Source type dropdown. "),(0,n.kt)("li",{parentName:"ol"},"Paste all data to required fields using your IAM user and developer account."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Amazon Seller Partner source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts/#connection-sync-mode"},"sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Full Refresh"),(0,n.kt)("li",{parentName:"ul"},"Incremental")),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"Information about rate limits you may find ",(0,n.kt)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api"},"here"),"."),(0,n.kt)("h2",{id:"supported-streams"},"Supported streams"),(0,n.kt)("p",null,"This source is capable of syncing the following tables and their data:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/200740930"},"FBA Inventory Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/help.html?itemID=200989110"},"FBA Orders Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/gp/help/help.html?itemID=200989100"},"FBA Shipments Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/help/hub/reference/200453300"},"FBA Replacements Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/help/hub/reference/G202086720"},"FBA Storage Fees Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://sellercentral.amazon.com/help/hub/reference/202105670"},"Restock Inventory Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Open Listings Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Orders Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Orders Reports By Last Update")," ","(","incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Amazon-Fulfilled Shipments Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Merchant Listings Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-v1-reference"},"Vendor Direct Fulfillment Shipping")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Vendor Inventory Health Reports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/orders-api-v0-reference"},"Orders")," ","(","incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Seller Feedback Report")," ","(","incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Alternate Purchase Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Item Comparison Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Market Basket Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Repeat Purchase Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values#brand-analytics-reports"},"Brand Analytics Search Terms Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/amzn/selling-partner-api-docs/blob/main/references/reports-api/reporttype-values.md#browse-tree-report"},"Browse tree report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/finances-api-reference#get-financesv0financialeventgroups"},"Financial Event Groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/finances-api-reference#get-financesv0financialevents"},"Financial Events")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Fee Preview Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Daily Inventory History Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Promotions Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Inventory Adjustments Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Received Inventory Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Inventory Event Detail Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Monthly Inventory History Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Manage Inventory")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Subscribe and Save Forecast Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Subscribe and Save Performance Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Archived Orders Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Flat File Returns Report by Return Date")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Canceled Listings Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Active Listings Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Open Listings Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Suppressed Listings Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Inactive Listings Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Stranded Inventory Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"XML Orders By Order Date Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Inventory Ledger Report - Detailed View")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"FBA Manage Inventory Health Report")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://developer-docs.amazon.com/sp-api/docs/reports-api-v2021-06-30-reference"},"Inventory Ledger Report - Summary View"))),(0,n.kt)("h2",{id:"report-options"},"Report options"),(0,n.kt)("p",null,"Make sure to configure the ",(0,n.kt)("a",{parentName:"p",href:"https://developer-docs.amazon.com/sp-api/docs/report-type-values"},"required parameters")," in the report options setting for the reports configured."),(0,n.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Integration Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Airbyte Type"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"int"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"float"),", ",(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"date")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"date"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"datetime")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"datetime"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"array"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"object"))))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.28")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18283"},"#","18283")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added multiple (22) report types")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.26")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16629"},"#","16629")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Report API version to 2021-06-30, added multiple (5) report types")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.25")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15063"},"#","15063")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add Restock Inventory Report")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.24")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14625"},"#","14625")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add FBA Storage Fees Report")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.23")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13604"},"#","13604")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add new streams: Fullfiments returns and Settlement reports")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.22")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13633"},"#","13633")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix - handle start date for financial stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.21")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13364"},"#","13364")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add financial streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.20")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13059"},"#","13059")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add replication end date to config")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.19")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-24"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13119"},"#","13119")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add OAuth2.0 support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.18")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12663"},"#","12663")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add GET_XML_BROWSE_TREE_DATA report")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.17")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12946"},"#","12946")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add throttling exception managing in Orders streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.16")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-04"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12523"},"#","12523")),(0,n.kt)("td",{parentName:"tr",align:"left"},"allow to use IAM user arn or IAM role arn")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.15")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-25"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9789"},"#","9789")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add stream FbaReplacementsReports")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.14")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9621"},"#","9621")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add GET_FLAT_FILE_ALL_ORDERS_DATA_BY_LAST_UPDATE_GENERAL report")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.13")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9581"},"#","9581")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change createdSince parameter to dataStartTime")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.12")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9312"},"#","9312")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add all remaining brand analytics report streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.11")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9115"},"#","9115")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix reading only 100 orders")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.10")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-31"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9236"},"#","9236")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix NoAuth deprecation warning")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.9")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9212"},"#","9212")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Normalize GET_SELLER_FEEDBACK_DATA header field names")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.8")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-22"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8810"},"#","8810")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix GET_SELLER_FEEDBACK_DATA Date cursor field format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.7")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/9002"},"#","9002")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Extract REPORTS_MAX_WAIT_SECONDS to configurable parameter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.6")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8179"},"#","8179")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT report")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.5")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8425"},"#","8425")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update title, description fields in spec")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.4")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8021"},"#","8021")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added GET_SELLER_FEEDBACK_DATA report with incremental sync capability")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.3")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7828"},"#","7828")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove datetime format from all streams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.2")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7752"},"#","7752")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Change ",(0,n.kt)("inlineCode",{parentName:"td"},"check_connection")," function to use stream Orders")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.1")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-09-17"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5248"},"#","5248")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Added extra stream support. Updated reports streams logics"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.2.0")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-08-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4863"},"#","4863")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Rebuild source with airbyte-cdk"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.3")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4288"},"#","4288")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Bugfix failing connection check"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"0.1.2")),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4108"},"#","4108")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Fixed: Sync fails with timeout when create report is CANCELLED"))))))}s.isMDXComponent=!0}}]);