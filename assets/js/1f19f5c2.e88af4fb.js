"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[65887],{35767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(83117),o=(n(67294),n(3905));const a={},i="Step 3: Define Inputs",c={unversionedId:"connector-development/tutorials/cdk-tutorial-python-http/define-inputs",id:"connector-development/tutorials/cdk-tutorial-python-http/define-inputs",title:"Step 3: Define Inputs",description:"Each connector declares the inputs it needs to read data from the underlying data source. This is the Airbyte Protocol's spec operation.",source:"@site/../docs/connector-development/tutorials/cdk-tutorial-python-http/define-inputs.md",sourceDirName:"connector-development/tutorials/cdk-tutorial-python-http",slug:"/connector-development/tutorials/cdk-tutorial-python-http/define-inputs",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/define-inputs",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/connector-development/tutorials/cdk-tutorial-python-http/define-inputs.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Step 2: Install Dependencies",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/install-dependencies"},next:{title:"Step 4: Connection Checking",permalink:"/connector-development/tutorials/cdk-tutorial-python-http/connection-checking"}},s={},p=[],l={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"step-3-define-inputs"},"Step 3: Define Inputs"),(0,o.kt)("p",null,"Each connector declares the inputs it needs to read data from the underlying data source. This is the Airbyte Protocol's ",(0,o.kt)("inlineCode",{parentName:"p"},"spec")," operation."),(0,o.kt)("p",null,"The simplest way to implement this is by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.yaml")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"source_<name>/spec.yaml")," which describes your connector's inputs according to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-protocol/models/src/main/resources/airbyte_protocol/airbyte_protocol.yaml#L257"},"ConnectorSpecification")," schema. This is a good place to start when developing your source. Using JsonSchema, define what the inputs are ","(","e.g. username and password",")",". Here's ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/blob/master/airbyte-integrations/connectors/source-stripe/source_stripe/spec.yaml"},"an example")," of what the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.yaml")," looks like for the Stripe API source."),(0,o.kt)("p",null,"For more details on what the spec is, you can read about the Airbyte Protocol ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.io/understanding-airbyte/airbyte-protocol"},"here"),"."),(0,o.kt)("p",null,"The generated code that Airbyte provides, handles implementing the ",(0,o.kt)("inlineCode",{parentName:"p"},"spec")," method for you. It assumes that there will be a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.yaml")," in the same directory as ",(0,o.kt)("inlineCode",{parentName:"p"},"source.py"),". If you have declared the necessary JsonSchema in ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.yaml")," you should be done with this step."),(0,o.kt)("p",null,"Given that we'll pulling currency data for our example source, we'll define the following ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.yaml"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'documentationUrl: https://docs.airbyte.io/integrations/sources/exchangeratesapi\nconnectionSpecification:\n  $schema: http://json-schema.org/draft-07/schema#\n  title: Python Http Tutorial Spec\n  type: object\n  required:\n    - access_key\n    - start_date\n    - base\n  properties:\n    access_key:\n      type: string\n      description: API access key used to retrieve data from the Exchange Rates API.\n      airbyte_secret: true\n    start_date:\n      type: string\n      description: Start getting data from that date.\n      pattern: ^[0-9]{4}-[0-9]{2}-[0-9]{2}$\n      examples:\n        - "%Y-%m-%d"\n    base:\n      type: string\n      examples:\n        - USD\n        - EUR\n      description: "ISO reference currency. See <a href=\\"https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html\\">here</a>."\n')),(0,o.kt)("p",null,"In addition to metadata, we define two inputs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"access_key"),": The API access key used to authenticate requests to the API"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"start_date"),": The beginning date to start tracking currency exchange rates from"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"base"),": The currency whose rates we're interested in tracking")))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);