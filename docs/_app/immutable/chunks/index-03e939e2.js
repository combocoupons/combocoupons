function m(){}function I(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function P(){return Object.create(null)}function y(t){t.forEach(D)}function S(t){return typeof t=="function"}function ut(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function W(t){return Object.keys(t).length===0}function G(t,...n){if(t==null)return m;const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function lt(t,n,e){t.$$.on_destroy.push(G(n,e))}function ft(t,n,e,i){if(t){const r=B(t,n,e,i);return t[0](r)}}function B(t,n,e,i){return t[1]&&i?I(e.ctx.slice(),t[1](i(n))):e.ctx}function at(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const l=[],s=Math.max(n.dirty.length,r.length);for(let o=0;o<s;o+=1)l[o]=n.dirty[o]|r[o];return l}return n.dirty|r}return n.dirty}function _t(t,n,e,i,r,l){if(r){const s=B(n,e,i,l);t.p(s,r)}}function dt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function ht(t){const n={};for(const e in t)e[0]!=="$"&&(n[e]=t[e]);return n}function mt(t,n){const e={};n=new Set(n);for(const i in t)!n.has(i)&&i[0]!=="$"&&(e[i]=t[i]);return e}function pt(t){const n={};for(const e in t)n[e]=!0;return n}function yt(t,n,e){return t.set(e),n}function gt(t){return t&&S(t.destroy)?t.destroy:m}let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=u?r+1:Q(1,r,x=>n[e[x]].claim_order,u))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const l=[],s=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(l.push(n[c-1]);o>=c;o--)s.push(n[o]);o--}for(;o>=0;o--)s.push(n[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(s[c],a)}}function U(t,n){if(v){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function xt(t,n,e){v&&!e?U(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function $t(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function bt(){return A(" ")}function wt(){return A("")}function vt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Et(t){return function(n){return n.preventDefault(),t.call(this,n)}}function kt(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function C(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Nt(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in n)n[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=n[i]:i==="__value"?t.value=t[i]=n[i]:e[i]&&e[i].set?t[i]=n[i]:C(t,i,n[i])}function jt(t,n){for(const e in n)C(t,e,n[e])}function St(t,n){Object.keys(n).forEach(e=>{Z(t,e,n[e])})}function Z(t,n,e){n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:C(t,n,e)}function tt(t){return Array.from(t.childNodes)}function nt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,n,e,i,r=!1){nt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(n(o)){const c=e(o);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function q(t,n,e,i){return L(t,r=>r.nodeName===n,r=>{const l=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];e[o.name]||l.push(o.name)}l.forEach(s=>r.removeAttribute(s))},()=>i(n))}function At(t,n,e){return q(t,n,e,X)}function Ct(t,n,e){return q(t,n,e,Y)}function et(t,n){return L(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>A(n),!0)}function Ot(t){return et(t," ")}function Mt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Pt(t,n){t.value=n==null?"":n}function Tt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Dt(t,n){return new t(n)}let p;function h(t){p=t}function g(){if(!p)throw new Error("Function called outside component initialization");return p}function Bt(t){g().$$.on_mount.push(t)}function Lt(t){g().$$.after_update.push(t)}function qt(t){g().$$.on_destroy.push(t)}function zt(t,n){return g().$$.context.set(t,n),n}function Ft(t){return g().$$.context.get(t)}function Ht(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],T=[],b=[],k=[],z=Promise.resolve();let N=!1;function F(){N||(N=!0,z.then(H))}function It(){return F(),z}function j(t){b.push(t)}function Wt(t){k.push(t)}const E=new Set;let $=0;function H(){const t=p;do{for(;$<d.length;){const n=d[$];$++,h(n),it(n.$$)}for(h(null),d.length=0,$=0;T.length;)T.pop()();for(let n=0;n<b.length;n+=1){const e=b[n];E.has(e)||(E.add(e),e())}b.length=0}while(d.length);for(;k.length;)k.pop()();N=!1,E.clear(),h(t)}function it(t){if(t.fragment!==null){t.update(),y(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const w=new Set;let _;function Gt(){_={r:0,c:[],p:_}}function Jt(){_.r||y(_.c),_=_.p}function rt(t,n){t&&t.i&&(w.delete(t),t.i(n))}function Kt(t,n,e,i){if(t&&t.o){if(w.has(t))return;w.add(t),_.c.push(()=>{w.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function Qt(t,n){const e={},i={},r={$$scope:1};let l=t.length;for(;l--;){const s=t[l],o=n[l];if(o){for(const c in s)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[l]=o}else for(const c in s)r[c]=1}for(const s in i)s in e||(e[s]=void 0);return e}function Rt(t){return typeof t=="object"&&t!==null?t:{}}function Ut(t,n,e){const i=t.$$.props[n];i!==void 0&&(t.$$.bound[i]=e,e(t.$$.ctx[i]))}function Vt(t){t&&t.c()}function Xt(t,n){t&&t.l(n)}function ct(t,n,e,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(n,e),i||j(()=>{const s=t.$$.on_mount.map(D).filter(S);t.$$.on_destroy?t.$$.on_destroy.push(...s):y(s),t.$$.on_mount=[]}),l.forEach(j)}function st(t,n){const e=t.$$;e.fragment!==null&&(y(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ot(t,n){t.$$.dirty[0]===-1&&(d.push(t),F(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Yt(t,n,e,i,r,l,s,o=[-1]){const c=p;h(t);const u=t.$$={fragment:null,ctx:[],props:l,update:m,not_equal:r,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:P(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};s&&s(u.root);let a=!1;if(u.ctx=e?e(t,n.props||{},(f,x,...O)=>{const M=O.length?O[0]:x;return u.ctx&&r(u.ctx[f],u.ctx[f]=M)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](M),a&&ot(t,f)),x}):[],u.update(),a=!0,y(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){J();const f=tt(n.target);u.fragment&&u.fragment.l(f),f.forEach(V)}else u.fragment&&u.fragment.c();n.intro&&rt(t.$$.fragment),ct(t,n.target,n.anchor,n.customElement),K(),H()}h(c)}class Zt{$destroy(){st(this,1),this.$destroy=m}$on(n,e){if(!S(e))return m;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!W(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{Ct as $,It as A,m as B,ft as C,_t as D,dt as E,at as F,U as G,lt as H,vt as I,Ht as J,Et as K,kt as L,I as M,Nt as N,gt as O,Qt as P,S as Q,y as R,Zt as S,mt as T,g as U,ht as V,T as W,Rt as X,Ft as Y,St as Z,Y as _,bt as a,jt as a0,zt as a1,qt as a2,yt as a3,Pt as a4,pt as a5,Ut as a6,Wt as a7,$t as a8,xt as b,Ot as c,Jt as d,wt as e,rt as f,Gt as g,V as h,Yt as i,Lt as j,X as k,At as l,tt as m,C as n,Bt as o,Tt as p,A as q,et as r,ut as s,Kt as t,Mt as u,Dt as v,Vt as w,Xt as x,ct as y,st as z};
