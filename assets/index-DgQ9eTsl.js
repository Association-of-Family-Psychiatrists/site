const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ListservView-CHcOqHN1.js","assets/ContentPage-Dc7t9rt7.js","assets/ContentPage-DoamoPAO.css","assets/ArticlesView-BQANrIVZ.js","assets/WebResourcesView-DiVnubB3.js","assets/AACAPView-CJW-m1mB.js","assets/FamilyCenteredView-DnLmwmnU.js","assets/PsychiatricResourcesView-9XUT8ORV.js","assets/BooksView-C4dTvdCz.js","assets/CultureFamilyResourcesView-C2ElRwhn.js","assets/CulturalAnthropologyView-CRw-wzh7.js","assets/CurriculumInAdultPsychiatricResidencyTrainingView-BZcT82SC.js","assets/TrainingProgramsInFamilyPsychiatryView-B0p-mcWH.js","assets/MembershipView-m3wyjjrD.js","assets/MembershipView-TAPGdodT.css"])))=>i.map(i=>d[i]);
var z_=Object.defineProperty;var q_=(t,e,n)=>e in t?z_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var De=(t,e,n)=>q_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function lc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},es=[],hn=()=>{},G_=()=>!1,oa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),cc=t=>t.startsWith("onUpdate:"),st=Object.assign,uc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},W_=Object.prototype.hasOwnProperty,Ce=(t,e)=>W_.call(t,e),oe=Array.isArray,ts=t=>aa(t)==="[object Map]",Md=t=>aa(t)==="[object Set]",fe=t=>typeof t=="function",qe=t=>typeof t=="string",ur=t=>typeof t=="symbol",Fe=t=>t!==null&&typeof t=="object",Ld=t=>(Fe(t)||fe(t))&&fe(t.then)&&fe(t.catch),Fd=Object.prototype.toString,aa=t=>Fd.call(t),K_=t=>aa(t).slice(8,-1),$d=t=>aa(t)==="[object Object]",hc=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,qs=lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),la=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Q_=/-(\w)/g,Gt=la(t=>t.replace(Q_,(e,n)=>n?n.toUpperCase():"")),J_=/\B([A-Z])/g,Fr=la(t=>t.replace(J_,"-$1").toLowerCase()),ca=la(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ja=la(t=>t?`on${ca(t)}`:""),er=(t,e)=>!Object.is(t,e),fo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Ud=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},bl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},X_=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let fh;const ua=()=>fh||(fh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function $r(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?ty(r):$r(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||Fe(t))return t}const Y_=/;(?![^(]*\))/g,Z_=/:([^]+)/,ey=/\/\*[^]*?\*\//g;function ty(t){const e={};return t.replace(ey,"").split(Y_).forEach(n=>{if(n){const r=n.split(Z_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function kr(t){let e="";if(qe(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=kr(t[n]);r&&(e+=r+" ")}else if(Fe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ny(t){if(!t)return null;let{class:e,style:n}=t;return e&&!qe(e)&&(t.class=kr(e)),n&&(t.style=$r(n)),t}const ry="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sy=lc(ry);function Bd(t){return!!t||t===""}const jd=t=>!!(t&&t.__v_isRef===!0),Se=t=>qe(t)?t:t==null?"":oe(t)||Fe(t)&&(t.toString===Fd||!fe(t.toString))?jd(t)?Se(t.value):JSON.stringify(t,Hd,2):String(t),Hd=(t,e)=>jd(e)?Hd(t,e.value):ts(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Xa(r,i)+" =>"]=s,n),{})}:Md(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xa(n))}:ur(e)?Xa(e):Fe(e)&&!oe(e)&&!$d(e)?String(e):e,Xa=(t,e="")=>{var n;return ur(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class zd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){++this._on===1&&(this.prevScope=Ot,Ot=this)}off(){this._on>0&&--this._on===0&&(Ot=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function iy(t){return new zd(t)}function oy(){return Ot}let Ve;const Ya=new WeakSet;class qd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ya.has(this)&&(Ya.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dh(this),Kd(this);const e=Ve,n=Zt;Ve=this,Zt=!0;try{return this.fn()}finally{Qd(this),Ve=e,Zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)pc(e);this.deps=this.depsTail=void 0,dh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ya.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tl(this)&&this.run()}get dirty(){return Tl(this)}}let Gd=0,Gs,Ws;function Wd(t,e=!1){if(t.flags|=8,e){t.next=Ws,Ws=t;return}t.next=Gs,Gs=t}function fc(){Gd++}function dc(){if(--Gd>0)return;if(Ws){let e=Ws;for(Ws=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Gs;){let e=Gs;for(Gs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Kd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),pc(r),ay(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Tl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Jd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Jd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===oi)||(t.globalVersion=oi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Tl(t))))return;t.flags|=2;const e=t.dep,n=Ve,r=Zt;Ve=t,Zt=!0;try{Kd(t);const s=t.fn(t._value);(e.version===0||er(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ve=n,Zt=r,Qd(t),t.flags&=-3}}function pc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)pc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ay(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zt=!0;const Xd=[];function xn(){Xd.push(Zt),Zt=!1}function On(){const t=Xd.pop();Zt=t===void 0?!0:t}function dh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ve;Ve=void 0;try{e()}finally{Ve=n}}}let oi=0;class ly{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ve||!Zt||Ve===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ve)n=this.activeLink=new ly(Ve,this),Ve.deps?(n.prevDep=Ve.depsTail,Ve.depsTail.nextDep=n,Ve.depsTail=n):Ve.deps=Ve.depsTail=n,Yd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ve.depsTail,n.nextDep=void 0,Ve.depsTail.nextDep=n,Ve.depsTail=n,Ve.deps===n&&(Ve.deps=r)}return n}trigger(e){this.version++,oi++,this.notify(e)}notify(e){fc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{dc()}}}function Yd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Yd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Il=new WeakMap,Ir=Symbol(""),Al=Symbol(""),ai=Symbol("");function wt(t,e,n){if(Zt&&Ve){let r=Il.get(t);r||Il.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new gc),s.map=r,s.key=n),s.track()}}function Tn(t,e,n,r,s,i){const a=Il.get(t);if(!a){oi++;return}const l=c=>{c&&c.trigger()};if(fc(),e==="clear")a.forEach(l);else{const c=oe(t),u=c&&hc(n);if(c&&n==="length"){const f=Number(r);a.forEach((p,g)=>{(g==="length"||g===ai||!ur(g)&&g>=f)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),u&&l(a.get(ai)),e){case"add":c?u&&l(a.get("length")):(l(a.get(Ir)),ts(t)&&l(a.get(Al)));break;case"delete":c||(l(a.get(Ir)),ts(t)&&l(a.get(Al)));break;case"set":ts(t)&&l(a.get(Ir));break}}dc()}function Wr(t){const e=Ae(t);return e===t?e:(wt(e,"iterate",ai),qt(t)?e:e.map(ut))}function ha(t){return wt(t=Ae(t),"iterate",ai),t}const cy={__proto__:null,[Symbol.iterator](){return Za(this,Symbol.iterator,ut)},concat(...t){return Wr(this).concat(...t.map(e=>oe(e)?Wr(e):e))},entries(){return Za(this,"entries",t=>(t[1]=ut(t[1]),t))},every(t,e){return vn(this,"every",t,e,void 0,arguments)},filter(t,e){return vn(this,"filter",t,e,n=>n.map(ut),arguments)},find(t,e){return vn(this,"find",t,e,ut,arguments)},findIndex(t,e){return vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return vn(this,"findLast",t,e,ut,arguments)},findLastIndex(t,e){return vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return el(this,"includes",t)},indexOf(...t){return el(this,"indexOf",t)},join(t){return Wr(this).join(t)},lastIndexOf(...t){return el(this,"lastIndexOf",t)},map(t,e){return vn(this,"map",t,e,void 0,arguments)},pop(){return Ls(this,"pop")},push(...t){return Ls(this,"push",t)},reduce(t,...e){return ph(this,"reduce",t,e)},reduceRight(t,...e){return ph(this,"reduceRight",t,e)},shift(){return Ls(this,"shift")},some(t,e){return vn(this,"some",t,e,void 0,arguments)},splice(...t){return Ls(this,"splice",t)},toReversed(){return Wr(this).toReversed()},toSorted(t){return Wr(this).toSorted(t)},toSpliced(...t){return Wr(this).toSpliced(...t)},unshift(...t){return Ls(this,"unshift",t)},values(){return Za(this,"values",ut)}};function Za(t,e,n){const r=ha(t),s=r[e]();return r!==t&&!qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const uy=Array.prototype;function vn(t,e,n,r,s,i){const a=ha(t),l=a!==t&&!qt(t),c=a[e];if(c!==uy[e]){const p=c.apply(t,i);return l?ut(p):p}let u=n;a!==t&&(l?u=function(p,g){return n.call(this,ut(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=c.call(a,u,r);return l&&s?s(f):f}function ph(t,e,n,r){const s=ha(t);let i=n;return s!==t&&(qt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,ut(l),c,t)}),s[e](i,...r)}function el(t,e,n){const r=Ae(t);wt(r,"iterate",ai);const s=r[e](...n);return(s===-1||s===!1)&&yc(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Ls(t,e,n=[]){xn(),fc();const r=Ae(t)[e].apply(t,n);return dc(),On(),r}const hy=lc("__proto__,__v_isRef,__isVue"),Zd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ur));function fy(t){ur(t)||(t=String(t));const e=Ae(this);return wt(e,"has",t),e.hasOwnProperty(t)}class ep{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?by:sp:i?rp:np).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=oe(e);if(!s){let c;if(a&&(c=cy[n]))return c;if(n==="hasOwnProperty")return fy}const l=Reflect.get(e,n,Tt(e)?e:r);return(ur(n)?Zd.has(n):hy(n))||(s||wt(e,"get",n),i)?l:Tt(l)?a&&hc(n)?l:l.value:Fe(l)?s?op(l):fa(l):l}}class tp extends ep{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=sr(i);if(!qt(r)&&!sr(r)&&(i=Ae(i),r=Ae(r)),!oe(e)&&Tt(i)&&!Tt(r))return c?!1:(i.value=r,!0)}const a=oe(e)&&hc(n)?Number(n)<e.length:Ce(e,n),l=Reflect.set(e,n,r,Tt(e)?e:s);return e===Ae(s)&&(a?er(r,i)&&Tn(e,"set",n,r):Tn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Tn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ur(n)||!Zd.has(n))&&wt(e,"has",n),r}ownKeys(e){return wt(e,"iterate",oe(e)?"length":Ir),Reflect.ownKeys(e)}}class dy extends ep{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const py=new tp,gy=new dy,my=new tp(!0);const Sl=t=>t,to=t=>Reflect.getPrototypeOf(t);function _y(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),a=ts(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,u=s[t](...r),f=n?Sl:e?ko:ut;return!e&&wt(i,"iterate",c?Al:Ir),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function no(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function yy(t,e){const n={get(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);t||(er(s,l)&&wt(a,"get",s),wt(a,"get",l));const{has:c}=to(a),u=e?Sl:t?ko:ut;if(c.call(a,s))return u(i.get(s));if(c.call(a,l))return u(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&wt(Ae(s),"iterate",Ir),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);return t||(er(s,l)&&wt(a,"has",s),wt(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Ae(l),u=e?Sl:t?ko:ut;return!t&&wt(c,"iterate",Ir),l.forEach((f,p)=>s.call(i,u(f),u(p),a))}};return st(n,t?{add:no("add"),set:no("set"),delete:no("delete"),clear:no("clear")}:{add(s){!e&&!qt(s)&&!sr(s)&&(s=Ae(s));const i=Ae(this);return to(i).has.call(i,s)||(i.add(s),Tn(i,"add",s,s)),this},set(s,i){!e&&!qt(i)&&!sr(i)&&(i=Ae(i));const a=Ae(this),{has:l,get:c}=to(a);let u=l.call(a,s);u||(s=Ae(s),u=l.call(a,s));const f=c.call(a,s);return a.set(s,i),u?er(i,f)&&Tn(a,"set",s,i):Tn(a,"add",s,i),this},delete(s){const i=Ae(this),{has:a,get:l}=to(i);let c=a.call(i,s);c||(s=Ae(s),c=a.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&Tn(i,"delete",s,void 0),u},clear(){const s=Ae(this),i=s.size!==0,a=s.clear();return i&&Tn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=_y(s,t,e)}),n}function mc(t,e){const n=yy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ce(n,s)&&s in r?n:r,s,i)}const vy={get:mc(!1,!1)},Ey={get:mc(!1,!0)},wy={get:mc(!0,!1)};const np=new WeakMap,rp=new WeakMap,sp=new WeakMap,by=new WeakMap;function Ty(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Iy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ty(K_(t))}function fa(t){return sr(t)?t:_c(t,!1,py,vy,np)}function ip(t){return _c(t,!1,my,Ey,rp)}function op(t){return _c(t,!0,gy,wy,sp)}function _c(t,e,n,r,s){if(!Fe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Iy(t);if(i===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function ns(t){return sr(t)?ns(t.__v_raw):!!(t&&t.__v_isReactive)}function sr(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function yc(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function ap(t){return!Ce(t,"__v_skip")&&Object.isExtensible(t)&&Ud(t,"__v_skip",!0),t}const ut=t=>Fe(t)?fa(t):t,ko=t=>Fe(t)?op(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function Qe(t){return lp(t,!1)}function Ay(t){return lp(t,!0)}function lp(t,e){return Tt(t)?t:new Sy(t,e)}class Sy{constructor(e,n){this.dep=new gc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:ut(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qt(e)||sr(e);e=r?e:Ae(e),er(e,n)&&(this._rawValue=e,this._value=r?e:ut(e),this.dep.trigger())}}function Ie(t){return Tt(t)?t.value:t}const Ry={get:(t,e,n)=>e==="__v_raw"?t:Ie(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Tt(s)&&!Tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function cp(t){return ns(t)?t:new Proxy(t,Ry)}class ky{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ve!==this)return Wd(this,!0),!0}get value(){const e=this.dep.track();return Jd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cy(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new ky(r,s,n)}const ro={},Co=new WeakMap;let Er;function Py(t,e=!1,n=Er){if(n){let r=Co.get(n);r||Co.set(n,r=[]),r.push(t)}}function xy(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,u=z=>s?z:qt(z)||s===!1||s===0?In(z,1):In(z);let f,p,g,_,R=!1,P=!1;if(Tt(t)?(p=()=>t.value,R=qt(t)):ns(t)?(p=()=>u(t),R=!0):oe(t)?(P=!0,R=t.some(z=>ns(z)||qt(z)),p=()=>t.map(z=>{if(Tt(z))return z.value;if(ns(z))return u(z);if(fe(z))return c?c(z,2):z()})):fe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){xn();try{g()}finally{On()}}const z=Er;Er=f;try{return c?c(t,3,[_]):t(_)}finally{Er=z}}:p=hn,e&&s){const z=p,le=s===!0?1/0:s;p=()=>In(z(),le)}const O=oy(),H=()=>{f.stop(),O&&O.active&&uc(O.effects,f)};if(i&&e){const z=e;e=(...le)=>{z(...le),H()}}let $=P?new Array(t.length).fill(ro):ro;const j=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(e){const le=f.run();if(s||R||(P?le.some((ie,A)=>er(ie,$[A])):er(le,$))){g&&g();const ie=Er;Er=f;try{const A=[le,$===ro?void 0:P&&$[0]===ro?[]:$,_];$=le,c?c(e,3,A):e(...A)}finally{Er=ie}}}else f.run()};return l&&l(j),f=new qd(p),f.scheduler=a?()=>a(j,!1):j,_=z=>Py(z,!1,f),g=f.onStop=()=>{const z=Co.get(f);if(z){if(c)c(z,4);else for(const le of z)le();Co.delete(f)}},e?r?j(!0):$=f.run():a?a(j.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function In(t,e=1/0,n){if(e<=0||!Fe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Tt(t))In(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)In(t[r],e,n);else if(Md(t)||ts(t))t.forEach(r=>{In(r,e,n)});else if($d(t)){for(const r in t)In(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&In(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ii(t,e,n,r){try{return r?t(...r):t()}catch(s){da(s,e,n)}}function tn(t,e,n,r){if(fe(t)){const s=Ii(t,e,n,r);return s&&Ld(s)&&s.catch(i=>{da(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(tn(t[i],e,n,r));return s}}function da(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ne;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){xn(),Ii(i,null,10,[t,c,u]),On();return}}Oy(t,n,s,r,a)}function Oy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let an=-1;const rs=[];let Gn=null,Kr=0;const up=Promise.resolve();let Po=null;function hp(t){const e=Po||up;return t?e.then(this?t.bind(this):t):e}function Dy(t){let e=an+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=li(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function vc(t){if(!(t.flags&1)){const e=li(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=li(n)?Rt.push(t):Rt.splice(Dy(e),0,t),t.flags|=1,fp()}}function fp(){Po||(Po=up.then(pp))}function Ny(t){oe(t)?rs.push(...t):Gn&&t.id===-1?Gn.splice(Kr+1,0,t):t.flags&1||(rs.push(t),t.flags|=1),fp()}function gh(t,e,n=an+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function dp(t){if(rs.length){const e=[...new Set(rs)].sort((n,r)=>li(n)-li(r));if(rs.length=0,Gn){Gn.push(...e);return}for(Gn=e,Kr=0;Kr<Gn.length;Kr++){const n=Gn[Kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Gn=null,Kr=0}}const li=t=>t.id==null?t.flags&2?-1:1/0:t.id;function pp(t){try{for(an=0;an<Rt.length;an++){const e=Rt[an];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ii(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;an<Rt.length;an++){const e=Rt[an];e&&(e.flags&=-2)}an=-1,Rt.length=0,dp(),Po=null,(Rt.length||rs.length)&&pp()}}let Nt=null,gp=null;function xo(t){const e=Nt;return Nt=t,gp=t&&t.type.__scopeId||null,e}function Ge(t,e=Nt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Sh(-1);const i=xo(e);let a;try{a=t(...s)}finally{xo(i),r._d&&Sh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Oo(t,e){if(Nt===null)return t;const n=va(Nt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ne]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&In(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function gr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(xn(),tn(c,n,8,[t.el,l,t,e]),On())}}const Vy=Symbol("_vte"),mp=t=>t.__isTeleport,Wn=Symbol("_leaveCb"),so=Symbol("_enterCb");function My(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ys(()=>{t.isMounted=!0}),Ec(()=>{t.isUnmounting=!0}),t}const zt=[Function,Array],_p={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},yp=t=>{const e=t.subTree;return e.component?yp(e.component):e},Ly={name:"BaseTransition",props:_p,setup(t,{slots:e}){const n=Ov(),r=My();return()=>{const s=e.default&&wp(e.default(),!0);if(!s||!s.length)return;const i=vp(s),a=Ae(t),{mode:l}=a;if(r.isLeaving)return tl(i);const c=mh(i);if(!c)return tl(i);let u=Rl(c,a,r,n,p=>u=p);c.type!==kt&&ci(c,u);let f=n.subTree&&mh(n.subTree);if(f&&f.type!==kt&&!br(c,f)&&yp(n).type!==kt){let p=Rl(f,a,r,n);if(ci(f,p),l==="out-in"&&c.type!==kt)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},tl(i);l==="in-out"&&c.type!==kt?p.delayLeave=(g,_,R)=>{const P=Ep(r,f);P[String(f.key)]=f,g[Wn]=()=>{_(),g[Wn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{R(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function vp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==kt){e=n;break}}return e}const Fy=Ly;function Ep(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Rl(t,e,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:_,onAfterLeave:R,onLeaveCancelled:P,onBeforeAppear:O,onAppear:H,onAfterAppear:$,onAppearCancelled:j}=e,z=String(t.key),le=Ep(n,t),ie=(y,I)=>{y&&tn(y,r,9,I)},A=(y,I)=>{const S=I[1];ie(y,I),oe(y)?y.every(T=>T.length<=1)&&S():y.length<=1&&S()},v={mode:a,persisted:l,beforeEnter(y){let I=c;if(!n.isMounted)if(i)I=O||c;else return;y[Wn]&&y[Wn](!0);const S=le[z];S&&br(t,S)&&S.el[Wn]&&S.el[Wn](),ie(I,[y])},enter(y){let I=u,S=f,T=p;if(!n.isMounted)if(i)I=H||u,S=$||f,T=j||p;else return;let E=!1;const xe=y[so]=Xe=>{E||(E=!0,Xe?ie(T,[y]):ie(S,[y]),v.delayedLeave&&v.delayedLeave(),y[so]=void 0)};I?A(I,[y,xe]):xe()},leave(y,I){const S=String(t.key);if(y[so]&&y[so](!0),n.isUnmounting)return I();ie(g,[y]);let T=!1;const E=y[Wn]=xe=>{T||(T=!0,I(),xe?ie(P,[y]):ie(R,[y]),y[Wn]=void 0,le[S]===t&&delete le[S])};le[S]=t,_?A(_,[y,E]):E()},clone(y){const I=Rl(y,e,n,r,s);return s&&s(I),I}};return v}function tl(t){if(pa(t))return t=ir(t),t.children=null,t}function mh(t){if(!pa(t))return mp(t.type)&&t.children?vp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function ci(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ci(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===tt?(a.patchFlag&128&&s++,r=r.concat(wp(a.children,e,l))):(e||a.type!==kt)&&r.push(l!=null?ir(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function bp(t,e){return fe(t)?st({name:t.name},e,{setup:t}):t}function Tp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Do(t,e,n,r,s=!1){if(oe(t)){t.forEach((R,P)=>Do(R,e&&(oe(e)?e[P]:e),n,r,s));return}if(Ks(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Do(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?va(r.component):r.el,a=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===Ne?l.refs={}:l.refs,p=l.setupState,g=Ae(p),_=p===Ne?()=>!1:R=>Ce(g,R);if(u!=null&&u!==c&&(qe(u)?(f[u]=null,_(u)&&(p[u]=null)):Tt(u)&&(u.value=null)),fe(c))Ii(c,l,12,[a,f]);else{const R=qe(c),P=Tt(c);if(R||P){const O=()=>{if(t.f){const H=R?_(c)?p[c]:f[c]:c.value;s?oe(H)&&uc(H,i):oe(H)?H.includes(i)||H.push(i):R?(f[c]=[i],_(c)&&(p[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else R?(f[c]=a,_(c)&&(p[c]=a)):P&&(c.value=a,t.k&&(f[t.k]=a))};a?(O.id=-1,Ft(O,n)):O()}}}ua().requestIdleCallback;ua().cancelIdleCallback;const Ks=t=>!!t.type.__asyncLoader,pa=t=>t.type.__isKeepAlive;function $y(t,e){Ip(t,"a",e)}function Uy(t,e){Ip(t,"da",e)}function Ip(t,e,n=ht){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ga(e,r,n),n){let s=n.parent;for(;s&&s.parent;)pa(s.parent.vnode)&&By(r,e,n,s),s=s.parent}}function By(t,e,n,r){const s=ga(e,t,r,!0);ma(()=>{uc(r[e],s)},n)}function ga(t,e,n=ht,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{xn();const l=Si(n),c=tn(e,n,t,a);return l(),On(),c});return r?s.unshift(i):s.push(i),i}}const Mn=t=>(e,n=ht)=>{(!hi||t==="sp")&&ga(t,(...r)=>e(...r),n)},jy=Mn("bm"),ys=Mn("m"),Hy=Mn("bu"),zy=Mn("u"),Ec=Mn("bum"),ma=Mn("um"),qy=Mn("sp"),Gy=Mn("rtg"),Wy=Mn("rtc");function Ky(t,e=ht){ga("ec",t,e)}const Ap="components",Qy="directives";function Jy(t,e){return Sp(Ap,t,!0,e)||t}const Xy=Symbol.for("v-ndc");function Yy(t){return Sp(Qy,t)}function Sp(t,e,n=!0,r=!1){const s=Nt||ht;if(s){const i=s.type;if(t===Ap){const l=Lv(i,!1);if(l&&(l===e||l===Gt(e)||l===ca(Gt(e))))return i}const a=_h(s[t]||i[t],e)||_h(s.appContext[t],e);return!a&&r?i:a}}function _h(t,e){return t&&(t[e]||t[Gt(e)]||t[ca(Gt(e))])}function Cr(t,e,n,r){let s;const i=n,a=oe(t);if(a||qe(t)){const l=a&&ns(t);let c=!1,u=!1;l&&(c=!qt(t),u=sr(t),t=ha(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?ko(ut(t[f])):ut(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Fe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const kl=t=>t?Kp(t)?va(t):kl(t.parent):null,Qs=st(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>kl(t.parent),$root:t=>kl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>kp(t),$forceUpdate:t=>t.f||(t.f=()=>{vc(t.update)}),$nextTick:t=>t.n||(t.n=hp.bind(t.proxy)),$watch:t=>vv.bind(t)}),nl=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Ce(t,e),Zy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(nl(r,e))return a[e]=1,r[e];if(s!==Ne&&Ce(s,e))return a[e]=2,s[e];if((u=t.propsOptions[0])&&Ce(u,e))return a[e]=3,i[e];if(n!==Ne&&Ce(n,e))return a[e]=4,n[e];Cl&&(a[e]=0)}}const f=Qs[e];let p,g;if(f)return e==="$attrs"&&wt(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Ne&&Ce(n,e))return a[e]=4,n[e];if(g=c.config.globalProperties,Ce(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return nl(s,e)?(s[e]=n,!0):r!==Ne&&Ce(r,e)?(r[e]=n,!0):Ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==Ne&&Ce(t,a)||nl(e,a)||(l=i[0])&&Ce(l,a)||Ce(r,a)||Ce(Qs,a)||Ce(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yh(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cl=!0;function ev(t){const e=kp(t),n=t.proxy,r=t.ctx;Cl=!1,e.beforeCreate&&vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:R,activated:P,deactivated:O,beforeDestroy:H,beforeUnmount:$,destroyed:j,unmounted:z,render:le,renderTracked:ie,renderTriggered:A,errorCaptured:v,serverPrefetch:y,expose:I,inheritAttrs:S,components:T,directives:E,filters:xe}=e;if(u&&tv(u,r,null),a)for(const ye in a){const me=a[ye];fe(me)&&(r[ye]=me.bind(n))}if(s){const ye=s.call(n,n);Fe(ye)&&(t.data=fa(ye))}if(Cl=!0,i)for(const ye in i){const me=i[ye],Mt=fe(me)?me.bind(n,n):fe(me.get)?me.get.bind(n,n):hn,Wt=!fe(me)&&fe(me.set)?me.set.bind(n):hn,Bt=Ct({get:Mt,set:Wt});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:Be=>Bt.value=Be})}if(l)for(const ye in l)Rp(l[ye],r,n,ye);if(c){const ye=fe(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(me=>{po(me,ye[me])})}f&&vh(f,t,"c");function Ue(ye,me){oe(me)?me.forEach(Mt=>ye(Mt.bind(n))):me&&ye(me.bind(n))}if(Ue(jy,p),Ue(ys,g),Ue(Hy,_),Ue(zy,R),Ue($y,P),Ue(Uy,O),Ue(Ky,v),Ue(Wy,ie),Ue(Gy,A),Ue(Ec,$),Ue(ma,z),Ue(qy,y),oe(I))if(I.length){const ye=t.exposed||(t.exposed={});I.forEach(me=>{Object.defineProperty(ye,me,{get:()=>n[me],set:Mt=>n[me]=Mt})})}else t.exposed||(t.exposed={});le&&t.render===hn&&(t.render=le),S!=null&&(t.inheritAttrs=S),T&&(t.components=T),E&&(t.directives=E),y&&Tp(t)}function tv(t,e,n=hn){oe(t)&&(t=Pl(t));for(const r in t){const s=t[r];let i;Fe(s)?"default"in s?i=en(s.from||r,s.default,!0):i=en(s.from||r):i=en(s),Tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function vh(t,e,n){tn(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rp(t,e,n,r){let s=r.includes(".")?Bp(n,r):()=>n[r];if(qe(t)){const i=e[t];fe(i)&&go(s,i)}else if(fe(t))go(s,t.bind(n));else if(Fe(t))if(oe(t))t.forEach(i=>Rp(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&go(s,i,t)}}function kp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>No(c,u,a,!0)),No(c,e,a)),Fe(e)&&i.set(e,c),c}function No(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&No(t,i,n,!0),s&&s.forEach(a=>No(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=nv[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const nv={data:Eh,props:wh,emits:wh,methods:Hs,computed:Hs,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Hs,directives:Hs,watch:sv,provide:Eh,inject:rv};function Eh(t,e){return e?t?function(){return st(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function rv(t,e){return Hs(Pl(t),Pl(e))}function Pl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Hs(t,e){return t?st(Object.create(null),t,e):e}function wh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:st(Object.create(null),yh(t),yh(e??{})):e}function sv(t,e){if(!t)return e;if(!e)return t;const n=st(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function Cp(){return{app:null,config:{isNativeTag:G_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let iv=0;function ov(t,e){return function(r,s=null){fe(r)||(r=st({},r)),s!=null&&!Fe(s)&&(s=null);const i=Cp(),a=new WeakSet,l=[];let c=!1;const u=i.app={_uid:iv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:$v,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&fe(f.install)?(a.add(f),f.install(u,...p)):fe(f)&&(a.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!c){const _=u._ceVNode||re(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),c=!0,u._container=f,f.__vue_app__=u,va(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(tn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=ss;ss=u;try{return f()}finally{ss=p}}};return u}}let ss=null;function po(t,e){if(ht){let n=ht.provides;const r=ht.parent&&ht.parent.provides;r===n&&(n=ht.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=ht||Nt;if(r||ss){let s=ss?ss._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}const Pp={},xp=()=>Object.create(Pp),Op=t=>Object.getPrototypeOf(t)===Pp;function av(t,e,n,r=!1){const s={},i=xp();t.propsDefaults=Object.create(null),Dp(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:ip(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function lv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Ae(s),[c]=t.propsOptions;let u=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(_a(t.emitsOptions,g))continue;const _=e[g];if(c)if(Ce(i,g))_!==i[g]&&(i[g]=_,u=!0);else{const R=Gt(g);s[R]=xl(c,l,R,_,t,!1)}else _!==i[g]&&(i[g]=_,u=!0)}}}else{Dp(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!Ce(e,p)&&((f=Fr(p))===p||!Ce(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=xl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Ce(e,p))&&(delete i[p],u=!0)}u&&Tn(t.attrs,"set","")}function Dp(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(qs(c))continue;const u=e[c];let f;s&&Ce(s,f=Gt(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:_a(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,a=!0)}if(i){const c=Ae(n),u=l||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=xl(s,c,p,u[p],t,!Ce(u,p))}}return a}function xl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Ce(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&fe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Si(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Fr(n))&&(r=!0))}return r}const cv=new WeakMap;function Np(t,e,n=!1){const r=n?cv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!fe(t)){const f=p=>{c=!0;const[g,_]=Np(p,e,!0);st(a,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Fe(t)&&r.set(t,es),es;if(oe(i))for(let f=0;f<i.length;f++){const p=Gt(i[f]);bh(p)&&(a[p]=Ne)}else if(i)for(const f in i){const p=Gt(f);if(bh(p)){const g=i[f],_=a[p]=oe(g)||fe(g)?{type:g}:st({},g),R=_.type;let P=!1,O=!0;if(oe(R))for(let H=0;H<R.length;++H){const $=R[H],j=fe($)&&$.name;if(j==="Boolean"){P=!0;break}else j==="String"&&(O=!1)}else P=fe(R)&&R.name==="Boolean";_[0]=P,_[1]=O,(P||Ce(_,"default"))&&l.push(p)}}const u=[a,l];return Fe(t)&&r.set(t,u),u}function bh(t){return t[0]!=="$"&&!qs(t)}const wc=t=>t[0]==="_"||t==="$stable",bc=t=>oe(t)?t.map(cn):[cn(t)],uv=(t,e,n)=>{if(e._n)return e;const r=Ge((...s)=>bc(e(...s)),n);return r._c=!1,r},Vp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wc(s))continue;const i=t[s];if(fe(i))e[s]=uv(s,i,r);else if(i!=null){const a=bc(i);e[s]=()=>a}}},Mp=(t,e)=>{const n=bc(e);t.slots.default=()=>n},Lp=(t,e,n)=>{for(const r in e)(n||!wc(r))&&(t[r]=e[r])},hv=(t,e,n)=>{const r=t.slots=xp();if(t.vnode.shapeFlag&32){const s=e._;s?(Lp(r,e,n),n&&Ud(r,"_",s,!0)):Vp(e,r)}else e&&Mp(t,e)},fv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=Ne;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Lp(s,e,n):(i=!e.$stable,Vp(e,s)),a=e}else e&&(Mp(t,e),a={default:1});if(i)for(const l in s)!wc(l)&&a[l]==null&&delete s[l]},Ft=Sv;function dv(t){return pv(t)}function pv(t,e){const n=ua();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=hn,insertStaticContent:R}=t,P=(w,b,k,N=null,L=null,V=null,Q=void 0,G=null,q=!!b.dynamicChildren)=>{if(w===b)return;w&&!br(w,b)&&(N=D(w),Be(w,L,V,!0),w=null),b.patchFlag===-2&&(q=!1,b.dynamicChildren=null);const{type:U,ref:te,shapeFlag:K}=b;switch(U){case ya:O(w,b,k,N);break;case kt:H(w,b,k,N);break;case mo:w==null&&$(b,k,N,Q);break;case tt:T(w,b,k,N,L,V,Q,G,q);break;default:K&1?le(w,b,k,N,L,V,Q,G,q):K&6?E(w,b,k,N,L,V,Q,G,q):(K&64||K&128)&&U.process(w,b,k,N,L,V,Q,G,q,Y)}te!=null&&L&&Do(te,w&&w.ref,V,b||w,!b)},O=(w,b,k,N)=>{if(w==null)r(b.el=l(b.children),k,N);else{const L=b.el=w.el;b.children!==w.children&&u(L,b.children)}},H=(w,b,k,N)=>{w==null?r(b.el=c(b.children||""),k,N):b.el=w.el},$=(w,b,k,N)=>{[w.el,w.anchor]=R(w.children,b,k,N,w.el,w.anchor)},j=({el:w,anchor:b},k,N)=>{let L;for(;w&&w!==b;)L=g(w),r(w,k,N),w=L;r(b,k,N)},z=({el:w,anchor:b})=>{let k;for(;w&&w!==b;)k=g(w),s(w),w=k;s(b)},le=(w,b,k,N,L,V,Q,G,q)=>{b.type==="svg"?Q="svg":b.type==="math"&&(Q="mathml"),w==null?ie(b,k,N,L,V,Q,G,q):y(w,b,L,V,Q,G,q)},ie=(w,b,k,N,L,V,Q,G)=>{let q,U;const{props:te,shapeFlag:K,transition:ee,dirs:ae}=w;if(q=w.el=a(w.type,V,te&&te.is,te),K&8?f(q,w.children):K&16&&v(w.children,q,null,N,L,rl(w,V),Q,G),ae&&gr(w,null,N,"created"),A(q,w,w.scopeId,Q,N),te){for(const de in te)de!=="value"&&!qs(de)&&i(q,de,null,te[de],V,N);"value"in te&&i(q,"value",null,te.value,V),(U=te.onVnodeBeforeMount)&&sn(U,N,w)}ae&&gr(w,null,N,"beforeMount");const se=gv(L,ee);se&&ee.beforeEnter(q),r(q,b,k),((U=te&&te.onVnodeMounted)||se||ae)&&Ft(()=>{U&&sn(U,N,w),se&&ee.enter(q),ae&&gr(w,null,N,"mounted")},L)},A=(w,b,k,N,L)=>{if(k&&_(w,k),N)for(let V=0;V<N.length;V++)_(w,N[V]);if(L){let V=L.subTree;if(b===V||Hp(V.type)&&(V.ssContent===b||V.ssFallback===b)){const Q=L.vnode;A(w,Q,Q.scopeId,Q.slotScopeIds,L.parent)}}},v=(w,b,k,N,L,V,Q,G,q=0)=>{for(let U=q;U<w.length;U++){const te=w[U]=G?Kn(w[U]):cn(w[U]);P(null,te,b,k,N,L,V,Q,G)}},y=(w,b,k,N,L,V,Q)=>{const G=b.el=w.el;let{patchFlag:q,dynamicChildren:U,dirs:te}=b;q|=w.patchFlag&16;const K=w.props||Ne,ee=b.props||Ne;let ae;if(k&&mr(k,!1),(ae=ee.onVnodeBeforeUpdate)&&sn(ae,k,b,w),te&&gr(b,w,k,"beforeUpdate"),k&&mr(k,!0),(K.innerHTML&&ee.innerHTML==null||K.textContent&&ee.textContent==null)&&f(G,""),U?I(w.dynamicChildren,U,G,k,N,rl(b,L),V):Q||me(w,b,G,null,k,N,rl(b,L),V,!1),q>0){if(q&16)S(G,K,ee,k,L);else if(q&2&&K.class!==ee.class&&i(G,"class",null,ee.class,L),q&4&&i(G,"style",K.style,ee.style,L),q&8){const se=b.dynamicProps;for(let de=0;de<se.length;de++){const ve=se[de],gt=K[ve],it=ee[ve];(it!==gt||ve==="value")&&i(G,ve,gt,it,L,k)}}q&1&&w.children!==b.children&&f(G,b.children)}else!Q&&U==null&&S(G,K,ee,k,L);((ae=ee.onVnodeUpdated)||te)&&Ft(()=>{ae&&sn(ae,k,b,w),te&&gr(b,w,k,"updated")},N)},I=(w,b,k,N,L,V,Q)=>{for(let G=0;G<b.length;G++){const q=w[G],U=b[G],te=q.el&&(q.type===tt||!br(q,U)||q.shapeFlag&198)?p(q.el):k;P(q,U,te,null,N,L,V,Q,!0)}},S=(w,b,k,N,L)=>{if(b!==k){if(b!==Ne)for(const V in b)!qs(V)&&!(V in k)&&i(w,V,b[V],null,L,N);for(const V in k){if(qs(V))continue;const Q=k[V],G=b[V];Q!==G&&V!=="value"&&i(w,V,G,Q,L,N)}"value"in k&&i(w,"value",b.value,k.value,L)}},T=(w,b,k,N,L,V,Q,G,q)=>{const U=b.el=w?w.el:l(""),te=b.anchor=w?w.anchor:l("");let{patchFlag:K,dynamicChildren:ee,slotScopeIds:ae}=b;ae&&(G=G?G.concat(ae):ae),w==null?(r(U,k,N),r(te,k,N),v(b.children||[],k,te,L,V,Q,G,q)):K>0&&K&64&&ee&&w.dynamicChildren?(I(w.dynamicChildren,ee,k,L,V,Q,G),(b.key!=null||L&&b===L.subTree)&&Fp(w,b,!0)):me(w,b,k,te,L,V,Q,G,q)},E=(w,b,k,N,L,V,Q,G,q)=>{b.slotScopeIds=G,w==null?b.shapeFlag&512?L.ctx.activate(b,k,N,Q,q):xe(b,k,N,L,V,Q,q):Xe(w,b,q)},xe=(w,b,k,N,L,V,Q)=>{const G=w.component=xv(w,N,L);if(pa(w)&&(G.ctx.renderer=Y),Dv(G,!1,Q),G.asyncDep){if(L&&L.registerDep(G,Ue,Q),!w.el){const q=G.subTree=re(kt);H(null,q,b,k)}}else Ue(G,w,b,k,L,V,Q)},Xe=(w,b,k)=>{const N=b.component=w.component;if(Iv(w,b,k))if(N.asyncDep&&!N.asyncResolved){ye(N,b,k);return}else N.next=b,N.update();else b.el=w.el,N.vnode=b},Ue=(w,b,k,N,L,V,Q)=>{const G=()=>{if(w.isMounted){let{next:K,bu:ee,u:ae,parent:se,vnode:de}=w;{const mt=$p(w);if(mt){K&&(K.el=de.el,ye(w,K,Q)),mt.asyncDep.then(()=>{w.isUnmounted||G()});return}}let ve=K,gt;mr(w,!1),K?(K.el=de.el,ye(w,K,Q)):K=de,ee&&fo(ee),(gt=K.props&&K.props.onVnodeBeforeUpdate)&&sn(gt,se,K,de),mr(w,!0);const it=Ih(w),jt=w.subTree;w.subTree=it,P(jt,it,p(jt.el),D(jt),w,L,V),K.el=it.el,ve===null&&Av(w,it.el),ae&&Ft(ae,L),(gt=K.props&&K.props.onVnodeUpdated)&&Ft(()=>sn(gt,se,K,de),L)}else{let K;const{el:ee,props:ae}=b,{bm:se,m:de,parent:ve,root:gt,type:it}=w,jt=Ks(b);mr(w,!1),se&&fo(se),!jt&&(K=ae&&ae.onVnodeBeforeMount)&&sn(K,ve,b),mr(w,!0);{gt.ce&&gt.ce._injectChildStyle(it);const mt=w.subTree=Ih(w);P(null,mt,k,N,w,L,V),b.el=mt.el}if(de&&Ft(de,L),!jt&&(K=ae&&ae.onVnodeMounted)){const mt=b;Ft(()=>sn(K,ve,mt),L)}(b.shapeFlag&256||ve&&Ks(ve.vnode)&&ve.vnode.shapeFlag&256)&&w.a&&Ft(w.a,L),w.isMounted=!0,b=k=N=null}};w.scope.on();const q=w.effect=new qd(G);w.scope.off();const U=w.update=q.run.bind(q),te=w.job=q.runIfDirty.bind(q);te.i=w,te.id=w.uid,q.scheduler=()=>vc(te),mr(w,!0),U()},ye=(w,b,k)=>{b.component=w;const N=w.vnode.props;w.vnode=b,w.next=null,lv(w,b.props,N,k),fv(w,b.children,k),xn(),gh(w),On()},me=(w,b,k,N,L,V,Q,G,q=!1)=>{const U=w&&w.children,te=w?w.shapeFlag:0,K=b.children,{patchFlag:ee,shapeFlag:ae}=b;if(ee>0){if(ee&128){Wt(U,K,k,N,L,V,Q,G,q);return}else if(ee&256){Mt(U,K,k,N,L,V,Q,G,q);return}}ae&8?(te&16&&xt(U,L,V),K!==U&&f(k,K)):te&16?ae&16?Wt(U,K,k,N,L,V,Q,G,q):xt(U,L,V,!0):(te&8&&f(k,""),ae&16&&v(K,k,N,L,V,Q,G,q))},Mt=(w,b,k,N,L,V,Q,G,q)=>{w=w||es,b=b||es;const U=w.length,te=b.length,K=Math.min(U,te);let ee;for(ee=0;ee<K;ee++){const ae=b[ee]=q?Kn(b[ee]):cn(b[ee]);P(w[ee],ae,k,null,L,V,Q,G,q)}U>te?xt(w,L,V,!0,!1,K):v(b,k,N,L,V,Q,G,q,K)},Wt=(w,b,k,N,L,V,Q,G,q)=>{let U=0;const te=b.length;let K=w.length-1,ee=te-1;for(;U<=K&&U<=ee;){const ae=w[U],se=b[U]=q?Kn(b[U]):cn(b[U]);if(br(ae,se))P(ae,se,k,null,L,V,Q,G,q);else break;U++}for(;U<=K&&U<=ee;){const ae=w[K],se=b[ee]=q?Kn(b[ee]):cn(b[ee]);if(br(ae,se))P(ae,se,k,null,L,V,Q,G,q);else break;K--,ee--}if(U>K){if(U<=ee){const ae=ee+1,se=ae<te?b[ae].el:N;for(;U<=ee;)P(null,b[U]=q?Kn(b[U]):cn(b[U]),k,se,L,V,Q,G,q),U++}}else if(U>ee)for(;U<=K;)Be(w[U],L,V,!0),U++;else{const ae=U,se=U,de=new Map;for(U=se;U<=ee;U++){const ot=b[U]=q?Kn(b[U]):cn(b[U]);ot.key!=null&&de.set(ot.key,U)}let ve,gt=0;const it=ee-se+1;let jt=!1,mt=0;const $n=new Array(it);for(U=0;U<it;U++)$n[U]=0;for(U=ae;U<=K;U++){const ot=w[U];if(gt>=it){Be(ot,L,V,!0);continue}let Ht;if(ot.key!=null)Ht=de.get(ot.key);else for(ve=se;ve<=ee;ve++)if($n[ve-se]===0&&br(ot,b[ve])){Ht=ve;break}Ht===void 0?Be(ot,L,V,!0):($n[Ht-se]=U+1,Ht>=mt?mt=Ht:jt=!0,P(ot,b[Ht],k,null,L,V,Q,G,q),gt++)}const Is=jt?mv($n):es;for(ve=Is.length-1,U=it-1;U>=0;U--){const ot=se+U,Ht=b[ot],$i=ot+1<te?b[ot+1].el:N;$n[U]===0?P(null,Ht,k,$i,L,V,Q,G,q):jt&&(ve<0||U!==Is[ve]?Bt(Ht,k,$i,2):ve--)}}},Bt=(w,b,k,N,L=null)=>{const{el:V,type:Q,transition:G,children:q,shapeFlag:U}=w;if(U&6){Bt(w.component.subTree,b,k,N);return}if(U&128){w.suspense.move(b,k,N);return}if(U&64){Q.move(w,b,k,Y);return}if(Q===tt){r(V,b,k);for(let K=0;K<q.length;K++)Bt(q[K],b,k,N);r(w.anchor,b,k);return}if(Q===mo){j(w,b,k);return}if(N!==2&&U&1&&G)if(N===0)G.beforeEnter(V),r(V,b,k),Ft(()=>G.enter(V),L);else{const{leave:K,delayLeave:ee,afterLeave:ae}=G,se=()=>{w.ctx.isUnmounted?s(V):r(V,b,k)},de=()=>{K(V,()=>{se(),ae&&ae()})};ee?ee(V,se,de):de()}else r(V,b,k)},Be=(w,b,k,N=!1,L=!1)=>{const{type:V,props:Q,ref:G,children:q,dynamicChildren:U,shapeFlag:te,patchFlag:K,dirs:ee,cacheIndex:ae}=w;if(K===-2&&(L=!1),G!=null&&(xn(),Do(G,null,k,w,!0),On()),ae!=null&&(b.renderCache[ae]=void 0),te&256){b.ctx.deactivate(w);return}const se=te&1&&ee,de=!Ks(w);let ve;if(de&&(ve=Q&&Q.onVnodeBeforeUnmount)&&sn(ve,b,w),te&6)rn(w.component,k,N);else{if(te&128){w.suspense.unmount(k,N);return}se&&gr(w,null,b,"beforeUnmount"),te&64?w.type.remove(w,b,k,Y,N):U&&!U.hasOnce&&(V!==tt||K>0&&K&64)?xt(U,b,k,!1,!0):(V===tt&&K&384||!L&&te&16)&&xt(q,b,k),N&&je(w)}(de&&(ve=Q&&Q.onVnodeUnmounted)||se)&&Ft(()=>{ve&&sn(ve,b,w),se&&gr(w,null,b,"unmounted")},k)},je=w=>{const{type:b,el:k,anchor:N,transition:L}=w;if(b===tt){Fn(k,N);return}if(b===mo){z(w);return}const V=()=>{s(k),L&&!L.persisted&&L.afterLeave&&L.afterLeave()};if(w.shapeFlag&1&&L&&!L.persisted){const{leave:Q,delayLeave:G}=L,q=()=>Q(k,V);G?G(w.el,V,q):q()}else V()},Fn=(w,b)=>{let k;for(;w!==b;)k=g(w),s(w),w=k;s(b)},rn=(w,b,k)=>{const{bum:N,scope:L,job:V,subTree:Q,um:G,m:q,a:U,parent:te,slots:{__:K}}=w;Th(q),Th(U),N&&fo(N),te&&oe(K)&&K.forEach(ee=>{te.renderCache[ee]=void 0}),L.stop(),V&&(V.flags|=8,Be(Q,w,b,k)),G&&Ft(G,b),Ft(()=>{w.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},xt=(w,b,k,N=!1,L=!1,V=0)=>{for(let Q=V;Q<w.length;Q++)Be(w[Q],b,k,N,L)},D=w=>{if(w.shapeFlag&6)return D(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const b=g(w.anchor||w.el),k=b&&b[Vy];return k?g(k):b};let X=!1;const J=(w,b,k)=>{w==null?b._vnode&&Be(b._vnode,null,null,!0):P(b._vnode||null,w,b,null,null,null,k),b._vnode=w,X||(X=!0,gh(),dp(),X=!1)},Y={p:P,um:Be,m:Bt,r:je,mt:xe,mc:v,pc:me,pbc:I,n:D,o:t};return{render:J,hydrate:void 0,createApp:ov(J)}}function rl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function mr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fp(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Kn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Fp(a,l)),l.type===ya&&(l.el=a.el),l.type===kt&&!l.el&&(l.el=a.el)}}function mv(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<u?i=l+1:a=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function $p(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$p(e)}function Th(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const _v=Symbol.for("v-scx"),yv=()=>en(_v);function go(t,e,n){return Up(t,e,n)}function Up(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:a}=n,l=st({},n),c=e&&r||!e&&i!=="post";let u;if(hi){if(i==="sync"){const _=yv();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=hn,_.resume=hn,_.pause=hn,_}}const f=ht;l.call=(_,R,P)=>tn(_,f,R,P);let p=!1;i==="post"?l.scheduler=_=>{Ft(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,R)=>{R?_():vc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=xy(t,e,l);return hi&&(u?u.push(g):c&&g()),g}function vv(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?Bp(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const a=Si(this),l=Up(s,i.bind(r),n);return a(),l}function Bp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ev=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Gt(e)}Modifiers`]||t[`${Fr(e)}Modifiers`];function wv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),a=i&&Ev(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>qe(f)?f.trim():f)),a.number&&(s=n.map(bl)));let l,c=r[l=Ja(e)]||r[l=Ja(Gt(e))];!c&&i&&(c=r[l=Ja(Fr(e))]),c&&tn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,tn(u,t,6,s)}}function jp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!fe(t)){const c=u=>{const f=jp(u,e,!0);f&&(l=!0,st(a,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Fe(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>a[c]=null):st(a,i),Fe(t)&&r.set(t,a),a)}function _a(t,e){return!t||!oa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ce(t,e[0].toLowerCase()+e.slice(1))||Ce(t,Fr(e))||Ce(t,e))}function Ih(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:u,renderCache:f,props:p,data:g,setupState:_,ctx:R,inheritAttrs:P}=t,O=xo(t);let H,$;try{if(n.shapeFlag&4){const z=s||r,le=z;H=cn(u.call(le,z,f,p,_,g,R)),$=l}else{const z=e;H=cn(z.length>1?z(p,{attrs:l,slots:a,emit:c}):z(p,null)),$=e.props?l:bv(l)}}catch(z){Js.length=0,da(z,t,1),H=re(kt)}let j=H;if($&&P!==!1){const z=Object.keys($),{shapeFlag:le}=j;z.length&&le&7&&(i&&z.some(cc)&&($=Tv($,i)),j=ir(j,$,!1,!0))}return n.dirs&&(j=ir(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&ci(j,n.transition),H=j,xo(O),H}const bv=t=>{let e;for(const n in t)(n==="class"||n==="style"||oa(n))&&((e||(e={}))[n]=t[n]);return e},Tv=(t,e)=>{const n={};for(const r in t)(!cc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Iv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ah(r,a,u):!!a;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(a[g]!==r[g]&&!_a(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Ah(r,a,u):!0:!!a;return!1}function Ah(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!_a(n,i))return!0}return!1}function Av({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hp=t=>t.__isSuspense;function Sv(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Ny(t)}const tt=Symbol.for("v-fgt"),ya=Symbol.for("v-txt"),kt=Symbol.for("v-cmt"),mo=Symbol.for("v-stc"),Js=[];let Ut=null;function ne(t=!1){Js.push(Ut=t?null:[])}function Rv(){Js.pop(),Ut=Js[Js.length-1]||null}let ui=1;function Sh(t,e=!1){ui+=t,t<0&&Ut&&e&&(Ut.hasOnce=!0)}function zp(t){return t.dynamicChildren=ui>0?Ut||es:null,Rv(),ui>0&&Ut&&Ut.push(t),t}function ce(t,e,n,r,s,i){return zp(M(t,e,n,r,s,i,!0))}function vs(t,e,n,r,s){return zp(re(t,e,n,r,s,!0))}function Vo(t){return t?t.__v_isVNode===!0:!1}function br(t,e){return t.type===e.type&&t.key===e.key}const qp=({key:t})=>t??null,_o=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||Tt(t)||fe(t)?{i:Nt,r:t,k:e,f:!!n}:t:null);function M(t,e=null,n=null,r=0,s=null,i=t===tt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qp(e),ref:e&&_o(e),scopeId:gp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Nt};return l?(Tc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),ui>0&&!a&&Ut&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ut.push(c),c}const re=kv;function kv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Xy)&&(t=kt),Vo(t)){const l=ir(t,e,!0);return n&&Tc(l,n),ui>0&&!i&&Ut&&(l.shapeFlag&6?Ut[Ut.indexOf(t)]=l:Ut.push(l)),l.patchFlag=-2,l}if(Fv(t)&&(t=t.__vccOpts),e){e=Gp(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=kr(l)),Fe(c)&&(yc(c)&&!oe(c)&&(c=st({},c)),e.style=$r(c))}const a=qe(t)?1:Hp(t)?128:mp(t)?64:Fe(t)?4:fe(t)?2:0;return M(t,e,n,r,s,a,i,!0)}function Gp(t){return t?yc(t)||Op(t)?st({},t):t:null}function ir(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,u=e?Ai(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&qp(u),ref:e&&e.ref?n&&i?oe(i)?i.concat(_o(e)):[i,_o(e)]:_o(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==tt?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ir(t.ssContent),ssFallback:t.ssFallback&&ir(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ci(f,c.clone(f)),f}function We(t=" ",e=0){return re(ya,null,t,e)}function Wp(t,e){const n=re(mo,null,t);return n.staticCount=e,n}function $t(t="",e=!1){return e?(ne(),vs(kt,null,t)):re(kt,null,t)}function cn(t){return t==null||typeof t=="boolean"?re(kt):oe(t)?re(tt,null,t.slice()):Vo(t)?Kn(t):re(ya,null,String(t))}function Kn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ir(t)}function Tc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Tc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Op(e)?e._ctx=Nt:s===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),r&64?(n=16,e=[We(e)]):n=8);t.children=e,t.shapeFlag|=n}function Ai(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=kr([e.class,r.class]));else if(s==="style")e.style=$r([e.style,r.style]);else if(oa(s)){const i=e[s],a=r[s];a&&i!==a&&!(oe(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){tn(t,e,7,[n,r])}const Cv=Cp();let Pv=0;function xv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Cv,i={uid:Pv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Np(r,s),emitsOptions:jp(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wv.bind(null,i),t.ce&&t.ce(i),i}let ht=null;const Ov=()=>ht||Nt;let Mo,Ol;{const t=ua(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Mo=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),Ol=e("__VUE_SSR_SETTERS__",n=>hi=n)}const Si=t=>{const e=ht;return Mo(t),t.scope.on(),()=>{t.scope.off(),Mo(e)}},Rh=()=>{ht&&ht.scope.off(),Mo(null)};function Kp(t){return t.vnode.shapeFlag&4}let hi=!1;function Dv(t,e=!1,n=!1){e&&Ol(e);const{props:r,children:s}=t.vnode,i=Kp(t);av(t,r,i,e),hv(t,s,n||e);const a=i?Nv(t,e):void 0;return e&&Ol(!1),a}function Nv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Zy);const{setup:r}=n;if(r){xn();const s=t.setupContext=r.length>1?Mv(t):null,i=Si(t),a=Ii(r,t,0,[t.props,s]),l=Ld(a);if(On(),i(),(l||t.sp)&&!Ks(t)&&Tp(t),l){if(a.then(Rh,Rh),e)return a.then(c=>{kh(t,c)}).catch(c=>{da(c,t,0)});t.asyncDep=a}else kh(t,a)}else Qp(t)}function kh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Fe(e)&&(t.setupState=cp(e)),Qp(t)}function Qp(t,e,n){const r=t.type;t.render||(t.render=r.render||hn);{const s=Si(t);xn();try{ev(t)}finally{On(),s()}}}const Vv={get(t,e){return wt(t,"get",""),t[e]}};function Mv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Vv),slots:t.slots,emit:t.emit,expose:e}}function va(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(cp(ap(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Qs)return Qs[n](t)},has(e,n){return n in e||n in Qs}})):t.proxy}function Lv(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function Fv(t){return fe(t)&&"__vccOpts"in t}const Ct=(t,e)=>Cy(t,e,hi);function Ic(t,e,n){const r=arguments.length;return r===2?Fe(e)&&!oe(e)?Vo(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Vo(n)&&(n=[n]),re(t,e,n))}const $v="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Dl;const Ch=typeof window<"u"&&window.trustedTypes;if(Ch)try{Dl=Ch.createPolicy("vue",{createHTML:t=>t})}catch{}const Jp=Dl?t=>Dl.createHTML(t):t=>t,Uv="http://www.w3.org/2000/svg",Bv="http://www.w3.org/1998/Math/MathML",bn=typeof document<"u"?document:null,Ph=bn&&bn.createElement("template"),jv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?bn.createElementNS(Uv,t):e==="mathml"?bn.createElementNS(Bv,t):n?bn.createElement(t,{is:n}):bn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bn.createTextNode(t),createComment:t=>bn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Ph.innerHTML=Jp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=Ph.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Hn="transition",Fs="animation",fi=Symbol("_vtc"),Xp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hv=st({},_p,Xp),zv=t=>(t.displayName="Transition",t.props=Hv,t),Yp=zv((t,{slots:e})=>Ic(Fy,qv(t),e)),_r=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},xh=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function qv(t){const e={};for(const T in t)T in Xp||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=a,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,R=Gv(s),P=R&&R[0],O=R&&R[1],{onBeforeEnter:H,onEnter:$,onEnterCancelled:j,onLeave:z,onLeaveCancelled:le,onBeforeAppear:ie=H,onAppear:A=$,onAppearCancelled:v=j}=e,y=(T,E,xe,Xe)=>{T._enterCancelled=Xe,yr(T,E?f:l),yr(T,E?u:a),xe&&xe()},I=(T,E)=>{T._isLeaving=!1,yr(T,p),yr(T,_),yr(T,g),E&&E()},S=T=>(E,xe)=>{const Xe=T?A:$,Ue=()=>y(E,T,xe);_r(Xe,[E,Ue]),Oh(()=>{yr(E,T?c:i),En(E,T?f:l),xh(Xe)||Dh(E,r,P,Ue)})};return st(e,{onBeforeEnter(T){_r(H,[T]),En(T,i),En(T,a)},onBeforeAppear(T){_r(ie,[T]),En(T,c),En(T,u)},onEnter:S(!1),onAppear:S(!0),onLeave(T,E){T._isLeaving=!0;const xe=()=>I(T,E);En(T,p),T._enterCancelled?(En(T,g),Mh()):(Mh(),En(T,g)),Oh(()=>{T._isLeaving&&(yr(T,p),En(T,_),xh(z)||Dh(T,r,O,xe))}),_r(z,[T,xe])},onEnterCancelled(T){y(T,!1,void 0,!0),_r(j,[T])},onAppearCancelled(T){y(T,!0,void 0,!0),_r(v,[T])},onLeaveCancelled(T){I(T),_r(le,[T])}})}function Gv(t){if(t==null)return null;if(Fe(t))return[sl(t.enter),sl(t.leave)];{const e=sl(t);return[e,e]}}function sl(t){return X_(t)}function En(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[fi]||(t[fi]=new Set)).add(e)}function yr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[fi];n&&(n.delete(e),n.size||(t[fi]=void 0))}function Oh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Wv=0;function Dh(t,e,n,r){const s=t._endId=++Wv,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:l,propCount:c}=Kv(t,e);if(!a)return r();const u=a+"end";let f=0;const p=()=>{t.removeEventListener(u,g),i()},g=_=>{_.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(u,g)}function Kv(t,e){const n=window.getComputedStyle(t),r=R=>(n[R]||"").split(", "),s=r(`${Hn}Delay`),i=r(`${Hn}Duration`),a=Nh(s,i),l=r(`${Fs}Delay`),c=r(`${Fs}Duration`),u=Nh(l,c);let f=null,p=0,g=0;e===Hn?a>0&&(f=Hn,p=a,g=i.length):e===Fs?u>0&&(f=Fs,p=u,g=c.length):(p=Math.max(a,u),f=p>0?a>u?Hn:Fs:null,g=f?f===Hn?i.length:c.length:0);const _=f===Hn&&/\b(transform|all)(,|$)/.test(r(`${Hn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:_}}function Nh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Vh(n)+Vh(t[r])))}function Vh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Mh(){return document.body.offsetHeight}function Qv(t,e,n){const r=t[fi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Lh=Symbol("_vod"),Jv=Symbol("_vsh"),Xv=Symbol(""),Yv=/(^|;)\s*display\s*:/;function Zv(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&yo(r,l,"")}else for(const a in e)n[a]==null&&yo(r,a,"");for(const a in n)a==="display"&&(i=!0),yo(r,a,n[a])}else if(s){if(e!==n){const a=r[Xv];a&&(n+=";"+a),r.cssText=n,i=Yv.test(n)}}else e&&t.removeAttribute("style");Lh in t&&(t[Lh]=i?r.display:"",t[Jv]&&(r.display="none"))}const Fh=/\s*!important$/;function yo(t,e,n){if(oe(n))n.forEach(r=>yo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=eE(t,e);Fh.test(n)?t.setProperty(Fr(r),n.replace(Fh,""),"important"):t[r]=n}}const $h=["Webkit","Moz","ms"],il={};function eE(t,e){const n=il[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return il[e]=r;r=ca(r);for(let s=0;s<$h.length;s++){const i=$h[s]+r;if(i in t)return il[e]=i}return e}const Uh="http://www.w3.org/1999/xlink";function Bh(t,e,n,r,s,i=sy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Uh,e.slice(6,e.length)):t.setAttributeNS(Uh,e,n):n==null||i&&!Bd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":ur(n)?String(n):n)}function jh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Jp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Bd(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Qr(t,e,n,r){t.addEventListener(e,n,r)}function tE(t,e,n,r){t.removeEventListener(e,n,r)}const Hh=Symbol("_vei");function nE(t,e,n,r,s=null){const i=t[Hh]||(t[Hh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=rE(e);if(r){const u=i[e]=oE(r,s);Qr(t,l,u,c)}else a&&(tE(t,l,a,c),i[e]=void 0)}}const zh=/(?:Once|Passive|Capture)$/;function rE(t){let e;if(zh.test(t)){e={};let r;for(;r=t.match(zh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fr(t.slice(2)),e]}let ol=0;const sE=Promise.resolve(),iE=()=>ol||(sE.then(()=>ol=0),ol=Date.now());function oE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;tn(aE(r,n.value),e,5,[r])};return n.value=t,n.attached=iE(),n}function aE(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const qh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,lE=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Qv(t,r,a):e==="style"?Zv(t,n,r):oa(e)?cc(e)||nE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cE(t,e,r,a))?(jh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?jh(t,Gt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Bh(t,e,r,a))};function cE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&qh(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qh(e)&&qe(n)?!1:e in t}const Gh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>fo(e,n):e};function uE(t){t.target.composing=!0}function Wh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const al=Symbol("_assign"),Nl={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[al]=Gh(s);const i=r||s.props&&s.props.type==="number";Qr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=bl(l)),t[al](l)}),n&&Qr(t,"change",()=>{t.value=t.value.trim()}),e||(Qr(t,"compositionstart",uE),Qr(t,"compositionend",Wh),Qr(t,"change",Wh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[al]=Gh(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?bl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},hE=["ctrl","shift","alt","meta"],fE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hE.some(n=>t[`${n}Key`]&&!e.includes(n))},Zp=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=fE[e[a]];if(l&&l(s,e))return}return t(s,...i)})},dE=st({patchProp:lE},jv);let Kh;function pE(){return Kh||(Kh=dv(dE))}const gE=(...t)=>{const e=pE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_E(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,mE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function mE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _E(t){return qe(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const yE=Symbol();var Qh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qh||(Qh={}));function vE(){const t=iy(!0),e=t.run(()=>Qe({}));let n=[],r=[];const s=ap({install(i){s._a=i,i.provide(yE,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Jr=typeof document<"u";function eg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function EE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&eg(t.default)}const ke=Object.assign;function ll(t,e){const n={};for(const r in e){const s=e[r];n[r]=nn(s)?s.map(t):t(s)}return n}const Xs=()=>{},nn=Array.isArray,tg=/#/g,wE=/&/g,bE=/\//g,TE=/=/g,IE=/\?/g,ng=/\+/g,AE=/%5B/g,SE=/%5D/g,rg=/%5E/g,RE=/%60/g,sg=/%7B/g,kE=/%7C/g,ig=/%7D/g,CE=/%20/g;function Ac(t){return encodeURI(""+t).replace(kE,"|").replace(AE,"[").replace(SE,"]")}function PE(t){return Ac(t).replace(sg,"{").replace(ig,"}").replace(rg,"^")}function Vl(t){return Ac(t).replace(ng,"%2B").replace(CE,"+").replace(tg,"%23").replace(wE,"%26").replace(RE,"`").replace(sg,"{").replace(ig,"}").replace(rg,"^")}function xE(t){return Vl(t).replace(TE,"%3D")}function OE(t){return Ac(t).replace(tg,"%23").replace(IE,"%3F")}function DE(t){return t==null?"":OE(t).replace(bE,"%2F")}function di(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const NE=/\/$/,VE=t=>t.replace(NE,"");function cl(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=$E(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:di(a)}}function ME(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function LE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cs(e.matched[r],n.matched[s])&&og(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function og(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!FE(t[n],e[n]))return!1;return!0}function FE(t,e){return nn(t)?Xh(t,e):nn(e)?Xh(e,t):t===e}function Xh(t,e){return nn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function $E(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var pi;(function(t){t.pop="pop",t.push="push"})(pi||(pi={}));var Ys;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ys||(Ys={}));function UE(t){if(!t)if(Jr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),VE(t)}const BE=/^[^#]+#/;function jE(t,e){return t.replace(BE,"#")+e}function HE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ea=()=>({left:window.scrollX,top:window.scrollY});function zE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=HE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yh(t,e){return(history.state?history.state.position-e:-1)+t}const Ml=new Map;function qE(t,e){Ml.set(t,e)}function GE(t){const e=Ml.get(t);return Ml.delete(t),e}let WE=()=>location.protocol+"//"+location.host;function ag(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Jh(c,"")}return Jh(n,t)+r+s}function KE(t,e,n,r){let s=[],i=[],a=null;const l=({state:g})=>{const _=ag(t,location),R=n.value,P=e.value;let O=0;if(g){if(n.value=_,e.value=g,a&&a===R){a=null;return}O=P?g.position-P.position:0}else r(_);s.forEach(H=>{H(n.value,R,{delta:O,type:pi.pop,direction:O?O>0?Ys.forward:Ys.back:Ys.unknown})})};function c(){a=n.value}function u(g){s.push(g);const _=()=>{const R=s.indexOf(g);R>-1&&s.splice(R,1)};return i.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(ke({},g.state,{scroll:Ea()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Zh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ea():null}}function QE(t){const{history:e,location:n}=window,r={value:ag(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:WE()+t+c;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function a(c,u){const f=ke({},e.state,Zh(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,u){const f=ke({},s.value,e.state,{forward:c,scroll:Ea()});i(f.current,f,!0);const p=ke({},Zh(r.value,c,null),{position:f.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function JE(t){t=UE(t);const e=QE(t),n=KE(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=ke({location:"",base:t,go:r,createHref:jE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function XE(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),JE(t)}function YE(t){return typeof t=="string"||t&&typeof t=="object"}function lg(t){return typeof t=="string"||typeof t=="symbol"}const cg=Symbol("");var ef;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ef||(ef={}));function us(t,e){return ke(new Error,{type:t,[cg]:!0},e)}function wn(t,e){return t instanceof Error&&cg in t&&(e==null||!!(t.type&e))}const tf="[^/]+?",ZE={sensitive:!1,strict:!1,start:!0,end:!0},ew=/[.+*?^${}()[\]/\\]/g;function tw(t,e){const n=ke({},ZE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(ew,"\\$&"),_+=40;else if(g.type===1){const{value:R,repeatable:P,optional:O,regexp:H}=g;i.push({name:R,repeatable:P,optional:O});const $=H||tf;if($!==tf){_+=10;try{new RegExp(`(${$})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${R}" (${$}): `+z.message)}}let j=P?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(j=O&&u.length<2?`(?:/${j})`:"/"+j),O&&(j+="?"),s+=j,_+=20,O&&(_+=-8),P&&(_+=-20),$===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(a),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",R=i[g-1];p[R.name]=_&&R.repeatable?_.split("/"):_}return p}function c(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:R,repeatable:P,optional:O}=_,H=R in u?u[R]:"";if(nn(H)&&!P)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const $=nn(H)?H.join("/"):H;if(!$)if(O)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);f+=$}}return f||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function nw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ug(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=nw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(nf(r))return 1;if(nf(s))return-1}return s.length-r.length}function nf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rw={type:0,value:""},sw=/[a-zA-Z0-9_]/;function iw(t){if(!t)return[[]];if(t==="/")return[[rw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),a()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:sw.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),a(),s}function ow(t,e,n){const r=tw(iw(t.path),n),s=ke(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aw(t,e){const n=[],r=new Map;e=af({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const R=!_,P=sf(p);P.aliasOf=_&&_.record;const O=af(e,p),H=[P];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const le of z)H.push(sf(ke({},P,{components:_?_.record.components:P.components,path:le,aliasOf:_?_.record:P})))}let $,j;for(const z of H){const{path:le}=z;if(g&&le[0]!=="/"){const ie=g.record.path,A=ie[ie.length-1]==="/"?"":"/";z.path=g.record.path+(le&&A+le)}if($=ow(z,g,O),_?_.alias.push($):(j=j||$,j!==$&&j.alias.push($),R&&p.name&&!of($)&&a(p.name)),hg($)&&c($),P.children){const ie=P.children;for(let A=0;A<ie.length;A++)i(ie[A],$,_&&_.children[A])}_=_||$}return j?()=>{a(j)}:Xs}function a(p){if(lg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const g=uw(p,n);n.splice(g,0,p),p.record.name&&!of(p)&&r.set(p.record.name,p)}function u(p,g){let _,R={},P,O;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw us(1,{location:p});O=_.record.name,R=ke(rf(g.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&rf(p.params,_.keys.map(j=>j.name))),P=_.stringify(R)}else if(p.path!=null)P=p.path,_=n.find(j=>j.re.test(P)),_&&(R=_.parse(P),O=_.record.name);else{if(_=g.name?r.get(g.name):n.find(j=>j.re.test(g.path)),!_)throw us(1,{location:p,currentLocation:g});O=_.record.name,R=ke({},g.params,p.params),P=_.stringify(R)}const H=[];let $=_;for(;$;)H.unshift($.record),$=$.parent;return{name:O,path:P,params:R,matched:H,meta:cw(H)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:a,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function rf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function sf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:lw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function lw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function of(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cw(t){return t.reduce((e,n)=>ke(e,n.meta),{})}function af(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function uw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ug(t,e[i])<0?r=i:n=i+1}const s=hw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function hw(t){let e=t;for(;e=e.parent;)if(hg(e)&&ug(t,e)===0)return e}function hg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function fw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ng," "),a=i.indexOf("="),l=di(a<0?i:i.slice(0,a)),c=a<0?null:di(i.slice(a+1));if(l in e){let u=e[l];nn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function lf(t){let e="";for(let n in t){const r=t[n];if(n=xE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(nn(r)?r.map(i=>i&&Vl(i)):[r&&Vl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=nn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const pw=Symbol(""),cf=Symbol(""),wa=Symbol(""),Sc=Symbol(""),Ll=Symbol("");function $s(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Qn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(us(4,{from:n,to:e})):g instanceof Error?c(g):YE(g)?c(us(2,{from:e,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function ul(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(eg(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Qn(f,n,r,a,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=EE(f)?f.default:f;a.mods[l]=f,a.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&Qn(_,n,r,a,l,s)()}))}}return i}function uf(t){const e=en(wa),n=en(Sc),r=Ct(()=>{const c=Ie(t.to);return e.resolve(c)}),s=Ct(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(cs.bind(null,f));if(g>-1)return g;const _=hf(c[u-2]);return u>1&&hf(f)===_&&p[p.length-1].path!==_?p.findIndex(cs.bind(null,c[u-2])):g}),i=Ct(()=>s.value>-1&&yw(n.params,r.value.params)),a=Ct(()=>s.value>-1&&s.value===n.matched.length-1&&og(n.params,r.value.params));function l(c={}){if(_w(c)){const u=e[Ie(t.replace)?"replace":"push"](Ie(t.to)).catch(Xs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function gw(t){return t.length===1?t[0]:t}const mw=bp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:uf,setup(t,{slots:e}){const n=fa(uf(t)),{options:r}=en(wa),s=Ct(()=>({[ff(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ff(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&gw(e.default(n));return t.custom?i:Ic("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ze=mw;function _w(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!nn(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function hf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ff=(t,e,n)=>t??e??n,vw=bp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=en(Ll),s=Ct(()=>t.route||r.value),i=en(cf,0),a=Ct(()=>{let u=Ie(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=Ct(()=>s.value.matched[a.value]);po(cf,Ct(()=>a.value+1)),po(pw,l),po(Ll,s);const c=Qe();return go(()=>[c.value,l.value,t.name],([u,f,p],[g,_,R])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!cs(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return df(n.default,{Component:g,route:u});const _=p.props[f],R=_?_===!0?u.params:typeof _=="function"?_(u):_:null,O=Ic(g,ke({},R,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return df(n.default,{Component:O,route:u})||O}}});function df(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Rc=vw;function Ew(t){const e=aw(t.routes,t),n=t.parseQuery||fw,r=t.stringifyQuery||lf,s=t.history,i=$s(),a=$s(),l=$s(),c=Ay(zn);let u=zn;Jr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ll.bind(null,D=>""+D),p=ll.bind(null,DE),g=ll.bind(null,di);function _(D,X){let J,Y;return lg(D)?(J=e.getRecordMatcher(D),Y=X):Y=D,e.addRoute(Y,J)}function R(D){const X=e.getRecordMatcher(D);X&&e.removeRoute(X)}function P(){return e.getRoutes().map(D=>D.record)}function O(D){return!!e.getRecordMatcher(D)}function H(D,X){if(X=ke({},X||c.value),typeof D=="string"){const k=cl(n,D,X.path),N=e.resolve({path:k.path},X),L=s.createHref(k.fullPath);return ke(k,N,{params:g(N.params),hash:di(k.hash),redirectedFrom:void 0,href:L})}let J;if(D.path!=null)J=ke({},D,{path:cl(n,D.path,X.path).path});else{const k=ke({},D.params);for(const N in k)k[N]==null&&delete k[N];J=ke({},D,{params:p(k)}),X.params=p(X.params)}const Y=e.resolve(J,X),be=D.hash||"";Y.params=f(g(Y.params));const w=ME(r,ke({},D,{hash:PE(be),path:Y.path})),b=s.createHref(w);return ke({fullPath:w,hash:be,query:r===lf?dw(D.query):D.query||{}},Y,{redirectedFrom:void 0,href:b})}function $(D){return typeof D=="string"?cl(n,D,c.value.path):ke({},D)}function j(D,X){if(u!==D)return us(8,{from:X,to:D})}function z(D){return A(D)}function le(D){return z(ke($(D),{replace:!0}))}function ie(D){const X=D.matched[D.matched.length-1];if(X&&X.redirect){const{redirect:J}=X;let Y=typeof J=="function"?J(D):J;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=$(Y):{path:Y},Y.params={}),ke({query:D.query,hash:D.hash,params:Y.path!=null?{}:D.params},Y)}}function A(D,X){const J=u=H(D),Y=c.value,be=D.state,w=D.force,b=D.replace===!0,k=ie(J);if(k)return A(ke($(k),{state:typeof k=="object"?ke({},be,k.state):be,force:w,replace:b}),X||J);const N=J;N.redirectedFrom=X;let L;return!w&&LE(r,Y,J)&&(L=us(16,{to:N,from:Y}),Bt(Y,Y,!0,!1)),(L?Promise.resolve(L):I(N,Y)).catch(V=>wn(V)?wn(V,2)?V:Wt(V):me(V,N,Y)).then(V=>{if(V){if(wn(V,2))return A(ke({replace:b},$(V.to),{state:typeof V.to=="object"?ke({},be,V.to.state):be,force:w}),X||N)}else V=T(N,Y,!0,b,be);return S(N,Y,V),V})}function v(D,X){const J=j(D,X);return J?Promise.reject(J):Promise.resolve()}function y(D){const X=Fn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(D):D()}function I(D,X){let J;const[Y,be,w]=ww(D,X);J=ul(Y.reverse(),"beforeRouteLeave",D,X);for(const k of Y)k.leaveGuards.forEach(N=>{J.push(Qn(N,D,X))});const b=v.bind(null,D,X);return J.push(b),xt(J).then(()=>{J=[];for(const k of i.list())J.push(Qn(k,D,X));return J.push(b),xt(J)}).then(()=>{J=ul(be,"beforeRouteUpdate",D,X);for(const k of be)k.updateGuards.forEach(N=>{J.push(Qn(N,D,X))});return J.push(b),xt(J)}).then(()=>{J=[];for(const k of w)if(k.beforeEnter)if(nn(k.beforeEnter))for(const N of k.beforeEnter)J.push(Qn(N,D,X));else J.push(Qn(k.beforeEnter,D,X));return J.push(b),xt(J)}).then(()=>(D.matched.forEach(k=>k.enterCallbacks={}),J=ul(w,"beforeRouteEnter",D,X,y),J.push(b),xt(J))).then(()=>{J=[];for(const k of a.list())J.push(Qn(k,D,X));return J.push(b),xt(J)}).catch(k=>wn(k,8)?k:Promise.reject(k))}function S(D,X,J){l.list().forEach(Y=>y(()=>Y(D,X,J)))}function T(D,X,J,Y,be){const w=j(D,X);if(w)return w;const b=X===zn,k=Jr?history.state:{};J&&(Y||b?s.replace(D.fullPath,ke({scroll:b&&k&&k.scroll},be)):s.push(D.fullPath,be)),c.value=D,Bt(D,X,J,b),Wt()}let E;function xe(){E||(E=s.listen((D,X,J)=>{if(!rn.listening)return;const Y=H(D),be=ie(Y);if(be){A(ke(be,{replace:!0,force:!0}),Y).catch(Xs);return}u=Y;const w=c.value;Jr&&qE(Yh(w.fullPath,J.delta),Ea()),I(Y,w).catch(b=>wn(b,12)?b:wn(b,2)?(A(ke($(b.to),{force:!0}),Y).then(k=>{wn(k,20)&&!J.delta&&J.type===pi.pop&&s.go(-1,!1)}).catch(Xs),Promise.reject()):(J.delta&&s.go(-J.delta,!1),me(b,Y,w))).then(b=>{b=b||T(Y,w,!1),b&&(J.delta&&!wn(b,8)?s.go(-J.delta,!1):J.type===pi.pop&&wn(b,20)&&s.go(-1,!1)),S(Y,w,b)}).catch(Xs)}))}let Xe=$s(),Ue=$s(),ye;function me(D,X,J){Wt(D);const Y=Ue.list();return Y.length?Y.forEach(be=>be(D,X,J)):console.error(D),Promise.reject(D)}function Mt(){return ye&&c.value!==zn?Promise.resolve():new Promise((D,X)=>{Xe.add([D,X])})}function Wt(D){return ye||(ye=!D,xe(),Xe.list().forEach(([X,J])=>D?J(D):X()),Xe.reset()),D}function Bt(D,X,J,Y){const{scrollBehavior:be}=t;if(!Jr||!be)return Promise.resolve();const w=!J&&GE(Yh(D.fullPath,0))||(Y||!J)&&history.state&&history.state.scroll||null;return hp().then(()=>be(D,X,w)).then(b=>b&&zE(b)).catch(b=>me(b,D,X))}const Be=D=>s.go(D);let je;const Fn=new Set,rn={currentRoute:c,listening:!0,addRoute:_,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:P,resolve:H,options:t,push:z,replace:le,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Ue.add,isReady:Mt,install(D){const X=this;D.component("RouterLink",Ze),D.component("RouterView",Rc),D.config.globalProperties.$router=X,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Ie(c)}),Jr&&!je&&c.value===zn&&(je=!0,z(s.location).catch(be=>{}));const J={};for(const be in zn)Object.defineProperty(J,be,{get:()=>c.value[be],enumerable:!0});D.provide(wa,X),D.provide(Sc,ip(J)),D.provide(Ll,c);const Y=D.unmount;Fn.add(D),D.unmount=function(){Fn.delete(D),Fn.size<1&&(u=zn,E&&E(),E=null,c.value=zn,je=!1,ye=!1),Y()}}};function xt(D){return D.reduce((X,J)=>X.then(()=>y(J)),Promise.resolve())}return rn}function ww(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(u=>cs(u,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(u=>cs(u,c))||s.push(c))}return[n,r,s]}function cC(){return en(wa)}function uC(t){return en(Sc)}const pt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},bw={class:"header"},Tw={class:"nav desktop-nav"},Iw={key:0,class:"nav mobile-drawer"},Aw={__name:"Header",setup(t){const e=Qe(!1);function n(r){const s=document.querySelector(".mobile-drawer"),i=document.querySelector(".hamburger");e.value&&s&&!s.contains(r.target)&&!i.contains(r.target)&&(e.value=!1)}return ys(()=>{document.addEventListener("click",n)}),Ec(()=>{document.removeEventListener("click",n)}),(r,s)=>(ne(),ce("header",bw,[re(Ie(Ze),{to:"/",class:"logo"},{default:Ge(()=>s[6]||(s[6]=[We("Association of Family Psychiatrists")])),_:1,__:[6]}),M("button",{class:"hamburger",onClick:s[0]||(s[0]=i=>e.value=!e.value),"aria-label":"Toggle Menu"},"☰"),M("nav",Tw,[re(Ie(Ze),{to:"/about","exact-active-class":"active",class:"nav-link"},{default:Ge(()=>s[7]||(s[7]=[We("About")])),_:1,__:[7]}),re(Ie(Ze),{to:"/resources","exact-active-class":"active",class:"nav-link"},{default:Ge(()=>s[8]||(s[8]=[We("Resources")])),_:1,__:[8]}),re(Ie(Ze),{to:"/events","exact-active-class":"active",class:"nav-link"},{default:Ge(()=>s[9]||(s[9]=[We("Events")])),_:1,__:[9]}),re(Ie(Ze),{to:"/members","exact-active-class":"active",class:"nav-link"},{default:Ge(()=>s[10]||(s[10]=[We("Members")])),_:1,__:[10]}),re(Ie(Ze),{to:"/membership",class:"member-button"},{default:Ge(()=>s[11]||(s[11]=[We("Become a Member")])),_:1,__:[11]})]),re(Yp,{name:"slide"},{default:Ge(()=>[e.value?(ne(),ce("nav",Iw,[re(Ie(Ze),{to:"/about","exact-active-class":"active",onClick:s[1]||(s[1]=i=>e.value=!1)},{default:Ge(()=>s[12]||(s[12]=[We("About")])),_:1,__:[12]}),re(Ie(Ze),{to:"/resources","exact-active-class":"active",onClick:s[2]||(s[2]=i=>e.value=!1)},{default:Ge(()=>s[13]||(s[13]=[We("Resources")])),_:1,__:[13]}),re(Ie(Ze),{to:"/members","exact-active-class":"active",onClick:s[3]||(s[3]=i=>e.value=!1)},{default:Ge(()=>s[14]||(s[14]=[We("Members")])),_:1,__:[14]}),re(Ie(Ze),{to:"/events","exact-active-class":"active",onClick:s[4]||(s[4]=i=>e.value=!1)},{default:Ge(()=>s[15]||(s[15]=[We("Events")])),_:1,__:[15]}),re(Ie(Ze),{to:"/membership",onClick:s[5]||(s[5]=i=>e.value=!1),class:"member-button mobile-member-button"},{default:Ge(()=>s[16]||(s[16]=[We(" Become a Member ")])),_:1,__:[16]})])):$t("",!0)]),_:1})]))}},Sw=pt(Aw,[["__scopeId","data-v-26cdc8df"]]),Rw=()=>{};var pf={};/**
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
 */const fg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},kw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,_=u&63;c||(_=64,a||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new Cw;const g=i<<2|l>>4;if(r.push(g),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Cw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Pw=function(t){const e=fg(t);return dg.encodeByteArray(e,!0)},Lo=function(t){return Pw(t).replace(/\./g,"")},pg=function(t){try{return dg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Lw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Lo(JSON.stringify(n)),Lo(JSON.stringify(a)),""].join(".")}const Zs={};function Fw(){const t={prod:[],emulator:[]};for(const e of Object.keys(Zs))Zs[e]?t.emulator.push(e):t.prod.push(e);return t}function $w(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let gf=!1;function vg(t,e){if(typeof window>"u"||typeof document>"u"||!Ri(window.location.host)||Zs[t]===e||Zs[t]||gf)return;Zs[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Fw().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{gf=!0,a()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=$w(r),_=n("text"),R=document.getElementById(_)||document.createElement("span"),P=n("learnmore"),O=document.getElementById(P)||document.createElement("a"),H=n("preprendIcon"),$=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const j=g.element;l(j),f(O,P);const z=u();c($,H),j.append($,R,O,z),document.body.appendChild(j)}i?(R.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function Bw(){var t;const e=(t=ba())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qw(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gw(){return!Bw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ww(){try{return typeof indexedDB=="object"}catch{return!1}}function Kw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const ob={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},ab=_e.INFO,lb={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},cb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=ab,this._logHandler=cb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ob[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const ub=(t,e)=>e.some(n=>t instanceof n);let _f,yf;function hb(){return _f||(_f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fb(){return yf||(yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eg=new WeakMap,Fl=new WeakMap,wg=new WeakMap,fl=new WeakMap,Cc=new WeakMap;function db(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(tr(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Eg.set(n,t)}).catch(()=>{}),Cc.set(e,t),e}function pb(t){if(Fl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Fl.set(t,e)}let $l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gb(t){$l=t($l)}function mb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(dl(this),e,...n);return wg.set(r,e.sort?e.sort():[e]),tr(r)}:fb().includes(t)?function(...e){return t.apply(dl(this),e),tr(Eg.get(this))}:function(...e){return tr(t.apply(dl(this),e))}}function _b(t){return typeof t=="function"?mb(t):(t instanceof IDBTransaction&&pb(t),ub(t,hb())?new Proxy(t,$l):t)}function tr(t){if(t instanceof IDBRequest)return db(t);if(fl.has(t))return fl.get(t);const e=_b(t);return e!==t&&(fl.set(t,e),Cc.set(e,t)),e}const dl=t=>Cc.get(t);function yb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=tr(a);return r&&a.addEventListener("upgradeneeded",c=>{r(tr(a.result),c.oldVersion,c.newVersion,tr(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const vb=["get","getKey","getAll","getAllKeys","count"],Eb=["put","add","delete","clear"],pl=new Map;function vf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pl.get(e))return pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Eb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vb.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return pl.set(e,i),i}gb(t=>({...t,get:(e,n,r)=>vf(e,n)||t.get(e,n,r),has:(e,n)=>!!vf(e,n)||t.has(e,n)}));/**
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
 */class wb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ul="@firebase/app",Ef="0.13.0";/**
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
 */const Dn=new kc("@firebase/app"),Tb="@firebase/app-compat",Ib="@firebase/analytics-compat",Ab="@firebase/analytics",Sb="@firebase/app-check-compat",Rb="@firebase/app-check",kb="@firebase/auth",Cb="@firebase/auth-compat",Pb="@firebase/database",xb="@firebase/data-connect",Ob="@firebase/database-compat",Db="@firebase/functions",Nb="@firebase/functions-compat",Vb="@firebase/installations",Mb="@firebase/installations-compat",Lb="@firebase/messaging",Fb="@firebase/messaging-compat",$b="@firebase/performance",Ub="@firebase/performance-compat",Bb="@firebase/remote-config",jb="@firebase/remote-config-compat",Hb="@firebase/storage",zb="@firebase/storage-compat",qb="@firebase/firestore",Gb="@firebase/ai",Wb="@firebase/firestore-compat",Kb="firebase",Qb="11.8.0";/**
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
 */const Bl="[DEFAULT]",Jb={[Ul]:"fire-core",[Tb]:"fire-core-compat",[Ab]:"fire-analytics",[Ib]:"fire-analytics-compat",[Rb]:"fire-app-check",[Sb]:"fire-app-check-compat",[kb]:"fire-auth",[Cb]:"fire-auth-compat",[Pb]:"fire-rtdb",[xb]:"fire-data-connect",[Ob]:"fire-rtdb-compat",[Db]:"fire-fn",[Nb]:"fire-fn-compat",[Vb]:"fire-iid",[Mb]:"fire-iid-compat",[Lb]:"fire-fcm",[Fb]:"fire-fcm-compat",[$b]:"fire-perf",[Ub]:"fire-perf-compat",[Bb]:"fire-rc",[jb]:"fire-rc-compat",[Hb]:"fire-gcs",[zb]:"fire-gcs-compat",[qb]:"fire-fst",[Wb]:"fire-fst-compat",[Gb]:"fire-vertex","fire-js":"fire-js",[Kb]:"fire-js-all"};/**
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
 */const Es=Qb;function bg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw nr.create("bad-app-name",{appName:String(s)});if(n||(n=mg()),!n)throw nr.create("no-options");const i=Fo.get(s);if(i){if(Pr(n,i.options)&&Pr(r,i.config))return i;throw nr.create("duplicate-app",{appName:s})}const a=new ib(s);for(const c of jl.values())a.addComponent(c);const l=new Zb(n,r,a);return Fo.set(s,l),l}function Tg(t=Bl){const e=Fo.get(t);if(!e&&t===Bl&&mg())return bg();if(!e)throw nr.create("no-app",{appName:t});return e}function rr(t,e,n){var r;let s=(r=Jb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dn.warn(l.join(" "));return}hs(new xr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const eT="firebase-heartbeat-database",tT=1,gi="firebase-heartbeat-store";let gl=null;function Ig(){return gl||(gl=yb(eT,tT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(gi)}catch(n){console.warn(n)}}}}).catch(t=>{throw nr.create("idb-open",{originalErrorMessage:t.message})})),gl}async function nT(t){try{const n=(await Ig()).transaction(gi),r=await n.objectStore(gi).get(Ag(t));return await n.done,r}catch(e){if(e instanceof Ln)Dn.warn(e.message);else{const n=nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dn.warn(n.message)}}}async function bf(t,e){try{const r=(await Ig()).transaction(gi,"readwrite");await r.objectStore(gi).put(e,Ag(t)),await r.done}catch(n){if(n instanceof Ln)Dn.warn(n.message);else{const r=nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dn.warn(r.message)}}}function Ag(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rT=1024,sT=30;class iT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>sT){const a=lT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Dn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tf(),{heartbeatsToSend:r,unsentEntries:s}=oT(this._heartbeatsCache.heartbeats),i=Lo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Dn.warn(n),""}}}function Tf(){return new Date().toISOString().substring(0,10)}function oT(t,e=rT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),If(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),If(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ww()?Kw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function If(t){return Lo(JSON.stringify({version:2,heartbeats:t})).length}function lT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function cT(t){hs(new xr("platform-logger",e=>new wb(e),"PRIVATE")),hs(new xr("heartbeat",e=>new iT(e),"PRIVATE")),rr(Ul,Ef,t),rr(Ul,Ef,"esm2017"),rr("fire-js","")}cT("");var uT="firebase",hT="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rr(uT,hT,"app");function xc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Sg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fT=Sg,Rg=new ki("auth","Firebase",Sg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o=new kc("@firebase/auth");function dT(t,...e){$o.logLevel<=_e.WARN&&$o.warn(`Auth (${Es}): ${t}`,...e)}function vo(t,...e){$o.logLevel<=_e.ERROR&&$o.error(`Auth (${Es}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t,...e){throw Oc(t,...e)}function fn(t,...e){return Oc(t,...e)}function kg(t,e,n){const r=Object.assign(Object.assign({},fT()),{[e]:n});return new ki("auth","Firebase",r).create(e,{appName:t.name})}function Ar(t){return kg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Rg.create(t,...e)}function ue(t,e,...n){if(!t)throw Oc(e,...n)}function An(t){const e="INTERNAL ASSERTION FAILED: "+t;throw vo(e),new Error(e)}function Vn(t,e){t||An(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pT(){return Af()==="http:"||Af()==="https:"}function Af(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(pT()||Hw()||"connection"in navigator)?navigator.onLine:!0}function mT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vn(n>e,"Short delay should be less than long delay!"),this.isMobile=Uw()||zw()}get(){return gT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const _T={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vT=new Pi(3e4,6e4);function Nc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ws(t,e,n,r,s={}){return Pg(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Ci(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return jw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ri(t.emulatorConfig.host)&&(u.credentials="include"),Cg.fetch()(await xg(t,t.config.apiHost,n,l),u)})}async function Pg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_T),e);try{const s=new wT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw io(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw io(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw io(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw io(t,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kg(t,f,u);Nn(t,f)}}catch(s){if(s instanceof Ln)throw s;Nn(t,"network-request-failed",{message:String(s)})}}async function ET(t,e,n,r,s={}){const i=await ws(t,e,n,r,s);return"mfaPendingCredential"in i&&Nn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function xg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Dc(t.config,s):`${t.config.apiScheme}://${s}`;return yT.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class wT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),vT.get())})}}function io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(t,e){return ws(t,"POST","/v1/accounts:delete",e)}async function Uo(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TT(t,e=!1){const n=pn(t),r=await n.getIdToken(e),s=Vc(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ei(ml(s.auth_time)),issuedAtTime:ei(ml(s.iat)),expirationTime:ei(ml(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ml(t){return Number(t)*1e3}function Vc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return vo("JWT malformed, contained fewer than 3 sections"),null;try{const s=pg(n);return s?JSON.parse(s):(vo("Failed to decode base64 JWT payload"),null)}catch(s){return vo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Sf(t){const e=Vc(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&IT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Bo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await mi(t,Uo(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Og(i.providerUserInfo):[],l=RT(t.providerData,a),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new zl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function ST(t){const e=pn(t);await Bo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function RT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Og(t){return t.map(e=>{var{providerId:n}=e,r=xc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kT(t,e){const n=await Pg(t,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await xg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Cg.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CT(t,e){return ws(t,"POST","/v2/accounts:revokeToken",Nc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Sf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=Sf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await kT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new is;return r&&(ue(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new is,this.toJSON())}_performRefresh(){return An("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await mi(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TT(this,e)}reload(){return ST(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await mi(this,bT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(a=n.photoURL)!==null&&a!==void 0?a:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,H=(u=n.createdAt)!==null&&u!==void 0?u:void 0,$=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:z,isAnonymous:le,providerData:ie,stsTokenManager:A}=n;ue(j&&A,e,"internal-error");const v=is.fromJSON(this.name,A);ue(typeof j=="string",e,"internal-error"),qn(p,e.name),qn(g,e.name),ue(typeof z=="boolean",e,"internal-error"),ue(typeof le=="boolean",e,"internal-error"),qn(_,e.name),qn(R,e.name),qn(P,e.name),qn(O,e.name),qn(H,e.name),qn($,e.name);const y=new Xt({uid:j,auth:e,email:g,emailVerified:z,displayName:p,isAnonymous:le,photoURL:R,phoneNumber:_,tenantId:P,stsTokenManager:v,createdAt:H,lastLoginAt:$});return ie&&Array.isArray(ie)&&(y.providerData=ie.map(I=>Object.assign({},I))),O&&(y._redirectEventId=O),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new is;s.updateFromServerResponse(n);const i=new Xt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bo(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Og(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new is;l.updateFromIdToken(r);const c=new Xt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Eo(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Eo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Uo(this.auth,{idToken:e}).catch(()=>{});return n?Xt._fromGetAccountInfoResponse(this.auth,n,e):null}return Xt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(Sn(kf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Sn(kf);const a=Eo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(a);if(f){let p;if(typeof f=="string"){const g=await Uo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Xt._fromGetAccountInfoResponse(e,g,f)}else p=Xt._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new os(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new os(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ng(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($g(e))return"Blackberry";if(Ug(e))return"Webos";if(Vg(e))return"Safari";if((e.includes("chrome/")||Mg(e))&&!e.includes("edge/"))return"Chrome";if(Fg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ng(t=It()){return/firefox\//i.test(t)}function Vg(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mg(t=It()){return/crios\//i.test(t)}function Lg(t=It()){return/iemobile/i.test(t)}function Fg(t=It()){return/android/i.test(t)}function $g(t=It()){return/blackberry/i.test(t)}function Ug(t=It()){return/webos/i.test(t)}function Mc(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function PT(t=It()){var e;return Mc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xT(){return qw()&&document.documentMode===10}function Bg(t=It()){return Mc(t)||Fg(t)||Ug(t)||$g(t)||/windows phone/i.test(t)||Lg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t,e=[]){let n;switch(t){case"Browser":n=Cf(It());break;case"Worker":n=`${Cf(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Es}/${r}`}/**
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
 */class OT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function DT(t,e={}){return ws(t,"GET","/v2/passwordPolicy",Nc(t,e))}/**
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
 */const NT=6;class VT{constructor(e){var n,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:NT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pf(this),this.idTokenSubscription=new Pf(this),this.beforeStateQueue=new OT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Uo(this,{idToken:e}),r=await Xt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(un(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(Ar(this));const n=e?pn(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DT(this),n=new VT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lc(t){return pn(t)}class Pf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zw(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LT(t){Fc=t}function FT(t){return Fc.loadJS(t)}function $T(){return Fc.gapiScript}function UT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t,e){const n=Pc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Pr(i,e??{}))return s;Nn(s,"already-initialized")}return n.initialize({options:e})}function jT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HT(t,e,n){const r=Lc(t);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Hg(e),{host:a,port:l}=zT(e),c=l===null?"":`:${l}`,u={url:`${i}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue(Pr(u,r.config.emulator)&&Pr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ri(a)?(yg(`${i}//${a}${c}`),vg("Auth",!0)):qT()}function Hg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zT(t){const e=Hg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:xf(a)}}}function xf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */async function as(t,e){return ET(t,"POST","/v1/accounts:signInWithIdp",Nc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="http://localhost";class Or extends zg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new Or(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:GT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class jo extends Ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,jo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new jo(e,n,r,s)}}function Gg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?jo._fromErrorAndOperation(t,i,e,r):i})}async function WT(t,e,n=!1){const r=await mi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return fs._forOperation(t,"link",r)}/**
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
 */async function KT(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(Ar(r));const s="reauthenticate";try{const i=await mi(t,Gg(r,s,e,t),n);ue(i.idToken,r,"internal-error");const a=Vc(i.idToken);ue(a,r,"internal-error");const{sub:l}=a;return ue(t.uid===l,r,"user-mismatch"),fs._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Nn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(t,e,n=!1){if(un(t.app))return Promise.reject(Ar(t));const r="signIn",s=await Gg(t,r,e),i=await fs._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function JT(t,e,n,r){return pn(t).onIdTokenChanged(e,n,r)}function XT(t,e,n){return pn(t).beforeAuthStateChanged(e,n)}const Ho="__sak";/**
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
 */const YT=1e3,ZT=10;class Kg extends Wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Bg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);xT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,ZT):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kg.type="LOCAL";const e0=Kg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async u=>u(n.origin,i)),c=await t0(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $c(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class n0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const u=$c("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function r0(t){dn().location.href=t}/**
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
 */function Xg(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function s0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function i0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function o0(){return Xg()?self:null}/**
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
 */const Yg="firebaseLocalStorageDb",a0=1,zo="firebaseLocalStorage",Zg="fbase_key";class Oi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ia(t,e){return t.transaction([zo],e?"readwrite":"readonly").objectStore(zo)}function l0(){const t=indexedDB.deleteDatabase(Yg);return new Oi(t).toPromise()}function ql(){const t=indexedDB.open(Yg,a0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(zo,{keyPath:Zg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(zo)?e(r):(r.close(),await l0(),e(await ql()))})})}async function Df(t,e,n){const r=Ia(t,!0).put({[Zg]:e,value:n});return new Oi(r).toPromise()}async function c0(t,e){const n=Ia(t,!1).get(e),r=await new Oi(n).toPromise();return r===void 0?null:r.value}function Nf(t,e){const n=Ia(t,!0).delete(e);return new Oi(n).toPromise()}const u0=800,h0=3;class em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ql(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>h0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ta._getInstance(o0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await s0(),!this.activeServiceWorker)return;this.sender=new n0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||i0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ql();return await Df(e,Ho,"1"),await Nf(e,Ho),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Df(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>c0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ia(s,!1).getAll();return new Oi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),u0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}em.type="LOCAL";const f0=em;new Pi(3e4,6e4);/**
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
 */function d0(t,e){return e?Sn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Uc extends zg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function p0(t){return QT(t.auth,new Uc(t),t.bypassAuthState)}function g0(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),KT(n,new Uc(t),t.bypassAuthState)}async function m0(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),WT(n,new Uc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return p0;case"linkViaPopup":case"linkViaRedirect":return m0;case"reauthViaPopup":case"reauthViaRedirect":return g0;default:Nn(this.auth,"internal-error")}}resolve(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=new Pi(2e3,1e4);class Zr extends tm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Vn(this.filter.length===1,"Popup operations only handle one event");const e=$c();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_0.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="pendingRedirect",wo=new Map;class v0 extends tm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=wo.get(this.auth._key());if(!e){try{const r=await E0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}wo.set(this.auth._key(),e)}return this.bypassAuthState||wo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function E0(t,e){const n=T0(e),r=b0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function w0(t,e){wo.set(t._key(),e)}function b0(t){return Sn(t._redirectPersistence)}function T0(t){return Eo(y0,t.config.apiKey,t.name)}async function I0(t,e,n=!1){if(un(t.app))return Promise.reject(Ar(t));const r=Lc(t),s=d0(r,e),a=await new v0(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=10*60*1e3;class S0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!R0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vf(e))}saveEventToCache(e){this.cachedEventUids.add(Vf(e)),this.lastProcessedEventTime=Date.now()}}function Vf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function R0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k0(t,e={}){return ws(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,P0=/^https?/;async function x0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await k0(t);for(const n of e)try{if(O0(n))return}catch{}Nn(t,"unauthorized-domain")}function O0(t){const e=Hl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!P0.test(n))return!1;if(C0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const D0=new Pi(3e4,6e4);function Mf(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function N0(t){return new Promise((e,n)=>{var r,s,i;function a(){Mf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mf(),n(fn(t,"network-request-failed"))},timeout:D0.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)a();else{const l=UT("iframefcb");return dn()[l]=()=>{gapi.load?a():n(fn(t,"network-request-failed"))},FT(`${$T()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw bo=null,e})}let bo=null;function V0(t){return bo=bo||N0(t),bo}/**
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
 */const M0=new Pi(5e3,15e3),L0="__/auth/iframe",F0="emulator/auth/iframe",$0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},U0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function B0(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dc(e,F0):`https://${t.config.authDomain}/${L0}`,r={apiKey:e.apiKey,appName:t.name,v:Es},s=U0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ci(r).slice(1)}`}async function j0(t){const e=await V0(t),n=dn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:B0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=fn(t,"network-request-failed"),l=dn().setTimeout(()=>{i(a)},M0.get());function c(){dn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const H0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},z0=500,q0=600,G0="_blank",W0="http://localhost";class Lf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function K0(t,e,n,r=z0,s=q0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},H0),{width:r.toString(),height:s.toString(),top:i,left:a}),u=It().toLowerCase();n&&(l=Mg(u)?G0:n),Ng(u)&&(e=e||W0,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[_,R])=>`${g}${_}=${R},`,"");if(PT(u)&&l!=="_self")return Q0(e||"",l),new Lf(null);const p=window.open(e||"",l,f);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new Lf(p)}function Q0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const J0="__/auth/handler",X0="emulator/auth/handler",Y0=encodeURIComponent("fac");async function Ff(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Es,eventId:s};if(e instanceof qg){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Yw(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof xi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${Y0}=${encodeURIComponent(c)}`:"";return`${Z0(t)}?${Ci(l).slice(1)}${u}`}function Z0({config:t}){return t.emulator?Dc(t,X0):`https://${t.authDomain}/${J0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="webStorageSupport";class eI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Jg,this._completeRedirectFn=I0,this._overrideRedirectResult=w0}async _openPopup(e,n,r,s){var i;Vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Ff(e,n,r,Hl(),s);return K0(e,a,$c())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ff(e,n,r,Hl(),s);return r0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await j0(e),r=new S0(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_l,{type:_l},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[_l];a!==void 0&&n(!!a),Nn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bg()||Vg()||Mc()}}const tI=eI;var $f="@firebase/auth",Uf="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sI(t){hs(new xr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ue(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(t)},u=new MT(r,s,i,c);return jT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hs(new xr("auth-internal",e=>{const n=Lc(e.getProvider("auth").getImmediate());return(r=>new nI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr($f,Uf,rI(t)),rr($f,Uf,"esm2017")}/**
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
 */const iI=5*60,oI=_g("authIdTokenMaxAge")||iI;let Bf=null;const aI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oI)return;const s=n==null?void 0:n.token;Bf!==s&&(Bf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lI(t=Tg()){const e=Pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BT(t,{popupRedirectResolver:tI,persistence:[f0,e0,Jg]}),r=_g("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=aI(i.toString());XT(n,a,()=>a(n.currentUser)),JT(n,l=>a(l))}}const s=gg("auth");return s&&HT(n,`http://${s}`),n}function cI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}LT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sI("Browser");var jf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function y(){}y.prototype=v.prototype,A.D=v.prototype,A.prototype=new y,A.prototype.constructor=A,A.C=function(I,S,T){for(var E=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)E[xe-2]=arguments[xe];return v.prototype[S].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,v,y){y||(y=0);var I=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)I[S]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(S=0;16>S;++S)I[S]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=A.g[0],y=A.g[1],S=A.g[2];var T=A.g[3],E=v+(T^y&(S^T))+I[0]+3614090360&4294967295;v=y+(E<<7&4294967295|E>>>25),E=T+(S^v&(y^S))+I[1]+3905402710&4294967295,T=v+(E<<12&4294967295|E>>>20),E=S+(y^T&(v^y))+I[2]+606105819&4294967295,S=T+(E<<17&4294967295|E>>>15),E=y+(v^S&(T^v))+I[3]+3250441966&4294967295,y=S+(E<<22&4294967295|E>>>10),E=v+(T^y&(S^T))+I[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=T+(S^v&(y^S))+I[5]+1200080426&4294967295,T=v+(E<<12&4294967295|E>>>20),E=S+(y^T&(v^y))+I[6]+2821735955&4294967295,S=T+(E<<17&4294967295|E>>>15),E=y+(v^S&(T^v))+I[7]+4249261313&4294967295,y=S+(E<<22&4294967295|E>>>10),E=v+(T^y&(S^T))+I[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=T+(S^v&(y^S))+I[9]+2336552879&4294967295,T=v+(E<<12&4294967295|E>>>20),E=S+(y^T&(v^y))+I[10]+4294925233&4294967295,S=T+(E<<17&4294967295|E>>>15),E=y+(v^S&(T^v))+I[11]+2304563134&4294967295,y=S+(E<<22&4294967295|E>>>10),E=v+(T^y&(S^T))+I[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=T+(S^v&(y^S))+I[13]+4254626195&4294967295,T=v+(E<<12&4294967295|E>>>20),E=S+(y^T&(v^y))+I[14]+2792965006&4294967295,S=T+(E<<17&4294967295|E>>>15),E=y+(v^S&(T^v))+I[15]+1236535329&4294967295,y=S+(E<<22&4294967295|E>>>10),E=v+(S^T&(y^S))+I[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=T+(y^S&(v^y))+I[6]+3225465664&4294967295,T=v+(E<<9&4294967295|E>>>23),E=S+(v^y&(T^v))+I[11]+643717713&4294967295,S=T+(E<<14&4294967295|E>>>18),E=y+(T^v&(S^T))+I[0]+3921069994&4294967295,y=S+(E<<20&4294967295|E>>>12),E=v+(S^T&(y^S))+I[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=T+(y^S&(v^y))+I[10]+38016083&4294967295,T=v+(E<<9&4294967295|E>>>23),E=S+(v^y&(T^v))+I[15]+3634488961&4294967295,S=T+(E<<14&4294967295|E>>>18),E=y+(T^v&(S^T))+I[4]+3889429448&4294967295,y=S+(E<<20&4294967295|E>>>12),E=v+(S^T&(y^S))+I[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=T+(y^S&(v^y))+I[14]+3275163606&4294967295,T=v+(E<<9&4294967295|E>>>23),E=S+(v^y&(T^v))+I[3]+4107603335&4294967295,S=T+(E<<14&4294967295|E>>>18),E=y+(T^v&(S^T))+I[8]+1163531501&4294967295,y=S+(E<<20&4294967295|E>>>12),E=v+(S^T&(y^S))+I[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=T+(y^S&(v^y))+I[2]+4243563512&4294967295,T=v+(E<<9&4294967295|E>>>23),E=S+(v^y&(T^v))+I[7]+1735328473&4294967295,S=T+(E<<14&4294967295|E>>>18),E=y+(T^v&(S^T))+I[12]+2368359562&4294967295,y=S+(E<<20&4294967295|E>>>12),E=v+(y^S^T)+I[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=T+(v^y^S)+I[8]+2272392833&4294967295,T=v+(E<<11&4294967295|E>>>21),E=S+(T^v^y)+I[11]+1839030562&4294967295,S=T+(E<<16&4294967295|E>>>16),E=y+(S^T^v)+I[14]+4259657740&4294967295,y=S+(E<<23&4294967295|E>>>9),E=v+(y^S^T)+I[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=T+(v^y^S)+I[4]+1272893353&4294967295,T=v+(E<<11&4294967295|E>>>21),E=S+(T^v^y)+I[7]+4139469664&4294967295,S=T+(E<<16&4294967295|E>>>16),E=y+(S^T^v)+I[10]+3200236656&4294967295,y=S+(E<<23&4294967295|E>>>9),E=v+(y^S^T)+I[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=T+(v^y^S)+I[0]+3936430074&4294967295,T=v+(E<<11&4294967295|E>>>21),E=S+(T^v^y)+I[3]+3572445317&4294967295,S=T+(E<<16&4294967295|E>>>16),E=y+(S^T^v)+I[6]+76029189&4294967295,y=S+(E<<23&4294967295|E>>>9),E=v+(y^S^T)+I[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=T+(v^y^S)+I[12]+3873151461&4294967295,T=v+(E<<11&4294967295|E>>>21),E=S+(T^v^y)+I[15]+530742520&4294967295,S=T+(E<<16&4294967295|E>>>16),E=y+(S^T^v)+I[2]+3299628645&4294967295,y=S+(E<<23&4294967295|E>>>9),E=v+(S^(y|~T))+I[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=T+(y^(v|~S))+I[7]+1126891415&4294967295,T=v+(E<<10&4294967295|E>>>22),E=S+(v^(T|~y))+I[14]+2878612391&4294967295,S=T+(E<<15&4294967295|E>>>17),E=y+(T^(S|~v))+I[5]+4237533241&4294967295,y=S+(E<<21&4294967295|E>>>11),E=v+(S^(y|~T))+I[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=T+(y^(v|~S))+I[3]+2399980690&4294967295,T=v+(E<<10&4294967295|E>>>22),E=S+(v^(T|~y))+I[10]+4293915773&4294967295,S=T+(E<<15&4294967295|E>>>17),E=y+(T^(S|~v))+I[1]+2240044497&4294967295,y=S+(E<<21&4294967295|E>>>11),E=v+(S^(y|~T))+I[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=T+(y^(v|~S))+I[15]+4264355552&4294967295,T=v+(E<<10&4294967295|E>>>22),E=S+(v^(T|~y))+I[6]+2734768916&4294967295,S=T+(E<<15&4294967295|E>>>17),E=y+(T^(S|~v))+I[13]+1309151649&4294967295,y=S+(E<<21&4294967295|E>>>11),E=v+(S^(y|~T))+I[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=T+(y^(v|~S))+I[11]+3174756917&4294967295,T=v+(E<<10&4294967295|E>>>22),E=S+(v^(T|~y))+I[2]+718787259&4294967295,S=T+(E<<15&4294967295|E>>>17),E=y+(T^(S|~v))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(S+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+S&4294967295,A.g[3]=A.g[3]+T&4294967295}r.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var y=v-this.blockSize,I=this.B,S=this.h,T=0;T<v;){if(S==0)for(;T<=y;)s(this,A,T),T+=this.blockSize;if(typeof A=="string"){for(;T<v;)if(I[S++]=A.charCodeAt(T++),S==this.blockSize){s(this,I),S=0;break}}else for(;T<v;)if(I[S++]=A[T++],S==this.blockSize){s(this,I),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var y=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=y&255,y/=256;for(this.u(A),A=Array(16),v=y=0;4>v;++v)for(var I=0;32>I;I+=8)A[y++]=this.g[v]>>>I&255;return A};function i(A,v){var y=l;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=v(A)}function a(A,v){this.h=v;for(var y=[],I=!0,S=A.length-1;0<=S;S--){var T=A[S]|0;I&&T==v||(y[S]=T,I=!1)}this.g=y}var l={};function c(A){return-128<=A&&128>A?i(A,function(v){return new a([v|0],0>v?-1:0)}):new a([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return O(u(-A));for(var v=[],y=1,I=0;A>=y;I++)v[I]=A/y|0,y*=4294967296;return new a(v,0)}function f(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return O(f(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),I=p,S=0;S<A.length;S+=8){var T=Math.min(8,A.length-S),E=parseInt(A.substring(S,S+T),v);8>T?(T=u(Math.pow(v,T)),I=I.j(T).add(u(E))):(I=I.j(y),I=I.add(u(E)))}return I}var p=c(0),g=c(1),_=c(16777216);t=a.prototype,t.m=function(){if(P(this))return-O(this).m();for(var A=0,v=1,y=0;y<this.g.length;y++){var I=this.i(y);A+=(0<=I?I:4294967296+I)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(R(this))return"0";if(P(this))return"-"+O(this).toString(A);for(var v=u(Math.pow(A,6)),y=this,I="";;){var S=z(y,v).g;y=H(y,S.j(v));var T=((0<y.g.length?y.g[0]:y.h)>>>0).toString(A);if(y=S,R(y))return T+I;for(;6>T.length;)T="0"+T;I=T+I}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function R(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function P(A){return A.h==-1}t.l=function(A){return A=H(this,A),P(A)?-1:R(A)?0:1};function O(A){for(var v=A.g.length,y=[],I=0;I<v;I++)y[I]=~A.g[I];return new a(y,~A.h).add(g)}t.abs=function(){return P(this)?O(this):this},t.add=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],I=0,S=0;S<=v;S++){var T=I+(this.i(S)&65535)+(A.i(S)&65535),E=(T>>>16)+(this.i(S)>>>16)+(A.i(S)>>>16);I=E>>>16,T&=65535,E&=65535,y[S]=E<<16|T}return new a(y,y[y.length-1]&-2147483648?-1:0)};function H(A,v){return A.add(O(v))}t.j=function(A){if(R(this)||R(A))return p;if(P(this))return P(A)?O(this).j(O(A)):O(O(this).j(A));if(P(A))return O(this.j(O(A)));if(0>this.l(_)&&0>A.l(_))return u(this.m()*A.m());for(var v=this.g.length+A.g.length,y=[],I=0;I<2*v;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var S=0;S<A.g.length;S++){var T=this.i(I)>>>16,E=this.i(I)&65535,xe=A.i(S)>>>16,Xe=A.i(S)&65535;y[2*I+2*S]+=E*Xe,$(y,2*I+2*S),y[2*I+2*S+1]+=T*Xe,$(y,2*I+2*S+1),y[2*I+2*S+1]+=E*xe,$(y,2*I+2*S+1),y[2*I+2*S+2]+=T*xe,$(y,2*I+2*S+2)}for(I=0;I<v;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=v;I<2*v;I++)y[I]=0;return new a(y,0)};function $(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function j(A,v){this.g=A,this.h=v}function z(A,v){if(R(v))throw Error("division by zero");if(R(A))return new j(p,p);if(P(A))return v=z(O(A),v),new j(O(v.g),O(v.h));if(P(v))return v=z(A,O(v)),new j(O(v.g),v.h);if(30<A.g.length){if(P(A)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,I=v;0>=I.l(A);)y=le(y),I=le(I);var S=ie(y,1),T=ie(I,1);for(I=ie(I,2),y=ie(y,2);!R(I);){var E=T.add(I);0>=E.l(A)&&(S=S.add(y),T=E),I=ie(I,1),y=ie(y,1)}return v=H(A,S.j(v)),new j(S,v)}for(S=p;0<=A.l(v);){for(y=Math.max(1,Math.floor(A.m()/v.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),T=u(y),E=T.j(v);P(E)||0<E.l(A);)y-=I,T=u(y),E=T.j(v);R(T)&&(T=g),S=S.add(T),A=H(A,E)}return new j(S,A)}t.A=function(A){return z(this,A).h},t.and=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)&A.i(I);return new a(y,this.h&A.h)},t.or=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)|A.i(I);return new a(y,this.h|A.h)},t.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)^A.i(I);return new a(y,this.h^A.h)};function le(A){for(var v=A.g.length+1,y=[],I=0;I<v;I++)y[I]=A.i(I)<<1|A.i(I-1)>>>31;return new a(y,A.h)}function ie(A,v){var y=v>>5;v%=32;for(var I=A.g.length-y,S=[],T=0;T<I;T++)S[T]=0<v?A.i(T+y)>>>v|A.i(T+y+1)<<32-v:A.i(T+y);return new a(S,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=f,Bc=a}).apply(typeof jf<"u"?jf:typeof self<"u"?self:typeof window<"u"?window:{});var oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rm,zs,sm,To,Gl,im,om,am;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,d){return o==Array.prototype||o==Object.prototype||(o[h]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof oo=="object"&&oo];for(var h=0;h<o.length;++h){var d=o[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,h){if(h)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var C=o[m];if(!(C in d))break e;d=d[C]}o=o[o.length-1],m=d[o],h=h(m),h!=m&&h!=null&&e(d,o,{configurable:!0,writable:!0,value:h})}}function i(o,h){o instanceof String&&(o+="");var d=0,m=!1,C={next:function(){if(!m&&d<o.length){var x=d++;return{value:h(x,o[x]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function u(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function f(o,h,d){return o.call.apply(o.bind,arguments)}function p(o,h,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),o.apply(h,C)}}return function(){return o.apply(h,arguments)}}function g(o,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(o,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function R(o,h){function d(){}d.prototype=h.prototype,o.aa=h.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,C,x){for(var W=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)W[Oe-2]=arguments[Oe];return h.prototype[C].apply(m,W)}}function P(o){const h=o.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=o[m];return d}return[]}function O(o,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const C=o.length||0,x=m.length||0;o.length=C+x;for(let W=0;W<x;W++)o[C+W]=m[W]}else o.push(m)}}class H{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function $(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var le=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function ie(o,h,d){for(const m in o)h.call(d,o[m],m,o)}function A(o,h){for(const d in o)h.call(void 0,o[d],d,o)}function v(o){const h={};for(const d in o)h[d]=o[d];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,h){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)o[d]=m[d];for(let x=0;x<y.length;x++)d=y[x],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function S(o){var h=1;o=o.split(":");const d=[];for(;0<h&&o.length;)d.push(o.shift()),h--;return o.length&&d.push(o.join(":")),d}function T(o){l.setTimeout(()=>{throw o},0)}function E(){var o=Mt;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class xe{constructor(){this.h=this.g=null}add(h,d){const m=Xe.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Xe=new H(()=>new Ue,o=>o.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,me=!1,Mt=new xe,Wt=()=>{const o=l.Promise.resolve(void 0);ye=()=>{o.then(Bt)}};var Bt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){T(d)}var h=Xe;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}me=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var Fn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return o}();function rn(o,h){if(je.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(le){e:{try{z(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else d=="mouseover"?h=o.fromElement:d=="mouseout"&&(h=o.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:xt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&rn.aa.h.call(this)}}R(rn,je);var xt={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),X=0;function J(o,h,d,m,C){this.listener=o,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=C,this.key=++X,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function be(o){this.src=o,this.g={},this.h=0}be.prototype.add=function(o,h,d,m,C){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var W=b(o,h,m,C);return-1<W?(h=o[W],d||(h.fa=!1)):(h=new J(h,this.src,x,!!m,C),h.fa=d,o.push(h)),h};function w(o,h){var d=h.type;if(d in o.g){var m=o.g[d],C=Array.prototype.indexOf.call(m,h,void 0),x;(x=0<=C)&&Array.prototype.splice.call(m,C,1),x&&(Y(h),o.g[d].length==0&&(delete o.g[d],o.h--))}}function b(o,h,d,m){for(var C=0;C<o.length;++C){var x=o[C];if(!x.da&&x.listener==h&&x.capture==!!d&&x.ha==m)return C}return-1}var k="closure_lm_"+(1e6*Math.random()|0),N={};function L(o,h,d,m,C){if(Array.isArray(h)){for(var x=0;x<h.length;x++)L(o,h[x],d,m,C);return null}return d=ae(d),o&&o[D]?o.K(h,d,u(m)?!!m.capture:!1,C):V(o,h,d,!1,m,C)}function V(o,h,d,m,C,x){if(!h)throw Error("Invalid event type");var W=u(C)?!!C.capture:!!C,Oe=K(o);if(Oe||(o[k]=Oe=new be(o)),d=Oe.add(h,d,m,W,x),d.proxy)return d;if(m=Q(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Fn||(C=W),C===void 0&&(C=!1),o.addEventListener(h.toString(),m,C);else if(o.attachEvent)o.attachEvent(U(h.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function o(d){return h.call(o.src,o.listener,d)}const h=te;return o}function G(o,h,d,m,C){if(Array.isArray(h))for(var x=0;x<h.length;x++)G(o,h[x],d,m,C);else m=u(m)?!!m.capture:!!m,d=ae(d),o&&o[D]?(o=o.i,h=String(h).toString(),h in o.g&&(x=o.g[h],d=b(x,d,m,C),-1<d&&(Y(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete o.g[h],o.h--)))):o&&(o=K(o))&&(h=o.g[h.toString()],o=-1,h&&(o=b(h,d,m,C)),(d=-1<o?h[o]:null)&&q(d))}function q(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[D])w(h.i,o);else{var d=o.type,m=o.proxy;h.removeEventListener?h.removeEventListener(d,m,o.capture):h.detachEvent?h.detachEvent(U(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=K(h))?(w(d,o),d.h==0&&(d.src=null,h[k]=null)):Y(o)}}}function U(o){return o in N?N[o]:N[o]="on"+o}function te(o,h){if(o.da)o=!0;else{h=new rn(h,this);var d=o.listener,m=o.ha||o.src;o.fa&&q(o),o=d.call(m,h)}return o}function K(o){return o=o[k],o instanceof be?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(h){return o.handleEvent(h)}),o[ee])}function se(){Be.call(this),this.i=new be(this),this.M=this,this.F=null}R(se,Be),se.prototype[D]=!0,se.prototype.removeEventListener=function(o,h,d,m){G(this,o,h,d,m)};function de(o,h){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=h.type||h,typeof h=="string")h=new je(h,o);else if(h instanceof je)h.target=h.target||o;else{var C=h;h=new je(m,o),I(h,C)}if(C=!0,d)for(var x=d.length-1;0<=x;x--){var W=h.g=d[x];C=ve(W,m,!0,h)&&C}if(W=h.g=o,C=ve(W,m,!0,h)&&C,C=ve(W,m,!1,h)&&C,d)for(x=0;x<d.length;x++)W=h.g=d[x],C=ve(W,m,!1,h)&&C}se.prototype.N=function(){if(se.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var d=o.g[h],m=0;m<d.length;m++)Y(d[m]);delete o.g[h],o.h--}}this.F=null},se.prototype.K=function(o,h,d,m){return this.i.add(String(o),h,!1,d,m)},se.prototype.L=function(o,h,d,m){return this.i.add(String(o),h,!0,d,m)};function ve(o,h,d,m){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,x=0;x<h.length;++x){var W=h[x];if(W&&!W.da&&W.capture==d){var Oe=W.listener,at=W.ha||W.src;W.fa&&w(o.i,W),C=Oe.call(at,m)!==!1&&C}}return C&&!m.defaultPrevented}function gt(o,h,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(o,h||0)}function it(o){o.g=gt(()=>{o.g=null,o.i&&(o.i=!1,it(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class jt extends Be{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:it(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mt(o){Be.call(this),this.h=o,this.g={}}R(mt,Be);var $n=[];function Is(o){ie(o.g,function(h,d){this.g.hasOwnProperty(d)&&q(h)},o),o.g={}}mt.prototype.N=function(){mt.aa.N.call(this),Is(this)},mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ot=l.JSON.stringify,Ht=l.JSON.parse,$i=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Va(){}Va.prototype.h=null;function wu(o){return o.h||(o.h=o.i())}function bu(){}var As={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ma(){je.call(this,"d")}R(Ma,je);function La(){je.call(this,"c")}R(La,je);var hr={},Tu=null;function Ui(){return Tu=Tu||new se}hr.La="serverreachability";function Iu(o){je.call(this,hr.La,o)}R(Iu,je);function Ss(o){const h=Ui();de(h,new Iu(h))}hr.STAT_EVENT="statevent";function Au(o,h){je.call(this,hr.STAT_EVENT,o),this.stat=h}R(Au,je);function At(o){const h=Ui();de(h,new Au(h,o))}hr.Ma="timingevent";function Su(o,h){je.call(this,hr.Ma,o),this.size=h}R(Su,je);function Rs(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},h)}function ks(){this.g=!0}ks.prototype.xa=function(){this.g=!1};function w_(o,h,d,m,C,x){o.info(function(){if(o.g)if(x)for(var W="",Oe=x.split("&"),at=0;at<Oe.length;at++){var Te=Oe[at].split("=");if(1<Te.length){var _t=Te[0];Te=Te[1];var yt=_t.split("_");W=2<=yt.length&&yt[1]=="type"?W+(_t+"="+Te+"&"):W+(_t+"=redacted&")}}else W=null;else W=x;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+h+`
`+d+`
`+W})}function b_(o,h,d,m,C,x,W){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+h+`
`+d+`
`+x+" "+W})}function Hr(o,h,d,m){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+I_(o,d)+(m?" "+m:"")})}function T_(o,h){o.info(function(){return"TIMEOUT: "+h})}ks.prototype.info=function(){};function I_(o,h){if(!o.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var x=C[0];if(x!="noop"&&x!="stop"&&x!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return ot(d)}catch{return h}}var Bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ru={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Fa;function ji(){}R(ji,Va),ji.prototype.g=function(){return new XMLHttpRequest},ji.prototype.i=function(){return{}},Fa=new ji;function Un(o,h,d,m){this.j=o,this.i=h,this.l=d,this.R=m||1,this.U=new mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ku}function ku(){this.i=null,this.g="",this.h=!1}var Cu={},$a={};function Ua(o,h,d){o.L=1,o.v=Gi(_n(h)),o.m=d,o.P=!0,Pu(o,null)}function Pu(o,h){o.F=Date.now(),Hi(o),o.A=_n(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),zu(d.i,"t",m),o.C=0,d=o.j.J,o.h=new ku,o.g=lh(o.j,d?h:null,!o.m),0<o.O&&(o.M=new jt(g(o.Y,o,o.g),o.O)),h=o.U,d=o.g,m=o.ca;var C="readystatechange";Array.isArray(C)||(C&&($n[0]=C.toString()),C=$n);for(var x=0;x<C.length;x++){var W=L(d,C[x],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),Ss(),w_(o.i,o.u,o.A,o.l,o.R,o.m)}Un.prototype.ca=function(o){o=o.target;const h=this.M;h&&yn(o)==3?h.j():this.Y(o)},Un.prototype.Y=function(o){try{if(o==this.g)e:{const yt=yn(this.g);var h=this.g.Ba();const Gr=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||Xu(this.g)))){this.J||yt!=4||h==7||(h==8||0>=Gr?Ss(3):Ss(2)),Ba(this);var d=this.g.Z();this.X=d;t:if(xu(this)){var m=Xu(this.g);o="";var C=m.length,x=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fr(this),Cs(this);var W="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,o+=this.h.i.decode(m[h],{stream:!(x&&h==C-1)});m.length=0,this.h.g+=o,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,b_(this.i,this.u,this.A,this.l,this.R,yt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,at=this.g;if((Oe=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Oe)){var Te=Oe;break t}}Te=null}if(d=Te)Hr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ja(this,d);else{this.o=!1,this.s=3,At(12),fr(this),Cs(this);break e}}if(this.P){d=!0;let Kt;for(;!this.J&&this.C<W.length;)if(Kt=A_(this,W),Kt==$a){yt==4&&(this.s=4,At(14),d=!1),Hr(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==Cu){this.s=4,At(15),Hr(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else Hr(this.i,this.l,Kt,null),ja(this,Kt);if(xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||W.length!=0||this.h.h||(this.s=1,At(16),d=!1),this.o=this.o&&d,!d)Hr(this.i,this.l,W,"[Invalid Chunked Response]"),fr(this),Cs(this);else if(0<W.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Ka(_t),_t.M=!0,At(11))}}else Hr(this.i,this.l,W,null),ja(this,W);yt==4&&fr(this),this.o&&!this.J&&(yt==4?sh(this.j,this):(this.o=!1,Hi(this)))}else j_(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,At(12)):(this.s=0,At(13)),fr(this),Cs(this)}}}catch{}finally{}};function xu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function A_(o,h){var d=o.C,m=h.indexOf(`
`,d);return m==-1?$a:(d=Number(h.substring(d,m)),isNaN(d)?Cu:(m+=1,m+d>h.length?$a:(h=h.slice(m,m+d),o.C=m+d,h)))}Un.prototype.cancel=function(){this.J=!0,fr(this)};function Hi(o){o.S=Date.now()+o.I,Ou(o,o.I)}function Ou(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Rs(g(o.ba,o),h)}function Ba(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Un.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(T_(this.i,this.A),this.L!=2&&(Ss(),At(17)),fr(this),this.s=2,Cs(this)):Ou(this,this.S-o)};function Cs(o){o.j.G==0||o.J||sh(o.j,o)}function fr(o){Ba(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,Is(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function ja(o,h){try{var d=o.j;if(d.G!=0&&(d.g==o||Ha(d.h,o))){if(!o.K&&Ha(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Yi(d),Ji(d);else break e;Wa(d),At(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=Rs(g(d.Za,d),6e3));if(1>=Vu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else pr(d,11)}else if((o.K||d.g==o)&&Yi(d),!$(h))for(C=d.Da.g.parse(h),h=0;h<C.length;h++){let Te=C[h];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const _t=Te[3];_t!=null&&(d.la=_t,d.j.info("VER="+d.la));const yt=Te[4];yt!=null&&(d.Aa=yt,d.j.info("SVER="+d.Aa));const Gr=Te[5];Gr!=null&&typeof Gr=="number"&&0<Gr&&(m=1.5*Gr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Kt=o.g;if(Kt){const eo=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var x=m.h;x.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(za(x,x.h),x.h=null))}if(m.D){const Qa=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Qa&&(m.ya=Qa,Le(m.I,m.D,Qa))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var W=o;if(m.qa=ah(m,m.J?m.ia:null,m.W),W.K){Mu(m.h,W);var Oe=W,at=m.L;at&&(Oe.I=at),Oe.B&&(Ba(Oe),Hi(Oe)),m.g=W}else nh(m);0<d.i.length&&Xi(d)}else Te[0]!="stop"&&Te[0]!="close"||pr(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?pr(d,7):Ga(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}Ss(4)}catch{}}var S_=class{constructor(o,h){this.g=o,this.map=h}};function Du(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Vu(o){return o.h?1:o.g?o.g.size:0}function Ha(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function za(o,h){o.g?o.g.add(h):o.h=h}function Mu(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Du.prototype.cancel=function(){if(this.i=Lu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Lu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const d of o.g.values())h=h.concat(d.D);return h}return P(o.i)}function R_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var h=[],d=o.length,m=0;m<d;m++)h.push(o[m]);return h}h=[],d=0;for(m in o)h[d++]=o[m];return h}function k_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var h=[];o=o.length;for(var d=0;d<o;d++)h.push(d);return h}h=[],d=0;for(const m in o)h[d++]=m;return h}}}function Fu(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var d=k_(o),m=R_(o),C=m.length,x=0;x<C;x++)h.call(void 0,m[x],d&&d[x],o)}var $u=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function C_(o,h){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),C=null;if(0<=m){var x=o[d].substring(0,m);C=o[d].substring(m+1)}else x=o[d];h(x,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function dr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof dr){this.h=o.h,zi(this,o.j),this.o=o.o,this.g=o.g,qi(this,o.s),this.l=o.l;var h=o.i,d=new Os;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Uu(this,d),this.m=o.m}else o&&(h=String(o).match($u))?(this.h=!1,zi(this,h[1]||"",!0),this.o=Ps(h[2]||""),this.g=Ps(h[3]||"",!0),qi(this,h[4]),this.l=Ps(h[5]||"",!0),Uu(this,h[6]||"",!0),this.m=Ps(h[7]||"")):(this.h=!1,this.i=new Os(null,this.h))}dr.prototype.toString=function(){var o=[],h=this.j;h&&o.push(xs(h,Bu,!0),":");var d=this.g;return(d||h=="file")&&(o.push("//"),(h=this.o)&&o.push(xs(h,Bu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(xs(d,d.charAt(0)=="/"?O_:x_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",xs(d,N_)),o.join("")};function _n(o){return new dr(o)}function zi(o,h,d){o.j=d?Ps(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function qi(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function Uu(o,h,d){h instanceof Os?(o.i=h,V_(o.i,o.h)):(d||(h=xs(h,D_)),o.i=new Os(h,o.h))}function Le(o,h,d){o.i.set(h,d)}function Gi(o){return Le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ps(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function xs(o,h,d){return typeof o=="string"?(o=encodeURI(o).replace(h,P_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function P_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Bu=/[#\/\?@]/g,x_=/[#\?:]/g,O_=/[#\?]/g,D_=/[#\?@]/g,N_=/#/g;function Os(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function Bn(o){o.g||(o.g=new Map,o.h=0,o.i&&C_(o.i,function(h,d){o.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=Os.prototype,t.add=function(o,h){Bn(this),this.i=null,o=zr(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(h),this.h+=1,this};function ju(o,h){Bn(o),h=zr(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Hu(o,h){return Bn(o),h=zr(o,h),o.g.has(h)}t.forEach=function(o,h){Bn(this),this.g.forEach(function(d,m){d.forEach(function(C){o.call(h,C,m,this)},this)},this)},t.na=function(){Bn(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const C=o[m];for(let x=0;x<C.length;x++)d.push(h[m])}return d},t.V=function(o){Bn(this);let h=[];if(typeof o=="string")Hu(this,o)&&(h=h.concat(this.g.get(zr(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)h=h.concat(o[d])}return h},t.set=function(o,h){return Bn(this),this.i=null,o=zr(this,o),Hu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},t.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function zu(o,h,d){ju(o,h),0<d.length&&(o.i=null,o.g.set(zr(o,h),P(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const x=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var C=x;W[m]!==""&&(C+="="+encodeURIComponent(String(W[m]))),o.push(C)}}return this.i=o.join("&")};function zr(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function V_(o,h){h&&!o.j&&(Bn(o),o.i=null,o.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(ju(this,m),zu(this,C,d))},o)),o.j=h}function M_(o,h){const d=new ks;if(l.Image){const m=new Image;m.onload=_(jn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=_(jn,d,"TestLoadImage: error",!1,h,m),m.onabort=_(jn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=_(jn,d,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else h(!1)}function L_(o,h){const d=new ks,m=new AbortController,C=setTimeout(()=>{m.abort(),jn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:m.signal}).then(x=>{clearTimeout(C),x.ok?jn(d,"TestPingServer: ok",!0,h):jn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),jn(d,"TestPingServer: error",!1,h)})}function jn(o,h,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function F_(){this.g=new $i}function $_(o,h,d){const m=d||"";try{Fu(o,function(C,x){let W=C;u(C)&&(W=ot(C)),h.push(m+x+"="+encodeURIComponent(W))})}catch(C){throw h.push(m+"type="+encodeURIComponent("_badmap")),C}}function Wi(o){this.l=o.Ub||null,this.j=o.eb||!1}R(Wi,Va),Wi.prototype.g=function(){return new Ki(this.l,this.j)},Wi.prototype.i=function(o){return function(){return o}}({});function Ki(o,h){se.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ki,se),t=Ki.prototype,t.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,Ns(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ds(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ns(this)),this.g&&(this.readyState=3,Ns(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function qu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?Ds(this):Ns(this),this.readyState==3&&qu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Ds(this))},t.Qa=function(o){this.g&&(this.response=o,Ds(this))},t.ga=function(){this.g&&Ds(this)};function Ds(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ns(o)}t.setRequestHeader=function(o,h){this.u.append(o,h)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=h.next();return o.join(`\r
`)};function Ns(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Gu(o){let h="";return ie(o,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function qa(o,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Gu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Le(o,h,d))}function He(o){se.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(He,se);var U_=/^https?$/i,B_=["POST","PUT"];t=He.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Fa.g(),this.v=this.o?wu(this.o):wu(Fa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(x){Wu(this,x);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())d.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(B_,h,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,W]of d)this.g.setRequestHeader(x,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ju(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){Wu(this,x)}};function Wu(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,Ku(o),Qi(o)}function Ku(o){o.A||(o.A=!0,de(o,"complete"),de(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,de(this,"complete"),de(this,"abort"),Qi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qu(this):this.bb())},t.bb=function(){Qu(this)};function Qu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||yn(o)!=4||o.Z()!=2)){if(o.u&&yn(o)==4)gt(o.Ea,0,o);else if(de(o,"readystatechange"),yn(o)==4){o.h=!1;try{const W=o.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=W===0){var C=String(o.D).match($u)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!U_.test(C?C.toLowerCase():"")}d=m}if(d)de(o,"complete"),de(o,"success");else{o.m=6;try{var x=2<yn(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",Ku(o)}}finally{Qi(o)}}}}function Qi(o,h){if(o.g){Ju(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||de(o,"ready");try{d.onreadystatechange=m}catch{}}}function Ju(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function yn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),Ht(h)}};function Xu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function j_(o){const h={};o=(o.g&&2<=yn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if($(o[m]))continue;var d=S(o[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=h[C]||[];h[C]=x,x.push(d)}A(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Vs(o,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||h}function Yu(o){this.Aa=0,this.i=[],this.j=new ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Vs("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Vs("baseRetryDelayMs",5e3,o),this.cb=Vs("retryDelaySeedMs",1e4,o),this.Wa=Vs("forwardChannelMaxRetries",2,o),this.wa=Vs("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Du(o&&o.concurrentRequestLimit),this.Da=new F_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yu.prototype,t.la=8,t.G=1,t.connect=function(o,h,d,m){At(0),this.W=o,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=ah(this,null,this.W),Xi(this)};function Ga(o){if(Zu(o),o.G==3){var h=o.U++,d=_n(o.I);if(Le(d,"SID",o.K),Le(d,"RID",h),Le(d,"TYPE","terminate"),Ms(o,d),h=new Un(o,o.j,h),h.L=2,h.v=Gi(_n(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=lh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Hi(h)}oh(o)}function Ji(o){o.g&&(Ka(o),o.g.cancel(),o.g=null)}function Zu(o){Ji(o),o.u&&(l.clearTimeout(o.u),o.u=null),Yi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Xi(o){if(!Nu(o.h)&&!o.s){o.s=!0;var h=o.Ga;ye||Wt(),me||(ye(),me=!0),Mt.add(h,o),o.B=0}}function H_(o,h){return Vu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Rs(g(o.Ga,o,h),ih(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new Un(this,this.j,o);let x=this.o;if(this.S&&(x?(x=v(x),I(x,this.S)):x=this.S),this.m!==null||this.O||(C.H=x,x=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=th(this,C,h),d=_n(this.I),Le(d,"RID",o),Le(d,"CVER",22),this.D&&Le(d,"X-HTTP-Session-Id",this.D),Ms(this,d),x&&(this.O?h="headers="+encodeURIComponent(String(Gu(x)))+"&"+h:this.m&&qa(d,this.m,x)),za(this.h,C),this.Ua&&Le(d,"TYPE","init"),this.P?(Le(d,"$req",h),Le(d,"SID","null"),C.T=!0,Ua(C,d,null)):Ua(C,d,h),this.G=2}}else this.G==3&&(o?eh(this,o):this.i.length==0||Nu(this.h)||eh(this))};function eh(o,h){var d;h?d=h.l:d=o.U++;const m=_n(o.I);Le(m,"SID",o.K),Le(m,"RID",d),Le(m,"AID",o.T),Ms(o,m),o.m&&o.o&&qa(m,o.m,o.o),d=new Un(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),h&&(o.i=h.D.concat(o.i)),h=th(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),za(o.h,d),Ua(d,m,h)}function Ms(o,h){o.H&&ie(o.H,function(d,m){Le(h,m,d)}),o.l&&Fu({},function(d,m){Le(h,m,d)})}function th(o,h,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var C=o.i;let x=-1;for(;;){const W=["count="+d];x==-1?0<d?(x=C[0].g,W.push("ofs="+x)):x=0:W.push("ofs="+x);let Oe=!0;for(let at=0;at<d;at++){let Te=C[at].g;const _t=C[at].map;if(Te-=x,0>Te)x=Math.max(0,C[at].g-100),Oe=!1;else try{$_(_t,W,"req"+Te+"_")}catch{m&&m(_t)}}if(Oe){m=W.join("&");break e}}}return o=o.i.splice(0,d),h.D=o,m}function nh(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;ye||Wt(),me||(ye(),me=!0),Mt.add(h,o),o.v=0}}function Wa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Rs(g(o.Fa,o),ih(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Rs(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,At(10),Ji(this),rh(this))};function Ka(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function rh(o){o.g=new Un(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=_n(o.qa);Le(h,"RID","rpc"),Le(h,"SID",o.K),Le(h,"AID",o.T),Le(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&Le(h,"TO",o.ja),Le(h,"TYPE","xmlhttp"),Ms(o,h),o.m&&o.o&&qa(h,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Gi(_n(h)),d.m=null,d.P=!0,Pu(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Ji(this),Wa(this),At(19))};function Yi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function sh(o,h){var d=null;if(o.g==h){Yi(o),Ka(o),o.g=null;var m=2}else if(Ha(o.h,h))d=h.D,Mu(o.h,h),m=1;else return;if(o.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var C=o.B;m=Ui(),de(m,new Su(m,d)),Xi(o)}else nh(o);else if(C=h.s,C==3||C==0&&0<h.X||!(m==1&&H_(o,h)||m==2&&Wa(o)))switch(d&&0<d.length&&(h=o.h,h.i=h.i.concat(d)),C){case 1:pr(o,5);break;case 4:pr(o,10);break;case 3:pr(o,6);break;default:pr(o,2)}}}function ih(o,h){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*h}function pr(o,h){if(o.j.info("Error code "+h),h==2){var d=g(o.fb,o),m=o.Xa;const C=!m;m=new dr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||zi(m,"https"),Gi(m),C?M_(m.toString(),d):L_(m.toString(),d)}else At(2);o.G=0,o.l&&o.l.sa(h),oh(o),Zu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),At(2)):(this.j.info("Failed to ping google.com"),At(1))};function oh(o){if(o.G=0,o.ka=[],o.l){const h=Lu(o.h);(h.length!=0||o.i.length!=0)&&(O(o.ka,h),O(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function ah(o,h,d){var m=d instanceof dr?_n(d):new dr(d);if(m.g!="")h&&(m.g=h+"."+m.g),qi(m,m.s);else{var C=l.location;m=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var x=new dr(null);m&&zi(x,m),h&&(x.g=h),C&&qi(x,C),d&&(x.l=d),m=x}return d=o.D,h=o.ya,d&&h&&Le(m,d,h),Le(m,"VER",o.la),Ms(o,m),m}function lh(o,h,d){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new He(new Wi({eb:d})):new He(o.pa),h.Ha(o.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}t=ch.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Zi(){}Zi.prototype.g=function(o,h){return new Lt(o,h)};function Lt(o,h){se.call(this),this.g=new Yu(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!$(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!$(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new qr(this)}R(Lt,se),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){Ga(this.g)},Lt.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=ot(o),o=d);h.i.push(new S_(h.Ya++,o)),h.G==3&&Xi(h)},Lt.prototype.N=function(){this.g.l=null,delete this.j,Ga(this.g),delete this.g,Lt.aa.N.call(this)};function uh(o){Ma.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const d in h){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}R(uh,Ma);function hh(){La.call(this),this.status=1}R(hh,La);function qr(o){this.g=o}R(qr,ch),qr.prototype.ua=function(){de(this.g,"a")},qr.prototype.ta=function(o){de(this.g,new uh(o))},qr.prototype.sa=function(o){de(this.g,new hh)},qr.prototype.ra=function(){de(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,am=function(){return new Zi},om=function(){return Ui()},im=hr,Gl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Bi.NO_ERROR=0,Bi.TIMEOUT=8,Bi.HTTP_ERROR=6,To=Bi,Ru.COMPLETE="complete",sm=Ru,bu.EventType=As,As.OPEN="a",As.CLOSE="b",As.ERROR="c",As.MESSAGE="d",se.prototype.listen=se.prototype.K,zs=bu,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,rm=He}).apply(typeof oo<"u"?oo:typeof self<"u"?self:typeof window<"u"?window:{});const Hf="@firebase/firestore",zf="4.7.16";/**
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
 */class Et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
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
 */let bs="11.8.1";/**
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
 */const Dr=new kc("@firebase/firestore");function Xr(){return Dr.logLevel}function Z(t,...e){if(Dr.logLevel<=_e.DEBUG){const n=e.map(jc);Dr.debug(`Firestore (${bs}): ${t}`,...n)}}function Nr(t,...e){if(Dr.logLevel<=_e.ERROR){const n=e.map(jc);Dr.error(`Firestore (${bs}): ${t}`,...n)}}function Aa(t,...e){if(Dr.logLevel<=_e.WARN){const n=e.map(jc);Dr.warn(`Firestore (${bs}): ${t}`,...n)}}function jc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ge(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,lm(t,r,n)}function lm(t,e,n){let r=`FIRESTORE (${bs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Nr(r),new Error(r)}function ze(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||lm(e,s,r)}function Me(t,e){return t}/**
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
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class he extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Et.UNAUTHENTICATED))}shutdown(){}}class hI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fI{constructor(e){this.t=e,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ze(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Sr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Sr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Sr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string",31837,{l:r}),new cm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new Et(e)}}class dI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new dI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ze(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new qf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new qf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class um{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=mI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Wl(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return we(r,s);{const i=_I(),a=yI(i.encode(Gf(t,n)),i.encode(Gf(e,n)));return a!==0?a:we(r,s)}}n+=r>65535?2:1}return we(t.length,e.length)}function Gf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function yI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return we(t[n],e[n]);return we(t.length,e.length)}function ds(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */const Wf=-62135596800,Kf=1e6;class rt{static now(){return rt.fromMillis(Date.now())}static fromDate(e){return rt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Kf);return new rt(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new he(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new he(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Wf)throw new he(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new he(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kf}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Wf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class $e{static fromTimestamp(e){return new $e(e)}static min(){return new $e(new rt(0,0))}static max(){return new $e(new rt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Qf="__name__";class ln{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ge(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ln.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ln?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=ln.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return we(e.length,n.length)}static compareSegments(e,n){const r=ln.isNumericId(e),s=ln.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?ln.extractNumericId(e).compare(ln.extractNumericId(n)):Wl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Bc.fromString(e.substring(4,e.length-2))}}class Je extends ln{construct(e,n,r){return new Je(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new he(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Je(n)}static emptyPath(){return new Je([])}}const vI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends ln{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return vI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qf}static keyField(){return new ft([Qf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new he(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new he(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new he(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new he(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Je.fromString(e))}static fromName(e){return new pe(Je.fromString(e).popFirst(5))}static empty(){return new pe(Je.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Je.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Je.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Je(e.slice()))}}/**
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
 */const _i=-1;function EI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=$e.fromTimestamp(r===1e9?new rt(n+1,0):new rt(n,r));return new or(s,pe.empty(),e)}function wI(t){return new or(t.readTime,t.key,_i)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or($e.min(),pe.empty(),_i)}static max(){return new or($e.max(),pe.empty(),_i)}}function bI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=pe.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{a[u]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new F((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function AI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Di(t){return t.name==="IndexedDbTransactionError"}/**
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
 */function Xf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Vt{constructor(e,n){this.comparator=e,this.root=n||lt.EMPTY}insert(e,n){return new Vt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(e){return new Vt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,lt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ao(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ao(this.root,e,this.comparator,!1)}getReverseIterator(){return new ao(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ao(this.root,e,this.comparator,!0)}}class ao{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class lt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??lt.RED,this.left=s??lt.EMPTY,this.right=i??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new lt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return lt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new lt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class dt{constructor(e){this.comparator=e,this.data=new Vt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Yf(this.data.getIterator())}getIteratorFrom(e){return new Yf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof dt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new dt(this.comparator);return n.data=e,n}}class Yf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new dt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class gn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new CI("Invalid base64 string: "+i):i}}(e);return new gn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new gn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gn.EMPTY_BYTE_STRING=new gn("");const PI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vr(t){if(ze(!!t,39018),typeof t=="string"){let e=0;const n=PI.exec(t);if(ze(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ct(t.seconds),nanos:ct(t.nanos)}}function ct(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ps(t){return typeof t=="string"?gn.fromBase64String(t):gn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="server_timestamp",pm="__type__",gm="__previous_value__",mm="__local_write_time__";function Wc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[pm])===null||n===void 0?void 0:n.stringValue)===dm}function Kc(t){const e=t.mapValue.fields[gm];return Wc(e)?Kc(e):e}function Go(t){const e=Vr(t.mapValue.fields[mm].timestampValue);return new rt(e.seconds,e.nanos)}/**
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
 */const _m="__type__",OI="__max__",lo={mapValue:{}},ym="__vector__",Kl="value";function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wc(t)?4:NI(t)?9007199254740991:DI(t)?10:11:ge(28295,{value:t})}function mn(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Go(t).isEqual(Go(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Vr(s.timestampValue),l=Vr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ps(s.bytesValue).isEqual(ps(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ct(s.geoPointValue.latitude)===ct(i.geoPointValue.latitude)&&ct(s.geoPointValue.longitude)===ct(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ct(s.integerValue)===ct(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ct(s.doubleValue),l=ct(i.doubleValue);return a===l?qo(a)===qo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Xf(a)!==Xf(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!mn(a[c],l[c])))return!1;return!0}(t,e);default:return ge(52216,{left:t})}}function yi(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=ct(i.integerValue||i.doubleValue),c=ct(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Zf(t.timestampValue,e.timestampValue);case 4:return Zf(Go(t),Go(e));case 5:return Wl(t.stringValue,e.stringValue);case 6:return function(i,a){const l=ps(i),c=ps(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=we(l[u],c[u]);if(f!==0)return f}return we(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=we(ct(i.latitude),ct(a.latitude));return l!==0?l:we(ct(i.longitude),ct(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ed(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,u,f;const p=i.fields||{},g=a.fields||{},_=(l=p[Kl])===null||l===void 0?void 0:l.arrayValue,R=(c=g[Kl])===null||c===void 0?void 0:c.arrayValue,P=we(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((f=R==null?void 0:R.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:ed(_,R)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===lo.mapValue&&a===lo.mapValue)return 0;if(i===lo.mapValue)return 1;if(a===lo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=a.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=Wl(c[p],f[p]);if(g!==0)return g;const _=gs(l[c[p]],u[f[p]]);if(_!==0)return _}return we(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ge(23264,{Pe:n})}}function Zf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Vr(t),r=Vr(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function ed(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=gs(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function ms(t){return Ql(t)}function Ql(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ps(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return pe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ql(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Ql(n.fields[a])}`;return s+"}"}(t.mapValue):ge(61005,{value:t})}function Io(t){switch(Mr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kc(t);return e?16+Io(e):16;case 5:return 2*t.stringValue.length;case 6:return ps(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+Io(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return Ts(r.fields,(i,a)=>{s+=i.length+Io(a)}),s}(t.mapValue);default:throw ge(13486,{value:t})}}function Jl(t){return!!t&&"integerValue"in t}function Qc(t){return!!t&&"arrayValue"in t}function Ao(t){return!!t&&"mapValue"in t}function DI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[_m])===null||n===void 0?void 0:n.stringValue)===ym}function ti(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ti(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ti(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===OI}/**
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
 */class Jt{constructor(e){this.value=e}static empty(){return new Jt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ao(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ti(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=ti(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ao(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ao(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Ts(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Jt(ti(this.value))}}function vm(t){const e=[];return Ts(t.fields,(n,r)=>{const s=new ft([n]);if(Ao(r)){const i=vm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Yt(e)}/**
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
 */class Qt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Qt(e,0,$e.min(),$e.min(),$e.min(),Jt.empty(),0)}static newFoundDocument(e,n,r,s){return new Qt(e,1,n,$e.min(),r,s,0)}static newNoDocument(e,n){return new Qt(e,2,n,$e.min(),$e.min(),Jt.empty(),0)}static newUnknownDocument(e,n){return new Qt(e,3,n,$e.min(),$e.min(),Jt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual($e.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Jt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Jt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$e.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Em{}class nt extends Em{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LI(e,n,r):n==="array-contains"?new UI(e,r):n==="in"?new BI(e,r):n==="not-in"?new jI(e,r):n==="array-contains-any"?new HI(e,r):new nt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FI(e,r):new $I(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(gs(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ar extends Em{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new ar(e,n)}matches(e){return wm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function wm(t){return t.op==="and"}function bm(t){return MI(t)&&wm(t)}function MI(t){for(const e of t.filters)if(e instanceof ar)return!1;return!0}function Xl(t){if(t instanceof nt)return t.field.canonicalString()+t.op.toString()+ms(t.value);if(bm(t))return t.filters.map(e=>Xl(e)).join(",");{const e=t.filters.map(n=>Xl(n)).join(",");return`${t.op}(${e})`}}function Tm(t,e){return t instanceof nt?function(r,s){return s instanceof nt&&r.op===s.op&&r.field.isEqual(s.field)&&mn(r.value,s.value)}(t,e):t instanceof ar?function(r,s){return s instanceof ar&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Tm(a,s.filters[l]),!0):!1}(t,e):void ge(19439)}function Im(t){return t instanceof nt?function(n){return`${n.field.canonicalString()} ${n.op} ${ms(n.value)}`}(t):t instanceof ar?function(n){return n.op.toString()+" {"+n.getFilters().map(Im).join(" ,")+"}"}(t):"Filter"}class LI extends nt{constructor(e,n,r){super(e,n,r),this.key=pe.fromName(r.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class FI extends nt{constructor(e,n){super(e,"in",n),this.keys=Am("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $I extends nt{constructor(e,n){super(e,"not-in",n),this.keys=Am("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Am(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class UI extends nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qc(n)&&yi(n.arrayValue,this.value)}}class BI extends nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&yi(this.value.arrayValue,n)}}class jI extends nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(yi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!yi(this.value.arrayValue,n)}}class HI extends nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>yi(this.value.arrayValue,r))}}/**
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
 */class Sa{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function qI(t,e,n,r,s,i,a,l){return new Sa(t,e,n,r,s,i,a,l)}function GI(t){return new Sa(t)}function sd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WI(t){return t.collectionGroup!==null}function ni(t){const e=Me(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new dt(ft.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Jo(i,r))}),n.has(ft.keyField().canonicalString())||e.Ee.push(new Jo(ft.keyField(),r))}return e.Ee}function Rr(t){const e=Me(t);return e.de||(e.de=KI(e,ni(t))),e.de}function KI(t,e){if(t.limitType==="F")return rd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Jo(s.field,i)});const n=t.endAt?new Qo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Qo(t.startAt.position,t.startAt.inclusive):null;return rd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Yl(t,e,n){return new Sa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Sm(t,e){return Xc(Rr(t),Rr(e))&&t.limitType===e.limitType}function Rm(t){return`${Jc(Rr(t))}|lt:${t.limitType}`}function Us(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Im(s)).join(", ")}]`),Gc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ms(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ms(s)).join(",")),`Target(${r})`}(Rr(t))}; limitType=${t.limitType})`}function Yc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):pe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ni(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const u=td(a,l,c);return a.inclusive?u<=0:u<0}(r.startAt,ni(r),s)||r.endAt&&!function(a,l,c){const u=td(a,l,c);return a.inclusive?u>=0:u>0}(r.endAt,ni(r),s))}(t,e)}function QI(t){return(e,n)=>{let r=!1;for(const s of ni(t)){const i=JI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function JI(t,e,n){const r=t.field.isKeyField()?pe.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),u=l.data.field(i);return c!==null&&u!==null?gs(c,u):ge(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge(19790,{direction:t.dir})}}/**
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
 */class Ur{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ts(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fm(this.inner)}size(){return this.innerSize}}/**
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
 */const XI=new Vt(pe.comparator);function Xo(){return XI}const km=new Vt(pe.comparator);function co(...t){let e=km;for(const n of t)e=e.insert(n.key,n);return e}function Cm(t){let e=km;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Tr(){return ri()}function Pm(){return ri()}function ri(){return new Ur(t=>t.toString(),(t,e)=>t.isEqual(e))}const YI=new Vt(pe.comparator),ZI=new dt(pe.comparator);function bt(...t){let e=ZI;for(const n of t)e=e.add(n);return e}const eA=new dt(we);function tA(){return eA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ra{constructor(){this._=void 0}}function rA(t,e,n){return t instanceof vi?function(s,i){const a={fields:{[pm]:{stringValue:dm},[mm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wc(i)&&(i=Kc(i)),i&&(a.fields[gm]=i),{mapValue:a}}(n,e):t instanceof Ei?Dm(t,e):t instanceof wi?Nm(t,e):function(s,i){const a=Om(s,i),l=id(a)+id(s.Re);return Jl(a)&&Jl(s.Re)?xm(l):Zc(s.serializer,l)}(t,e)}function sA(t,e,n){return t instanceof Ei?Dm(t,e):t instanceof wi?Nm(t,e):n}function Om(t,e){return t instanceof Yo?function(r){return Jl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class vi extends Ra{}class Ei extends Ra{constructor(e){super(),this.elements=e}}function Dm(t,e){const n=Vm(e);for(const r of t.elements)n.some(s=>mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class wi extends Ra{constructor(e){super(),this.elements=e}}function Nm(t,e){let n=Vm(e);for(const r of t.elements)n=n.filter(s=>!mn(s,r));return{arrayValue:{values:n}}}class Yo extends Ra{constructor(e,n){super(),this.serializer=e,this.Re=n}}function id(t){return ct(t.integerValue||t.doubleValue)}function Vm(t){return Qc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class iA{constructor(e,n){this.field=e,this.transform=n}}function oA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ei&&s instanceof Ei||r instanceof wi&&s instanceof wi?ds(r.elements,s.elements,mn):r instanceof Yo&&s instanceof Yo?mn(r.Re,s.Re):r instanceof vi&&s instanceof vi}(t.transform,e.transform)}class aA{constructor(e,n){this.version=e,this.transformResults=n}}class Cn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Cn}static exists(e){return new Cn(void 0,e)}static updateTime(e){return new Cn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function So(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ka{}function Mm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fm(t.key,Cn.none()):new Ni(t.key,t.data,Cn.none());{const n=t.data,r=Jt.empty();let s=new dt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Br(t.key,r,new Yt(s.toArray()),Cn.none())}}function lA(t,e,n){t instanceof Ni?function(s,i,a){const l=s.value.clone(),c=ad(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Br?function(s,i,a){if(!So(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=ad(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Lm(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function si(t,e,n,r){return t instanceof Ni?function(i,a,l,c){if(!So(i.precondition,a))return l;const u=i.value.clone(),f=ld(i.fieldTransforms,c,a);return u.setAll(f),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Br?function(i,a,l,c){if(!So(i.precondition,a))return l;const u=ld(i.fieldTransforms,c,a),f=a.data;return f.setAll(Lm(i)),f.setAll(u),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return So(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function cA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Om(r.transform,s||null);i!=null&&(n===null&&(n=Jt.empty()),n.set(r.field,i))}return n||null}function od(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ds(r,s,(i,a)=>oA(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ni extends ka{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Br extends ka{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ad(t,e,n){const r=new Map;ze(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,sA(a,l,n[s]))}return r}function ld(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,rA(i,a,e))}return r}class Fm extends ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uA extends ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class hA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=si(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Pm();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Mm(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument($e.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),bt())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(n,r)=>od(n,r))&&ds(this.baseMutations,e.baseMutations,(n,r)=>od(n,r))}}class eu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ze(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return YI}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new eu(e,n,r,s)}}/**
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
 */new Bc([4294967295,4294967295],0);class gA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _A(t,e){return Zl(t,e.toTimestamp())}function ls(t){return ze(!!t,49232),$e.fromTimestamp(function(n){const r=Vr(n);return new rt(r.seconds,r.nanos)}(t))}function $m(t,e){return ec(t,e).canonicalString()}function ec(t,e){const n=function(s){return new Je(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function yA(t){const e=Je.fromString(t);return ze(SA(e),10190,{key:e.toString()}),e}function tc(t,e){return $m(t.databaseId,e.path)}function vA(t){const e=yA(t);return e.length===4?Je.emptyPath():wA(e)}function EA(t){return new Je(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wA(t){return ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function cd(t,e,n){return{name:tc(t,e),fields:n.value.mapValue.fields}}function bA(t,e){let n;if(e instanceof Ni)n={update:cd(t,e.key,e.value)};else if(e instanceof Fm)n={delete:tc(t,e.key)};else if(e instanceof Br)n={update:cd(t,e.key,e.data),updateMask:AA(e.fieldMask)};else{if(!(e instanceof uA))return ge(16599,{ft:e.type});n={verify:tc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof vi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ei)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof wi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Yo)return{fieldPath:a.field.canonicalString(),increment:l.Re};throw ge(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_A(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge(27497)}(t,e.precondition)),n}function TA(t,e){return t&&t.length>0?(ze(e!==void 0,14353),t.map(n=>function(s,i){let a=s.updateTime?ls(s.updateTime):ls(i);return a.isEqual($e.min())&&(a=ls(i)),new aA(a,s.transformResults||[])}(n,e))):[]}function IA(t){let e=vA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ze(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=Um(p);return g instanceof ar&&bm(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(R){return new Jo(Yr(R.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Gc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new Qo(_,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,_=p.values||[];return new Qo(_,g)}(n.endAt)),qI(e,s,a,i,l,"F",c,u)}function Um(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Yr(n.unaryFilter.field);return nt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Yr(n.unaryFilter.field);return nt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Yr(n.unaryFilter.field);return nt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Yr(n.unaryFilter.field);return nt.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}}(t):t.fieldFilter!==void 0?function(n){return nt.create(Yr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ar.create(n.compositeFilter.filters.map(r=>Um(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge(1026)}}(n.compositeFilter.op))}(t):ge(30097,{filter:t})}function Yr(t){return ft.fromServerFormat(t.fieldPath)}function AA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function SA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class CA{constructor(){this.Cn=new PA}addToCollectionParentIndex(e,n){return this.Cn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(or.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class PA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(Je.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(Je.comparator)).toArray()}}/**
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
 */const ud={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Bm=41943040;class Dt{static withCacheSize(e){return new Dt(e,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Dt.DEFAULT_COLLECTION_PERCENTILE=10,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dt.DEFAULT=new Dt(Bm,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dt.DISABLED=new Dt(-1,0,0);/**
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
 */const hd="LruGarbageCollector",xA=1048576;function fd([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class OA{constructor(e){this.Er=e,this.buffer=new dt(fd),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();fd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){Z(hd,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Di(n)?Z(hd,"Ignoring IndexedDB error during garbage collection: ",n):await Hc(n)}await this.mr(3e5)})}}class NA{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return F.resolve(zc.le);const r=new OA(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(ud)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ud):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,a,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Xr()<=_e.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${p} documents in `+(u-c)+`ms
Total Duration: ${u-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p})))}}function VA(t,e){return new NA(t,e)}/**
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
 */class MA{constructor(){this.changes=new Ur(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class FA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&si(r.mutation,s,Yt.empty(),rt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,bt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=bt()){const s=Tr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=co();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,bt()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=Xo();const a=ri(),l=function(){return ri()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Br)?i=i.insert(u.key,u):f!==void 0?(a.set(u.key,f.mutation.getFieldMask()),si(f.mutation,u,f.mutation.getFieldMask(),rt.now())):a.set(u.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>a.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new LA(f,(p=a.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ri();let s=new Vt((a,l)=>a-l),i=bt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Yt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||bt()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=Pm();f.forEach(g=>{if(!i.has(g)){const _=Mm(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,u,p))}return F.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return pe.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Tr());let l=_i,c=i;return a.next(u=>F.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,bt())).next(f=>({batchId:l,changes:Cm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new pe(n)).next(r=>{let s=co();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=co();return this.indexManager.getCollectionParents(e,i).next(l=>F.forEach(l,c=>{const u=function(p,g){return new Sa(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,u)=>{const f=u.getKey();a.get(f)===null&&(a=a.insert(f,Qt.newInvalidDocument(f)))});let l=co();return a.forEach((c,u)=>{const f=i.get(c);f!==void 0&&si(f.mutation,u,Yt.empty(),rt.now()),Yc(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return F.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ls(s.createTime)}}(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:kA(s.bundledQuery),readTime:ls(s.readTime)}}(n)),F.resolve()}}/**
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
 */class UA{constructor(){this.overlays=new Vt(pe.comparator),this.Qr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Tr();return F.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.bt(e,n,i)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Qr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Tr(),i=n.length+1,a=new pe(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,u=c.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Vt((u,f)=>u-f);const a=this.overlays.getIterator();for(;a.hasNext();){const u=a.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Tr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const l=Tr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,f)=>l.set(u,f)),!(l.size()>=s)););return F.resolve(l)}bt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.Qr.get(s.largestBatchId).delete(r.key);this.Qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new fA(n,r));let i=this.Qr.get(n);i===void 0&&(i=bt(),this.Qr.set(n,i)),this.Qr.set(n,i.add(r.key))}}/**
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
 */class BA{constructor(){this.sessionToken=gn.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class tu{constructor(){this.$r=new dt(et.Ur),this.Kr=new dt(et.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new et(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new et(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new pe(new Je([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new pe(new Je([])),r=new et(n,e),s=new et(n,e+1);let i=bt();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new et(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return pe.comparator(e.key,n.key)||we(e.Zr,n.Zr)}static Wr(e,n){return we(e.Zr,n.Zr)||pe.comparator(e.key,n.key)}}/**
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
 */class jA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new dt(et.Ur)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new hA(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Xr=this.Xr.add(new et(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return F.resolve(a)}lookupMutationBatch(e,n){return F.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?qc:this.nr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],a=>{const l=this.ei(a.Zr);i.push(l)}),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(we);return n.forEach(s=>{const i=new et(s,0),a=new et(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],l=>{r=r.add(l.Zr)})}),F.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;pe.isDocumentKey(i)||(i=i.child(""));const a=new et(new pe(i),0);let l=new dt(we);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},a),F.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ze(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return F.forEach(n.mutations,s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new et(n,0),s=this.Xr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class HA{constructor(e){this.ii=e,this.docs=function(){return new Vt(pe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,a=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():Qt.newInvalidDocument(n))}getEntries(e,n){let r=Xo();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Qt.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Xo();const a=n.path,l=new pe(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:u,value:{document:f}}=c.getNext();if(!a.isPrefixOf(u.path))break;u.path.length>a.length+1||bI(wI(f),r)<=0||(s.has(f.key)||Yc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ge(9500)}si(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zA(this)}getSize(e){return F.resolve(this.size)}}class zA extends MA{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.Br.addEntry(e,s)):this.Br.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
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
 */class qA{constructor(e){this.persistence=e,this.oi=new Ur(n=>Jc(n),Xc),this.lastRemoteSnapshotVersion=$e.min(),this.highestTargetId=0,this._i=0,this.ai=new tu,this.targetCount=0,this.ui=_s.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),F.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new _s(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.Tr(n),F.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),F.waitFor(i).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.ai.containsKey(n))}}/**
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
 */class jm{constructor(e,n){this.ci={},this.overlays={},this.li=new zc(0),this.hi=!1,this.hi=!0,this.Pi=new BA,this.referenceDelegate=e(this),this.Ti=new qA(this),this.indexManager=new CA,this.remoteDocumentCache=function(s){return new HA(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new RA(n),this.Ei=new $A(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new UA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new jA(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new GA(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return F.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class GA extends II{constructor(e){super(),this.currentSequenceNumber=e}}class nu{constructor(e){this.persistence=e,this.Vi=new tu,this.mi=null}static fi(e){return new nu(e)}get gi(){if(this.mi)return this.mi;throw ge(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.gi,r=>{const s=pe.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,$e.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return F.or([()=>F.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Zo{constructor(e,n){this.persistence=e,this.yi=new Ur(r=>RI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=VA(this,n)}static fi(e,n){return new Zo(e,n)}di(){}Ai(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return F.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?F.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,a=>this.Dr(e,a,n).next(l=>{l||(r++,i.removeEntry(a,$e.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),F.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Io(e.data.value)),n}Dr(e,n,r){return F.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ru{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ds=r,this.As=s}static Rs(e,n){let r=bt(),s=bt();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ru(e,n.fromCache,r,s)}}/**
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
 */class KA{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Gw()?8:AI(It())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Ss(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new WA;return this.bs(e,n,a).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,a,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(Xr()<=_e.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Us(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),F.resolve()):(Xr()<=_e.DEBUG&&Z("QueryEngine","Query:",Us(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Xr()<=_e.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Us(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Rr(n))):F.resolve())}ws(e,n){if(sd(n))return F.resolve(null);let r=Rr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Yl(n,null,"F"),r=Rr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=bt(...i);return this.ys.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(n,l);return this.Cs(n,u,a,c.readTime)?this.ws(e,Yl(n,null,"F")):this.Fs(e,u,n,c)}))})))}Ss(e,n,r,s){return sd(n)||s.isEqual($e.min())?F.resolve(null):this.ys.getDocuments(e,r).next(i=>{const a=this.vs(n,i);return this.Cs(n,a,r,s)?F.resolve(null):(Xr()<=_e.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Us(n)),this.Fs(e,a,n,EI(s,_i)).next(l=>l))})}vs(e,n){let r=new dt(QI(e));return n.forEach((s,i)=>{Yc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,n,r){return Xr()<=_e.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Us(n)),this.ys.getDocumentsMatchingQuery(e,n,or.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="LocalStore";class JA{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Vt(we),this.Os=new Ur(i=>Jc(i),Xc),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FA(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function XA(t,e,n,r){return new JA(t,e,n,r)}async function Hm(t,e){const n=Me(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=bt();for(const u of s){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:a,addedBatchIds:l}))})})}function YA(t,e){const n=Me(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,g=p.keys();let _=F.resolve();return g.forEach(R=>{_=_.next(()=>f.getEntry(c,R)).next(P=>{const O=u.docVersions.get(R);ze(O!==null,48541),P.version.compareTo(O)<0&&(p.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),f.addEntry(P)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=bt();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ZA(t){const e=Me(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function e1(t,e){const n=Me(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=qc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class dd{constructor(){this.activeTargetIds=tA()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class t1{constructor(){this.xo=new dd,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new dd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */const yl="RestConnection",r1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class s1{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Wo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const a=nc(),l=this.jo(e,n.toUriEncodedString());Z(yl,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),f=Ri(u);return this.Jo(e,l,c,r,f).then(p=>(Z(yl,`Received RPC '${e}' ${a}: `,p),p),p=>{throw Aa(yl,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,n,r,s,i,a){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bs}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=r1[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
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
 */const vt="WebChannelConnection";class o1 extends s1{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=nc();return new Promise((l,c)=>{const u=new rm;u.setWithCredentials(!0),u.listenOnce(sm.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case To.NO_ERROR:const p=u.getResponseJson();Z(vt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case To.TIMEOUT:Z(vt,`RPC '${e}' ${a} timed out`),c(new he(B.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const g=u.getStatus();if(Z(vt,`RPC '${e}' ${a} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_==null?void 0:_.error;if(R&&R.status&&R.message){const P=function(H){const $=H.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf($)>=0?$:B.UNKNOWN}(R.status);c(new he(P,R.message))}else c(new he(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new he(B.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:a,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Z(vt,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);Z(vt,`RPC '${e}' ${a} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=nc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=am(),l=om(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(vt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);let g=!1,_=!1;const R=new i1({Zo:O=>{_?Z(vt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(Z(vt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Z(vt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Xo:()=>p.close()}),P=(O,H,$)=>{O.listen(H,j=>{try{$(j)}catch(z){setTimeout(()=>{throw z},0)}})};return P(p,zs.EventType.OPEN,()=>{_||(Z(vt,`RPC '${e}' stream ${s} transport opened.`),R.__())}),P(p,zs.EventType.CLOSE,()=>{_||(_=!0,Z(vt,`RPC '${e}' stream ${s} transport closed`),R.u_())}),P(p,zs.EventType.ERROR,O=>{_||(_=!0,Aa(vt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),R.u_(new he(B.UNAVAILABLE,"The operation could not be completed")))}),P(p,zs.EventType.MESSAGE,O=>{var H;if(!_){const $=O.data[0];ze(!!$,16349);const j=$,z=(j==null?void 0:j.error)||((H=j[0])===null||H===void 0?void 0:H.error);if(z){Z(vt,`RPC '${e}' stream ${s} received error:`,z);const le=z.status;let ie=function(y){const I=Ke[y];if(I!==void 0)return pA(I)}(le),A=z.message;ie===void 0&&(ie=B.INTERNAL,A="Unknown error status: "+le+" with message "+z.message),_=!0,R.u_(new he(ie,A)),p.close()}else Z(vt,`RPC '${e}' stream ${s} received:`,$),R.c_($)}}),P(l,im.STAT_EVENT,O=>{O.stat===Gl.PROXY?Z(vt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Gl.NOPROXY&&Z(vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{R.a_()},0),R}}function vl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const md="PersistentStream";class a1{constructor(e,n,r,s,i,a,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new zm(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Nr(n.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===n&&this.K_(r,s)},r=>{e(()=>{const s=new he(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return Z(md,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(Z(md,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class l1 extends a1{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=TA(e.writeResults,e.commitTime),r=ls(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=EA(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bA(this.serializer,r))};this.L_(n)}}/**
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
 */class c1{}class u1 extends c1{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new he(B.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(e,ec(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new he(B.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(e,ec(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new he(B.UNKNOWN,a.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class h1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class su{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Sr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new su(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new he(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qm(t,e){if(Nr("AsyncQueue",`${e}: ${t}`),Di(t))return new he(B.UNAVAILABLE,`${e}: ${t}`);throw t}class E1{constructor(){this.queries=yd(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const s=Me(n),i=s.queries;s.queries=yd(),i.forEach((a,l)=>{for(const c of l.ya)c.onError(r)})})(this,new he(B.ABORTED,"Firestore shutting down"))}}function yd(){return new Ur(t=>Rm(t),Sm)}function w1(t){t.ba.forEach(e=>{e.next()})}var vd,Ed;(Ed=vd||(vd={})).Ca="default",Ed.Cache="cache";const b1="SyncEngine";class T1{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.au={},this.uu=new Ur(l=>Rm(l),Sm),this.cu=new Map,this.lu=new Set,this.hu=new Vt(pe.comparator),this.Pu=new Map,this.Tu=new tu,this.Iu={},this.Eu=new Map,this.du=_s.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function I1(t,e,n){const r=k1(t);try{const s=await function(a,l){const c=Me(a),u=rt.now(),f=l.reduce((_,R)=>_.add(R.key),bt());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let R=Xo(),P=bt();return c.Bs.getEntries(_,f).next(O=>{R=O,R.forEach((H,$)=>{$.isValidDocument()||(P=P.add(H))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,R)).next(O=>{p=O;const H=[];for(const $ of l){const j=cA($,p.get($.key).overlayedDocument);j!=null&&H.push(new Br($.key,j,vm(j.value.mapValue),Cn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,H,l)}).next(O=>{g=O;const H=O.applyToLocalDocumentSet(p,P);return c.documentOverlayCache.saveOverlays(_,O.batchId,H)})}).then(()=>({batchId:g.batchId,changes:Cm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let u=a.Iu[a.currentUser.toKey()];u||(u=new Vt(we)),u=u.insert(l,c),a.Iu[a.currentUser.toKey()]=u}(r,s.batchId,n),await Oa(r,s.changes),await xa(r.remoteStore)}catch(s){const i=Qm(s,"Failed to persist write");n.reject(i)}}function wd(t,e,n){const r=Me(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.uu.forEach((i,a)=>{const l=a.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=Me(a);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const g of p.ya)g.Da(l)&&(u=!0)}),u&&w1(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function A1(t,e){const n=Me(t),r=e.batch.batchId;try{const s=await YA(n.localStore,e);Xm(n,r,null),Jm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Oa(n,s)}catch(s){await Hc(s)}}async function S1(t,e,n){const r=Me(t);try{const s=await function(a,l){const c=Me(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(ze(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);Xm(r,e,n),Jm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Oa(r,s)}catch(s){await Hc(s)}}function Jm(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function Xm(t,e,n){const r=Me(t);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}async function Oa(t,e,n){const r=Me(t),s=[],i=[],a=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{a.push(r.Ru(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=void 0)===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=ru.Rs(c.targetId,u);i.push(p)}}))}),await Promise.all(a),r.au.j_(s),await async function(c,u){const f=Me(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>F.forEach(u,g=>F.forEach(g.ds,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>F.forEach(g.As,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!Di(p))throw p;Z(QA,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const _=f.xs.get(g),R=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(R);f.xs=f.xs.insert(g,P)}}}(r.localStore,i))}async function R1(t,e){const n=Me(t);if(!n.currentUser.isEqual(e)){Z(b1,"User change. New user:",e.toKey());const r=await Hm(n.localStore,e);n.currentUser=e,function(i,a){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new he(B.CANCELLED,a))})}),i.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Oa(n,r.ks)}}function k1(t){const e=Me(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=A1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=S1.bind(null,e),e}class ea{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ca(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return XA(this.persistence,new KA,e.initialUser,this.serializer)}yu(e){return new jm(nu.fi,this.serializer)}pu(e){return new t1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ea.provider={build:()=>new ea};class C1 extends ea{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){ze(this.persistence.referenceDelegate instanceof Zo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DA(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new jm(r=>Zo.fi(r,n),this.serializer)}}class rc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=R1.bind(null,this.syncEngine),await v1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new E1}()}createDatastore(e){const n=Ca(e.databaseInfo.databaseId),r=function(i){return new o1(i)}(e.databaseInfo);return function(i,a,l,c){return new u1(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new f1(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>wd(this.syncEngine,n,0),function(){return gd.C()?new gd:new n1}())}createSyncEngine(e,n){return function(s,i,a,l,c,u,f){const p=new T1(s,i,a,l,c,u);return f&&(p.Au=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Me(s);Z(Vi,"RemoteStore shutting down."),i.Ta.add(5),await Mi(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}rc.provider={build:()=>new rc};/**
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
 */const cr="FirestoreClient";class P1{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Et.UNAUTHENTICATED,this.clientId=um.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Z(cr,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Z(cr,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Sr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function El(t,e){t.asyncQueue.verifyOperationInProgress(),Z(cr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Hm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await x1(t);Z(cr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_d(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>_d(e.remoteStore,s)),t._onlineComponents=e}async function x1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(cr,"Using user provided OfflineComponentProvider");try{await El(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Aa("Error using user provided cache. Falling back to memory cache: "+n),await El(t,new ea)}}else Z(cr,"Using default OfflineComponentProvider"),await El(t,new C1(void 0));return t._offlineComponents}async function O1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(cr,"Using user provided OnlineComponentProvider"),await bd(t,t._uninitializedComponentsProvider._online)):(Z(cr,"Using default OnlineComponentProvider"),await bd(t,new rc))),t._onlineComponents}function D1(t){return O1(t).then(e=>e.syncEngine)}/**
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
 */function N1(t,e,n){if(!n)throw new he(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function V1(t,e,n,r){if(e===!0&&r===!0)throw new he(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Id(t){if(!pe.isDocumentKey(t))throw new he(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function iu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge(12329,{type:typeof t})}function sc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new he(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=iu(t);throw new he(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="firestore.googleapis.com",Ad=!0;class Sd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new he(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zm,this.ssl=Ad}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Ad;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Bm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xA)throw new he(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}V1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ym((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new he(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new he(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new he(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ou{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new he(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new he(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uI;switch(r.type){case"firstParty":return new pI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new he(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Td.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Td.delete(n),r.terminate())}(this),Promise.resolve()}}function M1(t,e,n,r={}){var s;t=sc(t,ou);const i=Ri(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(yg(`https://${c}`),vg("Firestore",!0)),a.host!==Zm&&a.host!==c&&Aa("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!Pr(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=Et.MOCK_USER;else{f=Lw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new he(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Et(g)}t._authCredentials=new hI(new cm(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new au(this.firestore,e,this._query)}}class Pn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new bi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pn(this.firestore,e,this._key)}}class bi extends au{constructor(e,n,r){super(e,n,GI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pn(this.firestore,null,new pe(e))}withConverter(e){return new bi(this.firestore,e,this._path)}}function L1(t,e,...n){if(t=pn(t),arguments.length===1&&(e=um.newId()),N1("doc","path",e),t instanceof ou){const r=Je.fromString(e,...n);return Id(r),new Pn(t,null,new pe(r))}{if(!(t instanceof Pn||t instanceof bi))throw new he(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Je.fromString(e,...n));return Id(r),new Pn(t.firestore,t instanceof bi?t.converter:null,new pe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
`+t.stack),e}class e_ extends ou{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new kd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new kd(e),this._firestoreClient=void 0,await e}}}function F1(t,e){const n=typeof t=="object"?t:Tg(),r=typeof t=="string"?t:Wo,s=Pc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Vw("firestore");i&&M1(s,...i)}return s}function $1(t){if(t._terminated)throw new he(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||U1(t),t._firestoreClient}function U1(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,f){return new xI(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ym(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new P1(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ti(gn.fromBase64String(e))}catch(n){throw new he(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ti(gn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new he(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class n_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new he(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new he(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */const B1=/^__.*__$/;class j1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ni(e,this.data,n,this.fieldTransforms)}}function s_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{hc:t})}}class cu{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new cu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return ta(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(s_(this.hc)&&B1.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class H1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ca(e)}gc(e,n,r,s=!1){return new cu({hc:e,methodName:n,fc:r,path:ft.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function z1(t){const e=t._freezeSettings(),n=Ca(t._databaseId);return new H1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function q1(t,e,n,r,s,i={}){const a=t.gc(i.merge||i.mergeFields?2:0,e,n,s);l_("Data must be an object, but it was:",a,r);const l=o_(r,a);let c,u;if(i.merge)c=new Yt(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=G1(e,p,n);if(!a.contains(g))throw new he(B.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Q1(f,g)||f.push(g)}c=new Yt(f),u=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=a.fieldTransforms;return new j1(new Jt(l),c,u)}class uu extends lu{_toFieldTransform(e){return new iA(e.path,new vi)}isEqual(e){return e instanceof uu}}function i_(t,e){if(a_(t=pn(t)))return l_("Unsupported field value:",e,t),o_(t,e);if(t instanceof lu)return function(r,s){if(!s_(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=i_(l,s.Rc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=pn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=rt.fromDate(r);return{timestampValue:Zl(s.serializer,i)}}if(r instanceof rt){const i=new rt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Zl(s.serializer,i)}}if(r instanceof n_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ti)return{bytesValue:mA(s.serializer,r._byteString)};if(r instanceof Pn){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Vc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:$m(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof r_)return function(a,l){return{mapValue:{fields:{[_m]:{stringValue:ym},[Kl]:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Vc("VectorValues must only contain numeric values.");return Zc(l.serializer,u)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${iu(r)}`)}(t,e)}function o_(t,e){const n={};return fm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ts(t,(r,s)=>{const i=i_(s,e.Ic(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function a_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof rt||t instanceof n_||t instanceof Ti||t instanceof Pn||t instanceof lu||t instanceof r_)}function l_(t,e,n){if(!a_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=iu(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function G1(t,e,n){if((e=pn(e))instanceof t_)return e._internalPath;if(typeof e=="string")return K1(t,e);throw ta("Field path arguments must be of type string or ",t,!1,void 0,n)}const W1=new RegExp("[~\\*/\\[\\]]");function K1(t,e,n){if(e.search(W1)>=0)throw ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new t_(...e.split("."))._internalPath}catch{throw ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ta(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new he(B.INVALID_ARGUMENT,l+t+c)}function Q1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function X1(t,e,n){t=sc(t,Pn);const r=sc(t.firestore,e_),s=J1(t.converter,e);return Y1(r,[q1(z1(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Cn.none())])}function Y1(t,e){return function(r,s){const i=new Sr;return r.asyncQueue.enqueueAndForget(async()=>I1(await D1(r),s,i)),i.promise}($1(t),e)}function Z1(){return new uu("serverTimestamp")}(function(e,n=!0){(function(s){bs=s})(Es),hs(new xr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new e_(new fI(r.getProvider("auth-internal")),new gI(a,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new he(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ko(u.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),rr(Hf,zf,e),rr(Hf,zf,"esm2017")})();const eS={apiKey:"AIzaSyC_acZxWWtGDDFPdxBaa2TR6JkQcw0k0Fk",authDomain:"afp-site-c1bd9.firebaseapp.com",projectId:"afp-site-c1bd9",storageBucket:"afp-site-c1bd9.firebasestorage.app",messagingSenderId:"533749269819",appId:"1:533749269819:web:47c5dbe921ef3aae83e31e",measurementId:"G-W9TQ1EE3PB"},tS=bg(eS),nS=F1(tS);lI();const rS={class:"footer"},sS={class:"footer-bottom"},iS={class:"footer-nav"},oS={class:"subscribe-box"},aS={key:0,class:"subscribe-message"},lS={class:"footer-copy"},cS={__name:"Footer",setup(t){const e=Qe(""),n=Qe(""),r=async()=>{try{const s=e.value.trim().toLowerCase();if(!s){n.value="Please enter a valid email.";return}await X1(L1(nS,"mailingList",s),{email:s,subscribedAt:Z1()}),n.value="Thank you for subscribing!",e.value=""}catch(s){s.code==="permission-denied"?n.value="You’re already subscribed.":(console.error("Unexpected error adding email:",s),n.value="An error occurred. Please try again later.")}};return(s,i)=>(ne(),ce("footer",rS,[M("div",sS,[M("nav",iS,[re(Ie(Ze),{to:"/"},{default:Ge(()=>i[1]||(i[1]=[We("Home")])),_:1,__:[1]}),re(Ie(Ze),{to:"/about"},{default:Ge(()=>i[2]||(i[2]=[We("About")])),_:1,__:[2]}),re(Ie(Ze),{to:"/events"},{default:Ge(()=>i[3]||(i[3]=[We("Events")])),_:1,__:[3]}),re(Ie(Ze),{to:"/contact"},{default:Ge(()=>i[4]||(i[4]=[We("Contact")])),_:1,__:[4]})]),M("div",oS,[i[6]||(i[6]=M("h3",null,"Join our mailing list",-1)),M("form",{onSubmit:Zp(r,["prevent"])},[Oo(M("input",{"onUpdate:modelValue":i[0]||(i[0]=a=>e.value=a),type:"email",placeholder:"Enter your email",required:"",class:"email-input"},null,512),[[Nl,e.value]]),i[5]||(i[5]=M("button",{type:"submit",class:"subscribe-button"},"Subscribe",-1))],32),n.value?(ne(),ce("p",aS,Se(n.value),1)):$t("",!0)]),M("p",lS," © "+Se(new Date().getFullYear())+" Association of Family Psychiatrists. All rights reserved. ",1)])]))}},uS=pt(cS,[["__scopeId","data-v-32f87464"]]),hS={class:"layout"},fS={class:"page-content"},dS={__name:"App",setup(t){return(e,n)=>(ne(),ce(tt,null,[M("div",hS,[re(Sw),M("main",fS,[re(Ie(Rc))])]),re(uS)],64))}},pS=pt(dS,[["__scopeId","data-v-aa0b9fe9"]]),gS="modulepreload",mS=function(t){return"/site/"+t},Pd={},Ye=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(n.map(u=>{if(u=mS(u),u in Pd)return;Pd[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":gS,f||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),f)return new Promise((_,R)=>{g.addEventListener("load",_),g.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},_S="/site/assets/afp-logo-DTm74N-G.png",yS={class:"featured-event"},vS=["src"],ES={class:"event-details animate-right"},wS={class:"event-title"},bS={class:"event-meta"},TS={class:"event-description"},IS={__name:"FeaturedEvent",props:{title:String,date:String,location:String,description:String,image:String,link:String,linkLabel:{type:String,default:"Access"}},setup(t){return(e,n)=>(ne(),ce("section",yS,[M("img",{src:t.image,alt:"Event image",class:"event-image animate-left"},null,8,vS),M("div",ES,[M("h2",wS,Se(t.title),1),M("p",bS,Se(t.date)+" • "+Se(t.location),1),M("p",TS,Se(t.description),1),re(Ie(Ze),{to:t.link,class:"cta-button"},{default:Ge(()=>[We(Se(t.linkLabel),1)]),_:1},8,["to"])])]))}},AS=pt(IS,[["__scopeId","data-v-b8aee26c"]]);function hu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var jr=hu();function c_(t){jr=t}var ii={exec:()=>null};function Pe(t,e=""){let n=typeof t=="string"?t:t.source;const r={replace:(s,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(Pt.caret,"$1"),n=n.replace(s,a),r},getRegex:()=>new RegExp(n,e)};return r}var Pt={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},SS=/^(?:[ \t]*(?:\n|$))+/,RS=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,kS=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Fi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,CS=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,fu=/(?:[*+-]|\d{1,9}[.)])/,u_=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,h_=Pe(u_).replace(/bull/g,fu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),PS=Pe(u_).replace(/bull/g,fu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),du=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,xS=/^[^\n]+/,pu=/(?!\s*\])(?:\\.|[^\[\]\\])+/,OS=Pe(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",pu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),DS=Pe(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,fu).getRegex(),Da="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",gu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,NS=Pe("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",gu).replace("tag",Da).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),f_=Pe(du).replace("hr",Fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Da).getRegex(),VS=Pe(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",f_).getRegex(),mu={blockquote:VS,code:RS,def:OS,fences:kS,heading:CS,hr:Fi,html:NS,lheading:h_,list:DS,newline:SS,paragraph:f_,table:ii,text:xS},xd=Pe("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Da).getRegex(),MS={...mu,lheading:PS,table:xd,paragraph:Pe(du).replace("hr",Fi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",xd).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Da).getRegex()},LS={...mu,html:Pe(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",gu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ii,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Pe(du).replace("hr",Fi).replace("heading",` *#{1,6} *[^
]`).replace("lheading",h_).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},FS=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,$S=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,d_=/^( {2,}|\\)\n(?!\s*$)/,US=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Na=/[\p{P}\p{S}]/u,_u=/[\s\p{P}\p{S}]/u,p_=/[^\s\p{P}\p{S}]/u,BS=Pe(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,_u).getRegex(),g_=/(?!~)[\p{P}\p{S}]/u,jS=/(?!~)[\s\p{P}\p{S}]/u,HS=/(?:[^\s\p{P}\p{S}]|~)/u,zS=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,m_=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,qS=Pe(m_,"u").replace(/punct/g,Na).getRegex(),GS=Pe(m_,"u").replace(/punct/g,g_).getRegex(),__="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",WS=Pe(__,"gu").replace(/notPunctSpace/g,p_).replace(/punctSpace/g,_u).replace(/punct/g,Na).getRegex(),KS=Pe(__,"gu").replace(/notPunctSpace/g,HS).replace(/punctSpace/g,jS).replace(/punct/g,g_).getRegex(),QS=Pe("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,p_).replace(/punctSpace/g,_u).replace(/punct/g,Na).getRegex(),JS=Pe(/\\(punct)/,"gu").replace(/punct/g,Na).getRegex(),XS=Pe(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),YS=Pe(gu).replace("(?:-->|$)","-->").getRegex(),ZS=Pe("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",YS).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),na=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,eR=Pe(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",na).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),y_=Pe(/^!?\[(label)\]\[(ref)\]/).replace("label",na).replace("ref",pu).getRegex(),v_=Pe(/^!?\[(ref)\](?:\[\])?/).replace("ref",pu).getRegex(),tR=Pe("reflink|nolink(?!\\()","g").replace("reflink",y_).replace("nolink",v_).getRegex(),yu={_backpedal:ii,anyPunctuation:JS,autolink:XS,blockSkip:zS,br:d_,code:$S,del:ii,emStrongLDelim:qS,emStrongRDelimAst:WS,emStrongRDelimUnd:QS,escape:FS,link:eR,nolink:v_,punctuation:BS,reflink:y_,reflinkSearch:tR,tag:ZS,text:US,url:ii},nR={...yu,link:Pe(/^!?\[(label)\]\((.*?)\)/).replace("label",na).getRegex(),reflink:Pe(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",na).getRegex()},ic={...yu,emStrongRDelimAst:KS,emStrongLDelim:GS,url:Pe(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},rR={...ic,br:Pe(d_).replace("{2,}","*").getRegex(),text:Pe(ic.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ho={normal:mu,gfm:MS,pedantic:LS},Bs={normal:yu,gfm:ic,breaks:rR,pedantic:nR},sR={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Od=t=>sR[t];function on(t,e){if(e){if(Pt.escapeTest.test(t))return t.replace(Pt.escapeReplace,Od)}else if(Pt.escapeTestNoEncode.test(t))return t.replace(Pt.escapeReplaceNoEncode,Od);return t}function Dd(t){try{t=encodeURI(t).replace(Pt.percentDecode,"%")}catch{return null}return t}function Nd(t,e){var i;const n=t.replace(Pt.findPipe,(a,l,c)=>{let u=!1,f=l;for(;--f>=0&&c[f]==="\\";)u=!u;return u?"|":" |"}),r=n.split(Pt.splitPipe);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!((i=r.at(-1))!=null&&i.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(Pt.slashPipe,"|");return r}function js(t,e,n){const r=t.length;if(r===0)return"";let s=0;for(;s<r&&t.charAt(r-s-1)===e;)s++;return t.slice(0,r-s)}function iR(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function Vd(t,e,n,r,s){const i=e.href,a=e.title||null,l=t[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;const c={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:a,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,c}function oR(t,e,n){const r=t.match(n.other.indentCodeCompensation);if(r===null)return e;const s=r[1];return e.split(`
`).map(i=>{const a=i.match(n.other.beginningSpace);if(a===null)return i;const[l]=a;return l.length>=s.length?i.slice(s.length):i}).join(`
`)}var ra=class{constructor(t){De(this,"options");De(this,"rules");De(this,"lexer");this.options=t||jr}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:js(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],r=oR(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){const r=js(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:js(e[0],`
`)}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){let n=js(e[0],`
`).split(`
`),r="",s="";const i=[];for(;n.length>0;){let a=!1;const l=[];let c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))l.push(n[c]),a=!0;else if(!a)l.push(n[c]);else break;n=n.slice(c);const u=l.join(`
`),f=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,s=s?`${s}
${f}`:f;const p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,i,!0),this.lexer.state.top=p,n.length===0)break;const g=i.at(-1);if((g==null?void 0:g.type)==="code")break;if((g==null?void 0:g.type)==="blockquote"){const _=g,R=_.raw+`
`+n.join(`
`),P=this.blockquote(R);i[i.length-1]=P,r=r.substring(0,r.length-_.raw.length)+P.raw,s=s.substring(0,s.length-_.text.length)+P.text;break}else if((g==null?void 0:g.type)==="list"){const _=g,R=_.raw+`
`+n.join(`
`),P=this.list(R);i[i.length-1]=P,r=r.substring(0,r.length-g.raw.length)+P.raw,s=s.substring(0,s.length-_.raw.length)+P.raw,n=R.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:s}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let a=!1;for(;t;){let c=!1,u="",f="";if(!(e=i.exec(t))||this.rules.block.hr.test(t))break;u=e[0],t=t.substring(u.length);let p=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,H=>" ".repeat(3*H.length)),g=t.split(`
`,1)[0],_=!p.trim(),R=0;if(this.options.pedantic?(R=2,f=p.trimStart()):_?R=e[1].length+1:(R=e[2].search(this.rules.other.nonSpaceChar),R=R>4?1:R,f=p.slice(R),R+=e[1].length),_&&this.rules.other.blankLine.test(g)&&(u+=g+`
`,t=t.substring(g.length+1),c=!0),!c){const H=this.rules.other.nextBulletRegex(R),$=this.rules.other.hrRegex(R),j=this.rules.other.fencesBeginRegex(R),z=this.rules.other.headingBeginRegex(R),le=this.rules.other.htmlBeginRegex(R);for(;t;){const ie=t.split(`
`,1)[0];let A;if(g=ie,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),A=g):A=g.replace(this.rules.other.tabCharGlobal,"    "),j.test(g)||z.test(g)||le.test(g)||H.test(g)||$.test(g))break;if(A.search(this.rules.other.nonSpaceChar)>=R||!g.trim())f+=`
`+A.slice(R);else{if(_||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||j.test(p)||z.test(p)||$.test(p))break;f+=`
`+g}!_&&!g.trim()&&(_=!0),u+=ie+`
`,t=t.substring(ie.length+1),p=A.slice(R)}}s.loose||(a?s.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0));let P=null,O;this.options.gfm&&(P=this.rules.other.listIsTask.exec(f),P&&(O=P[0]!=="[ ] ",f=f.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:u,task:!!P,checked:O,loose:!1,text:f,tokens:[]}),s.raw+=u}const l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let c=0;c<s.items.length;c++)if(this.lexer.state.top=!1,s.items[c].tokens=this.lexer.blockTokens(s.items[c].text,[]),!s.loose){const u=s.items[c].tokens.filter(p=>p.type==="space"),f=u.length>0&&u.some(p=>this.rules.other.anyLine.test(p.raw));s.loose=f}if(s.loose)for(let c=0;c<s.items.length;c++)s.items[c].loose=!0;return s}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:r,title:s}}}table(t){var a;const e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const n=Nd(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(a=e[3])!=null&&a.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const l of r)this.rules.other.tableAlignRight.test(l)?i.align.push("right"):this.rules.other.tableAlignCenter.test(l)?i.align.push("center"):this.rules.other.tableAlignLeft.test(l)?i.align.push("left"):i.align.push(null);for(let l=0;l<n.length;l++)i.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:i.align[l]});for(const l of s)i.rows.push(Nd(l,i.header.length).map((c,u)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:i.align[u]})));return i}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=js(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=iR(e[2],"()");if(i===-2)return;if(i>-1){const l=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],s=i[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Vd(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){const r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return Vd(n,s,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...r[0]].length-1;let a,l,c=i,u=0;const f=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*t.length+i);(r=f.exec(e))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(l=[...a].length,r[3]||r[4]){c+=l;continue}else if((r[5]||r[6])&&i%3&&!((i+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const p=[...r[0]][0].length,g=t.slice(0,i+r.index+p+l);if(Math.min(i,l)%2){const R=g.slice(1,-1);return{type:"em",raw:g,text:R,tokens:this.lexer.inlineTokens(R)}}const _=g.slice(2,-2);return{type:"strong",raw:g,text:_,tokens:this.lexer.inlineTokens(_)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let i;do i=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(i!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){const n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},Rn=class oc{constructor(e){De(this,"tokens");De(this,"options");De(this,"state");De(this,"tokenizer");De(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||jr,this.options.tokenizer=this.options.tokenizer||new ra,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:Pt,block:ho.normal,inline:Bs.normal};this.options.pedantic?(n.block=ho.pedantic,n.inline=Bs.pedantic):this.options.gfm&&(n.block=ho.gfm,this.options.breaks?n.inline=Bs.breaks:n.inline=Bs.gfm),this.tokenizer.rules=n}static get rules(){return{block:ho,inline:Bs}}static lex(e,n){return new oc(n).lex(e)}static lexInline(e,n){return new oc(n).inlineTokens(e)}lex(e){e=e.replace(Pt.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){var s,i,a;for(this.options.pedantic&&(e=e.replace(Pt.tabCharGlobal,"    ").replace(Pt.spaceLine,""));e;){let l;if((i=(s=this.options.extensions)==null?void 0:s.block)!=null&&i.some(u=>(l=u.call({lexer:this},e,n))?(e=e.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.space(e)){e=e.substring(l.raw.length);const u=n.at(-1);l.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(e)){e=e.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(l=this.tokenizer.fences(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(e)){e=e.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(e)){e=e.substring(l.raw.length),n.push(l);continue}let c=e;if((a=this.options.extensions)!=null&&a.startBlock){let u=1/0;const f=e.slice(1);let p;this.options.extensions.startBlock.forEach(g=>{p=g.call({lexer:this},f),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(c=e.substring(0,u+1))}if(this.state.top&&(l=this.tokenizer.paragraph(c))){const u=n.at(-1);r&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l),r=c.length!==e.length,e=e.substring(l.raw.length);continue}if(l=this.tokenizer.text(e)){e=e.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var l,c,u;let r=e,s=null;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)f.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,a="";for(;e;){i||(a=""),i=!1;let f;if((c=(l=this.options.extensions)==null?void 0:l.inline)!=null&&c.some(g=>(f=g.call({lexer:this},e,n))?(e=e.substring(f.raw.length),n.push(f),!0):!1))continue;if(f=this.tokenizer.escape(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.tag(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.link(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(f.raw.length);const g=n.at(-1);f.type==="text"&&(g==null?void 0:g.type)==="text"?(g.raw+=f.raw,g.text+=f.text):n.push(f);continue}if(f=this.tokenizer.emStrong(e,r,a)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.codespan(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.br(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.del(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.autolink(e)){e=e.substring(f.raw.length),n.push(f);continue}if(!this.state.inLink&&(f=this.tokenizer.url(e))){e=e.substring(f.raw.length),n.push(f);continue}let p=e;if((u=this.options.extensions)!=null&&u.startInline){let g=1/0;const _=e.slice(1);let R;this.options.extensions.startInline.forEach(P=>{R=P.call({lexer:this},_),typeof R=="number"&&R>=0&&(g=Math.min(g,R))}),g<1/0&&g>=0&&(p=e.substring(0,g+1))}if(f=this.tokenizer.inlineText(p)){e=e.substring(f.raw.length),f.raw.slice(-1)!=="_"&&(a=f.raw.slice(-1)),i=!0;const g=n.at(-1);(g==null?void 0:g.type)==="text"?(g.raw+=f.raw,g.text+=f.text):n.push(f);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}},sa=class{constructor(t){De(this,"options");De(this,"parser");this.options=t||jr}space(t){return""}code({text:t,lang:e,escaped:n}){var i;const r=(i=(e||"").match(Pt.notSpaceStart))==null?void 0:i[0],s=t.replace(Pt.endingNewline,"")+`
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
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${on(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){const r=this.parser.parseInline(n),s=Dd(t);if(s===null)return r;t=s;let i='<a href="'+t+'"';return e&&(i+=' title="'+on(e)+'"'),i+=">"+r+"</a>",i}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));const s=Dd(t);if(s===null)return on(n);t=s;let i=`<img src="${t}" alt="${n}"`;return e&&(i+=` title="${on(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:on(t.text)}},vu=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},kn=class ac{constructor(e){De(this,"options");De(this,"renderer");De(this,"textRenderer");this.options=e||jr,this.options.renderer=this.options.renderer||new sa,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new vu}static parse(e,n){return new ac(n).parse(e)}static parseInline(e,n){return new ac(n).parseInline(e)}parse(e,n=!0){var s,i;let r="";for(let a=0;a<e.length;a++){const l=e[a];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[l.type]){const u=l,f=this.options.extensions.renderers[u.type].call({parser:this},u);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){r+=f||"";continue}}const c=l;switch(c.type){case"space":{r+=this.renderer.space(c);continue}case"hr":{r+=this.renderer.hr(c);continue}case"heading":{r+=this.renderer.heading(c);continue}case"code":{r+=this.renderer.code(c);continue}case"table":{r+=this.renderer.table(c);continue}case"blockquote":{r+=this.renderer.blockquote(c);continue}case"list":{r+=this.renderer.list(c);continue}case"html":{r+=this.renderer.html(c);continue}case"paragraph":{r+=this.renderer.paragraph(c);continue}case"text":{let u=c,f=this.renderer.text(u);for(;a+1<e.length&&e[a+1].type==="text";)u=e[++a],f+=`
`+this.renderer.text(u);n?r+=this.renderer.paragraph({type:"paragraph",raw:f,text:f,tokens:[{type:"text",raw:f,text:f,escaped:!0}]}):r+=f;continue}default:{const u='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}parseInline(e,n=this.renderer){var s,i;let r="";for(let a=0;a<e.length;a++){const l=e[a];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[l.type]){const u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){r+=u||"";continue}}const c=l;switch(c.type){case"escape":{r+=n.text(c);break}case"html":{r+=n.html(c);break}case"link":{r+=n.link(c);break}case"image":{r+=n.image(c);break}case"strong":{r+=n.strong(c);break}case"em":{r+=n.em(c);break}case"codespan":{r+=n.codespan(c);break}case"br":{r+=n.br(c);break}case"del":{r+=n.del(c);break}case"text":{r+=n.text(c);break}default:{const u='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},wl,Ro=(wl=class{constructor(t){De(this,"options");De(this,"block");this.options=t||jr}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?Rn.lex:Rn.lexInline}provideParser(){return this.block?kn.parse:kn.parseInline}},De(wl,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),wl),aR=class{constructor(...t){De(this,"defaults",hu());De(this,"options",this.setOptions);De(this,"parse",this.parseMarkdown(!0));De(this,"parseInline",this.parseMarkdown(!1));De(this,"Parser",kn);De(this,"Renderer",sa);De(this,"TextRenderer",vu);De(this,"Lexer",Rn);De(this,"Tokenizer",ra);De(this,"Hooks",Ro);this.use(...t)}walkTokens(t,e){var r,s;let n=[];for(const i of t)switch(n=n.concat(e.call(this,i)),i.type){case"table":{const a=i;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,e));for(const l of a.rows)for(const c of l)n=n.concat(this.walkTokens(c.tokens,e));break}case"list":{const a=i;n=n.concat(this.walkTokens(a.items,e));break}default:{const a=i;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,e))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const i=e.renderers[s.name];i?e.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=i.apply(this,a)),l}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=e[s.level];i?i.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),n.renderer){const s=this.defaults.renderer||new sa(this.defaults);for(const i in n.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const a=i,l=n.renderer[a],c=s[a];s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f||""}}r.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new ra(this.defaults);for(const i in n.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const a=i,l=n.tokenizer[a],c=s[a];s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f}}r.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new Ro;for(const i in n.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const a=i,l=n.hooks[a],c=s[a];Ro.passThroughHooks.has(i)?s[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(s,u)).then(p=>c.call(s,p));const f=l.call(s,u);return c.call(s,f)}:s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f}}r.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(a){let l=[];return l.push(i.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return Rn.lex(t,e??this.defaults)}parser(t,e){return kn.parse(t,e??this.defaults)}parseMarkdown(t){return(n,r)=>{const s={...r},i={...this.defaults,...s},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=t);const l=i.hooks?i.hooks.provideLexer():t?Rn.lex:Rn.lexInline,c=i.hooks?i.hooks.provideParser():t?kn.parse:kn.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>l(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>c(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(a);try{i.hooks&&(n=i.hooks.preprocess(n));let u=l(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let f=c(u,i);return i.hooks&&(f=i.hooks.postprocess(f)),f}catch(u){return a(u)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const r="<p>An error occurred:</p><pre>"+on(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},Lr=new aR;function Re(t,e){return Lr.parse(t,e)}Re.options=Re.setOptions=function(t){return Lr.setOptions(t),Re.defaults=Lr.defaults,c_(Re.defaults),Re};Re.getDefaults=hu;Re.defaults=jr;Re.use=function(...t){return Lr.use(...t),Re.defaults=Lr.defaults,c_(Re.defaults),Re};Re.walkTokens=function(t,e){return Lr.walkTokens(t,e)};Re.parseInline=Lr.parseInline;Re.Parser=kn;Re.parser=kn.parse;Re.Renderer=sa;Re.TextRenderer=vu;Re.Lexer=Rn;Re.lexer=Rn.lex;Re.Tokenizer=ra;Re.Hooks=Ro;Re.parse=Re;Re.options;Re.setOptions;Re.use;Re.walkTokens;Re.parseInline;kn.parse;Rn.lex;const lR={class:"card"},cR=["src"],uR={class:"card-content"},hR={class:"card-title"},fR={class:"card-subtitle"},dR=["innerHTML"],pR={__name:"Card",props:{image:{type:String,default:""},title:String,subtitle:String,details:String},setup(t){const e=t,n=Qe(!1),r=Qe(!0),s=Ct(()=>e.details?Re.parseInline(e.details):"");return(i,a)=>(ne(),ce("div",lR,[r.value?(ne(),ce("img",{key:0,src:t.image,alt:"Card image",class:"card-image",onError:a[0]||(a[0]=l=>r.value=!1)},null,40,cR)):$t("",!0),M("div",uR,[M("h3",hR,Se(t.title),1),M("p",fR,Se(t.subtitle),1),t.details?(ne(),ce("button",{key:0,onClick:a[1]||(a[1]=l=>n.value=!n.value),class:"cta-button"},Se(n.value?"Hide":"Learn More"),1)):$t("",!0),re(Yp,{name:"fade"},{default:Ge(()=>[n.value?(ne(),ce("div",{key:0,class:"card-details",innerHTML:s.value},null,8,dR)):$t("",!0)]),_:1})])]))}},gR=pt(pR,[["__scopeId","data-v-ae8421c8"]]),mR={class:"card-grid-section"},_R={class:"grid-title"},yR={class:"card-grid"},vR={__name:"CardGrid",props:{title:{type:String},cards:{type:Array,required:!0}},setup(t){return(e,n)=>(ne(),ce("section",mR,[M("h2",_R,Se(t.title),1),M("div",yR,[(ne(!0),ce(tt,null,Cr(t.cards,(r,s)=>(ne(),vs(gR,Ai({key:s},{ref_for:!0},r),null,16))),128))])]))}},ia=pt(vR,[["__scopeId","data-v-8a2cffb2"]]),ER={class:"article-card"},wR=["src","alt"],bR={class:"content"},TR={class:"title"},IR=["href"],AR={__name:"ArticleCard",props:{title:String,thumbnail:String,url:String},setup(t){return(e,n)=>(ne(),ce("div",ER,[M("img",{src:t.thumbnail,alt:t.title,class:"thumbnail"},null,8,wR),M("div",bR,[M("h3",TR,Se(t.title),1),M("a",{href:t.url,target:"_blank",rel:"noopener",class:"read-button"},"Read Article",8,IR)])]))}},SR=pt(AR,[["__scopeId","data-v-08790d9a"]]),RR={class:"article-grid-section"},kR={class:"grid-title"},CR={class:"article-grid"},PR={__name:"ArticleGrid",props:{title:String,articles:Array},setup(t){return(e,n)=>(ne(),ce("section",RR,[M("h2",kR,Se(t.title),1),M("div",CR,[(ne(!0),ce(tt,null,Cr(t.articles,(r,s)=>(ne(),vs(SR,Ai({key:s},{ref_for:!0},r),null,16))),128))])]))}},xR=pt(PR,[["__scopeId","data-v-6cbd1349"]]),OR=["id"],DR=["src","alt"],NR={class:"event-content"},VR={class:"event-title"},MR={class:"event-datetime"},LR={key:0},FR={key:0,class:"event-location"},$R=["innerHTML"],UR=["href"],BR={key:2,class:"schedule"},jR={class:"schedule-time"},HR=["innerHTML"],zR={__name:"Event",props:{id:String,title:String,date:String,time:String,location:String,description:String,image:String,rsvpLink:String,link:String,linkLabel:{type:String,default:"RSVP / Access"},schedule:{type:Array,default:()=>[]}},setup(t){const e=t,n=Ct(()=>{var f;const a=(f=e.date)==null?void 0:f.trim();if(!a)return"";const l=/\b\d{1,2}\b/.test(a),c=new Date(a);if(isNaN(c.getTime()))return a;const u=l?{year:"numeric",month:"long",day:"numeric"}:{year:"numeric",month:"long"};return c.toLocaleDateString(void 0,u)}),r=Ct(()=>e.description?Re.parseInline(e.description):""),s=Ct(()=>e.schedule.map(a=>({...a,parsedTitle:Re.parseInline(a.title||"")}))),i={initial:{opacity:0,y:30},enter:{opacity:1,y:0,transition:{duration:.6}}};return(a,l)=>{const c=Yy("motion");return Oo((ne(),ce("article",{id:t.id,class:"event-card animate-fade-slide"},[t.image?(ne(),ce("img",{key:0,src:t.image,alt:t.title,class:"event-image"},null,8,DR)):$t("",!0),M("div",NR,[M("h2",VR,Se(t.title),1),M("p",MR,[We(Se(n.value),1),t.time?(ne(),ce("span",LR," • "+Se(t.time),1)):$t("",!0)]),t.location?(ne(),ce("p",FR,Se(t.location),1)):$t("",!0),M("p",{class:"event-description",innerHTML:r.value},null,8,$R),t.rsvpLink||t.link?(ne(),ce("a",{key:1,href:t.rsvpLink||t.link,target:"_blank",rel:"noopener",class:"event-button"},Se(t.linkLabel),9,UR)):$t("",!0),t.schedule&&t.schedule.length?(ne(),ce("div",BR,[l[0]||(l[0]=M("h3",null,"Event Schedule",-1)),M("ul",null,[(ne(!0),ce(tt,null,Cr(s.value,(u,f)=>(ne(),ce("li",{key:f,class:"schedule-item"},[M("span",jR,Se(u.time),1),M("span",{class:"schedule-title",innerHTML:u.parsedTitle},null,8,HR)]))),128))])])):$t("",!0)])],8,OR)),[[c,i]])}}},E_=pt(zR,[["__scopeId","data-v-c66a4fa3"]]),qR="/site/afp-logo.png",GR={class:"organizations-container"},WR={class:"organization-circles"},KR={class:"circle-placeholder"},QR={__name:"AffiliatedOrganizations",setup(t){const e=Qe(null),n=Qe(!1);let r=null;const s=Qe(!1);function i(){return window.innerWidth<=768?.3:.1}return ys(()=>{if(s.value=window.innerWidth<=768,s.value){n.value=!0;return}r=new IntersectionObserver(a=>{a.forEach(l=>{l.isIntersecting&&(e.value.offsetWidth,n.value=!1,setTimeout(()=>{n.value=!0},10),r.unobserve(l.target))})},{threshold:i()}),e.value&&r.observe(e.value)}),ma(()=>{r&&r.disconnect()}),(a,l)=>(ne(),ce("div",{class:"sister-organizations",id:"sister-organizations",ref_key:"containerRef",ref:e},[l[1]||(l[1]=M("h2",null,"Sister Organizations",-1)),M("div",GR,[M("div",{class:kr(["center-logo",{animate:n.value}])},l[0]||(l[0]=[M("img",{src:qR,alt:"AFP Logo",class:"center-logo-img"},null,-1)]),2),M("div",WR,[(ne(),ce(tt,null,Cr(6,c=>M("div",{class:kr(["org-circle",{animate:n.value}]),key:c,style:$r({"--delay":`${c*.2}s`})},[M("div",KR,"ORG "+Se(c),1)],6)),64))])])],512))}},JR=pt(QR,[["__scopeId","data-v-a4eae301"]]),XR={title:"Feature",date:"A Date",location:"A Place",description:"A place to feature anything the AFP wants on their home page",image:"https://media.istockphoto.com/id/1417699524/photo/group-of-people-at-music-concert.jpg?s=2048x2048&w=is&k=20&c=ry_TiyFeGk5F03WDdcTE9lnx25PvIIUvKCl0uQHyFa0=",link:"/"},YR=[{image:"https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=2048x2048&w=is&k=20&c=bUHQJBt4Nbp0IEngDcXMMQteAnGi7fz1WpEuq3zLrOI=",title:"AACAP",subtitle:"Annual Meeting • October 2025",details:"The American Academy of Child and Adolescent Psychiatry (AACAP) is the leading national professional medical association dedicated to promoting healthy development and the mental health of children, adolescents, and families. Join us for their annual meeting featuring cutting-edge research, clinical workshops, and networking opportunities with child and adolescent psychiatry experts."},{image:"https://media.istockphoto.com/id/1411002384/photo/nurses-meeting.jpg?s=2048x2048&w=is&k=20&c=M5E3-J6IVCX6cvVBGyfedmTXEPjedRxyE2NZMkdv9hM=",title:"APA",subtitle:"Annual Meeting • May 2026",details:"The American Psychiatric Association (APA) is the world's largest psychiatric organization, representing more than 38,000 physician members specializing in the diagnosis, treatment, prevention, and research of mental illnesses. Their annual meeting brings together psychiatrists from around the world for education, networking, and the latest advances in psychiatric care and research."},{image:"https://media.istockphoto.com/id/1783743772/photo/female-speaker-giving-a-presentation-during-business-seminar-at-convention-center.jpg?s=2048x2048&w=is&k=20&c=h7aIvTLP5PhWfrp54V_yUhtoD1cZqqwauSmqMAsbnyw=",title:"Annual AFP Conference",subtitle:"Virtual • March 2026",details:"Our flagship event featuring keynote speakers, panels, and networking opportunities. The Association of Family Psychiatrists Annual Conference is the premier gathering for family psychiatry professionals, offering comprehensive education on family-centered mental health care, innovative treatment approaches, and collaborative practice models."}],ZR=[{title:"Coping With Problematic Effects of Social Media",thumbnail:"https://images.squarespace-cdn.com/content/v1/6267042fe703aa417b69ec37/ff56a26d-ca75-4256-8854-6ddba48c6fc5/Teenage+girl+using+smart+phone+at+home+stock+photo.jpg?format=2500w",url:"https://www.psychologytoday.com/us/blog/psychiatrys-think-tank/202501/coping-with-problematic-effects-of-social-media"},{title:"Community Support Strategies",thumbnail:"https://media.istockphoto.com/id/1465173464/photo/business-network-concept-teamwork-partnership-human-resources.jpg?s=2048x2048&w=is&k=20&c=45hL9SREGO-8XjTxsmFy1Iph1lHSxEqD-MTkVlodM_o="},{title:"Trauma-Informed Care",thumbnail:"https://media.istockphoto.com/id/2206797715/photo/cubes-form-the-expression-ptsd.jpg?s=2048x2048&w=is&k=20&c=w4i03qsp8ue3YYBBhSuqcaAwzhfmyWGuEBmA2QkN2Tg="}],ek=[{title:"Janice Cho, MD"},{title:"Sarah Faitell, DO"},{title:"Eileen Glocer, MD"},{title:"Hannah Goddard, DO"},{title:"Jatin Julakanti, MD"},{title:"Hannah Leo, MD"},{title:"Kaajal Patel Tan, DO"},{title:"Michelle Prakash, MD"},{title:"Pallavi Tatapudy, MD"},{title:"Richard Seeber II, MD"},{title:"Alfonso Vera Jr, MD"}],tk={title:"Highlights: 2024 Annual Family Psychiatry Conference",date:"September 21, 2025",time:"9:00 AM – 4:00 PM PT",description:"Join us for the 2025 Annual Conference, featuring leading experts in family psychiatry. Engage in keynotes, panels, and networking opportunities.",link:"https://drive.google.com/file/d/14MEsEO4A65rdNfa7eHmyuKKwWBJJDtLl/view?usp=drive_link",linkLabel:"Watch Recording",schedule:[{time:" 11:00 AM",title:"Introduction by Dr. Glick on the state of psychiatric practice, it’s efficacy, and why it isn’t used more in practice"},{time:"11:10 AM",title:"[Family Work in Adult Outpatient Setting](https://www.familypsychiatrists.org/s/family-work-in-outpatient-setting-Carolyn-Fulton.pdf) (Carolyn Fulton)"},{time:"11:45 PM",title:"[Role of Family Engagement in PHP](https://www.familypsychiatrists.org/s/Role-of-Family-Engagement-in-a-Partial-Hospital-Program-Tumuluru.pdf) (Dr. Tumuluru)"},{time:"12:20 PM",title:"Break"},{time:"12:30 PM",title:"[Family and Family Interventions in Institutional Care](https://www.familypsychiatrists.org/s/family-interventions-in-institutionalized-care-settings-Gogineni.pdf) (Dr. Gogineni)"},{time:"1:05 PM",title:"[Understanding and Treating Adolescent Eating Disorders](https://www.familypsychiatrists.org/s/understanding-and-treating-adolescent-eating-disorders-the-role-of-the-psychiatrist-in-family-based.pdf) (Dr. Spector and Dr. Spettigue)"},{time:"1:40 PM",title:"Break Out Rooms"}]},nk=[{src:"https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",alt:"Conference attendees networking",title:"Networking Sessions",description:"Connect with fellow psychiatrists and mental health professionals"},{src:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",alt:"Keynote speaker presentation",title:"Keynote Presentations",description:"Insightful talks from leading experts in family psychiatry"},{src:"https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",alt:"Workshop session",title:"Interactive Workshops",description:"Hands-on learning experiences and skill development"},{src:"https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop",alt:"Conference venue and atmosphere",title:"Conference Venue",description:"State-of-the-art facilities for an exceptional learning experience"}],rk={class:"home"},sk={class:"about",id:"about"},ik={class:"conference-and-carousel"},ok={class:"columns-container"},ak={class:"conference-column",id:"conference"},lk={class:"carousel-column",id:"conference-carousel"},ck={class:"carousel-container"},uk=["src","alt"],hk={class:"carousel-caption"},fk={class:"carousel-indicators"},dk=["onClick","aria-label"],pk={__name:"HomeView",setup(t){const e=Qe(nk),n=Qe(0);let r=null;const s=()=>{n.value=(n.value+1)%e.value.length},i=()=>{n.value=n.value===0?e.value.length-1:n.value-1},a=u=>{n.value=u},l=()=>{r=setInterval(s,5e3)},c=()=>{r&&(clearInterval(r),r=null)};return ys(()=>{l()}),ma(()=>{c()}),(u,f)=>(ne(),ce("section",rk,[f[4]||(f[4]=Wp('<div class="intro" data-v-df8e3feb><div class="logo-column" data-v-df8e3feb><img src="'+_S+'" alt="AFP Logo" class="logo-img" data-v-df8e3feb></div><div class="welcome-column" id="welcome" data-v-df8e3feb><h1 class="welcome-title" data-v-df8e3feb>Welcome to the Association of Family Psychiatrists</h1><p class="welcome-subtitle" data-v-df8e3feb> Promoting mental wellness and supporting family psychiatry through education, advocacy, and community. </p></div></div>',1)),M("div",sk,[f[1]||(f[1]=M("h2",null,"About Us",-1)),f[2]||(f[2]=M("p",null," The Association of Family Psychiatrists is dedicated to advancing the field of family mental health by fostering professional development, sharing best practices, and connecting practitioners across the country. ",-1)),re(Ie(Ze),{to:"/about",class:"cta-button"},{default:Ge(()=>f[0]||(f[0]=[We("Learn More")])),_:1,__:[0]})]),re(AS,Ai(Ie(XR),{id:"featured-event"}),null,16),M("div",ik,[f[3]||(f[3]=M("h2",{class:"section-title"},"Conference Highlights",-1)),M("div",ok,[M("div",ak,[re(E_,ny(Gp(Ie(tk))),null,16)]),M("div",lk,[M("div",ck,[M("div",{class:"carousel-track",style:$r({transform:`translateX(-${n.value*100}%)`})},[(ne(!0),ce(tt,null,Cr(e.value,(p,g)=>(ne(),ce("div",{key:g,class:"carousel-slide"},[M("img",{src:p.src,alt:p.alt,class:"carousel-image"},null,8,uk),M("div",hk,[M("h3",null,Se(p.title),1),M("p",null,Se(p.description),1)])]))),128))],4),M("button",{class:"carousel-button prev",onClick:i,"aria-label":"Previous slide"}," ‹ "),M("button",{class:"carousel-button next",onClick:s,"aria-label":"Next slide"}," › "),M("div",fk,[(ne(!0),ce(tt,null,Cr(e.value,(p,g)=>(ne(),ce("button",{key:g,class:kr(["indicator",{active:n.value===g}]),onClick:_=>a(g),"aria-label":`Go to slide ${g+1}`},null,10,dk))),128))])])])])]),re(JR,{id:"affiliated-organizations"}),re(ia,{title:"Affiliated Organizations",cards:Ie(YR),id:"affiliated-organizations"},null,8,["cards"]),re(xR,{title:"Featured Books / Publications",articles:Ie(ZR),id:"featured-books"},null,8,["articles"]),re(ia,{title:"2024 Winners of our Annual Award for Excellence in Family Care",cards:Ie(ek),id:"award-winners"},null,8,["cards"])]))}},gk=pt(pk,[["__scopeId","data-v-df8e3feb"]]),mk={class:"overlay animate-fade-slide"},_k={class:"title"},yk={class:"subtitle"},vk={__name:"Hero",props:{title:String,subtitle:String,image:String},setup(t){return(e,n)=>(ne(),ce("section",{class:"hero",style:$r({backgroundImage:`url(${t.image})`})},[M("div",mk,[M("h1",_k,Se(t.title),1),M("p",yk,Se(t.subtitle),1)])],4))}},Ek=pt(vk,[["__scopeId","data-v-7cb3ac27"]]),wk=[{title:"Rao Gogenini",subtitle:"President",details:"Leading the Association of Family Psychiatrists with dedication and vision."},{title:"Randi Libbon",subtitle:"Vice President and Chair, Membership Committee",details:"Overseeing membership growth and engagement initiatives."},{title:"Rajesh Mehta",subtitle:"Secretary",details:"Managing organizational records and communications."},{title:"Alison Heru",subtitle:"Treasurer",details:"Overseeing financial management and budgetary planning."},{title:"Kasey Moss",subtitle:"Assembly Liaison",details:"Representing the association in external assemblies and partnerships."},{title:"Ellen Berman",subtitle:"Past President",details:"Providing guidance and continuity based on previous leadership experience."}],bk={class:"about-page"},Tk={class:"intro"},Ik={class:"officers"},Ak={class:"officers-directory"},Sk={__name:"AboutView",setup(t){return(e,n)=>(ne(),ce("div",bk,[M("section",Tk,[re(Ek,{title:"Welcome to the Association of Family Psychiatrists",subtitle:"Promoting mental wellness and supporting family psychiatry through education, advocacy, and community.",image:"https://images.squarespace-cdn.com/content/v1/5748cc56746fb940f105bd1c/22364a6b-02db-4f89-8840-8ad7de5d6682/family+therapy+pic.jpg"}),n[0]||(n[0]=M("div",{class:"section-content",id:"about-statement"},[M("h1",{class:"section-heading"},"About the Association"),M("p",null," The Association of Family Psychiatrists is committed to advancing the field of family mental health by fostering collaboration, research, education, and advocacy. ")],-1))]),n[2]||(n[2]=Wp('<section class="mission" data-v-d7aaf9d5><div class="section-content" id="mission-statement" data-v-d7aaf9d5><h2 class="section-heading" data-v-d7aaf9d5>Our Mission</h2><p data-v-d7aaf9d5> We strive to support psychiatrists and mental health professionals who work with families, providing resources, training, and a professional network to promote mental wellness at every stage of life. </p></div></section><section class="vision" data-v-d7aaf9d5><div class="section-content" id="vision-statement" data-v-d7aaf9d5><h2 class="section-heading" data-v-d7aaf9d5>Our Vision</h2><p data-v-d7aaf9d5> A world where every family has access to compassionate, evidence-based psychiatric care. </p></div></section>',2)),M("section",Ik,[n[1]||(n[1]=M("div",{class:"section-content",id:"officers-section"},[M("h2",{class:"section-heading"},"Our Leadership Team"),M("p",null," Meet the dedicated professionals who guide our association and work tirelessly to advance the field of family psychiatry. ")],-1)),M("div",Ak,[re(ia,{title:"Executive Officers",cards:Ie(wk)},null,8,["cards"])])])]))}},Rk=pt(Sk,[["__scopeId","data-v-d7aaf9d5"]]),kk={class:"info-section"},Ck={class:"heading"},Pk={key:0,class:"subheading"},xk={class:"description"},Ok={__name:"InformationSection",props:{heading:String,subheading:String,description:String,link:String},setup(t){return(e,n)=>{const r=Jy("RouterLink");return ne(),ce("section",kk,[M("h2",Ck,Se(t.heading),1),t.subheading?(ne(),ce("h3",Pk,Se(t.subheading),1)):$t("",!0),M("p",xk,Se(t.description),1),re(r,{to:t.link,class:"read-more"},{default:Ge(()=>n[0]||(n[0]=[We("Read More")])),_:1,__:[0]},8,["to"])])}}},vr=pt(Ok,[["__scopeId","data-v-af70b806"]]),Dk={class:"resources"},Nk={key:1},Vk={__name:"ResourcesView",setup(t){return(e,n)=>(ne(),ce("section",Dk,[e.$route.name!=="resources"?(ne(),vs(Ie(Rc),{key:0})):(ne(),ce("div",Nk,[n[0]||(n[0]=M("h1",{class:"page-title animate-fade-slide"},"Resources",-1)),re(vr,{class:"animate-fade-slide",heading:"Our Listserv",subheading:"Join the discussion",description:"Visit the discussion group of the Association of Family Psychiatry on Google Groups.",link:"/resources/listserv"}),re(vr,{class:"animate-fade-slide",heading:"Articles of Interest",subheading:"",description:"Archived articles of interest to our members",link:"/resources/articles"}),re(vr,{class:"animate-fade-slide",heading:"General Web Resources",subheading:"",description:"In addition to this page, resources including books and articles can be found throughout the website.",link:"/resources/web"}),re(vr,{class:"animate-fade-slide",heading:"Child & Adolescent ",description:"Resources for child and adolescent psychiatry",link:"/resources/child-adolescent"}),re(vr,{class:"animate-fade-slide",heading:"Couples & Adults ",description:"Resources for couples and adults",link:"/resources/couples-adults"}),re(vr,{class:"animate-fade-slide",heading:"Culture & Family ",description:"Resources for culture and family",link:"/resources/culture-family"}),re(vr,{class:"animate-fade-slide",heading:"Training ",description:"Resources for training",link:"/resources/training"})]))]))}},Mk={class:"member-view"},Lk={key:0,class:"verification-section animate-fade-slide"},Fk={class:"verification-card"},$k={class:"form-group"},Uk=["disabled"],Bk={class:"form-group"},jk=["disabled"],Hk=["disabled"],zk={key:0,class:"loading-container"},qk={key:1},Gk={key:0,class:"error-message"},Wk={key:1,class:"success-message"},Kk={key:1,class:"member-directory animate-fade-slide"},Qk={class:"welcome-message"},Jk={key:0,class:"loading-section"},Xk={__name:"MemberView",setup(t){const e=Qe(!1),n=Qe(""),r=Qe(""),s=Qe(!1),i=Qe(!1),a=Qe(""),l=Qe(""),c=Qe([]);ys(()=>{const g=localStorage.getItem("afp_member");if(g)try{const _=JSON.parse(g);n.value=_.name,r.value=_.email,e.value=!0,u(_.name,_.email)}catch(_){console.error("Error parsing saved member data:",_),localStorage.removeItem("afp_member")}});const u=async(g,_)=>{i.value=!0;try{const R=await fetch("https://us-central1-afp-site-c1bd9.cloudfunctions.net/verifyMember",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:g,email:_})}),P=await R.json();R.ok&&P.isMember?c.value=(P.members||[]).map(O=>({title:O.name,subtitle:[O.specialization,O.location].filter(Boolean).join(" | "),details:[O.description?O.description:"",O.email?`<br><br>Email: [${O.email}](mailto:${O.email})`:"",O.phone?`<br>Phone: ${O.phone}`:"",O.website?`<br>Website: [${O.website}](${O.website})`:""].filter(Boolean).join("")})):a.value=P.error||"Failed to load members."}catch(R){console.error("Failed to fetch member cards:",R),a.value="An error occurred while loading members."}finally{i.value=!1}},f=async()=>{if(!n.value||!r.value){a.value="Please enter both name and email.";return}s.value=!0,a.value="",l.value="";try{const g=await fetch("https://us-central1-afp-site-c1bd9.cloudfunctions.net/verifyMember",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.value,email:r.value})}),_=await g.json();if(g.ok&&_.isMember){const R={name:n.value,email:r.value,verifiedAt:new Date().toISOString()};localStorage.setItem("afp_member",JSON.stringify(R)),c.value=(_.members||[]).map(P=>({title:P.name,subtitle:[P.specialization,P.location].filter(Boolean).join(" | "),details:[P.description?P.description:"",P.email?`<br><br>Email: [${P.email}](mailto:${P.email})`:"",P.phone?`<br>Phone: ${P.phone}`:"",P.website?`<br>Website: [${P.website}](${P.website})`:""].filter(Boolean).join("")})),l.value="Membership verified! Welcome to the member directory.",setTimeout(()=>{e.value=!0,l.value=""},1500)}else a.value=_.error||"Membership not found. Please check your information or contact us if you believe this is an error."}catch(g){console.error("Verification error:",g),a.value="An error occurred during verification. Please try again later."}finally{s.value=!1}},p=()=>{localStorage.removeItem("afp_member"),e.value=!1,n.value="",r.value="",a.value="",l.value=""};return(g,_)=>(ne(),ce("section",Mk,[_[8]||(_[8]=M("h1",{class:"page-title animate-fade-slide"},"Our Members",-1)),e.value?(ne(),ce("div",Kk,[M("div",Qk,[M("p",null,"Welcome, "+Se(n.value)+"!",1)]),i.value?(ne(),ce("div",Jk,_[7]||(_[7]=[M("div",{class:"loading-circle large"},null,-1),M("p",null,"Loading member directory...",-1)]))):(ne(),vs(ia,{key:1,cards:c.value},null,8,["cards"])),M("button",{onClick:p,class:"logout-button"},"Sign Out")])):(ne(),ce("div",Lk,[M("div",Fk,[_[5]||(_[5]=M("h2",null,"Member Verification",-1)),_[6]||(_[6]=M("p",null,"Please enter your information to access the member directory.",-1)),M("form",{onSubmit:Zp(f,["prevent"]),class:"verification-form"},[M("div",$k,[_[2]||(_[2]=M("label",{for:"memberName"},"Full Name",-1)),Oo(M("input",{id:"memberName","onUpdate:modelValue":_[0]||(_[0]=R=>n.value=R),type:"text",placeholder:"Enter your full name",required:"",disabled:s.value},null,8,Uk),[[Nl,n.value]])]),M("div",Bk,[_[3]||(_[3]=M("label",{for:"memberEmail"},"Email Address",-1)),Oo(M("input",{id:"memberEmail","onUpdate:modelValue":_[1]||(_[1]=R=>r.value=R),type:"email",placeholder:"Enter your email address",required:"",disabled:s.value},null,8,jk),[[Nl,r.value]])]),M("button",{type:"submit",class:"verify-button",disabled:s.value},[s.value?(ne(),ce("div",zk,_[4]||(_[4]=[M("div",{class:"loading-circle"},null,-1),M("span",null,"Verifying...",-1)]))):(ne(),ce("span",qk,"Verify Membership"))],8,Hk)],32),a.value?(ne(),ce("div",Gk,Se(a.value),1)):$t("",!0),l.value?(ne(),ce("div",Wk,Se(l.value),1)):$t("",!0)])]))]))}},Yk=pt(Xk,[["__scopeId","data-v-c6aafafb"]]),Zk=[{id:"aacap",title:"American Academy of Child and Adolescent Psychiatry Annual Meeting",date:"October 2025",time:"",location:"Annual Meeting",description:"A virtual seminar exploring the latest research in child and adolescent psychiatry.",image:"https://media.istockphoto.com/id/1496377921/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=xuCCbqrrZoE0jKxLd8aW2U3dSjxwJaKw99EDea1q91w=",linkLabel:"Join Webinar"},{id:"afp",title:"Annual Family Psychiatry Conference",date:"March 2026",location:"Virtual",description:"Join leading experts in family psychiatry for a full day of workshops and keynotes.",image:"https://media.istockphoto.com/id/1496377580/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=cQAx2DYW0wlK5IgykC0pqGupR2lSwDmw7SEn2fuVgS0="},{id:"apa",title:"American Psychological Association Annual Meeting",date:"May 2026",location:"Online",description:"A virtual seminar exploring the latest research in psychiatry.",image:"https://media.istockphoto.com/id/1496377921/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=xuCCbqrrZoE0jKxLd8aW2U3dSjxwJaKw99EDea1q91w="}],eC={class:"events-view"},tC={__name:"EventsView",setup(t){return(e,n)=>(ne(),ce("section",eC,[n[0]||(n[0]=M("h1",{class:"animate-fade-slide"},"Upcoming Events",-1)),(ne(!0),ce(tt,null,Cr(Ie(Zk),r=>(ne(),vs(E_,Ai({key:r.id},{ref_for:!0},r),null,16))),128))]))}},nC=pt(tC,[["__scopeId","data-v-34ea3e05"]]),rC={},sC={class:"contact-view"};function iC(t,e){return ne(),ce("section",sC,e[0]||(e[0]=[M("h1",{class:"page-title animate-fade-slide"},"Contact Us",-1),M("p",{class:"page-subtitle animate-fade-slide",style:{"animation-delay":"0.2s"}}," We'd love to hear from you! Reach out with any questions, suggestions, or inquiries. ",-1),M("div",{class:"contact-info animate-fade-slide",style:{"animation-delay":"0.4s"}},[M("p",null,[We("Email: "),M("a",{href:"mailto:info@familypsychiatrists.org"},"info@familypsychiatrists.org")]),M("p",null,"Phone: (555) 123-4567"),M("p",null,"Mailing Address: 123 Main Street, Suite 456, San Francisco, CA 94105")],-1),M("div",{class:"contact-form animate-fade-slide",style:{"animation-delay":"0.6s"}},[M("h2",null,"Send Us a Message"),M("form",{action:"https://formspree.io/f/xanjjwnj",method:"POST",class:"contact-form-form"},[M("input",{type:"text",name:"name",placeholder:"Your Name",required:""}),M("input",{type:"email",name:"_replyto",placeholder:"Your Email",required:""}),M("textarea",{name:"message",placeholder:"Your Message",rows:"5",required:""}),M("input",{type:"hidden",name:"_next",value:"https://yoursite.com/thank-you"}),M("button",{type:"submit",class:"cta-button"},"Send Message")])],-1)]))}const oC=pt(rC,[["render",iC],["__scopeId","data-v-ccf43640"]]),aC=Ew({history:XE(),routes:[{path:"/",name:"home",component:gk},{path:"/about",name:"about",component:Rk},{path:"/resources",name:"resources",component:Vk,children:[{path:"listserv",name:"resources-listserv",component:()=>Ye(()=>import("./ListservView-CHcOqHN1.js"),__vite__mapDeps([0,1,2]))},{path:"articles",name:"resources-articles",component:()=>Ye(()=>import("./ArticlesView-BQANrIVZ.js"),__vite__mapDeps([3,1,2]))},{path:"web",name:"resources-web",component:()=>Ye(()=>import("./WebResourcesView-DiVnubB3.js"),__vite__mapDeps([4,1,2]))},{path:"child-adolescent",name:"resources-child-adolescent",component:()=>Ye(()=>import("./ChildAdolescentView-DEfM5J7s.js"),[]),children:[{path:"aacap",name:"resources-child-adolescent-aacap",component:()=>Ye(()=>import("./AACAPView-CJW-m1mB.js"),__vite__mapDeps([5,1,2]))},{path:"family-centered",name:"resources-child-adolescent-family-centered",component:()=>Ye(()=>import("./FamilyCenteredView-DnLmwmnU.js"),__vite__mapDeps([6,1,2]))}]},{path:"couples-adults",name:"resources-couples-adults",component:()=>Ye(()=>import("./CouplesAdultsView-B4zHfwET.js"),[]),children:[{path:"psychiatric-resources",name:"resources-couples-adults-psychiatric-resources",component:()=>Ye(()=>import("./PsychiatricResourcesView-9XUT8ORV.js"),__vite__mapDeps([7,1,2]))},{path:"books",name:"resources-couples-adults-books",component:()=>Ye(()=>import("./BooksView-C4dTvdCz.js"),__vite__mapDeps([8,1,2]))}]},{path:"culture-family",name:"resources-culture-family",component:()=>Ye(()=>import("./CultureFamilyView-jSHCKN8-.js"),[]),children:[{path:"resources",name:"resources-culture-family-resources",component:()=>Ye(()=>import("./CultureFamilyResourcesView-C2ElRwhn.js"),__vite__mapDeps([9,1,2]))},{path:"cultural-anthropology",name:"resources-culture-family-cultural-anthropology",component:()=>Ye(()=>import("./CulturalAnthropologyView-CRw-wzh7.js"),__vite__mapDeps([10,1,2]))}]},{path:"training",name:"resources-training",component:()=>Ye(()=>import("./TrainingView-B3CMN5o6.js"),[]),children:[{path:"curriculum-in-adult-psychiatric-residency-training",name:"resources-training-curriculum",component:()=>Ye(()=>import("./CurriculumInAdultPsychiatricResidencyTrainingView-BZcT82SC.js"),__vite__mapDeps([11,1,2]))},{path:"training-programs-in-family-psychiatry",name:"resources-training-programs",component:()=>Ye(()=>import("./TrainingProgramsInFamilyPsychiatryView-B0p-mcWH.js"),__vite__mapDeps([12,1,2]))}]}]},{path:"/members",name:"members",component:Yk},{path:"/events",name:"events",component:nC},{path:"/contact",name:"contact",component:oC},{path:"/confirmation",name:"confirmation",component:()=>Ye(()=>import("./MembershipConfirmationView-BG9zUBwH.js"),[])},{path:"/membership",name:"membership",component:()=>Ye(()=>import("./MembershipView-m3wyjjrD.js"),__vite__mapDeps([13,14]))},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Ye(()=>import("./PlaceholderView-D8Yc6JI6.js"),[])}],scrollBehavior(t,e,n){return t.hash?{el:t.hash,behavior:"smooth"}:{top:0}}}),Eu=gE(pS);Eu.use(vE());Eu.use(aC);Eu.mount("#app");export{tt as F,vr as I,Rc as R,Yp as T,pt as _,ce as a,re as b,vs as c,M as d,Ze as e,We as f,cC as g,$t as h,Ct as i,uC as j,Qe as k,ys as l,Re as m,$r as n,ne as o,hp as p,kr as q,Cr as r,Zp as s,Se as t,Ie as u,Oo as v,Ge as w,Nl as x};
