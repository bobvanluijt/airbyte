"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[8461],{72029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(83117),r=(n(67294),n(3905));const o={},l="Deploy on Azure",i={unversionedId:"deploying-airbyte/on-azure-vm-cloud-shell",id:"deploying-airbyte/on-azure-vm-cloud-shell",title:"Deploy on Azure",description:"This page guides you through deploying Airbyte Open Source on a Microsoft Azure VM by setting up the deployment environment, installing and starting Airbyte, and connecting it to the VM.",source:"@site/../docs/deploying-airbyte/on-azure-vm-cloud-shell.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/on-azure-vm-cloud-shell",permalink:"/deploying-airbyte/on-azure-vm-cloud-shell",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/deploying-airbyte/on-azure-vm-cloud-shell.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Deploy on AWS (Amazon EC2)",permalink:"/deploying-airbyte/on-aws-ec2"},next:{title:"On GCP (Compute Engine)",permalink:"/deploying-airbyte/on-gcp-compute-engine"}},p={},s=[{value:"Set up the environment",id:"set-up-the-environment",level:2},{value:"Install and start Airbyte",id:"install-and-start-airbyte",level:2},{value:"Connect to Airbyte",id:"connect-to-airbyte",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-on-azure"},"Deploy on Azure"),(0,r.kt)("p",null,"This page guides you through deploying Airbyte Open Source on a Microsoft Azure VM by setting up the deployment environment, installing and starting Airbyte, and connecting it to the VM."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The instructions have been tested on a standard DS1 v2 (1 vcpu, 3.5 GiB memory) Microsoft Azure VM with Ubuntu 18.04.")),(0,r.kt)("h2",{id:"set-up-the-environment"},"Set up the environment"),(0,r.kt)("p",null,"Install Docker and Docker Compose in the VM:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/virtual-machines/"},"Create a new VM")," and ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/virtual-machines/ssh-keys-portal"},"generate the SSH keys")," to connect to the VM. You\u2019ll need the SSH keys to connect to the VM remotely later. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To connect to the VM, run the following command in the Azure Cloud Shell:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh <admin username>@<IP address>\n")),(0,r.kt)("p",{parentName:"li"},"If successfully connected to the VM, the working directory of Cloud Shell should look like this: ",(0,r.kt)("inlineCode",{parentName:"p"},"<admin username>@<virtual machine name>:~$"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To install Docker, run the following commands:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo apt-get update -y\nsudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release -y\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\necho "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli -y\nsudo usermod -a -G docker $USER\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"To install Docker Compose, run the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo wget https://github.com/docker/compose/releases/download/1.26.2/docker-compose-$(uname -s)-$(uname -m) -O /usr/local/bin/docker-compose\nsudo chmod +x /usr/local/bin/docker-compose\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check Docker Compose version:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose --version\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Close the SSH connection to ensure that the group modification is considered:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"logout\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Reconnect to the VM:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh <admin username>@<IP address>\n")))),(0,r.kt)("h2",{id:"install-and-start-airbyte"},"Install and start Airbyte"),(0,r.kt)("p",null,"Download Airbyte and deploy it in the VM using Docker Compose:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Ensure that you are connected to the VM:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh <admin username>@<IP address>\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create and use a new directory:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir airbyte\ncd airbyte\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Download Airbyte from GitHub: "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/airbytehq/airbyte/master/{.env,docker-compose.yaml}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start Airbyte by running the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker-compose up -d\n")),(0,r.kt)("p",{parentName:"li"},"This step takes about two minutes to complete. When done, you will see the cursor prompt."))),(0,r.kt)("h2",{id:"connect-to-airbyte"},"Connect to Airbyte"),(0,r.kt)("p",null,"Test a remote connection to your VM locally and verify that Airbyte is up and running."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your local machine, open a terminal. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to the folder where you stored the SSH key.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a SSH tunnel for ",(0,r.kt)("inlineCode",{parentName:"p"},"port 8000")," by typing the following command:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh -N -L 8000:localhost:8000 -i <your SSH key file> <admin username>@<IP address>\n")),(0,r.kt)("p",{parentName:"li"},"As a result, nothing happens. The cursor prompt keeps blinking.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a web browser and navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8000"),". You will see Airbyte\u2019s landing page. "))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"For security reasons, it is strongly recommended not to expose Airbyte on Internet available ports. Future versions will add support for SSL and authentication.")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you encounter any issues, reach out to our community on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.airbyte.com/"},"Slack"),"."))}u.isMDXComponent=!0},3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,y=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(y,l(l({ref:t},c),{},{components:n})):a.createElement(y,l({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);