import{S as nt,i as rt,s as at,a as ot,e as V,c as st,b as z,g as fe,t as B,d as ue,f as F,h as J,j as it,o as Ie,k as lt,l as ct,m as ft,n as be,p as D,q as ut,r as dt,u as ht,v as H,w as M,x as Ae,y as Y,z as X,A as ie}from"./chunks/index-c6029485.js";import{S as xe,I as q,g as We,f as ve,s as K,a as $e,i as pt,P as He,b as mt,c as gt}from"./chunks/singletons-1508938d.js";import{s as _t}from"./chunks/paths-a0eaa1c7.js";function wt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function yt(r){return r.split("%25").map(decodeURI).join("%25")}function bt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const vt=["href","pathname","search","searchParams","toString","toJSON"];function Et(r,e){const t=new URL(r);for(const s of vt){let o=t[s];Object.defineProperty(t,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return kt(t),t}function kt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const St="/__data.json";function Rt(r){return r.replace(/\/$/,"")+St}function Ot(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const de=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;te.delete(s)}return de(r,e)};const te=new Map;function It(r,e){const t=et(r,e),s=document.querySelector(t);if(s!=null&&s.textContent){const{body:o,...c}=JSON.parse(s.textContent),n=s.getAttribute("data-ttl");return n&&te.set(t,{body:o,init:c,ttl:1e3*Number(n)}),Promise.resolve(new Response(o,c))}return de(r,e)}function $t(r,e,t){if(te.size>0){const s=et(r,t),o=te.get(s);if(o){if(performance.now()<o.ttl)return new Response(o.body,o.init);te.delete(s)}}return de(e,t)}function et(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Ot(e.body)}"]`),s}const Lt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function jt(r){const e=[];return{pattern:r==="/"?/^\/$/:new RegExp(`^${At(r).map(s=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const c=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(c)return e.push({name:c[1],matcher:c[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const n=s.split(/\[(.+?)\](?!\])/);return"/"+n.map((g,p)=>{if(p%2){if(g.startsWith("x+"))return Ee(String.fromCharCode(parseInt(g.slice(2),16)));if(g.startsWith("u+"))return Ee(String.fromCharCode(...g.slice(2).split("-").map(C=>parseInt(C,16))));const _=Lt.exec(g);if(!_)throw new Error(`Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,b,S,U,j]=_;return e.push({name:U,matcher:j,optional:!!b,rest:!!S,chained:S?p===1&&n[0]==="":!1}),S?"(.*?)":b?"([^/]*)?":"([^/]+?)"}return Ee(g)}).join("")}).join("")}/?$`),params:e}}function Pt(r){return!/^\([^)]+\)$/.test(r)}function At(r){return r.slice(1).split("/").filter(Pt)}function Nt(r,e,t){const s={},o=r.slice(1);let c="";for(let n=0;n<e.length;n+=1){const u=e[n];let g=o[n];if(u.chained&&u.rest&&c&&(g=g?c+"/"+g:c),c="",g===void 0)u.rest&&(s[u.name]="");else{if(u.matcher&&!t[u.matcher](g)){if(u.optional&&u.chained){let p=o.indexOf(void 0,n);if(p===-1){const _=e[n+1];if((_==null?void 0:_.rest)&&_.chained)c=g;else return}for(;p>=n;)o[p]=o[p-1],p-=1;continue}return}s[u.name]=g}}if(!c)return s}function Ee(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut(r,e,t,s){const o=new Set(e);return Object.entries(t).map(([u,[g,p,_]])=>{const{pattern:b,params:S}=jt(u),U={id:u,exec:j=>{const C=b.exec(j);if(C)return Nt(C,S,s)},errors:[1,..._||[]].map(j=>r[j]),layouts:[0,...p||[]].map(n),leaf:c(g)};return U.errors.length=U.layouts.length=Math.max(U.errors.length,U.layouts.length),U});function c(u){const g=u<0;return g&&(u=~u),[g,r[u]]}function n(u){return u===void 0?u:[o.has(u),r[u]]}}function Tt(r){let e,t,s;var o=r[0][0];function c(n){return{props:{data:n[2],form:n[1]}}}return o&&(e=H(o,c(r))),{c(){e&&M(e.$$.fragment),t=V()},l(n){e&&Ae(e.$$.fragment,n),t=V()},m(n,u){e&&Y(e,n,u),z(n,t,u),s=!0},p(n,u){const g={};if(u&4&&(g.data=n[2]),u&2&&(g.form=n[1]),o!==(o=n[0][0])){if(e){fe();const p=e;B(p.$$.fragment,1,0,()=>{X(p,1)}),ue()}o?(e=H(o,c(n)),M(e.$$.fragment),F(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i(n){s||(e&&F(e.$$.fragment,n),s=!0)},o(n){e&&B(e.$$.fragment,n),s=!1},d(n){n&&J(t),e&&X(e,n)}}}function Dt(r){let e,t,s;var o=r[0][0];function c(n){return{props:{data:n[2],$$slots:{default:[qt]},$$scope:{ctx:n}}}}return o&&(e=H(o,c(r))),{c(){e&&M(e.$$.fragment),t=V()},l(n){e&&Ae(e.$$.fragment,n),t=V()},m(n,u){e&&Y(e,n,u),z(n,t,u),s=!0},p(n,u){const g={};if(u&4&&(g.data=n[2]),u&523&&(g.$$scope={dirty:u,ctx:n}),o!==(o=n[0][0])){if(e){fe();const p=e;B(p.$$.fragment,1,0,()=>{X(p,1)}),ue()}o?(e=H(o,c(n)),M(e.$$.fragment),F(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i(n){s||(e&&F(e.$$.fragment,n),s=!0)},o(n){e&&B(e.$$.fragment,n),s=!1},d(n){n&&J(t),e&&X(e,n)}}}function qt(r){let e,t,s;var o=r[0][1];function c(n){return{props:{data:n[3],form:n[1]}}}return o&&(e=H(o,c(r))),{c(){e&&M(e.$$.fragment),t=V()},l(n){e&&Ae(e.$$.fragment,n),t=V()},m(n,u){e&&Y(e,n,u),z(n,t,u),s=!0},p(n,u){const g={};if(u&8&&(g.data=n[3]),u&2&&(g.form=n[1]),o!==(o=n[0][1])){if(e){fe();const p=e;B(p.$$.fragment,1,0,()=>{X(p,1)}),ue()}o?(e=H(o,c(n)),M(e.$$.fragment),F(e.$$.fragment,1),Y(e,t.parentNode,t)):e=null}else o&&e.$set(g)},i(n){s||(e&&F(e.$$.fragment,n),s=!0)},o(n){e&&B(e.$$.fragment,n),s=!1},d(n){n&&J(t),e&&X(e,n)}}}function Me(r){let e,t=r[5]&&Ye(r);return{c(){e=lt("div"),t&&t.c(),this.h()},l(s){e=ct(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ft(e);t&&t.l(o),o.forEach(J),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(s,o){z(s,e,o),t&&t.m(e,null)},p(s,o){s[5]?t?t.p(s,o):(t=Ye(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&J(e),t&&t.d()}}}function Ye(r){let e;return{c(){e=ut(r[6])},l(t){e=dt(t,r[6])},m(t,s){z(t,e,s)},p(t,s){s&64&&ht(e,t[6])},d(t){t&&J(e)}}}function Ct(r){let e,t,s,o,c;const n=[Dt,Tt],u=[];function g(_,b){return _[0][1]?0:1}e=g(r),t=u[e]=n[e](r);let p=r[4]&&Me(r);return{c(){t.c(),s=ot(),p&&p.c(),o=V()},l(_){t.l(_),s=st(_),p&&p.l(_),o=V()},m(_,b){u[e].m(_,b),z(_,s,b),p&&p.m(_,b),z(_,o,b),c=!0},p(_,[b]){let S=e;e=g(_),e===S?u[e].p(_,b):(fe(),B(u[S],1,1,()=>{u[S]=null}),ue(),t=u[e],t?t.p(_,b):(t=u[e]=n[e](_),t.c()),F(t,1),t.m(s.parentNode,s)),_[4]?p?p.p(_,b):(p=Me(_),p.c(),p.m(o.parentNode,o)):p&&(p.d(1),p=null)},i(_){c||(F(t),c=!0)},o(_){B(t),c=!1},d(_){u[e].d(_),_&&J(s),p&&p.d(_),_&&J(o)}}}function Vt(r,e,t){let{stores:s}=e,{page:o}=e,{components:c}=e,{form:n}=e,{data_0:u=null}=e,{data_1:g=null}=e;it(s.page.notify);let p=!1,_=!1,b=null;return Ie(()=>{const S=s.page.subscribe(()=>{p&&(t(5,_=!0),t(6,b=document.title||"untitled page"))});return t(4,p=!0),S}),r.$$set=S=>{"stores"in S&&t(7,s=S.stores),"page"in S&&t(8,o=S.page),"components"in S&&t(0,c=S.components),"form"in S&&t(1,n=S.form),"data_0"in S&&t(2,u=S.data_0),"data_1"in S&&t(3,g=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[c,n,u,g,p,_,b,s,o]}class Bt extends nt{constructor(e){super(),rt(this,e,Vt,Ct,at,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Jt=function(r,e){return new URL(r,e).href},Xe={},ke=function(e,t,s){if(!t||t.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(t.map(c=>{if(c=Jt(c,s),c in Xe)return;Xe[c]=!0;const n=c.endsWith(".css"),u=n?'[rel="stylesheet"]':"";if(!!s)for(let _=o.length-1;_>=0;_--){const b=o[_];if(b.href===c&&(!n||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const p=document.createElement("link");if(p.rel=n?"stylesheet":Ft,n||(p.as="script",p.crossOrigin=""),p.href=c,document.head.appendChild(p),n)return new Promise((_,b)=>{p.addEventListener("load",_),p.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${c}`)))})})).then(()=>e())},Gt={},he=[()=>ke(()=>import("./chunks/0-34f48d46.js"),["./chunks\\0-34f48d46.js","./components\\layout.svelte-6b6a3b05.js","./chunks\\index-c6029485.js"],import.meta.url),()=>ke(()=>import("./chunks/1-64b0f6fc.js"),["./chunks\\1-64b0f6fc.js","./components\\error.svelte-299a47af.js","./chunks\\index-c6029485.js","./chunks\\singletons-1508938d.js","./chunks\\paths-a0eaa1c7.js"],import.meta.url),()=>ke(()=>import("./chunks/2-c72a88c8.js"),["./chunks\\2-c72a88c8.js","./chunks\\_page-803d56e6.js","./components\\pages\\_page.svelte-020a80c1.js","./chunks\\index-c6029485.js","./chunks\\paths-a0eaa1c7.js","./assets\\_page-e623f82d.css"],import.meta.url)],Kt=[],zt={"/":[2]},Wt={handleError:({error:r})=>{console.error(r)}};class Le{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ze{constructor(e,t){this.status=e,this.location=t}}async function Ht(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Mt=-1,Yt=-2,Xt=-3,Zt=-4,Qt=-5,xt=-6;function en(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,t=Array(e.length);function s(o,c=!1){if(o===Mt)return;if(o===Xt)return NaN;if(o===Zt)return 1/0;if(o===Qt)return-1/0;if(o===xt)return-0;if(c)throw new Error("Invalid input");if(o in t)return t[o];const n=e[o];if(!n||typeof n!="object")t[o]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":t[o]=new Date(n[1]);break;case"Set":const g=new Set;t[o]=g;for(let b=1;b<n.length;b+=1)g.add(s(n[b]));break;case"Map":const p=new Map;t[o]=p;for(let b=1;b<n.length;b+=2)p.set(s(n[b]),s(n[b+1]));break;case"RegExp":t[o]=new RegExp(n[1],n[2]);break;case"Object":t[o]=Object(n[1]);break;case"BigInt":t[o]=BigInt(n[1]);break;case"null":const _=Object.create(null);t[o]=_;for(let b=1;b<n.length;b+=2)_[n[b]]=s(n[b+1]);break}else{const u=new Array(n.length);t[o]=u;for(let g=0;g<n.length;g+=1){const p=n[g];p!==Yt&&(u[g]=s(p))}}else{const u={};t[o]=u;for(const g in n){const p=n[g];u[g]=s(p)}}return t[o]}return s(0)}const Se=Ut(he,Kt,zt,Gt),je=he[0],Pe=he[1];je();Pe();let ne={};try{ne=JSON.parse(sessionStorage[xe])}catch{}function Re(r){ne[r]=$e()}function tn({target:r,base:e}){var Ge;const t=[];let s=null;const o={before_navigate:[],after_navigate:[]};let c={branch:[],error:null,url:null},n=!1,u=!1,g=!0,p=!1,_=!1,b=!1,S=!1,U,j=(Ge=history.state)==null?void 0:Ge[q];j||(j=Date.now(),history.replaceState({...history.state,[q]:j},"",location.href));const C=ne[j];C&&(history.scrollRestoration="manual",scrollTo(C.x,C.y));let G,Ne,re;async function Ue(){re=re||Promise.resolve(),await re,re=null;const a=new URL(location.href),i=_e(a,!0);s=null,await De(i,a,[])}async function pe(a,{noScroll:i=!1,replaceState:l=!1,keepFocus:f=!1,state:d={},invalidateAll:m=!1},h,v){return typeof a=="string"&&(a=new URL(a,We(document))),we({url:a,scroll:i?$e():null,keepfocus:f,redirect_chain:h,details:{state:d,replaceState:l},nav_token:v,accepted:()=>{m&&(S=!0)},blocked:()=>{},type:"goto"})}async function Te(a){const i=_e(a,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return s={id:i.id,promise:Ve(i).then(l=>(l.type==="loaded"&&l.state.error&&(s=null),l))},s.promise}async function ae(...a){const l=Se.filter(f=>a.some(d=>f.exec(d))).map(f=>Promise.all([...f.layouts,f.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(l)}async function De(a,i,l,f,d={},m){var v,E;Ne=d;let h=a&&await Ve(a);if(h||(h=await Je(i,{id:null},await ee(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(a==null?void 0:a.url)||i,Ne!==d)return!1;if(h.type==="redirect")if(l.length>10||l.includes(i.pathname))h=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return pe(new URL(h.location,i).href,{},[...l,i.pathname],d),!1;else((E=(v=h.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await K.updated.check()&&await se(i);if(t.length=0,S=!1,p=!0,f&&f.details){const{details:y}=f,k=y.replaceState?0:1;y.state[q]=j+=k,history[y.replaceState?"replaceState":"pushState"](y.state,"",i)}if(s=null,u){c=h.state,h.props.page&&(h.props.page.url=i);const y=ce();U.$set(h.props),y()}else qe(h);if(f){const{scroll:y,keepfocus:k}=f;if(k||Oe(),await ie(),g){const O=i.hash&&document.getElementById(i.hash.slice(1));y?scrollTo(y.x,y.y):O?O.scrollIntoView():scrollTo(0,0)}}else await ie();g=!0,h.props.page&&(G=h.props.page),m&&m(),p=!1}function qe(a){var d,m;c=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),G=a.props.page;const l=ce();U=new Bt({target:r,props:{...a.props,stores:K},hydrate:!0}),l();const f={from:null,to:le("to",{params:c.params,route:{id:(m=(d=c.route)==null?void 0:d.id)!=null?m:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};o.after_navigate.forEach(h=>h(f)),u=!0}async function Z({url:a,params:i,branch:l,status:f,error:d,route:m,form:h}){var A;const v=l.filter(Boolean);let E="never";for(const I of l)(I==null?void 0:I.slash)!==void 0&&(E=I.slash);a.pathname=wt(a.pathname,E),a.search=a.search;const y={type:"loaded",state:{url:a,params:i,branch:l,error:d,route:m},props:{components:v.map(I=>I.node.component)}};h!==void 0&&(y.props.form=h);let k={},O=!G;for(let I=0;I<v.length;I+=1){const P=v[I];k={...k,...P.data},(O||!c.branch.some(T=>T===P))&&(y.props[`data_${I}`]=k,O=O||Object.keys((A=P.data)!=null?A:{}).length>0)}if(O||(O=Object.keys(G.data).length!==Object.keys(k).length),!c.url||a.href!==c.url.href||c.error!==d||h!==void 0||O){y.props.page={error:d,params:i,route:m,status:f,url:new URL(a),form:h,data:O?k:G.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const I=(P,T)=>{Object.defineProperty(y.props.page,P,{get:()=>{throw new Error(`$page.${P} has been replaced by $page.url.${T}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return y}async function me({loader:a,parent:i,url:l,params:f,route:d,server_data_node:m}){var y,k,O,N,A,I,P;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let T=function(...w){for(const R of w){const{href:$}=new URL(R,l);v.dependencies.add($)}};const Q={route:{get id(){return v.route=!0,d.id}},params:new Proxy(f,{get:(w,R)=>(v.params.add(R),w[R])}),data:(k=m==null?void 0:m.data)!=null?k:null,url:Et(l,()=>{v.url=!0}),async fetch(w,R){let $;w instanceof Request?($=w.url,R={body:w.method==="GET"||w.method==="HEAD"?void 0:await w.blob(),cache:w.cache,credentials:w.credentials,headers:w.headers,integrity:w.integrity,keepalive:w.keepalive,method:w.method,mode:w.mode,redirect:w.redirect,referrer:w.referrer,referrerPolicy:w.referrerPolicy,signal:w.signal,...R}):$=w;const L=new URL($,l).href;return T(L),u?$t($,L,R):It($,R)},setHeaders:()=>{},depends:T,parent(){return v.parent=!0,i()}};Object.defineProperties(Q,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=(O=await E.shared.load.call(null,Q))!=null?O:null,h=h?await Ht(h):null}return{node:E,loader:a,server:m,shared:(N=E.shared)!=null&&N.load?{type:"data",data:h,uses:v}:null,data:(A=h!=null?h:m==null?void 0:m.data)!=null?A:null,slash:(P=(I=E.shared)==null?void 0:I.trailingSlash)!=null?P:m==null?void 0:m.slash}}function Ce(a,i,l,f,d){if(S)return!0;if(!f)return!1;if(f.parent&&a||f.route&&i||f.url&&l)return!0;for(const m of f.params)if(d[m]!==c.params[m])return!0;for(const m of f.dependencies)if(t.some(h=>h(new URL(m))))return!0;return!1}function ge(a,i){var l,f;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((l=a.uses.dependencies)!=null?l:[]),params:new Set((f=a.uses.params)!=null?f:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"&&i!=null?i:null}async function Ve({id:a,invalidating:i,url:l,params:f,route:d}){var Q;if((s==null?void 0:s.id)===a)return s.promise;const{errors:m,layouts:h,leaf:v}=d,E=[...h,v];m.forEach(w=>w==null?void 0:w().catch(()=>{})),E.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const k=c.url?a!==c.url.pathname+c.url.search:!1,O=c.route?a!==c.route.id:!1,N=E.reduce((w,R,$)=>{var x;const L=c.branch[$],W=!!(R!=null&&R[0])&&((L==null?void 0:L.loader)!==R[1]||Ce(w.some(Boolean),O,k,(x=L.server)==null?void 0:x.uses,f));return w.push(W),w},[]);if(N.some(Boolean)){try{y=await Qe(l,N)}catch(w){return oe({status:500,error:await ee(w,{url:l,params:f,route:{id:d.id}}),url:l,route:d})}if(y.type==="redirect")return y}const A=y==null?void 0:y.nodes;let I=!1;const P=E.map(async(w,R)=>{var x;if(!w)return;const $=c.branch[R],L=A==null?void 0:A[R];if((!L||L.type==="skip")&&w[1]===($==null?void 0:$.loader)&&!Ce(I,O,k,(x=$.shared)==null?void 0:x.uses,f))return $;if(I=!0,(L==null?void 0:L.type)==="error")throw L;return me({loader:w[1],url:l,params:f,route:d,parent:async()=>{var ze;const Ke={};for(let ye=0;ye<R;ye+=1)Object.assign(Ke,(ze=await P[ye])==null?void 0:ze.data);return Ke},server_data_node:ge(L===void 0&&w[0]?{type:"skip"}:L!=null?L:null,$==null?void 0:$.server)})});for(const w of P)w.catch(()=>{});const T=[];for(let w=0;w<E.length;w+=1)if(E[w])try{T.push(await P[w])}catch(R){if(R instanceof Ze)return{type:"redirect",location:R.location};let $=500,L;A!=null&&A.includes(R)?($=(Q=R.status)!=null?Q:$,L=R.error):R instanceof Le?($=R.status,L=R.body):L=await ee(R,{params:f,url:l,route:{id:d.id}});const W=await Be(w,T,m);return W?await Z({url:l,params:f,branch:T.slice(0,W.idx).concat(W.node),status:$,error:L,route:d}):await Je(l,{id:d.id},L,$)}else T.push(void 0);return await Z({url:l,params:f,branch:T,status:200,error:null,route:d,form:i?void 0:null})}async function Be(a,i,l){for(;a--;)if(l[a]){let f=a;for(;!i[f];)f-=1;try{return{idx:f+1,node:{node:await l[a](),loader:l[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:i,url:l,route:f}){var y;const d={},m=await je();let h=null;if(m.server)try{const k=await Qe(l,[!0]);if(k.type!=="data"||k.nodes[0]&&k.nodes[0].type!=="data")throw 0;h=(y=k.nodes[0])!=null?y:null}catch{(l.origin!==location.origin||l.pathname!==location.pathname||n)&&await se(l)}const v=await me({loader:je,url:l,params:d,route:f,parent:()=>Promise.resolve({}),server_data_node:ge(h)}),E={node:await Pe(),loader:Pe,shared:null,server:null,data:null};return await Z({url:l,params:d,branch:[v,E],status:a,error:i,route:null})}function _e(a,i){if(pt(a,e))return;const l=yt(a.pathname.slice(e.length)||"/");for(const f of Se){const d=f.exec(l);if(d)return{id:a.pathname+a.search,invalidating:i,route:f,params:bt(d),url:a}}}function Fe({url:a,type:i,intent:l,delta:f}){var v,E,y,k,O;let d=!1;const m={from:le("from",{params:c.params,route:{id:(E=(v=c.route)==null?void 0:v.id)!=null?E:null},url:c.url}),to:le("to",{params:(y=l==null?void 0:l.params)!=null?y:null,route:{id:(O=(k=l==null?void 0:l.route)==null?void 0:k.id)!=null?O:null},url:a}),willUnload:!l,type:i};f!==void 0&&(m.delta=f);const h={...m,cancel:()=>{d=!0}};return _||o.before_navigate.forEach(N=>N(h)),d?null:m}async function we({url:a,scroll:i,keepfocus:l,redirect_chain:f,details:d,type:m,delta:h,nav_token:v,accepted:E,blocked:y}){const k=_e(a,!1),O=Fe({url:a,type:m,delta:h,intent:k});if(!O){y();return}Re(j),E(),_=!0,u&&K.navigating.set(O),await De(k,a,f,{scroll:i,keepfocus:l,details:d},v,()=>{_=!1,o.after_navigate.forEach(N=>N(O)),K.navigating.set(null)})}async function Je(a,i,l,f){return a.origin===location.origin&&a.pathname===location.pathname&&!n?await oe({status:f,error:l,url:a,route:i}):await se(a)}function se(a){return location.href=a.href,new Promise(()=>{})}function tt(){let a;r.addEventListener("mousemove",m=>{const h=m.target;clearTimeout(a),a=setTimeout(()=>{f(h,2)},20)});function i(m){f(m.composedPath()[0],1)}r.addEventListener("mousedown",i),r.addEventListener("touchstart",i,{passive:!0});const l=new IntersectionObserver(m=>{for(const h of m)h.isIntersecting&&(ae(new URL(h.target.href).pathname),l.unobserve(h.target))},{threshold:0});function f(m,h){const{url:v,options:E,external:y}=ve(m,e);y||(h<=E.preload_data?Te(v):h<=E.preload_code&&ae(v.pathname))}function d(){l.disconnect();for(const m of r.querySelectorAll("a")){const{url:h,external:v,options:E}=ve(m,e);v||(E.preload_code===He.viewport&&l.observe(m),E.preload_code===He.eager&&ae(h.pathname))}}o.after_navigate.push(d),d()}return{after_navigate:a=>{Ie(()=>(o.after_navigate.push(a),()=>{const i=o.after_navigate.indexOf(a);o.after_navigate.splice(i,1)}))},before_navigate:a=>{Ie(()=>(o.before_navigate.push(a),()=>{const i=o.before_navigate.indexOf(a);o.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(p||!u)&&(g=!1)},goto:(a,i={})=>{if("keepfocus"in i&&!("keepFocus"in i))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in i&&!("noScroll"in i))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return pe(a,i,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")t.push(a);else{const{href:i}=new URL(a,location.href);t.push(l=>l.href===i)}return Ue()},invalidateAll:()=>(S=!0,Ue()),preload_data:async a=>{const i=new URL(a,We(document));await Te(i)},preload_code:ae,apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:l,route:f}=c;if(!f)return;const d=await Be(c.branch.length,l,f.errors);if(d){const m=await Z({url:i,params:c.params,branch:l.slice(0,d.idx).concat(d.node),status:500,error:a.error,route:f});c=m.state;const h=ce();U.$set(m.props),h(),ie().then(Oe)}}else if(a.type==="redirect")pe(a.location,{invalidateAll:!0},[]);else{const i={form:a.data,page:{...G,form:a.data,status:a.status}},l=ce();U.$set(i),l(),a.type==="success"&&ie().then(Oe)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var f,d;let l=!1;if(!_){const m={from:le("from",{params:c.params,route:{id:(d=(f=c.route)==null?void 0:f.id)!=null?d:null},url:c.url}),to:null,willUnload:!0,type:"leave",cancel:()=>l=!0};o.before_navigate.forEach(h=>h(m))}l?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(j);try{sessionStorage[xe]=JSON.stringify(ne)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||tt(),r.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:l,url:f,options:d,has:m}=ve(i.composedPath()[0],e);if(!l||!f||!(l instanceof SVGAElement)&&f.protocol!==location.protocol&&!(f.protocol==="https:"||f.protocol==="http:")||m.download)return;if(d.reload||m.rel_external||m.target){Fe({url:f,type:"link"})||i.preventDefault(),_=!0;return}const[v,E]=f.href.split("#");if(E!==void 0&&v===location.href.split("#")[0]){b=!0,Re(j),c.url=f,K.page.set({...G,url:f}),K.page.notify();return}we({url:f,scroll:d.noscroll?$e():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:f.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{var l;if((l=i.state)!=null&&l[q]){if(i.state[q]===j)return;const f=i.state[q]-j;we({url:new URL(location.href),scroll:ne[i.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=i.state[q]},blocked:()=>{history.go(-f)},type:"popstate",delta:f})}}),addEventListener("hashchange",()=>{b&&(b=!1,history.replaceState({...history.state,[q]:++j},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:l,params:f,route:d,data:m,form:h})=>{var y;n=!0;const v=new URL(location.href);let E;try{const k=l.map(async(O,N)=>{const A=m[N];return me({loader:he[O],url:v,params:f,route:d,parent:async()=>{const I={};for(let P=0;P<N;P+=1)Object.assign(I,(await k[P]).data);return I},server_data_node:ge(A)})});E=await Z({url:v,params:f,branch:await Promise.all(k),status:a,error:i,form:h,route:(y=Se.find(({id:O})=>O===d.id))!=null?y:null})}catch(k){if(k instanceof Ze){await se(new URL(k.location,location.href));return}E=await oe({status:k instanceof Le?k.status:500,error:await ee(k,{url:v,params:f,route:d}),url:v,route:d})}qe(E)}}}async function Qe(r,e){var c;const t=new URL(r);t.pathname=Rt(r.pathname);const s=await de(t.href,{headers:{"x-sveltekit-invalidated":e.map(n=>n?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return(c=o.nodes)==null||c.forEach(n=>{var u,g;(n==null?void 0:n.type)==="data"&&(n.data=en(n.data),n.uses={dependencies:new Set((u=n.uses.dependencies)!=null?u:[]),params:new Set((g=n.uses.params)!=null?g:[]),parent:!!n.uses.parent,route:!!n.uses.route,url:!!n.uses.url})}),o}function ee(r,e){var t;return r instanceof Le?r.body:(t=Wt.handleError({error:r,event:e}))!=null?t:{message:e.route.id!=null?"Internal Error":"Not Found"}}const nn=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function le(r,e){for(const t of nn)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function ce(){return()=>{}}function Oe(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function sn({env:r,hydrate:e,paths:t,target:s,version:o}){_t(t),gt(o);const c=tn({target:s,base:t.base});mt({client:c}),e?await c._hydrate(e):c.goto(location.href,{replaceState:!0}),c._start_router()}export{sn as start};
