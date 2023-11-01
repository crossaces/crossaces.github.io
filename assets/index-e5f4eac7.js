import{r as u,R as ve,a as L}from"./react-43ab3c9e.js";import{r as ge}from"./react-dom-c58a95f5.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();var re={exports:{}},$={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=u,ye=Symbol.for("react.element"),be=Symbol.for("react.fragment"),Ce=Object.prototype.hasOwnProperty,Ee=xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,je={key:!0,ref:!0,__self:!0,__source:!0};function ae(e,t,n){var a,r={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(a in t)Ce.call(t,a)&&!je.hasOwnProperty(a)&&(r[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)r[a]===void 0&&(r[a]=t[a]);return{$$typeof:ye,type:e,key:i,ref:l,props:r,_owner:Ee.current}}$.Fragment=be;$.jsx=ae;$.jsxs=ae;re.exports=$;var d=re.exports,A={},G=ge;A.createRoot=G.createRoot,A.hydrateRoot=G.hydrateRoot;const we="modulepreload",Re=function(e){return"/"+e},X={},ie=function(t,n,a){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(i=>{if(i=Re(i),i in X)return;X[i]=!0;const l=i.endsWith(".css"),s=l?'[rel="stylesheet"]':"";if(!!a)for(let f=r.length-1;f>=0;f--){const h=r[f];if(h.href===i&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${s}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":we,l||(c.as="script",c.crossOrigin=""),c.href=i,document.head.appendChild(c),l)return new Promise((f,h)=>{c.addEventListener("load",f),c.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})};/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},U.apply(this,arguments)}var w;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(w||(w={}));const Y="popstate";function Pe(e){e===void 0&&(e={});function t(a,r){let{pathname:i,search:l,hash:s}=a.location;return D("",{pathname:i,search:l,hash:s},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(a,r){return typeof r=="string"?r:I(r)}return Ne(t,n,null,e)}function x(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function V(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Se(){return Math.random().toString(36).substr(2,8)}function Z(e,t){return{usr:e.state,key:e.key,idx:t}}function D(e,t,n,a){return n===void 0&&(n=null),U({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?N(t):t,{state:n,key:t&&t.key||a||Se()})}function I(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function N(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function Ne(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:i=!1}=a,l=r.history,s=w.Pop,o=null,c=f();c==null&&(c=0,l.replaceState(U({},l.state,{idx:c}),""));function f(){return(l.state||{idx:null}).idx}function h(){s=w.Pop;let p=f(),y=p==null?null:p-c;c=p,o&&o({action:s,location:m.location,delta:y})}function v(p,y){s=w.Push;let C=D(m.location,p,y);n&&n(C,p),c=f()+1;let E=Z(C,c),j=m.createHref(C);try{l.pushState(E,"",j)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;r.location.assign(j)}i&&o&&o({action:s,location:m.location,delta:1})}function b(p,y){s=w.Replace;let C=D(m.location,p,y);n&&n(C,p),c=f();let E=Z(C,c),j=m.createHref(C);l.replaceState(E,"",j),i&&o&&o({action:s,location:m.location,delta:0})}function g(p){let y=r.location.origin!=="null"?r.location.origin:r.location.href,C=typeof p=="string"?p:I(p);return x(y,"No window.location.(origin|href) available to create URL for href: "+C),new URL(C,y)}let m={get action(){return s},get location(){return e(r,l)},listen(p){if(o)throw new Error("A history only accepts one active listener");return r.addEventListener(Y,h),o=p,()=>{r.removeEventListener(Y,h),o=null}},createHref(p){return t(r,p)},createURL:g,encodeLocation(p){let y=g(p);return{pathname:y.pathname,search:y.search,hash:y.hash}},push:v,replace:b,go(p){return l.go(p)}};return m}var H;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(H||(H={}));function _e(e,t,n){n===void 0&&(n="/");let a=typeof t=="string"?N(t):t,r=J(a.pathname||"/",n);if(r==null)return null;let i=le(e);Le(i);let l=null;for(let s=0;l==null&&s<i.length;++s)l=Me(i[s],Fe(r));return l}function le(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let r=(i,l,s)=>{let o={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};o.relativePath.startsWith("/")&&(x(o.relativePath.startsWith(a),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(a.length));let c=R([a,o.relativePath]),f=n.concat(o);i.children&&i.children.length>0&&(x(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),le(i.children,t,f,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:Te(c,i.index),routesMeta:f})};return e.forEach((i,l)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))r(i,l);else for(let o of oe(i.path))r(i,l,o)}),t}function oe(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,r=n.endsWith("?"),i=n.replace(/\?$/,"");if(a.length===0)return r?[i,""]:[i];let l=oe(a.join("/")),s=[];return s.push(...l.map(o=>o===""?i:[i,o].join("/"))),r&&s.push(...l),s.map(o=>e.startsWith("/")&&o===""?"/":o)}function Le(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:We(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const Ue=/^:\w+$/,Oe=3,Ie=2,ke=1,Be=10,$e=-2,Q=e=>e==="*";function Te(e,t){let n=e.split("/"),a=n.length;return n.some(Q)&&(a+=$e),t&&(a+=Ie),n.filter(r=>!Q(r)).reduce((r,i)=>r+(Ue.test(i)?Oe:i===""?ke:Be),a)}function We(e,t){return e.length===t.length&&e.slice(0,-1).every((a,r)=>a===t[r])?e[e.length-1]-t[t.length-1]:0}function Me(e,t){let{routesMeta:n}=e,a={},r="/",i=[];for(let l=0;l<n.length;++l){let s=n[l],o=l===n.length-1,c=r==="/"?t:t.slice(r.length)||"/",f=Ae({path:s.relativePath,caseSensitive:s.caseSensitive,end:o},c);if(!f)return null;Object.assign(a,f.params);let h=s.route;i.push({params:a,pathname:R([r,f.pathname]),pathnameBase:Ke(R([r,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(r=R([r,f.pathnameBase]))}return i}function Ae(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=De(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:a.reduce((c,f,h)=>{if(f==="*"){let v=s[h]||"";l=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}return c[f]=ze(s[h]||"",f),c},{}),pathname:i,pathnameBase:l,pattern:e}}function De(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),V(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(l,s)=>(a.push(s),"/([^\\/]+)"));return e.endsWith("*")?(a.push("*"),r+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":e!==""&&e!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,t?void 0:"i"),a]}function Fe(e){try{return decodeURI(e)}catch(t){return V(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ze(e,t){try{return decodeURIComponent(e)}catch(n){return V(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function J(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function Ve(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?N(e):e;return{pathname:n?n.startsWith("/")?n:Je(n,t):t,search:qe(a),hash:Ge(r)}}function Je(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function M(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function se(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ce(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=N(e):(r=U({},e),x(!r.pathname||!r.pathname.includes("?"),M("?","pathname","search",r)),x(!r.pathname||!r.pathname.includes("#"),M("#","pathname","hash",r)),x(!r.search||!r.search.includes("#"),M("#","search","hash",r)));let i=e===""||r.pathname==="",l=i?"/":r.pathname,s;if(a||l==null)s=n;else{let h=t.length-1;if(l.startsWith("..")){let v=l.split("/");for(;v[0]==="..";)v.shift(),h-=1;r.pathname=v.join("/")}s=h>=0?t[h]:"/"}let o=Ve(r,s),c=l&&l!=="/"&&l.endsWith("/"),f=(i||l===".")&&n.endsWith("/");return!o.pathname.endsWith("/")&&(c||f)&&(o.pathname+="/"),o}const R=e=>e.join("/").replace(/\/\/+/g,"/"),Ke=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),qe=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ge=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Xe(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ue=["post","put","patch","delete"];new Set(ue);const Ye=["get",...ue];new Set(Ye);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k.apply(this,arguments)}const K=u.createContext(null),Ze=u.createContext(null),_=u.createContext(null),T=u.createContext(null),P=u.createContext({outlet:null,matches:[],isDataRoute:!1}),de=u.createContext(null);function He(e,t){let{relative:n}=t===void 0?{}:t;O()||x(!1);let{basename:a,navigator:r}=u.useContext(_),{hash:i,pathname:l,search:s}=he(e,{relative:n}),o=l;return a!=="/"&&(o=l==="/"?a:R([a,l])),r.createHref({pathname:o,search:s,hash:i})}function O(){return u.useContext(T)!=null}function W(){return O()||x(!1),u.useContext(T).location}function fe(e){u.useContext(_).static||u.useLayoutEffect(e)}function Qe(){let{isDataRoute:e}=u.useContext(P);return e?ft():et()}function et(){O()||x(!1);let e=u.useContext(K),{basename:t,navigator:n}=u.useContext(_),{matches:a}=u.useContext(P),{pathname:r}=W(),i=JSON.stringify(se(a).map(o=>o.pathnameBase)),l=u.useRef(!1);return fe(()=>{l.current=!0}),u.useCallback(function(o,c){if(c===void 0&&(c={}),!l.current)return;if(typeof o=="number"){n.go(o);return}let f=ce(o,JSON.parse(i),r,c.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:R([t,f.pathname])),(c.replace?n.replace:n.push)(f,c.state,c)},[t,n,i,r,e])}function kt(){let{matches:e}=u.useContext(P),t=e[e.length-1];return t?t.params:{}}function he(e,t){let{relative:n}=t===void 0?{}:t,{matches:a}=u.useContext(P),{pathname:r}=W(),i=JSON.stringify(se(a).map(l=>l.pathnameBase));return u.useMemo(()=>ce(e,JSON.parse(i),r,n==="path"),[e,i,r,n])}function tt(e,t){return nt(e,t)}function nt(e,t,n){O()||x(!1);let{navigator:a}=u.useContext(_),{matches:r}=u.useContext(P),i=r[r.length-1],l=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let o=W(),c;if(t){var f;let m=typeof t=="string"?N(t):t;s==="/"||(f=m.pathname)!=null&&f.startsWith(s)||x(!1),c=m}else c=o;let h=c.pathname||"/",v=s==="/"?h:h.slice(s.length)||"/",b=_e(e,{pathname:v}),g=ot(b&&b.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:R([s,a.encodeLocation?a.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:R([s,a.encodeLocation?a.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),r,n);return t&&g?u.createElement(T.Provider,{value:{location:k({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:w.Pop}},g):g}function rt(){let e=dt(),t=Xe(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:r},n):null,i)}const at=u.createElement(rt,null);class it extends u.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error||n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?u.createElement(P.Provider,{value:this.props.routeContext},u.createElement(de.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function lt(e){let{routeContext:t,match:n,children:a}=e,r=u.useContext(K);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),u.createElement(P.Provider,{value:t},a)}function ot(e,t,n){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),e==null){var r;if((r=n)!=null&&r.errors)e=n.matches;else return null}let i=e,l=(a=n)==null?void 0:a.errors;if(l!=null){let s=i.findIndex(o=>o.route.id&&(l==null?void 0:l[o.route.id]));s>=0||x(!1),i=i.slice(0,Math.min(i.length,s+1))}return i.reduceRight((s,o,c)=>{let f=o.route.id?l==null?void 0:l[o.route.id]:null,h=null;n&&(h=o.route.errorElement||at);let v=t.concat(i.slice(0,c+1)),b=()=>{let g;return f?g=h:o.route.Component?g=u.createElement(o.route.Component,null):o.route.element?g=o.route.element:g=s,u.createElement(lt,{match:o,routeContext:{outlet:s,matches:v,isDataRoute:n!=null},children:g})};return n&&(o.route.ErrorBoundary||o.route.errorElement||c===0)?u.createElement(it,{location:n.location,revalidation:n.revalidation,component:h,error:f,children:b(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):b()},null)}var me=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(me||{}),B=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(B||{});function st(e){let t=u.useContext(K);return t||x(!1),t}function ct(e){let t=u.useContext(Ze);return t||x(!1),t}function ut(e){let t=u.useContext(P);return t||x(!1),t}function pe(e){let t=ut(),n=t.matches[t.matches.length-1];return n.route.id||x(!1),n.route.id}function dt(){var e;let t=u.useContext(de),n=ct(B.UseRouteError),a=pe(B.UseRouteError);return t||((e=n.errors)==null?void 0:e[a])}function ft(){let{router:e}=st(me.UseNavigateStable),t=pe(B.UseNavigateStable),n=u.useRef(!1);return fe(()=>{n.current=!0}),u.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,k({fromRouteId:t},i)))},[e,t])}function ht(e){let{basename:t="/",children:n=null,location:a,navigationType:r=w.Pop,navigator:i,static:l=!1}=e;O()&&x(!1);let s=t.replace(/^\/*/,"/"),o=u.useMemo(()=>({basename:s,navigator:i,static:l}),[s,i,l]);typeof a=="string"&&(a=N(a));let{pathname:c="/",search:f="",hash:h="",state:v=null,key:b="default"}=a,g=u.useMemo(()=>{let m=J(c,s);return m==null?null:{location:{pathname:m,search:f,hash:h,state:v,key:b},navigationType:r}},[s,c,f,h,v,b,r]);return g==null?null:u.createElement(_.Provider,{value:o},u.createElement(T.Provider,{children:n,value:g}))}new Promise(()=>{});/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},F.apply(this,arguments)}function mt(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function pt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function vt(e,t){return e.button===0&&(!t||t==="_self")&&!pt(e)}const gt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],xt="startTransition",ee=ve[xt];function yt(e){let{basename:t,children:n,future:a,window:r}=e,i=u.useRef();i.current==null&&(i.current=Pe({window:r,v5Compat:!0}));let l=i.current,[s,o]=u.useState({action:l.action,location:l.location}),{v7_startTransition:c}=a||{},f=u.useCallback(h=>{c&&ee?ee(()=>o(h)):o(h)},[o,c]);return u.useLayoutEffect(()=>l.listen(f),[l,f]),u.createElement(ht,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:l})}const bt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ct=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,z=u.forwardRef(function(t,n){let{onClick:a,relative:r,reloadDocument:i,replace:l,state:s,target:o,to:c,preventScrollReset:f,unstable_viewTransition:h}=t,v=mt(t,gt),{basename:b}=u.useContext(_),g,m=!1;if(typeof c=="string"&&Ct.test(c)&&(g=c,bt))try{let E=new URL(window.location.href),j=c.startsWith("//")?new URL(E.protocol+c):new URL(c),S=J(j.pathname,b);j.origin===E.origin&&S!=null?c=S+j.search+j.hash:m=!0}catch{}let p=He(c,{relative:r}),y=Et(c,{replace:l,state:s,target:o,preventScrollReset:f,relative:r,unstable_viewTransition:h});function C(E){a&&a(E),E.defaultPrevented||y(E)}return u.createElement("a",F({},v,{href:g||p,onClick:m||i?a:C,ref:n,target:o}))});var te;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(te||(te={}));var ne;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ne||(ne={}));function Et(e,t){let{target:n,replace:a,state:r,preventScrollReset:i,relative:l,unstable_viewTransition:s}=t===void 0?{}:t,o=Qe(),c=W(),f=he(e,{relative:l});return u.useCallback(h=>{if(vt(h,n)){h.preventDefault();let v=a!==void 0?a:I(c)===I(f);o(e,{replace:v,state:r,preventScrollReset:i,relative:l,unstable_viewTransition:s})}},[c,o,f,a,r,n,e,i,l,s])}const q="/assets/logo-d7953db4.png",jt=()=>{const[e,t]=u.useState(""),n=i=>{const l=document.getElementById(i);t(i),l&&l.scrollIntoView({behavior:"smooth"})},[a,r]=u.useState(!1);return d.jsxs("div",{className:`navbar ${a?"ht-100-max":""}`,children:[d.jsx(z,{to:"/",children:d.jsxs("div",{onClick:()=>{n("myprofile")},className:"flex ml-10",children:[d.jsx("img",{src:q,alt:""}),d.jsx("p",{children:"Willou"})]})}),d.jsxs("div",{className:"menu-toggle",onClick:()=>r(!a),children:[d.jsx("div",{className:"bar1"}),d.jsx("div",{className:"bar mt-5"}),d.jsx("div",{className:"bar mt-5"})]}),d.jsxs("ul",{className:`menu ${a?"open animation-slide":""}`,children:[d.jsx("li",{className:`menu isClickAble animation-child 
          ${a?"open animation-slide":""}  
          ${e==="about"?"txt-secondaryS":"txt-default"} `,onClick:()=>{n("about")},children:"About"}),d.jsx("li",{className:`menu isClickAble animation-child 
          ${a?"open animation-slide":""}  
          ${e==="skill"?"txt-secondaryS":"txt-default"} `,onClick:()=>{n("skill")},children:"Skills"}),d.jsx("li",{className:`menu isClickAble animation-child 
          ${a?"open animation-slide":""}  
          ${e==="project"?"txt-secondaryS":"txt-default"} `,onClick:()=>{n("project")},children:"Projects"}),d.jsx("li",{className:`menu isClickAble animation-child 
          ${a?"open animation-slide":""}  
          ${e==="contact"?"txt-secondaryS":"txt-default"} `,onClick:()=>{n("contact")},children:"Contacts"})]}),d.jsx("div",{className:`menu mr-10 ${a?"open animation-slide ptb-10":""}`,children:d.jsx(z,{to:"/myblog",children:d.jsx("button",{className:"primary-filled-btn plr-40 animation-child",children:"My Blog"})})})]})},wt=()=>d.jsxs("div",{className:"footer txt-primary",children:[d.jsx("p",{className:"fw-500 fz-20",children:"Copyright ©2023"}),d.jsxs("div",{className:"fullCenter-flex mt-5",children:[d.jsx("img",{src:q,alt:""}),d.jsx("p",{className:"fz-11 fw-500 ml-5",children:"Willou"})]})]}),Rt=({children:e})=>d.jsxs("div",{children:[d.jsx(jt,{}),d.jsx("main",{children:e}),d.jsx(wt,{})]}),Pt="/assets/FotoProfile-1f3c14ee.png",St=()=>{const t="https://drive.google.com/uc?export=download&id=1YWMrSLXV3SJHF9hUHJvDTJfz4ZKtCUvC",n=a=>{const r=document.getElementById(a);r&&r.scrollIntoView({behavior:"smooth"})};return d.jsxs(Rt,{children:[d.jsx("section",{children:d.jsx("div",{id:"myprofile",className:"background-section-first",children:d.jsx("div",{className:"container-layout fullCenter-flex",children:d.jsxs("div",{className:"fullCenter-flex isWrap home-layout",children:[d.jsx("div",{className:"wd-800-max",children:d.jsx("img",{className:"wd-600-max obj-fit-cover",src:Pt,alt:""})}),d.jsxs("div",{className:"txt-left mr-500",children:[d.jsx("p",{className:"isBold fz-40 txt-default mt-20",children:"I'm William"}),d.jsx("p",{className:"fw-500 fz-40 txt-secondaryS mt-20 typewriter",children:" A Software Engineer"}),d.jsx("button",{className:"primary-outlined-btn plr-40 mt-20 isBold",onClick:()=>{n("about")},children:"About Me"})]})]})})})}),d.jsx("section",{id:"about",children:d.jsx("div",{className:"background-section-second",children:d.jsx("div",{className:"container-layout-50 fullCenter-flex",children:d.jsxs("div",{className:"fullCenter-flex resume wd-1000-max rd-10 ",children:[d.jsx("div",{className:"p-20 columncenter-flex rd-ltlb-10 ht-300 wd-50-cent",children:d.jsx("img",{className:"square-300-max p-20",src:q,alt:""})}),d.jsxs("div",{className:"bg-gray-bg p-20 rd-rtrb-10 txt-secondaryS fw-500 txt-left center-flexColumn wd-600-max ht-300",children:[d.jsx("p",{className:"isBold fz-40 mb-10",children:"About Me"}),"Communication is my guiding principle in life, allowing me to understand individuals well and interact effectively. I have the ability to adapt to various types of people and collaborate effectively, facilitating the exchange of ideas and perspectives. When plans don't go as expected, I remain calm and tend to improvise. I am very enthusiastic about continuing to grow and gaining new experiences.",d.jsx(z,{to:t,children:d.jsx("button",{className:"secondary-filled-btn plr-20 animation-child mt-20",children:"My Resume"})})]})]})})})}),d.jsx("section",{id:"skill",children:d.jsx("div",{className:"background-section-third",children:d.jsx("div",{className:"container-layout"})})}),d.jsx("section",{id:"project",children:d.jsx("div",{className:"background-section-fourth",children:d.jsx("div",{className:"container-layout"})})}),d.jsx("section",{id:"contact",children:d.jsx("div",{className:"background-section-fifth",children:d.jsx("div",{className:"container-layout-50"})})})]})},Nt=L.lazy(()=>ie(()=>import("./index-fa8aa590.js"),["assets/index-fa8aa590.js","assets/react-43ab3c9e.js","assets/react-dom-c58a95f5.js"])),_t=L.lazy(()=>ie(()=>import("./_data_-a86c08c0.js"),["assets/_data_-a86c08c0.js","assets/react-43ab3c9e.js","assets/react-dom-c58a95f5.js"])),Lt=[{caseSensitive:!1,path:"/",element:L.createElement(St)},{caseSensitive:!1,path:"myblog",children:[{caseSensitive:!1,path:"",element:L.createElement(Nt)},{caseSensitive:!1,path:":data",element:L.createElement(_t)}]}],Ut=()=>d.jsx(u.Suspense,{children:tt(Lt)});A.createRoot(document.getElementById("root")).render(d.jsx(yt,{children:d.jsx(Ut,{})}));export{Rt as L,d as j,kt as u};
