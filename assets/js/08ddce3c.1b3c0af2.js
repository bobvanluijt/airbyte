"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[34749],{93420:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(83117),n=(r(67294),r(3905));const i={},o="Airbyte Security",s={unversionedId:"operator-guides/security",id:"operator-guides/security",title:"Airbyte Security",description:"Airbyte is committed to keeping your data safe by following industry-standard practices for securing physical deployments, setting access policies, and leveraging the security features of leading Cloud providers.",source:"@site/../docs/operator-guides/security.md",sourceDirName:"operator-guides",slug:"/operator-guides/security",permalink:"/operator-guides/security",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/security.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Config Database",permalink:"/understanding-airbyte/database-data-catalog"},next:{title:"API documentation",permalink:"/api-documentation"}},l={},c=[{value:"Securing your data",id:"securing-your-data",level:2},{value:"Technical Logs",id:"technical-logs",level:3},{value:"Configuration Metadata",id:"configuration-metadata",level:3},{value:"Sensitive Data\u200b",id:"sensitive-data",level:3},{value:"Securing Airbyte Open Source",id:"securing-airbyte-open-source",level:2},{value:"Network Security",id:"network-security",level:3},{value:"Credential management",id:"credential-management",level:3},{value:"Encryption",id:"encryption",level:3},{value:"Telemetry",id:"telemetry",level:3},{value:"Securing Airbyte Cloud",id:"securing-airbyte-cloud",level:2},{value:"Physical infrastructure",id:"physical-infrastructure",level:3},{value:"Network security",id:"network-security-1",level:3},{value:"Credential management",id:"credential-management-1",level:3},{value:"Encryption",id:"encryption-1",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Access Control",id:"access-control",level:3},{value:"Compliance",id:"compliance",level:3},{value:"Reporting Vulnerabilities\u200b",id:"reporting-vulnerabilities",level:2}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"airbyte-security"},"Airbyte Security"),(0,n.kt)("p",null,"Airbyte is committed to keeping your data safe by following industry-standard practices for securing physical deployments, setting access policies, and leveraging the security features of leading Cloud providers."),(0,n.kt)("p",null,"If you have any security concerns with Airbyte or believe you have uncovered a vulnerability, contact us at ",(0,n.kt)("a",{parentName:"p",href:"mailto:security@airbyte.io"},"security@airbyte.io")),(0,n.kt)("h2",{id:"securing-your-data"},"Securing your data"),(0,n.kt)("p",null,"Airbyte connectors operate as the data pipes moving data from Point A to point B: Extracting data from data sources (APIs, files, databases) and loading it into destination platforms (warehouses, data lakes) with optional transformation performed at the data destination. As soon as data is transferred from the source to the destination, it is purged from an Airbyte deployment."),(0,n.kt)("p",null,"An Airbyte deployment stores the following data:"),(0,n.kt)("h3",{id:"technical-logs"},"Technical Logs"),(0,n.kt)("p",null,"Technical logs are stored for troubleshooting purposes and may contain sensitive data based on the connection\u2019s ",(0,n.kt)("inlineCode",{parentName:"p"},"state")," data. If your connection is set to an Incremental sync mode, users choose which column is the cursor for their connection. While we strongly recommend a timestamp like an ",(0,n.kt)("inlineCode",{parentName:"p"},"updated_at")," column, users can choose any column they want to be the cursor."),(0,n.kt)("h3",{id:"configuration-metadata"},"Configuration Metadata"),(0,n.kt)("p",null,"Airbyte retains configuration details and data points such as table and column names for each integration."),(0,n.kt)("h3",{id:"sensitive-data"},"Sensitive Data\u200b"),(0,n.kt)("p",null,"As Airbyte is not aware of the data being transferred, users are required to follow the ",(0,n.kt)("a",{parentName:"p",href:"https://airbyte.com/terms"},"Terms of Services")," and are ultimately responsible for ensuring their data transfer is compliant with their jurisdiction."),(0,n.kt)("p",null,"For more information, see ",(0,n.kt)("a",{parentName:"p",href:"https://airbyte.com/privacy-policy"},"Airbyte\u2019s Privacy Policy")),(0,n.kt)("h2",{id:"securing-airbyte-open-source"},"Securing Airbyte Open Source"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Our security and reliability commitments are only applicable to Airbyte Cloud. Airbyte Open Source security and reliability depend on your development and production setups.")),(0,n.kt)("h3",{id:"network-security"},"Network Security"),(0,n.kt)("p",null,"Deploy Airbyte Open Source in a private network or use a firewall to filter which IP addresses are allowed to access your host. Airbyte Open Source currently does not include any user management or role-based access controls (RBAC) to prevent unauthorized access to the API or UI. Controlling who has access to the hardware and network your Airbyte deployment runs on is your responsibility."),(0,n.kt)("p",null,"You can secure access to Airbyte using the following methods:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deploy Airbyte in a private network or use a firewall to filter which IP is allowed to access your host."),(0,n.kt)("li",{parentName:"ul"},"Deploy Airbyte behind a reverse proxy and handle the access control on the reverse proxy side."),(0,n.kt)("li",{parentName:"ul"},"Change the default username and password in your environment's ",(0,n.kt)("inlineCode",{parentName:"li"},".env")," file:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'    # Proxy Configuration\n    # Set to empty values, e.g. "" to disable basic auth\n    BASIC_AUTH_USERNAME=your_new_username_here\n    BASIC_AUTH_PASSWORD=your_new_password_here\n'))),(0,n.kt)("li",{parentName:"ul"},"If you deployed Airbyte on a cloud provider:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"GCP: use the ",(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/iap"},"Identity-Aware proxy")," service"),(0,n.kt)("li",{parentName:"ul"},"AWS: use the ",(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager.html"},"AWS Systems Manager Session Manager")," service")))),(0,n.kt)("h3",{id:"credential-management"},"Credential management"),(0,n.kt)("p",null,"To allow you to configure syncs and connectors, Airbyte stores the credentials (like API Keys and passwords) you provide in the Airbyte application database. Make sure you protect the ",(0,n.kt)("a",{parentName:"p",href:"https://airbyte-public-api-docs.s3.us-east-2.amazonaws.com/rapidoc-api-docs.html"},"configuration management routes"),"."),(0,n.kt)("p",null,"If you\u2019re deploying Airbyte Open Source on GCP, you may use Google ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager"},"Secret Manager")," to store credentials instead of in the database:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Create a service account with Google Secret Manager with read/write access. Generate a JSON key."),(0,n.kt)("li",{parentName:"ol"},"In the Worker and Server applications, set the ",(0,n.kt)("inlineCode",{parentName:"li"},"SECRET_STORE_GCP_PROJECT_ID")," environment variable to the GCP project to which the credentials have access and secrets will be located."),(0,n.kt)("li",{parentName:"ol"},"In the Worker and Server applications, set the ",(0,n.kt)("inlineCode",{parentName:"li"},"SECRET_STORE_GCP_CREDENTIALS")," environment variable to the JSON key created in step 1."),(0,n.kt)("li",{parentName:"ol"},"In the Worker and Server applications, set the ",(0,n.kt)("inlineCode",{parentName:"li"},"SECRET_PERSISTENCE")," environment variable to ",(0,n.kt)("inlineCode",{parentName:"li"},"GOOGLE_SECRET_MANAGER"),".")),(0,n.kt)("p",null,"Note that this process is not reversible. Once you have converted to a secret store, you won\u2019t be able to reverse it."),(0,n.kt)("h3",{id:"encryption"},"Encryption"),(0,n.kt)("p",null,"Most Airbyte Open Source connectors support encryption-in-transit (SSL or HTTPS). We recommend configuring your connectors to use the encryption option whenever available."),(0,n.kt)("h3",{id:"telemetry"},"Telemetry"),(0,n.kt)("p",null,"Airbyte does send anonymized data to our services to improve the product (especially connector reliability and scale). To disable telemetry, modify the .env file and define the following environment variable:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"TRACKING_STRATEGY=logging\n")),(0,n.kt)("h2",{id:"securing-airbyte-cloud"},"Securing Airbyte Cloud"),(0,n.kt)("p",null,"Airbyte Cloud leverages the security features of leading Cloud providers and sets least-privilege access policies to ensure data security."),(0,n.kt)("h3",{id:"physical-infrastructure"},"Physical infrastructure"),(0,n.kt)("p",null,"Airbyte Cloud is currently deployed on GCP with all servers located in the United States. We use isolated pods to ensure your data is kept separate from other customers\u2019 data."),(0,n.kt)("p",null,"Only certain Airbyte staff can access Airbyte infrastructure and technical logs for deployments, upgrades, configuration changes, and troubleshooting."),(0,n.kt)("h3",{id:"network-security-1"},"Network security"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You may need to allowlist one of our IP addresses to enable access to Airbyte:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"34.106.109.131"),(0,n.kt)("li",{parentName:"ul"},"34.106.196.165"),(0,n.kt)("li",{parentName:"ul"},"34.106.60.246")))),(0,n.kt)("h3",{id:"credential-management-1"},"Credential management"),(0,n.kt)("p",null,"Most Airbyte Cloud connectors require keys, secrets, or passwords to allow the connectors to continually sync without prompting credentials on every refresh. Airbyte Cloud fetches credentials using HTTPS and stores them in Google Cloud\u2019s ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/secret-manager"},"Secret Manager"),". When persisting connector configurations to disk or the database, we store a version of the configuration that points to the secret in Google Secret Manager instead of the secret itself to limit the parts of the system interacting with secrets."),(0,n.kt)("h3",{id:"encryption-1"},"Encryption"),(0,n.kt)("p",null,"Since Airbyte Cloud only transfers data from source to destination and purges the data after the transfer is finished, data in transit is encrypted with TLS, and no in-store encryption is required for the data. Airbyte Cloud does store ",(0,n.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/1bN5NtW57umIcsticFqdhuvSQRfMuGQlijFClFQQFqL8/edit#heading=h.t0xpm320m2ar"},"customer metadata")," and encrypts it using GCP\u2019s encryption service with AES-256-bit encryption keys."),(0,n.kt)("p",null,"All Airbyte Cloud connectors (APIs, files, databases) pull data through encrypted channels (SSL, SSH tunnel, HTTPS), and the data transfer between our clients' infrastructure and Airbyte infrastructure is fully encrypted."),(0,n.kt)("h3",{id:"authentication"},"Authentication"),(0,n.kt)("p",null,"Airbyte Cloud allows you to log in to the platform using your email and password, Google account, or GitHub account."),(0,n.kt)("h3",{id:"access-control"},"Access Control"),(0,n.kt)("p",null,"Airbyte Cloud supports ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/managing-airbyte-cloud#add-users-to-your-workspace"},"user management")," but doesn\u2019t support role-based access control (RBAC) yet."),(0,n.kt)("h3",{id:"compliance"},"Compliance"),(0,n.kt)("p",null,"Our compliance efforts for Airbyte Cloud include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SOC 2 Type II assessment: An independent third-party completed a SOC2 Type II assessment and found effective operational controls in place. Independent third-party audits will continue at a regular cadence, and the most recent report is available upon request."),(0,n.kt)("li",{parentName:"ul"},"ISO 27001 certification: We are currently pursuing ISO 27001 certification and will continue to align the evolution of our security program with its standards as we grow."),(0,n.kt)("li",{parentName:"ul"},"Assessments and penetration tests: We use tools provided by the Cloud platforms as well as third-party assessments and penetration tests.")),(0,n.kt)("h2",{id:"reporting-vulnerabilities"},"Reporting Vulnerabilities\u200b"),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Do not file GitHub issues or post on our community Slack or forum for security vulnerabilities since they're public avenues and may lead to additional security concerns.")),(0,n.kt)("p",null,"Airbyte takes security issues very seriously. If you have any concerns about Airbyte or believe you have uncovered a vulnerability, contact us at ",(0,n.kt)("a",{parentName:"p",href:"mailto:security@airbyte.io"},"security@airbyte.io"),". In the message, try to describe the issue and a way to reproduce it. The security team will get back to you as soon as possible."),(0,n.kt)("p",null,"Use this security address only for undisclosed vulnerabilities. For fixed issues or general questions on how to use the security features, use the ",(0,n.kt)("a",{parentName:"p",href:"https://discuss.airbyte.io/"},"Discourse forum")," or ",(0,n.kt)("a",{parentName:"p",href:"https://slack.airbyte.com/"},"Community Slack"),"."),(0,n.kt)("p",null,"Please report any security problems to us before disclosing it publicly."))}d.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),y=n,m=p["".concat(l,".").concat(y)]||p[y]||d[y]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);