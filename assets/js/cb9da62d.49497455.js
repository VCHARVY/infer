"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[130],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),f=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=f(e.components);return t.createElement(u.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=f(n),m=o,d=s["".concat(u,".").concat(m)]||s[m]||l[m]||i;return n?t.createElement(d,c(c({ref:r},p),{},{components:n})):t.createElement(d,c({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=s;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var f=2;f<i;f++)c[f]=n[f];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2460:function(e,r,n){n.d(r,{Z:function(){return o}});var t=n(7294);function o(e){var r=e.url,n=(0,t.useState)({__html:""}),o=n[0],i=n[1];return(0,t.useEffect)((function(){fetch(r).then((function(e){return e.text()})).then((function(e){return i({__html:e})}))}),[r]),t.createElement("div",{dangerouslySetInnerHTML:o})}},9283:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return u},contentTitle:function(){return f},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var t=n(7462),o=n(3366),i=(n(7294),n(3905)),c=n(2460),a=["components"],u={id:"man-infer-report",title:"infer report"},f=void 0,p={unversionedId:"man-infer-report",id:"version-1.0.0/man-infer-report",title:"infer report",description:"",source:"@site/versioned_docs/version-1.0.0/man-infer-report.md",sourceDirName:".",slug:"/man-infer-report",permalink:"/docs/1.0.0/man-infer-report",tags:[],version:"1.0.0",frontMatter:{id:"man-infer-report",title:"infer report"},sidebar:"version-1.0.0/docs",previous:{title:"infer help",permalink:"/docs/1.0.0/man-infer-help"},next:{title:"infer reportdiff",permalink:"/docs/1.0.0/man-infer-reportdiff"}},l=[],s={toc:l};function m(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},s,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)(c.Z,{url:"/man/1.0.0/infer-report.1.html",mdxType:"HtmlWrap"}))}m.isMDXComponent=!0}}]);