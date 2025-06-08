const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MembershipView-jNsCJQA4.js","assets/MembershipView-BPEHRQef.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},Ur=[],nn=()=>{},Hm=()=>!1,Vo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Vl=t=>t.startsWith("onUpdate:"),Ye=Object.assign,Ml=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},qm=Object.prototype.hasOwnProperty,Re=(t,e)=>qm.call(t,e),se=Array.isArray,$r=t=>Mo(t)==="[object Map]",Jf=t=>Mo(t)==="[object Set]",ue=t=>typeof t=="function",je=t=>typeof t=="string",er=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Xf=t=>(Ve(t)||ue(t))&&ue(t.then)&&ue(t.catch),Yf=Object.prototype.toString,Mo=t=>Yf.call(t),zm=t=>Mo(t).slice(8,-1),Zf=t=>Mo(t)==="[object Object]",Ll=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Cs=xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Wm=/-(\w)/g,Ft=Lo(t=>t.replace(Wm,(e,n)=>n?n.toUpperCase():"")),Gm=/\B([A-Z])/g,Ar=Lo(t=>t.replace(Gm,"-$1").toLowerCase()),Fo=Lo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Aa=Lo(t=>t?`on${Fo(t)}`:""),qn=(t,e)=>!Object.is(t,e),Gi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ed=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ja=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Km=t=>{const e=je(t)?Number(t):NaN;return isNaN(e)?t:e};let Pu;const Uo=()=>Pu||(Pu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ss(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?Ym(r):ss(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(je(t)||Ve(t))return t}const Qm=/;(?![^(]*\))/g,Jm=/:([^]+)/,Xm=/\/\*[^]*?\*\//g;function Ym(t){const e={};return t.replace(Xm,"").split(Qm).forEach(n=>{if(n){const r=n.split(Jm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function $o(t){let e="";if(je(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=$o(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ku(t){if(!t)return null;let{class:e,style:n}=t;return e&&!je(e)&&(t.class=$o(e)),n&&(t.style=ss(n)),t}const Zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",e_=xl(Zm);function td(t){return!!t||t===""}const nd=t=>!!(t&&t.__v_isRef===!0),be=t=>je(t)?t:t==null?"":se(t)||Ve(t)&&(t.toString===Yf||!ue(t.toString))?nd(t)?be(t.value):JSON.stringify(t,rd,2):String(t),rd=(t,e)=>nd(e)?rd(t,e.value):$r(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Sa(r,i)+" =>"]=s,n),{})}:Jf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Sa(n))}:er(e)?Sa(e):Ve(e)&&!se(e)&&!Zf(e)?String(e):e,Sa=(t,e="")=>{var n;return er(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class sd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){++this._on===1&&(this.prevScope=At,At=this)}off(){this._on>0&&--this._on===0&&(At=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function t_(t){return new sd(t)}function n_(){return At}let De;const Ra=new WeakSet;class id{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,At&&At.active&&At.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ra.has(this)&&(Ra.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ad(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ou(this),ld(this);const e=De,n=Wt;De=this,Wt=!0;try{return this.fn()}finally{cd(this),De=e,Wt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$l(e);this.deps=this.depsTail=void 0,Ou(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ra.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xa(this)&&this.run()}get dirty(){return Xa(this)}}let od=0,Ps,ks;function ad(t,e=!1){if(t.flags|=8,e){t.next=ks,ks=t;return}t.next=Ps,Ps=t}function Fl(){od++}function Ul(){if(--od>0)return;if(ks){let e=ks;for(ks=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ps;){let e=Ps;for(Ps=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ld(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),$l(r),r_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Xa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ud(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ud(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===js)||(t.globalVersion=js,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Xa(t))))return;t.flags|=2;const e=t.dep,n=De,r=Wt;De=t,Wt=!0;try{ld(t);const s=t.fn(t._value);(e.version===0||qn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,Wt=r,cd(t),t.flags&=-3}}function $l(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)$l(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function r_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Wt=!0;const hd=[];function Tn(){hd.push(Wt),Wt=!1}function In(){const t=hd.pop();Wt=t===void 0?!0:t}function Ou(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let js=0;class s_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Bl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!De||!Wt||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new s_(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,fd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,js++,this.notify(e)}notify(e){Fl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ul()}}}function fd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)fd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ya=new WeakMap,dr=Symbol(""),Za=Symbol(""),Hs=Symbol("");function gt(t,e,n){if(Wt&&De){let r=Ya.get(t);r||Ya.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Bl),s.map=r,s.key=n),s.track()}}function gn(t,e,n,r,s,i){const a=Ya.get(t);if(!a){js++;return}const l=c=>{c&&c.trigger()};if(Fl(),e==="clear")a.forEach(l);else{const c=se(t),h=c&&Ll(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,m)=>{(m==="length"||m===Hs||!er(m)&&m>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(Hs)),e){case"add":c?h&&l(a.get("length")):(l(a.get(dr)),$r(t)&&l(a.get(Za)));break;case"delete":c||(l(a.get(dr)),$r(t)&&l(a.get(Za)));break;case"set":$r(t)&&l(a.get(dr));break}}Ul()}function Dr(t){const e=Ae(t);return e===t?e:(gt(e,"iterate",Hs),Lt(t)?e:e.map(st))}function Bo(t){return gt(t=Ae(t),"iterate",Hs),t}const i_={__proto__:null,[Symbol.iterator](){return Ca(this,Symbol.iterator,st)},concat(...t){return Dr(this).concat(...t.map(e=>se(e)?Dr(e):e))},entries(){return Ca(this,"entries",t=>(t[1]=st(t[1]),t))},every(t,e){return hn(this,"every",t,e,void 0,arguments)},filter(t,e){return hn(this,"filter",t,e,n=>n.map(st),arguments)},find(t,e){return hn(this,"find",t,e,st,arguments)},findIndex(t,e){return hn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return hn(this,"findLast",t,e,st,arguments)},findLastIndex(t,e){return hn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return hn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Pa(this,"includes",t)},indexOf(...t){return Pa(this,"indexOf",t)},join(t){return Dr(this).join(t)},lastIndexOf(...t){return Pa(this,"lastIndexOf",t)},map(t,e){return hn(this,"map",t,e,void 0,arguments)},pop(){return Is(this,"pop")},push(...t){return Is(this,"push",t)},reduce(t,...e){return Du(this,"reduce",t,e)},reduceRight(t,...e){return Du(this,"reduceRight",t,e)},shift(){return Is(this,"shift")},some(t,e){return hn(this,"some",t,e,void 0,arguments)},splice(...t){return Is(this,"splice",t)},toReversed(){return Dr(this).toReversed()},toSorted(t){return Dr(this).toSorted(t)},toSpliced(...t){return Dr(this).toSpliced(...t)},unshift(...t){return Is(this,"unshift",t)},values(){return Ca(this,"values",st)}};function Ca(t,e,n){const r=Bo(t),s=r[e]();return r!==t&&!Lt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const o_=Array.prototype;function hn(t,e,n,r,s,i){const a=Bo(t),l=a!==t&&!Lt(t),c=a[e];if(c!==o_[e]){const p=c.apply(t,i);return l?st(p):p}let h=n;a!==t&&(l?h=function(p,m){return n.call(this,st(p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const d=c.call(a,h,r);return l&&s?s(d):d}function Du(t,e,n,r){const s=Bo(t);let i=n;return s!==t&&(Lt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,st(l),c,t)}),s[e](i,...r)}function Pa(t,e,n){const r=Ae(t);gt(r,"iterate",Hs);const s=r[e](...n);return(s===-1||s===!1)&&ql(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Is(t,e,n=[]){Tn(),Fl();const r=Ae(t)[e].apply(t,n);return Ul(),In(),r}const a_=xl("__proto__,__v_isRef,__isVue"),dd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(er));function l_(t){er(t)||(t=String(t));const e=Ae(this);return gt(e,"has",t),e.hasOwnProperty(t)}class pd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?y_:yd:i?_d:md).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){let c;if(a&&(c=i_[n]))return c;if(n==="hasOwnProperty")return l_}const l=Reflect.get(e,n,yt(e)?e:r);return(er(n)?dd.has(n):a_(n))||(s||gt(e,"get",n),i)?l:yt(l)?a&&Ll(n)?l:l.value:Ve(l)?s?Ed(l):jo(l):l}}class gd extends pd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Kn(i);if(!Lt(r)&&!Kn(r)&&(i=Ae(i),r=Ae(r)),!se(e)&&yt(i)&&!yt(r))return c?!1:(i.value=r,!0)}const a=se(e)&&Ll(n)?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,yt(e)?e:s);return e===Ae(s)&&(a?qn(r,i)&&gn(e,"set",n,r):gn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&gn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!er(n)||!dd.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",se(e)?"length":dr),Reflect.ownKeys(e)}}class c_ extends pd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const u_=new gd,h_=new c_,f_=new gd(!0);const el=t=>t,Mi=t=>Reflect.getPrototypeOf(t);function d_(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),a=$r(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),d=n?el:e?ao:st;return!e&&gt(i,"iterate",c?Za:dr),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:l?[d(p[0]),d(p[1])]:d(p),done:m}},[Symbol.iterator](){return this}}}}function Li(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function p_(t,e){const n={get(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);t||(qn(s,l)&&gt(a,"get",s),gt(a,"get",l));const{has:c}=Mi(a),h=e?el:t?ao:st;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&gt(Ae(s),"iterate",dr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);return t||(qn(s,l)&&gt(a,"has",s),gt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Ae(l),h=e?el:t?ao:st;return!t&&gt(c,"iterate",dr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return Ye(n,t?{add:Li("add"),set:Li("set"),delete:Li("delete"),clear:Li("clear")}:{add(s){!e&&!Lt(s)&&!Kn(s)&&(s=Ae(s));const i=Ae(this);return Mi(i).has.call(i,s)||(i.add(s),gn(i,"add",s,s)),this},set(s,i){!e&&!Lt(i)&&!Kn(i)&&(i=Ae(i));const a=Ae(this),{has:l,get:c}=Mi(a);let h=l.call(a,s);h||(s=Ae(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?qn(i,d)&&gn(a,"set",s,i):gn(a,"add",s,i),this},delete(s){const i=Ae(this),{has:a,get:l}=Mi(i);let c=a.call(i,s);c||(s=Ae(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&gn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,a=s.clear();return i&&gn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=d_(s,t,e)}),n}function jl(t,e){const n=p_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const g_={get:jl(!1,!1)},m_={get:jl(!1,!0)},__={get:jl(!0,!1)};const md=new WeakMap,_d=new WeakMap,yd=new WeakMap,y_=new WeakMap;function v_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function E_(t){return t.__v_skip||!Object.isExtensible(t)?0:v_(zm(t))}function jo(t){return Kn(t)?t:Hl(t,!1,u_,g_,md)}function vd(t){return Hl(t,!1,f_,m_,_d)}function Ed(t){return Hl(t,!0,h_,__,yd)}function Hl(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=E_(t);if(i===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Br(t){return Kn(t)?Br(t.__v_raw):!!(t&&t.__v_isReactive)}function Kn(t){return!!(t&&t.__v_isReadonly)}function Lt(t){return!!(t&&t.__v_isShallow)}function ql(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function Td(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&ed(t,"__v_skip",!0),t}const st=t=>Ve(t)?jo(t):t,ao=t=>Ve(t)?Ed(t):t;function yt(t){return t?t.__v_isRef===!0:!1}function _r(t){return Id(t,!1)}function T_(t){return Id(t,!0)}function Id(t,e){return yt(t)?t:new I_(t,e)}class I_{constructor(e,n){this.dep=new Bl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:st(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Lt(e)||Kn(e);e=r?e:Ae(e),qn(e,n)&&(this._rawValue=e,this._value=r?e:st(e),this.dep.trigger())}}function we(t){return yt(t)?t.value:t}const w_={get:(t,e,n)=>e==="__v_raw"?t:we(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return yt(s)&&!yt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function wd(t){return Br(t)?t:new Proxy(t,w_)}class b_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Bl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return ad(this,!0),!0}get value(){const e=this.dep.track();return ud(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function A_(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new b_(r,s,n)}const Fi={},lo=new WeakMap;let cr;function S_(t,e=!1,n=cr){if(n){let r=lo.get(n);r||lo.set(n,r=[]),r.push(t)}}function R_(t,e,n=Oe){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=j=>s?j:Lt(j)||s===!1||s===0?mn(j,1):mn(j);let d,p,m,I,P=!1,N=!1;if(yt(t)?(p=()=>t.value,P=Lt(t)):Br(t)?(p=()=>h(t),P=!0):se(t)?(N=!0,P=t.some(j=>Br(j)||Lt(j)),p=()=>t.map(j=>{if(yt(j))return j.value;if(Br(j))return h(j);if(ue(j))return c?c(j,2):j()})):ue(t)?e?p=c?()=>c(t,2):t:p=()=>{if(m){Tn();try{m()}finally{In()}}const j=cr;cr=d;try{return c?c(t,3,[I]):t(I)}finally{cr=j}}:p=nn,e&&s){const j=p,ce=s===!0?1/0:s;p=()=>mn(j(),ce)}const L=n_(),q=()=>{d.stop(),L&&L.active&&Ml(L.effects,d)};if(i&&e){const j=e;e=(...ce)=>{j(...ce),q()}}let F=N?new Array(t.length).fill(Fi):Fi;const B=j=>{if(!(!(d.flags&1)||!d.dirty&&!j))if(e){const ce=d.run();if(s||P||(N?ce.some((ae,A)=>qn(ae,F[A])):qn(ce,F))){m&&m();const ae=cr;cr=d;try{const A=[ce,F===Fi?void 0:N&&F[0]===Fi?[]:F,I];F=ce,c?c(e,3,A):e(...A)}finally{cr=ae}}}else d.run()};return l&&l(B),d=new id(p),d.scheduler=a?()=>a(B,!1):B,I=j=>S_(j,!1,d),m=d.onStop=()=>{const j=lo.get(d);if(j){if(c)c(j,4);else for(const ce of j)ce();lo.delete(d)}},e?r?B(!0):F=d.run():a?a(B.bind(null,!0),!0):d.run(),q.pause=d.pause.bind(d),q.resume=d.resume.bind(d),q.stop=q,q}function mn(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,yt(t))mn(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)mn(t[r],e,n);else if(Jf(t)||$r(t))t.forEach(r=>{mn(r,e,n)});else if(Zf(t)){for(const r in t)mn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&mn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function oi(t,e,n,r){try{return r?t(...r):t()}catch(s){Ho(s,e,n)}}function Kt(t,e,n,r){if(ue(t)){const s=oi(t,e,n,r);return s&&Xf(s)&&s.catch(i=>{Ho(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Kt(t[i],e,n,r));return s}}function Ho(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Oe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){Tn(),oi(i,null,10,[t,c,h]),In();return}}C_(t,n,s,r,a)}function C_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const It=[];let Yt=-1;const jr=[];let Mn=null,Nr=0;const bd=Promise.resolve();let co=null;function Ad(t){const e=co||bd;return t?e.then(this?t.bind(this):t):e}function P_(t){let e=Yt+1,n=It.length;for(;e<n;){const r=e+n>>>1,s=It[r],i=qs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function zl(t){if(!(t.flags&1)){const e=qs(t),n=It[It.length-1];!n||!(t.flags&2)&&e>=qs(n)?It.push(t):It.splice(P_(e),0,t),t.flags|=1,Sd()}}function Sd(){co||(co=bd.then(Cd))}function k_(t){se(t)?jr.push(...t):Mn&&t.id===-1?Mn.splice(Nr+1,0,t):t.flags&1||(jr.push(t),t.flags|=1),Sd()}function Nu(t,e,n=Yt+1){for(;n<It.length;n++){const r=It[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;It.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Rd(t){if(jr.length){const e=[...new Set(jr)].sort((n,r)=>qs(n)-qs(r));if(jr.length=0,Mn){Mn.push(...e);return}for(Mn=e,Nr=0;Nr<Mn.length;Nr++){const n=Mn[Nr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mn=null,Nr=0}}const qs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Cd(t){try{for(Yt=0;Yt<It.length;Yt++){const e=It[Yt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),oi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Yt<It.length;Yt++){const e=It[Yt];e&&(e.flags&=-2)}Yt=-1,It.length=0,Rd(),co=null,(It.length||jr.length)&&Cd()}}let Rt=null,Pd=null;function uo(t){const e=Rt;return Rt=t,Pd=t&&t.type.__scopeId||null,e}function He(t,e=Rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&qu(-1);const i=uo(e);let a;try{a=t(...s)}finally{uo(i),r._d&&qu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function O_(t,e){if(Rt===null)return t;const n=Jo(Rt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Oe]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&mn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(Tn(),Kt(c,n,8,[t.el,l,t,e]),In())}}const D_=Symbol("_vte"),kd=t=>t.__isTeleport,Ln=Symbol("_leaveCb"),Ui=Symbol("_enterCb");function N_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Wl(()=>{t.isMounted=!0}),Gl(()=>{t.isUnmounting=!0}),t}const Mt=[Function,Array],Od={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},Dd=t=>{const e=t.subTree;return e.component?Dd(e.component):e},x_={name:"BaseTransition",props:Od,setup(t,{slots:e}){const n=ky(),r=N_();return()=>{const s=e.default&&Vd(e.default(),!0);if(!s||!s.length)return;const i=Nd(s),a=Ae(t),{mode:l}=a;if(r.isLeaving)return ka(i);const c=xu(i);if(!c)return ka(i);let h=tl(c,a,r,n,p=>h=p);c.type!==wt&&zs(c,h);let d=n.subTree&&xu(n.subTree);if(d&&d.type!==wt&&!hr(c,d)&&Dd(n).type!==wt){let p=tl(d,a,r,n);if(zs(d,p),l==="out-in"&&c.type!==wt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},ka(i);l==="in-out"&&c.type!==wt?p.delayLeave=(m,I,P)=>{const N=xd(r,d);N[String(d.key)]=d,m[Ln]=()=>{I(),m[Ln]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{P(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Nd(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==wt){e=n;break}}return e}const V_=x_;function xd(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function tl(t,e,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:m,onLeave:I,onAfterLeave:P,onLeaveCancelled:N,onBeforeAppear:L,onAppear:q,onAfterAppear:F,onAppearCancelled:B}=e,j=String(t.key),ce=xd(n,t),ae=(_,b)=>{_&&Kt(_,r,9,b)},A=(_,b)=>{const S=b[1];ae(_,b),se(_)?_.every(w=>w.length<=1)&&S():_.length<=1&&S()},y={mode:a,persisted:l,beforeEnter(_){let b=c;if(!n.isMounted)if(i)b=L||c;else return;_[Ln]&&_[Ln](!0);const S=ce[j];S&&hr(t,S)&&S.el[Ln]&&S.el[Ln](),ae(b,[_])},enter(_){let b=h,S=d,w=p;if(!n.isMounted)if(i)b=q||h,S=F||d,w=B||p;else return;let v=!1;const Pe=_[Ui]=Ge=>{v||(v=!0,Ge?ae(w,[_]):ae(S,[_]),y.delayedLeave&&y.delayedLeave(),_[Ui]=void 0)};b?A(b,[_,Pe]):Pe()},leave(_,b){const S=String(t.key);if(_[Ui]&&_[Ui](!0),n.isUnmounting)return b();ae(m,[_]);let w=!1;const v=_[Ln]=Pe=>{w||(w=!0,b(),Pe?ae(N,[_]):ae(P,[_]),_[Ln]=void 0,ce[S]===t&&delete ce[S])};ce[S]=t,I?A(I,[_,v]):v()},clone(_){const b=tl(_,e,n,r,s);return s&&s(b),b}};return y}function ka(t){if(qo(t))return t=Qn(t),t.children=null,t}function xu(t){if(!qo(t))return kd(t.type)&&t.children?Nd(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function zs(t,e){t.shapeFlag&6&&t.component?(t.transition=e,zs(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Vd(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===mt?(a.patchFlag&128&&s++,r=r.concat(Vd(a.children,e,l))):(e||a.type!==wt)&&r.push(l!=null?Qn(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Md(t,e){return ue(t)?Ye({name:t.name},e,{setup:t}):t}function Ld(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function ho(t,e,n,r,s=!1){if(se(t)){t.forEach((P,N)=>ho(P,e&&(se(e)?e[N]:e),n,r,s));return}if(Os(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ho(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Jo(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Oe?l.refs={}:l.refs,p=l.setupState,m=Ae(p),I=p===Oe?()=>!1:P=>Re(m,P);if(h!=null&&h!==c&&(je(h)?(d[h]=null,I(h)&&(p[h]=null)):yt(h)&&(h.value=null)),ue(c))oi(c,l,12,[a,d]);else{const P=je(c),N=yt(c);if(P||N){const L=()=>{if(t.f){const q=P?I(c)?p[c]:d[c]:c.value;s?se(q)&&Ml(q,i):se(q)?q.includes(i)||q.push(i):P?(d[c]=[i],I(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else P?(d[c]=a,I(c)&&(p[c]=a)):N&&(c.value=a,t.k&&(d[t.k]=a))};a?(L.id=-1,Ot(L,n)):L()}}}Uo().requestIdleCallback;Uo().cancelIdleCallback;const Os=t=>!!t.type.__asyncLoader,qo=t=>t.type.__isKeepAlive;function M_(t,e){Fd(t,"a",e)}function L_(t,e){Fd(t,"da",e)}function Fd(t,e,n=it){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(zo(e,r,n),n){let s=n.parent;for(;s&&s.parent;)qo(s.parent.vnode)&&F_(r,e,n,s),s=s.parent}}function F_(t,e,n,r){const s=zo(e,t,r,!0);Ud(()=>{Ml(r[e],s)},n)}function zo(t,e,n=it,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Tn();const l=li(n),c=Kt(e,n,t,a);return l(),In(),c});return r?s.unshift(i):s.push(i),i}}const Sn=t=>(e,n=it)=>{(!Gs||t==="sp")&&zo(t,(...r)=>e(...r),n)},U_=Sn("bm"),Wl=Sn("m"),$_=Sn("bu"),B_=Sn("u"),Gl=Sn("bum"),Ud=Sn("um"),j_=Sn("sp"),H_=Sn("rtg"),q_=Sn("rtc");function z_(t,e=it){zo("ec",t,e)}const W_="components";function G_(t,e){return Q_(W_,t,!0,e)||t}const K_=Symbol.for("v-ndc");function Q_(t,e,n=!0,r=!1){const s=Rt||it;if(s){const i=s.type;{const l=Vy(i,!1);if(l&&(l===e||l===Ft(e)||l===Fo(Ft(e))))return i}const a=Vu(s[t]||i[t],e)||Vu(s.appContext[t],e);return!a&&r?i:a}}function Vu(t,e){return t&&(t[e]||t[Ft(e)]||t[Fo(Ft(e))])}function ai(t,e,n,r){let s;const i=n,a=se(t);if(a||je(t)){const l=a&&Br(t);let c=!1,h=!1;l&&(c=!Lt(t),h=Kn(t),t=Bo(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?h?ao(st(t[d])):st(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const nl=t=>t?ip(t)?Jo(t):nl(t.parent):null,Ds=Ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>nl(t.parent),$root:t=>nl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Bd(t),$forceUpdate:t=>t.f||(t.f=()=>{zl(t.update)}),$nextTick:t=>t.n||(t.n=Ad.bind(t.proxy)),$watch:t=>my.bind(t)}),Oa=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Re(t,e),J_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const I=a[e];if(I!==void 0)switch(I){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Oa(r,e))return a[e]=1,r[e];if(s!==Oe&&Re(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Re(h,e))return a[e]=3,i[e];if(n!==Oe&&Re(n,e))return a[e]=4,n[e];rl&&(a[e]=0)}}const d=Ds[e];let p,m;if(d)return e==="$attrs"&&gt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&Re(n,e))return a[e]=4,n[e];if(m=c.config.globalProperties,Re(m,e))return m[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Oa(s,e)?(s[e]=n,!0):r!==Oe&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Oe&&Re(t,a)||Oa(e,a)||(l=i[0])&&Re(l,a)||Re(r,a)||Re(Ds,a)||Re(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Mu(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let rl=!0;function X_(t){const e=Bd(t),n=t.proxy,r=t.ctx;rl=!1,e.beforeCreate&&Lu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:m,beforeUpdate:I,updated:P,activated:N,deactivated:L,beforeDestroy:q,beforeUnmount:F,destroyed:B,unmounted:j,render:ce,renderTracked:ae,renderTriggered:A,errorCaptured:y,serverPrefetch:_,expose:b,inheritAttrs:S,components:w,directives:v,filters:Pe}=e;if(h&&Y_(h,r,null),a)for(const me in a){const pe=a[me];ue(pe)&&(r[me]=pe.bind(n))}if(s){const me=s.call(n,n);Ve(me)&&(t.data=jo(me))}if(rl=!0,i)for(const me in i){const pe=i[me],Pt=ue(pe)?pe.bind(n,n):ue(pe.get)?pe.get.bind(n,n):nn,Ut=!ue(pe)&&ue(pe.set)?pe.set.bind(n):nn,Nt=jt({get:Pt,set:Ut});Object.defineProperty(r,me,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:Fe=>Nt.value=Fe})}if(l)for(const me in l)$d(l[me],r,n,me);if(c){const me=ue(c)?c.call(n):c;Reflect.ownKeys(me).forEach(pe=>{Ki(pe,me[pe])})}d&&Lu(d,t,"c");function Le(me,pe){se(pe)?pe.forEach(Pt=>me(Pt.bind(n))):pe&&me(pe.bind(n))}if(Le(U_,p),Le(Wl,m),Le($_,I),Le(B_,P),Le(M_,N),Le(L_,L),Le(z_,y),Le(q_,ae),Le(H_,A),Le(Gl,F),Le(Ud,j),Le(j_,_),se(b))if(b.length){const me=t.exposed||(t.exposed={});b.forEach(pe=>{Object.defineProperty(me,pe,{get:()=>n[pe],set:Pt=>n[pe]=Pt})})}else t.exposed||(t.exposed={});ce&&t.render===nn&&(t.render=ce),S!=null&&(t.inheritAttrs=S),w&&(t.components=w),v&&(t.directives=v),_&&Ld(t)}function Y_(t,e,n=nn){se(t)&&(t=sl(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=Gt(s.from||r,s.default,!0):i=Gt(s.from||r):i=Gt(s),yt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Lu(t,e,n){Kt(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function $d(t,e,n,r){let s=r.includes(".")?ep(n,r):()=>n[r];if(je(t)){const i=e[t];ue(i)&&Qi(s,i)}else if(ue(t))Qi(s,t.bind(n));else if(Ve(t))if(se(t))t.forEach(i=>$d(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&Qi(s,i,t)}}function Bd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>fo(c,h,a,!0)),fo(c,e,a)),Ve(e)&&i.set(e,c),c}function fo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&fo(t,i,n,!0),s&&s.forEach(a=>fo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=Z_[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const Z_={data:Fu,props:Uu,emits:Uu,methods:Ss,computed:Ss,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Ss,directives:Ss,watch:ty,provide:Fu,inject:ey};function Fu(t,e){return e?t?function(){return Ye(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function ey(t,e){return Ss(sl(t),sl(e))}function sl(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ss(t,e){return t?Ye(Object.create(null),t,e):e}function Uu(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:Ye(Object.create(null),Mu(t),Mu(e??{})):e}function ty(t,e){if(!t)return e;if(!e)return t;const n=Ye(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function jd(){return{app:null,config:{isNativeTag:Hm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ny=0;function ry(t,e){return function(r,s=null){ue(r)||(r=Ye({},r)),s!=null&&!Ve(s)&&(s=null);const i=jd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:ny++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Ly,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ue(d.install)?(a.add(d),d.install(h,...p)):ue(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,m){if(!c){const I=h._ceVNode||re(r,s);return I.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(I,d,m),c=!0,h._container=d,d.__vue_app__=h,Jo(I.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Kt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=Hr;Hr=h;try{return d()}finally{Hr=p}}};return h}}let Hr=null;function Ki(t,e){if(it){let n=it.provides;const r=it.parent&&it.parent.provides;r===n&&(n=it.provides=Object.create(r)),n[t]=e}}function Gt(t,e,n=!1){const r=it||Rt;if(r||Hr){let s=Hr?Hr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const Hd={},qd=()=>Object.create(Hd),zd=t=>Object.getPrototypeOf(t)===Hd;function sy(t,e,n,r=!1){const s={},i=qd();t.propsDefaults=Object.create(null),Wd(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:vd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function iy(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Ae(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(Wo(t.emitsOptions,m))continue;const I=e[m];if(c)if(Re(i,m))I!==i[m]&&(i[m]=I,h=!0);else{const P=Ft(m);s[P]=il(c,l,P,I,t,!1)}else I!==i[m]&&(i[m]=I,h=!0)}}}else{Wd(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Re(e,p)&&((d=Ar(p))===p||!Re(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=il(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&gn(t.attrs,"set","")}function Wd(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Cs(c))continue;const h=e[c];let d;s&&Re(s,d=Ft(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:Wo(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Ae(n),h=l||Oe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=il(s,c,p,h[p],t,!Re(h,p))}}return a}function il(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Re(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ue(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=li(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Ar(n))&&(r=!0))}return r}const oy=new WeakMap;function Gd(t,e,n=!1){const r=n?oy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!ue(t)){const d=p=>{c=!0;const[m,I]=Gd(p,e,!0);Ye(a,m),I&&l.push(...I)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ve(t)&&r.set(t,Ur),Ur;if(se(i))for(let d=0;d<i.length;d++){const p=Ft(i[d]);$u(p)&&(a[p]=Oe)}else if(i)for(const d in i){const p=Ft(d);if($u(p)){const m=i[d],I=a[p]=se(m)||ue(m)?{type:m}:Ye({},m),P=I.type;let N=!1,L=!0;if(se(P))for(let q=0;q<P.length;++q){const F=P[q],B=ue(F)&&F.name;if(B==="Boolean"){N=!0;break}else B==="String"&&(L=!1)}else N=ue(P)&&P.name==="Boolean";I[0]=N,I[1]=L,(N||Re(I,"default"))&&l.push(p)}}const h=[a,l];return Ve(t)&&r.set(t,h),h}function $u(t){return t[0]!=="$"&&!Cs(t)}const Kl=t=>t[0]==="_"||t==="$stable",Ql=t=>se(t)?t.map(en):[en(t)],ay=(t,e,n)=>{if(e._n)return e;const r=He((...s)=>Ql(e(...s)),n);return r._c=!1,r},Kd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Kl(s))continue;const i=t[s];if(ue(i))e[s]=ay(s,i,r);else if(i!=null){const a=Ql(i);e[s]=()=>a}}},Qd=(t,e)=>{const n=Ql(e);t.slots.default=()=>n},Jd=(t,e,n)=>{for(const r in e)(n||!Kl(r))&&(t[r]=e[r])},ly=(t,e,n)=>{const r=t.slots=qd();if(t.vnode.shapeFlag&32){const s=e._;s?(Jd(r,e,n),n&&ed(r,"_",s,!0)):Kd(e,r)}else e&&Qd(t,e)},cy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Oe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Jd(s,e,n):(i=!e.$stable,Kd(e,s)),a=e}else e&&(Qd(t,e),a={default:1});if(i)for(const l in s)!Kl(l)&&a[l]==null&&delete s[l]},Ot=wy;function uy(t){return hy(t)}function hy(t,e){const n=Uo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:m,setScopeId:I=nn,insertStaticContent:P}=t,N=(E,T,R,D=null,V=null,x=null,K=void 0,z=null,H=!!T.dynamicChildren)=>{if(E===T)return;E&&!hr(E,T)&&(D=O(E),Fe(E,V,x,!0),E=null),T.patchFlag===-2&&(H=!1,T.dynamicChildren=null);const{type:U,ref:te,shapeFlag:G}=T;switch(U){case Go:L(E,T,R,D);break;case wt:q(E,T,R,D);break;case Ji:E==null&&F(T,R,D,K);break;case mt:w(E,T,R,D,V,x,K,z,H);break;default:G&1?ce(E,T,R,D,V,x,K,z,H):G&6?v(E,T,R,D,V,x,K,z,H):(G&64||G&128)&&U.process(E,T,R,D,V,x,K,z,H,Y)}te!=null&&V&&ho(te,E&&E.ref,x,T||E,!T)},L=(E,T,R,D)=>{if(E==null)r(T.el=l(T.children),R,D);else{const V=T.el=E.el;T.children!==E.children&&h(V,T.children)}},q=(E,T,R,D)=>{E==null?r(T.el=c(T.children||""),R,D):T.el=E.el},F=(E,T,R,D)=>{[E.el,E.anchor]=P(E.children,T,R,D,E.el,E.anchor)},B=({el:E,anchor:T},R,D)=>{let V;for(;E&&E!==T;)V=m(E),r(E,R,D),E=V;r(T,R,D)},j=({el:E,anchor:T})=>{let R;for(;E&&E!==T;)R=m(E),s(E),E=R;s(T)},ce=(E,T,R,D,V,x,K,z,H)=>{T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),E==null?ae(T,R,D,V,x,K,z,H):_(E,T,V,x,K,z,H)},ae=(E,T,R,D,V,x,K,z)=>{let H,U;const{props:te,shapeFlag:G,transition:ee,dirs:ie}=E;if(H=E.el=a(E.type,x,te&&te.is,te),G&8?d(H,E.children):G&16&&y(E.children,H,null,D,V,Da(E,x),K,z),ie&&ir(E,null,D,"created"),A(H,E,E.scopeId,K,D),te){for(const he in te)he!=="value"&&!Cs(he)&&i(H,he,null,te[he],x,D);"value"in te&&i(H,"value",null,te.value,x),(U=te.onVnodeBeforeMount)&&Xt(U,D,E)}ie&&ir(E,null,D,"beforeMount");const ne=fy(V,ee);ne&&ee.beforeEnter(H),r(H,T,R),((U=te&&te.onVnodeMounted)||ne||ie)&&Ot(()=>{U&&Xt(U,D,E),ne&&ee.enter(H),ie&&ir(E,null,D,"mounted")},V)},A=(E,T,R,D,V)=>{if(R&&I(E,R),D)for(let x=0;x<D.length;x++)I(E,D[x]);if(V){let x=V.subTree;if(T===x||np(x.type)&&(x.ssContent===T||x.ssFallback===T)){const K=V.vnode;A(E,K,K.scopeId,K.slotScopeIds,V.parent)}}},y=(E,T,R,D,V,x,K,z,H=0)=>{for(let U=H;U<E.length;U++){const te=E[U]=z?Fn(E[U]):en(E[U]);N(null,te,T,R,D,V,x,K,z)}},_=(E,T,R,D,V,x,K)=>{const z=T.el=E.el;let{patchFlag:H,dynamicChildren:U,dirs:te}=T;H|=E.patchFlag&16;const G=E.props||Oe,ee=T.props||Oe;let ie;if(R&&or(R,!1),(ie=ee.onVnodeBeforeUpdate)&&Xt(ie,R,T,E),te&&ir(T,E,R,"beforeUpdate"),R&&or(R,!0),(G.innerHTML&&ee.innerHTML==null||G.textContent&&ee.textContent==null)&&d(z,""),U?b(E.dynamicChildren,U,z,R,D,Da(T,V),x):K||pe(E,T,z,null,R,D,Da(T,V),x,!1),H>0){if(H&16)S(z,G,ee,R,V);else if(H&2&&G.class!==ee.class&&i(z,"class",null,ee.class,V),H&4&&i(z,"style",G.style,ee.style,V),H&8){const ne=T.dynamicProps;for(let he=0;he<ne.length;he++){const _e=ne[he],ct=G[_e],Ze=ee[_e];(Ze!==ct||_e==="value")&&i(z,_e,ct,Ze,V,R)}}H&1&&E.children!==T.children&&d(z,T.children)}else!K&&U==null&&S(z,G,ee,R,V);((ie=ee.onVnodeUpdated)||te)&&Ot(()=>{ie&&Xt(ie,R,T,E),te&&ir(T,E,R,"updated")},D)},b=(E,T,R,D,V,x,K)=>{for(let z=0;z<T.length;z++){const H=E[z],U=T[z],te=H.el&&(H.type===mt||!hr(H,U)||H.shapeFlag&198)?p(H.el):R;N(H,U,te,null,D,V,x,K,!0)}},S=(E,T,R,D,V)=>{if(T!==R){if(T!==Oe)for(const x in T)!Cs(x)&&!(x in R)&&i(E,x,T[x],null,V,D);for(const x in R){if(Cs(x))continue;const K=R[x],z=T[x];K!==z&&x!=="value"&&i(E,x,z,K,V,D)}"value"in R&&i(E,"value",T.value,R.value,V)}},w=(E,T,R,D,V,x,K,z,H)=>{const U=T.el=E?E.el:l(""),te=T.anchor=E?E.anchor:l("");let{patchFlag:G,dynamicChildren:ee,slotScopeIds:ie}=T;ie&&(z=z?z.concat(ie):ie),E==null?(r(U,R,D),r(te,R,D),y(T.children||[],R,te,V,x,K,z,H)):G>0&&G&64&&ee&&E.dynamicChildren?(b(E.dynamicChildren,ee,R,V,x,K,z),(T.key!=null||V&&T===V.subTree)&&Xd(E,T,!0)):pe(E,T,R,te,V,x,K,z,H)},v=(E,T,R,D,V,x,K,z,H)=>{T.slotScopeIds=z,E==null?T.shapeFlag&512?V.ctx.activate(T,R,D,K,H):Pe(T,R,D,V,x,K,H):Ge(E,T,H)},Pe=(E,T,R,D,V,x,K)=>{const z=E.component=Py(E,D,V);if(qo(E)&&(z.ctx.renderer=Y),Oy(z,!1,K),z.asyncDep){if(V&&V.registerDep(z,Le,K),!E.el){const H=z.subTree=re(wt);q(null,H,T,R)}}else Le(z,E,T,R,V,x,K)},Ge=(E,T,R)=>{const D=T.component=E.component;if(Ty(E,T,R))if(D.asyncDep&&!D.asyncResolved){me(D,T,R);return}else D.next=T,D.update();else T.el=E.el,D.vnode=T},Le=(E,T,R,D,V,x,K)=>{const z=()=>{if(E.isMounted){let{next:G,bu:ee,u:ie,parent:ne,vnode:he}=E;{const ut=Yd(E);if(ut){G&&(G.el=he.el,me(E,G,K)),ut.asyncDep.then(()=>{E.isUnmounted||z()});return}}let _e=G,ct;or(E,!1),G?(G.el=he.el,me(E,G,K)):G=he,ee&&Gi(ee),(ct=G.props&&G.props.onVnodeBeforeUpdate)&&Xt(ct,ne,G,he),or(E,!0);const Ze=ju(E),xt=E.subTree;E.subTree=Ze,N(xt,Ze,p(xt.el),O(xt),E,V,x),G.el=Ze.el,_e===null&&Iy(E,Ze.el),ie&&Ot(ie,V),(ct=G.props&&G.props.onVnodeUpdated)&&Ot(()=>Xt(ct,ne,G,he),V)}else{let G;const{el:ee,props:ie}=T,{bm:ne,m:he,parent:_e,root:ct,type:Ze}=E,xt=Os(T);or(E,!1),ne&&Gi(ne),!xt&&(G=ie&&ie.onVnodeBeforeMount)&&Xt(G,_e,T),or(E,!0);{ct.ce&&ct.ce._injectChildStyle(Ze);const ut=E.subTree=ju(E);N(null,ut,R,D,E,V,x),T.el=ut.el}if(he&&Ot(he,V),!xt&&(G=ie&&ie.onVnodeMounted)){const ut=T;Ot(()=>Xt(G,_e,ut),V)}(T.shapeFlag&256||_e&&Os(_e.vnode)&&_e.vnode.shapeFlag&256)&&E.a&&Ot(E.a,V),E.isMounted=!0,T=R=D=null}};E.scope.on();const H=E.effect=new id(z);E.scope.off();const U=E.update=H.run.bind(H),te=E.job=H.runIfDirty.bind(H);te.i=E,te.id=E.uid,H.scheduler=()=>zl(te),or(E,!0),U()},me=(E,T,R)=>{T.component=E;const D=E.vnode.props;E.vnode=T,E.next=null,iy(E,T.props,D,R),cy(E,T.children,R),Tn(),Nu(E),In()},pe=(E,T,R,D,V,x,K,z,H=!1)=>{const U=E&&E.children,te=E?E.shapeFlag:0,G=T.children,{patchFlag:ee,shapeFlag:ie}=T;if(ee>0){if(ee&128){Ut(U,G,R,D,V,x,K,z,H);return}else if(ee&256){Pt(U,G,R,D,V,x,K,z,H);return}}ie&8?(te&16&&bt(U,V,x),G!==U&&d(R,G)):te&16?ie&16?Ut(U,G,R,D,V,x,K,z,H):bt(U,V,x,!0):(te&8&&d(R,""),ie&16&&y(G,R,D,V,x,K,z,H))},Pt=(E,T,R,D,V,x,K,z,H)=>{E=E||Ur,T=T||Ur;const U=E.length,te=T.length,G=Math.min(U,te);let ee;for(ee=0;ee<G;ee++){const ie=T[ee]=H?Fn(T[ee]):en(T[ee]);N(E[ee],ie,R,null,V,x,K,z,H)}U>te?bt(E,V,x,!0,!1,G):y(T,R,D,V,x,K,z,H,G)},Ut=(E,T,R,D,V,x,K,z,H)=>{let U=0;const te=T.length;let G=E.length-1,ee=te-1;for(;U<=G&&U<=ee;){const ie=E[U],ne=T[U]=H?Fn(T[U]):en(T[U]);if(hr(ie,ne))N(ie,ne,R,null,V,x,K,z,H);else break;U++}for(;U<=G&&U<=ee;){const ie=E[G],ne=T[ee]=H?Fn(T[ee]):en(T[ee]);if(hr(ie,ne))N(ie,ne,R,null,V,x,K,z,H);else break;G--,ee--}if(U>G){if(U<=ee){const ie=ee+1,ne=ie<te?T[ie].el:D;for(;U<=ee;)N(null,T[U]=H?Fn(T[U]):en(T[U]),R,ne,V,x,K,z,H),U++}}else if(U>ee)for(;U<=G;)Fe(E[U],V,x,!0),U++;else{const ie=U,ne=U,he=new Map;for(U=ne;U<=ee;U++){const et=T[U]=H?Fn(T[U]):en(T[U]);et.key!=null&&he.set(et.key,U)}let _e,ct=0;const Ze=ee-ne+1;let xt=!1,ut=0;const Pn=new Array(Ze);for(U=0;U<Ze;U++)Pn[U]=0;for(U=ie;U<=G;U++){const et=E[U];if(ct>=Ze){Fe(et,V,x,!0);continue}let Vt;if(et.key!=null)Vt=he.get(et.key);else for(_e=ne;_e<=ee;_e++)if(Pn[_e-ne]===0&&hr(et,T[_e])){Vt=_e;break}Vt===void 0?Fe(et,V,x,!0):(Pn[Vt-ne]=U+1,Vt>=ut?ut=Vt:xt=!0,N(et,T[Vt],R,null,V,x,K,z,H),ct++)}const cs=xt?dy(Pn):Ur;for(_e=cs.length-1,U=Ze-1;U>=0;U--){const et=ne+U,Vt=T[et],Ei=et+1<te?T[et+1].el:D;Pn[U]===0?N(null,Vt,R,Ei,V,x,K,z,H):xt&&(_e<0||U!==cs[_e]?Nt(Vt,R,Ei,2):_e--)}}},Nt=(E,T,R,D,V=null)=>{const{el:x,type:K,transition:z,children:H,shapeFlag:U}=E;if(U&6){Nt(E.component.subTree,T,R,D);return}if(U&128){E.suspense.move(T,R,D);return}if(U&64){K.move(E,T,R,Y);return}if(K===mt){r(x,T,R);for(let G=0;G<H.length;G++)Nt(H[G],T,R,D);r(E.anchor,T,R);return}if(K===Ji){B(E,T,R);return}if(D!==2&&U&1&&z)if(D===0)z.beforeEnter(x),r(x,T,R),Ot(()=>z.enter(x),V);else{const{leave:G,delayLeave:ee,afterLeave:ie}=z,ne=()=>{E.ctx.isUnmounted?s(x):r(x,T,R)},he=()=>{G(x,()=>{ne(),ie&&ie()})};ee?ee(x,ne,he):he()}else r(x,T,R)},Fe=(E,T,R,D=!1,V=!1)=>{const{type:x,props:K,ref:z,children:H,dynamicChildren:U,shapeFlag:te,patchFlag:G,dirs:ee,cacheIndex:ie}=E;if(G===-2&&(V=!1),z!=null&&(Tn(),ho(z,null,R,E,!0),In()),ie!=null&&(T.renderCache[ie]=void 0),te&256){T.ctx.deactivate(E);return}const ne=te&1&&ee,he=!Os(E);let _e;if(he&&(_e=K&&K.onVnodeBeforeUnmount)&&Xt(_e,T,E),te&6)Jt(E.component,R,D);else{if(te&128){E.suspense.unmount(R,D);return}ne&&ir(E,null,T,"beforeUnmount"),te&64?E.type.remove(E,T,R,Y,D):U&&!U.hasOnce&&(x!==mt||G>0&&G&64)?bt(U,T,R,!1,!0):(x===mt&&G&384||!V&&te&16)&&bt(H,T,R),D&&Ue(E)}(he&&(_e=K&&K.onVnodeUnmounted)||ne)&&Ot(()=>{_e&&Xt(_e,T,E),ne&&ir(E,null,T,"unmounted")},R)},Ue=E=>{const{type:T,el:R,anchor:D,transition:V}=E;if(T===mt){Cn(R,D);return}if(T===Ji){j(E);return}const x=()=>{s(R),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(E.shapeFlag&1&&V&&!V.persisted){const{leave:K,delayLeave:z}=V,H=()=>K(R,x);z?z(E.el,x,H):H()}else x()},Cn=(E,T)=>{let R;for(;E!==T;)R=m(E),s(E),E=R;s(T)},Jt=(E,T,R)=>{const{bum:D,scope:V,job:x,subTree:K,um:z,m:H,a:U,parent:te,slots:{__:G}}=E;Bu(H),Bu(U),D&&Gi(D),te&&se(G)&&G.forEach(ee=>{te.renderCache[ee]=void 0}),V.stop(),x&&(x.flags|=8,Fe(K,E,T,R)),z&&Ot(z,T),Ot(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},bt=(E,T,R,D=!1,V=!1,x=0)=>{for(let K=x;K<E.length;K++)Fe(E[K],T,R,D,V)},O=E=>{if(E.shapeFlag&6)return O(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=m(E.anchor||E.el),R=T&&T[D_];return R?m(R):T};let X=!1;const Q=(E,T,R)=>{E==null?T._vnode&&Fe(T._vnode,null,null,!0):N(T._vnode||null,E,T,null,null,null,R),T._vnode=E,X||(X=!0,Nu(),Rd(),X=!1)},Y={p:N,um:Fe,m:Nt,r:Ue,mt:Pe,mc:y,pc:pe,pbc:b,n:O,o:t};return{render:Q,hydrate:void 0,createApp:ry(Q)}}function Da({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function or({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function fy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Xd(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Fn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Xd(a,l)),l.type===Go&&(l.el=a.el),l.type===wt&&!l.el&&(l.el=a.el)}}function dy(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Yd(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yd(e)}function Bu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const py=Symbol.for("v-scx"),gy=()=>Gt(py);function Qi(t,e,n){return Zd(t,e,n)}function Zd(t,e,n=Oe){const{immediate:r,deep:s,flush:i,once:a}=n,l=Ye({},n),c=e&&r||!e&&i!=="post";let h;if(Gs){if(i==="sync"){const I=gy();h=I.__watcherHandles||(I.__watcherHandles=[])}else if(!c){const I=()=>{};return I.stop=nn,I.resume=nn,I.pause=nn,I}}const d=it;l.call=(I,P,N)=>Kt(I,d,P,N);let p=!1;i==="post"?l.scheduler=I=>{Ot(I,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(I,P)=>{P?I():zl(I)}),l.augmentJob=I=>{e&&(I.flags|=4),p&&(I.flags|=2,d&&(I.id=d.uid,I.i=d))};const m=R_(t,e,l);return Gs&&(h?h.push(m):c&&m()),m}function my(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?ep(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const a=li(this),l=Zd(s,i.bind(r),n);return a(),l}function ep(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const _y=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ft(e)}Modifiers`]||t[`${Ar(e)}Modifiers`];function yy(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),a=i&&_y(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>je(d)?d.trim():d)),a.number&&(s=n.map(Ja)));let l,c=r[l=Aa(e)]||r[l=Aa(Ft(e))];!c&&i&&(c=r[l=Aa(Ar(e))]),c&&Kt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Kt(h,t,6,s)}}function tp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ue(t)){const c=h=>{const d=tp(h,e,!0);d&&(l=!0,Ye(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ve(t)&&r.set(t,null),null):(se(i)?i.forEach(c=>a[c]=null):Ye(a,i),Ve(t)&&r.set(t,a),a)}function Wo(t,e){return!t||!Vo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Ar(e))||Re(t,e))}function ju(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:m,setupState:I,ctx:P,inheritAttrs:N}=t,L=uo(t);let q,F;try{if(n.shapeFlag&4){const j=s||r,ce=j;q=en(h.call(ce,j,d,p,I,m,P)),F=l}else{const j=e;q=en(j.length>1?j(p,{attrs:l,slots:a,emit:c}):j(p,null)),F=e.props?l:vy(l)}}catch(j){Ns.length=0,Ho(j,t,1),q=re(wt)}let B=q;if(F&&N!==!1){const j=Object.keys(F),{shapeFlag:ce}=B;j.length&&ce&7&&(i&&j.some(Vl)&&(F=Ey(F,i)),B=Qn(B,F,!1,!0))}return n.dirs&&(B=Qn(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&zs(B,n.transition),q=B,uo(L),q}const vy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Vo(n))&&((e||(e={}))[n]=t[n]);return e},Ey=(t,e)=>{const n={};for(const r in t)(!Vl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Ty(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Hu(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(a[m]!==r[m]&&!Wo(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Hu(r,a,h):!0:!!a;return!1}function Hu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Wo(n,i))return!0}return!1}function Iy({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const np=t=>t.__isSuspense;function wy(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):k_(t)}const mt=Symbol.for("v-fgt"),Go=Symbol.for("v-txt"),wt=Symbol.for("v-cmt"),Ji=Symbol.for("v-stc"),Ns=[];let Dt=null;function ve(t=!1){Ns.push(Dt=t?null:[])}function by(){Ns.pop(),Dt=Ns[Ns.length-1]||null}let Ws=1;function qu(t,e=!1){Ws+=t,t<0&&Dt&&e&&(Dt.hasOnce=!0)}function rp(t){return t.dynamicChildren=Ws>0?Dt||Ur:null,by(),Ws>0&&Dt&&Dt.push(t),t}function Ce(t,e,n,r,s,i){return rp(J(t,e,n,r,s,i,!0))}function Ko(t,e,n,r,s){return rp(re(t,e,n,r,s,!0))}function po(t){return t?t.__v_isVNode===!0:!1}function hr(t,e){return t.type===e.type&&t.key===e.key}const sp=({key:t})=>t??null,Xi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||yt(t)||ue(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function J(t,e=null,n=null,r=0,s=null,i=t===mt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sp(e),ref:e&&Xi(e),scopeId:Pd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return l?(Jl(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=je(n)?8:16),Ws>0&&!a&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const re=Ay;function Ay(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===K_)&&(t=wt),po(t)){const l=Qn(t,e,!0);return n&&Jl(l,n),Ws>0&&!i&&Dt&&(l.shapeFlag&6?Dt[Dt.indexOf(t)]=l:Dt.push(l)),l.patchFlag=-2,l}if(My(t)&&(t=t.__vccOpts),e){e=ol(e);let{class:l,style:c}=e;l&&!je(l)&&(e.class=$o(l)),Ve(c)&&(ql(c)&&!se(c)&&(c=Ye({},c)),e.style=ss(c))}const a=je(t)?1:np(t)?128:kd(t)?64:Ve(t)?4:ue(t)?2:0;return J(t,e,n,r,s,a,i,!0)}function ol(t){return t?ql(t)||zd(t)?Ye({},t):t:null}function Qn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?Qo(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&sp(h),ref:e&&e.ref?n&&i?se(i)?i.concat(Xi(e)):[i,Xi(e)]:Xi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Qn(t.ssContent),ssFallback:t.ssFallback&&Qn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&zs(d,c.clone(d)),d}function ze(t=" ",e=0){return re(Go,null,t,e)}function Sy(t,e){const n=re(Ji,null,t);return n.staticCount=e,n}function qr(t="",e=!1){return e?(ve(),Ko(wt,null,t)):re(wt,null,t)}function en(t){return t==null||typeof t=="boolean"?re(wt):se(t)?re(mt,null,t.slice()):po(t)?Fn(t):re(Go,null,String(t))}function Fn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Qn(t)}function Jl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Jl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!zd(e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),r&64?(n=16,e=[ze(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qo(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=$o([e.class,r.class]));else if(s==="style")e.style=ss([e.style,r.style]);else if(Vo(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Xt(t,e,n,r=null){Kt(t,e,7,[n,r])}const Ry=jd();let Cy=0;function Py(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Ry,i={uid:Cy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gd(r,s),emitsOptions:tp(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=yy.bind(null,i),t.ce&&t.ce(i),i}let it=null;const ky=()=>it||Rt;let go,al;{const t=Uo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};go=e("__VUE_INSTANCE_SETTERS__",n=>it=n),al=e("__VUE_SSR_SETTERS__",n=>Gs=n)}const li=t=>{const e=it;return go(t),t.scope.on(),()=>{t.scope.off(),go(e)}},zu=()=>{it&&it.scope.off(),go(null)};function ip(t){return t.vnode.shapeFlag&4}let Gs=!1;function Oy(t,e=!1,n=!1){e&&al(e);const{props:r,children:s}=t.vnode,i=ip(t);sy(t,r,i,e),ly(t,s,n||e);const a=i?Dy(t,e):void 0;return e&&al(!1),a}function Dy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,J_);const{setup:r}=n;if(r){Tn();const s=t.setupContext=r.length>1?xy(t):null,i=li(t),a=oi(r,t,0,[t.props,s]),l=Xf(a);if(In(),i(),(l||t.sp)&&!Os(t)&&Ld(t),l){if(a.then(zu,zu),e)return a.then(c=>{Wu(t,c)}).catch(c=>{Ho(c,t,0)});t.asyncDep=a}else Wu(t,a)}else op(t)}function Wu(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=wd(e)),op(t)}function op(t,e,n){const r=t.type;t.render||(t.render=r.render||nn);{const s=li(t);Tn();try{X_(t)}finally{In(),s()}}}const Ny={get(t,e){return gt(t,"get",""),t[e]}};function xy(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Ny),slots:t.slots,emit:t.emit,expose:e}}function Jo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(wd(Td(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ds)return Ds[n](t)},has(e,n){return n in e||n in Ds}})):t.proxy}function Vy(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function My(t){return ue(t)&&"__vccOpts"in t}const jt=(t,e)=>A_(t,e,Gs);function Xl(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!se(e)?po(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&po(n)&&(n=[n]),re(t,e,n))}const Ly="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ll;const Gu=typeof window<"u"&&window.trustedTypes;if(Gu)try{ll=Gu.createPolicy("vue",{createHTML:t=>t})}catch{}const ap=ll?t=>ll.createHTML(t):t=>t,Fy="http://www.w3.org/2000/svg",Uy="http://www.w3.org/1998/Math/MathML",pn=typeof document<"u"?document:null,Ku=pn&&pn.createElement("template"),$y={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?pn.createElementNS(Fy,t):e==="mathml"?pn.createElementNS(Uy,t):n?pn.createElement(t,{is:n}):pn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>pn.createTextNode(t),createComment:t=>pn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>pn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ku.innerHTML=ap(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Ku.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Nn="transition",ws="animation",Ks=Symbol("_vtc"),lp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},By=Ye({},Od,lp),jy=t=>(t.displayName="Transition",t.props=By,t),cp=jy((t,{slots:e})=>Xl(V_,Hy(t),e)),ar=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},Qu=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function Hy(t){const e={};for(const w in t)w in lp||(e[w]=t[w]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=a,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:m=`${n}-leave-active`,leaveToClass:I=`${n}-leave-to`}=t,P=qy(s),N=P&&P[0],L=P&&P[1],{onBeforeEnter:q,onEnter:F,onEnterCancelled:B,onLeave:j,onLeaveCancelled:ce,onBeforeAppear:ae=q,onAppear:A=F,onAppearCancelled:y=B}=e,_=(w,v,Pe,Ge)=>{w._enterCancelled=Ge,lr(w,v?d:l),lr(w,v?h:a),Pe&&Pe()},b=(w,v)=>{w._isLeaving=!1,lr(w,p),lr(w,I),lr(w,m),v&&v()},S=w=>(v,Pe)=>{const Ge=w?A:F,Le=()=>_(v,w,Pe);ar(Ge,[v,Le]),Ju(()=>{lr(v,w?c:i),fn(v,w?d:l),Qu(Ge)||Xu(v,r,N,Le)})};return Ye(e,{onBeforeEnter(w){ar(q,[w]),fn(w,i),fn(w,a)},onBeforeAppear(w){ar(ae,[w]),fn(w,c),fn(w,h)},onEnter:S(!1),onAppear:S(!0),onLeave(w,v){w._isLeaving=!0;const Pe=()=>b(w,v);fn(w,p),w._enterCancelled?(fn(w,m),eh()):(eh(),fn(w,m)),Ju(()=>{w._isLeaving&&(lr(w,p),fn(w,I),Qu(j)||Xu(w,r,L,Pe))}),ar(j,[w,Pe])},onEnterCancelled(w){_(w,!1,void 0,!0),ar(B,[w])},onAppearCancelled(w){_(w,!0,void 0,!0),ar(y,[w])},onLeaveCancelled(w){b(w),ar(ce,[w])}})}function qy(t){if(t==null)return null;if(Ve(t))return[Na(t.enter),Na(t.leave)];{const e=Na(t);return[e,e]}}function Na(t){return Km(t)}function fn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ks]||(t[Ks]=new Set)).add(e)}function lr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Ks];n&&(n.delete(e),n.size||(t[Ks]=void 0))}function Ju(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let zy=0;function Xu(t,e,n,r){const s=t._endId=++zy,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:l,propCount:c}=Wy(t,e);if(!a)return r();const h=a+"end";let d=0;const p=()=>{t.removeEventListener(h,m),i()},m=I=>{I.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(h,m)}function Wy(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${Nn}Delay`),i=r(`${Nn}Duration`),a=Yu(s,i),l=r(`${ws}Delay`),c=r(`${ws}Duration`),h=Yu(l,c);let d=null,p=0,m=0;e===Nn?a>0&&(d=Nn,p=a,m=i.length):e===ws?h>0&&(d=ws,p=h,m=c.length):(p=Math.max(a,h),d=p>0?a>h?Nn:ws:null,m=d?d===Nn?i.length:c.length:0);const I=d===Nn&&/\b(transform|all)(,|$)/.test(r(`${Nn}Property`).toString());return{type:d,timeout:p,propCount:m,hasTransform:I}}function Yu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Zu(n)+Zu(t[r])))}function Zu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function eh(){return document.body.offsetHeight}function Gy(t,e,n){const r=t[Ks];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const th=Symbol("_vod"),Ky=Symbol("_vsh"),Qy=Symbol(""),Jy=/(^|;)\s*display\s*:/;function Xy(t,e,n){const r=t.style,s=je(n);let i=!1;if(n&&!s){if(e)if(je(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&Yi(r,l,"")}else for(const a in e)n[a]==null&&Yi(r,a,"");for(const a in n)a==="display"&&(i=!0),Yi(r,a,n[a])}else if(s){if(e!==n){const a=r[Qy];a&&(n+=";"+a),r.cssText=n,i=Jy.test(n)}}else e&&t.removeAttribute("style");th in t&&(t[th]=i?r.display:"",t[Ky]&&(r.display="none"))}const nh=/\s*!important$/;function Yi(t,e,n){if(se(n))n.forEach(r=>Yi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Yy(t,e);nh.test(n)?t.setProperty(Ar(r),n.replace(nh,""),"important"):t[r]=n}}const rh=["Webkit","Moz","ms"],xa={};function Yy(t,e){const n=xa[e];if(n)return n;let r=Ft(e);if(r!=="filter"&&r in t)return xa[e]=r;r=Fo(r);for(let s=0;s<rh.length;s++){const i=rh[s]+r;if(i in t)return xa[e]=i}return e}const sh="http://www.w3.org/1999/xlink";function ih(t,e,n,r,s,i=e_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(sh,e.slice(6,e.length)):t.setAttributeNS(sh,e,n):n==null||i&&!td(n)?t.removeAttribute(e):t.setAttribute(e,i?"":er(n)?String(n):n)}function oh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ap(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=td(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function xr(t,e,n,r){t.addEventListener(e,n,r)}function Zy(t,e,n,r){t.removeEventListener(e,n,r)}const ah=Symbol("_vei");function ev(t,e,n,r,s=null){const i=t[ah]||(t[ah]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=tv(e);if(r){const h=i[e]=sv(r,s);xr(t,l,h,c)}else a&&(Zy(t,l,a,c),i[e]=void 0)}}const lh=/(?:Once|Passive|Capture)$/;function tv(t){let e;if(lh.test(t)){e={};let r;for(;r=t.match(lh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ar(t.slice(2)),e]}let Va=0;const nv=Promise.resolve(),rv=()=>Va||(nv.then(()=>Va=0),Va=Date.now());function sv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Kt(iv(r,n.value),e,5,[r])};return n.value=t,n.attached=rv(),n}function iv(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ch=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ov=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Gy(t,r,a):e==="style"?Xy(t,n,r):Vo(e)?Vl(e)||ev(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):av(t,e,r,a))?(oh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ih(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!je(r))?oh(t,Ft(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ih(t,e,r,a))};function av(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ch(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ch(e)&&je(n)?!1:e in t}const uh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>Gi(e,n):e};function lv(t){t.target.composing=!0}function hh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ma=Symbol("_assign"),cv={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ma]=uh(s);const i=r||s.props&&s.props.type==="number";xr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Ja(l)),t[Ma](l)}),n&&xr(t,"change",()=>{t.value=t.value.trim()}),e||(xr(t,"compositionstart",lv),xr(t,"compositionend",hh),xr(t,"change",hh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Ma]=uh(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ja(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},uv=["ctrl","shift","alt","meta"],hv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>uv.some(n=>t[`${n}Key`]&&!e.includes(n))},fv=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=hv[e[a]];if(l&&l(s,e))return}return t(s,...i)})},dv=Ye({patchProp:ov},$y);let fh;function pv(){return fh||(fh=uy(dv))}const gv=(...t)=>{const e=pv().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_v(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,mv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function mv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _v(t){return je(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const yv=Symbol();var dh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(dh||(dh={}));function vv(){const t=t_(!0),e=t.run(()=>_r({}));let n=[],r=[];const s=Td({install(i){s._a=i,i.provide(yv,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Vr=typeof document<"u";function up(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Ev(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&up(t.default)}const Se=Object.assign;function La(t,e){const n={};for(const r in e){const s=e[r];n[r]=Qt(s)?s.map(t):t(s)}return n}const xs=()=>{},Qt=Array.isArray,hp=/#/g,Tv=/&/g,Iv=/\//g,wv=/=/g,bv=/\?/g,fp=/\+/g,Av=/%5B/g,Sv=/%5D/g,dp=/%5E/g,Rv=/%60/g,pp=/%7B/g,Cv=/%7C/g,gp=/%7D/g,Pv=/%20/g;function Yl(t){return encodeURI(""+t).replace(Cv,"|").replace(Av,"[").replace(Sv,"]")}function kv(t){return Yl(t).replace(pp,"{").replace(gp,"}").replace(dp,"^")}function cl(t){return Yl(t).replace(fp,"%2B").replace(Pv,"+").replace(hp,"%23").replace(Tv,"%26").replace(Rv,"`").replace(pp,"{").replace(gp,"}").replace(dp,"^")}function Ov(t){return cl(t).replace(wv,"%3D")}function Dv(t){return Yl(t).replace(hp,"%23").replace(bv,"%3F")}function Nv(t){return t==null?"":Dv(t).replace(Iv,"%2F")}function Qs(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const xv=/\/$/,Vv=t=>t.replace(xv,"");function Fa(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=Uv(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Qs(a)}}function Mv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ph(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Lv(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Qr(e.matched[r],n.matched[s])&&mp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Fv(t[n],e[n]))return!1;return!0}function Fv(t,e){return Qt(t)?gh(t,e):Qt(e)?gh(e,t):t===e}function gh(t,e){return Qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Uv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Js;(function(t){t.pop="pop",t.push="push"})(Js||(Js={}));var Vs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Vs||(Vs={}));function $v(t){if(!t)if(Vr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Vv(t)}const Bv=/^[^#]+#/;function jv(t,e){return t.replace(Bv,"#")+e}function Hv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Xo=()=>({left:window.scrollX,top:window.scrollY});function qv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Hv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function mh(t,e){return(history.state?history.state.position-e:-1)+t}const ul=new Map;function zv(t,e){ul.set(t,e)}function Wv(t){const e=ul.get(t);return ul.delete(t),e}let Gv=()=>location.protocol+"//"+location.host;function _p(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),ph(c,"")}return ph(n,t)+r+s}function Kv(t,e,n,r){let s=[],i=[],a=null;const l=({state:m})=>{const I=_p(t,location),P=n.value,N=e.value;let L=0;if(m){if(n.value=I,e.value=m,a&&a===P){a=null;return}L=N?m.position-N.position:0}else r(I);s.forEach(q=>{q(n.value,P,{delta:L,type:Js.pop,direction:L?L>0?Vs.forward:Vs.back:Vs.unknown})})};function c(){a=n.value}function h(m){s.push(m);const I=()=>{const P=s.indexOf(m);P>-1&&s.splice(P,1)};return i.push(I),I}function d(){const{history:m}=window;m.state&&m.replaceState(Se({},m.state,{scroll:Xo()}),"")}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function _h(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Xo():null}}function Qv(t){const{history:e,location:n}=window,r={value:_p(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Gv()+t+c;try{e[d?"replaceState":"pushState"](h,"",m),s.value=h}catch(I){console.error(I),n[d?"replace":"assign"](m)}}function a(c,h){const d=Se({},e.state,_h(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Se({},s.value,e.state,{forward:c,scroll:Xo()});i(d.current,d,!0);const p=Se({},_h(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function Jv(t){t=$v(t);const e=Qv(t),n=Kv(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:jv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Xv(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Jv(t)}function Yv(t){return typeof t=="string"||t&&typeof t=="object"}function yp(t){return typeof t=="string"||typeof t=="symbol"}const vp=Symbol("");var yh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yh||(yh={}));function Jr(t,e){return Se(new Error,{type:t,[vp]:!0},e)}function dn(t,e){return t instanceof Error&&vp in t&&(e==null||!!(t.type&e))}const vh="[^/]+?",Zv={sensitive:!1,strict:!1,start:!0,end:!0},eE=/[.+*?^${}()[\]/\\]/g;function tE(t,e){const n=Se({},Zv,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let I=40+(n.sensitive?.25:0);if(m.type===0)p||(s+="/"),s+=m.value.replace(eE,"\\$&"),I+=40;else if(m.type===1){const{value:P,repeatable:N,optional:L,regexp:q}=m;i.push({name:P,repeatable:N,optional:L});const F=q||vh;if(F!==vh){I+=10;try{new RegExp(`(${F})`)}catch(j){throw new Error(`Invalid custom RegExp for param "${P}" (${F}): `+j.message)}}let B=N?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(B=L&&h.length<2?`(?:/${B})`:"/"+B),L&&(B+="?"),s+=B,I+=20,L&&(I+=-8),N&&(I+=-20),F===".*"&&(I+=-50)}d.push(I)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let m=1;m<d.length;m++){const I=d[m]||"",P=i[m-1];p[P.name]=I&&P.repeatable?I.split("/"):I}return p}function c(h){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const I of m)if(I.type===0)d+=I.value;else if(I.type===1){const{value:P,repeatable:N,optional:L}=I,q=P in h?h[P]:"";if(Qt(q)&&!N)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const F=Qt(q)?q.join("/"):q;if(!F)if(L)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=F}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function nE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ep(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=nE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Eh(r))return 1;if(Eh(s))return-1}return s.length-r.length}function Eh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rE={type:0,value:""},sE=/[a-zA-Z0-9_]/;function iE(t){if(!t)return[[]];if(t==="/")return[[rE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(I){throw new Error(`ERR (${n})/"${h}": ${I}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):m();break;case 4:m(),n=r;break;case 1:c==="("?n=2:sE.test(c)?m():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function oE(t,e,n){const r=tE(iE(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aE(t,e){const n=[],r=new Map;e=bh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,m,I){const P=!I,N=Ih(p);N.aliasOf=I&&I.record;const L=bh(e,p),q=[N];if("alias"in p){const j=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of j)q.push(Ih(Se({},N,{components:I?I.record.components:N.components,path:ce,aliasOf:I?I.record:N})))}let F,B;for(const j of q){const{path:ce}=j;if(m&&ce[0]!=="/"){const ae=m.record.path,A=ae[ae.length-1]==="/"?"":"/";j.path=m.record.path+(ce&&A+ce)}if(F=oE(j,m,L),I?I.alias.push(F):(B=B||F,B!==F&&B.alias.push(F),P&&p.name&&!wh(F)&&a(p.name)),Tp(F)&&c(F),N.children){const ae=N.children;for(let A=0;A<ae.length;A++)i(ae[A],F,I&&I.children[A])}I=I||F}return B?()=>{a(B)}:xs}function a(p){if(yp(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(a),m.alias.forEach(a))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const m=uE(p,n);n.splice(m,0,p),p.record.name&&!wh(p)&&r.set(p.record.name,p)}function h(p,m){let I,P={},N,L;if("name"in p&&p.name){if(I=r.get(p.name),!I)throw Jr(1,{location:p});L=I.record.name,P=Se(Th(m.params,I.keys.filter(B=>!B.optional).concat(I.parent?I.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),p.params&&Th(p.params,I.keys.map(B=>B.name))),N=I.stringify(P)}else if(p.path!=null)N=p.path,I=n.find(B=>B.re.test(N)),I&&(P=I.parse(N),L=I.record.name);else{if(I=m.name?r.get(m.name):n.find(B=>B.re.test(m.path)),!I)throw Jr(1,{location:p,currentLocation:m});L=I.record.name,P=Se({},m.params,p.params),N=I.stringify(P)}const q=[];let F=I;for(;F;)q.unshift(F.record),F=F.parent;return{name:L,path:N,params:P,matched:q,meta:cE(q)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Th(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Ih(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:lE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function lE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function wh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cE(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function bh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function uE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Ep(t,e[i])<0?r=i:n=i+1}const s=hE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function hE(t){let e=t;for(;e=e.parent;)if(Tp(e)&&Ep(t,e)===0)return e}function Tp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function fE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(fp," "),a=i.indexOf("="),l=Qs(a<0?i:i.slice(0,a)),c=a<0?null:Qs(i.slice(a+1));if(l in e){let h=e[l];Qt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Ah(t){let e="";for(let n in t){const r=t[n];if(n=Ov(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qt(r)?r.map(i=>i&&cl(i)):[r&&cl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Qt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const pE=Symbol(""),Sh=Symbol(""),Yo=Symbol(""),Zl=Symbol(""),hl=Symbol("");function bs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Un(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=m=>{m===!1?c(Jr(4,{from:n,to:e})):m instanceof Error?c(m):Yv(m)?c(Jr(2,{from:e,to:m})):(a&&r.enterCallbacks[s]===a&&typeof m=="function"&&a.push(m),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(m=>c(m))})}function Ua(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(up(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Un(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=Ev(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const I=(p.__vccOpts||p)[e];return I&&Un(I,n,r,a,l,s)()}))}}return i}function Rh(t){const e=Gt(Yo),n=Gt(Zl),r=jt(()=>{const c=we(t.to);return e.resolve(c)}),s=jt(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Qr.bind(null,d));if(m>-1)return m;const I=Ch(c[h-2]);return h>1&&Ch(d)===I&&p[p.length-1].path!==I?p.findIndex(Qr.bind(null,c[h-2])):m}),i=jt(()=>s.value>-1&&yE(n.params,r.value.params)),a=jt(()=>s.value>-1&&s.value===n.matched.length-1&&mp(n.params,r.value.params));function l(c={}){if(_E(c)){const h=e[we(t.replace)?"replace":"push"](we(t.to)).catch(xs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:jt(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function gE(t){return t.length===1?t[0]:t}const mE=Md({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Rh,setup(t,{slots:e}){const n=jo(Rh(t)),{options:r}=Gt(Yo),s=jt(()=>({[Ph(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ph(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&gE(e.default(n));return t.custom?i:Xl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ke=mE;function _E(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Qt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Ch(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ph=(t,e,n)=>t??e??n,vE=Md({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Gt(hl),s=jt(()=>t.route||r.value),i=Gt(Sh,0),a=jt(()=>{let h=we(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=jt(()=>s.value.matched[a.value]);Ki(Sh,jt(()=>a.value+1)),Ki(pE,l),Ki(hl,s);const c=_r();return Qi(()=>[c.value,l.value,t.name],([h,d,p],[m,I,P])=>{d&&(d.instances[p]=h,I&&I!==d&&h&&h===m&&(d.leaveGuards.size||(d.leaveGuards=I.leaveGuards),d.updateGuards.size||(d.updateGuards=I.updateGuards))),h&&d&&(!I||!Qr(d,I)||!m)&&(d.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,m=p&&p.components[d];if(!m)return kh(n.default,{Component:m,route:h});const I=p.props[d],P=I?I===!0?h.params:typeof I=="function"?I(h):I:null,L=Xl(m,Se({},P,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return kh(n.default,{Component:L,route:h})||L}}});function kh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ip=vE;function EE(t){const e=aE(t.routes,t),n=t.parseQuery||fE,r=t.stringifyQuery||Ah,s=t.history,i=bs(),a=bs(),l=bs(),c=T_(xn);let h=xn;Vr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=La.bind(null,O=>""+O),p=La.bind(null,Nv),m=La.bind(null,Qs);function I(O,X){let Q,Y;return yp(O)?(Q=e.getRecordMatcher(O),Y=X):Y=O,e.addRoute(Y,Q)}function P(O){const X=e.getRecordMatcher(O);X&&e.removeRoute(X)}function N(){return e.getRoutes().map(O=>O.record)}function L(O){return!!e.getRecordMatcher(O)}function q(O,X){if(X=Se({},X||c.value),typeof O=="string"){const R=Fa(n,O,X.path),D=e.resolve({path:R.path},X),V=s.createHref(R.fullPath);return Se(R,D,{params:m(D.params),hash:Qs(R.hash),redirectedFrom:void 0,href:V})}let Q;if(O.path!=null)Q=Se({},O,{path:Fa(n,O.path,X.path).path});else{const R=Se({},O.params);for(const D in R)R[D]==null&&delete R[D];Q=Se({},O,{params:p(R)}),X.params=p(X.params)}const Y=e.resolve(Q,X),Te=O.hash||"";Y.params=d(m(Y.params));const E=Mv(r,Se({},O,{hash:kv(Te),path:Y.path})),T=s.createHref(E);return Se({fullPath:E,hash:Te,query:r===Ah?dE(O.query):O.query||{}},Y,{redirectedFrom:void 0,href:T})}function F(O){return typeof O=="string"?Fa(n,O,c.value.path):Se({},O)}function B(O,X){if(h!==O)return Jr(8,{from:X,to:O})}function j(O){return A(O)}function ce(O){return j(Se(F(O),{replace:!0}))}function ae(O){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:Q}=X;let Y=typeof Q=="function"?Q(O):Q;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=F(Y):{path:Y},Y.params={}),Se({query:O.query,hash:O.hash,params:Y.path!=null?{}:O.params},Y)}}function A(O,X){const Q=h=q(O),Y=c.value,Te=O.state,E=O.force,T=O.replace===!0,R=ae(Q);if(R)return A(Se(F(R),{state:typeof R=="object"?Se({},Te,R.state):Te,force:E,replace:T}),X||Q);const D=Q;D.redirectedFrom=X;let V;return!E&&Lv(r,Y,Q)&&(V=Jr(16,{to:D,from:Y}),Nt(Y,Y,!0,!1)),(V?Promise.resolve(V):b(D,Y)).catch(x=>dn(x)?dn(x,2)?x:Ut(x):pe(x,D,Y)).then(x=>{if(x){if(dn(x,2))return A(Se({replace:T},F(x.to),{state:typeof x.to=="object"?Se({},Te,x.to.state):Te,force:E}),X||D)}else x=w(D,Y,!0,T,Te);return S(D,Y,x),x})}function y(O,X){const Q=B(O,X);return Q?Promise.reject(Q):Promise.resolve()}function _(O){const X=Cn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(O):O()}function b(O,X){let Q;const[Y,Te,E]=TE(O,X);Q=Ua(Y.reverse(),"beforeRouteLeave",O,X);for(const R of Y)R.leaveGuards.forEach(D=>{Q.push(Un(D,O,X))});const T=y.bind(null,O,X);return Q.push(T),bt(Q).then(()=>{Q=[];for(const R of i.list())Q.push(Un(R,O,X));return Q.push(T),bt(Q)}).then(()=>{Q=Ua(Te,"beforeRouteUpdate",O,X);for(const R of Te)R.updateGuards.forEach(D=>{Q.push(Un(D,O,X))});return Q.push(T),bt(Q)}).then(()=>{Q=[];for(const R of E)if(R.beforeEnter)if(Qt(R.beforeEnter))for(const D of R.beforeEnter)Q.push(Un(D,O,X));else Q.push(Un(R.beforeEnter,O,X));return Q.push(T),bt(Q)}).then(()=>(O.matched.forEach(R=>R.enterCallbacks={}),Q=Ua(E,"beforeRouteEnter",O,X,_),Q.push(T),bt(Q))).then(()=>{Q=[];for(const R of a.list())Q.push(Un(R,O,X));return Q.push(T),bt(Q)}).catch(R=>dn(R,8)?R:Promise.reject(R))}function S(O,X,Q){l.list().forEach(Y=>_(()=>Y(O,X,Q)))}function w(O,X,Q,Y,Te){const E=B(O,X);if(E)return E;const T=X===xn,R=Vr?history.state:{};Q&&(Y||T?s.replace(O.fullPath,Se({scroll:T&&R&&R.scroll},Te)):s.push(O.fullPath,Te)),c.value=O,Nt(O,X,Q,T),Ut()}let v;function Pe(){v||(v=s.listen((O,X,Q)=>{if(!Jt.listening)return;const Y=q(O),Te=ae(Y);if(Te){A(Se(Te,{replace:!0,force:!0}),Y).catch(xs);return}h=Y;const E=c.value;Vr&&zv(mh(E.fullPath,Q.delta),Xo()),b(Y,E).catch(T=>dn(T,12)?T:dn(T,2)?(A(Se(F(T.to),{force:!0}),Y).then(R=>{dn(R,20)&&!Q.delta&&Q.type===Js.pop&&s.go(-1,!1)}).catch(xs),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),pe(T,Y,E))).then(T=>{T=T||w(Y,E,!1),T&&(Q.delta&&!dn(T,8)?s.go(-Q.delta,!1):Q.type===Js.pop&&dn(T,20)&&s.go(-1,!1)),S(Y,E,T)}).catch(xs)}))}let Ge=bs(),Le=bs(),me;function pe(O,X,Q){Ut(O);const Y=Le.list();return Y.length?Y.forEach(Te=>Te(O,X,Q)):console.error(O),Promise.reject(O)}function Pt(){return me&&c.value!==xn?Promise.resolve():new Promise((O,X)=>{Ge.add([O,X])})}function Ut(O){return me||(me=!O,Pe(),Ge.list().forEach(([X,Q])=>O?Q(O):X()),Ge.reset()),O}function Nt(O,X,Q,Y){const{scrollBehavior:Te}=t;if(!Vr||!Te)return Promise.resolve();const E=!Q&&Wv(mh(O.fullPath,0))||(Y||!Q)&&history.state&&history.state.scroll||null;return Ad().then(()=>Te(O,X,E)).then(T=>T&&qv(T)).catch(T=>pe(T,O,X))}const Fe=O=>s.go(O);let Ue;const Cn=new Set,Jt={currentRoute:c,listening:!0,addRoute:I,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:N,resolve:q,options:t,push:j,replace:ce,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Le.add,isReady:Pt,install(O){const X=this;O.component("RouterLink",Ke),O.component("RouterView",Ip),O.config.globalProperties.$router=X,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>we(c)}),Vr&&!Ue&&c.value===xn&&(Ue=!0,j(s.location).catch(Te=>{}));const Q={};for(const Te in xn)Object.defineProperty(Q,Te,{get:()=>c.value[Te],enumerable:!0});O.provide(Yo,X),O.provide(Zl,vd(Q)),O.provide(hl,c);const Y=O.unmount;Cn.add(O),O.unmount=function(){Cn.delete(O),Cn.size<1&&(h=xn,v&&v(),v=null,c.value=xn,Ue=!1,me=!1),Y()}}};function bt(O){return O.reduce((X,Q)=>X.then(()=>_(Q)),Promise.resolve())}return Jt}function TE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>Qr(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>Qr(h,c))||s.push(c))}return[n,r,s]}function nC(){return Gt(Yo)}function rC(t){return Gt(Zl)}const lt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},IE={class:"header"},wE={class:"nav desktop-nav"},bE={key:0,class:"nav mobile-drawer"},AE={__name:"Header",setup(t){const e=_r(!1);function n(r){const s=document.querySelector(".mobile-drawer"),i=document.querySelector(".hamburger");e.value&&s&&!s.contains(r.target)&&!i.contains(r.target)&&(e.value=!1)}return Wl(()=>{document.addEventListener("click",n)}),Gl(()=>{document.removeEventListener("click",n)}),(r,s)=>(ve(),Ce("header",IE,[s[16]||(s[16]=J("h1",{class:"logo"},"Association of Family Psychiatrists",-1)),J("button",{class:"hamburger",onClick:s[0]||(s[0]=i=>e.value=!e.value),"aria-label":"Toggle Menu"},"☰"),J("nav",wE,[re(we(Ke),{to:"/","exact-active-class":"active",class:"nav-link"},{default:He(()=>s[6]||(s[6]=[ze("Home")])),_:1,__:[6]}),re(we(Ke),{to:"/about","exact-active-class":"active",class:"nav-link"},{default:He(()=>s[7]||(s[7]=[ze("About")])),_:1,__:[7]}),re(we(Ke),{to:"/resources","exact-active-class":"active",class:"nav-link"},{default:He(()=>s[8]||(s[8]=[ze("Resources")])),_:1,__:[8]}),re(we(Ke),{to:"/members","exact-active-class":"active",class:"nav-link"},{default:He(()=>s[9]||(s[9]=[ze("Members")])),_:1,__:[9]}),re(we(Ke),{to:"/membership",class:"member-button"},{default:He(()=>s[10]||(s[10]=[ze("Become a Member")])),_:1,__:[10]})]),re(cp,{name:"slide"},{default:He(()=>[e.value?(ve(),Ce("nav",bE,[re(we(Ke),{to:"/","exact-active-class":"active",onClick:s[1]||(s[1]=i=>e.value=!1)},{default:He(()=>s[11]||(s[11]=[ze("Home")])),_:1,__:[11]}),re(we(Ke),{to:"/about","exact-active-class":"active",onClick:s[2]||(s[2]=i=>e.value=!1)},{default:He(()=>s[12]||(s[12]=[ze("About")])),_:1,__:[12]}),re(we(Ke),{to:"/resources","exact-active-class":"active",onClick:s[3]||(s[3]=i=>e.value=!1)},{default:He(()=>s[13]||(s[13]=[ze("Resources")])),_:1,__:[13]}),re(we(Ke),{to:"/members","exact-active-class":"active",onClick:s[4]||(s[4]=i=>e.value=!1)},{default:He(()=>s[14]||(s[14]=[ze("Members")])),_:1,__:[14]}),re(we(Ke),{to:"/membership",onClick:s[5]||(s[5]=i=>e.value=!1),class:"member-button mobile-member-button"},{default:He(()=>s[15]||(s[15]=[ze(" Become a Member ")])),_:1,__:[15]})])):qr("",!0)]),_:1})]))}},SE=lt(AE,[["__scopeId","data-v-f594369c"]]),RE="/site/assets/afp-logo-with-text-DDgb-2fz.png",CE=()=>{};var Oh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},PE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},bp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,I=h&63;c||(I=64,a||(m=64)),r.push(n[d],n[p],n[m],n[I])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new kE;const m=i<<2|l>>4;if(r.push(m),h!==64){const I=l<<4&240|h>>2;if(r.push(I),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OE=function(t){const e=wp(t);return bp.encodeByteArray(e,!0)},mo=function(t){return OE(t).replace(/\./g,"")},Ap=function(t){try{return bp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE=()=>DE().__FIREBASE_DEFAULTS__,xE=()=>{if(typeof process>"u"||typeof Oh>"u")return;const t=Oh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},VE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ap(t[1]);return e&&JSON.parse(e)},Zo=()=>{try{return CE()||NE()||xE()||VE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Sp=t=>{var e,n;return(n=(e=Zo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},ME=t=>{const e=Sp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Rp=()=>{var t;return(t=Zo())===null||t===void 0?void 0:t.config},Cp=t=>{var e;return(e=Zo())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ci(t){return t.endsWith(".cloudworkstations.dev")}async function Pp(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[mo(JSON.stringify(n)),mo(JSON.stringify(a)),""].join(".")}const Ms={};function UE(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ms))Ms[e]?t.emulator.push(e):t.prod.push(e);return t}function $E(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Dh=!1;function kp(t,e){if(typeof window>"u"||typeof document>"u"||!ci(window.location.host)||Ms[t]===e||Ms[t]||Dh)return;Ms[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=UE().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,I){m.setAttribute("width","24"),m.setAttribute("id",I),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Dh=!0,a()},m}function d(m,I){m.setAttribute("id",I),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=$E(r),I=n("text"),P=document.getElementById(I)||document.createElement("span"),N=n("learnmore"),L=document.getElementById(N)||document.createElement("a"),q=n("preprendIcon"),F=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const B=m.element;l(B),d(L,N);const j=h();c(F,q),B.append(F,P,L,j),document.body.appendChild(B)}i?(P.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(F.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function BE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function jE(){var t;const e=(t=Zo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WE(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GE(){return!jE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function KE(){try{return typeof indexedDB=="object"}catch{return!1}}function QE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="FirebaseError";class Rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=JE,Object.setPrototypeOf(this,Rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?XE(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Rn(s,l,r)}}function XE(t,e){return t.replace(YE,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const YE=/\{\$([^}]+)}/g;function ZE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Nh(i)&&Nh(a)){if(!yr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Nh(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function eT(t,e){const n=new tT(t,e);return n.subscribe.bind(n)}class tT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");nT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=$a),s.error===void 0&&(s.error=$a),s.complete===void 0&&(s.complete=$a);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $a(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(t){return t&&t._delegate?t._delegate:t}class vr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new LE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iT(e))try{this.getOrInitializeService({instanceIdentifier:ur})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=ur){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ur){return this.instances.has(e)}getOptions(e=ur){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ur){return this.component?this.component.multipleInstances?e:ur:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sT(t){return t===ur?void 0:t}function iT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new rT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ge||(ge={}));const aT={debug:ge.DEBUG,verbose:ge.VERBOSE,info:ge.INFO,warn:ge.WARN,error:ge.ERROR,silent:ge.SILENT},lT=ge.INFO,cT={[ge.DEBUG]:"log",[ge.VERBOSE]:"log",[ge.INFO]:"info",[ge.WARN]:"warn",[ge.ERROR]:"error"},uT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=cT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=lT,this._logHandler=uT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ge))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?aT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ge.DEBUG,...e),this._logHandler(this,ge.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ge.VERBOSE,...e),this._logHandler(this,ge.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ge.INFO,...e),this._logHandler(this,ge.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ge.WARN,...e),this._logHandler(this,ge.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ge.ERROR,...e),this._logHandler(this,ge.ERROR,...e)}}const hT=(t,e)=>e.some(n=>t instanceof n);let xh,Vh;function fT(){return xh||(xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dT(){return Vh||(Vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Op=new WeakMap,fl=new WeakMap,Dp=new WeakMap,Ba=new WeakMap,tc=new WeakMap;function pT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(zn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Op.set(n,t)}).catch(()=>{}),tc.set(e,t),e}function gT(t){if(fl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});fl.set(t,e)}let dl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return fl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mT(t){dl=t(dl)}function _T(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ja(this),e,...n);return Dp.set(r,e.sort?e.sort():[e]),zn(r)}:dT().includes(t)?function(...e){return t.apply(ja(this),e),zn(Op.get(this))}:function(...e){return zn(t.apply(ja(this),e))}}function yT(t){return typeof t=="function"?_T(t):(t instanceof IDBTransaction&&gT(t),hT(t,fT())?new Proxy(t,dl):t)}function zn(t){if(t instanceof IDBRequest)return pT(t);if(Ba.has(t))return Ba.get(t);const e=yT(t);return e!==t&&(Ba.set(t,e),tc.set(e,t)),e}const ja=t=>tc.get(t);function vT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=zn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(zn(a.result),c.oldVersion,c.newVersion,zn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const ET=["get","getKey","getAll","getAllKeys","count"],TT=["put","add","delete","clear"],Ha=new Map;function Mh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ha.get(e))return Ha.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=TT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ET.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return Ha.set(e,i),i}mT(t=>({...t,get:(e,n,r)=>Mh(e,n)||t.get(e,n,r),has:(e,n)=>!!Mh(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pl="@firebase/app",Lh="0.13.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wn=new ec("@firebase/app"),bT="@firebase/app-compat",AT="@firebase/analytics-compat",ST="@firebase/analytics",RT="@firebase/app-check-compat",CT="@firebase/app-check",PT="@firebase/auth",kT="@firebase/auth-compat",OT="@firebase/database",DT="@firebase/data-connect",NT="@firebase/database-compat",xT="@firebase/functions",VT="@firebase/functions-compat",MT="@firebase/installations",LT="@firebase/installations-compat",FT="@firebase/messaging",UT="@firebase/messaging-compat",$T="@firebase/performance",BT="@firebase/performance-compat",jT="@firebase/remote-config",HT="@firebase/remote-config-compat",qT="@firebase/storage",zT="@firebase/storage-compat",WT="@firebase/firestore",GT="@firebase/ai",KT="@firebase/firestore-compat",QT="firebase",JT="11.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="[DEFAULT]",XT={[pl]:"fire-core",[bT]:"fire-core-compat",[ST]:"fire-analytics",[AT]:"fire-analytics-compat",[CT]:"fire-app-check",[RT]:"fire-app-check-compat",[PT]:"fire-auth",[kT]:"fire-auth-compat",[OT]:"fire-rtdb",[DT]:"fire-data-connect",[NT]:"fire-rtdb-compat",[xT]:"fire-fn",[VT]:"fire-fn-compat",[MT]:"fire-iid",[LT]:"fire-iid-compat",[FT]:"fire-fcm",[UT]:"fire-fcm-compat",[$T]:"fire-perf",[BT]:"fire-perf-compat",[jT]:"fire-rc",[HT]:"fire-rc-compat",[qT]:"fire-gcs",[zT]:"fire-gcs-compat",[WT]:"fire-fst",[KT]:"fire-fst-compat",[GT]:"fire-vertex","fire-js":"fire-js",[QT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Map,YT=new Map,ml=new Map;function Fh(t,e){try{t.container.addComponent(e)}catch(n){wn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xr(t){const e=t.name;if(ml.has(e))return wn.debug(`There were multiple attempts to register component ${e}.`),!1;ml.set(e,t);for(const n of _o.values())Fh(n,t);for(const n of YT.values())Fh(n,t);return!0}function nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Wn=new ui("app","Firebase",ZT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Wn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=JT;function Np(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Wn.create("bad-app-name",{appName:String(s)});if(n||(n=Rp()),!n)throw Wn.create("no-options");const i=_o.get(s);if(i){if(yr(n,i.options)&&yr(r,i.config))return i;throw Wn.create("duplicate-app",{appName:s})}const a=new oT(s);for(const c of ml.values())a.addComponent(c);const l=new eI(n,r,a);return _o.set(s,l),l}function xp(t=gl){const e=_o.get(t);if(!e&&t===gl&&Rp())return Np();if(!e)throw Wn.create("no-app",{appName:t});return e}function Gn(t,e,n){var r;let s=(r=XT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wn.warn(l.join(" "));return}Xr(new vr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tI="firebase-heartbeat-database",nI=1,Xs="firebase-heartbeat-store";let qa=null;function Vp(){return qa||(qa=vT(tI,nI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Wn.create("idb-open",{originalErrorMessage:t.message})})),qa}async function rI(t){try{const n=(await Vp()).transaction(Xs),r=await n.objectStore(Xs).get(Mp(t));return await n.done,r}catch(e){if(e instanceof Rn)wn.warn(e.message);else{const n=Wn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wn.warn(n.message)}}}async function Uh(t,e){try{const r=(await Vp()).transaction(Xs,"readwrite");await r.objectStore(Xs).put(e,Mp(t)),await r.done}catch(n){if(n instanceof Rn)wn.warn(n.message);else{const r=Wn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wn.warn(r.message)}}}function Mp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=1024,iI=30;class oI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new lI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$h();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>iI){const a=cI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){wn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$h(),{heartbeatsToSend:r,unsentEntries:s}=aI(this._heartbeatsCache.heartbeats),i=mo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return wn.warn(n),""}}}function $h(){return new Date().toISOString().substring(0,10)}function aI(t,e=sI){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Bh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class lI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return KE()?QE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bh(t){return mo(JSON.stringify({version:2,heartbeats:t})).length}function cI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(t){Xr(new vr("platform-logger",e=>new IT(e),"PRIVATE")),Xr(new vr("heartbeat",e=>new oI(e),"PRIVATE")),Gn(pl,Lh,t),Gn(pl,Lh,"esm2017"),Gn("fire-js","")}uI("");var hI="firebase",fI="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn(hI,fI,"app");function rc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Lp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dI=Lp,Fp=new ui("auth","Firebase",Lp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new ec("@firebase/auth");function pI(t,...e){yo.logLevel<=ge.WARN&&yo.warn(`Auth (${is}): ${t}`,...e)}function Zi(t,...e){yo.logLevel<=ge.ERROR&&yo.error(`Auth (${is}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(t,...e){throw sc(t,...e)}function rn(t,...e){return sc(t,...e)}function Up(t,e,n){const r=Object.assign(Object.assign({},dI()),{[e]:n});return new ui("auth","Firebase",r).create(e,{appName:t.name})}function pr(t){return Up(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Fp.create(t,...e)}function oe(t,e,...n){if(!t)throw sc(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Zi(e),new Error(e)}function An(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function gI(){return jh()==="http:"||jh()==="https:"}function jh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(gI()||qE()||"connection"in navigator)?navigator.onLine:!0}function _I(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.shortDelay=e,this.longDelay=n,An(n>e,"Short delay should be less than long delay!"),this.isMobile=BE()||zE()}get(){return mI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(t,e){An(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $p{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],EI=new fi(3e4,6e4);function oc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function os(t,e,n,r,s={}){return Bp(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=hi(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return HE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&ci(t.emulatorConfig.host)&&(h.credentials="include"),$p.fetch()(await jp(t,t.config.apiHost,n,l),h)})}async function Bp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},yI),e);try{const s=new II(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw $i(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $i(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw $i(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw $i(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Up(t,d,h);bn(t,d)}}catch(s){if(s instanceof Rn)throw s;bn(t,"network-request-failed",{message:String(s)})}}async function TI(t,e,n,r,s={}){const i=await os(t,e,n,r,s);return"mfaPendingCredential"in i&&bn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function jp(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?ic(t.config,s):`${t.config.apiScheme}://${s}`;return vI.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class II{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),EI.get())})}}function $i(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wI(t,e){return os(t,"POST","/v1/accounts:delete",e)}async function vo(t,e){return os(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bI(t,e=!1){const n=on(t),r=await n.getIdToken(e),s=ac(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ls(za(s.auth_time)),issuedAtTime:Ls(za(s.iat)),expirationTime:Ls(za(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function za(t){return Number(t)*1e3}function ac(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Zi("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ap(n);return s?JSON.parse(s):(Zi("Failed to decode base64 JWT payload"),null)}catch(s){return Zi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hh(t){const e=ac(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rn&&AI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function AI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ls(this.lastLoginAt),this.creationTime=Ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ys(t,vo(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Hp(i.providerUserInfo):[],l=CI(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new yl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function RI(t){const e=on(t);await Eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function CI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Hp(t){return t.map(e=>{var{providerId:n}=e,r=rc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PI(t,e){const n=await Bp(t,{},async()=>{const r=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await jp(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",$p.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function kI(t,e){return os(t,"POST","/v2/accounts:revokeToken",oc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Hh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await PI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new zr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zr,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class qt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=rc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new SI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new yl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ys(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bI(this,e)}reload(){return RI(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Eo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await Ys(this,wI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,I=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=n.photoURL)!==null&&a!==void 0?a:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,q=(h=n.createdAt)!==null&&h!==void 0?h:void 0,F=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:B,emailVerified:j,isAnonymous:ce,providerData:ae,stsTokenManager:A}=n;oe(B&&A,e,"internal-error");const y=zr.fromJSON(this.name,A);oe(typeof B=="string",e,"internal-error"),Vn(p,e.name),Vn(m,e.name),oe(typeof j=="boolean",e,"internal-error"),oe(typeof ce=="boolean",e,"internal-error"),Vn(I,e.name),Vn(P,e.name),Vn(N,e.name),Vn(L,e.name),Vn(q,e.name),Vn(F,e.name);const _=new qt({uid:B,auth:e,email:m,emailVerified:j,displayName:p,isAnonymous:ce,photoURL:P,phoneNumber:I,tenantId:N,stsTokenManager:y,createdAt:q,lastLoginAt:F});return ae&&Array.isArray(ae)&&(_.providerData=ae.map(b=>Object.assign({},b))),L&&(_._redirectEventId=L),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new zr;s.updateFromServerResponse(n);const i=new qt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Eo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Hp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new zr;l.updateFromIdToken(r);const c=new qt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new yl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh=new Map;function yn(t){An(t instanceof Function,"Expected a class definition");let e=qh.get(t);return e?(An(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qh.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}qp.type="NONE";const zh=qp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(t,e,n){return`firebase:${t}:${e}:${n}`}class Wr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=eo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await vo(this.auth,{idToken:e}).catch(()=>{});return n?qt._fromGetAccountInfoResponse(this.auth,n,e):null}return qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wr(yn(zh),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||yn(zh);const a=eo(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const m=await vo(e,{idToken:d}).catch(()=>{});if(!m)break;p=await qt._fromGetAccountInfoResponse(e,m,d)}else p=qt._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Wr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Wr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Jp(e))return"Blackberry";if(Xp(e))return"Webos";if(Wp(e))return"Safari";if((e.includes("chrome/")||Gp(e))&&!e.includes("edge/"))return"Chrome";if(Qp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zp(t=vt()){return/firefox\//i.test(t)}function Wp(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gp(t=vt()){return/crios\//i.test(t)}function Kp(t=vt()){return/iemobile/i.test(t)}function Qp(t=vt()){return/android/i.test(t)}function Jp(t=vt()){return/blackberry/i.test(t)}function Xp(t=vt()){return/webos/i.test(t)}function lc(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function OI(t=vt()){var e;return lc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function DI(){return WE()&&document.documentMode===10}function Yp(t=vt()){return lc(t)||Qp(t)||Xp(t)||Jp(t)||/windows phone/i.test(t)||Kp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t,e=[]){let n;switch(t){case"Browser":n=Wh(vt());break;case"Worker":n=`${Wh(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${is}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xI(t,e={}){return os(t,"GET","/v2/passwordPolicy",oc(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=6;class MI{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:VI,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LI{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gh(this),this.idTokenSubscription=new Gh(this),this.beforeStateQueue=new NI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await vo(this,{idToken:e}),r=await qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Eo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_I()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(pr(this));const n=e?on(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xI(this),n=new MI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await kI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&pI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cc(t){return on(t)}class Gh{constructor(e){this.auth=e,this.observer=null,this.addObserver=eT(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function FI(t){uc=t}function UI(t){return uc.loadJS(t)}function $I(){return uc.gapiScript}function BI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jI(t,e){const n=nc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(yr(i,e??{}))return s;bn(s,"already-initialized")}return n.initialize({options:e})}function HI(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function qI(t,e,n){const r=cc(t);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=eg(e),{host:a,port:l}=zI(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(yr(h,r.config.emulator)&&yr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ci(a)?(Pp(`${i}//${a}${c}`),kp("Auth",!0)):WI()}function eg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zI(t){const e=eg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Kh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Kh(a)}}}function Kh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function WI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gr(t,e){return TI(t,"POST","/v1/accounts:signInWithIdp",oc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GI="http://localhost";class Er extends tg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Er(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=rc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Er(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:GI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di extends ng{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends di{constructor(){super("facebook.com")}static credential(e){return Er._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.FACEBOOK_SIGN_IN_METHOD="facebook.com";$n.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends di{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Er._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends di{constructor(){super("github.com")}static credential(e){return Er._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.GITHUB_SIGN_IN_METHOD="github.com";jn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends di{constructor(){super("twitter.com")}static credential(e,n){return Er._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await qt._fromIdTokenResponse(e,r,s),a=Qh(r);return new Yr({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qh(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends Rn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,To.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new To(e,n,r,s)}}function rg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?To._fromErrorAndOperation(t,i,e,r):i})}async function KI(t,e,n=!1){const r=await Ys(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QI(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(pr(r));const s="reauthenticate";try{const i=await Ys(t,rg(r,s,e,t),n);oe(i.idToken,r,"internal-error");const a=ac(i.idToken);oe(a,r,"internal-error");const{sub:l}=a;return oe(t.uid===l,r,"user-mismatch"),Yr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&bn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JI(t,e,n=!1){if(tn(t.app))return Promise.reject(pr(t));const r="signIn",s=await rg(t,r,e),i=await Yr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function XI(t,e,n,r){return on(t).onIdTokenChanged(e,n,r)}function YI(t,e,n){return on(t).beforeAuthStateChanged(e,n)}const Io="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI=1e3,ew=10;class ig extends sg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Yp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);DI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ew):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},ZI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ig.type="LOCAL";const tw=ig;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og extends sg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}og.type="SESSION";const ag=og;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ea(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await nw(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ea.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=hc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function sw(t){sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function iw(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ow(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function aw(){return lg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="firebaseLocalStorageDb",lw=1,wo="firebaseLocalStorage",ug="fbase_key";class pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ta(t,e){return t.transaction([wo],e?"readwrite":"readonly").objectStore(wo)}function cw(){const t=indexedDB.deleteDatabase(cg);return new pi(t).toPromise()}function vl(){const t=indexedDB.open(cg,lw);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(wo,{keyPath:ug})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(wo)?e(r):(r.close(),await cw(),e(await vl()))})})}async function Jh(t,e,n){const r=ta(t,!0).put({[ug]:e,value:n});return new pi(r).toPromise()}async function uw(t,e){const n=ta(t,!1).get(e),r=await new pi(n).toPromise();return r===void 0?null:r.value}function Xh(t,e){const n=ta(t,!0).delete(e);return new pi(n).toPromise()}const hw=800,fw=3;class hg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await vl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>fw)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ea._getInstance(aw()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await iw(),!this.activeServiceWorker)return;this.sender=new rw(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ow()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await vl();return await Jh(e,Io,"1"),await Xh(e,Io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uw(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ta(s,!1).getAll();return new pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hw)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}hg.type="LOCAL";const dw=hg;new fi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pw(t,e){return e?yn(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends tg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gw(t){return JI(t.auth,new fc(t),t.bypassAuthState)}function mw(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),QI(n,new fc(t),t.bypassAuthState)}async function _w(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),KI(n,new fc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gw;case"linkViaPopup":case"linkViaRedirect":return _w;case"reauthViaPopup":case"reauthViaRedirect":return mw;default:bn(this.auth,"internal-error")}}resolve(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){An(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw=new fi(2e3,1e4);class Fr extends fg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Fr.currentPopupAction&&Fr.currentPopupAction.cancel(),Fr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){An(this.filter.length===1,"Popup operations only handle one event");const e=hc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yw.get())};e()}}Fr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vw="pendingRedirect",to=new Map;class Ew extends fg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=to.get(this.auth._key());if(!e){try{const r=await Tw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}to.set(this.auth._key(),e)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Tw(t,e){const n=bw(e),r=ww(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Iw(t,e){to.set(t._key(),e)}function ww(t){return yn(t._redirectPersistence)}function bw(t){return eo(vw,t.config.apiKey,t.name)}async function Aw(t,e,n=!1){if(tn(t.app))return Promise.reject(pr(t));const r=cc(t),s=pw(r,e),a=await new Ew(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sw=10*60*1e3;class Rw{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Cw(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!dg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Sw&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yh(e))}saveEventToCache(e){this.cachedEventUids.add(Yh(e)),this.lastProcessedEventTime=Date.now()}}function Yh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function dg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Cw(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pw(t,e={}){return os(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ow=/^https?/;async function Dw(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Pw(t);for(const n of e)try{if(Nw(n))return}catch{}bn(t,"unauthorized-domain")}function Nw(t){const e=_l(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Ow.test(n))return!1;if(kw.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=new fi(3e4,6e4);function Zh(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Vw(t){return new Promise((e,n)=>{var r,s,i;function a(){Zh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zh(),n(rn(t,"network-request-failed"))},timeout:xw.get()})}if(!((s=(r=sn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=sn().gapi)===null||i===void 0)&&i.load)a();else{const l=BI("iframefcb");return sn()[l]=()=>{gapi.load?a():n(rn(t,"network-request-failed"))},UI(`${$I()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw no=null,e})}let no=null;function Mw(t){return no=no||Vw(t),no}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=new fi(5e3,15e3),Fw="__/auth/iframe",Uw="emulator/auth/iframe",$w={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Bw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jw(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ic(e,Uw):`https://${t.config.authDomain}/${Fw}`,r={apiKey:e.apiKey,appName:t.name,v:is},s=Bw.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${hi(r).slice(1)}`}async function Hw(t){const e=await Mw(t),n=sn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:jw(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$w,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=rn(t,"network-request-failed"),l=sn().setTimeout(()=>{i(a)},Lw.get());function c(){sn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zw=500,Ww=600,Gw="_blank",Kw="http://localhost";class ef{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qw(t,e,n,r=zw,s=Ww){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},qw),{width:r.toString(),height:s.toString(),top:i,left:a}),h=vt().toLowerCase();n&&(l=Gp(h)?Gw:n),zp(h)&&(e=e||Kw,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[I,P])=>`${m}${I}=${P},`,"");if(OI(h)&&l!=="_self")return Jw(e||"",l),new ef(null);const p=window.open(e||"",l,d);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new ef(p)}function Jw(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xw="__/auth/handler",Yw="emulator/auth/handler",Zw=encodeURIComponent("fac");async function tf(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:is,eventId:s};if(e instanceof ng){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",ZE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof di){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${Zw}=${encodeURIComponent(c)}`:"";return`${e0(t)}?${hi(l).slice(1)}${h}`}function e0({config:t}){return t.emulator?ic(t,Yw):`https://${t.authDomain}/${Xw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa="webStorageSupport";class t0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ag,this._completeRedirectFn=Aw,this._overrideRedirectResult=Iw}async _openPopup(e,n,r,s){var i;An((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await tf(e,n,r,_l(),s);return Qw(e,a,hc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await tf(e,n,r,_l(),s);return sw(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(An(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Hw(e),r=new Rw(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wa,{type:Wa},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Wa];a!==void 0&&n(!!a),bn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Dw(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Yp()||Wp()||lc()}}const n0=t0;var nf="@firebase/auth",rf="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function i0(t){Xr(new vr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;oe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zp(t)},h=new LI(r,s,i,c);return HI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xr(new vr("auth-internal",e=>{const n=cc(e.getProvider("auth").getImmediate());return(r=>new r0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Gn(nf,rf,s0(t)),Gn(nf,rf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o0=5*60,a0=Cp("authIdTokenMaxAge")||o0;let sf=null;const l0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>a0)return;const s=n==null?void 0:n.token;sf!==s&&(sf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function c0(t=xp()){const e=nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=jI(t,{popupRedirectResolver:n0,persistence:[dw,tw,ag]}),r=Cp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=l0(i.toString());YI(n,a,()=>a(n.currentUser)),XI(n,l=>a(l))}}const s=Sp("auth");return s&&qI(n,`http://${s}`),n}function u0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}FI({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",u0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});i0("Browser");var of=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function _(){}_.prototype=y.prototype,A.D=y.prototype,A.prototype=new _,A.prototype.constructor=A,A.C=function(b,S,w){for(var v=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)v[Pe-2]=arguments[Pe];return y.prototype[S].apply(b,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,_){_||(_=0);var b=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)b[S]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(S=0;16>S;++S)b[S]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=A.g[0],_=A.g[1],S=A.g[2];var w=A.g[3],v=y+(w^_&(S^w))+b[0]+3614090360&4294967295;y=_+(v<<7&4294967295|v>>>25),v=w+(S^y&(_^S))+b[1]+3905402710&4294967295,w=y+(v<<12&4294967295|v>>>20),v=S+(_^w&(y^_))+b[2]+606105819&4294967295,S=w+(v<<17&4294967295|v>>>15),v=_+(y^S&(w^y))+b[3]+3250441966&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(w^_&(S^w))+b[4]+4118548399&4294967295,y=_+(v<<7&4294967295|v>>>25),v=w+(S^y&(_^S))+b[5]+1200080426&4294967295,w=y+(v<<12&4294967295|v>>>20),v=S+(_^w&(y^_))+b[6]+2821735955&4294967295,S=w+(v<<17&4294967295|v>>>15),v=_+(y^S&(w^y))+b[7]+4249261313&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(w^_&(S^w))+b[8]+1770035416&4294967295,y=_+(v<<7&4294967295|v>>>25),v=w+(S^y&(_^S))+b[9]+2336552879&4294967295,w=y+(v<<12&4294967295|v>>>20),v=S+(_^w&(y^_))+b[10]+4294925233&4294967295,S=w+(v<<17&4294967295|v>>>15),v=_+(y^S&(w^y))+b[11]+2304563134&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(w^_&(S^w))+b[12]+1804603682&4294967295,y=_+(v<<7&4294967295|v>>>25),v=w+(S^y&(_^S))+b[13]+4254626195&4294967295,w=y+(v<<12&4294967295|v>>>20),v=S+(_^w&(y^_))+b[14]+2792965006&4294967295,S=w+(v<<17&4294967295|v>>>15),v=_+(y^S&(w^y))+b[15]+1236535329&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(S^w&(_^S))+b[1]+4129170786&4294967295,y=_+(v<<5&4294967295|v>>>27),v=w+(_^S&(y^_))+b[6]+3225465664&4294967295,w=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(w^y))+b[11]+643717713&4294967295,S=w+(v<<14&4294967295|v>>>18),v=_+(w^y&(S^w))+b[0]+3921069994&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^w&(_^S))+b[5]+3593408605&4294967295,y=_+(v<<5&4294967295|v>>>27),v=w+(_^S&(y^_))+b[10]+38016083&4294967295,w=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(w^y))+b[15]+3634488961&4294967295,S=w+(v<<14&4294967295|v>>>18),v=_+(w^y&(S^w))+b[4]+3889429448&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^w&(_^S))+b[9]+568446438&4294967295,y=_+(v<<5&4294967295|v>>>27),v=w+(_^S&(y^_))+b[14]+3275163606&4294967295,w=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(w^y))+b[3]+4107603335&4294967295,S=w+(v<<14&4294967295|v>>>18),v=_+(w^y&(S^w))+b[8]+1163531501&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^w&(_^S))+b[13]+2850285829&4294967295,y=_+(v<<5&4294967295|v>>>27),v=w+(_^S&(y^_))+b[2]+4243563512&4294967295,w=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(w^y))+b[7]+1735328473&4294967295,S=w+(v<<14&4294967295|v>>>18),v=_+(w^y&(S^w))+b[12]+2368359562&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(_^S^w)+b[5]+4294588738&4294967295,y=_+(v<<4&4294967295|v>>>28),v=w+(y^_^S)+b[8]+2272392833&4294967295,w=y+(v<<11&4294967295|v>>>21),v=S+(w^y^_)+b[11]+1839030562&4294967295,S=w+(v<<16&4294967295|v>>>16),v=_+(S^w^y)+b[14]+4259657740&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^w)+b[1]+2763975236&4294967295,y=_+(v<<4&4294967295|v>>>28),v=w+(y^_^S)+b[4]+1272893353&4294967295,w=y+(v<<11&4294967295|v>>>21),v=S+(w^y^_)+b[7]+4139469664&4294967295,S=w+(v<<16&4294967295|v>>>16),v=_+(S^w^y)+b[10]+3200236656&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^w)+b[13]+681279174&4294967295,y=_+(v<<4&4294967295|v>>>28),v=w+(y^_^S)+b[0]+3936430074&4294967295,w=y+(v<<11&4294967295|v>>>21),v=S+(w^y^_)+b[3]+3572445317&4294967295,S=w+(v<<16&4294967295|v>>>16),v=_+(S^w^y)+b[6]+76029189&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^w)+b[9]+3654602809&4294967295,y=_+(v<<4&4294967295|v>>>28),v=w+(y^_^S)+b[12]+3873151461&4294967295,w=y+(v<<11&4294967295|v>>>21),v=S+(w^y^_)+b[15]+530742520&4294967295,S=w+(v<<16&4294967295|v>>>16),v=_+(S^w^y)+b[2]+3299628645&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(S^(_|~w))+b[0]+4096336452&4294967295,y=_+(v<<6&4294967295|v>>>26),v=w+(_^(y|~S))+b[7]+1126891415&4294967295,w=y+(v<<10&4294967295|v>>>22),v=S+(y^(w|~_))+b[14]+2878612391&4294967295,S=w+(v<<15&4294967295|v>>>17),v=_+(w^(S|~y))+b[5]+4237533241&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~w))+b[12]+1700485571&4294967295,y=_+(v<<6&4294967295|v>>>26),v=w+(_^(y|~S))+b[3]+2399980690&4294967295,w=y+(v<<10&4294967295|v>>>22),v=S+(y^(w|~_))+b[10]+4293915773&4294967295,S=w+(v<<15&4294967295|v>>>17),v=_+(w^(S|~y))+b[1]+2240044497&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~w))+b[8]+1873313359&4294967295,y=_+(v<<6&4294967295|v>>>26),v=w+(_^(y|~S))+b[15]+4264355552&4294967295,w=y+(v<<10&4294967295|v>>>22),v=S+(y^(w|~_))+b[6]+2734768916&4294967295,S=w+(v<<15&4294967295|v>>>17),v=_+(w^(S|~y))+b[13]+1309151649&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~w))+b[4]+4149444226&4294967295,y=_+(v<<6&4294967295|v>>>26),v=w+(_^(y|~S))+b[11]+3174756917&4294967295,w=y+(v<<10&4294967295|v>>>22),v=S+(y^(w|~_))+b[2]+718787259&4294967295,S=w+(v<<15&4294967295|v>>>17),v=_+(w^(S|~y))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(S+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+S&4294967295,A.g[3]=A.g[3]+w&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var _=y-this.blockSize,b=this.B,S=this.h,w=0;w<y;){if(S==0)for(;w<=_;)s(this,A,w),w+=this.blockSize;if(typeof A=="string"){for(;w<y;)if(b[S++]=A.charCodeAt(w++),S==this.blockSize){s(this,b),S=0;break}}else for(;w<y;)if(b[S++]=A[w++],S==this.blockSize){s(this,b),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var _=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=_&255,_/=256;for(this.u(A),A=Array(16),y=_=0;4>y;++y)for(var b=0;32>b;b+=8)A[_++]=this.g[y]>>>b&255;return A};function i(A,y){var _=l;return Object.prototype.hasOwnProperty.call(_,A)?_[A]:_[A]=y(A)}function a(A,y){this.h=y;for(var _=[],b=!0,S=A.length-1;0<=S;S--){var w=A[S]|0;b&&w==y||(_[S]=w,b=!1)}this.g=_}var l={};function c(A){return-128<=A&&128>A?i(A,function(y){return new a([y|0],0>y?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return L(h(-A));for(var y=[],_=1,b=0;A>=_;b++)y[b]=A/_|0,_*=4294967296;return new a(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return L(d(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),b=p,S=0;S<A.length;S+=8){var w=Math.min(8,A.length-S),v=parseInt(A.substring(S,S+w),y);8>w?(w=h(Math.pow(y,w)),b=b.j(w).add(h(v))):(b=b.j(_),b=b.add(h(v)))}return b}var p=c(0),m=c(1),I=c(16777216);t=a.prototype,t.m=function(){if(N(this))return-L(this).m();for(var A=0,y=1,_=0;_<this.g.length;_++){var b=this.i(_);A+=(0<=b?b:4294967296+b)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(P(this))return"0";if(N(this))return"-"+L(this).toString(A);for(var y=h(Math.pow(A,6)),_=this,b="";;){var S=j(_,y).g;_=q(_,S.j(y));var w=((0<_.g.length?_.g[0]:_.h)>>>0).toString(A);if(_=S,P(_))return w+b;for(;6>w.length;)w="0"+w;b=w+b}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function P(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function N(A){return A.h==-1}t.l=function(A){return A=q(this,A),N(A)?-1:P(A)?0:1};function L(A){for(var y=A.g.length,_=[],b=0;b<y;b++)_[b]=~A.g[b];return new a(_,~A.h).add(m)}t.abs=function(){return N(this)?L(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0,S=0;S<=y;S++){var w=b+(this.i(S)&65535)+(A.i(S)&65535),v=(w>>>16)+(this.i(S)>>>16)+(A.i(S)>>>16);b=v>>>16,w&=65535,v&=65535,_[S]=v<<16|w}return new a(_,_[_.length-1]&-2147483648?-1:0)};function q(A,y){return A.add(L(y))}t.j=function(A){if(P(this)||P(A))return p;if(N(this))return N(A)?L(this).j(L(A)):L(L(this).j(A));if(N(A))return L(this.j(L(A)));if(0>this.l(I)&&0>A.l(I))return h(this.m()*A.m());for(var y=this.g.length+A.g.length,_=[],b=0;b<2*y;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var S=0;S<A.g.length;S++){var w=this.i(b)>>>16,v=this.i(b)&65535,Pe=A.i(S)>>>16,Ge=A.i(S)&65535;_[2*b+2*S]+=v*Ge,F(_,2*b+2*S),_[2*b+2*S+1]+=w*Ge,F(_,2*b+2*S+1),_[2*b+2*S+1]+=v*Pe,F(_,2*b+2*S+1),_[2*b+2*S+2]+=w*Pe,F(_,2*b+2*S+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new a(_,0)};function F(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function B(A,y){this.g=A,this.h=y}function j(A,y){if(P(y))throw Error("division by zero");if(P(A))return new B(p,p);if(N(A))return y=j(L(A),y),new B(L(y.g),L(y.h));if(N(y))return y=j(A,L(y)),new B(L(y.g),y.h);if(30<A.g.length){if(N(A)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var _=m,b=y;0>=b.l(A);)_=ce(_),b=ce(b);var S=ae(_,1),w=ae(b,1);for(b=ae(b,2),_=ae(_,2);!P(b);){var v=w.add(b);0>=v.l(A)&&(S=S.add(_),w=v),b=ae(b,1),_=ae(_,1)}return y=q(A,S.j(y)),new B(S,y)}for(S=p;0<=A.l(y);){for(_=Math.max(1,Math.floor(A.m()/y.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),w=h(_),v=w.j(y);N(v)||0<v.l(A);)_-=b,w=h(_),v=w.j(y);P(w)&&(w=m),S=S.add(w),A=q(A,v)}return new B(S,A)}t.A=function(A){return j(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)&A.i(b);return new a(_,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)|A.i(b);return new a(_,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)^A.i(b);return new a(_,this.h^A.h)};function ce(A){for(var y=A.g.length+1,_=[],b=0;b<y;b++)_[b]=A.i(b)<<1|A.i(b-1)>>>31;return new a(_,A.h)}function ae(A,y){var _=y>>5;y%=32;for(var b=A.g.length-_,S=[],w=0;w<b;w++)S[w]=0<y?A.i(w+_)>>>y|A.i(w+_+1)<<32-y:A.i(w+_);return new a(S,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,dc=a}).apply(typeof of<"u"?of:typeof self<"u"?self:typeof window<"u"?window:{});var Bi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pg,Rs,gg,ro,El,mg,_g,yg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Bi=="object"&&Bi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var g=0;g<o.length-1;g++){var C=o[g];if(!(C in f))break e;f=f[C]}o=o[o.length-1],g=f[o],u=u(g),u!=g&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,g=!1,C={next:function(){if(!g&&f<o.length){var k=f++;return{value:u(k,o[k]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function I(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),o.apply(this,g)}}function P(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(g,C,k){for(var W=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)W[ke-2]=arguments[ke];return u.prototype[C].apply(g,W)}}function N(o){const u=o.length;if(0<u){const f=Array(u);for(let g=0;g<u;g++)f[g]=o[g];return f}return[]}function L(o,u){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(c(g)){const C=o.length||0,k=g.length||0;o.length=C+k;for(let W=0;W<k;W++)o[C+W]=g[W]}else o.push(g)}}class q{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function j(o){return j[" "](o),o}j[" "]=function(){};var ce=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function ae(o,u,f){for(const g in o)u.call(f,o[g],g,o)}function A(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,u){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)o[f]=g[f];for(let k=0;k<_.length;k++)f=_[k],Object.prototype.hasOwnProperty.call(g,f)&&(o[f]=g[f])}}function S(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function w(o){l.setTimeout(()=>{throw o},0)}function v(){var o=Pt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Pe{constructor(){this.h=this.g=null}add(u,f){const g=Ge.get();g.set(u,f),this.h?this.h.next=g:this.g=g,this.h=g}}var Ge=new q(()=>new Le,o=>o.reset());class Le{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let me,pe=!1,Pt=new Pe,Ut=()=>{const o=l.Promise.resolve(void 0);me=()=>{o.then(Nt)}};var Nt=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(f){w(f)}var u=Ge;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}pe=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var Cn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function Jt(o,u){if(Ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,g=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ce){e:{try{j(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:bt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Jt.aa.h.call(this)}}P(Jt,Ue);var bt={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(o,u,f,g,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!g,this.ha=C,this.key=++X,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Te(o){this.src=o,this.g={},this.h=0}Te.prototype.add=function(o,u,f,g,C){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var W=T(o,u,g,C);return-1<W?(u=o[W],f||(u.fa=!1)):(u=new Q(u,this.src,k,!!g,C),u.fa=f,o.push(u)),u};function E(o,u){var f=u.type;if(f in o.g){var g=o.g[f],C=Array.prototype.indexOf.call(g,u,void 0),k;(k=0<=C)&&Array.prototype.splice.call(g,C,1),k&&(Y(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function T(o,u,f,g){for(var C=0;C<o.length;++C){var k=o[C];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==g)return C}return-1}var R="closure_lm_"+(1e6*Math.random()|0),D={};function V(o,u,f,g,C){if(Array.isArray(u)){for(var k=0;k<u.length;k++)V(o,u[k],f,g,C);return null}return f=ie(f),o&&o[O]?o.K(u,f,h(g)?!!g.capture:!1,C):x(o,u,f,!1,g,C)}function x(o,u,f,g,C,k){if(!u)throw Error("Invalid event type");var W=h(C)?!!C.capture:!!C,ke=G(o);if(ke||(o[R]=ke=new Te(o)),f=ke.add(u,f,g,W,k),f.proxy)return f;if(g=K(),f.proxy=g,g.src=o,g.listener=f,o.addEventListener)Cn||(C=W),C===void 0&&(C=!1),o.addEventListener(u.toString(),g,C);else if(o.attachEvent)o.attachEvent(U(u.toString()),g);else if(o.addListener&&o.removeListener)o.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function K(){function o(f){return u.call(o.src,o.listener,f)}const u=te;return o}function z(o,u,f,g,C){if(Array.isArray(u))for(var k=0;k<u.length;k++)z(o,u[k],f,g,C);else g=h(g)?!!g.capture:!!g,f=ie(f),o&&o[O]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],f=T(k,f,g,C),-1<f&&(Y(k[f]),Array.prototype.splice.call(k,f,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=G(o))&&(u=o.g[u.toString()],o=-1,u&&(o=T(u,f,g,C)),(f=-1<o?u[o]:null)&&H(f))}function H(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[O])E(u.i,o);else{var f=o.type,g=o.proxy;u.removeEventListener?u.removeEventListener(f,g,o.capture):u.detachEvent?u.detachEvent(U(f),g):u.addListener&&u.removeListener&&u.removeListener(g),(f=G(u))?(E(f,o),f.h==0&&(f.src=null,u[R]=null)):Y(o)}}}function U(o){return o in D?D[o]:D[o]="on"+o}function te(o,u){if(o.da)o=!0;else{u=new Jt(u,this);var f=o.listener,g=o.ha||o.src;o.fa&&H(o),o=f.call(g,u)}return o}function G(o){return o=o[R],o instanceof Te?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(u){return o.handleEvent(u)}),o[ee])}function ne(){Fe.call(this),this.i=new Te(this),this.M=this,this.F=null}P(ne,Fe),ne.prototype[O]=!0,ne.prototype.removeEventListener=function(o,u,f,g){z(this,o,u,f,g)};function he(o,u){var f,g=o.F;if(g)for(f=[];g;g=g.F)f.push(g);if(o=o.M,g=u.type||u,typeof u=="string")u=new Ue(u,o);else if(u instanceof Ue)u.target=u.target||o;else{var C=u;u=new Ue(g,o),b(u,C)}if(C=!0,f)for(var k=f.length-1;0<=k;k--){var W=u.g=f[k];C=_e(W,g,!0,u)&&C}if(W=u.g=o,C=_e(W,g,!0,u)&&C,C=_e(W,g,!1,u)&&C,f)for(k=0;k<f.length;k++)W=u.g=f[k],C=_e(W,g,!1,u)&&C}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],g=0;g<f.length;g++)Y(f[g]);delete o.g[u],o.h--}}this.F=null},ne.prototype.K=function(o,u,f,g){return this.i.add(String(o),u,!1,f,g)},ne.prototype.L=function(o,u,f,g){return this.i.add(String(o),u,!0,f,g)};function _e(o,u,f,g){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,k=0;k<u.length;++k){var W=u[k];if(W&&!W.da&&W.capture==f){var ke=W.listener,tt=W.ha||W.src;W.fa&&E(o.i,W),C=ke.call(tt,g)!==!1&&C}}return C&&!g.defaultPrevented}function ct(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ze(o){o.g=ct(()=>{o.g=null,o.i&&(o.i=!1,Ze(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class xt extends Fe{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ze(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ut(o){Fe.call(this),this.h=o,this.g={}}P(ut,Fe);var Pn=[];function cs(o){ae(o.g,function(u,f){this.g.hasOwnProperty(f)&&H(u)},o),o.g={}}ut.prototype.N=function(){ut.aa.N.call(this),cs(this)},ut.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var et=l.JSON.stringify,Vt=l.JSON.parse,Ei=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ua(){}ua.prototype.h=null;function Fc(o){return o.h||(o.h=o.i())}function Uc(){}var us={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ha(){Ue.call(this,"d")}P(ha,Ue);function fa(){Ue.call(this,"c")}P(fa,Ue);var tr={},$c=null;function Ti(){return $c=$c||new ne}tr.La="serverreachability";function Bc(o){Ue.call(this,tr.La,o)}P(Bc,Ue);function hs(o){const u=Ti();he(u,new Bc(u))}tr.STAT_EVENT="statevent";function jc(o,u){Ue.call(this,tr.STAT_EVENT,o),this.stat=u}P(jc,Ue);function Et(o){const u=Ti();he(u,new jc(u,o))}tr.Ma="timingevent";function Hc(o,u){Ue.call(this,tr.Ma,o),this.size=u}P(Hc,Ue);function fs(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function ds(){this.g=!0}ds.prototype.xa=function(){this.g=!1};function Em(o,u,f,g,C,k){o.info(function(){if(o.g)if(k)for(var W="",ke=k.split("&"),tt=0;tt<ke.length;tt++){var Ie=ke[tt].split("=");if(1<Ie.length){var ht=Ie[0];Ie=Ie[1];var ft=ht.split("_");W=2<=ft.length&&ft[1]=="type"?W+(ht+"="+Ie+"&"):W+(ht+"=redacted&")}}else W=null;else W=k;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+u+`
`+f+`
`+W})}function Tm(o,u,f,g,C,k,W){o.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+u+`
`+f+`
`+k+" "+W})}function Cr(o,u,f,g){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+wm(o,f)+(g?" "+g:"")})}function Im(o,u){o.info(function(){return"TIMEOUT: "+u})}ds.prototype.info=function(){};function wm(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var g=f[o];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var k=C[0];if(k!="noop"&&k!="stop"&&k!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return et(f)}catch{return u}}var Ii={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},da;function wi(){}P(wi,ua),wi.prototype.g=function(){return new XMLHttpRequest},wi.prototype.i=function(){return{}},da=new wi;function kn(o,u,f,g){this.j=o,this.i=u,this.l=f,this.R=g||1,this.U=new ut(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zc}function zc(){this.i=null,this.g="",this.h=!1}var Wc={},pa={};function ga(o,u,f){o.L=1,o.v=Ri(cn(u)),o.m=f,o.P=!0,Gc(o,null)}function Gc(o,u){o.F=Date.now(),bi(o),o.A=cn(o.v);var f=o.A,g=o.R;Array.isArray(g)||(g=[String(g)]),au(f.i,"t",g),o.C=0,f=o.j.J,o.h=new zc,o.g=Au(o.j,f?u:null,!o.m),0<o.O&&(o.M=new xt(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,g=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Pn[0]=C.toString()),C=Pn);for(var k=0;k<C.length;k++){var W=V(f,C[k],g||u.handleEvent,!1,u.h||u);if(!W)break;u.g[W.key]=W}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),hs(),Em(o.i,o.u,o.A,o.l,o.R,o.m)}kn.prototype.ca=function(o){o=o.target;const u=this.M;u&&un(o)==3?u.j():this.Y(o)},kn.prototype.Y=function(o){try{if(o==this.g)e:{const ft=un(this.g);var u=this.g.Ba();const Or=this.g.Z();if(!(3>ft)&&(ft!=3||this.g&&(this.h.h||this.g.oa()||pu(this.g)))){this.J||ft!=4||u==7||(u==8||0>=Or?hs(3):hs(2)),ma(this);var f=this.g.Z();this.X=f;t:if(Kc(this)){var g=pu(this.g);o="";var C=g.length,k=un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nr(this),ps(this);var W="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(g[u],{stream:!(k&&u==C-1)});g.length=0,this.h.g+=o,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=f==200,Tm(this.i,this.u,this.A,this.l,this.R,ft,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,tt=this.g;if((ke=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(ke)){var Ie=ke;break t}}Ie=null}if(f=Ie)Cr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,_a(this,f);else{this.o=!1,this.s=3,Et(12),nr(this),ps(this);break e}}if(this.P){f=!0;let $t;for(;!this.J&&this.C<W.length;)if($t=bm(this,W),$t==pa){ft==4&&(this.s=4,Et(14),f=!1),Cr(this.i,this.l,null,"[Incomplete Response]");break}else if($t==Wc){this.s=4,Et(15),Cr(this.i,this.l,W,"[Invalid Chunk]"),f=!1;break}else Cr(this.i,this.l,$t,null),_a(this,$t);if(Kc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ft!=4||W.length!=0||this.h.h||(this.s=1,Et(16),f=!1),this.o=this.o&&f,!f)Cr(this.i,this.l,W,"[Invalid Chunked Response]"),nr(this),ps(this);else if(0<W.length&&!this.W){this.W=!0;var ht=this.j;ht.g==this&&ht.ba&&!ht.M&&(ht.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),wa(ht),ht.M=!0,Et(11))}}else Cr(this.i,this.l,W,null),_a(this,W);ft==4&&nr(this),this.o&&!this.J&&(ft==4?Tu(this.j,this):(this.o=!1,bi(this)))}else Bm(this.g),f==400&&0<W.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),nr(this),ps(this)}}}catch{}finally{}};function Kc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function bm(o,u){var f=o.C,g=u.indexOf(`
`,f);return g==-1?pa:(f=Number(u.substring(f,g)),isNaN(f)?Wc:(g+=1,g+f>u.length?pa:(u=u.slice(g,g+f),o.C=g+f,u)))}kn.prototype.cancel=function(){this.J=!0,nr(this)};function bi(o){o.S=Date.now()+o.I,Qc(o,o.I)}function Qc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=fs(m(o.ba,o),u)}function ma(o){o.B&&(l.clearTimeout(o.B),o.B=null)}kn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Im(this.i,this.A),this.L!=2&&(hs(),Et(17)),nr(this),this.s=2,ps(this)):Qc(this,this.S-o)};function ps(o){o.j.G==0||o.J||Tu(o.j,o)}function nr(o){ma(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,cs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function _a(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||ya(f.h,o))){if(!o.K&&ya(f.h,o)&&f.G==3){try{var g=f.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Ni(f),Oi(f);else break e;Ia(f),Et(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=fs(m(f.Za,f),6e3));if(1>=Yc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else sr(f,11)}else if((o.K||f.g==o)&&Ni(f),!F(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let Ie=C[u];if(f.T=Ie[0],Ie=Ie[1],f.G==2)if(Ie[0]=="c"){f.K=Ie[1],f.ia=Ie[2];const ht=Ie[3];ht!=null&&(f.la=ht,f.j.info("VER="+f.la));const ft=Ie[4];ft!=null&&(f.Aa=ft,f.j.info("SVER="+f.Aa));const Or=Ie[5];Or!=null&&typeof Or=="number"&&0<Or&&(g=1.5*Or,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const $t=o.g;if($t){const Vi=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Vi){var k=g.h;k.g||Vi.indexOf("spdy")==-1&&Vi.indexOf("quic")==-1&&Vi.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(va(k,k.h),k.h=null))}if(g.D){const ba=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;ba&&(g.ya=ba,xe(g.I,g.D,ba))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var W=o;if(g.qa=bu(g,g.J?g.ia:null,g.W),W.K){Zc(g.h,W);var ke=W,tt=g.L;tt&&(ke.I=tt),ke.B&&(ma(ke),bi(ke)),g.g=W}else vu(g);0<f.i.length&&Di(f)}else Ie[0]!="stop"&&Ie[0]!="close"||sr(f,7);else f.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?sr(f,7):Ta(f):Ie[0]!="noop"&&f.l&&f.l.ta(Ie),f.v=0)}}hs(4)}catch{}}var Am=class{constructor(o,u){this.g=o,this.map=u}};function Jc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Yc(o){return o.h?1:o.g?o.g.size:0}function ya(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function va(o,u){o.g?o.g.add(u):o.h=u}function Zc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Jc.prototype.cancel=function(){if(this.i=eu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function eu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return N(o.i)}function Sm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,g=0;g<f;g++)u.push(o[g]);return u}u=[],f=0;for(g in o)u[f++]=o[g];return u}function Rm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const g in o)u[f++]=g;return u}}}function tu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Rm(o),g=Sm(o),C=g.length,k=0;k<C;k++)u.call(void 0,g[k],f&&f[k],o)}var nu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cm(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var g=o[f].indexOf("="),C=null;if(0<=g){var k=o[f].substring(0,g);C=o[f].substring(g+1)}else k=o[f];u(k,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function rr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof rr){this.h=o.h,Ai(this,o.j),this.o=o.o,this.g=o.g,Si(this,o.s),this.l=o.l;var u=o.i,f=new _s;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),ru(this,f),this.m=o.m}else o&&(u=String(o).match(nu))?(this.h=!1,Ai(this,u[1]||"",!0),this.o=gs(u[2]||""),this.g=gs(u[3]||"",!0),Si(this,u[4]),this.l=gs(u[5]||"",!0),ru(this,u[6]||"",!0),this.m=gs(u[7]||"")):(this.h=!1,this.i=new _s(null,this.h))}rr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ms(u,su,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ms(u,su,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ms(f,f.charAt(0)=="/"?Om:km,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ms(f,Nm)),o.join("")};function cn(o){return new rr(o)}function Ai(o,u,f){o.j=f?gs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Si(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function ru(o,u,f){u instanceof _s?(o.i=u,xm(o.i,o.h)):(f||(u=ms(u,Dm)),o.i=new _s(u,o.h))}function xe(o,u,f){o.i.set(u,f)}function Ri(o){return xe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function gs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ms(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Pm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Pm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var su=/[#\/\?@]/g,km=/[#\?:]/g,Om=/[#\?]/g,Dm=/[#\?@]/g,Nm=/#/g;function _s(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function On(o){o.g||(o.g=new Map,o.h=0,o.i&&Cm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=_s.prototype,t.add=function(o,u){On(this),this.i=null,o=Pr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function iu(o,u){On(o),u=Pr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function ou(o,u){return On(o),u=Pr(o,u),o.g.has(u)}t.forEach=function(o,u){On(this),this.g.forEach(function(f,g){f.forEach(function(C){o.call(u,C,g,this)},this)},this)},t.na=function(){On(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let g=0;g<u.length;g++){const C=o[g];for(let k=0;k<C.length;k++)f.push(u[g])}return f},t.V=function(o){On(this);let u=[];if(typeof o=="string")ou(this,o)&&(u=u.concat(this.g.get(Pr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return On(this),this.i=null,o=Pr(this,o),ou(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function au(o,u,f){iu(o,u),0<f.length&&(o.i=null,o.g.set(Pr(o,u),N(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var g=u[f];const k=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var C=k;W[g]!==""&&(C+="="+encodeURIComponent(String(W[g]))),o.push(C)}}return this.i=o.join("&")};function Pr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function xm(o,u){u&&!o.j&&(On(o),o.i=null,o.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(iu(this,g),au(this,C,f))},o)),o.j=u}function Vm(o,u){const f=new ds;if(l.Image){const g=new Image;g.onload=I(Dn,f,"TestLoadImage: loaded",!0,u,g),g.onerror=I(Dn,f,"TestLoadImage: error",!1,u,g),g.onabort=I(Dn,f,"TestLoadImage: abort",!1,u,g),g.ontimeout=I(Dn,f,"TestLoadImage: timeout",!1,u,g),l.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=o}else u(!1)}function Mm(o,u){const f=new ds,g=new AbortController,C=setTimeout(()=>{g.abort(),Dn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:g.signal}).then(k=>{clearTimeout(C),k.ok?Dn(f,"TestPingServer: ok",!0,u):Dn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Dn(f,"TestPingServer: error",!1,u)})}function Dn(o,u,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function Lm(){this.g=new Ei}function Fm(o,u,f){const g=f||"";try{tu(o,function(C,k){let W=C;h(C)&&(W=et(C)),u.push(g+k+"="+encodeURIComponent(W))})}catch(C){throw u.push(g+"type="+encodeURIComponent("_badmap")),C}}function Ci(o){this.l=o.Ub||null,this.j=o.eb||!1}P(Ci,ua),Ci.prototype.g=function(){return new Pi(this.l,this.j)},Ci.prototype.i=function(o){return function(){return o}}({});function Pi(o,u){ne.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Pi,ne),t=Pi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,vs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ys(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,vs(this)),this.g&&(this.readyState=3,vs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function lu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?ys(this):vs(this),this.readyState==3&&lu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,ys(this))},t.Qa=function(o){this.g&&(this.response=o,ys(this))},t.ga=function(){this.g&&ys(this)};function ys(o){o.readyState=4,o.l=null,o.j=null,o.v=null,vs(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function vs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Pi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function cu(o){let u="";return ae(o,function(f,g){u+=g,u+=":",u+=f,u+=`\r
`}),u}function Ea(o,u,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=cu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):xe(o,u,f))}function $e(o){ne.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P($e,ne);var Um=/^https?$/i,$m=["POST","PUT"];t=$e.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():da.g(),this.v=this.o?Fc(this.o):Fc(da),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){uu(this,k);return}if(o=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const k of g.keys())f.set(k,g.get(k));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call($m,u,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,W]of f)this.g.setRequestHeader(k,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{du(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){uu(this,k)}};function uu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,hu(o),ki(o)}function hu(o){o.A||(o.A=!0,he(o,"complete"),he(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,he(this,"complete"),he(this,"abort"),ki(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ki(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?fu(this):this.bb())},t.bb=function(){fu(this)};function fu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||un(o)!=4||o.Z()!=2)){if(o.u&&un(o)==4)ct(o.Ea,0,o);else if(he(o,"readystatechange"),un(o)==4){o.h=!1;try{const W=o.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var g;if(g=W===0){var C=String(o.D).match(nu)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),g=!Um.test(C?C.toLowerCase():"")}f=g}if(f)he(o,"complete"),he(o,"success");else{o.m=6;try{var k=2<un(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",hu(o)}}finally{ki(o)}}}}function ki(o,u){if(o.g){du(o);const f=o.g,g=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||he(o,"ready");try{f.onreadystatechange=g}catch{}}}function du(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function un(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<un(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Vt(u)}};function pu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Bm(o){const u={};o=(o.g&&2<=un(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<o.length;g++){if(F(o[g]))continue;var f=S(o[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[C]||[];u[C]=k,k.push(f)}A(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Es(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function gu(o){this.Aa=0,this.i=[],this.j=new ds,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Es("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Es("baseRetryDelayMs",5e3,o),this.cb=Es("retryDelaySeedMs",1e4,o),this.Wa=Es("forwardChannelMaxRetries",2,o),this.wa=Es("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Jc(o&&o.concurrentRequestLimit),this.Da=new Lm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=gu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,g){Et(0),this.W=o,this.H=u||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=bu(this,null,this.W),Di(this)};function Ta(o){if(mu(o),o.G==3){var u=o.U++,f=cn(o.I);if(xe(f,"SID",o.K),xe(f,"RID",u),xe(f,"TYPE","terminate"),Ts(o,f),u=new kn(o,o.j,u),u.L=2,u.v=Ri(cn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Au(u.j,null),u.g.ea(u.v)),u.F=Date.now(),bi(u)}wu(o)}function Oi(o){o.g&&(wa(o),o.g.cancel(),o.g=null)}function mu(o){Oi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ni(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Di(o){if(!Xc(o.h)&&!o.s){o.s=!0;var u=o.Ga;me||Ut(),pe||(me(),pe=!0),Pt.add(u,o),o.B=0}}function jm(o,u){return Yc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=fs(m(o.Ga,o,u),Iu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new kn(this,this.j,o);let k=this.o;if(this.S&&(k?(k=y(k),b(k,this.S)):k=this.S),this.m!==null||this.O||(C.H=k,k=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=yu(this,C,u),f=cn(this.I),xe(f,"RID",o),xe(f,"CVER",22),this.D&&xe(f,"X-HTTP-Session-Id",this.D),Ts(this,f),k&&(this.O?u="headers="+encodeURIComponent(String(cu(k)))+"&"+u:this.m&&Ea(f,this.m,k)),va(this.h,C),this.Ua&&xe(f,"TYPE","init"),this.P?(xe(f,"$req",u),xe(f,"SID","null"),C.T=!0,ga(C,f,null)):ga(C,f,u),this.G=2}}else this.G==3&&(o?_u(this,o):this.i.length==0||Xc(this.h)||_u(this))};function _u(o,u){var f;u?f=u.l:f=o.U++;const g=cn(o.I);xe(g,"SID",o.K),xe(g,"RID",f),xe(g,"AID",o.T),Ts(o,g),o.m&&o.o&&Ea(g,o.m,o.o),f=new kn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=yu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),va(o.h,f),ga(f,g,u)}function Ts(o,u){o.H&&ae(o.H,function(f,g){xe(u,g,f)}),o.l&&tu({},function(f,g){xe(u,g,f)})}function yu(o,u,f){f=Math.min(o.i.length,f);var g=o.l?m(o.l.Na,o.l,o):null;e:{var C=o.i;let k=-1;for(;;){const W=["count="+f];k==-1?0<f?(k=C[0].g,W.push("ofs="+k)):k=0:W.push("ofs="+k);let ke=!0;for(let tt=0;tt<f;tt++){let Ie=C[tt].g;const ht=C[tt].map;if(Ie-=k,0>Ie)k=Math.max(0,C[tt].g-100),ke=!1;else try{Fm(ht,W,"req"+Ie+"_")}catch{g&&g(ht)}}if(ke){g=W.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,g}function vu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;me||Ut(),pe||(me(),pe=!0),Pt.add(u,o),o.v=0}}function Ia(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=fs(m(o.Fa,o),Iu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Eu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=fs(m(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Oi(this),Eu(this))};function wa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Eu(o){o.g=new kn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=cn(o.qa);xe(u,"RID","rpc"),xe(u,"SID",o.K),xe(u,"AID",o.T),xe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&xe(u,"TO",o.ja),xe(u,"TYPE","xmlhttp"),Ts(o,u),o.m&&o.o&&Ea(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Ri(cn(u)),f.m=null,f.P=!0,Gc(f,o)}t.Za=function(){this.C!=null&&(this.C=null,Oi(this),Ia(this),Et(19))};function Ni(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Tu(o,u){var f=null;if(o.g==u){Ni(o),wa(o),o.g=null;var g=2}else if(ya(o.h,u))f=u.D,Zc(o.h,u),g=1;else return;if(o.G!=0){if(u.o)if(g==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;g=Ti(),he(g,new Hc(g,f)),Di(o)}else vu(o);else if(C=u.s,C==3||C==0&&0<u.X||!(g==1&&jm(o,u)||g==2&&Ia(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),C){case 1:sr(o,5);break;case 4:sr(o,10);break;case 3:sr(o,6);break;default:sr(o,2)}}}function Iu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function sr(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),g=o.Xa;const C=!g;g=new rr(g||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ai(g,"https"),Ri(g),C?Vm(g.toString(),f):Mm(g.toString(),f)}else Et(2);o.G=0,o.l&&o.l.sa(u),wu(o),mu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function wu(o){if(o.G=0,o.ka=[],o.l){const u=eu(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function bu(o,u,f){var g=f instanceof rr?cn(f):new rr(f);if(g.g!="")u&&(g.g=u+"."+g.g),Si(g,g.s);else{var C=l.location;g=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var k=new rr(null);g&&Ai(k,g),u&&(k.g=u),C&&Si(k,C),f&&(k.l=f),g=k}return f=o.D,u=o.ya,f&&u&&xe(g,f,u),xe(g,"VER",o.la),Ts(o,g),g}function Au(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new $e(new Ci({eb:f})):new $e(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Su(){}t=Su.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function xi(){}xi.prototype.g=function(o,u){return new kt(o,u)};function kt(o,u){ne.call(this),this.g=new gu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!F(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new kr(this)}P(kt,ne),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Ta(this.g)},kt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=et(o),o=f);u.i.push(new Am(u.Ya++,o)),u.G==3&&Di(u)},kt.prototype.N=function(){this.g.l=null,delete this.j,Ta(this.g),delete this.g,kt.aa.N.call(this)};function Ru(o){ha.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(Ru,ha);function Cu(){fa.call(this),this.status=1}P(Cu,fa);function kr(o){this.g=o}P(kr,Su),kr.prototype.ua=function(){he(this.g,"a")},kr.prototype.ta=function(o){he(this.g,new Ru(o))},kr.prototype.sa=function(o){he(this.g,new Cu)},kr.prototype.ra=function(){he(this.g,"b")},xi.prototype.createWebChannel=xi.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,yg=function(){return new xi},_g=function(){return Ti()},mg=tr,El={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ii.NO_ERROR=0,Ii.TIMEOUT=8,Ii.HTTP_ERROR=6,ro=Ii,qc.COMPLETE="complete",gg=qc,Uc.EventType=us,us.OPEN="a",us.CLOSE="b",us.ERROR="c",us.MESSAGE="d",ne.prototype.listen=ne.prototype.K,Rs=Uc,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,pg=$e}).apply(typeof Bi<"u"?Bi:typeof self<"u"?self:typeof window<"u"?window:{});const af="@firebase/firestore",lf="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let as="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new ec("@firebase/firestore");function Mr(){return Tr.logLevel}function Z(t,...e){if(Tr.logLevel<=ge.DEBUG){const n=e.map(pc);Tr.debug(`Firestore (${as}): ${t}`,...n)}}function Ir(t,...e){if(Tr.logLevel<=ge.ERROR){const n=e.map(pc);Tr.error(`Firestore (${as}): ${t}`,...n)}}function na(t,...e){if(Tr.logLevel<=ge.WARN){const n=e.map(pc);Tr.warn(`Firestore (${as}): ${t}`,...n)}}function pc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,vg(t,r,n)}function vg(t,e,n){let r=`FIRESTORE (${as}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ir(r),new Error(r)}function Be(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||vg(e,s,r)}function Ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class h0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class f0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class d0{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Be(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Be(typeof r.accessToken=="string",31837,{l:r}),new Eg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Be(e===null||typeof e=="string",2055,{h:e}),new pt(e)}}class p0{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class g0{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new p0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class m0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Be(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new cf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Be(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new cf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=_0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ee(t,e){return t<e?-1:t>e?1:0}function Tl(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Ee(r,s);{const i=y0(),a=v0(i.encode(uf(t,n)),i.encode(uf(e,n)));return a!==0?a:Ee(r,s)}}n+=r>65535?2:1}return Ee(t.length,e.length)}function uf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function v0(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Ee(t[n],e[n]);return Ee(t.length,e.length)}function Zr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=-62135596800,ff=1e6;class Xe{static now(){return Xe.fromMillis(Date.now())}static fromDate(e){return Xe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ff);return new Xe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<hf)throw new le($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ff}_compareTo(e){return this.seconds===e.seconds?Ee(this.nanoseconds,e.nanoseconds):Ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-hf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{static fromTimestamp(e){return new Me(e)}static min(){return new Me(new Xe(0,0))}static max(){return new Me(new Xe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="__name__";class Zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&de(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Zt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ee(e.length,n.length)}static compareSegments(e,n){const r=Zt.isNumericId(e),s=Zt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Zt.extractNumericId(e).compare(Zt.extractNumericId(n)):Tl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dc.fromString(e.substring(4,e.length-2))}}class We extends Zt{construct(e,n,r){return new We(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new le($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new We(n)}static emptyPath(){return new We([])}}const E0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Zt{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return E0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===df}static keyField(){return new ot([df])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new le($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new le($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new le($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new le($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(e){this.path=e}static fromPath(e){return new fe(We.fromString(e))}static fromName(e){return new fe(We.fromString(e).popFirst(5))}static empty(){return new fe(We.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&We.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return We.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new fe(new We(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zs=-1;function T0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Me.fromTimestamp(r===1e9?new Xe(n+1,0):new Xe(n,r));return new Jn(s,fe.empty(),e)}function I0(t){return new Jn(t.readTime,t.key,Zs)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(Me.min(),fe.empty(),Zs)}static max(){return new Jn(Me.max(),fe.empty(),Zs)}}function w0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=fe.comparator(t.documentKey,e.documentKey),n!==0?n:Ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class A0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==b0)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function S0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function gi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}mc.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=-1;function yc(t){return t==null}function bo(t){return t===0&&1/t==-1/0}function R0(t){return typeof t=="number"&&Number.isInteger(t)&&!bo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ig="";function C0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=pf(e)),e=P0(t.get(n),e);return pf(e)}function P0(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Ig:n+="";break;default:n+=i}}return n}function pf(t){return t+Ig+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ls(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function wg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e,n){this.comparator=e,this.root=n||nt.EMPTY}insert(e,n){return new Ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,nt.BLACK,null,null))}remove(e){return new Ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ji(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ji(this.root,e,this.comparator,!1)}getReverseIterator(){return new ji(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ji(this.root,e,this.comparator,!0)}}class ji{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class nt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??nt.RED,this.left=s??nt.EMPTY,this.right=i??nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new nt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return nt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw de(43730,{key:this.key,value:this.value});if(this.right.isRed())throw de(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw de(27949);return e+(this.isRed()?0:1)}}nt.EMPTY=null,nt.RED=!0,nt.BLACK=!1;nt.EMPTY=new class{constructor(){this.size=0}get key(){throw de(57766)}get value(){throw de(16141)}get color(){throw de(16727)}get left(){throw de(29726)}get right(){throw de(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new Ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new mf(this.data.getIterator())}getIteratorFrom(e){return new mf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class mf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new zt([])}unionWith(e){let n=new at(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new zt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new k0("Invalid base64 string: "+i):i}}(e);return new an(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new an(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}an.EMPTY_BYTE_STRING=new an("");const O0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wr(t){if(Be(!!t,39018),typeof t=="string"){let e=0;const n=O0.exec(t);if(Be(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function es(t){return typeof t=="string"?an.fromBase64String(t):an.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bg="server_timestamp",Ag="__type__",Sg="__previous_value__",Rg="__local_write_time__";function vc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Ag])===null||n===void 0?void 0:n.stringValue)===bg}function Ec(t){const e=t.mapValue.fields[Sg];return vc(e)?Ec(e):e}function Ao(t){const e=wr(t.mapValue.fields[Rg].timestampValue);return new Xe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e,n,r,s,i,a,l,c,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d}}const So="(default)";class Ro{constructor(e,n){this.projectId=e,this.database=n||So}static empty(){return new Ro("","")}get isDefaultDatabase(){return this.database===So}isEqual(e){return e instanceof Ro&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="__type__",N0="__max__",Hi={mapValue:{}},Pg="__vector__",Il="value";function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vc(t)?4:V0(t)?9007199254740991:x0(t)?10:11:de(28295,{value:t})}function ln(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ao(t).isEqual(Ao(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=wr(s.timestampValue),l=wr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return es(s.bytesValue).isEqual(es(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=rt(s.doubleValue),l=rt(i.doubleValue);return a===l?bo(a)===bo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Zr(t.arrayValue.values||[],e.arrayValue.values||[],ln);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(gf(a)!==gf(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!ln(a[c],l[c])))return!1;return!0}(t,e);default:return de(52216,{left:t})}}function ei(t,e){return(t.values||[]).find(n=>ln(n,e))!==void 0}function ts(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return Ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ee(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=rt(i.integerValue||i.doubleValue),c=rt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return _f(t.timestampValue,e.timestampValue);case 4:return _f(Ao(t),Ao(e));case 5:return Tl(t.stringValue,e.stringValue);case 6:return function(i,a){const l=es(i),c=es(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Ee(l[h],c[h]);if(d!==0)return d}return Ee(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Ee(rt(i.latitude),rt(a.latitude));return l!==0?l:Ee(rt(i.longitude),rt(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yf(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,d;const p=i.fields||{},m=a.fields||{},I=(l=p[Il])===null||l===void 0?void 0:l.arrayValue,P=(c=m[Il])===null||c===void 0?void 0:c.arrayValue,N=Ee(((h=I==null?void 0:I.values)===null||h===void 0?void 0:h.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:yf(I,P)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===Hi.mapValue&&a===Hi.mapValue)return 0;if(i===Hi.mapValue)return 1;if(a===Hi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const m=Tl(c[p],d[p]);if(m!==0)return m;const I=ts(l[c[p]],h[d[p]]);if(I!==0)return I}return Ee(c.length,d.length)}(t.mapValue,e.mapValue);default:throw de(23264,{Pe:n})}}function _f(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ee(t,e);const n=wr(t),r=wr(e),s=Ee(n.seconds,r.seconds);return s!==0?s:Ee(n.nanos,r.nanos)}function yf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ts(n[s],r[s]);if(i)return i}return Ee(n.length,r.length)}function ns(t){return wl(t)}function wl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=wr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return fe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${wl(n.fields[a])}`;return s+"}"}(t.mapValue):de(61005,{value:t})}function so(t){switch(br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ec(t);return e?16+so(e):16;case 5:return 2*t.stringValue.length;case 6:return es(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+so(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ls(r.fields,(i,a)=>{s+=i.length+so(a)}),s}(t.mapValue);default:throw de(13486,{value:t})}}function bl(t){return!!t&&"integerValue"in t}function Tc(t){return!!t&&"arrayValue"in t}function io(t){return!!t&&"mapValue"in t}function x0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Cg])===null||n===void 0?void 0:n.stringValue)===Pg}function Fs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ls(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function V0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===N0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.value=e}static empty(){return new Ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!io(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fs(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Fs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());io(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ln(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];io(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ls(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Ht(Fs(this.value))}}function kg(t){const e=[];return ls(t.fields,(n,r)=>{const s=new ot([n]);if(io(r)){const i=kg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new zt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Bt(e,0,Me.min(),Me.min(),Me.min(),Ht.empty(),0)}static newFoundDocument(e,n,r,s){return new Bt(e,1,n,Me.min(),r,s,0)}static newNoDocument(e,n){return new Bt(e,2,n,Me.min(),Me.min(),Ht.empty(),0)}static newUnknownDocument(e,n){return new Bt(e,3,n,Me.min(),Me.min(),Ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Me.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Me.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Bt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Bt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.position=e,this.inclusive=n}}function vf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=fe.comparator(fe.fromName(a.referenceValue),n.key):r=ts(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ef(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ln(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,n="asc"){this.field=e,this.dir=n}}function M0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Og{}class Je extends Og{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new F0(e,n,r):n==="array-contains"?new B0(e,r):n==="in"?new j0(e,r):n==="not-in"?new H0(e,r):n==="array-contains-any"?new q0(e,r):new Je(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new U0(e,r):new $0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ts(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Xn extends Og{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new Xn(e,n)}matches(e){return Dg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Dg(t){return t.op==="and"}function Ng(t){return L0(t)&&Dg(t)}function L0(t){for(const e of t.filters)if(e instanceof Xn)return!1;return!0}function Al(t){if(t instanceof Je)return t.field.canonicalString()+t.op.toString()+ns(t.value);if(Ng(t))return t.filters.map(e=>Al(e)).join(",");{const e=t.filters.map(n=>Al(n)).join(",");return`${t.op}(${e})`}}function xg(t,e){return t instanceof Je?function(r,s){return s instanceof Je&&r.op===s.op&&r.field.isEqual(s.field)&&ln(r.value,s.value)}(t,e):t instanceof Xn?function(r,s){return s instanceof Xn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&xg(a,s.filters[l]),!0):!1}(t,e):void de(19439)}function Vg(t){return t instanceof Je?function(n){return`${n.field.canonicalString()} ${n.op} ${ns(n.value)}`}(t):t instanceof Xn?function(n){return n.op.toString()+" {"+n.getFilters().map(Vg).join(" ,")+"}"}(t):"Filter"}class F0 extends Je{constructor(e,n,r){super(e,n,r),this.key=fe.fromName(r.referenceValue)}matches(e){const n=fe.comparator(e.key,this.key);return this.matchesComparison(n)}}class U0 extends Je{constructor(e,n){super(e,"in",n),this.keys=Mg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $0 extends Je{constructor(e,n){super(e,"not-in",n),this.keys=Mg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Mg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>fe.fromName(r.referenceValue))}class B0 extends Je{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tc(n)&&ei(n.arrayValue,this.value)}}class j0 extends Je{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ei(this.value.arrayValue,n)}}class H0 extends Je{constructor(e,n){super(e,"not-in",n)}matches(e){if(ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ei(this.value.arrayValue,n)}}class q0 extends Je{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ei(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z0{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Ie=null}}function Tf(t,e=null,n=[],r=[],s=null,i=null,a=null){return new z0(t,e,n,r,s,i,a)}function Ic(t){const e=Ne(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Al(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),yc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ns(r)).join(",")),e.Ie=n}return e.Ie}function wc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!M0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!xg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ef(t.startAt,e.startAt)&&Ef(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function W0(t,e,n,r,s,i,a,l){return new ra(t,e,n,r,s,i,a,l)}function G0(t){return new ra(t)}function If(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function K0(t){return t.collectionGroup!==null}function Us(t){const e=Ne(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new at(ot.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Po(i,r))}),n.has(ot.keyField().canonicalString())||e.Ee.push(new Po(ot.keyField(),r))}return e.Ee}function mr(t){const e=Ne(t);return e.de||(e.de=Q0(e,Us(t))),e.de}function Q0(t,e){if(t.limitType==="F")return Tf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Po(s.field,i)});const n=t.endAt?new Co(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Co(t.startAt.position,t.startAt.inclusive):null;return Tf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Sl(t,e,n){return new ra(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Lg(t,e){return wc(mr(t),mr(e))&&t.limitType===e.limitType}function Fg(t){return`${Ic(mr(t))}|lt:${t.limitType}`}function As(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Vg(s)).join(", ")}]`),yc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ns(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ns(s)).join(",")),`Target(${r})`}(mr(t))}; limitType=${t.limitType})`}function bc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):fe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Us(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=vf(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Us(r),s)||r.endAt&&!function(a,l,c){const h=vf(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Us(r),s))}(t,e)}function J0(t){return(e,n)=>{let r=!1;for(const s of Us(t)){const i=X0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function X0(t,e,n){const r=t.field.isKeyField()?fe.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ts(c,h):de(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return wg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=new Ct(fe.comparator);function ko(){return Y0}const Ug=new Ct(fe.comparator);function qi(...t){let e=Ug;for(const n of t)e=e.insert(n.key,n);return e}function $g(t){let e=Ug;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function fr(){return $s()}function Bg(){return $s()}function $s(){return new Sr(t=>t.toString(),(t,e)=>t.isEqual(e))}const Z0=new Ct(fe.comparator),eb=new at(fe.comparator);function _t(...t){let e=eb;for(const n of t)e=e.add(n);return e}const tb=new at(Ee);function nb(){return tb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bo(e)?"-0":e}}function jg(t){return{integerValue:""+t}}function rb(t,e){return R0(e)?jg(e):Ac(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(){this._=void 0}}function sb(t,e,n){return t instanceof ti?function(s,i){const a={fields:{[Ag]:{stringValue:bg},[Rg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vc(i)&&(i=Ec(i)),i&&(a.fields[Sg]=i),{mapValue:a}}(n,e):t instanceof ni?qg(t,e):t instanceof ri?zg(t,e):function(s,i){const a=Hg(s,i),l=wf(a)+wf(s.Re);return bl(a)&&bl(s.Re)?jg(l):Ac(s.serializer,l)}(t,e)}function ib(t,e,n){return t instanceof ni?qg(t,e):t instanceof ri?zg(t,e):n}function Hg(t,e){return t instanceof Oo?function(r){return bl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ti extends sa{}class ni extends sa{constructor(e){super(),this.elements=e}}function qg(t,e){const n=Wg(e);for(const r of t.elements)n.some(s=>ln(s,r))||n.push(r);return{arrayValue:{values:n}}}class ri extends sa{constructor(e){super(),this.elements=e}}function zg(t,e){let n=Wg(e);for(const r of t.elements)n=n.filter(s=>!ln(s,r));return{arrayValue:{values:n}}}class Oo extends sa{constructor(e,n){super(),this.serializer=e,this.Re=n}}function wf(t){return rt(t.integerValue||t.doubleValue)}function Wg(t){return Tc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(e,n){this.field=e,this.transform=n}}function ab(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ni&&s instanceof ni||r instanceof ri&&s instanceof ri?Zr(r.elements,s.elements,ln):r instanceof Oo&&s instanceof Oo?ln(r.Re,s.Re):r instanceof ti&&s instanceof ti}(t.transform,e.transform)}class lb{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ia{}function Gg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Qg(t.key,vn.none()):new mi(t.key,t.data,vn.none());{const n=t.data,r=Ht.empty();let s=new at(ot.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Rr(t.key,r,new zt(s.toArray()),vn.none())}}function cb(t,e,n){t instanceof mi?function(s,i,a){const l=s.value.clone(),c=Af(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(s,i,a){if(!oo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Af(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Kg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Bs(t,e,n,r){return t instanceof mi?function(i,a,l,c){if(!oo(i.precondition,a))return l;const h=i.value.clone(),d=Sf(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(i,a,l,c){if(!oo(i.precondition,a))return l;const h=Sf(i.fieldTransforms,c,a),d=a.data;return d.setAll(Kg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return oo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function ub(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Hg(r.transform,s||null);i!=null&&(n===null&&(n=Ht.empty()),n.set(r.field,i))}return n||null}function bf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zr(r,s,(i,a)=>ab(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class mi extends ia{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rr extends ia{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Kg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Af(t,e,n){const r=new Map;Be(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,ib(a,l,n[s]))}return r}function Sf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,sb(i,a,e))}return r}class Qg extends ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hb extends ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&cb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Bs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Bg();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Gg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(Me.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_t())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,(n,r)=>bf(n,r))&&Zr(this.baseMutations,e.baseMutations,(n,r)=>bf(n,r))}}class Sc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Be(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return Z0}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Sc(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class db{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qe,ye;function pb(t){switch(t){case $.OK:return de(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return de(15467,{code:t})}}function gb(t){if(t===void 0)return Ir("GRPC error has no .code"),$.UNKNOWN;switch(t){case qe.OK:return $.OK;case qe.CANCELLED:return $.CANCELLED;case qe.UNKNOWN:return $.UNKNOWN;case qe.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case qe.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case qe.INTERNAL:return $.INTERNAL;case qe.UNAVAILABLE:return $.UNAVAILABLE;case qe.UNAUTHENTICATED:return $.UNAUTHENTICATED;case qe.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case qe.NOT_FOUND:return $.NOT_FOUND;case qe.ALREADY_EXISTS:return $.ALREADY_EXISTS;case qe.PERMISSION_DENIED:return $.PERMISSION_DENIED;case qe.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case qe.ABORTED:return $.ABORTED;case qe.OUT_OF_RANGE:return $.OUT_OF_RANGE;case qe.UNIMPLEMENTED:return $.UNIMPLEMENTED;case qe.DATA_LOSS:return $.DATA_LOSS;default:return de(39323,{code:t})}}(ye=qe||(qe={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new dc([4294967295,4294967295],0);class mb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function _b(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function yb(t,e){return Rl(t,e.toTimestamp())}function Kr(t){return Be(!!t,49232),Me.fromTimestamp(function(n){const r=wr(n);return new Xe(r.seconds,r.nanos)}(t))}function Jg(t,e){return Cl(t,e).canonicalString()}function Cl(t,e){const n=function(s){return new We(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function vb(t){const e=We.fromString(t);return Be(Rb(e),10190,{key:e.toString()}),e}function Pl(t,e){return Jg(t.databaseId,e.path)}function Eb(t){const e=vb(t);return e.length===4?We.emptyPath():Ib(e)}function Tb(t){return new We(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Ib(t){return Be(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Rf(t,e,n){return{name:Pl(t,e),fields:n.value.mapValue.fields}}function wb(t,e){let n;if(e instanceof mi)n={update:Rf(t,e.key,e.value)};else if(e instanceof Qg)n={delete:Pl(t,e.key)};else if(e instanceof Rr)n={update:Rf(t,e.key,e.data),updateMask:Sb(e.fieldMask)};else{if(!(e instanceof hb))return de(16599,{ft:e.type});n={verify:Pl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof ti)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ni)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ri)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Oo)return{fieldPath:a.field.canonicalString(),increment:l.Re};throw de(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:yb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de(27497)}(t,e.precondition)),n}function bb(t,e){return t&&t.length>0?(Be(e!==void 0,14353),t.map(n=>function(s,i){let a=s.updateTime?Kr(s.updateTime):Kr(i);return a.isEqual(Me.min())&&(a=Kr(i)),new lb(a,s.transformResults||[])}(n,e))):[]}function Ab(t){let e=Eb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Be(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const m=Xg(p);return m instanceof Xn&&Ng(m)?m.getFilters():[m]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(m=>function(P){return new Po(Lr(P.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(m))}(n.orderBy));let l=null;n.limit&&(l=function(p){let m;return m=typeof p=="object"?p.value:p,yc(m)?null:m}(n.limit));let c=null;n.startAt&&(c=function(p){const m=!!p.before,I=p.values||[];return new Co(I,m)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const m=!p.before,I=p.values||[];return new Co(I,m)}(n.endAt)),W0(e,s,a,i,l,"F",c,h)}function Xg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Lr(n.unaryFilter.field);return Je.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Lr(n.unaryFilter.field);return Je.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Lr(n.unaryFilter.field);return Je.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Lr(n.unaryFilter.field);return Je.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return de(61313);default:return de(60726)}}(t):t.fieldFilter!==void 0?function(n){return Je.create(Lr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return de(58110);default:return de(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Xn.create(n.compositeFilter.filters.map(r=>Xg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de(1026)}}(n.compositeFilter.op))}(t):de(30097,{filter:t})}function Lr(t){return ot.fromServerFormat(t.fieldPath)}function Sb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Rb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.wt=e}}function Pb(t){const e=Ab({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Sl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kb{constructor(){this.Cn=new Ob}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Jn.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class Ob{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(We.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(We.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yg=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(Yg,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new rs(0)}static lr(){return new rs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="LruGarbageCollector",Db=1048576;function kf([t,e],[n,r]){const s=Ee(t,n);return s===0?Ee(e,r):s}class Nb{constructor(e){this.Er=e,this.buffer=new at(kf),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();kf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class xb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){Z(Pf,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){gi(n)?Z(Pf,"Ignoring IndexedDB error during garbage collection: ",n):await gc(n)}await this.mr(3e5)})}}class Vb{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(mc.le);const r=new Nb(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Cf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cf):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Mr()<=ge.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Mb(t,e){return new Vb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(){this.changes=new Sr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Bt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Bs(r.mutation,s,zt.empty(),Xe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_t()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_t()){const s=fr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=qi();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_t()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=ko();const a=$s(),l=function(){return $s()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Rr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Bs(d.mutation,h,d.mutation.getFieldMask(),Xe.now())):a.set(h.key,zt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new Fb(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=$s();let s=new Ct((a,l)=>a-l),i=_t();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||zt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||_t()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Bg();d.forEach(m=>{if(!i.has(m)){const I=Gg(n.get(m),r.get(m));I!==null&&p.set(m,I),i=i.add(m)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return fe.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):K0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(fr());let l=Zs,c=i;return a.next(h=>M.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(m=>{c=c.insert(d,m)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,_t())).next(d=>({batchId:l,changes:$g(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new fe(n)).next(r=>{let s=qi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=qi();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const h=function(p,m){return new ra(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,m)=>{a=a.insert(p,m)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,Bt.newInvalidDocument(d)))});let l=qi();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&Bs(d.mutation,h,zt.empty(),Xe.now()),bc(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return M.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Kr(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:Pb(s.bundledQuery),readTime:Kr(s.readTime)}}(n)),M.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.overlays=new Ct(fe.comparator),this.Qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=fr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=fr(),i=n.length+1,a=new fe(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ct((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=fr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=fr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return M.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new db(n,r));let i=this.Qr.get(n);i===void 0&&(i=_t(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(){this.sessionToken=an.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(){this.$r=new at(Qe.Ur),this.Kr=new at(Qe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new Qe(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new Qe(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new fe(new We([])),r=new Qe(n,e),s=new Qe(n,e+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new fe(new We([])),r=new Qe(n,e),s=new Qe(n,e+1);let i=_t();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Qe(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Qe{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return fe.comparator(e.key,n.key)||Ee(e.Zr,n.Zr)}static Wr(e,n){return Ee(e.Zr,n.Zr)||fe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new at(Qe.Ur)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fb(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Xr=this.Xr.add(new Qe(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,n){return M.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?_c:this.nr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Qe(n,0),s=new Qe(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],a=>{const l=this.ei(a.Zr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(Ee);return n.forEach(s=>{const i=new Qe(s,0),a=new Qe(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],l=>{r=r.add(l.Zr)})}),M.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;fe.isDocumentKey(i)||(i=i.child(""));const a=new Qe(new fe(i),0);let l=new at(Ee);return this.Xr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Zr)),!0)},a),M.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Be(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return M.forEach(n.mutations,s=>{const i=new Qe(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new Qe(n,0),s=this.Xr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.ii=e,this.docs=function(){return new Ct(fe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Bt.newInvalidDocument(n))}getEntries(e,n){let r=ko();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Bt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=ko();const a=n.path,l=new fe(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||w0(I0(d),r)<=0||(s.has(d.key)||bc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de(9500)}si(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zb(this)}getSize(e){return M.resolve(this.size)}}class zb extends Lb{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.persistence=e,this.oi=new Sr(n=>Ic(n),wc),this.lastRemoteSnapshotVersion=Me.min(),this.highestTargetId=0,this._i=0,this.ai=new Rc,this.targetCount=0,this.ui=rs.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),M.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new rs(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Tr(n),M.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e,n){this.ci={},this.overlays={},this.li=new mc(0),this.hi=!1,this.hi=!0,this.Pi=new jb,this.referenceDelegate=e(this),this.Ti=new Wb(this),this.indexManager=new kb,this.remoteDocumentCache=function(s){return new qb(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new Cb(n),this.Ei=new $b(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Bb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new Hb(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new Gb(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return M.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class Gb extends A0{constructor(e){super(),this.currentSequenceNumber=e}}class Cc{constructor(e){this.persistence=e,this.Vi=new Rc,this.mi=null}static fi(e){return new Cc(e)}get gi(){if(this.mi)return this.mi;throw de(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.gi,r=>{const s=fe.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,Me.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return M.or([()=>M.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Do{constructor(e,n){this.persistence=e,this.yi=new Sr(r=>C0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Mb(this,n)}static fi(e,n){return new Do(e,n)}di(){}Ai(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return M.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,a=>this.Dr(e,a,n).next(l=>{l||(r++,i.removeEntry(a,Me.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=so(e.data.value)),n}Dr(e,n,r){return M.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=_t(),s=_t();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pc(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return GE()?8:S0(vt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Ss(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Kb;return this.bs(e,n,a).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,a,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(Mr()<=ge.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",As(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),M.resolve()):(Mr()<=ge.DEBUG&&Z("QueryEngine","Query:",As(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Mr()<=ge.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",As(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mr(n))):M.resolve())}ws(e,n){if(If(n))return M.resolve(null);let r=mr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Sl(n,null,"F"),r=mr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=_t(...i);return this.ys.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.vs(n,l);return this.Cs(n,h,a,c.readTime)?this.ws(e,Sl(n,null,"F")):this.Fs(e,h,n,c)}))})))}Ss(e,n,r,s){return If(n)||s.isEqual(Me.min())?M.resolve(null):this.ys.getDocuments(e,r).next(i=>{const a=this.vs(n,i);return this.Cs(n,a,r,s)?M.resolve(null):(Mr()<=ge.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),As(n)),this.Fs(e,a,n,T0(s,Zs)).next(l=>l))})}vs(e,n){let r=new at(J0(e));return n.forEach((s,i)=>{bc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,n,r){return Mr()<=ge.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",As(n)),this.ys.getDocumentsMatchingQuery(e,n,Jn.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb="LocalStore";class Xb{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Ct(Ee),this.Os=new Sr(i=>Ic(i),wc),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ub(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function Yb(t,e,n,r){return new Xb(t,e,n,r)}async function em(t,e){const n=Ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=_t();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({ks:h,removedBatchIds:a,addedBatchIds:l}))})})}function Zb(t,e){const n=Ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,m=p.keys();let I=M.resolve();return m.forEach(P=>{I=I.next(()=>d.getEntry(c,P)).next(N=>{const L=h.docVersions.get(P);Be(L!==null,48541),N.version.compareTo(L)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=_t();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function eA(t){const e=Ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function tA(t,e){const n=Ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=_c),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Of{constructor(){this.activeTargetIds=nb()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nA{constructor(){this.xo=new Of,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Of,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Df="ConnectivityMonitor";class Nf{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){Z(Df,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){Z(Df,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi=null;function kl(){return zi===null?zi=function(){return 268435456+Math.round(2147483648*Math.random())}():zi++,"0x"+zi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="RestConnection",sA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class iA{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===So?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const a=kl(),l=this.jo(e,n.toUriEncodedString());Z(Ga,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:h}=new URL(l),d=ci(h);return this.Jo(e,l,c,r,d).then(p=>(Z(Ga,`Received RPC '${e}' ${a}: `,p),p),p=>{throw na(Ga,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,n,r,s,i,a){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+as}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=sA[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="WebChannelConnection";class aA extends iA{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=kl();return new Promise((l,c)=>{const h=new pg;h.setWithCredentials(!0),h.listenOnce(gg.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ro.NO_ERROR:const p=h.getResponseJson();Z(dt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case ro.TIMEOUT:Z(dt,`RPC '${e}' ${a} timed out`),c(new le($.DEADLINE_EXCEEDED,"Request time out"));break;case ro.HTTP_ERROR:const m=h.getStatus();if(Z(dt,`RPC '${e}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const P=I==null?void 0:I.error;if(P&&P.status&&P.message){const N=function(q){const F=q.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(F)>=0?F:$.UNKNOWN}(P.status);c(new le(N,P.message))}else c(new le($.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new le($.UNAVAILABLE,"Connection failed."));break;default:de(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Z(dt,`RPC '${e}' ${a} completed.`)}});const d=JSON.stringify(s);Z(dt,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)})}T_(e,n,r){const s=kl(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=yg(),l=_g(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Z(dt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);let m=!1,I=!1;const P=new oA({Zo:L=>{I?Z(dt,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(m||(Z(dt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Z(dt,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Xo:()=>p.close()}),N=(L,q,F)=>{L.listen(q,B=>{try{F(B)}catch(j){setTimeout(()=>{throw j},0)}})};return N(p,Rs.EventType.OPEN,()=>{I||(Z(dt,`RPC '${e}' stream ${s} transport opened.`),P.__())}),N(p,Rs.EventType.CLOSE,()=>{I||(I=!0,Z(dt,`RPC '${e}' stream ${s} transport closed`),P.u_())}),N(p,Rs.EventType.ERROR,L=>{I||(I=!0,na(dt,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),P.u_(new le($.UNAVAILABLE,"The operation could not be completed")))}),N(p,Rs.EventType.MESSAGE,L=>{var q;if(!I){const F=L.data[0];Be(!!F,16349);const B=F,j=(B==null?void 0:B.error)||((q=B[0])===null||q===void 0?void 0:q.error);if(j){Z(dt,`RPC '${e}' stream ${s} received error:`,j);const ce=j.status;let ae=function(_){const b=qe[_];if(b!==void 0)return gb(b)}(ce),A=j.message;ae===void 0&&(ae=$.INTERNAL,A="Unknown error status: "+ce+" with message "+j.message),I=!0,P.u_(new le(ae,A)),p.close()}else Z(dt,`RPC '${e}' stream ${s} received:`,F),P.c_(F)}}),N(l,mg.STAT_EVENT,L=>{L.stat===El.PROXY?Z(dt,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===El.NOPROXY&&Z(dt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}}function Ka(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(t){return new mb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xf="PersistentStream";class lA{constructor(e,n,r,s,i,a,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new tm(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Ir(n.toString()),Ir("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===n&&this.K_(r,s)},r=>{e(()=>{const s=new le($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return Z(xf,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(Z(xf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cA extends lA{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return Be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Be(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){Be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=bb(e.writeResults,e.commitTime),r=Kr(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=Tb(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>wb(this.serializer,r))};this.L_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{}class hA extends uA{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new le($.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(e,Cl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new le($.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(e,Cl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new le($.UNKNOWN,a.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class fA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Ir(n),this.oa=!1):Z("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i="RemoteStore";class dA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(a=>{r.enqueueAndForget(async()=>{vi(this)&&(Z(_i,"Restarting streams for network reachability change."),await async function(c){const h=Ne(c);h.Ta.add(4),await yi(h),h.da.set("Unknown"),h.Ta.delete(4),await aa(h)}(this))})}),this.da=new fA(r,s)}}async function aa(t){if(vi(t))for(const e of t.Ia)await e(!0)}async function yi(t){for(const e of t.Ia)await e(!1)}function vi(t){return Ne(t).Ta.size===0}async function nm(t,e,n){if(!gi(e))throw e;t.Ta.add(1),await yi(t),t.da.set("Offline"),n||(n=()=>eA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(_i,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await aa(t)})}function rm(t,e){return e().catch(n=>nm(t,n,e))}async function la(t){const e=Ne(t),n=Yn(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:_c;for(;pA(e);)try{const s=await tA(e.localStore,r);if(s===null){e.ha.length===0&&n.N_();break}r=s.batchId,gA(e,s)}catch(s){await nm(e,s)}sm(e)&&im(e)}function pA(t){return vi(t)&&t.ha.length<10}function gA(t,e){t.ha.push(e);const n=Yn(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function sm(t){return vi(t)&&!Yn(t).F_()&&t.ha.length>0}function im(t){Yn(t).start()}async function mA(t){Yn(t).ta()}async function _A(t){const e=Yn(t);for(const n of t.ha)e.Z_(n.mutations)}async function yA(t,e,n){const r=t.ha.shift(),s=Sc.from(r,e,n);await rm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await la(t)}async function vA(t,e){e&&Yn(t).Y_&&await async function(r,s){if(function(a){return pb(a)&&a!==$.ABORTED}(s.code)){const i=r.ha.shift();Yn(r).O_(),await rm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await la(r)}}(t,e),sm(t)&&im(t)}async function Vf(t,e){const n=Ne(t);n.asyncQueue.verifyOperationInProgress(),Z(_i,"RemoteStore received new credentials");const r=vi(n);n.Ta.add(3),await yi(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await aa(n)}async function EA(t,e){const n=Ne(t);e?(n.Ta.delete(2),await aa(n)):e||(n.Ta.add(2),await yi(n),n.da.set("Unknown"))}function Yn(t){return t.Va||(t.Va=function(n,r,s){const i=Ne(n);return i.ra(),new cA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:mA.bind(null,t),i_:vA.bind(null,t),X_:_A.bind(null,t),ea:yA.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await la(t)):(await t.Va.stop(),t.ha.length>0&&(Z(_i,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new kc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function om(t,e){if(Ir("AsyncQueue",`${e}: ${t}`),gi(t))return new le($.UNAVAILABLE,`${e}: ${t}`);throw t}class TA{constructor(){this.queries=Mf(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const s=Ne(n),i=s.queries;s.queries=Mf(),i.forEach((a,l)=>{for(const c of l.ya)c.onError(r)})})(this,new le($.ABORTED,"Firestore shutting down"))}}function Mf(){return new Sr(t=>Fg(t),Lg)}function IA(t){t.ba.forEach(e=>{e.next()})}var Lf,Ff;(Ff=Lf||(Lf={})).Ca="default",Ff.Cache="cache";const wA="SyncEngine";class bA{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.au={},this.uu=new Sr(l=>Fg(l),Lg),this.cu=new Map,this.lu=new Set,this.hu=new Ct(fe.comparator),this.Pu=new Map,this.Tu=new Rc,this.Iu={},this.Eu=new Map,this.du=rs.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function AA(t,e,n){const r=PA(t);try{const s=await function(a,l){const c=Ne(a),h=Xe.now(),d=l.reduce((I,P)=>I.add(P.key),_t());let p,m;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let P=ko(),N=_t();return c.Bs.getEntries(I,d).next(L=>{P=L,P.forEach((q,F)=>{F.isValidDocument()||(N=N.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,P)).next(L=>{p=L;const q=[];for(const F of l){const B=ub(F,p.get(F.key).overlayedDocument);B!=null&&q.push(new Rr(F.key,B,kg(B.value.mapValue),vn.exists(!0)))}return c.mutationQueue.addMutationBatch(I,h,q,l)}).next(L=>{m=L;const q=L.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(I,L.batchId,q)})}).then(()=>({batchId:m.batchId,changes:$g(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Iu[a.currentUser.toKey()];h||(h=new Ct(Ee)),h=h.insert(l,c),a.Iu[a.currentUser.toKey()]=h}(r,s.batchId,n),await ca(r,s.changes),await la(r.remoteStore)}catch(s){const i=om(s,"Failed to persist write");n.reject(i)}}function Uf(t,e,n){const r=Ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.uu.forEach((i,a)=>{const l=a.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=Ne(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const m of p.ya)m.Da(l)&&(h=!0)}),h&&IA(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function SA(t,e){const n=Ne(t),r=e.batch.batchId;try{const s=await Zb(n.localStore,e);lm(n,r,null),am(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ca(n,s)}catch(s){await gc(s)}}async function RA(t,e,n){const r=Ne(t);try{const s=await function(a,l){const c=Ne(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Be(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);lm(r,e,n),am(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ca(r,s)}catch(s){await gc(s)}}function am(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function lm(t,e,n){const r=Ne(t);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}async function ca(t,e,n){const r=Ne(t),s=[],i=[],a=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{a.push(r.Ru(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Pc.Rs(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.au.j_(s),await async function(c,h){const d=Ne(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,m=>M.forEach(m.ds,I=>d.persistence.referenceDelegate.addReference(p,m.targetId,I)).next(()=>M.forEach(m.As,I=>d.persistence.referenceDelegate.removeReference(p,m.targetId,I)))))}catch(p){if(!gi(p))throw p;Z(Jb,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const I=d.xs.get(m),P=I.snapshotVersion,N=I.withLastLimboFreeSnapshotVersion(P);d.xs=d.xs.insert(m,N)}}}(r.localStore,i))}async function CA(t,e){const n=Ne(t);if(!n.currentUser.isEqual(e)){Z(wA,"User change. New user:",e.toKey());const r=await em(n.localStore,e);n.currentUser=e,function(i,a){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new le($.CANCELLED,a))})}),i.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ca(n,r.ks)}}function PA(t){const e=Ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=RA.bind(null,e),e}class No{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oa(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return Yb(this.persistence,new Qb,e.initialUser,this.serializer)}yu(e){return new Zg(Cc.fi,this.serializer)}pu(e){return new nA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}No.provider={build:()=>new No};class kA extends No{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){Be(this.persistence.referenceDelegate instanceof Do,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xb(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new Zg(r=>Do.fi(r,n),this.serializer)}}class Ol{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Uf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CA.bind(null,this.syncEngine),await EA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new TA}()}createDatastore(e){const n=oa(e.databaseInfo.databaseId),r=function(i){return new aA(i)}(e.databaseInfo);return function(i,a,l,c){return new hA(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new dA(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Uf(this.syncEngine,n,0),function(){return Nf.C()?new Nf:new rA}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,d){const p=new bA(s,i,a,l,c,h);return d&&(p.Au=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Ne(s);Z(_i,"RemoteStore shutting down."),i.Ta.add(5),await yi(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ol.provider={build:()=>new Ol};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="FirestoreClient";class OA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=pt.UNAUTHENTICATED,this.clientId=Tg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Z(Zn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Z(Zn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=om(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qa(t,e){t.asyncQueue.verifyOperationInProgress(),Z(Zn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await em(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $f(t,e){t.asyncQueue.verifyOperationInProgress();const n=await DA(t);Z(Zn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Vf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Vf(e.remoteStore,s)),t._onlineComponents=e}async function DA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(Zn,"Using user provided OfflineComponentProvider");try{await Qa(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;na("Error using user provided cache. Falling back to memory cache: "+n),await Qa(t,new No)}}else Z(Zn,"Using default OfflineComponentProvider"),await Qa(t,new kA(void 0));return t._offlineComponents}async function NA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(Zn,"Using user provided OnlineComponentProvider"),await $f(t,t._uninitializedComponentsProvider._online)):(Z(Zn,"Using default OnlineComponentProvider"),await $f(t,new Ol))),t._onlineComponents}function xA(t){return NA(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t,e,n){if(!n)throw new le($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function MA(t,e,n,r){if(e===!0&&r===!0)throw new le($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jf(t){if(!fe.isDocumentKey(t))throw new le($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Oc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de(12329,{type:typeof t})}function Dl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new le($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oc(t);throw new le($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um="firestore.googleapis.com",Hf=!0;class qf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new le($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=um,this.ssl=Hf}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Hf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Db)throw new le($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}MA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new h0;switch(r.type){case"firstParty":return new g0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new le($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Bf.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Bf.delete(n),r.terminate())}(this),Promise.resolve()}}function LA(t,e,n,r={}){var s;t=Dl(t,Dc);const i=ci(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Pp(`https://${c}`),kp("Firestore",!0)),a.host!==um&&a.host!==c&&na("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!yr(h,l)&&(t._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=pt.MOCK_USER;else{d=FE(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new le($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new pt(m)}t._authCredentials=new f0(new Eg(d,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nc(this.firestore,e,this._query)}}class En{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new si(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new En(this.firestore,e,this._key)}}class si extends Nc{constructor(e,n,r){super(e,n,G0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new En(this.firestore,null,new fe(e))}withConverter(e){return new si(this.firestore,e,this._path)}}function FA(t,e,...n){if(t=on(t),arguments.length===1&&(e=Tg.newId()),VA("doc","path",e),t instanceof Dc){const r=We.fromString(e,...n);return jf(r),new En(t,null,new fe(r))}{if(!(t instanceof En||t instanceof si))throw new le($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(We.fromString(e,...n));return jf(r),new En(t.firestore,t instanceof si?t.converter:null,new fe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf="AsyncQueue";class Wf{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new tm(this,"async_queue_retry"),this.ec=()=>{const r=Ka();r&&Z(zf,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const n=Ka();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=Ka();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new gr;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!gi(e))throw e;Z(zf,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Ir("INTERNAL UNHANDLED ERROR: ",Gf(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=n,n}enqueueAfterDelay(e,n,r){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const s=kc.createAndSchedule(this,e,n,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&de(47125,{_c:Gf(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function Gf(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class hm extends Dc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Wf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wf(e),this._firestoreClient=void 0,await e}}}function UA(t,e){const n=typeof t=="object"?t:xp(),r=typeof t=="string"?t:So,s=nc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=ME("firestore");i&&LA(s,...i)}return s}function $A(t){if(t._terminated)throw new le($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||BA(t),t._firestoreClient}function BA(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new D0(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,cm(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new OA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ii(an.fromBase64String(e))}catch(n){throw new le($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ii(an.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ee(this._lat,e._lat)||Ee(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jA=/^__.*__$/;class HA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new mi(e,this.data,n,this.fieldTransforms)}}function gm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de(40011,{hc:t})}}class Vc{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Vc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return xo(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(gm(this.hc)&&jA.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class qA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||oa(e)}gc(e,n,r,s=!1){return new Vc({hc:e,methodName:n,fc:r,path:ot.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zA(t){const e=t._freezeSettings(),n=oa(t._databaseId);return new qA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function WA(t,e,n,r,s,i={}){const a=t.gc(i.merge||i.mergeFields?2:0,e,n,s);vm("Data must be an object, but it was:",a,r);const l=_m(r,a);let c,h;if(i.merge)c=new zt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=GA(e,p,n);if(!a.contains(m))throw new le($.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);JA(d,m)||d.push(m)}c=new zt(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new HA(new Ht(l),c,h)}class Mc extends xc{_toFieldTransform(e){return new ob(e.path,new ti)}isEqual(e){return e instanceof Mc}}function mm(t,e){if(ym(t=on(t)))return vm("Unsupported field value:",e,t),_m(t,e);if(t instanceof xc)return function(r,s){if(!gm(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=mm(l,s.Rc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=on(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rb(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Xe.fromDate(r);return{timestampValue:Rl(s.serializer,i)}}if(r instanceof Xe){const i=new Xe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Rl(s.serializer,i)}}if(r instanceof dm)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ii)return{bytesValue:_b(s.serializer,r._byteString)};if(r instanceof En){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Vc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Jg(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof pm)return function(a,l){return{mapValue:{fields:{[Cg]:{stringValue:Pg},[Il]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Vc("VectorValues must only contain numeric values.");return Ac(l.serializer,h)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${Oc(r)}`)}(t,e)}function _m(t,e){const n={};return wg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(t,(r,s)=>{const i=mm(s,e.Ic(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function ym(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Xe||t instanceof dm||t instanceof ii||t instanceof En||t instanceof xc||t instanceof pm)}function vm(t,e,n){if(!ym(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Oc(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function GA(t,e,n){if((e=on(e))instanceof fm)return e._internalPath;if(typeof e=="string")return QA(t,e);throw xo("Field path arguments must be of type string or ",t,!1,void 0,n)}const KA=new RegExp("[~\\*/\\[\\]]");function QA(t,e,n){if(e.search(KA)>=0)throw xo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new fm(...e.split("."))._internalPath}catch{throw xo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new le($.INVALID_ARGUMENT,l+t+c)}function JA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function YA(t,e,n){t=Dl(t,En);const r=Dl(t.firestore,hm),s=XA(t.converter,e);return ZA(r,[WA(zA(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,vn.none())])}function ZA(t,e){return function(r,s){const i=new gr;return r.asyncQueue.enqueueAndForget(async()=>AA(await xA(r),s,i)),i.promise}($A(t),e)}function eS(){return new Mc("serverTimestamp")}(function(e,n=!0){(function(s){as=s})(is),Xr(new vr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new hm(new d0(r.getProvider("auth-internal")),new m0(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new le($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ro(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Gn(af,lf,e),Gn(af,lf,"esm2017")})();const tS={apiKey:"AIzaSyC_acZxWWtGDDFPdxBaa2TR6JkQcw0k0Fk",authDomain:"afp-site-c1bd9.firebaseapp.com",projectId:"afp-site-c1bd9",storageBucket:"afp-site-c1bd9.firebasestorage.app",messagingSenderId:"533749269819",appId:"1:533749269819:web:47c5dbe921ef3aae83e31e",measurementId:"G-W9TQ1EE3PB"},nS=Np(tS),rS=UA(nS);c0();const sS={class:"footer"},iS={class:"footer-bottom"},oS={class:"footer-nav"},aS={class:"subscribe-box"},lS={key:0,class:"subscribe-message"},cS={class:"footer-copy"},uS={__name:"Footer",setup(t){const e=_r(""),n=_r(""),r=async()=>{try{const s=e.value.trim().toLowerCase();if(!s){n.value="Please enter a valid email.";return}await YA(FA(rS,"mailingList",s),{email:s,subscribedAt:eS()}),n.value="Thank you for subscribing!",e.value=""}catch(s){console.error("Error adding email:",s),n.value="An error occurred. Please try again later."}};return(s,i)=>(ve(),Ce("footer",sS,[i[8]||(i[8]=J("div",{class:"footer-top"},[J("img",{src:RE,alt:"AFP Logo",class:"logo"})],-1)),J("div",iS,[J("nav",oS,[re(we(Ke),{to:"/"},{default:He(()=>i[1]||(i[1]=[ze("Home")])),_:1,__:[1]}),re(we(Ke),{to:"/about"},{default:He(()=>i[2]||(i[2]=[ze("About")])),_:1,__:[2]}),re(we(Ke),{to:"/events"},{default:He(()=>i[3]||(i[3]=[ze("Events")])),_:1,__:[3]}),re(we(Ke),{to:"/contact"},{default:He(()=>i[4]||(i[4]=[ze("Contact")])),_:1,__:[4]}),re(we(Ke),{to:"/privacy"},{default:He(()=>i[5]||(i[5]=[ze("Privacy Policy")])),_:1,__:[5]})]),J("div",aS,[i[7]||(i[7]=J("h3",null,"Join our mailing list",-1)),J("form",{onSubmit:fv(r,["prevent"])},[O_(J("input",{"onUpdate:modelValue":i[0]||(i[0]=a=>e.value=a),type:"email",placeholder:"Enter your email",required:"",class:"email-input"},null,512),[[cv,e.value]]),i[6]||(i[6]=J("button",{type:"submit",class:"subscribe-button"},"Subscribe",-1))],32),n.value?(ve(),Ce("p",lS,be(n.value),1)):qr("",!0)]),J("p",cS," © "+be(new Date().getFullYear())+" Association of Family Psychiatrists. All rights reserved. ",1)])]))}},hS=lt(uS,[["__scopeId","data-v-9cbcca05"]]),fS={class:"layout"},dS={class:"page-content"},pS={__name:"App",setup(t){return(e,n)=>(ve(),Ce(mt,null,[J("div",fS,[re(SE),J("main",dS,[re(we(Ip))])]),re(hS)],64))}},gS=lt(pS,[["__scopeId","data-v-aa0b9fe9"]]),mS="modulepreload",_S=function(t){return"/site/"+t},Kf={},Qf=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(n.map(h=>{if(h=_S(h),h in Kf)return;Kf[h]=!0;const d=h.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":mS,d||(m.as="script"),m.crossOrigin="",m.href=h,c&&m.setAttribute("nonce",c),document.head.appendChild(m),d)return new Promise((I,P)=>{m.addEventListener("load",I),m.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},yS="/site/assets/afp-logo-Bv1H6z1Z.gif",vS={class:"featured-event"},ES=["src"],TS={class:"event-details animate-right"},IS={class:"event-title"},wS={class:"event-meta"},bS={class:"event-description"},AS={__name:"FeaturedEvent",props:{title:String,date:String,location:String,description:String,image:String,link:String},setup(t){return(e,n)=>(ve(),Ce("section",vS,[J("img",{src:t.image,alt:"Event image",class:"event-image animate-left"},null,8,ES),J("div",TS,[J("h2",IS,be(t.title),1),J("p",wS,be(t.date)+" • "+be(t.location),1),J("p",bS,be(t.description),1),re(we(Ke),{to:t.link,class:"cta-button"},{default:He(()=>n[0]||(n[0]=[ze("Sign Up")])),_:1,__:[0]},8,["to"])])]))}},SS=lt(AS,[["__scopeId","data-v-7e1683d1"]]),RS={class:"card"},CS=["src"],PS={class:"card-content"},kS={class:"card-title"},OS={class:"card-subtitle"},DS={key:0,class:"card-details"},NS={__name:"Card",props:{image:{type:String,default:""},title:String,subtitle:String,details:String},setup(t){const e=_r(!1),n=_r(!0);return(r,s)=>(ve(),Ce("div",RS,[n.value?(ve(),Ce("img",{key:0,src:t.image,alt:"Card image",class:"card-image",onError:s[0]||(s[0]=i=>n.value=!1)},null,40,CS)):qr("",!0),J("div",PS,[J("h3",kS,be(t.title),1),J("p",OS,be(t.subtitle),1),t.details?(ve(),Ce("button",{key:0,onClick:s[1]||(s[1]=i=>e.value=!e.value),class:"cta-button"},be(e.value?"Hide":"Learn More"),1)):qr("",!0),re(cp,{name:"fade"},{default:He(()=>[e.value?(ve(),Ce("p",DS,be(t.details),1)):qr("",!0)]),_:1})])]))}},xS=lt(NS,[["__scopeId","data-v-294fdb69"]]),VS={class:"card-grid-section"},MS={class:"grid-title"},LS={class:"card-grid"},FS={__name:"CardGrid",props:{title:{type:String,default:"Featured Events"},cards:{type:Array,required:!0}},setup(t){return(e,n)=>(ve(),Ce("section",VS,[J("h2",MS,be(t.title),1),J("div",LS,[(ve(!0),Ce(mt,null,ai(t.cards,(r,s)=>(ve(),Ko(xS,Qo({key:s},{ref_for:!0},r),null,16))),128))])]))}},Nl=lt(FS,[["__scopeId","data-v-bc65c2d2"]]),US={class:"stats-banner"},$S={class:"stat-value"},BS={class:"stat-label"},jS={class:"stat-desc"},HS={__name:"StatsBanner",props:{stats:{type:Array,required:!0}},setup(t){return(e,n)=>(ve(),Ce("section",US,[(ve(!0),Ce(mt,null,ai(t.stats,(r,s)=>(ve(),Ce("div",{key:s,class:"stat-block",style:ss({animationDelay:`${s*.2}s`})},[J("div",$S,be(r.value),1),J("div",BS,be(r.label),1),J("div",jS,be(r.description),1)],4))),128))]))}},qS=lt(HS,[["__scopeId","data-v-3828056b"]]),zS={class:"article-card"},WS=["src","alt"],GS={class:"content"},KS={class:"title"},QS=["href"],JS={__name:"ArticleCard",props:{title:String,thumbnail:String,url:String},setup(t){return(e,n)=>(ve(),Ce("div",zS,[J("img",{src:t.thumbnail,alt:t.title,class:"thumbnail"},null,8,WS),J("div",GS,[J("h3",KS,be(t.title),1),J("a",{href:t.url,target:"_blank",rel:"noopener",class:"read-button"},"Read Article",8,QS)])]))}},XS=lt(JS,[["__scopeId","data-v-08790d9a"]]),YS={class:"article-grid-section"},ZS={class:"grid-title"},eR={class:"article-grid"},tR={__name:"ArticleGrid",props:{title:String,articles:Array},setup(t){return(e,n)=>(ve(),Ce("section",YS,[J("h2",ZS,be(t.title),1),J("div",eR,[(ve(!0),Ce(mt,null,ai(t.articles,(r,s)=>(ve(),Ko(XS,Qo({key:s},{ref_for:!0},r),null,16))),128))])]))}},nR=lt(tR,[["__scopeId","data-v-748ddf75"]]),rR={class:"conference-event"},sR={class:"conference-title"},iR={class:"conference-datetime"},oR={class:"conference-description"},aR=["href"],lR={class:"schedule"},cR={class:"schedule-time"},uR={class:"schedule-title"},hR={__name:"ConferenceEvent",props:{title:String,date:String,time:String,description:String,link:String,linkLabel:{type:String,default:"Join / View Recording"},schedule:{type:Array,default:()=>[]}},setup(t){return(e,n)=>(ve(),Ce("section",rR,[J("h2",sR,be(t.title),1),J("p",iR,be(t.date)+" • "+be(t.time),1),J("p",oR,be(t.description),1),J("a",{href:t.link,target:"_blank",rel:"noopener",class:"cta-button"},be(t.linkLabel),9,aR),J("div",lR,[n[0]||(n[0]=J("h3",null,"Event Schedule",-1)),J("ul",null,[(ve(!0),Ce(mt,null,ai(t.schedule,(r,s)=>(ve(),Ce("li",{key:s,class:"schedule-item"},[J("span",cR,be(r.time),1),J("span",uR,be(r.title),1)]))),128))])])]))}},fR=lt(hR,[["__scopeId","data-v-d13740c7"]]),dR={class:"publication-card"},pR={class:"title"},gR={class:"authors"},mR={class:"summary"},_R=["href"],yR={__name:"PublicationCard",props:{title:String,authors:String,summary:String,url:String},setup(t){return(e,n)=>(ve(),Ce("div",dR,[J("h3",pR,be(t.title),1),J("p",gR,[n[0]||(n[0]=J("strong",null,"Authors:",-1)),ze(" "+be(t.authors.join(", ")),1)]),J("p",mR,be(t.summary),1),J("a",{href:t.url,target:"_blank",rel:"noopener",class:"view-button"}," View Publication ",8,_R)]))}},vR=lt(yR,[["__scopeId","data-v-b6dcf581"]]),ER={title:"Featured Event",date:"October 12, 2025",location:"San Francisco, CA",description:"Ex: Registration has opened for the annual AFP Conference. This component can be used to display an event, with an image and description",image:"https://media.istockphoto.com/id/1417699524/photo/group-of-people-at-music-concert.jpg?s=2048x2048&w=is&k=20&c=ry_TiyFeGk5F03WDdcTE9lnx25PvIIUvKCl0uQHyFa0=",link:"/events/symposium-2025"},TR=[{image:"https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=2048x2048&w=is&k=20&c=bUHQJBt4Nbp0IEngDcXMMQteAnGi7fz1WpEuq3zLrOI=",title:"Guest Speaker",subtitle:"Live event • October 2025",details:"With some additional information here"},{image:"https://media.istockphoto.com/id/1411002384/photo/nurses-meeting.jpg?s=2048x2048&w=is&k=20&c=M5E3-J6IVCX6cvVBGyfedmTXEPjedRxyE2NZMkdv9hM=",title:"Research Symposium",subtitle:"Hybrid • January 2026",details:"Join psychiatrists and researchers discussing the latest in clinical family practice."},{image:"https://media.istockphoto.com/id/1783743772/photo/female-speaker-giving-a-presentation-during-business-seminar-at-convention-center.jpg?s=2048x2048&w=is&k=20&c=h7aIvTLP5PhWfrp54V_yUhtoD1cZqqwauSmqMAsbnyw=",title:"Annual AFP Conference",subtitle:"In-Person • July 2026",details:"Our flagship event featuring keynote speakers, panels, and networking opportunities."},{image:"https://media.istockphoto.com/id/1387143441/photo/shot-of-a-family-meeting-with-a-therapist.jpg?s=2048x2048&w=is&k=20&c=_nNijdSHxifcPAKvYZVWpnQu_HSrYLo9kveHu75LElk=",title:"Family Therapy Workshop",subtitle:"Live event • October 2025",details:"A hands-on workshop for professionals focused on family systems and communication."}],IR=[{value:"1,200+",label:"Members",description:"This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic."},{value:"$250K",label:"Funds Raised",description:"This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic."},{value:"12",label:"Committees",description:"This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic. This is a description for this statistic."}],wR=[{title:"Coping With Problematic Effects of Social Media",thumbnail:"https://images.squarespace-cdn.com/content/v1/6267042fe703aa417b69ec37/ff56a26d-ca75-4256-8854-6ddba48c6fc5/Teenage+girl+using+smart+phone+at+home+stock+photo.jpg?format=2500w",url:"https://www.psychologytoday.com/us/blog/psychiatrys-think-tank/202501/coping-with-problematic-effects-of-social-media"},{title:"Community Support Strategies",thumbnail:"https://media.istockphoto.com/id/1465173464/photo/business-network-concept-teamwork-partnership-human-resources.jpg?s=2048x2048&w=is&k=20&c=45hL9SREGO-8XjTxsmFy1Iph1lHSxEqD-MTkVlodM_o="},{title:"Trauma-Informed Care",thumbnail:"https://media.istockphoto.com/id/2206797715/photo/cubes-form-the-expression-ptsd.jpg?s=2048x2048&w=is&k=20&c=w4i03qsp8ue3YYBBhSuqcaAwzhfmyWGuEBmA2QkN2Tg="},{title:"Placeholder Article",thumbnail:"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=2048x2048&w=is&k=20&c=dFWJz1EFJt7Tq2lA-hgTpSW119YywTWtS4EwU3fpKrE="}],bR=[{title:"Janice Cho, MD"},{title:"Sarah Faitell, DO"},{title:"Eileen Glocer, MD"},{title:"Hannah Goddard, DO"},{title:"Jatin Julakanti, MD"},{title:"Hannah Leo, MD"},{title:"Kaajal Patel Tan, DO"},{title:"Michelle Prakash, MD"},{title:"Pallavi Tatapudy, MD"},{title:"Richard Seeber II, MD"},{title:"Alfonso Vera Jr, MD"}],AR={title:"2025 Annual Family Psychiatry Conference",date:"September 21, 2025",time:"9:00 AM – 4:00 PM PT",description:"Join us for the 2025 Annual Conference, featuring leading experts in family psychiatry. Engage in keynotes, panels, and networking opportunities.",link:"https://example.com/conference-recording",linkLabel:"Join Live / Watch Recording",schedule:[{time:"9:00 AM",title:"Opening Remarks & Keynote"},{time:"10:30 AM",title:"Panel: Innovations in Family Therapy"},{time:"12:00 PM",title:"Lunch Break"},{time:"1:00 PM",title:"Workshop: Integrating Family Care in Psychiatry"},{time:"2:30 PM",title:"Research Presentations"},{time:"3:30 PM",title:"Closing Discussion & Networking"}]},SR=[{title:"Helping Couples and Families Navigate Illness and Disability",summary:"John Rolland’s new book presents an integrated approach for supporting couples and families dealing with serious illness and disability.",url:"https://example.com/research-publication",authors:["John Rolland","John Doe"]},{title:"Lisa Dixon Appointed Editor in Chief of Psychiatric Services",summary:"Lisa Dixon is now the Editor in Chief of Psychiatric Services, bringing her extensive expertise in family psychiatry and community mental health.",url:"https://example.com/research-publication",authors:["Lisa Dixon"]},{title:"Recent Articles of Interest to Our Members",summary:"A curated list of recent publications and articles that provide valuable insights and advancements in the field of family psychiatry.",url:"https://example.com/research-publication",authors:["AFP Editorial Board"]}],RR={class:"home"},CR={class:"about"},PR={class:"conference-and-publications"},kR={class:"conference-column"},OR={class:"publications-column"},DR={__name:"HomeView",setup(t){return(e,n)=>(ve(),Ce("section",RR,[n[4]||(n[4]=Sy('<div class="intro" data-v-c47862be><div class="logo-column" data-v-c47862be><img src="'+yS+'" alt="AFP Logo" class="logo-img" data-v-c47862be></div><div class="welcome-column" data-v-c47862be><h1 class="welcome-title" data-v-c47862be>Welcome to the Association of Family Psychiatrists</h1><p class="welcome-subtitle" data-v-c47862be> Promoting mental wellness and supporting family psychiatry through education, advocacy, and community. </p></div></div>',1)),J("div",CR,[n[1]||(n[1]=J("h2",null,"About Us",-1)),n[2]||(n[2]=J("p",null," The Association of Family Psychiatrists is dedicated to advancing the field of family mental health by fostering professional development, sharing best practices, and connecting practitioners across the country. ",-1)),re(we(Ke),{to:"/about",class:"cta-button"},{default:He(()=>n[0]||(n[0]=[ze("Learn More")])),_:1,__:[0]})]),re(SS,ku(ol(we(ER))),null,16),J("div",PR,[J("div",kR,[re(fR,ku(ol(we(AR))),null,16)]),J("div",OR,[n[3]||(n[3]=J("h2",null,"Recent Publications",-1)),(ve(!0),Ce(mt,null,ai(we(SR),(r,s)=>(ve(),Ko(vR,Qo({key:s},{ref_for:!0},r),null,16))),128))])]),re(Nl,{title:"Upcoming Programs",cards:we(TR)},null,8,["cards"]),re(qS,{stats:we(IR)},null,8,["stats"]),re(Nl,{title:"2024 Winners of our Annual Award for Excellence in Family Care",cards:we(bR)},null,8,["cards"]),re(nR,{title:"Latest Articles",articles:we(wR)},null,8,["articles"])]))}},NR=lt(DR,[["__scopeId","data-v-c47862be"]]),xR={class:"overlay animate-fade-slide"},VR={class:"title"},MR={class:"subtitle"},LR={__name:"Hero",props:{title:String,subtitle:String,image:String},setup(t){return(e,n)=>(ve(),Ce("section",{class:"hero",style:ss({backgroundImage:`url(${t.image})`})},[J("div",xR,[J("h1",VR,be(t.title),1),J("p",MR,be(t.subtitle),1)])],4))}},FR=lt(LR,[["__scopeId","data-v-e9e9ade2"]]),UR={class:"about-page"},$R={class:"intro"},BR={__name:"AboutView",setup(t){return(e,n)=>(ve(),Ce("div",UR,[J("section",$R,[re(FR,{title:"Welcome to the Association of Family Psychiatrists",subtitle:"Promoting mental wellness and supporting family psychiatry through education, advocacy, and community.",image:"https://images.squarespace-cdn.com/content/v1/5748cc56746fb940f105bd1c/22364a6b-02db-4f89-8840-8ad7de5d6682/family+therapy+pic.jpg"}),n[0]||(n[0]=J("h1",null,"About the Association",-1)),n[1]||(n[1]=J("p",null," The Association of Family Psychiatrists is committed to advancing the field of family mental health by fostering collaboration, research, education, and advocacy. ",-1))]),n[2]||(n[2]=J("section",{class:"mission"},[J("h2",null,"Our Mission"),J("p",null," We strive to support psychiatrists and mental health professionals who work with families, providing resources, training, and a professional network to promote mental wellness at every stage of life. ")],-1)),n[3]||(n[3]=J("section",{class:"vision"},[J("h2",null,"Our Vision"),J("p",null," A world where every family has access to compassionate, evidence-based psychiatric care. ")],-1))]))}},jR=lt(BR,[["__scopeId","data-v-31b22870"]]),HR={class:"info-section"},qR={class:"heading"},zR={key:0,class:"subheading"},WR={class:"description"},GR={__name:"InformationSection",props:{heading:String,subheading:String,description:String,link:String},setup(t){return(e,n)=>{const r=G_("RouterLink");return ve(),Ce("section",HR,[J("h2",qR,be(t.heading),1),t.subheading?(ve(),Ce("h3",zR,be(t.subheading),1)):qr("",!0),J("p",WR,be(t.description),1),re(r,{to:t.link,class:"read-more"},{default:He(()=>n[0]||(n[0]=[ze("Read More")])),_:1,__:[0]},8,["to"])])}}},Wi=lt(GR,[["__scopeId","data-v-af70b806"]]),KR={class:"resources"},QR={__name:"ResourcesView",setup(t){return(e,n)=>(ve(),Ce("section",KR,[n[0]||(n[0]=J("h1",{class:"page-title"},"Resources",-1)),re(Wi,{heading:"Our Listserv",subheading:"Join the discussion",description:"Visit the discussion group of the Association of Family Psychiatry on Google Groups.",link:"/resources/listserv"}),re(Wi,{heading:"Upcoming Conferences",subheading:"Stay updated",description:"Check out upcoming events and conferences relevant to our community.",link:"/resources/conferences"}),re(Wi,{heading:"New Articles of Interest",subheading:"",description:"Recent articles of interest to our members! John Rolland’s new book *Helping Couples and Families Navigate Illness and Disability* was recently published. Lisa Dixon is now the Editor in Chief of *Psychiatric Services*!",link:"/resources/articles"}),re(Wi,{heading:"General Web Resources",subheading:"",description:"In addition to this page, resources including books and articles can be found throughout the website.",link:"/resources/web"})]))}},JR=lt(QR,[["__scopeId","data-v-7ce4f3c5"]]),XR=[{image:"/members/john-doe.jpg",title:"Dr. John Doe",subtitle:"Family Psychiatrist • New York",details:"Dr. Doe specializes in adolescent mental health and family therapy, with over 15 years of experience."},{image:"/members/jane-smith.jpg",title:"Dr. Jane Smith",subtitle:"Clinical Psychiatrist • +1-408-310-3927",details:"Expert in cognitive behavioral therapy and mindfulness-based interventions. Passionate about community education."},{image:"/members/alex-lee.jpg",title:"Dr. Alex Lee",subtitle:"Child & Adolescent Psychiatrist • Illinois",details:"Focusing on early intervention strategies and supportive therapy for children and their families."},{image:"/members/susan-chen.jpg",title:"Dr. Susan Chen",subtitle:"Family Systems Psychiatrist • Texas",details:"Published author and speaker on family systems theory and cross-cultural psychiatry."}],YR={class:"member-view"},ZR={__name:"MemberView",setup(t){return(e,n)=>(ve(),Ce("section",YR,[n[0]||(n[0]=J("h1",{class:"page-title"},"Our Members",-1)),n[1]||(n[1]=J("p",{class:"page-subtitle"},"Meet some of the dedicated professionals in our association.",-1)),re(Nl,{title:"Members",cards:we(XR)},null,8,["cards"])]))}},eC=lt(ZR,[["__scopeId","data-v-6428d113"]]),tC=EE({history:Xv(),routes:[{path:"/",name:"home",component:NR},{path:"/about",name:"about",component:jR},{path:"/resources",name:"resources",component:JR},{path:"/members",name:"members",component:eC},{path:"/membership",name:"membership",component:()=>Qf(()=>import("./MembershipView-jNsCJQA4.js"),__vite__mapDeps([0,1]))},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Qf(()=>import("./PlaceholderView-T60k7EPP.js"),[])}]}),Lc=gv(gS);Lc.use(vv());Lc.use(tC);Lc.mount("#app");export{lt as _,J as a,ze as b,Ce as c,we as d,rC as e,ve as o,be as t,nC as u};
