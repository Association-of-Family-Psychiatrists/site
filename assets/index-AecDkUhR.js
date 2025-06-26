const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ListservView-BES-c1ML.js","assets/ContentPage-CLsrfrtS.js","assets/ContentPage-xJb-eSPU.css","assets/ArticlesView-CvzJYEJp.js","assets/WebResourcesView-DTT-ELHb.js","assets/MembershipView-agaSPO4_.js","assets/MembershipView-cWQ1dJL0.css"])))=>i.map(i=>d[i]);
var j_=Object.defineProperty;var H_=(t,e,n)=>e in t?j_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var De=(t,e,n)=>H_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function sc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},Xr=[],cn=()=>{},z_=()=>!1,na=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ic=t=>t.startsWith("onUpdate:"),tt=Object.assign,oc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},q_=Object.prototype.hasOwnProperty,Re=(t,e)=>q_.call(t,e),ie=Array.isArray,Yr=t=>ra(t)==="[object Map]",Dd=t=>ra(t)==="[object Set]",ue=t=>typeof t=="function",Ge=t=>typeof t=="string",lr=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",Nd=t=>(Fe(t)||ue(t))&&ue(t.then)&&ue(t.catch),Vd=Object.prototype.toString,ra=t=>Vd.call(t),G_=t=>ra(t).slice(8,-1),Md=t=>ra(t)==="[object Object]",ac=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,js=sc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},W_=/-(\w)/g,Ht=sa(t=>t.replace(W_,(e,n)=>n?n.toUpperCase():"")),K_=/\B([A-Z])/g,Nr=sa(t=>t.replace(K_,"-$1").toLowerCase()),ia=sa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ga=sa(t=>t?`on${ia(t)}`:""),Yn=(t,e)=>!Object.is(t,e),uo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ld=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},yl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Q_=t=>{const e=Ge(t)?Number(t):NaN;return isNaN(e)?t:e};let ch;const oa=()=>ch||(ch=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wi(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ge(r)?Z_(r):wi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ge(t)||Fe(t))return t}const J_=/;(?![^(]*\))/g,X_=/:([^]+)/,Y_=/\/\*[^]*?\*\//g;function Z_(t){const e={};return t.replace(Y_,"").split(J_).forEach(n=>{if(n){const r=n.split(X_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function aa(t){let e="";if(Ge(t))e=t;else if(ie(t))for(let n=0;n<t.length;n++){const r=aa(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ey(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Ge(e)&&(t.class=aa(e)),n&&(t.style=wi(n)),t}const ty="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ny=sc(ty);function Fd(t){return!!t||t===""}const Ud=t=>!!(t&&t.__v_isRef===!0),xe=t=>Ge(t)?t:t==null?"":ie(t)||Fe(t)&&(t.toString===Vd||!ue(t.toString))?Ud(t)?xe(t.value):JSON.stringify(t,$d,2):String(t),$d=(t,e)=>Ud(e)?$d(t,e.value):Yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Wa(r,i)+" =>"]=s,n),{})}:Dd(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wa(n))}:lr(e)?Wa(e):Fe(e)&&!ie(e)&&!Md(e)?String(e):e,Wa=(t,e="")=>{var n;return lr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ct;class Bd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ct,!e&&Ct&&(this.index=(Ct.scopes||(Ct.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ct;try{return Ct=this,e()}finally{Ct=n}}}on(){++this._on===1&&(this.prevScope=Ct,Ct=this)}off(){this._on>0&&--this._on===0&&(Ct=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function ry(t){return new Bd(t)}function sy(){return Ct}let Ve;const Ka=new WeakSet;class jd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ct&&Ct.active&&Ct.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ka.has(this)&&(Ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,uh(this),qd(this);const e=Ve,n=Xt;Ve=this,Xt=!0;try{return this.fn()}finally{Gd(this),Ve=e,Xt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uc(e);this.deps=this.depsTail=void 0,uh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vl(this)&&this.run()}get dirty(){return vl(this)}}let Hd=0,Hs,zs;function zd(t,e=!1){if(t.flags|=8,e){t.next=zs,zs=t;return}t.next=Hs,Hs=t}function lc(){Hd++}function cc(){if(--Hd>0)return;if(zs){let e=zs;for(zs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Hs;){let e=Hs;for(Hs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function qd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),uc(r),iy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function vl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Wd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ri)||(t.globalVersion=ri,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!vl(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=Xt;Ve=t,Xt=!0;try{qd(t);const s=t.fn(t._value);(e.version===0||Yn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,Xt=r,Gd(t),t.flags&=-3}}function uc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)uc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function iy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Xt=!0;const Kd=[];function Cn(){Kd.push(Xt),Xt=!1}function Pn(){const t=Kd.pop();Xt=t===void 0?!0:t}function uh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let ri=0;class oy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ve||!Xt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new oy(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Qd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,ri++,this.notify(e)}notify(e){lc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{cc()}}}function Qd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Qd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const El=new WeakMap,wr=Symbol(""),wl=Symbol(""),si=Symbol("");function yt(t,e,n){if(Xt&&Ve){let r=El.get(t);r||El.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new hc),s.map=r,s.key=n),s.track()}}function wn(t,e,n,r,s,i){const a=El.get(t);if(!a){ri++;return}const l=c=>{c&&c.trigger()};if(lc(),e==="clear")a.forEach(l);else{const c=ie(t),u=c&&ac(n);if(c&&n==="length"){const f=Number(r);a.forEach((p,g)=>{(g==="length"||g===si||!lr(g)&&g>=f)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),u&&l(a.get(si)),e){case"add":c?u&&l(a.get("length")):(l(a.get(wr)),Yr(t)&&l(a.get(wl)));break;case"delete":c||(l(a.get(wr)),Yr(t)&&l(a.get(wl)));break;case"set":Yr(t)&&l(a.get(wr));break}}cc()}function jr(t){const e=Ae(t);return e===t?e:(yt(e,"iterate",si),jt(t)?e:e.map(lt))}function la(t){return yt(t=Ae(t),"iterate",si),t}const ay={__proto__:null,[Symbol.iterator](){return Qa(this,Symbol.iterator,lt)},concat(...t){return jr(this).concat(...t.map(e=>ie(e)?jr(e):e))},entries(){return Qa(this,"entries",t=>(t[1]=lt(t[1]),t))},every(t,e){return _n(this,"every",t,e,void 0,arguments)},filter(t,e){return _n(this,"filter",t,e,n=>n.map(lt),arguments)},find(t,e){return _n(this,"find",t,e,lt,arguments)},findIndex(t,e){return _n(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return _n(this,"findLast",t,e,lt,arguments)},findLastIndex(t,e){return _n(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return _n(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ja(this,"includes",t)},indexOf(...t){return Ja(this,"indexOf",t)},join(t){return jr(this).join(t)},lastIndexOf(...t){return Ja(this,"lastIndexOf",t)},map(t,e){return _n(this,"map",t,e,void 0,arguments)},pop(){return Ns(this,"pop")},push(...t){return Ns(this,"push",t)},reduce(t,...e){return hh(this,"reduce",t,e)},reduceRight(t,...e){return hh(this,"reduceRight",t,e)},shift(){return Ns(this,"shift")},some(t,e){return _n(this,"some",t,e,void 0,arguments)},splice(...t){return Ns(this,"splice",t)},toReversed(){return jr(this).toReversed()},toSorted(t){return jr(this).toSorted(t)},toSpliced(...t){return jr(this).toSpliced(...t)},unshift(...t){return Ns(this,"unshift",t)},values(){return Qa(this,"values",lt)}};function Qa(t,e,n){const r=la(t),s=r[e]();return r!==t&&!jt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const ly=Array.prototype;function _n(t,e,n,r,s,i){const a=la(t),l=a!==t&&!jt(t),c=a[e];if(c!==ly[e]){const p=c.apply(t,i);return l?lt(p):p}let u=n;a!==t&&(l?u=function(p,g){return n.call(this,lt(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=c.call(a,u,r);return l&&s?s(f):f}function hh(t,e,n,r){const s=la(t);let i=n;return s!==t&&(jt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,lt(l),c,t)}),s[e](i,...r)}function Ja(t,e,n){const r=Ae(t);yt(r,"iterate",si);const s=r[e](...n);return(s===-1||s===!1)&&pc(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Ns(t,e,n=[]){Cn(),lc();const r=Ae(t)[e].apply(t,n);return cc(),Pn(),r}const cy=sc("__proto__,__v_isRef,__isVue"),Jd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(lr));function uy(t){lr(t)||(t=String(t));const e=Ae(this);return yt(e,"has",t),e.hasOwnProperty(t)}class Xd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Ey:tp:i?ep:Zd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ie(e);if(!s){let c;if(a&&(c=ay[n]))return c;if(n==="hasOwnProperty")return uy}const l=Reflect.get(e,n,wt(e)?e:r);return(lr(n)?Jd.has(n):cy(n))||(s||yt(e,"get",n),i)?l:wt(l)?a&&ac(n)?l:l.value:Fe(l)?s?rp(l):ca(l):l}}class Yd extends Xd{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=nr(i);if(!jt(r)&&!nr(r)&&(i=Ae(i),r=Ae(r)),!ie(e)&&wt(i)&&!wt(r))return c?!1:(i.value=r,!0)}const a=ie(e)&&ac(n)?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,wt(e)?e:s);return e===Ae(s)&&(a?Yn(r,i)&&wn(e,"set",n,r):wn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&wn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!lr(n)||!Jd.has(n))&&yt(e,"has",n),r}ownKeys(e){return yt(e,"iterate",ie(e)?"length":wr),Reflect.ownKeys(e)}}class hy extends Xd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const fy=new Yd,dy=new hy,py=new Yd(!0);const Tl=t=>t,Zi=t=>Reflect.getPrototypeOf(t);function gy(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),a=Yr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,u=s[t](...r),f=n?Tl:e?So:lt;return!e&&yt(i,"iterate",c?wl:wr),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function eo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function my(t,e){const n={get(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);t||(Yn(s,l)&&yt(a,"get",s),yt(a,"get",l));const{has:c}=Zi(a),u=e?Tl:t?So:lt;if(c.call(a,s))return u(i.get(s));if(c.call(a,l))return u(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&yt(Ae(s),"iterate",wr),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);return t||(Yn(s,l)&&yt(a,"has",s),yt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Ae(l),u=e?Tl:t?So:lt;return!t&&yt(c,"iterate",wr),l.forEach((f,p)=>s.call(i,u(f),u(p),a))}};return tt(n,t?{add:eo("add"),set:eo("set"),delete:eo("delete"),clear:eo("clear")}:{add(s){!e&&!jt(s)&&!nr(s)&&(s=Ae(s));const i=Ae(this);return Zi(i).has.call(i,s)||(i.add(s),wn(i,"add",s,s)),this},set(s,i){!e&&!jt(i)&&!nr(i)&&(i=Ae(i));const a=Ae(this),{has:l,get:c}=Zi(a);let u=l.call(a,s);u||(s=Ae(s),u=l.call(a,s));const f=c.call(a,s);return a.set(s,i),u?Yn(i,f)&&wn(a,"set",s,i):wn(a,"add",s,i),this},delete(s){const i=Ae(this),{has:a,get:l}=Zi(i);let c=a.call(i,s);c||(s=Ae(s),c=a.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&wn(i,"delete",s,void 0),u},clear(){const s=Ae(this),i=s.size!==0,a=s.clear();return i&&wn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=gy(s,t,e)}),n}function fc(t,e){const n=my(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const _y={get:fc(!1,!1)},yy={get:fc(!1,!0)},vy={get:fc(!0,!1)};const Zd=new WeakMap,ep=new WeakMap,tp=new WeakMap,Ey=new WeakMap;function wy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ty(t){return t.__v_skip||!Object.isExtensible(t)?0:wy(G_(t))}function ca(t){return nr(t)?t:dc(t,!1,fy,_y,Zd)}function np(t){return dc(t,!1,py,yy,ep)}function rp(t){return dc(t,!0,dy,vy,tp)}function dc(t,e,n,r,s){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Ty(t);if(i===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Zr(t){return nr(t)?Zr(t.__v_raw):!!(t&&t.__v_isReactive)}function nr(t){return!!(t&&t.__v_isReadonly)}function jt(t){return!!(t&&t.__v_isShallow)}function pc(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function sp(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Ld(t,"__v_skip",!0),t}const lt=t=>Fe(t)?ca(t):t,So=t=>Fe(t)?rp(t):t;function wt(t){return t?t.__v_isRef===!0:!1}function Ar(t){return ip(t,!1)}function by(t){return ip(t,!0)}function ip(t,e){return wt(t)?t:new Iy(t,e)}class Iy{constructor(e,n){this.dep=new hc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:lt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||jt(e)||nr(e);e=r?e:Ae(e),Yn(e,n)&&(this._rawValue=e,this._value=r?e:lt(e),this.dep.trigger())}}function we(t){return wt(t)?t.value:t}const Ay={get:(t,e,n)=>e==="__v_raw"?t:we(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return wt(s)&&!wt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function op(t){return Zr(t)?t:new Proxy(t,Ay)}class Sy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new hc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ri-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return zd(this,!0),!0}get value(){const e=this.dep.track();return Wd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Ry(t,e,n=!1){let r,s;return ue(t)?r=t:(r=t.get,s=t.set),new Sy(r,s,n)}const to={},Ro=new WeakMap;let _r;function ky(t,e=!1,n=_r){if(n){let r=Ro.get(n);r||Ro.set(n,r=[]),r.push(t)}}function Cy(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,u=H=>s?H:jt(H)||s===!1||s===0?Tn(H,1):Tn(H);let f,p,g,E,R=!1,x=!1;if(wt(t)?(p=()=>t.value,R=jt(t)):Zr(t)?(p=()=>u(t),R=!0):ie(t)?(x=!0,R=t.some(H=>Zr(H)||jt(H)),p=()=>t.map(H=>{if(wt(H))return H.value;if(Zr(H))return u(H);if(ue(H))return c?c(H,2):H()})):ue(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){Cn();try{g()}finally{Pn()}}const H=_r;_r=f;try{return c?c(t,3,[E]):t(E)}finally{_r=H}}:p=cn,e&&s){const H=p,ae=s===!0?1/0:s;p=()=>Tn(H(),ae)}const L=sy(),j=()=>{f.stop(),L&&L.active&&oc(L.effects,f)};if(i&&e){const H=e;e=(...ae)=>{H(...ae),j()}}let F=x?new Array(t.length).fill(to):to;const B=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const ae=f.run();if(s||R||(x?ae.some((re,A)=>Yn(re,F[A])):Yn(ae,F))){g&&g();const re=_r;_r=f;try{const A=[ae,F===to?void 0:x&&F[0]===to?[]:F,E];F=ae,c?c(e,3,A):e(...A)}finally{_r=re}}}else f.run()};return l&&l(B),f=new jd(p),f.scheduler=a?()=>a(B,!1):B,E=H=>ky(H,!1,f),g=f.onStop=()=>{const H=Ro.get(f);if(H){if(c)c(H,4);else for(const ae of H)ae();Ro.delete(f)}},e?r?B(!0):F=f.run():a?a(B.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function Tn(t,e=1/0,n){if(e<=0||!Fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,wt(t))Tn(t.value,e,n);else if(ie(t))for(let r=0;r<t.length;r++)Tn(t[r],e,n);else if(Dd(t)||Yr(t))t.forEach(r=>{Tn(r,e,n)});else if(Md(t)){for(const r in t)Tn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Tn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ti(t,e,n,r){try{return r?t(...r):t()}catch(s){ua(s,e,n)}}function Zt(t,e,n,r){if(ue(t)){const s=Ti(t,e,n,r);return s&&Nd(s)&&s.catch(i=>{ua(i,e,n)}),s}if(ie(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Zt(t[i],e,n,r));return s}}function ua(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){Cn(),Ti(i,null,10,[t,c,u]),Pn();return}}Py(t,n,s,r,a)}function Py(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const At=[];let sn=-1;const es=[];let zn=null,qr=0;const ap=Promise.resolve();let ko=null;function lp(t){const e=ko||ap;return t?e.then(this?t.bind(this):t):e}function xy(t){let e=sn+1,n=At.length;for(;e<n;){const r=e+n>>>1,s=At[r],i=ii(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function gc(t){if(!(t.flags&1)){const e=ii(t),n=At[At.length-1];!n||!(t.flags&2)&&e>=ii(n)?At.push(t):At.splice(xy(e),0,t),t.flags|=1,cp()}}function cp(){ko||(ko=ap.then(hp))}function Oy(t){ie(t)?es.push(...t):zn&&t.id===-1?zn.splice(qr+1,0,t):t.flags&1||(es.push(t),t.flags|=1),cp()}function fh(t,e,n=sn+1){for(;n<At.length;n++){const r=At[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;At.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function up(t){if(es.length){const e=[...new Set(es)].sort((n,r)=>ii(n)-ii(r));if(es.length=0,zn){zn.push(...e);return}for(zn=e,qr=0;qr<zn.length;qr++){const n=zn[qr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}zn=null,qr=0}}const ii=t=>t.id==null?t.flags&2?-1:1/0:t.id;function hp(t){try{for(sn=0;sn<At.length;sn++){const e=At[sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ti(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;sn<At.length;sn++){const e=At[sn];e&&(e.flags&=-2)}sn=-1,At.length=0,up(),ko=null,(At.length||es.length)&&hp()}}let Ot=null,fp=null;function Co(t){const e=Ot;return Ot=t,fp=t&&t.type.__scopeId||null,e}function We(t,e=Ot,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&bh(-1);const i=Co(e);let a;try{a=t(...s)}finally{Co(i),r._d&&bh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function dp(t,e){if(Ot===null)return t;const n=ga(Ot),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ne]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&Tn(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(Cn(),Zt(c,n,8,[t.el,l,t,e]),Pn())}}const Dy=Symbol("_vte"),pp=t=>t.__isTeleport,qn=Symbol("_leaveCb"),no=Symbol("_enterCb");function Ny(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return mc(()=>{t.isMounted=!0}),_c(()=>{t.isUnmounting=!0}),t}const Bt=[Function,Array],gp={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Bt,onEnter:Bt,onAfterEnter:Bt,onEnterCancelled:Bt,onBeforeLeave:Bt,onLeave:Bt,onAfterLeave:Bt,onLeaveCancelled:Bt,onBeforeAppear:Bt,onAppear:Bt,onAfterAppear:Bt,onAppearCancelled:Bt},mp=t=>{const e=t.subTree;return e.component?mp(e.component):e},Vy={name:"BaseTransition",props:gp,setup(t,{slots:e}){const n=Pv(),r=Ny();return()=>{const s=e.default&&vp(e.default(),!0);if(!s||!s.length)return;const i=_p(s),a=Ae(t),{mode:l}=a;if(r.isLeaving)return Xa(i);const c=dh(i);if(!c)return Xa(i);let u=bl(c,a,r,n,p=>u=p);c.type!==St&&oi(c,u);let f=n.subTree&&dh(n.subTree);if(f&&f.type!==St&&!vr(c,f)&&mp(n).type!==St){let p=bl(f,a,r,n);if(oi(f,p),l==="out-in"&&c.type!==St)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},Xa(i);l==="in-out"&&c.type!==St?p.delayLeave=(g,E,R)=>{const x=yp(r,f);x[String(f.key)]=f,g[qn]=()=>{E(),g[qn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{R(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function _p(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==St){e=n;break}}return e}const My=Vy;function yp(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function bl(t,e,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:E,onAfterLeave:R,onLeaveCancelled:x,onBeforeAppear:L,onAppear:j,onAfterAppear:F,onAppearCancelled:B}=e,H=String(t.key),ae=yp(n,t),re=(_,I)=>{_&&Zt(_,r,9,I)},A=(_,I)=>{const S=I[1];re(_,I),ie(_)?_.every(b=>b.length<=1)&&S():_.length<=1&&S()},y={mode:a,persisted:l,beforeEnter(_){let I=c;if(!n.isMounted)if(i)I=L||c;else return;_[qn]&&_[qn](!0);const S=ae[H];S&&vr(t,S)&&S.el[qn]&&S.el[qn](),re(I,[_])},enter(_){let I=u,S=f,b=p;if(!n.isMounted)if(i)I=j||u,S=F||f,b=B||p;else return;let v=!1;const Pe=_[no]=Je=>{v||(v=!0,Je?re(b,[_]):re(S,[_]),y.delayedLeave&&y.delayedLeave(),_[no]=void 0)};I?A(I,[_,Pe]):Pe()},leave(_,I){const S=String(t.key);if(_[no]&&_[no](!0),n.isUnmounting)return I();re(g,[_]);let b=!1;const v=_[qn]=Pe=>{b||(b=!0,I(),Pe?re(x,[_]):re(R,[_]),_[qn]=void 0,ae[S]===t&&delete ae[S])};ae[S]=t,E?A(E,[_,v]):v()},clone(_){const I=bl(_,e,n,r,s);return s&&s(I),I}};return y}function Xa(t){if(ha(t))return t=rr(t),t.children=null,t}function dh(t){if(!ha(t))return pp(t.type)&&t.children?_p(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&ue(n.default))return n.default()}}function oi(t,e){t.shapeFlag&6&&t.component?(t.transition=e,oi(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function vp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===vt?(a.patchFlag&128&&s++,r=r.concat(vp(a.children,e,l))):(e||a.type!==St)&&r.push(l!=null?rr(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Ep(t,e){return ue(t)?tt({name:t.name},e,{setup:t}):t}function wp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Po(t,e,n,r,s=!1){if(ie(t)){t.forEach((R,x)=>Po(R,e&&(ie(e)?e[x]:e),n,r,s));return}if(qs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Po(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ga(r.component):r.el,a=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Ne?l.refs={}:l.refs,p=l.setupState,g=Ae(p),E=p===Ne?()=>!1:R=>Re(g,R);if(u!=null&&u!==c&&(Ge(u)?(f[u]=null,E(u)&&(p[u]=null)):wt(u)&&(u.value=null)),ue(c))Ti(c,l,12,[a,f]);else{const R=Ge(c),x=wt(c);if(R||x){const L=()=>{if(t.f){const j=R?E(c)?p[c]:f[c]:c.value;s?ie(j)&&oc(j,i):ie(j)?j.includes(i)||j.push(i):R?(f[c]=[i],E(c)&&(p[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else R?(f[c]=a,E(c)&&(p[c]=a)):x&&(c.value=a,t.k&&(f[t.k]=a))};a?(L.id=-1,Mt(L,n)):L()}}}oa().requestIdleCallback;oa().cancelIdleCallback;const qs=t=>!!t.type.__asyncLoader,ha=t=>t.type.__isKeepAlive;function Ly(t,e){Tp(t,"a",e)}function Fy(t,e){Tp(t,"da",e)}function Tp(t,e,n=ct){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ha(s.parent.vnode)&&Uy(r,e,n,s),s=s.parent}}function Uy(t,e,n,r){const s=fa(e,t,r,!0);bp(()=>{oc(r[e],s)},n)}function fa(t,e,n=ct,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{Cn();const l=Ii(n),c=Zt(e,n,t,a);return l(),Pn(),c});return r?s.unshift(i):s.push(i),i}}const Nn=t=>(e,n=ct)=>{(!li||t==="sp")&&fa(t,(...r)=>e(...r),n)},$y=Nn("bm"),mc=Nn("m"),By=Nn("bu"),jy=Nn("u"),_c=Nn("bum"),bp=Nn("um"),Hy=Nn("sp"),zy=Nn("rtg"),qy=Nn("rtc");function Gy(t,e=ct){fa("ec",t,e)}const Ip="components",Wy="directives";function Ky(t,e){return Ap(Ip,t,!0,e)||t}const Qy=Symbol.for("v-ndc");function Jy(t){return Ap(Wy,t)}function Ap(t,e,n=!0,r=!1){const s=Ot||ct;if(s){const i=s.type;if(t===Ip){const l=Vv(i,!1);if(l&&(l===e||l===Ht(e)||l===ia(Ht(e))))return i}const a=ph(s[t]||i[t],e)||ph(s.appContext[t],e);return!a&&r?i:a}}function ph(t,e){return t&&(t[e]||t[Ht(e)]||t[ia(Ht(e))])}function bi(t,e,n,r){let s;const i=n,a=ie(t);if(a||Ge(t)){const l=a&&Zr(t);let c=!1,u=!1;l&&(c=!jt(t),u=nr(t),t=la(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?So(lt(t[f])):lt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Fe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Il=t=>t?Wp(t)?ga(t):Il(t.parent):null,Gs=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Il(t.parent),$root:t=>Il(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Rp(t),$forceUpdate:t=>t.f||(t.f=()=>{gc(t.update)}),$nextTick:t=>t.n||(t.n=lp.bind(t.proxy)),$watch:t=>_v.bind(t)}),Ya=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Re(t,e),Xy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const E=a[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ya(r,e))return a[e]=1,r[e];if(s!==Ne&&Re(s,e))return a[e]=2,s[e];if((u=t.propsOptions[0])&&Re(u,e))return a[e]=3,i[e];if(n!==Ne&&Re(n,e))return a[e]=4,n[e];Al&&(a[e]=0)}}const f=Gs[e];let p,g;if(f)return e==="$attrs"&&yt(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&Re(n,e))return a[e]=4,n[e];if(g=c.config.globalProperties,Re(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ya(s,e)?(s[e]=n,!0):r!==Ne&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Ne&&Re(t,a)||Ya(e,a)||(l=i[0])&&Re(l,a)||Re(r,a)||Re(Gs,a)||Re(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function gh(t){return ie(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Al=!0;function Yy(t){const e=Rp(t),n=t.proxy,r=t.ctx;Al=!1,e.beforeCreate&&mh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:E,updated:R,activated:x,deactivated:L,beforeDestroy:j,beforeUnmount:F,destroyed:B,unmounted:H,render:ae,renderTracked:re,renderTriggered:A,errorCaptured:y,serverPrefetch:_,expose:I,inheritAttrs:S,components:b,directives:v,filters:Pe}=e;if(u&&Zy(u,r,null),a)for(const ye in a){const ge=a[ye];ue(ge)&&(r[ye]=ge.bind(n))}if(s){const ye=s.call(n,n);Fe(ye)&&(t.data=ca(ye))}if(Al=!0,i)for(const ye in i){const ge=i[ye],Nt=ue(ge)?ge.bind(n,n):ue(ge.get)?ge.get.bind(n,n):cn,zt=!ue(ge)&&ue(ge.set)?ge.set.bind(n):cn,Ft=xt({get:Nt,set:zt});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:Be=>Ft.value=Be})}if(l)for(const ye in l)Sp(l[ye],r,n,ye);if(c){const ye=ue(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(ge=>{ho(ge,ye[ge])})}f&&mh(f,t,"c");function $e(ye,ge){ie(ge)?ge.forEach(Nt=>ye(Nt.bind(n))):ge&&ye(ge.bind(n))}if($e($y,p),$e(mc,g),$e(By,E),$e(jy,R),$e(Ly,x),$e(Fy,L),$e(Gy,y),$e(qy,re),$e(zy,A),$e(_c,F),$e(bp,H),$e(Hy,_),ie(I))if(I.length){const ye=t.exposed||(t.exposed={});I.forEach(ge=>{Object.defineProperty(ye,ge,{get:()=>n[ge],set:Nt=>n[ge]=Nt})})}else t.exposed||(t.exposed={});ae&&t.render===cn&&(t.render=ae),S!=null&&(t.inheritAttrs=S),b&&(t.components=b),v&&(t.directives=v),_&&wp(t)}function Zy(t,e,n=cn){ie(t)&&(t=Sl(t));for(const r in t){const s=t[r];let i;Fe(s)?"default"in s?i=Yt(s.from||r,s.default,!0):i=Yt(s.from||r):i=Yt(s),wt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function mh(t,e,n){Zt(ie(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sp(t,e,n,r){let s=r.includes(".")?$p(n,r):()=>n[r];if(Ge(t)){const i=e[t];ue(i)&&fo(s,i)}else if(ue(t))fo(s,t.bind(n));else if(Fe(t))if(ie(t))t.forEach(i=>Sp(i,e,n,r));else{const i=ue(t.handler)?t.handler.bind(n):e[t.handler];ue(i)&&fo(s,i,t)}}function Rp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>xo(c,u,a,!0)),xo(c,e,a)),Fe(e)&&i.set(e,c),c}function xo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&xo(t,i,n,!0),s&&s.forEach(a=>xo(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=ev[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const ev={data:_h,props:yh,emits:yh,methods:$s,computed:$s,beforeCreate:It,created:It,beforeMount:It,mounted:It,beforeUpdate:It,updated:It,beforeDestroy:It,beforeUnmount:It,destroyed:It,unmounted:It,activated:It,deactivated:It,errorCaptured:It,serverPrefetch:It,components:$s,directives:$s,watch:nv,provide:_h,inject:tv};function _h(t,e){return e?t?function(){return tt(ue(t)?t.call(this,this):t,ue(e)?e.call(this,this):e)}:e:t}function tv(t,e){return $s(Sl(t),Sl(e))}function Sl(t){if(ie(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function It(t,e){return t?[...new Set([].concat(t,e))]:e}function $s(t,e){return t?tt(Object.create(null),t,e):e}function yh(t,e){return t?ie(t)&&ie(e)?[...new Set([...t,...e])]:tt(Object.create(null),gh(t),gh(e??{})):e}function nv(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const r in e)n[r]=It(t[r],e[r]);return n}function kp(){return{app:null,config:{isNativeTag:z_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let rv=0;function sv(t,e){return function(r,s=null){ue(r)||(r=tt({},r)),s!=null&&!Fe(s)&&(s=null);const i=kp(),a=new WeakSet,l=[];let c=!1;const u=i.app={_uid:rv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Lv,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&ue(f.install)?(a.add(f),f.install(u,...p)):ue(f)&&(a.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!c){const E=u._ceVNode||se(r,s);return E.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(E,f,g),c=!0,u._container=f,f.__vue_app__=u,ga(E.component)}},onUnmount(f){l.push(f)},unmount(){c&&(Zt(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=ts;ts=u;try{return f()}finally{ts=p}}};return u}}let ts=null;function ho(t,e){if(ct){let n=ct.provides;const r=ct.parent&&ct.parent.provides;r===n&&(n=ct.provides=Object.create(r)),n[t]=e}}function Yt(t,e,n=!1){const r=ct||Ot;if(r||ts){let s=ts?ts._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ue(e)?e.call(r&&r.proxy):e}}const Cp={},Pp=()=>Object.create(Cp),xp=t=>Object.getPrototypeOf(t)===Cp;function iv(t,e,n,r=!1){const s={},i=Pp();t.propsDefaults=Object.create(null),Op(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:np(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ov(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Ae(s),[c]=t.propsOptions;let u=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(da(t.emitsOptions,g))continue;const E=e[g];if(c)if(Re(i,g))E!==i[g]&&(i[g]=E,u=!0);else{const R=Ht(g);s[R]=Rl(c,l,R,E,t,!1)}else E!==i[g]&&(i[g]=E,u=!0)}}}else{Op(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!Re(e,p)&&((f=Nr(p))===p||!Re(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Rl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Re(e,p))&&(delete i[p],u=!0)}u&&wn(t.attrs,"set","")}function Op(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(js(c))continue;const u=e[c];let f;s&&Re(s,f=Ht(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:da(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,a=!0)}if(i){const c=Ae(n),u=l||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Rl(s,c,p,u[p],t,!Re(u,p))}}return a}function Rl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Re(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ue(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Ii(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Nr(n))&&(r=!0))}return r}const av=new WeakMap;function Dp(t,e,n=!1){const r=n?av:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!ue(t)){const f=p=>{c=!0;const[g,E]=Dp(p,e,!0);tt(a,g),E&&l.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Fe(t)&&r.set(t,Xr),Xr;if(ie(i))for(let f=0;f<i.length;f++){const p=Ht(i[f]);vh(p)&&(a[p]=Ne)}else if(i)for(const f in i){const p=Ht(f);if(vh(p)){const g=i[f],E=a[p]=ie(g)||ue(g)?{type:g}:tt({},g),R=E.type;let x=!1,L=!0;if(ie(R))for(let j=0;j<R.length;++j){const F=R[j],B=ue(F)&&F.name;if(B==="Boolean"){x=!0;break}else B==="String"&&(L=!1)}else x=ue(R)&&R.name==="Boolean";E[0]=x,E[1]=L,(x||Re(E,"default"))&&l.push(p)}}const u=[a,l];return Fe(t)&&r.set(t,u),u}function vh(t){return t[0]!=="$"&&!js(t)}const yc=t=>t[0]==="_"||t==="$stable",vc=t=>ie(t)?t.map(an):[an(t)],lv=(t,e,n)=>{if(e._n)return e;const r=We((...s)=>vc(e(...s)),n);return r._c=!1,r},Np=(t,e,n)=>{const r=t._ctx;for(const s in t){if(yc(s))continue;const i=t[s];if(ue(i))e[s]=lv(s,i,r);else if(i!=null){const a=vc(i);e[s]=()=>a}}},Vp=(t,e)=>{const n=vc(e);t.slots.default=()=>n},Mp=(t,e,n)=>{for(const r in e)(n||!yc(r))&&(t[r]=e[r])},cv=(t,e,n)=>{const r=t.slots=Pp();if(t.vnode.shapeFlag&32){const s=e._;s?(Mp(r,e,n),n&&Ld(r,"_",s,!0)):Np(e,r)}else e&&Vp(t,e)},uv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ne;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Mp(s,e,n):(i=!e.$stable,Np(e,s)),a=e}else e&&(Vp(t,e),a={default:1});if(i)for(const l in s)!yc(l)&&a[l]==null&&delete s[l]},Mt=Iv;function hv(t){return fv(t)}function fv(t,e){const n=oa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:E=cn,insertStaticContent:R}=t,x=(w,T,k,D=null,V=null,N=null,Q=void 0,q=null,z=!!T.dynamicChildren)=>{if(w===T)return;w&&!vr(w,T)&&(D=O(w),Be(w,V,N,!0),w=null),T.patchFlag===-2&&(z=!1,T.dynamicChildren=null);const{type:U,ref:te,shapeFlag:K}=T;switch(U){case pa:L(w,T,k,D);break;case St:j(w,T,k,D);break;case po:w==null&&F(T,k,D,Q);break;case vt:b(w,T,k,D,V,N,Q,q,z);break;default:K&1?ae(w,T,k,D,V,N,Q,q,z):K&6?v(w,T,k,D,V,N,Q,q,z):(K&64||K&128)&&U.process(w,T,k,D,V,N,Q,q,z,Y)}te!=null&&V&&Po(te,w&&w.ref,N,T||w,!T)},L=(w,T,k,D)=>{if(w==null)r(T.el=l(T.children),k,D);else{const V=T.el=w.el;T.children!==w.children&&u(V,T.children)}},j=(w,T,k,D)=>{w==null?r(T.el=c(T.children||""),k,D):T.el=w.el},F=(w,T,k,D)=>{[w.el,w.anchor]=R(w.children,T,k,D,w.el,w.anchor)},B=({el:w,anchor:T},k,D)=>{let V;for(;w&&w!==T;)V=g(w),r(w,k,D),w=V;r(T,k,D)},H=({el:w,anchor:T})=>{let k;for(;w&&w!==T;)k=g(w),s(w),w=k;s(T)},ae=(w,T,k,D,V,N,Q,q,z)=>{T.type==="svg"?Q="svg":T.type==="math"&&(Q="mathml"),w==null?re(T,k,D,V,N,Q,q,z):_(w,T,V,N,Q,q,z)},re=(w,T,k,D,V,N,Q,q)=>{let z,U;const{props:te,shapeFlag:K,transition:ee,dirs:oe}=w;if(z=w.el=a(w.type,N,te&&te.is,te),K&8?f(z,w.children):K&16&&y(w.children,z,null,D,V,Za(w,N),Q,q),oe&&dr(w,null,D,"created"),A(z,w,w.scopeId,Q,D),te){for(const he in te)he!=="value"&&!js(he)&&i(z,he,null,te[he],N,D);"value"in te&&i(z,"value",null,te.value,N),(U=te.onVnodeBeforeMount)&&nn(U,D,w)}oe&&dr(w,null,D,"beforeMount");const ne=dv(V,ee);ne&&ee.beforeEnter(z),r(z,T,k),((U=te&&te.onVnodeMounted)||ne||oe)&&Mt(()=>{U&&nn(U,D,w),ne&&ee.enter(z),oe&&dr(w,null,D,"mounted")},V)},A=(w,T,k,D,V)=>{if(k&&E(w,k),D)for(let N=0;N<D.length;N++)E(w,D[N]);if(V){let N=V.subTree;if(T===N||jp(N.type)&&(N.ssContent===T||N.ssFallback===T)){const Q=V.vnode;A(w,Q,Q.scopeId,Q.slotScopeIds,V.parent)}}},y=(w,T,k,D,V,N,Q,q,z=0)=>{for(let U=z;U<w.length;U++){const te=w[U]=q?Gn(w[U]):an(w[U]);x(null,te,T,k,D,V,N,Q,q)}},_=(w,T,k,D,V,N,Q)=>{const q=T.el=w.el;let{patchFlag:z,dynamicChildren:U,dirs:te}=T;z|=w.patchFlag&16;const K=w.props||Ne,ee=T.props||Ne;let oe;if(k&&pr(k,!1),(oe=ee.onVnodeBeforeUpdate)&&nn(oe,k,T,w),te&&dr(T,w,k,"beforeUpdate"),k&&pr(k,!0),(K.innerHTML&&ee.innerHTML==null||K.textContent&&ee.textContent==null)&&f(q,""),U?I(w.dynamicChildren,U,q,k,D,Za(T,V),N):Q||ge(w,T,q,null,k,D,Za(T,V),N,!1),z>0){if(z&16)S(q,K,ee,k,V);else if(z&2&&K.class!==ee.class&&i(q,"class",null,ee.class,V),z&4&&i(q,"style",K.style,ee.style,V),z&8){const ne=T.dynamicProps;for(let he=0;he<ne.length;he++){const ve=ne[he],ft=K[ve],rt=ee[ve];(rt!==ft||ve==="value")&&i(q,ve,ft,rt,V,k)}}z&1&&w.children!==T.children&&f(q,T.children)}else!Q&&U==null&&S(q,K,ee,k,V);((oe=ee.onVnodeUpdated)||te)&&Mt(()=>{oe&&nn(oe,k,T,w),te&&dr(T,w,k,"updated")},D)},I=(w,T,k,D,V,N,Q)=>{for(let q=0;q<T.length;q++){const z=w[q],U=T[q],te=z.el&&(z.type===vt||!vr(z,U)||z.shapeFlag&198)?p(z.el):k;x(z,U,te,null,D,V,N,Q,!0)}},S=(w,T,k,D,V)=>{if(T!==k){if(T!==Ne)for(const N in T)!js(N)&&!(N in k)&&i(w,N,T[N],null,V,D);for(const N in k){if(js(N))continue;const Q=k[N],q=T[N];Q!==q&&N!=="value"&&i(w,N,q,Q,V,D)}"value"in k&&i(w,"value",T.value,k.value,V)}},b=(w,T,k,D,V,N,Q,q,z)=>{const U=T.el=w?w.el:l(""),te=T.anchor=w?w.anchor:l("");let{patchFlag:K,dynamicChildren:ee,slotScopeIds:oe}=T;oe&&(q=q?q.concat(oe):oe),w==null?(r(U,k,D),r(te,k,D),y(T.children||[],k,te,V,N,Q,q,z)):K>0&&K&64&&ee&&w.dynamicChildren?(I(w.dynamicChildren,ee,k,V,N,Q,q),(T.key!=null||V&&T===V.subTree)&&Lp(w,T,!0)):ge(w,T,k,te,V,N,Q,q,z)},v=(w,T,k,D,V,N,Q,q,z)=>{T.slotScopeIds=q,w==null?T.shapeFlag&512?V.ctx.activate(T,k,D,Q,z):Pe(T,k,D,V,N,Q,z):Je(w,T,z)},Pe=(w,T,k,D,V,N,Q)=>{const q=w.component=Cv(w,D,V);if(ha(w)&&(q.ctx.renderer=Y),xv(q,!1,Q),q.asyncDep){if(V&&V.registerDep(q,$e,Q),!w.el){const z=q.subTree=se(St);j(null,z,T,k)}}else $e(q,w,T,k,V,N,Q)},Je=(w,T,k)=>{const D=T.component=w.component;if(Tv(w,T,k))if(D.asyncDep&&!D.asyncResolved){ye(D,T,k);return}else D.next=T,D.update();else T.el=w.el,D.vnode=T},$e=(w,T,k,D,V,N,Q)=>{const q=()=>{if(w.isMounted){let{next:K,bu:ee,u:oe,parent:ne,vnode:he}=w;{const dt=Fp(w);if(dt){K&&(K.el=he.el,ye(w,K,Q)),dt.asyncDep.then(()=>{w.isUnmounted||q()});return}}let ve=K,ft;pr(w,!1),K?(K.el=he.el,ye(w,K,Q)):K=he,ee&&uo(ee),(ft=K.props&&K.props.onVnodeBeforeUpdate)&&nn(ft,ne,K,he),pr(w,!0);const rt=wh(w),Ut=w.subTree;w.subTree=rt,x(Ut,rt,p(Ut.el),O(Ut),w,V,N),K.el=rt.el,ve===null&&bv(w,rt.el),oe&&Mt(oe,V),(ft=K.props&&K.props.onVnodeUpdated)&&Mt(()=>nn(ft,ne,K,he),V)}else{let K;const{el:ee,props:oe}=T,{bm:ne,m:he,parent:ve,root:ft,type:rt}=w,Ut=qs(T);pr(w,!1),ne&&uo(ne),!Ut&&(K=oe&&oe.onVnodeBeforeMount)&&nn(K,ve,T),pr(w,!0);{ft.ce&&ft.ce._injectChildStyle(rt);const dt=w.subTree=wh(w);x(null,dt,k,D,w,V,N),T.el=dt.el}if(he&&Mt(he,V),!Ut&&(K=oe&&oe.onVnodeMounted)){const dt=T;Mt(()=>nn(K,ve,dt),V)}(T.shapeFlag&256||ve&&qs(ve.vnode)&&ve.vnode.shapeFlag&256)&&w.a&&Mt(w.a,V),w.isMounted=!0,T=k=D=null}};w.scope.on();const z=w.effect=new jd(q);w.scope.off();const U=w.update=z.run.bind(z),te=w.job=z.runIfDirty.bind(z);te.i=w,te.id=w.uid,z.scheduler=()=>gc(te),pr(w,!0),U()},ye=(w,T,k)=>{T.component=w;const D=w.vnode.props;w.vnode=T,w.next=null,ov(w,T.props,D,k),uv(w,T.children,k),Cn(),fh(w),Pn()},ge=(w,T,k,D,V,N,Q,q,z=!1)=>{const U=w&&w.children,te=w?w.shapeFlag:0,K=T.children,{patchFlag:ee,shapeFlag:oe}=T;if(ee>0){if(ee&128){zt(U,K,k,D,V,N,Q,q,z);return}else if(ee&256){Nt(U,K,k,D,V,N,Q,q,z);return}}oe&8?(te&16&&kt(U,V,N),K!==U&&f(k,K)):te&16?oe&16?zt(U,K,k,D,V,N,Q,q,z):kt(U,V,N,!0):(te&8&&f(k,""),oe&16&&y(K,k,D,V,N,Q,q,z))},Nt=(w,T,k,D,V,N,Q,q,z)=>{w=w||Xr,T=T||Xr;const U=w.length,te=T.length,K=Math.min(U,te);let ee;for(ee=0;ee<K;ee++){const oe=T[ee]=z?Gn(T[ee]):an(T[ee]);x(w[ee],oe,k,null,V,N,Q,q,z)}U>te?kt(w,V,N,!0,!1,K):y(T,k,D,V,N,Q,q,z,K)},zt=(w,T,k,D,V,N,Q,q,z)=>{let U=0;const te=T.length;let K=w.length-1,ee=te-1;for(;U<=K&&U<=ee;){const oe=w[U],ne=T[U]=z?Gn(T[U]):an(T[U]);if(vr(oe,ne))x(oe,ne,k,null,V,N,Q,q,z);else break;U++}for(;U<=K&&U<=ee;){const oe=w[K],ne=T[ee]=z?Gn(T[ee]):an(T[ee]);if(vr(oe,ne))x(oe,ne,k,null,V,N,Q,q,z);else break;K--,ee--}if(U>K){if(U<=ee){const oe=ee+1,ne=oe<te?T[oe].el:D;for(;U<=ee;)x(null,T[U]=z?Gn(T[U]):an(T[U]),k,ne,V,N,Q,q,z),U++}}else if(U>ee)for(;U<=K;)Be(w[U],V,N,!0),U++;else{const oe=U,ne=U,he=new Map;for(U=ne;U<=ee;U++){const st=T[U]=z?Gn(T[U]):an(T[U]);st.key!=null&&he.set(st.key,U)}let ve,ft=0;const rt=ee-ne+1;let Ut=!1,dt=0;const Ln=new Array(rt);for(U=0;U<rt;U++)Ln[U]=0;for(U=oe;U<=K;U++){const st=w[U];if(ft>=rt){Be(st,V,N,!0);continue}let $t;if(st.key!=null)$t=he.get(st.key);else for(ve=ne;ve<=ee;ve++)if(Ln[ve-ne]===0&&vr(st,T[ve])){$t=ve;break}$t===void 0?Be(st,V,N,!0):(Ln[$t-ne]=U+1,$t>=dt?dt=$t:Ut=!0,x(st,T[$t],k,null,V,N,Q,q,z),ft++)}const ws=Ut?pv(Ln):Xr;for(ve=ws.length-1,U=rt-1;U>=0;U--){const st=ne+U,$t=T[st],Li=st+1<te?T[st+1].el:D;Ln[U]===0?x(null,$t,k,Li,V,N,Q,q,z):Ut&&(ve<0||U!==ws[ve]?Ft($t,k,Li,2):ve--)}}},Ft=(w,T,k,D,V=null)=>{const{el:N,type:Q,transition:q,children:z,shapeFlag:U}=w;if(U&6){Ft(w.component.subTree,T,k,D);return}if(U&128){w.suspense.move(T,k,D);return}if(U&64){Q.move(w,T,k,Y);return}if(Q===vt){r(N,T,k);for(let K=0;K<z.length;K++)Ft(z[K],T,k,D);r(w.anchor,T,k);return}if(Q===po){B(w,T,k);return}if(D!==2&&U&1&&q)if(D===0)q.beforeEnter(N),r(N,T,k),Mt(()=>q.enter(N),V);else{const{leave:K,delayLeave:ee,afterLeave:oe}=q,ne=()=>{w.ctx.isUnmounted?s(N):r(N,T,k)},he=()=>{K(N,()=>{ne(),oe&&oe()})};ee?ee(N,ne,he):he()}else r(N,T,k)},Be=(w,T,k,D=!1,V=!1)=>{const{type:N,props:Q,ref:q,children:z,dynamicChildren:U,shapeFlag:te,patchFlag:K,dirs:ee,cacheIndex:oe}=w;if(K===-2&&(V=!1),q!=null&&(Cn(),Po(q,null,k,w,!0),Pn()),oe!=null&&(T.renderCache[oe]=void 0),te&256){T.ctx.deactivate(w);return}const ne=te&1&&ee,he=!qs(w);let ve;if(he&&(ve=Q&&Q.onVnodeBeforeUnmount)&&nn(ve,T,w),te&6)tn(w.component,k,D);else{if(te&128){w.suspense.unmount(k,D);return}ne&&dr(w,null,T,"beforeUnmount"),te&64?w.type.remove(w,T,k,Y,D):U&&!U.hasOnce&&(N!==vt||K>0&&K&64)?kt(U,T,k,!1,!0):(N===vt&&K&384||!V&&te&16)&&kt(z,T,k),D&&je(w)}(he&&(ve=Q&&Q.onVnodeUnmounted)||ne)&&Mt(()=>{ve&&nn(ve,T,w),ne&&dr(w,null,T,"unmounted")},k)},je=w=>{const{type:T,el:k,anchor:D,transition:V}=w;if(T===vt){Mn(k,D);return}if(T===po){H(w);return}const N=()=>{s(k),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(w.shapeFlag&1&&V&&!V.persisted){const{leave:Q,delayLeave:q}=V,z=()=>Q(k,N);q?q(w.el,N,z):z()}else N()},Mn=(w,T)=>{let k;for(;w!==T;)k=g(w),s(w),w=k;s(T)},tn=(w,T,k)=>{const{bum:D,scope:V,job:N,subTree:Q,um:q,m:z,a:U,parent:te,slots:{__:K}}=w;Eh(z),Eh(U),D&&uo(D),te&&ie(K)&&K.forEach(ee=>{te.renderCache[ee]=void 0}),V.stop(),N&&(N.flags|=8,Be(Q,w,T,k)),q&&Mt(q,T),Mt(()=>{w.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},kt=(w,T,k,D=!1,V=!1,N=0)=>{for(let Q=N;Q<w.length;Q++)Be(w[Q],T,k,D,V)},O=w=>{if(w.shapeFlag&6)return O(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const T=g(w.anchor||w.el),k=T&&T[Dy];return k?g(k):T};let X=!1;const J=(w,T,k)=>{w==null?T._vnode&&Be(T._vnode,null,null,!0):x(T._vnode||null,w,T,null,null,null,k),T._vnode=w,X||(X=!0,fh(),up(),X=!1)},Y={p:x,um:Be,m:Ft,r:je,mt:Pe,mc:y,pc:ge,pbc:I,n:O,o:t};return{render:J,hydrate:void 0,createApp:sv(J)}}function Za({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function pr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function dv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Lp(t,e,n=!1){const r=t.children,s=e.children;if(ie(r)&&ie(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Gn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Lp(a,l)),l.type===pa&&(l.el=a.el),l.type===St&&!l.el&&(l.el=a.el)}}function pv(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<u?i=l+1:a=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Fp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Fp(e)}function Eh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const gv=Symbol.for("v-scx"),mv=()=>Yt(gv);function fo(t,e,n){return Up(t,e,n)}function Up(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:a}=n,l=tt({},n),c=e&&r||!e&&i!=="post";let u;if(li){if(i==="sync"){const E=mv();u=E.__watcherHandles||(E.__watcherHandles=[])}else if(!c){const E=()=>{};return E.stop=cn,E.resume=cn,E.pause=cn,E}}const f=ct;l.call=(E,R,x)=>Zt(E,f,R,x);let p=!1;i==="post"?l.scheduler=E=>{Mt(E,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(E,R)=>{R?E():gc(E)}),l.augmentJob=E=>{e&&(E.flags|=4),p&&(E.flags|=2,f&&(E.id=f.uid,E.i=f))};const g=Cy(t,e,l);return li&&(u?u.push(g):c&&g()),g}function _v(t,e,n){const r=this.proxy,s=Ge(t)?t.includes(".")?$p(r,t):()=>r[t]:t.bind(r,r);let i;ue(e)?i=e:(i=e.handler,n=e);const a=Ii(this),l=Up(s,i.bind(r),n);return a(),l}function $p(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const yv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ht(e)}Modifiers`]||t[`${Nr(e)}Modifiers`];function vv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),a=i&&yv(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>Ge(f)?f.trim():f)),a.number&&(s=n.map(yl)));let l,c=r[l=Ga(e)]||r[l=Ga(Ht(e))];!c&&i&&(c=r[l=Ga(Nr(e))]),c&&Zt(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,Zt(u,t,6,s)}}function Bp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!ue(t)){const c=u=>{const f=Bp(u,e,!0);f&&(l=!0,tt(a,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Fe(t)&&r.set(t,null),null):(ie(i)?i.forEach(c=>a[c]=null):tt(a,i),Fe(t)&&r.set(t,a),a)}function da(t,e){return!t||!na(e)?!1:(e=e.slice(2).replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Nr(e))||Re(t,e))}function wh(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:u,renderCache:f,props:p,data:g,setupState:E,ctx:R,inheritAttrs:x}=t,L=Co(t);let j,F;try{if(n.shapeFlag&4){const H=s||r,ae=H;j=an(u.call(ae,H,f,p,E,g,R)),F=l}else{const H=e;j=an(H.length>1?H(p,{attrs:l,slots:a,emit:c}):H(p,null)),F=e.props?l:Ev(l)}}catch(H){Ws.length=0,ua(H,t,1),j=se(St)}let B=j;if(F&&x!==!1){const H=Object.keys(F),{shapeFlag:ae}=B;H.length&&ae&7&&(i&&H.some(ic)&&(F=wv(F,i)),B=rr(B,F,!1,!0))}return n.dirs&&(B=rr(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&oi(B,n.transition),j=B,Co(L),j}const Ev=t=>{let e;for(const n in t)(n==="class"||n==="style"||na(n))&&((e||(e={}))[n]=t[n]);return e},wv=(t,e)=>{const n={};for(const r in t)(!ic(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Tv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Th(r,a,u):!!a;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(a[g]!==r[g]&&!da(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Th(r,a,u):!0:!!a;return!1}function Th(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!da(n,i))return!0}return!1}function bv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const jp=t=>t.__isSuspense;function Iv(t,e){e&&e.pendingBranch?ie(t)?e.effects.push(...t):e.effects.push(t):Oy(t)}const vt=Symbol.for("v-fgt"),pa=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),po=Symbol.for("v-stc"),Ws=[];let Lt=null;function fe(t=!1){Ws.push(Lt=t?null:[])}function Av(){Ws.pop(),Lt=Ws[Ws.length-1]||null}let ai=1;function bh(t,e=!1){ai+=t,t<0&&Lt&&e&&(Lt.hasOnce=!0)}function Hp(t){return t.dynamicChildren=ai>0?Lt||Xr:null,Av(),ai>0&&Lt&&Lt.push(t),t}function _e(t,e,n,r,s,i){return Hp(W(t,e,n,r,s,i,!0))}function ms(t,e,n,r,s){return Hp(se(t,e,n,r,s,!0))}function Oo(t){return t?t.__v_isVNode===!0:!1}function vr(t,e){return t.type===e.type&&t.key===e.key}const zp=({key:t})=>t??null,go=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||wt(t)||ue(t)?{i:Ot,r:t,k:e,f:!!n}:t:null);function W(t,e=null,n=null,r=0,s=null,i=t===vt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&zp(e),ref:e&&go(e),scopeId:fp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ot};return l?(Ec(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ge(n)?8:16),ai>0&&!a&&Lt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Lt.push(c),c}const se=Sv;function Sv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Qy)&&(t=St),Oo(t)){const l=rr(t,e,!0);return n&&Ec(l,n),ai>0&&!i&&Lt&&(l.shapeFlag&6?Lt[Lt.indexOf(t)]=l:Lt.push(l)),l.patchFlag=-2,l}if(Mv(t)&&(t=t.__vccOpts),e){e=qp(e);let{class:l,style:c}=e;l&&!Ge(l)&&(e.class=aa(l)),Fe(c)&&(pc(c)&&!ie(c)&&(c=tt({},c)),e.style=wi(c))}const a=Ge(t)?1:jp(t)?128:pp(t)?64:Fe(t)?4:ue(t)?2:0;return W(t,e,n,r,s,a,i,!0)}function qp(t){return t?pc(t)||xp(t)?tt({},t):t:null}function rr(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,u=e?os(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&zp(u),ref:e&&e.ref?n&&i?ie(i)?i.concat(go(e)):[i,go(e)]:go(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rr(t.ssContent),ssFallback:t.ssFallback&&rr(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&oi(f,c.clone(f)),f}function ze(t=" ",e=0){return se(pa,null,t,e)}function Gp(t,e){const n=se(po,null,t);return n.staticCount=e,n}function Wt(t="",e=!1){return e?(fe(),ms(St,null,t)):se(St,null,t)}function an(t){return t==null||typeof t=="boolean"?se(St):ie(t)?se(vt,null,t.slice()):Oo(t)?Gn(t):se(pa,null,String(t))}function Gn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rr(t)}function Ec(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ie(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Ec(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!xp(e)?e._ctx=Ot:s===3&&Ot&&(Ot.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Ot},n=32):(e=String(e),r&64?(n=16,e=[ze(e)]):n=8);t.children=e,t.shapeFlag|=n}function os(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=aa([e.class,r.class]));else if(s==="style")e.style=wi([e.style,r.style]);else if(na(s)){const i=e[s],a=r[s];a&&i!==a&&!(ie(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function nn(t,e,n,r=null){Zt(t,e,7,[n,r])}const Rv=kp();let kv=0;function Cv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Rv,i={uid:kv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Bd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dp(r,s),emitsOptions:Bp(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=vv.bind(null,i),t.ce&&t.ce(i),i}let ct=null;const Pv=()=>ct||Ot;let Do,kl;{const t=oa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Do=e("__VUE_INSTANCE_SETTERS__",n=>ct=n),kl=e("__VUE_SSR_SETTERS__",n=>li=n)}const Ii=t=>{const e=ct;return Do(t),t.scope.on(),()=>{t.scope.off(),Do(e)}},Ih=()=>{ct&&ct.scope.off(),Do(null)};function Wp(t){return t.vnode.shapeFlag&4}let li=!1;function xv(t,e=!1,n=!1){e&&kl(e);const{props:r,children:s}=t.vnode,i=Wp(t);iv(t,r,i,e),cv(t,s,n||e);const a=i?Ov(t,e):void 0;return e&&kl(!1),a}function Ov(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Xy);const{setup:r}=n;if(r){Cn();const s=t.setupContext=r.length>1?Nv(t):null,i=Ii(t),a=Ti(r,t,0,[t.props,s]),l=Nd(a);if(Pn(),i(),(l||t.sp)&&!qs(t)&&wp(t),l){if(a.then(Ih,Ih),e)return a.then(c=>{Ah(t,c)}).catch(c=>{ua(c,t,0)});t.asyncDep=a}else Ah(t,a)}else Kp(t)}function Ah(t,e,n){ue(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=op(e)),Kp(t)}function Kp(t,e,n){const r=t.type;t.render||(t.render=r.render||cn);{const s=Ii(t);Cn();try{Yy(t)}finally{Pn(),s()}}}const Dv={get(t,e){return yt(t,"get",""),t[e]}};function Nv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Dv),slots:t.slots,emit:t.emit,expose:e}}function ga(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(op(sp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)},has(e,n){return n in e||n in Gs}})):t.proxy}function Vv(t,e=!0){return ue(t)?t.displayName||t.name:t.name||e&&t.__name}function Mv(t){return ue(t)&&"__vccOpts"in t}const xt=(t,e)=>Ry(t,e,li);function wc(t,e,n){const r=arguments.length;return r===2?Fe(e)&&!ie(e)?Oo(e)?se(t,null,[e]):se(t,e):se(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Oo(n)&&(n=[n]),se(t,e,n))}const Lv="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Cl;const Sh=typeof window<"u"&&window.trustedTypes;if(Sh)try{Cl=Sh.createPolicy("vue",{createHTML:t=>t})}catch{}const Qp=Cl?t=>Cl.createHTML(t):t=>t,Fv="http://www.w3.org/2000/svg",Uv="http://www.w3.org/1998/Math/MathML",En=typeof document<"u"?document:null,Rh=En&&En.createElement("template"),$v={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?En.createElementNS(Fv,t):e==="mathml"?En.createElementNS(Uv,t):n?En.createElement(t,{is:n}):En.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>En.createTextNode(t),createComment:t=>En.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>En.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Rh.innerHTML=Qp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Rh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Bn="transition",Vs="animation",ci=Symbol("_vtc"),Jp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Bv=tt({},gp,Jp),jv=t=>(t.displayName="Transition",t.props=Bv,t),Xp=jv((t,{slots:e})=>wc(My,Hv(t),e)),gr=(t,e=[])=>{ie(t)?t.forEach(n=>n(...e)):t&&t(...e)},kh=t=>t?ie(t)?t.some(e=>e.length>1):t.length>1:!1;function Hv(t){const e={};for(const b in t)b in Jp||(e[b]=t[b]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=a,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,R=zv(s),x=R&&R[0],L=R&&R[1],{onBeforeEnter:j,onEnter:F,onEnterCancelled:B,onLeave:H,onLeaveCancelled:ae,onBeforeAppear:re=j,onAppear:A=F,onAppearCancelled:y=B}=e,_=(b,v,Pe,Je)=>{b._enterCancelled=Je,mr(b,v?f:l),mr(b,v?u:a),Pe&&Pe()},I=(b,v)=>{b._isLeaving=!1,mr(b,p),mr(b,E),mr(b,g),v&&v()},S=b=>(v,Pe)=>{const Je=b?A:F,$e=()=>_(v,b,Pe);gr(Je,[v,$e]),Ch(()=>{mr(v,b?c:i),yn(v,b?f:l),kh(Je)||Ph(v,r,x,$e)})};return tt(e,{onBeforeEnter(b){gr(j,[b]),yn(b,i),yn(b,a)},onBeforeAppear(b){gr(re,[b]),yn(b,c),yn(b,u)},onEnter:S(!1),onAppear:S(!0),onLeave(b,v){b._isLeaving=!0;const Pe=()=>I(b,v);yn(b,p),b._enterCancelled?(yn(b,g),Dh()):(Dh(),yn(b,g)),Ch(()=>{b._isLeaving&&(mr(b,p),yn(b,E),kh(H)||Ph(b,r,L,Pe))}),gr(H,[b,Pe])},onEnterCancelled(b){_(b,!1,void 0,!0),gr(B,[b])},onAppearCancelled(b){_(b,!0,void 0,!0),gr(y,[b])},onLeaveCancelled(b){I(b),gr(ae,[b])}})}function zv(t){if(t==null)return null;if(Fe(t))return[el(t.enter),el(t.leave)];{const e=el(t);return[e,e]}}function el(t){return Q_(t)}function yn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ci]||(t[ci]=new Set)).add(e)}function mr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ci];n&&(n.delete(e),n.size||(t[ci]=void 0))}function Ch(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let qv=0;function Ph(t,e,n,r){const s=t._endId=++qv,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:l,propCount:c}=Gv(t,e);if(!a)return r();const u=a+"end";let f=0;const p=()=>{t.removeEventListener(u,g),i()},g=E=>{E.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(u,g)}function Gv(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${Bn}Delay`),i=r(`${Bn}Duration`),a=xh(s,i),l=r(`${Vs}Delay`),c=r(`${Vs}Duration`),u=xh(l,c);let f=null,p=0,g=0;e===Bn?a>0&&(f=Bn,p=a,g=i.length):e===Vs?u>0&&(f=Vs,p=u,g=c.length):(p=Math.max(a,u),f=p>0?a>u?Bn:Vs:null,g=f?f===Bn?i.length:c.length:0);const E=f===Bn&&/\b(transform|all)(,|$)/.test(r(`${Bn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:E}}function xh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Oh(n)+Oh(t[r])))}function Oh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Dh(){return document.body.offsetHeight}function Wv(t,e,n){const r=t[ci];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Nh=Symbol("_vod"),Kv=Symbol("_vsh"),Qv=Symbol(""),Jv=/(^|;)\s*display\s*:/;function Xv(t,e,n){const r=t.style,s=Ge(n);let i=!1;if(n&&!s){if(e)if(Ge(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&mo(r,l,"")}else for(const a in e)n[a]==null&&mo(r,a,"");for(const a in n)a==="display"&&(i=!0),mo(r,a,n[a])}else if(s){if(e!==n){const a=r[Qv];a&&(n+=";"+a),r.cssText=n,i=Jv.test(n)}}else e&&t.removeAttribute("style");Nh in t&&(t[Nh]=i?r.display:"",t[Kv]&&(r.display="none"))}const Vh=/\s*!important$/;function mo(t,e,n){if(ie(n))n.forEach(r=>mo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Yv(t,e);Vh.test(n)?t.setProperty(Nr(r),n.replace(Vh,""),"important"):t[r]=n}}const Mh=["Webkit","Moz","ms"],tl={};function Yv(t,e){const n=tl[e];if(n)return n;let r=Ht(e);if(r!=="filter"&&r in t)return tl[e]=r;r=ia(r);for(let s=0;s<Mh.length;s++){const i=Mh[s]+r;if(i in t)return tl[e]=i}return e}const Lh="http://www.w3.org/1999/xlink";function Fh(t,e,n,r,s,i=ny(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Lh,e.slice(6,e.length)):t.setAttributeNS(Lh,e,n):n==null||i&&!Fd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":lr(n)?String(n):n)}function Uh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Qp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Fd(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Gr(t,e,n,r){t.addEventListener(e,n,r)}function Zv(t,e,n,r){t.removeEventListener(e,n,r)}const $h=Symbol("_vei");function eE(t,e,n,r,s=null){const i=t[$h]||(t[$h]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=tE(e);if(r){const u=i[e]=sE(r,s);Gr(t,l,u,c)}else a&&(Zv(t,l,a,c),i[e]=void 0)}}const Bh=/(?:Once|Passive|Capture)$/;function tE(t){let e;if(Bh.test(t)){e={};let r;for(;r=t.match(Bh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nr(t.slice(2)),e]}let nl=0;const nE=Promise.resolve(),rE=()=>nl||(nE.then(()=>nl=0),nl=Date.now());function sE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Zt(iE(r,n.value),e,5,[r])};return n.value=t,n.attached=rE(),n}function iE(t,e){if(ie(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const jh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,oE=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Wv(t,r,a):e==="style"?Xv(t,n,r):na(e)?ic(e)||eE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):aE(t,e,r,a))?(Uh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Fh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ge(r))?Uh(t,Ht(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Fh(t,e,r,a))};function aE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&jh(e)&&ue(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return jh(e)&&Ge(n)?!1:e in t}const Hh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ie(e)?n=>uo(e,n):e};function lE(t){t.target.composing=!0}function zh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rl=Symbol("_assign"),cE={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[rl]=Hh(s);const i=r||s.props&&s.props.type==="number";Gr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=yl(l)),t[rl](l)}),n&&Gr(t,"change",()=>{t.value=t.value.trim()}),e||(Gr(t,"compositionstart",lE),Gr(t,"compositionend",zh),Gr(t,"change",zh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[rl]=Hh(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?yl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},uE=["ctrl","shift","alt","meta"],hE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>uE.some(n=>t[`${n}Key`]&&!e.includes(n))},fE=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=hE[e[a]];if(l&&l(s,e))return}return t(s,...i)})},dE=tt({patchProp:oE},$v);let qh;function pE(){return qh||(qh=hv(dE))}const gE=(...t)=>{const e=pE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_E(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,mE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function mE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _E(t){return Ge(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const yE=Symbol();var Gh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Gh||(Gh={}));function vE(){const t=ry(!0),e=t.run(()=>Ar({}));let n=[],r=[];const s=sp({install(i){s._a=i,i.provide(yE,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Wr=typeof document<"u";function Yp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function EE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Yp(t.default)}const Se=Object.assign;function sl(t,e){const n={};for(const r in e){const s=e[r];n[r]=en(s)?s.map(t):t(s)}return n}const Ks=()=>{},en=Array.isArray,Zp=/#/g,wE=/&/g,TE=/\//g,bE=/=/g,IE=/\?/g,eg=/\+/g,AE=/%5B/g,SE=/%5D/g,tg=/%5E/g,RE=/%60/g,ng=/%7B/g,kE=/%7C/g,rg=/%7D/g,CE=/%20/g;function Tc(t){return encodeURI(""+t).replace(kE,"|").replace(AE,"[").replace(SE,"]")}function PE(t){return Tc(t).replace(ng,"{").replace(rg,"}").replace(tg,"^")}function Pl(t){return Tc(t).replace(eg,"%2B").replace(CE,"+").replace(Zp,"%23").replace(wE,"%26").replace(RE,"`").replace(ng,"{").replace(rg,"}").replace(tg,"^")}function xE(t){return Pl(t).replace(bE,"%3D")}function OE(t){return Tc(t).replace(Zp,"%23").replace(IE,"%3F")}function DE(t){return t==null?"":OE(t).replace(TE,"%2F")}function ui(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const NE=/\/$/,VE=t=>t.replace(NE,"");function il(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=UE(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:ui(a)}}function ME(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Wh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function LE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&as(e.matched[r],n.matched[s])&&sg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function as(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!FE(t[n],e[n]))return!1;return!0}function FE(t,e){return en(t)?Kh(t,e):en(e)?Kh(e,t):t===e}function Kh(t,e){return en(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function UE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const jn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var hi;(function(t){t.pop="pop",t.push="push"})(hi||(hi={}));var Qs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Qs||(Qs={}));function $E(t){if(!t)if(Wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),VE(t)}const BE=/^[^#]+#/;function jE(t,e){return t.replace(BE,"#")+e}function HE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ma=()=>({left:window.scrollX,top:window.scrollY});function zE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=HE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Qh(t,e){return(history.state?history.state.position-e:-1)+t}const xl=new Map;function qE(t,e){xl.set(t,e)}function GE(t){const e=xl.get(t);return xl.delete(t),e}let WE=()=>location.protocol+"//"+location.host;function ig(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Wh(c,"")}return Wh(n,t)+r+s}function KE(t,e,n,r){let s=[],i=[],a=null;const l=({state:g})=>{const E=ig(t,location),R=n.value,x=e.value;let L=0;if(g){if(n.value=E,e.value=g,a&&a===R){a=null;return}L=x?g.position-x.position:0}else r(E);s.forEach(j=>{j(n.value,R,{delta:L,type:hi.pop,direction:L?L>0?Qs.forward:Qs.back:Qs.unknown})})};function c(){a=n.value}function u(g){s.push(g);const E=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return i.push(E),E}function f(){const{history:g}=window;g.state&&g.replaceState(Se({},g.state,{scroll:ma()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Jh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ma():null}}function QE(t){const{history:e,location:n}=window,r={value:ig(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:WE()+t+c;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(E){console.error(E),n[f?"replace":"assign"](g)}}function a(c,u){const f=Se({},e.state,Jh(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,u){const f=Se({},s.value,e.state,{forward:c,scroll:ma()});i(f.current,f,!0);const p=Se({},Jh(r.value,c,null),{position:f.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function JE(t){t=$E(t);const e=QE(t),n=KE(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Se({location:"",base:t,go:r,createHref:jE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function XE(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),JE(t)}function YE(t){return typeof t=="string"||t&&typeof t=="object"}function og(t){return typeof t=="string"||typeof t=="symbol"}const ag=Symbol("");var Xh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xh||(Xh={}));function ls(t,e){return Se(new Error,{type:t,[ag]:!0},e)}function vn(t,e){return t instanceof Error&&ag in t&&(e==null||!!(t.type&e))}const Yh="[^/]+?",ZE={sensitive:!1,strict:!1,start:!0,end:!0},ew=/[.+*?^${}()[\]/\\]/g;function tw(t,e){const n=Se({},ZE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let E=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(ew,"\\$&"),E+=40;else if(g.type===1){const{value:R,repeatable:x,optional:L,regexp:j}=g;i.push({name:R,repeatable:x,optional:L});const F=j||Yh;if(F!==Yh){E+=10;try{new RegExp(`(${F})`)}catch(H){throw new Error(`Invalid custom RegExp for param "${R}" (${F}): `+H.message)}}let B=x?`((?:${F})(?:/(?:${F}))*)`:`(${F})`;p||(B=L&&u.length<2?`(?:/${B})`:"/"+B),L&&(B+="?"),s+=B,E+=20,L&&(E+=-8),x&&(E+=-20),F===".*"&&(E+=-50)}f.push(E)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(a),p={};if(!f)return null;for(let g=1;g<f.length;g++){const E=f[g]||"",R=i[g-1];p[R.name]=E&&R.repeatable?E.split("/"):E}return p}function c(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const E of g)if(E.type===0)f+=E.value;else if(E.type===1){const{value:R,repeatable:x,optional:L}=E,j=R in u?u[R]:"";if(en(j)&&!x)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const F=en(j)?j.join("/"):j;if(!F)if(L)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=F}}return f||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function nw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function lg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=nw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Zh(r))return 1;if(Zh(s))return-1}return s.length-r.length}function Zh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rw={type:0,value:""},sw=/[a-zA-Z0-9_]/;function iw(t){if(!t)return[[]];if(t==="/")return[[rw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${u}": ${E}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),a()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:sw.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),a(),s}function ow(t,e,n){const r=tw(iw(t.path),n),s=Se(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aw(t,e){const n=[],r=new Map;e=rf({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,E){const R=!E,x=tf(p);x.aliasOf=E&&E.record;const L=rf(e,p),j=[x];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const ae of H)j.push(tf(Se({},x,{components:E?E.record.components:x.components,path:ae,aliasOf:E?E.record:x})))}let F,B;for(const H of j){const{path:ae}=H;if(g&&ae[0]!=="/"){const re=g.record.path,A=re[re.length-1]==="/"?"":"/";H.path=g.record.path+(ae&&A+ae)}if(F=ow(H,g,L),E?E.alias.push(F):(B=B||F,B!==F&&B.alias.push(F),R&&p.name&&!nf(F)&&a(p.name)),cg(F)&&c(F),x.children){const re=x.children;for(let A=0;A<re.length;A++)i(re[A],F,E&&E.children[A])}E=E||F}return B?()=>{a(B)}:Ks}function a(p){if(og(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const g=uw(p,n);n.splice(g,0,p),p.record.name&&!nf(p)&&r.set(p.record.name,p)}function u(p,g){let E,R={},x,L;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw ls(1,{location:p});L=E.record.name,R=Se(ef(g.params,E.keys.filter(B=>!B.optional).concat(E.parent?E.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),p.params&&ef(p.params,E.keys.map(B=>B.name))),x=E.stringify(R)}else if(p.path!=null)x=p.path,E=n.find(B=>B.re.test(x)),E&&(R=E.parse(x),L=E.record.name);else{if(E=g.name?r.get(g.name):n.find(B=>B.re.test(g.path)),!E)throw ls(1,{location:p,currentLocation:g});L=E.record.name,R=Se({},g.params,p.params),x=E.stringify(R)}const j=[];let F=E;for(;F;)j.unshift(F.record),F=F.parent;return{name:L,path:x,params:R,matched:j,meta:cw(j)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:a,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function ef(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function tf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:lw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function lw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function nf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cw(t){return t.reduce((e,n)=>Se(e,n.meta),{})}function rf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function uw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;lg(t,e[i])<0?r=i:n=i+1}const s=hw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function hw(t){let e=t;for(;e=e.parent;)if(cg(e)&&lg(t,e)===0)return e}function cg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function fw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(eg," "),a=i.indexOf("="),l=ui(a<0?i:i.slice(0,a)),c=a<0?null:ui(i.slice(a+1));if(l in e){let u=e[l];en(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function sf(t){let e="";for(let n in t){const r=t[n];if(n=xE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(en(r)?r.map(i=>i&&Pl(i)):[r&&Pl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=en(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const pw=Symbol(""),of=Symbol(""),_a=Symbol(""),bc=Symbol(""),Ol=Symbol("");function Ms(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Wn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(ls(4,{from:n,to:e})):g instanceof Error?c(g):YE(g)?c(ls(2,{from:e,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function ol(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(Yp(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Wn(f,n,r,a,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=EE(f)?f.default:f;a.mods[l]=f,a.components[l]=p;const E=(p.__vccOpts||p)[e];return E&&Wn(E,n,r,a,l,s)()}))}}return i}function af(t){const e=Yt(_a),n=Yt(bc),r=xt(()=>{const c=we(t.to);return e.resolve(c)}),s=xt(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(as.bind(null,f));if(g>-1)return g;const E=lf(c[u-2]);return u>1&&lf(f)===E&&p[p.length-1].path!==E?p.findIndex(as.bind(null,c[u-2])):g}),i=xt(()=>s.value>-1&&yw(n.params,r.value.params)),a=xt(()=>s.value>-1&&s.value===n.matched.length-1&&sg(n.params,r.value.params));function l(c={}){if(_w(c)){const u=e[we(t.replace)?"replace":"push"](we(t.to)).catch(Ks);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:xt(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function gw(t){return t.length===1?t[0]:t}const mw=Ep({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:af,setup(t,{slots:e}){const n=ca(af(t)),{options:r}=Yt(_a),s=xt(()=>({[cf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[cf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&gw(e.default(n));return t.custom?i:wc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Xe=mw;function _w(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!en(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function lf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const cf=(t,e,n)=>t??e??n,vw=Ep({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Yt(Ol),s=xt(()=>t.route||r.value),i=Yt(of,0),a=xt(()=>{let u=we(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=xt(()=>s.value.matched[a.value]);ho(of,xt(()=>a.value+1)),ho(pw,l),ho(Ol,s);const c=Ar();return fo(()=>[c.value,l.value,t.name],([u,f,p],[g,E,R])=>{f&&(f.instances[p]=u,E&&E!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=E.leaveGuards),f.updateGuards.size||(f.updateGuards=E.updateGuards))),u&&f&&(!E||!as(f,E)||!g)&&(f.enterCallbacks[p]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return uf(n.default,{Component:g,route:u});const E=p.props[f],R=E?E===!0?u.params:typeof E=="function"?E(u):E:null,L=wc(g,Se({},R,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return uf(n.default,{Component:L,route:u})||L}}});function uf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Ic=vw;function Ew(t){const e=aw(t.routes,t),n=t.parseQuery||fw,r=t.stringifyQuery||sf,s=t.history,i=Ms(),a=Ms(),l=Ms(),c=by(jn);let u=jn;Wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=sl.bind(null,O=>""+O),p=sl.bind(null,DE),g=sl.bind(null,ui);function E(O,X){let J,Y;return og(O)?(J=e.getRecordMatcher(O),Y=X):Y=O,e.addRoute(Y,J)}function R(O){const X=e.getRecordMatcher(O);X&&e.removeRoute(X)}function x(){return e.getRoutes().map(O=>O.record)}function L(O){return!!e.getRecordMatcher(O)}function j(O,X){if(X=Se({},X||c.value),typeof O=="string"){const k=il(n,O,X.path),D=e.resolve({path:k.path},X),V=s.createHref(k.fullPath);return Se(k,D,{params:g(D.params),hash:ui(k.hash),redirectedFrom:void 0,href:V})}let J;if(O.path!=null)J=Se({},O,{path:il(n,O.path,X.path).path});else{const k=Se({},O.params);for(const D in k)k[D]==null&&delete k[D];J=Se({},O,{params:p(k)}),X.params=p(X.params)}const Y=e.resolve(J,X),be=O.hash||"";Y.params=f(g(Y.params));const w=ME(r,Se({},O,{hash:PE(be),path:Y.path})),T=s.createHref(w);return Se({fullPath:w,hash:be,query:r===sf?dw(O.query):O.query||{}},Y,{redirectedFrom:void 0,href:T})}function F(O){return typeof O=="string"?il(n,O,c.value.path):Se({},O)}function B(O,X){if(u!==O)return ls(8,{from:X,to:O})}function H(O){return A(O)}function ae(O){return H(Se(F(O),{replace:!0}))}function re(O){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:J}=X;let Y=typeof J=="function"?J(O):J;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=F(Y):{path:Y},Y.params={}),Se({query:O.query,hash:O.hash,params:Y.path!=null?{}:O.params},Y)}}function A(O,X){const J=u=j(O),Y=c.value,be=O.state,w=O.force,T=O.replace===!0,k=re(J);if(k)return A(Se(F(k),{state:typeof k=="object"?Se({},be,k.state):be,force:w,replace:T}),X||J);const D=J;D.redirectedFrom=X;let V;return!w&&LE(r,Y,J)&&(V=ls(16,{to:D,from:Y}),Ft(Y,Y,!0,!1)),(V?Promise.resolve(V):I(D,Y)).catch(N=>vn(N)?vn(N,2)?N:zt(N):ge(N,D,Y)).then(N=>{if(N){if(vn(N,2))return A(Se({replace:T},F(N.to),{state:typeof N.to=="object"?Se({},be,N.to.state):be,force:w}),X||D)}else N=b(D,Y,!0,T,be);return S(D,Y,N),N})}function y(O,X){const J=B(O,X);return J?Promise.reject(J):Promise.resolve()}function _(O){const X=Mn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(O):O()}function I(O,X){let J;const[Y,be,w]=ww(O,X);J=ol(Y.reverse(),"beforeRouteLeave",O,X);for(const k of Y)k.leaveGuards.forEach(D=>{J.push(Wn(D,O,X))});const T=y.bind(null,O,X);return J.push(T),kt(J).then(()=>{J=[];for(const k of i.list())J.push(Wn(k,O,X));return J.push(T),kt(J)}).then(()=>{J=ol(be,"beforeRouteUpdate",O,X);for(const k of be)k.updateGuards.forEach(D=>{J.push(Wn(D,O,X))});return J.push(T),kt(J)}).then(()=>{J=[];for(const k of w)if(k.beforeEnter)if(en(k.beforeEnter))for(const D of k.beforeEnter)J.push(Wn(D,O,X));else J.push(Wn(k.beforeEnter,O,X));return J.push(T),kt(J)}).then(()=>(O.matched.forEach(k=>k.enterCallbacks={}),J=ol(w,"beforeRouteEnter",O,X,_),J.push(T),kt(J))).then(()=>{J=[];for(const k of a.list())J.push(Wn(k,O,X));return J.push(T),kt(J)}).catch(k=>vn(k,8)?k:Promise.reject(k))}function S(O,X,J){l.list().forEach(Y=>_(()=>Y(O,X,J)))}function b(O,X,J,Y,be){const w=B(O,X);if(w)return w;const T=X===jn,k=Wr?history.state:{};J&&(Y||T?s.replace(O.fullPath,Se({scroll:T&&k&&k.scroll},be)):s.push(O.fullPath,be)),c.value=O,Ft(O,X,J,T),zt()}let v;function Pe(){v||(v=s.listen((O,X,J)=>{if(!tn.listening)return;const Y=j(O),be=re(Y);if(be){A(Se(be,{replace:!0,force:!0}),Y).catch(Ks);return}u=Y;const w=c.value;Wr&&qE(Qh(w.fullPath,J.delta),ma()),I(Y,w).catch(T=>vn(T,12)?T:vn(T,2)?(A(Se(F(T.to),{force:!0}),Y).then(k=>{vn(k,20)&&!J.delta&&J.type===hi.pop&&s.go(-1,!1)}).catch(Ks),Promise.reject()):(J.delta&&s.go(-J.delta,!1),ge(T,Y,w))).then(T=>{T=T||b(Y,w,!1),T&&(J.delta&&!vn(T,8)?s.go(-J.delta,!1):J.type===hi.pop&&vn(T,20)&&s.go(-1,!1)),S(Y,w,T)}).catch(Ks)}))}let Je=Ms(),$e=Ms(),ye;function ge(O,X,J){zt(O);const Y=$e.list();return Y.length?Y.forEach(be=>be(O,X,J)):console.error(O),Promise.reject(O)}function Nt(){return ye&&c.value!==jn?Promise.resolve():new Promise((O,X)=>{Je.add([O,X])})}function zt(O){return ye||(ye=!O,Pe(),Je.list().forEach(([X,J])=>O?J(O):X()),Je.reset()),O}function Ft(O,X,J,Y){const{scrollBehavior:be}=t;if(!Wr||!be)return Promise.resolve();const w=!J&&GE(Qh(O.fullPath,0))||(Y||!J)&&history.state&&history.state.scroll||null;return lp().then(()=>be(O,X,w)).then(T=>T&&zE(T)).catch(T=>ge(T,O,X))}const Be=O=>s.go(O);let je;const Mn=new Set,tn={currentRoute:c,listening:!0,addRoute:E,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:L,getRoutes:x,resolve:j,options:t,push:H,replace:ae,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:$e.add,isReady:Nt,install(O){const X=this;O.component("RouterLink",Xe),O.component("RouterView",Ic),O.config.globalProperties.$router=X,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>we(c)}),Wr&&!je&&c.value===jn&&(je=!0,H(s.location).catch(be=>{}));const J={};for(const be in jn)Object.defineProperty(J,be,{get:()=>c.value[be],enumerable:!0});O.provide(_a,X),O.provide(bc,np(J)),O.provide(Ol,c);const Y=O.unmount;Mn.add(O),O.unmount=function(){Mn.delete(O),Mn.size<1&&(u=jn,v&&v(),v=null,c.value=jn,je=!1,ye=!1),Y()}}};function kt(O){return O.reduce((X,J)=>X.then(()=>_(J)),Promise.resolve())}return tn}function ww(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(u=>as(u,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(u=>as(u,c))||s.push(c))}return[n,r,s]}function Hk(){return Yt(_a)}function zk(t){return Yt(bc)}const nt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Tw={class:"header"},bw={class:"nav desktop-nav"},Iw={key:0,class:"nav mobile-drawer"},Aw={__name:"Header",setup(t){const e=Ar(!1);function n(r){const s=document.querySelector(".mobile-drawer"),i=document.querySelector(".hamburger");e.value&&s&&!s.contains(r.target)&&!i.contains(r.target)&&(e.value=!1)}return mc(()=>{document.addEventListener("click",n)}),_c(()=>{document.removeEventListener("click",n)}),(r,s)=>(fe(),_e("header",Tw,[se(we(Xe),{to:"/",class:"logo"},{default:We(()=>s[6]||(s[6]=[ze("Association of Family Psychiatrists")])),_:1,__:[6]}),W("button",{class:"hamburger",onClick:s[0]||(s[0]=i=>e.value=!e.value),"aria-label":"Toggle Menu"},"☰"),W("nav",bw,[se(we(Xe),{to:"/about","exact-active-class":"active",class:"nav-link"},{default:We(()=>s[7]||(s[7]=[ze("About")])),_:1,__:[7]}),se(we(Xe),{to:"/resources","exact-active-class":"active",class:"nav-link"},{default:We(()=>s[8]||(s[8]=[ze("Resources")])),_:1,__:[8]}),se(we(Xe),{to:"/events","exact-active-class":"active",class:"nav-link"},{default:We(()=>s[9]||(s[9]=[ze("Events")])),_:1,__:[9]}),se(we(Xe),{to:"/members","exact-active-class":"active",class:"nav-link"},{default:We(()=>s[10]||(s[10]=[ze("Members")])),_:1,__:[10]}),se(we(Xe),{to:"/membership",class:"member-button"},{default:We(()=>s[11]||(s[11]=[ze("Become a Member")])),_:1,__:[11]})]),se(Xp,{name:"slide"},{default:We(()=>[e.value?(fe(),_e("nav",Iw,[se(we(Xe),{to:"/about","exact-active-class":"active",onClick:s[1]||(s[1]=i=>e.value=!1)},{default:We(()=>s[12]||(s[12]=[ze("About")])),_:1,__:[12]}),se(we(Xe),{to:"/resources","exact-active-class":"active",onClick:s[2]||(s[2]=i=>e.value=!1)},{default:We(()=>s[13]||(s[13]=[ze("Resources")])),_:1,__:[13]}),se(we(Xe),{to:"/members","exact-active-class":"active",onClick:s[3]||(s[3]=i=>e.value=!1)},{default:We(()=>s[14]||(s[14]=[ze("Members")])),_:1,__:[14]}),se(we(Xe),{to:"/events","exact-active-class":"active",onClick:s[4]||(s[4]=i=>e.value=!1)},{default:We(()=>s[15]||(s[15]=[ze("Events")])),_:1,__:[15]}),se(we(Xe),{to:"/membership",onClick:s[5]||(s[5]=i=>e.value=!1),class:"member-button mobile-member-button"},{default:We(()=>s[16]||(s[16]=[ze(" Become a Member ")])),_:1,__:[16]})])):Wt("",!0)]),_:1})]))}},Sw=nt(Aw,[["__scopeId","data-v-26cdc8df"]]),Rw=()=>{};var hf={};/**
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
 */const ug=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},hg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,E=u&63;c||(E=64,a||(g=64)),r.push(n[f],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ug(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new Cw;const g=i<<2|l>>4;if(r.push(g),u!==64){const E=l<<4&240|u>>2;if(r.push(E),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Cw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pw=function(t){const e=ug(t);return hg.encodeByteArray(e,!0)},No=function(t){return Pw(t).replace(/\./g,"")},fg=function(t){try{return hg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ow=()=>xw().__FIREBASE_DEFAULTS__,Dw=()=>{if(typeof process>"u"||typeof hf>"u")return;const t=hf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&fg(t[1]);return e&&JSON.parse(e)},ya=()=>{try{return Rw()||Ow()||Dw()||Nw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},dg=t=>{var e,n;return(n=(e=ya())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vw=t=>{const e=dg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},pg=()=>{var t;return(t=ya())===null||t===void 0?void 0:t.config},gg=t=>{var e;return(e=ya())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Mw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Ai(t){return t.endsWith(".cloudworkstations.dev")}async function mg(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Lw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[No(JSON.stringify(n)),No(JSON.stringify(a)),""].join(".")}const Js={};function Fw(){const t={prod:[],emulator:[]};for(const e of Object.keys(Js))Js[e]?t.emulator.push(e):t.prod.push(e);return t}function Uw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let ff=!1;function _g(t,e){if(typeof window>"u"||typeof document>"u"||!Ai(window.location.host)||Js[t]===e||Js[t]||ff)return;Js[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Fw().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,E){g.setAttribute("width","24"),g.setAttribute("id",E),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{ff=!0,a()},g}function f(g,E){g.setAttribute("id",E),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=Uw(r),E=n("text"),R=document.getElementById(E)||document.createElement("span"),x=n("learnmore"),L=document.getElementById(x)||document.createElement("a"),j=n("preprendIcon"),F=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const B=g.element;l(B),f(L,x);const H=u();c(F,j),B.append(F,R,L,H),document.body.appendChild(B)}i?(R.innerText="Preview backend disconnected.",F.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",E)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $w(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function Bw(){var t;const e=(t=ya())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qw(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gw(){return!Bw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ww(){try{return typeof indexedDB=="object"}catch{return!1}}function Kw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Qw="FirebaseError";class Vn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Qw,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Jw(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Vn(s,l,r)}}function Jw(t,e){return t.replace(Xw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Xw=/\{\$([^}]+)}/g;function Yw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(df(i)&&df(a)){if(!Sr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function df(t){return t!==null&&typeof t=="object"}/**
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
 */function Ri(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zw(t,e){const n=new eT(t,e);return n.subscribe.bind(n)}class eT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=al),s.error===void 0&&(s.error=al),s.complete===void 0&&(s.complete=al);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function al(){}/**
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
 */function fn(t){return t&&t._delegate?t._delegate:t}class Rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yr="[DEFAULT]";/**
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
 */class nT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sT(e))try{this.getOrInitializeService({instanceIdentifier:yr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=yr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yr){return this.instances.has(e)}getOptions(e=yr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=yr){return this.component?this.component.multipleInstances?e:yr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rT(t){return t===yr?void 0:t}function sT(t){return t.instantiationMode==="EAGER"}/**
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
 */class iT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const oT={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},aT=me.INFO,lT={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},cT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ac{constructor(e){this.name=e,this._logLevel=aT,this._logHandler=cT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const uT=(t,e)=>e.some(n=>t instanceof n);let pf,gf;function hT(){return pf||(pf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fT(){return gf||(gf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const yg=new WeakMap,Dl=new WeakMap,vg=new WeakMap,ll=new WeakMap,Sc=new WeakMap;function dT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(Zn(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&yg.set(n,t)}).catch(()=>{}),Sc.set(e,t),e}function pT(t){if(Dl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Dl.set(t,e)}let Nl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Dl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gT(t){Nl=t(Nl)}function mT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cl(this),e,...n);return vg.set(r,e.sort?e.sort():[e]),Zn(r)}:fT().includes(t)?function(...e){return t.apply(cl(this),e),Zn(yg.get(this))}:function(...e){return Zn(t.apply(cl(this),e))}}function _T(t){return typeof t=="function"?mT(t):(t instanceof IDBTransaction&&pT(t),uT(t,hT())?new Proxy(t,Nl):t)}function Zn(t){if(t instanceof IDBRequest)return dT(t);if(ll.has(t))return ll.get(t);const e=_T(t);return e!==t&&(ll.set(t,e),Sc.set(e,t)),e}const cl=t=>Sc.get(t);function yT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=Zn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Zn(a.result),c.oldVersion,c.newVersion,Zn(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const vT=["get","getKey","getAll","getAllKeys","count"],ET=["put","add","delete","clear"],ul=new Map;function mf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ul.get(e))return ul.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=ET.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vT.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return ul.set(e,i),i}gT(t=>({...t,get:(e,n,r)=>mf(e,n)||t.get(e,n,r),has:(e,n)=>!!mf(e,n)||t.has(e,n)}));/**
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
 */class wT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(TT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function TT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vl="@firebase/app",_f="0.13.0";/**
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
 */const xn=new Ac("@firebase/app"),bT="@firebase/app-compat",IT="@firebase/analytics-compat",AT="@firebase/analytics",ST="@firebase/app-check-compat",RT="@firebase/app-check",kT="@firebase/auth",CT="@firebase/auth-compat",PT="@firebase/database",xT="@firebase/data-connect",OT="@firebase/database-compat",DT="@firebase/functions",NT="@firebase/functions-compat",VT="@firebase/installations",MT="@firebase/installations-compat",LT="@firebase/messaging",FT="@firebase/messaging-compat",UT="@firebase/performance",$T="@firebase/performance-compat",BT="@firebase/remote-config",jT="@firebase/remote-config-compat",HT="@firebase/storage",zT="@firebase/storage-compat",qT="@firebase/firestore",GT="@firebase/ai",WT="@firebase/firestore-compat",KT="firebase",QT="11.8.0";/**
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
 */const Ml="[DEFAULT]",JT={[Vl]:"fire-core",[bT]:"fire-core-compat",[AT]:"fire-analytics",[IT]:"fire-analytics-compat",[RT]:"fire-app-check",[ST]:"fire-app-check-compat",[kT]:"fire-auth",[CT]:"fire-auth-compat",[PT]:"fire-rtdb",[xT]:"fire-data-connect",[OT]:"fire-rtdb-compat",[DT]:"fire-fn",[NT]:"fire-fn-compat",[VT]:"fire-iid",[MT]:"fire-iid-compat",[LT]:"fire-fcm",[FT]:"fire-fcm-compat",[UT]:"fire-perf",[$T]:"fire-perf-compat",[BT]:"fire-rc",[jT]:"fire-rc-compat",[HT]:"fire-gcs",[zT]:"fire-gcs-compat",[qT]:"fire-fst",[WT]:"fire-fst-compat",[GT]:"fire-vertex","fire-js":"fire-js",[KT]:"fire-js-all"};/**
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
 */const Vo=new Map,XT=new Map,Ll=new Map;function yf(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cs(t){const e=t.name;if(Ll.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;Ll.set(e,t);for(const n of Vo.values())yf(n,t);for(const n of XT.values())yf(n,t);return!0}function Rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ln(t){return t==null?!1:t.settings!==void 0}/**
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
 */const YT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},er=new Si("app","Firebase",YT);/**
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
 */class ZT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
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
 */const _s=QT;function Eg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ml,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw er.create("bad-app-name",{appName:String(s)});if(n||(n=pg()),!n)throw er.create("no-options");const i=Vo.get(s);if(i){if(Sr(n,i.options)&&Sr(r,i.config))return i;throw er.create("duplicate-app",{appName:s})}const a=new iT(s);for(const c of Ll.values())a.addComponent(c);const l=new ZT(n,r,a);return Vo.set(s,l),l}function wg(t=Ml){const e=Vo.get(t);if(!e&&t===Ml&&pg())return Eg();if(!e)throw er.create("no-app",{appName:t});return e}function tr(t,e,n){var r;let s=(r=JT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(l.join(" "));return}cs(new Rr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const eb="firebase-heartbeat-database",tb=1,fi="firebase-heartbeat-store";let hl=null;function Tg(){return hl||(hl=yT(eb,tb,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(fi)}catch(n){console.warn(n)}}}}).catch(t=>{throw er.create("idb-open",{originalErrorMessage:t.message})})),hl}async function nb(t){try{const n=(await Tg()).transaction(fi),r=await n.objectStore(fi).get(bg(t));return await n.done,r}catch(e){if(e instanceof Vn)xn.warn(e.message);else{const n=er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function vf(t,e){try{const r=(await Tg()).transaction(fi,"readwrite");await r.objectStore(fi).put(e,bg(t)),await r.done}catch(n){if(n instanceof Vn)xn.warn(n.message);else{const r=er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function bg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rb=1024,sb=30;class ib{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ab(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Ef();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>sb){const a=lb(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ef(),{heartbeatsToSend:r,unsentEntries:s}=ob(this._heartbeatsCache.heartbeats),i=No(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xn.warn(n),""}}}function Ef(){return new Date().toISOString().substring(0,10)}function ob(t,e=rb){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),wf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),wf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ab{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ww()?Kw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nb(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return vf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function wf(t){return No(JSON.stringify({version:2,heartbeats:t})).length}function lb(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function cb(t){cs(new Rr("platform-logger",e=>new wT(e),"PRIVATE")),cs(new Rr("heartbeat",e=>new ib(e),"PRIVATE")),tr(Vl,_f,t),tr(Vl,_f,"esm2017"),tr("fire-js","")}cb("");var ub="firebase",hb="11.8.1";/**
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
 */tr(ub,hb,"app");function kc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Ig(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fb=Ig,Ag=new Si("auth","Firebase",Ig());/**
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
 */const Mo=new Ac("@firebase/auth");function db(t,...e){Mo.logLevel<=me.WARN&&Mo.warn(`Auth (${_s}): ${t}`,...e)}function _o(t,...e){Mo.logLevel<=me.ERROR&&Mo.error(`Auth (${_s}): ${t}`,...e)}/**
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
 */function On(t,...e){throw Cc(t,...e)}function un(t,...e){return Cc(t,...e)}function Sg(t,e,n){const r=Object.assign(Object.assign({},fb()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function Tr(t){return Sg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Cc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ag.create(t,...e)}function le(t,e,...n){if(!t)throw Cc(e,...n)}function bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _o(e),new Error(e)}function Dn(t,e){t||bn(e)}/**
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
 */function Fl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pb(){return Tf()==="http:"||Tf()==="https:"}function Tf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function gb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pb()||Hw()||"connection"in navigator)?navigator.onLine:!0}function mb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ki{constructor(e,n){this.shortDelay=e,this.longDelay=n,Dn(n>e,"Short delay should be less than long delay!"),this.isMobile=$w()||zw()}get(){return gb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Pc(t,e){Dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Rg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _b={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const yb=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vb=new ki(3e4,6e4);function xc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ys(t,e,n,r,s={}){return kg(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ri(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return jw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ai(t.emulatorConfig.host)&&(u.credentials="include"),Rg.fetch()(await Cg(t,t.config.apiHost,n,l),u)})}async function kg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_b),e);try{const s=new wb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ro(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw ro(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw ro(t,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Sg(t,f,u);On(t,f)}}catch(s){if(s instanceof Vn)throw s;On(t,"network-request-failed",{message:String(s)})}}async function Eb(t,e,n,r,s={}){const i=await ys(t,e,n,r,s);return"mfaPendingCredential"in i&&On(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Cg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Pc(t.config,s):`${t.config.apiScheme}://${s}`;return yb.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class wb{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(un(this.auth,"network-request-failed")),vb.get())})}}function ro(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=un(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function Tb(t,e){return ys(t,"POST","/v1/accounts:delete",e)}async function Lo(t,e){return ys(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Xs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bb(t,e=!1){const n=fn(t),r=await n.getIdToken(e),s=Oc(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Xs(fl(s.auth_time)),issuedAtTime:Xs(fl(s.iat)),expirationTime:Xs(fl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function fl(t){return Number(t)*1e3}function Oc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _o("JWT malformed, contained fewer than 3 sections"),null;try{const s=fg(n);return s?JSON.parse(s):(_o("Failed to decode base64 JWT payload"),null)}catch(s){return _o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function bf(t){const e=Oc(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function di(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Vn&&Ib(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ib({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Ab{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ul{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xs(this.lastLoginAt),this.creationTime=Xs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await di(t,Lo(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Pg(i.providerUserInfo):[],l=Rb(t.providerData,a),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Ul(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function Sb(t){const e=fn(t);await Fo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Rb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Pg(t){return t.map(e=>{var{providerId:n}=e,r=kc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function kb(t,e){const n=await kg(t,{},async()=>{const r=Ri({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await Cg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Rg.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Cb(t,e){return ys(t,"POST","/v2/accounts:revokeToken",xc(t,e))}/**
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
 */class ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):bf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=bf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await kb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new ns;return r&&(le(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ns,this.toJSON())}_performRefresh(){return bn("not implemented")}}/**
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
 */function Hn(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Qt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=kc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Ab(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ul(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await di(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bb(this,e)}reload(){return Sb(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Qt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(Tr(this.auth));const e=await this.getIdToken();return await di(this,Tb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(a=n.photoURL)!==null&&a!==void 0?a:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,L=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,j=(u=n.createdAt)!==null&&u!==void 0?u:void 0,F=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:H,isAnonymous:ae,providerData:re,stsTokenManager:A}=n;le(B&&A,e,"internal-error");const y=ns.fromJSON(this.name,A);le(typeof B=="string",e,"internal-error"),Hn(p,e.name),Hn(g,e.name),le(typeof H=="boolean",e,"internal-error"),le(typeof ae=="boolean",e,"internal-error"),Hn(E,e.name),Hn(R,e.name),Hn(x,e.name),Hn(L,e.name),Hn(j,e.name),Hn(F,e.name);const _=new Qt({uid:B,auth:e,email:g,emailVerified:H,displayName:p,isAnonymous:ae,photoURL:R,phoneNumber:E,tenantId:x,stsTokenManager:y,createdAt:j,lastLoginAt:F});return re&&Array.isArray(re)&&(_.providerData=re.map(I=>Object.assign({},I))),L&&(_._redirectEventId=L),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new ns;s.updateFromServerResponse(n);const i=new Qt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Pg(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ns;l.updateFromIdToken(r);const c=new Qt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ul(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const If=new Map;function In(t){Dn(t instanceof Function,"Expected a class definition");let e=If.get(t);return e?(Dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,If.set(t,e),e)}/**
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
 */class xg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}xg.type="NONE";const Af=xg;/**
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
 */function yo(t,e,n){return`firebase:${t}:${e}:${n}`}class rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=yo(this.userKey,s.apiKey,i),this.fullPersistenceKey=yo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Lo(this.auth,{idToken:e}).catch(()=>{});return n?Qt._fromGetAccountInfoResponse(this.auth,n,e):null}return Qt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rs(In(Af),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||In(Af);const a=yo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(a);if(f){let p;if(typeof f=="string"){const g=await Lo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Qt._fromGetAccountInfoResponse(e,g,f)}else p=Qt._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new rs(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new rs(i,e,r))}}/**
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
 */function Sf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Og(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lg(e))return"Blackberry";if(Fg(e))return"Webos";if(Dg(e))return"Safari";if((e.includes("chrome/")||Ng(e))&&!e.includes("edge/"))return"Chrome";if(Mg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Og(t=Tt()){return/firefox\//i.test(t)}function Dg(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ng(t=Tt()){return/crios\//i.test(t)}function Vg(t=Tt()){return/iemobile/i.test(t)}function Mg(t=Tt()){return/android/i.test(t)}function Lg(t=Tt()){return/blackberry/i.test(t)}function Fg(t=Tt()){return/webos/i.test(t)}function Dc(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Pb(t=Tt()){var e;return Dc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xb(){return qw()&&document.documentMode===10}function Ug(t=Tt()){return Dc(t)||Mg(t)||Fg(t)||Lg(t)||/windows phone/i.test(t)||Vg(t)}/**
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
 */function $g(t,e=[]){let n;switch(t){case"Browser":n=Sf(Tt());break;case"Worker":n=`${Sf(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${_s}/${r}`}/**
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
 */class Ob{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Db(t,e={}){return ys(t,"GET","/v2/passwordPolicy",xc(t,e))}/**
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
 */const Nb=6;class Vb{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:Nb,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class Mb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rf(this),this.idTokenSubscription=new Rf(this),this.beforeStateQueue=new Ob(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ag,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await rs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Lo(this,{idToken:e}),r=await Qt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ln(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(Tr(this));const n=e?fn(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(Tr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(Tr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Db(this),n=new Vb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await rs.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$g(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(ln(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&db(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nc(t){return fn(t)}class Rf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zw(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Vc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Lb(t){Vc=t}function Fb(t){return Vc.loadJS(t)}function Ub(){return Vc.gapiScript}function $b(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function Bb(t,e){const n=Rc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Sr(i,e??{}))return s;On(s,"already-initialized")}return n.initialize({options:e})}function jb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Hb(t,e,n){const r=Nc(t);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Bg(e),{host:a,port:l}=zb(e),c=l===null?"":`:${l}`,u={url:`${i}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(Sr(u,r.config.emulator)&&Sr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ai(a)?(mg(`${i}//${a}${c}`),_g("Auth",!0)):qb()}function Bg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zb(t){const e=Bg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:kf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:kf(a)}}}function kf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class jg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return bn("not implemented")}_getIdTokenResponse(e){return bn("not implemented")}_linkToIdToken(e,n){return bn("not implemented")}_getReauthenticationResolver(e){return bn("not implemented")}}/**
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
 */async function ss(t,e){return Eb(t,"POST","/v1/accounts:signInWithIdp",xc(t,e))}/**
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
 */const Gb="http://localhost";class kr extends jg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):On("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=kc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new kr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ss(e,n)}buildRequest(){const e={requestUri:Gb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ri(n)}return e}}/**
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
 */class Hg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ci extends Hg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kn extends Ci{constructor(){super("facebook.com")}static credential(e){return kr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kn.PROVIDER_ID="facebook.com";/**
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
 */class Qn extends Ci{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.GOOGLE_SIGN_IN_METHOD="google.com";Qn.PROVIDER_ID="google.com";/**
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
 */class Jn extends Ci{constructor(){super("github.com")}static credential(e){return kr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.GITHUB_SIGN_IN_METHOD="github.com";Jn.PROVIDER_ID="github.com";/**
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
 */class Xn extends Ci{constructor(){super("twitter.com")}static credential(e,n){return kr._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.TWITTER_SIGN_IN_METHOD="twitter.com";Xn.PROVIDER_ID="twitter.com";/**
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
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Qt._fromIdTokenResponse(e,r,s),a=Cf(r);return new us({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Cf(r);return new us({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Cf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Uo extends Vn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Uo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Uo(e,n,r,s)}}function zg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Uo._fromErrorAndOperation(t,i,e,r):i})}async function Wb(t,e,n=!1){const r=await di(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
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
 */async function Kb(t,e,n=!1){const{auth:r}=t;if(ln(r.app))return Promise.reject(Tr(r));const s="reauthenticate";try{const i=await di(t,zg(r,s,e,t),n);le(i.idToken,r,"internal-error");const a=Oc(i.idToken);le(a,r,"internal-error");const{sub:l}=a;return le(t.uid===l,r,"user-mismatch"),us._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&On(r,"user-mismatch"),i}}/**
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
 */async function Qb(t,e,n=!1){if(ln(t.app))return Promise.reject(Tr(t));const r="signIn",s=await zg(t,r,e),i=await us._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function Jb(t,e,n,r){return fn(t).onIdTokenChanged(e,n,r)}function Xb(t,e,n){return fn(t).beforeAuthStateChanged(e,n)}const $o="__sak";/**
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
 */class qg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem($o,"1"),this.storage.removeItem($o),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Yb=1e3,Zb=10;class Gg extends qg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ug(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);xb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Zb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Yb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gg.type="LOCAL";const e0=Gg;/**
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
 */class Wg extends qg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wg.type="SESSION";const Kg=Wg;/**
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
 */function t0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async u=>u(n.origin,i)),c=await t0(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}va.receivers=[];/**
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
 */function Mc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class n0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const u=Mc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function hn(){return window}function r0(t){hn().location.href=t}/**
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
 */function Qg(){return typeof hn().WorkerGlobalScope<"u"&&typeof hn().importScripts=="function"}async function s0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function i0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function o0(){return Qg()?self:null}/**
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
 */const Jg="firebaseLocalStorageDb",a0=1,Bo="firebaseLocalStorage",Xg="fbase_key";class Pi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ea(t,e){return t.transaction([Bo],e?"readwrite":"readonly").objectStore(Bo)}function l0(){const t=indexedDB.deleteDatabase(Jg);return new Pi(t).toPromise()}function $l(){const t=indexedDB.open(Jg,a0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bo,{keyPath:Xg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bo)?e(r):(r.close(),await l0(),e(await $l()))})})}async function Pf(t,e,n){const r=Ea(t,!0).put({[Xg]:e,value:n});return new Pi(r).toPromise()}async function c0(t,e){const n=Ea(t,!1).get(e),r=await new Pi(n).toPromise();return r===void 0?null:r.value}function xf(t,e){const n=Ea(t,!0).delete(e);return new Pi(n).toPromise()}const u0=800,h0=3;class Yg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await $l(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>h0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Qg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=va._getInstance(o0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await s0(),!this.activeServiceWorker)return;this.sender=new n0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||i0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $l();return await Pf(e,$o,"1"),await xf(e,$o),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>c0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ea(s,!1).getAll();return new Pi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),u0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Yg.type="LOCAL";const f0=Yg;new ki(3e4,6e4);/**
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
 */function d0(t,e){return e?In(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Lc extends jg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function p0(t){return Qb(t.auth,new Lc(t),t.bypassAuthState)}function g0(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),Kb(n,new Lc(t),t.bypassAuthState)}async function m0(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),Wb(n,new Lc(t),t.bypassAuthState)}/**
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
 */class Zg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return p0;case"linkViaPopup":case"linkViaRedirect":return m0;case"reauthViaPopup":case"reauthViaRedirect":return g0;default:On(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _0=new ki(2e3,1e4);class Jr extends Zg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Jr.currentPopupAction&&Jr.currentPopupAction.cancel(),Jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Mc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(un(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(un(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(un(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_0.get())};e()}}Jr.currentPopupAction=null;/**
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
 */const y0="pendingRedirect",vo=new Map;class v0 extends Zg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=vo.get(this.auth._key());if(!e){try{const r=await E0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}vo.set(this.auth._key(),e)}return this.bypassAuthState||vo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function E0(t,e){const n=b0(e),r=T0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function w0(t,e){vo.set(t._key(),e)}function T0(t){return In(t._redirectPersistence)}function b0(t){return yo(y0,t.config.apiKey,t.name)}async function I0(t,e,n=!1){if(ln(t.app))return Promise.reject(Tr(t));const r=Nc(t),s=d0(r,e),a=await new v0(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const A0=10*60*1e3;class S0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!R0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!em(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(un(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Of(e))}saveEventToCache(e){this.cachedEventUids.add(Of(e)),this.lastProcessedEventTime=Date.now()}}function Of(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function em({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function R0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return em(t);default:return!1}}/**
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
 */async function k0(t,e={}){return ys(t,"GET","/v1/projects",e)}/**
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
 */const C0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P0=/^https?/;async function x0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await k0(t);for(const n of e)try{if(O0(n))return}catch{}On(t,"unauthorized-domain")}function O0(t){const e=Fl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!P0.test(n))return!1;if(C0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const D0=new ki(3e4,6e4);function Df(){const t=hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function N0(t){return new Promise((e,n)=>{var r,s,i;function a(){Df(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Df(),n(un(t,"network-request-failed"))},timeout:D0.get()})}if(!((s=(r=hn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=hn().gapi)===null||i===void 0)&&i.load)a();else{const l=$b("iframefcb");return hn()[l]=()=>{gapi.load?a():n(un(t,"network-request-failed"))},Fb(`${Ub()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Eo=null,e})}let Eo=null;function V0(t){return Eo=Eo||N0(t),Eo}/**
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
 */const M0=new ki(5e3,15e3),L0="__/auth/iframe",F0="emulator/auth/iframe",U0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function B0(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Pc(e,F0):`https://${t.config.authDomain}/${L0}`,r={apiKey:e.apiKey,appName:t.name,v:_s},s=$0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ri(r).slice(1)}`}async function j0(t){const e=await V0(t),n=hn().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:B0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=un(t,"network-request-failed"),l=hn().setTimeout(()=>{i(a)},M0.get());function c(){hn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const H0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},z0=500,q0=600,G0="_blank",W0="http://localhost";class Nf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function K0(t,e,n,r=z0,s=q0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},H0),{width:r.toString(),height:s.toString(),top:i,left:a}),u=Tt().toLowerCase();n&&(l=Ng(u)?G0:n),Og(u)&&(e=e||W0,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[E,R])=>`${g}${E}=${R},`,"");if(Pb(u)&&l!=="_self")return Q0(e||"",l),new Nf(null);const p=window.open(e||"",l,f);le(p,t,"popup-blocked");try{p.focus()}catch{}return new Nf(p)}function Q0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const J0="__/auth/handler",X0="emulator/auth/handler",Y0=encodeURIComponent("fac");async function Vf(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:_s,eventId:s};if(e instanceof Hg){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Yw(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof Ci){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${Y0}=${encodeURIComponent(c)}`:"";return`${Z0(t)}?${Ri(l).slice(1)}${u}`}function Z0({config:t}){return t.emulator?Pc(t,X0):`https://${t.authDomain}/${J0}`}/**
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
 */const dl="webStorageSupport";class eI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kg,this._completeRedirectFn=I0,this._overrideRedirectResult=w0}async _openPopup(e,n,r,s){var i;Dn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Vf(e,n,r,Fl(),s);return K0(e,a,Mc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Vf(e,n,r,Fl(),s);return r0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Dn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await j0(e),r=new S0(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(dl,{type:dl},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[dl];a!==void 0&&n(!!a),On(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ug()||Dg()||Dc()}}const tI=eI;var Mf="@firebase/auth",Lf="1.10.6";/**
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
 */class nI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sI(t){cs(new Rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;le(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$g(t)},u=new Mb(r,s,i,c);return jb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cs(new Rr("auth-internal",e=>{const n=Nc(e.getProvider("auth").getImmediate());return(r=>new nI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tr(Mf,Lf,rI(t)),tr(Mf,Lf,"esm2017")}/**
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
 */const iI=5*60,oI=gg("authIdTokenMaxAge")||iI;let Ff=null;const aI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oI)return;const s=n==null?void 0:n.token;Ff!==s&&(Ff=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lI(t=wg()){const e=Rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bb(t,{popupRedirectResolver:tI,persistence:[f0,e0,Kg]}),r=gg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=aI(i.toString());Xb(n,a,()=>a(n.currentUser)),Jb(n,l=>a(l))}}const s=dg("auth");return s&&Hb(n,`http://${s}`),n}function cI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Lb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=un("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sI("Browser");var Uf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function _(){}_.prototype=y.prototype,A.D=y.prototype,A.prototype=new _,A.prototype.constructor=A,A.C=function(I,S,b){for(var v=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)v[Pe-2]=arguments[Pe];return y.prototype[S].apply(I,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,_){_||(_=0);var I=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)I[S]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(S=0;16>S;++S)I[S]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=A.g[0],_=A.g[1],S=A.g[2];var b=A.g[3],v=y+(b^_&(S^b))+I[0]+3614090360&4294967295;y=_+(v<<7&4294967295|v>>>25),v=b+(S^y&(_^S))+I[1]+3905402710&4294967295,b=y+(v<<12&4294967295|v>>>20),v=S+(_^b&(y^_))+I[2]+606105819&4294967295,S=b+(v<<17&4294967295|v>>>15),v=_+(y^S&(b^y))+I[3]+3250441966&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(b^_&(S^b))+I[4]+4118548399&4294967295,y=_+(v<<7&4294967295|v>>>25),v=b+(S^y&(_^S))+I[5]+1200080426&4294967295,b=y+(v<<12&4294967295|v>>>20),v=S+(_^b&(y^_))+I[6]+2821735955&4294967295,S=b+(v<<17&4294967295|v>>>15),v=_+(y^S&(b^y))+I[7]+4249261313&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(b^_&(S^b))+I[8]+1770035416&4294967295,y=_+(v<<7&4294967295|v>>>25),v=b+(S^y&(_^S))+I[9]+2336552879&4294967295,b=y+(v<<12&4294967295|v>>>20),v=S+(_^b&(y^_))+I[10]+4294925233&4294967295,S=b+(v<<17&4294967295|v>>>15),v=_+(y^S&(b^y))+I[11]+2304563134&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(b^_&(S^b))+I[12]+1804603682&4294967295,y=_+(v<<7&4294967295|v>>>25),v=b+(S^y&(_^S))+I[13]+4254626195&4294967295,b=y+(v<<12&4294967295|v>>>20),v=S+(_^b&(y^_))+I[14]+2792965006&4294967295,S=b+(v<<17&4294967295|v>>>15),v=_+(y^S&(b^y))+I[15]+1236535329&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(S^b&(_^S))+I[1]+4129170786&4294967295,y=_+(v<<5&4294967295|v>>>27),v=b+(_^S&(y^_))+I[6]+3225465664&4294967295,b=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(b^y))+I[11]+643717713&4294967295,S=b+(v<<14&4294967295|v>>>18),v=_+(b^y&(S^b))+I[0]+3921069994&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^b&(_^S))+I[5]+3593408605&4294967295,y=_+(v<<5&4294967295|v>>>27),v=b+(_^S&(y^_))+I[10]+38016083&4294967295,b=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(b^y))+I[15]+3634488961&4294967295,S=b+(v<<14&4294967295|v>>>18),v=_+(b^y&(S^b))+I[4]+3889429448&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^b&(_^S))+I[9]+568446438&4294967295,y=_+(v<<5&4294967295|v>>>27),v=b+(_^S&(y^_))+I[14]+3275163606&4294967295,b=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(b^y))+I[3]+4107603335&4294967295,S=b+(v<<14&4294967295|v>>>18),v=_+(b^y&(S^b))+I[8]+1163531501&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^b&(_^S))+I[13]+2850285829&4294967295,y=_+(v<<5&4294967295|v>>>27),v=b+(_^S&(y^_))+I[2]+4243563512&4294967295,b=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(b^y))+I[7]+1735328473&4294967295,S=b+(v<<14&4294967295|v>>>18),v=_+(b^y&(S^b))+I[12]+2368359562&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(_^S^b)+I[5]+4294588738&4294967295,y=_+(v<<4&4294967295|v>>>28),v=b+(y^_^S)+I[8]+2272392833&4294967295,b=y+(v<<11&4294967295|v>>>21),v=S+(b^y^_)+I[11]+1839030562&4294967295,S=b+(v<<16&4294967295|v>>>16),v=_+(S^b^y)+I[14]+4259657740&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^b)+I[1]+2763975236&4294967295,y=_+(v<<4&4294967295|v>>>28),v=b+(y^_^S)+I[4]+1272893353&4294967295,b=y+(v<<11&4294967295|v>>>21),v=S+(b^y^_)+I[7]+4139469664&4294967295,S=b+(v<<16&4294967295|v>>>16),v=_+(S^b^y)+I[10]+3200236656&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^b)+I[13]+681279174&4294967295,y=_+(v<<4&4294967295|v>>>28),v=b+(y^_^S)+I[0]+3936430074&4294967295,b=y+(v<<11&4294967295|v>>>21),v=S+(b^y^_)+I[3]+3572445317&4294967295,S=b+(v<<16&4294967295|v>>>16),v=_+(S^b^y)+I[6]+76029189&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^b)+I[9]+3654602809&4294967295,y=_+(v<<4&4294967295|v>>>28),v=b+(y^_^S)+I[12]+3873151461&4294967295,b=y+(v<<11&4294967295|v>>>21),v=S+(b^y^_)+I[15]+530742520&4294967295,S=b+(v<<16&4294967295|v>>>16),v=_+(S^b^y)+I[2]+3299628645&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(S^(_|~b))+I[0]+4096336452&4294967295,y=_+(v<<6&4294967295|v>>>26),v=b+(_^(y|~S))+I[7]+1126891415&4294967295,b=y+(v<<10&4294967295|v>>>22),v=S+(y^(b|~_))+I[14]+2878612391&4294967295,S=b+(v<<15&4294967295|v>>>17),v=_+(b^(S|~y))+I[5]+4237533241&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~b))+I[12]+1700485571&4294967295,y=_+(v<<6&4294967295|v>>>26),v=b+(_^(y|~S))+I[3]+2399980690&4294967295,b=y+(v<<10&4294967295|v>>>22),v=S+(y^(b|~_))+I[10]+4293915773&4294967295,S=b+(v<<15&4294967295|v>>>17),v=_+(b^(S|~y))+I[1]+2240044497&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~b))+I[8]+1873313359&4294967295,y=_+(v<<6&4294967295|v>>>26),v=b+(_^(y|~S))+I[15]+4264355552&4294967295,b=y+(v<<10&4294967295|v>>>22),v=S+(y^(b|~_))+I[6]+2734768916&4294967295,S=b+(v<<15&4294967295|v>>>17),v=_+(b^(S|~y))+I[13]+1309151649&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~b))+I[4]+4149444226&4294967295,y=_+(v<<6&4294967295|v>>>26),v=b+(_^(y|~S))+I[11]+3174756917&4294967295,b=y+(v<<10&4294967295|v>>>22),v=S+(y^(b|~_))+I[2]+718787259&4294967295,S=b+(v<<15&4294967295|v>>>17),v=_+(b^(S|~y))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(S+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+S&4294967295,A.g[3]=A.g[3]+b&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var _=y-this.blockSize,I=this.B,S=this.h,b=0;b<y;){if(S==0)for(;b<=_;)s(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<y;)if(I[S++]=A.charCodeAt(b++),S==this.blockSize){s(this,I),S=0;break}}else for(;b<y;)if(I[S++]=A[b++],S==this.blockSize){s(this,I),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var _=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=_&255,_/=256;for(this.u(A),A=Array(16),y=_=0;4>y;++y)for(var I=0;32>I;I+=8)A[_++]=this.g[y]>>>I&255;return A};function i(A,y){var _=l;return Object.prototype.hasOwnProperty.call(_,A)?_[A]:_[A]=y(A)}function a(A,y){this.h=y;for(var _=[],I=!0,S=A.length-1;0<=S;S--){var b=A[S]|0;I&&b==y||(_[S]=b,I=!1)}this.g=_}var l={};function c(A){return-128<=A&&128>A?i(A,function(y){return new a([y|0],0>y?-1:0)}):new a([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return L(u(-A));for(var y=[],_=1,I=0;A>=_;I++)y[I]=A/_|0,_*=4294967296;return new a(y,0)}function f(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return L(f(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),I=p,S=0;S<A.length;S+=8){var b=Math.min(8,A.length-S),v=parseInt(A.substring(S,S+b),y);8>b?(b=u(Math.pow(y,b)),I=I.j(b).add(u(v))):(I=I.j(_),I=I.add(u(v)))}return I}var p=c(0),g=c(1),E=c(16777216);t=a.prototype,t.m=function(){if(x(this))return-L(this).m();for(var A=0,y=1,_=0;_<this.g.length;_++){var I=this.i(_);A+=(0<=I?I:4294967296+I)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(R(this))return"0";if(x(this))return"-"+L(this).toString(A);for(var y=u(Math.pow(A,6)),_=this,I="";;){var S=H(_,y).g;_=j(_,S.j(y));var b=((0<_.g.length?_.g[0]:_.h)>>>0).toString(A);if(_=S,R(_))return b+I;for(;6>b.length;)b="0"+b;I=b+I}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function R(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function x(A){return A.h==-1}t.l=function(A){return A=j(this,A),x(A)?-1:R(A)?0:1};function L(A){for(var y=A.g.length,_=[],I=0;I<y;I++)_[I]=~A.g[I];return new a(_,~A.h).add(g)}t.abs=function(){return x(this)?L(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],I=0,S=0;S<=y;S++){var b=I+(this.i(S)&65535)+(A.i(S)&65535),v=(b>>>16)+(this.i(S)>>>16)+(A.i(S)>>>16);I=v>>>16,b&=65535,v&=65535,_[S]=v<<16|b}return new a(_,_[_.length-1]&-2147483648?-1:0)};function j(A,y){return A.add(L(y))}t.j=function(A){if(R(this)||R(A))return p;if(x(this))return x(A)?L(this).j(L(A)):L(L(this).j(A));if(x(A))return L(this.j(L(A)));if(0>this.l(E)&&0>A.l(E))return u(this.m()*A.m());for(var y=this.g.length+A.g.length,_=[],I=0;I<2*y;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<A.g.length;S++){var b=this.i(I)>>>16,v=this.i(I)&65535,Pe=A.i(S)>>>16,Je=A.i(S)&65535;_[2*I+2*S]+=v*Je,F(_,2*I+2*S),_[2*I+2*S+1]+=b*Je,F(_,2*I+2*S+1),_[2*I+2*S+1]+=v*Pe,F(_,2*I+2*S+1),_[2*I+2*S+2]+=b*Pe,F(_,2*I+2*S+2)}for(I=0;I<y;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=y;I<2*y;I++)_[I]=0;return new a(_,0)};function F(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function B(A,y){this.g=A,this.h=y}function H(A,y){if(R(y))throw Error("division by zero");if(R(A))return new B(p,p);if(x(A))return y=H(L(A),y),new B(L(y.g),L(y.h));if(x(y))return y=H(A,L(y)),new B(L(y.g),y.h);if(30<A.g.length){if(x(A)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,I=y;0>=I.l(A);)_=ae(_),I=ae(I);var S=re(_,1),b=re(I,1);for(I=re(I,2),_=re(_,2);!R(I);){var v=b.add(I);0>=v.l(A)&&(S=S.add(_),b=v),I=re(I,1),_=re(_,1)}return y=j(A,S.j(y)),new B(S,y)}for(S=p;0<=A.l(y);){for(_=Math.max(1,Math.floor(A.m()/y.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),b=u(_),v=b.j(y);x(v)||0<v.l(A);)_-=I,b=u(_),v=b.j(y);R(b)&&(b=g),S=S.add(b),A=j(A,v)}return new B(S,A)}t.A=function(A){return H(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)&A.i(I);return new a(_,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)|A.i(I);return new a(_,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)^A.i(I);return new a(_,this.h^A.h)};function ae(A){for(var y=A.g.length+1,_=[],I=0;I<y;I++)_[I]=A.i(I)<<1|A.i(I-1)>>>31;return new a(_,A.h)}function re(A,y){var _=y>>5;y%=32;for(var I=A.g.length-_,S=[],b=0;b<I;b++)S[b]=0<y?A.i(b+_)>>>y|A.i(b+_+1)<<32-y:A.i(b+_);return new a(S,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=f,Fc=a}).apply(typeof Uf<"u"?Uf:typeof self<"u"?self:typeof window<"u"?window:{});var so=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tm,Bs,nm,wo,Bl,rm,sm,im;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,d){return o==Array.prototype||o==Object.prototype||(o[h]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof so=="object"&&so];for(var h=0;h<o.length;++h){var d=o[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,h){if(h)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var C=o[m];if(!(C in d))break e;d=d[C]}o=o[o.length-1],m=d[o],h=h(m),h!=m&&h!=null&&e(d,o,{configurable:!0,writable:!0,value:h})}}function i(o,h){o instanceof String&&(o+="");var d=0,m=!1,C={next:function(){if(!m&&d<o.length){var P=d++;return{value:h(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function u(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function f(o,h,d){return o.call.apply(o.bind,arguments)}function p(o,h,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),o.apply(h,C)}}return function(){return o.apply(h,arguments)}}function g(o,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function E(o,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function R(o,h){function d(){}d.prototype=h.prototype,o.aa=h.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,C,P){for(var G=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)G[Oe-2]=arguments[Oe];return h.prototype[C].apply(m,G)}}function x(o){const h=o.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=o[m];return d}return[]}function L(o,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const C=o.length||0,P=m.length||0;o.length=C+P;for(let G=0;G<P;G++)o[C+G]=m[G]}else o.push(m)}}class j{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function F(o){return/^[\s\xa0]*$/.test(o)}function B(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function H(o){return H[" "](o),o}H[" "]=function(){};var ae=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function re(o,h,d){for(const m in o)h.call(d,o[m],m,o)}function A(o,h){for(const d in o)h.call(void 0,o[d],d,o)}function y(o){const h={};for(const d in o)h[d]=o[d];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,h){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)o[d]=m[d];for(let P=0;P<_.length;P++)d=_[P],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function S(o){var h=1;o=o.split(":");const d=[];for(;0<h&&o.length;)d.push(o.shift()),h--;return o.length&&d.push(o.join(":")),d}function b(o){l.setTimeout(()=>{throw o},0)}function v(){var o=Nt;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class Pe{constructor(){this.h=this.g=null}add(h,d){const m=Je.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Je=new j(()=>new $e,o=>o.reset());class $e{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,ge=!1,Nt=new Pe,zt=()=>{const o=l.Promise.resolve(void 0);ye=()=>{o.then(Ft)}};var Ft=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){b(d)}var h=Je;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}ge=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Mn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return o}();function tn(o,h){if(je.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(ae){e:{try{H(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else d=="mouseover"?h=o.fromElement:d=="mouseout"&&(h=o.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:kt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&tn.aa.h.call(this)}}R(tn,je);var kt={2:"touch",3:"pen",4:"mouse"};tn.prototype.h=function(){tn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(o,h,d,m,C){this.listener=o,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=C,this.key=++X,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function be(o){this.src=o,this.g={},this.h=0}be.prototype.add=function(o,h,d,m,C){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var G=T(o,h,m,C);return-1<G?(h=o[G],d||(h.fa=!1)):(h=new J(h,this.src,P,!!m,C),h.fa=d,o.push(h)),h};function w(o,h){var d=h.type;if(d in o.g){var m=o.g[d],C=Array.prototype.indexOf.call(m,h,void 0),P;(P=0<=C)&&Array.prototype.splice.call(m,C,1),P&&(Y(h),o.g[d].length==0&&(delete o.g[d],o.h--))}}function T(o,h,d,m){for(var C=0;C<o.length;++C){var P=o[C];if(!P.da&&P.listener==h&&P.capture==!!d&&P.ha==m)return C}return-1}var k="closure_lm_"+(1e6*Math.random()|0),D={};function V(o,h,d,m,C){if(Array.isArray(h)){for(var P=0;P<h.length;P++)V(o,h[P],d,m,C);return null}return d=oe(d),o&&o[O]?o.K(h,d,u(m)?!!m.capture:!1,C):N(o,h,d,!1,m,C)}function N(o,h,d,m,C,P){if(!h)throw Error("Invalid event type");var G=u(C)?!!C.capture:!!C,Oe=K(o);if(Oe||(o[k]=Oe=new be(o)),d=Oe.add(h,d,m,G,P),d.proxy)return d;if(m=Q(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Mn||(C=G),C===void 0&&(C=!1),o.addEventListener(h.toString(),m,C);else if(o.attachEvent)o.attachEvent(U(h.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function o(d){return h.call(o.src,o.listener,d)}const h=te;return o}function q(o,h,d,m,C){if(Array.isArray(h))for(var P=0;P<h.length;P++)q(o,h[P],d,m,C);else m=u(m)?!!m.capture:!!m,d=oe(d),o&&o[O]?(o=o.i,h=String(h).toString(),h in o.g&&(P=o.g[h],d=T(P,d,m,C),-1<d&&(Y(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[h],o.h--)))):o&&(o=K(o))&&(h=o.g[h.toString()],o=-1,h&&(o=T(h,d,m,C)),(d=-1<o?h[o]:null)&&z(d))}function z(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[O])w(h.i,o);else{var d=o.type,m=o.proxy;h.removeEventListener?h.removeEventListener(d,m,o.capture):h.detachEvent?h.detachEvent(U(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=K(h))?(w(d,o),d.h==0&&(d.src=null,h[k]=null)):Y(o)}}}function U(o){return o in D?D[o]:D[o]="on"+o}function te(o,h){if(o.da)o=!0;else{h=new tn(h,this);var d=o.listener,m=o.ha||o.src;o.fa&&z(o),o=d.call(m,h)}return o}function K(o){return o=o[k],o instanceof be?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function oe(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(h){return o.handleEvent(h)}),o[ee])}function ne(){Be.call(this),this.i=new be(this),this.M=this,this.F=null}R(ne,Be),ne.prototype[O]=!0,ne.prototype.removeEventListener=function(o,h,d,m){q(this,o,h,d,m)};function he(o,h){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=h.type||h,typeof h=="string")h=new je(h,o);else if(h instanceof je)h.target=h.target||o;else{var C=h;h=new je(m,o),I(h,C)}if(C=!0,d)for(var P=d.length-1;0<=P;P--){var G=h.g=d[P];C=ve(G,m,!0,h)&&C}if(G=h.g=o,C=ve(G,m,!0,h)&&C,C=ve(G,m,!1,h)&&C,d)for(P=0;P<d.length;P++)G=h.g=d[P],C=ve(G,m,!1,h)&&C}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var d=o.g[h],m=0;m<d.length;m++)Y(d[m]);delete o.g[h],o.h--}}this.F=null},ne.prototype.K=function(o,h,d,m){return this.i.add(String(o),h,!1,d,m)},ne.prototype.L=function(o,h,d,m){return this.i.add(String(o),h,!0,d,m)};function ve(o,h,d,m){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,P=0;P<h.length;++P){var G=h[P];if(G&&!G.da&&G.capture==d){var Oe=G.listener,it=G.ha||G.src;G.fa&&w(o.i,G),C=Oe.call(it,m)!==!1&&C}}return C&&!m.defaultPrevented}function ft(o,h,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(o,h||0)}function rt(o){o.g=ft(()=>{o.g=null,o.i&&(o.i=!1,rt(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class Ut extends Be{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:rt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function dt(o){Be.call(this),this.h=o,this.g={}}R(dt,Be);var Ln=[];function ws(o){re(o.g,function(h,d){this.g.hasOwnProperty(d)&&z(h)},o),o.g={}}dt.prototype.N=function(){dt.aa.N.call(this),ws(this)},dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var st=l.JSON.stringify,$t=l.JSON.parse,Li=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function xa(){}xa.prototype.h=null;function yu(o){return o.h||(o.h=o.i())}function vu(){}var Ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Oa(){je.call(this,"d")}R(Oa,je);function Da(){je.call(this,"c")}R(Da,je);var cr={},Eu=null;function Fi(){return Eu=Eu||new ne}cr.La="serverreachability";function wu(o){je.call(this,cr.La,o)}R(wu,je);function bs(o){const h=Fi();he(h,new wu(h))}cr.STAT_EVENT="statevent";function Tu(o,h){je.call(this,cr.STAT_EVENT,o),this.stat=h}R(Tu,je);function bt(o){const h=Fi();he(h,new Tu(h,o))}cr.Ma="timingevent";function bu(o,h){je.call(this,cr.Ma,o),this.size=h}R(bu,je);function Is(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},h)}function As(){this.g=!0}As.prototype.xa=function(){this.g=!1};function v_(o,h,d,m,C,P){o.info(function(){if(o.g)if(P)for(var G="",Oe=P.split("&"),it=0;it<Oe.length;it++){var Ie=Oe[it].split("=");if(1<Ie.length){var pt=Ie[0];Ie=Ie[1];var gt=pt.split("_");G=2<=gt.length&&gt[1]=="type"?G+(pt+"="+Ie+"&"):G+(pt+"=redacted&")}}else G=null;else G=P;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+h+`
`+d+`
`+G})}function E_(o,h,d,m,C,P,G){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+h+`
`+d+`
`+P+" "+G})}function Fr(o,h,d,m){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+T_(o,d)+(m?" "+m:"")})}function w_(o,h){o.info(function(){return"TIMEOUT: "+h})}As.prototype.info=function(){};function T_(o,h){if(!o.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var G=1;G<C.length;G++)C[G]=""}}}}return st(d)}catch{return h}}var Ui={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Iu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Na;function $i(){}R($i,xa),$i.prototype.g=function(){return new XMLHttpRequest},$i.prototype.i=function(){return{}},Na=new $i;function Fn(o,h,d,m){this.j=o,this.i=h,this.l=d,this.R=m||1,this.U=new dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Au}function Au(){this.i=null,this.g="",this.h=!1}var Su={},Va={};function Ma(o,h,d){o.L=1,o.v=zi(gn(h)),o.m=d,o.P=!0,Ru(o,null)}function Ru(o,h){o.F=Date.now(),Bi(o),o.A=gn(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Bu(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Au,o.g=ih(o.j,d?h:null,!o.m),0<o.O&&(o.M=new Ut(g(o.Y,o,o.g),o.O)),h=o.U,d=o.g,m=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Ln[0]=C.toString()),C=Ln);for(var P=0;P<C.length;P++){var G=V(d,C[P],m||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),bs(),v_(o.i,o.u,o.A,o.l,o.R,o.m)}Fn.prototype.ca=function(o){o=o.target;const h=this.M;h&&mn(o)==3?h.j():this.Y(o)},Fn.prototype.Y=function(o){try{if(o==this.g)e:{const gt=mn(this.g);var h=this.g.Ba();const Br=this.g.Z();if(!(3>gt)&&(gt!=3||this.g&&(this.h.h||this.g.oa()||Ku(this.g)))){this.J||gt!=4||h==7||(h==8||0>=Br?bs(3):bs(2)),La(this);var d=this.g.Z();this.X=d;t:if(ku(this)){var m=Ku(this.g);o="";var C=m.length,P=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ur(this),Ss(this);var G="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,o+=this.h.i.decode(m[h],{stream:!(P&&h==C-1)});m.length=0,this.h.g+=o,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=d==200,E_(this.i,this.u,this.A,this.l,this.R,gt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,it=this.g;if((Oe=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!F(Oe)){var Ie=Oe;break t}}Ie=null}if(d=Ie)Fr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fa(this,d);else{this.o=!1,this.s=3,bt(12),ur(this),Ss(this);break e}}if(this.P){d=!0;let qt;for(;!this.J&&this.C<G.length;)if(qt=b_(this,G),qt==Va){gt==4&&(this.s=4,bt(14),d=!1),Fr(this.i,this.l,null,"[Incomplete Response]");break}else if(qt==Su){this.s=4,bt(15),Fr(this.i,this.l,G,"[Invalid Chunk]"),d=!1;break}else Fr(this.i,this.l,qt,null),Fa(this,qt);if(ku(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),gt!=4||G.length!=0||this.h.h||(this.s=1,bt(16),d=!1),this.o=this.o&&d,!d)Fr(this.i,this.l,G,"[Invalid Chunked Response]"),ur(this),Ss(this);else if(0<G.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),za(pt),pt.M=!0,bt(11))}}else Fr(this.i,this.l,G,null),Fa(this,G);gt==4&&ur(this),this.o&&!this.J&&(gt==4?th(this.j,this):(this.o=!1,Bi(this)))}else $_(this.g),d==400&&0<G.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),ur(this),Ss(this)}}}catch{}finally{}};function ku(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function b_(o,h){var d=o.C,m=h.indexOf(`
`,d);return m==-1?Va:(d=Number(h.substring(d,m)),isNaN(d)?Su:(m+=1,m+d>h.length?Va:(h=h.slice(m,m+d),o.C=m+d,h)))}Fn.prototype.cancel=function(){this.J=!0,ur(this)};function Bi(o){o.S=Date.now()+o.I,Cu(o,o.I)}function Cu(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Is(g(o.ba,o),h)}function La(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Fn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(w_(this.i,this.A),this.L!=2&&(bs(),bt(17)),ur(this),this.s=2,Ss(this)):Cu(this,this.S-o)};function Ss(o){o.j.G==0||o.J||th(o.j,o)}function ur(o){La(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,ws(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function Fa(o,h){try{var d=o.j;if(d.G!=0&&(d.g==o||Ua(d.h,o))){if(!o.K&&Ua(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ji(d),Ki(d);else break e;Ha(d),bt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Is(g(d.Za,d),6e3));if(1>=Ou(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else fr(d,11)}else if((o.K||d.g==o)&&Ji(d),!F(h))for(C=d.Da.g.parse(h),h=0;h<C.length;h++){let Ie=C[h];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const pt=Ie[3];pt!=null&&(d.la=pt,d.j.info("VER="+d.la));const gt=Ie[4];gt!=null&&(d.Aa=gt,d.j.info("SVER="+d.Aa));const Br=Ie[5];Br!=null&&typeof Br=="number"&&0<Br&&(m=1.5*Br,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const qt=o.g;if(qt){const Yi=qt.g?qt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Yi){var P=m.h;P.g||Yi.indexOf("spdy")==-1&&Yi.indexOf("quic")==-1&&Yi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&($a(P,P.h),P.h=null))}if(m.D){const qa=qt.g?qt.g.getResponseHeader("X-HTTP-Session-Id"):null;qa&&(m.ya=qa,Le(m.I,m.D,qa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var G=o;if(m.qa=sh(m,m.J?m.ia:null,m.W),G.K){Du(m.h,G);var Oe=G,it=m.L;it&&(Oe.I=it),Oe.B&&(La(Oe),Bi(Oe)),m.g=G}else Zu(m);0<d.i.length&&Qi(d)}else Ie[0]!="stop"&&Ie[0]!="close"||fr(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?fr(d,7):ja(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}bs(4)}catch{}}var I_=class{constructor(o,h){this.g=o,this.map=h}};function Pu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function xu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ou(o){return o.h?1:o.g?o.g.size:0}function Ua(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function $a(o,h){o.g?o.g.add(h):o.h=h}function Du(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Pu.prototype.cancel=function(){if(this.i=Nu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Nu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const d of o.g.values())h=h.concat(d.D);return h}return x(o.i)}function A_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var h=[],d=o.length,m=0;m<d;m++)h.push(o[m]);return h}h=[],d=0;for(m in o)h[d++]=o[m];return h}function S_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var h=[];o=o.length;for(var d=0;d<o;d++)h.push(d);return h}h=[],d=0;for(const m in o)h[d++]=m;return h}}}function Vu(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var d=S_(o),m=A_(o),C=m.length,P=0;P<C;P++)h.call(void 0,m[P],d&&d[P],o)}var Mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function R_(o,h){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),C=null;if(0<=m){var P=o[d].substring(0,m);C=o[d].substring(m+1)}else P=o[d];h(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function hr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof hr){this.h=o.h,ji(this,o.j),this.o=o.o,this.g=o.g,Hi(this,o.s),this.l=o.l;var h=o.i,d=new Cs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Lu(this,d),this.m=o.m}else o&&(h=String(o).match(Mu))?(this.h=!1,ji(this,h[1]||"",!0),this.o=Rs(h[2]||""),this.g=Rs(h[3]||"",!0),Hi(this,h[4]),this.l=Rs(h[5]||"",!0),Lu(this,h[6]||"",!0),this.m=Rs(h[7]||"")):(this.h=!1,this.i=new Cs(null,this.h))}hr.prototype.toString=function(){var o=[],h=this.j;h&&o.push(ks(h,Fu,!0),":");var d=this.g;return(d||h=="file")&&(o.push("//"),(h=this.o)&&o.push(ks(h,Fu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(ks(d,d.charAt(0)=="/"?P_:C_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",ks(d,O_)),o.join("")};function gn(o){return new hr(o)}function ji(o,h,d){o.j=d?Rs(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function Hi(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function Lu(o,h,d){h instanceof Cs?(o.i=h,D_(o.i,o.h)):(d||(h=ks(h,x_)),o.i=new Cs(h,o.h))}function Le(o,h,d){o.i.set(h,d)}function zi(o){return Le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Rs(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ks(o,h,d){return typeof o=="string"?(o=encodeURI(o).replace(h,k_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function k_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Fu=/[#\/\?@]/g,C_=/[#\?:]/g,P_=/[#\?]/g,x_=/[#\?@]/g,O_=/#/g;function Cs(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function Un(o){o.g||(o.g=new Map,o.h=0,o.i&&R_(o.i,function(h,d){o.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Cs.prototype,t.add=function(o,h){Un(this),this.i=null,o=Ur(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(h),this.h+=1,this};function Uu(o,h){Un(o),h=Ur(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function $u(o,h){return Un(o),h=Ur(o,h),o.g.has(h)}t.forEach=function(o,h){Un(this),this.g.forEach(function(d,m){d.forEach(function(C){o.call(h,C,m,this)},this)},this)},t.na=function(){Un(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const C=o[m];for(let P=0;P<C.length;P++)d.push(h[m])}return d},t.V=function(o){Un(this);let h=[];if(typeof o=="string")$u(this,o)&&(h=h.concat(this.g.get(Ur(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)h=h.concat(o[d])}return h},t.set=function(o,h){return Un(this),this.i=null,o=Ur(this,o),$u(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},t.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function Bu(o,h,d){Uu(o,h),0<d.length&&(o.i=null,o.g.set(Ur(o,h),x(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const P=encodeURIComponent(String(m)),G=this.V(m);for(m=0;m<G.length;m++){var C=P;G[m]!==""&&(C+="="+encodeURIComponent(String(G[m]))),o.push(C)}}return this.i=o.join("&")};function Ur(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function D_(o,h){h&&!o.j&&(Un(o),o.i=null,o.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(Uu(this,m),Bu(this,C,d))},o)),o.j=h}function N_(o,h){const d=new As;if(l.Image){const m=new Image;m.onload=E($n,d,"TestLoadImage: loaded",!0,h,m),m.onerror=E($n,d,"TestLoadImage: error",!1,h,m),m.onabort=E($n,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=E($n,d,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else h(!1)}function V_(o,h){const d=new As,m=new AbortController,C=setTimeout(()=>{m.abort(),$n(d,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(C),P.ok?$n(d,"TestPingServer: ok",!0,h):$n(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),$n(d,"TestPingServer: error",!1,h)})}function $n(o,h,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function M_(){this.g=new Li}function L_(o,h,d){const m=d||"";try{Vu(o,function(C,P){let G=C;u(C)&&(G=st(C)),h.push(m+P+"="+encodeURIComponent(G))})}catch(C){throw h.push(m+"type="+encodeURIComponent("_badmap")),C}}function qi(o){this.l=o.Ub||null,this.j=o.eb||!1}R(qi,xa),qi.prototype.g=function(){return new Gi(this.l,this.j)},qi.prototype.i=function(o){return function(){return o}}({});function Gi(o,h){ne.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Gi,ne),t=Gi.prototype,t.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,xs(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ps(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ju(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function ju(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?Ps(this):xs(this),this.readyState==3&&ju(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Ps(this))},t.Qa=function(o){this.g&&(this.response=o,Ps(this))},t.ga=function(){this.g&&Ps(this)};function Ps(o){o.readyState=4,o.l=null,o.j=null,o.v=null,xs(o)}t.setRequestHeader=function(o,h){this.u.append(o,h)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=h.next();return o.join(`\r
`)};function xs(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Hu(o){let h="";return re(o,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function Ba(o,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Hu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Le(o,h,d))}function He(o){ne.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(He,ne);var F_=/^https?$/i,U_=["POST","PUT"];t=He.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Na.g(),this.v=this.o?yu(this.o):yu(Na),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(P){zu(this,P);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(U_,h,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,G]of d)this.g.setRequestHeader(P,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Wu(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){zu(this,P)}};function zu(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,qu(o),Wi(o)}function qu(o){o.A||(o.A=!0,he(o,"complete"),he(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,he(this,"complete"),he(this,"abort"),Wi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wi(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Gu(this):this.bb())},t.bb=function(){Gu(this)};function Gu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||mn(o)!=4||o.Z()!=2)){if(o.u&&mn(o)==4)ft(o.Ea,0,o);else if(he(o,"readystatechange"),mn(o)==4){o.h=!1;try{const G=o.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=G===0){var C=String(o.D).match(Mu)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!F_.test(C?C.toLowerCase():"")}d=m}if(d)he(o,"complete"),he(o,"success");else{o.m=6;try{var P=2<mn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",qu(o)}}finally{Wi(o)}}}}function Wi(o,h){if(o.g){Wu(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||he(o,"ready");try{d.onreadystatechange=m}catch{}}}function Wu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function mn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),$t(h)}};function Ku(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function $_(o){const h={};o=(o.g&&2<=mn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(F(o[m]))continue;var d=S(o[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=h[C]||[];h[C]=P,P.push(d)}A(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Os(o,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||h}function Qu(o){this.Aa=0,this.i=[],this.j=new As,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Os("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Os("baseRetryDelayMs",5e3,o),this.cb=Os("retryDelaySeedMs",1e4,o),this.Wa=Os("forwardChannelMaxRetries",2,o),this.wa=Os("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Pu(o&&o.concurrentRequestLimit),this.Da=new M_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Qu.prototype,t.la=8,t.G=1,t.connect=function(o,h,d,m){bt(0),this.W=o,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=sh(this,null,this.W),Qi(this)};function ja(o){if(Ju(o),o.G==3){var h=o.U++,d=gn(o.I);if(Le(d,"SID",o.K),Le(d,"RID",h),Le(d,"TYPE","terminate"),Ds(o,d),h=new Fn(o,o.j,h),h.L=2,h.v=zi(gn(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=ih(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Bi(h)}rh(o)}function Ki(o){o.g&&(za(o),o.g.cancel(),o.g=null)}function Ju(o){Ki(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ji(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Qi(o){if(!xu(o.h)&&!o.s){o.s=!0;var h=o.Ga;ye||zt(),ge||(ye(),ge=!0),Nt.add(h,o),o.B=0}}function B_(o,h){return Ou(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Is(g(o.Ga,o,h),nh(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new Fn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=y(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=Yu(this,C,h),d=gn(this.I),Le(d,"RID",o),Le(d,"CVER",22),this.D&&Le(d,"X-HTTP-Session-Id",this.D),Ds(this,d),P&&(this.O?h="headers="+encodeURIComponent(String(Hu(P)))+"&"+h:this.m&&Ba(d,this.m,P)),$a(this.h,C),this.Ua&&Le(d,"TYPE","init"),this.P?(Le(d,"$req",h),Le(d,"SID","null"),C.T=!0,Ma(C,d,null)):Ma(C,d,h),this.G=2}}else this.G==3&&(o?Xu(this,o):this.i.length==0||xu(this.h)||Xu(this))};function Xu(o,h){var d;h?d=h.l:d=o.U++;const m=gn(o.I);Le(m,"SID",o.K),Le(m,"RID",d),Le(m,"AID",o.T),Ds(o,m),o.m&&o.o&&Ba(m,o.m,o.o),d=new Fn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),h&&(o.i=h.D.concat(o.i)),h=Yu(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),$a(o.h,d),Ma(d,m,h)}function Ds(o,h){o.H&&re(o.H,function(d,m){Le(h,m,d)}),o.l&&Vu({},function(d,m){Le(h,m,d)})}function Yu(o,h,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var C=o.i;let P=-1;for(;;){const G=["count="+d];P==-1?0<d?(P=C[0].g,G.push("ofs="+P)):P=0:G.push("ofs="+P);let Oe=!0;for(let it=0;it<d;it++){let Ie=C[it].g;const pt=C[it].map;if(Ie-=P,0>Ie)P=Math.max(0,C[it].g-100),Oe=!1;else try{L_(pt,G,"req"+Ie+"_")}catch{m&&m(pt)}}if(Oe){m=G.join("&");break e}}}return o=o.i.splice(0,d),h.D=o,m}function Zu(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;ye||zt(),ge||(ye(),ge=!0),Nt.add(h,o),o.v=0}}function Ha(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Is(g(o.Fa,o),nh(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,eh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Is(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),Ki(this),eh(this))};function za(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function eh(o){o.g=new Fn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=gn(o.qa);Le(h,"RID","rpc"),Le(h,"SID",o.K),Le(h,"AID",o.T),Le(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&Le(h,"TO",o.ja),Le(h,"TYPE","xmlhttp"),Ds(o,h),o.m&&o.o&&Ba(h,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=zi(gn(h)),d.m=null,d.P=!0,Ru(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Ki(this),Ha(this),bt(19))};function Ji(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function th(o,h){var d=null;if(o.g==h){Ji(o),za(o),o.g=null;var m=2}else if(Ua(o.h,h))d=h.D,Du(o.h,h),m=1;else return;if(o.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var C=o.B;m=Fi(),he(m,new bu(m,d)),Qi(o)}else Zu(o);else if(C=h.s,C==3||C==0&&0<h.X||!(m==1&&B_(o,h)||m==2&&Ha(o)))switch(d&&0<d.length&&(h=o.h,h.i=h.i.concat(d)),C){case 1:fr(o,5);break;case 4:fr(o,10);break;case 3:fr(o,6);break;default:fr(o,2)}}}function nh(o,h){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*h}function fr(o,h){if(o.j.info("Error code "+h),h==2){var d=g(o.fb,o),m=o.Xa;const C=!m;m=new hr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ji(m,"https"),zi(m),C?N_(m.toString(),d):V_(m.toString(),d)}else bt(2);o.G=0,o.l&&o.l.sa(h),rh(o),Ju(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function rh(o){if(o.G=0,o.ka=[],o.l){const h=Nu(o.h);(h.length!=0||o.i.length!=0)&&(L(o.ka,h),L(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function sh(o,h,d){var m=d instanceof hr?gn(d):new hr(d);if(m.g!="")h&&(m.g=h+"."+m.g),Hi(m,m.s);else{var C=l.location;m=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var P=new hr(null);m&&ji(P,m),h&&(P.g=h),C&&Hi(P,C),d&&(P.l=d),m=P}return d=o.D,h=o.ya,d&&h&&Le(m,d,h),Le(m,"VER",o.la),Ds(o,m),m}function ih(o,h,d){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new He(new qi({eb:d})):new He(o.pa),h.Ha(o.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function oh(){}t=oh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Xi(){}Xi.prototype.g=function(o,h){return new Vt(o,h)};function Vt(o,h){ne.call(this),this.g=new Qu(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!F(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!F(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new $r(this)}R(Vt,ne),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){ja(this.g)},Vt.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=st(o),o=d);h.i.push(new I_(h.Ya++,o)),h.G==3&&Qi(h)},Vt.prototype.N=function(){this.g.l=null,delete this.j,ja(this.g),delete this.g,Vt.aa.N.call(this)};function ah(o){Oa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const d in h){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}R(ah,Oa);function lh(){Da.call(this),this.status=1}R(lh,Da);function $r(o){this.g=o}R($r,oh),$r.prototype.ua=function(){he(this.g,"a")},$r.prototype.ta=function(o){he(this.g,new ah(o))},$r.prototype.sa=function(o){he(this.g,new lh)},$r.prototype.ra=function(){he(this.g,"b")},Xi.prototype.createWebChannel=Xi.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,im=function(){return new Xi},sm=function(){return Fi()},rm=cr,Bl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ui.NO_ERROR=0,Ui.TIMEOUT=8,Ui.HTTP_ERROR=6,wo=Ui,Iu.COMPLETE="complete",nm=Iu,vu.EventType=Ts,Ts.OPEN="a",Ts.CLOSE="b",Ts.ERROR="c",Ts.MESSAGE="d",ne.prototype.listen=ne.prototype.K,Bs=vu,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,tm=He}).apply(typeof so<"u"?so:typeof self<"u"?self:typeof window<"u"?window:{});const $f="@firebase/firestore",Bf="4.7.16";/**
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
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let vs="11.8.1";/**
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
 */const Cr=new Ac("@firebase/firestore");function Kr(){return Cr.logLevel}function Z(t,...e){if(Cr.logLevel<=me.DEBUG){const n=e.map(Uc);Cr.debug(`Firestore (${vs}): ${t}`,...n)}}function Pr(t,...e){if(Cr.logLevel<=me.ERROR){const n=e.map(Uc);Cr.error(`Firestore (${vs}): ${t}`,...n)}}function wa(t,...e){if(Cr.logLevel<=me.WARN){const n=e.map(Uc);Cr.warn(`Firestore (${vs}): ${t}`,...n)}}function Uc(t){if(typeof t=="string")return t;try{/**
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
 */function pe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,om(t,r,n)}function om(t,e,n){let r=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Pr(r),new Error(r)}function qe(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||om(e,s,r)}function Me(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ce extends Vn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class am{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class hI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fI{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){qe(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new br;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new br,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new br)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qe(typeof r.accessToken=="string",31837,{l:r}),new am(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string",2055,{h:e}),new _t(e)}}class dI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new dI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ln(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){qe(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new jf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(qe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new jf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function mI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function _I(){return new TextEncoder}/**
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
 */class lm{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=mI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function Te(t,e){return t<e?-1:t>e?1:0}function jl(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return Te(r,s);{const i=_I(),a=yI(i.encode(Hf(t,n)),i.encode(Hf(e,n)));return a!==0?a:Te(r,s)}}n+=r>65535?2:1}return Te(t.length,e.length)}function Hf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function yI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Te(t[n],e[n]);return Te(t.length,e.length)}function hs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const zf=-62135596800,qf=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*qf);return new et(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ce($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ce($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<zf)throw new ce($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ce($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/qf}_compareTo(e){return this.seconds===e.seconds?Te(this.nanoseconds,e.nanoseconds):Te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-zf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ue{static fromTimestamp(e){return new Ue(e)}static min(){return new Ue(new et(0,0))}static max(){return new Ue(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Gf="__name__";class on{constructor(e,n,r){n===void 0?n=0:n>e.length&&pe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&pe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return on.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof on?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=on.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return Te(e.length,n.length)}static compareSegments(e,n){const r=on.isNumericId(e),s=on.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?on.extractNumericId(e).compare(on.extractNumericId(n)):jl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Fc.fromString(e.substring(4,e.length-2))}}class Qe extends on{construct(e,n,r){return new Qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ce($.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Qe(n)}static emptyPath(){return new Qe([])}}const vI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ut extends on{construct(e,n,r){return new ut(e,n,r)}static isValidIdentifier(e){return vI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ut.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Gf}static keyField(){return new ut([Gf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ce($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ce($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ce($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new ce($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ut(n)}static emptyPath(){return new ut([])}}/**
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
 */class de{constructor(e){this.path=e}static fromPath(e){return new de(Qe.fromString(e))}static fromName(e){return new de(Qe.fromString(e).popFirst(5))}static empty(){return new de(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new de(new Qe(e.slice()))}}/**
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
 */const pi=-1;function EI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ue.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new sr(s,de.empty(),e)}function wI(t){return new sr(t.readTime,t.key,pi)}class sr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new sr(Ue.min(),de.empty(),pi)}static max(){return new sr(Ue.max(),de.empty(),pi)}}function TI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=de.comparator(t.documentKey,e.documentKey),n!==0?n:Te(t.largestBatchId,e.largestBatchId))}/**
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
 */const bI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class II{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function $c(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==bI)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&pe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{a[u]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function AI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Bc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Bc.le=-1;/**
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
 */const jc=-1;function Hc(t){return t==null}function jo(t){return t===0&&1/t==-1/0}function SI(t){return typeof t=="number"&&Number.isInteger(t)&&!jo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const cm="";function RI(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Wf(e)),e=kI(t.get(n),e);return Wf(e)}function kI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case cm:n+="";break;default:n+=i}}return n}function Wf(t){return t+cm+""}/**
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
 */function Kf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function um(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Dt{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new io(this.root,e,this.comparator,!1)}getReverseIterator(){return new io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new io(this.root,e,this.comparator,!0)}}class io{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw pe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw pe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw pe(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw pe(57766)}get value(){throw pe(16141)}get color(){throw pe(16727)}get left(){throw pe(29726)}get right(){throw pe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ht{constructor(e){this.comparator=e,this.data=new Dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qf(this.data.getIterator())}getIteratorFrom(e){return new Qf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ht(this.comparator);return n.data=e,n}}class Qf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jt{constructor(e){this.fields=e,e.sort(ut.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new ht(ut.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class CI extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new CI("Invalid base64 string: "+i):i}}(e);return new dn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new dn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dn.EMPTY_BYTE_STRING=new dn("");const PI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xr(t){if(qe(!!t,39018),typeof t=="string"){let e=0;const n=PI.exec(t);if(qe(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(t.seconds),nanos:at(t.nanos)}}function at(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fs(t){return typeof t=="string"?dn.fromBase64String(t):dn.fromUint8Array(t)}/**
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
 */const hm="server_timestamp",fm="__type__",dm="__previous_value__",pm="__local_write_time__";function zc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[fm])===null||n===void 0?void 0:n.stringValue)===hm}function qc(t){const e=t.mapValue.fields[dm];return zc(e)?qc(e):e}function Ho(t){const e=xr(t.mapValue.fields[pm].timestampValue);return new et(e.seconds,e.nanos)}/**
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
 */class xI{constructor(e,n,r,s,i,a,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const zo="(default)";class qo{constructor(e,n){this.projectId=e,this.database=n||zo}static empty(){return new qo("","")}get isDefaultDatabase(){return this.database===zo}isEqual(e){return e instanceof qo&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const gm="__type__",OI="__max__",oo={mapValue:{}},mm="__vector__",Hl="value";function Or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?zc(t)?4:NI(t)?9007199254740991:DI(t)?10:11:pe(28295,{value:t})}function pn(t,e){if(t===e)return!0;const n=Or(t);if(n!==Or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ho(t).isEqual(Ho(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=xr(s.timestampValue),l=xr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return fs(s.bytesValue).isEqual(fs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return at(s.geoPointValue.latitude)===at(i.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return at(s.integerValue)===at(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=at(s.doubleValue),l=at(i.doubleValue);return a===l?jo(a)===jo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Kf(a)!==Kf(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!pn(a[c],l[c])))return!1;return!0}(t,e);default:return pe(52216,{left:t})}}function gi(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function ds(t,e){if(t===e)return 0;const n=Or(t),r=Or(e);if(n!==r)return Te(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Te(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=at(i.integerValue||i.doubleValue),c=at(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Jf(t.timestampValue,e.timestampValue);case 4:return Jf(Ho(t),Ho(e));case 5:return jl(t.stringValue,e.stringValue);case 6:return function(i,a){const l=fs(i),c=fs(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=Te(l[u],c[u]);if(f!==0)return f}return Te(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=Te(at(i.latitude),at(a.latitude));return l!==0?l:Te(at(i.longitude),at(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Xf(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,u,f;const p=i.fields||{},g=a.fields||{},E=(l=p[Hl])===null||l===void 0?void 0:l.arrayValue,R=(c=g[Hl])===null||c===void 0?void 0:c.arrayValue,x=Te(((u=E==null?void 0:E.values)===null||u===void 0?void 0:u.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:Xf(E,R)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===oo.mapValue&&a===oo.mapValue)return 0;if(i===oo.mapValue)return 1;if(a===oo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=a.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=jl(c[p],f[p]);if(g!==0)return g;const E=ds(l[c[p]],u[f[p]]);if(E!==0)return E}return Te(c.length,f.length)}(t.mapValue,e.mapValue);default:throw pe(23264,{Pe:n})}}function Jf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Te(t,e);const n=xr(t),r=xr(e),s=Te(n.seconds,r.seconds);return s!==0?s:Te(n.nanos,r.nanos)}function Xf(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ds(n[s],r[s]);if(i)return i}return Te(n.length,r.length)}function ps(t){return zl(t)}function zl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=xr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return de.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=zl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${zl(n.fields[a])}`;return s+"}"}(t.mapValue):pe(61005,{value:t})}function To(t){switch(Or(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=qc(t);return e?16+To(e):16;case 5:return 2*t.stringValue.length;case 6:return fs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+To(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Es(r.fields,(i,a)=>{s+=i.length+To(a)}),s}(t.mapValue);default:throw pe(13486,{value:t})}}function ql(t){return!!t&&"integerValue"in t}function Gc(t){return!!t&&"arrayValue"in t}function bo(t){return!!t&&"mapValue"in t}function DI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[gm])===null||n===void 0?void 0:n.stringValue)===mm}function Ys(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ys(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ys(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===OI}/**
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
 */class Kt{constructor(e){this.value=e}static empty(){return new Kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!bo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(n)}setAll(e){let n=ut.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Ys(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());bo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];bo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Es(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Kt(Ys(this.value))}}function _m(t){const e=[];return Es(t.fields,(n,r)=>{const s=new ut([n]);if(bo(r)){const i=_m(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Jt(e)}/**
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
 */class Gt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Gt(e,0,Ue.min(),Ue.min(),Ue.min(),Kt.empty(),0)}static newFoundDocument(e,n,r,s){return new Gt(e,1,n,Ue.min(),r,s,0)}static newNoDocument(e,n){return new Gt(e,2,n,Ue.min(),Ue.min(),Kt.empty(),0)}static newUnknownDocument(e,n){return new Gt(e,3,n,Ue.min(),Ue.min(),Kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Go{constructor(e,n){this.position=e,this.inclusive=n}}function Yf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=de.comparator(de.fromName(a.referenceValue),n.key):r=ds(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Zf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Wo{constructor(e,n="asc"){this.field=e,this.dir=n}}function VI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class ym{}class Ze extends ym{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LI(e,n,r):n==="array-contains"?new $I(e,r):n==="in"?new BI(e,r):n==="not-in"?new jI(e,r):n==="array-contains-any"?new HI(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FI(e,r):new UI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ds(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return pe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ir extends ym{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new ir(e,n)}matches(e){return vm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function vm(t){return t.op==="and"}function Em(t){return MI(t)&&vm(t)}function MI(t){for(const e of t.filters)if(e instanceof ir)return!1;return!0}function Gl(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+ps(t.value);if(Em(t))return t.filters.map(e=>Gl(e)).join(",");{const e=t.filters.map(n=>Gl(n)).join(",");return`${t.op}(${e})`}}function wm(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)}(t,e):t instanceof ir?function(r,s){return s instanceof ir&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&wm(a,s.filters[l]),!0):!1}(t,e):void pe(19439)}function Tm(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${ps(n.value)}`}(t):t instanceof ir?function(n){return n.op.toString()+" {"+n.getFilters().map(Tm).join(" ,")+"}"}(t):"Filter"}class LI extends Ze{constructor(e,n,r){super(e,n,r),this.key=de.fromName(r.referenceValue)}matches(e){const n=de.comparator(e.key,this.key);return this.matchesComparison(n)}}class FI extends Ze{constructor(e,n){super(e,"in",n),this.keys=bm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UI extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=bm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function bm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>de.fromName(r.referenceValue))}class $I extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gc(n)&&gi(n.arrayValue,this.value)}}class BI extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gi(this.value.arrayValue,n)}}class jI extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(gi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!gi(this.value.arrayValue,n)}}class HI extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>gi(this.value.arrayValue,r))}}/**
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
 */class zI{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Ie=null}}function ed(t,e=null,n=[],r=[],s=null,i=null,a=null){return new zI(t,e,n,r,s,i,a)}function Wc(t){const e=Me(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Hc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),e.Ie=n}return e.Ie}function Kc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Zf(t.startAt,e.startAt)&&Zf(t.endAt,e.endAt)}/**
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
 */class Ta{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function qI(t,e,n,r,s,i,a,l){return new Ta(t,e,n,r,s,i,a,l)}function GI(t){return new Ta(t)}function td(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WI(t){return t.collectionGroup!==null}function Zs(t){const e=Me(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ht(ut.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Wo(i,r))}),n.has(ut.keyField().canonicalString())||e.Ee.push(new Wo(ut.keyField(),r))}return e.Ee}function Ir(t){const e=Me(t);return e.de||(e.de=KI(e,Zs(t))),e.de}function KI(t,e){if(t.limitType==="F")return ed(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Wo(s.field,i)});const n=t.endAt?new Go(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Go(t.startAt.position,t.startAt.inclusive):null;return ed(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wl(t,e,n){return new Ta(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Im(t,e){return Kc(Ir(t),Ir(e))&&t.limitType===e.limitType}function Am(t){return`${Wc(Ir(t))}|lt:${t.limitType}`}function Ls(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Tm(s)).join(", ")}]`),Hc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ps(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ps(s)).join(",")),`Target(${r})`}(Ir(t))}; limitType=${t.limitType})`}function Qc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):de.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Zs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const u=Yf(a,l,c);return a.inclusive?u<=0:u<0}(r.startAt,Zs(r),s)||r.endAt&&!function(a,l,c){const u=Yf(a,l,c);return a.inclusive?u>=0:u>0}(r.endAt,Zs(r),s))}(t,e)}function QI(t){return(e,n)=>{let r=!1;for(const s of Zs(t)){const i=JI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function JI(t,e,n){const r=t.field.isKeyField()?de.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),u=l.data.field(i);return c!==null&&u!==null?ds(c,u):pe(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return pe(19790,{direction:t.dir})}}/**
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
 */class Vr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return um(this.inner)}size(){return this.innerSize}}/**
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
 */const XI=new Dt(de.comparator);function Ko(){return XI}const Sm=new Dt(de.comparator);function ao(...t){let e=Sm;for(const n of t)e=e.insert(n.key,n);return e}function Rm(t){let e=Sm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Er(){return ei()}function km(){return ei()}function ei(){return new Vr(t=>t.toString(),(t,e)=>t.isEqual(e))}const YI=new Dt(de.comparator),ZI=new ht(de.comparator);function Et(...t){let e=ZI;for(const n of t)e=e.add(n);return e}const eA=new ht(Te);function tA(){return eA}/**
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
 */function Jc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:jo(e)?"-0":e}}function Cm(t){return{integerValue:""+t}}function nA(t,e){return SI(e)?Cm(e):Jc(t,e)}/**
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
 */class ba{constructor(){this._=void 0}}function rA(t,e,n){return t instanceof mi?function(s,i){const a={fields:{[fm]:{stringValue:hm},[pm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&zc(i)&&(i=qc(i)),i&&(a.fields[dm]=i),{mapValue:a}}(n,e):t instanceof _i?xm(t,e):t instanceof yi?Om(t,e):function(s,i){const a=Pm(s,i),l=nd(a)+nd(s.Re);return ql(a)&&ql(s.Re)?Cm(l):Jc(s.serializer,l)}(t,e)}function sA(t,e,n){return t instanceof _i?xm(t,e):t instanceof yi?Om(t,e):n}function Pm(t,e){return t instanceof Qo?function(r){return ql(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class mi extends ba{}class _i extends ba{constructor(e){super(),this.elements=e}}function xm(t,e){const n=Dm(e);for(const r of t.elements)n.some(s=>pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class yi extends ba{constructor(e){super(),this.elements=e}}function Om(t,e){let n=Dm(e);for(const r of t.elements)n=n.filter(s=>!pn(s,r));return{arrayValue:{values:n}}}class Qo extends ba{constructor(e,n){super(),this.serializer=e,this.Re=n}}function nd(t){return at(t.integerValue||t.doubleValue)}function Dm(t){return Gc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class iA{constructor(e,n){this.field=e,this.transform=n}}function oA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof _i&&s instanceof _i||r instanceof yi&&s instanceof yi?hs(r.elements,s.elements,pn):r instanceof Qo&&s instanceof Qo?pn(r.Re,s.Re):r instanceof mi&&s instanceof mi}(t.transform,e.transform)}class aA{constructor(e,n){this.version=e,this.transformResults=n}}class Rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Rn}static exists(e){return new Rn(void 0,e)}static updateTime(e){return new Rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Io(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ia{}function Nm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Mm(t.key,Rn.none()):new Oi(t.key,t.data,Rn.none());{const n=t.data,r=Kt.empty();let s=new ht(ut.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Mr(t.key,r,new Jt(s.toArray()),Rn.none())}}function lA(t,e,n){t instanceof Oi?function(s,i,a){const l=s.value.clone(),c=sd(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Mr?function(s,i,a){if(!Io(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=sd(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Vm(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ti(t,e,n,r){return t instanceof Oi?function(i,a,l,c){if(!Io(i.precondition,a))return l;const u=i.value.clone(),f=id(i.fieldTransforms,c,a);return u.setAll(f),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Mr?function(i,a,l,c){if(!Io(i.precondition,a))return l;const u=id(i.fieldTransforms,c,a),f=a.data;return f.setAll(Vm(i)),f.setAll(u),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return Io(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function cA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Pm(r.transform,s||null);i!=null&&(n===null&&(n=Kt.empty()),n.set(r.field,i))}return n||null}function rd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&hs(r,s,(i,a)=>oA(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oi extends Ia{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Mr extends Ia{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function sd(t,e,n){const r=new Map;qe(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,sA(a,l,n[s]))}return r}function id(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,rA(i,a,e))}return r}class Mm extends Ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uA extends Ia{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ti(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ti(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=km();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Nm(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(Ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Et())}isEqual(e){return this.batchId===e.batchId&&hs(this.mutations,e.mutations,(n,r)=>rd(n,r))&&hs(this.baseMutations,e.baseMutations,(n,r)=>rd(n,r))}}class Xc{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){qe(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return YI}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Xc(e,n,r,s)}}/**
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
 */class fA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var Ke,Ee;function dA(t){switch(t){case $.OK:return pe(64938);case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return pe(15467,{code:t})}}function pA(t){if(t===void 0)return Pr("GRPC error has no .code"),$.UNKNOWN;switch(t){case Ke.OK:return $.OK;case Ke.CANCELLED:return $.CANCELLED;case Ke.UNKNOWN:return $.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return $.INTERNAL;case Ke.UNAVAILABLE:return $.UNAVAILABLE;case Ke.UNAUTHENTICATED:return $.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case Ke.NOT_FOUND:return $.NOT_FOUND;case Ke.ALREADY_EXISTS:return $.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return $.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case Ke.ABORTED:return $.ABORTED;case Ke.OUT_OF_RANGE:return $.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return $.UNIMPLEMENTED;case Ke.DATA_LOSS:return $.DATA_LOSS;default:return pe(39323,{code:t})}}(Ee=Ke||(Ke={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Fc([4294967295,4294967295],0);class gA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _A(t,e){return Kl(t,e.toTimestamp())}function is(t){return qe(!!t,49232),Ue.fromTimestamp(function(n){const r=xr(n);return new et(r.seconds,r.nanos)}(t))}function Lm(t,e){return Ql(t,e).canonicalString()}function Ql(t,e){const n=function(s){return new Qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function yA(t){const e=Qe.fromString(t);return qe(SA(e),10190,{key:e.toString()}),e}function Jl(t,e){return Lm(t.databaseId,e.path)}function vA(t){const e=yA(t);return e.length===4?Qe.emptyPath():wA(e)}function EA(t){return new Qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wA(t){return qe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function od(t,e,n){return{name:Jl(t,e),fields:n.value.mapValue.fields}}function TA(t,e){let n;if(e instanceof Oi)n={update:od(t,e.key,e.value)};else if(e instanceof Mm)n={delete:Jl(t,e.key)};else if(e instanceof Mr)n={update:od(t,e.key,e.data),updateMask:AA(e.fieldMask)};else{if(!(e instanceof uA))return pe(16599,{ft:e.type});n={verify:Jl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof mi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof _i)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof yi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Qo)return{fieldPath:a.field.canonicalString(),increment:l.Re};throw pe(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_A(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:pe(27497)}(t,e.precondition)),n}function bA(t,e){return t&&t.length>0?(qe(e!==void 0,14353),t.map(n=>function(s,i){let a=s.updateTime?is(s.updateTime):is(i);return a.isEqual(Ue.min())&&(a=is(i)),new aA(a,s.transformResults||[])}(n,e))):[]}function IA(t){let e=vA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){qe(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Fm(p);return g instanceof ir&&Em(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(R){return new Wo(Qr(R.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Hc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,E=p.values||[];return new Go(E,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,E=p.values||[];return new Go(E,g)}(n.endAt)),qI(e,s,a,i,l,"F",c,u)}function Fm(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qr(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qr(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qr(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Qr(n.unaryFilter.field);return Ze.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return pe(61313);default:return pe(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(Qr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return pe(58110);default:return pe(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ir.create(n.compositeFilter.filters.map(r=>Fm(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return pe(1026)}}(n.compositeFilter.op))}(t):pe(30097,{filter:t})}function Qr(t){return ut.fromServerFormat(t.fieldPath)}function AA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function SA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class RA{constructor(e){this.wt=e}}function kA(t){const e=IA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Wl(e,e.limit,"L"):e}/**
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
 */class CA{constructor(){this.Cn=new PA}addToCollectionParentIndex(e,n){return this.Cn.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(sr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(sr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class PA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ht(Qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ht(Qe.comparator)).toArray()}}/**
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
 */const ad={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Um=41943040;class Pt{static withCacheSize(e){return new Pt(e,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Pt.DEFAULT_COLLECTION_PERCENTILE=10,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pt.DEFAULT=new Pt(Um,Pt.DEFAULT_COLLECTION_PERCENTILE,Pt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pt.DISABLED=new Pt(-1,0,0);/**
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
 */class gs{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new gs(0)}static lr(){return new gs(-1)}}/**
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
 */const ld="LruGarbageCollector",xA=1048576;function cd([t,e],[n,r]){const s=Te(t,n);return s===0?Te(e,r):s}class OA{constructor(e){this.Er=e,this.buffer=new ht(cd),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();cd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){Z(ld,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){xi(n)?Z(ld,"Ignoring IndexedDB error during garbage collection: ",n):await $c(n)}await this.mr(3e5)})}}class NA{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return M.resolve(Bc.le);const r=new OA(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),M.resolve(ad)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ad):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,a,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Kr()<=me.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),M.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function VA(t,e){return new NA(t,e)}/**
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
 */class MA{constructor(){this.changes=new Vr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class LA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class FA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ti(r.mutation,s,Jt.empty(),et.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Et()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Et()){const s=Er();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=ao();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Er();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Et()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=Ko();const a=ei(),l=function(){return ei()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Mr)?i=i.insert(u.key,u):f!==void 0?(a.set(u.key,f.mutation.getFieldMask()),ti(f.mutation,u,f.mutation.getFieldMask(),et.now())):a.set(u.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>a.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new LA(f,(p=a.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ei();let s=new Dt((a,l)=>a-l),i=Et();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Jt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||Et()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=km();f.forEach(g=>{if(!i.has(g)){const E=Nm(n.get(g),r.get(g));E!==null&&p.set(g,E),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,u,p))}return M.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return de.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Er());let l=pi,c=i;return a.next(u=>M.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,Et())).next(f=>({batchId:l,changes:Rm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new de(n)).next(r=>{let s=ao();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=ao();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,c=>{const u=function(p,g){return new Ta(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,u)=>{const f=u.getKey();a.get(f)===null&&(a=a.insert(f,Gt.newInvalidDocument(f)))});let l=ao();return a.forEach((c,u)=>{const f=i.get(c);f!==void 0&&ti(f.mutation,u,Jt.empty(),et.now()),Qc(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class UA{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return M.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:is(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:kA(s.bundledQuery),readTime:is(s.readTime)}}(n)),M.resolve()}}/**
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
 */class $A{constructor(){this.overlays=new Dt(de.comparator),this.Qr=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Er();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Er(),i=n.length+1,a=new de(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Dt((u,f)=>u-f);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Er(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Er(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return M.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new fA(n,r));let i=this.Qr.get(n);i===void 0&&(i=Et(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class BA{constructor(){this.sessionToken=dn.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class Yc{constructor(){this.$r=new ht(Ye.Ur),this.Kr=new ht(Ye.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new Ye(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new de(new Qe([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new de(new Qe([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=Et();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return de.comparator(e.key,n.key)||Te(e.Zr,n.Zr)}static Wr(e,n){return Te(e.Zr,n.Zr)||de.comparator(e.key,n.key)}}/**
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
 */class jA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new ht(Ye.Ur)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new hA(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Xr=this.Xr.add(new Ye(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(a)}lookupMutationBatch(e,n){return M.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?jc:this.nr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],a=>{const l=this.ei(a.Zr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ht(Te);return n.forEach(s=>{const i=new Ye(s,0),a=new Ye(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],l=>{r=r.add(l.Zr)})}),M.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;de.isDocumentKey(i)||(i=i.child(""));const a=new Ye(new de(i),0);let l=new ht(Te);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},a),M.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){qe(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return M.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new Ye(n,0),s=this.Xr.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class HA{constructor(e){this.ii=e,this.docs=function(){return new Dt(de.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():Gt.newInvalidDocument(n))}getEntries(e,n){let r=Ko();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Gt.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ko();const a=n.path,l=new de(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||TI(wI(f),r)<=0||(s.has(f.key)||Qc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){pe(9500)}si(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zA(this)}getSize(e){return M.resolve(this.size)}}class zA extends MA{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class qA{constructor(e){this.persistence=e,this.oi=new Vr(n=>Wc(n),Kc),this.lastRemoteSnapshotVersion=Ue.min(),this.highestTargetId=0,this._i=0,this.ai=new Yc,this.targetCount=0,this.ui=gs.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),M.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new gs(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Tr(n),M.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.ai.containsKey(n))}}/**
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
 */class $m{constructor(e,n){this.ci={},this.overlays={},this.li=new Bc(0),this.hi=!1,this.hi=!0,this.Pi=new BA,this.referenceDelegate=e(this),this.Ti=new qA(this),this.indexManager=new CA,this.remoteDocumentCache=function(s){return new HA(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new RA(n),this.Ei=new UA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $A,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new jA(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new GA(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return M.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class GA extends II{constructor(e){super(),this.currentSequenceNumber=e}}class Zc{constructor(e){this.persistence=e,this.Vi=new Yc,this.mi=null}static fi(e){return new Zc(e)}get gi(){if(this.mi)return this.mi;throw pe(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),M.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.gi,r=>{const s=de.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,Ue.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return M.or([()=>M.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Jo{constructor(e,n){this.persistence=e,this.yi=new Vr(r=>RI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=VA(this,n)}static fi(e,n){return new Jo(e,n)}di(){}Ai(e){return M.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return M.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?M.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,a=>this.Dr(e,a,n).next(l=>{l||(r++,i.removeEntry(a,Ue.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),M.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),M.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=To(e.data.value)),n}Dr(e,n,r){return M.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return M.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class eu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=Et(),s=Et();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new eu(e,n.fromCache,r,s)}}/**
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
 */class WA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class KA{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Gw()?8:AI(Tt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Ss(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new WA;return this.bs(e,n,a).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,a,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(Kr()<=me.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Ls(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),M.resolve()):(Kr()<=me.DEBUG&&Z("QueryEngine","Query:",Ls(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Kr()<=me.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Ls(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ir(n))):M.resolve())}ws(e,n){if(td(n))return M.resolve(null);let r=Ir(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Wl(n,null,"F"),r=Ir(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=Et(...i);return this.ys.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(n,l);return this.Cs(n,u,a,c.readTime)?this.ws(e,Wl(n,null,"F")):this.Fs(e,u,n,c)}))})))}Ss(e,n,r,s){return td(n)||s.isEqual(Ue.min())?M.resolve(null):this.ys.getDocuments(e,r).next(i=>{const a=this.vs(n,i);return this.Cs(n,a,r,s)?M.resolve(null):(Kr()<=me.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ls(n)),this.Fs(e,a,n,EI(s,pi)).next(l=>l))})}vs(e,n){let r=new ht(QI(e));return n.forEach((s,i)=>{Qc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,n,r){return Kr()<=me.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Ls(n)),this.ys.getDocumentsMatchingQuery(e,n,sr.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const QA="LocalStore";class JA{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Dt(Te),this.Os=new Vr(i=>Wc(i),Kc),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FA(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function XA(t,e,n,r){return new JA(t,e,n,r)}async function Bm(t,e){const n=Me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=Et();for(const u of s){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:a,addedBatchIds:l}))})})}function YA(t,e){const n=Me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,g=p.keys();let E=M.resolve();return g.forEach(R=>{E=E.next(()=>f.getEntry(c,R)).next(x=>{const L=u.docVersions.get(R);qe(L!==null,48541),x.version.compareTo(L)<0&&(p.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),f.addEntry(x)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Et();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ZA(t){const e=Me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function eS(t,e){const n=Me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=jc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class ud{constructor(){this.activeTargetIds=tA()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class tS{constructor(){this.xo=new ud,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new ud,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class nS{No(e){}shutdown(){}}/**
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
 */const hd="ConnectivityMonitor";class fd{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){Z(hd,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){Z(hd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let lo=null;function Xl(){return lo===null?lo=function(){return 268435456+Math.round(2147483648*Math.random())}():lo++,"0x"+lo.toString(16)}/**
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
 */const pl="RestConnection",rS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class sS{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===zo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const a=Xl(),l=this.jo(e,n.toUriEncodedString());Z(pl,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),f=Ai(u);return this.Jo(e,l,c,r,f).then(p=>(Z(pl,`Received RPC '${e}' ${a}: `,p),p),p=>{throw wa(pl,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,n,r,s,i,a){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=rS[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class iS{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const mt="WebChannelConnection";class oS extends sS{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=Xl();return new Promise((l,c)=>{const u=new tm;u.setWithCredentials(!0),u.listenOnce(nm.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case wo.NO_ERROR:const p=u.getResponseJson();Z(mt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case wo.TIMEOUT:Z(mt,`RPC '${e}' ${a} timed out`),c(new ce($.DEADLINE_EXCEEDED,"Request time out"));break;case wo.HTTP_ERROR:const g=u.getStatus();if(Z(mt,`RPC '${e}' ${a} failed with status:`,g,"response text:",u.getResponseText()),g>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const R=E==null?void 0:E.error;if(R&&R.status&&R.message){const x=function(j){const F=j.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(F)>=0?F:$.UNKNOWN}(R.status);c(new ce(x,R.message))}else c(new ce($.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ce($.UNAVAILABLE,"Connection failed."));break;default:pe(9055,{l_:e,streamId:a,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Z(mt,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);Z(mt,`RPC '${e}' ${a} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=Xl(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=im(),l=sm(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(mt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);let g=!1,E=!1;const R=new iS({Zo:L=>{E?Z(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(g||(Z(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Z(mt,`RPC '${e}' stream ${s} sending:`,L),p.send(L))},Xo:()=>p.close()}),x=(L,j,F)=>{L.listen(j,B=>{try{F(B)}catch(H){setTimeout(()=>{throw H},0)}})};return x(p,Bs.EventType.OPEN,()=>{E||(Z(mt,`RPC '${e}' stream ${s} transport opened.`),R.__())}),x(p,Bs.EventType.CLOSE,()=>{E||(E=!0,Z(mt,`RPC '${e}' stream ${s} transport closed`),R.u_())}),x(p,Bs.EventType.ERROR,L=>{E||(E=!0,wa(mt,`RPC '${e}' stream ${s} transport errored. Name:`,L.name,"Message:",L.message),R.u_(new ce($.UNAVAILABLE,"The operation could not be completed")))}),x(p,Bs.EventType.MESSAGE,L=>{var j;if(!E){const F=L.data[0];qe(!!F,16349);const B=F,H=(B==null?void 0:B.error)||((j=B[0])===null||j===void 0?void 0:j.error);if(H){Z(mt,`RPC '${e}' stream ${s} received error:`,H);const ae=H.status;let re=function(_){const I=Ke[_];if(I!==void 0)return pA(I)}(ae),A=H.message;re===void 0&&(re=$.INTERNAL,A="Unknown error status: "+ae+" with message "+H.message),E=!0,R.u_(new ce(re,A)),p.close()}else Z(mt,`RPC '${e}' stream ${s} received:`,F),R.c_(F)}}),x(l,rm.STAT_EVENT,L=>{L.stat===Bl.PROXY?Z(mt,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===Bl.NOPROXY&&Z(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.a_()},0),R}}function gl(){return typeof document<"u"?document:null}/**
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
 */function Aa(t){return new gA(t,!0)}/**
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
 */class jm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const dd="PersistentStream";class aS{constructor(e,n,r,s,i,a,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new jm(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(Pr(n.toString()),Pr("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===n&&this.K_(r,s)},r=>{e(()=>{const s=new ce($.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return Z(dd,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(Z(dd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class lS extends aS{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=bA(e.writeResults,e.commitTime),r=is(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=EA(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>TA(this.serializer,r))};this.L_(n)}}/**
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
 */class cS{}class uS extends cS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new ce($.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(e,Ql(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ce($.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(e,Ql(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ce($.UNKNOWN,a.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class hS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Pr(n),this.oa=!1):Z("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const Di="RemoteStore";class fS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(a=>{r.enqueueAndForget(async()=>{Vi(this)&&(Z(Di,"Restarting streams for network reachability change."),await async function(c){const u=Me(c);u.Ta.add(4),await Ni(u),u.da.set("Unknown"),u.Ta.delete(4),await Sa(u)}(this))})}),this.da=new hS(r,s)}}async function Sa(t){if(Vi(t))for(const e of t.Ia)await e(!0)}async function Ni(t){for(const e of t.Ia)await e(!1)}function Vi(t){return Me(t).Ta.size===0}async function Hm(t,e,n){if(!xi(e))throw e;t.Ta.add(1),await Ni(t),t.da.set("Offline"),n||(n=()=>ZA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(Di,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await Sa(t)})}function zm(t,e){return e().catch(n=>Hm(t,n,e))}async function Ra(t){const e=Me(t),n=or(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:jc;for(;dS(e);)try{const s=await eS(e.localStore,r);if(s===null){e.ha.length===0&&n.N_();break}r=s.batchId,pS(e,s)}catch(s){await Hm(e,s)}qm(e)&&Gm(e)}function dS(t){return Vi(t)&&t.ha.length<10}function pS(t,e){t.ha.push(e);const n=or(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function qm(t){return Vi(t)&&!or(t).F_()&&t.ha.length>0}function Gm(t){or(t).start()}async function gS(t){or(t).ta()}async function mS(t){const e=or(t);for(const n of t.ha)e.Z_(n.mutations)}async function _S(t,e,n){const r=t.ha.shift(),s=Xc.from(r,e,n);await zm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Ra(t)}async function yS(t,e){e&&or(t).Y_&&await async function(r,s){if(function(a){return dA(a)&&a!==$.ABORTED}(s.code)){const i=r.ha.shift();or(r).O_(),await zm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Ra(r)}}(t,e),qm(t)&&Gm(t)}async function pd(t,e){const n=Me(t);n.asyncQueue.verifyOperationInProgress(),Z(Di,"RemoteStore received new credentials");const r=Vi(n);n.Ta.add(3),await Ni(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await Sa(n)}async function vS(t,e){const n=Me(t);e?(n.Ta.delete(2),await Sa(n)):e||(n.Ta.add(2),await Ni(n),n.da.set("Unknown"))}function or(t){return t.Va||(t.Va=function(n,r,s){const i=Me(n);return i.ra(),new lS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:gS.bind(null,t),i_:yS.bind(null,t),X_:mS.bind(null,t),ea:_S.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await Ra(t)):(await t.Va.stop(),t.ha.length>0&&(Z(Di,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
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
 */class tu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new tu(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ce($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wm(t,e){if(Pr("AsyncQueue",`${e}: ${t}`),xi(t))return new ce($.UNAVAILABLE,`${e}: ${t}`);throw t}class ES{constructor(){this.queries=gd(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const s=Me(n),i=s.queries;s.queries=gd(),i.forEach((a,l)=>{for(const c of l.ya)c.onError(r)})})(this,new ce($.ABORTED,"Firestore shutting down"))}}function gd(){return new Vr(t=>Am(t),Im)}function wS(t){t.ba.forEach(e=>{e.next()})}var md,_d;(_d=md||(md={})).Ca="default",_d.Cache="cache";const TS="SyncEngine";class bS{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.au={},this.uu=new Vr(l=>Am(l),Im),this.cu=new Map,this.lu=new Set,this.hu=new Dt(de.comparator),this.Pu=new Map,this.Tu=new Yc,this.Iu={},this.Eu=new Map,this.du=gs.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function IS(t,e,n){const r=kS(t);try{const s=await function(a,l){const c=Me(a),u=et.now(),f=l.reduce((E,R)=>E.add(R.key),Et());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let R=Ko(),x=Et();return c.Bs.getEntries(E,f).next(L=>{R=L,R.forEach((j,F)=>{F.isValidDocument()||(x=x.add(j))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,R)).next(L=>{p=L;const j=[];for(const F of l){const B=cA(F,p.get(F.key).overlayedDocument);B!=null&&j.push(new Mr(F.key,B,_m(B.value.mapValue),Rn.exists(!0)))}return c.mutationQueue.addMutationBatch(E,u,j,l)}).next(L=>{g=L;const j=L.applyToLocalDocumentSet(p,x);return c.documentOverlayCache.saveOverlays(E,L.batchId,j)})}).then(()=>({batchId:g.batchId,changes:Rm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let u=a.Iu[a.currentUser.toKey()];u||(u=new Dt(Te)),u=u.insert(l,c),a.Iu[a.currentUser.toKey()]=u}(r,s.batchId,n),await ka(r,s.changes),await Ra(r.remoteStore)}catch(s){const i=Wm(s,"Failed to persist write");n.reject(i)}}function yd(t,e,n){const r=Me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.uu.forEach((i,a)=>{const l=a.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=Me(a);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const g of p.ya)g.Da(l)&&(u=!0)}),u&&wS(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function AS(t,e){const n=Me(t),r=e.batch.batchId;try{const s=await YA(n.localStore,e);Qm(n,r,null),Km(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ka(n,s)}catch(s){await $c(s)}}async function SS(t,e,n){const r=Me(t);try{const s=await function(a,l){const c=Me(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(qe(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);Qm(r,e,n),Km(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ka(r,s)}catch(s){await $c(s)}}function Km(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function Qm(t,e,n){const r=Me(t);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}async function ka(t,e,n){const r=Me(t),s=[],i=[],a=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{a.push(r.Ru(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=void 0)===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=eu.Rs(c.targetId,u);i.push(p)}}))}),await Promise.all(a),r.au.j_(s),await async function(c,u){const f=Me(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>M.forEach(u,g=>M.forEach(g.ds,E=>f.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>M.forEach(g.As,E=>f.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!xi(p))throw p;Z(QA,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const E=f.xs.get(g),R=E.snapshotVersion,x=E.withLastLimboFreeSnapshotVersion(R);f.xs=f.xs.insert(g,x)}}}(r.localStore,i))}async function RS(t,e){const n=Me(t);if(!n.currentUser.isEqual(e)){Z(TS,"User change. New user:",e.toKey());const r=await Bm(n.localStore,e);n.currentUser=e,function(i,a){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new ce($.CANCELLED,a))})}),i.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ka(n,r.ks)}}function kS(t){const e=Me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=AS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=SS.bind(null,e),e}class Xo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Aa(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return XA(this.persistence,new KA,e.initialUser,this.serializer)}yu(e){return new $m(Zc.fi,this.serializer)}pu(e){return new tS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Xo.provider={build:()=>new Xo};class CS extends Xo{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){qe(this.persistence.referenceDelegate instanceof Jo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DA(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?Pt.withCacheSize(this.cacheSizeBytes):Pt.DEFAULT;return new $m(r=>Jo.fi(r,n),this.serializer)}}class Yl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>yd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RS.bind(null,this.syncEngine),await vS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ES}()}createDatastore(e){const n=Aa(e.databaseInfo.databaseId),r=function(i){return new oS(i)}(e.databaseInfo);return function(i,a,l,c){return new uS(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new fS(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>yd(this.syncEngine,n,0),function(){return fd.C()?new fd:new nS}())}createSyncEngine(e,n){return function(s,i,a,l,c,u,f){const p=new bS(s,i,a,l,c,u);return f&&(p.Au=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Me(s);Z(Di,"RemoteStore shutting down."),i.Ta.add(5),await Ni(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Yl.provider={build:()=>new Yl};/**
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
 */const ar="FirestoreClient";class PS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=lm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Z(ar,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Z(ar,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ml(t,e){t.asyncQueue.verifyOperationInProgress(),Z(ar,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Bm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function vd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xS(t);Z(ar,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>pd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>pd(e.remoteStore,s)),t._onlineComponents=e}async function xS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(ar,"Using user provided OfflineComponentProvider");try{await ml(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===$.FAILED_PRECONDITION||s.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;wa("Error using user provided cache. Falling back to memory cache: "+n),await ml(t,new Xo)}}else Z(ar,"Using default OfflineComponentProvider"),await ml(t,new CS(void 0));return t._offlineComponents}async function OS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(ar,"Using user provided OnlineComponentProvider"),await vd(t,t._uninitializedComponentsProvider._online)):(Z(ar,"Using default OnlineComponentProvider"),await vd(t,new Yl))),t._onlineComponents}function DS(t){return OS(t).then(e=>e.syncEngine)}/**
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
 */function Jm(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Ed=new Map;/**
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
 */function NS(t,e,n){if(!n)throw new ce($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function VS(t,e,n,r){if(e===!0&&r===!0)throw new ce($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wd(t){if(!de.isDocumentKey(t))throw new ce($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function nu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":pe(12329,{type:typeof t})}function Zl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ce($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=nu(t);throw new ce($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Xm="firestore.googleapis.com",Td=!0;class bd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ce($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Xm,this.ssl=Td}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Td;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Um;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xA)throw new ce($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}VS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Jm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ce($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ru{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ce($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ce($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uI;switch(r.type){case"firstParty":return new pI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ce($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Ed.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Ed.delete(n),r.terminate())}(this),Promise.resolve()}}function MS(t,e,n,r={}){var s;t=Zl(t,ru);const i=Ai(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(mg(`https://${c}`),_g("Firestore",!0)),a.host!==Xm&&a.host!==c&&wa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!Sr(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=_t.MOCK_USER;else{f=Lw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ce($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new _t(g)}t._authCredentials=new hI(new am(f,p))}}/**
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
 */class su{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new su(this.firestore,e,this._query)}}class kn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kn(this.firestore,e,this._key)}}class vi extends su{constructor(e,n,r){super(e,n,GI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kn(this.firestore,null,new de(e))}withConverter(e){return new vi(this.firestore,e,this._path)}}function LS(t,e,...n){if(t=fn(t),arguments.length===1&&(e=lm.newId()),NS("doc","path",e),t instanceof ru){const r=Qe.fromString(e,...n);return wd(r),new kn(t,null,new de(r))}{if(!(t instanceof kn||t instanceof vi))throw new ce($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Qe.fromString(e,...n));return wd(r),new kn(t.firestore,t instanceof vi?t.converter:null,new de(r))}}/**
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
 */const Id="AsyncQueue";class Ad{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new jm(this,"async_queue_retry"),this.ec=()=>{const r=gl();r&&Z(Id,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const n=gl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=gl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new br;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!xi(e))throw e;Z(Id,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Pr("INTERNAL UNHANDLED ERROR: ",Sd(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=n,n}enqueueAfterDelay(e,n,r){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const s=tu.createAndSchedule(this,e,n,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&pe(47125,{_c:Sd(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function Sd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Ym extends ru{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ad,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ad(e),this._firestoreClient=void 0,await e}}}function FS(t,e){const n=typeof t=="object"?t:wg(),r=typeof t=="string"?t:zo,s=Rc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Vw("firestore");i&&MS(s,...i)}return s}function US(t){if(t._terminated)throw new ce($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||$S(t),t._firestoreClient}function $S(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,f){return new xI(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Jm(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new PS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class Ei{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ei(dn.fromBase64String(e))}catch(n){throw new ce($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ei(dn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Zm{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ce($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ut(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class iu{constructor(e){this._methodName=e}}/**
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
 */class e_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ce($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ce($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Te(this._lat,e._lat)||Te(this._long,e._long)}}/**
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
 */class t_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const BS=/^__.*__$/;class jS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Mr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oi(e,this.data,n,this.fieldTransforms)}}function n_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw pe(40011,{hc:t})}}class ou{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new ou(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return Yo(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(n_(this.hc)&&BS.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class HS{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Aa(e)}gc(e,n,r,s=!1){return new ou({hc:e,methodName:n,fc:r,path:ut.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zS(t){const e=t._freezeSettings(),n=Aa(t._databaseId);return new HS(t._databaseId,!!e.ignoreUndefinedProperties,n)}function qS(t,e,n,r,s,i={}){const a=t.gc(i.merge||i.mergeFields?2:0,e,n,s);o_("Data must be an object, but it was:",a,r);const l=s_(r,a);let c,u;if(i.merge)c=new Jt(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=GS(e,p,n);if(!a.contains(g))throw new ce($.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);QS(f,g)||f.push(g)}c=new Jt(f),u=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=a.fieldTransforms;return new jS(new Kt(l),c,u)}class au extends iu{_toFieldTransform(e){return new iA(e.path,new mi)}isEqual(e){return e instanceof au}}function r_(t,e){if(i_(t=fn(t)))return o_("Unsupported field value:",e,t),s_(t,e);if(t instanceof iu)return function(r,s){if(!n_(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=r_(l,s.Rc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=fn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=et.fromDate(r);return{timestampValue:Kl(s.serializer,i)}}if(r instanceof et){const i=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Kl(s.serializer,i)}}if(r instanceof e_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ei)return{bytesValue:mA(s.serializer,r._byteString)};if(r instanceof kn){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Vc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof t_)return function(a,l){return{mapValue:{fields:{[gm]:{stringValue:mm},[Hl]:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Vc("VectorValues must only contain numeric values.");return Jc(l.serializer,u)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${nu(r)}`)}(t,e)}function s_(t,e){const n={};return um(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(t,(r,s)=>{const i=r_(s,e.Ic(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function i_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof e_||t instanceof Ei||t instanceof kn||t instanceof iu||t instanceof t_)}function o_(t,e,n){if(!i_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=nu(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function GS(t,e,n){if((e=fn(e))instanceof Zm)return e._internalPath;if(typeof e=="string")return KS(t,e);throw Yo("Field path arguments must be of type string or ",t,!1,void 0,n)}const WS=new RegExp("[~\\*/\\[\\]]");function KS(t,e,n){if(e.search(WS)>=0)throw Yo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Zm(...e.split("."))._internalPath}catch{throw Yo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Yo(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new ce($.INVALID_ARGUMENT,l+t+c)}function QS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function JS(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function XS(t,e,n){t=Zl(t,kn);const r=Zl(t.firestore,Ym),s=JS(t.converter,e);return YS(r,[qS(zS(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Rn.none())])}function YS(t,e){return function(r,s){const i=new br;return r.asyncQueue.enqueueAndForget(async()=>IS(await DS(r),s,i)),i.promise}(US(t),e)}function ZS(){return new au("serverTimestamp")}(function(e,n=!0){(function(s){vs=s})(_s),cs(new Rr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new Ym(new fI(r.getProvider("auth-internal")),new gI(a,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ce($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qo(u.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),tr($f,Bf,e),tr($f,Bf,"esm2017")})();const eR={apiKey:"AIzaSyC_acZxWWtGDDFPdxBaa2TR6JkQcw0k0Fk",authDomain:"afp-site-c1bd9.firebaseapp.com",projectId:"afp-site-c1bd9",storageBucket:"afp-site-c1bd9.firebasestorage.app",messagingSenderId:"533749269819",appId:"1:533749269819:web:47c5dbe921ef3aae83e31e",measurementId:"G-W9TQ1EE3PB"},tR=Eg(eR),nR=FS(tR);lI();const rR={class:"footer"},sR={class:"footer-bottom"},iR={class:"footer-nav"},oR={class:"subscribe-box"},aR={key:0,class:"subscribe-message"},lR={class:"footer-copy"},cR={__name:"Footer",setup(t){const e=Ar(""),n=Ar(""),r=async()=>{try{const s=e.value.trim().toLowerCase();if(!s){n.value="Please enter a valid email.";return}await XS(LS(nR,"mailingList",s),{email:s,subscribedAt:ZS()}),n.value="Thank you for subscribing!",e.value=""}catch(s){s.code==="permission-denied"?n.value="You’re already subscribed.":(console.error("Unexpected error adding email:",s),n.value="An error occurred. Please try again later.")}};return(s,i)=>(fe(),_e("footer",rR,[W("div",sR,[W("nav",iR,[se(we(Xe),{to:"/"},{default:We(()=>i[1]||(i[1]=[ze("Home")])),_:1,__:[1]}),se(we(Xe),{to:"/about"},{default:We(()=>i[2]||(i[2]=[ze("About")])),_:1,__:[2]}),se(we(Xe),{to:"/events"},{default:We(()=>i[3]||(i[3]=[ze("Events")])),_:1,__:[3]}),se(we(Xe),{to:"/contact"},{default:We(()=>i[4]||(i[4]=[ze("Contact")])),_:1,__:[4]})]),W("div",oR,[i[6]||(i[6]=W("h3",null,"Join our mailing list",-1)),W("form",{onSubmit:fE(r,["prevent"])},[dp(W("input",{"onUpdate:modelValue":i[0]||(i[0]=a=>e.value=a),type:"email",placeholder:"Enter your email",required:"",class:"email-input"},null,512),[[cE,e.value]]),i[5]||(i[5]=W("button",{type:"submit",class:"subscribe-button"},"Subscribe",-1))],32),n.value?(fe(),_e("p",aR,xe(n.value),1)):Wt("",!0)]),W("p",lR," © "+xe(new Date().getFullYear())+" Association of Family Psychiatrists. All rights reserved. ",1)])]))}},uR=nt(cR,[["__scopeId","data-v-32f87464"]]),hR={class:"layout"},fR={class:"page-content"},dR={__name:"App",setup(t){return(e,n)=>(fe(),_e(vt,null,[W("div",hR,[se(Sw),W("main",fR,[se(we(Ic))])]),se(uR)],64))}},pR=nt(dR,[["__scopeId","data-v-aa0b9fe9"]]),gR="modulepreload",mR=function(t){return"/site/"+t},Rd={},Hr=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(n.map(u=>{if(u=mR(u),u in Rd)return;Rd[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":gR,f||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),f)return new Promise((E,R)=>{g.addEventListener("load",E),g.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},_R="/site/assets/afp-logo-DTm74N-G.png",yR={class:"featured-event"},vR=["src"],ER={class:"event-details animate-right"},wR={class:"event-title"},TR={class:"event-meta"},bR={class:"event-description"},IR={__name:"FeaturedEvent",props:{title:String,date:String,location:String,description:String,image:String,link:String},setup(t){return(e,n)=>(fe(),_e("section",yR,[W("img",{src:t.image,alt:"Event image",class:"event-image animate-left"},null,8,vR),W("div",ER,[W("h2",wR,xe(t.title),1),W("p",TR,xe(t.date)+" • "+xe(t.location),1),W("p",bR,xe(t.description),1),se(we(Xe),{to:t.link,class:"cta-button"},{default:We(()=>n[0]||(n[0]=[ze("Sign Up")])),_:1,__:[0]},8,["to"])])]))}},AR=nt(IR,[["__scopeId","data-v-7e1683d1"]]),SR={class:"card"},RR=["src"],kR={class:"card-content"},CR={class:"card-title"},PR={class:"card-subtitle"},xR={key:0,class:"card-details"},OR={__name:"Card",props:{image:{type:String,default:""},title:String,subtitle:String,details:String},setup(t){const e=Ar(!1),n=Ar(!0);return(r,s)=>(fe(),_e("div",SR,[n.value?(fe(),_e("img",{key:0,src:t.image,alt:"Card image",class:"card-image",onError:s[0]||(s[0]=i=>n.value=!1)},null,40,RR)):Wt("",!0),W("div",kR,[W("h3",CR,xe(t.title),1),W("p",PR,xe(t.subtitle),1),t.details?(fe(),_e("button",{key:0,onClick:s[1]||(s[1]=i=>e.value=!e.value),class:"cta-button"},xe(e.value?"Hide":"Learn More"),1)):Wt("",!0),se(Xp,{name:"fade"},{default:We(()=>[e.value?(fe(),_e("p",xR,xe(t.details),1)):Wt("",!0)]),_:1})])]))}},DR=nt(OR,[["__scopeId","data-v-294fdb69"]]),NR={class:"card-grid-section"},VR={class:"grid-title"},MR={class:"card-grid"},LR={__name:"CardGrid",props:{title:{type:String,default:"Featured Events"},cards:{type:Array,required:!0}},setup(t){return(e,n)=>(fe(),_e("section",NR,[W("h2",VR,xe(t.title),1),W("div",MR,[(fe(!0),_e(vt,null,bi(t.cards,(r,s)=>(fe(),ms(DR,os({key:s},{ref_for:!0},r),null,16))),128))])]))}},ec=nt(LR,[["__scopeId","data-v-048c6274"]]),FR={class:"article-card"},UR=["src","alt"],$R={class:"content"},BR={class:"title"},jR=["href"],HR={__name:"ArticleCard",props:{title:String,thumbnail:String,url:String},setup(t){return(e,n)=>(fe(),_e("div",FR,[W("img",{src:t.thumbnail,alt:t.title,class:"thumbnail"},null,8,UR),W("div",$R,[W("h3",BR,xe(t.title),1),W("a",{href:t.url,target:"_blank",rel:"noopener",class:"read-button"},"Read Article",8,jR)])]))}},zR=nt(HR,[["__scopeId","data-v-08790d9a"]]),qR={class:"article-grid-section"},GR={class:"grid-title"},WR={class:"article-grid"},KR={__name:"ArticleGrid",props:{title:String,articles:Array},setup(t){return(e,n)=>(fe(),_e("section",qR,[W("h2",GR,xe(t.title),1),W("div",WR,[(fe(!0),_e(vt,null,bi(t.articles,(r,s)=>(fe(),ms(zR,os({key:s},{ref_for:!0},r),null,16))),128))])]))}},QR=nt(KR,[["__scopeId","data-v-6cbd1349"]]);function lu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Lr=lu();function a_(t){Lr=t}var ni={exec:()=>null};function Ce(t,e=""){let n=typeof t=="string"?t:t.source;const r={replace:(s,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(Rt.caret,"$1"),n=n.replace(s,a),r},getRegex:()=>new RegExp(n,e)};return r}var Rt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},JR=/^(?:[ \t]*(?:\n|$))+/,XR=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,YR=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Mi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ZR=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,cu=/(?:[*+-]|\d{1,9}[.)])/,l_=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,c_=Ce(l_).replace(/bull/g,cu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),e1=Ce(l_).replace(/bull/g,cu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),uu=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,t1=/^[^\n]+/,hu=/(?!\s*\])(?:\\.|[^\[\]\\])+/,n1=Ce(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",hu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),r1=Ce(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,cu).getRegex(),Ca="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",fu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,s1=Ce("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",fu).replace("tag",Ca).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),u_=Ce(uu).replace("hr",Mi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ca).getRegex(),i1=Ce(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",u_).getRegex(),du={blockquote:i1,code:XR,def:n1,fences:YR,heading:ZR,hr:Mi,html:s1,lheading:c_,list:r1,newline:JR,paragraph:u_,table:ni,text:t1},kd=Ce("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Mi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ca).getRegex(),o1={...du,lheading:e1,table:kd,paragraph:Ce(uu).replace("hr",Mi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",kd).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ca).getRegex()},a1={...du,html:Ce(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",fu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ni,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ce(uu).replace("hr",Mi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",c_).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},l1=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,c1=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,h_=/^( {2,}|\\)\n(?!\s*$)/,u1=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Pa=/[\p{P}\p{S}]/u,pu=/[\s\p{P}\p{S}]/u,f_=/[^\s\p{P}\p{S}]/u,h1=Ce(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,pu).getRegex(),d_=/(?!~)[\p{P}\p{S}]/u,f1=/(?!~)[\s\p{P}\p{S}]/u,d1=/(?:[^\s\p{P}\p{S}]|~)/u,p1=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,p_=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,g1=Ce(p_,"u").replace(/punct/g,Pa).getRegex(),m1=Ce(p_,"u").replace(/punct/g,d_).getRegex(),g_="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",_1=Ce(g_,"gu").replace(/notPunctSpace/g,f_).replace(/punctSpace/g,pu).replace(/punct/g,Pa).getRegex(),y1=Ce(g_,"gu").replace(/notPunctSpace/g,d1).replace(/punctSpace/g,f1).replace(/punct/g,d_).getRegex(),v1=Ce("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,f_).replace(/punctSpace/g,pu).replace(/punct/g,Pa).getRegex(),E1=Ce(/\\(punct)/,"gu").replace(/punct/g,Pa).getRegex(),w1=Ce(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),T1=Ce(fu).replace("(?:-->|$)","-->").getRegex(),b1=Ce("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",T1).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Zo=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,I1=Ce(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",Zo).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),m_=Ce(/^!?\[(label)\]\[(ref)\]/).replace("label",Zo).replace("ref",hu).getRegex(),__=Ce(/^!?\[(ref)\](?:\[\])?/).replace("ref",hu).getRegex(),A1=Ce("reflink|nolink(?!\\()","g").replace("reflink",m_).replace("nolink",__).getRegex(),gu={_backpedal:ni,anyPunctuation:E1,autolink:w1,blockSkip:p1,br:h_,code:c1,del:ni,emStrongLDelim:g1,emStrongRDelimAst:_1,emStrongRDelimUnd:v1,escape:l1,link:I1,nolink:__,punctuation:h1,reflink:m_,reflinkSearch:A1,tag:b1,text:u1,url:ni},S1={...gu,link:Ce(/^!?\[(label)\]\((.*?)\)/).replace("label",Zo).getRegex(),reflink:Ce(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Zo).getRegex()},tc={...gu,emStrongRDelimAst:y1,emStrongLDelim:m1,url:Ce(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},R1={...tc,br:Ce(h_).replace("{2,}","*").getRegex(),text:Ce(tc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},co={normal:du,gfm:o1,pedantic:a1},Fs={normal:gu,gfm:tc,breaks:R1,pedantic:S1},k1={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Cd=t=>k1[t];function rn(t,e){if(e){if(Rt.escapeTest.test(t))return t.replace(Rt.escapeReplace,Cd)}else if(Rt.escapeTestNoEncode.test(t))return t.replace(Rt.escapeReplaceNoEncode,Cd);return t}function Pd(t){try{t=encodeURI(t).replace(Rt.percentDecode,"%")}catch{return null}return t}function xd(t,e){var i;const n=t.replace(Rt.findPipe,(a,l,c)=>{let u=!1,f=l;for(;--f>=0&&c[f]==="\\";)u=!u;return u?"|":" |"}),r=n.split(Rt.splitPipe);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!((i=r.at(-1))!=null&&i.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(Rt.slashPipe,"|");return r}function Us(t,e,n){const r=t.length;if(r===0)return"";let s=0;for(;s<r&&t.charAt(r-s-1)===e;)s++;return t.slice(0,r-s)}function C1(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function Od(t,e,n,r,s){const i=e.href,a=e.title||null,l=t[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;const c={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:a,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,c}function P1(t,e,n){const r=t.match(n.other.indentCodeCompensation);if(r===null)return e;const s=r[1];return e.split(`
`).map(i=>{const a=i.match(n.other.beginningSpace);if(a===null)return i;const[l]=a;return l.length>=s.length?i.slice(s.length):i}).join(`
`)}var ea=class{constructor(t){De(this,"options");De(this,"rules");De(this,"lexer");this.options=t||Lr}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Us(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],r=P1(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){const r=Us(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Us(e[0],`
`)}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){let n=Us(e[0],`
`).split(`
`),r="",s="";const i=[];for(;n.length>0;){let a=!1;const l=[];let c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))l.push(n[c]),a=!0;else if(!a)l.push(n[c]);else break;n=n.slice(c);const u=l.join(`
`),f=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,s=s?`${s}
${f}`:f;const p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,i,!0),this.lexer.state.top=p,n.length===0)break;const g=i.at(-1);if((g==null?void 0:g.type)==="code")break;if((g==null?void 0:g.type)==="blockquote"){const E=g,R=E.raw+`
`+n.join(`
`),x=this.blockquote(R);i[i.length-1]=x,r=r.substring(0,r.length-E.raw.length)+x.raw,s=s.substring(0,s.length-E.text.length)+x.text;break}else if((g==null?void 0:g.type)==="list"){const E=g,R=E.raw+`
`+n.join(`
`),x=this.list(R);i[i.length-1]=x,r=r.substring(0,r.length-g.raw.length)+x.raw,s=s.substring(0,s.length-E.raw.length)+x.raw,n=R.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:s}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let a=!1;for(;t;){let c=!1,u="",f="";if(!(e=i.exec(t))||this.rules.block.hr.test(t))break;u=e[0],t=t.substring(u.length);let p=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,j=>" ".repeat(3*j.length)),g=t.split(`
`,1)[0],E=!p.trim(),R=0;if(this.options.pedantic?(R=2,f=p.trimStart()):E?R=e[1].length+1:(R=e[2].search(this.rules.other.nonSpaceChar),R=R>4?1:R,f=p.slice(R),R+=e[1].length),E&&this.rules.other.blankLine.test(g)&&(u+=g+`
`,t=t.substring(g.length+1),c=!0),!c){const j=this.rules.other.nextBulletRegex(R),F=this.rules.other.hrRegex(R),B=this.rules.other.fencesBeginRegex(R),H=this.rules.other.headingBeginRegex(R),ae=this.rules.other.htmlBeginRegex(R);for(;t;){const re=t.split(`
`,1)[0];let A;if(g=re,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),A=g):A=g.replace(this.rules.other.tabCharGlobal,"    "),B.test(g)||H.test(g)||ae.test(g)||j.test(g)||F.test(g))break;if(A.search(this.rules.other.nonSpaceChar)>=R||!g.trim())f+=`
`+A.slice(R);else{if(E||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||B.test(p)||H.test(p)||F.test(p))break;f+=`
`+g}!E&&!g.trim()&&(E=!0),u+=re+`
`,t=t.substring(re.length+1),p=A.slice(R)}}s.loose||(a?s.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0));let x=null,L;this.options.gfm&&(x=this.rules.other.listIsTask.exec(f),x&&(L=x[0]!=="[ ] ",f=f.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:u,task:!!x,checked:L,loose:!1,text:f,tokens:[]}),s.raw+=u}const l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let c=0;c<s.items.length;c++)if(this.lexer.state.top=!1,s.items[c].tokens=this.lexer.blockTokens(s.items[c].text,[]),!s.loose){const u=s.items[c].tokens.filter(p=>p.type==="space"),f=u.length>0&&u.some(p=>this.rules.other.anyLine.test(p.raw));s.loose=f}if(s.loose)for(let c=0;c<s.items.length;c++)s.items[c].loose=!0;return s}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:r,title:s}}}table(t){var a;const e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const n=xd(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(a=e[3])!=null&&a.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const l of r)this.rules.other.tableAlignRight.test(l)?i.align.push("right"):this.rules.other.tableAlignCenter.test(l)?i.align.push("center"):this.rules.other.tableAlignLeft.test(l)?i.align.push("left"):i.align.push(null);for(let l=0;l<n.length;l++)i.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:i.align[l]});for(const l of s)i.rows.push(xd(l,i.header.length).map((c,u)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:i.align[u]})));return i}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=Us(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=C1(e[2],"()");if(i===-2)return;if(i>-1){const l=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],s=i[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Od(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){const r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return Od(n,s,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...r[0]].length-1;let a,l,c=i,u=0;const f=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*t.length+i);(r=f.exec(e))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(l=[...a].length,r[3]||r[4]){c+=l;continue}else if((r[5]||r[6])&&i%3&&!((i+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const p=[...r[0]][0].length,g=t.slice(0,i+r.index+p+l);if(Math.min(i,l)%2){const R=g.slice(1,-1);return{type:"em",raw:g,text:R,tokens:this.lexer.inlineTokens(R)}}const E=g.slice(2,-2);return{type:"strong",raw:g,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let i;do i=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(i!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){const n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},An=class nc{constructor(e){De(this,"tokens");De(this,"options");De(this,"state");De(this,"tokenizer");De(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Lr,this.options.tokenizer=this.options.tokenizer||new ea,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:Rt,block:co.normal,inline:Fs.normal};this.options.pedantic?(n.block=co.pedantic,n.inline=Fs.pedantic):this.options.gfm&&(n.block=co.gfm,this.options.breaks?n.inline=Fs.breaks:n.inline=Fs.gfm),this.tokenizer.rules=n}static get rules(){return{block:co,inline:Fs}}static lex(e,n){return new nc(n).lex(e)}static lexInline(e,n){return new nc(n).inlineTokens(e)}lex(e){e=e.replace(Rt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){var s,i,a;for(this.options.pedantic&&(e=e.replace(Rt.tabCharGlobal,"    ").replace(Rt.spaceLine,""));e;){let l;if((i=(s=this.options.extensions)==null?void 0:s.block)!=null&&i.some(u=>(l=u.call({lexer:this},e,n))?(e=e.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.space(e)){e=e.substring(l.raw.length);const u=n.at(-1);l.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(e)){e=e.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(l=this.tokenizer.fences(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(e)){e=e.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(e)){e=e.substring(l.raw.length),n.push(l);continue}let c=e;if((a=this.options.extensions)!=null&&a.startBlock){let u=1/0;const f=e.slice(1);let p;this.options.extensions.startBlock.forEach(g=>{p=g.call({lexer:this},f),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(c=e.substring(0,u+1))}if(this.state.top&&(l=this.tokenizer.paragraph(c))){const u=n.at(-1);r&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l),r=c.length!==e.length,e=e.substring(l.raw.length);continue}if(l=this.tokenizer.text(e)){e=e.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var l,c,u;let r=e,s=null;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)f.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,a="";for(;e;){i||(a=""),i=!1;let f;if((c=(l=this.options.extensions)==null?void 0:l.inline)!=null&&c.some(g=>(f=g.call({lexer:this},e,n))?(e=e.substring(f.raw.length),n.push(f),!0):!1))continue;if(f=this.tokenizer.escape(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.tag(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.link(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(f.raw.length);const g=n.at(-1);f.type==="text"&&(g==null?void 0:g.type)==="text"?(g.raw+=f.raw,g.text+=f.text):n.push(f);continue}if(f=this.tokenizer.emStrong(e,r,a)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.codespan(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.br(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.del(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.autolink(e)){e=e.substring(f.raw.length),n.push(f);continue}if(!this.state.inLink&&(f=this.tokenizer.url(e))){e=e.substring(f.raw.length),n.push(f);continue}let p=e;if((u=this.options.extensions)!=null&&u.startInline){let g=1/0;const E=e.slice(1);let R;this.options.extensions.startInline.forEach(x=>{R=x.call({lexer:this},E),typeof R=="number"&&R>=0&&(g=Math.min(g,R))}),g<1/0&&g>=0&&(p=e.substring(0,g+1))}if(f=this.tokenizer.inlineText(p)){e=e.substring(f.raw.length),f.raw.slice(-1)!=="_"&&(a=f.raw.slice(-1)),i=!0;const g=n.at(-1);(g==null?void 0:g.type)==="text"?(g.raw+=f.raw,g.text+=f.text):n.push(f);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}},ta=class{constructor(t){De(this,"options");De(this,"parser");this.options=t||Lr}space(t){return""}code({text:t,lang:e,escaped:n}){var i;const r=(i=(e||"").match(Rt.notSpaceStart))==null?void 0:i[0],s=t.replace(Rt.endingNewline,"")+`
`;return r?'<pre><code class="language-'+rn(r)+'">'+(n?s:rn(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:rn(s,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){const e=t.ordered,n=t.start;let r="";for(let a=0;a<t.items.length;a++){const l=t.items[a];r+=this.listitem(l)}const s=e?"ol":"ul",i=e&&n!==1?' start="'+n+'"':"";return"<"+s+i+`>
`+r+"</"+s+`>
`}listitem(t){var n;let e="";if(t.task){const r=this.checkbox({checked:!!t.checked});t.loose?((n=t.tokens[0])==null?void 0:n.type)==="paragraph"?(t.tokens[0].text=r+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=r+" "+rn(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):e+=r+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let s=0;s<t.header.length;s++)n+=this.tablecell(t.header[s]);e+=this.tablerow({text:n});let r="";for(let s=0;s<t.rows.length;s++){const i=t.rows[s];n="";for(let a=0;a<i.length;a++)n+=this.tablecell(i[a]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){const e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${rn(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){const r=this.parser.parseInline(n),s=Pd(t);if(s===null)return r;t=s;let i='<a href="'+t+'"';return e&&(i+=' title="'+rn(e)+'"'),i+=">"+r+"</a>",i}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));const s=Pd(t);if(s===null)return rn(n);t=s;let i=`<img src="${t}" alt="${n}"`;return e&&(i+=` title="${rn(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:rn(t.text)}},mu=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},Sn=class rc{constructor(e){De(this,"options");De(this,"renderer");De(this,"textRenderer");this.options=e||Lr,this.options.renderer=this.options.renderer||new ta,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new mu}static parse(e,n){return new rc(n).parse(e)}static parseInline(e,n){return new rc(n).parseInline(e)}parse(e,n=!0){var s,i;let r="";for(let a=0;a<e.length;a++){const l=e[a];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[l.type]){const u=l,f=this.options.extensions.renderers[u.type].call({parser:this},u);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){r+=f||"";continue}}const c=l;switch(c.type){case"space":{r+=this.renderer.space(c);continue}case"hr":{r+=this.renderer.hr(c);continue}case"heading":{r+=this.renderer.heading(c);continue}case"code":{r+=this.renderer.code(c);continue}case"table":{r+=this.renderer.table(c);continue}case"blockquote":{r+=this.renderer.blockquote(c);continue}case"list":{r+=this.renderer.list(c);continue}case"html":{r+=this.renderer.html(c);continue}case"paragraph":{r+=this.renderer.paragraph(c);continue}case"text":{let u=c,f=this.renderer.text(u);for(;a+1<e.length&&e[a+1].type==="text";)u=e[++a],f+=`
`+this.renderer.text(u);n?r+=this.renderer.paragraph({type:"paragraph",raw:f,text:f,tokens:[{type:"text",raw:f,text:f,escaped:!0}]}):r+=f;continue}default:{const u='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}parseInline(e,n=this.renderer){var s,i;let r="";for(let a=0;a<e.length;a++){const l=e[a];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[l.type]){const u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){r+=u||"";continue}}const c=l;switch(c.type){case"escape":{r+=n.text(c);break}case"html":{r+=n.html(c);break}case"link":{r+=n.link(c);break}case"image":{r+=n.image(c);break}case"strong":{r+=n.strong(c);break}case"em":{r+=n.em(c);break}case"codespan":{r+=n.codespan(c);break}case"br":{r+=n.br(c);break}case"del":{r+=n.del(c);break}case"text":{r+=n.text(c);break}default:{const u='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},_l,Ao=(_l=class{constructor(t){De(this,"options");De(this,"block");this.options=t||Lr}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?An.lex:An.lexInline}provideParser(){return this.block?Sn.parse:Sn.parseInline}},De(_l,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),_l),x1=class{constructor(...t){De(this,"defaults",lu());De(this,"options",this.setOptions);De(this,"parse",this.parseMarkdown(!0));De(this,"parseInline",this.parseMarkdown(!1));De(this,"Parser",Sn);De(this,"Renderer",ta);De(this,"TextRenderer",mu);De(this,"Lexer",An);De(this,"Tokenizer",ea);De(this,"Hooks",Ao);this.use(...t)}walkTokens(t,e){var r,s;let n=[];for(const i of t)switch(n=n.concat(e.call(this,i)),i.type){case"table":{const a=i;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,e));for(const l of a.rows)for(const c of l)n=n.concat(this.walkTokens(c.tokens,e));break}case"list":{const a=i;n=n.concat(this.walkTokens(a.items,e));break}default:{const a=i;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,e))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const i=e.renderers[s.name];i?e.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=i.apply(this,a)),l}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=e[s.level];i?i.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),n.renderer){const s=this.defaults.renderer||new ta(this.defaults);for(const i in n.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const a=i,l=n.renderer[a],c=s[a];s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f||""}}r.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new ea(this.defaults);for(const i in n.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const a=i,l=n.tokenizer[a],c=s[a];s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f}}r.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new Ao;for(const i in n.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const a=i,l=n.hooks[a],c=s[a];Ao.passThroughHooks.has(i)?s[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(s,u)).then(p=>c.call(s,p));const f=l.call(s,u);return c.call(s,f)}:s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f}}r.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(a){let l=[];return l.push(i.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return An.lex(t,e??this.defaults)}parser(t,e){return Sn.parse(t,e??this.defaults)}parseMarkdown(t){return(n,r)=>{const s={...r},i={...this.defaults,...s},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=t);const l=i.hooks?i.hooks.provideLexer():t?An.lex:An.lexInline,c=i.hooks?i.hooks.provideParser():t?Sn.parse:Sn.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>l(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>c(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(a);try{i.hooks&&(n=i.hooks.preprocess(n));let u=l(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let f=c(u,i);return i.hooks&&(f=i.hooks.postprocess(f)),f}catch(u){return a(u)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const r="<p>An error occurred:</p><pre>"+rn(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},Dr=new x1;function ke(t,e){return Dr.parse(t,e)}ke.options=ke.setOptions=function(t){return Dr.setOptions(t),ke.defaults=Dr.defaults,a_(ke.defaults),ke};ke.getDefaults=lu;ke.defaults=Lr;ke.use=function(...t){return Dr.use(...t),ke.defaults=Dr.defaults,a_(ke.defaults),ke};ke.walkTokens=function(t,e){return Dr.walkTokens(t,e)};ke.parseInline=Dr.parseInline;ke.Parser=Sn;ke.parser=Sn.parse;ke.Renderer=ta;ke.TextRenderer=mu;ke.Lexer=An;ke.lexer=An.lex;ke.Tokenizer=ea;ke.Hooks=Ao;ke.parse=ke;ke.options;ke.setOptions;ke.use;ke.walkTokens;ke.parseInline;Sn.parse;An.lex;const O1=["id"],D1=["src","alt"],N1={class:"event-content"},V1={class:"event-title"},M1={class:"event-datetime"},L1={key:0},F1={key:0,class:"event-location"},U1=["innerHTML"],$1=["href"],B1={key:2,class:"schedule"},j1={class:"schedule-time"},H1=["innerHTML"],z1={__name:"Event",props:{id:String,title:String,date:String,time:String,location:String,description:String,image:String,rsvpLink:String,link:String,linkLabel:{type:String,default:"RSVP / Access"},schedule:{type:Array,default:()=>[]}},setup(t){const e=t,n=xt(()=>new Date(e.date).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"})),r=xt(()=>e.description?ke.parseInline(e.description):""),s=xt(()=>e.schedule.map(a=>({...a,parsedTitle:ke.parseInline(a.title||"")}))),i={initial:{opacity:0,y:30},enter:{opacity:1,y:0,transition:{duration:.6}}};return(a,l)=>{const c=Jy("motion");return dp((fe(),_e("article",{id:t.id,class:"event-card animate-fade-slide"},[t.image?(fe(),_e("img",{key:0,src:t.image,alt:t.title,class:"event-image"},null,8,D1)):Wt("",!0),W("div",N1,[W("h2",V1,xe(t.title),1),W("p",M1,[ze(xe(n.value),1),t.time?(fe(),_e("span",L1," • "+xe(t.time),1)):Wt("",!0)]),t.location?(fe(),_e("p",F1,xe(t.location),1)):Wt("",!0),W("p",{class:"event-description",innerHTML:r.value},null,8,U1),t.rsvpLink||t.link?(fe(),_e("a",{key:1,href:t.rsvpLink||t.link,target:"_blank",rel:"noopener",class:"event-button"},xe(t.linkLabel),9,$1)):Wt("",!0),t.schedule&&t.schedule.length?(fe(),_e("div",B1,[l[0]||(l[0]=W("h3",null,"Event Schedule",-1)),W("ul",null,[(fe(!0),_e(vt,null,bi(s.value,(u,f)=>(fe(),_e("li",{key:f,class:"schedule-item"},[W("span",j1,xe(u.time),1),W("span",{class:"schedule-title",innerHTML:u.parsedTitle},null,8,H1)]))),128))])])):Wt("",!0)])],8,O1)),[[c,i]])}}},y_=nt(z1,[["__scopeId","data-v-b0a5303c"]]),q1={class:"publication-card"},G1={class:"title"},W1={class:"authors"},K1={class:"summary"},Q1=["href"],J1={__name:"PublicationCard",props:{title:String,authors:String,summary:String,url:String},setup(t){return(e,n)=>(fe(),_e("div",q1,[W("h3",G1,xe(t.title),1),W("p",W1,[n[0]||(n[0]=W("strong",null,"Authors:",-1)),ze(" "+xe(t.authors.join(", ")),1)]),W("p",K1,xe(t.summary),1),W("a",{href:t.url,target:"_blank",rel:"noopener",class:"view-button"}," View Publication ",8,Q1)]))}},X1=nt(J1,[["__scopeId","data-v-b6dcf581"]]),Y1={title:"Featured Event",date:"October 12, 2025",location:"San Francisco, CA",description:"Ex: Registration has opened for the annual AFP Conference. This component can be used to display an event, with an image and description",image:"https://media.istockphoto.com/id/1417699524/photo/group-of-people-at-music-concert.jpg?s=2048x2048&w=is&k=20&c=ry_TiyFeGk5F03WDdcTE9lnx25PvIIUvKCl0uQHyFa0=",link:"/events#conference"},Z1=[{image:"https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=2048x2048&w=is&k=20&c=bUHQJBt4Nbp0IEngDcXMMQteAnGi7fz1WpEuq3zLrOI=",title:"AACAP",subtitle:"Annual Meeting • October 2025",details:"With some additional information here"},{image:"https://media.istockphoto.com/id/1411002384/photo/nurses-meeting.jpg?s=2048x2048&w=is&k=20&c=M5E3-J6IVCX6cvVBGyfedmTXEPjedRxyE2NZMkdv9hM=",title:"APA",subtitle:"Annual Meeting • May 2026",details:"Link:"},{image:"https://media.istockphoto.com/id/1783743772/photo/female-speaker-giving-a-presentation-during-business-seminar-at-convention-center.jpg?s=2048x2048&w=is&k=20&c=h7aIvTLP5PhWfrp54V_yUhtoD1cZqqwauSmqMAsbnyw=",title:"Annual AFP Conference",subtitle:"Virtual • March 2026",details:"Our flagship event featuring keynote speakers, panels, and networking opportunities."}],ek=[{title:"Coping With Problematic Effects of Social Media",thumbnail:"https://images.squarespace-cdn.com/content/v1/6267042fe703aa417b69ec37/ff56a26d-ca75-4256-8854-6ddba48c6fc5/Teenage+girl+using+smart+phone+at+home+stock+photo.jpg?format=2500w",url:"https://www.psychologytoday.com/us/blog/psychiatrys-think-tank/202501/coping-with-problematic-effects-of-social-media"},{title:"Community Support Strategies",thumbnail:"https://media.istockphoto.com/id/1465173464/photo/business-network-concept-teamwork-partnership-human-resources.jpg?s=2048x2048&w=is&k=20&c=45hL9SREGO-8XjTxsmFy1Iph1lHSxEqD-MTkVlodM_o="},{title:"Trauma-Informed Care",thumbnail:"https://media.istockphoto.com/id/2206797715/photo/cubes-form-the-expression-ptsd.jpg?s=2048x2048&w=is&k=20&c=w4i03qsp8ue3YYBBhSuqcaAwzhfmyWGuEBmA2QkN2Tg="}],tk=[{title:"Janice Cho, MD"},{title:"Sarah Faitell, DO"},{title:"Eileen Glocer, MD"},{title:"Hannah Goddard, DO"},{title:"Jatin Julakanti, MD"},{title:"Hannah Leo, MD"},{title:"Kaajal Patel Tan, DO"},{title:"Michelle Prakash, MD"},{title:"Pallavi Tatapudy, MD"},{title:"Richard Seeber II, MD"},{title:"Alfonso Vera Jr, MD"}],nk={title:"Highlights: 2024 Annual Family Psychiatry Conference",date:"September 21, 2025",time:"9:00 AM – 4:00 PM PT",description:"Join us for the 2025 Annual Conference, featuring leading experts in family psychiatry. Engage in keynotes, panels, and networking opportunities.",link:"https://drive.google.com/file/d/14MEsEO4A65rdNfa7eHmyuKKwWBJJDtLl/view?usp=drive_link",linkLabel:"Watch Recording",schedule:[{time:" 11:00 AM",title:"Introduction by Dr. Glick on the state of psychiatric practice, it’s efficacy, and why it isn’t used more in practice"},{time:"11:10 AM",title:"[Family Work in Adult Outpatient Setting](https://www.familypsychiatrists.org/s/family-work-in-outpatient-setting-Carolyn-Fulton.pdf) (Carolyn Fulton)"},{time:"11:45 PM",title:"[Role of Family Engagement in PHP](https://www.familypsychiatrists.org/s/Role-of-Family-Engagement-in-a-Partial-Hospital-Program-Tumuluru.pdf) (Dr. Tumuluru)"},{time:"12:20 PM",title:"Break"},{time:"12:30 PM",title:"[Family and Family Interventions in Institutional Care](https://www.familypsychiatrists.org/s/family-interventions-in-institutionalized-care-settings-Gogineni.pdf) (Dr. Gogineni)"},{time:"1:05 PM",title:"[Understanding and Treating Adolescent Eating Disorders](https://www.familypsychiatrists.org/s/understanding-and-treating-adolescent-eating-disorders-the-role-of-the-psychiatrist-in-family-based.pdf) (Dr. Spector and Dr. Spettigue)"},{time:"1:40 PM",title:"Break Out Rooms"}]},rk=[{title:"Helping Couples and Families Navigate Illness and Disability",summary:"John Rolland’s new book presents an integrated approach for supporting couples and families dealing with serious illness and disability.",url:"https://example.com/research-publication",authors:["John Rolland","John Doe"]},{title:"Lisa Dixon Appointed Editor in Chief of Psychiatric Services",summary:"Lisa Dixon is now the Editor in Chief of Psychiatric Services, bringing her extensive expertise in family psychiatry and community mental health.",url:"https://example.com/research-publication",authors:["Lisa Dixon"]},{title:"Recent Articles of Interest to Our Members",summary:"A curated list of recent publications and articles that provide valuable insights and advancements in the field of family psychiatry.",url:"https://example.com/research-publication",authors:["AFP Editorial Board"]}],sk={class:"home"},ik={class:"about",id:"about"},ok={class:"conference-and-publications"},ak={class:"conference-column",id:"conference"},lk={class:"publications-column",id:"publications"},ck={__name:"HomeView",setup(t){return(e,n)=>(fe(),_e("section",sk,[n[4]||(n[4]=Gp('<div class="intro" data-v-e3622ead><div class="logo-column" data-v-e3622ead><img src="'+_R+'" alt="AFP Logo" class="logo-img" data-v-e3622ead></div><div class="welcome-column" id="welcome" data-v-e3622ead><h1 class="welcome-title" data-v-e3622ead>Welcome to the Association of Family Psychiatrists</h1><p class="welcome-subtitle" data-v-e3622ead> Promoting mental wellness and supporting family psychiatry through education, advocacy, and community. </p></div></div>',1)),W("div",ik,[n[1]||(n[1]=W("h2",null,"About Us",-1)),n[2]||(n[2]=W("p",null," The Association of Family Psychiatrists is dedicated to advancing the field of family mental health by fostering professional development, sharing best practices, and connecting practitioners across the country. ",-1)),se(we(Xe),{to:"/about",class:"cta-button"},{default:We(()=>n[0]||(n[0]=[ze("Learn More")])),_:1,__:[0]})]),se(AR,os(we(Y1),{id:"featured-event"}),null,16),W("div",ok,[W("div",ak,[se(y_,ey(qp(we(nk))),null,16)]),W("div",lk,[n[3]||(n[3]=W("h2",null,"Featured Publications",-1)),(fe(!0),_e(vt,null,bi(we(rk),(r,s)=>(fe(),ms(X1,os({key:s},{ref_for:!0},r),null,16))),128))])]),se(ec,{title:"Affiliated Organizations",cards:we(Z1),id:"affiliated-organizations"},null,8,["cards"]),se(ec,{title:"2024 Winners of our Annual Award for Excellence in Family Care",cards:we(tk),id:"award-winners"},null,8,["cards"]),se(QR,{title:"Featured Books",articles:we(ek),id:"featured-books"},null,8,["articles"])]))}},uk=nt(ck,[["__scopeId","data-v-e3622ead"]]),hk={class:"overlay animate-fade-slide"},fk={class:"title"},dk={class:"subtitle"},pk={__name:"Hero",props:{title:String,subtitle:String,image:String},setup(t){return(e,n)=>(fe(),_e("section",{class:"hero",style:wi({backgroundImage:`url(${t.image})`})},[W("div",hk,[W("h1",fk,xe(t.title),1),W("p",dk,xe(t.subtitle),1)])],4))}},gk=nt(pk,[["__scopeId","data-v-7cb3ac27"]]),mk={class:"about-page"},_k={class:"intro"},yk={__name:"AboutView",setup(t){return(e,n)=>(fe(),_e("div",mk,[W("section",_k,[se(gk,{title:"Welcome to the Association of Family Psychiatrists",subtitle:"Promoting mental wellness and supporting family psychiatry through education, advocacy, and community.",image:"https://images.squarespace-cdn.com/content/v1/5748cc56746fb940f105bd1c/22364a6b-02db-4f89-8840-8ad7de5d6682/family+therapy+pic.jpg"}),n[0]||(n[0]=W("div",{class:"section-content",id:"about-statement"},[W("h1",{class:"section-heading"},"About the Association"),W("p",null," The Association of Family Psychiatrists is committed to advancing the field of family mental health by fostering collaboration, research, education, and advocacy. ")],-1))]),n[1]||(n[1]=Gp('<section class="mission" data-v-d66f0365><div class="section-content" id="mission-statement" data-v-d66f0365><h2 class="section-heading" data-v-d66f0365>Our Mission</h2><p data-v-d66f0365> We strive to support psychiatrists and mental health professionals who work with families, providing resources, training, and a professional network to promote mental wellness at every stage of life. </p></div></section><section class="vision" data-v-d66f0365><div class="section-content" id="vision-statement" data-v-d66f0365><h2 class="section-heading" data-v-d66f0365>Our Vision</h2><p data-v-d66f0365> A world where every family has access to compassionate, evidence-based psychiatric care. </p></div></section>',2))]))}},vk=nt(yk,[["__scopeId","data-v-d66f0365"]]),Ek={class:"info-section"},wk={class:"heading"},Tk={key:0,class:"subheading"},bk={class:"description"},Ik={__name:"InformationSection",props:{heading:String,subheading:String,description:String,link:String},setup(t){return(e,n)=>{const r=Ky("RouterLink");return fe(),_e("section",Ek,[W("h2",wk,xe(t.heading),1),t.subheading?(fe(),_e("h3",Tk,xe(t.subheading),1)):Wt("",!0),W("p",bk,xe(t.description),1),se(r,{to:t.link,class:"read-more"},{default:We(()=>n[0]||(n[0]=[ze("Read More")])),_:1,__:[0]},8,["to"])])}}},zr=nt(Ik,[["__scopeId","data-v-af70b806"]]),Ak={class:"resources"},Sk={key:1},Rk={__name:"ResourcesView",setup(t){return(e,n)=>(fe(),_e("section",Ak,[e.$route.name!=="resources"?(fe(),ms(we(Ic),{key:0})):(fe(),_e("div",Sk,[n[0]||(n[0]=W("h1",{class:"page-title animate-fade-slide"},"Resources",-1)),se(zr,{class:"animate-fade-slide",heading:"Our Listserv",subheading:"Join the discussion",description:"Visit the discussion group of the Association of Family Psychiatry on Google Groups.",link:"/resources/listserv"}),se(zr,{class:"animate-fade-slide",heading:"Articles of Interest",subheading:"",description:"Archived articles of interest to our members",link:"/resources/articles"}),se(zr,{class:"animate-fade-slide",heading:"General Web Resources",subheading:"",description:"In addition to this page, resources including books and articles can be found throughout the website.",link:"/resources/web"}),se(zr,{class:"animate-fade-slide",heading:"Child & Adolescent ",description:"Resources for child and adolescent psychiatry",link:"/resources/child-adolescent"}),se(zr,{class:"animate-fade-slide",heading:"Couples & Adults ",description:"Resources for couples and adults",link:"/resources/couples-adults"}),se(zr,{class:"animate-fade-slide",heading:"Culture & Family ",description:"Resources for culture and family",link:"/resources/culture-family"})]))]))}},kk=nt(Rk,[["__scopeId","data-v-afec78ac"]]),Ck=[{image:"/members/john-doe.jpg",title:"Dr. John Doe",subtitle:"Family Psychiatrist • New York",details:"Dr. Doe specializes in adolescent mental health and family therapy, with over 15 years of experience."},{image:"/members/jane-smith.jpg",title:"Dr. Jane Smith",subtitle:"Clinical Psychiatrist • +1-408-310-3927",details:"Expert in cognitive behavioral therapy and mindfulness-based interventions. Passionate about community education."},{image:"/members/alex-lee.jpg",title:"Dr. Alex Lee",subtitle:"Child & Adolescent Psychiatrist • Illinois",details:"Focusing on early intervention strategies and supportive therapy for children and their families."},{image:"/members/susan-chen.jpg",title:"Dr. Susan Chen",subtitle:"Family Systems Psychiatrist • Texas",details:"Published author and speaker on family systems theory and cross-cultural psychiatry."}],Pk={class:"member-view"},xk={__name:"MemberView",setup(t){return(e,n)=>(fe(),_e("section",Pk,[n[0]||(n[0]=W("h1",{class:"page-title animate-fade-slide"},"Our Members",-1)),n[1]||(n[1]=W("p",{class:"page-subtitle animate-fade-slide"}," Meet some of the dedicated professionals in our association. ",-1)),se(ec,{title:"Members",class:"animate-fade-slide",cards:we(Ck)},null,8,["cards"])]))}},Ok=nt(xk,[["__scopeId","data-v-2fd62856"]]),Dk=[{id:"aacap",title:"American Academy of Child and Adolescent Psychiatry Annual Meeting",date:"October 2025",time:"",location:"Annual Meeting",description:"A virtual seminar exploring the latest research in child and adolescent psychiatry.",image:"https://media.istockphoto.com/id/1496377921/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=xuCCbqrrZoE0jKxLd8aW2U3dSjxwJaKw99EDea1q91w=",link:"https://example.com/webinar-child-mental-health",linkLabel:"Join Webinar"},{id:"afp",title:"Annual Family Psychiatry Conference",date:"March 2026",location:"Virtual",description:"Join leading experts in family psychiatry for a full day of workshops and keynotes.",image:"https://media.istockphoto.com/id/1496377580/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=cQAx2DYW0wlK5IgykC0pqGupR2lSwDmw7SEn2fuVgS0=",rsvpLink:"https://example.com/rsvp-conference"},{id:"apa",title:"American Psychological Association Annual Meeting",date:"May 2026",location:"Online",description:"A virtual seminar exploring the latest research in psychiatry.",image:"https://media.istockphoto.com/id/1496377921/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=xuCCbqrrZoE0jKxLd8aW2U3dSjxwJaKw99EDea1q91w=",rsvpLink:"https://example.com/access-webinar"}],Nk={class:"events-view"},Vk={__name:"EventsView",setup(t){return(e,n)=>(fe(),_e("section",Nk,[n[0]||(n[0]=W("h1",{class:"animate-fade-slide"},"Upcoming Events",-1)),(fe(!0),_e(vt,null,bi(we(Dk),r=>(fe(),ms(y_,os({key:r.id},{ref_for:!0},r),null,16))),128))]))}},Mk=nt(Vk,[["__scopeId","data-v-34ea3e05"]]),Lk={},Fk={class:"contact-view"};function Uk(t,e){return fe(),_e("section",Fk,e[0]||(e[0]=[W("h1",{class:"page-title animate-fade-slide"},"Contact Us",-1),W("p",{class:"page-subtitle animate-fade-slide",style:{"animation-delay":"0.2s"}}," We'd love to hear from you! Reach out with any questions, suggestions, or inquiries. ",-1),W("div",{class:"contact-info animate-fade-slide",style:{"animation-delay":"0.4s"}},[W("p",null,[ze("Email: "),W("a",{href:"mailto:info@familypsychiatrists.org"},"info@familypsychiatrists.org")]),W("p",null,"Phone: (555) 123-4567"),W("p",null,"Mailing Address: 123 Main Street, Suite 456, San Francisco, CA 94105")],-1),W("div",{class:"contact-form animate-fade-slide",style:{"animation-delay":"0.6s"}},[W("h2",null,"Send Us a Message"),W("form",{action:"https://formspree.io/f/xanjjwnj",method:"POST",class:"contact-form-form"},[W("input",{type:"text",name:"name",placeholder:"Your Name",required:""}),W("input",{type:"email",name:"_replyto",placeholder:"Your Email",required:""}),W("textarea",{name:"message",placeholder:"Your Message",rows:"5",required:""}),W("input",{type:"hidden",name:"_next",value:"https://yoursite.com/thank-you"}),W("button",{type:"submit",class:"cta-button"},"Send Message")])],-1)]))}const $k=nt(Lk,[["render",Uk],["__scopeId","data-v-ccf43640"]]),Bk=Ew({history:XE(),routes:[{path:"/",name:"home",component:uk},{path:"/about",name:"about",component:vk},{path:"/resources",name:"resources",component:kk,children:[{path:"listserv",name:"resources-listserv",component:()=>Hr(()=>import("./ListservView-BES-c1ML.js"),__vite__mapDeps([0,1,2]))},{path:"articles",name:"resources-articles",component:()=>Hr(()=>import("./ArticlesView-CvzJYEJp.js"),__vite__mapDeps([3,1,2]))},{path:"web",name:"resources-web",component:()=>Hr(()=>import("./WebResourcesView-DTT-ELHb.js"),__vite__mapDeps([4,1,2]))}]},{path:"/members",name:"members",component:Ok},{path:"/events",name:"events",component:Mk},{path:"/contact",name:"contact",component:$k},{path:"/confirmation",name:"confirmation",component:()=>Hr(()=>import("./MembershipConfirmationView-BQo419d-.js"),[])},{path:"/membership",name:"membership",component:()=>Hr(()=>import("./MembershipView-agaSPO4_.js"),__vite__mapDeps([5,6]))},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Hr(()=>import("./PlaceholderView-0icYThyW.js"),[])}],scrollBehavior(t,e,n){return t.hash?{el:t.hash,behavior:"smooth"}:{top:0}}}),_u=gE(pR);_u.use(vE());_u.use(Bk);_u.mount("#app");export{vt as F,Xe as R,Xp as T,nt as _,_e as a,W as b,ms as c,se as d,ze as e,bi as f,Wt as g,Ar as h,Hk as i,fE as j,dp as k,zk as l,ke as m,wi as n,fe as o,Ky as r,xe as t,we as u,cE as v,We as w};
