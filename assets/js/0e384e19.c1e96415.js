"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[671],{5318:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,k=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(k,i(i({ref:t},l),{},{components:r})):n.createElement(k,i({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1012:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var n=r(5773),a=r(808),o=(r(7378),r(5318)),i=["components"],c={sidebar_position:1,slug:"/"},s="StarkNet React",p={unversionedId:"intro",id:"intro",title:"StarkNet React",description:"StarkNet React is a collection of React hooks for StarkNet. It is inspired by",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/starknet-react/",editUrl:"https://github.com/auclantis/starknet-react/tree/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"useStarknet",permalink:"/starknet-react/hooks/starknet"}},l=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Support and Feedback",id:"support-and-feedback",children:[],level:2},{value:"License",id:"license",children:[],level:2}],u={toc:l};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"starknet-react"},"StarkNet React"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"StarkNet React")," is a collection of React hooks for StarkNet. It is inspired by\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tmm/wagmi"},"wagmi"),", powered by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/0xs34n/starknet.js"},"starknet.js"),"."),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add ",(0,o.kt)("inlineCode",{parentName:"li"},"@starknet-react/core")," to your dependencies.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn add @starknet-react/core\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Wrap your app with ",(0,o.kt)("inlineCode",{parentName:"li"},"StarknetProvider"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { StarknetProvider } from '@starknet-react/core'\n\nfunction App() {\n  return (\n    <StarknetProvider>\n      <YourApp />\n    </StarknetProvider>\n  )\n}\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Access the hooks from your components.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { useStarknet } from '@starknet-react/core'\n\nfunction YourComponent() {\n  const { account } = useStarknet()\n\n  return <div>gm {account}</div>\n}\n")),(0,o.kt)("h2",{id:"support-and-feedback"},"Support and Feedback"),(0,o.kt)("p",null,"If you need help or you want to provide feedback, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/auclantis/starknet-react"},"create an issue or start a discussion\non GitHub"),"."),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"This library is licensed under the MIT license."))}d.isMDXComponent=!0}}]);