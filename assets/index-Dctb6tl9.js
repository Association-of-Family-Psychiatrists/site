const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/MembershipView-Bf7pcjRI.js","assets/MembershipView-k6NhvZdd.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function xl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},$r=[],nn=()=>{},Kg=()=>!1,Lo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Nl=t=>t.startsWith("onUpdate:"),Ze=Object.assign,Vl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Gg=Object.prototype.hasOwnProperty,Ce=(t,e)=>Gg.call(t,e),se=Array.isArray,Br=t=>Fo(t)==="[object Map]",Jf=t=>Fo(t)==="[object Set]",ue=t=>typeof t=="function",qe=t=>typeof t=="string",nr=t=>typeof t=="symbol",Ve=t=>t!==null&&typeof t=="object",Xf=t=>(Ve(t)||ue(t))&&ue(t.then)&&ue(t.catch),Yf=Object.prototype.toString,Fo=t=>Yf.call(t),Qg=t=>Fo(t).slice(8,-1),Zf=t=>Fo(t)==="[object Object]",Ml=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ps=xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Uo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Jg=/-(\w)/g,Ut=Uo(t=>t.replace(Jg,(e,n)=>n?n.toUpperCase():"")),Xg=/\B([A-Z])/g,Sr=Uo(t=>t.replace(Xg,"-$1").toLowerCase()),$o=Uo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ba=Uo(t=>t?`on${$o(t)}`:""),Wn=(t,e)=>!Object.is(t,e),Qi=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ed=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Qa=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Yg=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let Pu;const Bo=()=>Pu||(Pu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ss(t){if(se(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?n_(r):ss(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||Ve(t))return t}const Zg=/;(?![^(]*\))/g,e_=/:([^]+)/,t_=/\/\*[^]*?\*\//g;function n_(t){const e={};return t.replace(t_,"").split(Zg).forEach(n=>{if(n){const r=n.split(e_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function jo(t){let e="";if(qe(t))e=t;else if(se(t))for(let n=0;n<t.length;n++){const r=jo(t[n]);r&&(e+=r+" ")}else if(Ve(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ku(t){if(!t)return null;let{class:e,style:n}=t;return e&&!qe(e)&&(t.class=jo(e)),n&&(t.style=ss(n)),t}const r_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",s_=xl(r_);function td(t){return!!t||t===""}const nd=t=>!!(t&&t.__v_isRef===!0),we=t=>qe(t)?t:t==null?"":se(t)||Ve(t)&&(t.toString===Yf||!ue(t.toString))?nd(t)?we(t.value):JSON.stringify(t,rd,2):String(t),rd=(t,e)=>nd(e)?rd(t,e.value):Br(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Aa(r,i)+" =>"]=s,n),{})}:Jf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Aa(n))}:nr(e)?Aa(e):Ve(e)&&!se(e)&&!Zf(e)?String(e):e,Aa=(t,e="")=>{var n;return nr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class sd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){++this._on===1&&(this.prevScope=At,At=this)}off(){this._on>0&&--this._on===0&&(At=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function i_(t){return new sd(t)}function o_(){return At}let De;const Sa=new WeakSet;class id{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,At&&At.active&&At.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Sa.has(this)&&(Sa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ad(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ou(this),ld(this);const e=De,n=Kt;De=this,Kt=!0;try{return this.fn()}finally{cd(this),De=e,Kt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ul(e);this.deps=this.depsTail=void 0,Ou(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Sa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ja(this)&&this.run()}get dirty(){return Ja(this)}}let od=0,ks,Os;function ad(t,e=!1){if(t.flags|=8,e){t.next=Os,Os=t;return}t.next=ks,ks=t}function Ll(){od++}function Fl(){if(--od>0)return;if(Os){let e=Os;for(Os=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ks;){let e=ks;for(ks=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ld(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ul(r),a_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ja(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ud(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function ud(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Hs)||(t.globalVersion=Hs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ja(t))))return;t.flags|=2;const e=t.dep,n=De,r=Kt;De=t,Kt=!0;try{ld(t);const s=t.fn(t._value);(e.version===0||Wn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,Kt=r,cd(t),t.flags&=-3}}function Ul(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ul(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function a_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Kt=!0;const hd=[];function In(){hd.push(Kt),Kt=!1}function bn(){const t=hd.pop();Kt=t===void 0?!0:t}function Ou(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let Hs=0;class l_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $l{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!De||!Kt||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new l_(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,fd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,Hs++,this.notify(e)}notify(e){Ll();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Fl()}}}function fd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)fd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Xa=new WeakMap,mr=Symbol(""),Ya=Symbol(""),qs=Symbol("");function gt(t,e,n){if(Kt&&De){let r=Xa.get(t);r||Xa.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new $l),s.map=r,s.key=n),s.track()}}function _n(t,e,n,r,s,i){const a=Xa.get(t);if(!a){Hs++;return}const l=c=>{c&&c.trigger()};if(Ll(),e==="clear")a.forEach(l);else{const c=se(t),h=c&&Ml(n);if(c&&n==="length"){const d=Number(r);a.forEach((p,g)=>{(g==="length"||g===qs||!nr(g)&&g>=d)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),h&&l(a.get(qs)),e){case"add":c?h&&l(a.get("length")):(l(a.get(mr)),Br(t)&&l(a.get(Ya)));break;case"delete":c||(l(a.get(mr)),Br(t)&&l(a.get(Ya)));break;case"set":Br(t)&&l(a.get(mr));break}}Fl()}function xr(t){const e=Se(t);return e===t?e:(gt(e,"iterate",qs),Ft(t)?e:e.map(it))}function Ho(t){return gt(t=Se(t),"iterate",qs),t}const c_={__proto__:null,[Symbol.iterator](){return Ra(this,Symbol.iterator,it)},concat(...t){return xr(this).concat(...t.map(e=>se(e)?xr(e):e))},entries(){return Ra(this,"entries",t=>(t[1]=it(t[1]),t))},every(t,e){return dn(this,"every",t,e,void 0,arguments)},filter(t,e){return dn(this,"filter",t,e,n=>n.map(it),arguments)},find(t,e){return dn(this,"find",t,e,it,arguments)},findIndex(t,e){return dn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return dn(this,"findLast",t,e,it,arguments)},findLastIndex(t,e){return dn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return dn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ca(this,"includes",t)},indexOf(...t){return Ca(this,"indexOf",t)},join(t){return xr(this).join(t)},lastIndexOf(...t){return Ca(this,"lastIndexOf",t)},map(t,e){return dn(this,"map",t,e,void 0,arguments)},pop(){return Is(this,"pop")},push(...t){return Is(this,"push",t)},reduce(t,...e){return Du(this,"reduce",t,e)},reduceRight(t,...e){return Du(this,"reduceRight",t,e)},shift(){return Is(this,"shift")},some(t,e){return dn(this,"some",t,e,void 0,arguments)},splice(...t){return Is(this,"splice",t)},toReversed(){return xr(this).toReversed()},toSorted(t){return xr(this).toSorted(t)},toSpliced(...t){return xr(this).toSpliced(...t)},unshift(...t){return Is(this,"unshift",t)},values(){return Ra(this,"values",it)}};function Ra(t,e,n){const r=Ho(t),s=r[e]();return r!==t&&!Ft(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const u_=Array.prototype;function dn(t,e,n,r,s,i){const a=Ho(t),l=a!==t&&!Ft(t),c=a[e];if(c!==u_[e]){const p=c.apply(t,i);return l?it(p):p}let h=n;a!==t&&(l?h=function(p,g){return n.call(this,it(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const d=c.call(a,h,r);return l&&s?s(d):d}function Du(t,e,n,r){const s=Ho(t);let i=n;return s!==t&&(Ft(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,it(l),c,t)}),s[e](i,...r)}function Ca(t,e,n){const r=Se(t);gt(r,"iterate",qs);const s=r[e](...n);return(s===-1||s===!1)&&Hl(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function Is(t,e,n=[]){In(),Ll();const r=Se(t)[e].apply(t,n);return Fl(),bn(),r}const h_=xl("__proto__,__v_isRef,__isVue"),dd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(nr));function f_(t){nr(t)||(t=String(t));const e=Se(this);return gt(e,"has",t),e.hasOwnProperty(t)}class pd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?w_:yd:i?_d:gd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){let c;if(a&&(c=c_[n]))return c;if(n==="hasOwnProperty")return f_}const l=Reflect.get(e,n,yt(e)?e:r);return(nr(n)?dd.has(n):h_(n))||(s||gt(e,"get",n),i)?l:yt(l)?a&&Ml(n)?l:l.value:Ve(l)?s?Ed(l):qo(l):l}}class md extends pd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Jn(i);if(!Ft(r)&&!Jn(r)&&(i=Se(i),r=Se(r)),!se(e)&&yt(i)&&!yt(r))return c?!1:(i.value=r,!0)}const a=se(e)&&Ml(n)?Number(n)<e.length:Ce(e,n),l=Reflect.set(e,n,r,yt(e)?e:s);return e===Se(s)&&(a?Wn(r,i)&&_n(e,"set",n,r):_n(e,"add",n,r)),l}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&_n(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!nr(n)||!dd.has(n))&&gt(e,"has",n),r}ownKeys(e){return gt(e,"iterate",se(e)?"length":mr),Reflect.ownKeys(e)}}class d_ extends pd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const p_=new md,m_=new d_,g_=new md(!0);const Za=t=>t,Fi=t=>Reflect.getPrototypeOf(t);function __(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),a=Br(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,h=s[t](...r),d=n?Za:e?co:it;return!e&&gt(i,"iterate",c?Ya:mr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Ui(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function y_(t,e){const n={get(s){const i=this.__v_raw,a=Se(i),l=Se(s);t||(Wn(s,l)&&gt(a,"get",s),gt(a,"get",l));const{has:c}=Fi(a),h=e?Za:t?co:it;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&gt(Se(s),"iterate",mr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Se(i),l=Se(s);return t||(Wn(s,l)&&gt(a,"has",s),gt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Se(l),h=e?Za:t?co:it;return!t&&gt(c,"iterate",mr),l.forEach((d,p)=>s.call(i,h(d),h(p),a))}};return Ze(n,t?{add:Ui("add"),set:Ui("set"),delete:Ui("delete"),clear:Ui("clear")}:{add(s){!e&&!Ft(s)&&!Jn(s)&&(s=Se(s));const i=Se(this);return Fi(i).has.call(i,s)||(i.add(s),_n(i,"add",s,s)),this},set(s,i){!e&&!Ft(i)&&!Jn(i)&&(i=Se(i));const a=Se(this),{has:l,get:c}=Fi(a);let h=l.call(a,s);h||(s=Se(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?Wn(i,d)&&_n(a,"set",s,i):_n(a,"add",s,i),this},delete(s){const i=Se(this),{has:a,get:l}=Fi(i);let c=a.call(i,s);c||(s=Se(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&_n(i,"delete",s,void 0),h},clear(){const s=Se(this),i=s.size!==0,a=s.clear();return i&&_n(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=__(s,t,e)}),n}function Bl(t,e){const n=y_(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const v_={get:Bl(!1,!1)},E_={get:Bl(!1,!0)},T_={get:Bl(!0,!1)};const gd=new WeakMap,_d=new WeakMap,yd=new WeakMap,w_=new WeakMap;function I_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function b_(t){return t.__v_skip||!Object.isExtensible(t)?0:I_(Qg(t))}function qo(t){return Jn(t)?t:jl(t,!1,p_,v_,gd)}function vd(t){return jl(t,!1,g_,E_,_d)}function Ed(t){return jl(t,!0,m_,T_,yd)}function jl(t,e,n,r,s){if(!Ve(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=b_(t);if(i===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function jr(t){return Jn(t)?jr(t.__v_raw):!!(t&&t.__v_isReactive)}function Jn(t){return!!(t&&t.__v_isReadonly)}function Ft(t){return!!(t&&t.__v_isShallow)}function Hl(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function Td(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&ed(t,"__v_skip",!0),t}const it=t=>Ve(t)?qo(t):t,co=t=>Ve(t)?Ed(t):t;function yt(t){return t?t.__v_isRef===!0:!1}function rn(t){return wd(t,!1)}function A_(t){return wd(t,!0)}function wd(t,e){return yt(t)?t:new S_(t,e)}class S_{constructor(e,n){this.dep=new $l,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:it(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Ft(e)||Jn(e);e=r?e:Se(e),Wn(e,n)&&(this._rawValue=e,this._value=r?e:it(e),this.dep.trigger())}}function ye(t){return yt(t)?t.value:t}const R_={get:(t,e,n)=>e==="__v_raw"?t:ye(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return yt(s)&&!yt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Id(t){return jr(t)?t:new Proxy(t,R_)}class C_{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new $l(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return ad(this,!0),!0}get value(){const e=this.dep.track();return ud(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function P_(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new C_(r,s,n)}const $i={},uo=new WeakMap;let hr;function k_(t,e=!1,n=hr){if(n){let r=uo.get(n);r||uo.set(n,r=[]),r.push(t)}}function O_(t,e,n=Oe){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,h=H=>s?H:Ft(H)||s===!1||s===0?yn(H,1):yn(H);let d,p,g,w,P=!1,x=!1;if(yt(t)?(p=()=>t.value,P=Ft(t)):jr(t)?(p=()=>h(t),P=!0):se(t)?(x=!0,P=t.some(H=>jr(H)||Ft(H)),p=()=>t.map(H=>{if(yt(H))return H.value;if(jr(H))return h(H);if(ue(H))return c?c(H,2):H()})):ue(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){In();try{g()}finally{bn()}}const H=hr;hr=d;try{return c?c(t,3,[w]):t(w)}finally{hr=H}}:p=nn,e&&s){const H=p,ce=s===!0?1/0:s;p=()=>yn(H(),ce)}const L=o_(),z=()=>{d.stop(),L&&L.active&&Vl(L.effects,d)};if(i&&e){const H=e;e=(...ce)=>{H(...ce),z()}}let F=x?new Array(t.length).fill($i):$i;const B=H=>{if(!(!(d.flags&1)||!d.dirty&&!H))if(e){const ce=d.run();if(s||P||(x?ce.some((ae,A)=>Wn(ae,F[A])):Wn(ce,F))){g&&g();const ae=hr;hr=d;try{const A=[ce,F===$i?void 0:x&&F[0]===$i?[]:F,w];F=ce,c?c(e,3,A):e(...A)}finally{hr=ae}}}else d.run()};return l&&l(B),d=new id(p),d.scheduler=a?()=>a(B,!1):B,w=H=>k_(H,!1,d),g=d.onStop=()=>{const H=uo.get(d);if(H){if(c)c(H,4);else for(const ce of H)ce();uo.delete(d)}},e?r?B(!0):F=d.run():a?a(B.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function yn(t,e=1/0,n){if(e<=0||!Ve(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,yt(t))yn(t.value,e,n);else if(se(t))for(let r=0;r<t.length;r++)yn(t[r],e,n);else if(Jf(t)||Br(t))t.forEach(r=>{yn(r,e,n)});else if(Zf(t)){for(const r in t)yn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&yn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ai(t,e,n,r){try{return r?t(...r):t()}catch(s){zo(s,e,n)}}function Gt(t,e,n,r){if(ue(t)){const s=ai(t,e,n,r);return s&&Xf(s)&&s.catch(i=>{zo(i,e,n)}),s}if(se(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Gt(t[i],e,n,r));return s}}function zo(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Oe;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){In(),ai(i,null,10,[t,c,h]),bn();return}}D_(t,n,s,r,a)}function D_(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const wt=[];let Yt=-1;const Hr=[];let Fn=null,Nr=0;const bd=Promise.resolve();let ho=null;function Ad(t){const e=ho||bd;return t?e.then(this?t.bind(this):t):e}function x_(t){let e=Yt+1,n=wt.length;for(;e<n;){const r=e+n>>>1,s=wt[r],i=zs(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function ql(t){if(!(t.flags&1)){const e=zs(t),n=wt[wt.length-1];!n||!(t.flags&2)&&e>=zs(n)?wt.push(t):wt.splice(x_(e),0,t),t.flags|=1,Sd()}}function Sd(){ho||(ho=bd.then(Cd))}function N_(t){se(t)?Hr.push(...t):Fn&&t.id===-1?Fn.splice(Nr+1,0,t):t.flags&1||(Hr.push(t),t.flags|=1),Sd()}function xu(t,e,n=Yt+1){for(;n<wt.length;n++){const r=wt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;wt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Rd(t){if(Hr.length){const e=[...new Set(Hr)].sort((n,r)=>zs(n)-zs(r));if(Hr.length=0,Fn){Fn.push(...e);return}for(Fn=e,Nr=0;Nr<Fn.length;Nr++){const n=Fn[Nr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Fn=null,Nr=0}}const zs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Cd(t){try{for(Yt=0;Yt<wt.length;Yt++){const e=wt[Yt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ai(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Yt<wt.length;Yt++){const e=wt[Yt];e&&(e.flags&=-2)}Yt=-1,wt.length=0,Rd(),ho=null,(wt.length||Hr.length)&&Cd()}}let Rt=null,Pd=null;function fo(t){const e=Rt;return Rt=t,Pd=t&&t.type.__scopeId||null,e}function Be(t,e=Rt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&qu(-1);const i=fo(e);let a;try{a=t(...s)}finally{fo(i),r._d&&qu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function kd(t,e){if(Rt===null)return t;const n=Jo(Rt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Oe]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&yn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function ar(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(In(),Gt(c,n,8,[t.el,l,t,e]),bn())}}const V_=Symbol("_vte"),Od=t=>t.__isTeleport,Un=Symbol("_leaveCb"),Bi=Symbol("_enterCb");function M_(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return zl(()=>{t.isMounted=!0}),Wl(()=>{t.isUnmounting=!0}),t}const Mt=[Function,Array],Dd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Mt,onEnter:Mt,onAfterEnter:Mt,onEnterCancelled:Mt,onBeforeLeave:Mt,onLeave:Mt,onAfterLeave:Mt,onLeaveCancelled:Mt,onBeforeAppear:Mt,onAppear:Mt,onAfterAppear:Mt,onAppearCancelled:Mt},xd=t=>{const e=t.subTree;return e.component?xd(e.component):e},L_={name:"BaseTransition",props:Dd,setup(t,{slots:e}){const n=xy(),r=M_();return()=>{const s=e.default&&Md(e.default(),!0);if(!s||!s.length)return;const i=Nd(s),a=Se(t),{mode:l}=a;if(r.isLeaving)return Pa(i);const c=Nu(i);if(!c)return Pa(i);let h=el(c,a,r,n,p=>h=p);c.type!==It&&Ws(c,h);let d=n.subTree&&Nu(n.subTree);if(d&&d.type!==It&&!dr(c,d)&&xd(n).type!==It){let p=el(d,a,r,n);if(Ws(d,p),l==="out-in"&&c.type!==It)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,d=void 0},Pa(i);l==="in-out"&&c.type!==It?p.delayLeave=(g,w,P)=>{const x=Vd(r,d);x[String(d.key)]=d,g[Un]=()=>{w(),g[Un]=void 0,delete h.delayedLeave,d=void 0},h.delayedLeave=()=>{P(),delete h.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return i}}};function Nd(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==It){e=n;break}}return e}const F_=L_;function Vd(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function el(t,e,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:h,onAfterEnter:d,onEnterCancelled:p,onBeforeLeave:g,onLeave:w,onAfterLeave:P,onLeaveCancelled:x,onBeforeAppear:L,onAppear:z,onAfterAppear:F,onAppearCancelled:B}=e,H=String(t.key),ce=Vd(n,t),ae=(_,b)=>{_&&Gt(_,r,9,b)},A=(_,b)=>{const S=b[1];ae(_,b),se(_)?_.every(I=>I.length<=1)&&S():_.length<=1&&S()},y={mode:a,persisted:l,beforeEnter(_){let b=c;if(!n.isMounted)if(i)b=L||c;else return;_[Un]&&_[Un](!0);const S=ce[H];S&&dr(t,S)&&S.el[Un]&&S.el[Un](),ae(b,[_])},enter(_){let b=h,S=d,I=p;if(!n.isMounted)if(i)b=z||h,S=F||d,I=B||p;else return;let v=!1;const Pe=_[Bi]=Ge=>{v||(v=!0,Ge?ae(I,[_]):ae(S,[_]),y.delayedLeave&&y.delayedLeave(),_[Bi]=void 0)};b?A(b,[_,Pe]):Pe()},leave(_,b){const S=String(t.key);if(_[Bi]&&_[Bi](!0),n.isUnmounting)return b();ae(g,[_]);let I=!1;const v=_[Un]=Pe=>{I||(I=!0,b(),Pe?ae(x,[_]):ae(P,[_]),_[Un]=void 0,ce[S]===t&&delete ce[S])};ce[S]=t,w?A(w,[_,v]):v()},clone(_){const b=el(_,e,n,r,s);return s&&s(b),b}};return y}function Pa(t){if(Wo(t))return t=Xn(t),t.children=null,t}function Nu(t){if(!Wo(t))return Od(t.type)&&t.children?Nd(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function Ws(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ws(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Md(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===ot?(a.patchFlag&128&&s++,r=r.concat(Md(a.children,e,l))):(e||a.type!==It)&&r.push(l!=null?Xn(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ld(t,e){return ue(t)?Ze({name:t.name},e,{setup:t}):t}function Fd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function po(t,e,n,r,s=!1){if(se(t)){t.forEach((P,x)=>po(P,e&&(se(e)?e[x]:e),n,r,s));return}if(Ds(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&po(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Jo(r.component):r.el,a=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Oe?l.refs={}:l.refs,p=l.setupState,g=Se(p),w=p===Oe?()=>!1:P=>Ce(g,P);if(h!=null&&h!==c&&(qe(h)?(d[h]=null,w(h)&&(p[h]=null)):yt(h)&&(h.value=null)),ue(c))ai(c,l,12,[a,d]);else{const P=qe(c),x=yt(c);if(P||x){const L=()=>{if(t.f){const z=P?w(c)?p[c]:d[c]:c.value;s?se(z)&&Vl(z,i):se(z)?z.includes(i)||z.push(i):P?(d[c]=[i],w(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else P?(d[c]=a,w(c)&&(p[c]=a)):x&&(c.value=a,t.k&&(d[t.k]=a))};a?(L.id=-1,Ot(L,n)):L()}}}Bo().requestIdleCallback;Bo().cancelIdleCallback;const Ds=t=>!!t.type.__asyncLoader,Wo=t=>t.type.__isKeepAlive;function U_(t,e){Ud(t,"a",e)}function $_(t,e){Ud(t,"da",e)}function Ud(t,e,n=at){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ko(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Wo(s.parent.vnode)&&B_(r,e,n,s),s=s.parent}}function B_(t,e,n,r){const s=Ko(e,t,r,!0);$d(()=>{Vl(r[e],s)},n)}function Ko(t,e,n=at,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{In();const l=ui(n),c=Gt(e,n,t,a);return l(),bn(),c});return r?s.unshift(i):s.push(i),i}}const Cn=t=>(e,n=at)=>{(!Gs||t==="sp")&&Ko(t,(...r)=>e(...r),n)},j_=Cn("bm"),zl=Cn("m"),H_=Cn("bu"),q_=Cn("u"),Wl=Cn("bum"),$d=Cn("um"),z_=Cn("sp"),W_=Cn("rtg"),K_=Cn("rtc");function G_(t,e=at){Ko("ec",t,e)}const Bd="components",Q_="directives";function J_(t,e){return jd(Bd,t,!0,e)||t}const X_=Symbol.for("v-ndc");function Y_(t){return jd(Q_,t)}function jd(t,e,n=!0,r=!1){const s=Rt||at;if(s){const i=s.type;if(t===Bd){const l=Fy(i,!1);if(l&&(l===e||l===Ut(e)||l===$o(Ut(e))))return i}const a=Vu(s[t]||i[t],e)||Vu(s.appContext[t],e);return!a&&r?i:a}}function Vu(t,e){return t&&(t[e]||t[Ut(e)]||t[$o(Ut(e))])}function is(t,e,n,r){let s;const i=n,a=se(t);if(a||qe(t)){const l=a&&jr(t);let c=!1,h=!1;l&&(c=!Ft(t),h=Jn(t),t=Ho(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(c?h?co(it(t[d])):it(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Ve(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}const tl=t=>t?lp(t)?Jo(t):tl(t.parent):null,xs=Ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tl(t.parent),$root:t=>tl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>qd(t),$forceUpdate:t=>t.f||(t.f=()=>{ql(t.update)}),$nextTick:t=>t.n||(t.n=Ad.bind(t.proxy)),$watch:t=>vy.bind(t)}),ka=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Ce(t,e),Z_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const w=a[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ka(r,e))return a[e]=1,r[e];if(s!==Oe&&Ce(s,e))return a[e]=2,s[e];if((h=t.propsOptions[0])&&Ce(h,e))return a[e]=3,i[e];if(n!==Oe&&Ce(n,e))return a[e]=4,n[e];nl&&(a[e]=0)}}const d=xs[e];let p,g;if(d)return e==="$attrs"&&gt(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Oe&&Ce(n,e))return a[e]=4,n[e];if(g=c.config.globalProperties,Ce(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ka(s,e)?(s[e]=n,!0):r!==Oe&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Oe&&Ce(t,a)||ka(e,a)||(l=i[0])&&Ce(l,a)||Ce(r,a)||Ce(xs,a)||Ce(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Mu(t){return se(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nl=!0;function ey(t){const e=qd(t),n=t.proxy,r=t.ctx;nl=!1,e.beforeCreate&&Lu(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:w,updated:P,activated:x,deactivated:L,beforeDestroy:z,beforeUnmount:F,destroyed:B,unmounted:H,render:ce,renderTracked:ae,renderTriggered:A,errorCaptured:y,serverPrefetch:_,expose:b,inheritAttrs:S,components:I,directives:v,filters:Pe}=e;if(h&&ty(h,r,null),a)for(const ve in a){const ge=a[ve];ue(ge)&&(r[ve]=ge.bind(n))}if(s){const ve=s.call(n,n);Ve(ve)&&(t.data=qo(ve))}if(nl=!0,i)for(const ve in i){const ge=i[ve],Pt=ue(ge)?ge.bind(n,n):ue(ge.get)?ge.get.bind(n,n):nn,$t=!ue(ge)&&ue(ge.set)?ge.set.bind(n):nn,xt=Lt({get:Pt,set:$t});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>xt.value,set:Ue=>xt.value=Ue})}if(l)for(const ve in l)Hd(l[ve],r,n,ve);if(c){const ve=ue(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(ge=>{Ji(ge,ve[ge])})}d&&Lu(d,t,"c");function Fe(ve,ge){se(ge)?ge.forEach(Pt=>ve(Pt.bind(n))):ge&&ve(ge.bind(n))}if(Fe(j_,p),Fe(zl,g),Fe(H_,w),Fe(q_,P),Fe(U_,x),Fe($_,L),Fe(G_,y),Fe(K_,ae),Fe(W_,A),Fe(Wl,F),Fe($d,H),Fe(z_,_),se(b))if(b.length){const ve=t.exposed||(t.exposed={});b.forEach(ge=>{Object.defineProperty(ve,ge,{get:()=>n[ge],set:Pt=>n[ge]=Pt})})}else t.exposed||(t.exposed={});ce&&t.render===nn&&(t.render=ce),S!=null&&(t.inheritAttrs=S),I&&(t.components=I),v&&(t.directives=v),_&&Fd(t)}function ty(t,e,n=nn){se(t)&&(t=rl(t));for(const r in t){const s=t[r];let i;Ve(s)?"default"in s?i=sn(s.from||r,s.default,!0):i=sn(s.from||r):i=sn(s),yt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Lu(t,e,n){Gt(se(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Hd(t,e,n,r){let s=r.includes(".")?rp(n,r):()=>n[r];if(qe(t)){const i=e[t];ue(i)&&Xi(s,i)}else if(ue(t))Xi(s,t.bind(n));else if(Ve(t))if(se(t))t.forEach(i=>Hd(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&Xi(s,i,t)}}function qd(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>mo(c,h,a,!0)),mo(c,e,a)),Ve(e)&&i.set(e,c),c}function mo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&mo(t,i,n,!0),s&&s.forEach(a=>mo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=ny[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const ny={data:Fu,props:Uu,emits:Uu,methods:Rs,computed:Rs,beforeCreate:Tt,created:Tt,beforeMount:Tt,mounted:Tt,beforeUpdate:Tt,updated:Tt,beforeDestroy:Tt,beforeUnmount:Tt,destroyed:Tt,unmounted:Tt,activated:Tt,deactivated:Tt,errorCaptured:Tt,serverPrefetch:Tt,components:Rs,directives:Rs,watch:sy,provide:Fu,inject:ry};function Fu(t,e){return e?t?function(){return Ze(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function ry(t,e){return Rs(rl(t),rl(e))}function rl(t){if(se(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Tt(t,e){return t?[...new Set([].concat(t,e))]:e}function Rs(t,e){return t?Ze(Object.create(null),t,e):e}function Uu(t,e){return t?se(t)&&se(e)?[...new Set([...t,...e])]:Ze(Object.create(null),Mu(t),Mu(e??{})):e}function sy(t,e){if(!t)return e;if(!e)return t;const n=Ze(Object.create(null),t);for(const r in e)n[r]=Tt(t[r],e[r]);return n}function zd(){return{app:null,config:{isNativeTag:Kg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let iy=0;function oy(t,e){return function(r,s=null){ue(r)||(r=Ze({},r)),s!=null&&!Ve(s)&&(s=null);const i=zd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:iy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:$y,get config(){return i.config},set config(d){},use(d,...p){return a.has(d)||(d&&ue(d.install)?(a.add(d),d.install(h,...p)):ue(d)&&(a.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,g){if(!c){const w=h._ceVNode||re(r,s);return w.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(w,d,g),c=!0,h._container=d,d.__vue_app__=h,Jo(w.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Gt(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=qr;qr=h;try{return d()}finally{qr=p}}};return h}}let qr=null;function Ji(t,e){if(at){let n=at.provides;const r=at.parent&&at.parent.provides;r===n&&(n=at.provides=Object.create(r)),n[t]=e}}function sn(t,e,n=!1){const r=at||Rt;if(r||qr){let s=qr?qr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const Wd={},Kd=()=>Object.create(Wd),Gd=t=>Object.getPrototypeOf(t)===Wd;function ay(t,e,n,r=!1){const s={},i=Kd();t.propsDefaults=Object.create(null),Qd(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:vd(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ly(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Se(s),[c]=t.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(Go(t.emitsOptions,g))continue;const w=e[g];if(c)if(Ce(i,g))w!==i[g]&&(i[g]=w,h=!0);else{const P=Ut(g);s[P]=sl(c,l,P,w,t,!1)}else w!==i[g]&&(i[g]=w,h=!0)}}}else{Qd(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!Ce(e,p)&&((d=Sr(p))===p||!Ce(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=sl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ce(e,p))&&(delete i[p],h=!0)}h&&_n(t.attrs,"set","")}function Qd(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Ps(c))continue;const h=e[c];let d;s&&Ce(s,d=Ut(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:Go(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Se(n),h=l||Oe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=sl(s,c,p,h[p],t,!Ce(h,p))}}return a}function sl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Ce(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ue(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=ui(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Sr(n))&&(r=!0))}return r}const cy=new WeakMap;function Jd(t,e,n=!1){const r=n?cy:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!ue(t)){const d=p=>{c=!0;const[g,w]=Jd(p,e,!0);Ze(a,g),w&&l.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return Ve(t)&&r.set(t,$r),$r;if(se(i))for(let d=0;d<i.length;d++){const p=Ut(i[d]);$u(p)&&(a[p]=Oe)}else if(i)for(const d in i){const p=Ut(d);if($u(p)){const g=i[d],w=a[p]=se(g)||ue(g)?{type:g}:Ze({},g),P=w.type;let x=!1,L=!0;if(se(P))for(let z=0;z<P.length;++z){const F=P[z],B=ue(F)&&F.name;if(B==="Boolean"){x=!0;break}else B==="String"&&(L=!1)}else x=ue(P)&&P.name==="Boolean";w[0]=x,w[1]=L,(x||Ce(w,"default"))&&l.push(p)}}const h=[a,l];return Ve(t)&&r.set(t,h),h}function $u(t){return t[0]!=="$"&&!Ps(t)}const Kl=t=>t[0]==="_"||t==="$stable",Gl=t=>se(t)?t.map(en):[en(t)],uy=(t,e,n)=>{if(e._n)return e;const r=Be((...s)=>Gl(e(...s)),n);return r._c=!1,r},Xd=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Kl(s))continue;const i=t[s];if(ue(i))e[s]=uy(s,i,r);else if(i!=null){const a=Gl(i);e[s]=()=>a}}},Yd=(t,e)=>{const n=Gl(e);t.slots.default=()=>n},Zd=(t,e,n)=>{for(const r in e)(n||!Kl(r))&&(t[r]=e[r])},hy=(t,e,n)=>{const r=t.slots=Kd();if(t.vnode.shapeFlag&32){const s=e._;s?(Zd(r,e,n),n&&ed(r,"_",s,!0)):Xd(e,r)}else e&&Yd(t,e)},fy=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Oe;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Zd(s,e,n):(i=!e.$stable,Xd(e,s)),a=e}else e&&(Yd(t,e),a={default:1});if(i)for(const l in s)!Kl(l)&&a[l]==null&&delete s[l]},Ot=Sy;function dy(t){return py(t)}function py(t,e){const n=Bo();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:w=nn,insertStaticContent:P}=t,x=(E,T,R,D=null,V=null,N=null,Q=void 0,W=null,q=!!T.dynamicChildren)=>{if(E===T)return;E&&!dr(E,T)&&(D=O(E),Ue(E,V,N,!0),E=null),T.patchFlag===-2&&(q=!1,T.dynamicChildren=null);const{type:U,ref:te,shapeFlag:G}=T;switch(U){case Qo:L(E,T,R,D);break;case It:z(E,T,R,D);break;case Yi:E==null&&F(T,R,D,Q);break;case ot:I(E,T,R,D,V,N,Q,W,q);break;default:G&1?ce(E,T,R,D,V,N,Q,W,q):G&6?v(E,T,R,D,V,N,Q,W,q):(G&64||G&128)&&U.process(E,T,R,D,V,N,Q,W,q,Y)}te!=null&&V&&po(te,E&&E.ref,N,T||E,!T)},L=(E,T,R,D)=>{if(E==null)r(T.el=l(T.children),R,D);else{const V=T.el=E.el;T.children!==E.children&&h(V,T.children)}},z=(E,T,R,D)=>{E==null?r(T.el=c(T.children||""),R,D):T.el=E.el},F=(E,T,R,D)=>{[E.el,E.anchor]=P(E.children,T,R,D,E.el,E.anchor)},B=({el:E,anchor:T},R,D)=>{let V;for(;E&&E!==T;)V=g(E),r(E,R,D),E=V;r(T,R,D)},H=({el:E,anchor:T})=>{let R;for(;E&&E!==T;)R=g(E),s(E),E=R;s(T)},ce=(E,T,R,D,V,N,Q,W,q)=>{T.type==="svg"?Q="svg":T.type==="math"&&(Q="mathml"),E==null?ae(T,R,D,V,N,Q,W,q):_(E,T,V,N,Q,W,q)},ae=(E,T,R,D,V,N,Q,W)=>{let q,U;const{props:te,shapeFlag:G,transition:ee,dirs:ie}=E;if(q=E.el=a(E.type,N,te&&te.is,te),G&8?d(q,E.children):G&16&&y(E.children,q,null,D,V,Oa(E,N),Q,W),ie&&ar(E,null,D,"created"),A(q,E,E.scopeId,Q,D),te){for(const fe in te)fe!=="value"&&!Ps(fe)&&i(q,fe,null,te[fe],N,D);"value"in te&&i(q,"value",null,te.value,N),(U=te.onVnodeBeforeMount)&&Xt(U,D,E)}ie&&ar(E,null,D,"beforeMount");const ne=my(V,ee);ne&&ee.beforeEnter(q),r(q,T,R),((U=te&&te.onVnodeMounted)||ne||ie)&&Ot(()=>{U&&Xt(U,D,E),ne&&ee.enter(q),ie&&ar(E,null,D,"mounted")},V)},A=(E,T,R,D,V)=>{if(R&&w(E,R),D)for(let N=0;N<D.length;N++)w(E,D[N]);if(V){let N=V.subTree;if(T===N||ip(N.type)&&(N.ssContent===T||N.ssFallback===T)){const Q=V.vnode;A(E,Q,Q.scopeId,Q.slotScopeIds,V.parent)}}},y=(E,T,R,D,V,N,Q,W,q=0)=>{for(let U=q;U<E.length;U++){const te=E[U]=W?$n(E[U]):en(E[U]);x(null,te,T,R,D,V,N,Q,W)}},_=(E,T,R,D,V,N,Q)=>{const W=T.el=E.el;let{patchFlag:q,dynamicChildren:U,dirs:te}=T;q|=E.patchFlag&16;const G=E.props||Oe,ee=T.props||Oe;let ie;if(R&&lr(R,!1),(ie=ee.onVnodeBeforeUpdate)&&Xt(ie,R,T,E),te&&ar(T,E,R,"beforeUpdate"),R&&lr(R,!0),(G.innerHTML&&ee.innerHTML==null||G.textContent&&ee.textContent==null)&&d(W,""),U?b(E.dynamicChildren,U,W,R,D,Oa(T,V),N):Q||ge(E,T,W,null,R,D,Oa(T,V),N,!1),q>0){if(q&16)S(W,G,ee,R,V);else if(q&2&&G.class!==ee.class&&i(W,"class",null,ee.class,V),q&4&&i(W,"style",G.style,ee.style,V),q&8){const ne=T.dynamicProps;for(let fe=0;fe<ne.length;fe++){const Ee=ne[fe],ut=G[Ee],et=ee[Ee];(et!==ut||Ee==="value")&&i(W,Ee,ut,et,V,R)}}q&1&&E.children!==T.children&&d(W,T.children)}else!Q&&U==null&&S(W,G,ee,R,V);((ie=ee.onVnodeUpdated)||te)&&Ot(()=>{ie&&Xt(ie,R,T,E),te&&ar(T,E,R,"updated")},D)},b=(E,T,R,D,V,N,Q)=>{for(let W=0;W<T.length;W++){const q=E[W],U=T[W],te=q.el&&(q.type===ot||!dr(q,U)||q.shapeFlag&198)?p(q.el):R;x(q,U,te,null,D,V,N,Q,!0)}},S=(E,T,R,D,V)=>{if(T!==R){if(T!==Oe)for(const N in T)!Ps(N)&&!(N in R)&&i(E,N,T[N],null,V,D);for(const N in R){if(Ps(N))continue;const Q=R[N],W=T[N];Q!==W&&N!=="value"&&i(E,N,W,Q,V,D)}"value"in R&&i(E,"value",T.value,R.value,V)}},I=(E,T,R,D,V,N,Q,W,q)=>{const U=T.el=E?E.el:l(""),te=T.anchor=E?E.anchor:l("");let{patchFlag:G,dynamicChildren:ee,slotScopeIds:ie}=T;ie&&(W=W?W.concat(ie):ie),E==null?(r(U,R,D),r(te,R,D),y(T.children||[],R,te,V,N,Q,W,q)):G>0&&G&64&&ee&&E.dynamicChildren?(b(E.dynamicChildren,ee,R,V,N,Q,W),(T.key!=null||V&&T===V.subTree)&&ep(E,T,!0)):ge(E,T,R,te,V,N,Q,W,q)},v=(E,T,R,D,V,N,Q,W,q)=>{T.slotScopeIds=W,E==null?T.shapeFlag&512?V.ctx.activate(T,R,D,Q,q):Pe(T,R,D,V,N,Q,q):Ge(E,T,q)},Pe=(E,T,R,D,V,N,Q)=>{const W=E.component=Dy(E,D,V);if(Wo(E)&&(W.ctx.renderer=Y),Ny(W,!1,Q),W.asyncDep){if(V&&V.registerDep(W,Fe,Q),!E.el){const q=W.subTree=re(It);z(null,q,T,R)}}else Fe(W,E,T,R,V,N,Q)},Ge=(E,T,R)=>{const D=T.component=E.component;if(by(E,T,R))if(D.asyncDep&&!D.asyncResolved){ve(D,T,R);return}else D.next=T,D.update();else T.el=E.el,D.vnode=T},Fe=(E,T,R,D,V,N,Q)=>{const W=()=>{if(E.isMounted){let{next:G,bu:ee,u:ie,parent:ne,vnode:fe}=E;{const ht=tp(E);if(ht){G&&(G.el=fe.el,ve(E,G,Q)),ht.asyncDep.then(()=>{E.isUnmounted||W()});return}}let Ee=G,ut;lr(E,!1),G?(G.el=fe.el,ve(E,G,Q)):G=fe,ee&&Qi(ee),(ut=G.props&&G.props.onVnodeBeforeUpdate)&&Xt(ut,ne,G,fe),lr(E,!0);const et=ju(E),Nt=E.subTree;E.subTree=et,x(Nt,et,p(Nt.el),O(Nt),E,V,N),G.el=et.el,Ee===null&&Ay(E,et.el),ie&&Ot(ie,V),(ut=G.props&&G.props.onVnodeUpdated)&&Ot(()=>Xt(ut,ne,G,fe),V)}else{let G;const{el:ee,props:ie}=T,{bm:ne,m:fe,parent:Ee,root:ut,type:et}=E,Nt=Ds(T);lr(E,!1),ne&&Qi(ne),!Nt&&(G=ie&&ie.onVnodeBeforeMount)&&Xt(G,Ee,T),lr(E,!0);{ut.ce&&ut.ce._injectChildStyle(et);const ht=E.subTree=ju(E);x(null,ht,R,D,E,V,N),T.el=ht.el}if(fe&&Ot(fe,V),!Nt&&(G=ie&&ie.onVnodeMounted)){const ht=T;Ot(()=>Xt(G,Ee,ht),V)}(T.shapeFlag&256||Ee&&Ds(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&E.a&&Ot(E.a,V),E.isMounted=!0,T=R=D=null}};E.scope.on();const q=E.effect=new id(W);E.scope.off();const U=E.update=q.run.bind(q),te=E.job=q.runIfDirty.bind(q);te.i=E,te.id=E.uid,q.scheduler=()=>ql(te),lr(E,!0),U()},ve=(E,T,R)=>{T.component=E;const D=E.vnode.props;E.vnode=T,E.next=null,ly(E,T.props,D,R),fy(E,T.children,R),In(),xu(E),bn()},ge=(E,T,R,D,V,N,Q,W,q=!1)=>{const U=E&&E.children,te=E?E.shapeFlag:0,G=T.children,{patchFlag:ee,shapeFlag:ie}=T;if(ee>0){if(ee&128){$t(U,G,R,D,V,N,Q,W,q);return}else if(ee&256){Pt(U,G,R,D,V,N,Q,W,q);return}}ie&8?(te&16&&bt(U,V,N),G!==U&&d(R,G)):te&16?ie&16?$t(U,G,R,D,V,N,Q,W,q):bt(U,V,N,!0):(te&8&&d(R,""),ie&16&&y(G,R,D,V,N,Q,W,q))},Pt=(E,T,R,D,V,N,Q,W,q)=>{E=E||$r,T=T||$r;const U=E.length,te=T.length,G=Math.min(U,te);let ee;for(ee=0;ee<G;ee++){const ie=T[ee]=q?$n(T[ee]):en(T[ee]);x(E[ee],ie,R,null,V,N,Q,W,q)}U>te?bt(E,V,N,!0,!1,G):y(T,R,D,V,N,Q,W,q,G)},$t=(E,T,R,D,V,N,Q,W,q)=>{let U=0;const te=T.length;let G=E.length-1,ee=te-1;for(;U<=G&&U<=ee;){const ie=E[U],ne=T[U]=q?$n(T[U]):en(T[U]);if(dr(ie,ne))x(ie,ne,R,null,V,N,Q,W,q);else break;U++}for(;U<=G&&U<=ee;){const ie=E[G],ne=T[ee]=q?$n(T[ee]):en(T[ee]);if(dr(ie,ne))x(ie,ne,R,null,V,N,Q,W,q);else break;G--,ee--}if(U>G){if(U<=ee){const ie=ee+1,ne=ie<te?T[ie].el:D;for(;U<=ee;)x(null,T[U]=q?$n(T[U]):en(T[U]),R,ne,V,N,Q,W,q),U++}}else if(U>ee)for(;U<=G;)Ue(E[U],V,N,!0),U++;else{const ie=U,ne=U,fe=new Map;for(U=ne;U<=ee;U++){const tt=T[U]=q?$n(T[U]):en(T[U]);tt.key!=null&&fe.set(tt.key,U)}let Ee,ut=0;const et=ee-ne+1;let Nt=!1,ht=0;const On=new Array(et);for(U=0;U<et;U++)On[U]=0;for(U=ie;U<=G;U++){const tt=E[U];if(ut>=et){Ue(tt,V,N,!0);continue}let Vt;if(tt.key!=null)Vt=fe.get(tt.key);else for(Ee=ne;Ee<=ee;Ee++)if(On[Ee-ne]===0&&dr(tt,T[Ee])){Vt=Ee;break}Vt===void 0?Ue(tt,V,N,!0):(On[Vt-ne]=U+1,Vt>=ht?ht=Vt:Nt=!0,x(tt,T[Vt],R,null,V,N,Q,W,q),ut++)}const us=Nt?gy(On):$r;for(Ee=us.length-1,U=et-1;U>=0;U--){const tt=ne+U,Vt=T[tt],wi=tt+1<te?T[tt+1].el:D;On[U]===0?x(null,Vt,R,wi,V,N,Q,W,q):Nt&&(Ee<0||U!==us[Ee]?xt(Vt,R,wi,2):Ee--)}}},xt=(E,T,R,D,V=null)=>{const{el:N,type:Q,transition:W,children:q,shapeFlag:U}=E;if(U&6){xt(E.component.subTree,T,R,D);return}if(U&128){E.suspense.move(T,R,D);return}if(U&64){Q.move(E,T,R,Y);return}if(Q===ot){r(N,T,R);for(let G=0;G<q.length;G++)xt(q[G],T,R,D);r(E.anchor,T,R);return}if(Q===Yi){B(E,T,R);return}if(D!==2&&U&1&&W)if(D===0)W.beforeEnter(N),r(N,T,R),Ot(()=>W.enter(N),V);else{const{leave:G,delayLeave:ee,afterLeave:ie}=W,ne=()=>{E.ctx.isUnmounted?s(N):r(N,T,R)},fe=()=>{G(N,()=>{ne(),ie&&ie()})};ee?ee(N,ne,fe):fe()}else r(N,T,R)},Ue=(E,T,R,D=!1,V=!1)=>{const{type:N,props:Q,ref:W,children:q,dynamicChildren:U,shapeFlag:te,patchFlag:G,dirs:ee,cacheIndex:ie}=E;if(G===-2&&(V=!1),W!=null&&(In(),po(W,null,R,E,!0),bn()),ie!=null&&(T.renderCache[ie]=void 0),te&256){T.ctx.deactivate(E);return}const ne=te&1&&ee,fe=!Ds(E);let Ee;if(fe&&(Ee=Q&&Q.onVnodeBeforeUnmount)&&Xt(Ee,T,E),te&6)Jt(E.component,R,D);else{if(te&128){E.suspense.unmount(R,D);return}ne&&ar(E,null,T,"beforeUnmount"),te&64?E.type.remove(E,T,R,Y,D):U&&!U.hasOnce&&(N!==ot||G>0&&G&64)?bt(U,T,R,!1,!0):(N===ot&&G&384||!V&&te&16)&&bt(q,T,R),D&&$e(E)}(fe&&(Ee=Q&&Q.onVnodeUnmounted)||ne)&&Ot(()=>{Ee&&Xt(Ee,T,E),ne&&ar(E,null,T,"unmounted")},R)},$e=E=>{const{type:T,el:R,anchor:D,transition:V}=E;if(T===ot){kn(R,D);return}if(T===Yi){H(E);return}const N=()=>{s(R),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(E.shapeFlag&1&&V&&!V.persisted){const{leave:Q,delayLeave:W}=V,q=()=>Q(R,N);W?W(E.el,N,q):q()}else N()},kn=(E,T)=>{let R;for(;E!==T;)R=g(E),s(E),E=R;s(T)},Jt=(E,T,R)=>{const{bum:D,scope:V,job:N,subTree:Q,um:W,m:q,a:U,parent:te,slots:{__:G}}=E;Bu(q),Bu(U),D&&Qi(D),te&&se(G)&&G.forEach(ee=>{te.renderCache[ee]=void 0}),V.stop(),N&&(N.flags|=8,Ue(Q,E,T,R)),W&&Ot(W,T),Ot(()=>{E.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},bt=(E,T,R,D=!1,V=!1,N=0)=>{for(let Q=N;Q<E.length;Q++)Ue(E[Q],T,R,D,V)},O=E=>{if(E.shapeFlag&6)return O(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const T=g(E.anchor||E.el),R=T&&T[V_];return R?g(R):T};let X=!1;const J=(E,T,R)=>{E==null?T._vnode&&Ue(T._vnode,null,null,!0):x(T._vnode||null,E,T,null,null,null,R),T._vnode=E,X||(X=!0,xu(),Rd(),X=!1)},Y={p:x,um:Ue,m:xt,r:$e,mt:Pe,mc:y,pc:ge,pbc:b,n:O,o:t};return{render:J,hydrate:void 0,createApp:oy(J)}}function Oa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function lr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function my(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ep(t,e,n=!1){const r=t.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=$n(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&ep(a,l)),l.type===Qo&&(l.el=a.el),l.type===It&&!l.el&&(l.el=a.el)}}function gy(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<h?i=l+1:a=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function tp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tp(e)}function Bu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const _y=Symbol.for("v-scx"),yy=()=>sn(_y);function Xi(t,e,n){return np(t,e,n)}function np(t,e,n=Oe){const{immediate:r,deep:s,flush:i,once:a}=n,l=Ze({},n),c=e&&r||!e&&i!=="post";let h;if(Gs){if(i==="sync"){const w=yy();h=w.__watcherHandles||(w.__watcherHandles=[])}else if(!c){const w=()=>{};return w.stop=nn,w.resume=nn,w.pause=nn,w}}const d=at;l.call=(w,P,x)=>Gt(w,d,P,x);let p=!1;i==="post"?l.scheduler=w=>{Ot(w,d&&d.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(w,P)=>{P?w():ql(w)}),l.augmentJob=w=>{e&&(w.flags|=4),p&&(w.flags|=2,d&&(w.id=d.uid,w.i=d))};const g=O_(t,e,l);return Gs&&(h?h.push(g):c&&g()),g}function vy(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?rp(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const a=ui(this),l=np(s,i.bind(r),n);return a(),l}function rp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ey=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ut(e)}Modifiers`]||t[`${Sr(e)}Modifiers`];function Ty(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),a=i&&Ey(r,e.slice(7));a&&(a.trim&&(s=n.map(d=>qe(d)?d.trim():d)),a.number&&(s=n.map(Qa)));let l,c=r[l=ba(e)]||r[l=ba(Ut(e))];!c&&i&&(c=r[l=ba(Sr(e))]),c&&Gt(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Gt(h,t,6,s)}}function sp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ue(t)){const c=h=>{const d=sp(h,e,!0);d&&(l=!0,Ze(a,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Ve(t)&&r.set(t,null),null):(se(i)?i.forEach(c=>a[c]=null):Ze(a,i),Ve(t)&&r.set(t,a),a)}function Go(t,e){return!t||!Lo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,Sr(e))||Ce(t,e))}function ju(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:p,data:g,setupState:w,ctx:P,inheritAttrs:x}=t,L=fo(t);let z,F;try{if(n.shapeFlag&4){const H=s||r,ce=H;z=en(h.call(ce,H,d,p,w,g,P)),F=l}else{const H=e;z=en(H.length>1?H(p,{attrs:l,slots:a,emit:c}):H(p,null)),F=e.props?l:wy(l)}}catch(H){Ns.length=0,zo(H,t,1),z=re(It)}let B=z;if(F&&x!==!1){const H=Object.keys(F),{shapeFlag:ce}=B;H.length&&ce&7&&(i&&H.some(Nl)&&(F=Iy(F,i)),B=Xn(B,F,!1,!0))}return n.dirs&&(B=Xn(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&Ws(B,n.transition),z=B,fo(L),z}const wy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Lo(n))&&((e||(e={}))[n]=t[n]);return e},Iy=(t,e)=>{const n={};for(const r in t)(!Nl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function by(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Hu(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(a[g]!==r[g]&&!Go(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Hu(r,a,h):!0:!!a;return!1}function Hu(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Go(n,i))return!0}return!1}function Ay({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const ip=t=>t.__isSuspense;function Sy(t,e){e&&e.pendingBranch?se(t)?e.effects.push(...t):e.effects.push(t):N_(t)}const ot=Symbol.for("v-fgt"),Qo=Symbol.for("v-txt"),It=Symbol.for("v-cmt"),Yi=Symbol.for("v-stc"),Ns=[];let Dt=null;function he(t=!1){Ns.push(Dt=t?null:[])}function Ry(){Ns.pop(),Dt=Ns[Ns.length-1]||null}let Ks=1;function qu(t,e=!1){Ks+=t,t<0&&Dt&&e&&(Dt.hasOnce=!0)}function op(t){return t.dynamicChildren=Ks>0?Dt||$r:null,Ry(),Ks>0&&Dt&&Dt.push(t),t}function pe(t,e,n,r,s,i){return op(j(t,e,n,r,s,i,!0))}function li(t,e,n,r,s){return op(re(t,e,n,r,s,!0))}function go(t){return t?t.__v_isVNode===!0:!1}function dr(t,e){return t.type===e.type&&t.key===e.key}const ap=({key:t})=>t??null,Zi=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||yt(t)||ue(t)?{i:Rt,r:t,k:e,f:!!n}:t:null);function j(t,e=null,n=null,r=0,s=null,i=t===ot?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ap(e),ref:e&&Zi(e),scopeId:Pd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Rt};return l?(Ql(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),Ks>0&&!a&&Dt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Dt.push(c),c}const re=Cy;function Cy(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===X_)&&(t=It),go(t)){const l=Xn(t,e,!0);return n&&Ql(l,n),Ks>0&&!i&&Dt&&(l.shapeFlag&6?Dt[Dt.indexOf(t)]=l:Dt.push(l)),l.patchFlag=-2,l}if(Uy(t)&&(t=t.__vccOpts),e){e=il(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=jo(l)),Ve(c)&&(Hl(c)&&!se(c)&&(c=Ze({},c)),e.style=ss(c))}const a=qe(t)?1:ip(t)?128:Od(t)?64:Ve(t)?4:ue(t)?2:0;return j(t,e,n,r,s,a,i,!0)}function il(t){return t?Hl(t)||Gd(t)?Ze({},t):t:null}function Xn(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,h=e?ci(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&ap(h),ref:e&&e.ref?n&&i?se(i)?i.concat(Zi(e)):[i,Zi(e)]:Zi(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ot?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Xn(t.ssContent),ssFallback:t.ssFallback&&Xn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Ws(d,c.clone(d)),d}function Me(t=" ",e=0){return re(Qo,null,t,e)}function Py(t,e){const n=re(Yi,null,t);return n.staticCount=e,n}function Ht(t="",e=!1){return e?(he(),li(It,null,t)):re(It,null,t)}function en(t){return t==null||typeof t=="boolean"?re(It):se(t)?re(ot,null,t.slice()):go(t)?$n(t):re(Qo,null,String(t))}function $n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Xn(t)}function Ql(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(se(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ql(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Gd(e)?e._ctx=Rt:s===3&&Rt&&(Rt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Rt},n=32):(e=String(e),r&64?(n=16,e=[Me(e)]):n=8);t.children=e,t.shapeFlag|=n}function ci(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=jo([e.class,r.class]));else if(s==="style")e.style=ss([e.style,r.style]);else if(Lo(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Xt(t,e,n,r=null){Gt(t,e,7,[n,r])}const ky=zd();let Oy=0;function Dy(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ky,i={uid:Oy++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Jd(r,s),emitsOptions:sp(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ty.bind(null,i),t.ce&&t.ce(i),i}let at=null;const xy=()=>at||Rt;let _o,ol;{const t=Bo(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};_o=e("__VUE_INSTANCE_SETTERS__",n=>at=n),ol=e("__VUE_SSR_SETTERS__",n=>Gs=n)}const ui=t=>{const e=at;return _o(t),t.scope.on(),()=>{t.scope.off(),_o(e)}},zu=()=>{at&&at.scope.off(),_o(null)};function lp(t){return t.vnode.shapeFlag&4}let Gs=!1;function Ny(t,e=!1,n=!1){e&&ol(e);const{props:r,children:s}=t.vnode,i=lp(t);ay(t,r,i,e),hy(t,s,n||e);const a=i?Vy(t,e):void 0;return e&&ol(!1),a}function Vy(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Z_);const{setup:r}=n;if(r){In();const s=t.setupContext=r.length>1?Ly(t):null,i=ui(t),a=ai(r,t,0,[t.props,s]),l=Xf(a);if(bn(),i(),(l||t.sp)&&!Ds(t)&&Fd(t),l){if(a.then(zu,zu),e)return a.then(c=>{Wu(t,c)}).catch(c=>{zo(c,t,0)});t.asyncDep=a}else Wu(t,a)}else cp(t)}function Wu(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ve(e)&&(t.setupState=Id(e)),cp(t)}function cp(t,e,n){const r=t.type;t.render||(t.render=r.render||nn);{const s=ui(t);In();try{ey(t)}finally{bn(),s()}}}const My={get(t,e){return gt(t,"get",""),t[e]}};function Ly(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,My),slots:t.slots,emit:t.emit,expose:e}}function Jo(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Id(Td(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in xs)return xs[n](t)},has(e,n){return n in e||n in xs}})):t.proxy}function Fy(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function Uy(t){return ue(t)&&"__vccOpts"in t}const Lt=(t,e)=>P_(t,e,Gs);function Jl(t,e,n){const r=arguments.length;return r===2?Ve(e)&&!se(e)?go(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&go(n)&&(n=[n]),re(t,e,n))}const $y="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let al;const Ku=typeof window<"u"&&window.trustedTypes;if(Ku)try{al=Ku.createPolicy("vue",{createHTML:t=>t})}catch{}const up=al?t=>al.createHTML(t):t=>t,By="http://www.w3.org/2000/svg",jy="http://www.w3.org/1998/Math/MathML",gn=typeof document<"u"?document:null,Gu=gn&&gn.createElement("template"),Hy={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?gn.createElementNS(By,t):e==="mathml"?gn.createElementNS(jy,t):n?gn.createElement(t,{is:n}):gn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>gn.createTextNode(t),createComment:t=>gn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>gn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Gu.innerHTML=up(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Gu.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Vn="transition",bs="animation",Qs=Symbol("_vtc"),hp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},qy=Ze({},Dd,hp),zy=t=>(t.displayName="Transition",t.props=qy,t),fp=zy((t,{slots:e})=>Jl(F_,Wy(t),e)),cr=(t,e=[])=>{se(t)?t.forEach(n=>n(...e)):t&&t(...e)},Qu=t=>t?se(t)?t.some(e=>e.length>1):t.length>1:!1;function Wy(t){const e={};for(const I in t)I in hp||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:h=a,appearToClass:d=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:w=`${n}-leave-to`}=t,P=Ky(s),x=P&&P[0],L=P&&P[1],{onBeforeEnter:z,onEnter:F,onEnterCancelled:B,onLeave:H,onLeaveCancelled:ce,onBeforeAppear:ae=z,onAppear:A=F,onAppearCancelled:y=B}=e,_=(I,v,Pe,Ge)=>{I._enterCancelled=Ge,ur(I,v?d:l),ur(I,v?h:a),Pe&&Pe()},b=(I,v)=>{I._isLeaving=!1,ur(I,p),ur(I,w),ur(I,g),v&&v()},S=I=>(v,Pe)=>{const Ge=I?A:F,Fe=()=>_(v,I,Pe);cr(Ge,[v,Fe]),Ju(()=>{ur(v,I?c:i),pn(v,I?d:l),Qu(Ge)||Xu(v,r,x,Fe)})};return Ze(e,{onBeforeEnter(I){cr(z,[I]),pn(I,i),pn(I,a)},onBeforeAppear(I){cr(ae,[I]),pn(I,c),pn(I,h)},onEnter:S(!1),onAppear:S(!0),onLeave(I,v){I._isLeaving=!0;const Pe=()=>b(I,v);pn(I,p),I._enterCancelled?(pn(I,g),eh()):(eh(),pn(I,g)),Ju(()=>{I._isLeaving&&(ur(I,p),pn(I,w),Qu(H)||Xu(I,r,L,Pe))}),cr(H,[I,Pe])},onEnterCancelled(I){_(I,!1,void 0,!0),cr(B,[I])},onAppearCancelled(I){_(I,!0,void 0,!0),cr(y,[I])},onLeaveCancelled(I){b(I),cr(ce,[I])}})}function Ky(t){if(t==null)return null;if(Ve(t))return[Da(t.enter),Da(t.leave)];{const e=Da(t);return[e,e]}}function Da(t){return Yg(t)}function pn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Qs]||(t[Qs]=new Set)).add(e)}function ur(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[Qs];n&&(n.delete(e),n.size||(t[Qs]=void 0))}function Ju(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Gy=0;function Xu(t,e,n,r){const s=t._endId=++Gy,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:l,propCount:c}=Qy(t,e);if(!a)return r();const h=a+"end";let d=0;const p=()=>{t.removeEventListener(h,g),i()},g=w=>{w.target===t&&++d>=c&&p()};setTimeout(()=>{d<c&&p()},l+1),t.addEventListener(h,g)}function Qy(t,e){const n=window.getComputedStyle(t),r=P=>(n[P]||"").split(", "),s=r(`${Vn}Delay`),i=r(`${Vn}Duration`),a=Yu(s,i),l=r(`${bs}Delay`),c=r(`${bs}Duration`),h=Yu(l,c);let d=null,p=0,g=0;e===Vn?a>0&&(d=Vn,p=a,g=i.length):e===bs?h>0&&(d=bs,p=h,g=c.length):(p=Math.max(a,h),d=p>0?a>h?Vn:bs:null,g=d?d===Vn?i.length:c.length:0);const w=d===Vn&&/\b(transform|all)(,|$)/.test(r(`${Vn}Property`).toString());return{type:d,timeout:p,propCount:g,hasTransform:w}}function Yu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Zu(n)+Zu(t[r])))}function Zu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function eh(){return document.body.offsetHeight}function Jy(t,e,n){const r=t[Qs];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const th=Symbol("_vod"),Xy=Symbol("_vsh"),Yy=Symbol(""),Zy=/(^|;)\s*display\s*:/;function ev(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&eo(r,l,"")}else for(const a in e)n[a]==null&&eo(r,a,"");for(const a in n)a==="display"&&(i=!0),eo(r,a,n[a])}else if(s){if(e!==n){const a=r[Yy];a&&(n+=";"+a),r.cssText=n,i=Zy.test(n)}}else e&&t.removeAttribute("style");th in t&&(t[th]=i?r.display:"",t[Xy]&&(r.display="none"))}const nh=/\s*!important$/;function eo(t,e,n){if(se(n))n.forEach(r=>eo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=tv(t,e);nh.test(n)?t.setProperty(Sr(r),n.replace(nh,""),"important"):t[r]=n}}const rh=["Webkit","Moz","ms"],xa={};function tv(t,e){const n=xa[e];if(n)return n;let r=Ut(e);if(r!=="filter"&&r in t)return xa[e]=r;r=$o(r);for(let s=0;s<rh.length;s++){const i=rh[s]+r;if(i in t)return xa[e]=i}return e}const sh="http://www.w3.org/1999/xlink";function ih(t,e,n,r,s,i=s_(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(sh,e.slice(6,e.length)):t.setAttributeNS(sh,e,n):n==null||i&&!td(n)?t.removeAttribute(e):t.setAttribute(e,i?"":nr(n)?String(n):n)}function oh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?up(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=td(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Vr(t,e,n,r){t.addEventListener(e,n,r)}function nv(t,e,n,r){t.removeEventListener(e,n,r)}const ah=Symbol("_vei");function rv(t,e,n,r,s=null){const i=t[ah]||(t[ah]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=sv(e);if(r){const h=i[e]=av(r,s);Vr(t,l,h,c)}else a&&(nv(t,l,a,c),i[e]=void 0)}}const lh=/(?:Once|Passive|Capture)$/;function sv(t){let e;if(lh.test(t)){e={};let r;for(;r=t.match(lh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Sr(t.slice(2)),e]}let Na=0;const iv=Promise.resolve(),ov=()=>Na||(iv.then(()=>Na=0),Na=Date.now());function av(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Gt(lv(r,n.value),e,5,[r])};return n.value=t,n.attached=ov(),n}function lv(t,e){if(se(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const ch=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cv=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Jy(t,r,a):e==="style"?ev(t,n,r):Lo(e)?Nl(e)||rv(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uv(t,e,r,a))?(oh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ih(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?oh(t,Ut(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),ih(t,e,r,a))};function uv(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&ch(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return ch(e)&&qe(n)?!1:e in t}const uh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return se(e)?n=>Qi(e,n):e};function hv(t){t.target.composing=!0}function hh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Va=Symbol("_assign"),fv={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Va]=uh(s);const i=r||s.props&&s.props.type==="number";Vr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=Qa(l)),t[Va](l)}),n&&Vr(t,"change",()=>{t.value=t.value.trim()}),e||(Vr(t,"compositionstart",hv),Vr(t,"compositionend",hh),Vr(t,"change",hh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[Va]=uh(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?Qa(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},dv=["ctrl","shift","alt","meta"],pv={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>dv.some(n=>t[`${n}Key`]&&!e.includes(n))},mv=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=pv[e[a]];if(l&&l(s,e))return}return t(s,...i)})},gv=Ze({patchProp:cv},Hy);let fh;function _v(){return fh||(fh=dy(gv))}const yv=(...t)=>{const e=_v().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Ev(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,vv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function vv(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Ev(t){return qe(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Tv=Symbol();var dh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(dh||(dh={}));function wv(){const t=i_(!0),e=t.run(()=>rn({}));let n=[],r=[];const s=Td({install(i){s._a=i,i.provide(Tv,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Mr=typeof document<"u";function dp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Iv(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&dp(t.default)}const Re=Object.assign;function Ma(t,e){const n={};for(const r in e){const s=e[r];n[r]=Qt(s)?s.map(t):t(s)}return n}const Vs=()=>{},Qt=Array.isArray,pp=/#/g,bv=/&/g,Av=/\//g,Sv=/=/g,Rv=/\?/g,mp=/\+/g,Cv=/%5B/g,Pv=/%5D/g,gp=/%5E/g,kv=/%60/g,_p=/%7B/g,Ov=/%7C/g,yp=/%7D/g,Dv=/%20/g;function Xl(t){return encodeURI(""+t).replace(Ov,"|").replace(Cv,"[").replace(Pv,"]")}function xv(t){return Xl(t).replace(_p,"{").replace(yp,"}").replace(gp,"^")}function ll(t){return Xl(t).replace(mp,"%2B").replace(Dv,"+").replace(pp,"%23").replace(bv,"%26").replace(kv,"`").replace(_p,"{").replace(yp,"}").replace(gp,"^")}function Nv(t){return ll(t).replace(Sv,"%3D")}function Vv(t){return Xl(t).replace(pp,"%23").replace(Rv,"%3F")}function Mv(t){return t==null?"":Vv(t).replace(Av,"%2F")}function Js(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Lv=/\/$/,Fv=t=>t.replace(Lv,"");function La(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=jv(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:Js(a)}}function Uv(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function ph(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function $v(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Qr(e.matched[r],n.matched[s])&&vp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function vp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Bv(t[n],e[n]))return!1;return!0}function Bv(t,e){return Qt(t)?mh(t,e):Qt(e)?mh(e,t):t===e}function mh(t,e){return Qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function jv(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const Mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Xs;(function(t){t.pop="pop",t.push="push"})(Xs||(Xs={}));var Ms;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ms||(Ms={}));function Hv(t){if(!t)if(Mr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Fv(t)}const qv=/^[^#]+#/;function zv(t,e){return t.replace(qv,"#")+e}function Wv(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Xo=()=>({left:window.scrollX,top:window.scrollY});function Kv(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=Wv(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function gh(t,e){return(history.state?history.state.position-e:-1)+t}const cl=new Map;function Gv(t,e){cl.set(t,e)}function Qv(t){const e=cl.get(t);return cl.delete(t),e}let Jv=()=>location.protocol+"//"+location.host;function Ep(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),ph(c,"")}return ph(n,t)+r+s}function Xv(t,e,n,r){let s=[],i=[],a=null;const l=({state:g})=>{const w=Ep(t,location),P=n.value,x=e.value;let L=0;if(g){if(n.value=w,e.value=g,a&&a===P){a=null;return}L=x?g.position-x.position:0}else r(w);s.forEach(z=>{z(n.value,P,{delta:L,type:Xs.pop,direction:L?L>0?Ms.forward:Ms.back:Ms.unknown})})};function c(){a=n.value}function h(g){s.push(g);const w=()=>{const P=s.indexOf(g);P>-1&&s.splice(P,1)};return i.push(w),w}function d(){const{history:g}=window;g.state&&g.replaceState(Re({},g.state,{scroll:Xo()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function _h(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Xo():null}}function Yv(t){const{history:e,location:n}=window,r={value:Ep(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:Jv()+t+c;try{e[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(w){console.error(w),n[d?"replace":"assign"](g)}}function a(c,h){const d=Re({},e.state,_h(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Re({},s.value,e.state,{forward:c,scroll:Xo()});i(d.current,d,!0);const p=Re({},_h(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function Zv(t){t=Hv(t);const e=Yv(t),n=Xv(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:zv.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function eE(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),Zv(t)}function tE(t){return typeof t=="string"||t&&typeof t=="object"}function Tp(t){return typeof t=="string"||typeof t=="symbol"}const wp=Symbol("");var yh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(yh||(yh={}));function Jr(t,e){return Re(new Error,{type:t,[wp]:!0},e)}function mn(t,e){return t instanceof Error&&wp in t&&(e==null||!!(t.type&e))}const vh="[^/]+?",nE={sensitive:!1,strict:!1,start:!0,end:!0},rE=/[.+*?^${}()[\]/\\]/g;function sE(t,e){const n=Re({},nE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let w=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(rE,"\\$&"),w+=40;else if(g.type===1){const{value:P,repeatable:x,optional:L,regexp:z}=g;i.push({name:P,repeatable:x,optional:L});const F=z||vh;if(F!==vh){w+=10;try{new RegExp(`(${F})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${P}" (${F}): `+H.message)}}let B=x?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(B=L&&h.length<2?`(?:/${B})`:"/"+B),L&&(B+="?"),s+=B,w+=20,L&&(w+=-8),x&&(w+=-20),F===".*"&&(w+=-50)}d.push(w)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(a),p={};if(!d)return null;for(let g=1;g<d.length;g++){const w=d[g]||"",P=i[g-1];p[P.name]=w&&P.repeatable?w.split("/"):w}return p}function c(h){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const w of g)if(w.type===0)d+=w.value;else if(w.type===1){const{value:P,repeatable:x,optional:L}=w,z=P in h?h[P]:"";if(Qt(z)&&!x)throw new Error(`Provided param "${P}" is an array but it is not repeatable (* or + modifiers)`);const F=Qt(z)?z.join("/"):z;if(!F)if(L)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${P}"`);d+=F}}return d||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function iE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Ip(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=iE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Eh(r))return 1;if(Eh(s))return-1}return s.length-r.length}function Eh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const oE={type:0,value:""},aE=/[a-zA-Z0-9_]/;function lE(t){if(!t)return[[]];if(t==="/")return[[oE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(w){throw new Error(`ERR (${n})/"${h}": ${w}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),a()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:aE.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),a(),s}function cE(t,e,n){const r=sE(lE(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function uE(t,e){const n=[],r=new Map;e=bh({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,w){const P=!w,x=wh(p);x.aliasOf=w&&w.record;const L=bh(e,p),z=[x];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const ce of H)z.push(wh(Re({},x,{components:w?w.record.components:x.components,path:ce,aliasOf:w?w.record:x})))}let F,B;for(const H of z){const{path:ce}=H;if(g&&ce[0]!=="/"){const ae=g.record.path,A=ae[ae.length-1]==="/"?"":"/";H.path=g.record.path+(ce&&A+ce)}if(F=cE(H,g,L),w?w.alias.push(F):(B=B||F,B!==F&&B.alias.push(F),P&&p.name&&!Ih(F)&&a(p.name)),bp(F)&&c(F),x.children){const ae=x.children;for(let A=0;A<ae.length;A++)i(ae[A],F,w&&w.children[A])}w=w||F}return B?()=>{a(B)}:Vs}function a(p){if(Tp(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const g=dE(p,n);n.splice(g,0,p),p.record.name&&!Ih(p)&&r.set(p.record.name,p)}function h(p,g){let w,P={},x,L;if("name"in p&&p.name){if(w=r.get(p.name),!w)throw Jr(1,{location:p});L=w.record.name,P=Re(Th(g.params,w.keys.filter(B=>!B.optional).concat(w.parent?w.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),p.params&&Th(p.params,w.keys.map(B=>B.name))),x=w.stringify(P)}else if(p.path!=null)x=p.path,w=n.find(B=>B.re.test(x)),w&&(P=w.parse(x),L=w.record.name);else{if(w=g.name?r.get(g.name):n.find(B=>B.re.test(g.path)),!w)throw Jr(1,{location:p,currentLocation:g});L=w.record.name,P=Re({},g.params,p.params),x=w.stringify(P)}const z=[];let F=w;for(;F;)z.unshift(F.record),F=F.parent;return{name:L,path:x,params:P,matched:z,meta:fE(z)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:a,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function Th(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function wh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:hE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function hE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ih(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function fE(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function bh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function dE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Ip(t,e[i])<0?r=i:n=i+1}const s=pE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function pE(t){let e=t;for(;e=e.parent;)if(bp(e)&&Ip(t,e)===0)return e}function bp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function mE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(mp," "),a=i.indexOf("="),l=Js(a<0?i:i.slice(0,a)),c=a<0?null:Js(i.slice(a+1));if(l in e){let h=e[l];Qt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function Ah(t){let e="";for(let n in t){const r=t[n];if(n=Nv(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qt(r)?r.map(i=>i&&ll(i)):[r&&ll(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function gE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Qt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const _E=Symbol(""),Sh=Symbol(""),Yl=Symbol(""),Zl=Symbol(""),ul=Symbol("");function As(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Bn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(Jr(4,{from:n,to:e})):g instanceof Error?c(g):tE(g)?c(Jr(2,{from:e,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function Fa(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(dp(c)){const d=(c.__vccOpts||c)[e];d&&i.push(Bn(d,n,r,a,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=Iv(d)?d.default:d;a.mods[l]=d,a.components[l]=p;const w=(p.__vccOpts||p)[e];return w&&Bn(w,n,r,a,l,s)()}))}}return i}function Rh(t){const e=sn(Yl),n=sn(Zl),r=Lt(()=>{const c=ye(t.to);return e.resolve(c)}),s=Lt(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(Qr.bind(null,d));if(g>-1)return g;const w=Ch(c[h-2]);return h>1&&Ch(d)===w&&p[p.length-1].path!==w?p.findIndex(Qr.bind(null,c[h-2])):g}),i=Lt(()=>s.value>-1&&TE(n.params,r.value.params)),a=Lt(()=>s.value>-1&&s.value===n.matched.length-1&&vp(n.params,r.value.params));function l(c={}){if(EE(c)){const h=e[ye(t.replace)?"replace":"push"](ye(t.to)).catch(Vs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Lt(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function yE(t){return t.length===1?t[0]:t}const vE=Ld({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Rh,setup(t,{slots:e}){const n=qo(Rh(t)),{options:r}=sn(Yl),s=Lt(()=>({[Ph(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Ph(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&yE(e.default(n));return t.custom?i:Jl("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),We=vE;function EE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function TE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Qt(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function Ch(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ph=(t,e,n)=>t??e??n,wE=Ld({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=sn(ul),s=Lt(()=>t.route||r.value),i=sn(Sh,0),a=Lt(()=>{let h=ye(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=Lt(()=>s.value.matched[a.value]);Ji(Sh,Lt(()=>a.value+1)),Ji(_E,l),Ji(ul,s);const c=rn();return Xi(()=>[c.value,l.value,t.name],([h,d,p],[g,w,P])=>{d&&(d.instances[p]=h,w&&w!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=w.leaveGuards),d.updateGuards.size||(d.updateGuards=w.updateGuards))),h&&d&&(!w||!Qr(d,w)||!g)&&(d.enterCallbacks[p]||[]).forEach(x=>x(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return kh(n.default,{Component:g,route:h});const w=p.props[d],P=w?w===!0?h.params:typeof w=="function"?w(h):w:null,L=Jl(g,Re({},P,e,{onVnodeUnmounted:z=>{z.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return kh(n.default,{Component:L,route:h})||L}}});function kh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ap=wE;function IE(t){const e=uE(t.routes,t),n=t.parseQuery||mE,r=t.stringifyQuery||Ah,s=t.history,i=As(),a=As(),l=As(),c=A_(Mn);let h=Mn;Mr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=Ma.bind(null,O=>""+O),p=Ma.bind(null,Mv),g=Ma.bind(null,Js);function w(O,X){let J,Y;return Tp(O)?(J=e.getRecordMatcher(O),Y=X):Y=O,e.addRoute(Y,J)}function P(O){const X=e.getRecordMatcher(O);X&&e.removeRoute(X)}function x(){return e.getRoutes().map(O=>O.record)}function L(O){return!!e.getRecordMatcher(O)}function z(O,X){if(X=Re({},X||c.value),typeof O=="string"){const R=La(n,O,X.path),D=e.resolve({path:R.path},X),V=s.createHref(R.fullPath);return Re(R,D,{params:g(D.params),hash:Js(R.hash),redirectedFrom:void 0,href:V})}let J;if(O.path!=null)J=Re({},O,{path:La(n,O.path,X.path).path});else{const R=Re({},O.params);for(const D in R)R[D]==null&&delete R[D];J=Re({},O,{params:p(R)}),X.params=p(X.params)}const Y=e.resolve(J,X),be=O.hash||"";Y.params=d(g(Y.params));const E=Uv(r,Re({},O,{hash:xv(be),path:Y.path})),T=s.createHref(E);return Re({fullPath:E,hash:be,query:r===Ah?gE(O.query):O.query||{}},Y,{redirectedFrom:void 0,href:T})}function F(O){return typeof O=="string"?La(n,O,c.value.path):Re({},O)}function B(O,X){if(h!==O)return Jr(8,{from:X,to:O})}function H(O){return A(O)}function ce(O){return H(Re(F(O),{replace:!0}))}function ae(O){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:J}=X;let Y=typeof J=="function"?J(O):J;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=F(Y):{path:Y},Y.params={}),Re({query:O.query,hash:O.hash,params:Y.path!=null?{}:O.params},Y)}}function A(O,X){const J=h=z(O),Y=c.value,be=O.state,E=O.force,T=O.replace===!0,R=ae(J);if(R)return A(Re(F(R),{state:typeof R=="object"?Re({},be,R.state):be,force:E,replace:T}),X||J);const D=J;D.redirectedFrom=X;let V;return!E&&$v(r,Y,J)&&(V=Jr(16,{to:D,from:Y}),xt(Y,Y,!0,!1)),(V?Promise.resolve(V):b(D,Y)).catch(N=>mn(N)?mn(N,2)?N:$t(N):ge(N,D,Y)).then(N=>{if(N){if(mn(N,2))return A(Re({replace:T},F(N.to),{state:typeof N.to=="object"?Re({},be,N.to.state):be,force:E}),X||D)}else N=I(D,Y,!0,T,be);return S(D,Y,N),N})}function y(O,X){const J=B(O,X);return J?Promise.reject(J):Promise.resolve()}function _(O){const X=kn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(O):O()}function b(O,X){let J;const[Y,be,E]=bE(O,X);J=Fa(Y.reverse(),"beforeRouteLeave",O,X);for(const R of Y)R.leaveGuards.forEach(D=>{J.push(Bn(D,O,X))});const T=y.bind(null,O,X);return J.push(T),bt(J).then(()=>{J=[];for(const R of i.list())J.push(Bn(R,O,X));return J.push(T),bt(J)}).then(()=>{J=Fa(be,"beforeRouteUpdate",O,X);for(const R of be)R.updateGuards.forEach(D=>{J.push(Bn(D,O,X))});return J.push(T),bt(J)}).then(()=>{J=[];for(const R of E)if(R.beforeEnter)if(Qt(R.beforeEnter))for(const D of R.beforeEnter)J.push(Bn(D,O,X));else J.push(Bn(R.beforeEnter,O,X));return J.push(T),bt(J)}).then(()=>(O.matched.forEach(R=>R.enterCallbacks={}),J=Fa(E,"beforeRouteEnter",O,X,_),J.push(T),bt(J))).then(()=>{J=[];for(const R of a.list())J.push(Bn(R,O,X));return J.push(T),bt(J)}).catch(R=>mn(R,8)?R:Promise.reject(R))}function S(O,X,J){l.list().forEach(Y=>_(()=>Y(O,X,J)))}function I(O,X,J,Y,be){const E=B(O,X);if(E)return E;const T=X===Mn,R=Mr?history.state:{};J&&(Y||T?s.replace(O.fullPath,Re({scroll:T&&R&&R.scroll},be)):s.push(O.fullPath,be)),c.value=O,xt(O,X,J,T),$t()}let v;function Pe(){v||(v=s.listen((O,X,J)=>{if(!Jt.listening)return;const Y=z(O),be=ae(Y);if(be){A(Re(be,{replace:!0,force:!0}),Y).catch(Vs);return}h=Y;const E=c.value;Mr&&Gv(gh(E.fullPath,J.delta),Xo()),b(Y,E).catch(T=>mn(T,12)?T:mn(T,2)?(A(Re(F(T.to),{force:!0}),Y).then(R=>{mn(R,20)&&!J.delta&&J.type===Xs.pop&&s.go(-1,!1)}).catch(Vs),Promise.reject()):(J.delta&&s.go(-J.delta,!1),ge(T,Y,E))).then(T=>{T=T||I(Y,E,!1),T&&(J.delta&&!mn(T,8)?s.go(-J.delta,!1):J.type===Xs.pop&&mn(T,20)&&s.go(-1,!1)),S(Y,E,T)}).catch(Vs)}))}let Ge=As(),Fe=As(),ve;function ge(O,X,J){$t(O);const Y=Fe.list();return Y.length?Y.forEach(be=>be(O,X,J)):console.error(O),Promise.reject(O)}function Pt(){return ve&&c.value!==Mn?Promise.resolve():new Promise((O,X)=>{Ge.add([O,X])})}function $t(O){return ve||(ve=!O,Pe(),Ge.list().forEach(([X,J])=>O?J(O):X()),Ge.reset()),O}function xt(O,X,J,Y){const{scrollBehavior:be}=t;if(!Mr||!be)return Promise.resolve();const E=!J&&Qv(gh(O.fullPath,0))||(Y||!J)&&history.state&&history.state.scroll||null;return Ad().then(()=>be(O,X,E)).then(T=>T&&Kv(T)).catch(T=>ge(T,O,X))}const Ue=O=>s.go(O);let $e;const kn=new Set,Jt={currentRoute:c,listening:!0,addRoute:w,removeRoute:P,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:x,resolve:z,options:t,push:H,replace:ce,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Fe.add,isReady:Pt,install(O){const X=this;O.component("RouterLink",We),O.component("RouterView",Ap),O.config.globalProperties.$router=X,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>ye(c)}),Mr&&!$e&&c.value===Mn&&($e=!0,H(s.location).catch(be=>{}));const J={};for(const be in Mn)Object.defineProperty(J,be,{get:()=>c.value[be],enumerable:!0});O.provide(Yl,X),O.provide(Zl,vd(J)),O.provide(ul,c);const Y=O.unmount;kn.add(O),O.unmount=function(){kn.delete(O),kn.size<1&&(h=Mn,v&&v(),v=null,c.value=Mn,$e=!1,ve=!1),Y()}}};function bt(O){return O.reduce((X,J)=>X.then(()=>_(J)),Promise.resolve())}return Jt}function bE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(h=>Qr(h,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(h=>Qr(h,c))||s.push(c))}return[n,r,s]}function pR(t){return sn(Zl)}const Qe=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},AE={class:"header"},SE={class:"nav desktop-nav"},RE={key:0,class:"nav mobile-drawer"},CE={__name:"Header",setup(t){const e=rn(!1);function n(r){const s=document.querySelector(".mobile-drawer"),i=document.querySelector(".hamburger");e.value&&s&&!s.contains(r.target)&&!i.contains(r.target)&&(e.value=!1)}return zl(()=>{document.addEventListener("click",n)}),Wl(()=>{document.removeEventListener("click",n)}),(r,s)=>(he(),pe("header",AE,[re(ye(We),{to:"/",class:"logo"},{default:Be(()=>s[7]||(s[7]=[Me("Association of Family Psychiatrists")])),_:1,__:[7]}),j("button",{class:"hamburger",onClick:s[0]||(s[0]=i=>e.value=!e.value),"aria-label":"Toggle Menu"},"☰"),j("nav",SE,[re(ye(We),{to:"/","exact-active-class":"active",class:"nav-link"},{default:Be(()=>s[8]||(s[8]=[Me("Home")])),_:1,__:[8]}),re(ye(We),{to:"/about","exact-active-class":"active",class:"nav-link"},{default:Be(()=>s[9]||(s[9]=[Me("About")])),_:1,__:[9]}),re(ye(We),{to:"/resources","exact-active-class":"active",class:"nav-link"},{default:Be(()=>s[10]||(s[10]=[Me("Resources")])),_:1,__:[10]}),re(ye(We),{to:"/events","exact-active-class":"active",class:"nav-link"},{default:Be(()=>s[11]||(s[11]=[Me("Events")])),_:1,__:[11]}),re(ye(We),{to:"/members","exact-active-class":"active",class:"nav-link"},{default:Be(()=>s[12]||(s[12]=[Me("Members")])),_:1,__:[12]}),re(ye(We),{to:"/membership",class:"member-button"},{default:Be(()=>s[13]||(s[13]=[Me("Become a Member")])),_:1,__:[13]})]),re(fp,{name:"slide"},{default:Be(()=>[e.value?(he(),pe("nav",RE,[re(ye(We),{to:"/","exact-active-class":"active",onClick:s[1]||(s[1]=i=>e.value=!1)},{default:Be(()=>s[14]||(s[14]=[Me("Home")])),_:1,__:[14]}),re(ye(We),{to:"/about","exact-active-class":"active",onClick:s[2]||(s[2]=i=>e.value=!1)},{default:Be(()=>s[15]||(s[15]=[Me("About")])),_:1,__:[15]}),re(ye(We),{to:"/resources","exact-active-class":"active",onClick:s[3]||(s[3]=i=>e.value=!1)},{default:Be(()=>s[16]||(s[16]=[Me("Resources")])),_:1,__:[16]}),re(ye(We),{to:"/members","exact-active-class":"active",onClick:s[4]||(s[4]=i=>e.value=!1)},{default:Be(()=>s[17]||(s[17]=[Me("Members")])),_:1,__:[17]}),re(ye(We),{to:"/events","exact-active-class":"active",onClick:s[5]||(s[5]=i=>e.value=!1)},{default:Be(()=>s[18]||(s[18]=[Me("Events")])),_:1,__:[18]}),re(ye(We),{to:"/membership",onClick:s[6]||(s[6]=i=>e.value=!1),class:"member-button mobile-member-button"},{default:Be(()=>s[19]||(s[19]=[Me(" Become a Member ")])),_:1,__:[19]})])):Ht("",!0)]),_:1})]))}},PE=Qe(CE,[["__scopeId","data-v-e6720a0a"]]),kE=()=>{};var Oh={};/**
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
 */const Sp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},OE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Rp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,w=h&63;c||(w=64,a||(g=64)),r.push(n[d],n[p],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):OE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new DE;const g=i<<2|l>>4;if(r.push(g),h!==64){const w=l<<4&240|h>>2;if(r.push(w),p!==64){const P=h<<6&192|p;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class DE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xE=function(t){const e=Sp(t);return Rp.encodeByteArray(e,!0)},yo=function(t){return xE(t).replace(/\./g,"")},Cp=function(t){try{return Rp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function NE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const VE=()=>NE().__FIREBASE_DEFAULTS__,ME=()=>{if(typeof process>"u"||typeof Oh>"u")return;const t=Oh.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},LE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Cp(t[1]);return e&&JSON.parse(e)},Yo=()=>{try{return kE()||VE()||ME()||LE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pp=t=>{var e,n;return(n=(e=Yo())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},FE=t=>{const e=Pp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},kp=()=>{var t;return(t=Yo())===null||t===void 0?void 0:t.config},Op=t=>{var e;return(e=Yo())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class UE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function hi(t){return t.endsWith(".cloudworkstations.dev")}async function Dp(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function $E(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[yo(JSON.stringify(n)),yo(JSON.stringify(a)),""].join(".")}const Ls={};function BE(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ls))Ls[e]?t.emulator.push(e):t.prod.push(e);return t}function jE(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Dh=!1;function xp(t,e){if(typeof window>"u"||typeof document>"u"||!hi(window.location.host)||Ls[t]===e||Ls[t]||Dh)return;Ls[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=BE().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,w){g.setAttribute("width","24"),g.setAttribute("id",w),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Dh=!0,a()},g}function d(g,w){g.setAttribute("id",w),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=jE(r),w=n("text"),P=document.getElementById(w)||document.createElement("span"),x=n("learnmore"),L=document.getElementById(x)||document.createElement("a"),z=n("preprendIcon"),F=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const B=g.element;l(B),d(L,x);const H=h();c(F,z),B.append(F,P,L,H),document.body.appendChild(B)}i?(P.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,P.innerText="Preview backend running in this workspace."),P.setAttribute("id",w)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function vt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(vt())}function qE(){var t;const e=(t=Yo())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function WE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function GE(){const t=vt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function QE(){return!qE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function JE(){try{return typeof indexedDB=="object"}catch{return!1}}function XE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const YE="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=YE,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fi.prototype.create)}}class fi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?ZE(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Pn(s,l,r)}}function ZE(t,e){return t.replace(eT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eT=/\{\$([^}]+)}/g;function tT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function vr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(xh(i)&&xh(a)){if(!vr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function xh(t){return t!==null&&typeof t=="object"}/**
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
 */function di(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nT(t,e){const n=new rT(t,e);return n.subscribe.bind(n)}class rT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");sT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ua),s.error===void 0&&(s.error=Ua),s.complete===void 0&&(s.complete=Ua);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function sT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ua(){}/**
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
 */function ln(t){return t&&t._delegate?t._delegate:t}class Er{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fr="[DEFAULT]";/**
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
 */class iT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new UE;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(aT(e))try{this.getOrInitializeService({instanceIdentifier:fr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=fr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fr){return this.instances.has(e)}getOptions(e=fr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:oT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=fr){return this.component?this.component.multipleInstances?e:fr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function oT(t){return t===fr?void 0:t}function aT(t){return t.instantiationMode==="EAGER"}/**
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
 */class lT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new iT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const cT={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},uT=_e.INFO,hT={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},fT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=hT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=uT,this._logHandler=fT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const dT=(t,e)=>e.some(n=>t instanceof n);let Nh,Vh;function pT(){return Nh||(Nh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mT(){return Vh||(Vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Np=new WeakMap,hl=new WeakMap,Vp=new WeakMap,$a=new WeakMap,tc=new WeakMap;function gT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Kn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Np.set(n,t)}).catch(()=>{}),tc.set(e,t),e}function _T(t){if(hl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});hl.set(t,e)}let fl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Vp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function yT(t){fl=t(fl)}function vT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ba(this),e,...n);return Vp.set(r,e.sort?e.sort():[e]),Kn(r)}:mT().includes(t)?function(...e){return t.apply(Ba(this),e),Kn(Np.get(this))}:function(...e){return Kn(t.apply(Ba(this),e))}}function ET(t){return typeof t=="function"?vT(t):(t instanceof IDBTransaction&&_T(t),dT(t,pT())?new Proxy(t,fl):t)}function Kn(t){if(t instanceof IDBRequest)return gT(t);if($a.has(t))return $a.get(t);const e=ET(t);return e!==t&&($a.set(t,e),tc.set(e,t)),e}const Ba=t=>tc.get(t);function TT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Kn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Kn(a.result),c.oldVersion,c.newVersion,Kn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const wT=["get","getKey","getAll","getAllKeys","count"],IT=["put","add","delete","clear"],ja=new Map;function Mh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ja.get(e))return ja.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=IT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wT.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return ja.set(e,i),i}yT(t=>({...t,get:(e,n,r)=>Mh(e,n)||t.get(e,n,r),has:(e,n)=>!!Mh(e,n)||t.has(e,n)}));/**
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
 */class bT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(AT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function AT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dl="@firebase/app",Lh="0.13.0";/**
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
 */const An=new ec("@firebase/app"),ST="@firebase/app-compat",RT="@firebase/analytics-compat",CT="@firebase/analytics",PT="@firebase/app-check-compat",kT="@firebase/app-check",OT="@firebase/auth",DT="@firebase/auth-compat",xT="@firebase/database",NT="@firebase/data-connect",VT="@firebase/database-compat",MT="@firebase/functions",LT="@firebase/functions-compat",FT="@firebase/installations",UT="@firebase/installations-compat",$T="@firebase/messaging",BT="@firebase/messaging-compat",jT="@firebase/performance",HT="@firebase/performance-compat",qT="@firebase/remote-config",zT="@firebase/remote-config-compat",WT="@firebase/storage",KT="@firebase/storage-compat",GT="@firebase/firestore",QT="@firebase/ai",JT="@firebase/firestore-compat",XT="firebase",YT="11.8.0";/**
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
 */const pl="[DEFAULT]",ZT={[dl]:"fire-core",[ST]:"fire-core-compat",[CT]:"fire-analytics",[RT]:"fire-analytics-compat",[kT]:"fire-app-check",[PT]:"fire-app-check-compat",[OT]:"fire-auth",[DT]:"fire-auth-compat",[xT]:"fire-rtdb",[NT]:"fire-data-connect",[VT]:"fire-rtdb-compat",[MT]:"fire-fn",[LT]:"fire-fn-compat",[FT]:"fire-iid",[UT]:"fire-iid-compat",[$T]:"fire-fcm",[BT]:"fire-fcm-compat",[jT]:"fire-perf",[HT]:"fire-perf-compat",[qT]:"fire-rc",[zT]:"fire-rc-compat",[WT]:"fire-gcs",[KT]:"fire-gcs-compat",[GT]:"fire-fst",[JT]:"fire-fst-compat",[QT]:"fire-vertex","fire-js":"fire-js",[XT]:"fire-js-all"};/**
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
 */const vo=new Map,ew=new Map,ml=new Map;function Fh(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xr(t){const e=t.name;if(ml.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;ml.set(e,t);for(const n of vo.values())Fh(n,t);for(const n of ew.values())Fh(n,t);return!0}function nc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function tn(t){return t==null?!1:t.settings!==void 0}/**
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
 */const tw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new fi("app","Firebase",tw);/**
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
 */class nw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Er("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
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
 */const os=YT;function Mp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Gn.create("bad-app-name",{appName:String(s)});if(n||(n=kp()),!n)throw Gn.create("no-options");const i=vo.get(s);if(i){if(vr(n,i.options)&&vr(r,i.config))return i;throw Gn.create("duplicate-app",{appName:s})}const a=new lT(s);for(const c of ml.values())a.addComponent(c);const l=new nw(n,r,a);return vo.set(s,l),l}function Lp(t=pl){const e=vo.get(t);if(!e&&t===pl&&kp())return Mp();if(!e)throw Gn.create("no-app",{appName:t});return e}function Qn(t,e,n){var r;let s=(r=ZT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(l.join(" "));return}Xr(new Er(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const rw="firebase-heartbeat-database",sw=1,Ys="firebase-heartbeat-store";let Ha=null;function Fp(){return Ha||(Ha=TT(rw,sw,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ys)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),Ha}async function iw(t){try{const n=(await Fp()).transaction(Ys),r=await n.objectStore(Ys).get(Up(t));return await n.done,r}catch(e){if(e instanceof Pn)An.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});An.warn(n.message)}}}async function Uh(t,e){try{const r=(await Fp()).transaction(Ys,"readwrite");await r.objectStore(Ys).put(e,Up(t)),await r.done}catch(n){if(n instanceof Pn)An.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});An.warn(r.message)}}}function Up(t){return`${t.name}!${t.options.appId}`}/**
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
 */const ow=1024,aw=30;class lw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new uw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$h();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>aw){const a=hw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){An.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$h(),{heartbeatsToSend:r,unsentEntries:s}=cw(this._heartbeatsCache.heartbeats),i=yo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return An.warn(n),""}}}function $h(){return new Date().toISOString().substring(0,10)}function cw(t,e=ow){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Bh(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bh(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class uw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return JE()?XE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await iw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Uh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bh(t){return yo(JSON.stringify({version:2,heartbeats:t})).length}function hw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function fw(t){Xr(new Er("platform-logger",e=>new bT(e),"PRIVATE")),Xr(new Er("heartbeat",e=>new lw(e),"PRIVATE")),Qn(dl,Lh,t),Qn(dl,Lh,"esm2017"),Qn("fire-js","")}fw("");var dw="firebase",pw="11.8.1";/**
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
 */Qn(dw,pw,"app");function rc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function $p(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const mw=$p,Bp=new fi("auth","Firebase",$p());/**
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
 */const Eo=new ec("@firebase/auth");function gw(t,...e){Eo.logLevel<=_e.WARN&&Eo.warn(`Auth (${os}): ${t}`,...e)}function to(t,...e){Eo.logLevel<=_e.ERROR&&Eo.error(`Auth (${os}): ${t}`,...e)}/**
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
 */function Sn(t,...e){throw sc(t,...e)}function on(t,...e){return sc(t,...e)}function jp(t,e,n){const r=Object.assign(Object.assign({},mw()),{[e]:n});return new fi("auth","Firebase",r).create(e,{appName:t.name})}function gr(t){return jp(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function sc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Bp.create(t,...e)}function oe(t,e,...n){if(!t)throw sc(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw to(e),new Error(e)}function Rn(t,e){t||vn(e)}/**
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
 */function gl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function _w(){return jh()==="http:"||jh()==="https:"}function jh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function yw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_w()||WE()||"connection"in navigator)?navigator.onLine:!0}function vw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=HE()||KE()}get(){return yw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ic(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Hp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ew={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Tw=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ww=new pi(3e4,6e4);function oc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function as(t,e,n,r,s={}){return qp(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=di(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return zE()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&hi(t.emulatorConfig.host)&&(h.credentials="include"),Hp.fetch()(await zp(t,t.config.apiHost,n,l),h)})}async function qp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ew),e);try{const s=new bw(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ji(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ji(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw ji(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw ji(t,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw jp(t,d,h);Sn(t,d)}}catch(s){if(s instanceof Pn)throw s;Sn(t,"network-request-failed",{message:String(s)})}}async function Iw(t,e,n,r,s={}){const i=await as(t,e,n,r,s);return"mfaPendingCredential"in i&&Sn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function zp(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?ic(t.config,s):`${t.config.apiScheme}://${s}`;return Tw.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class bw{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),ww.get())})}}function ji(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Aw(t,e){return as(t,"POST","/v1/accounts:delete",e)}async function To(t,e){return as(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Sw(t,e=!1){const n=ln(t),r=await n.getIdToken(e),s=ac(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fs(qa(s.auth_time)),issuedAtTime:Fs(qa(s.iat)),expirationTime:Fs(qa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qa(t){return Number(t)*1e3}function ac(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return to("JWT malformed, contained fewer than 3 sections"),null;try{const s=Cp(n);return s?JSON.parse(s):(to("Failed to decode base64 JWT payload"),null)}catch(s){return to("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hh(t){const e=ac(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&Rw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Rw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Cw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _l{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fs(this.lastLoginAt),this.creationTime=Fs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function wo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Zs(t,To(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Wp(i.providerUserInfo):[],l=kw(t.providerData,a),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new _l(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function Pw(t){const e=ln(t);await wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function kw(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Wp(t){return t.map(e=>{var{providerId:n}=e,r=rc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Ow(t,e){const n=await qp(t,{},async()=>{const r=di({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await zp(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Hp.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Dw(t,e){return as(t,"POST","/v2/accounts:revokeToken",oc(t,e))}/**
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
 */class zr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){oe(e.length!==0,"internal-error");const n=Hh(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await Ow(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new zr;return r&&(oe(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(oe(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zr,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function Ln(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class zt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=rc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Cw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _l(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Sw(this,e)}reload(){return Pw(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(tn(this.auth.app))return Promise.reject(gr(this.auth));const e=await this.getIdToken();return await Zs(this,Aw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,P=(a=n.photoURL)!==null&&a!==void 0?a:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,z=(h=n.createdAt)!==null&&h!==void 0?h:void 0,F=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:B,emailVerified:H,isAnonymous:ce,providerData:ae,stsTokenManager:A}=n;oe(B&&A,e,"internal-error");const y=zr.fromJSON(this.name,A);oe(typeof B=="string",e,"internal-error"),Ln(p,e.name),Ln(g,e.name),oe(typeof H=="boolean",e,"internal-error"),oe(typeof ce=="boolean",e,"internal-error"),Ln(w,e.name),Ln(P,e.name),Ln(x,e.name),Ln(L,e.name),Ln(z,e.name),Ln(F,e.name);const _=new zt({uid:B,auth:e,email:g,emailVerified:H,displayName:p,isAnonymous:ce,photoURL:P,phoneNumber:w,tenantId:x,stsTokenManager:y,createdAt:z,lastLoginAt:F});return ae&&Array.isArray(ae)&&(_.providerData=ae.map(b=>Object.assign({},b))),L&&(_._redirectEventId=L),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new zr;s.updateFromServerResponse(n);const i=new zt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await wo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];oe(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Wp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new zr;l.updateFromIdToken(r);const c=new zt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _l(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const qh=new Map;function En(t){Rn(t instanceof Function,"Expected a class definition");let e=qh.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,qh.set(t,e),e)}/**
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
 */class Kp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Kp.type="NONE";const zh=Kp;/**
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
 */function no(t,e,n){return`firebase:${t}:${e}:${n}`}class Wr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=no(this.userKey,s.apiKey,i),this.fullPersistenceKey=no("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await To(this.auth,{idToken:e}).catch(()=>{});return n?zt._fromGetAccountInfoResponse(this.auth,n,e):null}return zt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Wr(En(zh),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||En(zh);const a=no(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(a);if(d){let p;if(typeof d=="string"){const g=await To(e,{idToken:d}).catch(()=>{});if(!g)break;p=await zt._fromGetAccountInfoResponse(e,g,d)}else p=zt._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Wr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new Wr(i,e,r))}}/**
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
 */function Wh(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Xp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Gp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Zp(e))return"Blackberry";if(em(e))return"Webos";if(Qp(e))return"Safari";if((e.includes("chrome/")||Jp(e))&&!e.includes("edge/"))return"Chrome";if(Yp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Gp(t=vt()){return/firefox\//i.test(t)}function Qp(t=vt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Jp(t=vt()){return/crios\//i.test(t)}function Xp(t=vt()){return/iemobile/i.test(t)}function Yp(t=vt()){return/android/i.test(t)}function Zp(t=vt()){return/blackberry/i.test(t)}function em(t=vt()){return/webos/i.test(t)}function lc(t=vt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xw(t=vt()){var e;return lc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Nw(){return GE()&&document.documentMode===10}function tm(t=vt()){return lc(t)||Yp(t)||em(t)||Zp(t)||/windows phone/i.test(t)||Xp(t)}/**
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
 */function nm(t,e=[]){let n;switch(t){case"Browser":n=Wh(vt());break;case"Worker":n=`${Wh(vt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${os}/${r}`}/**
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
 */class Vw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Mw(t,e={}){return as(t,"GET","/v2/passwordPolicy",oc(t,e))}/**
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
 */const Lw=6;class Fw{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Lw,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Uw{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kh(this),this.idTokenSubscription=new Kh(this),this.beforeStateQueue=new Vw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=En(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Wr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await To(this,{idToken:e}),r=await zt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(tn(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await wo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=vw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(tn(this.app))return Promise.reject(gr(this));const n=e?ln(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return tn(this.app)?Promise.reject(gr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return tn(this.app)?Promise.reject(gr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(En(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Mw(this),n=new Fw(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Dw(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&En(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await Wr.create(this,[En(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=nm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&gw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function cc(t){return ln(t)}class Kh{constructor(e){this.auth=e,this.observer=null,this.addObserver=nT(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $w(t){uc=t}function Bw(t){return uc.loadJS(t)}function jw(){return uc.gapiScript}function Hw(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function qw(t,e){const n=nc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(vr(i,e??{}))return s;Sn(s,"already-initialized")}return n.initialize({options:e})}function zw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(En);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ww(t,e,n){const r=cc(t);oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=rm(e),{host:a,port:l}=Kw(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){oe(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),oe(vr(h,r.config.emulator)&&vr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,hi(a)?(Dp(`${i}//${a}${c}`),xp("Auth",!0)):Gw()}function rm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Kw(t){const e=rm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Gh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Gh(a)}}}function Gh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Gw(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class sm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
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
 */async function Kr(t,e){return Iw(t,"POST","/v1/accounts:signInWithIdp",oc(t,e))}/**
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
 */const Qw="http://localhost";class Tr extends sm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=rc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Tr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Kr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Kr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Kr(e,n)}buildRequest(){const e={requestUri:Qw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=di(n)}return e}}/**
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
 */class im{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class mi extends im{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class jn extends mi{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:jn.PROVIDER_ID,signInMethod:jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jn.credentialFromTaggedObject(e)}static credentialFromError(e){return jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jn.credential(e.oauthAccessToken)}catch{return null}}}jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";jn.PROVIDER_ID="facebook.com";/**
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
 */class Hn extends mi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Hn.credential(n,r)}catch{return null}}}Hn.GOOGLE_SIGN_IN_METHOD="google.com";Hn.PROVIDER_ID="google.com";/**
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
 */class qn extends mi{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.GITHUB_SIGN_IN_METHOD="github.com";qn.PROVIDER_ID="github.com";/**
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
 */class zn extends mi{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.TWITTER_SIGN_IN_METHOD="twitter.com";zn.PROVIDER_ID="twitter.com";/**
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
 */class Yr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await zt._fromIdTokenResponse(e,r,s),a=Qh(r);return new Yr({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Qh(r);return new Yr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Qh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Io extends Pn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Io(e,n,r,s)}}function om(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(t,i,e,r):i})}async function Jw(t,e,n=!1){const r=await Zs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Yr._forOperation(t,"link",r)}/**
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
 */async function Xw(t,e,n=!1){const{auth:r}=t;if(tn(r.app))return Promise.reject(gr(r));const s="reauthenticate";try{const i=await Zs(t,om(r,s,e,t),n);oe(i.idToken,r,"internal-error");const a=ac(i.idToken);oe(a,r,"internal-error");const{sub:l}=a;return oe(t.uid===l,r,"user-mismatch"),Yr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Sn(r,"user-mismatch"),i}}/**
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
 */async function Yw(t,e,n=!1){if(tn(t.app))return Promise.reject(gr(t));const r="signIn",s=await om(t,r,e),i=await Yr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Zw(t,e,n,r){return ln(t).onIdTokenChanged(e,n,r)}function eI(t,e,n){return ln(t).beforeAuthStateChanged(e,n)}const bo="__sak";/**
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
 */class am{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(bo,"1"),this.storage.removeItem(bo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tI=1e3,nI=10;class lm extends am{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=tm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);Nw()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,nI):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},tI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}lm.type="LOCAL";const rI=lm;/**
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
 */class cm extends am{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}cm.type="SESSION";const um=cm;/**
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
 */function sI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Zo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Zo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(n.origin,i)),c=await sI(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zo.receivers=[];/**
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
 */class iI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=hc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function an(){return window}function oI(t){an().location.href=t}/**
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
 */function hm(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function aI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cI(){return hm()?self:null}/**
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
 */const fm="firebaseLocalStorageDb",uI=1,Ao="firebaseLocalStorage",dm="fbase_key";class gi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ea(t,e){return t.transaction([Ao],e?"readwrite":"readonly").objectStore(Ao)}function hI(){const t=indexedDB.deleteDatabase(fm);return new gi(t).toPromise()}function yl(){const t=indexedDB.open(fm,uI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ao,{keyPath:dm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ao)?e(r):(r.close(),await hI(),e(await yl()))})})}async function Jh(t,e,n){const r=ea(t,!0).put({[dm]:e,value:n});return new gi(r).toPromise()}async function fI(t,e){const n=ea(t,!1).get(e),r=await new gi(n).toPromise();return r===void 0?null:r.value}function Xh(t,e){const n=ea(t,!0).delete(e);return new gi(n).toPromise()}const dI=800,pI=3;class pm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>pI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zo._getInstance(cI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await aI(),!this.activeServiceWorker)return;this.sender=new iI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yl();return await Jh(e,bo,"1"),await Xh(e,bo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Jh(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>fI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Xh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=ea(s,!1).getAll();return new gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pm.type="LOCAL";const mI=pm;new pi(3e4,6e4);/**
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
 */function gI(t,e){return e?En(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fc extends sm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Kr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Kr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function _I(t){return Yw(t.auth,new fc(t),t.bypassAuthState)}function yI(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),Xw(n,new fc(t),t.bypassAuthState)}async function vI(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),Jw(n,new fc(t),t.bypassAuthState)}/**
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
 */class mm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _I;case"linkViaPopup":case"linkViaRedirect":return vI;case"reauthViaPopup":case"reauthViaRedirect":return yI;default:Sn(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const EI=new pi(2e3,1e4);class Ur extends mm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ur.currentPopupAction&&Ur.currentPopupAction.cancel(),Ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=hc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EI.get())};e()}}Ur.currentPopupAction=null;/**
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
 */const TI="pendingRedirect",ro=new Map;class wI extends mm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ro.get(this.auth._key());if(!e){try{const r=await II(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ro.set(this.auth._key(),e)}return this.bypassAuthState||ro.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function II(t,e){const n=SI(e),r=AI(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function bI(t,e){ro.set(t._key(),e)}function AI(t){return En(t._redirectPersistence)}function SI(t){return no(TI,t.config.apiKey,t.name)}async function RI(t,e,n=!1){if(tn(t.app))return Promise.reject(gr(t));const r=cc(t),s=gI(r,e),a=await new wI(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const CI=10*60*1e3;class PI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!gm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Yh(e))}saveEventToCache(e){this.cachedEventUids.add(Yh(e)),this.lastProcessedEventTime=Date.now()}}function Yh(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function gm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return gm(t);default:return!1}}/**
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
 */async function OI(t,e={}){return as(t,"GET","/v1/projects",e)}/**
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
 */const DI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xI=/^https?/;async function NI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OI(t);for(const n of e)try{if(VI(n))return}catch{}Sn(t,"unauthorized-domain")}function VI(t){const e=gl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!xI.test(n))return!1;if(DI.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const MI=new pi(3e4,6e4);function Zh(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function LI(t){return new Promise((e,n)=>{var r,s,i;function a(){Zh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zh(),n(on(t,"network-request-failed"))},timeout:MI.get()})}if(!((s=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=an().gapi)===null||i===void 0)&&i.load)a();else{const l=Hw("iframefcb");return an()[l]=()=>{gapi.load?a():n(on(t,"network-request-failed"))},Bw(`${jw()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw so=null,e})}let so=null;function FI(t){return so=so||LI(t),so}/**
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
 */const UI=new pi(5e3,15e3),$I="__/auth/iframe",BI="emulator/auth/iframe",jI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qI(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ic(e,BI):`https://${t.config.authDomain}/${$I}`,r={apiKey:e.apiKey,appName:t.name,v:os},s=HI.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${di(r).slice(1)}`}async function zI(t){const e=await FI(t),n=an().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:qI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=on(t,"network-request-failed"),l=an().setTimeout(()=>{i(a)},UI.get());function c(){an().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const WI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KI=500,GI=600,QI="_blank",JI="http://localhost";class ef{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XI(t,e,n,r=KI,s=GI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},WI),{width:r.toString(),height:s.toString(),top:i,left:a}),h=vt().toLowerCase();n&&(l=Jp(h)?QI:n),Gp(h)&&(e=e||JI,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[w,P])=>`${g}${w}=${P},`,"");if(xw(h)&&l!=="_self")return YI(e||"",l),new ef(null);const p=window.open(e||"",l,d);oe(p,t,"popup-blocked");try{p.focus()}catch{}return new ef(p)}function YI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ZI="__/auth/handler",e0="emulator/auth/handler",t0=encodeURIComponent("fac");async function tf(t,e,n,r,s,i){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:os,eventId:s};if(e instanceof im){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",tT(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))a[d]=p}if(e instanceof mi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${t0}=${encodeURIComponent(c)}`:"";return`${n0(t)}?${di(l).slice(1)}${h}`}function n0({config:t}){return t.emulator?ic(t,e0):`https://${t.authDomain}/${ZI}`}/**
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
 */const za="webStorageSupport";class r0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=um,this._completeRedirectFn=RI,this._overrideRedirectResult=bI}async _openPopup(e,n,r,s){var i;Rn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await tf(e,n,r,gl(),s);return XI(e,a,hc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await tf(e,n,r,gl(),s);return oI(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Rn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zI(e),r=new PI(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(za,{type:za},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[za];a!==void 0&&n(!!a),Sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return tm()||Qp()||lc()}}const s0=r0;var nf="@firebase/auth",rf="1.10.6";/**
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
 */class i0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function o0(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function a0(t){Xr(new Er("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;oe(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:nm(t)},h=new Uw(r,s,i,c);return zw(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xr(new Er("auth-internal",e=>{const n=cc(e.getProvider("auth").getImmediate());return(r=>new i0(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qn(nf,rf,o0(t)),Qn(nf,rf,"esm2017")}/**
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
 */const l0=5*60,c0=Op("authIdTokenMaxAge")||l0;let sf=null;const u0=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>c0)return;const s=n==null?void 0:n.token;sf!==s&&(sf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function h0(t=Lp()){const e=nc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=qw(t,{popupRedirectResolver:s0,persistence:[mI,rI,um]}),r=Op("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=u0(i.toString());eI(n,a,()=>a(n.currentUser)),Zw(n,l=>a(l))}}const s=Pp("auth");return s&&Ww(n,`http://${s}`),n}function f0(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$w({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",f0().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});a0("Browser");var of=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var dc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function _(){}_.prototype=y.prototype,A.D=y.prototype,A.prototype=new _,A.prototype.constructor=A,A.C=function(b,S,I){for(var v=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)v[Pe-2]=arguments[Pe];return y.prototype[S].apply(b,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,_){_||(_=0);var b=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)b[S]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(S=0;16>S;++S)b[S]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=A.g[0],_=A.g[1],S=A.g[2];var I=A.g[3],v=y+(I^_&(S^I))+b[0]+3614090360&4294967295;y=_+(v<<7&4294967295|v>>>25),v=I+(S^y&(_^S))+b[1]+3905402710&4294967295,I=y+(v<<12&4294967295|v>>>20),v=S+(_^I&(y^_))+b[2]+606105819&4294967295,S=I+(v<<17&4294967295|v>>>15),v=_+(y^S&(I^y))+b[3]+3250441966&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(I^_&(S^I))+b[4]+4118548399&4294967295,y=_+(v<<7&4294967295|v>>>25),v=I+(S^y&(_^S))+b[5]+1200080426&4294967295,I=y+(v<<12&4294967295|v>>>20),v=S+(_^I&(y^_))+b[6]+2821735955&4294967295,S=I+(v<<17&4294967295|v>>>15),v=_+(y^S&(I^y))+b[7]+4249261313&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(I^_&(S^I))+b[8]+1770035416&4294967295,y=_+(v<<7&4294967295|v>>>25),v=I+(S^y&(_^S))+b[9]+2336552879&4294967295,I=y+(v<<12&4294967295|v>>>20),v=S+(_^I&(y^_))+b[10]+4294925233&4294967295,S=I+(v<<17&4294967295|v>>>15),v=_+(y^S&(I^y))+b[11]+2304563134&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(I^_&(S^I))+b[12]+1804603682&4294967295,y=_+(v<<7&4294967295|v>>>25),v=I+(S^y&(_^S))+b[13]+4254626195&4294967295,I=y+(v<<12&4294967295|v>>>20),v=S+(_^I&(y^_))+b[14]+2792965006&4294967295,S=I+(v<<17&4294967295|v>>>15),v=_+(y^S&(I^y))+b[15]+1236535329&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(S^I&(_^S))+b[1]+4129170786&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^S&(y^_))+b[6]+3225465664&4294967295,I=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(I^y))+b[11]+643717713&4294967295,S=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(S^I))+b[0]+3921069994&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^I&(_^S))+b[5]+3593408605&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^S&(y^_))+b[10]+38016083&4294967295,I=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(I^y))+b[15]+3634488961&4294967295,S=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(S^I))+b[4]+3889429448&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^I&(_^S))+b[9]+568446438&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^S&(y^_))+b[14]+3275163606&4294967295,I=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(I^y))+b[3]+4107603335&4294967295,S=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(S^I))+b[8]+1163531501&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^I&(_^S))+b[13]+2850285829&4294967295,y=_+(v<<5&4294967295|v>>>27),v=I+(_^S&(y^_))+b[2]+4243563512&4294967295,I=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(I^y))+b[7]+1735328473&4294967295,S=I+(v<<14&4294967295|v>>>18),v=_+(I^y&(S^I))+b[12]+2368359562&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(_^S^I)+b[5]+4294588738&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^S)+b[8]+2272392833&4294967295,I=y+(v<<11&4294967295|v>>>21),v=S+(I^y^_)+b[11]+1839030562&4294967295,S=I+(v<<16&4294967295|v>>>16),v=_+(S^I^y)+b[14]+4259657740&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^I)+b[1]+2763975236&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^S)+b[4]+1272893353&4294967295,I=y+(v<<11&4294967295|v>>>21),v=S+(I^y^_)+b[7]+4139469664&4294967295,S=I+(v<<16&4294967295|v>>>16),v=_+(S^I^y)+b[10]+3200236656&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^I)+b[13]+681279174&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^S)+b[0]+3936430074&4294967295,I=y+(v<<11&4294967295|v>>>21),v=S+(I^y^_)+b[3]+3572445317&4294967295,S=I+(v<<16&4294967295|v>>>16),v=_+(S^I^y)+b[6]+76029189&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^I)+b[9]+3654602809&4294967295,y=_+(v<<4&4294967295|v>>>28),v=I+(y^_^S)+b[12]+3873151461&4294967295,I=y+(v<<11&4294967295|v>>>21),v=S+(I^y^_)+b[15]+530742520&4294967295,S=I+(v<<16&4294967295|v>>>16),v=_+(S^I^y)+b[2]+3299628645&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(S^(_|~I))+b[0]+4096336452&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~S))+b[7]+1126891415&4294967295,I=y+(v<<10&4294967295|v>>>22),v=S+(y^(I|~_))+b[14]+2878612391&4294967295,S=I+(v<<15&4294967295|v>>>17),v=_+(I^(S|~y))+b[5]+4237533241&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~I))+b[12]+1700485571&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~S))+b[3]+2399980690&4294967295,I=y+(v<<10&4294967295|v>>>22),v=S+(y^(I|~_))+b[10]+4293915773&4294967295,S=I+(v<<15&4294967295|v>>>17),v=_+(I^(S|~y))+b[1]+2240044497&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~I))+b[8]+1873313359&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~S))+b[15]+4264355552&4294967295,I=y+(v<<10&4294967295|v>>>22),v=S+(y^(I|~_))+b[6]+2734768916&4294967295,S=I+(v<<15&4294967295|v>>>17),v=_+(I^(S|~y))+b[13]+1309151649&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~I))+b[4]+4149444226&4294967295,y=_+(v<<6&4294967295|v>>>26),v=I+(_^(y|~S))+b[11]+3174756917&4294967295,I=y+(v<<10&4294967295|v>>>22),v=S+(y^(I|~_))+b[2]+718787259&4294967295,S=I+(v<<15&4294967295|v>>>17),v=_+(I^(S|~y))+b[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(S+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+S&4294967295,A.g[3]=A.g[3]+I&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var _=y-this.blockSize,b=this.B,S=this.h,I=0;I<y;){if(S==0)for(;I<=_;)s(this,A,I),I+=this.blockSize;if(typeof A=="string"){for(;I<y;)if(b[S++]=A.charCodeAt(I++),S==this.blockSize){s(this,b),S=0;break}}else for(;I<y;)if(b[S++]=A[I++],S==this.blockSize){s(this,b),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var _=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=_&255,_/=256;for(this.u(A),A=Array(16),y=_=0;4>y;++y)for(var b=0;32>b;b+=8)A[_++]=this.g[y]>>>b&255;return A};function i(A,y){var _=l;return Object.prototype.hasOwnProperty.call(_,A)?_[A]:_[A]=y(A)}function a(A,y){this.h=y;for(var _=[],b=!0,S=A.length-1;0<=S;S--){var I=A[S]|0;b&&I==y||(_[S]=I,b=!1)}this.g=_}var l={};function c(A){return-128<=A&&128>A?i(A,function(y){return new a([y|0],0>y?-1:0)}):new a([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return L(h(-A));for(var y=[],_=1,b=0;A>=_;b++)y[b]=A/_|0,_*=4294967296;return new a(y,0)}function d(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return L(d(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=h(Math.pow(y,8)),b=p,S=0;S<A.length;S+=8){var I=Math.min(8,A.length-S),v=parseInt(A.substring(S,S+I),y);8>I?(I=h(Math.pow(y,I)),b=b.j(I).add(h(v))):(b=b.j(_),b=b.add(h(v)))}return b}var p=c(0),g=c(1),w=c(16777216);t=a.prototype,t.m=function(){if(x(this))return-L(this).m();for(var A=0,y=1,_=0;_<this.g.length;_++){var b=this.i(_);A+=(0<=b?b:4294967296+b)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(P(this))return"0";if(x(this))return"-"+L(this).toString(A);for(var y=h(Math.pow(A,6)),_=this,b="";;){var S=H(_,y).g;_=z(_,S.j(y));var I=((0<_.g.length?_.g[0]:_.h)>>>0).toString(A);if(_=S,P(_))return I+b;for(;6>I.length;)I="0"+I;b=I+b}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function P(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function x(A){return A.h==-1}t.l=function(A){return A=z(this,A),x(A)?-1:P(A)?0:1};function L(A){for(var y=A.g.length,_=[],b=0;b<y;b++)_[b]=~A.g[b];return new a(_,~A.h).add(g)}t.abs=function(){return x(this)?L(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0,S=0;S<=y;S++){var I=b+(this.i(S)&65535)+(A.i(S)&65535),v=(I>>>16)+(this.i(S)>>>16)+(A.i(S)>>>16);b=v>>>16,I&=65535,v&=65535,_[S]=v<<16|I}return new a(_,_[_.length-1]&-2147483648?-1:0)};function z(A,y){return A.add(L(y))}t.j=function(A){if(P(this)||P(A))return p;if(x(this))return x(A)?L(this).j(L(A)):L(L(this).j(A));if(x(A))return L(this.j(L(A)));if(0>this.l(w)&&0>A.l(w))return h(this.m()*A.m());for(var y=this.g.length+A.g.length,_=[],b=0;b<2*y;b++)_[b]=0;for(b=0;b<this.g.length;b++)for(var S=0;S<A.g.length;S++){var I=this.i(b)>>>16,v=this.i(b)&65535,Pe=A.i(S)>>>16,Ge=A.i(S)&65535;_[2*b+2*S]+=v*Ge,F(_,2*b+2*S),_[2*b+2*S+1]+=I*Ge,F(_,2*b+2*S+1),_[2*b+2*S+1]+=v*Pe,F(_,2*b+2*S+1),_[2*b+2*S+2]+=I*Pe,F(_,2*b+2*S+2)}for(b=0;b<y;b++)_[b]=_[2*b+1]<<16|_[2*b];for(b=y;b<2*y;b++)_[b]=0;return new a(_,0)};function F(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function B(A,y){this.g=A,this.h=y}function H(A,y){if(P(y))throw Error("division by zero");if(P(A))return new B(p,p);if(x(A))return y=H(L(A),y),new B(L(y.g),L(y.h));if(x(y))return y=H(A,L(y)),new B(L(y.g),y.h);if(30<A.g.length){if(x(A)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,b=y;0>=b.l(A);)_=ce(_),b=ce(b);var S=ae(_,1),I=ae(b,1);for(b=ae(b,2),_=ae(_,2);!P(b);){var v=I.add(b);0>=v.l(A)&&(S=S.add(_),I=v),b=ae(b,1),_=ae(_,1)}return y=z(A,S.j(y)),new B(S,y)}for(S=p;0<=A.l(y);){for(_=Math.max(1,Math.floor(A.m()/y.m())),b=Math.ceil(Math.log(_)/Math.LN2),b=48>=b?1:Math.pow(2,b-48),I=h(_),v=I.j(y);x(v)||0<v.l(A);)_-=b,I=h(_),v=I.j(y);P(I)&&(I=g),S=S.add(I),A=z(A,v)}return new B(S,A)}t.A=function(A){return H(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)&A.i(b);return new a(_,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)|A.i(b);return new a(_,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],b=0;b<y;b++)_[b]=this.i(b)^A.i(b);return new a(_,this.h^A.h)};function ce(A){for(var y=A.g.length+1,_=[],b=0;b<y;b++)_[b]=A.i(b)<<1|A.i(b-1)>>>31;return new a(_,A.h)}function ae(A,y){var _=y>>5;y%=32;for(var b=A.g.length-_,S=[],I=0;I<b;I++)S[I]=0<y?A.i(I+_)>>>y|A.i(I+_+1)<<32-y:A.i(I+_);return new a(S,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,dc=a}).apply(typeof of<"u"?of:typeof self<"u"?self:typeof window<"u"?window:{});var Hi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _m,Cs,ym,io,vl,vm,Em,Tm;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hi=="object"&&Hi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var C=o[m];if(!(C in f))break e;f=f[C]}o=o[o.length-1],m=f[o],u=u(m),u!=m&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,m=!1,C={next:function(){if(!m&&f<o.length){var k=f++;return{value:u(k,o[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function p(o,u,f){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),o.apply(u,C)}}return function(){return o.apply(u,arguments)}}function g(o,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function w(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function P(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(m,C,k){for(var K=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)K[ke-2]=arguments[ke];return u.prototype[C].apply(m,K)}}function x(o){const u=o.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=o[m];return f}return[]}function L(o,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const C=o.length||0,k=m.length||0;o.length=C+k;for(let K=0;K<k;K++)o[C+K]=m[K]}else o.push(m)}}class z{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function F(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var ce=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function ae(o,u,f){for(const m in o)u.call(f,o[m],m,o)}function A(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b(o,u){let f,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(f in m)o[f]=m[f];for(let k=0;k<_.length;k++)f=_[k],Object.prototype.hasOwnProperty.call(m,f)&&(o[f]=m[f])}}function S(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function I(o){l.setTimeout(()=>{throw o},0)}function v(){var o=Pt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Pe{constructor(){this.h=this.g=null}add(u,f){const m=Ge.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Ge=new z(()=>new Fe,o=>o.reset());class Fe{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,ge=!1,Pt=new Pe,$t=()=>{const o=l.Promise.resolve(void 0);ve=()=>{o.then(xt)}};var xt=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(f){I(f)}var u=Ge;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}ge=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var kn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o}();function Jt(o,u){if($e.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ce){e:{try{H(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:bt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Jt.aa.h.call(this)}}P(Jt,$e);var bt={2:"touch",3:"pen",4:"mouse"};Jt.prototype.h=function(){Jt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(o,u,f,m,C){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=C,this.key=++X,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function be(o){this.src=o,this.g={},this.h=0}be.prototype.add=function(o,u,f,m,C){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var K=T(o,u,m,C);return-1<K?(u=o[K],f||(u.fa=!1)):(u=new J(u,this.src,k,!!m,C),u.fa=f,o.push(u)),u};function E(o,u){var f=u.type;if(f in o.g){var m=o.g[f],C=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=C)&&Array.prototype.splice.call(m,C,1),k&&(Y(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function T(o,u,f,m){for(var C=0;C<o.length;++C){var k=o[C];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==m)return C}return-1}var R="closure_lm_"+(1e6*Math.random()|0),D={};function V(o,u,f,m,C){if(Array.isArray(u)){for(var k=0;k<u.length;k++)V(o,u[k],f,m,C);return null}return f=ie(f),o&&o[O]?o.K(u,f,h(m)?!!m.capture:!1,C):N(o,u,f,!1,m,C)}function N(o,u,f,m,C,k){if(!u)throw Error("Invalid event type");var K=h(C)?!!C.capture:!!C,ke=G(o);if(ke||(o[R]=ke=new be(o)),f=ke.add(u,f,m,K,k),f.proxy)return f;if(m=Q(),f.proxy=m,m.src=o,m.listener=f,o.addEventListener)kn||(C=K),C===void 0&&(C=!1),o.addEventListener(u.toString(),m,C);else if(o.attachEvent)o.attachEvent(U(u.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Q(){function o(f){return u.call(o.src,o.listener,f)}const u=te;return o}function W(o,u,f,m,C){if(Array.isArray(u))for(var k=0;k<u.length;k++)W(o,u[k],f,m,C);else m=h(m)?!!m.capture:!!m,f=ie(f),o&&o[O]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],f=T(k,f,m,C),-1<f&&(Y(k[f]),Array.prototype.splice.call(k,f,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=G(o))&&(u=o.g[u.toString()],o=-1,u&&(o=T(u,f,m,C)),(f=-1<o?u[o]:null)&&q(f))}function q(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[O])E(u.i,o);else{var f=o.type,m=o.proxy;u.removeEventListener?u.removeEventListener(f,m,o.capture):u.detachEvent?u.detachEvent(U(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=G(u))?(E(f,o),f.h==0&&(f.src=null,u[R]=null)):Y(o)}}}function U(o){return o in D?D[o]:D[o]="on"+o}function te(o,u){if(o.da)o=!0;else{u=new Jt(u,this);var f=o.listener,m=o.ha||o.src;o.fa&&q(o),o=f.call(m,u)}return o}function G(o){return o=o[R],o instanceof be?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(u){return o.handleEvent(u)}),o[ee])}function ne(){Ue.call(this),this.i=new be(this),this.M=this,this.F=null}P(ne,Ue),ne.prototype[O]=!0,ne.prototype.removeEventListener=function(o,u,f,m){W(this,o,u,f,m)};function fe(o,u){var f,m=o.F;if(m)for(f=[];m;m=m.F)f.push(m);if(o=o.M,m=u.type||u,typeof u=="string")u=new $e(u,o);else if(u instanceof $e)u.target=u.target||o;else{var C=u;u=new $e(m,o),b(u,C)}if(C=!0,f)for(var k=f.length-1;0<=k;k--){var K=u.g=f[k];C=Ee(K,m,!0,u)&&C}if(K=u.g=o,C=Ee(K,m,!0,u)&&C,C=Ee(K,m,!1,u)&&C,f)for(k=0;k<f.length;k++)K=u.g=f[k],C=Ee(K,m,!1,u)&&C}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],m=0;m<f.length;m++)Y(f[m]);delete o.g[u],o.h--}}this.F=null},ne.prototype.K=function(o,u,f,m){return this.i.add(String(o),u,!1,f,m)},ne.prototype.L=function(o,u,f,m){return this.i.add(String(o),u,!0,f,m)};function Ee(o,u,f,m){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,k=0;k<u.length;++k){var K=u[k];if(K&&!K.da&&K.capture==f){var ke=K.listener,nt=K.ha||K.src;K.fa&&E(o.i,K),C=ke.call(nt,m)!==!1&&C}}return C&&!m.defaultPrevented}function ut(o,u,f){if(typeof o=="function")f&&(o=g(o,f));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function et(o){o.g=ut(()=>{o.g=null,o.i&&(o.i=!1,et(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Nt extends Ue{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:et(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ht(o){Ue.call(this),this.h=o,this.g={}}P(ht,Ue);var On=[];function us(o){ae(o.g,function(u,f){this.g.hasOwnProperty(f)&&q(u)},o),o.g={}}ht.prototype.N=function(){ht.aa.N.call(this),us(this)},ht.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var tt=l.JSON.stringify,Vt=l.JSON.parse,wi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function ca(){}ca.prototype.h=null;function Fc(o){return o.h||(o.h=o.i())}function Uc(){}var hs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ua(){$e.call(this,"d")}P(ua,$e);function ha(){$e.call(this,"c")}P(ha,$e);var rr={},$c=null;function Ii(){return $c=$c||new ne}rr.La="serverreachability";function Bc(o){$e.call(this,rr.La,o)}P(Bc,$e);function fs(o){const u=Ii();fe(u,new Bc(u))}rr.STAT_EVENT="statevent";function jc(o,u){$e.call(this,rr.STAT_EVENT,o),this.stat=u}P(jc,$e);function Et(o){const u=Ii();fe(u,new jc(u,o))}rr.Ma="timingevent";function Hc(o,u){$e.call(this,rr.Ma,o),this.size=u}P(Hc,$e);function ds(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function ps(){this.g=!0}ps.prototype.xa=function(){this.g=!1};function bg(o,u,f,m,C,k){o.info(function(){if(o.g)if(k)for(var K="",ke=k.split("&"),nt=0;nt<ke.length;nt++){var Ae=ke[nt].split("=");if(1<Ae.length){var ft=Ae[0];Ae=Ae[1];var dt=ft.split("_");K=2<=dt.length&&dt[1]=="type"?K+(ft+"="+Ae+"&"):K+(ft+"=redacted&")}}else K=null;else K=k;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+u+`
`+f+`
`+K})}function Ag(o,u,f,m,C,k,K){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+u+`
`+f+`
`+k+" "+K})}function Pr(o,u,f,m){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+Rg(o,f)+(m?" "+m:"")})}function Sg(o,u){o.info(function(){return"TIMEOUT: "+u})}ps.prototype.info=function(){};function Rg(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var m=f[o];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var k=C[0];if(k!="noop"&&k!="stop"&&k!="close")for(var K=1;K<C.length;K++)C[K]=""}}}}return tt(f)}catch{return u}}var bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},qc={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},fa;function Ai(){}P(Ai,ca),Ai.prototype.g=function(){return new XMLHttpRequest},Ai.prototype.i=function(){return{}},fa=new Ai;function Dn(o,u,f,m){this.j=o,this.i=u,this.l=f,this.R=m||1,this.U=new ht(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new zc}function zc(){this.i=null,this.g="",this.h=!1}var Wc={},da={};function pa(o,u,f){o.L=1,o.v=Pi(hn(u)),o.m=f,o.P=!0,Kc(o,null)}function Kc(o,u){o.F=Date.now(),Si(o),o.A=hn(o.v);var f=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),au(f.i,"t",m),o.C=0,f=o.j.J,o.h=new zc,o.g=Au(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Nt(g(o.Y,o,o.g),o.O)),u=o.U,f=o.g,m=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(On[0]=C.toString()),C=On);for(var k=0;k<C.length;k++){var K=V(f,C[k],m||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),fs(),bg(o.i,o.u,o.A,o.l,o.R,o.m)}Dn.prototype.ca=function(o){o=o.target;const u=this.M;u&&fn(o)==3?u.j():this.Y(o)},Dn.prototype.Y=function(o){try{if(o==this.g)e:{const dt=fn(this.g);var u=this.g.Ba();const Dr=this.g.Z();if(!(3>dt)&&(dt!=3||this.g&&(this.h.h||this.g.oa()||pu(this.g)))){this.J||dt!=4||u==7||(u==8||0>=Dr?fs(3):fs(2)),ma(this);var f=this.g.Z();this.X=f;t:if(Gc(this)){var m=pu(this.g);o="";var C=m.length,k=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),ms(this);var K="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,o+=this.h.i.decode(m[u],{stream:!(k&&u==C-1)});m.length=0,this.h.g+=o,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=f==200,Ag(this.i,this.u,this.A,this.l,this.R,dt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var ke,nt=this.g;if((ke=nt.g?nt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(ke)){var Ae=ke;break t}}Ae=null}if(f=Ae)Pr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ga(this,f);else{this.o=!1,this.s=3,Et(12),sr(this),ms(this);break e}}if(this.P){f=!0;let Bt;for(;!this.J&&this.C<K.length;)if(Bt=Cg(this,K),Bt==da){dt==4&&(this.s=4,Et(14),f=!1),Pr(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Wc){this.s=4,Et(15),Pr(this.i,this.l,K,"[Invalid Chunk]"),f=!1;break}else Pr(this.i,this.l,Bt,null),ga(this,Bt);if(Gc(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),dt!=4||K.length!=0||this.h.h||(this.s=1,Et(16),f=!1),this.o=this.o&&f,!f)Pr(this.i,this.l,K,"[Invalid Chunked Response]"),sr(this),ms(this);else if(0<K.length&&!this.W){this.W=!0;var ft=this.j;ft.g==this&&ft.ba&&!ft.M&&(ft.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),wa(ft),ft.M=!0,Et(11))}}else Pr(this.i,this.l,K,null),ga(this,K);dt==4&&sr(this),this.o&&!this.J&&(dt==4?Tu(this.j,this):(this.o=!1,Si(this)))}else zg(this.g),f==400&&0<K.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),sr(this),ms(this)}}}catch{}finally{}};function Gc(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Cg(o,u){var f=o.C,m=u.indexOf(`
`,f);return m==-1?da:(f=Number(u.substring(f,m)),isNaN(f)?Wc:(m+=1,m+f>u.length?da:(u=u.slice(m,m+f),o.C=m+f,u)))}Dn.prototype.cancel=function(){this.J=!0,sr(this)};function Si(o){o.S=Date.now()+o.I,Qc(o,o.I)}function Qc(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ds(g(o.ba,o),u)}function ma(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Dn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Sg(this.i,this.A),this.L!=2&&(fs(),Et(17)),sr(this),this.s=2,ms(this)):Qc(this,this.S-o)};function ms(o){o.j.G==0||o.J||Tu(o.j,o)}function sr(o){ma(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,us(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ga(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||_a(f.h,o))){if(!o.K&&_a(f.h,o)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Vi(f),xi(f);else break e;Ta(f),Et(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=ds(g(f.Za,f),6e3));if(1>=Yc(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else or(f,11)}else if((o.K||f.g==o)&&Vi(f),!F(u))for(C=f.Da.g.parse(u),u=0;u<C.length;u++){let Ae=C[u];if(f.T=Ae[0],Ae=Ae[1],f.G==2)if(Ae[0]=="c"){f.K=Ae[1],f.ia=Ae[2];const ft=Ae[3];ft!=null&&(f.la=ft,f.j.info("VER="+f.la));const dt=Ae[4];dt!=null&&(f.Aa=dt,f.j.info("SVER="+f.Aa));const Dr=Ae[5];Dr!=null&&typeof Dr=="number"&&0<Dr&&(m=1.5*Dr,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Bt=o.g;if(Bt){const Li=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Li){var k=m.h;k.g||Li.indexOf("spdy")==-1&&Li.indexOf("quic")==-1&&Li.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(ya(k,k.h),k.h=null))}if(m.D){const Ia=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ia&&(m.ya=Ia,Ne(m.I,m.D,Ia))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var K=o;if(m.qa=bu(m,m.J?m.ia:null,m.W),K.K){Zc(m.h,K);var ke=K,nt=m.L;nt&&(ke.I=nt),ke.B&&(ma(ke),Si(ke)),m.g=K}else vu(m);0<f.i.length&&Ni(f)}else Ae[0]!="stop"&&Ae[0]!="close"||or(f,7);else f.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?or(f,7):Ea(f):Ae[0]!="noop"&&f.l&&f.l.ta(Ae),f.v=0)}}fs(4)}catch{}}var Pg=class{constructor(o,u){this.g=o,this.map=u}};function Jc(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Xc(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Yc(o){return o.h?1:o.g?o.g.size:0}function _a(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function ya(o,u){o.g?o.g.add(u):o.h=u}function Zc(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Jc.prototype.cancel=function(){if(this.i=eu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function eu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return x(o.i)}function kg(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,m=0;m<f;m++)u.push(o[m]);return u}u=[],f=0;for(m in o)u[f++]=o[m];return u}function Og(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const m in o)u[f++]=m;return u}}}function tu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Og(o),m=kg(o),C=m.length,k=0;k<C;k++)u.call(void 0,m[k],f&&f[k],o)}var nu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Dg(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var m=o[f].indexOf("="),C=null;if(0<=m){var k=o[f].substring(0,m);C=o[f].substring(m+1)}else k=o[f];u(k,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function ir(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ir){this.h=o.h,Ri(this,o.j),this.o=o.o,this.g=o.g,Ci(this,o.s),this.l=o.l;var u=o.i,f=new ys;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),ru(this,f),this.m=o.m}else o&&(u=String(o).match(nu))?(this.h=!1,Ri(this,u[1]||"",!0),this.o=gs(u[2]||""),this.g=gs(u[3]||"",!0),Ci(this,u[4]),this.l=gs(u[5]||"",!0),ru(this,u[6]||"",!0),this.m=gs(u[7]||"")):(this.h=!1,this.i=new ys(null,this.h))}ir.prototype.toString=function(){var o=[],u=this.j;u&&o.push(_s(u,su,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(_s(u,su,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(_s(f,f.charAt(0)=="/"?Vg:Ng,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",_s(f,Lg)),o.join("")};function hn(o){return new ir(o)}function Ri(o,u,f){o.j=f?gs(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ci(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function ru(o,u,f){u instanceof ys?(o.i=u,Fg(o.i,o.h)):(f||(u=_s(u,Mg)),o.i=new ys(u,o.h))}function Ne(o,u,f){o.i.set(u,f)}function Pi(o){return Ne(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function gs(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function _s(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,xg),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function xg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var su=/[#\/\?@]/g,Ng=/[#\?:]/g,Vg=/[#\?]/g,Mg=/[#\?@]/g,Lg=/#/g;function ys(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function xn(o){o.g||(o.g=new Map,o.h=0,o.i&&Dg(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=ys.prototype,t.add=function(o,u){xn(this),this.i=null,o=kr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function iu(o,u){xn(o),u=kr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function ou(o,u){return xn(o),u=kr(o,u),o.g.has(u)}t.forEach=function(o,u){xn(this),this.g.forEach(function(f,m){f.forEach(function(C){o.call(u,C,m,this)},this)},this)},t.na=function(){xn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const C=o[m];for(let k=0;k<C.length;k++)f.push(u[m])}return f},t.V=function(o){xn(this);let u=[];if(typeof o=="string")ou(this,o)&&(u=u.concat(this.g.get(kr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},t.set=function(o,u){return xn(this),this.i=null,o=kr(this,o),ou(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},t.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function au(o,u,f){iu(o,u),0<f.length&&(o.i=null,o.g.set(kr(o,u),x(f)),o.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const k=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var C=k;K[m]!==""&&(C+="="+encodeURIComponent(String(K[m]))),o.push(C)}}return this.i=o.join("&")};function kr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Fg(o,u){u&&!o.j&&(xn(o),o.i=null,o.g.forEach(function(f,m){var C=m.toLowerCase();m!=C&&(iu(this,m),au(this,C,f))},o)),o.j=u}function Ug(o,u){const f=new ps;if(l.Image){const m=new Image;m.onload=w(Nn,f,"TestLoadImage: loaded",!0,u,m),m.onerror=w(Nn,f,"TestLoadImage: error",!1,u,m),m.onabort=w(Nn,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=w(Nn,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else u(!1)}function $g(o,u){const f=new ps,m=new AbortController,C=setTimeout(()=>{m.abort(),Nn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:m.signal}).then(k=>{clearTimeout(C),k.ok?Nn(f,"TestPingServer: ok",!0,u):Nn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Nn(f,"TestPingServer: error",!1,u)})}function Nn(o,u,f,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(f)}catch{}}function Bg(){this.g=new wi}function jg(o,u,f){const m=f||"";try{tu(o,function(C,k){let K=C;h(C)&&(K=tt(C)),u.push(m+k+"="+encodeURIComponent(K))})}catch(C){throw u.push(m+"type="+encodeURIComponent("_badmap")),C}}function ki(o){this.l=o.Ub||null,this.j=o.eb||!1}P(ki,ca),ki.prototype.g=function(){return new Oi(this.l,this.j)},ki.prototype.i=function(o){return function(){return o}}({});function Oi(o,u){ne.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}P(Oi,ne),t=Oi.prototype,t.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Es(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;lu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function lu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?vs(this):Es(this),this.readyState==3&&lu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,vs(this))},t.Qa=function(o){this.g&&(this.response=o,vs(this))},t.ga=function(){this.g&&vs(this)};function vs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Es(o)}t.setRequestHeader=function(o,u){this.u.append(o,u)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Es(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Oi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function cu(o){let u="";return ae(o,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function va(o,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=cu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ne(o,u,f))}function je(o){ne.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}P(je,ne);var Hg=/^https?$/i,qg=["POST","PUT"];t=je.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():fa.g(),this.v=this.o?Fc(this.o):Fc(fa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){uu(this,k);return}if(o=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)f.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())f.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(qg,u,void 0))||m||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,K]of f)this.g.setRequestHeader(k,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{du(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){uu(this,k)}};function uu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,hu(o),Di(o)}function hu(o){o.A||(o.A=!0,fe(o,"complete"),fe(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,fe(this,"complete"),fe(this,"abort"),Di(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Di(this,!0)),je.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?fu(this):this.bb())},t.bb=function(){fu(this)};function fu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||fn(o)!=4||o.Z()!=2)){if(o.u&&fn(o)==4)ut(o.Ea,0,o);else if(fe(o,"readystatechange"),fn(o)==4){o.h=!1;try{const K=o.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=K===0){var C=String(o.D).match(nu)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!Hg.test(C?C.toLowerCase():"")}f=m}if(f)fe(o,"complete"),fe(o,"success");else{o.m=6;try{var k=2<fn(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",hu(o)}}finally{Di(o)}}}}function Di(o,u){if(o.g){du(o);const f=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||fe(o,"ready");try{f.onreadystatechange=m}catch{}}}function du(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function fn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Vt(u)}};function pu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function zg(o){const u={};o=(o.g&&2<=fn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(F(o[m]))continue;var f=S(o[m]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[C]||[];u[C]=k,k.push(f)}A(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ts(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function mu(o){this.Aa=0,this.i=[],this.j=new ps,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ts("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ts("baseRetryDelayMs",5e3,o),this.cb=Ts("retryDelaySeedMs",1e4,o),this.Wa=Ts("forwardChannelMaxRetries",2,o),this.wa=Ts("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Jc(o&&o.concurrentRequestLimit),this.Da=new Bg,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=mu.prototype,t.la=8,t.G=1,t.connect=function(o,u,f,m){Et(0),this.W=o,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=bu(this,null,this.W),Ni(this)};function Ea(o){if(gu(o),o.G==3){var u=o.U++,f=hn(o.I);if(Ne(f,"SID",o.K),Ne(f,"RID",u),Ne(f,"TYPE","terminate"),ws(o,f),u=new Dn(o,o.j,u),u.L=2,u.v=Pi(hn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Au(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Si(u)}Iu(o)}function xi(o){o.g&&(wa(o),o.g.cancel(),o.g=null)}function gu(o){xi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Vi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Ni(o){if(!Xc(o.h)&&!o.s){o.s=!0;var u=o.Ga;ve||$t(),ge||(ve(),ge=!0),Pt.add(u,o),o.B=0}}function Wg(o,u){return Yc(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ds(g(o.Ga,o,u),wu(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new Dn(this,this.j,o);let k=this.o;if(this.S&&(k?(k=y(k),b(k,this.S)):k=this.S),this.m!==null||this.O||(C.H=k,k=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=yu(this,C,u),f=hn(this.I),Ne(f,"RID",o),Ne(f,"CVER",22),this.D&&Ne(f,"X-HTTP-Session-Id",this.D),ws(this,f),k&&(this.O?u="headers="+encodeURIComponent(String(cu(k)))+"&"+u:this.m&&va(f,this.m,k)),ya(this.h,C),this.Ua&&Ne(f,"TYPE","init"),this.P?(Ne(f,"$req",u),Ne(f,"SID","null"),C.T=!0,pa(C,f,null)):pa(C,f,u),this.G=2}}else this.G==3&&(o?_u(this,o):this.i.length==0||Xc(this.h)||_u(this))};function _u(o,u){var f;u?f=u.l:f=o.U++;const m=hn(o.I);Ne(m,"SID",o.K),Ne(m,"RID",f),Ne(m,"AID",o.T),ws(o,m),o.m&&o.o&&va(m,o.m,o.o),f=new Dn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=yu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ya(o.h,f),pa(f,m,u)}function ws(o,u){o.H&&ae(o.H,function(f,m){Ne(u,m,f)}),o.l&&tu({},function(f,m){Ne(u,m,f)})}function yu(o,u,f){f=Math.min(o.i.length,f);var m=o.l?g(o.l.Na,o.l,o):null;e:{var C=o.i;let k=-1;for(;;){const K=["count="+f];k==-1?0<f?(k=C[0].g,K.push("ofs="+k)):k=0:K.push("ofs="+k);let ke=!0;for(let nt=0;nt<f;nt++){let Ae=C[nt].g;const ft=C[nt].map;if(Ae-=k,0>Ae)k=Math.max(0,C[nt].g-100),ke=!1;else try{jg(ft,K,"req"+Ae+"_")}catch{m&&m(ft)}}if(ke){m=K.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,m}function vu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;ve||$t(),ge||(ve(),ge=!0),Pt.add(u,o),o.v=0}}function Ta(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ds(g(o.Fa,o),wu(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Eu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ds(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),xi(this),Eu(this))};function wa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Eu(o){o.g=new Dn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=hn(o.qa);Ne(u,"RID","rpc"),Ne(u,"SID",o.K),Ne(u,"AID",o.T),Ne(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ne(u,"TO",o.ja),Ne(u,"TYPE","xmlhttp"),ws(o,u),o.m&&o.o&&va(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Pi(hn(u)),f.m=null,f.P=!0,Kc(f,o)}t.Za=function(){this.C!=null&&(this.C=null,xi(this),Ta(this),Et(19))};function Vi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Tu(o,u){var f=null;if(o.g==u){Vi(o),wa(o),o.g=null;var m=2}else if(_a(o.h,u))f=u.D,Zc(o.h,u),m=1;else return;if(o.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var C=o.B;m=Ii(),fe(m,new Hc(m,f)),Ni(o)}else vu(o);else if(C=u.s,C==3||C==0&&0<u.X||!(m==1&&Wg(o,u)||m==2&&Ta(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),C){case 1:or(o,5);break;case 4:or(o,10);break;case 3:or(o,6);break;default:or(o,2)}}}function wu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function or(o,u){if(o.j.info("Error code "+u),u==2){var f=g(o.fb,o),m=o.Xa;const C=!m;m=new ir(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ri(m,"https"),Pi(m),C?Ug(m.toString(),f):$g(m.toString(),f)}else Et(2);o.G=0,o.l&&o.l.sa(u),Iu(o),gu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Iu(o){if(o.G=0,o.ka=[],o.l){const u=eu(o.h);(u.length!=0||o.i.length!=0)&&(L(o.ka,u),L(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function bu(o,u,f){var m=f instanceof ir?hn(f):new ir(f);if(m.g!="")u&&(m.g=u+"."+m.g),Ci(m,m.s);else{var C=l.location;m=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var k=new ir(null);m&&Ri(k,m),u&&(k.g=u),C&&Ci(k,C),f&&(k.l=f),m=k}return f=o.D,u=o.ya,f&&u&&Ne(m,f,u),Ne(m,"VER",o.la),ws(o,m),m}function Au(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new je(new ki({eb:f})):new je(o.pa),u.Ha(o.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Su(){}t=Su.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Mi(){}Mi.prototype.g=function(o,u){return new kt(o,u)};function kt(o,u){ne.call(this),this.g=new mu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!F(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!F(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Or(this)}P(kt,ne),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){Ea(this.g)},kt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=tt(o),o=f);u.i.push(new Pg(u.Ya++,o)),u.G==3&&Ni(u)},kt.prototype.N=function(){this.g.l=null,delete this.j,Ea(this.g),delete this.g,kt.aa.N.call(this)};function Ru(o){ua.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}P(Ru,ua);function Cu(){ha.call(this),this.status=1}P(Cu,ha);function Or(o){this.g=o}P(Or,Su),Or.prototype.ua=function(){fe(this.g,"a")},Or.prototype.ta=function(o){fe(this.g,new Ru(o))},Or.prototype.sa=function(o){fe(this.g,new Cu)},Or.prototype.ra=function(){fe(this.g,"b")},Mi.prototype.createWebChannel=Mi.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,Tm=function(){return new Mi},Em=function(){return Ii()},vm=rr,vl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bi.NO_ERROR=0,bi.TIMEOUT=8,bi.HTTP_ERROR=6,io=bi,qc.COMPLETE="complete",ym=qc,Uc.EventType=hs,hs.OPEN="a",hs.CLOSE="b",hs.ERROR="c",hs.MESSAGE="d",ne.prototype.listen=ne.prototype.K,Cs=Uc,je.prototype.listenOnce=je.prototype.L,je.prototype.getLastError=je.prototype.Ka,je.prototype.getLastErrorCode=je.prototype.Ba,je.prototype.getStatus=je.prototype.Z,je.prototype.getResponseJson=je.prototype.Oa,je.prototype.getResponseText=je.prototype.oa,je.prototype.send=je.prototype.ea,je.prototype.setWithCredentials=je.prototype.Ha,_m=je}).apply(typeof Hi<"u"?Hi:typeof self<"u"?self:typeof window<"u"?window:{});const af="@firebase/firestore",lf="4.7.16";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let ls="11.8.1";/**
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
 */const wr=new ec("@firebase/firestore");function Lr(){return wr.logLevel}function Z(t,...e){if(wr.logLevel<=_e.DEBUG){const n=e.map(pc);wr.debug(`Firestore (${ls}): ${t}`,...n)}}function Ir(t,...e){if(wr.logLevel<=_e.ERROR){const n=e.map(pc);wr.error(`Firestore (${ls}): ${t}`,...n)}}function ta(t,...e){if(wr.logLevel<=_e.WARN){const n=e.map(pc);wr.warn(`Firestore (${ls}): ${t}`,...n)}}function pc(t){if(typeof t=="string")return t;try{/**
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
 */function me(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,wm(t,r,n)}function wm(t,e,n){let r=`FIRESTORE (${ls}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ir(r),new Error(r)}function He(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||wm(e,s,r)}function xe(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Pn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class _r{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Im{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class d0{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class p0{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class m0{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){He(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new _r;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _r,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _r)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(He(typeof r.accessToken=="string",31837,{l:r}),new Im(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return He(e===null||typeof e=="string",2055,{h:e}),new mt(e)}}class g0{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _0{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new g0(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class cf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class y0{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){He(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new cf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(He(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new cf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function v0(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function E0(){return new TextEncoder}/**
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
 */class bm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=v0(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Ie(t,e){return t<e?-1:t>e?1:0}function El(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Ie(r,s);{const i=E0(),a=T0(i.encode(uf(t,n)),i.encode(uf(e,n)));return a!==0?a:Ie(r,s)}}n+=r>65535?2:1}return Ie(t.length,e.length)}function uf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function T0(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Ie(t[n],e[n]);return Ie(t.length,e.length)}function Zr(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const hf=-62135596800,ff=1e6;class Ye{static now(){return Ye.fromMillis(Date.now())}static fromDate(e){return Ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ff);return new Ye(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<hf)throw new le($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ff}_compareTo(e){return this.seconds===e.seconds?Ie(this.nanoseconds,e.nanoseconds):Ie(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-hf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Le{static fromTimestamp(e){return new Le(e)}static min(){return new Le(new Ye(0,0))}static max(){return new Le(new Ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const df="__name__";class Zt{constructor(e,n,r){n===void 0?n=0:n>e.length&&me(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&me(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zt.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zt?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=Zt.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Ie(e.length,n.length)}static compareSegments(e,n){const r=Zt.isNumericId(e),s=Zt.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?Zt.extractNumericId(e).compare(Zt.extractNumericId(n)):El(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return dc.fromString(e.substring(4,e.length-2))}}class Ke extends Zt{construct(e,n,r){return new Ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new le($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ke(n)}static emptyPath(){return new Ke([])}}const w0=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends Zt{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return w0.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===df}static keyField(){return new lt([df])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new le($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new le($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new le($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new le($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Ke.fromString(e))}static fromName(e){return new de(Ke.fromString(e).popFirst(5))}static empty(){return new de(Ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Ke(e.slice()))}}/**
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
 */const ei=-1;function I0(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Le.fromTimestamp(r===1e9?new Ye(n+1,0):new Ye(n,r));return new Yn(s,de.empty(),e)}function b0(t){return new Yn(t.readTime,t.key,ei)}class Yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yn(Le.min(),de.empty(),ei)}static max(){return new Yn(Le.max(),de.empty(),ei)}}function A0(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(t.documentKey,e.documentKey),n!==0?n:Ie(t.largestBatchId,e.largestBatchId))}/**
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
 */const S0="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class R0{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function mc(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==S0)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{a[h]=d,++l,l===i&&r(a)},d=>s(d))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function C0(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function _i(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class gc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}gc.le=-1;/**
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
 */const _c=-1;function yc(t){return t==null}function So(t){return t===0&&1/t==-1/0}function P0(t){return typeof t=="number"&&Number.isInteger(t)&&!So(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const Am="";function k0(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=pf(e)),e=O0(t.get(n),e);return pf(e)}function O0(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Am:n+="";break;default:n+=i}}return n}function pf(t){return t+Am+""}/**
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
 */function mf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Sm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ct{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Ct(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Ct(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qi(this.root,e,this.comparator,!1)}getReverseIterator(){return new qi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qi(this.root,e,this.comparator,!0)}}class qi{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ct{constructor(e){this.comparator=e,this.data=new Ct(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new gf(this.data.getIterator())}getIteratorFrom(e){return new gf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class gf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new ct(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zr(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class D0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class cn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new D0("Invalid base64 string: "+i):i}}(e);return new cn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new cn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Ie(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}cn.EMPTY_BYTE_STRING=new cn("");const x0=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(He(!!t,39018),typeof t=="string"){let e=0;const n=x0.exec(t);if(He(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:st(t.seconds),nanos:st(t.nanos)}}function st(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function es(t){return typeof t=="string"?cn.fromBase64String(t):cn.fromUint8Array(t)}/**
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
 */const Rm="server_timestamp",Cm="__type__",Pm="__previous_value__",km="__local_write_time__";function vc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Cm])===null||n===void 0?void 0:n.stringValue)===Rm}function Ec(t){const e=t.mapValue.fields[Pm];return vc(e)?Ec(e):e}function Ro(t){const e=br(t.mapValue.fields[km].timestampValue);return new Ye(e.seconds,e.nanos)}/**
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
 */class N0{constructor(e,n,r,s,i,a,l,c,h,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d}}const Co="(default)";class Po{constructor(e,n){this.projectId=e,this.database=n||Co}static empty(){return new Po("","")}get isDefaultDatabase(){return this.database===Co}isEqual(e){return e instanceof Po&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Om="__type__",V0="__max__",zi={mapValue:{}},Dm="__vector__",Tl="value";function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vc(t)?4:L0(t)?9007199254740991:M0(t)?10:11:me(28295,{value:t})}function un(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ro(t).isEqual(Ro(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=br(s.timestampValue),l=br(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return es(s.bytesValue).isEqual(es(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return st(s.geoPointValue.latitude)===st(i.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return st(s.integerValue)===st(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=st(s.doubleValue),l=st(i.doubleValue);return a===l?So(a)===So(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return Zr(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(mf(a)!==mf(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!un(a[c],l[c])))return!1;return!0}(t,e);default:return me(52216,{left:t})}}function ti(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function ts(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return Ie(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ie(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=st(i.integerValue||i.doubleValue),c=st(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return _f(t.timestampValue,e.timestampValue);case 4:return _f(Ro(t),Ro(e));case 5:return El(t.stringValue,e.stringValue);case 6:return function(i,a){const l=es(i),c=es(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Ie(l[h],c[h]);if(d!==0)return d}return Ie(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Ie(st(i.latitude),st(a.latitude));return l!==0?l:Ie(st(i.longitude),st(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return yf(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,h,d;const p=i.fields||{},g=a.fields||{},w=(l=p[Tl])===null||l===void 0?void 0:l.arrayValue,P=(c=g[Tl])===null||c===void 0?void 0:c.arrayValue,x=Ie(((h=w==null?void 0:w.values)===null||h===void 0?void 0:h.length)||0,((d=P==null?void 0:P.values)===null||d===void 0?void 0:d.length)||0);return x!==0?x:yf(w,P)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===zi.mapValue&&a===zi.mapValue)return 0;if(i===zi.mapValue)return 1;if(a===zi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=El(c[p],d[p]);if(g!==0)return g;const w=ts(l[c[p]],h[d[p]]);if(w!==0)return w}return Ie(c.length,d.length)}(t.mapValue,e.mapValue);default:throw me(23264,{Pe:n})}}function _f(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Ie(t,e);const n=br(t),r=br(e),s=Ie(n.seconds,r.seconds);return s!==0?s:Ie(n.nanos,r.nanos)}function yf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ts(n[s],r[s]);if(i)return i}return Ie(n.length,r.length)}function ns(t){return wl(t)}function wl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=br(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return de.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=wl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${wl(n.fields[a])}`;return s+"}"}(t.mapValue):me(61005,{value:t})}function oo(t){switch(Ar(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Ec(t);return e?16+oo(e):16;case 5:return 2*t.stringValue.length;case 6:return es(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+oo(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return cs(r.fields,(i,a)=>{s+=i.length+oo(a)}),s}(t.mapValue);default:throw me(13486,{value:t})}}function Il(t){return!!t&&"integerValue"in t}function Tc(t){return!!t&&"arrayValue"in t}function ao(t){return!!t&&"mapValue"in t}function M0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Om])===null||n===void 0?void 0:n.stringValue)===Dm}function Us(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Us(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Us(t.arrayValue.values[n]);return e}return Object.assign({},t)}function L0(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===V0}/**
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
 */class qt{constructor(e){this.value=e}static empty(){return new qt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Us(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Us(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ao(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){cs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new qt(Us(this.value))}}function xm(t){const e=[];return cs(t.fields,(n,r)=>{const s=new lt([n]);if(ao(r)){const i=xm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Wt(e)}/**
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
 */class jt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new jt(e,0,Le.min(),Le.min(),Le.min(),qt.empty(),0)}static newFoundDocument(e,n,r,s){return new jt(e,1,n,Le.min(),r,s,0)}static newNoDocument(e,n){return new jt(e,2,n,Le.min(),Le.min(),qt.empty(),0)}static newUnknownDocument(e,n){return new jt(e,3,n,Le.min(),Le.min(),qt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=qt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=qt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ko{constructor(e,n){this.position=e,this.inclusive=n}}function vf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=de.comparator(de.fromName(a.referenceValue),n.key):r=ts(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ef(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Oo{constructor(e,n="asc"){this.field=e,this.dir=n}}function F0(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Nm{}class Xe extends Nm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $0(e,n,r):n==="array-contains"?new H0(e,r):n==="in"?new q0(e,r):n==="not-in"?new z0(e,r):n==="array-contains-any"?new W0(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new B0(e,r):new j0(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ts(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zn extends Nm{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new Zn(e,n)}matches(e){return Vm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function Vm(t){return t.op==="and"}function Mm(t){return U0(t)&&Vm(t)}function U0(t){for(const e of t.filters)if(e instanceof Zn)return!1;return!0}function bl(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+ns(t.value);if(Mm(t))return t.filters.map(e=>bl(e)).join(",");{const e=t.filters.map(n=>bl(n)).join(",");return`${t.op}(${e})`}}function Lm(t,e){return t instanceof Xe?function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&un(r.value,s.value)}(t,e):t instanceof Zn?function(r,s){return s instanceof Zn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Lm(a,s.filters[l]),!0):!1}(t,e):void me(19439)}function Fm(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${ns(n.value)}`}(t):t instanceof Zn?function(n){return n.op.toString()+" {"+n.getFilters().map(Fm).join(" ,")+"}"}(t):"Filter"}class $0 extends Xe{constructor(e,n,r){super(e,n,r),this.key=de.fromName(r.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class B0 extends Xe{constructor(e,n){super(e,"in",n),this.keys=Um("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class j0 extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=Um("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Um(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>de.fromName(r.referenceValue))}class H0 extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Tc(n)&&ti(n.arrayValue,this.value)}}class q0 extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ti(this.value.arrayValue,n)}}class z0 extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ti(this.value.arrayValue,n)}}class W0 extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Tc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ti(this.value.arrayValue,r))}}/**
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
 */class K0{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Ie=null}}function Tf(t,e=null,n=[],r=[],s=null,i=null,a=null){return new K0(t,e,n,r,s,i,a)}function wc(t){const e=xe(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>bl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),yc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ns(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ns(r)).join(",")),e.Ie=n}return e.Ie}function Ic(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!F0(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Lm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ef(t.startAt,e.startAt)&&Ef(t.endAt,e.endAt)}/**
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
 */class na{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function G0(t,e,n,r,s,i,a,l){return new na(t,e,n,r,s,i,a,l)}function Q0(t){return new na(t)}function wf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function J0(t){return t.collectionGroup!==null}function $s(t){const e=xe(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ct(lt.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Oo(i,r))}),n.has(lt.keyField().canonicalString())||e.Ee.push(new Oo(lt.keyField(),r))}return e.Ee}function yr(t){const e=xe(t);return e.de||(e.de=X0(e,$s(t))),e.de}function X0(t,e){if(t.limitType==="F")return Tf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Oo(s.field,i)});const n=t.endAt?new ko(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ko(t.startAt.position,t.startAt.inclusive):null;return Tf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Al(t,e,n){return new na(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $m(t,e){return Ic(yr(t),yr(e))&&t.limitType===e.limitType}function Bm(t){return`${wc(yr(t))}|lt:${t.limitType}`}function Ss(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Fm(s)).join(", ")}]`),yc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ns(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ns(s)).join(",")),`Target(${r})`}(yr(t))}; limitType=${t.limitType})`}function bc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):de.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of $s(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const h=vf(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,$s(r),s)||r.endAt&&!function(a,l,c){const h=vf(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,$s(r),s))}(t,e)}function Y0(t){return(e,n)=>{let r=!1;for(const s of $s(t)){const i=Z0(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Z0(t,e,n){const r=t.field.isKeyField()?de.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?ts(c,h):me(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return me(19790,{direction:t.dir})}}/**
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
 */class Rr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Sm(this.inner)}size(){return this.innerSize}}/**
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
 */const eb=new Ct(de.comparator);function Do(){return eb}const jm=new Ct(de.comparator);function Wi(...t){let e=jm;for(const n of t)e=e.insert(n.key,n);return e}function Hm(t){let e=jm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function pr(){return Bs()}function qm(){return Bs()}function Bs(){return new Rr(t=>t.toString(),(t,e)=>t.isEqual(e))}const tb=new Ct(de.comparator),nb=new ct(de.comparator);function _t(...t){let e=nb;for(const n of t)e=e.add(n);return e}const rb=new ct(Ie);function sb(){return rb}/**
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
 */function Ac(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:So(e)?"-0":e}}function zm(t){return{integerValue:""+t}}function ib(t,e){return P0(e)?zm(e):Ac(t,e)}/**
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
 */class ra{constructor(){this._=void 0}}function ob(t,e,n){return t instanceof ni?function(s,i){const a={fields:{[Cm]:{stringValue:Rm},[km]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vc(i)&&(i=Ec(i)),i&&(a.fields[Pm]=i),{mapValue:a}}(n,e):t instanceof ri?Km(t,e):t instanceof si?Gm(t,e):function(s,i){const a=Wm(s,i),l=If(a)+If(s.Re);return Il(a)&&Il(s.Re)?zm(l):Ac(s.serializer,l)}(t,e)}function ab(t,e,n){return t instanceof ri?Km(t,e):t instanceof si?Gm(t,e):n}function Wm(t,e){return t instanceof xo?function(r){return Il(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ni extends ra{}class ri extends ra{constructor(e){super(),this.elements=e}}function Km(t,e){const n=Qm(e);for(const r of t.elements)n.some(s=>un(s,r))||n.push(r);return{arrayValue:{values:n}}}class si extends ra{constructor(e){super(),this.elements=e}}function Gm(t,e){let n=Qm(e);for(const r of t.elements)n=n.filter(s=>!un(s,r));return{arrayValue:{values:n}}}class xo extends ra{constructor(e,n){super(),this.serializer=e,this.Re=n}}function If(t){return st(t.integerValue||t.doubleValue)}function Qm(t){return Tc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class lb{constructor(e,n){this.field=e,this.transform=n}}function cb(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof ri&&s instanceof ri||r instanceof si&&s instanceof si?Zr(r.elements,s.elements,un):r instanceof xo&&s instanceof xo?un(r.Re,s.Re):r instanceof ni&&s instanceof ni}(t.transform,e.transform)}class ub{constructor(e,n){this.version=e,this.transformResults=n}}class Tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Tn}static exists(e){return new Tn(void 0,e)}static updateTime(e){return new Tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class sa{}function Jm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ym(t.key,Tn.none()):new yi(t.key,t.data,Tn.none());{const n=t.data,r=qt.empty();let s=new ct(lt.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Cr(t.key,r,new Wt(s.toArray()),Tn.none())}}function hb(t,e,n){t instanceof yi?function(s,i,a){const l=s.value.clone(),c=Af(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Cr?function(s,i,a){if(!lo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Af(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Xm(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function js(t,e,n,r){return t instanceof yi?function(i,a,l,c){if(!lo(i.precondition,a))return l;const h=i.value.clone(),d=Sf(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Cr?function(i,a,l,c){if(!lo(i.precondition,a))return l;const h=Sf(i.fieldTransforms,c,a),d=a.data;return d.setAll(Xm(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return lo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function fb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Wm(r.transform,s||null);i!=null&&(n===null&&(n=qt.empty()),n.set(r.field,i))}return n||null}function bf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zr(r,s,(i,a)=>cb(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class yi extends sa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Cr extends sa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Xm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Af(t,e,n){const r=new Map;He(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,ab(a,l,n[s]))}return r}function Sf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,ob(i,a,e))}return r}class Ym extends sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class db extends sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&hb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=js(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=js(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=qm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Jm(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(Le.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_t())}isEqual(e){return this.batchId===e.batchId&&Zr(this.mutations,e.mutations,(n,r)=>bf(n,r))&&Zr(this.baseMutations,e.baseMutations,(n,r)=>bf(n,r))}}class Sc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){He(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return tb}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Sc(e,n,r,s)}}/**
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
 */class mb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var ze,Te;function gb(t){switch(t){case $.OK:return me(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return me(15467,{code:t})}}function _b(t){if(t===void 0)return Ir("GRPC error has no .code"),$.UNKNOWN;switch(t){case ze.OK:return $.OK;case ze.CANCELLED:return $.CANCELLED;case ze.UNKNOWN:return $.UNKNOWN;case ze.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case ze.INTERNAL:return $.INTERNAL;case ze.UNAVAILABLE:return $.UNAVAILABLE;case ze.UNAUTHENTICATED:return $.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case ze.NOT_FOUND:return $.NOT_FOUND;case ze.ALREADY_EXISTS:return $.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return $.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case ze.ABORTED:return $.ABORTED;case ze.OUT_OF_RANGE:return $.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return $.UNIMPLEMENTED;case ze.DATA_LOSS:return $.DATA_LOSS;default:return me(39323,{code:t})}}(Te=ze||(ze={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new dc([4294967295,4294967295],0);class yb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Sl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vb(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Eb(t,e){return Sl(t,e.toTimestamp())}function Gr(t){return He(!!t,49232),Le.fromTimestamp(function(n){const r=br(n);return new Ye(r.seconds,r.nanos)}(t))}function Zm(t,e){return Rl(t,e).canonicalString()}function Rl(t,e){const n=function(s){return new Ke(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Tb(t){const e=Ke.fromString(t);return He(Pb(e),10190,{key:e.toString()}),e}function Cl(t,e){return Zm(t.databaseId,e.path)}function wb(t){const e=Tb(t);return e.length===4?Ke.emptyPath():bb(e)}function Ib(t){return new Ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function bb(t){return He(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Rf(t,e,n){return{name:Cl(t,e),fields:n.value.mapValue.fields}}function Ab(t,e){let n;if(e instanceof yi)n={update:Rf(t,e.key,e.value)};else if(e instanceof Ym)n={delete:Cl(t,e.key)};else if(e instanceof Cr)n={update:Rf(t,e.key,e.data),updateMask:Cb(e.fieldMask)};else{if(!(e instanceof db))return me(16599,{ft:e.type});n={verify:Cl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof ni)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof ri)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof si)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof xo)return{fieldPath:a.field.canonicalString(),increment:l.Re};throw me(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:Eb(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:me(27497)}(t,e.precondition)),n}function Sb(t,e){return t&&t.length>0?(He(e!==void 0,14353),t.map(n=>function(s,i){let a=s.updateTime?Gr(s.updateTime):Gr(i);return a.isEqual(Le.min())&&(a=Gr(i)),new ub(a,s.transformResults||[])}(n,e))):[]}function Rb(t){let e=wb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){He(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=eg(p);return g instanceof Zn&&Mm(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(P){return new Oo(Fr(P.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,yc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,w=p.values||[];return new ko(w,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,w=p.values||[];return new ko(w,g)}(n.endAt)),G0(e,s,a,i,l,"F",c,h)}function eg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Fr(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Fr(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Fr(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Fr(n.unaryFilter.field);return Xe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(Fr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zn.create(n.compositeFilter.filters.map(r=>eg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return me(1026)}}(n.compositeFilter.op))}(t):me(30097,{filter:t})}function Fr(t){return lt.fromServerFormat(t.fieldPath)}function Cb(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Pb(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class kb{constructor(e){this.wt=e}}function Ob(t){const e=Rb({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Al(e,e.limit,"L"):e}/**
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
 */class Db{constructor(){this.Cn=new xb}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(Yn.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class xb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct(Ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct(Ke.comparator)).toArray()}}/**
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
 */const Cf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},tg=41943040;class St{static withCacheSize(e){return new St(e,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */St.DEFAULT_COLLECTION_PERCENTILE=10,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,St.DEFAULT=new St(tg,St.DEFAULT_COLLECTION_PERCENTILE,St.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),St.DISABLED=new St(-1,0,0);/**
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
 */const Pf="LruGarbageCollector",Nb=1048576;function kf([t,e],[n,r]){const s=Ie(t,n);return s===0?Ie(e,r):s}class Vb{constructor(e){this.Er=e,this.buffer=new ct(kf),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();kf(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class Mb{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){Z(Pf,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){_i(n)?Z(Pf,"Ignoring IndexedDB error during garbage collection: ",n):await mc(n)}await this.mr(3e5)})}}class Lb{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(gc.le);const r=new Vb(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(Cf)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cf):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(h=Date.now(),Lr()<=_e.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function Fb(t,e){return new Lb(t,e)}/**
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
 */class Ub{constructor(){this.changes=new Rr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $b{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Bb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&js(r.mutation,s,Wt.empty(),Ye.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_t()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_t()){const s=pr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=Wi();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_t()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=Do();const a=Bs(),l=function(){return Bs()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Cr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),js(d.mutation,h,d.mutation.getFieldMask(),Ye.now())):a.set(h.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>a.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new $b(d,(p=a.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Bs();let s=new Ct((a,l)=>a-l),i=_t();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Wt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||_t()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=qm();d.forEach(g=>{if(!i.has(g)){const w=Jm(n.get(g),r.get(g));w!==null&&p.set(g,w),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,p))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return de.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):J0(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(pr());let l=ei,c=i;return a.next(h=>M.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?M.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,_t())).next(d=>({batchId:l,changes:Hm(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next(r=>{let s=Wi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=Wi();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const h=function(p,g){return new na(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,jt.newInvalidDocument(d)))});let l=Wi();return a.forEach((c,h)=>{const d=i.get(c);d!==void 0&&js(d.mutation,h,Wt.empty(),Ye.now()),bc(n,h)&&(l=l.insert(c,h))}),l})}}/**
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
 */class jb{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return M.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Gr(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:Ob(s.bundledQuery),readTime:Gr(s.readTime)}}(n)),M.resolve()}}/**
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
 */class Hb{constructor(){this.overlays=new Ct(de.comparator),this.Qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=pr(),i=n.length+1,a=new de(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ct((h,d)=>h-d);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=pr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=pr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return M.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new mb(n,r));let i=this.Qr.get(n);i===void 0&&(i=_t(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class qb{constructor(){this.sessionToken=cn.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Rc{constructor(){this.$r=new ct(Je.Ur),this.Kr=new ct(Je.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new Je(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new Je(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new de(new Ke([])),r=new Je(n,e),s=new Je(n,e+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new de(new Ke([])),r=new Je(n,e),s=new Je(n,e+1);let i=_t();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Je(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return de.comparator(e.key,n.key)||Ie(e.Zr,n.Zr)}static Wr(e,n){return Ie(e.Zr,n.Zr)||de.comparator(e.key,n.key)}}/**
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
 */class zb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new ct(Je.Ur)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new pb(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Xr=this.Xr.add(new Je(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,n){return M.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?_c:this.nr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),s=new Je(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],a=>{const l=this.ei(a.Zr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(Ie);return n.forEach(s=>{const i=new Je(s,0),a=new Je(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],l=>{r=r.add(l.Zr)})}),M.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;de.isDocumentKey(i)||(i=i.child(""));const a=new Je(new de(i),0);let l=new ct(Ie);return this.Xr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Zr)),!0)},a),M.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){He(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return M.forEach(n.mutations,s=>{const i=new Je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new Je(n,0),s=this.Xr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Wb{constructor(e){this.ii=e,this.docs=function(){return new Ct(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():jt.newInvalidDocument(n))}getEntries(e,n){let r=Do();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():jt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Do();const a=n.path,l=new de(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||A0(b0(d),r)<=0||(s.has(d.key)||bc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){me(9500)}si(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Kb(this)}getSize(e){return M.resolve(this.size)}}class Kb extends Ub{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class Gb{constructor(e){this.persistence=e,this.oi=new Rr(n=>wc(n),Ic),this.lastRemoteSnapshotVersion=Le.min(),this.highestTargetId=0,this._i=0,this.ai=new Rc,this.targetCount=0,this.ui=rs.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),M.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new rs(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Tr(n),M.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.ai.containsKey(n))}}/**
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
 */class ng{constructor(e,n){this.ci={},this.overlays={},this.li=new gc(0),this.hi=!1,this.hi=!0,this.Pi=new qb,this.referenceDelegate=e(this),this.Ti=new Gb(this),this.indexManager=new Db,this.remoteDocumentCache=function(s){return new Wb(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new kb(n),this.Ei=new jb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Hb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new zb(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new Qb(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return M.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class Qb extends R0{constructor(e){super(),this.currentSequenceNumber=e}}class Cc{constructor(e){this.persistence=e,this.Vi=new Rc,this.mi=null}static fi(e){return new Cc(e)}get gi(){if(this.mi)return this.mi;throw me(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.gi,r=>{const s=de.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,Le.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return M.or([()=>M.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class No{constructor(e,n){this.persistence=e,this.yi=new Rr(r=>k0(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Fb(this,n)}static fi(e,n){return new No(e,n)}di(){}Ai(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return M.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,a=>this.Dr(e,a,n).next(l=>{l||(r++,i.removeEntry(a,Le.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=oo(e.data.value)),n}Dr(e,n,r){return M.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Jb{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Xb{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return QE()?8:C0(vt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Ss(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new Jb;return this.bs(e,n,a).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,a,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(Lr()<=_e.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),M.resolve()):(Lr()<=_e.DEBUG&&Z("QueryEngine","Query:",Ss(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Lr()<=_e.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,yr(n))):M.resolve())}ws(e,n){if(wf(n))return M.resolve(null);let r=yr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Al(n,null,"F"),r=yr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=_t(...i);return this.ys.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.vs(n,l);return this.Cs(n,h,a,c.readTime)?this.ws(e,Al(n,null,"F")):this.Fs(e,h,n,c)}))})))}Ss(e,n,r,s){return wf(n)||s.isEqual(Le.min())?M.resolve(null):this.ys.getDocuments(e,r).next(i=>{const a=this.vs(n,i);return this.Cs(n,a,r,s)?M.resolve(null):(Lr()<=_e.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ss(n)),this.Fs(e,a,n,I0(s,ei)).next(l=>l))})}vs(e,n){let r=new ct(Y0(e));return n.forEach((s,i)=>{bc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,n,r){return Lr()<=_e.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Ss(n)),this.ys.getDocumentsMatchingQuery(e,n,Yn.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const Yb="LocalStore";class Zb{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Ct(Ie),this.Os=new Rr(i=>wc(i),Ic),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bb(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function eA(t,e,n,r){return new Zb(t,e,n,r)}async function rg(t,e){const n=xe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=_t();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({ks:h,removedBatchIds:a,addedBatchIds:l}))})})}function tA(t,e){const n=xe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,g=p.keys();let w=M.resolve();return g.forEach(P=>{w=w.next(()=>d.getEntry(c,P)).next(x=>{const L=h.docVersions.get(P);He(L!==null,48541),x.version.compareTo(L)<0&&(p.applyToRemoteDocument(x,h),x.isValidDocument()&&(x.setReadTime(h.commitVersion),d.addEntry(x)))})}),w.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=_t();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function nA(t){const e=xe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function rA(t,e){const n=xe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=_c),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Of{constructor(){this.activeTargetIds=sb()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class sA{constructor(){this.xo=new Of,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Of,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class iA{No(e){}shutdown(){}}/**
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
 */const Df="ConnectivityMonitor";class xf{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){Z(Df,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){Z(Df,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ki=null;function Pl(){return Ki===null?Ki=function(){return 268435456+Math.round(2147483648*Math.random())}():Ki++,"0x"+Ki.toString(16)}/**
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
 */const Wa="RestConnection",oA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class aA{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Co?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const a=Pl(),l=this.jo(e,n.toUriEncodedString());Z(Wa,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:h}=new URL(l),d=hi(h);return this.Jo(e,l,c,r,d).then(p=>(Z(Wa,`Received RPC '${e}' ${a}: `,p),p),p=>{throw ta(Wa,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,n,r,s,i,a){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ls}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=oA[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class lA{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const pt="WebChannelConnection";class cA extends aA{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=Pl();return new Promise((l,c)=>{const h=new _m;h.setWithCredentials(!0),h.listenOnce(ym.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case io.NO_ERROR:const p=h.getResponseJson();Z(pt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case io.TIMEOUT:Z(pt,`RPC '${e}' ${a} timed out`),c(new le($.DEADLINE_EXCEEDED,"Request time out"));break;case io.HTTP_ERROR:const g=h.getStatus();if(Z(pt,`RPC '${e}' ${a} failed with status:`,g,"response text:",h.getResponseText()),g>0){let w=h.getResponseJson();Array.isArray(w)&&(w=w[0]);const P=w==null?void 0:w.error;if(P&&P.status&&P.message){const x=function(z){const F=z.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(F)>=0?F:$.UNKNOWN}(P.status);c(new le(x,P.message))}else c(new le($.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new le($.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:a,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{Z(pt,`RPC '${e}' ${a} completed.`)}});const d=JSON.stringify(s);Z(pt,`RPC '${e}' ${a} sending request:`,s),h.send(n,"POST",d,r,15)})}T_(e,n,r){const s=Pl(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Tm(),l=Em(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");Z(pt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=a.createWebChannel(d,c);let g=!1,w=!1;const P=new lA({Zo:L=>{w?Z(pt,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(g||(Z(pt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Z(pt,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Xo:()=>p.close()}),x=(L,z,F)=>{L.listen(z,B=>{try{F(B)}catch(H){setTimeout(()=>{throw H},0)}})};return x(p,Cs.EventType.OPEN,()=>{w||(Z(pt,`RPC '${e}' stream ${s} transport opened.`),P.__())}),x(p,Cs.EventType.CLOSE,()=>{w||(w=!0,Z(pt,`RPC '${e}' stream ${s} transport closed`),P.u_())}),x(p,Cs.EventType.ERROR,L=>{w||(w=!0,ta(pt,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),P.u_(new le($.UNAVAILABLE,"The operation could not be completed")))}),x(p,Cs.EventType.MESSAGE,L=>{var z;if(!w){const F=L.data[0];He(!!F,16349);const B=F,H=(B==null?void 0:B.error)||((z=B[0])===null||z===void 0?void 0:z.error);if(H){Z(pt,`RPC '${e}' stream ${s} received error:`,H);const ce=H.status;let ae=function(_){const b=ze[_];if(b!==void 0)return _b(b)}(ce),A=H.message;ae===void 0&&(ae=$.INTERNAL,A="Unknown error status: "+ce+" with message "+H.message),w=!0,P.u_(new le(ae,A)),p.close()}else Z(pt,`RPC '${e}' stream ${s} received:`,F),P.c_(F)}}),x(l,vm.STAT_EVENT,L=>{L.stat===vl.PROXY?Z(pt,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===vl.NOPROXY&&Z(pt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{P.a_()},0),P}}function Ka(){return typeof document<"u"?document:null}/**
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
 */function ia(t){return new yb(t,!0)}/**
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
 */class sg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const Nf="PersistentStream";class uA{constructor(e,n,r,s,i,a,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new sg(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Ir(n.toString()),Ir("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===n&&this.K_(r,s)},r=>{e(()=>{const s=new le($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return Z(Nf,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(Z(Nf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hA extends uA{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return He(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,He(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){He(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=Sb(e.writeResults,e.commitTime),r=Gr(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=Ib(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ab(this.serializer,r))};this.L_(n)}}/**
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
 */class fA{}class dA extends fA{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new le($.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(e,Rl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new le($.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(e,Rl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new le($.UNKNOWN,a.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class pA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const vi="RemoteStore";class mA{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(a=>{r.enqueueAndForget(async()=>{Ti(this)&&(Z(vi,"Restarting streams for network reachability change."),await async function(c){const h=xe(c);h.Ta.add(4),await Ei(h),h.da.set("Unknown"),h.Ta.delete(4),await oa(h)}(this))})}),this.da=new pA(r,s)}}async function oa(t){if(Ti(t))for(const e of t.Ia)await e(!0)}async function Ei(t){for(const e of t.Ia)await e(!1)}function Ti(t){return xe(t).Ta.size===0}async function ig(t,e,n){if(!_i(e))throw e;t.Ta.add(1),await Ei(t),t.da.set("Offline"),n||(n=()=>nA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(vi,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await oa(t)})}function og(t,e){return e().catch(n=>ig(t,n,e))}async function aa(t){const e=xe(t),n=er(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:_c;for(;gA(e);)try{const s=await rA(e.localStore,r);if(s===null){e.ha.length===0&&n.N_();break}r=s.batchId,_A(e,s)}catch(s){await ig(e,s)}ag(e)&&lg(e)}function gA(t){return Ti(t)&&t.ha.length<10}function _A(t,e){t.ha.push(e);const n=er(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function ag(t){return Ti(t)&&!er(t).F_()&&t.ha.length>0}function lg(t){er(t).start()}async function yA(t){er(t).ta()}async function vA(t){const e=er(t);for(const n of t.ha)e.Z_(n.mutations)}async function EA(t,e,n){const r=t.ha.shift(),s=Sc.from(r,e,n);await og(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await aa(t)}async function TA(t,e){e&&er(t).Y_&&await async function(r,s){if(function(a){return gb(a)&&a!==$.ABORTED}(s.code)){const i=r.ha.shift();er(r).O_(),await og(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await aa(r)}}(t,e),ag(t)&&lg(t)}async function Vf(t,e){const n=xe(t);n.asyncQueue.verifyOperationInProgress(),Z(vi,"RemoteStore received new credentials");const r=Ti(n);n.Ta.add(3),await Ei(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await oa(n)}async function wA(t,e){const n=xe(t);e?(n.Ta.delete(2),await oa(n)):e||(n.Ta.add(2),await Ei(n),n.da.set("Unknown"))}function er(t){return t.Va||(t.Va=function(n,r,s){const i=xe(n);return i.ra(),new hA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:yA.bind(null,t),i_:TA.bind(null,t),X_:vA.bind(null,t),ea:EA.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await aa(t)):(await t.Va.stop(),t.ha.length>0&&(Z(vi,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
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
 */class kc{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _r,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new kc(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function cg(t,e){if(Ir("AsyncQueue",`${e}: ${t}`),_i(t))return new le($.UNAVAILABLE,`${e}: ${t}`);throw t}class IA{constructor(){this.queries=Mf(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const s=xe(n),i=s.queries;s.queries=Mf(),i.forEach((a,l)=>{for(const c of l.ya)c.onError(r)})})(this,new le($.ABORTED,"Firestore shutting down"))}}function Mf(){return new Rr(t=>Bm(t),$m)}function bA(t){t.ba.forEach(e=>{e.next()})}var Lf,Ff;(Ff=Lf||(Lf={})).Ca="default",Ff.Cache="cache";const AA="SyncEngine";class SA{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.au={},this.uu=new Rr(l=>Bm(l),$m),this.cu=new Map,this.lu=new Set,this.hu=new Ct(de.comparator),this.Pu=new Map,this.Tu=new Rc,this.Iu={},this.Eu=new Map,this.du=rs.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function RA(t,e,n){const r=OA(t);try{const s=await function(a,l){const c=xe(a),h=Ye.now(),d=l.reduce((w,P)=>w.add(P.key),_t());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let P=Do(),x=_t();return c.Bs.getEntries(w,d).next(L=>{P=L,P.forEach((z,F)=>{F.isValidDocument()||(x=x.add(z))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,P)).next(L=>{p=L;const z=[];for(const F of l){const B=fb(F,p.get(F.key).overlayedDocument);B!=null&&z.push(new Cr(F.key,B,xm(B.value.mapValue),Tn.exists(!0)))}return c.mutationQueue.addMutationBatch(w,h,z,l)}).next(L=>{g=L;const z=L.applyToLocalDocumentSet(p,x);return c.documentOverlayCache.saveOverlays(w,L.batchId,z)})}).then(()=>({batchId:g.batchId,changes:Hm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let h=a.Iu[a.currentUser.toKey()];h||(h=new Ct(Ie)),h=h.insert(l,c),a.Iu[a.currentUser.toKey()]=h}(r,s.batchId,n),await la(r,s.changes),await aa(r.remoteStore)}catch(s){const i=cg(s,"Failed to persist write");n.reject(i)}}function Uf(t,e,n){const r=xe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.uu.forEach((i,a)=>{const l=a.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=xe(a);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const g of p.ya)g.Da(l)&&(h=!0)}),h&&bA(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CA(t,e){const n=xe(t),r=e.batch.batchId;try{const s=await tA(n.localStore,e);hg(n,r,null),ug(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await la(n,s)}catch(s){await mc(s)}}async function PA(t,e,n){const r=xe(t);try{const s=await function(a,l){const c=xe(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(He(p!==null,37113),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);hg(r,e,n),ug(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await la(r,s)}catch(s){await mc(s)}}function ug(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function hg(t,e,n){const r=xe(t);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}async function la(t,e,n){const r=xe(t),s=[],i=[],a=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{a.push(r.Ru(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=void 0)===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Pc.Rs(c.targetId,h);i.push(p)}}))}),await Promise.all(a),r.au.j_(s),await async function(c,h){const d=xe(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(h,g=>M.forEach(g.ds,w=>d.persistence.referenceDelegate.addReference(p,g.targetId,w)).next(()=>M.forEach(g.As,w=>d.persistence.referenceDelegate.removeReference(p,g.targetId,w)))))}catch(p){if(!_i(p))throw p;Z(Yb,"Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const w=d.xs.get(g),P=w.snapshotVersion,x=w.withLastLimboFreeSnapshotVersion(P);d.xs=d.xs.insert(g,x)}}}(r.localStore,i))}async function kA(t,e){const n=xe(t);if(!n.currentUser.isEqual(e)){Z(AA,"User change. New user:",e.toKey());const r=await rg(n.localStore,e);n.currentUser=e,function(i,a){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new le($.CANCELLED,a))})}),i.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await la(n,r.ks)}}function OA(t){const e=xe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PA.bind(null,e),e}class Vo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ia(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return eA(this.persistence,new Xb,e.initialUser,this.serializer)}yu(e){return new ng(Cc.fi,this.serializer)}pu(e){return new sA}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vo.provider={build:()=>new Vo};class DA extends Vo{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){He(this.persistence.referenceDelegate instanceof No,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Mb(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?St.withCacheSize(this.cacheSizeBytes):St.DEFAULT;return new ng(r=>No.fi(r,n),this.serializer)}}class kl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Uf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kA.bind(null,this.syncEngine),await wA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new IA}()}createDatastore(e){const n=ia(e.databaseInfo.databaseId),r=function(i){return new cA(i)}(e.databaseInfo);return function(i,a,l,c){return new dA(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new mA(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Uf(this.syncEngine,n,0),function(){return xf.C()?new xf:new iA}())}createSyncEngine(e,n){return function(s,i,a,l,c,h,d){const p=new SA(s,i,a,l,c,h);return d&&(p.Au=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=xe(s);Z(vi,"RemoteStore shutting down."),i.Ta.add(5),await Ei(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}kl.provider={build:()=>new kl};/**
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
 */const tr="FirestoreClient";class xA{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=mt.UNAUTHENTICATED,this.clientId=bm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Z(tr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Z(tr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _r;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=cg(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ga(t,e){t.asyncQueue.verifyOperationInProgress(),Z(tr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await rg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $f(t,e){t.asyncQueue.verifyOperationInProgress();const n=await NA(t);Z(tr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Vf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Vf(e.remoteStore,s)),t._onlineComponents=e}async function NA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(tr,"Using user provided OfflineComponentProvider");try{await Ga(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ta("Error using user provided cache. Falling back to memory cache: "+n),await Ga(t,new Vo)}}else Z(tr,"Using default OfflineComponentProvider"),await Ga(t,new DA(void 0));return t._offlineComponents}async function VA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(tr,"Using user provided OnlineComponentProvider"),await $f(t,t._uninitializedComponentsProvider._online)):(Z(tr,"Using default OnlineComponentProvider"),await $f(t,new kl))),t._onlineComponents}function MA(t){return VA(t).then(e=>e.syncEngine)}/**
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
 */function fg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */function LA(t,e,n){if(!n)throw new le($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function FA(t,e,n,r){if(e===!0&&r===!0)throw new le($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jf(t){if(!de.isDocumentKey(t))throw new le($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Oc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":me(12329,{type:typeof t})}function Ol(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new le($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oc(t);throw new le($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const dg="firestore.googleapis.com",Hf=!0;class qf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new le($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=dg,this.ssl=Hf}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Hf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=tg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Nb)throw new le($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}FA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new le($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Dc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new qf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new le($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new le($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new qf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new d0;switch(r.type){case"firstParty":return new _0(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new le($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Bf.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Bf.delete(n),r.terminate())}(this),Promise.resolve()}}function UA(t,e,n,r={}){var s;t=Ol(t,Dc);const i=hi(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(Dp(`https://${c}`),xp("Firestore",!0)),a.host!==dg&&a.host!==c&&ta("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!vr(h,l)&&(t._setSettings(h),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=mt.MOCK_USER;else{d=$E(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new le($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new mt(g)}t._authCredentials=new p0(new Im(d,p))}}/**
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
 */class xc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xc(this.firestore,e,this._query)}}class wn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ii(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wn(this.firestore,e,this._key)}}class ii extends xc{constructor(e,n,r){super(e,n,Q0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wn(this.firestore,null,new de(e))}withConverter(e){return new ii(this.firestore,e,this._path)}}function $A(t,e,...n){if(t=ln(t),arguments.length===1&&(e=bm.newId()),LA("doc","path",e),t instanceof Dc){const r=Ke.fromString(e,...n);return jf(r),new wn(t,null,new de(r))}{if(!(t instanceof wn||t instanceof ii))throw new le($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ke.fromString(e,...n));return jf(r),new wn(t.firestore,t instanceof ii?t.converter:null,new de(r))}}/**
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
 */const zf="AsyncQueue";class Wf{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new sg(this,"async_queue_retry"),this.ec=()=>{const r=Ka();r&&Z(zf,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const n=Ka();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=Ka();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new _r;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!_i(e))throw e;Z(zf,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Ir("INTERNAL UNHANDLED ERROR: ",Kf(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=n,n}enqueueAfterDelay(e,n,r){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const s=kc.createAndSchedule(this,e,n,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&me(47125,{_c:Kf(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function Kf(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class pg extends Dc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Wf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Wf(e),this._firestoreClient=void 0,await e}}}function BA(t,e){const n=typeof t=="object"?t:Lp(),r=typeof t=="string"?t:Co,s=nc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=FE("firestore");i&&UA(s,...i)}return s}function jA(t){if(t._terminated)throw new le($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||HA(t),t._firestoreClient}function HA(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new N0(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,fg(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new xA(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class oi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new oi(cn.fromBase64String(e))}catch(n){throw new le($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new oi(cn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class mg{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Nc{constructor(e){this._methodName=e}}/**
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
 */class gg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Ie(this._lat,e._lat)||Ie(this._long,e._long)}}/**
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
 */class _g{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const qA=/^__.*__$/;class zA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new yi(e,this.data,n,this.fieldTransforms)}}function yg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{hc:t})}}class Vc{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new Vc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Mo(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(yg(this.hc)&&qA.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class WA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ia(e)}gc(e,n,r,s=!1){return new Vc({hc:e,methodName:n,fc:r,path:lt.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function KA(t){const e=t._freezeSettings(),n=ia(t._databaseId);return new WA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function GA(t,e,n,r,s,i={}){const a=t.gc(i.merge||i.mergeFields?2:0,e,n,s);wg("Data must be an object, but it was:",a,r);const l=Eg(r,a);let c,h;if(i.merge)c=new Wt(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=QA(e,p,n);if(!a.contains(g))throw new le($.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);YA(d,g)||d.push(g)}c=new Wt(d),h=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=a.fieldTransforms;return new zA(new qt(l),c,h)}class Mc extends Nc{_toFieldTransform(e){return new lb(e.path,new ni)}isEqual(e){return e instanceof Mc}}function vg(t,e){if(Tg(t=ln(t)))return wg("Unsupported field value:",e,t),Eg(t,e);if(t instanceof Nc)return function(r,s){if(!yg(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=vg(l,s.Rc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ln(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ib(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ye.fromDate(r);return{timestampValue:Sl(s.serializer,i)}}if(r instanceof Ye){const i=new Ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Sl(s.serializer,i)}}if(r instanceof gg)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof oi)return{bytesValue:vb(s.serializer,r._byteString)};if(r instanceof wn){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Vc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _g)return function(a,l){return{mapValue:{fields:{[Om]:{stringValue:Dm},[Tl]:{arrayValue:{values:a.toArray().map(h=>{if(typeof h!="number")throw l.Vc("VectorValues must only contain numeric values.");return Ac(l.serializer,h)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${Oc(r)}`)}(t,e)}function Eg(t,e){const n={};return Sm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(r,s)=>{const i=vg(s,e.Ic(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Tg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ye||t instanceof gg||t instanceof oi||t instanceof wn||t instanceof Nc||t instanceof _g)}function wg(t,e,n){if(!Tg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Oc(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function QA(t,e,n){if((e=ln(e))instanceof mg)return e._internalPath;if(typeof e=="string")return XA(t,e);throw Mo("Field path arguments must be of type string or ",t,!1,void 0,n)}const JA=new RegExp("[~\\*/\\[\\]]");function XA(t,e,n){if(e.search(JA)>=0)throw Mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new mg(...e.split("."))._internalPath}catch{throw Mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Mo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new le($.INVALID_ARGUMENT,l+t+c)}function YA(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function ZA(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function eS(t,e,n){t=Ol(t,wn);const r=Ol(t.firestore,pg),s=ZA(t.converter,e);return tS(r,[GA(KA(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Tn.none())])}function tS(t,e){return function(r,s){const i=new _r;return r.asyncQueue.enqueueAndForget(async()=>RA(await MA(r),s,i)),i.promise}(jA(t),e)}function nS(){return new Mc("serverTimestamp")}(function(e,n=!0){(function(s){ls=s})(os),Xr(new Er("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new pg(new m0(r.getProvider("auth-internal")),new y0(a,r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new le($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Po(h.options.projectId,d)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Qn(af,lf,e),Qn(af,lf,"esm2017")})();const rS={apiKey:"AIzaSyC_acZxWWtGDDFPdxBaa2TR6JkQcw0k0Fk",authDomain:"afp-site-c1bd9.firebaseapp.com",projectId:"afp-site-c1bd9",storageBucket:"afp-site-c1bd9.firebasestorage.app",messagingSenderId:"533749269819",appId:"1:533749269819:web:47c5dbe921ef3aae83e31e",measurementId:"G-W9TQ1EE3PB"},sS=Mp(rS),iS=BA(sS);h0();const oS={class:"footer"},aS={class:"footer-bottom"},lS={class:"footer-nav"},cS={class:"subscribe-box"},uS={key:0,class:"subscribe-message"},hS={class:"footer-copy"},fS={__name:"Footer",setup(t){const e=rn(""),n=rn(""),r=async()=>{try{const s=e.value.trim().toLowerCase();if(!s){n.value="Please enter a valid email.";return}await eS($A(iS,"mailingList",s),{email:s,subscribedAt:nS()}),n.value="Thank you for subscribing!",e.value=""}catch(s){console.error("Error adding email:",s),n.value="An error occurred. Please try again later."}};return(s,i)=>(he(),pe("footer",oS,[j("div",aS,[j("nav",lS,[re(ye(We),{to:"/"},{default:Be(()=>i[1]||(i[1]=[Me("Home")])),_:1,__:[1]}),re(ye(We),{to:"/about"},{default:Be(()=>i[2]||(i[2]=[Me("About")])),_:1,__:[2]}),re(ye(We),{to:"/events"},{default:Be(()=>i[3]||(i[3]=[Me("Events")])),_:1,__:[3]}),re(ye(We),{to:"/contact"},{default:Be(()=>i[4]||(i[4]=[Me("Contact")])),_:1,__:[4]})]),j("div",cS,[i[6]||(i[6]=j("h3",null,"Join our mailing list",-1)),j("form",{onSubmit:mv(r,["prevent"])},[kd(j("input",{"onUpdate:modelValue":i[0]||(i[0]=a=>e.value=a),type:"email",placeholder:"Enter your email",required:"",class:"email-input"},null,512),[[fv,e.value]]),i[5]||(i[5]=j("button",{type:"submit",class:"subscribe-button"},"Subscribe",-1))],32),n.value?(he(),pe("p",uS,we(n.value),1)):Ht("",!0)]),j("p",hS," © "+we(new Date().getFullYear())+" Association of Family Psychiatrists. All rights reserved. ",1)])]))}},dS=Qe(fS,[["__scopeId","data-v-0f1f37e5"]]),pS={class:"layout"},mS={class:"page-content"},gS={__name:"App",setup(t){return(e,n)=>(he(),pe(ot,null,[j("div",pS,[re(PE),j("main",mS,[re(ye(Ap))])]),re(dS)],64))}},_S=Qe(gS,[["__scopeId","data-v-aa0b9fe9"]]),yS="modulepreload",vS=function(t){return"/site/"+t},Gf={},Qf=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(h){return Promise.all(h.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(n.map(h=>{if(h=vS(h),h in Gf)return;Gf[h]=!0;const d=h.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const g=document.createElement("link");if(g.rel=d?"stylesheet":yS,d||(g.as="script"),g.crossOrigin="",g.href=h,c&&g.setAttribute("nonce",c),document.head.appendChild(g),d)return new Promise((w,P)=>{g.addEventListener("load",w),g.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},ES="/site/assets/afp-logo-DTm74N-G.png",TS={class:"featured-event"},wS=["src"],IS={class:"event-details animate-right"},bS={class:"event-title"},AS={class:"event-meta"},SS={class:"event-description"},RS={__name:"FeaturedEvent",props:{title:String,date:String,location:String,description:String,image:String,link:String},setup(t){return(e,n)=>(he(),pe("section",TS,[j("img",{src:t.image,alt:"Event image",class:"event-image animate-left"},null,8,wS),j("div",IS,[j("h2",bS,we(t.title),1),j("p",AS,we(t.date)+" • "+we(t.location),1),j("p",SS,we(t.description),1),re(ye(We),{to:t.link,class:"cta-button"},{default:Be(()=>n[0]||(n[0]=[Me("Sign Up")])),_:1,__:[0]},8,["to"])])]))}},CS=Qe(RS,[["__scopeId","data-v-7e1683d1"]]),PS={class:"card"},kS=["src"],OS={class:"card-content"},DS={class:"card-title"},xS={class:"card-subtitle"},NS={key:0,class:"card-details"},VS={__name:"Card",props:{image:{type:String,default:""},title:String,subtitle:String,details:String},setup(t){const e=rn(!1),n=rn(!0);return(r,s)=>(he(),pe("div",PS,[n.value?(he(),pe("img",{key:0,src:t.image,alt:"Card image",class:"card-image",onError:s[0]||(s[0]=i=>n.value=!1)},null,40,kS)):Ht("",!0),j("div",OS,[j("h3",DS,we(t.title),1),j("p",xS,we(t.subtitle),1),t.details?(he(),pe("button",{key:0,onClick:s[1]||(s[1]=i=>e.value=!e.value),class:"cta-button"},we(e.value?"Hide":"Learn More"),1)):Ht("",!0),re(fp,{name:"fade"},{default:Be(()=>[e.value?(he(),pe("p",NS,we(t.details),1)):Ht("",!0)]),_:1})])]))}},MS=Qe(VS,[["__scopeId","data-v-294fdb69"]]),LS={class:"card-grid-section"},FS={class:"grid-title"},US={class:"card-grid"},$S={__name:"CardGrid",props:{title:{type:String,default:"Featured Events"},cards:{type:Array,required:!0}},setup(t){return(e,n)=>(he(),pe("section",LS,[j("h2",FS,we(t.title),1),j("div",US,[(he(!0),pe(ot,null,is(t.cards,(r,s)=>(he(),li(MS,ci({key:s},{ref_for:!0},r),null,16))),128))])]))}},Dl=Qe($S,[["__scopeId","data-v-bc65c2d2"]]),BS={class:"stats-banner"},jS={class:"stat-value"},HS={class:"stat-label"},qS={class:"stat-desc"},zS={__name:"StatsBanner",props:{stats:{type:Array,required:!0}},setup(t){return(e,n)=>(he(),pe("section",BS,[(he(!0),pe(ot,null,is(t.stats,(r,s)=>(he(),pe("div",{key:s,class:"stat-block",style:ss({animationDelay:`${s*.2}s`})},[j("div",jS,we(r.value),1),j("div",HS,we(r.label),1),j("div",qS,we(r.description),1)],4))),128))]))}},WS=Qe(zS,[["__scopeId","data-v-3828056b"]]),KS={class:"article-card"},GS=["src","alt"],QS={class:"content"},JS={class:"title"},XS=["href"],YS={__name:"ArticleCard",props:{title:String,thumbnail:String,url:String},setup(t){return(e,n)=>(he(),pe("div",KS,[j("img",{src:t.thumbnail,alt:t.title,class:"thumbnail"},null,8,GS),j("div",QS,[j("h3",JS,we(t.title),1),j("a",{href:t.url,target:"_blank",rel:"noopener",class:"read-button"},"Read Article",8,XS)])]))}},ZS=Qe(YS,[["__scopeId","data-v-08790d9a"]]),e1={class:"article-grid-section"},t1={class:"grid-title"},n1={class:"article-grid"},r1={__name:"ArticleGrid",props:{title:String,articles:Array},setup(t){return(e,n)=>(he(),pe("section",e1,[j("h2",t1,we(t.title),1),j("div",n1,[(he(!0),pe(ot,null,is(t.articles,(r,s)=>(he(),li(ZS,ci({key:s},{ref_for:!0},r),null,16))),128))])]))}},s1=Qe(r1,[["__scopeId","data-v-748ddf75"]]),i1=["id"],o1=["src","alt"],a1={class:"event-content"},l1={class:"event-title"},c1={class:"event-datetime"},u1={key:0},h1={key:0,class:"event-location"},f1={class:"event-description"},d1=["href"],p1={key:2,class:"schedule"},m1={class:"schedule-time"},g1={class:"schedule-title"},_1={__name:"Event",props:{id:String,title:String,date:String,time:String,location:String,description:String,image:String,rsvpLink:String,link:String,linkLabel:{type:String,default:"RSVP / Access"},schedule:{type:Array,default:()=>[]}},setup(t){const e=t,n=Lt(()=>new Date(e.date).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})),r={initial:{opacity:0,y:30},enter:{opacity:1,y:0,transition:{duration:.6}}};return(s,i)=>{const a=Y_("motion");return kd((he(),pe("article",{id:t.id,class:"event-card animate-fade-slide"},[t.image?(he(),pe("img",{key:0,src:t.image,alt:t.title,class:"event-image"},null,8,o1)):Ht("",!0),j("div",a1,[j("h2",l1,we(t.title),1),j("p",c1,[Me(we(n.value),1),t.time?(he(),pe("span",u1," • "+we(t.time),1)):Ht("",!0)]),t.location?(he(),pe("p",h1,we(t.location),1)):Ht("",!0),j("p",f1,we(t.description),1),t.rsvpLink||t.link?(he(),pe("a",{key:1,href:t.rsvpLink||t.link,target:"_blank",rel:"noopener",class:"event-button"},we(t.linkLabel),9,d1)):Ht("",!0),t.schedule&&t.schedule.length?(he(),pe("div",p1,[i[0]||(i[0]=j("h3",null,"Event Schedule",-1)),j("ul",null,[(he(!0),pe(ot,null,is(t.schedule,(l,c)=>(he(),pe("li",{key:c,class:"schedule-item"},[j("span",m1,we(l.time),1),j("span",g1,we(l.title),1)]))),128))])])):Ht("",!0)])],8,i1)),[[a,r]])}}},Ig=Qe(_1,[["__scopeId","data-v-1c21524d"]]),y1={class:"publication-card"},v1={class:"title"},E1={class:"authors"},T1={class:"summary"},w1=["href"],I1={__name:"PublicationCard",props:{title:String,authors:String,summary:String,url:String},setup(t){return(e,n)=>(he(),pe("div",y1,[j("h3",v1,we(t.title),1),j("p",E1,[n[0]||(n[0]=j("strong",null,"Authors:",-1)),Me(" "+we(t.authors.join(", ")),1)]),j("p",T1,we(t.summary),1),j("a",{href:t.url,target:"_blank",rel:"noopener",class:"view-button"}," View Publication ",8,w1)]))}},b1=Qe(I1,[["__scopeId","data-v-b6dcf581"]]),A1={title:"Featured Event",date:"October 12, 2025",location:"San Francisco, CA",description:"Ex: Registration has opened for the annual AFP Conference. This component can be used to display an event, with an image and description",image:"https://media.istockphoto.com/id/1417699524/photo/group-of-people-at-music-concert.jpg?s=2048x2048&w=is&k=20&c=ry_TiyFeGk5F03WDdcTE9lnx25PvIIUvKCl0uQHyFa0=",link:"/events#conference"},S1=[{image:"https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=2048x2048&w=is&k=20&c=bUHQJBt4Nbp0IEngDcXMMQteAnGi7fz1WpEuq3zLrOI=",title:"Guest Speaker",subtitle:"Live event • October 2025",details:"With some additional information here"},{image:"https://media.istockphoto.com/id/1411002384/photo/nurses-meeting.jpg?s=2048x2048&w=is&k=20&c=M5E3-J6IVCX6cvVBGyfedmTXEPjedRxyE2NZMkdv9hM=",title:"Research Symposium",subtitle:"Hybrid • January 2026",details:"Join psychiatrists and researchers discussing the latest in clinical family practice."},{image:"https://media.istockphoto.com/id/1783743772/photo/female-speaker-giving-a-presentation-during-business-seminar-at-convention-center.jpg?s=2048x2048&w=is&k=20&c=h7aIvTLP5PhWfrp54V_yUhtoD1cZqqwauSmqMAsbnyw=",title:"Annual AFP Conference",subtitle:"In-Person • July 2026",details:"Our flagship event featuring keynote speakers, panels, and networking opportunities."},{image:"https://media.istockphoto.com/id/1387143441/photo/shot-of-a-family-meeting-with-a-therapist.jpg?s=2048x2048&w=is&k=20&c=_nNijdSHxifcPAKvYZVWpnQu_HSrYLo9kveHu75LElk=",title:"Family Therapy Workshop",subtitle:"Live event • October 2025",details:"A hands-on workshop for professionals focused on family systems and communication."}],R1=[{value:"1,200+",label:"Members",description:"This is a description for this statistic"},{value:"$250K",label:"Funds Raised",description:"This is a description for this statistic"},{value:"12",label:"Committees",description:"This is a description for this statistic"}],C1=[{title:"Coping With Problematic Effects of Social Media",thumbnail:"https://images.squarespace-cdn.com/content/v1/6267042fe703aa417b69ec37/ff56a26d-ca75-4256-8854-6ddba48c6fc5/Teenage+girl+using+smart+phone+at+home+stock+photo.jpg?format=2500w",url:"https://www.psychologytoday.com/us/blog/psychiatrys-think-tank/202501/coping-with-problematic-effects-of-social-media"},{title:"Community Support Strategies",thumbnail:"https://media.istockphoto.com/id/1465173464/photo/business-network-concept-teamwork-partnership-human-resources.jpg?s=2048x2048&w=is&k=20&c=45hL9SREGO-8XjTxsmFy1Iph1lHSxEqD-MTkVlodM_o="},{title:"Trauma-Informed Care",thumbnail:"https://media.istockphoto.com/id/2206797715/photo/cubes-form-the-expression-ptsd.jpg?s=2048x2048&w=is&k=20&c=w4i03qsp8ue3YYBBhSuqcaAwzhfmyWGuEBmA2QkN2Tg="},{title:"Placeholder Article",thumbnail:"https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=2048x2048&w=is&k=20&c=dFWJz1EFJt7Tq2lA-hgTpSW119YywTWtS4EwU3fpKrE="}],P1=[{title:"Janice Cho, MD"},{title:"Sarah Faitell, DO"},{title:"Eileen Glocer, MD"},{title:"Hannah Goddard, DO"},{title:"Jatin Julakanti, MD"},{title:"Hannah Leo, MD"},{title:"Kaajal Patel Tan, DO"},{title:"Michelle Prakash, MD"},{title:"Pallavi Tatapudy, MD"},{title:"Richard Seeber II, MD"},{title:"Alfonso Vera Jr, MD"}],k1={title:"2025 Annual Family Psychiatry Conference",date:"September 21, 2025",time:"9:00 AM – 4:00 PM PT",description:"Join us for the 2025 Annual Conference, featuring leading experts in family psychiatry. Engage in keynotes, panels, and networking opportunities.",link:"https://example.com/conference-recording",linkLabel:"Join Live / Watch Recording",schedule:[{time:"9:00 AM",title:"Opening Remarks & Keynote"},{time:"10:30 AM",title:"Panel: Innovations in Family Therapy"},{time:"12:00 PM",title:"Lunch Break"},{time:"1:00 PM",title:"Workshop: Integrating Family Care in Psychiatry"},{time:"2:30 PM",title:"Research Presentations"},{time:"3:30 PM",title:"Closing Discussion & Networking"}]},O1=[{title:"Helping Couples and Families Navigate Illness and Disability",summary:"John Rolland’s new book presents an integrated approach for supporting couples and families dealing with serious illness and disability.",url:"https://example.com/research-publication",authors:["John Rolland","John Doe"]},{title:"Lisa Dixon Appointed Editor in Chief of Psychiatric Services",summary:"Lisa Dixon is now the Editor in Chief of Psychiatric Services, bringing her extensive expertise in family psychiatry and community mental health.",url:"https://example.com/research-publication",authors:["Lisa Dixon"]},{title:"Recent Articles of Interest to Our Members",summary:"A curated list of recent publications and articles that provide valuable insights and advancements in the field of family psychiatry.",url:"https://example.com/research-publication",authors:["AFP Editorial Board"]}],D1={class:"home"},x1={class:"about"},N1={class:"conference-and-publications"},V1={class:"conference-column"},M1={class:"publications-column"},L1={__name:"HomeView",setup(t){return(e,n)=>(he(),pe("section",D1,[n[4]||(n[4]=Py('<div class="intro" data-v-3a681bd0><div class="logo-column" data-v-3a681bd0><img src="'+ES+'" alt="AFP Logo" class="logo-img" data-v-3a681bd0></div><div class="welcome-column" data-v-3a681bd0><h1 class="welcome-title" data-v-3a681bd0>Welcome to the Association of Family Psychiatrists</h1><p class="welcome-subtitle" data-v-3a681bd0> Promoting mental wellness and supporting family psychiatry through education, advocacy, and community. </p></div></div>',1)),j("div",x1,[n[1]||(n[1]=j("h2",null,"About Us",-1)),n[2]||(n[2]=j("p",null," The Association of Family Psychiatrists is dedicated to advancing the field of family mental health by fostering professional development, sharing best practices, and connecting practitioners across the country. ",-1)),re(ye(We),{to:"/about",class:"cta-button"},{default:Be(()=>n[0]||(n[0]=[Me("Learn More")])),_:1,__:[0]})]),re(CS,ku(il(ye(A1))),null,16),j("div",N1,[j("div",V1,[re(Ig,ku(il(ye(k1))),null,16)]),j("div",M1,[n[3]||(n[3]=j("h2",null,"Recent Publications",-1)),(he(!0),pe(ot,null,is(ye(O1),(r,s)=>(he(),li(b1,ci({key:s},{ref_for:!0},r),null,16))),128))])]),re(Dl,{title:"Upcoming Programs",cards:ye(S1)},null,8,["cards"]),re(WS,{stats:ye(R1)},null,8,["stats"]),re(Dl,{title:"2024 Winners of our Annual Award for Excellence in Family Care",cards:ye(P1)},null,8,["cards"]),re(s1,{title:"Latest Articles",articles:ye(C1)},null,8,["articles"])]))}},F1=Qe(L1,[["__scopeId","data-v-3a681bd0"]]),U1={class:"overlay animate-fade-slide"},$1={class:"title"},B1={class:"subtitle"},j1={__name:"Hero",props:{title:String,subtitle:String,image:String},setup(t){return(e,n)=>(he(),pe("section",{class:"hero",style:ss({backgroundImage:`url(${t.image})`})},[j("div",U1,[j("h1",$1,we(t.title),1),j("p",B1,we(t.subtitle),1)])],4))}},H1=Qe(j1,[["__scopeId","data-v-e9e9ade2"]]),q1={class:"about-page"},z1={class:"intro"},W1={__name:"AboutView",setup(t){return(e,n)=>(he(),pe("div",q1,[j("section",z1,[re(H1,{title:"Welcome to the Association of Family Psychiatrists",subtitle:"Promoting mental wellness and supporting family psychiatry through education, advocacy, and community.",image:"https://images.squarespace-cdn.com/content/v1/5748cc56746fb940f105bd1c/22364a6b-02db-4f89-8840-8ad7de5d6682/family+therapy+pic.jpg"}),n[0]||(n[0]=j("h1",null,"About the Association",-1)),n[1]||(n[1]=j("p",null," The Association of Family Psychiatrists is committed to advancing the field of family mental health by fostering collaboration, research, education, and advocacy. ",-1))]),n[2]||(n[2]=j("section",{class:"mission"},[j("h2",null,"Our Mission"),j("p",null," We strive to support psychiatrists and mental health professionals who work with families, providing resources, training, and a professional network to promote mental wellness at every stage of life. ")],-1)),n[3]||(n[3]=j("section",{class:"vision"},[j("h2",null,"Our Vision"),j("p",null," A world where every family has access to compassionate, evidence-based psychiatric care. ")],-1))]))}},K1=Qe(W1,[["__scopeId","data-v-31b22870"]]),G1={class:"info-section"},Q1={class:"heading"},J1={key:0,class:"subheading"},X1={class:"description"},Y1={__name:"InformationSection",props:{heading:String,subheading:String,description:String,link:String},setup(t){return(e,n)=>{const r=J_("RouterLink");return he(),pe("section",G1,[j("h2",Q1,we(t.heading),1),t.subheading?(he(),pe("h3",J1,we(t.subheading),1)):Ht("",!0),j("p",X1,we(t.description),1),re(r,{to:t.link,class:"read-more"},{default:Be(()=>n[0]||(n[0]=[Me("Read More")])),_:1,__:[0]},8,["to"])])}}},Gi=Qe(Y1,[["__scopeId","data-v-af70b806"]]),Z1={class:"resources"},eR={__name:"ResourcesView",setup(t){return(e,n)=>(he(),pe("section",Z1,[n[0]||(n[0]=j("h1",{class:"page-title animate-fade-slide"},"Resources",-1)),re(Gi,{class:"animate-fade-slide",heading:"Our Listserv",subheading:"Join the discussion",description:"Visit the discussion group of the Association of Family Psychiatry on Google Groups.",link:"/resources/listserv"}),re(Gi,{class:"animate-fade-slide",heading:"Upcoming Conferences",subheading:"Stay updated",description:"Check out upcoming events and conferences relevant to our community.",link:"/resources/conferences"}),re(Gi,{class:"animate-fade-slide",heading:"New Articles of Interest",subheading:"",description:"Recent articles of interest to our members! John Rolland’s new book *Helping Couples and Families Navigate Illness and Disability* was recently published. Lisa Dixon is now the Editor in Chief of *Psychiatric Services*!",link:"/resources/articles"}),re(Gi,{class:"animate-fade-slide",heading:"General Web Resources",subheading:"",description:"In addition to this page, resources including books and articles can be found throughout the website.",link:"/resources/web"})]))}},tR=Qe(eR,[["__scopeId","data-v-3a0b1932"]]),nR=[{image:"/members/john-doe.jpg",title:"Dr. John Doe",subtitle:"Family Psychiatrist • New York",details:"Dr. Doe specializes in adolescent mental health and family therapy, with over 15 years of experience."},{image:"/members/jane-smith.jpg",title:"Dr. Jane Smith",subtitle:"Clinical Psychiatrist • +1-408-310-3927",details:"Expert in cognitive behavioral therapy and mindfulness-based interventions. Passionate about community education."},{image:"/members/alex-lee.jpg",title:"Dr. Alex Lee",subtitle:"Child & Adolescent Psychiatrist • Illinois",details:"Focusing on early intervention strategies and supportive therapy for children and their families."},{image:"/members/susan-chen.jpg",title:"Dr. Susan Chen",subtitle:"Family Systems Psychiatrist • Texas",details:"Published author and speaker on family systems theory and cross-cultural psychiatry."}],rR={class:"member-view"},sR={__name:"MemberView",setup(t){return(e,n)=>(he(),pe("section",rR,[n[0]||(n[0]=j("h1",{class:"page-title animate-fade-slide"},"Our Members",-1)),n[1]||(n[1]=j("p",{class:"page-subtitle animate-fade-slide"}," Meet some of the dedicated professionals in our association. ",-1)),re(Dl,{title:"Members",class:"animate-fade-slide",cards:ye(nR)},null,8,["cards"])]))}},iR=Qe(sR,[["__scopeId","data-v-2fd62856"]]),oR=[{id:"symposium",title:"Family Psychiatry Symposium 2025",date:"2025-09-15",time:"9:00 AM - 5:00 PM",location:"San Francisco, CA",description:"A full-day symposium with expert panels and workshops focused on the future of family psychiatry.",link:"https://example.com/conference-symposium",linkLabel:"Register for Symposium",schedule:[{time:"09:00 AM",title:"Opening Keynote"},{time:"10:00 AM",title:"Panel Discussion: Family Systems"},{time:"11:30 AM",title:"Break & Networking"},{time:"01:00 PM",title:"Workshops: Practice Innovations"},{time:"03:00 PM",title:"Closing Remarks"}]},{id:"webinar-child",title:"Child & Adolescent Mental Health Webinar",date:"2025-10-05",time:"10:00 AM - 12:00 PM",location:"Online",description:"A virtual webinar exploring the latest research and clinical practices.",image:"https://media.istockphoto.com/id/1496377921/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=xuCCbqrrZoE0jKxLd8aW2U3dSjxwJaKw99EDea1q91w=",link:"https://example.com/webinar-child-mental-health",linkLabel:"Join Webinar",schedule:[{time:"10:00 AM",title:"Welcome & Introduction"},{time:"10:15 AM",title:"Latest Research in Child Psychiatry"},{time:"11:00 AM",title:"Interactive Q&A"},{time:"11:30 AM",title:"Closing & Next Steps"}]},{id:1,title:"Annual Family Psychiatry Conference",date:"2025-09-15",location:"San Francisco, CA",description:"Join leading experts in family psychiatry for a full day of workshops and keynotes.",image:"https://media.istockphoto.com/id/1496377580/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=cQAx2DYW0wlK5IgykC0pqGupR2lSwDmw7SEn2fuVgS0=",rsvpLink:"https://example.com/rsvp-conference"},{id:2,title:"Webinar: Advances in Child & Adolescent Mental Health",date:"2025-10-05",location:"Online",description:"A virtual seminar exploring the latest research in child and adolescent psychiatry.",image:"https://media.istockphoto.com/id/1496377921/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=xuCCbqrrZoE0jKxLd8aW2U3dSjxwJaKw99EDea1q91w=",rsvpLink:"https://example.com/access-webinar"},{id:3,title:"Regional Networking Mixer",date:"2025-11-20",location:"Chicago, IL",description:"An in-person mixer for local members to connect and collaborate.",rsvpLink:"https://example.com/rsvp-mixer"}],aR={class:"events-view"},lR={__name:"EventsView",setup(t){return(e,n)=>(he(),pe("section",aR,[n[0]||(n[0]=j("h1",{class:"animate-fade-slide"},"Upcoming Events",-1)),(he(!0),pe(ot,null,is(ye(oR),r=>(he(),li(Ig,ci({key:r.id},{ref_for:!0},r),null,16))),128))]))}},cR=Qe(lR,[["__scopeId","data-v-34ea3e05"]]),uR={class:"contact-view"},hR={__name:"ContactView",setup(t){return rn(""),rn(""),rn(""),(e,n)=>(he(),pe("section",uR,n[0]||(n[0]=[j("h1",{class:"page-title animate-fade-slide"},"Contact Us",-1),j("p",{class:"page-subtitle animate-fade-slide",style:{"animation-delay":"0.2s"}}," We'd love to hear from you! Reach out with any questions, suggestions, or inquiries. ",-1),j("div",{class:"contact-info animate-fade-slide",style:{"animation-delay":"0.4s"}},[j("p",null,[Me("Email: "),j("a",{href:"mailto:info@familypsychiatrists.org"},"info@familypsychiatrists.org")]),j("p",null,"Phone: (555) 123-4567"),j("p",null,"Mailing Address: 123 Main Street, Suite 456, San Francisco, CA 94105")],-1),j("div",{class:"contact-form animate-fade-slide",style:{"animation-delay":"0.6s"}},[j("h2",null,"Send Us a Message"),j("form",{action:"https://formspree.io/f/xanjjwnj",method:"POST",class:"contact-form-form"},[j("input",{type:"text",name:"name",placeholder:"Your Name",required:""}),j("input",{type:"email",name:"_replyto",placeholder:"Your Email",required:""}),j("textarea",{name:"message",placeholder:"Your Message",rows:"5",required:""}),j("input",{type:"hidden",name:"_next",value:"https://yoursite.com/thank-you"}),j("button",{type:"submit",class:"cta-button"},"Send Message")])],-1)])))}},fR=Qe(hR,[["__scopeId","data-v-519f944f"]]),dR=IE({history:eE(),routes:[{path:"/",name:"home",component:F1},{path:"/about",name:"about",component:K1},{path:"/resources",name:"resources",component:tR},{path:"/members",name:"members",component:iR},{path:"/events",name:"events",component:cR},{path:"/contact",name:"contact",component:fR},{path:"/membership",name:"membership",component:()=>Qf(()=>import("./MembershipView-Bf7pcjRI.js"),__vite__mapDeps([0,1]))},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Qf(()=>import("./PlaceholderView-Cc3q8xsl.js"),[])}],scrollBehavior(t,e,n){return t.hash?{el:t.hash,behavior:"smooth"}:{top:0}}}),Lc=yv(_S);Lc.use(wv());Lc.use(dR);Lc.mount("#app");export{Qe as _,j as a,Me as b,pe as c,pR as d,he as o,we as t,ye as u};
