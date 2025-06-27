const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ListservView-g95_5asW.js","assets/ContentPage-BCeSTdcA.js","assets/ContentPage-CEyh7Fnf.css","assets/ArticlesView-DvB9oG27.js","assets/WebResourcesView-Dg2EfiSn.js","assets/AACAPView-CPwodmwh.js","assets/FamilyCenteredView-C2gTbfyt.js","assets/PsychiatricResourcesView-DaYchCeV.js","assets/BooksView-yyxzigC3.js","assets/MembershipView-BjJHHSVg.js","assets/MembershipView-BVxevySS.css"])))=>i.map(i=>d[i]);
var z_=Object.defineProperty;var q_=(t,e,n)=>e in t?z_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var De=(t,e,n)=>q_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function lc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},es=[],hn=()=>{},G_=()=>!1,oa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),cc=t=>t.startsWith("onUpdate:"),nt=Object.assign,uc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},W_=Object.prototype.hasOwnProperty,ke=(t,e)=>W_.call(t,e),oe=Array.isArray,ts=t=>aa(t)==="[object Map]",Md=t=>aa(t)==="[object Set]",fe=t=>typeof t=="function",qe=t=>typeof t=="string",ur=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",Ld=t=>(Fe(t)||fe(t))&&fe(t.then)&&fe(t.catch),Fd=Object.prototype.toString,aa=t=>Fd.call(t),K_=t=>aa(t).slice(8,-1),Ud=t=>aa(t)==="[object Object]",hc=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,zs=lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),la=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Q_=/-(\w)/g,Gt=la(t=>t.replace(Q_,(e,n)=>n?n.toUpperCase():"")),J_=/\B([A-Z])/g,Fr=la(t=>t.replace(J_,"-$1").toLowerCase()),ca=la(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ja=la(t=>t?`on${ca(t)}`:""),er=(t,e)=>!Object.is(t,e),fo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$d=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},bl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},X_=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let fh;const ua=()=>fh||(fh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ur(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?ty(r):Ur(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||Fe(t))return t}const Y_=/;(?![^(]*\))/g,Z_=/:([^]+)/,ey=/\/\*[^]*?\*\//g;function ty(t){const e={};return t.replace(ey,"").split(Y_).forEach(n=>{if(n){const r=n.split(Z_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function kr(t){let e="";if(qe(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=kr(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ny(t){if(!t)return null;let{class:e,style:n}=t;return e&&!qe(e)&&(t.class=kr(e)),n&&(t.style=Ur(n)),t}const ry="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sy=lc(ry);function Bd(t){return!!t||t===""}const jd=t=>!!(t&&t.__v_isRef===!0),Te=t=>qe(t)?t:t==null?"":oe(t)||Fe(t)&&(t.toString===Fd||!fe(t.toString))?jd(t)?Te(t.value):JSON.stringify(t,Hd,2):String(t),Hd=(t,e)=>jd(e)?Hd(t,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Xa(r,i)+" =>"]=s,n),{})}:Md(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xa(n))}:ur(e)?Xa(e):Fe(e)&&!oe(e)&&!Ud(e)?String(e):e,Xa=(t,e="")=>{var n;return ur(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class zd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){++this._on===1&&(this.prevScope=xt,xt=this)}off(){this._on>0&&--this._on===0&&(xt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function iy(t){return new zd(t)}function oy(){return xt}let Ve;const Ya=new WeakSet;class qd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,xt&&xt.active&&xt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ya.has(this)&&(Ya.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dh(this),Kd(this);const e=Ve,n=Zt;Ve=this,Zt=!0;try{return this.fn()}finally{Qd(this),Ve=e,Zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pc(e);this.deps=this.depsTail=void 0,dh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ya.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tl(this)&&this.run()}get dirty(){return Tl(this)}}let Gd=0,qs,Gs;function Wd(t,e=!1){if(t.flags|=8,e){t.next=Gs,Gs=t;return}t.next=qs,qs=t}function fc(){Gd++}function dc(){if(--Gd>0)return;if(Gs){let e=Gs;for(Gs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;qs;){let e=qs;for(qs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Kd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),pc(r),ay(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Tl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Jd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ii)||(t.globalVersion=ii,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Tl(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=Zt;Ve=t,Zt=!0;try{Kd(t);const s=t.fn(t._value);(e.version===0||er(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,Zt=r,Qd(t),t.flags&=-3}}function pc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)pc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ay(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zt=!0;const Xd=[];function xn(){Xd.push(Zt),Zt=!1}function On(){const t=Xd.pop();Zt=t===void 0?!0:t}function dh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let ii=0;class ly{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ve||!Zt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new ly(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Yd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,ii++,this.notify(e)}notify(e){fc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{dc()}}}function Yd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Yd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Il=new WeakMap,Ir=Symbol(""),Al=Symbol(""),oi=Symbol("");function Et(t,e,n){if(Zt&&Ve){let r=Il.get(t);r||Il.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new gc),s.map=r,s.key=n),s.track()}}function Tn(t,e,n,r,s,i){const a=Il.get(t);if(!a){ii++;return}const l=c=>{c&&c.trigger()};if(fc(),e==="clear")a.forEach(l);else{const c=oe(t),u=c&&hc(n);if(c&&n==="length"){const f=Number(r);a.forEach((p,g)=>{(g==="length"||g===oi||!ur(g)&&g>=f)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),u&&l(a.get(oi)),e){case"add":c?u&&l(a.get("length")):(l(a.get(Ir)),ts(t)&&l(a.get(Al)));break;case"delete":c||(l(a.get(Ir)),ts(t)&&l(a.get(Al)));break;case"set":ts(t)&&l(a.get(Ir));break}}dc()}function Wr(t){const e=Se(t);return e===t?e:(Et(e,"iterate",oi),qt(t)?e:e.map(lt))}function ha(t){return Et(t=Se(t),"iterate",oi),t}const cy={__proto__:null,[Symbol.iterator](){return Za(this,Symbol.iterator,lt)},concat(...t){return Wr(this).concat(...t.map(e=>oe(e)?Wr(e):e))},entries(){return Za(this,"entries",t=>(t[1]=lt(t[1]),t))},every(t,e){return vn(this,"every",t,e,void 0,arguments)},filter(t,e){return vn(this,"filter",t,e,n=>n.map(lt),arguments)},find(t,e){return vn(this,"find",t,e,lt,arguments)},findIndex(t,e){return vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return vn(this,"findLast",t,e,lt,arguments)},findLastIndex(t,e){return vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return el(this,"includes",t)},indexOf(...t){return el(this,"indexOf",t)},join(t){return Wr(this).join(t)},lastIndexOf(...t){return el(this,"lastIndexOf",t)},map(t,e){return vn(this,"map",t,e,void 0,arguments)},pop(){return Ms(this,"pop")},push(...t){return Ms(this,"push",t)},reduce(t,...e){return ph(this,"reduce",t,e)},reduceRight(t,...e){return ph(this,"reduceRight",t,e)},shift(){return Ms(this,"shift")},some(t,e){return vn(this,"some",t,e,void 0,arguments)},splice(...t){return Ms(this,"splice",t)},toReversed(){return Wr(this).toReversed()},toSorted(t){return Wr(this).toSorted(t)},toSpliced(...t){return Wr(this).toSpliced(...t)},unshift(...t){return Ms(this,"unshift",t)},values(){return Za(this,"values",lt)}};function Za(t,e,n){const r=ha(t),s=r[e]();return r!==t&&!qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const uy=Array.prototype;function vn(t,e,n,r,s,i){const a=ha(t),l=a!==t&&!qt(t),c=a[e];if(c!==uy[e]){const p=c.apply(t,i);return l?lt(p):p}let u=n;a!==t&&(l?u=function(p,g){return n.call(this,lt(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=c.call(a,u,r);return l&&s?s(f):f}function ph(t,e,n,r){const s=ha(t);let i=n;return s!==t&&(qt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,lt(l),c,t)}),s[e](i,...r)}function el(t,e,n){const r=Se(t);Et(r,"iterate",oi);const s=r[e](...n);return(s===-1||s===!1)&&yc(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function Ms(t,e,n=[]){xn(),fc();const r=Se(t)[e].apply(t,n);return dc(),On(),r}const hy=lc("__proto__,__v_isRef,__isVue"),Zd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ur));function fy(t){ur(t)||(t=String(t));const e=Se(this);return Et(e,"has",t),e.hasOwnProperty(t)}class ep{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?by:sp:i?rp:np).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=oe(e);if(!s){let c;if(a&&(c=cy[n]))return c;if(n==="hasOwnProperty")return fy}const l=Reflect.get(e,n,bt(e)?e:r);return(ur(n)?Zd.has(n):hy(n))||(s||Et(e,"get",n),i)?l:bt(l)?a&&hc(n)?l:l.value:Fe(l)?s?op(l):fa(l):l}}class tp extends ep{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=sr(i);if(!qt(r)&&!sr(r)&&(i=Se(i),r=Se(r)),!oe(e)&&bt(i)&&!bt(r))return c?!1:(i.value=r,!0)}const a=oe(e)&&hc(n)?Number(n)<e.length:ke(e,n),l=Reflect.set(e,n,r,bt(e)?e:s);return e===Se(s)&&(a?er(r,i)&&Tn(e,"set",n,r):Tn(e,"add",n,r)),l}deleteProperty(e,n){const r=ke(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ur(n)||!Zd.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",oe(e)?"length":Ir),Reflect.ownKeys(e)}}class dy extends ep{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const py=new tp,gy=new dy,my=new tp(!0);const Sl=t=>t,to=t=>Reflect.getPrototypeOf(t);function _y(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),a=ts(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,u=s[t](...r),f=n?Sl:e?ko:lt;return!e&&Et(i,"iterate",c?Al:Ir),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function no(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function yy(t,e){const n={get(s){const i=this.__v_raw,a=Se(i),l=Se(s);t||(er(s,l)&&Et(a,"get",s),Et(a,"get",l));const{has:c}=to(a),u=e?Sl:t?ko:lt;if(c.call(a,s))return u(i.get(s));if(c.call(a,l))return u(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Se(s),"iterate",Ir),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Se(i),l=Se(s);return t||(er(s,l)&&Et(a,"has",s),Et(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Se(l),u=e?Sl:t?ko:lt;return!t&&Et(c,"iterate",Ir),l.forEach((f,p)=>s.call(i,u(f),u(p),a))}};return nt(n,t?{add:no("add"),set:no("set"),delete:no("delete"),clear:no("clear")}:{add(s){!e&&!qt(s)&&!sr(s)&&(s=Se(s));const i=Se(this);return to(i).has.call(i,s)||(i.add(s),Tn(i,"add",s,s)),this},set(s,i){!e&&!qt(i)&&!sr(i)&&(i=Se(i));const a=Se(this),{has:l,get:c}=to(a);let u=l.call(a,s);u||(s=Se(s),u=l.call(a,s));const f=c.call(a,s);return a.set(s,i),u?er(i,f)&&Tn(a,"set",s,i):Tn(a,"add",s,i),this},delete(s){const i=Se(this),{has:a,get:l}=to(i);let c=a.call(i,s);c||(s=Se(s),c=a.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Tn(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,a=s.clear();return i&&Tn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=_y(s,t,e)}),n}function mc(t,e){const n=yy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ke(n,s)&&s in r?n:r,s,i)}const vy={get:mc(!1,!1)},Ey={get:mc(!1,!0)},wy={get:mc(!0,!1)};const np=new WeakMap,rp=new WeakMap,sp=new WeakMap,by=new WeakMap;function Ty(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Iy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ty(K_(t))}function fa(t){return sr(t)?t:_c(t,!1,py,vy,np)}function ip(t){return _c(t,!1,my,Ey,rp)}function op(t){return _c(t,!0,gy,wy,sp)}function _c(t,e,n,r,s){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Iy(t);if(i===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function ns(t){return sr(t)?ns(t.__v_raw):!!(t&&t.__v_isReactive)}function sr(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function yc(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function ap(t){return!ke(t,"__v_skip")&&Object.isExtensible(t)&&$d(t,"__v_skip",!0),t}const lt=t=>Fe(t)?fa(t):t,ko=t=>Fe(t)?op(t):t;function bt(t){return t?t.__v_isRef===!0:!1}function ct(t){return lp(t,!1)}function Ay(t){return lp(t,!0)}function lp(t,e){return bt(t)?t:new Sy(t,e)}class Sy{constructor(e,n){this.dep=new gc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:lt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qt(e)||sr(e);e=r?e:Se(e),er(e,n)&&(this._rawValue=e,this._value=r?e:lt(e),this.dep.trigger())}}function we(t){return bt(t)?t.value:t}const Ry={get:(t,e,n)=>e==="__v_raw"?t:we(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return bt(s)&&!bt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function cp(t){return ns(t)?t:new Proxy(t,Ry)}class ky{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ii-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Wd(this,!0),!0}get value(){const e=this.dep.track();return Jd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cy(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new ky(r,s,n)}const ro={},Co=new WeakMap;let Er;function Py(t,e=!1,n=Er){if(n){let r=Co.get(n);r||Co.set(n,r=[]),r.push(t)}}function xy(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,u=z=>s?z:qt(z)||s===!1||s===0?In(z,1):In(z);let f,p,g,E,R=!1,x=!1;if(bt(t)?(p=()=>t.value,R=qt(t)):ns(t)?(p=()=>u(t),R=!0):oe(t)?(x=!0,R=t.some(z=>ns(z)||qt(z)),p=()=>t.map(z=>{if(bt(z))return z.value;if(ns(z))return u(z);if(fe(z))return c?c(z,2):z()})):fe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){xn();try{g()}finally{On()}}const z=Er;Er=f;try{return c?c(t,3,[E]):t(E)}finally{Er=z}}:p=hn,e&&s){const z=p,le=s===!0?1/0:s;p=()=>In(z(),le)}const F=oy(),H=()=>{f.stop(),F&&F.active&&uc(F.effects,f)};if(i&&e){const z=e;e=(...le)=>{z(...le),H()}}let U=x?new Array(t.length).fill(ro):ro;const j=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(e){const le=f.run();if(s||R||(x?le.some((se,A)=>er(se,U[A])):er(le,U))){g&&g();const se=Er;Er=f;try{const A=[le,U===ro?void 0:x&&U[0]===ro?[]:U,E];U=le,c?c(e,3,A):e(...A)}finally{Er=se}}}else f.run()};return l&&l(j),f=new qd(p),f.scheduler=a?()=>a(j,!1):j,E=z=>Py(z,!1,f),g=f.onStop=()=>{const z=Co.get(f);if(z){if(c)c(z,4);else for(const le of z)le();Co.delete(f)}},e?r?j(!0):U=f.run():a?a(j.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function In(t,e=1/0,n){if(e<=0||!Fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,bt(t))In(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)In(t[r],e,n);else if(Md(t)||ts(t))t.forEach(r=>{In(r,e,n)});else if(Ud(t)){for(const r in t)In(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&In(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ti(t,e,n,r){try{return r?t(...r):t()}catch(s){da(s,e,n)}}function tn(t,e,n,r){if(fe(t)){const s=Ti(t,e,n,r);return s&&Ld(s)&&s.catch(i=>{da(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(tn(t[i],e,n,r));return s}}function da(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){xn(),Ti(i,null,10,[t,c,u]),On();return}}Oy(t,n,s,r,a)}function Oy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const St=[];let an=-1;const rs=[];let Gn=null,Kr=0;const up=Promise.resolve();let Po=null;function hp(t){const e=Po||up;return t?e.then(this?t.bind(this):t):e}function Dy(t){let e=an+1,n=St.length;for(;e<n;){const r=e+n>>>1,s=St[r],i=ai(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function vc(t){if(!(t.flags&1)){const e=ai(t),n=St[St.length-1];!n||!(t.flags&2)&&e>=ai(n)?St.push(t):St.splice(Dy(e),0,t),t.flags|=1,fp()}}function fp(){Po||(Po=up.then(pp))}function Ny(t){oe(t)?rs.push(...t):Gn&&t.id===-1?Gn.splice(Kr+1,0,t):t.flags&1||(rs.push(t),t.flags|=1),fp()}function gh(t,e,n=an+1){for(;n<St.length;n++){const r=St[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;St.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function dp(t){if(rs.length){const e=[...new Set(rs)].sort((n,r)=>ai(n)-ai(r));if(rs.length=0,Gn){Gn.push(...e);return}for(Gn=e,Kr=0;Kr<Gn.length;Kr++){const n=Gn[Kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gn=null,Kr=0}}const ai=t=>t.id==null?t.flags&2?-1:1/0:t.id;function pp(t){try{for(an=0;an<St.length;an++){const e=St[an];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ti(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;an<St.length;an++){const e=St[an];e&&(e.flags&=-2)}an=-1,St.length=0,dp(),Po=null,(St.length||rs.length)&&pp()}}let Nt=null,gp=null;function xo(t){const e=Nt;return Nt=t,gp=t&&t.type.__scopeId||null,e}function Ge(t,e=Nt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Sh(-1);const i=xo(e);let a;try{a=t(...s)}finally{xo(i),r._d&&Sh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Oo(t,e){if(Nt===null)return t;const n=va(Nt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ne]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&In(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function gr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(xn(),tn(c,n,8,[t.el,l,t,e]),On())}}const Vy=Symbol("_vte"),mp=t=>t.__isTeleport,Wn=Symbol("_leaveCb"),so=Symbol("_enterCb");function My(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ys(()=>{t.isMounted=!0}),Ec(()=>{t.isUnmounting=!0}),t}const zt=[Function,Array],_p={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},yp=t=>{const e=t.subTree;return e.component?yp(e.component):e},Ly={name:"BaseTransition",props:_p,setup(t,{slots:e}){const n=Ov(),r=My();return()=>{const s=e.default&&wp(e.default(),!0);if(!s||!s.length)return;const i=vp(s),a=Se(t),{mode:l}=a;if(r.isLeaving)return tl(i);const c=mh(i);if(!c)return tl(i);let u=Rl(c,a,r,n,p=>u=p);c.type!==Rt&&li(c,u);let f=n.subTree&&mh(n.subTree);if(f&&f.type!==Rt&&!br(c,f)&&yp(n).type!==Rt){let p=Rl(f,a,r,n);if(li(f,p),l==="out-in"&&c.type!==Rt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},tl(i);l==="in-out"&&c.type!==Rt?p.delayLeave=(g,E,R)=>{const x=Ep(r,f);x[String(f.key)]=f,g[Wn]=()=>{E(),g[Wn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{R(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function vp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Rt){e=n;break}}return e}const Fy=Ly;function Ep(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Rl(t,e,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:E,onAfterLeave:R,onLeaveCancelled:x,onBeforeAppear:F,onAppear:H,onAfterAppear:U,onAppearCancelled:j}=e,z=String(t.key),le=Ep(n,t),se=(_,I)=>{_&&tn(_,r,9,I)},A=(_,I)=>{const S=I[1];se(_,I),oe(_)?_.every(T=>T.length<=1)&&S():_.length<=1&&S()},y={mode:a,persisted:l,beforeEnter(_){let I=c;if(!n.isMounted)if(i)I=F||c;else return;_[Wn]&&_[Wn](!0);const S=le[z];S&&br(t,S)&&S.el[Wn]&&S.el[Wn](),se(I,[_])},enter(_){let I=u,S=f,T=p;if(!n.isMounted)if(i)I=H||u,S=U||f,T=j||p;else return;let v=!1;const xe=_[so]=Je=>{v||(v=!0,Je?se(T,[_]):se(S,[_]),y.delayedLeave&&y.delayedLeave(),_[so]=void 0)};I?A(I,[_,xe]):xe()},leave(_,I){const S=String(t.key);if(_[so]&&_[so](!0),n.isUnmounting)return I();se(g,[_]);let T=!1;const v=_[Wn]=xe=>{T||(T=!0,I(),xe?se(x,[_]):se(R,[_]),_[Wn]=void 0,le[S]===t&&delete le[S])};le[S]=t,E?A(E,[_,v]):v()},clone(_){const I=Rl(_,e,n,r,s);return s&&s(I),I}};return y}function tl(t){if(pa(t))return t=ir(t),t.children=null,t}function mh(t){if(!pa(t))return mp(t.type)&&t.children?vp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function li(t,e){t.shapeFlag&6&&t.component?(t.transition=e,li(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===Ze?(a.patchFlag&128&&s++,r=r.concat(wp(a.children,e,l))):(e||a.type!==Rt)&&r.push(l!=null?ir(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function bp(t,e){return fe(t)?nt({name:t.name},e,{setup:t}):t}function Tp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Do(t,e,n,r,s=!1){if(oe(t)){t.forEach((R,x)=>Do(R,e&&(oe(e)?e[x]:e),n,r,s));return}if(Ws(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Do(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?va(r.component):r.el,a=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Ne?l.refs={}:l.refs,p=l.setupState,g=Se(p),E=p===Ne?()=>!1:R=>ke(g,R);if(u!=null&&u!==c&&(qe(u)?(f[u]=null,E(u)&&(p[u]=null)):bt(u)&&(u.value=null)),fe(c))Ti(c,l,12,[a,f]);else{const R=qe(c),x=bt(c);if(R||x){const F=()=>{if(t.f){const H=R?E(c)?p[c]:f[c]:c.value;s?oe(H)&&uc(H,i):oe(H)?H.includes(i)||H.push(i):R?(f[c]=[i],E(c)&&(p[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else R?(f[c]=a,E(c)&&(p[c]=a)):x&&(c.value=a,t.k&&(f[t.k]=a))};a?(F.id=-1,Ft(F,n)):F()}}}ua().requestIdleCallback;ua().cancelIdleCallback;const Ws=t=>!!t.type.__asyncLoader,pa=t=>t.type.__isKeepAlive;function Uy(t,e){Ip(t,"a",e)}function $y(t,e){Ip(t,"da",e)}function Ip(t,e,n=ut){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ga(e,r,n),n){let s=n.parent;for(;s&&s.parent;)pa(s.parent.vnode)&&By(r,e,n,s),s=s.parent}}function By(t,e,n,r){const s=ga(e,t,r,!0);ma(()=>{uc(r[e],s)},n)}function ga(t,e,n=ut,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{xn();const l=Si(n),c=tn(e,n,t,a);return l(),On(),c});return r?s.unshift(i):s.push(i),i}}const Mn=t=>(e,n=ut)=>{(!ui||t==="sp")&&ga(t,(...r)=>e(...r),n)},jy=Mn("bm"),ys=Mn("m"),Hy=Mn("bu"),zy=Mn("u"),Ec=Mn("bum"),ma=Mn("um"),qy=Mn("sp"),Gy=Mn("rtg"),Wy=Mn("rtc");function Ky(t,e=ut){ga("ec",t,e)}const Ap="components",Qy="directives";function Jy(t,e){return Sp(Ap,t,!0,e)||t}const Xy=Symbol.for("v-ndc");function Yy(t){return Sp(Qy,t)}function Sp(t,e,n=!0,r=!1){const s=Nt||ut;if(s){const i=s.type;if(t===Ap){const l=Lv(i,!1);if(l&&(l===e||l===Gt(e)||l===ca(Gt(e))))return i}const a=_h(s[t]||i[t],e)||_h(s.appContext[t],e);return!a&&r?i:a}}function _h(t,e){return t&&(t[e]||t[Gt(e)]||t[ca(Gt(e))])}function Cr(t,e,n,r){let s;const i=n,a=oe(t);if(a||qe(t)){const l=a&&ns(t);let c=!1,u=!1;l&&(c=!qt(t),u=sr(t),t=ha(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?ko(lt(t[f])):lt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Fe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const kl=t=>t?Kp(t)?va(t):kl(t.parent):null,Ks=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>kl(t.parent),$root:t=>kl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>kp(t),$forceUpdate:t=>t.f||(t.f=()=>{vc(t.update)}),$nextTick:t=>t.n||(t.n=hp.bind(t.proxy)),$watch:t=>vv.bind(t)}),nl=(t,e)=>t!==Ne&&!t.__isScriptSetup&&ke(t,e),Zy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const E=a[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(nl(r,e))return a[e]=1,r[e];if(s!==Ne&&ke(s,e))return a[e]=2,s[e];if((u=t.propsOptions[0])&&ke(u,e))return a[e]=3,i[e];if(n!==Ne&&ke(n,e))return a[e]=4,n[e];Cl&&(a[e]=0)}}const f=Ks[e];let p,g;if(f)return e==="$attrs"&&Et(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&ke(n,e))return a[e]=4,n[e];if(g=c.config.globalProperties,ke(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return nl(s,e)?(s[e]=n,!0):r!==Ne&&ke(r,e)?(r[e]=n,!0):ke(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Ne&&ke(t,a)||nl(e,a)||(l=i[0])&&ke(l,a)||ke(r,a)||ke(Ks,a)||ke(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ke(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yh(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cl=!0;function ev(t){const e=kp(t),n=t.proxy,r=t.ctx;Cl=!1,e.beforeCreate&&vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:E,updated:R,activated:x,deactivated:F,beforeDestroy:H,beforeUnmount:U,destroyed:j,unmounted:z,render:le,renderTracked:se,renderTriggered:A,errorCaptured:y,serverPrefetch:_,expose:I,inheritAttrs:S,components:T,directives:v,filters:xe}=e;if(u&&tv(u,r,null),a)for(const ye in a){const me=a[ye];fe(me)&&(r[ye]=me.bind(n))}if(s){const ye=s.call(n,n);Fe(ye)&&(t.data=fa(ye))}if(Cl=!0,i)for(const ye in i){const me=i[ye],Mt=fe(me)?me.bind(n,n):fe(me.get)?me.get.bind(n,n):hn,Wt=!fe(me)&&fe(me.set)?me.set.bind(n):hn,Bt=Dt({get:Mt,set:Wt});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:Be=>Bt.value=Be})}if(l)for(const ye in l)Rp(l[ye],r,n,ye);if(c){const ye=fe(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(me=>{po(me,ye[me])})}f&&vh(f,t,"c");function $e(ye,me){oe(me)?me.forEach(Mt=>ye(Mt.bind(n))):me&&ye(me.bind(n))}if($e(jy,p),$e(ys,g),$e(Hy,E),$e(zy,R),$e(Uy,x),$e($y,F),$e(Ky,y),$e(Wy,se),$e(Gy,A),$e(Ec,U),$e(ma,z),$e(qy,_),oe(I))if(I.length){const ye=t.exposed||(t.exposed={});I.forEach(me=>{Object.defineProperty(ye,me,{get:()=>n[me],set:Mt=>n[me]=Mt})})}else t.exposed||(t.exposed={});le&&t.render===hn&&(t.render=le),S!=null&&(t.inheritAttrs=S),T&&(t.components=T),v&&(t.directives=v),_&&Tp(t)}function tv(t,e,n=hn){oe(t)&&(t=Pl(t));for(const r in t){const s=t[r];let i;Fe(s)?"default"in s?i=en(s.from||r,s.default,!0):i=en(s.from||r):i=en(s),bt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function vh(t,e,n){tn(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rp(t,e,n,r){let s=r.includes(".")?Bp(n,r):()=>n[r];if(qe(t)){const i=e[t];fe(i)&&go(s,i)}else if(fe(t))go(s,t.bind(n));else if(Fe(t))if(oe(t))t.forEach(i=>Rp(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&go(s,i,t)}}function kp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>No(c,u,a,!0)),No(c,e,a)),Fe(e)&&i.set(e,c),c}function No(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&No(t,i,n,!0),s&&s.forEach(a=>No(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=nv[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const nv={data:Eh,props:wh,emits:wh,methods:js,computed:js,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:js,directives:js,watch:sv,provide:Eh,inject:rv};function Eh(t,e){return e?t?function(){return nt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function rv(t,e){return js(Pl(t),Pl(e))}function Pl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function js(t,e){return t?nt(Object.create(null),t,e):e}function wh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:nt(Object.create(null),yh(t),yh(e??{})):e}function sv(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function Cp(){return{app:null,config:{isNativeTag:G_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let iv=0;function ov(t,e){return function(r,s=null){fe(r)||(r=nt({},r)),s!=null&&!Fe(s)&&(s=null);const i=Cp(),a=new WeakSet,l=[];let c=!1;const u=i.app={_uid:iv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Uv,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&fe(f.install)?(a.add(f),f.install(u,...p)):fe(f)&&(a.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!c){const E=u._ceVNode||ne(r,s);return E.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(E,f,g),c=!0,u._container=f,f.__vue_app__=u,va(E.component)}},onUnmount(f){l.push(f)},unmount(){c&&(tn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=ss;ss=u;try{return f()}finally{ss=p}}};return u}}let ss=null;function po(t,e){if(ut){let n=ut.provides;const r=ut.parent&&ut.parent.provides;r===n&&(n=ut.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=ut||Nt;if(r||ss){let s=ss?ss._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}const Pp={},xp=()=>Object.create(Pp),Op=t=>Object.getPrototypeOf(t)===Pp;function av(t,e,n,r=!1){const s={},i=xp();t.propsDefaults=Object.create(null),Dp(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:ip(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function lv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Se(s),[c]=t.propsOptions;let u=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(_a(t.emitsOptions,g))continue;const E=e[g];if(c)if(ke(i,g))E!==i[g]&&(i[g]=E,u=!0);else{const R=Gt(g);s[R]=xl(c,l,R,E,t,!1)}else E!==i[g]&&(i[g]=E,u=!0)}}}else{Dp(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!ke(e,p)&&((f=Fr(p))===p||!ke(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=xl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!ke(e,p))&&(delete i[p],u=!0)}u&&Tn(t.attrs,"set","")}function Dp(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(zs(c))continue;const u=e[c];let f;s&&ke(s,f=Gt(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:_a(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,a=!0)}if(i){const c=Se(n),u=l||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=xl(s,c,p,u[p],t,!ke(u,p))}}return a}function xl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=ke(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&fe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Si(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Fr(n))&&(r=!0))}return r}const cv=new WeakMap;function Np(t,e,n=!1){const r=n?cv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!fe(t)){const f=p=>{c=!0;const[g,E]=Np(p,e,!0);nt(a,g),E&&l.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Fe(t)&&r.set(t,es),es;if(oe(i))for(let f=0;f<i.length;f++){const p=Gt(i[f]);bh(p)&&(a[p]=Ne)}else if(i)for(const f in i){const p=Gt(f);if(bh(p)){const g=i[f],E=a[p]=oe(g)||fe(g)?{type:g}:nt({},g),R=E.type;let x=!1,F=!0;if(oe(R))for(let H=0;H<R.length;++H){const U=R[H],j=fe(U)&&U.name;if(j==="Boolean"){x=!0;break}else j==="String"&&(F=!1)}else x=fe(R)&&R.name==="Boolean";E[0]=x,E[1]=F,(x||ke(E,"default"))&&l.push(p)}}const u=[a,l];return Fe(t)&&r.set(t,u),u}function bh(t){return t[0]!=="$"&&!zs(t)}const wc=t=>t[0]==="_"||t==="$stable",bc=t=>oe(t)?t.map(cn):[cn(t)],uv=(t,e,n)=>{if(e._n)return e;const r=Ge((...s)=>bc(e(...s)),n);return r._c=!1,r},Vp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wc(s))continue;const i=t[s];if(fe(i))e[s]=uv(s,i,r);else if(i!=null){const a=bc(i);e[s]=()=>a}}},Mp=(t,e)=>{const n=bc(e);t.slots.default=()=>n},Lp=(t,e,n)=>{for(const r in e)(n||!wc(r))&&(t[r]=e[r])},hv=(t,e,n)=>{const r=t.slots=xp();if(t.vnode.shapeFlag&32){const s=e._;s?(Lp(r,e,n),n&&$d(r,"_",s,!0)):Vp(e,r)}else e&&Mp(t,e)},fv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ne;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Lp(s,e,n):(i=!e.$stable,Vp(e,s)),a=e}else e&&(Mp(t,e),a={default:1});if(i)for(const l in s)!wc(l)&&a[l]==null&&delete s[l]},Ft=Sv;function dv(t){return pv(t)}function pv(t,e){const n=ua();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:E=hn,insertStaticContent:R}=t,x=(w,b,k,D=null,M=null,N=null,Q=void 0,G=null,q=!!b.dynamicChildren)=>{if(w===b)return;w&&!br(w,b)&&(D=O(w),Be(w,M,N,!0),w=null),b.patchFlag===-2&&(q=!1,b.dynamicChildren=null);const{type:$,ref:te,shapeFlag:K}=b;switch($){case ya:F(w,b,k,D);break;case Rt:H(w,b,k,D);break;case mo:w==null&&U(b,k,D,Q);break;case Ze:T(w,b,k,D,M,N,Q,G,q);break;default:K&1?le(w,b,k,D,M,N,Q,G,q):K&6?v(w,b,k,D,M,N,Q,G,q):(K&64||K&128)&&$.process(w,b,k,D,M,N,Q,G,q,Y)}te!=null&&M&&Do(te,w&&w.ref,N,b||w,!b)},F=(w,b,k,D)=>{if(w==null)r(b.el=l(b.children),k,D);else{const M=b.el=w.el;b.children!==w.children&&u(M,b.children)}},H=(w,b,k,D)=>{w==null?r(b.el=c(b.children||""),k,D):b.el=w.el},U=(w,b,k,D)=>{[w.el,w.anchor]=R(w.children,b,k,D,w.el,w.anchor)},j=({el:w,anchor:b},k,D)=>{let M;for(;w&&w!==b;)M=g(w),r(w,k,D),w=M;r(b,k,D)},z=({el:w,anchor:b})=>{let k;for(;w&&w!==b;)k=g(w),s(w),w=k;s(b)},le=(w,b,k,D,M,N,Q,G,q)=>{b.type==="svg"?Q="svg":b.type==="math"&&(Q="mathml"),w==null?se(b,k,D,M,N,Q,G,q):_(w,b,M,N,Q,G,q)},se=(w,b,k,D,M,N,Q,G)=>{let q,$;const{props:te,shapeFlag:K,transition:ee,dirs:ae}=w;if(q=w.el=a(w.type,N,te&&te.is,te),K&8?f(q,w.children):K&16&&y(w.children,q,null,D,M,rl(w,N),Q,G),ae&&gr(w,null,D,"created"),A(q,w,w.scopeId,Q,D),te){for(const de in te)de!=="value"&&!zs(de)&&i(q,de,null,te[de],N,D);"value"in te&&i(q,"value",null,te.value,N),($=te.onVnodeBeforeMount)&&sn($,D,w)}ae&&gr(w,null,D,"beforeMount");const re=gv(M,ee);re&&ee.beforeEnter(q),r(q,b,k),(($=te&&te.onVnodeMounted)||re||ae)&&Ft(()=>{$&&sn($,D,w),re&&ee.enter(q),ae&&gr(w,null,D,"mounted")},M)},A=(w,b,k,D,M)=>{if(k&&E(w,k),D)for(let N=0;N<D.length;N++)E(w,D[N]);if(M){let N=M.subTree;if(b===N||Hp(N.type)&&(N.ssContent===b||N.ssFallback===b)){const Q=M.vnode;A(w,Q,Q.scopeId,Q.slotScopeIds,M.parent)}}},y=(w,b,k,D,M,N,Q,G,q=0)=>{for(let $=q;$<w.length;$++){const te=w[$]=G?Kn(w[$]):cn(w[$]);x(null,te,b,k,D,M,N,Q,G)}},_=(w,b,k,D,M,N,Q)=>{const G=b.el=w.el;let{patchFlag:q,dynamicChildren:$,dirs:te}=b;q|=w.patchFlag&16;const K=w.props||Ne,ee=b.props||Ne;let ae;if(k&&mr(k,!1),(ae=ee.onVnodeBeforeUpdate)&&sn(ae,k,b,w),te&&gr(b,w,k,"beforeUpdate"),k&&mr(k,!0),(K.innerHTML&&ee.innerHTML==null||K.textContent&&ee.textContent==null)&&f(G,""),$?I(w.dynamicChildren,$,G,k,D,rl(b,M),N):Q||me(w,b,G,null,k,D,rl(b,M),N,!1),q>0){if(q&16)S(G,K,ee,k,M);else if(q&2&&K.class!==ee.class&&i(G,"class",null,ee.class,M),q&4&&i(G,"style",K.style,ee.style,M),q&8){const re=b.dynamicProps;for(let de=0;de<re.length;de++){const ve=re[de],pt=K[ve],rt=ee[ve];(rt!==pt||ve==="value")&&i(G,ve,pt,rt,M,k)}}q&1&&w.children!==b.children&&f(G,b.children)}else!Q&&$==null&&S(G,K,ee,k,M);((ae=ee.onVnodeUpdated)||te)&&Ft(()=>{ae&&sn(ae,k,b,w),te&&gr(b,w,k,"updated")},D)},I=(w,b,k,D,M,N,Q)=>{for(let G=0;G<b.length;G++){const q=w[G],$=b[G],te=q.el&&(q.type===Ze||!br(q,$)||q.shapeFlag&198)?p(q.el):k;x(q,$,te,null,D,M,N,Q,!0)}},S=(w,b,k,D,M)=>{if(b!==k){if(b!==Ne)for(const N in b)!zs(N)&&!(N in k)&&i(w,N,b[N],null,M,D);for(const N in k){if(zs(N))continue;const Q=k[N],G=b[N];Q!==G&&N!=="value"&&i(w,N,G,Q,M,D)}"value"in k&&i(w,"value",b.value,k.value,M)}},T=(w,b,k,D,M,N,Q,G,q)=>{const $=b.el=w?w.el:l(""),te=b.anchor=w?w.anchor:l("");let{patchFlag:K,dynamicChildren:ee,slotScopeIds:ae}=b;ae&&(G=G?G.concat(ae):ae),w==null?(r($,k,D),r(te,k,D),y(b.children||[],k,te,M,N,Q,G,q)):K>0&&K&64&&ee&&w.dynamicChildren?(I(w.dynamicChildren,ee,k,M,N,Q,G),(b.key!=null||M&&b===M.subTree)&&Fp(w,b,!0)):me(w,b,k,te,M,N,Q,G,q)},v=(w,b,k,D,M,N,Q,G,q)=>{b.slotScopeIds=G,w==null?b.shapeFlag&512?M.ctx.activate(b,k,D,Q,q):xe(b,k,D,M,N,Q,q):Je(w,b,q)},xe=(w,b,k,D,M,N,Q)=>{const G=w.component=xv(w,D,M);if(pa(w)&&(G.ctx.renderer=Y),Dv(G,!1,Q),G.asyncDep){if(M&&M.registerDep(G,$e,Q),!w.el){const q=G.subTree=ne(Rt);H(null,q,b,k)}}else $e(G,w,b,k,M,N,Q)},Je=(w,b,k)=>{const D=b.component=w.component;if(Iv(w,b,k))if(D.asyncDep&&!D.asyncResolved){ye(D,b,k);return}else D.next=b,D.update();else b.el=w.el,D.vnode=b},$e=(w,b,k,D,M,N,Q)=>{const G=()=>{if(w.isMounted){let{next:K,bu:ee,u:ae,parent:re,vnode:de}=w;{const gt=Up(w);if(gt){K&&(K.el=de.el,ye(w,K,Q)),gt.asyncDep.then(()=>{w.isUnmounted||G()});return}}let ve=K,pt;mr(w,!1),K?(K.el=de.el,ye(w,K,Q)):K=de,ee&&fo(ee),(pt=K.props&&K.props.onVnodeBeforeUpdate)&&sn(pt,re,K,de),mr(w,!0);const rt=Ih(w),jt=w.subTree;w.subTree=rt,x(jt,rt,p(jt.el),O(jt),w,M,N),K.el=rt.el,ve===null&&Av(w,rt.el),ae&&Ft(ae,M),(pt=K.props&&K.props.onVnodeUpdated)&&Ft(()=>sn(pt,re,K,de),M)}else{let K;const{el:ee,props:ae}=b,{bm:re,m:de,parent:ve,root:pt,type:rt}=w,jt=Ws(b);mr(w,!1),re&&fo(re),!jt&&(K=ae&&ae.onVnodeBeforeMount)&&sn(K,ve,b),mr(w,!0);{pt.ce&&pt.ce._injectChildStyle(rt);const gt=w.subTree=Ih(w);x(null,gt,k,D,w,M,N),b.el=gt.el}if(de&&Ft(de,M),!jt&&(K=ae&&ae.onVnodeMounted)){const gt=b;Ft(()=>sn(K,ve,gt),M)}(b.shapeFlag&256||ve&&Ws(ve.vnode)&&ve.vnode.shapeFlag&256)&&w.a&&Ft(w.a,M),w.isMounted=!0,b=k=D=null}};w.scope.on();const q=w.effect=new qd(G);w.scope.off();const $=w.update=q.run.bind(q),te=w.job=q.runIfDirty.bind(q);te.i=w,te.id=w.uid,q.scheduler=()=>vc(te),mr(w,!0),$()},ye=(w,b,k)=>{b.component=w;const D=w.vnode.props;w.vnode=b,w.next=null,lv(w,b.props,D,k),fv(w,b.children,k),xn(),gh(w),On()},me=(w,b,k,D,M,N,Q,G,q=!1)=>{const $=w&&w.children,te=w?w.shapeFlag:0,K=b.children,{patchFlag:ee,shapeFlag:ae}=b;if(ee>0){if(ee&128){Wt($,K,k,D,M,N,Q,G,q);return}else if(ee&256){Mt($,K,k,D,M,N,Q,G,q);return}}ae&8?(te&16&&Ct($,M,N),K!==$&&f(k,K)):te&16?ae&16?Wt($,K,k,D,M,N,Q,G,q):Ct($,M,N,!0):(te&8&&f(k,""),ae&16&&y(K,k,D,M,N,Q,G,q))},Mt=(w,b,k,D,M,N,Q,G,q)=>{w=w||es,b=b||es;const $=w.length,te=b.length,K=Math.min($,te);let ee;for(ee=0;ee<K;ee++){const ae=b[ee]=q?Kn(b[ee]):cn(b[ee]);x(w[ee],ae,k,null,M,N,Q,G,q)}$>te?Ct(w,M,N,!0,!1,K):y(b,k,D,M,N,Q,G,q,K)},Wt=(w,b,k,D,M,N,Q,G,q)=>{let $=0;const te=b.length;let K=w.length-1,ee=te-1;for(;$<=K&&$<=ee;){const ae=w[$],re=b[$]=q?Kn(b[$]):cn(b[$]);if(br(ae,re))x(ae,re,k,null,M,N,Q,G,q);else break;$++}for(;$<=K&&$<=ee;){const ae=w[K],re=b[ee]=q?Kn(b[ee]):cn(b[ee]);if(br(ae,re))x(ae,re,k,null,M,N,Q,G,q);else break;K--,ee--}if($>K){if($<=ee){const ae=ee+1,re=ae<te?b[ae].el:D;for(;$<=ee;)x(null,b[$]=q?Kn(b[$]):cn(b[$]),k,re,M,N,Q,G,q),$++}}else if($>ee)for(;$<=K;)Be(w[$],M,N,!0),$++;else{const ae=$,re=$,de=new Map;for($=re;$<=ee;$++){const st=b[$]=q?Kn(b[$]):cn(b[$]);st.key!=null&&de.set(st.key,$)}let ve,pt=0;const rt=ee-re+1;let jt=!1,gt=0;const Un=new Array(rt);for($=0;$<rt;$++)Un[$]=0;for($=ae;$<=K;$++){const st=w[$];if(pt>=rt){Be(st,M,N,!0);continue}let Ht;if(st.key!=null)Ht=de.get(st.key);else for(ve=re;ve<=ee;ve++)if(Un[ve-re]===0&&br(st,b[ve])){Ht=ve;break}Ht===void 0?Be(st,M,N,!0):(Un[Ht-re]=$+1,Ht>=gt?gt=Ht:jt=!0,x(st,b[Ht],k,null,M,N,Q,G,q),pt++)}const Ts=jt?mv(Un):es;for(ve=Ts.length-1,$=rt-1;$>=0;$--){const st=re+$,Ht=b[st],Ui=st+1<te?b[st+1].el:D;Un[$]===0?x(null,Ht,k,Ui,M,N,Q,G,q):jt&&(ve<0||$!==Ts[ve]?Bt(Ht,k,Ui,2):ve--)}}},Bt=(w,b,k,D,M=null)=>{const{el:N,type:Q,transition:G,children:q,shapeFlag:$}=w;if($&6){Bt(w.component.subTree,b,k,D);return}if($&128){w.suspense.move(b,k,D);return}if($&64){Q.move(w,b,k,Y);return}if(Q===Ze){r(N,b,k);for(let K=0;K<q.length;K++)Bt(q[K],b,k,D);r(w.anchor,b,k);return}if(Q===mo){j(w,b,k);return}if(D!==2&&$&1&&G)if(D===0)G.beforeEnter(N),r(N,b,k),Ft(()=>G.enter(N),M);else{const{leave:K,delayLeave:ee,afterLeave:ae}=G,re=()=>{w.ctx.isUnmounted?s(N):r(N,b,k)},de=()=>{K(N,()=>{re(),ae&&ae()})};ee?ee(N,re,de):de()}else r(N,b,k)},Be=(w,b,k,D=!1,M=!1)=>{const{type:N,props:Q,ref:G,children:q,dynamicChildren:$,shapeFlag:te,patchFlag:K,dirs:ee,cacheIndex:ae}=w;if(K===-2&&(M=!1),G!=null&&(xn(),Do(G,null,k,w,!0),On()),ae!=null&&(b.renderCache[ae]=void 0),te&256){b.ctx.deactivate(w);return}const re=te&1&&ee,de=!Ws(w);let ve;if(de&&(ve=Q&&Q.onVnodeBeforeUnmount)&&sn(ve,b,w),te&6)rn(w.component,k,D);else{if(te&128){w.suspense.unmount(k,D);return}re&&gr(w,null,b,"beforeUnmount"),te&64?w.type.remove(w,b,k,Y,D):$&&!$.hasOnce&&(N!==Ze||K>0&&K&64)?Ct($,b,k,!1,!0):(N===Ze&&K&384||!M&&te&16)&&Ct(q,b,k),D&&je(w)}(de&&(ve=Q&&Q.onVnodeUnmounted)||re)&&Ft(()=>{ve&&sn(ve,b,w),re&&gr(w,null,b,"unmounted")},k)},je=w=>{const{type:b,el:k,anchor:D,transition:M}=w;if(b===Ze){Fn(k,D);return}if(b===mo){z(w);return}const N=()=>{s(k),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(w.shapeFlag&1&&M&&!M.persisted){const{leave:Q,delayLeave:G}=M,q=()=>Q(k,N);G?G(w.el,N,q):q()}else N()},Fn=(w,b)=>{let k;for(;w!==b;)k=g(w),s(w),w=k;s(b)},rn=(w,b,k)=>{const{bum:D,scope:M,job:N,subTree:Q,um:G,m:q,a:$,parent:te,slots:{__:K}}=w;Th(q),Th($),D&&fo(D),te&&oe(K)&&K.forEach(ee=>{te.renderCache[ee]=void 0}),M.stop(),N&&(N.flags|=8,Be(Q,w,b,k)),G&&Ft(G,b),Ft(()=>{w.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},Ct=(w,b,k,D=!1,M=!1,N=0)=>{for(let Q=N;Q<w.length;Q++)Be(w[Q],b,k,D,M)},O=w=>{if(w.shapeFlag&6)return O(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const b=g(w.anchor||w.el),k=b&&b[Vy];return k?g(k):b};let X=!1;const J=(w,b,k)=>{w==null?b._vnode&&Be(b._vnode,null,null,!0):x(b._vnode||null,w,b,null,null,null,k),b._vnode=w,X||(X=!0,gh(),dp(),X=!1)},Y={p:x,um:Be,m:Bt,r:je,mt:xe,mc:y,pc:me,pbc:I,n:O,o:t};return{render:J,hydrate:void 0,createApp:ov(J)}}function rl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function mr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fp(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Kn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Fp(a,l)),l.type===ya&&(l.el=a.el),l.type===Rt&&!l.el&&(l.el=a.el)}}function mv(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<u?i=l+1:a=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Up(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Up(e)}function Th(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const _v=Symbol.for("v-scx"),yv=()=>en(_v);function go(t,e,n){return $p(t,e,n)}function $p(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:a}=n,l=nt({},n),c=e&&r||!e&&i!=="post";let u;if(ui){if(i==="sync"){const E=yv();u=E.__watcherHandles||(E.__watcherHandles=[])}else if(!c){const E=()=>{};return E.stop=hn,E.resume=hn,E.pause=hn,E}}const f=ut;l.call=(E,R,x)=>tn(E,f,R,x);let p=!1;i==="post"?l.scheduler=E=>{Ft(E,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(E,R)=>{R?E():vc(E)}),l.augmentJob=E=>{e&&(E.flags|=4),p&&(E.flags|=2,f&&(E.id=f.uid,E.i=f))};const g=xy(t,e,l);return ui&&(u?u.push(g):c&&g()),g}function vv(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?Bp(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const a=Si(this),l=$p(s,i.bind(r),n);return a(),l}function Bp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ev=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Gt(e)}Modifiers`]||t[`${Fr(e)}Modifiers`];function wv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),a=i&&Ev(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>qe(f)?f.trim():f)),a.number&&(s=n.map(bl)));let l,c=r[l=Ja(e)]||r[l=Ja(Gt(e))];!c&&i&&(c=r[l=Ja(Fr(e))]),c&&tn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,tn(u,t,6,s)}}function jp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!fe(t)){const c=u=>{const f=jp(u,e,!0);f&&(l=!0,nt(a,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Fe(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>a[c]=null):nt(a,i),Fe(t)&&r.set(t,a),a)}function _a(t,e){return!t||!oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ke(t,e[0].toLowerCase()+e.slice(1))||ke(t,Fr(e))||ke(t,e))}function Ih(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:u,renderCache:f,props:p,data:g,setupState:E,ctx:R,inheritAttrs:x}=t,F=xo(t);let H,U;try{if(n.shapeFlag&4){const z=s||r,le=z;H=cn(u.call(le,z,f,p,E,g,R)),U=l}else{const z=e;H=cn(z.length>1?z(p,{attrs:l,slots:a,emit:c}):z(p,null)),U=e.props?l:bv(l)}}catch(z){Qs.length=0,da(z,t,1),H=ne(Rt)}let j=H;if(U&&x!==!1){const z=Object.keys(U),{shapeFlag:le}=j;z.length&&le&7&&(i&&z.some(cc)&&(U=Tv(U,i)),j=ir(j,U,!1,!0))}return n.dirs&&(j=ir(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&li(j,n.transition),H=j,xo(F),H}const bv=t=>{let e;for(const n in t)(n==="class"||n==="style"||oa(n))&&((e||(e={}))[n]=t[n]);return e},Tv=(t,e)=>{const n={};for(const r in t)(!cc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Iv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ah(r,a,u):!!a;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(a[g]!==r[g]&&!_a(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Ah(r,a,u):!0:!!a;return!1}function Ah(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_a(n,i))return!0}return!1}function Av({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hp=t=>t.__isSuspense;function Sv(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Ny(t)}const Ze=Symbol.for("v-fgt"),ya=Symbol.for("v-txt"),Rt=Symbol.for("v-cmt"),mo=Symbol.for("v-stc"),Qs=[];let $t=null;function ie(t=!1){Qs.push($t=t?null:[])}function Rv(){Qs.pop(),$t=Qs[Qs.length-1]||null}let ci=1;function Sh(t,e=!1){ci+=t,t<0&&$t&&e&&($t.hasOnce=!0)}function zp(t){return t.dynamicChildren=ci>0?$t||es:null,Rv(),ci>0&&$t&&$t.push(t),t}function he(t,e,n,r,s,i){return zp(V(t,e,n,r,s,i,!0))}function Ii(t,e,n,r,s){return zp(ne(t,e,n,r,s,!0))}function Vo(t){return t?t.__v_isVNode===!0:!1}function br(t,e){return t.type===e.type&&t.key===e.key}const qp=({key:t})=>t??null,_o=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||bt(t)||fe(t)?{i:Nt,r:t,k:e,f:!!n}:t:null);function V(t,e=null,n=null,r=0,s=null,i=t===Ze?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qp(e),ref:e&&_o(e),scopeId:gp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Nt};return l?(Tc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),ci>0&&!a&&$t&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&$t.push(c),c}const ne=kv;function kv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Xy)&&(t=Rt),Vo(t)){const l=ir(t,e,!0);return n&&Tc(l,n),ci>0&&!i&&$t&&(l.shapeFlag&6?$t[$t.indexOf(t)]=l:$t.push(l)),l.patchFlag=-2,l}if(Fv(t)&&(t=t.__vccOpts),e){e=Gp(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=kr(l)),Fe(c)&&(yc(c)&&!oe(c)&&(c=nt({},c)),e.style=Ur(c))}const a=qe(t)?1:Hp(t)?128:mp(t)?64:Fe(t)?4:fe(t)?2:0;return V(t,e,n,r,s,a,i,!0)}function Gp(t){return t?yc(t)||Op(t)?nt({},t):t:null}function ir(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,u=e?Ai(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&qp(u),ref:e&&e.ref?n&&i?oe(i)?i.concat(_o(e)):[i,_o(e)]:_o(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ze?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ir(t.ssContent),ssFallback:t.ssFallback&&ir(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&li(f,c.clone(f)),f}function We(t=" ",e=0){return ne(ya,null,t,e)}function Wp(t,e){const n=ne(mo,null,t);return n.staticCount=e,n}function Ut(t="",e=!1){return e?(ie(),Ii(Rt,null,t)):ne(Rt,null,t)}function cn(t){return t==null||typeof t=="boolean"?ne(Rt):oe(t)?ne(Ze,null,t.slice()):Vo(t)?Kn(t):ne(ya,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ir(t)}function Tc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Tc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Op(e)?e._ctx=Nt:s===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),r&64?(n=16,e=[We(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ai(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=kr([e.class,r.class]));else if(s==="style")e.style=Ur([e.style,r.style]);else if(oa(s)){const i=e[s],a=r[s];a&&i!==a&&!(oe(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){tn(t,e,7,[n,r])}const Cv=Cp();let Pv=0;function xv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Cv,i={uid:Pv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Np(r,s),emitsOptions:jp(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wv.bind(null,i),t.ce&&t.ce(i),i}let ut=null;const Ov=()=>ut||Nt;let Mo,Ol;{const t=ua(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Mo=e("__VUE_INSTANCE_SETTERS__",n=>ut=n),Ol=e("__VUE_SSR_SETTERS__",n=>ui=n)}const Si=t=>{const e=ut;return Mo(t),t.scope.on(),()=>{t.scope.off(),Mo(e)}},Rh=()=>{ut&&ut.scope.off(),Mo(null)};function Kp(t){return t.vnode.shapeFlag&4}let ui=!1;function Dv(t,e=!1,n=!1){e&&Ol(e);const{props:r,children:s}=t.vnode,i=Kp(t);av(t,r,i,e),hv(t,s,n||e);const a=i?Nv(t,e):void 0;return e&&Ol(!1),a}function Nv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Zy);const{setup:r}=n;if(r){xn();const s=t.setupContext=r.length>1?Mv(t):null,i=Si(t),a=Ti(r,t,0,[t.props,s]),l=Ld(a);if(On(),i(),(l||t.sp)&&!Ws(t)&&Tp(t),l){if(a.then(Rh,Rh),e)return a.then(c=>{kh(t,c)}).catch(c=>{da(c,t,0)});t.asyncDep=a}else kh(t,a)}else Qp(t)}function kh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=cp(e)),Qp(t)}function Qp(t,e,n){const r=t.type;t.render||(t.render=r.render||hn);{const s=Si(t);xn();try{ev(t)}finally{On(),s()}}}const Vv={get(t,e){return Et(t,"get",""),t[e]}};function Mv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Vv),slots:t.slots,emit:t.emit,expose:e}}function va(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(cp(ap(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ks)return Ks[n](t)},has(e,n){return n in e||n in Ks}})):t.proxy}function Lv(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function Fv(t){return fe(t)&&"__vccOpts"in t}const Dt=(t,e)=>Cy(t,e,ui);function Ic(t,e,n){const r=arguments.length;return r===2?Fe(e)&&!oe(e)?Vo(e)?ne(t,null,[e]):ne(t,e):ne(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Vo(n)&&(n=[n]),ne(t,e,n))}const Uv="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dl;const Ch=typeof window<"u"&&window.trustedTypes;if(Ch)try{Dl=Ch.createPolicy("vue",{createHTML:t=>t})}catch{}const Jp=Dl?t=>Dl.createHTML(t):t=>t,$v="http://www.w3.org/2000/svg",Bv="http://www.w3.org/1998/Math/MathML",bn=typeof document<"u"?document:null,Ph=bn&&bn.createElement("template"),jv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?bn.createElementNS($v,t):e==="mathml"?bn.createElementNS(Bv,t):n?bn.createElement(t,{is:n}):bn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bn.createTextNode(t),createComment:t=>bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ph.innerHTML=Jp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Ph.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Hn="transition",Ls="animation",hi=Symbol("_vtc"),Xp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hv=nt({},_p,Xp),zv=t=>(t.displayName="Transition",t.props=Hv,t),Yp=zv((t,{slots:e})=>Ic(Fy,qv(t),e)),_r=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},xh=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function qv(t){const e={};for(const T in t)T in Xp||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=a,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:E=`${n}-leave-to`}=t,R=Gv(s),x=R&&R[0],F=R&&R[1],{onBeforeEnter:H,onEnter:U,onEnterCancelled:j,onLeave:z,onLeaveCancelled:le,onBeforeAppear:se=H,onAppear:A=U,onAppearCancelled:y=j}=e,_=(T,v,xe,Je)=>{T._enterCancelled=Je,yr(T,v?f:l),yr(T,v?u:a),xe&&xe()},I=(T,v)=>{T._isLeaving=!1,yr(T,p),yr(T,E),yr(T,g),v&&v()},S=T=>(v,xe)=>{const Je=T?A:U,$e=()=>_(v,T,xe);_r(Je,[v,$e]),Oh(()=>{yr(v,T?c:i),En(v,T?f:l),xh(Je)||Dh(v,r,x,$e)})};return nt(e,{onBeforeEnter(T){_r(H,[T]),En(T,i),En(T,a)},onBeforeAppear(T){_r(se,[T]),En(T,c),En(T,u)},onEnter:S(!1),onAppear:S(!0),onLeave(T,v){T._isLeaving=!0;const xe=()=>I(T,v);En(T,p),T._enterCancelled?(En(T,g),Mh()):(Mh(),En(T,g)),Oh(()=>{T._isLeaving&&(yr(T,p),En(T,E),xh(z)||Dh(T,r,F,xe))}),_r(z,[T,xe])},onEnterCancelled(T){_(T,!1,void 0,!0),_r(j,[T])},onAppearCancelled(T){_(T,!0,void 0,!0),_r(y,[T])},onLeaveCancelled(T){I(T),_r(le,[T])}})}function Gv(t){if(t==null)return null;if(Fe(t))return[sl(t.enter),sl(t.leave)];{const e=sl(t);return[e,e]}}function sl(t){return X_(t)}function En(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[hi]||(t[hi]=new Set)).add(e)}function yr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[hi];n&&(n.delete(e),n.size||(t[hi]=void 0))}function Oh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Wv=0;function Dh(t,e,n,r){const s=t._endId=++Wv,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:l,propCount:c}=Kv(t,e);if(!a)return r();const u=a+"end";let f=0;const p=()=>{t.removeEventListener(u,g),i()},g=E=>{E.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(u,g)}function Kv(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${Hn}Delay`),i=r(`${Hn}Duration`),a=Nh(s,i),l=r(`${Ls}Delay`),c=r(`${Ls}Duration`),u=Nh(l,c);let f=null,p=0,g=0;e===Hn?a>0&&(f=Hn,p=a,g=i.length):e===Ls?u>0&&(f=Ls,p=u,g=c.length):(p=Math.max(a,u),f=p>0?a>u?Hn:Ls:null,g=f?f===Hn?i.length:c.length:0);const E=f===Hn&&/\b(transform|all)(,|$)/.test(r(`${Hn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:E}}function Nh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Vh(n)+Vh(t[r])))}function Vh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Mh(){return document.body.offsetHeight}function Qv(t,e,n){const r=t[hi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Lh=Symbol("_vod"),Jv=Symbol("_vsh"),Xv=Symbol(""),Yv=/(^|;)\s*display\s*:/;function Zv(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&yo(r,l,"")}else for(const a in e)n[a]==null&&yo(r,a,"");for(const a in n)a==="display"&&(i=!0),yo(r,a,n[a])}else if(s){if(e!==n){const a=r[Xv];a&&(n+=";"+a),r.cssText=n,i=Yv.test(n)}}else e&&t.removeAttribute("style");Lh in t&&(t[Lh]=i?r.display:"",t[Jv]&&(r.display="none"))}const Fh=/\s*!important$/;function yo(t,e,n){if(oe(n))n.forEach(r=>yo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=eE(t,e);Fh.test(n)?t.setProperty(Fr(r),n.replace(Fh,""),"important"):t[r]=n}}const Uh=["Webkit","Moz","ms"],il={};function eE(t,e){const n=il[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return il[e]=r;r=ca(r);for(let s=0;s<Uh.length;s++){const i=Uh[s]+r;if(i in t)return il[e]=i}return e}const $h="http://www.w3.org/1999/xlink";function Bh(t,e,n,r,s,i=sy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($h,e.slice(6,e.length)):t.setAttributeNS($h,e,n):n==null||i&&!Bd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":ur(n)?String(n):n)}function jh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Bd(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Qr(t,e,n,r){t.addEventListener(e,n,r)}function tE(t,e,n,r){t.removeEventListener(e,n,r)}const Hh=Symbol("_vei");function nE(t,e,n,r,s=null){const i=t[Hh]||(t[Hh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=rE(e);if(r){const u=i[e]=oE(r,s);Qr(t,l,u,c)}else a&&(tE(t,l,a,c),i[e]=void 0)}}const zh=/(?:Once|Passive|Capture)$/;function rE(t){let e;if(zh.test(t)){e={};let r;for(;r=t.match(zh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fr(t.slice(2)),e]}let ol=0;const sE=Promise.resolve(),iE=()=>ol||(sE.then(()=>ol=0),ol=Date.now());function oE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;tn(aE(r,n.value),e,5,[r])};return n.value=t,n.attached=iE(),n}function aE(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const qh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,lE=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Qv(t,r,a):e==="style"?Zv(t,n,r):oa(e)?cc(e)||nE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cE(t,e,r,a))?(jh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?jh(t,Gt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Bh(t,e,r,a))};function cE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&qh(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qh(e)&&qe(n)?!1:e in t}const Gh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>fo(e,n):e};function uE(t){t.target.composing=!0}function Wh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const al=Symbol("_assign"),Nl={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[al]=Gh(s);const i=r||s.props&&s.props.type==="number";Qr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=bl(l)),t[al](l)}),n&&Qr(t,"change",()=>{t.value=t.value.trim()}),e||(Qr(t,"compositionstart",uE),Qr(t,"compositionend",Wh),Qr(t,"change",Wh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[al]=Gh(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?bl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},hE=["ctrl","shift","alt","meta"],fE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hE.some(n=>t[`${n}Key`]&&!e.includes(n))},Zp=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=fE[e[a]];if(l&&l(s,e))return}return t(s,...i)})},dE=nt({patchProp:lE},jv);let Kh;function pE(){return Kh||(Kh=dv(dE))}const gE=(...t)=>{const e=pE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_E(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,mE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function mE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _E(t){return qe(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const yE=Symbol();var Qh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qh||(Qh={}));function vE(){const t=iy(!0),e=t.run(()=>ct({}));let n=[],r=[];const s=ap({install(i){s._a=i,i.provide(yE,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Jr=typeof document<"u";function eg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function EE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&eg(t.default)}const Re=Object.assign;function ll(t,e){const n={};for(const r in e){const s=e[r];n[r]=nn(s)?s.map(t):t(s)}return n}const Js=()=>{},nn=Array.isArray,tg=/#/g,wE=/&/g,bE=/\//g,TE=/=/g,IE=/\?/g,ng=/\+/g,AE=/%5B/g,SE=/%5D/g,rg=/%5E/g,RE=/%60/g,sg=/%7B/g,kE=/%7C/g,ig=/%7D/g,CE=/%20/g;function Ac(t){return encodeURI(""+t).replace(kE,"|").replace(AE,"[").replace(SE,"]")}function PE(t){return Ac(t).replace(sg,"{").replace(ig,"}").replace(rg,"^")}function Vl(t){return Ac(t).replace(ng,"%2B").replace(CE,"+").replace(tg,"%23").replace(wE,"%26").replace(RE,"`").replace(sg,"{").replace(ig,"}").replace(rg,"^")}function xE(t){return Vl(t).replace(TE,"%3D")}function OE(t){return Ac(t).replace(tg,"%23").replace(IE,"%3F")}function DE(t){return t==null?"":OE(t).replace(bE,"%2F")}function fi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const NE=/\/$/,VE=t=>t.replace(NE,"");function cl(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=UE(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:fi(a)}}function ME(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function LE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cs(e.matched[r],n.matched[s])&&og(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function og(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!FE(t[n],e[n]))return!1;return!0}function FE(t,e){return nn(t)?Xh(t,e):nn(e)?Xh(e,t):t===e}function Xh(t,e){return nn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function UE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var di;(function(t){t.pop="pop",t.push="push"})(di||(di={}));var Xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xs||(Xs={}));function $E(t){if(!t)if(Jr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),VE(t)}const BE=/^[^#]+#/;function jE(t,e){return t.replace(BE,"#")+e}function HE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ea=()=>({left:window.scrollX,top:window.scrollY});function zE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=HE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yh(t,e){return(history.state?history.state.position-e:-1)+t}const Ml=new Map;function qE(t,e){Ml.set(t,e)}function GE(t){const e=Ml.get(t);return Ml.delete(t),e}let WE=()=>location.protocol+"//"+location.host;function ag(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Jh(c,"")}return Jh(n,t)+r+s}function KE(t,e,n,r){let s=[],i=[],a=null;const l=({state:g})=>{const E=ag(t,location),R=n.value,x=e.value;let F=0;if(g){if(n.value=E,e.value=g,a&&a===R){a=null;return}F=x?g.position-x.position:0}else r(E);s.forEach(H=>{H(n.value,R,{delta:F,type:di.pop,direction:F?F>0?Xs.forward:Xs.back:Xs.unknown})})};function c(){a=n.value}function u(g){s.push(g);const E=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return i.push(E),E}function f(){const{history:g}=window;g.state&&g.replaceState(Re({},g.state,{scroll:Ea()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Zh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ea():null}}function QE(t){const{history:e,location:n}=window,r={value:ag(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:WE()+t+c;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(E){console.error(E),n[f?"replace":"assign"](g)}}function a(c,u){const f=Re({},e.state,Zh(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,u){const f=Re({},s.value,e.state,{forward:c,scroll:Ea()});i(f.current,f,!0);const p=Re({},Zh(r.value,c,null),{position:f.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function JE(t){t=$E(t);const e=QE(t),n=KE(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:jE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function XE(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),JE(t)}function YE(t){return typeof t=="string"||t&&typeof t=="object"}function lg(t){return typeof t=="string"||typeof t=="symbol"}const cg=Symbol("");var ef;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ef||(ef={}));function us(t,e){return Re(new Error,{type:t,[cg]:!0},e)}function wn(t,e){return t instanceof Error&&cg in t&&(e==null||!!(t.type&e))}const tf="[^/]+?",ZE={sensitive:!1,strict:!1,start:!0,end:!0},ew=/[.+*?^${}()[\]/\\]/g;function tw(t,e){const n=Re({},ZE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let E=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(ew,"\\$&"),E+=40;else if(g.type===1){const{value:R,repeatable:x,optional:F,regexp:H}=g;i.push({name:R,repeatable:x,optional:F});const U=H||tf;if(U!==tf){E+=10;try{new RegExp(`(${U})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${R}" (${U}): `+z.message)}}let j=x?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(j=F&&u.length<2?`(?:/${j})`:"/"+j),F&&(j+="?"),s+=j,E+=20,F&&(E+=-8),x&&(E+=-20),U===".*"&&(E+=-50)}f.push(E)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(a),p={};if(!f)return null;for(let g=1;g<f.length;g++){const E=f[g]||"",R=i[g-1];p[R.name]=E&&R.repeatable?E.split("/"):E}return p}function c(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const E of g)if(E.type===0)f+=E.value;else if(E.type===1){const{value:R,repeatable:x,optional:F}=E,H=R in u?u[R]:"";if(nn(H)&&!x)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const U=nn(H)?H.join("/"):H;if(!U)if(F)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=U}}return f||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function nw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ug(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=nw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(nf(r))return 1;if(nf(s))return-1}return s.length-r.length}function nf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rw={type:0,value:""},sw=/[a-zA-Z0-9_]/;function iw(t){if(!t)return[[]];if(t==="/")return[[rw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(E){throw new Error(`ERR (${n})/"${u}": ${E}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),a()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:sw.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),a(),s}function ow(t,e,n){const r=tw(iw(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aw(t,e){const n=[],r=new Map;e=af({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,E){const R=!E,x=sf(p);x.aliasOf=E&&E.record;const F=af(e,p),H=[x];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const le of z)H.push(sf(Re({},x,{components:E?E.record.components:x.components,path:le,aliasOf:E?E.record:x})))}let U,j;for(const z of H){const{path:le}=z;if(g&&le[0]!=="/"){const se=g.record.path,A=se[se.length-1]==="/"?"":"/";z.path=g.record.path+(le&&A+le)}if(U=ow(z,g,F),E?E.alias.push(U):(j=j||U,j!==U&&j.alias.push(U),R&&p.name&&!of(U)&&a(p.name)),hg(U)&&c(U),x.children){const se=x.children;for(let A=0;A<se.length;A++)i(se[A],U,E&&E.children[A])}E=E||U}return j?()=>{a(j)}:Js}function a(p){if(lg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const g=uw(p,n);n.splice(g,0,p),p.record.name&&!of(p)&&r.set(p.record.name,p)}function u(p,g){let E,R={},x,F;if("name"in p&&p.name){if(E=r.get(p.name),!E)throw us(1,{location:p});F=E.record.name,R=Re(rf(g.params,E.keys.filter(j=>!j.optional).concat(E.parent?E.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&rf(p.params,E.keys.map(j=>j.name))),x=E.stringify(R)}else if(p.path!=null)x=p.path,E=n.find(j=>j.re.test(x)),E&&(R=E.parse(x),F=E.record.name);else{if(E=g.name?r.get(g.name):n.find(j=>j.re.test(g.path)),!E)throw us(1,{location:p,currentLocation:g});F=E.record.name,R=Re({},g.params,p.params),x=E.stringify(R)}const H=[];let U=E;for(;U;)H.unshift(U.record),U=U.parent;return{name:F,path:x,params:R,matched:H,meta:cw(H)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:a,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function rf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function sf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:lw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function lw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function of(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cw(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function af(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function uw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ug(t,e[i])<0?r=i:n=i+1}const s=hw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function hw(t){let e=t;for(;e=e.parent;)if(hg(e)&&ug(t,e)===0)return e}function hg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function fw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ng," "),a=i.indexOf("="),l=fi(a<0?i:i.slice(0,a)),c=a<0?null:fi(i.slice(a+1));if(l in e){let u=e[l];nn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function lf(t){let e="";for(let n in t){const r=t[n];if(n=xE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(nn(r)?r.map(i=>i&&Vl(i)):[r&&Vl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=nn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const pw=Symbol(""),cf=Symbol(""),wa=Symbol(""),Sc=Symbol(""),Ll=Symbol("");function Fs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(us(4,{from:n,to:e})):g instanceof Error?c(g):YE(g)?c(us(2,{from:e,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function ul(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(eg(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Qn(f,n,r,a,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=EE(f)?f.default:f;a.mods[l]=f,a.components[l]=p;const E=(p.__vccOpts||p)[e];return E&&Qn(E,n,r,a,l,s)()}))}}return i}function uf(t){const e=en(wa),n=en(Sc),r=Dt(()=>{const c=we(t.to);return e.resolve(c)}),s=Dt(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(cs.bind(null,f));if(g>-1)return g;const E=hf(c[u-2]);return u>1&&hf(f)===E&&p[p.length-1].path!==E?p.findIndex(cs.bind(null,c[u-2])):g}),i=Dt(()=>s.value>-1&&yw(n.params,r.value.params)),a=Dt(()=>s.value>-1&&s.value===n.matched.length-1&&og(n.params,r.value.params));function l(c={}){if(_w(c)){const u=e[we(t.replace)?"replace":"push"](we(t.to)).catch(Js);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Dt(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function gw(t){return t.length===1?t[0]:t}const mw=bp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:uf,setup(t,{slots:e}){const n=fa(uf(t)),{options:r}=en(wa),s=Dt(()=>({[ff(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ff(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&gw(e.default(n));return t.custom?i:Ic("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Xe=mw;function _w(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!nn(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function hf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ff=(t,e,n)=>t??e??n,vw=bp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=en(Ll),s=Dt(()=>t.route||r.value),i=en(cf,0),a=Dt(()=>{let u=we(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=Dt(()=>s.value.matched[a.value]);po(cf,Dt(()=>a.value+1)),po(pw,l),po(Ll,s);const c=ct();return go(()=>[c.value,l.value,t.name],([u,f,p],[g,E,R])=>{f&&(f.instances[p]=u,E&&E!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=E.leaveGuards),f.updateGuards.size||(f.updateGuards=E.updateGuards))),u&&f&&(!E||!cs(f,E)||!g)&&(f.enterCallbacks[p]||[]).forEach(x=>x(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return df(n.default,{Component:g,route:u});const E=p.props[f],R=E?E===!0?u.params:typeof E=="function"?E(u):E:null,F=Ic(g,Re({},R,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return df(n.default,{Component:F,route:u})||F}}});function df(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Rc=vw;function Ew(t){const e=aw(t.routes,t),n=t.parseQuery||fw,r=t.stringifyQuery||lf,s=t.history,i=Fs(),a=Fs(),l=Fs(),c=Ay(zn);let u=zn;Jr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ll.bind(null,O=>""+O),p=ll.bind(null,DE),g=ll.bind(null,fi);function E(O,X){let J,Y;return lg(O)?(J=e.getRecordMatcher(O),Y=X):Y=O,e.addRoute(Y,J)}function R(O){const X=e.getRecordMatcher(O);X&&e.removeRoute(X)}function x(){return e.getRoutes().map(O=>O.record)}function F(O){return!!e.getRecordMatcher(O)}function H(O,X){if(X=Re({},X||c.value),typeof O=="string"){const k=cl(n,O,X.path),D=e.resolve({path:k.path},X),M=s.createHref(k.fullPath);return Re(k,D,{params:g(D.params),hash:fi(k.hash),redirectedFrom:void 0,href:M})}let J;if(O.path!=null)J=Re({},O,{path:cl(n,O.path,X.path).path});else{const k=Re({},O.params);for(const D in k)k[D]==null&&delete k[D];J=Re({},O,{params:p(k)}),X.params=p(X.params)}const Y=e.resolve(J,X),Ie=O.hash||"";Y.params=f(g(Y.params));const w=ME(r,Re({},O,{hash:PE(Ie),path:Y.path})),b=s.createHref(w);return Re({fullPath:w,hash:Ie,query:r===lf?dw(O.query):O.query||{}},Y,{redirectedFrom:void 0,href:b})}function U(O){return typeof O=="string"?cl(n,O,c.value.path):Re({},O)}function j(O,X){if(u!==O)return us(8,{from:X,to:O})}function z(O){return A(O)}function le(O){return z(Re(U(O),{replace:!0}))}function se(O){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:J}=X;let Y=typeof J=="function"?J(O):J;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=U(Y):{path:Y},Y.params={}),Re({query:O.query,hash:O.hash,params:Y.path!=null?{}:O.params},Y)}}function A(O,X){const J=u=H(O),Y=c.value,Ie=O.state,w=O.force,b=O.replace===!0,k=se(J);if(k)return A(Re(U(k),{state:typeof k=="object"?Re({},Ie,k.state):Ie,force:w,replace:b}),X||J);const D=J;D.redirectedFrom=X;let M;return!w&&LE(r,Y,J)&&(M=us(16,{to:D,from:Y}),Bt(Y,Y,!0,!1)),(M?Promise.resolve(M):I(D,Y)).catch(N=>wn(N)?wn(N,2)?N:Wt(N):me(N,D,Y)).then(N=>{if(N){if(wn(N,2))return A(Re({replace:b},U(N.to),{state:typeof N.to=="object"?Re({},Ie,N.to.state):Ie,force:w}),X||D)}else N=T(D,Y,!0,b,Ie);return S(D,Y,N),N})}function y(O,X){const J=j(O,X);return J?Promise.reject(J):Promise.resolve()}function _(O){const X=Fn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(O):O()}function I(O,X){let J;const[Y,Ie,w]=ww(O,X);J=ul(Y.reverse(),"beforeRouteLeave",O,X);for(const k of Y)k.leaveGuards.forEach(D=>{J.push(Qn(D,O,X))});const b=y.bind(null,O,X);return J.push(b),Ct(J).then(()=>{J=[];for(const k of i.list())J.push(Qn(k,O,X));return J.push(b),Ct(J)}).then(()=>{J=ul(Ie,"beforeRouteUpdate",O,X);for(const k of Ie)k.updateGuards.forEach(D=>{J.push(Qn(D,O,X))});return J.push(b),Ct(J)}).then(()=>{J=[];for(const k of w)if(k.beforeEnter)if(nn(k.beforeEnter))for(const D of k.beforeEnter)J.push(Qn(D,O,X));else J.push(Qn(k.beforeEnter,O,X));return J.push(b),Ct(J)}).then(()=>(O.matched.forEach(k=>k.enterCallbacks={}),J=ul(w,"beforeRouteEnter",O,X,_),J.push(b),Ct(J))).then(()=>{J=[];for(const k of a.list())J.push(Qn(k,O,X));return J.push(b),Ct(J)}).catch(k=>wn(k,8)?k:Promise.reject(k))}function S(O,X,J){l.list().forEach(Y=>_(()=>Y(O,X,J)))}function T(O,X,J,Y,Ie){const w=j(O,X);if(w)return w;const b=X===zn,k=Jr?history.state:{};J&&(Y||b?s.replace(O.fullPath,Re({scroll:b&&k&&k.scroll},Ie)):s.push(O.fullPath,Ie)),c.value=O,Bt(O,X,J,b),Wt()}let v;function xe(){v||(v=s.listen((O,X,J)=>{if(!rn.listening)return;const Y=H(O),Ie=se(Y);if(Ie){A(Re(Ie,{replace:!0,force:!0}),Y).catch(Js);return}u=Y;const w=c.value;Jr&&qE(Yh(w.fullPath,J.delta),Ea()),I(Y,w).catch(b=>wn(b,12)?b:wn(b,2)?(A(Re(U(b.to),{force:!0}),Y).then(k=>{wn(k,20)&&!J.delta&&J.type===di.pop&&s.go(-1,!1)}).catch(Js),Promise.reject()):(J.delta&&s.go(-J.delta,!1),me(b,Y,w))).then(b=>{b=b||T(Y,w,!1),b&&(J.delta&&!wn(b,8)?s.go(-J.delta,!1):J.type===di.pop&&wn(b,20)&&s.go(-1,!1)),S(Y,w,b)}).catch(Js)}))}let Je=Fs(),$e=Fs(),ye;function me(O,X,J){Wt(O);const Y=$e.list();return Y.length?Y.forEach(Ie=>Ie(O,X,J)):console.error(O),Promise.reject(O)}function Mt(){return ye&&c.value!==zn?Promise.resolve():new Promise((O,X)=>{Je.add([O,X])})}function Wt(O){return ye||(ye=!O,xe(),Je.list().forEach(([X,J])=>O?J(O):X()),Je.reset()),O}function Bt(O,X,J,Y){const{scrollBehavior:Ie}=t;if(!Jr||!Ie)return Promise.resolve();const w=!J&&GE(Yh(O.fullPath,0))||(Y||!J)&&history.state&&history.state.scroll||null;return hp().then(()=>Ie(O,X,w)).then(b=>b&&zE(b)).catch(b=>me(b,O,X))}const Be=O=>s.go(O);let je;const Fn=new Set,rn={currentRoute:c,listening:!0,addRoute:E,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:F,getRoutes:x,resolve:H,options:t,push:z,replace:le,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:$e.add,isReady:Mt,install(O){const X=this;O.component("RouterLink",Xe),O.component("RouterView",Rc),O.config.globalProperties.$router=X,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>we(c)}),Jr&&!je&&c.value===zn&&(je=!0,z(s.location).catch(Ie=>{}));const J={};for(const Ie in zn)Object.defineProperty(J,Ie,{get:()=>c.value[Ie],enumerable:!0});O.provide(wa,X),O.provide(Sc,ip(J)),O.provide(Ll,c);const Y=O.unmount;Fn.add(O),O.unmount=function(){Fn.delete(O),Fn.size<1&&(u=zn,v&&v(),v=null,c.value=zn,je=!1,ye=!1),Y()}}};function Ct(O){return O.reduce((X,J)=>X.then(()=>_(J)),Promise.resolve())}return rn}function ww(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(u=>cs(u,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(u=>cs(u,c))||s.push(c))}return[n,r,s]}function oC(){return en(wa)}function aC(t){return en(Sc)}const dt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},bw={class:"header"},Tw={class:"nav desktop-nav"},Iw={key:0,class:"nav mobile-drawer"},Aw={__name:"Header",setup(t){const e=ct(!1);function n(r){const s=document.querySelector(".mobile-drawer"),i=document.querySelector(".hamburger");e.value&&s&&!s.contains(r.target)&&!i.contains(r.target)&&(e.value=!1)}return ys(()=>{document.addEventListener("click",n)}),Ec(()=>{document.removeEventListener("click",n)}),(r,s)=>(ie(),he("header",bw,[ne(we(Xe),{to:"/",class:"logo"},{default:Ge(()=>s[6]||(s[6]=[We("Association of Family Psychiatrists")])),_:1,__:[6]}),V("button",{class:"hamburger",onClick:s[0]||(s[0]=i=>e.value=!e.value),"aria-label":"Toggle Menu"},"☰"),V("nav",Tw,[ne(we(Xe),{to:"/about","exact-active-class":"active",class:"nav-link"},{default:Ge(()=>s[7]||(s[7]=[We("About")])),_:1,__:[7]}),ne(we(Xe),{to:"/resources","exact-active-class":"active",class:"nav-link"},{default:Ge(()=>s[8]||(s[8]=[We("Resources")])),_:1,__:[8]}),ne(we(Xe),{to:"/events","exact-active-class":"active",class:"nav-link"},{default:Ge(()=>s[9]||(s[9]=[We("Events")])),_:1,__:[9]}),ne(we(Xe),{to:"/members","exact-active-class":"active",class:"nav-link"},{default:Ge(()=>s[10]||(s[10]=[We("Members")])),_:1,__:[10]}),ne(we(Xe),{to:"/membership",class:"member-button"},{default:Ge(()=>s[11]||(s[11]=[We("Become a Member")])),_:1,__:[11]})]),ne(Yp,{name:"slide"},{default:Ge(()=>[e.value?(ie(),he("nav",Iw,[ne(we(Xe),{to:"/about","exact-active-class":"active",onClick:s[1]||(s[1]=i=>e.value=!1)},{default:Ge(()=>s[12]||(s[12]=[We("About")])),_:1,__:[12]}),ne(we(Xe),{to:"/resources","exact-active-class":"active",onClick:s[2]||(s[2]=i=>e.value=!1)},{default:Ge(()=>s[13]||(s[13]=[We("Resources")])),_:1,__:[13]}),ne(we(Xe),{to:"/members","exact-active-class":"active",onClick:s[3]||(s[3]=i=>e.value=!1)},{default:Ge(()=>s[14]||(s[14]=[We("Members")])),_:1,__:[14]}),ne(we(Xe),{to:"/events","exact-active-class":"active",onClick:s[4]||(s[4]=i=>e.value=!1)},{default:Ge(()=>s[15]||(s[15]=[We("Events")])),_:1,__:[15]}),ne(we(Xe),{to:"/membership",onClick:s[5]||(s[5]=i=>e.value=!1),class:"member-button mobile-member-button"},{default:Ge(()=>s[16]||(s[16]=[We(" Become a Member ")])),_:1,__:[16]})])):Ut("",!0)]),_:1})]))}},Sw=dt(Aw,[["__scopeId","data-v-26cdc8df"]]),Rw=()=>{};var pf={};/**
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
 */const fg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,E=u&63;c||(E=64,a||(g=64)),r.push(n[f],n[p],n[g],n[E])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new Cw;const g=i<<2|l>>4;if(r.push(g),u!==64){const E=l<<4&240|u>>2;if(r.push(E),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Cw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pw=function(t){const e=fg(t);return dg.encodeByteArray(e,!0)},Lo=function(t){return Pw(t).replace(/\./g,"")},pg=function(t){try{return dg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Ow=()=>xw().__FIREBASE_DEFAULTS__,Dw=()=>{if(typeof process>"u"||typeof pf>"u")return;const t=pf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pg(t[1]);return e&&JSON.parse(e)},ba=()=>{try{return Rw()||Ow()||Dw()||Nw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gg=t=>{var e,n;return(n=(e=ba())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vw=t=>{const e=gg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mg=()=>{var t;return(t=ba())===null||t===void 0?void 0:t.config},_g=t=>{var e;return(e=ba())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */function Ri(t){return t.endsWith(".cloudworkstations.dev")}async function yg(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function Lw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lo(JSON.stringify(n)),Lo(JSON.stringify(a)),""].join(".")}const Ys={};function Fw(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ys))Ys[e]?t.emulator.push(e):t.prod.push(e);return t}function Uw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let gf=!1;function vg(t,e){if(typeof window>"u"||typeof document>"u"||!Ri(window.location.host)||Ys[t]===e||Ys[t]||gf)return;Ys[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Fw().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,E){g.setAttribute("width","24"),g.setAttribute("id",E),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{gf=!0,a()},g}function f(g,E){g.setAttribute("id",E),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=Uw(r),E=n("text"),R=document.getElementById(E)||document.createElement("span"),x=n("learnmore"),F=document.getElementById(x)||document.createElement("a"),H=n("preprendIcon"),U=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const j=g.element;l(j),f(F,x);const z=u();c(U,H),j.append(U,R,F,z),document.body.appendChild(j)}i?(R.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $w(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function Bw(){var t;const e=(t=ba())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qw(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gw(){return!Bw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ww(){try{return typeof indexedDB=="object"}catch{return!1}}function Kw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Qw="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Qw,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Jw(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Ln(s,l,r)}}function Jw(t,e){return t.replace(Xw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Xw=/\{\$([^}]+)}/g;function Yw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(mf(i)&&mf(a)){if(!Pr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function mf(t){return t!==null&&typeof t=="object"}/**
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
 */function Ci(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zw(t,e){const n=new eb(t,e);return n.subscribe.bind(n)}class eb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=hl),s.error===void 0&&(s.error=hl),s.complete===void 0&&(s.complete=hl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hl(){}/**
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
 */function pn(t){return t&&t._delegate?t._delegate:t}class xr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const wr="[DEFAULT]";/**
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
 */class nb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sb(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rb(t){return t===wr?void 0:t}function sb(t){return t.instantiationMode==="EAGER"}/**
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
 */class ib{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const ob={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},ab=_e.INFO,lb={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},cb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=ab,this._logHandler=cb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ob[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const ub=(t,e)=>e.some(n=>t instanceof n);let _f,yf;function hb(){return _f||(_f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fb(){return yf||(yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eg=new WeakMap,Fl=new WeakMap,wg=new WeakMap,fl=new WeakMap,Cc=new WeakMap;function db(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(tr(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Eg.set(n,t)}).catch(()=>{}),Cc.set(e,t),e}function pb(t){if(Fl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Fl.set(t,e)}let Ul={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gb(t){Ul=t(Ul)}function mb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dl(this),e,...n);return wg.set(r,e.sort?e.sort():[e]),tr(r)}:fb().includes(t)?function(...e){return t.apply(dl(this),e),tr(Eg.get(this))}:function(...e){return tr(t.apply(dl(this),e))}}function _b(t){return typeof t=="function"?mb(t):(t instanceof IDBTransaction&&pb(t),ub(t,hb())?new Proxy(t,Ul):t)}function tr(t){if(t instanceof IDBRequest)return db(t);if(fl.has(t))return fl.get(t);const e=_b(t);return e!==t&&(fl.set(t,e),Cc.set(e,t)),e}const dl=t=>Cc.get(t);function yb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=tr(a);return r&&a.addEventListener("upgradeneeded",c=>{r(tr(a.result),c.oldVersion,c.newVersion,tr(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const vb=["get","getKey","getAll","getAllKeys","count"],Eb=["put","add","delete","clear"],pl=new Map;function vf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pl.get(e))return pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Eb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vb.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return pl.set(e,i),i}gb(t=>({...t,get:(e,n,r)=>vf(e,n)||t.get(e,n,r),has:(e,n)=>!!vf(e,n)||t.has(e,n)}));/**
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
 */class wb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $l="@firebase/app",Ef="0.13.0";/**
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
 */const Dn=new kc("@firebase/app"),Tb="@firebase/app-compat",Ib="@firebase/analytics-compat",Ab="@firebase/analytics",Sb="@firebase/app-check-compat",Rb="@firebase/app-check",kb="@firebase/auth",Cb="@firebase/auth-compat",Pb="@firebase/database",xb="@firebase/data-connect",Ob="@firebase/database-compat",Db="@firebase/functions",Nb="@firebase/functions-compat",Vb="@firebase/installations",Mb="@firebase/installations-compat",Lb="@firebase/messaging",Fb="@firebase/messaging-compat",Ub="@firebase/performance",$b="@firebase/performance-compat",Bb="@firebase/remote-config",jb="@firebase/remote-config-compat",Hb="@firebase/storage",zb="@firebase/storage-compat",qb="@firebase/firestore",Gb="@firebase/ai",Wb="@firebase/firestore-compat",Kb="firebase",Qb="11.8.0";/**
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
 */const Bl="[DEFAULT]",Jb={[$l]:"fire-core",[Tb]:"fire-core-compat",[Ab]:"fire-analytics",[Ib]:"fire-analytics-compat",[Rb]:"fire-app-check",[Sb]:"fire-app-check-compat",[kb]:"fire-auth",[Cb]:"fire-auth-compat",[Pb]:"fire-rtdb",[xb]:"fire-data-connect",[Ob]:"fire-rtdb-compat",[Db]:"fire-fn",[Nb]:"fire-fn-compat",[Vb]:"fire-iid",[Mb]:"fire-iid-compat",[Lb]:"fire-fcm",[Fb]:"fire-fcm-compat",[Ub]:"fire-perf",[$b]:"fire-perf-compat",[Bb]:"fire-rc",[jb]:"fire-rc-compat",[Hb]:"fire-gcs",[zb]:"fire-gcs-compat",[qb]:"fire-fst",[Wb]:"fire-fst-compat",[Gb]:"fire-vertex","fire-js":"fire-js",[Kb]:"fire-js-all"};/**
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
 */const Fo=new Map,Xb=new Map,jl=new Map;function wf(t,e){try{t.container.addComponent(e)}catch(n){Dn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hs(t){const e=t.name;if(jl.has(e))return Dn.debug(`There were multiple attempts to register component ${e}.`),!1;jl.set(e,t);for(const n of Fo.values())wf(n,t);for(const n of Xb.values())wf(n,t);return!0}function Pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Yb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},nr=new ki("app","Firebase",Yb);/**
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
 */class Zb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nr.create("app-deleted",{appName:this._name})}}/**
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
 */const vs=Qb;function bg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw nr.create("bad-app-name",{appName:String(s)});if(n||(n=mg()),!n)throw nr.create("no-options");const i=Fo.get(s);if(i){if(Pr(n,i.options)&&Pr(r,i.config))return i;throw nr.create("duplicate-app",{appName:s})}const a=new ib(s);for(const c of jl.values())a.addComponent(c);const l=new Zb(n,r,a);return Fo.set(s,l),l}function Tg(t=Bl){const e=Fo.get(t);if(!e&&t===Bl&&mg())return bg();if(!e)throw nr.create("no-app",{appName:t});return e}function rr(t,e,n){var r;let s=(r=Jb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(l.join(" "));return}hs(new xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const e0="firebase-heartbeat-database",t0=1,pi="firebase-heartbeat-store";let gl=null;function Ig(){return gl||(gl=yb(e0,t0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(pi)}catch(n){console.warn(n)}}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),gl}async function n0(t){try{const n=(await Ig()).transaction(pi),r=await n.objectStore(pi).get(Ag(t));return await n.done,r}catch(e){if(e instanceof Ln)Dn.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function bf(t,e){try{const r=(await Ig()).transaction(pi,"readwrite");await r.objectStore(pi).put(e,Ag(t)),await r.done}catch(n){if(n instanceof Ln)Dn.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function Ag(t){return`${t.name}!${t.options.appId}`}/**
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
 */const r0=1024,s0=30;class i0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new a0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>s0){const a=l0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tf(),{heartbeatsToSend:r,unsentEntries:s}=o0(this._heartbeatsCache.heartbeats),i=Lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Dn.warn(n),""}}}function Tf(){return new Date().toISOString().substring(0,10)}function o0(t,e=r0){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),If(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),If(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class a0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ww()?Kw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await n0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function If(t){return Lo(JSON.stringify({version:2,heartbeats:t})).length}function l0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function c0(t){hs(new xr("platform-logger",e=>new wb(e),"PRIVATE")),hs(new xr("heartbeat",e=>new i0(e),"PRIVATE")),rr($l,Ef,t),rr($l,Ef,"esm2017"),rr("fire-js","")}c0("");var u0="firebase",h0="11.8.1";/**
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
 */rr(u0,h0,"app");function xc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Sg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f0=Sg,Rg=new ki("auth","Firebase",Sg());/**
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
 */const Uo=new kc("@firebase/auth");function d0(t,...e){Uo.logLevel<=_e.WARN&&Uo.warn(`Auth (${vs}): ${t}`,...e)}function vo(t,...e){Uo.logLevel<=_e.ERROR&&Uo.error(`Auth (${vs}): ${t}`,...e)}/**
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
 */function Nn(t,...e){throw Oc(t,...e)}function fn(t,...e){return Oc(t,...e)}function kg(t,e,n){const r=Object.assign(Object.assign({},f0()),{[e]:n});return new ki("auth","Firebase",r).create(e,{appName:t.name})}function Ar(t){return kg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rg.create(t,...e)}function ce(t,e,...n){if(!t)throw Oc(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vo(e),new Error(e)}function Vn(t,e){t||An(e)}/**
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
 */function Hl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function p0(){return Af()==="http:"||Af()==="https:"}function Af(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function g0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(p0()||Hw()||"connection"in navigator)?navigator.onLine:!0}function m0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=$w()||zw()}get(){return g0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Dc(t,e){Vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Cg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;An("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;An("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;An("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const _0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const y0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],v0=new Pi(3e4,6e4);function Nc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Es(t,e,n,r,s={}){return Pg(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ci(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return jw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ri(t.emulatorConfig.host)&&(u.credentials="include"),Cg.fetch()(await xg(t,t.config.apiHost,n,l),u)})}async function Pg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_0),e);try{const s=new w0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw io(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw io(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw io(t,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kg(t,f,u);Nn(t,f)}}catch(s){if(s instanceof Ln)throw s;Nn(t,"network-request-failed",{message:String(s)})}}async function E0(t,e,n,r,s={}){const i=await Es(t,e,n,r,s);return"mfaPendingCredential"in i&&Nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function xg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Dc(t.config,s):`${t.config.apiScheme}://${s}`;return y0.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class w0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),v0.get())})}}function io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function b0(t,e){return Es(t,"POST","/v1/accounts:delete",e)}async function $o(t,e){return Es(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function T0(t,e=!1){const n=pn(t),r=await n.getIdToken(e),s=Vc(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zs(ml(s.auth_time)),issuedAtTime:Zs(ml(s.iat)),expirationTime:Zs(ml(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ml(t){return Number(t)*1e3}function Vc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=pg(n);return s?JSON.parse(s):(vo("Failed to decode base64 JWT payload"),null)}catch(s){return vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sf(t){const e=Vc(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&I0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function I0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class A0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await gi(t,$o(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Og(i.providerUserInfo):[],l=R0(t.providerData,a),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new zl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function S0(t){const e=pn(t);await Bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function R0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Og(t){return t.map(e=>{var{providerId:n}=e,r=xc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function k0(t,e){const n=await Pg(t,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await xg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Cg.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function C0(t,e){return Es(t,"POST","/v2/accounts:revokeToken",Nc(t,e))}/**
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
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Sf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await k0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new is;return r&&(ce(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
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
 */function qn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new A0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gi(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return T0(this,e)}reload(){return S0(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await gi(this,b0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,E=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(a=n.photoURL)!==null&&a!==void 0?a:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,F=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,H=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:z,isAnonymous:le,providerData:se,stsTokenManager:A}=n;ce(j&&A,e,"internal-error");const y=is.fromJSON(this.name,A);ce(typeof j=="string",e,"internal-error"),qn(p,e.name),qn(g,e.name),ce(typeof z=="boolean",e,"internal-error"),ce(typeof le=="boolean",e,"internal-error"),qn(E,e.name),qn(R,e.name),qn(x,e.name),qn(F,e.name),qn(H,e.name),qn(U,e.name);const _=new Xt({uid:j,auth:e,email:g,emailVerified:z,displayName:p,isAnonymous:le,photoURL:R,phoneNumber:E,tenantId:x,stsTokenManager:y,createdAt:H,lastLoginAt:U});return se&&Array.isArray(se)&&(_.providerData=se.map(I=>Object.assign({},I))),F&&(_._redirectEventId=F),_}static async _fromIdTokenResponse(e,n,r=!1){const s=new is;s.updateFromServerResponse(n);const i=new Xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Og(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new is;l.updateFromIdToken(r);const c=new Xt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
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
 */const Rf=new Map;function Sn(t){Vn(t instanceof Function,"Expected a class definition");let e=Rf.get(t);return e?(Vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rf.set(t,e),e)}/**
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
 */class Dg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dg.type="NONE";const kf=Dg;/**
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
 */function Eo(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await $o(this.auth,{idToken:e}).catch(()=>{});return n?Xt._fromGetAccountInfoResponse(this.auth,n,e):null}return Xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(Sn(kf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Sn(kf);const a=Eo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(a);if(f){let p;if(typeof f=="string"){const g=await $o(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Xt._fromGetAccountInfoResponse(e,g,f)}else p=Xt._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new os(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new os(i,e,r))}}/**
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
 */function Cf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ng(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ug(e))return"Blackberry";if($g(e))return"Webos";if(Vg(e))return"Safari";if((e.includes("chrome/")||Mg(e))&&!e.includes("edge/"))return"Chrome";if(Fg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ng(t=Tt()){return/firefox\//i.test(t)}function Vg(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mg(t=Tt()){return/crios\//i.test(t)}function Lg(t=Tt()){return/iemobile/i.test(t)}function Fg(t=Tt()){return/android/i.test(t)}function Ug(t=Tt()){return/blackberry/i.test(t)}function $g(t=Tt()){return/webos/i.test(t)}function Mc(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function P0(t=Tt()){var e;return Mc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function x0(){return qw()&&document.documentMode===10}function Bg(t=Tt()){return Mc(t)||Fg(t)||$g(t)||Ug(t)||/windows phone/i.test(t)||Lg(t)}/**
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
 */function jg(t,e=[]){let n;switch(t){case"Browser":n=Cf(Tt());break;case"Worker":n=`${Cf(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${vs}/${r}`}/**
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
 */class O0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function D0(t,e={}){return Es(t,"GET","/v2/passwordPolicy",Nc(t,e))}/**
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
 */const N0=6;class V0{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:N0,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class M0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pf(this),this.idTokenSubscription=new Pf(this),this.beforeStateQueue=new O0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await $o(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(un(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=m0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(Ar(this));const n=e?pn(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await D0(this),n=new V0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await C0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&d0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lc(t){return pn(t)}class Pf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zw(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function L0(t){Fc=t}function F0(t){return Fc.loadJS(t)}function U0(){return Fc.gapiScript}function $0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function B0(t,e){const n=Pc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Pr(i,e??{}))return s;Nn(s,"already-initialized")}return n.initialize({options:e})}function j0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function H0(t,e,n){const r=Lc(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Hg(e),{host:a,port:l}=z0(e),c=l===null?"":`:${l}`,u={url:`${i}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(Pr(u,r.config.emulator)&&Pr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ri(a)?(yg(`${i}//${a}${c}`),vg("Auth",!0)):q0()}function Hg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function z0(t){const e=Hg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:xf(a)}}}function xf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function q0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class zg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return An("not implemented")}_getIdTokenResponse(e){return An("not implemented")}_linkToIdToken(e,n){return An("not implemented")}_getReauthenticationResolver(e){return An("not implemented")}}/**
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
 */async function as(t,e){return E0(t,"POST","/v1/accounts:signInWithIdp",Nc(t,e))}/**
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
 */const G0="http://localhost";class Or extends zg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Or(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:G0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
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
 */class qg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xi extends qg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Jn extends xi{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
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
 */class Xn extends xi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:Xn.PROVIDER_ID,signInMethod:Xn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Xn.credentialFromTaggedObject(e)}static credentialFromError(e){return Xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Xn.credential(n,r)}catch{return null}}}Xn.GOOGLE_SIGN_IN_METHOD="google.com";Xn.PROVIDER_ID="google.com";/**
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
 */class Yn extends xi{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Yn.credential(e.oauthAccessToken)}catch{return null}}}Yn.GITHUB_SIGN_IN_METHOD="github.com";Yn.PROVIDER_ID="github.com";/**
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
 */class Zn extends xi{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Zn.credential(n,r)}catch{return null}}}Zn.TWITTER_SIGN_IN_METHOD="twitter.com";Zn.PROVIDER_ID="twitter.com";/**
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
 */class fs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Xt._fromIdTokenResponse(e,r,s),a=Of(r);return new fs({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Of(r);return new fs({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Of(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class jo extends Ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new jo(e,n,r,s)}}function Gg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jo._fromErrorAndOperation(t,i,e,r):i})}async function W0(t,e,n=!1){const r=await gi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fs._forOperation(t,"link",r)}/**
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
 */async function K0(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(Ar(r));const s="reauthenticate";try{const i=await gi(t,Gg(r,s,e,t),n);ce(i.idToken,r,"internal-error");const a=Vc(i.idToken);ce(a,r,"internal-error");const{sub:l}=a;return ce(t.uid===l,r,"user-mismatch"),fs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nn(r,"user-mismatch"),i}}/**
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
 */async function Q0(t,e,n=!1){if(un(t.app))return Promise.reject(Ar(t));const r="signIn",s=await Gg(t,r,e),i=await fs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function J0(t,e,n,r){return pn(t).onIdTokenChanged(e,n,r)}function X0(t,e,n){return pn(t).beforeAuthStateChanged(e,n)}const Ho="__sak";/**
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
 */class Wg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ho,"1"),this.storage.removeItem(Ho),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Y0=1e3,Z0=10;class Kg extends Wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);x0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Z0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Y0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kg.type="LOCAL";const eT=Kg;/**
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
 */class Qg extends Wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qg.type="SESSION";const Jg=Qg;/**
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
 */function tT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async u=>u(n.origin,i)),c=await tT(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ta.receivers=[];/**
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
 */function Uc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const u=Uc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function dn(){return window}function rT(t){dn().location.href=t}/**
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
 */function Xg(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function sT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function oT(){return Xg()?self:null}/**
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
 */const Yg="firebaseLocalStorageDb",aT=1,zo="firebaseLocalStorage",Zg="fbase_key";class Oi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ia(t,e){return t.transaction([zo],e?"readwrite":"readonly").objectStore(zo)}function lT(){const t=indexedDB.deleteDatabase(Yg);return new Oi(t).toPromise()}function ql(){const t=indexedDB.open(Yg,aT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zo,{keyPath:Zg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zo)?e(r):(r.close(),await lT(),e(await ql()))})})}async function Df(t,e,n){const r=Ia(t,!0).put({[Zg]:e,value:n});return new Oi(r).toPromise()}async function cT(t,e){const n=Ia(t,!1).get(e),r=await new Oi(n).toPromise();return r===void 0?null:r.value}function Nf(t,e){const n=Ia(t,!0).delete(e);return new Oi(n).toPromise()}const uT=800,hT=3;class em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ql(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>hT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ta._getInstance(oT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await sT(),!this.activeServiceWorker)return;this.sender=new nT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ql();return await Df(e,Ho,"1"),await Nf(e,Ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Df(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>cT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ia(s,!1).getAll();return new Oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}em.type="LOCAL";const fT=em;new Pi(3e4,6e4);/**
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
 */function dT(t,e){return e?Sn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $c extends zg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pT(t){return Q0(t.auth,new $c(t),t.bypassAuthState)}function gT(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),K0(n,new $c(t),t.bypassAuthState)}async function mT(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),W0(n,new $c(t),t.bypassAuthState)}/**
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
 */class tm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pT;case"linkViaPopup":case"linkViaRedirect":return mT;case"reauthViaPopup":case"reauthViaRedirect":return gT;default:Nn(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _T=new Pi(2e3,1e4);class Zr extends tm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=Uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_T.get())};e()}}Zr.currentPopupAction=null;/**
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
 */const yT="pendingRedirect",wo=new Map;class vT extends tm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wo.get(this.auth._key());if(!e){try{const r=await ET(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wo.set(this.auth._key(),e)}return this.bypassAuthState||wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ET(t,e){const n=TT(e),r=bT(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function wT(t,e){wo.set(t._key(),e)}function bT(t){return Sn(t._redirectPersistence)}function TT(t){return Eo(yT,t.config.apiKey,t.name)}async function IT(t,e,n=!1){if(un(t.app))return Promise.reject(Ar(t));const r=Lc(t),s=dT(r,e),a=await new vT(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const AT=10*60*1e3;class ST{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=AT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vf(e))}saveEventToCache(e){this.cachedEventUids.add(Vf(e)),this.lastProcessedEventTime=Date.now()}}function Vf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nm(t);default:return!1}}/**
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
 */async function kT(t,e={}){return Es(t,"GET","/v1/projects",e)}/**
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
 */const CT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,PT=/^https?/;async function xT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await kT(t);for(const n of e)try{if(OT(n))return}catch{}Nn(t,"unauthorized-domain")}function OT(t){const e=Hl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!PT.test(n))return!1;if(CT.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const DT=new Pi(3e4,6e4);function Mf(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NT(t){return new Promise((e,n)=>{var r,s,i;function a(){Mf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mf(),n(fn(t,"network-request-failed"))},timeout:DT.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)a();else{const l=$0("iframefcb");return dn()[l]=()=>{gapi.load?a():n(fn(t,"network-request-failed"))},F0(`${U0()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw bo=null,e})}let bo=null;function VT(t){return bo=bo||NT(t),bo}/**
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
 */const MT=new Pi(5e3,15e3),LT="__/auth/iframe",FT="emulator/auth/iframe",UT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$T=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BT(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dc(e,FT):`https://${t.config.authDomain}/${LT}`,r={apiKey:e.apiKey,appName:t.name,v:vs},s=$T.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ci(r).slice(1)}`}async function jT(t){const e=await VT(t),n=dn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:BT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UT,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=fn(t,"network-request-failed"),l=dn().setTimeout(()=>{i(a)},MT.get());function c(){dn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const HT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zT=500,qT=600,GT="_blank",WT="http://localhost";class Lf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KT(t,e,n,r=zT,s=qT){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},HT),{width:r.toString(),height:s.toString(),top:i,left:a}),u=Tt().toLowerCase();n&&(l=Mg(u)?GT:n),Ng(u)&&(e=e||WT,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[E,R])=>`${g}${E}=${R},`,"");if(P0(u)&&l!=="_self")return QT(e||"",l),new Lf(null);const p=window.open(e||"",l,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Lf(p)}function QT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const JT="__/auth/handler",XT="emulator/auth/handler",YT=encodeURIComponent("fac");async function Ff(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:vs,eventId:s};if(e instanceof qg){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Yw(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof xi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${YT}=${encodeURIComponent(c)}`:"";return`${ZT(t)}?${Ci(l).slice(1)}${u}`}function ZT({config:t}){return t.emulator?Dc(t,XT):`https://${t.authDomain}/${JT}`}/**
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
 */const _l="webStorageSupport";class eI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jg,this._completeRedirectFn=IT,this._overrideRedirectResult=wT}async _openPopup(e,n,r,s){var i;Vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Ff(e,n,r,Hl(),s);return KT(e,a,Uc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ff(e,n,r,Hl(),s);return rT(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await jT(e),r=new ST(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_l,{type:_l},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[_l];a!==void 0&&n(!!a),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bg()||Vg()||Mc()}}const tI=eI;var Uf="@firebase/auth",$f="1.10.6";/**
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
 */class nI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sI(t){hs(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ce(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(t)},u=new M0(r,s,i,c);return j0(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hs(new xr("auth-internal",e=>{const n=Lc(e.getProvider("auth").getImmediate());return(r=>new nI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(Uf,$f,rI(t)),rr(Uf,$f,"esm2017")}/**
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
 */const iI=5*60,oI=_g("authIdTokenMaxAge")||iI;let Bf=null;const aI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oI)return;const s=n==null?void 0:n.token;Bf!==s&&(Bf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lI(t=Tg()){const e=Pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=B0(t,{popupRedirectResolver:tI,persistence:[fT,eT,Jg]}),r=_g("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=aI(i.toString());X0(n,a,()=>a(n.currentUser)),J0(n,l=>a(l))}}const s=gg("auth");return s&&H0(n,`http://${s}`),n}function cI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}L0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sI("Browser");var jf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,y){function _(){}_.prototype=y.prototype,A.D=y.prototype,A.prototype=new _,A.prototype.constructor=A,A.C=function(I,S,T){for(var v=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)v[xe-2]=arguments[xe];return y.prototype[S].apply(I,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,y,_){_||(_=0);var I=Array(16);if(typeof y=="string")for(var S=0;16>S;++S)I[S]=y.charCodeAt(_++)|y.charCodeAt(_++)<<8|y.charCodeAt(_++)<<16|y.charCodeAt(_++)<<24;else for(S=0;16>S;++S)I[S]=y[_++]|y[_++]<<8|y[_++]<<16|y[_++]<<24;y=A.g[0],_=A.g[1],S=A.g[2];var T=A.g[3],v=y+(T^_&(S^T))+I[0]+3614090360&4294967295;y=_+(v<<7&4294967295|v>>>25),v=T+(S^y&(_^S))+I[1]+3905402710&4294967295,T=y+(v<<12&4294967295|v>>>20),v=S+(_^T&(y^_))+I[2]+606105819&4294967295,S=T+(v<<17&4294967295|v>>>15),v=_+(y^S&(T^y))+I[3]+3250441966&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(T^_&(S^T))+I[4]+4118548399&4294967295,y=_+(v<<7&4294967295|v>>>25),v=T+(S^y&(_^S))+I[5]+1200080426&4294967295,T=y+(v<<12&4294967295|v>>>20),v=S+(_^T&(y^_))+I[6]+2821735955&4294967295,S=T+(v<<17&4294967295|v>>>15),v=_+(y^S&(T^y))+I[7]+4249261313&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(T^_&(S^T))+I[8]+1770035416&4294967295,y=_+(v<<7&4294967295|v>>>25),v=T+(S^y&(_^S))+I[9]+2336552879&4294967295,T=y+(v<<12&4294967295|v>>>20),v=S+(_^T&(y^_))+I[10]+4294925233&4294967295,S=T+(v<<17&4294967295|v>>>15),v=_+(y^S&(T^y))+I[11]+2304563134&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(T^_&(S^T))+I[12]+1804603682&4294967295,y=_+(v<<7&4294967295|v>>>25),v=T+(S^y&(_^S))+I[13]+4254626195&4294967295,T=y+(v<<12&4294967295|v>>>20),v=S+(_^T&(y^_))+I[14]+2792965006&4294967295,S=T+(v<<17&4294967295|v>>>15),v=_+(y^S&(T^y))+I[15]+1236535329&4294967295,_=S+(v<<22&4294967295|v>>>10),v=y+(S^T&(_^S))+I[1]+4129170786&4294967295,y=_+(v<<5&4294967295|v>>>27),v=T+(_^S&(y^_))+I[6]+3225465664&4294967295,T=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(T^y))+I[11]+643717713&4294967295,S=T+(v<<14&4294967295|v>>>18),v=_+(T^y&(S^T))+I[0]+3921069994&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^T&(_^S))+I[5]+3593408605&4294967295,y=_+(v<<5&4294967295|v>>>27),v=T+(_^S&(y^_))+I[10]+38016083&4294967295,T=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(T^y))+I[15]+3634488961&4294967295,S=T+(v<<14&4294967295|v>>>18),v=_+(T^y&(S^T))+I[4]+3889429448&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^T&(_^S))+I[9]+568446438&4294967295,y=_+(v<<5&4294967295|v>>>27),v=T+(_^S&(y^_))+I[14]+3275163606&4294967295,T=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(T^y))+I[3]+4107603335&4294967295,S=T+(v<<14&4294967295|v>>>18),v=_+(T^y&(S^T))+I[8]+1163531501&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(S^T&(_^S))+I[13]+2850285829&4294967295,y=_+(v<<5&4294967295|v>>>27),v=T+(_^S&(y^_))+I[2]+4243563512&4294967295,T=y+(v<<9&4294967295|v>>>23),v=S+(y^_&(T^y))+I[7]+1735328473&4294967295,S=T+(v<<14&4294967295|v>>>18),v=_+(T^y&(S^T))+I[12]+2368359562&4294967295,_=S+(v<<20&4294967295|v>>>12),v=y+(_^S^T)+I[5]+4294588738&4294967295,y=_+(v<<4&4294967295|v>>>28),v=T+(y^_^S)+I[8]+2272392833&4294967295,T=y+(v<<11&4294967295|v>>>21),v=S+(T^y^_)+I[11]+1839030562&4294967295,S=T+(v<<16&4294967295|v>>>16),v=_+(S^T^y)+I[14]+4259657740&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^T)+I[1]+2763975236&4294967295,y=_+(v<<4&4294967295|v>>>28),v=T+(y^_^S)+I[4]+1272893353&4294967295,T=y+(v<<11&4294967295|v>>>21),v=S+(T^y^_)+I[7]+4139469664&4294967295,S=T+(v<<16&4294967295|v>>>16),v=_+(S^T^y)+I[10]+3200236656&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^T)+I[13]+681279174&4294967295,y=_+(v<<4&4294967295|v>>>28),v=T+(y^_^S)+I[0]+3936430074&4294967295,T=y+(v<<11&4294967295|v>>>21),v=S+(T^y^_)+I[3]+3572445317&4294967295,S=T+(v<<16&4294967295|v>>>16),v=_+(S^T^y)+I[6]+76029189&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(_^S^T)+I[9]+3654602809&4294967295,y=_+(v<<4&4294967295|v>>>28),v=T+(y^_^S)+I[12]+3873151461&4294967295,T=y+(v<<11&4294967295|v>>>21),v=S+(T^y^_)+I[15]+530742520&4294967295,S=T+(v<<16&4294967295|v>>>16),v=_+(S^T^y)+I[2]+3299628645&4294967295,_=S+(v<<23&4294967295|v>>>9),v=y+(S^(_|~T))+I[0]+4096336452&4294967295,y=_+(v<<6&4294967295|v>>>26),v=T+(_^(y|~S))+I[7]+1126891415&4294967295,T=y+(v<<10&4294967295|v>>>22),v=S+(y^(T|~_))+I[14]+2878612391&4294967295,S=T+(v<<15&4294967295|v>>>17),v=_+(T^(S|~y))+I[5]+4237533241&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~T))+I[12]+1700485571&4294967295,y=_+(v<<6&4294967295|v>>>26),v=T+(_^(y|~S))+I[3]+2399980690&4294967295,T=y+(v<<10&4294967295|v>>>22),v=S+(y^(T|~_))+I[10]+4293915773&4294967295,S=T+(v<<15&4294967295|v>>>17),v=_+(T^(S|~y))+I[1]+2240044497&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~T))+I[8]+1873313359&4294967295,y=_+(v<<6&4294967295|v>>>26),v=T+(_^(y|~S))+I[15]+4264355552&4294967295,T=y+(v<<10&4294967295|v>>>22),v=S+(y^(T|~_))+I[6]+2734768916&4294967295,S=T+(v<<15&4294967295|v>>>17),v=_+(T^(S|~y))+I[13]+1309151649&4294967295,_=S+(v<<21&4294967295|v>>>11),v=y+(S^(_|~T))+I[4]+4149444226&4294967295,y=_+(v<<6&4294967295|v>>>26),v=T+(_^(y|~S))+I[11]+3174756917&4294967295,T=y+(v<<10&4294967295|v>>>22),v=S+(y^(T|~_))+I[2]+718787259&4294967295,S=T+(v<<15&4294967295|v>>>17),v=_+(T^(S|~y))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+y&4294967295,A.g[1]=A.g[1]+(S+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+S&4294967295,A.g[3]=A.g[3]+T&4294967295}r.prototype.u=function(A,y){y===void 0&&(y=A.length);for(var _=y-this.blockSize,I=this.B,S=this.h,T=0;T<y;){if(S==0)for(;T<=_;)s(this,A,T),T+=this.blockSize;if(typeof A=="string"){for(;T<y;)if(I[S++]=A.charCodeAt(T++),S==this.blockSize){s(this,I),S=0;break}}else for(;T<y;)if(I[S++]=A[T++],S==this.blockSize){s(this,I),S=0;break}}this.h=S,this.o+=y},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var y=1;y<A.length-8;++y)A[y]=0;var _=8*this.o;for(y=A.length-8;y<A.length;++y)A[y]=_&255,_/=256;for(this.u(A),A=Array(16),y=_=0;4>y;++y)for(var I=0;32>I;I+=8)A[_++]=this.g[y]>>>I&255;return A};function i(A,y){var _=l;return Object.prototype.hasOwnProperty.call(_,A)?_[A]:_[A]=y(A)}function a(A,y){this.h=y;for(var _=[],I=!0,S=A.length-1;0<=S;S--){var T=A[S]|0;I&&T==y||(_[S]=T,I=!1)}this.g=_}var l={};function c(A){return-128<=A&&128>A?i(A,function(y){return new a([y|0],0>y?-1:0)}):new a([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return F(u(-A));for(var y=[],_=1,I=0;A>=_;I++)y[I]=A/_|0,_*=4294967296;return new a(y,0)}function f(A,y){if(A.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(A.charAt(0)=="-")return F(f(A.substring(1),y));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=u(Math.pow(y,8)),I=p,S=0;S<A.length;S+=8){var T=Math.min(8,A.length-S),v=parseInt(A.substring(S,S+T),y);8>T?(T=u(Math.pow(y,T)),I=I.j(T).add(u(v))):(I=I.j(_),I=I.add(u(v)))}return I}var p=c(0),g=c(1),E=c(16777216);t=a.prototype,t.m=function(){if(x(this))return-F(this).m();for(var A=0,y=1,_=0;_<this.g.length;_++){var I=this.i(_);A+=(0<=I?I:4294967296+I)*y,y*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(R(this))return"0";if(x(this))return"-"+F(this).toString(A);for(var y=u(Math.pow(A,6)),_=this,I="";;){var S=z(_,y).g;_=H(_,S.j(y));var T=((0<_.g.length?_.g[0]:_.h)>>>0).toString(A);if(_=S,R(_))return T+I;for(;6>T.length;)T="0"+T;I=T+I}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function R(A){if(A.h!=0)return!1;for(var y=0;y<A.g.length;y++)if(A.g[y]!=0)return!1;return!0}function x(A){return A.h==-1}t.l=function(A){return A=H(this,A),x(A)?-1:R(A)?0:1};function F(A){for(var y=A.g.length,_=[],I=0;I<y;I++)_[I]=~A.g[I];return new a(_,~A.h).add(g)}t.abs=function(){return x(this)?F(this):this},t.add=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],I=0,S=0;S<=y;S++){var T=I+(this.i(S)&65535)+(A.i(S)&65535),v=(T>>>16)+(this.i(S)>>>16)+(A.i(S)>>>16);I=v>>>16,T&=65535,v&=65535,_[S]=v<<16|T}return new a(_,_[_.length-1]&-2147483648?-1:0)};function H(A,y){return A.add(F(y))}t.j=function(A){if(R(this)||R(A))return p;if(x(this))return x(A)?F(this).j(F(A)):F(F(this).j(A));if(x(A))return F(this.j(F(A)));if(0>this.l(E)&&0>A.l(E))return u(this.m()*A.m());for(var y=this.g.length+A.g.length,_=[],I=0;I<2*y;I++)_[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<A.g.length;S++){var T=this.i(I)>>>16,v=this.i(I)&65535,xe=A.i(S)>>>16,Je=A.i(S)&65535;_[2*I+2*S]+=v*Je,U(_,2*I+2*S),_[2*I+2*S+1]+=T*Je,U(_,2*I+2*S+1),_[2*I+2*S+1]+=v*xe,U(_,2*I+2*S+1),_[2*I+2*S+2]+=T*xe,U(_,2*I+2*S+2)}for(I=0;I<y;I++)_[I]=_[2*I+1]<<16|_[2*I];for(I=y;I<2*y;I++)_[I]=0;return new a(_,0)};function U(A,y){for(;(A[y]&65535)!=A[y];)A[y+1]+=A[y]>>>16,A[y]&=65535,y++}function j(A,y){this.g=A,this.h=y}function z(A,y){if(R(y))throw Error("division by zero");if(R(A))return new j(p,p);if(x(A))return y=z(F(A),y),new j(F(y.g),F(y.h));if(x(y))return y=z(A,F(y)),new j(F(y.g),y.h);if(30<A.g.length){if(x(A)||x(y))throw Error("slowDivide_ only works with positive integers.");for(var _=g,I=y;0>=I.l(A);)_=le(_),I=le(I);var S=se(_,1),T=se(I,1);for(I=se(I,2),_=se(_,2);!R(I);){var v=T.add(I);0>=v.l(A)&&(S=S.add(_),T=v),I=se(I,1),_=se(_,1)}return y=H(A,S.j(y)),new j(S,y)}for(S=p;0<=A.l(y);){for(_=Math.max(1,Math.floor(A.m()/y.m())),I=Math.ceil(Math.log(_)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),T=u(_),v=T.j(y);x(v)||0<v.l(A);)_-=I,T=u(_),v=T.j(y);R(T)&&(T=g),S=S.add(T),A=H(A,v)}return new j(S,A)}t.A=function(A){return z(this,A).h},t.and=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)&A.i(I);return new a(_,this.h&A.h)},t.or=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)|A.i(I);return new a(_,this.h|A.h)},t.xor=function(A){for(var y=Math.max(this.g.length,A.g.length),_=[],I=0;I<y;I++)_[I]=this.i(I)^A.i(I);return new a(_,this.h^A.h)};function le(A){for(var y=A.g.length+1,_=[],I=0;I<y;I++)_[I]=A.i(I)<<1|A.i(I-1)>>>31;return new a(_,A.h)}function se(A,y){var _=y>>5;y%=32;for(var I=A.g.length-_,S=[],T=0;T<I;T++)S[T]=0<y?A.i(T+_)>>>y|A.i(T+_+1)<<32-y:A.i(T+_);return new a(S,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=f,Bc=a}).apply(typeof jf<"u"?jf:typeof self<"u"?self:typeof window<"u"?window:{});var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rm,Hs,sm,To,Gl,im,om,am;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,d){return o==Array.prototype||o==Object.prototype||(o[h]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof oo=="object"&&oo];for(var h=0;h<o.length;++h){var d=o[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,h){if(h)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var C=o[m];if(!(C in d))break e;d=d[C]}o=o[o.length-1],m=d[o],h=h(m),h!=m&&h!=null&&e(d,o,{configurable:!0,writable:!0,value:h})}}function i(o,h){o instanceof String&&(o+="");var d=0,m=!1,C={next:function(){if(!m&&d<o.length){var P=d++;return{value:h(P,o[P]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function u(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function f(o,h,d){return o.call.apply(o.bind,arguments)}function p(o,h,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),o.apply(h,C)}}return function(){return o.apply(h,arguments)}}function g(o,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function E(o,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function R(o,h){function d(){}d.prototype=h.prototype,o.aa=h.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,C,P){for(var W=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)W[Oe-2]=arguments[Oe];return h.prototype[C].apply(m,W)}}function x(o){const h=o.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=o[m];return d}return[]}function F(o,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const C=o.length||0,P=m.length||0;o.length=C+P;for(let W=0;W<P;W++)o[C+W]=m[W]}else o.push(m)}}class H{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function U(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var le=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function se(o,h,d){for(const m in o)h.call(d,o[m],m,o)}function A(o,h){for(const d in o)h.call(void 0,o[d],d,o)}function y(o){const h={};for(const d in o)h[d]=o[d];return h}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,h){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)o[d]=m[d];for(let P=0;P<_.length;P++)d=_[P],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function S(o){var h=1;o=o.split(":");const d=[];for(;0<h&&o.length;)d.push(o.shift()),h--;return o.length&&d.push(o.join(":")),d}function T(o){l.setTimeout(()=>{throw o},0)}function v(){var o=Mt;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class xe{constructor(){this.h=this.g=null}add(h,d){const m=Je.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Je=new H(()=>new $e,o=>o.reset());class $e{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,me=!1,Mt=new xe,Wt=()=>{const o=l.Promise.resolve(void 0);ye=()=>{o.then(Bt)}};var Bt=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(d){T(d)}var h=Je;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}me=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Fn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return o}();function rn(o,h){if(je.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(le){e:{try{z(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else d=="mouseover"?h=o.fromElement:d=="mouseout"&&(h=o.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ct[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&rn.aa.h.call(this)}}R(rn,je);var Ct={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(o,h,d,m,C){this.listener=o,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=C,this.key=++X,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ie(o){this.src=o,this.g={},this.h=0}Ie.prototype.add=function(o,h,d,m,C){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var W=b(o,h,m,C);return-1<W?(h=o[W],d||(h.fa=!1)):(h=new J(h,this.src,P,!!m,C),h.fa=d,o.push(h)),h};function w(o,h){var d=h.type;if(d in o.g){var m=o.g[d],C=Array.prototype.indexOf.call(m,h,void 0),P;(P=0<=C)&&Array.prototype.splice.call(m,C,1),P&&(Y(h),o.g[d].length==0&&(delete o.g[d],o.h--))}}function b(o,h,d,m){for(var C=0;C<o.length;++C){var P=o[C];if(!P.da&&P.listener==h&&P.capture==!!d&&P.ha==m)return C}return-1}var k="closure_lm_"+(1e6*Math.random()|0),D={};function M(o,h,d,m,C){if(Array.isArray(h)){for(var P=0;P<h.length;P++)M(o,h[P],d,m,C);return null}return d=ae(d),o&&o[O]?o.K(h,d,u(m)?!!m.capture:!1,C):N(o,h,d,!1,m,C)}function N(o,h,d,m,C,P){if(!h)throw Error("Invalid event type");var W=u(C)?!!C.capture:!!C,Oe=K(o);if(Oe||(o[k]=Oe=new Ie(o)),d=Oe.add(h,d,m,W,P),d.proxy)return d;if(m=Q(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Fn||(C=W),C===void 0&&(C=!1),o.addEventListener(h.toString(),m,C);else if(o.attachEvent)o.attachEvent($(h.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function o(d){return h.call(o.src,o.listener,d)}const h=te;return o}function G(o,h,d,m,C){if(Array.isArray(h))for(var P=0;P<h.length;P++)G(o,h[P],d,m,C);else m=u(m)?!!m.capture:!!m,d=ae(d),o&&o[O]?(o=o.i,h=String(h).toString(),h in o.g&&(P=o.g[h],d=b(P,d,m,C),-1<d&&(Y(P[d]),Array.prototype.splice.call(P,d,1),P.length==0&&(delete o.g[h],o.h--)))):o&&(o=K(o))&&(h=o.g[h.toString()],o=-1,h&&(o=b(h,d,m,C)),(d=-1<o?h[o]:null)&&q(d))}function q(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[O])w(h.i,o);else{var d=o.type,m=o.proxy;h.removeEventListener?h.removeEventListener(d,m,o.capture):h.detachEvent?h.detachEvent($(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=K(h))?(w(d,o),d.h==0&&(d.src=null,h[k]=null)):Y(o)}}}function $(o){return o in D?D[o]:D[o]="on"+o}function te(o,h){if(o.da)o=!0;else{h=new rn(h,this);var d=o.listener,m=o.ha||o.src;o.fa&&q(o),o=d.call(m,h)}return o}function K(o){return o=o[k],o instanceof Ie?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(h){return o.handleEvent(h)}),o[ee])}function re(){Be.call(this),this.i=new Ie(this),this.M=this,this.F=null}R(re,Be),re.prototype[O]=!0,re.prototype.removeEventListener=function(o,h,d,m){G(this,o,h,d,m)};function de(o,h){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=h.type||h,typeof h=="string")h=new je(h,o);else if(h instanceof je)h.target=h.target||o;else{var C=h;h=new je(m,o),I(h,C)}if(C=!0,d)for(var P=d.length-1;0<=P;P--){var W=h.g=d[P];C=ve(W,m,!0,h)&&C}if(W=h.g=o,C=ve(W,m,!0,h)&&C,C=ve(W,m,!1,h)&&C,d)for(P=0;P<d.length;P++)W=h.g=d[P],C=ve(W,m,!1,h)&&C}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var d=o.g[h],m=0;m<d.length;m++)Y(d[m]);delete o.g[h],o.h--}}this.F=null},re.prototype.K=function(o,h,d,m){return this.i.add(String(o),h,!1,d,m)},re.prototype.L=function(o,h,d,m){return this.i.add(String(o),h,!0,d,m)};function ve(o,h,d,m){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,P=0;P<h.length;++P){var W=h[P];if(W&&!W.da&&W.capture==d){var Oe=W.listener,it=W.ha||W.src;W.fa&&w(o.i,W),C=Oe.call(it,m)!==!1&&C}}return C&&!m.defaultPrevented}function pt(o,h,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(o,h||0)}function rt(o){o.g=pt(()=>{o.g=null,o.i&&(o.i=!1,rt(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class jt extends Be{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:rt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(o){Be.call(this),this.h=o,this.g={}}R(gt,Be);var Un=[];function Ts(o){se(o.g,function(h,d){this.g.hasOwnProperty(d)&&q(h)},o),o.g={}}gt.prototype.N=function(){gt.aa.N.call(this),Ts(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var st=l.JSON.stringify,Ht=l.JSON.parse,Ui=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Va(){}Va.prototype.h=null;function wu(o){return o.h||(o.h=o.i())}function bu(){}var Is={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ma(){je.call(this,"d")}R(Ma,je);function La(){je.call(this,"c")}R(La,je);var hr={},Tu=null;function $i(){return Tu=Tu||new re}hr.La="serverreachability";function Iu(o){je.call(this,hr.La,o)}R(Iu,je);function As(o){const h=$i();de(h,new Iu(h))}hr.STAT_EVENT="statevent";function Au(o,h){je.call(this,hr.STAT_EVENT,o),this.stat=h}R(Au,je);function It(o){const h=$i();de(h,new Au(h,o))}hr.Ma="timingevent";function Su(o,h){je.call(this,hr.Ma,o),this.size=h}R(Su,je);function Ss(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},h)}function Rs(){this.g=!0}Rs.prototype.xa=function(){this.g=!1};function w_(o,h,d,m,C,P){o.info(function(){if(o.g)if(P)for(var W="",Oe=P.split("&"),it=0;it<Oe.length;it++){var Ae=Oe[it].split("=");if(1<Ae.length){var mt=Ae[0];Ae=Ae[1];var _t=mt.split("_");W=2<=_t.length&&_t[1]=="type"?W+(mt+"="+Ae+"&"):W+(mt+"=redacted&")}}else W=null;else W=P;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+h+`
`+d+`
`+W})}function b_(o,h,d,m,C,P,W){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+h+`
`+d+`
`+P+" "+W})}function Hr(o,h,d,m){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+I_(o,d)+(m?" "+m:"")})}function T_(o,h){o.info(function(){return"TIMEOUT: "+h})}Rs.prototype.info=function(){};function I_(o,h){if(!o.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var P=C[0];if(P!="noop"&&P!="stop"&&P!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return st(d)}catch{return h}}var Bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ru={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fa;function ji(){}R(ji,Va),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},Fa=new ji;function $n(o,h,d,m){this.j=o,this.i=h,this.l=d,this.R=m||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ku}function ku(){this.i=null,this.g="",this.h=!1}var Cu={},Ua={};function $a(o,h,d){o.L=1,o.v=Gi(_n(h)),o.m=d,o.P=!0,Pu(o,null)}function Pu(o,h){o.F=Date.now(),Hi(o),o.A=_n(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),zu(d.i,"t",m),o.C=0,d=o.j.J,o.h=new ku,o.g=lh(o.j,d?h:null,!o.m),0<o.O&&(o.M=new jt(g(o.Y,o,o.g),o.O)),h=o.U,d=o.g,m=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(Un[0]=C.toString()),C=Un);for(var P=0;P<C.length;P++){var W=M(d,C[P],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),As(),w_(o.i,o.u,o.A,o.l,o.R,o.m)}$n.prototype.ca=function(o){o=o.target;const h=this.M;h&&yn(o)==3?h.j():this.Y(o)},$n.prototype.Y=function(o){try{if(o==this.g)e:{const _t=yn(this.g);var h=this.g.Ba();const Gr=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Xu(this.g)))){this.J||_t!=4||h==7||(h==8||0>=Gr?As(3):As(2)),Ba(this);var d=this.g.Z();this.X=d;t:if(xu(this)){var m=Xu(this.g);o="";var C=m.length,P=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fr(this),ks(this);var W="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,o+=this.h.i.decode(m[h],{stream:!(P&&h==C-1)});m.length=0,this.h.g+=o,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,b_(this.i,this.u,this.A,this.l,this.R,_t,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,it=this.g;if((Oe=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Oe)){var Ae=Oe;break t}}Ae=null}if(d=Ae)Hr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ja(this,d);else{this.o=!1,this.s=3,It(12),fr(this),ks(this);break e}}if(this.P){d=!0;let Kt;for(;!this.J&&this.C<W.length;)if(Kt=A_(this,W),Kt==Ua){_t==4&&(this.s=4,It(14),d=!1),Hr(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==Cu){this.s=4,It(15),Hr(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else Hr(this.i,this.l,Kt,null),ja(this,Kt);if(xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||W.length!=0||this.h.h||(this.s=1,It(16),d=!1),this.o=this.o&&d,!d)Hr(this.i,this.l,W,"[Invalid Chunked Response]"),fr(this),ks(this);else if(0<W.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Ka(mt),mt.M=!0,It(11))}}else Hr(this.i,this.l,W,null),ja(this,W);_t==4&&fr(this),this.o&&!this.J&&(_t==4?sh(this.j,this):(this.o=!1,Hi(this)))}else j_(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),fr(this),ks(this)}}}catch{}finally{}};function xu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function A_(o,h){var d=o.C,m=h.indexOf(`
`,d);return m==-1?Ua:(d=Number(h.substring(d,m)),isNaN(d)?Cu:(m+=1,m+d>h.length?Ua:(h=h.slice(m,m+d),o.C=m+d,h)))}$n.prototype.cancel=function(){this.J=!0,fr(this)};function Hi(o){o.S=Date.now()+o.I,Ou(o,o.I)}function Ou(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ss(g(o.ba,o),h)}function Ba(o){o.B&&(l.clearTimeout(o.B),o.B=null)}$n.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(T_(this.i,this.A),this.L!=2&&(As(),It(17)),fr(this),this.s=2,ks(this)):Ou(this,this.S-o)};function ks(o){o.j.G==0||o.J||sh(o.j,o)}function fr(o){Ba(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,Ts(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function ja(o,h){try{var d=o.j;if(d.G!=0&&(d.g==o||Ha(d.h,o))){if(!o.K&&Ha(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Yi(d),Ji(d);else break e;Wa(d),It(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ss(g(d.Za,d),6e3));if(1>=Vu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else pr(d,11)}else if((o.K||d.g==o)&&Yi(d),!U(h))for(C=d.Da.g.parse(h),h=0;h<C.length;h++){let Ae=C[h];if(d.T=Ae[0],Ae=Ae[1],d.G==2)if(Ae[0]=="c"){d.K=Ae[1],d.ia=Ae[2];const mt=Ae[3];mt!=null&&(d.la=mt,d.j.info("VER="+d.la));const _t=Ae[4];_t!=null&&(d.Aa=_t,d.j.info("SVER="+d.Aa));const Gr=Ae[5];Gr!=null&&typeof Gr=="number"&&0<Gr&&(m=1.5*Gr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Kt=o.g;if(Kt){const eo=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var P=m.h;P.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(za(P,P.h),P.h=null))}if(m.D){const Qa=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Qa&&(m.ya=Qa,Le(m.I,m.D,Qa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var W=o;if(m.qa=ah(m,m.J?m.ia:null,m.W),W.K){Mu(m.h,W);var Oe=W,it=m.L;it&&(Oe.I=it),Oe.B&&(Ba(Oe),Hi(Oe)),m.g=W}else nh(m);0<d.i.length&&Xi(d)}else Ae[0]!="stop"&&Ae[0]!="close"||pr(d,7);else d.G==3&&(Ae[0]=="stop"||Ae[0]=="close"?Ae[0]=="stop"?pr(d,7):Ga(d):Ae[0]!="noop"&&d.l&&d.l.ta(Ae),d.v=0)}}As(4)}catch{}}var S_=class{constructor(o,h){this.g=o,this.map=h}};function Du(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Vu(o){return o.h?1:o.g?o.g.size:0}function Ha(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function za(o,h){o.g?o.g.add(h):o.h=h}function Mu(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Du.prototype.cancel=function(){if(this.i=Lu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Lu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const d of o.g.values())h=h.concat(d.D);return h}return x(o.i)}function R_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var h=[],d=o.length,m=0;m<d;m++)h.push(o[m]);return h}h=[],d=0;for(m in o)h[d++]=o[m];return h}function k_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var h=[];o=o.length;for(var d=0;d<o;d++)h.push(d);return h}h=[],d=0;for(const m in o)h[d++]=m;return h}}}function Fu(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var d=k_(o),m=R_(o),C=m.length,P=0;P<C;P++)h.call(void 0,m[P],d&&d[P],o)}var Uu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function C_(o,h){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),C=null;if(0<=m){var P=o[d].substring(0,m);C=o[d].substring(m+1)}else P=o[d];h(P,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function dr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof dr){this.h=o.h,zi(this,o.j),this.o=o.o,this.g=o.g,qi(this,o.s),this.l=o.l;var h=o.i,d=new xs;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),$u(this,d),this.m=o.m}else o&&(h=String(o).match(Uu))?(this.h=!1,zi(this,h[1]||"",!0),this.o=Cs(h[2]||""),this.g=Cs(h[3]||"",!0),qi(this,h[4]),this.l=Cs(h[5]||"",!0),$u(this,h[6]||"",!0),this.m=Cs(h[7]||"")):(this.h=!1,this.i=new xs(null,this.h))}dr.prototype.toString=function(){var o=[],h=this.j;h&&o.push(Ps(h,Bu,!0),":");var d=this.g;return(d||h=="file")&&(o.push("//"),(h=this.o)&&o.push(Ps(h,Bu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Ps(d,d.charAt(0)=="/"?O_:x_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Ps(d,N_)),o.join("")};function _n(o){return new dr(o)}function zi(o,h,d){o.j=d?Cs(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function qi(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function $u(o,h,d){h instanceof xs?(o.i=h,V_(o.i,o.h)):(d||(h=Ps(h,D_)),o.i=new xs(h,o.h))}function Le(o,h,d){o.i.set(h,d)}function Gi(o){return Le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Cs(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Ps(o,h,d){return typeof o=="string"?(o=encodeURI(o).replace(h,P_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function P_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Bu=/[#\/\?@]/g,x_=/[#\?:]/g,O_=/[#\?]/g,D_=/[#\?@]/g,N_=/#/g;function xs(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function Bn(o){o.g||(o.g=new Map,o.h=0,o.i&&C_(o.i,function(h,d){o.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=xs.prototype,t.add=function(o,h){Bn(this),this.i=null,o=zr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(h),this.h+=1,this};function ju(o,h){Bn(o),h=zr(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Hu(o,h){return Bn(o),h=zr(o,h),o.g.has(h)}t.forEach=function(o,h){Bn(this),this.g.forEach(function(d,m){d.forEach(function(C){o.call(h,C,m,this)},this)},this)},t.na=function(){Bn(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const C=o[m];for(let P=0;P<C.length;P++)d.push(h[m])}return d},t.V=function(o){Bn(this);let h=[];if(typeof o=="string")Hu(this,o)&&(h=h.concat(this.g.get(zr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)h=h.concat(o[d])}return h},t.set=function(o,h){return Bn(this),this.i=null,o=zr(this,o),Hu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},t.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function zu(o,h,d){ju(o,h),0<d.length&&(o.i=null,o.g.set(zr(o,h),x(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const P=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var C=P;W[m]!==""&&(C+="="+encodeURIComponent(String(W[m]))),o.push(C)}}return this.i=o.join("&")};function zr(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function V_(o,h){h&&!o.j&&(Bn(o),o.i=null,o.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(ju(this,m),zu(this,C,d))},o)),o.j=h}function M_(o,h){const d=new Rs;if(l.Image){const m=new Image;m.onload=E(jn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=E(jn,d,"TestLoadImage: error",!1,h,m),m.onabort=E(jn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=E(jn,d,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else h(!1)}function L_(o,h){const d=new Rs,m=new AbortController,C=setTimeout(()=>{m.abort(),jn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:m.signal}).then(P=>{clearTimeout(C),P.ok?jn(d,"TestPingServer: ok",!0,h):jn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),jn(d,"TestPingServer: error",!1,h)})}function jn(o,h,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function F_(){this.g=new Ui}function U_(o,h,d){const m=d||"";try{Fu(o,function(C,P){let W=C;u(C)&&(W=st(C)),h.push(m+P+"="+encodeURIComponent(W))})}catch(C){throw h.push(m+"type="+encodeURIComponent("_badmap")),C}}function Wi(o){this.l=o.Ub||null,this.j=o.eb||!1}R(Wi,Va),Wi.prototype.g=function(){return new Ki(this.l,this.j)},Wi.prototype.i=function(o){return function(){return o}}({});function Ki(o,h){re.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ki,re),t=Ki.prototype,t.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,Ds(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Os(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ds(this)),this.g&&(this.readyState=3,Ds(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function qu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?Os(this):Ds(this),this.readyState==3&&qu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Os(this))},t.Qa=function(o){this.g&&(this.response=o,Os(this))},t.ga=function(){this.g&&Os(this)};function Os(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ds(o)}t.setRequestHeader=function(o,h){this.u.append(o,h)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=h.next();return o.join(`\r
`)};function Ds(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Gu(o){let h="";return se(o,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function qa(o,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Gu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Le(o,h,d))}function He(o){re.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(He,re);var $_=/^https?$/i,B_=["POST","PUT"];t=He.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fa.g(),this.v=this.o?wu(this.o):wu(Fa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(P){Wu(this,P);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const P of m.keys())d.set(P,m.get(P));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(P=>P.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(B_,h,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,W]of d)this.g.setRequestHeader(P,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ju(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Wu(this,P)}};function Wu(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,Ku(o),Qi(o)}function Ku(o){o.A||(o.A=!0,de(o,"complete"),de(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,de(this,"complete"),de(this,"abort"),Qi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qu(this):this.bb())},t.bb=function(){Qu(this)};function Qu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||yn(o)!=4||o.Z()!=2)){if(o.u&&yn(o)==4)pt(o.Ea,0,o);else if(de(o,"readystatechange"),yn(o)==4){o.h=!1;try{const W=o.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=W===0){var C=String(o.D).match(Uu)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!$_.test(C?C.toLowerCase():"")}d=m}if(d)de(o,"complete"),de(o,"success");else{o.m=6;try{var P=2<yn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Ku(o)}}finally{Qi(o)}}}}function Qi(o,h){if(o.g){Ju(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||de(o,"ready");try{d.onreadystatechange=m}catch{}}}function Ju(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function yn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),Ht(h)}};function Xu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function j_(o){const h={};o=(o.g&&2<=yn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(U(o[m]))continue;var d=S(o[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const P=h[C]||[];h[C]=P,P.push(d)}A(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ns(o,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||h}function Yu(o){this.Aa=0,this.i=[],this.j=new Rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ns("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ns("baseRetryDelayMs",5e3,o),this.cb=Ns("retryDelaySeedMs",1e4,o),this.Wa=Ns("forwardChannelMaxRetries",2,o),this.wa=Ns("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Du(o&&o.concurrentRequestLimit),this.Da=new F_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yu.prototype,t.la=8,t.G=1,t.connect=function(o,h,d,m){It(0),this.W=o,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=ah(this,null,this.W),Xi(this)};function Ga(o){if(Zu(o),o.G==3){var h=o.U++,d=_n(o.I);if(Le(d,"SID",o.K),Le(d,"RID",h),Le(d,"TYPE","terminate"),Vs(o,d),h=new $n(o,o.j,h),h.L=2,h.v=Gi(_n(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=lh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Hi(h)}oh(o)}function Ji(o){o.g&&(Ka(o),o.g.cancel(),o.g=null)}function Zu(o){Ji(o),o.u&&(l.clearTimeout(o.u),o.u=null),Yi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Xi(o){if(!Nu(o.h)&&!o.s){o.s=!0;var h=o.Ga;ye||Wt(),me||(ye(),me=!0),Mt.add(h,o),o.B=0}}function H_(o,h){return Vu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ss(g(o.Ga,o,h),ih(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new $n(this,this.j,o);let P=this.o;if(this.S&&(P?(P=y(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(C.H=P,P=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=th(this,C,h),d=_n(this.I),Le(d,"RID",o),Le(d,"CVER",22),this.D&&Le(d,"X-HTTP-Session-Id",this.D),Vs(this,d),P&&(this.O?h="headers="+encodeURIComponent(String(Gu(P)))+"&"+h:this.m&&qa(d,this.m,P)),za(this.h,C),this.Ua&&Le(d,"TYPE","init"),this.P?(Le(d,"$req",h),Le(d,"SID","null"),C.T=!0,$a(C,d,null)):$a(C,d,h),this.G=2}}else this.G==3&&(o?eh(this,o):this.i.length==0||Nu(this.h)||eh(this))};function eh(o,h){var d;h?d=h.l:d=o.U++;const m=_n(o.I);Le(m,"SID",o.K),Le(m,"RID",d),Le(m,"AID",o.T),Vs(o,m),o.m&&o.o&&qa(m,o.m,o.o),d=new $n(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),h&&(o.i=h.D.concat(o.i)),h=th(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),za(o.h,d),$a(d,m,h)}function Vs(o,h){o.H&&se(o.H,function(d,m){Le(h,m,d)}),o.l&&Fu({},function(d,m){Le(h,m,d)})}function th(o,h,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var C=o.i;let P=-1;for(;;){const W=["count="+d];P==-1?0<d?(P=C[0].g,W.push("ofs="+P)):P=0:W.push("ofs="+P);let Oe=!0;for(let it=0;it<d;it++){let Ae=C[it].g;const mt=C[it].map;if(Ae-=P,0>Ae)P=Math.max(0,C[it].g-100),Oe=!1;else try{U_(mt,W,"req"+Ae+"_")}catch{m&&m(mt)}}if(Oe){m=W.join("&");break e}}}return o=o.i.splice(0,d),h.D=o,m}function nh(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;ye||Wt(),me||(ye(),me=!0),Mt.add(h,o),o.v=0}}function Wa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ss(g(o.Fa,o),ih(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ss(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Ji(this),rh(this))};function Ka(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function rh(o){o.g=new $n(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=_n(o.qa);Le(h,"RID","rpc"),Le(h,"SID",o.K),Le(h,"AID",o.T),Le(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&Le(h,"TO",o.ja),Le(h,"TYPE","xmlhttp"),Vs(o,h),o.m&&o.o&&qa(h,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Gi(_n(h)),d.m=null,d.P=!0,Pu(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Ji(this),Wa(this),It(19))};function Yi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function sh(o,h){var d=null;if(o.g==h){Yi(o),Ka(o),o.g=null;var m=2}else if(Ha(o.h,h))d=h.D,Mu(o.h,h),m=1;else return;if(o.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var C=o.B;m=$i(),de(m,new Su(m,d)),Xi(o)}else nh(o);else if(C=h.s,C==3||C==0&&0<h.X||!(m==1&&H_(o,h)||m==2&&Wa(o)))switch(d&&0<d.length&&(h=o.h,h.i=h.i.concat(d)),C){case 1:pr(o,5);break;case 4:pr(o,10);break;case 3:pr(o,6);break;default:pr(o,2)}}}function ih(o,h){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*h}function pr(o,h){if(o.j.info("Error code "+h),h==2){var d=g(o.fb,o),m=o.Xa;const C=!m;m=new dr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||zi(m,"https"),Gi(m),C?M_(m.toString(),d):L_(m.toString(),d)}else It(2);o.G=0,o.l&&o.l.sa(h),oh(o),Zu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function oh(o){if(o.G=0,o.ka=[],o.l){const h=Lu(o.h);(h.length!=0||o.i.length!=0)&&(F(o.ka,h),F(o.ka,o.i),o.h.i.length=0,x(o.i),o.i.length=0),o.l.ra()}}function ah(o,h,d){var m=d instanceof dr?_n(d):new dr(d);if(m.g!="")h&&(m.g=h+"."+m.g),qi(m,m.s);else{var C=l.location;m=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var P=new dr(null);m&&zi(P,m),h&&(P.g=h),C&&qi(P,C),d&&(P.l=d),m=P}return d=o.D,h=o.ya,d&&h&&Le(m,d,h),Le(m,"VER",o.la),Vs(o,m),m}function lh(o,h,d){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new He(new Wi({eb:d})):new He(o.pa),h.Ha(o.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}t=ch.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Zi(){}Zi.prototype.g=function(o,h){return new Lt(o,h)};function Lt(o,h){re.call(this),this.g=new Yu(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!U(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!U(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new qr(this)}R(Lt,re),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Ga(this.g)},Lt.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=st(o),o=d);h.i.push(new S_(h.Ya++,o)),h.G==3&&Xi(h)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Ga(this.g),delete this.g,Lt.aa.N.call(this)};function uh(o){Ma.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const d in h){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}R(uh,Ma);function hh(){La.call(this),this.status=1}R(hh,La);function qr(o){this.g=o}R(qr,ch),qr.prototype.ua=function(){de(this.g,"a")},qr.prototype.ta=function(o){de(this.g,new uh(o))},qr.prototype.sa=function(o){de(this.g,new hh)},qr.prototype.ra=function(){de(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,am=function(){return new Zi},om=function(){return $i()},im=hr,Gl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bi.NO_ERROR=0,Bi.TIMEOUT=8,Bi.HTTP_ERROR=6,To=Bi,Ru.COMPLETE="complete",sm=Ru,bu.EventType=Is,Is.OPEN="a",Is.CLOSE="b",Is.ERROR="c",Is.MESSAGE="d",re.prototype.listen=re.prototype.K,Hs=bu,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,rm=He}).apply(typeof oo<"u"?oo:typeof self<"u"?self:typeof window<"u"?window:{});const Hf="@firebase/firestore",zf="4.7.16";/**
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
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let ws="11.8.1";/**
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
 */const Dr=new kc("@firebase/firestore");function Xr(){return Dr.logLevel}function Z(t,...e){if(Dr.logLevel<=_e.DEBUG){const n=e.map(jc);Dr.debug(`Firestore (${ws}): ${t}`,...n)}}function Nr(t,...e){if(Dr.logLevel<=_e.ERROR){const n=e.map(jc);Dr.error(`Firestore (${ws}): ${t}`,...n)}}function Aa(t,...e){if(Dr.logLevel<=_e.WARN){const n=e.map(jc);Dr.warn(`Firestore (${ws}): ${t}`,...n)}}function jc(t){if(typeof t=="string")return t;try{/**
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
 */function ge(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,lm(t,r,n)}function lm(t,e,n){let r=`FIRESTORE (${ws}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Nr(r),new Error(r)}function ze(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||lm(e,s,r)}function Me(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Sr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class cm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class hI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fI{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ze(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string",31837,{l:r}),new cm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new vt(e)}}class dI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new dI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ze(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new qf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new qf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */class um{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=mI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function be(t,e){return t<e?-1:t>e?1:0}function Wl(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return be(r,s);{const i=_I(),a=yI(i.encode(Gf(t,n)),i.encode(Gf(e,n)));return a!==0?a:be(r,s)}}n+=r>65535?2:1}return be(t.length,e.length)}function Gf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function yI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return be(t[n],e[n]);return be(t.length,e.length)}function ds(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Wf=-62135596800,Kf=1e6;class tt{static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Kf);return new tt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ue(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ue(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Wf)throw new ue(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kf}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Wf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ue{static fromTimestamp(e){return new Ue(e)}static min(){return new Ue(new tt(0,0))}static max(){return new Ue(new tt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Qf="__name__";class ln{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ge(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ln.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ln?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=ln.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return be(e.length,n.length)}static compareSegments(e,n){const r=ln.isNumericId(e),s=ln.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?ln.extractNumericId(e).compare(ln.extractNumericId(n)):Wl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Bc.fromString(e.substring(4,e.length-2))}}class Qe extends ln{construct(e,n,r){return new Qe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ue(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Qe(n)}static emptyPath(){return new Qe([])}}const vI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ht extends ln{construct(e,n,r){return new ht(e,n,r)}static isValidIdentifier(e){return vI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ht.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qf}static keyField(){return new ht([Qf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ue(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ue(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ue(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new ue(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ht(n)}static emptyPath(){return new ht([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Qe.fromString(e))}static fromName(e){return new pe(Qe.fromString(e).popFirst(5))}static empty(){return new pe(Qe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Qe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Qe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Qe(e.slice()))}}/**
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
 */const mi=-1;function EI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ue.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new or(s,pe.empty(),e)}function wI(t){return new or(t.readTime,t.key,mi)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or(Ue.min(),pe.empty(),mi)}static max(){return new or(Ue.max(),pe.empty(),mi)}}function bI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=pe.comparator(t.documentKey,e.documentKey),n!==0?n:be(t.largestBatchId,e.largestBatchId))}/**
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
 */const TI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class II{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Hc(t){if(t.code!==B.FAILED_PRECONDITION||t.message!==TI)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{a[u]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function AI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Di(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class zc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}zc.le=-1;/**
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
 */const qc=-1;function Gc(t){return t==null}function qo(t){return t===0&&1/t==-1/0}function SI(t){return typeof t=="number"&&Number.isInteger(t)&&!qo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const hm="";function RI(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Jf(e)),e=kI(t.get(n),e);return Jf(e)}function kI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case hm:n+="";break;default:n+=i}}return n}function Jf(t){return t+hm+""}/**
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
 */function Xf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function bs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Vt{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Vt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Vt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ao(this.root,e,this.comparator,!0)}}class ao{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ft{constructor(e){this.comparator=e,this.data=new Vt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yf(this.data.getIterator())}getIteratorFrom(e){return new Yf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ft)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ft(this.comparator);return n.data=e,n}}class Yf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Yt{constructor(e){this.fields=e,e.sort(ht.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new ft(ht.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class gn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new CI("Invalid base64 string: "+i):i}}(e);return new gn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new gn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gn.EMPTY_BYTE_STRING=new gn("");const PI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(ze(!!t,39018),typeof t=="string"){let e=0;const n=PI.exec(t);if(ze(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:at(t.seconds),nanos:at(t.nanos)}}function at(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ps(t){return typeof t=="string"?gn.fromBase64String(t):gn.fromUint8Array(t)}/**
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
 */const dm="server_timestamp",pm="__type__",gm="__previous_value__",mm="__local_write_time__";function Wc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[pm])===null||n===void 0?void 0:n.stringValue)===dm}function Kc(t){const e=t.mapValue.fields[gm];return Wc(e)?Kc(e):e}function Go(t){const e=Vr(t.mapValue.fields[mm].timestampValue);return new tt(e.seconds,e.nanos)}/**
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
 */class xI{constructor(e,n,r,s,i,a,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const Wo="(default)";class Ko{constructor(e,n){this.projectId=e,this.database=n||Wo}static empty(){return new Ko("","")}get isDefaultDatabase(){return this.database===Wo}isEqual(e){return e instanceof Ko&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const _m="__type__",OI="__max__",lo={mapValue:{}},ym="__vector__",Kl="value";function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wc(t)?4:NI(t)?9007199254740991:DI(t)?10:11:ge(28295,{value:t})}function mn(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Go(t).isEqual(Go(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Vr(s.timestampValue),l=Vr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ps(s.bytesValue).isEqual(ps(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return at(s.geoPointValue.latitude)===at(i.geoPointValue.latitude)&&at(s.geoPointValue.longitude)===at(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return at(s.integerValue)===at(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=at(s.doubleValue),l=at(i.doubleValue);return a===l?qo(a)===qo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Xf(a)!==Xf(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!mn(a[c],l[c])))return!1;return!0}(t,e);default:return ge(52216,{left:t})}}function _i(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return be(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return be(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=at(i.integerValue||i.doubleValue),c=at(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Zf(t.timestampValue,e.timestampValue);case 4:return Zf(Go(t),Go(e));case 5:return Wl(t.stringValue,e.stringValue);case 6:return function(i,a){const l=ps(i),c=ps(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=be(l[u],c[u]);if(f!==0)return f}return be(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=be(at(i.latitude),at(a.latitude));return l!==0?l:be(at(i.longitude),at(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ed(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,u,f;const p=i.fields||{},g=a.fields||{},E=(l=p[Kl])===null||l===void 0?void 0:l.arrayValue,R=(c=g[Kl])===null||c===void 0?void 0:c.arrayValue,x=be(((u=E==null?void 0:E.values)===null||u===void 0?void 0:u.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return x!==0?x:ed(E,R)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===lo.mapValue&&a===lo.mapValue)return 0;if(i===lo.mapValue)return 1;if(a===lo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=a.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=Wl(c[p],f[p]);if(g!==0)return g;const E=gs(l[c[p]],u[f[p]]);if(E!==0)return E}return be(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ge(23264,{Pe:n})}}function Zf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return be(t,e);const n=Vr(t),r=Vr(e),s=be(n.seconds,r.seconds);return s!==0?s:be(n.nanos,r.nanos)}function ed(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=gs(n[s],r[s]);if(i)return i}return be(n.length,r.length)}function ms(t){return Ql(t)}function Ql(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ps(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return pe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ql(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ql(n.fields[a])}`;return s+"}"}(t.mapValue):ge(61005,{value:t})}function Io(t){switch(Mr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kc(t);return e?16+Io(e):16;case 5:return 2*t.stringValue.length;case 6:return ps(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Io(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return bs(r.fields,(i,a)=>{s+=i.length+Io(a)}),s}(t.mapValue);default:throw ge(13486,{value:t})}}function Jl(t){return!!t&&"integerValue"in t}function Qc(t){return!!t&&"arrayValue"in t}function Ao(t){return!!t&&"mapValue"in t}function DI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[_m])===null||n===void 0?void 0:n.stringValue)===ym}function ei(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return bs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ei(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ei(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===OI}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ei(n)}setAll(e){let n=ht.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=ei(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ao(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){bs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Jt(ei(this.value))}}function vm(t){const e=[];return bs(t.fields,(n,r)=>{const s=new ht([n]);if(Ao(r)){const i=vm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Yt(e)}/**
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
 */class Qt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Qt(e,0,Ue.min(),Ue.min(),Ue.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,s){return new Qt(e,1,n,Ue.min(),r,s,0)}static newNoDocument(e,n){return new Qt(e,2,n,Ue.min(),Ue.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new Qt(e,3,n,Ue.min(),Ue.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Qo{constructor(e,n){this.position=e,this.inclusive=n}}function td(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=pe.comparator(pe.fromName(a.referenceValue),n.key):r=gs(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function nd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Jo{constructor(e,n="asc"){this.field=e,this.dir=n}}function VI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Em{}class et extends Em{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LI(e,n,r):n==="array-contains"?new $I(e,r):n==="in"?new BI(e,r):n==="not-in"?new jI(e,r):n==="array-contains-any"?new HI(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FI(e,r):new UI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gs(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ar extends Em{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new ar(e,n)}matches(e){return wm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function wm(t){return t.op==="and"}function bm(t){return MI(t)&&wm(t)}function MI(t){for(const e of t.filters)if(e instanceof ar)return!1;return!0}function Xl(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+ms(t.value);if(bm(t))return t.filters.map(e=>Xl(e)).join(",");{const e=t.filters.map(n=>Xl(n)).join(",");return`${t.op}(${e})`}}function Tm(t,e){return t instanceof et?function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&mn(r.value,s.value)}(t,e):t instanceof ar?function(r,s){return s instanceof ar&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Tm(a,s.filters[l]),!0):!1}(t,e):void ge(19439)}function Im(t){return t instanceof et?function(n){return`${n.field.canonicalString()} ${n.op} ${ms(n.value)}`}(t):t instanceof ar?function(n){return n.op.toString()+" {"+n.getFilters().map(Im).join(" ,")+"}"}(t):"Filter"}class LI extends et{constructor(e,n,r){super(e,n,r),this.key=pe.fromName(r.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class FI extends et{constructor(e,n){super(e,"in",n),this.keys=Am("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UI extends et{constructor(e,n){super(e,"not-in",n),this.keys=Am("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Am(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class $I extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qc(n)&&_i(n.arrayValue,this.value)}}class BI extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_i(this.value.arrayValue,n)}}class jI extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(_i(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!_i(this.value.arrayValue,n)}}class HI extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>_i(this.value.arrayValue,r))}}/**
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
 */class zI{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Ie=null}}function rd(t,e=null,n=[],r=[],s=null,i=null,a=null){return new zI(t,e,n,r,s,i,a)}function Jc(t){const e=Me(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ms(r)).join(",")),e.Ie=n}return e.Ie}function Xc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nd(t.startAt,e.startAt)&&nd(t.endAt,e.endAt)}/**
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
 */class Sa{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function qI(t,e,n,r,s,i,a,l){return new Sa(t,e,n,r,s,i,a,l)}function GI(t){return new Sa(t)}function sd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WI(t){return t.collectionGroup!==null}function ti(t){const e=Me(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ft(ht.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Jo(i,r))}),n.has(ht.keyField().canonicalString())||e.Ee.push(new Jo(ht.keyField(),r))}return e.Ee}function Rr(t){const e=Me(t);return e.de||(e.de=KI(e,ti(t))),e.de}function KI(t,e){if(t.limitType==="F")return rd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Jo(s.field,i)});const n=t.endAt?new Qo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qo(t.startAt.position,t.startAt.inclusive):null;return rd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yl(t,e,n){return new Sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sm(t,e){return Xc(Rr(t),Rr(e))&&t.limitType===e.limitType}function Rm(t){return`${Jc(Rr(t))}|lt:${t.limitType}`}function Us(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Im(s)).join(", ")}]`),Gc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ms(s)).join(",")),`Target(${r})`}(Rr(t))}; limitType=${t.limitType})`}function Yc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):pe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ti(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const u=td(a,l,c);return a.inclusive?u<=0:u<0}(r.startAt,ti(r),s)||r.endAt&&!function(a,l,c){const u=td(a,l,c);return a.inclusive?u>=0:u>0}(r.endAt,ti(r),s))}(t,e)}function QI(t){return(e,n)=>{let r=!1;for(const s of ti(t)){const i=JI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function JI(t,e,n){const r=t.field.isKeyField()?pe.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),u=l.data.field(i);return c!==null&&u!==null?gs(c,u):ge(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge(19790,{direction:t.dir})}}/**
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
 */class $r{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fm(this.inner)}size(){return this.innerSize}}/**
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
 */const XI=new Vt(pe.comparator);function Xo(){return XI}const km=new Vt(pe.comparator);function co(...t){let e=km;for(const n of t)e=e.insert(n.key,n);return e}function Cm(t){let e=km;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Tr(){return ni()}function Pm(){return ni()}function ni(){return new $r(t=>t.toString(),(t,e)=>t.isEqual(e))}const YI=new Vt(pe.comparator),ZI=new ft(pe.comparator);function wt(...t){let e=ZI;for(const n of t)e=e.add(n);return e}const eA=new ft(be);function tA(){return eA}/**
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
 */function Zc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qo(e)?"-0":e}}function xm(t){return{integerValue:""+t}}function nA(t,e){return SI(e)?xm(e):Zc(t,e)}/**
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
 */class Ra{constructor(){this._=void 0}}function rA(t,e,n){return t instanceof yi?function(s,i){const a={fields:{[pm]:{stringValue:dm},[mm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wc(i)&&(i=Kc(i)),i&&(a.fields[gm]=i),{mapValue:a}}(n,e):t instanceof vi?Dm(t,e):t instanceof Ei?Nm(t,e):function(s,i){const a=Om(s,i),l=id(a)+id(s.Re);return Jl(a)&&Jl(s.Re)?xm(l):Zc(s.serializer,l)}(t,e)}function sA(t,e,n){return t instanceof vi?Dm(t,e):t instanceof Ei?Nm(t,e):n}function Om(t,e){return t instanceof Yo?function(r){return Jl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class yi extends Ra{}class vi extends Ra{constructor(e){super(),this.elements=e}}function Dm(t,e){const n=Vm(e);for(const r of t.elements)n.some(s=>mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ei extends Ra{constructor(e){super(),this.elements=e}}function Nm(t,e){let n=Vm(e);for(const r of t.elements)n=n.filter(s=>!mn(s,r));return{arrayValue:{values:n}}}class Yo extends Ra{constructor(e,n){super(),this.serializer=e,this.Re=n}}function id(t){return at(t.integerValue||t.doubleValue)}function Vm(t){return Qc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class iA{constructor(e,n){this.field=e,this.transform=n}}function oA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof vi&&s instanceof vi||r instanceof Ei&&s instanceof Ei?ds(r.elements,s.elements,mn):r instanceof Yo&&s instanceof Yo?mn(r.Re,s.Re):r instanceof yi&&s instanceof yi}(t.transform,e.transform)}class aA{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function So(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ka{}function Mm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fm(t.key,Cn.none()):new Ni(t.key,t.data,Cn.none());{const n=t.data,r=Jt.empty();let s=new ft(ht.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Br(t.key,r,new Yt(s.toArray()),Cn.none())}}function lA(t,e,n){t instanceof Ni?function(s,i,a){const l=s.value.clone(),c=ad(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Br?function(s,i,a){if(!So(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=ad(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Lm(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ri(t,e,n,r){return t instanceof Ni?function(i,a,l,c){if(!So(i.precondition,a))return l;const u=i.value.clone(),f=ld(i.fieldTransforms,c,a);return u.setAll(f),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Br?function(i,a,l,c){if(!So(i.precondition,a))return l;const u=ld(i.fieldTransforms,c,a),f=a.data;return f.setAll(Lm(i)),f.setAll(u),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return So(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function cA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Om(r.transform,s||null);i!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,i))}return n||null}function od(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ds(r,s,(i,a)=>oA(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ni extends ka{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Br extends ka{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ad(t,e,n){const r=new Map;ze(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,sA(a,l,n[s]))}return r}function ld(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,rA(i,a,e))}return r}class Fm extends ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uA extends ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ri(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Pm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Mm(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(Ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),wt())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(n,r)=>od(n,r))&&ds(this.baseMutations,e.baseMutations,(n,r)=>od(n,r))}}class eu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ze(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return YI}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new eu(e,n,r,s)}}/**
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
 */var Ke,Ee;function dA(t){switch(t){case B.OK:return ge(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ge(15467,{code:t})}}function pA(t){if(t===void 0)return Nr("GRPC error has no .code"),B.UNKNOWN;switch(t){case Ke.OK:return B.OK;case Ke.CANCELLED:return B.CANCELLED;case Ke.UNKNOWN:return B.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return B.INTERNAL;case Ke.UNAVAILABLE:return B.UNAVAILABLE;case Ke.UNAUTHENTICATED:return B.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case Ke.NOT_FOUND:return B.NOT_FOUND;case Ke.ALREADY_EXISTS:return B.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return B.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case Ke.ABORTED:return B.ABORTED;case Ke.OUT_OF_RANGE:return B.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return B.UNIMPLEMENTED;case Ke.DATA_LOSS:return B.DATA_LOSS;default:return ge(39323,{code:t})}}(Ee=Ke||(Ke={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Bc([4294967295,4294967295],0);class gA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _A(t,e){return Zl(t,e.toTimestamp())}function ls(t){return ze(!!t,49232),Ue.fromTimestamp(function(n){const r=Vr(n);return new tt(r.seconds,r.nanos)}(t))}function Um(t,e){return ec(t,e).canonicalString()}function ec(t,e){const n=function(s){return new Qe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function yA(t){const e=Qe.fromString(t);return ze(SA(e),10190,{key:e.toString()}),e}function tc(t,e){return Um(t.databaseId,e.path)}function vA(t){const e=yA(t);return e.length===4?Qe.emptyPath():wA(e)}function EA(t){return new Qe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wA(t){return ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function cd(t,e,n){return{name:tc(t,e),fields:n.value.mapValue.fields}}function bA(t,e){let n;if(e instanceof Ni)n={update:cd(t,e.key,e.value)};else if(e instanceof Fm)n={delete:tc(t,e.key)};else if(e instanceof Br)n={update:cd(t,e.key,e.data),updateMask:AA(e.fieldMask)};else{if(!(e instanceof uA))return ge(16599,{ft:e.type});n={verify:tc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof yi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof vi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Ei)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yo)return{fieldPath:a.field.canonicalString(),increment:l.Re};throw ge(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_A(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge(27497)}(t,e.precondition)),n}function TA(t,e){return t&&t.length>0?(ze(e!==void 0,14353),t.map(n=>function(s,i){let a=s.updateTime?ls(s.updateTime):ls(i);return a.isEqual(Ue.min())&&(a=ls(i)),new aA(a,s.transformResults||[])}(n,e))):[]}function IA(t){let e=vA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ze(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=$m(p);return g instanceof ar&&bm(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(R){return new Jo(Yr(R.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Gc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,E=p.values||[];return new Qo(E,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,E=p.values||[];return new Qo(E,g)}(n.endAt)),qI(e,s,a,i,l,"F",c,u)}function $m(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yr(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yr(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yr(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yr(n.unaryFilter.field);return et.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}}(t):t.fieldFilter!==void 0?function(n){return et.create(Yr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ar.create(n.compositeFilter.filters.map(r=>$m(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge(1026)}}(n.compositeFilter.op))}(t):ge(30097,{filter:t})}function Yr(t){return ht.fromServerFormat(t.fieldPath)}function AA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function SA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class RA{constructor(e){this.wt=e}}function kA(t){const e=IA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yl(e,e.limit,"L"):e}/**
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
 */class CA{constructor(){this.Cn=new PA}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(or.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class PA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ft(Qe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ft(Qe.comparator)).toArray()}}/**
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
 */const ud={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Bm=41943040;class Ot{static withCacheSize(e){return new Ot(e,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ot.DEFAULT_COLLECTION_PERCENTILE=10,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ot.DEFAULT=new Ot(Bm,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ot.DISABLED=new Ot(-1,0,0);/**
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
 */class _s{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new _s(0)}static lr(){return new _s(-1)}}/**
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
 */const hd="LruGarbageCollector",xA=1048576;function fd([t,e],[n,r]){const s=be(t,n);return s===0?be(e,r):s}class OA{constructor(e){this.Er=e,this.buffer=new ft(fd),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();fd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){Z(hd,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Di(n)?Z(hd,"Ignoring IndexedDB error during garbage collection: ",n):await Hc(n)}await this.mr(3e5)})}}class NA{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(zc.le);const r=new OA(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(ud)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ud):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,a,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Xr()<=_e.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function VA(t,e){return new NA(t,e)}/**
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
 */class MA{constructor(){this.changes=new $r(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class FA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ri(r.mutation,s,Yt.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,wt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=wt()){const s=Tr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=co();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,wt()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=Xo();const a=ni(),l=function(){return ni()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Br)?i=i.insert(u.key,u):f!==void 0?(a.set(u.key,f.mutation.getFieldMask()),ri(f.mutation,u,f.mutation.getFieldMask(),tt.now())):a.set(u.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>a.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new LA(f,(p=a.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ni();let s=new Vt((a,l)=>a-l),i=wt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Yt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||wt()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=Pm();f.forEach(g=>{if(!i.has(g)){const E=Mm(n.get(g),r.get(g));E!==null&&p.set(g,E),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,u,p))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return pe.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Tr());let l=mi,c=i;return a.next(u=>L.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,wt())).next(f=>({batchId:l,changes:Cm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new pe(n)).next(r=>{let s=co();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=co();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const u=function(p,g){return new Sa(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,u)=>{const f=u.getKey();a.get(f)===null&&(a=a.insert(f,Qt.newInvalidDocument(f)))});let l=co();return a.forEach((c,u)=>{const f=i.get(c);f!==void 0&&ri(f.mutation,u,Yt.empty(),tt.now()),Yc(n,u)&&(l=l.insert(c,u))}),l})}}/**
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
 */class UA{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return L.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ls(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:kA(s.bundledQuery),readTime:ls(s.readTime)}}(n)),L.resolve()}}/**
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
 */class $A{constructor(){this.overlays=new Vt(pe.comparator),this.Qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Tr();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Tr(),i=n.length+1,a=new pe(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Vt((u,f)=>u-f);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Tr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Tr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return L.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new fA(n,r));let i=this.Qr.get(n);i===void 0&&(i=wt(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class BA{constructor(){this.sessionToken=gn.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class tu{constructor(){this.$r=new ft(Ye.Ur),this.Kr=new ft(Ye.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new Ye(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new pe(new Qe([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new pe(new Qe([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=wt();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return pe.comparator(e.key,n.key)||be(e.Zr,n.Zr)}static Wr(e,n){return be(e.Zr,n.Zr)||pe.comparator(e.key,n.key)}}/**
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
 */class jA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new ft(Ye.Ur)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new hA(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Xr=this.Xr.add(new Ye(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,n){return L.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?qc:this.nr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],a=>{const l=this.ei(a.Zr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ft(be);return n.forEach(s=>{const i=new Ye(s,0),a=new Ye(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],l=>{r=r.add(l.Zr)})}),L.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;pe.isDocumentKey(i)||(i=i.child(""));const a=new Ye(new pe(i),0);let l=new ft(be);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},a),L.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ze(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return L.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new Ye(n,0),s=this.Xr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class HA{constructor(e){this.ii=e,this.docs=function(){return new Vt(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():Qt.newInvalidDocument(n))}getEntries(e,n){let r=Xo();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Qt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Xo();const a=n.path,l=new pe(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||bI(wI(f),r)<=0||(s.has(f.key)||Yc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ge(9500)}si(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zA(this)}getSize(e){return L.resolve(this.size)}}class zA extends MA{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class qA{constructor(e){this.persistence=e,this.oi=new $r(n=>Jc(n),Xc),this.lastRemoteSnapshotVersion=Ue.min(),this.highestTargetId=0,this._i=0,this.ai=new tu,this.targetCount=0,this.ui=_s.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),L.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new _s(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Tr(n),L.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.ai.containsKey(n))}}/**
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
 */class jm{constructor(e,n){this.ci={},this.overlays={},this.li=new zc(0),this.hi=!1,this.hi=!0,this.Pi=new BA,this.referenceDelegate=e(this),this.Ti=new qA(this),this.indexManager=new CA,this.remoteDocumentCache=function(s){return new HA(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new RA(n),this.Ei=new UA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $A,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new jA(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new GA(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return L.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class GA extends II{constructor(e){super(),this.currentSequenceNumber=e}}class nu{constructor(e){this.persistence=e,this.Vi=new tu,this.mi=null}static fi(e){return new nu(e)}get gi(){if(this.mi)return this.mi;throw ge(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.gi,r=>{const s=pe.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,Ue.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return L.or([()=>L.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Zo{constructor(e,n){this.persistence=e,this.yi=new $r(r=>RI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=VA(this,n)}static fi(e,n){return new Zo(e,n)}di(){}Ai(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return L.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,a=>this.Dr(e,a,n).next(l=>{l||(r++,i.removeEntry(a,Ue.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),L.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Io(e.data.value)),n}Dr(e,n,r){return L.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ru{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=wt(),s=wt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ru(e,n.fromCache,r,s)}}/**
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
 */class KA{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Gw()?8:AI(Tt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Ss(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new WA;return this.bs(e,n,a).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,a,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(Xr()<=_e.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Us(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),L.resolve()):(Xr()<=_e.DEBUG&&Z("QueryEngine","Query:",Us(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Xr()<=_e.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Us(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rr(n))):L.resolve())}ws(e,n){if(sd(n))return L.resolve(null);let r=Rr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Yl(n,null,"F"),r=Rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=wt(...i);return this.ys.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(n,l);return this.Cs(n,u,a,c.readTime)?this.ws(e,Yl(n,null,"F")):this.Fs(e,u,n,c)}))})))}Ss(e,n,r,s){return sd(n)||s.isEqual(Ue.min())?L.resolve(null):this.ys.getDocuments(e,r).next(i=>{const a=this.vs(n,i);return this.Cs(n,a,r,s)?L.resolve(null):(Xr()<=_e.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Us(n)),this.Fs(e,a,n,EI(s,mi)).next(l=>l))})}vs(e,n){let r=new ft(QI(e));return n.forEach((s,i)=>{Yc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,n,r){return Xr()<=_e.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Us(n)),this.ys.getDocumentsMatchingQuery(e,n,or.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const QA="LocalStore";class JA{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Vt(be),this.Os=new $r(i=>Jc(i),Xc),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FA(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function XA(t,e,n,r){return new JA(t,e,n,r)}async function Hm(t,e){const n=Me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=wt();for(const u of s){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:a,addedBatchIds:l}))})})}function YA(t,e){const n=Me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,g=p.keys();let E=L.resolve();return g.forEach(R=>{E=E.next(()=>f.getEntry(c,R)).next(x=>{const F=u.docVersions.get(R);ze(F!==null,48541),x.version.compareTo(F)<0&&(p.applyToRemoteDocument(x,u),x.isValidDocument()&&(x.setReadTime(u.commitVersion),f.addEntry(x)))})}),E.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=wt();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ZA(t){const e=Me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function e1(t,e){const n=Me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=qc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class dd{constructor(){this.activeTargetIds=tA()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class t1{constructor(){this.xo=new dd,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new dd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class n1{No(e){}shutdown(){}}/**
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
 */const pd="ConnectivityMonitor";class gd{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){Z(pd,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){Z(pd,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let uo=null;function nc(){return uo===null?uo=function(){return 268435456+Math.round(2147483648*Math.random())}():uo++,"0x"+uo.toString(16)}/**
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
 */const yl="RestConnection",r1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class s1{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Wo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const a=nc(),l=this.jo(e,n.toUriEncodedString());Z(yl,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),f=Ri(u);return this.Jo(e,l,c,r,f).then(p=>(Z(yl,`Received RPC '${e}' ${a}: `,p),p),p=>{throw Aa(yl,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,n,r,s,i,a){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ws}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=r1[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */class i1{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
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
 */const yt="WebChannelConnection";class o1 extends s1{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=nc();return new Promise((l,c)=>{const u=new rm;u.setWithCredentials(!0),u.listenOnce(sm.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case To.NO_ERROR:const p=u.getResponseJson();Z(yt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case To.TIMEOUT:Z(yt,`RPC '${e}' ${a} timed out`),c(new ue(B.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const g=u.getStatus();if(Z(yt,`RPC '${e}' ${a} failed with status:`,g,"response text:",u.getResponseText()),g>0){let E=u.getResponseJson();Array.isArray(E)&&(E=E[0]);const R=E==null?void 0:E.error;if(R&&R.status&&R.message){const x=function(H){const U=H.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(U)>=0?U:B.UNKNOWN}(R.status);c(new ue(x,R.message))}else c(new ue(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ue(B.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:a,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Z(yt,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);Z(yt,`RPC '${e}' ${a} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=nc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=am(),l=om(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(yt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);let g=!1,E=!1;const R=new i1({Zo:F=>{E?Z(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,F):(g||(Z(yt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Z(yt,`RPC '${e}' stream ${s} sending:`,F),p.send(F))},Xo:()=>p.close()}),x=(F,H,U)=>{F.listen(H,j=>{try{U(j)}catch(z){setTimeout(()=>{throw z},0)}})};return x(p,Hs.EventType.OPEN,()=>{E||(Z(yt,`RPC '${e}' stream ${s} transport opened.`),R.__())}),x(p,Hs.EventType.CLOSE,()=>{E||(E=!0,Z(yt,`RPC '${e}' stream ${s} transport closed`),R.u_())}),x(p,Hs.EventType.ERROR,F=>{E||(E=!0,Aa(yt,`RPC '${e}' stream ${s} transport errored. Name:`,F.name,"Message:",F.message),R.u_(new ue(B.UNAVAILABLE,"The operation could not be completed")))}),x(p,Hs.EventType.MESSAGE,F=>{var H;if(!E){const U=F.data[0];ze(!!U,16349);const j=U,z=(j==null?void 0:j.error)||((H=j[0])===null||H===void 0?void 0:H.error);if(z){Z(yt,`RPC '${e}' stream ${s} received error:`,z);const le=z.status;let se=function(_){const I=Ke[_];if(I!==void 0)return pA(I)}(le),A=z.message;se===void 0&&(se=B.INTERNAL,A="Unknown error status: "+le+" with message "+z.message),E=!0,R.u_(new ue(se,A)),p.close()}else Z(yt,`RPC '${e}' stream ${s} received:`,U),R.c_(U)}}),x(l,im.STAT_EVENT,F=>{F.stat===Gl.PROXY?Z(yt,`RPC '${e}' stream ${s} detected buffering proxy`):F.stat===Gl.NOPROXY&&Z(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.a_()},0),R}}function vl(){return typeof document<"u"?document:null}/**
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
 */function Ca(t){return new gA(t,!0)}/**
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
 */class zm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.xi=e,this.timerId=n,this.I_=r,this.E_=s,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const n=Math.floor(this.A_+this.g_()),r=Math.max(0,Date.now()-this.V_),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.A_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,s,()=>(this.V_=Date.now(),e())),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){this.R_!==null&&(this.R_.skipDelay(),this.R_=null)}cancel(){this.R_!==null&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}/**
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
 */const md="PersistentStream";class a1{constructor(e,n,r,s,i,a,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new zm(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Nr(n.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===n&&this.K_(r,s)},r=>{e(()=>{const s=new ue(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return Z(md,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(Z(md,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class l1 extends a1{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=TA(e.writeResults,e.commitTime),r=ls(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=EA(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bA(this.serializer,r))};this.L_(n)}}/**
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
 */class c1{}class u1 extends c1{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new ue(B.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(e,ec(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ue(B.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(e,ec(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ue(B.UNKNOWN,a.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class h1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Nr(n),this.oa=!1):Z("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
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
 */const Vi="RemoteStore";class f1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(a=>{r.enqueueAndForget(async()=>{Li(this)&&(Z(Vi,"Restarting streams for network reachability change."),await async function(c){const u=Me(c);u.Ta.add(4),await Mi(u),u.da.set("Unknown"),u.Ta.delete(4),await Pa(u)}(this))})}),this.da=new h1(r,s)}}async function Pa(t){if(Li(t))for(const e of t.Ia)await e(!0)}async function Mi(t){for(const e of t.Ia)await e(!1)}function Li(t){return Me(t).Ta.size===0}async function qm(t,e,n){if(!Di(e))throw e;t.Ta.add(1),await Mi(t),t.da.set("Offline"),n||(n=()=>ZA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(Vi,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await Pa(t)})}function Gm(t,e){return e().catch(n=>qm(t,n,e))}async function xa(t){const e=Me(t),n=lr(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:qc;for(;d1(e);)try{const s=await e1(e.localStore,r);if(s===null){e.ha.length===0&&n.N_();break}r=s.batchId,p1(e,s)}catch(s){await qm(e,s)}Wm(e)&&Km(e)}function d1(t){return Li(t)&&t.ha.length<10}function p1(t,e){t.ha.push(e);const n=lr(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function Wm(t){return Li(t)&&!lr(t).F_()&&t.ha.length>0}function Km(t){lr(t).start()}async function g1(t){lr(t).ta()}async function m1(t){const e=lr(t);for(const n of t.ha)e.Z_(n.mutations)}async function _1(t,e,n){const r=t.ha.shift(),s=eu.from(r,e,n);await Gm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await xa(t)}async function y1(t,e){e&&lr(t).Y_&&await async function(r,s){if(function(a){return dA(a)&&a!==B.ABORTED}(s.code)){const i=r.ha.shift();lr(r).O_(),await Gm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xa(r)}}(t,e),Wm(t)&&Km(t)}async function _d(t,e){const n=Me(t);n.asyncQueue.verifyOperationInProgress(),Z(Vi,"RemoteStore received new credentials");const r=Li(n);n.Ta.add(3),await Mi(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await Pa(n)}async function v1(t,e){const n=Me(t);e?(n.Ta.delete(2),await Pa(n)):e||(n.Ta.add(2),await Mi(n),n.da.set("Unknown"))}function lr(t){return t.Va||(t.Va=function(n,r,s){const i=Me(n);return i.ra(),new l1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:g1.bind(null,t),i_:y1.bind(null,t),X_:m1.bind(null,t),ea:_1.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await xa(t)):(await t.Va.stop(),t.ha.length>0&&(Z(Vi,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
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
 */class su{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new su(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qm(t,e){if(Nr("AsyncQueue",`${e}: ${t}`),Di(t))return new ue(B.UNAVAILABLE,`${e}: ${t}`);throw t}class E1{constructor(){this.queries=yd(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const s=Me(n),i=s.queries;s.queries=yd(),i.forEach((a,l)=>{for(const c of l.ya)c.onError(r)})})(this,new ue(B.ABORTED,"Firestore shutting down"))}}function yd(){return new $r(t=>Rm(t),Sm)}function w1(t){t.ba.forEach(e=>{e.next()})}var vd,Ed;(Ed=vd||(vd={})).Ca="default",Ed.Cache="cache";const b1="SyncEngine";class T1{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.au={},this.uu=new $r(l=>Rm(l),Sm),this.cu=new Map,this.lu=new Set,this.hu=new Vt(pe.comparator),this.Pu=new Map,this.Tu=new tu,this.Iu={},this.Eu=new Map,this.du=_s.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function I1(t,e,n){const r=k1(t);try{const s=await function(a,l){const c=Me(a),u=tt.now(),f=l.reduce((E,R)=>E.add(R.key),wt());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",E=>{let R=Xo(),x=wt();return c.Bs.getEntries(E,f).next(F=>{R=F,R.forEach((H,U)=>{U.isValidDocument()||(x=x.add(H))})}).next(()=>c.localDocuments.getOverlayedDocuments(E,R)).next(F=>{p=F;const H=[];for(const U of l){const j=cA(U,p.get(U.key).overlayedDocument);j!=null&&H.push(new Br(U.key,j,vm(j.value.mapValue),Cn.exists(!0)))}return c.mutationQueue.addMutationBatch(E,u,H,l)}).next(F=>{g=F;const H=F.applyToLocalDocumentSet(p,x);return c.documentOverlayCache.saveOverlays(E,F.batchId,H)})}).then(()=>({batchId:g.batchId,changes:Cm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let u=a.Iu[a.currentUser.toKey()];u||(u=new Vt(be)),u=u.insert(l,c),a.Iu[a.currentUser.toKey()]=u}(r,s.batchId,n),await Oa(r,s.changes),await xa(r.remoteStore)}catch(s){const i=Qm(s,"Failed to persist write");n.reject(i)}}function wd(t,e,n){const r=Me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.uu.forEach((i,a)=>{const l=a.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=Me(a);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const g of p.ya)g.Da(l)&&(u=!0)}),u&&w1(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function A1(t,e){const n=Me(t),r=e.batch.batchId;try{const s=await YA(n.localStore,e);Xm(n,r,null),Jm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Oa(n,s)}catch(s){await Hc(s)}}async function S1(t,e,n){const r=Me(t);try{const s=await function(a,l){const c=Me(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(ze(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);Xm(r,e,n),Jm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Oa(r,s)}catch(s){await Hc(s)}}function Jm(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function Xm(t,e,n){const r=Me(t);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}async function Oa(t,e,n){const r=Me(t),s=[],i=[],a=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{a.push(r.Ru(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=void 0)===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=ru.Rs(c.targetId,u);i.push(p)}}))}),await Promise.all(a),r.au.j_(s),await async function(c,u){const f=Me(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(u,g=>L.forEach(g.ds,E=>f.persistence.referenceDelegate.addReference(p,g.targetId,E)).next(()=>L.forEach(g.As,E=>f.persistence.referenceDelegate.removeReference(p,g.targetId,E)))))}catch(p){if(!Di(p))throw p;Z(QA,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const E=f.xs.get(g),R=E.snapshotVersion,x=E.withLastLimboFreeSnapshotVersion(R);f.xs=f.xs.insert(g,x)}}}(r.localStore,i))}async function R1(t,e){const n=Me(t);if(!n.currentUser.isEqual(e)){Z(b1,"User change. New user:",e.toKey());const r=await Hm(n.localStore,e);n.currentUser=e,function(i,a){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new ue(B.CANCELLED,a))})}),i.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Oa(n,r.ks)}}function k1(t){const e=Me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=A1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=S1.bind(null,e),e}class ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ca(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return XA(this.persistence,new KA,e.initialUser,this.serializer)}yu(e){return new jm(nu.fi,this.serializer)}pu(e){return new t1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ea.provider={build:()=>new ea};class C1 extends ea{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){ze(this.persistence.referenceDelegate instanceof Zo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DA(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?Ot.withCacheSize(this.cacheSizeBytes):Ot.DEFAULT;return new jm(r=>Zo.fi(r,n),this.serializer)}}class rc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=R1.bind(null,this.syncEngine),await v1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new E1}()}createDatastore(e){const n=Ca(e.databaseInfo.databaseId),r=function(i){return new o1(i)}(e.databaseInfo);return function(i,a,l,c){return new u1(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new f1(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>wd(this.syncEngine,n,0),function(){return gd.C()?new gd:new n1}())}createSyncEngine(e,n){return function(s,i,a,l,c,u,f){const p=new T1(s,i,a,l,c,u);return f&&(p.Au=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Me(s);Z(Vi,"RemoteStore shutting down."),i.Ta.add(5),await Mi(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}rc.provider={build:()=>new rc};/**
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
 */const cr="FirestoreClient";class P1{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=um.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Z(cr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Z(cr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function El(t,e){t.asyncQueue.verifyOperationInProgress(),Z(cr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Hm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await x1(t);Z(cr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_d(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>_d(e.remoteStore,s)),t._onlineComponents=e}async function x1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(cr,"Using user provided OfflineComponentProvider");try{await El(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Aa("Error using user provided cache. Falling back to memory cache: "+n),await El(t,new ea)}}else Z(cr,"Using default OfflineComponentProvider"),await El(t,new C1(void 0));return t._offlineComponents}async function O1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(cr,"Using user provided OnlineComponentProvider"),await bd(t,t._uninitializedComponentsProvider._online)):(Z(cr,"Using default OnlineComponentProvider"),await bd(t,new rc))),t._onlineComponents}function D1(t){return O1(t).then(e=>e.syncEngine)}/**
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
 */function Ym(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Td=new Map;/**
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
 */function N1(t,e,n){if(!n)throw new ue(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function V1(t,e,n,r){if(e===!0&&r===!0)throw new ue(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Id(t){if(!pe.isDocumentKey(t))throw new ue(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function iu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge(12329,{type:typeof t})}function sc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ue(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=iu(t);throw new ue(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const Zm="firestore.googleapis.com",Ad=!0;class Sd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zm,this.ssl=Ad}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Ad;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Bm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xA)throw new ue(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}V1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ym((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ue(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ue(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ue(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ou{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uI;switch(r.type){case"firstParty":return new pI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ue(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Td.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Td.delete(n),r.terminate())}(this),Promise.resolve()}}function M1(t,e,n,r={}){var s;t=sc(t,ou);const i=Ri(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(yg(`https://${c}`),vg("Firestore",!0)),a.host!==Zm&&a.host!==c&&Aa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!Pr(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=vt.MOCK_USER;else{f=Lw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ue(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new vt(g)}t._authCredentials=new hI(new cm(f,p))}}/**
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
 */class au{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new au(this.firestore,e,this._query)}}class Pn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pn(this.firestore,e,this._key)}}class wi extends au{constructor(e,n,r){super(e,n,GI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pn(this.firestore,null,new pe(e))}withConverter(e){return new wi(this.firestore,e,this._path)}}function L1(t,e,...n){if(t=pn(t),arguments.length===1&&(e=um.newId()),N1("doc","path",e),t instanceof ou){const r=Qe.fromString(e,...n);return Id(r),new Pn(t,null,new pe(r))}{if(!(t instanceof Pn||t instanceof wi))throw new ue(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Qe.fromString(e,...n));return Id(r),new Pn(t.firestore,t instanceof wi?t.converter:null,new pe(r))}}/**
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
 */const Rd="AsyncQueue";class kd{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new zm(this,"async_queue_retry"),this.ec=()=>{const r=vl();r&&Z(Rd,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const n=vl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=vl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new Sr;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!Di(e))throw e;Z(Rd,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Nr("INTERNAL UNHANDLED ERROR: ",Cd(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=n,n}enqueueAfterDelay(e,n,r){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const s=su.createAndSchedule(this,e,n,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&ge(47125,{_c:Cd(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function Cd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class e_ extends ou{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new kd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kd(e),this._firestoreClient=void 0,await e}}}function F1(t,e){const n=typeof t=="object"?t:Tg(),r=typeof t=="string"?t:Wo,s=Pc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Vw("firestore");i&&M1(s,...i)}return s}function U1(t){if(t._terminated)throw new ue(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||$1(t),t._firestoreClient}function $1(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,f){return new xI(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ym(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new P1(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
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
 */class bi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bi(gn.fromBase64String(e))}catch(n){throw new ue(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bi(gn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class t_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ue(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ht(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class lu{constructor(e){this._methodName=e}}/**
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
 */class n_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ue(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ue(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}}/**
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
 */class r_{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const B1=/^__.*__$/;class j1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ni(e,this.data,n,this.fieldTransforms)}}function s_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{hc:t})}}class cu{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new cu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return ta(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(s_(this.hc)&&B1.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class H1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ca(e)}gc(e,n,r,s=!1){return new cu({hc:e,methodName:n,fc:r,path:ht.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function z1(t){const e=t._freezeSettings(),n=Ca(t._databaseId);return new H1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function q1(t,e,n,r,s,i={}){const a=t.gc(i.merge||i.mergeFields?2:0,e,n,s);l_("Data must be an object, but it was:",a,r);const l=o_(r,a);let c,u;if(i.merge)c=new Yt(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=G1(e,p,n);if(!a.contains(g))throw new ue(B.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Q1(f,g)||f.push(g)}c=new Yt(f),u=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=a.fieldTransforms;return new j1(new Jt(l),c,u)}class uu extends lu{_toFieldTransform(e){return new iA(e.path,new yi)}isEqual(e){return e instanceof uu}}function i_(t,e){if(a_(t=pn(t)))return l_("Unsupported field value:",e,t),o_(t,e);if(t instanceof lu)return function(r,s){if(!s_(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=i_(l,s.Rc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=pn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:Zl(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zl(s.serializer,i)}}if(r instanceof n_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bi)return{bytesValue:mA(s.serializer,r._byteString)};if(r instanceof Pn){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Vc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Um(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof r_)return function(a,l){return{mapValue:{fields:{[_m]:{stringValue:ym},[Kl]:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Vc("VectorValues must only contain numeric values.");return Zc(l.serializer,u)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${iu(r)}`)}(t,e)}function o_(t,e){const n={};return fm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bs(t,(r,s)=>{const i=i_(s,e.Ic(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function a_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof n_||t instanceof bi||t instanceof Pn||t instanceof lu||t instanceof r_)}function l_(t,e,n){if(!a_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=iu(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function G1(t,e,n){if((e=pn(e))instanceof t_)return e._internalPath;if(typeof e=="string")return K1(t,e);throw ta("Field path arguments must be of type string or ",t,!1,void 0,n)}const W1=new RegExp("[~\\*/\\[\\]]");function K1(t,e,n){if(e.search(W1)>=0)throw ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new t_(...e.split("."))._internalPath}catch{throw ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ta(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new ue(B.INVALID_ARGUMENT,l+t+c)}function Q1(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function J1(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function X1(t,e,n){t=sc(t,Pn);const r=sc(t.firestore,e_),s=J1(t.converter,e);return Y1(r,[q1(z1(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Cn.none())])}function Y1(t,e){return function(r,s){const i=new Sr;return r.asyncQueue.enqueueAndForget(async()=>I1(await D1(r),s,i)),i.promise}(U1(t),e)}function Z1(){return new uu("serverTimestamp")}(function(e,n=!0){(function(s){ws=s})(vs),hs(new xr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new e_(new fI(r.getProvider("auth-internal")),new gI(a,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ue(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ko(u.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),rr(Hf,zf,e),rr(Hf,zf,"esm2017")})();const eS={apiKey:"AIzaSyC_acZxWWtGDDFPdxBaa2TR6JkQcw0k0Fk",authDomain:"afp-site-c1bd9.firebaseapp.com",projectId:"afp-site-c1bd9",storageBucket:"afp-site-c1bd9.firebasestorage.app",messagingSenderId:"533749269819",appId:"1:533749269819:web:47c5dbe921ef3aae83e31e",measurementId:"G-W9TQ1EE3PB"},tS=bg(eS),nS=F1(tS);lI();const rS={class:"footer"},sS={class:"footer-bottom"},iS={class:"footer-nav"},oS={class:"subscribe-box"},aS={key:0,class:"subscribe-message"},lS={class:"footer-copy"},cS={__name:"Footer",setup(t){const e=ct(""),n=ct(""),r=async()=>{try{const s=e.value.trim().toLowerCase();if(!s){n.value="Please enter a valid email.";return}await X1(L1(nS,"mailingList",s),{email:s,subscribedAt:Z1()}),n.value="Thank you for subscribing!",e.value=""}catch(s){s.code==="permission-denied"?n.value="You’re already subscribed.":(console.error("Unexpected error adding email:",s),n.value="An error occurred. Please try again later.")}};return(s,i)=>(ie(),he("footer",rS,[V("div",sS,[V("nav",iS,[ne(we(Xe),{to:"/"},{default:Ge(()=>i[1]||(i[1]=[We("Home")])),_:1,__:[1]}),ne(we(Xe),{to:"/about"},{default:Ge(()=>i[2]||(i[2]=[We("About")])),_:1,__:[2]}),ne(we(Xe),{to:"/events"},{default:Ge(()=>i[3]||(i[3]=[We("Events")])),_:1,__:[3]}),ne(we(Xe),{to:"/contact"},{default:Ge(()=>i[4]||(i[4]=[We("Contact")])),_:1,__:[4]})]),V("div",oS,[i[6]||(i[6]=V("h3",null,"Join our mailing list",-1)),V("form",{onSubmit:Zp(r,["prevent"])},[Oo(V("input",{"onUpdate:modelValue":i[0]||(i[0]=a=>e.value=a),type:"email",placeholder:"Enter your email",required:"",class:"email-input"},null,512),[[Nl,e.value]]),i[5]||(i[5]=V("button",{type:"submit",class:"subscribe-button"},"Subscribe",-1))],32),n.value?(ie(),he("p",aS,Te(n.value),1)):Ut("",!0)]),V("p",lS," © "+Te(new Date().getFullYear())+" Association of Family Psychiatrists. All rights reserved. ",1)])]))}},uS=dt(cS,[["__scopeId","data-v-32f87464"]]),hS={class:"layout"},fS={class:"page-content"},dS={__name:"App",setup(t){return(e,n)=>(ie(),he(Ze,null,[V("div",hS,[ne(Sw),V("main",fS,[ne(we(Rc))])]),ne(uS)],64))}},pS=dt(dS,[["__scopeId","data-v-aa0b9fe9"]]),gS="modulepreload",mS=function(t){return"/site/"+t},Pd={},Pt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(n.map(u=>{if(u=mS(u),u in Pd)return;Pd[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":gS,f||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),f)return new Promise((E,R)=>{g.addEventListener("load",E),g.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},_S="/site/assets/afp-logo-DTm74N-G.png",yS={class:"featured-event"},vS=["src"],ES={class:"event-details animate-right"},wS={class:"event-title"},bS={class:"event-meta"},TS={class:"event-description"},IS={__name:"FeaturedEvent",props:{title:String,date:String,location:String,description:String,image:String,link:String,linkLabel:{type:String,default:"Access"}},setup(t){return(e,n)=>(ie(),he("section",yS,[V("img",{src:t.image,alt:"Event image",class:"event-image animate-left"},null,8,vS),V("div",ES,[V("h2",wS,Te(t.title),1),V("p",bS,Te(t.date)+" • "+Te(t.location),1),V("p",TS,Te(t.description),1),ne(we(Xe),{to:t.link,class:"cta-button"},{default:Ge(()=>[We(Te(t.linkLabel),1)]),_:1},8,["to"])])]))}},AS=dt(IS,[["__scopeId","data-v-b8aee26c"]]),SS={class:"card"},RS=["src"],kS={class:"card-content"},CS={class:"card-title"},PS={class:"card-subtitle"},xS={key:0,class:"card-details"},OS={__name:"Card",props:{image:{type:String,default:""},title:String,subtitle:String,details:String},setup(t){const e=ct(!1),n=ct(!0);return(r,s)=>(ie(),he("div",SS,[n.value?(ie(),he("img",{key:0,src:t.image,alt:"Card image",class:"card-image",onError:s[0]||(s[0]=i=>n.value=!1)},null,40,RS)):Ut("",!0),V("div",kS,[V("h3",CS,Te(t.title),1),V("p",PS,Te(t.subtitle),1),t.details?(ie(),he("button",{key:0,onClick:s[1]||(s[1]=i=>e.value=!e.value),class:"cta-button"},Te(e.value?"Hide":"Learn More"),1)):Ut("",!0),ne(Yp,{name:"fade"},{default:Ge(()=>[e.value?(ie(),he("p",xS,Te(t.details),1)):Ut("",!0)]),_:1})])]))}},DS=dt(OS,[["__scopeId","data-v-294fdb69"]]),NS={class:"card-grid-section"},VS={class:"grid-title"},MS={class:"card-grid"},LS={__name:"CardGrid",props:{title:{type:String,default:"Featured Events"},cards:{type:Array,required:!0}},setup(t){return(e,n)=>(ie(),he("section",NS,[V("h2",VS,Te(t.title),1),V("div",MS,[(ie(!0),he(Ze,null,Cr(t.cards,(r,s)=>(ie(),Ii(DS,Ai({key:s},{ref_for:!0},r),null,16))),128))])]))}},na=dt(LS,[["__scopeId","data-v-048c6274"]]),FS={class:"article-card"},US=["src","alt"],$S={class:"content"},BS={class:"title"},jS=["href"],HS={__name:"ArticleCard",props:{title:String,thumbnail:String,url:String},setup(t){return(e,n)=>(ie(),he("div",FS,[V("img",{src:t.thumbnail,alt:t.title,class:"thumbnail"},null,8,US),V("div",$S,[V("h3",BS,Te(t.title),1),V("a",{href:t.url,target:"_blank",rel:"noopener",class:"read-button"},"Read Article",8,jS)])]))}},zS=dt(HS,[["__scopeId","data-v-08790d9a"]]),qS={class:"article-grid-section"},GS={class:"grid-title"},WS={class:"article-grid"},KS={__name:"ArticleGrid",props:{title:String,articles:Array},setup(t){return(e,n)=>(ie(),he("section",qS,[V("h2",GS,Te(t.title),1),V("div",WS,[(ie(!0),he(Ze,null,Cr(t.articles,(r,s)=>(ie(),Ii(zS,Ai({key:s},{ref_for:!0},r),null,16))),128))])]))}},QS=dt(KS,[["__scopeId","data-v-6cbd1349"]]);function hu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var jr=hu();function c_(t){jr=t}var si={exec:()=>null};function Pe(t,e=""){let n=typeof t=="string"?t:t.source;const r={replace:(s,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(kt.caret,"$1"),n=n.replace(s,a),r},getRegex:()=>new RegExp(n,e)};return r}var kt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},JS=/^(?:[ \t]*(?:\n|$))+/,XS=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,YS=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Fi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,ZS=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,fu=/(?:[*+-]|\d{1,9}[.)])/,u_=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,h_=Pe(u_).replace(/bull/g,fu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),eR=Pe(u_).replace(/bull/g,fu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),du=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,tR=/^[^\n]+/,pu=/(?!\s*\])(?:\\.|[^\[\]\\])+/,nR=Pe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",pu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),rR=Pe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,fu).getRegex(),Da="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",gu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,sR=Pe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",gu).replace("tag",Da).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),f_=Pe(du).replace("hr",Fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Da).getRegex(),iR=Pe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",f_).getRegex(),mu={blockquote:iR,code:XS,def:nR,fences:YS,heading:ZS,hr:Fi,html:sR,lheading:h_,list:rR,newline:JS,paragraph:f_,table:si,text:tR},xd=Pe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Da).getRegex(),oR={...mu,lheading:eR,table:xd,paragraph:Pe(du).replace("hr",Fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",xd).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Da).getRegex()},aR={...mu,html:Pe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",gu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:si,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Pe(du).replace("hr",Fi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",h_).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},lR=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,cR=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,d_=/^( {2,}|\\)\n(?!\s*$)/,uR=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Na=/[\p{P}\p{S}]/u,_u=/[\s\p{P}\p{S}]/u,p_=/[^\s\p{P}\p{S}]/u,hR=Pe(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,_u).getRegex(),g_=/(?!~)[\p{P}\p{S}]/u,fR=/(?!~)[\s\p{P}\p{S}]/u,dR=/(?:[^\s\p{P}\p{S}]|~)/u,pR=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,m_=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,gR=Pe(m_,"u").replace(/punct/g,Na).getRegex(),mR=Pe(m_,"u").replace(/punct/g,g_).getRegex(),__="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",_R=Pe(__,"gu").replace(/notPunctSpace/g,p_).replace(/punctSpace/g,_u).replace(/punct/g,Na).getRegex(),yR=Pe(__,"gu").replace(/notPunctSpace/g,dR).replace(/punctSpace/g,fR).replace(/punct/g,g_).getRegex(),vR=Pe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,p_).replace(/punctSpace/g,_u).replace(/punct/g,Na).getRegex(),ER=Pe(/\\(punct)/,"gu").replace(/punct/g,Na).getRegex(),wR=Pe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),bR=Pe(gu).replace("(?:-->|$)","-->").getRegex(),TR=Pe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",bR).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ra=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,IR=Pe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ra).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),y_=Pe(/^!?\[(label)\]\[(ref)\]/).replace("label",ra).replace("ref",pu).getRegex(),v_=Pe(/^!?\[(ref)\](?:\[\])?/).replace("ref",pu).getRegex(),AR=Pe("reflink|nolink(?!\\()","g").replace("reflink",y_).replace("nolink",v_).getRegex(),yu={_backpedal:si,anyPunctuation:ER,autolink:wR,blockSkip:pR,br:d_,code:cR,del:si,emStrongLDelim:gR,emStrongRDelimAst:_R,emStrongRDelimUnd:vR,escape:lR,link:IR,nolink:v_,punctuation:hR,reflink:y_,reflinkSearch:AR,tag:TR,text:uR,url:si},SR={...yu,link:Pe(/^!?\[(label)\]\((.*?)\)/).replace("label",ra).getRegex(),reflink:Pe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ra).getRegex()},ic={...yu,emStrongRDelimAst:yR,emStrongLDelim:mR,url:Pe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},RR={...ic,br:Pe(d_).replace("{2,}","*").getRegex(),text:Pe(ic.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ho={normal:mu,gfm:oR,pedantic:aR},$s={normal:yu,gfm:ic,breaks:RR,pedantic:SR},kR={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Od=t=>kR[t];function on(t,e){if(e){if(kt.escapeTest.test(t))return t.replace(kt.escapeReplace,Od)}else if(kt.escapeTestNoEncode.test(t))return t.replace(kt.escapeReplaceNoEncode,Od);return t}function Dd(t){try{t=encodeURI(t).replace(kt.percentDecode,"%")}catch{return null}return t}function Nd(t,e){var i;const n=t.replace(kt.findPipe,(a,l,c)=>{let u=!1,f=l;for(;--f>=0&&c[f]==="\\";)u=!u;return u?"|":" |"}),r=n.split(kt.splitPipe);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!((i=r.at(-1))!=null&&i.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(kt.slashPipe,"|");return r}function Bs(t,e,n){const r=t.length;if(r===0)return"";let s=0;for(;s<r&&t.charAt(r-s-1)===e;)s++;return t.slice(0,r-s)}function CR(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function Vd(t,e,n,r,s){const i=e.href,a=e.title||null,l=t[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;const c={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:a,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,c}function PR(t,e,n){const r=t.match(n.other.indentCodeCompensation);if(r===null)return e;const s=r[1];return e.split(`
`).map(i=>{const a=i.match(n.other.beginningSpace);if(a===null)return i;const[l]=a;return l.length>=s.length?i.slice(s.length):i}).join(`
`)}var sa=class{constructor(t){De(this,"options");De(this,"rules");De(this,"lexer");this.options=t||jr}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:Bs(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],r=PR(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){const r=Bs(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Bs(e[0],`
`)}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){let n=Bs(e[0],`
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
`,1)[0].replace(this.rules.other.listReplaceTabs,H=>" ".repeat(3*H.length)),g=t.split(`
`,1)[0],E=!p.trim(),R=0;if(this.options.pedantic?(R=2,f=p.trimStart()):E?R=e[1].length+1:(R=e[2].search(this.rules.other.nonSpaceChar),R=R>4?1:R,f=p.slice(R),R+=e[1].length),E&&this.rules.other.blankLine.test(g)&&(u+=g+`
`,t=t.substring(g.length+1),c=!0),!c){const H=this.rules.other.nextBulletRegex(R),U=this.rules.other.hrRegex(R),j=this.rules.other.fencesBeginRegex(R),z=this.rules.other.headingBeginRegex(R),le=this.rules.other.htmlBeginRegex(R);for(;t;){const se=t.split(`
`,1)[0];let A;if(g=se,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),A=g):A=g.replace(this.rules.other.tabCharGlobal,"    "),j.test(g)||z.test(g)||le.test(g)||H.test(g)||U.test(g))break;if(A.search(this.rules.other.nonSpaceChar)>=R||!g.trim())f+=`
`+A.slice(R);else{if(E||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||j.test(p)||z.test(p)||U.test(p))break;f+=`
`+g}!E&&!g.trim()&&(E=!0),u+=se+`
`,t=t.substring(se.length+1),p=A.slice(R)}}s.loose||(a?s.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0));let x=null,F;this.options.gfm&&(x=this.rules.other.listIsTask.exec(f),x&&(F=x[0]!=="[ ] ",f=f.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:u,task:!!x,checked:F,loose:!1,text:f,tokens:[]}),s.raw+=u}const l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let c=0;c<s.items.length;c++)if(this.lexer.state.top=!1,s.items[c].tokens=this.lexer.blockTokens(s.items[c].text,[]),!s.loose){const u=s.items[c].tokens.filter(p=>p.type==="space"),f=u.length>0&&u.some(p=>this.rules.other.anyLine.test(p.raw));s.loose=f}if(s.loose)for(let c=0;c<s.items.length;c++)s.items[c].loose=!0;return s}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:r,title:s}}}table(t){var a;const e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const n=Nd(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(a=e[3])!=null&&a.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const l of r)this.rules.other.tableAlignRight.test(l)?i.align.push("right"):this.rules.other.tableAlignCenter.test(l)?i.align.push("center"):this.rules.other.tableAlignLeft.test(l)?i.align.push("left"):i.align.push(null);for(let l=0;l<n.length;l++)i.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:i.align[l]});for(const l of s)i.rows.push(Nd(l,i.header.length).map((c,u)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:i.align[u]})));return i}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=Bs(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=CR(e[2],"()");if(i===-2)return;if(i>-1){const l=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],s=i[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Vd(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){const r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return Vd(n,s,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...r[0]].length-1;let a,l,c=i,u=0;const f=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*t.length+i);(r=f.exec(e))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(l=[...a].length,r[3]||r[4]){c+=l;continue}else if((r[5]||r[6])&&i%3&&!((i+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const p=[...r[0]][0].length,g=t.slice(0,i+r.index+p+l);if(Math.min(i,l)%2){const R=g.slice(1,-1);return{type:"em",raw:g,text:R,tokens:this.lexer.inlineTokens(R)}}const E=g.slice(2,-2);return{type:"strong",raw:g,text:E,tokens:this.lexer.inlineTokens(E)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let i;do i=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(i!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){const n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},Rn=class oc{constructor(e){De(this,"tokens");De(this,"options");De(this,"state");De(this,"tokenizer");De(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||jr,this.options.tokenizer=this.options.tokenizer||new sa,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:kt,block:ho.normal,inline:$s.normal};this.options.pedantic?(n.block=ho.pedantic,n.inline=$s.pedantic):this.options.gfm&&(n.block=ho.gfm,this.options.breaks?n.inline=$s.breaks:n.inline=$s.gfm),this.tokenizer.rules=n}static get rules(){return{block:ho,inline:$s}}static lex(e,n){return new oc(n).lex(e)}static lexInline(e,n){return new oc(n).inlineTokens(e)}lex(e){e=e.replace(kt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){var s,i,a;for(this.options.pedantic&&(e=e.replace(kt.tabCharGlobal,"    ").replace(kt.spaceLine,""));e;){let l;if((i=(s=this.options.extensions)==null?void 0:s.block)!=null&&i.some(u=>(l=u.call({lexer:this},e,n))?(e=e.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.space(e)){e=e.substring(l.raw.length);const u=n.at(-1);l.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(e)){e=e.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(l=this.tokenizer.fences(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(e)){e=e.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(e)){e=e.substring(l.raw.length),n.push(l);continue}let c=e;if((a=this.options.extensions)!=null&&a.startBlock){let u=1/0;const f=e.slice(1);let p;this.options.extensions.startBlock.forEach(g=>{p=g.call({lexer:this},f),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(c=e.substring(0,u+1))}if(this.state.top&&(l=this.tokenizer.paragraph(c))){const u=n.at(-1);r&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l),r=c.length!==e.length,e=e.substring(l.raw.length);continue}if(l=this.tokenizer.text(e)){e=e.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var l,c,u;let r=e,s=null;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)f.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,a="";for(;e;){i||(a=""),i=!1;let f;if((c=(l=this.options.extensions)==null?void 0:l.inline)!=null&&c.some(g=>(f=g.call({lexer:this},e,n))?(e=e.substring(f.raw.length),n.push(f),!0):!1))continue;if(f=this.tokenizer.escape(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.tag(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.link(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(f.raw.length);const g=n.at(-1);f.type==="text"&&(g==null?void 0:g.type)==="text"?(g.raw+=f.raw,g.text+=f.text):n.push(f);continue}if(f=this.tokenizer.emStrong(e,r,a)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.codespan(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.br(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.del(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.autolink(e)){e=e.substring(f.raw.length),n.push(f);continue}if(!this.state.inLink&&(f=this.tokenizer.url(e))){e=e.substring(f.raw.length),n.push(f);continue}let p=e;if((u=this.options.extensions)!=null&&u.startInline){let g=1/0;const E=e.slice(1);let R;this.options.extensions.startInline.forEach(x=>{R=x.call({lexer:this},E),typeof R=="number"&&R>=0&&(g=Math.min(g,R))}),g<1/0&&g>=0&&(p=e.substring(0,g+1))}if(f=this.tokenizer.inlineText(p)){e=e.substring(f.raw.length),f.raw.slice(-1)!=="_"&&(a=f.raw.slice(-1)),i=!0;const g=n.at(-1);(g==null?void 0:g.type)==="text"?(g.raw+=f.raw,g.text+=f.text):n.push(f);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}},ia=class{constructor(t){De(this,"options");De(this,"parser");this.options=t||jr}space(t){return""}code({text:t,lang:e,escaped:n}){var i;const r=(i=(e||"").match(kt.notSpaceStart))==null?void 0:i[0],s=t.replace(kt.endingNewline,"")+`
`;return r?'<pre><code class="language-'+on(r)+'">'+(n?s:on(s,!0))+`</code></pre>
`:"<pre><code>"+(n?s:on(s,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){const e=t.ordered,n=t.start;let r="";for(let a=0;a<t.items.length;a++){const l=t.items[a];r+=this.listitem(l)}const s=e?"ol":"ul",i=e&&n!==1?' start="'+n+'"':"";return"<"+s+i+`>
`+r+"</"+s+`>
`}listitem(t){var n;let e="";if(t.task){const r=this.checkbox({checked:!!t.checked});t.loose?((n=t.tokens[0])==null?void 0:n.type)==="paragraph"?(t.tokens[0].text=r+" "+t.tokens[0].text,t.tokens[0].tokens&&t.tokens[0].tokens.length>0&&t.tokens[0].tokens[0].type==="text"&&(t.tokens[0].tokens[0].text=r+" "+on(t.tokens[0].tokens[0].text),t.tokens[0].tokens[0].escaped=!0)):t.tokens.unshift({type:"text",raw:r+" ",text:r+" ",escaped:!0}):e+=r+" "}return e+=this.parser.parse(t.tokens,!!t.loose),`<li>${e}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let s=0;s<t.header.length;s++)n+=this.tablecell(t.header[s]);e+=this.tablerow({text:n});let r="";for(let s=0;s<t.rows.length;s++){const i=t.rows[s];n="";for(let a=0;a<i.length;a++)n+=this.tablecell(i[a]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){const e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${on(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){const r=this.parser.parseInline(n),s=Dd(t);if(s===null)return r;t=s;let i='<a href="'+t+'"';return e&&(i+=' title="'+on(e)+'"'),i+=">"+r+"</a>",i}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));const s=Dd(t);if(s===null)return on(n);t=s;let i=`<img src="${t}" alt="${n}"`;return e&&(i+=` title="${on(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:on(t.text)}},vu=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},kn=class ac{constructor(e){De(this,"options");De(this,"renderer");De(this,"textRenderer");this.options=e||jr,this.options.renderer=this.options.renderer||new ia,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new vu}static parse(e,n){return new ac(n).parse(e)}static parseInline(e,n){return new ac(n).parseInline(e)}parse(e,n=!0){var s,i;let r="";for(let a=0;a<e.length;a++){const l=e[a];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[l.type]){const u=l,f=this.options.extensions.renderers[u.type].call({parser:this},u);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){r+=f||"";continue}}const c=l;switch(c.type){case"space":{r+=this.renderer.space(c);continue}case"hr":{r+=this.renderer.hr(c);continue}case"heading":{r+=this.renderer.heading(c);continue}case"code":{r+=this.renderer.code(c);continue}case"table":{r+=this.renderer.table(c);continue}case"blockquote":{r+=this.renderer.blockquote(c);continue}case"list":{r+=this.renderer.list(c);continue}case"html":{r+=this.renderer.html(c);continue}case"paragraph":{r+=this.renderer.paragraph(c);continue}case"text":{let u=c,f=this.renderer.text(u);for(;a+1<e.length&&e[a+1].type==="text";)u=e[++a],f+=`
`+this.renderer.text(u);n?r+=this.renderer.paragraph({type:"paragraph",raw:f,text:f,tokens:[{type:"text",raw:f,text:f,escaped:!0}]}):r+=f;continue}default:{const u='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}parseInline(e,n=this.renderer){var s,i;let r="";for(let a=0;a<e.length;a++){const l=e[a];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[l.type]){const u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){r+=u||"";continue}}const c=l;switch(c.type){case"escape":{r+=n.text(c);break}case"html":{r+=n.html(c);break}case"link":{r+=n.link(c);break}case"image":{r+=n.image(c);break}case"strong":{r+=n.strong(c);break}case"em":{r+=n.em(c);break}case"codespan":{r+=n.codespan(c);break}case"br":{r+=n.br(c);break}case"del":{r+=n.del(c);break}case"text":{r+=n.text(c);break}default:{const u='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},wl,Ro=(wl=class{constructor(t){De(this,"options");De(this,"block");this.options=t||jr}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?Rn.lex:Rn.lexInline}provideParser(){return this.block?kn.parse:kn.parseInline}},De(wl,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),wl),xR=class{constructor(...t){De(this,"defaults",hu());De(this,"options",this.setOptions);De(this,"parse",this.parseMarkdown(!0));De(this,"parseInline",this.parseMarkdown(!1));De(this,"Parser",kn);De(this,"Renderer",ia);De(this,"TextRenderer",vu);De(this,"Lexer",Rn);De(this,"Tokenizer",sa);De(this,"Hooks",Ro);this.use(...t)}walkTokens(t,e){var r,s;let n=[];for(const i of t)switch(n=n.concat(e.call(this,i)),i.type){case"table":{const a=i;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,e));for(const l of a.rows)for(const c of l)n=n.concat(this.walkTokens(c.tokens,e));break}case"list":{const a=i;n=n.concat(this.walkTokens(a.items,e));break}default:{const a=i;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,e))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const i=e.renderers[s.name];i?e.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=i.apply(this,a)),l}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=e[s.level];i?i.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),n.renderer){const s=this.defaults.renderer||new ia(this.defaults);for(const i in n.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const a=i,l=n.renderer[a],c=s[a];s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f||""}}r.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new sa(this.defaults);for(const i in n.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const a=i,l=n.tokenizer[a],c=s[a];s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f}}r.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new Ro;for(const i in n.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const a=i,l=n.hooks[a],c=s[a];Ro.passThroughHooks.has(i)?s[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(s,u)).then(p=>c.call(s,p));const f=l.call(s,u);return c.call(s,f)}:s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f}}r.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(a){let l=[];return l.push(i.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return Rn.lex(t,e??this.defaults)}parser(t,e){return kn.parse(t,e??this.defaults)}parseMarkdown(t){return(n,r)=>{const s={...r},i={...this.defaults,...s},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=t);const l=i.hooks?i.hooks.provideLexer():t?Rn.lex:Rn.lexInline,c=i.hooks?i.hooks.provideParser():t?kn.parse:kn.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>l(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>c(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(a);try{i.hooks&&(n=i.hooks.preprocess(n));let u=l(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let f=c(u,i);return i.hooks&&(f=i.hooks.postprocess(f)),f}catch(u){return a(u)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const r="<p>An error occurred:</p><pre>"+on(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},Lr=new xR;function Ce(t,e){return Lr.parse(t,e)}Ce.options=Ce.setOptions=function(t){return Lr.setOptions(t),Ce.defaults=Lr.defaults,c_(Ce.defaults),Ce};Ce.getDefaults=hu;Ce.defaults=jr;Ce.use=function(...t){return Lr.use(...t),Ce.defaults=Lr.defaults,c_(Ce.defaults),Ce};Ce.walkTokens=function(t,e){return Lr.walkTokens(t,e)};Ce.parseInline=Lr.parseInline;Ce.Parser=kn;Ce.parser=kn.parse;Ce.Renderer=ia;Ce.TextRenderer=vu;Ce.Lexer=Rn;Ce.lexer=Rn.lex;Ce.Tokenizer=sa;Ce.Hooks=Ro;Ce.parse=Ce;Ce.options;Ce.setOptions;Ce.use;Ce.walkTokens;Ce.parseInline;kn.parse;Rn.lex;const OR=["id"],DR=["src","alt"],NR={class:"event-content"},VR={class:"event-title"},MR={class:"event-datetime"},LR={key:0},FR={key:0,class:"event-location"},UR=["innerHTML"],$R=["href"],BR={key:2,class:"schedule"},jR={class:"schedule-time"},HR=["innerHTML"],zR={__name:"Event",props:{id:String,title:String,date:String,time:String,location:String,description:String,image:String,rsvpLink:String,link:String,linkLabel:{type:String,default:"RSVP / Access"},schedule:{type:Array,default:()=>[]}},setup(t){const e=t,n=Dt(()=>{var f;const a=(f=e.date)==null?void 0:f.trim();if(!a)return"";const l=/\b\d{1,2}\b/.test(a),c=new Date(a);if(isNaN(c.getTime()))return a;const u=l?{year:"numeric",month:"long",day:"numeric"}:{year:"numeric",month:"long"};return c.toLocaleDateString(void 0,u)}),r=Dt(()=>e.description?Ce.parseInline(e.description):""),s=Dt(()=>e.schedule.map(a=>({...a,parsedTitle:Ce.parseInline(a.title||"")}))),i={initial:{opacity:0,y:30},enter:{opacity:1,y:0,transition:{duration:.6}}};return(a,l)=>{const c=Yy("motion");return Oo((ie(),he("article",{id:t.id,class:"event-card animate-fade-slide"},[t.image?(ie(),he("img",{key:0,src:t.image,alt:t.title,class:"event-image"},null,8,DR)):Ut("",!0),V("div",NR,[V("h2",VR,Te(t.title),1),V("p",MR,[We(Te(n.value),1),t.time?(ie(),he("span",LR," • "+Te(t.time),1)):Ut("",!0)]),t.location?(ie(),he("p",FR,Te(t.location),1)):Ut("",!0),V("p",{class:"event-description",innerHTML:r.value},null,8,UR),t.rsvpLink||t.link?(ie(),he("a",{key:1,href:t.rsvpLink||t.link,target:"_blank",rel:"noopener",class:"event-button"},Te(t.linkLabel),9,$R)):Ut("",!0),t.schedule&&t.schedule.length?(ie(),he("div",BR,[l[0]||(l[0]=V("h3",null,"Event Schedule",-1)),V("ul",null,[(ie(!0),he(Ze,null,Cr(s.value,(u,f)=>(ie(),he("li",{key:f,class:"schedule-item"},[V("span",jR,Te(u.time),1),V("span",{class:"schedule-title",innerHTML:u.parsedTitle},null,8,HR)]))),128))])])):Ut("",!0)])],8,OR)),[[c,i]])}}},E_=dt(zR,[["__scopeId","data-v-52394471"]]),qR="/site/afp-logo.png",GR={class:"organizations-container"},WR={class:"organization-circles"},KR={class:"circle-placeholder"},QR={__name:"AffiliatedOrganizations",setup(t){const e=ct(null),n=ct(!1);let r=null;return ys(()=>{r=new IntersectionObserver(s=>{s.forEach(i=>{i.isIntersecting&&(n.value=!0,r.unobserve(i.target))})},{threshold:.1}),e.value&&r.observe(e.value)}),ma(()=>{r&&r.disconnect()}),(s,i)=>(ie(),he("div",{class:"sister-organizations",id:"sister-organizations",ref_key:"containerRef",ref:e},[i[1]||(i[1]=V("h2",null,"Sister Organizations",-1)),V("div",GR,[V("div",{class:kr(["center-logo",{animate:n.value}])},i[0]||(i[0]=[V("img",{src:qR,alt:"AFP Logo",class:"center-logo-img"},null,-1)]),2),V("div",WR,[(ie(),he(Ze,null,Cr(6,a=>V("div",{class:kr(["org-circle",{animate:n.value}]),key:a,style:Ur({"--delay":`${a*.2}s`})},[V("div",KR,"ORG "+Te(a),1)],6)),64))])])],512))}},JR=dt(QR,[["__scopeId","data-v-0a61ad8a"]]),XR={title:"Feature",date:"A Date",location:"A Place",description:"A place to feature anything the AFP wants on their home page",image:"https://media.istockphoto.com/id/1417699524/photo/group-of-people-at-music-concert.jpg?s=2048x2048&w=is&k=20&c=ry_TiyFeGk5F03WDdcTE9lnx25PvIIUvKCl0uQHyFa0=",link:"/"},YR=[{image:"https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=2048x2048&w=is&k=20&c=bUHQJBt4Nbp0IEngDcXMMQteAnGi7fz1WpEuq3zLrOI=",title:"AACAP",subtitle:"Annual Meeting • October 2025",details:"With some additional information here"},{image:"https://media.istockphoto.com/id/1411002384/photo/nurses-meeting.jpg?s=2048x2048&w=is&k=20&c=M5E3-J6IVCX6cvVBGyfedmTXEPjedRxyE2NZMkdv9hM=",title:"APA",subtitle:"Annual Meeting • May 2026",details:"Link:"},{image:"https://media.istockphoto.com/id/1783743772/photo/female-speaker-giving-a-presentation-during-business-seminar-at-convention-center.jpg?s=2048x2048&w=is&k=20&c=h7aIvTLP5PhWfrp54V_yUhtoD1cZqqwauSmqMAsbnyw=",title:"Annual AFP Conference",subtitle:"Virtual • March 2026",details:"Our flagship event featuring keynote speakers, panels, and networking opportunities."}],ZR=[{title:"Coping With Problematic Effects of Social Media",thumbnail:"https://images.squarespace-cdn.com/content/v1/6267042fe703aa417b69ec37/ff56a26d-ca75-4256-8854-6ddba48c6fc5/Teenage+girl+using+smart+phone+at+home+stock+photo.jpg?format=2500w",url:"https://www.psychologytoday.com/us/blog/psychiatrys-think-tank/202501/coping-with-problematic-effects-of-social-media"},{title:"Community Support Strategies",thumbnail:"https://media.istockphoto.com/id/1465173464/photo/business-network-concept-teamwork-partnership-human-resources.jpg?s=2048x2048&w=is&k=20&c=45hL9SREGO-8XjTxsmFy1Iph1lHSxEqD-MTkVlodM_o="},{title:"Trauma-Informed Care",thumbnail:"https://media.istockphoto.com/id/2206797715/photo/cubes-form-the-expression-ptsd.jpg?s=2048x2048&w=is&k=20&c=w4i03qsp8ue3YYBBhSuqcaAwzhfmyWGuEBmA2QkN2Tg="}],ek=[{title:"Janice Cho, MD"},{title:"Sarah Faitell, DO"},{title:"Eileen Glocer, MD"},{title:"Hannah Goddard, DO"},{title:"Jatin Julakanti, MD"},{title:"Hannah Leo, MD"},{title:"Kaajal Patel Tan, DO"},{title:"Michelle Prakash, MD"}],tk={title:"Highlights: 2024 Annual Family Psychiatry Conference",date:"September 21, 2025",time:"9:00 AM – 4:00 PM PT",description:"Join us for the 2025 Annual Conference, featuring leading experts in family psychiatry. Engage in keynotes, panels, and networking opportunities.",link:"https://drive.google.com/file/d/14MEsEO4A65rdNfa7eHmyuKKwWBJJDtLl/view?usp=drive_link",linkLabel:"Watch Recording",schedule:[{time:" 11:00 AM",title:"Introduction by Dr. Glick on the state of psychiatric practice, it’s efficacy, and why it isn’t used more in practice"},{time:"11:10 AM",title:"[Family Work in Adult Outpatient Setting](https://www.familypsychiatrists.org/s/family-work-in-outpatient-setting-Carolyn-Fulton.pdf) (Carolyn Fulton)"},{time:"11:45 PM",title:"[Role of Family Engagement in PHP](https://www.familypsychiatrists.org/s/Role-of-Family-Engagement-in-a-Partial-Hospital-Program-Tumuluru.pdf) (Dr. Tumuluru)"},{time:"12:20 PM",title:"Break"},{time:"12:30 PM",title:"[Family and Family Interventions in Institutional Care](https://www.familypsychiatrists.org/s/family-interventions-in-institutionalized-care-settings-Gogineni.pdf) (Dr. Gogineni)"},{time:"1:05 PM",title:"[Understanding and Treating Adolescent Eating Disorders](https://www.familypsychiatrists.org/s/understanding-and-treating-adolescent-eating-disorders-the-role-of-the-psychiatrist-in-family-based.pdf) (Dr. Spector and Dr. Spettigue)"},{time:"1:40 PM",title:"Break Out Rooms"}]},nk=[{src:"https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",alt:"Conference attendees networking",title:"Networking Sessions",description:"Connect with fellow psychiatrists and mental health professionals"},{src:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",alt:"Keynote speaker presentation",title:"Keynote Presentations",description:"Insightful talks from leading experts in family psychiatry"},{src:"https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",alt:"Workshop session",title:"Interactive Workshops",description:"Hands-on learning experiences and skill development"},{src:"https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",alt:"Conference venue and atmosphere",title:"Conference Venue",description:"State-of-the-art facilities for an exceptional learning experience"}],rk={class:"home"},sk={class:"about",id:"about"},ik={class:"conference-and-carousel"},ok={class:"columns-container"},ak={class:"conference-column",id:"conference"},lk={class:"carousel-column",id:"conference-carousel"},ck={class:"carousel-container"},uk=["src","alt"],hk={class:"carousel-caption"},fk={class:"carousel-indicators"},dk=["onClick","aria-label"],pk={__name:"HomeView",setup(t){const e=ct(nk),n=ct(0);let r=null;const s=()=>{n.value=(n.value+1)%e.value.length},i=()=>{n.value=n.value===0?e.value.length-1:n.value-1},a=u=>{n.value=u},l=()=>{r=setInterval(s,5e3)},c=()=>{r&&(clearInterval(r),r=null)};return ys(()=>{l()}),ma(()=>{c()}),(u,f)=>(ie(),he("section",rk,[f[4]||(f[4]=Wp('<div class="intro" data-v-95b549ec><div class="logo-column" data-v-95b549ec><img src="'+_S+'" alt="AFP Logo" class="logo-img" data-v-95b549ec></div><div class="welcome-column" id="welcome" data-v-95b549ec><h1 class="welcome-title" data-v-95b549ec>Welcome to the Association of Family Psychiatrists</h1><p class="welcome-subtitle" data-v-95b549ec> Promoting mental wellness and supporting family psychiatry through education, advocacy, and community. </p></div></div>',1)),V("div",sk,[f[1]||(f[1]=V("h2",null,"About Us",-1)),f[2]||(f[2]=V("p",null," The Association of Family Psychiatrists is dedicated to advancing the field of family mental health by fostering professional development, sharing best practices, and connecting practitioners across the country. ",-1)),ne(we(Xe),{to:"/about",class:"cta-button"},{default:Ge(()=>f[0]||(f[0]=[We("Learn More")])),_:1,__:[0]})]),ne(AS,Ai(we(XR),{id:"featured-event"}),null,16),V("div",ik,[f[3]||(f[3]=V("h2",{class:"section-title"},"Conference Highlights",-1)),V("div",ok,[V("div",ak,[ne(E_,ny(Gp(we(tk))),null,16)]),V("div",lk,[V("div",ck,[V("div",{class:"carousel-track",style:Ur({transform:`translateX(-${n.value*100}%)`})},[(ie(!0),he(Ze,null,Cr(e.value,(p,g)=>(ie(),he("div",{key:g,class:"carousel-slide"},[V("img",{src:p.src,alt:p.alt,class:"carousel-image"},null,8,uk),V("div",hk,[V("h3",null,Te(p.title),1),V("p",null,Te(p.description),1)])]))),128))],4),V("button",{class:"carousel-button prev",onClick:i,"aria-label":"Previous slide"}," ‹ "),V("button",{class:"carousel-button next",onClick:s,"aria-label":"Next slide"}," › "),V("div",fk,[(ie(!0),he(Ze,null,Cr(e.value,(p,g)=>(ie(),he("button",{key:g,class:kr(["indicator",{active:n.value===g}]),onClick:E=>a(g),"aria-label":`Go to slide ${g+1}`},null,10,dk))),128))])])])])]),ne(JR,{id:"affiliated-organizations"}),ne(na,{title:"Affiliated Organizations",cards:we(YR),id:"affiliated-organizations"},null,8,["cards"]),ne(QS,{title:"Featured Books / Publications",articles:we(ZR),id:"featured-books"},null,8,["articles"]),ne(na,{title:"2024 Winners of our Annual Award for Excellence in Family Care",cards:we(ek),id:"award-winners"},null,8,["cards"])]))}},gk=dt(pk,[["__scopeId","data-v-95b549ec"]]),mk={class:"overlay animate-fade-slide"},_k={class:"title"},yk={class:"subtitle"},vk={__name:"Hero",props:{title:String,subtitle:String,image:String},setup(t){return(e,n)=>(ie(),he("section",{class:"hero",style:Ur({backgroundImage:`url(${t.image})`})},[V("div",mk,[V("h1",_k,Te(t.title),1),V("p",yk,Te(t.subtitle),1)])],4))}},Ek=dt(vk,[["__scopeId","data-v-7cb3ac27"]]),wk=[{image:"/members/john-doe.jpg",title:"Dr. John Doe",subtitle:"Family Psychiatrist • New York",details:"Dr. Doe specializes in adolescent mental health and family therapy, with over 15 years of experience."},{image:"/members/jane-smith.jpg",title:"Dr. Jane Smith",subtitle:"Clinical Psychiatrist • +1-408-310-3927",details:"Expert in cognitive behavioral therapy and mindfulness-based interventions. Passionate about community education."},{image:"/members/alex-lee.jpg",title:"Dr. Alex Lee",subtitle:"Child & Adolescent Psychiatrist • Illinois",details:"Focusing on early intervention strategies and supportive therapy for children and their families."},{image:"/members/susan-chen.jpg",title:"Dr. Susan Chen",subtitle:"Family Systems Psychiatrist • Texas",details:"Published author and speaker on family systems theory and cross-cultural psychiatry."}],bk=[{title:"Dr. Sarah Johnson",subtitle:"President",description:"Leading the association with over 15 years of experience in family psychiatry. Specializes in child and adolescent mental health.",image:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",link:"#"},{title:"Dr. Michael Chen",subtitle:"Vice President",description:"Oversees educational programs and professional development initiatives. Expert in adult psychiatry and family therapy.",image:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",link:"#"},{title:"Dr. Emily Rodriguez",subtitle:"Secretary",description:"Manages communications and member services. Specializes in geriatric psychiatry and family care coordination.",image:"https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",link:"#"},{title:"Dr. James Wilson",subtitle:"Treasurer",description:"Oversees financial management and budget planning. Expert in addiction psychiatry and family recovery programs.",image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",link:"#"}],Tk={class:"about-page"},Ik={class:"intro"},Ak={class:"officers"},Sk={__name:"AboutView",setup(t){return(e,n)=>(ie(),he("div",Tk,[V("section",Ik,[ne(Ek,{title:"Welcome to the Association of Family Psychiatrists",subtitle:"Promoting mental wellness and supporting family psychiatry through education, advocacy, and community.",image:"https://images.squarespace-cdn.com/content/v1/5748cc56746fb940f105bd1c/22364a6b-02db-4f89-8840-8ad7de5d6682/family+therapy+pic.jpg"}),n[0]||(n[0]=V("div",{class:"section-content",id:"about-statement"},[V("h1",{class:"section-heading"},"About the Association"),V("p",null," The Association of Family Psychiatrists is committed to advancing the field of family mental health by fostering collaboration, research, education, and advocacy. ")],-1))]),n[2]||(n[2]=Wp('<section class="mission" data-v-c6d751c3><div class="section-content" id="mission-statement" data-v-c6d751c3><h2 class="section-heading" data-v-c6d751c3>Our Mission</h2><p data-v-c6d751c3> We strive to support psychiatrists and mental health professionals who work with families, providing resources, training, and a professional network to promote mental wellness at every stage of life. </p></div></section><section class="vision" data-v-c6d751c3><div class="section-content" id="vision-statement" data-v-c6d751c3><h2 class="section-heading" data-v-c6d751c3>Our Vision</h2><p data-v-c6d751c3> A world where every family has access to compassionate, evidence-based psychiatric care. </p></div></section>',2)),V("section",Ak,[n[1]||(n[1]=V("div",{class:"section-content",id:"officers-section"},[V("h2",{class:"section-heading"},"Our Leadership Team"),V("p",null," Meet the dedicated professionals who guide our association and work tirelessly to advance the field of family psychiatry. ")],-1)),ne(na,{title:"Executive Officers",cards:we(bk)},null,8,["cards"])])]))}},Rk=dt(Sk,[["__scopeId","data-v-c6d751c3"]]),kk={class:"info-section"},Ck={class:"heading"},Pk={key:0,class:"subheading"},xk={class:"description"},Ok={__name:"InformationSection",props:{heading:String,subheading:String,description:String,link:String},setup(t){return(e,n)=>{const r=Jy("RouterLink");return ie(),he("section",kk,[V("h2",Ck,Te(t.heading),1),t.subheading?(ie(),he("h3",Pk,Te(t.subheading),1)):Ut("",!0),V("p",xk,Te(t.description),1),ne(r,{to:t.link,class:"read-more"},{default:Ge(()=>n[0]||(n[0]=[We("Read More")])),_:1,__:[0]},8,["to"])])}}},vr=dt(Ok,[["__scopeId","data-v-af70b806"]]),Dk={class:"resources"},Nk={key:1},Vk={__name:"ResourcesView",setup(t){return(e,n)=>(ie(),he("section",Dk,[e.$route.name!=="resources"?(ie(),Ii(we(Rc),{key:0})):(ie(),he("div",Nk,[n[0]||(n[0]=V("h1",{class:"page-title animate-fade-slide"},"Resources",-1)),ne(vr,{class:"animate-fade-slide",heading:"Our Listserv",subheading:"Join the discussion",description:"Visit the discussion group of the Association of Family Psychiatry on Google Groups.",link:"/resources/listserv"}),ne(vr,{class:"animate-fade-slide",heading:"Articles of Interest",subheading:"",description:"Archived articles of interest to our members",link:"/resources/articles"}),ne(vr,{class:"animate-fade-slide",heading:"General Web Resources",subheading:"",description:"In addition to this page, resources including books and articles can be found throughout the website.",link:"/resources/web"}),ne(vr,{class:"animate-fade-slide",heading:"Child & Adolescent ",description:"Resources for child and adolescent psychiatry",link:"/resources/child-adolescent"}),ne(vr,{class:"animate-fade-slide",heading:"Couples & Adults ",description:"Resources for couples and adults",link:"/resources/couples-adults"}),ne(vr,{class:"animate-fade-slide",heading:"Culture & Family ",description:"Resources for culture and family",link:"/resources/culture-family"}),ne(vr,{class:"animate-fade-slide",heading:"Training ",description:"Resources for training",link:"/resources/training"})]))]))}},Mk={class:"member-view"},Lk={key:0,class:"verification-section animate-fade-slide"},Fk={class:"verification-card"},Uk={class:"form-group"},$k=["disabled"],Bk={class:"form-group"},jk=["disabled"],Hk=["disabled"],zk={key:0,class:"error-message"},qk={key:1,class:"success-message"},Gk={key:1,class:"member-directory animate-fade-slide"},Wk={class:"welcome-message"},Kk={__name:"MemberView",setup(t){const e=ct(!1),n=ct(""),r=ct(""),s=ct(!1),i=ct(""),a=ct("");ys(()=>{const u=localStorage.getItem("afp_member");if(u)try{const f=JSON.parse(u);n.value=f.name,r.value=f.email,e.value=!0}catch(f){console.error("Error parsing saved member data:",f),localStorage.removeItem("afp_member")}});const l=async()=>{if(!n.value||!r.value){i.value="Please enter both name and email.";return}s.value=!0,i.value="",a.value="";try{const u=await fetch("https://us-central1-afp-site-c1bd9.cloudfunctions.net/verifyMember",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.value,email:r.value})}),f=await u.json();if(u.ok&&f.isMember){const p={name:n.value,email:r.value,verifiedAt:new Date().toISOString()};localStorage.setItem("afp_member",JSON.stringify(p)),a.value="Membership verified! Welcome to the member directory.",setTimeout(()=>{e.value=!0,a.value=""},1500)}else i.value=f.error||"Membership not found. Please check your information or contact us if you believe this is an error."}catch(u){console.error("Verification error:",u),i.value="An error occurred during verification. Please try again later."}finally{s.value=!1}},c=()=>{localStorage.removeItem("afp_member"),e.value=!1,n.value="",r.value="",i.value="",a.value=""};return(u,f)=>(ie(),he("section",Mk,[f[7]||(f[7]=V("h1",{class:"page-title animate-fade-slide"},"Our Members",-1)),f[8]||(f[8]=V("p",{class:"page-subtitle animate-fade-slide"}," Meet some of the dedicated professionals in our association. ",-1)),e.value?(ie(),he("div",Gk,[V("div",Wk,[V("h2",null,"Welcome, "+Te(n.value)+"!",1),f[6]||(f[6]=V("p",null,"Here are our current members:",-1))]),ne(na,{title:"Members",cards:we(wk)},null,8,["cards"]),V("button",{onClick:c,class:"logout-button"}," Sign Out ")])):(ie(),he("div",Lk,[V("div",Fk,[f[4]||(f[4]=V("h2",null,"Member Verification",-1)),f[5]||(f[5]=V("p",null,"Please enter your information to access the member directory.",-1)),V("form",{onSubmit:Zp(l,["prevent"]),class:"verification-form"},[V("div",Uk,[f[2]||(f[2]=V("label",{for:"memberName"},"Full Name",-1)),Oo(V("input",{id:"memberName","onUpdate:modelValue":f[0]||(f[0]=p=>n.value=p),type:"text",placeholder:"Enter your full name",required:"",disabled:s.value},null,8,$k),[[Nl,n.value]])]),V("div",Bk,[f[3]||(f[3]=V("label",{for:"memberEmail"},"Email Address",-1)),Oo(V("input",{id:"memberEmail","onUpdate:modelValue":f[1]||(f[1]=p=>r.value=p),type:"email",placeholder:"Enter your email address",required:"",disabled:s.value},null,8,jk),[[Nl,r.value]])]),V("button",{type:"submit",class:"verify-button",disabled:s.value},Te(s.value?"Verifying...":"Verify Membership"),9,Hk)],32),i.value?(ie(),he("div",zk,Te(i.value),1)):Ut("",!0),a.value?(ie(),he("div",qk,Te(a.value),1)):Ut("",!0)])]))]))}},Qk=dt(Kk,[["__scopeId","data-v-db43459b"]]),Jk=[{id:"aacap",title:"American Academy of Child and Adolescent Psychiatry Annual Meeting",date:"October 2025",time:"",location:"Annual Meeting",description:"A virtual seminar exploring the latest research in child and adolescent psychiatry.",image:"https://media.istockphoto.com/id/1496377921/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=xuCCbqrrZoE0jKxLd8aW2U3dSjxwJaKw99EDea1q91w=",link:"https://example.com/webinar-child-mental-health",linkLabel:"Join Webinar"},{id:"afp",title:"Annual Family Psychiatry Conference",date:"March 2026",location:"Virtual",description:"Join leading experts in family psychiatry for a full day of workshops and keynotes.",image:"https://media.istockphoto.com/id/1496377580/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=cQAx2DYW0wlK5IgykC0pqGupR2lSwDmw7SEn2fuVgS0=",rsvpLink:"https://example.com/rsvp-conference"},{id:"apa",title:"American Psychological Association Annual Meeting",date:"May 2026",location:"Online",description:"A virtual seminar exploring the latest research in psychiatry.",image:"https://media.istockphoto.com/id/1496377921/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=xuCCbqrrZoE0jKxLd8aW2U3dSjxwJaKw99EDea1q91w=",rsvpLink:"https://example.com/access-webinar"}],Xk={class:"events-view"},Yk={__name:"EventsView",setup(t){return(e,n)=>(ie(),he("section",Xk,[n[0]||(n[0]=V("h1",{class:"animate-fade-slide"},"Upcoming Events",-1)),(ie(!0),he(Ze,null,Cr(we(Jk),r=>(ie(),Ii(E_,Ai({key:r.id},{ref_for:!0},r),null,16))),128))]))}},Zk=dt(Yk,[["__scopeId","data-v-34ea3e05"]]),eC={},tC={class:"contact-view"};function nC(t,e){return ie(),he("section",tC,e[0]||(e[0]=[V("h1",{class:"page-title animate-fade-slide"},"Contact Us",-1),V("p",{class:"page-subtitle animate-fade-slide",style:{"animation-delay":"0.2s"}}," We'd love to hear from you! Reach out with any questions, suggestions, or inquiries. ",-1),V("div",{class:"contact-info animate-fade-slide",style:{"animation-delay":"0.4s"}},[V("p",null,[We("Email: "),V("a",{href:"mailto:info@familypsychiatrists.org"},"info@familypsychiatrists.org")]),V("p",null,"Phone: (555) 123-4567"),V("p",null,"Mailing Address: 123 Main Street, Suite 456, San Francisco, CA 94105")],-1),V("div",{class:"contact-form animate-fade-slide",style:{"animation-delay":"0.6s"}},[V("h2",null,"Send Us a Message"),V("form",{action:"https://formspree.io/f/xanjjwnj",method:"POST",class:"contact-form-form"},[V("input",{type:"text",name:"name",placeholder:"Your Name",required:""}),V("input",{type:"email",name:"_replyto",placeholder:"Your Email",required:""}),V("textarea",{name:"message",placeholder:"Your Message",rows:"5",required:""}),V("input",{type:"hidden",name:"_next",value:"https://yoursite.com/thank-you"}),V("button",{type:"submit",class:"cta-button"},"Send Message")])],-1)]))}const rC=dt(eC,[["render",nC],["__scopeId","data-v-ccf43640"]]),sC=Ew({history:XE(),routes:[{path:"/",name:"home",component:gk},{path:"/about",name:"about",component:Rk},{path:"/resources",name:"resources",component:Vk,children:[{path:"listserv",name:"resources-listserv",component:()=>Pt(()=>import("./ListservView-g95_5asW.js"),__vite__mapDeps([0,1,2]))},{path:"articles",name:"resources-articles",component:()=>Pt(()=>import("./ArticlesView-DvB9oG27.js"),__vite__mapDeps([3,1,2]))},{path:"web",name:"resources-web",component:()=>Pt(()=>import("./WebResourcesView-Dg2EfiSn.js"),__vite__mapDeps([4,1,2]))},{path:"child-adolescent",name:"resources-child-adolescent",component:()=>Pt(()=>import("./ChildAdolescentView-Cv5BaAC1.js"),[]),children:[{path:"aacap",name:"resources-child-adolescent-aacap",component:()=>Pt(()=>import("./AACAPView-CPwodmwh.js"),__vite__mapDeps([5,1,2]))},{path:"family-centered",name:"resources-child-adolescent-family-centered",component:()=>Pt(()=>import("./FamilyCenteredView-C2gTbfyt.js"),__vite__mapDeps([6,1,2]))}]},{path:"couples-adults",name:"resources-couples-adults",component:()=>Pt(()=>import("./CouplesAdultsView-CTwACKKL.js"),[]),children:[{path:"psychiatric-resources",name:"resources-couples-adults-psychiatric-resources",component:()=>Pt(()=>import("./PsychiatricResourcesView-DaYchCeV.js"),__vite__mapDeps([7,1,2]))},{path:"books",name:"resources-couples-adults-books",component:()=>Pt(()=>import("./BooksView-yyxzigC3.js"),__vite__mapDeps([8,1,2]))}]},{path:"culture-family",name:"resources-culture-family",component:()=>Pt(()=>import("./CultureFamilyView-DWvvUS1Z.js"),[])},{path:"training",name:"resources-training",component:()=>Pt(()=>import("./TrainingView-C9SqQ9lM.js"),[])}]},{path:"/members",name:"members",component:Qk},{path:"/events",name:"events",component:Zk},{path:"/contact",name:"contact",component:rC},{path:"/confirmation",name:"confirmation",component:()=>Pt(()=>import("./MembershipConfirmationView-DjecvvtP.js"),[])},{path:"/membership",name:"membership",component:()=>Pt(()=>import("./MembershipView-BjJHHSVg.js"),__vite__mapDeps([9,10]))},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Pt(()=>import("./PlaceholderView-CDzCbBH0.js"),[])}],scrollBehavior(t,e,n){return t.hash?{el:t.hash,behavior:"smooth"}:{top:0}}}),Eu=gE(pS);Eu.use(vE());Eu.use(sC);Eu.mount("#app");export{Ze as F,vr as I,Rc as R,Yp as T,dt as _,he as a,ne as b,Ii as c,V as d,Xe as e,We as f,oC as g,Ut as h,ct as i,ys as j,hp as k,kr as l,Zp as m,Ur as n,ie as o,Oo as p,aC as q,Cr as r,Te as t,we as u,Nl as v,Ge as w};
