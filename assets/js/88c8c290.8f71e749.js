"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[86645],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=l(n),p=r,h=y["".concat(c,".").concat(p)]||y[p]||d[p]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},7504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={},i="Getting Started",s={unversionedId:"archive/faq/getting-started",id:"archive/faq/getting-started",title:"Getting Started",description:"What do I need to get started using Airbyte?",source:"@site/../docs/archive/faq/getting-started.md",sourceDirName:"archive/faq",slug:"/archive/faq/getting-started",permalink:"/archive/faq/getting-started",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/archive/faq/getting-started.md",tags:[],version:"current",frontMatter:{}},c={},l=[{value:"<strong>What do I need to get started using Airbyte?</strong>",id:"what-do-i-need-to-get-started-using-airbyte",level:2},{value:"<strong>How long does it take to set up Airbyte?</strong>",id:"how-long-does-it-take-to-set-up-airbyte",level:2},{value:"<strong>What data sources does Airbyte offer connectors for?</strong>",id:"what-data-sources-does-airbyte-offer-connectors-for",level:2},{value:"<strong>Where can I see my data in Airbyte?</strong>",id:"where-can-i-see-my-data-in-airbyte",level:2},{value:"<strong>Can I add multiple destinations?</strong>",id:"can-i-add-multiple-destinations",level:2},{value:"Am I limited to GUI interaction or is there a way to set up / run / interact with Airbyte programmatically?",id:"am-i-limited-to-gui-interaction-or-is-there-a-way-to-set-up--run--interact-with-airbyte-programmatically",level:2},{value:"How does Airbyte handle connecting to databases that are behind a firewall / NAT?",id:"how-does-airbyte-handle-connecting-to-databases-that-are-behind-a-firewall--nat",level:2},{value:"Can I set a start time for my integration?",id:"can-i-set-a-start-time-for-my-integration",level:2},{value:"<strong>Can I disable analytics in Airbyte?</strong>",id:"can-i-disable-analytics-in-airbyte",level:2}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("h2",{id:"what-do-i-need-to-get-started-using-airbyte"},(0,r.kt)("strong",{parentName:"h2"},"What do I need to get started using Airbyte?")),(0,r.kt)("p",null,"You can deploy Airbyte in several ways, as ",(0,r.kt)("a",{parentName:"p",href:"/deploying-airbyte/"},"documented here"),". Airbyte will then help you replicate data between a source and a destination. Airbyte offers pre-built connectors for both, you can see their list ",(0,r.kt)("a",{parentName:"p",href:"/project-overview/changelog/connectors"},"here"),". If you don\u2019t see the connector you need, you can ",(0,r.kt)("a",{parentName:"p",href:"../../connector-development"},"build your connector yourself")," and benefit from Airbyte\u2019s optional scheduling, orchestration and monitoring modules."),(0,r.kt)("h2",{id:"how-long-does-it-take-to-set-up-airbyte"},(0,r.kt)("strong",{parentName:"h2"},"How long does it take to set up Airbyte?")),(0,r.kt)("p",null,"It depends on your source and destination. Check our setup guides to see the tasks for your source and destination. Each source and destination also has a list of prerequisites for setup. To make setup faster, get your prerequisites ready before you start to set up your connector. During the setup process, you may need to contact others ","(","like a database administrator or AWS account owner",")"," for help, which might slow you down. But if you have access to the connection information, it can take 2 minutes: see ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=jWVYpUV9vEg"},"demo video. ")),(0,r.kt)("h2",{id:"what-data-sources-does-airbyte-offer-connectors-for"},(0,r.kt)("strong",{parentName:"h2"},"What data sources does Airbyte offer connectors for?")),(0,r.kt)("p",null,"We already offer 100+ connectors, and will focus all our effort in ramping up the number of connectors and strengthening them. View the ",(0,r.kt)("a",{parentName:"p",href:"/project-overview/changelog/connectors"},"full list here"),". If you don\u2019t see a source you need, you can file a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new?assignees=&labels=area%2Fintegration%2C+new-integration&template=new-integration-request.md&title="},"connector request here"),"."),(0,r.kt)("h2",{id:"where-can-i-see-my-data-in-airbyte"},(0,r.kt)("strong",{parentName:"h2"},"Where can I see my data in Airbyte?")),(0,r.kt)("p",null,"You can\u2019t see your data in Airbyte, because we don\u2019t store it. The sync loads your data into your destination ","(","data warehouse, data lake, etc.",")",". While you can\u2019t see your data directly in Airbyte, you can check your schema and sync status on the source detail page in Airbyte."),(0,r.kt)("h2",{id:"can-i-add-multiple-destinations"},(0,r.kt)("strong",{parentName:"h2"},"Can I add multiple destinations?")),(0,r.kt)("p",null,'Sure, you can. Just go to the "Destinations" section and click on the top right "+ new destination" button. You can have multiple destinations for the same source, and multiple sources for the same destination.'),(0,r.kt)("h2",{id:"am-i-limited-to-gui-interaction-or-is-there-a-way-to-set-up--run--interact-with-airbyte-programmatically"},"Am I limited to GUI interaction or is there a way to set up / run / interact with Airbyte programmatically?"),(0,r.kt)("p",null,"You can use the API to do anything you do today from the UI. Though, word of notice, the API is in alpha and may change. You won\u2019t lose any functionality, but you may need to update your code to catch up to any backwards incompatible changes in the API."),(0,r.kt)("h2",{id:"how-does-airbyte-handle-connecting-to-databases-that-are-behind-a-firewall--nat"},"How does Airbyte handle connecting to databases that are behind a firewall / NAT?"),(0,r.kt)("p",null,"We don\u2019t. Airbyte is to be self-hosted in your own private cloud."),(0,r.kt)("h2",{id:"can-i-set-a-start-time-for-my-integration"},"Can I set a start time for my integration?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../understanding-airbyte/connections#sync-schedules"},"Here")," is the link to the docs on scheduling syncs."),(0,r.kt)("h2",{id:"can-i-disable-analytics-in-airbyte"},(0,r.kt)("strong",{parentName:"h2"},"Can I disable analytics in Airbyte?")),(0,r.kt)("p",null,"Yes, you can control what's sent outside of Airbyte for analytics purposes."),(0,r.kt)("p",null,"We added the following telemetry to Airbyte to ensure the best experience for users:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Measure usage of features & connectors"),(0,r.kt)("li",{parentName:"ul"},"Measure failure rate of connectors to address bugs quickly"),(0,r.kt)("li",{parentName:"ul"},"Reach out to our users about Airbyte community updates if they opt-in"),(0,r.kt)("li",{parentName:"ul"},"...")),(0,r.kt)("p",null,"To disable telemetry, modify the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file and define the two following environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"TRACKING_STRATEGY=logging\n")))}d.isMDXComponent=!0}}]);