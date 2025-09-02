const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ListservView-COkiqJxA.js","assets/ContentPage-B9kNpUa4.js","assets/ContentPage-DoamoPAO.css","assets/AwardRecognitionView-BpUICEcC.js","assets/AwardRecognitionView-BbLzey1E.css","assets/FamilyTreatmentView-CDkUwNfT.js","assets/ArticlesView-BNbUlrIp.js","assets/WebResourcesView-DeA5Gp3C.js","assets/AACAPView-DQk8m4r9.js","assets/FamilyCenteredView-Bv5JqUSQ.js","assets/PsychiatricResourcesView-BEmeubl9.js","assets/BooksView-zSymTuRr.js","assets/CultureFamilyResourcesView-BuTuDw77.js","assets/CulturalAnthropologyView-CNJDgdf8.js","assets/CurriculumInAdultPsychiatricResidencyTrainingView-lF_eCkb6.js","assets/TrainingProgramsInFamilyPsychiatryView-Uhjf7F7l.js","assets/MembershipView-BBUs8kmA.js","assets/MembershipView-C2M84lW3.css"])))=>i.map(i=>d[i]);
var z_=Object.defineProperty;var q_=(t,e,n)=>e in t?z_(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Oe=(t,e,n)=>q_(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ac(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},Jr=[],hn=()=>{},G_=()=>!1,ia=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),lc=t=>t.startsWith("onUpdate:"),tt=Object.assign,cc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},W_=Object.prototype.hasOwnProperty,Se=(t,e)=>W_.call(t,e),oe=Array.isArray,Yr=t=>oa(t)==="[object Map]",Md=t=>oa(t)==="[object Set]",fe=t=>typeof t=="function",qe=t=>typeof t=="string",hr=t=>typeof t=="symbol",Le=t=>t!==null&&typeof t=="object",Ld=t=>(Le(t)||fe(t))&&fe(t.then)&&fe(t.catch),Fd=Object.prototype.toString,oa=t=>Fd.call(t),K_=t=>oa(t).slice(8,-1),Ud=t=>oa(t)==="[object Object]",uc=t=>qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Hs=ac(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),aa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Q_=/-(\w)/g,Gt=aa(t=>t.replace(Q_,(e,n)=>n?n.toUpperCase():"")),X_=/\B([A-Z])/g,Mr=aa(t=>t.replace(X_,"-$1").toLowerCase()),la=aa(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qa=aa(t=>t?`on${la(t)}`:""),tr=(t,e)=>!Object.is(t,e),ho=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},$d=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},wl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},J_=t=>{const e=qe(t)?Number(t):NaN;return isNaN(e)?t:e};let fh;const ca=()=>fh||(fh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ms(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=qe(r)?ty(r):ms(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(qe(t)||Le(t))return t}const Y_=/;(?![^(]*\))/g,Z_=/:([^]+)/,ey=/\/\*[^]*?\*\//g;function ty(t){const e={};return t.replace(ey,"").split(Y_).forEach(n=>{if(n){const r=n.split(Z_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function bi(t){let e="";if(qe(t))e=t;else if(oe(t))for(let n=0;n<t.length;n++){const r=bi(t[n]);r&&(e+=r+" ")}else if(Le(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function ny(t){if(!t)return null;let{class:e,style:n}=t;return e&&!qe(e)&&(t.class=bi(e)),n&&(t.style=ms(n)),t}const ry="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sy=ac(ry);function Bd(t){return!!t||t===""}const jd=t=>!!(t&&t.__v_isRef===!0),je=t=>qe(t)?t:t==null?"":oe(t)||Le(t)&&(t.toString===Fd||!fe(t.toString))?jd(t)?je(t.value):JSON.stringify(t,Hd,2):String(t),Hd=(t,e)=>jd(e)?Hd(t,e.value):Yr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Xa(r,i)+" =>"]=s,n),{})}:Md(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xa(n))}:hr(e)?Xa(e):Le(e)&&!oe(e)&&!Ud(e)?String(e):e,Xa=(t,e="")=>{var n;return hr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class zd{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){++this._on===1&&(this.prevScope=Ot,Ot=this)}off(){this._on>0&&--this._on===0&&(Ot=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function iy(t){return new zd(t)}function oy(){return Ot}let Ne;const Ja=new WeakSet;class qd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ja.has(this)&&(Ja.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,dh(this),Kd(this);const e=Ne,n=Zt;Ne=this,Zt=!0;try{return this.fn()}finally{Qd(this),Ne=e,Zt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)dc(e);this.deps=this.depsTail=void 0,dh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ja.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bl(this)&&this.run()}get dirty(){return bl(this)}}let Gd=0,zs,qs;function Wd(t,e=!1){if(t.flags|=8,e){t.next=qs,qs=t;return}t.next=zs,zs=t}function hc(){Gd++}function fc(){if(--Gd>0)return;if(qs){let e=qs;for(qs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;zs;){let e=zs;for(zs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Kd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Qd(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),dc(r),ay(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function bl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Xd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Xd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===si)||(t.globalVersion=si,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!bl(t))))return;t.flags|=2;const e=t.dep,n=Ne,r=Zt;Ne=t,Zt=!0;try{Kd(t);const s=t.fn(t._value);(e.version===0||tr(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ne=n,Zt=r,Qd(t),t.flags&=-3}}function dc(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)dc(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function ay(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zt=!0;const Jd=[];function On(){Jd.push(Zt),Zt=!1}function Dn(){const t=Jd.pop();Zt=t===void 0?!0:t}function dh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ne;Ne=void 0;try{e()}finally{Ne=n}}}let si=0;class ly{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class pc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ne||!Zt||Ne===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ne)n=this.activeLink=new ly(Ne,this),Ne.deps?(n.prevDep=Ne.depsTail,Ne.depsTail.nextDep=n,Ne.depsTail=n):Ne.deps=Ne.depsTail=n,Yd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ne.depsTail,n.nextDep=void 0,Ne.depsTail.nextDep=n,Ne.depsTail=n,Ne.deps===n&&(Ne.deps=r)}return n}trigger(e){this.version++,si++,this.notify(e)}notify(e){hc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{fc()}}}function Yd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Yd(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Tl=new WeakMap,Ir=Symbol(""),Il=Symbol(""),ii=Symbol("");function Et(t,e,n){if(Zt&&Ne){let r=Tl.get(t);r||Tl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new pc),s.map=r,s.key=n),s.track()}}function In(t,e,n,r,s,i){const a=Tl.get(t);if(!a){si++;return}const l=c=>{c&&c.trigger()};if(hc(),e==="clear")a.forEach(l);else{const c=oe(t),u=c&&uc(n);if(c&&n==="length"){const f=Number(r);a.forEach((p,g)=>{(g==="length"||g===ii||!hr(g)&&g>=f)&&l(p)})}else switch((n!==void 0||a.has(void 0))&&l(a.get(n)),u&&l(a.get(ii)),e){case"add":c?u&&l(a.get("length")):(l(a.get(Ir)),Yr(t)&&l(a.get(Il)));break;case"delete":c||(l(a.get(Ir)),Yr(t)&&l(a.get(Il)));break;case"set":Yr(t)&&l(a.get(Ir));break}}fc()}function zr(t){const e=Ie(t);return e===t?e:(Et(e,"iterate",ii),qt(t)?e:e.map(ct))}function ua(t){return Et(t=Ie(t),"iterate",ii),t}const cy={__proto__:null,[Symbol.iterator](){return Ya(this,Symbol.iterator,ct)},concat(...t){return zr(this).concat(...t.map(e=>oe(e)?zr(e):e))},entries(){return Ya(this,"entries",t=>(t[1]=ct(t[1]),t))},every(t,e){return vn(this,"every",t,e,void 0,arguments)},filter(t,e){return vn(this,"filter",t,e,n=>n.map(ct),arguments)},find(t,e){return vn(this,"find",t,e,ct,arguments)},findIndex(t,e){return vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return vn(this,"findLast",t,e,ct,arguments)},findLastIndex(t,e){return vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Za(this,"includes",t)},indexOf(...t){return Za(this,"indexOf",t)},join(t){return zr(this).join(t)},lastIndexOf(...t){return Za(this,"lastIndexOf",t)},map(t,e){return vn(this,"map",t,e,void 0,arguments)},pop(){return Vs(this,"pop")},push(...t){return Vs(this,"push",t)},reduce(t,...e){return ph(this,"reduce",t,e)},reduceRight(t,...e){return ph(this,"reduceRight",t,e)},shift(){return Vs(this,"shift")},some(t,e){return vn(this,"some",t,e,void 0,arguments)},splice(...t){return Vs(this,"splice",t)},toReversed(){return zr(this).toReversed()},toSorted(t){return zr(this).toSorted(t)},toSpliced(...t){return zr(this).toSpliced(...t)},unshift(...t){return Vs(this,"unshift",t)},values(){return Ya(this,"values",ct)}};function Ya(t,e,n){const r=ua(t),s=r[e]();return r!==t&&!qt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const uy=Array.prototype;function vn(t,e,n,r,s,i){const a=ua(t),l=a!==t&&!qt(t),c=a[e];if(c!==uy[e]){const p=c.apply(t,i);return l?ct(p):p}let u=n;a!==t&&(l?u=function(p,g){return n.call(this,ct(p),g,t)}:n.length>2&&(u=function(p,g){return n.call(this,p,g,t)}));const f=c.call(a,u,r);return l&&s?s(f):f}function ph(t,e,n,r){const s=ua(t);let i=n;return s!==t&&(qt(t)?n.length>3&&(i=function(a,l,c){return n.call(this,a,l,c,t)}):i=function(a,l,c){return n.call(this,a,ct(l),c,t)}),s[e](i,...r)}function Za(t,e,n){const r=Ie(t);Et(r,"iterate",ii);const s=r[e](...n);return(s===-1||s===!1)&&_c(n[0])?(n[0]=Ie(n[0]),r[e](...n)):s}function Vs(t,e,n=[]){On(),hc();const r=Ie(t)[e].apply(t,n);return fc(),Dn(),r}const hy=ac("__proto__,__v_isRef,__isVue"),Zd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(hr));function fy(t){hr(t)||(t=String(t));const e=Ie(this);return Et(e,"has",t),e.hasOwnProperty(t)}class ep{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?by:sp:i?rp:np).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=oe(e);if(!s){let c;if(a&&(c=cy[n]))return c;if(n==="hasOwnProperty")return fy}const l=Reflect.get(e,n,bt(e)?e:r);return(hr(n)?Zd.has(n):hy(n))||(s||Et(e,"get",n),i)?l:bt(l)?a&&uc(n)?l:l.value:Le(l)?s?op(l):ha(l):l}}class tp extends ep{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=ir(i);if(!qt(r)&&!ir(r)&&(i=Ie(i),r=Ie(r)),!oe(e)&&bt(i)&&!bt(r))return c?!1:(i.value=r,!0)}const a=oe(e)&&uc(n)?Number(n)<e.length:Se(e,n),l=Reflect.set(e,n,r,bt(e)?e:s);return e===Ie(s)&&(a?tr(r,i)&&In(e,"set",n,r):In(e,"add",n,r)),l}deleteProperty(e,n){const r=Se(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&In(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!hr(n)||!Zd.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",oe(e)?"length":Ir),Reflect.ownKeys(e)}}class dy extends ep{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const py=new tp,gy=new dy,my=new tp(!0);const Al=t=>t,eo=t=>Reflect.getPrototypeOf(t);function _y(t,e,n){return function(...r){const s=this.__v_raw,i=Ie(s),a=Yr(i),l=t==="entries"||t===Symbol.iterator&&a,c=t==="keys"&&a,u=s[t](...r),f=n?Al:e?So:ct;return!e&&Et(i,"iterate",c?Il:Ir),{next(){const{value:p,done:g}=u.next();return g?{value:p,done:g}:{value:l?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function to(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function yy(t,e){const n={get(s){const i=this.__v_raw,a=Ie(i),l=Ie(s);t||(tr(s,l)&&Et(a,"get",s),Et(a,"get",l));const{has:c}=eo(a),u=e?Al:t?So:ct;if(c.call(a,s))return u(i.get(s));if(c.call(a,l))return u(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Ie(s),"iterate",Ir),Reflect.get(s,"size",s)},has(s){const i=this.__v_raw,a=Ie(i),l=Ie(s);return t||(tr(s,l)&&Et(a,"has",s),Et(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Ie(l),u=e?Al:t?So:ct;return!t&&Et(c,"iterate",Ir),l.forEach((f,p)=>s.call(i,u(f),u(p),a))}};return tt(n,t?{add:to("add"),set:to("set"),delete:to("delete"),clear:to("clear")}:{add(s){!e&&!qt(s)&&!ir(s)&&(s=Ie(s));const i=Ie(this);return eo(i).has.call(i,s)||(i.add(s),In(i,"add",s,s)),this},set(s,i){!e&&!qt(i)&&!ir(i)&&(i=Ie(i));const a=Ie(this),{has:l,get:c}=eo(a);let u=l.call(a,s);u||(s=Ie(s),u=l.call(a,s));const f=c.call(a,s);return a.set(s,i),u?tr(i,f)&&In(a,"set",s,i):In(a,"add",s,i),this},delete(s){const i=Ie(this),{has:a,get:l}=eo(i);let c=a.call(i,s);c||(s=Ie(s),c=a.call(i,s)),l&&l.call(i,s);const u=i.delete(s);return c&&In(i,"delete",s,void 0),u},clear(){const s=Ie(this),i=s.size!==0,a=s.clear();return i&&In(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=_y(s,t,e)}),n}function gc(t,e){const n=yy(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,i)}const vy={get:gc(!1,!1)},Ey={get:gc(!1,!0)},wy={get:gc(!0,!1)};const np=new WeakMap,rp=new WeakMap,sp=new WeakMap,by=new WeakMap;function Ty(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Iy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ty(K_(t))}function ha(t){return ir(t)?t:mc(t,!1,py,vy,np)}function ip(t){return mc(t,!1,my,Ey,rp)}function op(t){return mc(t,!0,gy,wy,sp)}function mc(t,e,n,r,s){if(!Le(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=Iy(t);if(i===0)return t;const a=s.get(t);if(a)return a;const l=new Proxy(t,i===2?r:n);return s.set(t,l),l}function Zr(t){return ir(t)?Zr(t.__v_raw):!!(t&&t.__v_isReactive)}function ir(t){return!!(t&&t.__v_isReadonly)}function qt(t){return!!(t&&t.__v_isShallow)}function _c(t){return t?!!t.__v_raw:!1}function Ie(t){const e=t&&t.__v_raw;return e?Ie(e):t}function ap(t){return!Se(t,"__v_skip")&&Object.isExtensible(t)&&$d(t,"__v_skip",!0),t}const ct=t=>Le(t)?ha(t):t,So=t=>Le(t)?op(t):t;function bt(t){return t?t.__v_isRef===!0:!1}function ot(t){return lp(t,!1)}function Ay(t){return lp(t,!0)}function lp(t,e){return bt(t)?t:new Ry(t,e)}class Ry{constructor(e,n){this.dep=new pc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ie(e),this._value=n?e:ct(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||qt(e)||ir(e);e=r?e:Ie(e),tr(e,n)&&(this._rawValue=e,this._value=r?e:ct(e),this.dep.trigger())}}function Pe(t){return bt(t)?t.value:t}const Sy={get:(t,e,n)=>e==="__v_raw"?t:Pe(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return bt(s)&&!bt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function cp(t){return Zr(t)?t:new Proxy(t,Sy)}class Py{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new pc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return Wd(this,!0),!0}get value(){const e=this.dep.track();return Xd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Cy(t,e,n=!1){let r,s;return fe(t)?r=t:(r=t.get,s=t.set),new Py(r,s,n)}const no={},Po=new WeakMap;let Er;function ky(t,e=!1,n=Er){if(n){let r=Po.get(n);r||Po.set(n,r=[]),r.push(t)}}function xy(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=n,u=z=>s?z:qt(z)||s===!1||s===0?An(z,1):An(z);let f,p,g,_,S=!1,k=!1;if(bt(t)?(p=()=>t.value,S=qt(t)):Zr(t)?(p=()=>u(t),S=!0):oe(t)?(k=!0,S=t.some(z=>Zr(z)||qt(z)),p=()=>t.map(z=>{if(bt(z))return z.value;if(Zr(z))return u(z);if(fe(z))return c?c(z,2):z()})):fe(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){On();try{g()}finally{Dn()}}const z=Er;Er=f;try{return c?c(t,3,[_]):t(_)}finally{Er=z}}:p=hn,e&&s){const z=p,le=s===!0?1/0:s;p=()=>An(z(),le)}const O=oy(),H=()=>{f.stop(),O&&O.active&&cc(O.effects,f)};if(i&&e){const z=e;e=(...le)=>{z(...le),H()}}let U=k?new Array(t.length).fill(no):no;const j=z=>{if(!(!(f.flags&1)||!f.dirty&&!z))if(e){const le=f.run();if(s||S||(k?le.some((se,A)=>tr(se,U[A])):tr(le,U))){g&&g();const se=Er;Er=f;try{const A=[le,U===no?void 0:k&&U[0]===no?[]:U,_];U=le,c?c(e,3,A):e(...A)}finally{Er=se}}}else f.run()};return l&&l(j),f=new qd(p),f.scheduler=a?()=>a(j,!1):j,_=z=>ky(z,!1,f),g=f.onStop=()=>{const z=Po.get(f);if(z){if(c)c(z,4);else for(const le of z)le();Po.delete(f)}},e?r?j(!0):U=f.run():a?a(j.bind(null,!0),!0):f.run(),H.pause=f.pause.bind(f),H.resume=f.resume.bind(f),H.stop=H,H}function An(t,e=1/0,n){if(e<=0||!Le(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,bt(t))An(t.value,e,n);else if(oe(t))for(let r=0;r<t.length;r++)An(t[r],e,n);else if(Md(t)||Yr(t))t.forEach(r=>{An(r,e,n)});else if(Ud(t)){for(const r in t)An(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&An(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ti(t,e,n,r){try{return r?t(...r):t()}catch(s){fa(s,e,n)}}function tn(t,e,n,r){if(fe(t)){const s=Ti(t,e,n,r);return s&&Ld(s)&&s.catch(i=>{fa(i,e,n)}),s}if(oe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(tn(t[i],e,n,r));return s}}function fa(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||De;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const f=l.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,c,u)===!1)return}l=l.parent}if(i){On(),Ti(i,null,10,[t,c,u]),Dn();return}}Oy(t,n,s,r,a)}function Oy(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Rt=[];let an=-1;const es=[];let Wn=null,qr=0;const up=Promise.resolve();let Co=null;function hp(t){const e=Co||up;return t?e.then(this?t.bind(this):t):e}function Dy(t){let e=an+1,n=Rt.length;for(;e<n;){const r=e+n>>>1,s=Rt[r],i=oi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function yc(t){if(!(t.flags&1)){const e=oi(t),n=Rt[Rt.length-1];!n||!(t.flags&2)&&e>=oi(n)?Rt.push(t):Rt.splice(Dy(e),0,t),t.flags|=1,fp()}}function fp(){Co||(Co=up.then(pp))}function Ny(t){oe(t)?es.push(...t):Wn&&t.id===-1?Wn.splice(qr+1,0,t):t.flags&1||(es.push(t),t.flags|=1),fp()}function gh(t,e,n=an+1){for(;n<Rt.length;n++){const r=Rt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Rt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function dp(t){if(es.length){const e=[...new Set(es)].sort((n,r)=>oi(n)-oi(r));if(es.length=0,Wn){Wn.push(...e);return}for(Wn=e,qr=0;qr<Wn.length;qr++){const n=Wn[qr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Wn=null,qr=0}}const oi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function pp(t){try{for(an=0;an<Rt.length;an++){const e=Rt[an];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ti(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;an<Rt.length;an++){const e=Rt[an];e&&(e.flags&=-2)}an=-1,Rt.length=0,dp(),Co=null,(Rt.length||es.length)&&pp()}}let Nt=null,gp=null;function ko(t){const e=Nt;return Nt=t,gp=t&&t.type.__scopeId||null,e}function Ke(t,e=Nt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Rh(-1);const i=ko(e);let a;try{a=t(...s)}finally{ko(i),r._d&&Rh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function xo(t,e){if(Nt===null)return t;const n=ya(Nt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=De]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&An(a),r.push({dir:i,instance:n,value:a,oldValue:void 0,arg:l,modifiers:c}))}return t}function mr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(On(),tn(c,n,8,[t.el,l,t,e]),Dn())}}const Vy=Symbol("_vte"),mp=t=>t.__isTeleport,Kn=Symbol("_leaveCb"),ro=Symbol("_enterCb");function My(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ii(()=>{t.isMounted=!0}),vc(()=>{t.isUnmounting=!0}),t}const zt=[Function,Array],_p={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:zt,onEnter:zt,onAfterEnter:zt,onEnterCancelled:zt,onBeforeLeave:zt,onLeave:zt,onAfterLeave:zt,onLeaveCancelled:zt,onBeforeAppear:zt,onAppear:zt,onAfterAppear:zt,onAppearCancelled:zt},yp=t=>{const e=t.subTree;return e.component?yp(e.component):e},Ly={name:"BaseTransition",props:_p,setup(t,{slots:e}){const n=Ov(),r=My();return()=>{const s=e.default&&wp(e.default(),!0);if(!s||!s.length)return;const i=vp(s),a=Ie(t),{mode:l}=a;if(r.isLeaving)return el(i);const c=mh(i);if(!c)return el(i);let u=Rl(c,a,r,n,p=>u=p);c.type!==St&&ai(c,u);let f=n.subTree&&mh(n.subTree);if(f&&f.type!==St&&!br(c,f)&&yp(n).type!==St){let p=Rl(f,a,r,n);if(ai(f,p),l==="out-in"&&c.type!==St)return r.isLeaving=!0,p.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,f=void 0},el(i);l==="in-out"&&c.type!==St?p.delayLeave=(g,_,S)=>{const k=Ep(r,f);k[String(f.key)]=f,g[Kn]=()=>{_(),g[Kn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function vp(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==St){e=n;break}}return e}const Fy=Ly;function Ep(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Rl(t,e,n,r,s){const{appear:i,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:f,onEnterCancelled:p,onBeforeLeave:g,onLeave:_,onAfterLeave:S,onLeaveCancelled:k,onBeforeAppear:O,onAppear:H,onAfterAppear:U,onAppearCancelled:j}=e,z=String(t.key),le=Ep(n,t),se=(y,I)=>{y&&tn(y,r,9,I)},A=(y,I)=>{const R=I[1];se(y,I),oe(y)?y.every(T=>T.length<=1)&&R():y.length<=1&&R()},v={mode:a,persisted:l,beforeEnter(y){let I=c;if(!n.isMounted)if(i)I=O||c;else return;y[Kn]&&y[Kn](!0);const R=le[z];R&&br(t,R)&&R.el[Kn]&&R.el[Kn](),se(I,[y])},enter(y){let I=u,R=f,T=p;if(!n.isMounted)if(i)I=H||u,R=U||f,T=j||p;else return;let E=!1;const ke=y[ro]=Je=>{E||(E=!0,Je?se(T,[y]):se(R,[y]),v.delayedLeave&&v.delayedLeave(),y[ro]=void 0)};I?A(I,[y,ke]):ke()},leave(y,I){const R=String(t.key);if(y[ro]&&y[ro](!0),n.isUnmounting)return I();se(g,[y]);let T=!1;const E=y[Kn]=ke=>{T||(T=!0,I(),ke?se(k,[y]):se(S,[y]),y[Kn]=void 0,le[R]===t&&delete le[R])};le[R]=t,_?A(_,[y,E]):E()},clone(y){const I=Rl(y,e,n,r,s);return s&&s(I),I}};return v}function el(t){if(da(t))return t=or(t),t.children=null,t}function mh(t){if(!da(t))return mp(t.type)&&t.children?vp(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&fe(n.default))return n.default()}}function ai(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ai(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wp(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let a=t[i];const l=n==null?a.key:String(n)+String(a.key!=null?a.key:i);a.type===ut?(a.patchFlag&128&&s++,r=r.concat(wp(a.children,e,l))):(e||a.type!==St)&&r.push(l!=null?or(a,{key:l}):a)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function bp(t,e){return fe(t)?tt({name:t.name},e,{setup:t}):t}function Tp(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Oo(t,e,n,r,s=!1){if(oe(t)){t.forEach((S,k)=>Oo(S,e&&(oe(e)?e[k]:e),n,r,s));return}if(Gs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Oo(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ya(r.component):r.el,a=s?null:i,{i:l,r:c}=t,u=e&&e.r,f=l.refs===De?l.refs={}:l.refs,p=l.setupState,g=Ie(p),_=p===De?()=>!1:S=>Se(g,S);if(u!=null&&u!==c&&(qe(u)?(f[u]=null,_(u)&&(p[u]=null)):bt(u)&&(u.value=null)),fe(c))Ti(c,l,12,[a,f]);else{const S=qe(c),k=bt(c);if(S||k){const O=()=>{if(t.f){const H=S?_(c)?p[c]:f[c]:c.value;s?oe(H)&&cc(H,i):oe(H)?H.includes(i)||H.push(i):S?(f[c]=[i],_(c)&&(p[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else S?(f[c]=a,_(c)&&(p[c]=a)):k&&(c.value=a,t.k&&(f[t.k]=a))};a?(O.id=-1,Ft(O,n)):O()}}}ca().requestIdleCallback;ca().cancelIdleCallback;const Gs=t=>!!t.type.__asyncLoader,da=t=>t.type.__isKeepAlive;function Uy(t,e){Ip(t,"a",e)}function $y(t,e){Ip(t,"da",e)}function Ip(t,e,n=ht){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(pa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)da(s.parent.vnode)&&By(r,e,n,s),s=s.parent}}function By(t,e,n,r){const s=pa(e,t,r,!0);Ec(()=>{cc(r[e],s)},n)}function pa(t,e,n=ht,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...a)=>{On();const l=Ai(n),c=tn(e,n,t,a);return l(),Dn(),c});return r?s.unshift(i):s.push(i),i}}const Ln=t=>(e,n=ht)=>{(!ci||t==="sp")&&pa(t,(...r)=>e(...r),n)},jy=Ln("bm"),Ii=Ln("m"),Hy=Ln("bu"),zy=Ln("u"),vc=Ln("bum"),Ec=Ln("um"),qy=Ln("sp"),Gy=Ln("rtg"),Wy=Ln("rtc");function Ky(t,e=ht){pa("ec",t,e)}const Ap="components",Qy="directives";function Xy(t,e){return Rp(Ap,t,!0,e)||t}const Jy=Symbol.for("v-ndc");function Yy(t){return Rp(Qy,t)}function Rp(t,e,n=!0,r=!1){const s=Nt||ht;if(s){const i=s.type;if(t===Ap){const l=Lv(i,!1);if(l&&(l===e||l===Gt(e)||l===la(Gt(e))))return i}const a=_h(s[t]||i[t],e)||_h(s.appContext[t],e);return!a&&r?i:a}}function _h(t,e){return t&&(t[e]||t[Gt(e)]||t[la(Gt(e))])}function os(t,e,n,r){let s;const i=n,a=oe(t);if(a||qe(t)){const l=a&&Zr(t);let c=!1,u=!1;l&&(c=!qt(t),u=ir(t),t=ua(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(c?u?So(ct(t[f])):ct(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(Le(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,u=l.length;c<u;c++){const f=l[c];s[c]=e(t[f],f,c,i)}}else s=[];return s}const Sl=t=>t?Kp(t)?ya(t):Sl(t.parent):null,Ws=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sl(t.parent),$root:t=>Sl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Pp(t),$forceUpdate:t=>t.f||(t.f=()=>{yc(t.update)}),$nextTick:t=>t.n||(t.n=hp.bind(t.proxy)),$watch:t=>vv.bind(t)}),tl=(t,e)=>t!==De&&!t.__isScriptSetup&&Se(t,e),Zy={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=t;let u;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(tl(r,e))return a[e]=1,r[e];if(s!==De&&Se(s,e))return a[e]=2,s[e];if((u=t.propsOptions[0])&&Se(u,e))return a[e]=3,i[e];if(n!==De&&Se(n,e))return a[e]=4,n[e];Pl&&(a[e]=0)}}const f=Ws[e];let p,g;if(f)return e==="$attrs"&&Et(t.attrs,"get",""),f(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==De&&Se(n,e))return a[e]=4,n[e];if(g=c.config.globalProperties,Se(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return tl(s,e)?(s[e]=n,!0):r!==De&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},a){let l;return!!n[a]||t!==De&&Se(t,a)||tl(e,a)||(l=i[0])&&Se(l,a)||Se(r,a)||Se(Ws,a)||Se(s.config.globalProperties,a)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yh(t){return oe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pl=!0;function ev(t){const e=Pp(t),n=t.proxy,r=t.ctx;Pl=!1,e.beforeCreate&&vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:u,created:f,beforeMount:p,mounted:g,beforeUpdate:_,updated:S,activated:k,deactivated:O,beforeDestroy:H,beforeUnmount:U,destroyed:j,unmounted:z,render:le,renderTracked:se,renderTriggered:A,errorCaptured:v,serverPrefetch:y,expose:I,inheritAttrs:R,components:T,directives:E,filters:ke}=e;if(u&&tv(u,r,null),a)for(const ye in a){const me=a[ye];fe(me)&&(r[ye]=me.bind(n))}if(s){const ye=s.call(n,n);Le(ye)&&(t.data=ha(ye))}if(Pl=!0,i)for(const ye in i){const me=i[ye],Mt=fe(me)?me.bind(n,n):fe(me.get)?me.get.bind(n,n):hn,Wt=!fe(me)&&fe(me.set)?me.set.bind(n):hn,Bt=Pt({get:Mt,set:Wt});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:$e=>Bt.value=$e})}if(l)for(const ye in l)Sp(l[ye],r,n,ye);if(c){const ye=fe(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(me=>{fo(me,ye[me])})}f&&vh(f,t,"c");function Ue(ye,me){oe(me)?me.forEach(Mt=>ye(Mt.bind(n))):me&&ye(me.bind(n))}if(Ue(jy,p),Ue(Ii,g),Ue(Hy,_),Ue(zy,S),Ue(Uy,k),Ue($y,O),Ue(Ky,v),Ue(Wy,se),Ue(Gy,A),Ue(vc,U),Ue(Ec,z),Ue(qy,y),oe(I))if(I.length){const ye=t.exposed||(t.exposed={});I.forEach(me=>{Object.defineProperty(ye,me,{get:()=>n[me],set:Mt=>n[me]=Mt})})}else t.exposed||(t.exposed={});le&&t.render===hn&&(t.render=le),R!=null&&(t.inheritAttrs=R),T&&(t.components=T),E&&(t.directives=E),y&&Tp(t)}function tv(t,e,n=hn){oe(t)&&(t=Cl(t));for(const r in t){const s=t[r];let i;Le(s)?"default"in s?i=en(s.from||r,s.default,!0):i=en(s.from||r):i=en(s),bt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function vh(t,e,n){tn(oe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sp(t,e,n,r){let s=r.includes(".")?Bp(n,r):()=>n[r];if(qe(t)){const i=e[t];fe(i)&&po(s,i)}else if(fe(t))po(s,t.bind(n));else if(Le(t))if(oe(t))t.forEach(i=>Sp(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&po(s,i,t)}}function Pp(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(u=>Do(c,u,a,!0)),Do(c,e,a)),Le(e)&&i.set(e,c),c}function Do(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Do(t,i,n,!0),s&&s.forEach(a=>Do(t,a,n,!0));for(const a in e)if(!(r&&a==="expose")){const l=nv[a]||n&&n[a];t[a]=l?l(t[a],e[a]):e[a]}return t}const nv={data:Eh,props:wh,emits:wh,methods:Bs,computed:Bs,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:Bs,directives:Bs,watch:sv,provide:Eh,inject:rv};function Eh(t,e){return e?t?function(){return tt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function rv(t,e){return Bs(Cl(t),Cl(e))}function Cl(t){if(oe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function Bs(t,e){return t?tt(Object.create(null),t,e):e}function wh(t,e){return t?oe(t)&&oe(e)?[...new Set([...t,...e])]:tt(Object.create(null),yh(t),yh(e??{})):e}function sv(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function Cp(){return{app:null,config:{isNativeTag:G_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let iv=0;function ov(t,e){return function(r,s=null){fe(r)||(r=tt({},r)),s!=null&&!Le(s)&&(s=null);const i=Cp(),a=new WeakSet,l=[];let c=!1;const u=i.app={_uid:iv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Uv,get config(){return i.config},set config(f){},use(f,...p){return a.has(f)||(f&&fe(f.install)?(a.add(f),f.install(u,...p)):fe(f)&&(a.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,g){if(!c){const _=u._ceVNode||re(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),c=!0,u._container=f,f.__vue_app__=u,ya(_.component)}},onUnmount(f){l.push(f)},unmount(){c&&(tn(l,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=ts;ts=u;try{return f()}finally{ts=p}}};return u}}let ts=null;function fo(t,e){if(ht){let n=ht.provides;const r=ht.parent&&ht.parent.provides;r===n&&(n=ht.provides=Object.create(r)),n[t]=e}}function en(t,e,n=!1){const r=ht||Nt;if(r||ts){let s=ts?ts._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}const kp={},xp=()=>Object.create(kp),Op=t=>Object.getPrototypeOf(t)===kp;function av(t,e,n,r=!1){const s={},i=xp();t.propsDefaults=Object.create(null),Dp(t,e,s,i);for(const a in t.propsOptions[0])a in s||(s[a]=void 0);n?t.props=r?s:ip(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function lv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=t,l=Ie(s),[c]=t.propsOptions;let u=!1;if((r||a>0)&&!(a&16)){if(a&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(ga(t.emitsOptions,g))continue;const _=e[g];if(c)if(Se(i,g))_!==i[g]&&(i[g]=_,u=!0);else{const S=Gt(g);s[S]=kl(c,l,S,_,t,!1)}else _!==i[g]&&(i[g]=_,u=!0)}}}else{Dp(t,e,s,i)&&(u=!0);let f;for(const p in l)(!e||!Se(e,p)&&((f=Mr(p))===p||!Se(e,f)))&&(c?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=kl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!Se(e,p))&&(delete i[p],u=!0)}u&&In(t.attrs,"set","")}function Dp(t,e,n,r){const[s,i]=t.propsOptions;let a=!1,l;if(e)for(let c in e){if(Hs(c))continue;const u=e[c];let f;s&&Se(s,f=Gt(c))?!i||!i.includes(f)?n[f]=u:(l||(l={}))[f]=u:ga(t.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,a=!0)}if(i){const c=Ie(n),u=l||De;for(let f=0;f<i.length;f++){const p=i[f];n[p]=kl(s,c,p,u[p],t,!Se(u,p))}}return a}function kl(t,e,n,r,s,i){const a=t[n];if(a!=null){const l=Se(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&fe(c)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=Ai(s);r=u[n]=c.call(null,e),f()}}else r=c;s.ce&&s.ce._setProp(n,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Mr(n))&&(r=!0))}return r}const cv=new WeakMap;function Np(t,e,n=!1){const r=n?cv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,a={},l=[];let c=!1;if(!fe(t)){const f=p=>{c=!0;const[g,_]=Np(p,e,!0);tt(a,g),_&&l.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return Le(t)&&r.set(t,Jr),Jr;if(oe(i))for(let f=0;f<i.length;f++){const p=Gt(i[f]);bh(p)&&(a[p]=De)}else if(i)for(const f in i){const p=Gt(f);if(bh(p)){const g=i[f],_=a[p]=oe(g)||fe(g)?{type:g}:tt({},g),S=_.type;let k=!1,O=!0;if(oe(S))for(let H=0;H<S.length;++H){const U=S[H],j=fe(U)&&U.name;if(j==="Boolean"){k=!0;break}else j==="String"&&(O=!1)}else k=fe(S)&&S.name==="Boolean";_[0]=k,_[1]=O,(k||Se(_,"default"))&&l.push(p)}}const u=[a,l];return Le(t)&&r.set(t,u),u}function bh(t){return t[0]!=="$"&&!Hs(t)}const wc=t=>t[0]==="_"||t==="$stable",bc=t=>oe(t)?t.map(cn):[cn(t)],uv=(t,e,n)=>{if(e._n)return e;const r=Ke((...s)=>bc(e(...s)),n);return r._c=!1,r},Vp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wc(s))continue;const i=t[s];if(fe(i))e[s]=uv(s,i,r);else if(i!=null){const a=bc(i);e[s]=()=>a}}},Mp=(t,e)=>{const n=bc(e);t.slots.default=()=>n},Lp=(t,e,n)=>{for(const r in e)(n||!wc(r))&&(t[r]=e[r])},hv=(t,e,n)=>{const r=t.slots=xp();if(t.vnode.shapeFlag&32){const s=e._;s?(Lp(r,e,n),n&&$d(r,"_",s,!0)):Vp(e,r)}else e&&Mp(t,e)},fv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,a=De;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Lp(s,e,n):(i=!e.$stable,Vp(e,s)),a=e}else e&&(Mp(t,e),a={default:1});if(i)for(const l in s)!wc(l)&&a[l]==null&&delete s[l]},Ft=Rv;function dv(t){return pv(t)}function pv(t,e){const n=ca();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:u,setElementText:f,parentNode:p,nextSibling:g,setScopeId:_=hn,insertStaticContent:S}=t,k=(w,b,P,N=null,M=null,V=null,Q=void 0,G=null,q=!!b.dynamicChildren)=>{if(w===b)return;w&&!br(w,b)&&(N=D(w),$e(w,M,V,!0),w=null),b.patchFlag===-2&&(q=!1,b.dynamicChildren=null);const{type:$,ref:te,shapeFlag:K}=b;switch($){case ma:O(w,b,P,N);break;case St:H(w,b,P,N);break;case go:w==null&&U(b,P,N,Q);break;case ut:T(w,b,P,N,M,V,Q,G,q);break;default:K&1?le(w,b,P,N,M,V,Q,G,q):K&6?E(w,b,P,N,M,V,Q,G,q):(K&64||K&128)&&$.process(w,b,P,N,M,V,Q,G,q,Y)}te!=null&&M&&Oo(te,w&&w.ref,V,b||w,!b)},O=(w,b,P,N)=>{if(w==null)r(b.el=l(b.children),P,N);else{const M=b.el=w.el;b.children!==w.children&&u(M,b.children)}},H=(w,b,P,N)=>{w==null?r(b.el=c(b.children||""),P,N):b.el=w.el},U=(w,b,P,N)=>{[w.el,w.anchor]=S(w.children,b,P,N,w.el,w.anchor)},j=({el:w,anchor:b},P,N)=>{let M;for(;w&&w!==b;)M=g(w),r(w,P,N),w=M;r(b,P,N)},z=({el:w,anchor:b})=>{let P;for(;w&&w!==b;)P=g(w),s(w),w=P;s(b)},le=(w,b,P,N,M,V,Q,G,q)=>{b.type==="svg"?Q="svg":b.type==="math"&&(Q="mathml"),w==null?se(b,P,N,M,V,Q,G,q):y(w,b,M,V,Q,G,q)},se=(w,b,P,N,M,V,Q,G)=>{let q,$;const{props:te,shapeFlag:K,transition:ee,dirs:ae}=w;if(q=w.el=a(w.type,V,te&&te.is,te),K&8?f(q,w.children):K&16&&v(w.children,q,null,N,M,nl(w,V),Q,G),ae&&mr(w,null,N,"created"),A(q,w,w.scopeId,Q,N),te){for(const de in te)de!=="value"&&!Hs(de)&&i(q,de,null,te[de],V,N);"value"in te&&i(q,"value",null,te.value,V),($=te.onVnodeBeforeMount)&&sn($,N,w)}ae&&mr(w,null,N,"beforeMount");const ne=gv(M,ee);ne&&ee.beforeEnter(q),r(q,b,P),(($=te&&te.onVnodeMounted)||ne||ae)&&Ft(()=>{$&&sn($,N,w),ne&&ee.enter(q),ae&&mr(w,null,N,"mounted")},M)},A=(w,b,P,N,M)=>{if(P&&_(w,P),N)for(let V=0;V<N.length;V++)_(w,N[V]);if(M){let V=M.subTree;if(b===V||Hp(V.type)&&(V.ssContent===b||V.ssFallback===b)){const Q=M.vnode;A(w,Q,Q.scopeId,Q.slotScopeIds,M.parent)}}},v=(w,b,P,N,M,V,Q,G,q=0)=>{for(let $=q;$<w.length;$++){const te=w[$]=G?Qn(w[$]):cn(w[$]);k(null,te,b,P,N,M,V,Q,G)}},y=(w,b,P,N,M,V,Q)=>{const G=b.el=w.el;let{patchFlag:q,dynamicChildren:$,dirs:te}=b;q|=w.patchFlag&16;const K=w.props||De,ee=b.props||De;let ae;if(P&&_r(P,!1),(ae=ee.onVnodeBeforeUpdate)&&sn(ae,P,b,w),te&&mr(b,w,P,"beforeUpdate"),P&&_r(P,!0),(K.innerHTML&&ee.innerHTML==null||K.textContent&&ee.textContent==null)&&f(G,""),$?I(w.dynamicChildren,$,G,P,N,nl(b,M),V):Q||me(w,b,G,null,P,N,nl(b,M),V,!1),q>0){if(q&16)R(G,K,ee,P,M);else if(q&2&&K.class!==ee.class&&i(G,"class",null,ee.class,M),q&4&&i(G,"style",K.style,ee.style,M),q&8){const ne=b.dynamicProps;for(let de=0;de<ne.length;de++){const ve=ne[de],pt=K[ve],nt=ee[ve];(nt!==pt||ve==="value")&&i(G,ve,pt,nt,M,P)}}q&1&&w.children!==b.children&&f(G,b.children)}else!Q&&$==null&&R(G,K,ee,P,M);((ae=ee.onVnodeUpdated)||te)&&Ft(()=>{ae&&sn(ae,P,b,w),te&&mr(b,w,P,"updated")},N)},I=(w,b,P,N,M,V,Q)=>{for(let G=0;G<b.length;G++){const q=w[G],$=b[G],te=q.el&&(q.type===ut||!br(q,$)||q.shapeFlag&198)?p(q.el):P;k(q,$,te,null,N,M,V,Q,!0)}},R=(w,b,P,N,M)=>{if(b!==P){if(b!==De)for(const V in b)!Hs(V)&&!(V in P)&&i(w,V,b[V],null,M,N);for(const V in P){if(Hs(V))continue;const Q=P[V],G=b[V];Q!==G&&V!=="value"&&i(w,V,G,Q,M,N)}"value"in P&&i(w,"value",b.value,P.value,M)}},T=(w,b,P,N,M,V,Q,G,q)=>{const $=b.el=w?w.el:l(""),te=b.anchor=w?w.anchor:l("");let{patchFlag:K,dynamicChildren:ee,slotScopeIds:ae}=b;ae&&(G=G?G.concat(ae):ae),w==null?(r($,P,N),r(te,P,N),v(b.children||[],P,te,M,V,Q,G,q)):K>0&&K&64&&ee&&w.dynamicChildren?(I(w.dynamicChildren,ee,P,M,V,Q,G),(b.key!=null||M&&b===M.subTree)&&Fp(w,b,!0)):me(w,b,P,te,M,V,Q,G,q)},E=(w,b,P,N,M,V,Q,G,q)=>{b.slotScopeIds=G,w==null?b.shapeFlag&512?M.ctx.activate(b,P,N,Q,q):ke(b,P,N,M,V,Q,q):Je(w,b,q)},ke=(w,b,P,N,M,V,Q)=>{const G=w.component=xv(w,N,M);if(da(w)&&(G.ctx.renderer=Y),Dv(G,!1,Q),G.asyncDep){if(M&&M.registerDep(G,Ue,Q),!w.el){const q=G.subTree=re(St);H(null,q,b,P)}}else Ue(G,w,b,P,M,V,Q)},Je=(w,b,P)=>{const N=b.component=w.component;if(Iv(w,b,P))if(N.asyncDep&&!N.asyncResolved){ye(N,b,P);return}else N.next=b,N.update();else b.el=w.el,N.vnode=b},Ue=(w,b,P,N,M,V,Q)=>{const G=()=>{if(w.isMounted){let{next:K,bu:ee,u:ae,parent:ne,vnode:de}=w;{const gt=Up(w);if(gt){K&&(K.el=de.el,ye(w,K,Q)),gt.asyncDep.then(()=>{w.isUnmounted||G()});return}}let ve=K,pt;_r(w,!1),K?(K.el=de.el,ye(w,K,Q)):K=de,ee&&ho(ee),(pt=K.props&&K.props.onVnodeBeforeUpdate)&&sn(pt,ne,K,de),_r(w,!0);const nt=Ih(w),jt=w.subTree;w.subTree=nt,k(jt,nt,p(jt.el),D(jt),w,M,V),K.el=nt.el,ve===null&&Av(w,nt.el),ae&&Ft(ae,M),(pt=K.props&&K.props.onVnodeUpdated)&&Ft(()=>sn(pt,ne,K,de),M)}else{let K;const{el:ee,props:ae}=b,{bm:ne,m:de,parent:ve,root:pt,type:nt}=w,jt=Gs(b);_r(w,!1),ne&&ho(ne),!jt&&(K=ae&&ae.onVnodeBeforeMount)&&sn(K,ve,b),_r(w,!0);{pt.ce&&pt.ce._injectChildStyle(nt);const gt=w.subTree=Ih(w);k(null,gt,P,N,w,M,V),b.el=gt.el}if(de&&Ft(de,M),!jt&&(K=ae&&ae.onVnodeMounted)){const gt=b;Ft(()=>sn(K,ve,gt),M)}(b.shapeFlag&256||ve&&Gs(ve.vnode)&&ve.vnode.shapeFlag&256)&&w.a&&Ft(w.a,M),w.isMounted=!0,b=P=N=null}};w.scope.on();const q=w.effect=new qd(G);w.scope.off();const $=w.update=q.run.bind(q),te=w.job=q.runIfDirty.bind(q);te.i=w,te.id=w.uid,q.scheduler=()=>yc(te),_r(w,!0),$()},ye=(w,b,P)=>{b.component=w;const N=w.vnode.props;w.vnode=b,w.next=null,lv(w,b.props,N,P),fv(w,b.children,P),On(),gh(w),Dn()},me=(w,b,P,N,M,V,Q,G,q=!1)=>{const $=w&&w.children,te=w?w.shapeFlag:0,K=b.children,{patchFlag:ee,shapeFlag:ae}=b;if(ee>0){if(ee&128){Wt($,K,P,N,M,V,Q,G,q);return}else if(ee&256){Mt($,K,P,N,M,V,Q,G,q);return}}ae&8?(te&16&&xt($,M,V),K!==$&&f(P,K)):te&16?ae&16?Wt($,K,P,N,M,V,Q,G,q):xt($,M,V,!0):(te&8&&f(P,""),ae&16&&v(K,P,N,M,V,Q,G,q))},Mt=(w,b,P,N,M,V,Q,G,q)=>{w=w||Jr,b=b||Jr;const $=w.length,te=b.length,K=Math.min($,te);let ee;for(ee=0;ee<K;ee++){const ae=b[ee]=q?Qn(b[ee]):cn(b[ee]);k(w[ee],ae,P,null,M,V,Q,G,q)}$>te?xt(w,M,V,!0,!1,K):v(b,P,N,M,V,Q,G,q,K)},Wt=(w,b,P,N,M,V,Q,G,q)=>{let $=0;const te=b.length;let K=w.length-1,ee=te-1;for(;$<=K&&$<=ee;){const ae=w[$],ne=b[$]=q?Qn(b[$]):cn(b[$]);if(br(ae,ne))k(ae,ne,P,null,M,V,Q,G,q);else break;$++}for(;$<=K&&$<=ee;){const ae=w[K],ne=b[ee]=q?Qn(b[ee]):cn(b[ee]);if(br(ae,ne))k(ae,ne,P,null,M,V,Q,G,q);else break;K--,ee--}if($>K){if($<=ee){const ae=ee+1,ne=ae<te?b[ae].el:N;for(;$<=ee;)k(null,b[$]=q?Qn(b[$]):cn(b[$]),P,ne,M,V,Q,G,q),$++}}else if($>ee)for(;$<=K;)$e(w[$],M,V,!0),$++;else{const ae=$,ne=$,de=new Map;for($=ne;$<=ee;$++){const rt=b[$]=q?Qn(b[$]):cn(b[$]);rt.key!=null&&de.set(rt.key,$)}let ve,pt=0;const nt=ee-ne+1;let jt=!1,gt=0;const $n=new Array(nt);for($=0;$<nt;$++)$n[$]=0;for($=ae;$<=K;$++){const rt=w[$];if(pt>=nt){$e(rt,M,V,!0);continue}let Ht;if(rt.key!=null)Ht=de.get(rt.key);else for(ve=ne;ve<=ee;ve++)if($n[ve-ne]===0&&br(rt,b[ve])){Ht=ve;break}Ht===void 0?$e(rt,M,V,!0):($n[Ht-ne]=$+1,Ht>=gt?gt=Ht:jt=!0,k(rt,b[Ht],P,null,M,V,Q,G,q),pt++)}const bs=jt?mv($n):Jr;for(ve=bs.length-1,$=nt-1;$>=0;$--){const rt=ne+$,Ht=b[rt],Fi=rt+1<te?b[rt+1].el:N;$n[$]===0?k(null,Ht,P,Fi,M,V,Q,G,q):jt&&(ve<0||$!==bs[ve]?Bt(Ht,P,Fi,2):ve--)}}},Bt=(w,b,P,N,M=null)=>{const{el:V,type:Q,transition:G,children:q,shapeFlag:$}=w;if($&6){Bt(w.component.subTree,b,P,N);return}if($&128){w.suspense.move(b,P,N);return}if($&64){Q.move(w,b,P,Y);return}if(Q===ut){r(V,b,P);for(let K=0;K<q.length;K++)Bt(q[K],b,P,N);r(w.anchor,b,P);return}if(Q===go){j(w,b,P);return}if(N!==2&&$&1&&G)if(N===0)G.beforeEnter(V),r(V,b,P),Ft(()=>G.enter(V),M);else{const{leave:K,delayLeave:ee,afterLeave:ae}=G,ne=()=>{w.ctx.isUnmounted?s(V):r(V,b,P)},de=()=>{K(V,()=>{ne(),ae&&ae()})};ee?ee(V,ne,de):de()}else r(V,b,P)},$e=(w,b,P,N=!1,M=!1)=>{const{type:V,props:Q,ref:G,children:q,dynamicChildren:$,shapeFlag:te,patchFlag:K,dirs:ee,cacheIndex:ae}=w;if(K===-2&&(M=!1),G!=null&&(On(),Oo(G,null,P,w,!0),Dn()),ae!=null&&(b.renderCache[ae]=void 0),te&256){b.ctx.deactivate(w);return}const ne=te&1&&ee,de=!Gs(w);let ve;if(de&&(ve=Q&&Q.onVnodeBeforeUnmount)&&sn(ve,b,w),te&6)rn(w.component,P,N);else{if(te&128){w.suspense.unmount(P,N);return}ne&&mr(w,null,b,"beforeUnmount"),te&64?w.type.remove(w,b,P,Y,N):$&&!$.hasOnce&&(V!==ut||K>0&&K&64)?xt($,b,P,!1,!0):(V===ut&&K&384||!M&&te&16)&&xt(q,b,P),N&&Be(w)}(de&&(ve=Q&&Q.onVnodeUnmounted)||ne)&&Ft(()=>{ve&&sn(ve,b,w),ne&&mr(w,null,b,"unmounted")},P)},Be=w=>{const{type:b,el:P,anchor:N,transition:M}=w;if(b===ut){Un(P,N);return}if(b===go){z(w);return}const V=()=>{s(P),M&&!M.persisted&&M.afterLeave&&M.afterLeave()};if(w.shapeFlag&1&&M&&!M.persisted){const{leave:Q,delayLeave:G}=M,q=()=>Q(P,V);G?G(w.el,V,q):q()}else V()},Un=(w,b)=>{let P;for(;w!==b;)P=g(w),s(w),w=P;s(b)},rn=(w,b,P)=>{const{bum:N,scope:M,job:V,subTree:Q,um:G,m:q,a:$,parent:te,slots:{__:K}}=w;Th(q),Th($),N&&ho(N),te&&oe(K)&&K.forEach(ee=>{te.renderCache[ee]=void 0}),M.stop(),V&&(V.flags|=8,$e(Q,w,b,P)),G&&Ft(G,b),Ft(()=>{w.isUnmounted=!0},b),b&&b.pendingBranch&&!b.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===b.pendingId&&(b.deps--,b.deps===0&&b.resolve())},xt=(w,b,P,N=!1,M=!1,V=0)=>{for(let Q=V;Q<w.length;Q++)$e(w[Q],b,P,N,M)},D=w=>{if(w.shapeFlag&6)return D(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const b=g(w.anchor||w.el),P=b&&b[Vy];return P?g(P):b};let J=!1;const X=(w,b,P)=>{w==null?b._vnode&&$e(b._vnode,null,null,!0):k(b._vnode||null,w,b,null,null,null,P),b._vnode=w,J||(J=!0,gh(),dp(),J=!1)},Y={p:k,um:$e,m:Bt,r:Be,mt:ke,mc:v,pc:me,pbc:I,n:D,o:t};return{render:X,hydrate:void 0,createApp:ov(X)}}function nl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function _r({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function gv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fp(t,e,n=!1){const r=t.children,s=e.children;if(oe(r)&&oe(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=Qn(s[i]),l.el=a.el),!n&&l.patchFlag!==-2&&Fp(a,l)),l.type===ma&&(l.el=a.el),l.type===St&&!l.el&&(l.el=a.el)}}function mv(t){const e=t.slice(),n=[0];let r,s,i,a,l;const c=t.length;for(r=0;r<c;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,a=n.length-1;i<a;)l=i+a>>1,t[n[l]]<u?i=l+1:a=l;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,a=n[i-1];i-- >0;)n[i]=a,a=e[a];return n}function Up(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Up(e)}function Th(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const _v=Symbol.for("v-scx"),yv=()=>en(_v);function po(t,e,n){return $p(t,e,n)}function $p(t,e,n=De){const{immediate:r,deep:s,flush:i,once:a}=n,l=tt({},n),c=e&&r||!e&&i!=="post";let u;if(ci){if(i==="sync"){const _=yv();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!c){const _=()=>{};return _.stop=hn,_.resume=hn,_.pause=hn,_}}const f=ht;l.call=(_,S,k)=>tn(_,f,S,k);let p=!1;i==="post"?l.scheduler=_=>{Ft(_,f&&f.suspense)}:i!=="sync"&&(p=!0,l.scheduler=(_,S)=>{S?_():yc(_)}),l.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=xy(t,e,l);return ci&&(u?u.push(g):c&&g()),g}function vv(t,e,n){const r=this.proxy,s=qe(t)?t.includes(".")?Bp(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const a=Ai(this),l=$p(s,i.bind(r),n);return a(),l}function Bp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Ev=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Gt(e)}Modifiers`]||t[`${Mr(e)}Modifiers`];function wv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),a=i&&Ev(r,e.slice(7));a&&(a.trim&&(s=n.map(f=>qe(f)?f.trim():f)),a.number&&(s=n.map(wl)));let l,c=r[l=Qa(e)]||r[l=Qa(Gt(e))];!c&&i&&(c=r[l=Qa(Mr(e))]),c&&tn(c,t,6,s);const u=r[l+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,tn(u,t,6,s)}}function jp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let a={},l=!1;if(!fe(t)){const c=u=>{const f=jp(u,e,!0);f&&(l=!0,tt(a,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(Le(t)&&r.set(t,null),null):(oe(i)?i.forEach(c=>a[c]=null):tt(a,i),Le(t)&&r.set(t,a),a)}function ga(t,e){return!t||!ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Mr(e))||Se(t,e))}function Ih(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:u,renderCache:f,props:p,data:g,setupState:_,ctx:S,inheritAttrs:k}=t,O=ko(t);let H,U;try{if(n.shapeFlag&4){const z=s||r,le=z;H=cn(u.call(le,z,f,p,_,g,S)),U=l}else{const z=e;H=cn(z.length>1?z(p,{attrs:l,slots:a,emit:c}):z(p,null)),U=e.props?l:bv(l)}}catch(z){Ks.length=0,fa(z,t,1),H=re(St)}let j=H;if(U&&k!==!1){const z=Object.keys(U),{shapeFlag:le}=j;z.length&&le&7&&(i&&z.some(lc)&&(U=Tv(U,i)),j=or(j,U,!1,!0))}return n.dirs&&(j=or(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&ai(j,n.transition),H=j,ko(O),H}const bv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ia(n))&&((e||(e={}))[n]=t[n]);return e},Tv=(t,e)=>{const n={};for(const r in t)(!lc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Iv(t,e,n){const{props:r,children:s,component:i}=t,{props:a,children:l,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Ah(r,a,u):!!a;if(c&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(a[g]!==r[g]&&!ga(u,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Ah(r,a,u):!0:!!a;return!1}function Ah(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ga(n,i))return!0}return!1}function Av({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hp=t=>t.__isSuspense;function Rv(t,e){e&&e.pendingBranch?oe(t)?e.effects.push(...t):e.effects.push(t):Ny(t)}const ut=Symbol.for("v-fgt"),ma=Symbol.for("v-txt"),St=Symbol.for("v-cmt"),go=Symbol.for("v-stc"),Ks=[];let $t=null;function ie(t=!1){Ks.push($t=t?null:[])}function Sv(){Ks.pop(),$t=Ks[Ks.length-1]||null}let li=1;function Rh(t,e=!1){li+=t,t<0&&$t&&e&&($t.hasOnce=!0)}function zp(t){return t.dynamicChildren=li>0?$t||Jr:null,Sv(),li>0&&$t&&$t.push(t),t}function he(t,e,n,r,s,i){return zp(F(t,e,n,r,s,i,!0))}function _s(t,e,n,r,s){return zp(re(t,e,n,r,s,!0))}function No(t){return t?t.__v_isVNode===!0:!1}function br(t,e){return t.type===e.type&&t.key===e.key}const qp=({key:t})=>t??null,mo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?qe(t)||bt(t)||fe(t)?{i:Nt,r:t,k:e,f:!!n}:t:null);function F(t,e=null,n=null,r=0,s=null,i=t===ut?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&qp(e),ref:e&&mo(e),scopeId:gp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Nt};return l?(Tc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=qe(n)?8:16),li>0&&!a&&$t&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&$t.push(c),c}const re=Pv;function Pv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Jy)&&(t=St),No(t)){const l=or(t,e,!0);return n&&Tc(l,n),li>0&&!i&&$t&&(l.shapeFlag&6?$t[$t.indexOf(t)]=l:$t.push(l)),l.patchFlag=-2,l}if(Fv(t)&&(t=t.__vccOpts),e){e=Gp(e);let{class:l,style:c}=e;l&&!qe(l)&&(e.class=bi(l)),Le(c)&&(_c(c)&&!oe(c)&&(c=tt({},c)),e.style=ms(c))}const a=qe(t)?1:Hp(t)?128:mp(t)?64:Le(t)?4:fe(t)?2:0;return F(t,e,n,r,s,a,i,!0)}function Gp(t){return t?_c(t)||Op(t)?tt({},t):t:null}function or(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=t,u=e?_a(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&qp(u),ref:e&&e.ref?n&&i?oe(i)?i.concat(mo(e)):[i,mo(e)]:mo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ut?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&or(t.ssContent),ssFallback:t.ssFallback&&or(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&ai(f,c.clone(f)),f}function Qe(t=" ",e=0){return re(ma,null,t,e)}function Wp(t,e){const n=re(go,null,t);return n.staticCount=e,n}function Ut(t="",e=!1){return e?(ie(),_s(St,null,t)):re(St,null,t)}function cn(t){return t==null||typeof t=="boolean"?re(St):oe(t)?re(ut,null,t.slice()):No(t)?Qn(t):re(ma,null,String(t))}function Qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:or(t)}function Tc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(oe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Tc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Op(e)?e._ctx=Nt:s===3&&Nt&&(Nt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Nt},n=32):(e=String(e),r&64?(n=16,e=[Qe(e)]):n=8);t.children=e,t.shapeFlag|=n}function _a(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=bi([e.class,r.class]));else if(s==="style")e.style=ms([e.style,r.style]);else if(ia(s)){const i=e[s],a=r[s];a&&i!==a&&!(oe(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function sn(t,e,n,r=null){tn(t,e,7,[n,r])}const Cv=Cp();let kv=0;function xv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Cv,i={uid:kv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new zd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Np(r,s),emitsOptions:jp(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=wv.bind(null,i),t.ce&&t.ce(i),i}let ht=null;const Ov=()=>ht||Nt;let Vo,xl;{const t=ca(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Vo=e("__VUE_INSTANCE_SETTERS__",n=>ht=n),xl=e("__VUE_SSR_SETTERS__",n=>ci=n)}const Ai=t=>{const e=ht;return Vo(t),t.scope.on(),()=>{t.scope.off(),Vo(e)}},Sh=()=>{ht&&ht.scope.off(),Vo(null)};function Kp(t){return t.vnode.shapeFlag&4}let ci=!1;function Dv(t,e=!1,n=!1){e&&xl(e);const{props:r,children:s}=t.vnode,i=Kp(t);av(t,r,i,e),hv(t,s,n||e);const a=i?Nv(t,e):void 0;return e&&xl(!1),a}function Nv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Zy);const{setup:r}=n;if(r){On();const s=t.setupContext=r.length>1?Mv(t):null,i=Ai(t),a=Ti(r,t,0,[t.props,s]),l=Ld(a);if(Dn(),i(),(l||t.sp)&&!Gs(t)&&Tp(t),l){if(a.then(Sh,Sh),e)return a.then(c=>{Ph(t,c)}).catch(c=>{fa(c,t,0)});t.asyncDep=a}else Ph(t,a)}else Qp(t)}function Ph(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Le(e)&&(t.setupState=cp(e)),Qp(t)}function Qp(t,e,n){const r=t.type;t.render||(t.render=r.render||hn);{const s=Ai(t);On();try{ev(t)}finally{Dn(),s()}}}const Vv={get(t,e){return Et(t,"get",""),t[e]}};function Mv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Vv),slots:t.slots,emit:t.emit,expose:e}}function ya(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(cp(ap(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ws)return Ws[n](t)},has(e,n){return n in e||n in Ws}})):t.proxy}function Lv(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function Fv(t){return fe(t)&&"__vccOpts"in t}const Pt=(t,e)=>Cy(t,e,ci);function Ic(t,e,n){const r=arguments.length;return r===2?Le(e)&&!oe(e)?No(e)?re(t,null,[e]):re(t,e):re(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&No(n)&&(n=[n]),re(t,e,n))}const Uv="3.5.16";/**
* @vue/runtime-dom v3.5.16
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ol;const Ch=typeof window<"u"&&window.trustedTypes;if(Ch)try{Ol=Ch.createPolicy("vue",{createHTML:t=>t})}catch{}const Xp=Ol?t=>Ol.createHTML(t):t=>t,$v="http://www.w3.org/2000/svg",Bv="http://www.w3.org/1998/Math/MathML",Tn=typeof document<"u"?document:null,kh=Tn&&Tn.createElement("template"),jv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Tn.createElementNS($v,t):e==="mathml"?Tn.createElementNS(Bv,t):n?Tn.createElement(t,{is:n}):Tn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Tn.createTextNode(t),createComment:t=>Tn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Tn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const a=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{kh.innerHTML=Xp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=kh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},zn="transition",Ms="animation",ui=Symbol("_vtc"),Jp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hv=tt({},_p,Jp),zv=t=>(t.displayName="Transition",t.props=Hv,t),Yp=zv((t,{slots:e})=>Ic(Fy,qv(t),e)),yr=(t,e=[])=>{oe(t)?t.forEach(n=>n(...e)):t&&t(...e)},xh=t=>t?oe(t)?t.some(e=>e.length>1):t.length>1:!1;function qv(t){const e={};for(const T in t)T in Jp||(e[T]=t[T]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:u=a,appearToClass:f=l,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,S=Gv(s),k=S&&S[0],O=S&&S[1],{onBeforeEnter:H,onEnter:U,onEnterCancelled:j,onLeave:z,onLeaveCancelled:le,onBeforeAppear:se=H,onAppear:A=U,onAppearCancelled:v=j}=e,y=(T,E,ke,Je)=>{T._enterCancelled=Je,vr(T,E?f:l),vr(T,E?u:a),ke&&ke()},I=(T,E)=>{T._isLeaving=!1,vr(T,p),vr(T,_),vr(T,g),E&&E()},R=T=>(E,ke)=>{const Je=T?A:U,Ue=()=>y(E,T,ke);yr(Je,[E,Ue]),Oh(()=>{vr(E,T?c:i),En(E,T?f:l),xh(Je)||Dh(E,r,k,Ue)})};return tt(e,{onBeforeEnter(T){yr(H,[T]),En(T,i),En(T,a)},onBeforeAppear(T){yr(se,[T]),En(T,c),En(T,u)},onEnter:R(!1),onAppear:R(!0),onLeave(T,E){T._isLeaving=!0;const ke=()=>I(T,E);En(T,p),T._enterCancelled?(En(T,g),Mh()):(Mh(),En(T,g)),Oh(()=>{T._isLeaving&&(vr(T,p),En(T,_),xh(z)||Dh(T,r,O,ke))}),yr(z,[T,ke])},onEnterCancelled(T){y(T,!1,void 0,!0),yr(j,[T])},onAppearCancelled(T){y(T,!0,void 0,!0),yr(v,[T])},onLeaveCancelled(T){I(T),yr(le,[T])}})}function Gv(t){if(t==null)return null;if(Le(t))return[rl(t.enter),rl(t.leave)];{const e=rl(t);return[e,e]}}function rl(t){return J_(t)}function En(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ui]||(t[ui]=new Set)).add(e)}function vr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[ui];n&&(n.delete(e),n.size||(t[ui]=void 0))}function Oh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Wv=0;function Dh(t,e,n,r){const s=t._endId=++Wv,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:a,timeout:l,propCount:c}=Kv(t,e);if(!a)return r();const u=a+"end";let f=0;const p=()=>{t.removeEventListener(u,g),i()},g=_=>{_.target===t&&++f>=c&&p()};setTimeout(()=>{f<c&&p()},l+1),t.addEventListener(u,g)}function Kv(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${zn}Delay`),i=r(`${zn}Duration`),a=Nh(s,i),l=r(`${Ms}Delay`),c=r(`${Ms}Duration`),u=Nh(l,c);let f=null,p=0,g=0;e===zn?a>0&&(f=zn,p=a,g=i.length):e===Ms?u>0&&(f=Ms,p=u,g=c.length):(p=Math.max(a,u),f=p>0?a>u?zn:Ms:null,g=f?f===zn?i.length:c.length:0);const _=f===zn&&/\b(transform|all)(,|$)/.test(r(`${zn}Property`).toString());return{type:f,timeout:p,propCount:g,hasTransform:_}}function Nh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Vh(n)+Vh(t[r])))}function Vh(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Mh(){return document.body.offsetHeight}function Qv(t,e,n){const r=t[ui];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Lh=Symbol("_vod"),Xv=Symbol("_vsh"),Jv=Symbol(""),Yv=/(^|;)\s*display\s*:/;function Zv(t,e,n){const r=t.style,s=qe(n);let i=!1;if(n&&!s){if(e)if(qe(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();n[l]==null&&_o(r,l,"")}else for(const a in e)n[a]==null&&_o(r,a,"");for(const a in n)a==="display"&&(i=!0),_o(r,a,n[a])}else if(s){if(e!==n){const a=r[Jv];a&&(n+=";"+a),r.cssText=n,i=Yv.test(n)}}else e&&t.removeAttribute("style");Lh in t&&(t[Lh]=i?r.display:"",t[Xv]&&(r.display="none"))}const Fh=/\s*!important$/;function _o(t,e,n){if(oe(n))n.forEach(r=>_o(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=eE(t,e);Fh.test(n)?t.setProperty(Mr(r),n.replace(Fh,""),"important"):t[r]=n}}const Uh=["Webkit","Moz","ms"],sl={};function eE(t,e){const n=sl[e];if(n)return n;let r=Gt(e);if(r!=="filter"&&r in t)return sl[e]=r;r=la(r);for(let s=0;s<Uh.length;s++){const i=Uh[s]+r;if(i in t)return sl[e]=i}return e}const $h="http://www.w3.org/1999/xlink";function Bh(t,e,n,r,s,i=sy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS($h,e.slice(6,e.length)):t.setAttributeNS($h,e,n):n==null||i&&!Bd(n)?t.removeAttribute(e):t.setAttribute(e,i?"":hr(n)?String(n):n)}function jh(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Xp(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?t.getAttribute("value")||"":t.value,c=n==null?t.type==="checkbox"?"on":"":String(n);(l!==c||!("_value"in t))&&(t.value=c),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Bd(n):n==null&&l==="string"?(n="",a=!0):l==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(s||e)}function Gr(t,e,n,r){t.addEventListener(e,n,r)}function tE(t,e,n,r){t.removeEventListener(e,n,r)}const Hh=Symbol("_vei");function nE(t,e,n,r,s=null){const i=t[Hh]||(t[Hh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=rE(e);if(r){const u=i[e]=oE(r,s);Gr(t,l,u,c)}else a&&(tE(t,l,a,c),i[e]=void 0)}}const zh=/(?:Once|Passive|Capture)$/;function rE(t){let e;if(zh.test(t)){e={};let r;for(;r=t.match(zh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mr(t.slice(2)),e]}let il=0;const sE=Promise.resolve(),iE=()=>il||(sE.then(()=>il=0),il=Date.now());function oE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;tn(aE(r,n.value),e,5,[r])};return n.value=t,n.attached=iE(),n}function aE(t,e){if(oe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const qh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,lE=(t,e,n,r,s,i)=>{const a=s==="svg";e==="class"?Qv(t,r,a):e==="style"?Zv(t,n,r):ia(e)?lc(e)||nE(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):cE(t,e,r,a))?(jh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bh(t,e,r,a,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!qe(r))?jh(t,Gt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Bh(t,e,r,a))};function cE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&qh(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return qh(e)&&qe(n)?!1:e in t}const Gh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return oe(e)?n=>ho(e,n):e};function uE(t){t.target.composing=!0}function Wh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ol=Symbol("_assign"),Dl={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ol]=Gh(s);const i=r||s.props&&s.props.type==="number";Gr(t,e?"change":"input",a=>{if(a.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=wl(l)),t[ol](l)}),n&&Gr(t,"change",()=>{t.value=t.value.trim()}),e||(Gr(t,"compositionstart",uE),Gr(t,"compositionend",Wh),Gr(t,"change",Wh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},a){if(t[ol]=Gh(a),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?wl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},hE=["ctrl","shift","alt","meta"],fE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>hE.some(n=>t[`${n}Key`]&&!e.includes(n))},Zp=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const l=fE[e[a]];if(l&&l(s,e))return}return t(s,...i)})},dE=tt({patchProp:lE},jv);let Kh;function pE(){return Kh||(Kh=dv(dE))}const gE=(...t)=>{const e=pE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=_E(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=n(s,!1,mE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function mE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function _E(t){return qe(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const yE=Symbol();var Qh;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Qh||(Qh={}));function vE(){const t=iy(!0),e=t.run(()=>ot({}));let n=[],r=[];const s=ap({install(i){s._a=i,i.provide(yE,s),i.config.globalProperties.$pinia=s,r.forEach(a=>n.push(a)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */const Wr=typeof document<"u";function eg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function EE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&eg(t.default)}const Re=Object.assign;function al(t,e){const n={};for(const r in e){const s=e[r];n[r]=nn(s)?s.map(t):t(s)}return n}const Qs=()=>{},nn=Array.isArray,tg=/#/g,wE=/&/g,bE=/\//g,TE=/=/g,IE=/\?/g,ng=/\+/g,AE=/%5B/g,RE=/%5D/g,rg=/%5E/g,SE=/%60/g,sg=/%7B/g,PE=/%7C/g,ig=/%7D/g,CE=/%20/g;function Ac(t){return encodeURI(""+t).replace(PE,"|").replace(AE,"[").replace(RE,"]")}function kE(t){return Ac(t).replace(sg,"{").replace(ig,"}").replace(rg,"^")}function Nl(t){return Ac(t).replace(ng,"%2B").replace(CE,"+").replace(tg,"%23").replace(wE,"%26").replace(SE,"`").replace(sg,"{").replace(ig,"}").replace(rg,"^")}function xE(t){return Nl(t).replace(TE,"%3D")}function OE(t){return Ac(t).replace(tg,"%23").replace(IE,"%3F")}function DE(t){return t==null?"":OE(t).replace(bE,"%2F")}function hi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const NE=/\/$/,VE=t=>t.replace(NE,"");function ll(t,e,n="/"){let r,s={},i="",a="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),a=e.slice(l,e.length)),r=UE(r??e,n),{fullPath:r+(i&&"?")+i+a,path:r,query:s,hash:hi(a)}}function ME(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function LE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&as(e.matched[r],n.matched[s])&&og(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function as(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function og(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!FE(t[n],e[n]))return!1;return!0}function FE(t,e){return nn(t)?Jh(t,e):nn(e)?Jh(e,t):t===e}function Jh(t,e){return nn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function UE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,a,l;for(a=0;a<r.length;a++)if(l=r[a],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(a).join("/")}const qn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var fi;(function(t){t.pop="pop",t.push="push"})(fi||(fi={}));var Xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xs||(Xs={}));function $E(t){if(!t)if(Wr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),VE(t)}const BE=/^[^#]+#/;function jE(t,e){return t.replace(BE,"#")+e}function HE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const va=()=>({left:window.scrollX,top:window.scrollY});function zE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=HE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Yh(t,e){return(history.state?history.state.position-e:-1)+t}const Vl=new Map;function qE(t,e){Vl.set(t,e)}function GE(t){const e=Vl.get(t);return Vl.delete(t),e}let WE=()=>location.protocol+"//"+location.host;function ag(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),Xh(c,"")}return Xh(n,t)+r+s}function KE(t,e,n,r){let s=[],i=[],a=null;const l=({state:g})=>{const _=ag(t,location),S=n.value,k=e.value;let O=0;if(g){if(n.value=_,e.value=g,a&&a===S){a=null;return}O=k?g.position-k.position:0}else r(_);s.forEach(H=>{H(n.value,S,{delta:O,type:fi.pop,direction:O?O>0?Xs.forward:Xs.back:Xs.unknown})})};function c(){a=n.value}function u(g){s.push(g);const _=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){const{history:g}=window;g.state&&g.replaceState(Re({},g.state,{scroll:va()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:u,destroy:p}}function Zh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?va():null}}function QE(t){const{history:e,location:n}=window,r={value:ag(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:WE()+t+c;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function a(c,u){const f=Re({},e.state,Zh(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,f,!0),r.value=c}function l(c,u){const f=Re({},s.value,e.state,{forward:c,scroll:va()});i(f.current,f,!0);const p=Re({},Zh(r.value,c,null),{position:f.position+1},u);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:a}}function XE(t){t=$E(t);const e=QE(t),n=KE(t,e.state,e.location,e.replace);function r(i,a=!0){a||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:jE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function JE(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),XE(t)}function YE(t){return typeof t=="string"||t&&typeof t=="object"}function lg(t){return typeof t=="string"||typeof t=="symbol"}const cg=Symbol("");var ef;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ef||(ef={}));function ls(t,e){return Re(new Error,{type:t,[cg]:!0},e)}function wn(t,e){return t instanceof Error&&cg in t&&(e==null||!!(t.type&e))}const tf="[^/]+?",ZE={sensitive:!1,strict:!1,start:!0,end:!0},ew=/[.+*?^${}()[\]/\\]/g;function tw(t,e){const n=Re({},ZE,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[90];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const g=u[p];let _=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(ew,"\\$&"),_+=40;else if(g.type===1){const{value:S,repeatable:k,optional:O,regexp:H}=g;i.push({name:S,repeatable:k,optional:O});const U=H||tf;if(U!==tf){_+=10;try{new RegExp(`(${U})`)}catch(z){throw new Error(`Invalid custom RegExp for param "${S}" (${U}): `+z.message)}}let j=k?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(j=O&&u.length<2?`(?:/${j})`:"/"+j),O&&(j+="?"),s+=j,_+=20,O&&(_+=-8),k&&(_+=-20),U===".*"&&(_+=-50)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const a=new RegExp(s,n.sensitive?"":"i");function l(u){const f=u.match(a),p={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",S=i[g-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function c(u){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of g)if(_.type===0)f+=_.value;else if(_.type===1){const{value:S,repeatable:k,optional:O}=_,H=S in u?u[S]:"";if(nn(H)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const U=nn(H)?H.join("/"):H;if(!U)if(O)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=U}}return f||"/"}return{re:a,score:r,keys:i,parse:l,stringify:c}}function nw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ug(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=nw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(nf(r))return 1;if(nf(s))return-1}return s.length-r.length}function nf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const rw={type:0,value:""},sw=/[a-zA-Z0-9_]/;function iw(t){if(!t)return[[]];if(t==="/")return[[rw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=0,r=n;const s=[];let i;function a(){i&&s.push(i),i=[]}let l=0,c,u="",f="";function p(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(u&&p(),a()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:sw.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),p(),a(),s}function ow(t,e,n){const r=tw(iw(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aw(t,e){const n=[],r=new Map;e=af({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,_){const S=!_,k=sf(p);k.aliasOf=_&&_.record;const O=af(e,p),H=[k];if("alias"in p){const z=typeof p.alias=="string"?[p.alias]:p.alias;for(const le of z)H.push(sf(Re({},k,{components:_?_.record.components:k.components,path:le,aliasOf:_?_.record:k})))}let U,j;for(const z of H){const{path:le}=z;if(g&&le[0]!=="/"){const se=g.record.path,A=se[se.length-1]==="/"?"":"/";z.path=g.record.path+(le&&A+le)}if(U=ow(z,g,O),_?_.alias.push(U):(j=j||U,j!==U&&j.alias.push(U),S&&p.name&&!of(U)&&a(p.name)),hg(U)&&c(U),k.children){const se=k.children;for(let A=0;A<se.length;A++)i(se[A],U,_&&_.children[A])}_=_||U}return j?()=>{a(j)}:Qs}function a(p){if(lg(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(a),g.alias.forEach(a))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(a),p.alias.forEach(a))}}function l(){return n}function c(p){const g=uw(p,n);n.splice(g,0,p),p.record.name&&!of(p)&&r.set(p.record.name,p)}function u(p,g){let _,S={},k,O;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw ls(1,{location:p});O=_.record.name,S=Re(rf(g.params,_.keys.filter(j=>!j.optional).concat(_.parent?_.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&rf(p.params,_.keys.map(j=>j.name))),k=_.stringify(S)}else if(p.path!=null)k=p.path,_=n.find(j=>j.re.test(k)),_&&(S=_.parse(k),O=_.record.name);else{if(_=g.name?r.get(g.name):n.find(j=>j.re.test(g.path)),!_)throw ls(1,{location:p,currentLocation:g});O=_.record.name,S=Re({},g.params,p.params),k=_.stringify(S)}const H=[];let U=_;for(;U;)H.unshift(U.record),U=U.parent;return{name:O,path:k,params:S,matched:H,meta:cw(H)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:a,clearRoutes:f,getRoutes:l,getRecordMatcher:s}}function rf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function sf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:lw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function lw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function of(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function cw(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function af(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function uw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;ug(t,e[i])<0?r=i:n=i+1}const s=hw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function hw(t){let e=t;for(;e=e.parent;)if(hg(e)&&ug(t,e)===0)return e}function hg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function fw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(ng," "),a=i.indexOf("="),l=hi(a<0?i:i.slice(0,a)),c=a<0?null:hi(i.slice(a+1));if(l in e){let u=e[l];nn(u)||(u=e[l]=[u]),u.push(c)}else e[l]=c}return e}function lf(t){let e="";for(let n in t){const r=t[n];if(n=xE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(nn(r)?r.map(i=>i&&Nl(i)):[r&&Nl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function dw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=nn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const pw=Symbol(""),cf=Symbol(""),Ea=Symbol(""),Rc=Symbol(""),Ml=Symbol("");function Ls(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Xn(t,e,n,r,s,i=a=>a()){const a=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const u=g=>{g===!1?c(ls(4,{from:n,to:e})):g instanceof Error?c(g):YE(g)?c(ls(2,{from:e,to:g})):(a&&r.enterCallbacks[s]===a&&typeof g=="function"&&a.push(g),l())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(g=>c(g))})}function cl(t,e,n,r,s=i=>i()){const i=[];for(const a of t)for(const l in a.components){let c=a.components[l];if(!(e!=="beforeRouteEnter"&&!a.instances[l]))if(eg(c)){const f=(c.__vccOpts||c)[e];f&&i.push(Xn(f,n,r,a,l,s))}else{let u=c();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${l}" at "${a.path}"`);const p=EE(f)?f.default:f;a.mods[l]=f,a.components[l]=p;const _=(p.__vccOpts||p)[e];return _&&Xn(_,n,r,a,l,s)()}))}}return i}function uf(t){const e=en(Ea),n=en(Rc),r=Pt(()=>{const c=Pe(t.to);return e.resolve(c)}),s=Pt(()=>{const{matched:c}=r.value,{length:u}=c,f=c[u-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(as.bind(null,f));if(g>-1)return g;const _=hf(c[u-2]);return u>1&&hf(f)===_&&p[p.length-1].path!==_?p.findIndex(as.bind(null,c[u-2])):g}),i=Pt(()=>s.value>-1&&yw(n.params,r.value.params)),a=Pt(()=>s.value>-1&&s.value===n.matched.length-1&&og(n.params,r.value.params));function l(c={}){if(_w(c)){const u=e[Pe(t.replace)?"replace":"push"](Pe(t.to)).catch(Qs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Pt(()=>r.value.href),isActive:i,isExactActive:a,navigate:l}}function gw(t){return t.length===1?t[0]:t}const mw=bp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:uf,setup(t,{slots:e}){const n=ha(uf(t)),{options:r}=en(Ea),s=Pt(()=>({[ff(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ff(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&gw(e.default(n));return t.custom?i:Ic("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),it=mw;function _w(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function yw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!nn(s)||s.length!==r.length||r.some((i,a)=>i!==s[a]))return!1}return!0}function hf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ff=(t,e,n)=>t??e??n,vw=bp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=en(Ml),s=Pt(()=>t.route||r.value),i=en(cf,0),a=Pt(()=>{let u=Pe(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),l=Pt(()=>s.value.matched[a.value]);fo(cf,Pt(()=>a.value+1)),fo(pw,l),fo(Ml,s);const c=ot();return po(()=>[c.value,l.value,t.name],([u,f,p],[g,_,S])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!as(f,_)||!g)&&(f.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=l.value,g=p&&p.components[f];if(!g)return df(n.default,{Component:g,route:u});const _=p.props[f],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,O=Ic(g,Re({},S,e,{onVnodeUnmounted:H=>{H.component.isUnmounted&&(p.instances[f]=null)},ref:c}));return df(n.default,{Component:O,route:u})||O}}});function df(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Sc=vw;function Ew(t){const e=aw(t.routes,t),n=t.parseQuery||fw,r=t.stringifyQuery||lf,s=t.history,i=Ls(),a=Ls(),l=Ls(),c=Ay(qn);let u=qn;Wr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=al.bind(null,D=>""+D),p=al.bind(null,DE),g=al.bind(null,hi);function _(D,J){let X,Y;return lg(D)?(X=e.getRecordMatcher(D),Y=J):Y=D,e.addRoute(Y,X)}function S(D){const J=e.getRecordMatcher(D);J&&e.removeRoute(J)}function k(){return e.getRoutes().map(D=>D.record)}function O(D){return!!e.getRecordMatcher(D)}function H(D,J){if(J=Re({},J||c.value),typeof D=="string"){const P=ll(n,D,J.path),N=e.resolve({path:P.path},J),M=s.createHref(P.fullPath);return Re(P,N,{params:g(N.params),hash:hi(P.hash),redirectedFrom:void 0,href:M})}let X;if(D.path!=null)X=Re({},D,{path:ll(n,D.path,J.path).path});else{const P=Re({},D.params);for(const N in P)P[N]==null&&delete P[N];X=Re({},D,{params:p(P)}),J.params=p(J.params)}const Y=e.resolve(X,J),be=D.hash||"";Y.params=f(g(Y.params));const w=ME(r,Re({},D,{hash:kE(be),path:Y.path})),b=s.createHref(w);return Re({fullPath:w,hash:be,query:r===lf?dw(D.query):D.query||{}},Y,{redirectedFrom:void 0,href:b})}function U(D){return typeof D=="string"?ll(n,D,c.value.path):Re({},D)}function j(D,J){if(u!==D)return ls(8,{from:J,to:D})}function z(D){return A(D)}function le(D){return z(Re(U(D),{replace:!0}))}function se(D){const J=D.matched[D.matched.length-1];if(J&&J.redirect){const{redirect:X}=J;let Y=typeof X=="function"?X(D):X;return typeof Y=="string"&&(Y=Y.includes("?")||Y.includes("#")?Y=U(Y):{path:Y},Y.params={}),Re({query:D.query,hash:D.hash,params:Y.path!=null?{}:D.params},Y)}}function A(D,J){const X=u=H(D),Y=c.value,be=D.state,w=D.force,b=D.replace===!0,P=se(X);if(P)return A(Re(U(P),{state:typeof P=="object"?Re({},be,P.state):be,force:w,replace:b}),J||X);const N=X;N.redirectedFrom=J;let M;return!w&&LE(r,Y,X)&&(M=ls(16,{to:N,from:Y}),Bt(Y,Y,!0,!1)),(M?Promise.resolve(M):I(N,Y)).catch(V=>wn(V)?wn(V,2)?V:Wt(V):me(V,N,Y)).then(V=>{if(V){if(wn(V,2))return A(Re({replace:b},U(V.to),{state:typeof V.to=="object"?Re({},be,V.to.state):be,force:w}),J||N)}else V=T(N,Y,!0,b,be);return R(N,Y,V),V})}function v(D,J){const X=j(D,J);return X?Promise.reject(X):Promise.resolve()}function y(D){const J=Un.values().next().value;return J&&typeof J.runWithContext=="function"?J.runWithContext(D):D()}function I(D,J){let X;const[Y,be,w]=ww(D,J);X=cl(Y.reverse(),"beforeRouteLeave",D,J);for(const P of Y)P.leaveGuards.forEach(N=>{X.push(Xn(N,D,J))});const b=v.bind(null,D,J);return X.push(b),xt(X).then(()=>{X=[];for(const P of i.list())X.push(Xn(P,D,J));return X.push(b),xt(X)}).then(()=>{X=cl(be,"beforeRouteUpdate",D,J);for(const P of be)P.updateGuards.forEach(N=>{X.push(Xn(N,D,J))});return X.push(b),xt(X)}).then(()=>{X=[];for(const P of w)if(P.beforeEnter)if(nn(P.beforeEnter))for(const N of P.beforeEnter)X.push(Xn(N,D,J));else X.push(Xn(P.beforeEnter,D,J));return X.push(b),xt(X)}).then(()=>(D.matched.forEach(P=>P.enterCallbacks={}),X=cl(w,"beforeRouteEnter",D,J,y),X.push(b),xt(X))).then(()=>{X=[];for(const P of a.list())X.push(Xn(P,D,J));return X.push(b),xt(X)}).catch(P=>wn(P,8)?P:Promise.reject(P))}function R(D,J,X){l.list().forEach(Y=>y(()=>Y(D,J,X)))}function T(D,J,X,Y,be){const w=j(D,J);if(w)return w;const b=J===qn,P=Wr?history.state:{};X&&(Y||b?s.replace(D.fullPath,Re({scroll:b&&P&&P.scroll},be)):s.push(D.fullPath,be)),c.value=D,Bt(D,J,X,b),Wt()}let E;function ke(){E||(E=s.listen((D,J,X)=>{if(!rn.listening)return;const Y=H(D),be=se(Y);if(be){A(Re(be,{replace:!0,force:!0}),Y).catch(Qs);return}u=Y;const w=c.value;Wr&&qE(Yh(w.fullPath,X.delta),va()),I(Y,w).catch(b=>wn(b,12)?b:wn(b,2)?(A(Re(U(b.to),{force:!0}),Y).then(P=>{wn(P,20)&&!X.delta&&X.type===fi.pop&&s.go(-1,!1)}).catch(Qs),Promise.reject()):(X.delta&&s.go(-X.delta,!1),me(b,Y,w))).then(b=>{b=b||T(Y,w,!1),b&&(X.delta&&!wn(b,8)?s.go(-X.delta,!1):X.type===fi.pop&&wn(b,20)&&s.go(-1,!1)),R(Y,w,b)}).catch(Qs)}))}let Je=Ls(),Ue=Ls(),ye;function me(D,J,X){Wt(D);const Y=Ue.list();return Y.length?Y.forEach(be=>be(D,J,X)):console.error(D),Promise.reject(D)}function Mt(){return ye&&c.value!==qn?Promise.resolve():new Promise((D,J)=>{Je.add([D,J])})}function Wt(D){return ye||(ye=!D,ke(),Je.list().forEach(([J,X])=>D?X(D):J()),Je.reset()),D}function Bt(D,J,X,Y){const{scrollBehavior:be}=t;if(!Wr||!be)return Promise.resolve();const w=!X&&GE(Yh(D.fullPath,0))||(Y||!X)&&history.state&&history.state.scroll||null;return hp().then(()=>be(D,J,w)).then(b=>b&&zE(b)).catch(b=>me(b,D,J))}const $e=D=>s.go(D);let Be;const Un=new Set,rn={currentRoute:c,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:O,getRoutes:k,resolve:H,options:t,push:z,replace:le,go:$e,back:()=>$e(-1),forward:()=>$e(1),beforeEach:i.add,beforeResolve:a.add,afterEach:l.add,onError:Ue.add,isReady:Mt,install(D){const J=this;D.component("RouterLink",it),D.component("RouterView",Sc),D.config.globalProperties.$router=J,Object.defineProperty(D.config.globalProperties,"$route",{enumerable:!0,get:()=>Pe(c)}),Wr&&!Be&&c.value===qn&&(Be=!0,z(s.location).catch(be=>{}));const X={};for(const be in qn)Object.defineProperty(X,be,{get:()=>c.value[be],enumerable:!0});D.provide(Ea,J),D.provide(Rc,ip(X)),D.provide(Ml,c);const Y=D.unmount;Un.add(D),D.unmount=function(){Un.delete(D),Un.size<1&&(u=qn,E&&E(),E=null,c.value=qn,Be=!1,ye=!1),Y()}}};function xt(D){return D.reduce((J,X)=>J.then(()=>y(X)),Promise.resolve())}return rn}function ww(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let a=0;a<i;a++){const l=e.matched[a];l&&(t.matched.find(u=>as(u,l))?r.push(l):n.push(l));const c=t.matched[a];c&&(e.matched.find(u=>as(u,c))||s.push(c))}return[n,r,s]}function sC(){return en(Ea)}function iC(t){return en(Rc)}const kt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},bw={class:"header"},Tw={class:"nav desktop-nav"},Iw={key:0,class:"nav mobile-drawer"},Aw={__name:"Header",setup(t){const e=ot(!1);function n(r){const s=document.querySelector(".mobile-drawer"),i=document.querySelector(".hamburger");e.value&&s&&!s.contains(r.target)&&!i.contains(r.target)&&(e.value=!1)}return Ii(()=>{document.addEventListener("click",n)}),vc(()=>{document.removeEventListener("click",n)}),(r,s)=>(ie(),he("header",bw,[re(Pe(it),{to:"/",class:"logo"},{default:Ke(()=>s[6]||(s[6]=[Qe("Association of Family Psychiatrists")])),_:1,__:[6]}),F("button",{class:"hamburger",onClick:s[0]||(s[0]=i=>e.value=!e.value),"aria-label":"Toggle Menu"},"☰"),F("nav",Tw,[re(Pe(it),{to:"/about","exact-active-class":"active",class:"nav-link"},{default:Ke(()=>s[7]||(s[7]=[Qe("About")])),_:1,__:[7]}),re(Pe(it),{to:"/resources","exact-active-class":"active",class:"nav-link"},{default:Ke(()=>s[8]||(s[8]=[Qe("Resources")])),_:1,__:[8]}),re(Pe(it),{to:"/events","exact-active-class":"active",class:"nav-link"},{default:Ke(()=>s[9]||(s[9]=[Qe("Events")])),_:1,__:[9]}),re(Pe(it),{to:"/members","exact-active-class":"active",class:"nav-link"},{default:Ke(()=>s[10]||(s[10]=[Qe("Members")])),_:1,__:[10]}),re(Pe(it),{to:"/membership",class:"member-button"},{default:Ke(()=>s[11]||(s[11]=[Qe("Become a Member")])),_:1,__:[11]})]),re(Yp,{name:"slide"},{default:Ke(()=>[e.value?(ie(),he("nav",Iw,[re(Pe(it),{to:"/about","exact-active-class":"active",onClick:s[1]||(s[1]=i=>e.value=!1)},{default:Ke(()=>s[12]||(s[12]=[Qe("About")])),_:1,__:[12]}),re(Pe(it),{to:"/resources","exact-active-class":"active",onClick:s[2]||(s[2]=i=>e.value=!1)},{default:Ke(()=>s[13]||(s[13]=[Qe("Resources")])),_:1,__:[13]}),re(Pe(it),{to:"/members","exact-active-class":"active",onClick:s[3]||(s[3]=i=>e.value=!1)},{default:Ke(()=>s[14]||(s[14]=[Qe("Members")])),_:1,__:[14]}),re(Pe(it),{to:"/events","exact-active-class":"active",onClick:s[4]||(s[4]=i=>e.value=!1)},{default:Ke(()=>s[15]||(s[15]=[Qe("Events")])),_:1,__:[15]}),re(Pe(it),{to:"/membership",onClick:s[5]||(s[5]=i=>e.value=!1),class:"member-button mobile-member-button"},{default:Ke(()=>s[16]||(s[16]=[Qe(" Become a Member ")])),_:1,__:[16]})])):Ut("",!0)]),_:1})]))}},Rw=kt(Aw,[["__scopeId","data-v-26cdc8df"]]),Sw=()=>{};var pf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Pw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},dg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,l=a?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,f=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|u>>6,_=u&63;c||(_=64,a||(g=64)),r.push(n[f],n[p],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||u==null||p==null)throw new Cw;const g=i<<2|l>>4;if(r.push(g),u!==64){const _=l<<4&240|u>>2;if(r.push(_),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Cw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const kw=function(t){const e=fg(t);return dg.encodeByteArray(e,!0)},Mo=function(t){return kw(t).replace(/\./g,"")},pg=function(t){try{return dg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const Ow=()=>xw().__FIREBASE_DEFAULTS__,Dw=()=>{if(typeof process>"u"||typeof pf>"u")return;const t=pf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Nw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&pg(t[1]);return e&&JSON.parse(e)},wa=()=>{try{return Sw()||Ow()||Dw()||Nw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gg=t=>{var e,n;return(n=(e=wa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Vw=t=>{const e=gg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},mg=()=>{var t;return(t=wa())===null||t===void 0?void 0:t.config},_g=t=>{var e;return(e=wa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Lw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Mo(JSON.stringify(n)),Mo(JSON.stringify(a)),""].join(".")}const Js={};function Fw(){const t={prod:[],emulator:[]};for(const e of Object.keys(Js))Js[e]?t.emulator.push(e):t.prod.push(e);return t}function Uw(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let gf=!1;function vg(t,e){if(typeof window>"u"||typeof document>"u"||!Ri(window.location.host)||Js[t]===e||Js[t]||gf)return;Js[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=Fw().prod.length>0;function a(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function c(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{gf=!0,a()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function p(){const g=Uw(r),_=n("text"),S=document.getElementById(_)||document.createElement("span"),k=n("learnmore"),O=document.getElementById(k)||document.createElement("a"),H=n("preprendIcon"),U=document.getElementById(H)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const j=g.element;l(j),f(O,k);const z=u();c(U,H),j.append(U,S,O,z),document.body.appendChild(j)}i?(S.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $w(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function Bw(){var t;const e=(t=wa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Hw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qw(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Gw(){return!Bw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ww(){try{return typeof indexedDB=="object"}catch{return!1}}function Kw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Qw,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Xw(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Fn(s,l,r)}}function Xw(t,e){return t.replace(Jw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Jw=/\{\$([^}]+)}/g;function Yw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(mf(i)&&mf(a)){if(!Pr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function mf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zw(t,e){const n=new eb(t,e);return n.subscribe.bind(n)}class eb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=ul),s.error===void 0&&(s.error=ul),s.complete===void 0&&(s.complete=ul);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ul(){}/**
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
 */function pn(t){return t&&t._delegate?t._delegate:t}class Cr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const ob={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},ab=_e.INFO,lb={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},cb=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=lb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pc{constructor(e){this.name=e,this._logLevel=ab,this._logHandler=cb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ob[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const ub=(t,e)=>e.some(n=>t instanceof n);let _f,yf;function hb(){return _f||(_f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fb(){return yf||(yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Eg=new WeakMap,Ll=new WeakMap,wg=new WeakMap,hl=new WeakMap,Cc=new WeakMap;function db(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(nr(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Eg.set(n,t)}).catch(()=>{}),Cc.set(e,t),e}function pb(t){if(Ll.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});Ll.set(t,e)}let Fl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ll.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return nr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function gb(t){Fl=t(Fl)}function mb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fl(this),e,...n);return wg.set(r,e.sort?e.sort():[e]),nr(r)}:fb().includes(t)?function(...e){return t.apply(fl(this),e),nr(Eg.get(this))}:function(...e){return nr(t.apply(fl(this),e))}}function _b(t){return typeof t=="function"?mb(t):(t instanceof IDBTransaction&&pb(t),ub(t,hb())?new Proxy(t,Fl):t)}function nr(t){if(t instanceof IDBRequest)return db(t);if(hl.has(t))return hl.get(t);const e=_b(t);return e!==t&&(hl.set(t,e),Cc.set(e,t)),e}const fl=t=>Cc.get(t);function yb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),l=nr(a);return r&&a.addEventListener("upgradeneeded",c=>{r(nr(a.result),c.oldVersion,c.newVersion,nr(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const vb=["get","getKey","getAll","getAllKeys","count"],Eb=["put","add","delete","clear"],dl=new Map;function vf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dl.get(e))return dl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Eb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vb.includes(n)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),s&&c.done]))[0]};return dl.set(e,i),i}gb(t=>({...t,get:(e,n,r)=>vf(e,n)||t.get(e,n,r),has:(e,n)=>!!vf(e,n)||t.has(e,n)}));/**
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
 */const Nn=new Pc("@firebase/app"),Tb="@firebase/app-compat",Ib="@firebase/analytics-compat",Ab="@firebase/analytics",Rb="@firebase/app-check-compat",Sb="@firebase/app-check",Pb="@firebase/auth",Cb="@firebase/auth-compat",kb="@firebase/database",xb="@firebase/data-connect",Ob="@firebase/database-compat",Db="@firebase/functions",Nb="@firebase/functions-compat",Vb="@firebase/installations",Mb="@firebase/installations-compat",Lb="@firebase/messaging",Fb="@firebase/messaging-compat",Ub="@firebase/performance",$b="@firebase/performance-compat",Bb="@firebase/remote-config",jb="@firebase/remote-config-compat",Hb="@firebase/storage",zb="@firebase/storage-compat",qb="@firebase/firestore",Gb="@firebase/ai",Wb="@firebase/firestore-compat",Kb="firebase",Qb="11.8.0";/**
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
 */const $l="[DEFAULT]",Xb={[Ul]:"fire-core",[Tb]:"fire-core-compat",[Ab]:"fire-analytics",[Ib]:"fire-analytics-compat",[Sb]:"fire-app-check",[Rb]:"fire-app-check-compat",[Pb]:"fire-auth",[Cb]:"fire-auth-compat",[kb]:"fire-rtdb",[xb]:"fire-data-connect",[Ob]:"fire-rtdb-compat",[Db]:"fire-fn",[Nb]:"fire-fn-compat",[Vb]:"fire-iid",[Mb]:"fire-iid-compat",[Lb]:"fire-fcm",[Fb]:"fire-fcm-compat",[Ub]:"fire-perf",[$b]:"fire-perf-compat",[Bb]:"fire-rc",[jb]:"fire-rc-compat",[Hb]:"fire-gcs",[zb]:"fire-gcs-compat",[qb]:"fire-fst",[Wb]:"fire-fst-compat",[Gb]:"fire-vertex","fire-js":"fire-js",[Kb]:"fire-js-all"};/**
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
 */const Lo=new Map,Jb=new Map,Bl=new Map;function wf(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function cs(t){const e=t.name;if(Bl.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;Bl.set(e,t);for(const n of Lo.values())wf(n,t);for(const n of Jb.values())wf(n,t);return!0}function kc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function un(t){return t==null?!1:t.settings!==void 0}/**
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
 */const Yb={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rr=new Si("app","Firebase",Yb);/**
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
 */class Zb{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Cr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw rr.create("app-deleted",{appName:this._name})}}/**
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
 */const ys=Qb;function bg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:$l,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw rr.create("bad-app-name",{appName:String(s)});if(n||(n=mg()),!n)throw rr.create("no-options");const i=Lo.get(s);if(i){if(Pr(n,i.options)&&Pr(r,i.config))return i;throw rr.create("duplicate-app",{appName:s})}const a=new ib(s);for(const c of Bl.values())a.addComponent(c);const l=new Zb(n,r,a);return Lo.set(s,l),l}function Tg(t=$l){const e=Lo.get(t);if(!e&&t===$l&&mg())return bg();if(!e)throw rr.create("no-app",{appName:t});return e}function sr(t,e,n){var r;let s=(r=Xb[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(l.join(" "));return}cs(new Cr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const eT="firebase-heartbeat-database",tT=1,di="firebase-heartbeat-store";let pl=null;function Ig(){return pl||(pl=yb(eT,tT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(di)}catch(n){console.warn(n)}}}}).catch(t=>{throw rr.create("idb-open",{originalErrorMessage:t.message})})),pl}async function nT(t){try{const n=(await Ig()).transaction(di),r=await n.objectStore(di).get(Ag(t));return await n.done,r}catch(e){if(e instanceof Fn)Nn.warn(e.message);else{const n=rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function bf(t,e){try{const r=(await Ig()).transaction(di,"readwrite");await r.objectStore(di).put(e,Ag(t)),await r.done}catch(n){if(n instanceof Fn)Nn.warn(n.message);else{const r=rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function Ag(t){return`${t.name}!${t.options.appId}`}/**
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
 */const rT=1024,sT=30;class iT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new aT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>sT){const a=lT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tf(),{heartbeatsToSend:r,unsentEntries:s}=oT(this._heartbeatsCache.heartbeats),i=Mo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Nn.warn(n),""}}}function Tf(){return new Date().toISOString().substring(0,10)}function oT(t,e=rT){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),If(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),If(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class aT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ww()?Kw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await nT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return bf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function If(t){return Mo(JSON.stringify({version:2,heartbeats:t})).length}function lT(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function cT(t){cs(new Cr("platform-logger",e=>new wb(e),"PRIVATE")),cs(new Cr("heartbeat",e=>new iT(e),"PRIVATE")),sr(Ul,Ef,t),sr(Ul,Ef,"esm2017"),sr("fire-js","")}cT("");var uT="firebase",hT="11.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr(uT,hT,"app");function xc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Rg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const fT=Rg,Sg=new Si("auth","Firebase",Rg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fo=new Pc("@firebase/auth");function dT(t,...e){Fo.logLevel<=_e.WARN&&Fo.warn(`Auth (${ys}): ${t}`,...e)}function yo(t,...e){Fo.logLevel<=_e.ERROR&&Fo.error(`Auth (${ys}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(t,...e){throw Oc(t,...e)}function fn(t,...e){return Oc(t,...e)}function Pg(t,e,n){const r=Object.assign(Object.assign({},fT()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function Ar(t){return Pg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sg.create(t,...e)}function ce(t,e,...n){if(!t)throw Oc(e,...n)}function Rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yo(e),new Error(e)}function Mn(t,e){t||Rn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function pT(){return Af()==="http:"||Af()==="https:"}function Af(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ci{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=$w()||zw()}get(){return gT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const yT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vT=new Ci(3e4,6e4);function Nc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vs(t,e,n,r,s={}){return kg(t,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=Pi(Object.assign({key:t.config.apiKey},a)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:c},i);return jw()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Ri(t.emulatorConfig.host)&&(u.credentials="include"),Cg.fetch()(await xg(t,t.config.apiHost,n,l),u)})}async function kg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},_T),e);try{const s=new wT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw so(t,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,u]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw so(t,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw so(t,"email-already-in-use",a);if(c==="USER_DISABLED")throw so(t,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Pg(t,f,u);Vn(t,f)}}catch(s){if(s instanceof Fn)throw s;Vn(t,"network-request-failed",{message:String(s)})}}async function ET(t,e,n,r,s={}){const i=await vs(t,e,n,r,s);return"mfaPendingCredential"in i&&Vn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function xg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,a=i.config.emulator?Dc(t.config,s):`${t.config.apiScheme}://${s}`;return yT.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class wT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),vT.get())})}}function so(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bT(t,e){return vs(t,"POST","/v1/accounts:delete",e)}async function Uo(t,e){return vs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function TT(t,e=!1){const n=pn(t),r=await n.getIdToken(e),s=Vc(r);ce(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ys(gl(s.auth_time)),issuedAtTime:Ys(gl(s.iat)),expirationTime:Ys(gl(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gl(t){return Number(t)*1e3}function Vc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return yo("JWT malformed, contained fewer than 3 sections"),null;try{const s=pg(n);return s?JSON.parse(s):(yo("Failed to decode base64 JWT payload"),null)}catch(s){return yo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rf(t){const e=Vc(t);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&IT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function IT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ys(this.lastLoginAt),this.creationTime=Ys(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function $o(t){var e;const n=t.auth,r=await t.getIdToken(),s=await pi(t,Uo(n,{idToken:r}));ce(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Og(i.providerUserInfo):[],l=ST(t.providerData,a),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=c?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Hl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function RT(t){const e=pn(t);await $o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ST(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Og(t){return t.map(e=>{var{providerId:n}=e,r=xc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(t,e){const n=await kg(t,{},async()=>{const r=Pi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,a=await xg(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Cg.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function CT(t,e){return vs(t,"POST","/v2/accounts:revokeToken",Nc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const n=Rf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await PT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,a=new ns;return r&&(ce(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ce(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ce(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ns,this.toJSON())}_performRefresh(){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gn(t,e){ce(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=xc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await pi(this,this.stsTokenManager.getToken(this.auth,e));return ce(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return TT(this,e)}reload(){return RT(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $o(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(un(this.auth.app))return Promise.reject(Ar(this.auth));const e=await this.getIdToken();return await pi(this,bT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,a,l,c,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(a=n.photoURL)!==null&&a!==void 0?a:void 0,k=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,H=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:z,isAnonymous:le,providerData:se,stsTokenManager:A}=n;ce(j&&A,e,"internal-error");const v=ns.fromJSON(this.name,A);ce(typeof j=="string",e,"internal-error"),Gn(p,e.name),Gn(g,e.name),ce(typeof z=="boolean",e,"internal-error"),ce(typeof le=="boolean",e,"internal-error"),Gn(_,e.name),Gn(S,e.name),Gn(k,e.name),Gn(O,e.name),Gn(H,e.name),Gn(U,e.name);const y=new Jt({uid:j,auth:e,email:g,emailVerified:z,displayName:p,isAnonymous:le,photoURL:S,phoneNumber:_,tenantId:k,stsTokenManager:v,createdAt:H,lastLoginAt:U});return se&&Array.isArray(se)&&(y.providerData=se.map(I=>Object.assign({},I))),O&&(y._redirectEventId=O),y}static async _fromIdTokenResponse(e,n,r=!1){const s=new ns;s.updateFromServerResponse(n);const i=new Jt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $o(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ce(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Og(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new ns;l.updateFromIdToken(r);const c=new Jt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Hl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,u),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sf=new Map;function Sn(t){Mn(t instanceof Function,"Expected a class definition");let e=Sf.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sf.set(t,e),e)}/**
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
 */class Dg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dg.type="NONE";const Pf=Dg;/**
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
 */function vo(t,e,n){return`firebase:${t}:${e}:${n}`}class rs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=vo(this.userKey,s.apiKey,i),this.fullPersistenceKey=vo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Uo(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new rs(Sn(Pf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Sn(Pf);const a=vo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const f=await u._get(a);if(f){let p;if(typeof f=="string"){const g=await Uo(e,{idToken:f}).catch(()=>{});if(!g)break;p=await Jt._fromGetAccountInfoResponse(e,g,f)}else p=Jt._fromJSON(e,f);u!==i&&(l=p),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new rs(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(a)}catch{}})),new rs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Lg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ng(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ug(e))return"Blackberry";if($g(e))return"Webos";if(Vg(e))return"Safari";if((e.includes("chrome/")||Mg(e))&&!e.includes("edge/"))return"Chrome";if(Fg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ng(t=Tt()){return/firefox\//i.test(t)}function Vg(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Mg(t=Tt()){return/crios\//i.test(t)}function Lg(t=Tt()){return/iemobile/i.test(t)}function Fg(t=Tt()){return/android/i.test(t)}function Ug(t=Tt()){return/blackberry/i.test(t)}function $g(t=Tt()){return/webos/i.test(t)}function Mc(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kT(t=Tt()){var e;return Mc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function xT(){return qw()&&document.documentMode===10}function Bg(t=Tt()){return Mc(t)||Fg(t)||$g(t)||Ug(t)||/windows phone/i.test(t)||Lg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jg(t,e=[]){let n;switch(t){case"Browser":n=Cf(Tt());break;case"Worker":n=`${Cf(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ys}/${r}`}/**
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
 */async function DT(t,e={}){return vs(t,"GET","/v2/passwordPolicy",Nc(t,e))}/**
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
 */class MT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kf(this),this.idTokenSubscription=new kf(this),this.beforeStateQueue=new OT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await rs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Uo(this,{idToken:e}),r=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(un(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $o(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=mT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(un(this.app))return Promise.reject(Ar(this));const n=e?pn(e):null;return n&&ce(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return un(this.app)?Promise.reject(Ar(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return un(this.app)?Promise.reject(Ar(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DT(this),n=new VT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await CT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;ce(n,this,"argument-error"),this.redirectPersistenceManager=await rs.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(n);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&dT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lc(t){return pn(t)}class kf{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zw(n=>this.observer=n)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Fc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function LT(t){Fc=t}function FT(t){return Fc.loadJS(t)}function UT(){return Fc.gapiScript}function $T(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(t,e){const n=kc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Pr(i,e??{}))return s;Vn(s,"already-initialized")}return n.initialize({options:e})}function jT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function HT(t,e,n){const r=Lc(t);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Hg(e),{host:a,port:l}=zT(e),c=l===null?"":`:${l}`,u={url:`${i}//${a}${c}/`},f=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(Pr(u,r.config.emulator)&&Pr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Ri(a)?(yg(`${i}//${a}${c}`),vg("Auth",!0)):qT()}function Hg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zT(t){const e=Hg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xf(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:xf(a)}}}function xf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Rn("not implemented")}_getIdTokenResponse(e){return Rn("not implemented")}_linkToIdToken(e,n){return Rn("not implemented")}_getReauthenticationResolver(e){return Rn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(t,e){return ET(t,"POST","/v1/accounts:signInWithIdp",Nc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GT="http://localhost";class kr extends zg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=xc(n,["providerId","signInMethod"]);if(!r||!s)return null;const a=new kr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ss(e,n)}buildRequest(){const e={requestUri:GT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Pi(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ki extends qg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jn extends ki{constructor(){super("facebook.com")}static credential(e){return kr._fromParams({providerId:Jn.PROVIDER_ID,signInMethod:Jn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jn.credentialFromTaggedObject(e)}static credentialFromError(e){return Jn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jn.credential(e.oauthAccessToken)}catch{return null}}}Jn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Jn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.GOOGLE_SIGN_IN_METHOD="google.com";Yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends ki{constructor(){super("github.com")}static credential(e){return kr._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.GITHUB_SIGN_IN_METHOD="github.com";Zn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends ki{constructor(){super("twitter.com")}static credential(e,n){return kr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return er.credential(n,r)}catch{return null}}}er.TWITTER_SIGN_IN_METHOD="twitter.com";er.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Jt._fromIdTokenResponse(e,r,s),a=Of(r);return new us({user:i,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Of(r);return new us({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Of(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo extends Fn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Bo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Bo(e,n,r,s)}}function Gg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Bo._fromErrorAndOperation(t,i,e,r):i})}async function WT(t,e,n=!1){const r=await pi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
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
 */async function KT(t,e,n=!1){const{auth:r}=t;if(un(r.app))return Promise.reject(Ar(r));const s="reauthenticate";try{const i=await pi(t,Gg(r,s,e,t),n);ce(i.idToken,r,"internal-error");const a=Vc(i.idToken);ce(a,r,"internal-error");const{sub:l}=a;return ce(t.uid===l,r,"user-mismatch"),us._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QT(t,e,n=!1){if(un(t.app))return Promise.reject(Ar(t));const r="signIn",s=await Gg(t,r,e),i=await us._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function XT(t,e,n,r){return pn(t).onIdTokenChanged(e,n,r)}function JT(t,e,n){return pn(t).beforeAuthStateChanged(e,n)}const jo="__sak";/**
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
 */class Wg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jo,"1"),this.storage.removeItem(jo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Qg extends Wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qg.type="SESSION";const Xg=Qg;/**
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
 */class ba{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ba(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async u=>u(n.origin,i)),c=await t0(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ba.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class n0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const u=Uc("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Jg(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function s0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function i0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function o0(){return Jg()?self:null}/**
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
 */const Yg="firebaseLocalStorageDb",a0=1,Ho="firebaseLocalStorage",Zg="fbase_key";class xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ta(t,e){return t.transaction([Ho],e?"readwrite":"readonly").objectStore(Ho)}function l0(){const t=indexedDB.deleteDatabase(Yg);return new xi(t).toPromise()}function zl(){const t=indexedDB.open(Yg,a0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ho,{keyPath:Zg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ho)?e(r):(r.close(),await l0(),e(await zl()))})})}async function Df(t,e,n){const r=Ta(t,!0).put({[Zg]:e,value:n});return new xi(r).toPromise()}async function c0(t,e){const n=Ta(t,!1).get(e),r=await new xi(n).toPromise();return r===void 0?null:r.value}function Nf(t,e){const n=Ta(t,!0).delete(e);return new xi(n).toPromise()}const u0=800,h0=3;class em{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>h0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ba._getInstance(o0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await s0(),!this.activeServiceWorker)return;this.sender=new n0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||i0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zl();return await Df(e,jo,"1"),await Nf(e,jo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Df(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>c0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ta(s,!1).getAll();return new xi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),u0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}em.type="LOCAL";const f0=em;new Ci(3e4,6e4);/**
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
 */function d0(t,e){return e?Sn(e):(ce(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $c extends zg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function p0(t){return QT(t.auth,new $c(t),t.bypassAuthState)}function g0(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),KT(n,new $c(t),t.bypassAuthState)}async function m0(t){const{auth:e,user:n}=t;return ce(n,e,"internal-error"),WT(n,new $c(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return p0;case"linkViaPopup":case"linkViaRedirect":return m0;case"reauthViaPopup":case"reauthViaRedirect":return g0;default:Vn(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=new Ci(2e3,1e4);class Xr extends tm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=Uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_0.get())};e()}}Xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="pendingRedirect",Eo=new Map;class v0 extends tm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Eo.get(this.auth._key());if(!e){try{const r=await E0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Eo.set(this.auth._key(),e)}return this.bypassAuthState||Eo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function E0(t,e){const n=T0(e),r=b0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function w0(t,e){Eo.set(t._key(),e)}function b0(t){return Sn(t._redirectPersistence)}function T0(t){return vo(y0,t.config.apiKey,t.name)}async function I0(t,e,n=!1){if(un(t.app))return Promise.reject(Ar(t));const r=Lc(t),s=d0(r,e),a=await new v0(r,s,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=10*60*1e3;class R0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!S0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!nm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=A0&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vf(e))}saveEventToCache(e){this.cachedEventUids.add(Vf(e)),this.lastProcessedEventTime=Date.now()}}function Vf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function nm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function S0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return nm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P0(t,e={}){return vs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,k0=/^https?/;async function x0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await P0(t);for(const n of e)try{if(O0(n))return}catch{}Vn(t,"unauthorized-domain")}function O0(t){const e=jl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!k0.test(n))return!1;if(C0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const D0=new Ci(3e4,6e4);function Mf(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function N0(t){return new Promise((e,n)=>{var r,s,i;function a(){Mf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mf(),n(fn(t,"network-request-failed"))},timeout:D0.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)a();else{const l=$T("iframefcb");return dn()[l]=()=>{gapi.load?a():n(fn(t,"network-request-failed"))},FT(`${UT()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw wo=null,e})}let wo=null;function V0(t){return wo=wo||N0(t),wo}/**
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
 */const M0=new Ci(5e3,15e3),L0="__/auth/iframe",F0="emulator/auth/iframe",U0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function B0(t){const e=t.config;ce(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Dc(e,F0):`https://${t.config.authDomain}/${L0}`,r={apiKey:e.apiKey,appName:t.name,v:ys},s=$0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Pi(r).slice(1)}`}async function j0(t){const e=await V0(t),n=dn().gapi;return ce(n,t,"internal-error"),e.open({where:document.body,url:B0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:U0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=fn(t,"network-request-failed"),l=dn().setTimeout(()=>{i(a)},M0.get());function c(){dn().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const H0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},z0=500,q0=600,G0="_blank",W0="http://localhost";class Lf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function K0(t,e,n,r=z0,s=q0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},H0),{width:r.toString(),height:s.toString(),top:i,left:a}),u=Tt().toLowerCase();n&&(l=Mg(u)?G0:n),Ng(u)&&(e=e||W0,c.scrollbars="yes");const f=Object.entries(c).reduce((g,[_,S])=>`${g}${_}=${S},`,"");if(kT(u)&&l!=="_self")return Q0(e||"",l),new Lf(null);const p=window.open(e||"",l,f);ce(p,t,"popup-blocked");try{p.focus()}catch{}return new Lf(p)}function Q0(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const X0="__/auth/handler",J0="emulator/auth/handler",Y0=encodeURIComponent("fac");async function Ff(t,e,n,r,s,i){ce(t.config.authDomain,t,"auth-domain-config-required"),ce(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ys,eventId:s};if(e instanceof qg){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",Yw(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))a[f]=p}if(e instanceof ki){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await t._getAppCheckToken(),u=c?`#${Y0}=${encodeURIComponent(c)}`:"";return`${Z0(t)}?${Pi(l).slice(1)}${u}`}function Z0({config:t}){return t.emulator?Dc(t,J0):`https://${t.authDomain}/${X0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="webStorageSupport";class eI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xg,this._completeRedirectFn=I0,this._overrideRedirectResult=w0}async _openPopup(e,n,r,s){var i;Mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Ff(e,n,r,jl(),s);return K0(e,a,Uc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ff(e,n,r,jl(),s);return r0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await j0(e),r=new R0(e);return n.register("authEvent",s=>(ce(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ml,{type:ml},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ml];a!==void 0&&n(!!a),Vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=x0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Bg()||Vg()||Mc()}}const tI=eI;var Uf="@firebase/auth",$f="1.10.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function rI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function sI(t){cs(new Cr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ce(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jg(t)},u=new MT(r,s,i,c);return jT(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),cs(new Cr("auth-internal",e=>{const n=Lc(e.getProvider("auth").getImmediate());return(r=>new nI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),sr(Uf,$f,rI(t)),sr(Uf,$f,"esm2017")}/**
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
 */const iI=5*60,oI=_g("authIdTokenMaxAge")||iI;let Bf=null;const aI=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oI)return;const s=n==null?void 0:n.token;Bf!==s&&(Bf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function lI(t=Tg()){const e=kc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=BT(t,{popupRedirectResolver:tI,persistence:[f0,e0,Xg]}),r=_g("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=aI(i.toString());JT(n,a,()=>a(n.currentUser)),XT(n,l=>a(l))}}const s=gg("auth");return s&&HT(n,`http://${s}`),n}function cI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}LT({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",cI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});sI("Browser");var jf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Bc;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function y(){}y.prototype=v.prototype,A.D=v.prototype,A.prototype=new y,A.prototype.constructor=A,A.C=function(I,R,T){for(var E=Array(arguments.length-2),ke=2;ke<arguments.length;ke++)E[ke-2]=arguments[ke];return v.prototype[R].apply(I,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(A,v,y){y||(y=0);var I=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)I[R]=v.charCodeAt(y++)|v.charCodeAt(y++)<<8|v.charCodeAt(y++)<<16|v.charCodeAt(y++)<<24;else for(R=0;16>R;++R)I[R]=v[y++]|v[y++]<<8|v[y++]<<16|v[y++]<<24;v=A.g[0],y=A.g[1],R=A.g[2];var T=A.g[3],E=v+(T^y&(R^T))+I[0]+3614090360&4294967295;v=y+(E<<7&4294967295|E>>>25),E=T+(R^v&(y^R))+I[1]+3905402710&4294967295,T=v+(E<<12&4294967295|E>>>20),E=R+(y^T&(v^y))+I[2]+606105819&4294967295,R=T+(E<<17&4294967295|E>>>15),E=y+(v^R&(T^v))+I[3]+3250441966&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(T^y&(R^T))+I[4]+4118548399&4294967295,v=y+(E<<7&4294967295|E>>>25),E=T+(R^v&(y^R))+I[5]+1200080426&4294967295,T=v+(E<<12&4294967295|E>>>20),E=R+(y^T&(v^y))+I[6]+2821735955&4294967295,R=T+(E<<17&4294967295|E>>>15),E=y+(v^R&(T^v))+I[7]+4249261313&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(T^y&(R^T))+I[8]+1770035416&4294967295,v=y+(E<<7&4294967295|E>>>25),E=T+(R^v&(y^R))+I[9]+2336552879&4294967295,T=v+(E<<12&4294967295|E>>>20),E=R+(y^T&(v^y))+I[10]+4294925233&4294967295,R=T+(E<<17&4294967295|E>>>15),E=y+(v^R&(T^v))+I[11]+2304563134&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(T^y&(R^T))+I[12]+1804603682&4294967295,v=y+(E<<7&4294967295|E>>>25),E=T+(R^v&(y^R))+I[13]+4254626195&4294967295,T=v+(E<<12&4294967295|E>>>20),E=R+(y^T&(v^y))+I[14]+2792965006&4294967295,R=T+(E<<17&4294967295|E>>>15),E=y+(v^R&(T^v))+I[15]+1236535329&4294967295,y=R+(E<<22&4294967295|E>>>10),E=v+(R^T&(y^R))+I[1]+4129170786&4294967295,v=y+(E<<5&4294967295|E>>>27),E=T+(y^R&(v^y))+I[6]+3225465664&4294967295,T=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(T^v))+I[11]+643717713&4294967295,R=T+(E<<14&4294967295|E>>>18),E=y+(T^v&(R^T))+I[0]+3921069994&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^T&(y^R))+I[5]+3593408605&4294967295,v=y+(E<<5&4294967295|E>>>27),E=T+(y^R&(v^y))+I[10]+38016083&4294967295,T=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(T^v))+I[15]+3634488961&4294967295,R=T+(E<<14&4294967295|E>>>18),E=y+(T^v&(R^T))+I[4]+3889429448&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^T&(y^R))+I[9]+568446438&4294967295,v=y+(E<<5&4294967295|E>>>27),E=T+(y^R&(v^y))+I[14]+3275163606&4294967295,T=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(T^v))+I[3]+4107603335&4294967295,R=T+(E<<14&4294967295|E>>>18),E=y+(T^v&(R^T))+I[8]+1163531501&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(R^T&(y^R))+I[13]+2850285829&4294967295,v=y+(E<<5&4294967295|E>>>27),E=T+(y^R&(v^y))+I[2]+4243563512&4294967295,T=v+(E<<9&4294967295|E>>>23),E=R+(v^y&(T^v))+I[7]+1735328473&4294967295,R=T+(E<<14&4294967295|E>>>18),E=y+(T^v&(R^T))+I[12]+2368359562&4294967295,y=R+(E<<20&4294967295|E>>>12),E=v+(y^R^T)+I[5]+4294588738&4294967295,v=y+(E<<4&4294967295|E>>>28),E=T+(v^y^R)+I[8]+2272392833&4294967295,T=v+(E<<11&4294967295|E>>>21),E=R+(T^v^y)+I[11]+1839030562&4294967295,R=T+(E<<16&4294967295|E>>>16),E=y+(R^T^v)+I[14]+4259657740&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^T)+I[1]+2763975236&4294967295,v=y+(E<<4&4294967295|E>>>28),E=T+(v^y^R)+I[4]+1272893353&4294967295,T=v+(E<<11&4294967295|E>>>21),E=R+(T^v^y)+I[7]+4139469664&4294967295,R=T+(E<<16&4294967295|E>>>16),E=y+(R^T^v)+I[10]+3200236656&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^T)+I[13]+681279174&4294967295,v=y+(E<<4&4294967295|E>>>28),E=T+(v^y^R)+I[0]+3936430074&4294967295,T=v+(E<<11&4294967295|E>>>21),E=R+(T^v^y)+I[3]+3572445317&4294967295,R=T+(E<<16&4294967295|E>>>16),E=y+(R^T^v)+I[6]+76029189&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(y^R^T)+I[9]+3654602809&4294967295,v=y+(E<<4&4294967295|E>>>28),E=T+(v^y^R)+I[12]+3873151461&4294967295,T=v+(E<<11&4294967295|E>>>21),E=R+(T^v^y)+I[15]+530742520&4294967295,R=T+(E<<16&4294967295|E>>>16),E=y+(R^T^v)+I[2]+3299628645&4294967295,y=R+(E<<23&4294967295|E>>>9),E=v+(R^(y|~T))+I[0]+4096336452&4294967295,v=y+(E<<6&4294967295|E>>>26),E=T+(y^(v|~R))+I[7]+1126891415&4294967295,T=v+(E<<10&4294967295|E>>>22),E=R+(v^(T|~y))+I[14]+2878612391&4294967295,R=T+(E<<15&4294967295|E>>>17),E=y+(T^(R|~v))+I[5]+4237533241&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~T))+I[12]+1700485571&4294967295,v=y+(E<<6&4294967295|E>>>26),E=T+(y^(v|~R))+I[3]+2399980690&4294967295,T=v+(E<<10&4294967295|E>>>22),E=R+(v^(T|~y))+I[10]+4293915773&4294967295,R=T+(E<<15&4294967295|E>>>17),E=y+(T^(R|~v))+I[1]+2240044497&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~T))+I[8]+1873313359&4294967295,v=y+(E<<6&4294967295|E>>>26),E=T+(y^(v|~R))+I[15]+4264355552&4294967295,T=v+(E<<10&4294967295|E>>>22),E=R+(v^(T|~y))+I[6]+2734768916&4294967295,R=T+(E<<15&4294967295|E>>>17),E=y+(T^(R|~v))+I[13]+1309151649&4294967295,y=R+(E<<21&4294967295|E>>>11),E=v+(R^(y|~T))+I[4]+4149444226&4294967295,v=y+(E<<6&4294967295|E>>>26),E=T+(y^(v|~R))+I[11]+3174756917&4294967295,T=v+(E<<10&4294967295|E>>>22),E=R+(v^(T|~y))+I[2]+718787259&4294967295,R=T+(E<<15&4294967295|E>>>17),E=y+(T^(R|~v))+I[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,A.g[2]=A.g[2]+R&4294967295,A.g[3]=A.g[3]+T&4294967295}r.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var y=v-this.blockSize,I=this.B,R=this.h,T=0;T<v;){if(R==0)for(;T<=y;)s(this,A,T),T+=this.blockSize;if(typeof A=="string"){for(;T<v;)if(I[R++]=A.charCodeAt(T++),R==this.blockSize){s(this,I),R=0;break}}else for(;T<v;)if(I[R++]=A[T++],R==this.blockSize){s(this,I),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var y=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=y&255,y/=256;for(this.u(A),A=Array(16),v=y=0;4>v;++v)for(var I=0;32>I;I+=8)A[y++]=this.g[v]>>>I&255;return A};function i(A,v){var y=l;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=v(A)}function a(A,v){this.h=v;for(var y=[],I=!0,R=A.length-1;0<=R;R--){var T=A[R]|0;I&&T==v||(y[R]=T,I=!1)}this.g=y}var l={};function c(A){return-128<=A&&128>A?i(A,function(v){return new a([v|0],0>v?-1:0)}):new a([A|0],0>A?-1:0)}function u(A){if(isNaN(A)||!isFinite(A))return p;if(0>A)return O(u(-A));for(var v=[],y=1,I=0;A>=y;I++)v[I]=A/y|0,y*=4294967296;return new a(v,0)}function f(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return O(f(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=u(Math.pow(v,8)),I=p,R=0;R<A.length;R+=8){var T=Math.min(8,A.length-R),E=parseInt(A.substring(R,R+T),v);8>T?(T=u(Math.pow(v,T)),I=I.j(T).add(u(E))):(I=I.j(y),I=I.add(u(E)))}return I}var p=c(0),g=c(1),_=c(16777216);t=a.prototype,t.m=function(){if(k(this))return-O(this).m();for(var A=0,v=1,y=0;y<this.g.length;y++){var I=this.i(y);A+=(0<=I?I:4294967296+I)*v,v*=4294967296}return A},t.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(S(this))return"0";if(k(this))return"-"+O(this).toString(A);for(var v=u(Math.pow(A,6)),y=this,I="";;){var R=z(y,v).g;y=H(y,R.j(v));var T=((0<y.g.length?y.g[0]:y.h)>>>0).toString(A);if(y=R,S(y))return T+I;for(;6>T.length;)T="0"+T;I=T+I}},t.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function S(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function k(A){return A.h==-1}t.l=function(A){return A=H(this,A),k(A)?-1:S(A)?0:1};function O(A){for(var v=A.g.length,y=[],I=0;I<v;I++)y[I]=~A.g[I];return new a(y,~A.h).add(g)}t.abs=function(){return k(this)?O(this):this},t.add=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],I=0,R=0;R<=v;R++){var T=I+(this.i(R)&65535)+(A.i(R)&65535),E=(T>>>16)+(this.i(R)>>>16)+(A.i(R)>>>16);I=E>>>16,T&=65535,E&=65535,y[R]=E<<16|T}return new a(y,y[y.length-1]&-2147483648?-1:0)};function H(A,v){return A.add(O(v))}t.j=function(A){if(S(this)||S(A))return p;if(k(this))return k(A)?O(this).j(O(A)):O(O(this).j(A));if(k(A))return O(this.j(O(A)));if(0>this.l(_)&&0>A.l(_))return u(this.m()*A.m());for(var v=this.g.length+A.g.length,y=[],I=0;I<2*v;I++)y[I]=0;for(I=0;I<this.g.length;I++)for(var R=0;R<A.g.length;R++){var T=this.i(I)>>>16,E=this.i(I)&65535,ke=A.i(R)>>>16,Je=A.i(R)&65535;y[2*I+2*R]+=E*Je,U(y,2*I+2*R),y[2*I+2*R+1]+=T*Je,U(y,2*I+2*R+1),y[2*I+2*R+1]+=E*ke,U(y,2*I+2*R+1),y[2*I+2*R+2]+=T*ke,U(y,2*I+2*R+2)}for(I=0;I<v;I++)y[I]=y[2*I+1]<<16|y[2*I];for(I=v;I<2*v;I++)y[I]=0;return new a(y,0)};function U(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function j(A,v){this.g=A,this.h=v}function z(A,v){if(S(v))throw Error("division by zero");if(S(A))return new j(p,p);if(k(A))return v=z(O(A),v),new j(O(v.g),O(v.h));if(k(v))return v=z(A,O(v)),new j(O(v.g),v.h);if(30<A.g.length){if(k(A)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var y=g,I=v;0>=I.l(A);)y=le(y),I=le(I);var R=se(y,1),T=se(I,1);for(I=se(I,2),y=se(y,2);!S(I);){var E=T.add(I);0>=E.l(A)&&(R=R.add(y),T=E),I=se(I,1),y=se(y,1)}return v=H(A,R.j(v)),new j(R,v)}for(R=p;0<=A.l(v);){for(y=Math.max(1,Math.floor(A.m()/v.m())),I=Math.ceil(Math.log(y)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),T=u(y),E=T.j(v);k(E)||0<E.l(A);)y-=I,T=u(y),E=T.j(v);S(T)&&(T=g),R=R.add(T),A=H(A,E)}return new j(R,A)}t.A=function(A){return z(this,A).h},t.and=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)&A.i(I);return new a(y,this.h&A.h)},t.or=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)|A.i(I);return new a(y,this.h|A.h)},t.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),y=[],I=0;I<v;I++)y[I]=this.i(I)^A.i(I);return new a(y,this.h^A.h)};function le(A){for(var v=A.g.length+1,y=[],I=0;I<v;I++)y[I]=A.i(I)<<1|A.i(I-1)>>>31;return new a(y,A.h)}function se(A,v){var y=v>>5;v%=32;for(var I=A.g.length-y,R=[],T=0;T<I;T++)R[T]=0<v?A.i(T+y)>>>v|A.i(T+y+1)<<32-v:A.i(T+y);return new a(R,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=u,a.fromString=f,Bc=a}).apply(typeof jf<"u"?jf:typeof self<"u"?self:typeof window<"u"?window:{});var io=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rm,js,sm,bo,ql,im,om,am;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,h,d){return o==Array.prototype||o==Object.prototype||(o[h]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof io=="object"&&io];for(var h=0;h<o.length;++h){var d=o[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(o,h){if(h)e:{var d=r;o=o.split(".");for(var m=0;m<o.length-1;m++){var C=o[m];if(!(C in d))break e;d=d[C]}o=o[o.length-1],m=d[o],h=h(m),h!=m&&h!=null&&e(d,o,{configurable:!0,writable:!0,value:h})}}function i(o,h){o instanceof String&&(o+="");var d=0,m=!1,C={next:function(){if(!m&&d<o.length){var x=d++;return{value:h(x,o[x]),done:!1}}return m=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(o){return o||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var h=typeof o;return h=h!="object"?h:o?Array.isArray(o)?"array":h:"null",h=="array"||h=="object"&&typeof o.length=="number"}function u(o){var h=typeof o;return h=="object"&&o!=null||h=="function"}function f(o,h,d){return o.call.apply(o.bind,arguments)}function p(o,h,d){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,m),o.apply(h,C)}}return function(){return o.apply(h,arguments)}}function g(o,h,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function _(o,h){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function S(o,h){function d(){}d.prototype=h.prototype,o.aa=h.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(m,C,x){for(var W=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)W[xe-2]=arguments[xe];return h.prototype[C].apply(m,W)}}function k(o){const h=o.length;if(0<h){const d=Array(h);for(let m=0;m<h;m++)d[m]=o[m];return d}return[]}function O(o,h){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(c(m)){const C=o.length||0,x=m.length||0;o.length=C+x;for(let W=0;W<x;W++)o[C+W]=m[W]}else o.push(m)}}class H{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function U(o){return/^[\s\xa0]*$/.test(o)}function j(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var le=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function se(o,h,d){for(const m in o)h.call(d,o[m],m,o)}function A(o,h){for(const d in o)h.call(void 0,o[d],d,o)}function v(o){const h={};for(const d in o)h[d]=o[d];return h}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,h){let d,m;for(let C=1;C<arguments.length;C++){m=arguments[C];for(d in m)o[d]=m[d];for(let x=0;x<y.length;x++)d=y[x],Object.prototype.hasOwnProperty.call(m,d)&&(o[d]=m[d])}}function R(o){var h=1;o=o.split(":");const d=[];for(;0<h&&o.length;)d.push(o.shift()),h--;return o.length&&d.push(o.join(":")),d}function T(o){l.setTimeout(()=>{throw o},0)}function E(){var o=Mt;let h=null;return o.g&&(h=o.g,o.g=o.g.next,o.g||(o.h=null),h.next=null),h}class ke{constructor(){this.h=this.g=null}add(h,d){const m=Je.get();m.set(h,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Je=new H(()=>new Ue,o=>o.reset());class Ue{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ye,me=!1,Mt=new ke,Wt=()=>{const o=l.Promise.resolve(void 0);ye=()=>{o.then(Bt)}};var Bt=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(d){T(d)}var h=Je;h.j(o),100>h.h&&(h.h++,o.next=h.g,h.g=o)}me=!1};function $e(){this.s=this.s,this.C=this.C}$e.prototype.s=!1,$e.prototype.ma=function(){this.s||(this.s=!0,this.N())},$e.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(o,h){this.type=o,this.g=this.target=h,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var Un=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,h=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,h),l.removeEventListener("test",d,h)}catch{}return o}();function rn(o,h){if(Be.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=h,h=o.relatedTarget){if(le){e:{try{z(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else d=="mouseover"?h=o.fromElement:d=="mouseout"&&(h=o.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:xt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&rn.aa.h.call(this)}}S(rn,Be);var xt={2:"touch",3:"pen",4:"mouse"};rn.prototype.h=function(){rn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var D="closure_listenable_"+(1e6*Math.random()|0),J=0;function X(o,h,d,m,C){this.listener=o,this.proxy=null,this.src=h,this.type=d,this.capture=!!m,this.ha=C,this.key=++J,this.da=this.fa=!1}function Y(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function be(o){this.src=o,this.g={},this.h=0}be.prototype.add=function(o,h,d,m,C){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var W=b(o,h,m,C);return-1<W?(h=o[W],d||(h.fa=!1)):(h=new X(h,this.src,x,!!m,C),h.fa=d,o.push(h)),h};function w(o,h){var d=h.type;if(d in o.g){var m=o.g[d],C=Array.prototype.indexOf.call(m,h,void 0),x;(x=0<=C)&&Array.prototype.splice.call(m,C,1),x&&(Y(h),o.g[d].length==0&&(delete o.g[d],o.h--))}}function b(o,h,d,m){for(var C=0;C<o.length;++C){var x=o[C];if(!x.da&&x.listener==h&&x.capture==!!d&&x.ha==m)return C}return-1}var P="closure_lm_"+(1e6*Math.random()|0),N={};function M(o,h,d,m,C){if(Array.isArray(h)){for(var x=0;x<h.length;x++)M(o,h[x],d,m,C);return null}return d=ae(d),o&&o[D]?o.K(h,d,u(m)?!!m.capture:!1,C):V(o,h,d,!1,m,C)}function V(o,h,d,m,C,x){if(!h)throw Error("Invalid event type");var W=u(C)?!!C.capture:!!C,xe=K(o);if(xe||(o[P]=xe=new be(o)),d=xe.add(h,d,m,W,x),d.proxy)return d;if(m=Q(),d.proxy=m,m.src=o,m.listener=d,o.addEventListener)Un||(C=W),C===void 0&&(C=!1),o.addEventListener(h.toString(),m,C);else if(o.attachEvent)o.attachEvent($(h.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function Q(){function o(d){return h.call(o.src,o.listener,d)}const h=te;return o}function G(o,h,d,m,C){if(Array.isArray(h))for(var x=0;x<h.length;x++)G(o,h[x],d,m,C);else m=u(m)?!!m.capture:!!m,d=ae(d),o&&o[D]?(o=o.i,h=String(h).toString(),h in o.g&&(x=o.g[h],d=b(x,d,m,C),-1<d&&(Y(x[d]),Array.prototype.splice.call(x,d,1),x.length==0&&(delete o.g[h],o.h--)))):o&&(o=K(o))&&(h=o.g[h.toString()],o=-1,h&&(o=b(h,d,m,C)),(d=-1<o?h[o]:null)&&q(d))}function q(o){if(typeof o!="number"&&o&&!o.da){var h=o.src;if(h&&h[D])w(h.i,o);else{var d=o.type,m=o.proxy;h.removeEventListener?h.removeEventListener(d,m,o.capture):h.detachEvent?h.detachEvent($(d),m):h.addListener&&h.removeListener&&h.removeListener(m),(d=K(h))?(w(d,o),d.h==0&&(d.src=null,h[P]=null)):Y(o)}}}function $(o){return o in N?N[o]:N[o]="on"+o}function te(o,h){if(o.da)o=!0;else{h=new rn(h,this);var d=o.listener,m=o.ha||o.src;o.fa&&q(o),o=d.call(m,h)}return o}function K(o){return o=o[P],o instanceof be?o:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(o){return typeof o=="function"?o:(o[ee]||(o[ee]=function(h){return o.handleEvent(h)}),o[ee])}function ne(){$e.call(this),this.i=new be(this),this.M=this,this.F=null}S(ne,$e),ne.prototype[D]=!0,ne.prototype.removeEventListener=function(o,h,d,m){G(this,o,h,d,m)};function de(o,h){var d,m=o.F;if(m)for(d=[];m;m=m.F)d.push(m);if(o=o.M,m=h.type||h,typeof h=="string")h=new Be(h,o);else if(h instanceof Be)h.target=h.target||o;else{var C=h;h=new Be(m,o),I(h,C)}if(C=!0,d)for(var x=d.length-1;0<=x;x--){var W=h.g=d[x];C=ve(W,m,!0,h)&&C}if(W=h.g=o,C=ve(W,m,!0,h)&&C,C=ve(W,m,!1,h)&&C,d)for(x=0;x<d.length;x++)W=h.g=d[x],C=ve(W,m,!1,h)&&C}ne.prototype.N=function(){if(ne.aa.N.call(this),this.i){var o=this.i,h;for(h in o.g){for(var d=o.g[h],m=0;m<d.length;m++)Y(d[m]);delete o.g[h],o.h--}}this.F=null},ne.prototype.K=function(o,h,d,m){return this.i.add(String(o),h,!1,d,m)},ne.prototype.L=function(o,h,d,m){return this.i.add(String(o),h,!0,d,m)};function ve(o,h,d,m){if(h=o.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,x=0;x<h.length;++x){var W=h[x];if(W&&!W.da&&W.capture==d){var xe=W.listener,st=W.ha||W.src;W.fa&&w(o.i,W),C=xe.call(st,m)!==!1&&C}}return C&&!m.defaultPrevented}function pt(o,h,d){if(typeof o=="function")d&&(o=g(o,d));else if(o&&typeof o.handleEvent=="function")o=g(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:l.setTimeout(o,h||0)}function nt(o){o.g=pt(()=>{o.g=null,o.i&&(o.i=!1,nt(o))},o.l);const h=o.h;o.h=null,o.m.apply(null,h)}class jt extends $e{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:nt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(o){$e.call(this),this.h=o,this.g={}}S(gt,$e);var $n=[];function bs(o){se(o.g,function(h,d){this.g.hasOwnProperty(d)&&q(h)},o),o.g={}}gt.prototype.N=function(){gt.aa.N.call(this),bs(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var rt=l.JSON.stringify,Ht=l.JSON.parse,Fi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Na(){}Na.prototype.h=null;function wu(o){return o.h||(o.h=o.i())}function bu(){}var Ts={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Va(){Be.call(this,"d")}S(Va,Be);function Ma(){Be.call(this,"c")}S(Ma,Be);var fr={},Tu=null;function Ui(){return Tu=Tu||new ne}fr.La="serverreachability";function Iu(o){Be.call(this,fr.La,o)}S(Iu,Be);function Is(o){const h=Ui();de(h,new Iu(h))}fr.STAT_EVENT="statevent";function Au(o,h){Be.call(this,fr.STAT_EVENT,o),this.stat=h}S(Au,Be);function It(o){const h=Ui();de(h,new Au(h,o))}fr.Ma="timingevent";function Ru(o,h){Be.call(this,fr.Ma,o),this.size=h}S(Ru,Be);function As(o,h){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},h)}function Rs(){this.g=!0}Rs.prototype.xa=function(){this.g=!1};function w_(o,h,d,m,C,x){o.info(function(){if(o.g)if(x)for(var W="",xe=x.split("&"),st=0;st<xe.length;st++){var Te=xe[st].split("=");if(1<Te.length){var mt=Te[0];Te=Te[1];var _t=mt.split("_");W=2<=_t.length&&_t[1]=="type"?W+(mt+"="+Te+"&"):W+(mt+"=redacted&")}}else W=null;else W=x;return"XMLHTTP REQ ("+m+") [attempt "+C+"]: "+h+`
`+d+`
`+W})}function b_(o,h,d,m,C,x,W){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+C+"]: "+h+`
`+d+`
`+x+" "+W})}function $r(o,h,d,m){o.info(function(){return"XMLHTTP TEXT ("+h+"): "+I_(o,d)+(m?" "+m:"")})}function T_(o,h){o.info(function(){return"TIMEOUT: "+h})}Rs.prototype.info=function(){};function I_(o,h){if(!o.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var m=d[o];if(!(2>m.length)){var C=m[1];if(Array.isArray(C)&&!(1>C.length)){var x=C[0];if(x!="noop"&&x!="stop"&&x!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return rt(d)}catch{return h}}var $i={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Su={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},La;function Bi(){}S(Bi,Na),Bi.prototype.g=function(){return new XMLHttpRequest},Bi.prototype.i=function(){return{}},La=new Bi;function Bn(o,h,d,m){this.j=o,this.i=h,this.l=d,this.R=m||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Pu}function Pu(){this.i=null,this.g="",this.h=!1}var Cu={},Fa={};function Ua(o,h,d){o.L=1,o.v=qi(_n(h)),o.m=d,o.P=!0,ku(o,null)}function ku(o,h){o.F=Date.now(),ji(o),o.A=_n(o.v);var d=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),zu(d.i,"t",m),o.C=0,d=o.j.J,o.h=new Pu,o.g=lh(o.j,d?h:null,!o.m),0<o.O&&(o.M=new jt(g(o.Y,o,o.g),o.O)),h=o.U,d=o.g,m=o.ca;var C="readystatechange";Array.isArray(C)||(C&&($n[0]=C.toString()),C=$n);for(var x=0;x<C.length;x++){var W=M(d,C[x],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,h)):(o.u="GET",o.g.ea(o.A,o.u,null,h)),Is(),w_(o.i,o.u,o.A,o.l,o.R,o.m)}Bn.prototype.ca=function(o){o=o.target;const h=this.M;h&&yn(o)==3?h.j():this.Y(o)},Bn.prototype.Y=function(o){try{if(o==this.g)e:{const _t=yn(this.g);var h=this.g.Ba();const Hr=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Ju(this.g)))){this.J||_t!=4||h==7||(h==8||0>=Hr?Is(3):Is(2)),$a(this);var d=this.g.Z();this.X=d;t:if(xu(this)){var m=Ju(this.g);o="";var C=m.length,x=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dr(this),Ss(this);var W="";break t}this.h.i=new l.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,o+=this.h.i.decode(m[h],{stream:!(x&&h==C-1)});m.length=0,this.h.g+=o,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,b_(this.i,this.u,this.A,this.l,this.R,_t,d),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,st=this.g;if((xe=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(xe)){var Te=xe;break t}}Te=null}if(d=Te)$r(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ba(this,d);else{this.o=!1,this.s=3,It(12),dr(this),Ss(this);break e}}if(this.P){d=!0;let Kt;for(;!this.J&&this.C<W.length;)if(Kt=A_(this,W),Kt==Fa){_t==4&&(this.s=4,It(14),d=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(Kt==Cu){this.s=4,It(15),$r(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else $r(this.i,this.l,Kt,null),Ba(this,Kt);if(xu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||W.length!=0||this.h.h||(this.s=1,It(16),d=!1),this.o=this.o&&d,!d)$r(this.i,this.l,W,"[Invalid Chunked Response]"),dr(this),Ss(this);else if(0<W.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Wa(mt),mt.M=!0,It(11))}}else $r(this.i,this.l,W,null),Ba(this,W);_t==4&&dr(this),this.o&&!this.J&&(_t==4?sh(this.j,this):(this.o=!1,ji(this)))}else j_(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),dr(this),Ss(this)}}}catch{}finally{}};function xu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function A_(o,h){var d=o.C,m=h.indexOf(`
`,d);return m==-1?Fa:(d=Number(h.substring(d,m)),isNaN(d)?Cu:(m+=1,m+d>h.length?Fa:(h=h.slice(m,m+d),o.C=m+d,h)))}Bn.prototype.cancel=function(){this.J=!0,dr(this)};function ji(o){o.S=Date.now()+o.I,Ou(o,o.I)}function Ou(o,h){if(o.B!=null)throw Error("WatchDog timer not null");o.B=As(g(o.ba,o),h)}function $a(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Bn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(T_(this.i,this.A),this.L!=2&&(Is(),It(17)),dr(this),this.s=2,Ss(this)):Ou(this,this.S-o)};function Ss(o){o.j.G==0||o.J||sh(o.j,o)}function dr(o){$a(o);var h=o.M;h&&typeof h.ma=="function"&&h.ma(),o.M=null,bs(o.U),o.g&&(h=o.g,o.g=null,h.abort(),h.ma())}function Ba(o,h){try{var d=o.j;if(d.G!=0&&(d.g==o||ja(d.h,o))){if(!o.K&&ja(d.h,o)&&d.G==3){try{var m=d.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var C=m;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ji(d),Qi(d);else break e;Ga(d),It(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=As(g(d.Za,d),6e3));if(1>=Vu(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else gr(d,11)}else if((o.K||d.g==o)&&Ji(d),!U(h))for(C=d.Da.g.parse(h),h=0;h<C.length;h++){let Te=C[h];if(d.T=Te[0],Te=Te[1],d.G==2)if(Te[0]=="c"){d.K=Te[1],d.ia=Te[2];const mt=Te[3];mt!=null&&(d.la=mt,d.j.info("VER="+d.la));const _t=Te[4];_t!=null&&(d.Aa=_t,d.j.info("SVER="+d.Aa));const Hr=Te[5];Hr!=null&&typeof Hr=="number"&&0<Hr&&(m=1.5*Hr,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const Kt=o.g;if(Kt){const Zi=Kt.g?Kt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Zi){var x=m.h;x.g||Zi.indexOf("spdy")==-1&&Zi.indexOf("quic")==-1&&Zi.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Ha(x,x.h),x.h=null))}if(m.D){const Ka=Kt.g?Kt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ka&&(m.ya=Ka,Me(m.I,m.D,Ka))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var W=o;if(m.qa=ah(m,m.J?m.ia:null,m.W),W.K){Mu(m.h,W);var xe=W,st=m.L;st&&(xe.I=st),xe.B&&($a(xe),ji(xe)),m.g=W}else nh(m);0<d.i.length&&Xi(d)}else Te[0]!="stop"&&Te[0]!="close"||gr(d,7);else d.G==3&&(Te[0]=="stop"||Te[0]=="close"?Te[0]=="stop"?gr(d,7):qa(d):Te[0]!="noop"&&d.l&&d.l.ta(Te),d.v=0)}}Is(4)}catch{}}var R_=class{constructor(o,h){this.g=o,this.map=h}};function Du(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Nu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Vu(o){return o.h?1:o.g?o.g.size:0}function ja(o,h){return o.h?o.h==h:o.g?o.g.has(h):!1}function Ha(o,h){o.g?o.g.add(h):o.h=h}function Mu(o,h){o.h&&o.h==h?o.h=null:o.g&&o.g.has(h)&&o.g.delete(h)}Du.prototype.cancel=function(){if(this.i=Lu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Lu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let h=o.i;for(const d of o.g.values())h=h.concat(d.D);return h}return k(o.i)}function S_(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var h=[],d=o.length,m=0;m<d;m++)h.push(o[m]);return h}h=[],d=0;for(m in o)h[d++]=o[m];return h}function P_(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var h=[];o=o.length;for(var d=0;d<o;d++)h.push(d);return h}h=[],d=0;for(const m in o)h[d++]=m;return h}}}function Fu(o,h){if(o.forEach&&typeof o.forEach=="function")o.forEach(h,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,h,void 0);else for(var d=P_(o),m=S_(o),C=m.length,x=0;x<C;x++)h.call(void 0,m[x],d&&d[x],o)}var Uu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function C_(o,h){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var m=o[d].indexOf("="),C=null;if(0<=m){var x=o[d].substring(0,m);C=o[d].substring(m+1)}else x=o[d];h(x,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function pr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof pr){this.h=o.h,Hi(this,o.j),this.o=o.o,this.g=o.g,zi(this,o.s),this.l=o.l;var h=o.i,d=new ks;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),$u(this,d),this.m=o.m}else o&&(h=String(o).match(Uu))?(this.h=!1,Hi(this,h[1]||"",!0),this.o=Ps(h[2]||""),this.g=Ps(h[3]||"",!0),zi(this,h[4]),this.l=Ps(h[5]||"",!0),$u(this,h[6]||"",!0),this.m=Ps(h[7]||"")):(this.h=!1,this.i=new ks(null,this.h))}pr.prototype.toString=function(){var o=[],h=this.j;h&&o.push(Cs(h,Bu,!0),":");var d=this.g;return(d||h=="file")&&(o.push("//"),(h=this.o)&&o.push(Cs(h,Bu,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Cs(d,d.charAt(0)=="/"?O_:x_,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Cs(d,N_)),o.join("")};function _n(o){return new pr(o)}function Hi(o,h,d){o.j=d?Ps(h,!0):h,o.j&&(o.j=o.j.replace(/:$/,""))}function zi(o,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);o.s=h}else o.s=null}function $u(o,h,d){h instanceof ks?(o.i=h,V_(o.i,o.h)):(d||(h=Cs(h,D_)),o.i=new ks(h,o.h))}function Me(o,h,d){o.i.set(h,d)}function qi(o){return Me(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Ps(o,h){return o?h?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Cs(o,h,d){return typeof o=="string"?(o=encodeURI(o).replace(h,k_),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function k_(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Bu=/[#\/\?@]/g,x_=/[#\?:]/g,O_=/[#\?]/g,D_=/[#\?@]/g,N_=/#/g;function ks(o,h){this.h=this.g=null,this.i=o||null,this.j=!!h}function jn(o){o.g||(o.g=new Map,o.h=0,o.i&&C_(o.i,function(h,d){o.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ks.prototype,t.add=function(o,h){jn(this),this.i=null,o=Br(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(h),this.h+=1,this};function ju(o,h){jn(o),h=Br(o,h),o.g.has(h)&&(o.i=null,o.h-=o.g.get(h).length,o.g.delete(h))}function Hu(o,h){return jn(o),h=Br(o,h),o.g.has(h)}t.forEach=function(o,h){jn(this),this.g.forEach(function(d,m){d.forEach(function(C){o.call(h,C,m,this)},this)},this)},t.na=function(){jn(this);const o=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let m=0;m<h.length;m++){const C=o[m];for(let x=0;x<C.length;x++)d.push(h[m])}return d},t.V=function(o){jn(this);let h=[];if(typeof o=="string")Hu(this,o)&&(h=h.concat(this.g.get(Br(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)h=h.concat(o[d])}return h},t.set=function(o,h){return jn(this),this.i=null,o=Br(this,o),Hu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[h]),this.h+=1,this},t.get=function(o,h){return o?(o=this.V(o),0<o.length?String(o[0]):h):h};function zu(o,h,d){ju(o,h),0<d.length&&(o.i=null,o.g.set(Br(o,h),k(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var m=h[d];const x=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var C=x;W[m]!==""&&(C+="="+encodeURIComponent(String(W[m]))),o.push(C)}}return this.i=o.join("&")};function Br(o,h){return h=String(h),o.j&&(h=h.toLowerCase()),h}function V_(o,h){h&&!o.j&&(jn(o),o.i=null,o.g.forEach(function(d,m){var C=m.toLowerCase();m!=C&&(ju(this,m),zu(this,C,d))},o)),o.j=h}function M_(o,h){const d=new Rs;if(l.Image){const m=new Image;m.onload=_(Hn,d,"TestLoadImage: loaded",!0,h,m),m.onerror=_(Hn,d,"TestLoadImage: error",!1,h,m),m.onabort=_(Hn,d,"TestLoadImage: abort",!1,h,m),m.ontimeout=_(Hn,d,"TestLoadImage: timeout",!1,h,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else h(!1)}function L_(o,h){const d=new Rs,m=new AbortController,C=setTimeout(()=>{m.abort(),Hn(d,"TestPingServer: timeout",!1,h)},1e4);fetch(o,{signal:m.signal}).then(x=>{clearTimeout(C),x.ok?Hn(d,"TestPingServer: ok",!0,h):Hn(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),Hn(d,"TestPingServer: error",!1,h)})}function Hn(o,h,d,m,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),m(d)}catch{}}function F_(){this.g=new Fi}function U_(o,h,d){const m=d||"";try{Fu(o,function(C,x){let W=C;u(C)&&(W=rt(C)),h.push(m+x+"="+encodeURIComponent(W))})}catch(C){throw h.push(m+"type="+encodeURIComponent("_badmap")),C}}function Gi(o){this.l=o.Ub||null,this.j=o.eb||!1}S(Gi,Na),Gi.prototype.g=function(){return new Wi(this.l,this.j)},Gi.prototype.i=function(o){return function(){return o}}({});function Wi(o,h){ne.call(this),this.D=o,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Wi,ne),t=Wi.prototype,t.open=function(o,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=h,this.readyState=1,Os(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(h.body=o),(this.D||l).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xs(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Os(this)),this.g&&(this.readyState=3,Os(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function qu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var h=o.value?o.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!o.done}))&&(this.response=this.responseText+=h)}o.done?xs(this):Os(this),this.readyState==3&&qu(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,xs(this))},t.Qa=function(o){this.g&&(this.response=o,xs(this))},t.ga=function(){this.g&&xs(this)};function xs(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Os(o)}t.setRequestHeader=function(o,h){this.u.append(o,h)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=h.next();return o.join(`\r
`)};function Os(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Gu(o){let h="";return se(o,function(d,m){h+=m,h+=":",h+=d,h+=`\r
`}),h}function za(o,h,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Gu(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):Me(o,h,d))}function He(o){ne.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(He,ne);var $_=/^https?$/i,B_=["POST","PUT"];t=He.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,h,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);h=h?h.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():La.g(),this.v=this.o?wu(this.o):wu(La),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(o),!0),this.B=!1}catch(x){Wu(this,x);return}if(o=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var C in m)d.set(C,m[C]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const x of m.keys())d.set(x,m.get(x));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(x=>x.toLowerCase()=="content-type"),C=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(B_,h,void 0))||m||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,W]of d)this.g.setRequestHeader(x,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xu(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){Wu(this,x)}};function Wu(o,h){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=h,o.m=5,Ku(o),Ki(o)}function Ku(o){o.A||(o.A=!0,de(o,"complete"),de(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,de(this,"complete"),de(this,"abort"),Ki(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ki(this,!0)),He.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qu(this):this.bb())},t.bb=function(){Qu(this)};function Qu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||yn(o)!=4||o.Z()!=2)){if(o.u&&yn(o)==4)pt(o.Ea,0,o);else if(de(o,"readystatechange"),yn(o)==4){o.h=!1;try{const W=o.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var m;if(m=W===0){var C=String(o.D).match(Uu)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),m=!$_.test(C?C.toLowerCase():"")}d=m}if(d)de(o,"complete"),de(o,"success");else{o.m=6;try{var x=2<yn(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",Ku(o)}}finally{Ki(o)}}}}function Ki(o,h){if(o.g){Xu(o);const d=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,h||de(o,"ready");try{d.onreadystatechange=m}catch{}}}function Xu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function yn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var h=this.g.responseText;return o&&h.indexOf(o)==0&&(h=h.substring(o.length)),Ht(h)}};function Ju(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function j_(o){const h={};o=(o.g&&2<=yn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(U(o[m]))continue;var d=R(o[m]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const x=h[C]||[];h[C]=x,x.push(d)}A(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ds(o,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||h}function Yu(o){this.Aa=0,this.i=[],this.j=new Rs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ds("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ds("baseRetryDelayMs",5e3,o),this.cb=Ds("retryDelaySeedMs",1e4,o),this.Wa=Ds("forwardChannelMaxRetries",2,o),this.wa=Ds("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Du(o&&o.concurrentRequestLimit),this.Da=new F_,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yu.prototype,t.la=8,t.G=1,t.connect=function(o,h,d,m){It(0),this.W=o,this.H=h||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=ah(this,null,this.W),Xi(this)};function qa(o){if(Zu(o),o.G==3){var h=o.U++,d=_n(o.I);if(Me(d,"SID",o.K),Me(d,"RID",h),Me(d,"TYPE","terminate"),Ns(o,d),h=new Bn(o,o.j,h),h.L=2,h.v=qi(_n(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=h.v,d=!0),d||(h.g=lh(h.j,null),h.g.ea(h.v)),h.F=Date.now(),ji(h)}oh(o)}function Qi(o){o.g&&(Wa(o),o.g.cancel(),o.g=null)}function Zu(o){Qi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ji(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Xi(o){if(!Nu(o.h)&&!o.s){o.s=!0;var h=o.Ga;ye||Wt(),me||(ye(),me=!0),Mt.add(h,o),o.B=0}}function H_(o,h){return Vu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=h.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=As(g(o.Ga,o,h),ih(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new Bn(this,this.j,o);let x=this.o;if(this.S&&(x?(x=v(x),I(x,this.S)):x=this.S),this.m!==null||this.O||(C.H=x,x=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=th(this,C,h),d=_n(this.I),Me(d,"RID",o),Me(d,"CVER",22),this.D&&Me(d,"X-HTTP-Session-Id",this.D),Ns(this,d),x&&(this.O?h="headers="+encodeURIComponent(String(Gu(x)))+"&"+h:this.m&&za(d,this.m,x)),Ha(this.h,C),this.Ua&&Me(d,"TYPE","init"),this.P?(Me(d,"$req",h),Me(d,"SID","null"),C.T=!0,Ua(C,d,null)):Ua(C,d,h),this.G=2}}else this.G==3&&(o?eh(this,o):this.i.length==0||Nu(this.h)||eh(this))};function eh(o,h){var d;h?d=h.l:d=o.U++;const m=_n(o.I);Me(m,"SID",o.K),Me(m,"RID",d),Me(m,"AID",o.T),Ns(o,m),o.m&&o.o&&za(m,o.m,o.o),d=new Bn(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),h&&(o.i=h.D.concat(o.i)),h=th(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ha(o.h,d),Ua(d,m,h)}function Ns(o,h){o.H&&se(o.H,function(d,m){Me(h,m,d)}),o.l&&Fu({},function(d,m){Me(h,m,d)})}function th(o,h,d){d=Math.min(o.i.length,d);var m=o.l?g(o.l.Na,o.l,o):null;e:{var C=o.i;let x=-1;for(;;){const W=["count="+d];x==-1?0<d?(x=C[0].g,W.push("ofs="+x)):x=0:W.push("ofs="+x);let xe=!0;for(let st=0;st<d;st++){let Te=C[st].g;const mt=C[st].map;if(Te-=x,0>Te)x=Math.max(0,C[st].g-100),xe=!1;else try{U_(mt,W,"req"+Te+"_")}catch{m&&m(mt)}}if(xe){m=W.join("&");break e}}}return o=o.i.splice(0,d),h.D=o,m}function nh(o){if(!o.g&&!o.u){o.Y=1;var h=o.Fa;ye||Wt(),me||(ye(),me=!0),Mt.add(h,o),o.v=0}}function Ga(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=As(g(o.Fa,o),ih(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,rh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=As(g(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),Qi(this),rh(this))};function Wa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function rh(o){o.g=new Bn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var h=_n(o.qa);Me(h,"RID","rpc"),Me(h,"SID",o.K),Me(h,"AID",o.T),Me(h,"CI",o.F?"0":"1"),!o.F&&o.ja&&Me(h,"TO",o.ja),Me(h,"TYPE","xmlhttp"),Ns(o,h),o.m&&o.o&&za(h,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=qi(_n(h)),d.m=null,d.P=!0,ku(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Qi(this),Ga(this),It(19))};function Ji(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function sh(o,h){var d=null;if(o.g==h){Ji(o),Wa(o),o.g=null;var m=2}else if(ja(o.h,h))d=h.D,Mu(o.h,h),m=1;else return;if(o.G!=0){if(h.o)if(m==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var C=o.B;m=Ui(),de(m,new Ru(m,d)),Xi(o)}else nh(o);else if(C=h.s,C==3||C==0&&0<h.X||!(m==1&&H_(o,h)||m==2&&Ga(o)))switch(d&&0<d.length&&(h=o.h,h.i=h.i.concat(d)),C){case 1:gr(o,5);break;case 4:gr(o,10);break;case 3:gr(o,6);break;default:gr(o,2)}}}function ih(o,h){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*h}function gr(o,h){if(o.j.info("Error code "+h),h==2){var d=g(o.fb,o),m=o.Xa;const C=!m;m=new pr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Hi(m,"https"),qi(m),C?M_(m.toString(),d):L_(m.toString(),d)}else It(2);o.G=0,o.l&&o.l.sa(h),oh(o),Zu(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function oh(o){if(o.G=0,o.ka=[],o.l){const h=Lu(o.h);(h.length!=0||o.i.length!=0)&&(O(o.ka,h),O(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function ah(o,h,d){var m=d instanceof pr?_n(d):new pr(d);if(m.g!="")h&&(m.g=h+"."+m.g),zi(m,m.s);else{var C=l.location;m=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var x=new pr(null);m&&Hi(x,m),h&&(x.g=h),C&&zi(x,C),d&&(x.l=d),m=x}return d=o.D,h=o.ya,d&&h&&Me(m,d,h),Me(m,"VER",o.la),Ns(o,m),m}function lh(o,h,d){if(h&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=o.Ca&&!o.pa?new He(new Gi({eb:d})):new He(o.pa),h.Ha(o.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ch(){}t=ch.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Yi(){}Yi.prototype.g=function(o,h){return new Lt(o,h)};function Lt(o,h){ne.call(this),this.g=new Yu(h),this.l=o,this.h=h&&h.messageUrlParams||null,o=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(o?o["X-WebChannel-Content-Type"]=h.messageContentType:o={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(o?o["X-WebChannel-Client-Profile"]=h.va:o={"X-WebChannel-Client-Profile":h.va}),this.g.S=o,(o=h&&h.Sb)&&!U(o)&&(this.g.m=o),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!U(h)&&(this.g.D=h,o=this.h,o!==null&&h in o&&(o=this.h,h in o&&delete o[h])),this.j=new jr(this)}S(Lt,ne),Lt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Lt.prototype.close=function(){qa(this.g)},Lt.prototype.o=function(o){var h=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=rt(o),o=d);h.i.push(new R_(h.Ya++,o)),h.G==3&&Xi(h)},Lt.prototype.N=function(){this.g.l=null,delete this.j,qa(this.g),delete this.g,Lt.aa.N.call(this)};function uh(o){Va.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var h=o.__sm__;if(h){e:{for(const d in h){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,h=h!==null&&o in h?h[o]:void 0),this.data=h}else this.data=o}S(uh,Va);function hh(){Ma.call(this),this.status=1}S(hh,Ma);function jr(o){this.g=o}S(jr,ch),jr.prototype.ua=function(){de(this.g,"a")},jr.prototype.ta=function(o){de(this.g,new uh(o))},jr.prototype.sa=function(o){de(this.g,new hh)},jr.prototype.ra=function(){de(this.g,"b")},Yi.prototype.createWebChannel=Yi.prototype.g,Lt.prototype.send=Lt.prototype.o,Lt.prototype.open=Lt.prototype.m,Lt.prototype.close=Lt.prototype.close,am=function(){return new Yi},om=function(){return Ui()},im=fr,ql={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$i.NO_ERROR=0,$i.TIMEOUT=8,$i.HTTP_ERROR=6,bo=$i,Su.COMPLETE="complete",sm=Su,bu.EventType=Ts,Ts.OPEN="a",Ts.CLOSE="b",Ts.ERROR="c",Ts.MESSAGE="d",ne.prototype.listen=ne.prototype.K,js=bu,He.prototype.listenOnce=He.prototype.L,He.prototype.getLastError=He.prototype.Ka,He.prototype.getLastErrorCode=He.prototype.Ba,He.prototype.getStatus=He.prototype.Z,He.prototype.getResponseJson=He.prototype.Oa,He.prototype.getResponseText=He.prototype.oa,He.prototype.send=He.prototype.ea,He.prototype.setWithCredentials=He.prototype.Ha,rm=He}).apply(typeof io<"u"?io:typeof self<"u"?self:typeof window<"u"?window:{});const Hf="@firebase/firestore",zf="4.7.16";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Es="11.8.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Pc("@firebase/firestore");function Kr(){return xr.logLevel}function Z(t,...e){if(xr.logLevel<=_e.DEBUG){const n=e.map(jc);xr.debug(`Firestore (${Es}): ${t}`,...n)}}function Or(t,...e){if(xr.logLevel<=_e.ERROR){const n=e.map(jc);xr.error(`Firestore (${Es}): ${t}`,...n)}}function Ia(t,...e){if(xr.logLevel<=_e.WARN){const n=e.map(jc);xr.warn(`Firestore (${Es}): ${t}`,...n)}}function jc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ge(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,lm(t,r,n)}function lm(t,e,n){let r=`FIRESTORE (${Es}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Or(r),new Error(r)}function ze(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||lm(e,s,r)}function Ve(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ue extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class uI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class hI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fI{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ze(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Rr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rr,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rr)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ze(typeof r.accessToken=="string",31837,{l:r}),new cm(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string",2055,{h:e}),new vt(e)}}class dI{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class pI{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new dI(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class qf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gI{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,un(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){ze(this.o===void 0,3512);const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new qf(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new qf(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class um{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=mI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Gl(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return we(r,s);{const i=_I(),a=yI(i.encode(Gf(t,n)),i.encode(Gf(e,n)));return a!==0?a:we(r,s)}}n+=r>65535?2:1}return we(t.length,e.length)}function Gf(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function yI(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return we(t[n],e[n]);return we(t.length,e.length)}function hs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wf=-62135596800,Kf=1e6;class et{static now(){return et.fromMillis(Date.now())}static fromDate(e){return et.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Kf);return new et(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ue(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ue(B.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Wf)throw new ue(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ue(B.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Kf}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Wf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{static fromTimestamp(e){return new Fe(e)}static min(){return new Fe(new et(0,0))}static max(){return new Fe(new et(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf="__name__";class ln{constructor(e,n,r){n===void 0?n=0:n>e.length&&ge(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ge(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ln.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ln?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=ln.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return we(e.length,n.length)}static compareSegments(e,n){const r=ln.isNumericId(e),s=ln.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?ln.extractNumericId(e).compare(ln.extractNumericId(n)):Gl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Bc.fromString(e.substring(4,e.length-2))}}class Xe extends ln{construct(e,n,r){return new Xe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ue(B.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Xe(n)}static emptyPath(){return new Xe([])}}const vI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends ln{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return vI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Qf}static keyField(){return new ft([Qf])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ue(B.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ue(B.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ue(B.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new ue(B.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(Xe.fromString(e))}static fromName(e){return new pe(Xe.fromString(e).popFirst(5))}static empty(){return new pe(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new Xe(e.slice()))}}/**
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
 */const gi=-1;function EI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Fe.fromTimestamp(r===1e9?new et(n+1,0):new et(n,r));return new ar(s,pe.empty(),e)}function wI(t){return new ar(t.readTime,t.key,gi)}class ar{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ar(Fe.min(),pe.empty(),gi)}static max(){return new ar(Fe.max(),pe.empty(),gi)}}function bI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=pe.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ge(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,a=!1;e.forEach(l=>{++s,l.next(()=>{++i,a&&i===s&&n()},c=>r(c))}),a=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const u=c;n(e[u]).next(f=>{a[u]=f,++l,l===i&&r(a)},f=>s(f))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function AI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Oi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */const qc=-1;function Gc(t){return t==null}function zo(t){return t===0&&1/t==-1/0}function RI(t){return typeof t=="number"&&Number.isInteger(t)&&!zo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="";function SI(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Xf(e)),e=PI(t.get(n),e);return Xf(e)}function PI(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case hm:n+="";break;default:n+=i}}return n}function Xf(t){return t+hm+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ws(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fm(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new Vt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new Vt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new oo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new oo(this.root,e,this.comparator,!1)}getReverseIterator(){return new oo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new oo(this.root,e,this.comparator,!0)}}class oo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ge(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ge(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ge(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw ge(57766)}get value(){throw ge(16141)}get color(){throw ge(16727)}get left(){throw ge(29726)}get right(){throw ge(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new dt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return hs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class gn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new CI("Invalid base64 string: "+i):i}}(e);return new gn(n)}static fromUint8Array(e){const n=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new gn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gn.EMPTY_BYTE_STRING=new gn("");const kI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dr(t){if(ze(!!t,39018),typeof t=="string"){let e=0;const n=kI.exec(t);if(ze(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:lt(t.seconds),nanos:lt(t.nanos)}}function lt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fs(t){return typeof t=="string"?gn.fromBase64String(t):gn.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm="server_timestamp",pm="__type__",gm="__previous_value__",mm="__local_write_time__";function Wc(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[pm])===null||n===void 0?void 0:n.stringValue)===dm}function Kc(t){const e=t.mapValue.fields[gm];return Wc(e)?Kc(e):e}function qo(t){const e=Dr(t.mapValue.fields[mm].timestampValue);return new et(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xI{constructor(e,n,r,s,i,a,l,c,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=u,this.isUsingEmulator=f}}const Go="(default)";class Wo{constructor(e,n){this.projectId=e,this.database=n||Go}static empty(){return new Wo("","")}get isDefaultDatabase(){return this.database===Go}isEqual(e){return e instanceof Wo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _m="__type__",OI="__max__",ao={mapValue:{}},ym="__vector__",Wl="value";function Nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Wc(t)?4:NI(t)?9007199254740991:DI(t)?10:11:ge(28295,{value:t})}function mn(t,e){if(t===e)return!0;const n=Nr(t);if(n!==Nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return qo(t).isEqual(qo(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Dr(s.timestampValue),l=Dr(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return fs(s.bytesValue).isEqual(fs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return lt(s.geoPointValue.latitude)===lt(i.geoPointValue.latitude)&&lt(s.geoPointValue.longitude)===lt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return lt(s.integerValue)===lt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=lt(s.doubleValue),l=lt(i.doubleValue);return a===l?zo(a)===zo(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return hs(t.arrayValue.values||[],e.arrayValue.values||[],mn);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Jf(a)!==Jf(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!mn(a[c],l[c])))return!1;return!0}(t,e);default:return ge(52216,{left:t})}}function mi(t,e){return(t.values||[]).find(n=>mn(n,e))!==void 0}function ds(t,e){if(t===e)return 0;const n=Nr(t),r=Nr(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(i,a){const l=lt(i.integerValue||i.doubleValue),c=lt(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Zf(t.timestampValue,e.timestampValue);case 4:return Zf(qo(t),qo(e));case 5:return Gl(t.stringValue,e.stringValue);case 6:return function(i,a){const l=fs(i),c=fs(a);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,a){const l=i.split("/"),c=a.split("/");for(let u=0;u<l.length&&u<c.length;u++){const f=we(l[u],c[u]);if(f!==0)return f}return we(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,a){const l=we(lt(i.latitude),lt(a.latitude));return l!==0?l:we(lt(i.longitude),lt(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ed(t.arrayValue,e.arrayValue);case 10:return function(i,a){var l,c,u,f;const p=i.fields||{},g=a.fields||{},_=(l=p[Wl])===null||l===void 0?void 0:l.arrayValue,S=(c=g[Wl])===null||c===void 0?void 0:c.arrayValue,k=we(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:ed(_,S)}(t.mapValue,e.mapValue);case 11:return function(i,a){if(i===ao.mapValue&&a===ao.mapValue)return 0;if(i===ao.mapValue)return 1;if(a===ao.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),u=a.fields||{},f=Object.keys(u);c.sort(),f.sort();for(let p=0;p<c.length&&p<f.length;++p){const g=Gl(c[p],f[p]);if(g!==0)return g;const _=ds(l[c[p]],u[f[p]]);if(_!==0)return _}return we(c.length,f.length)}(t.mapValue,e.mapValue);default:throw ge(23264,{Pe:n})}}function Zf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Dr(t),r=Dr(e),s=we(n.seconds,r.seconds);return s!==0?s:we(n.nanos,r.nanos)}function ed(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ds(n[s],r[s]);if(i)return i}return we(n.length,r.length)}function ps(t){return Kl(t)}function Kl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Dr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return fs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return pe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Kl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Kl(n.fields[a])}`;return s+"}"}(t.mapValue):ge(61005,{value:t})}function To(t){switch(Nr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kc(t);return e?16+To(e):16;case 5:return 2*t.stringValue.length;case 6:return fs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+To(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return ws(r.fields,(i,a)=>{s+=i.length+To(a)}),s}(t.mapValue);default:throw ge(13486,{value:t})}}function Ql(t){return!!t&&"integerValue"in t}function Qc(t){return!!t&&"arrayValue"in t}function Io(t){return!!t&&"mapValue"in t}function DI(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[_m])===null||n===void 0?void 0:n.stringValue)===ym}function Zs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ws(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Zs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Zs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function NI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===OI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e){this.value=e}static empty(){return new Xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Io(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Zs(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}a?r[l.lastSegment()]=Zs(a):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Io(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Io(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){ws(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Xt(Zs(this.value))}}function vm(t){const e=[];return ws(t.fields,(n,r)=>{const s=new ft([n]);if(Io(r)){const i=vm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,n,r,s,i,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Qt(e,0,Fe.min(),Fe.min(),Fe.min(),Xt.empty(),0)}static newFoundDocument(e,n,r,s){return new Qt(e,1,n,Fe.min(),r,s,0)}static newNoDocument(e,n){return new Qt(e,2,n,Fe.min(),Fe.min(),Xt.empty(),0)}static newUnknownDocument(e,n){return new Qt(e,3,n,Fe.min(),Fe.min(),Xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Fe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Fe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Qt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Qt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ko{constructor(e,n){this.position=e,this.inclusive=n}}function td(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],a=t.position[s];if(i.field.isKeyField()?r=pe.comparator(pe.fromName(a.referenceValue),n.key):r=ds(a,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function nd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Qo{constructor(e,n="asc"){this.field=e,this.dir=n}}function VI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Em{}class Ze extends Em{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new LI(e,n,r):n==="array-contains"?new $I(e,r):n==="in"?new BI(e,r):n==="not-in"?new jI(e,r):n==="array-contains-any"?new HI(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new FI(e,r):new UI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ds(n,this.value)):n!==null&&Nr(this.value)===Nr(n)&&this.matchesComparison(ds(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ge(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class lr extends Em{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new lr(e,n)}matches(e){return wm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function wm(t){return t.op==="and"}function bm(t){return MI(t)&&wm(t)}function MI(t){for(const e of t.filters)if(e instanceof lr)return!1;return!0}function Xl(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+ps(t.value);if(bm(t))return t.filters.map(e=>Xl(e)).join(",");{const e=t.filters.map(n=>Xl(n)).join(",");return`${t.op}(${e})`}}function Tm(t,e){return t instanceof Ze?function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&mn(r.value,s.value)}(t,e):t instanceof lr?function(r,s){return s instanceof lr&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,l)=>i&&Tm(a,s.filters[l]),!0):!1}(t,e):void ge(19439)}function Im(t){return t instanceof Ze?function(n){return`${n.field.canonicalString()} ${n.op} ${ps(n.value)}`}(t):t instanceof lr?function(n){return n.op.toString()+" {"+n.getFilters().map(Im).join(" ,")+"}"}(t):"Filter"}class LI extends Ze{constructor(e,n,r){super(e,n,r),this.key=pe.fromName(r.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class FI extends Ze{constructor(e,n){super(e,"in",n),this.keys=Am("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class UI extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=Am("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Am(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class $I extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qc(n)&&mi(n.arrayValue,this.value)}}class BI extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&mi(this.value.arrayValue,n)}}class jI extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(mi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!mi(this.value.arrayValue,n)}}class HI extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>mi(this.value.arrayValue,r))}}/**
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
 */class zI{constructor(e,n=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Ie=null}}function rd(t,e=null,n=[],r=[],s=null,i=null,a=null){return new zI(t,e,n,r,s,i,a)}function Xc(t){const e=Ve(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Xl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Gc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ps(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ps(r)).join(",")),e.Ie=n}return e.Ie}function Jc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tm(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!nd(t.startAt,e.startAt)&&nd(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aa{constructor(e,n=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function qI(t,e,n,r,s,i,a,l){return new Aa(t,e,n,r,s,i,a,l)}function GI(t){return new Aa(t)}function sd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function WI(t){return t.collectionGroup!==null}function ei(t){const e=Ve(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const i of e.explicitOrderBy)e.Ee.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new dt(ft.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(u=>{u.isInequality()&&(l=l.add(u.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.Ee.push(new Qo(i,r))}),n.has(ft.keyField().canonicalString())||e.Ee.push(new Qo(ft.keyField(),r))}return e.Ee}function Sr(t){const e=Ve(t);return e.de||(e.de=KI(e,ei(t))),e.de}function KI(t,e){if(t.limitType==="F")return rd(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Qo(s.field,i)});const n=t.endAt?new Ko(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ko(t.startAt.position,t.startAt.inclusive):null;return rd(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Jl(t,e,n){return new Aa(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rm(t,e){return Jc(Sr(t),Sr(e))&&t.limitType===e.limitType}function Sm(t){return`${Xc(Sr(t))}|lt:${t.limitType}`}function Fs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Im(s)).join(", ")}]`),Gc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ps(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ps(s)).join(",")),`Target(${r})`}(Sr(t))}; limitType=${t.limitType})`}function Yc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):pe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ei(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(a,l,c){const u=td(a,l,c);return a.inclusive?u<=0:u<0}(r.startAt,ei(r),s)||r.endAt&&!function(a,l,c){const u=td(a,l,c);return a.inclusive?u>=0:u>0}(r.endAt,ei(r),s))}(t,e)}function QI(t){return(e,n)=>{let r=!1;for(const s of ei(t)){const i=XI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function XI(t,e,n){const r=t.field.isKeyField()?pe.comparator(e.key,n.key):function(i,a,l){const c=a.data.field(i),u=l.data.field(i);return c!==null&&u!==null?ds(c,u):ge(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ge(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){ws(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fm(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JI=new Vt(pe.comparator);function Xo(){return JI}const Pm=new Vt(pe.comparator);function lo(...t){let e=Pm;for(const n of t)e=e.insert(n.key,n);return e}function Cm(t){let e=Pm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Tr(){return ti()}function km(){return ti()}function ti(){return new Lr(t=>t.toString(),(t,e)=>t.isEqual(e))}const YI=new Vt(pe.comparator),ZI=new dt(pe.comparator);function wt(...t){let e=ZI;for(const n of t)e=e.add(n);return e}const eA=new dt(we);function tA(){return eA}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zo(e)?"-0":e}}function xm(t){return{integerValue:""+t}}function nA(t,e){return RI(e)?xm(e):Zc(t,e)}/**
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
 */class Ra{constructor(){this._=void 0}}function rA(t,e,n){return t instanceof _i?function(s,i){const a={fields:{[pm]:{stringValue:dm},[mm]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Wc(i)&&(i=Kc(i)),i&&(a.fields[gm]=i),{mapValue:a}}(n,e):t instanceof yi?Dm(t,e):t instanceof vi?Nm(t,e):function(s,i){const a=Om(s,i),l=id(a)+id(s.Re);return Ql(a)&&Ql(s.Re)?xm(l):Zc(s.serializer,l)}(t,e)}function sA(t,e,n){return t instanceof yi?Dm(t,e):t instanceof vi?Nm(t,e):n}function Om(t,e){return t instanceof Jo?function(r){return Ql(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class _i extends Ra{}class yi extends Ra{constructor(e){super(),this.elements=e}}function Dm(t,e){const n=Vm(e);for(const r of t.elements)n.some(s=>mn(s,r))||n.push(r);return{arrayValue:{values:n}}}class vi extends Ra{constructor(e){super(),this.elements=e}}function Nm(t,e){let n=Vm(e);for(const r of t.elements)n=n.filter(s=>!mn(s,r));return{arrayValue:{values:n}}}class Jo extends Ra{constructor(e,n){super(),this.serializer=e,this.Re=n}}function id(t){return lt(t.integerValue||t.doubleValue)}function Vm(t){return Qc(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n){this.field=e,this.transform=n}}function oA(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof yi&&s instanceof yi||r instanceof vi&&s instanceof vi?hs(r.elements,s.elements,mn):r instanceof Jo&&s instanceof Jo?mn(r.Re,s.Re):r instanceof _i&&s instanceof _i}(t.transform,e.transform)}class aA{constructor(e,n){this.version=e,this.transformResults=n}}class kn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new kn}static exists(e){return new kn(void 0,e)}static updateTime(e){return new kn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ao(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Sa{}function Mm(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fm(t.key,kn.none()):new Di(t.key,t.data,kn.none());{const n=t.data,r=Xt.empty();let s=new dt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let a=n.field(i);a===null&&i.length>1&&(i=i.popLast(),a=n.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Fr(t.key,r,new Yt(s.toArray()),kn.none())}}function lA(t,e,n){t instanceof Di?function(s,i,a){const l=s.value.clone(),c=ad(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Fr?function(s,i,a){if(!Ao(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=ad(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Lm(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ni(t,e,n,r){return t instanceof Di?function(i,a,l,c){if(!Ao(i.precondition,a))return l;const u=i.value.clone(),f=ld(i.fieldTransforms,c,a);return u.setAll(f),a.convertToFoundDocument(a.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fr?function(i,a,l,c){if(!Ao(i.precondition,a))return l;const u=ld(i.fieldTransforms,c,a),f=a.data;return f.setAll(Lm(i)),f.setAll(u),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,a,l){return Ao(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function cA(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Om(r.transform,s||null);i!=null&&(n===null&&(n=Xt.empty()),n.set(r.field,i))}return n||null}function od(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&hs(r,s,(i,a)=>oA(i,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Di extends Sa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fr extends Sa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ad(t,e,n){const r=new Map;ze(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let s=0;s<n.length;s++){const i=t[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,sA(a,l,n[s]))}return r}function ld(t,e,n){const r=new Map;for(const s of t){const i=s.transform,a=n.data.field(s.field);r.set(s.field,rA(i,a,e))}return r}class Fm extends Sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class uA extends Sa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lA(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ni(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=km();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=n.has(s.key)?null:l;const c=Mm(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(Fe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),wt())}isEqual(e){return this.batchId===e.batchId&&hs(this.mutations,e.mutations,(n,r)=>od(n,r))&&hs(this.baseMutations,e.baseMutations,(n,r)=>od(n,r))}}class eu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){ze(e.mutations.length===r.length,58842,{fe:e.mutations.length,ge:r.length});let s=function(){return YI}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new eu(e,n,r,s)}}/**
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
 */var We,Ee;function dA(t){switch(t){case B.OK:return ge(64938);case B.CANCELLED:case B.UNKNOWN:case B.DEADLINE_EXCEEDED:case B.RESOURCE_EXHAUSTED:case B.INTERNAL:case B.UNAVAILABLE:case B.UNAUTHENTICATED:return!1;case B.INVALID_ARGUMENT:case B.NOT_FOUND:case B.ALREADY_EXISTS:case B.PERMISSION_DENIED:case B.FAILED_PRECONDITION:case B.ABORTED:case B.OUT_OF_RANGE:case B.UNIMPLEMENTED:case B.DATA_LOSS:return!0;default:return ge(15467,{code:t})}}function pA(t){if(t===void 0)return Or("GRPC error has no .code"),B.UNKNOWN;switch(t){case We.OK:return B.OK;case We.CANCELLED:return B.CANCELLED;case We.UNKNOWN:return B.UNKNOWN;case We.DEADLINE_EXCEEDED:return B.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return B.RESOURCE_EXHAUSTED;case We.INTERNAL:return B.INTERNAL;case We.UNAVAILABLE:return B.UNAVAILABLE;case We.UNAUTHENTICATED:return B.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return B.INVALID_ARGUMENT;case We.NOT_FOUND:return B.NOT_FOUND;case We.ALREADY_EXISTS:return B.ALREADY_EXISTS;case We.PERMISSION_DENIED:return B.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return B.FAILED_PRECONDITION;case We.ABORTED:return B.ABORTED;case We.OUT_OF_RANGE:return B.OUT_OF_RANGE;case We.UNIMPLEMENTED:return B.UNIMPLEMENTED;case We.DATA_LOSS:return B.DATA_LOSS;default:return ge(39323,{code:t})}}(Ee=We||(We={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new Bc([4294967295,4294967295],0);class gA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function mA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function _A(t,e){return Yl(t,e.toTimestamp())}function is(t){return ze(!!t,49232),Fe.fromTimestamp(function(n){const r=Dr(n);return new et(r.seconds,r.nanos)}(t))}function Um(t,e){return Zl(t,e).canonicalString()}function Zl(t,e){const n=function(s){return new Xe(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function yA(t){const e=Xe.fromString(t);return ze(RA(e),10190,{key:e.toString()}),e}function ec(t,e){return Um(t.databaseId,e.path)}function vA(t){const e=yA(t);return e.length===4?Xe.emptyPath():wA(e)}function EA(t){return new Xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function wA(t){return ze(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function cd(t,e,n){return{name:ec(t,e),fields:n.value.mapValue.fields}}function bA(t,e){let n;if(e instanceof Di)n={update:cd(t,e.key,e.value)};else if(e instanceof Fm)n={delete:ec(t,e.key)};else if(e instanceof Fr)n={update:cd(t,e.key,e.data),updateMask:AA(e.fieldMask)};else{if(!(e instanceof uA))return ge(16599,{ft:e.type});n={verify:ec(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const l=a.transform;if(l instanceof _i)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof yi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof vi)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Jo)return{fieldPath:a.field.canonicalString(),increment:l.Re};throw ge(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:_A(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ge(27497)}(t,e.precondition)),n}function TA(t,e){return t&&t.length>0?(ze(e!==void 0,14353),t.map(n=>function(s,i){let a=s.updateTime?is(s.updateTime):is(i);return a.isEqual(Fe.min())&&(a=is(i)),new aA(a,s.transformResults||[])}(n,e))):[]}function IA(t){let e=vA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ze(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=$m(p);return g instanceof lr&&bm(g)?g.getFilters():[g]}(n.where));let a=[];n.orderBy&&(a=function(p){return p.map(g=>function(S){return new Qo(Qr(S.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,Gc(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,_=p.values||[];return new Ko(_,g)}(n.startAt));let u=null;return n.endAt&&(u=function(p){const g=!p.before,_=p.values||[];return new Ko(_,g)}(n.endAt)),qI(e,s,a,i,l,"F",c,u)}function $m(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qr(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qr(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qr(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Qr(n.unaryFilter.field);return Ze.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ge(61313);default:return ge(60726)}}(t):t.fieldFilter!==void 0?function(n){return Ze.create(Qr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ge(58110);default:return ge(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return lr.create(n.compositeFilter.filters.map(r=>$m(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ge(1026)}}(n.compositeFilter.op))}(t):ge(30097,{filter:t})}function Qr(t){return ft.fromServerFormat(t.fieldPath)}function AA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA{constructor(e){this.wt=e}}function PA(t){const e=IA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Jl(e,e.limit,"L"):e}/**
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
 */class CA{constructor(){this.Cn=new kA}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(ar.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(ar.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class kA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new dt(Xe.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new dt(Xe.comparator)).toArray()}}/**
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
 */const hd="LruGarbageCollector",xA=1048576;function fd([t,e],[n,r]){const s=we(t,n);return s===0?we(e,r):s}class OA{constructor(e){this.Er=e,this.buffer=new dt(fd),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();fd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class DA{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){Z(hd,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Oi(n)?Z(hd,"Ignoring IndexedDB error during garbage collection: ",n):await Hc(n)}await this.mr(3e5)})}}class NA{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(zc.le);const r=new OA(n);return this.gr.forEachTarget(e,s=>r.Rr(s.sequenceNumber)).next(()=>this.gr.yr(e,s=>r.Rr(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Z("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(ud)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(Z("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ud):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,s,i,a,l,c,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(p=>(p>this.params.maximumSequenceNumbersToCollect?(Z("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,a=Date.now(),this.nthSequenceNumber(e,s))).next(p=>(r=p,l=Date.now(),this.removeTargets(e,r,n))).next(p=>(i=p,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(p=>(u=Date.now(),Kr()<=_e.DEBUG&&Z("LruGarbageCollector",`LRU Garbage Collection
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
 */class MA{constructor(){this.changes=new Lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Qt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class FA{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ni(r.mutation,s,Yt.empty(),et.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,wt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=wt()){const s=Tr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let a=lo();return i.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=Tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,wt()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,s){let i=Xo();const a=ti(),l=function(){return ti()}();return n.forEach((c,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Fr)?i=i.insert(u.key,u):f!==void 0?(a.set(u.key,f.mutation.getFieldMask()),ni(f.mutation,u,f.mutation.getFieldMask(),et.now())):a.set(u.key,Yt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,f)=>a.set(u,f)),n.forEach((u,f)=>{var p;return l.set(u,new LA(f,(p=a.get(u))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=ti();let s=new Vt((a,l)=>a-l),i=wt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(c=>{const u=n.get(c);if(u===null)return;let f=r.get(c)||Yt.empty();f=l.applyToLocalView(u,f),r.set(c,f);const p=(s.get(l.batchId)||wt()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),u=c.key,f=c.value,p=km();f.forEach(g=>{if(!i.has(g)){const _=Mm(n.get(g),r.get(g));_!==null&&p.set(g,_),i=i.add(g)}}),a.push(this.documentOverlayCache.saveOverlays(e,u,p))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(a){return pe.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):WI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Tr());let l=gi,c=i;return a.next(u=>L.forEach(u,(f,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{c=c.insert(f,g)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,wt())).next(f=>({batchId:l,changes:Cm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new pe(n)).next(r=>{let s=lo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let a=lo();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,c=>{const u=function(p,g){return new Aa(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next(f=>{f.forEach((p,g)=>{a=a.insert(p,g)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(a=>{i.forEach((c,u)=>{const f=u.getKey();a.get(f)===null&&(a=a.insert(f,Qt.newInvalidDocument(f)))});let l=lo();return a.forEach((c,u)=>{const f=i.get(c);f!==void 0&&ni(f.mutation,u,Yt.empty(),et.now()),Yc(n,u)&&(l=l.insert(c,u))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return L.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:is(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(s){return{name:s.name,query:PA(s.bundledQuery),readTime:is(s.readTime)}}(n)),L.resolve()}}/**
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
 */class tu{constructor(){this.$r=new dt(Ye.Ur),this.Kr=new dt(Ye.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new Ye(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new pe(new Xe([])),r=new Ye(n,e),s=new Ye(n,e+1),i=[];return this.Kr.forEachInRange([r,s],a=>{this.zr(a),i.push(a.key)}),i}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new pe(new Xe([])),r=new Ye(n,e),s=new Ye(n,e+1);let i=wt();return this.Kr.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const n=new Ye(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return pe.comparator(e.key,n.key)||we(e.Zr,n.Zr)}static Wr(e,n){return we(e.Zr,n.Zr)||pe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new dt(Ye.Ur)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new hA(i,n,r,s);this.mutationQueue.push(a);for(const l of s)this.Xr=this.Xr.add(new Ye(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,n){return L.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.ti(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?qc:this.nr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),s=new Ye(n,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([r,s],a=>{const l=this.ei(a.Zr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new dt(we);return n.forEach(s=>{const i=new Ye(s,0),a=new Ye(s,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([i,a],l=>{r=r.add(l.Zr)})}),L.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;pe.isDocumentKey(i)||(i=i.child(""));const a=new Ye(new pe(i),0);let l=new dt(we);return this.Xr.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(l=l.add(c.Zr)),!0)},a),L.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const s=this.ei(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){ze(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return L.forEach(n.mutations,s=>{const i=new Ye(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new Ye(n,0),s=this.Xr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class qA{constructor(e){this.persistence=e,this.oi=new Lr(n=>Xc(n),Jc),this.lastRemoteSnapshotVersion=Fe.min(),this.highestTargetId=0,this._i=0,this.ai=new tu,this.targetCount=0,this.ui=gs.cr()}forEachTarget(e,n){return this.oi.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),L.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new gs(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Tr(n),L.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.oi.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(e,n){this.ci={},this.overlays={},this.li=new zc(0),this.hi=!1,this.hi=!0,this.Pi=new BA,this.referenceDelegate=e(this),this.Ti=new qA(this),this.indexManager=new CA,this.remoteDocumentCache=function(s){return new HA(s)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new SA(n),this.Ei=new UA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new $A,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new jA(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new GA(this.li.next());return this.referenceDelegate.di(),r(s).next(i=>this.referenceDelegate.Ai(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ri(e,n){return L.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class GA extends II{constructor(e){super(),this.currentSequenceNumber=e}}class nu{constructor(e){this.persistence=e,this.Vi=new tu,this.mi=null}static fi(e){return new nu(e)}get gi(){if(this.mi)return this.mi;throw ge(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(s=>this.gi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.gi.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.gi,r=>{const s=pe.fromPath(r);return this.pi(e,s).next(i=>{i||n.removeEntry(s,Fe.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return L.or([()=>L.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class Yo{constructor(e,n){this.persistence=e,this.yi=new Lr(r=>SI(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=VA(this,n)}static fi(e,n){return new Yo(e,n)}di(){}Ai(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}Sr(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return L.forEach(this.yi,(r,s)=>this.Dr(e,r,s).next(i=>i?L.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.si(e,a=>this.Dr(e,a,n).next(l=>{l||(r++,i.removeEntry(a,Fe.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),L.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=To(e.data.value)),n}Dr(e,n,r){return L.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.yi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class KA{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return Gw()?8:AI(Tt())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ws(e,n).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Ss(e,n,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new WA;return this.bs(e,n,a).next(l=>{if(i.result=l,this.fs)return this.Ds(e,n,a,l.size)})}).next(()=>i.result)}Ds(e,n,r,s){return r.documentReadCount<this.gs?(Kr()<=_e.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Fs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),L.resolve()):(Kr()<=_e.DEBUG&&Z("QueryEngine","Query:",Fs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.ps*s?(Kr()<=_e.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Fs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sr(n))):L.resolve())}ws(e,n){if(sd(n))return L.resolve(null);let r=Sr(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Jl(n,null,"F"),r=Sr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=wt(...i);return this.ys.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.vs(n,l);return this.Cs(n,u,a,c.readTime)?this.ws(e,Jl(n,null,"F")):this.Fs(e,u,n,c)}))})))}Ss(e,n,r,s){return sd(n)||s.isEqual(Fe.min())?L.resolve(null):this.ys.getDocuments(e,r).next(i=>{const a=this.vs(n,i);return this.Cs(n,a,r,s)?L.resolve(null):(Kr()<=_e.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Fs(n)),this.Fs(e,a,n,EI(s,gi)).next(l=>l))})}vs(e,n){let r=new dt(QI(e));return n.forEach((s,i)=>{Yc(e,i)&&(r=r.add(i))}),r}Cs(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}bs(e,n,r){return Kr()<=_e.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Fs(n)),this.ys.getDocumentsMatchingQuery(e,n,ar.min(),r)}Fs(e,n,r,s){return this.ys.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QA="LocalStore";class XA{constructor(e,n,r,s){this.persistence=e,this.Ms=n,this.serializer=s,this.xs=new Vt(we),this.Os=new Lr(i=>Xc(i),Jc),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new FA(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function JA(t,e,n,r){return new XA(t,e,n,r)}async function Hm(t,e){const n=Ve(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],l=[];let c=wt();for(const u of s){a.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}for(const u of i){l.push(u.batchId);for(const f of u.mutations)c=c.add(f.key)}return n.localDocuments.getDocuments(r,c).next(u=>({ks:u,removedBatchIds:a,addedBatchIds:l}))})})}function YA(t,e){const n=Ve(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(l,c,u,f){const p=u.batch,g=p.keys();let _=L.resolve();return g.forEach(S=>{_=_.next(()=>f.getEntry(c,S)).next(k=>{const O=u.docVersions.get(S);ze(O!==null,48541),k.version.compareTo(O)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=wt();for(let u=0;u<l.mutationResults.length;++u)l.mutationResults[u].transformResults.length>0&&(c=c.add(l.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ZA(t){const e=Ve(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function e1(t,e){const n=Ve(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=qc),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class dd{constructor(){this.activeTargetIds=tA()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class t1{constructor(){this.xo=new dd,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new dd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */let co=null;function tc(){return co===null?co=function(){return 268435456+Math.round(2147483648*Math.random())}():co++,"0x"+co.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _l="RestConnection",r1={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class s1{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${s}`,this.Go=this.databaseId.database===Go?`project_id=${r}`:`project_id=${r}&database_id=${s}`}zo(e,n,r,s,i){const a=tc(),l=this.jo(e,n.toUriEncodedString());Z(_l,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(c,s,i);const{host:u}=new URL(l),f=Ri(u);return this.Jo(e,l,c,r,f).then(p=>(Z(_l,`Received RPC '${e}' ${a}: `,p),p),p=>{throw Ia(_l,`RPC '${e}' ${a} failed with error: `,p,"url: ",l,"request:",r),p})}Yo(e,n,r,s,i,a){return this.zo(e,n,r,s,i)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Es}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}jo(e,n){const r=r1[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const yt="WebChannelConnection";class o1 extends s1{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,s,i){const a=tc();return new Promise((l,c)=>{const u=new rm;u.setWithCredentials(!0),u.listenOnce(sm.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case bo.NO_ERROR:const p=u.getResponseJson();Z(yt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(p)),l(p);break;case bo.TIMEOUT:Z(yt,`RPC '${e}' ${a} timed out`),c(new ue(B.DEADLINE_EXCEEDED,"Request time out"));break;case bo.HTTP_ERROR:const g=u.getStatus();if(Z(yt,`RPC '${e}' ${a} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_==null?void 0:_.error;if(S&&S.status&&S.message){const k=function(H){const U=H.toLowerCase().replace(/_/g,"-");return Object.values(B).indexOf(U)>=0?U:B.UNKNOWN}(S.status);c(new ue(k,S.message))}else c(new ue(B.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new ue(B.UNAVAILABLE,"Connection failed."));break;default:ge(9055,{l_:e,streamId:a,h_:u.getLastErrorCode(),P_:u.getLastError()})}}finally{Z(yt,`RPC '${e}' ${a} completed.`)}});const f=JSON.stringify(s);Z(yt,`RPC '${e}' ${a} sending request:`,s),u.send(n,"POST",f,r,15)})}T_(e,n,r){const s=tc(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=am(),l=om(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Ho(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const f=i.join("");Z(yt,`Creating RPC '${e}' stream ${s}: ${f}`,c);const p=a.createWebChannel(f,c);let g=!1,_=!1;const S=new i1({Zo:O=>{_?Z(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(Z(yt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Z(yt,`RPC '${e}' stream ${s} sending:`,O),p.send(O))},Xo:()=>p.close()}),k=(O,H,U)=>{O.listen(H,j=>{try{U(j)}catch(z){setTimeout(()=>{throw z},0)}})};return k(p,js.EventType.OPEN,()=>{_||(Z(yt,`RPC '${e}' stream ${s} transport opened.`),S.__())}),k(p,js.EventType.CLOSE,()=>{_||(_=!0,Z(yt,`RPC '${e}' stream ${s} transport closed`),S.u_())}),k(p,js.EventType.ERROR,O=>{_||(_=!0,Ia(yt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),S.u_(new ue(B.UNAVAILABLE,"The operation could not be completed")))}),k(p,js.EventType.MESSAGE,O=>{var H;if(!_){const U=O.data[0];ze(!!U,16349);const j=U,z=(j==null?void 0:j.error)||((H=j[0])===null||H===void 0?void 0:H.error);if(z){Z(yt,`RPC '${e}' stream ${s} received error:`,z);const le=z.status;let se=function(y){const I=We[y];if(I!==void 0)return pA(I)}(le),A=z.message;se===void 0&&(se=B.INTERNAL,A="Unknown error status: "+le+" with message "+z.message),_=!0,S.u_(new ue(se,A)),p.close()}else Z(yt,`RPC '${e}' stream ${s} received:`,U),S.c_(U)}}),k(l,im.STAT_EVENT,O=>{O.stat===ql.PROXY?Z(yt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===ql.NOPROXY&&Z(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.a_()},0),S}}function yl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pa(t){return new gA(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const md="PersistentStream";class a1{constructor(e,n,r,s,i,a,l,c){this.xi=e,this.y_=r,this.w_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new zm(e,n)}F_(){return this.state===1||this.state===5||this.M_()}M_(){return this.state===2||this.state===3}start(){this.v_=0,this.state!==4?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&this.b_===null&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,()=>this.B_()))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,n){this.k_(),this.q_(),this.C_.cancel(),this.S_++,e!==4?this.C_.reset():n&&n.code===B.RESOURCE_EXHAUSTED?(Or(n.toString()),Or("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):n&&n.code===B.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),n=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.S_===n&&this.K_(r,s)},r=>{e(()=>{const s=new ue(B.UNKNOWN,"Fetching auth token failed: "+r.message);return this.W_(s)})})}K_(e,n){const r=this.U_(this.S_);this.stream=this.G_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,()=>(this.M_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(s=>{r(()=>this.W_(s))}),this.stream.onMessage(s=>{r(()=>++this.v_==1?this.z_(s):this.onNext(s))})}x_(){this.state=5,this.C_.f_(async()=>{this.state=0,this.start()})}W_(e){return Z(md,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return n=>{this.xi.enqueueAndForget(()=>this.S_===e?n():(Z(md,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class l1 extends a1{constructor(e,n,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,a),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,n){return this.connection.T_("Write",e,n)}z_(e){return ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.X_()}onNext(e){ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const n=TA(e.writeResults,e.commitTime),r=is(e.commitTime);return this.listener.ea(r,n)}ta(){const e={};e.database=EA(this.serializer),this.L_(e)}Z_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>bA(this.serializer,r))};this.L_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{}class u1 extends c1{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.na=!1}ra(){if(this.na)throw new ue(B.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,s){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.zo(e,Zl(n,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ue(B.UNKNOWN,i.toString())})}Yo(e,n,r,s,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Yo(e,Zl(n,r),s,a,l,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===B.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ue(B.UNKNOWN,a.toString())})}terminate(){this.na=!0,this.connection.terminate()}}class h1{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){this.ia===0&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve())))}ca(e){this.state==="Online"?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,e==="Online"&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(Or(n),this.oa=!1):Z("OnlineStateTracker",n)}la(){this.sa!==null&&(this.sa.cancel(),this.sa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="RemoteStore";class f1{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No(a=>{r.enqueueAndForget(async()=>{Mi(this)&&(Z(Ni,"Restarting streams for network reachability change."),await async function(c){const u=Ve(c);u.Ta.add(4),await Vi(u),u.da.set("Unknown"),u.Ta.delete(4),await Ca(u)}(this))})}),this.da=new h1(r,s)}}async function Ca(t){if(Mi(t))for(const e of t.Ia)await e(!0)}async function Vi(t){for(const e of t.Ia)await e(!1)}function Mi(t){return Ve(t).Ta.size===0}async function qm(t,e,n){if(!Oi(e))throw e;t.Ta.add(1),await Vi(t),t.da.set("Offline"),n||(n=()=>ZA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z(Ni,"Retrying IndexedDB access"),await n(),t.Ta.delete(1),await Ca(t)})}function Gm(t,e){return e().catch(n=>qm(t,n,e))}async function ka(t){const e=Ve(t),n=cr(e);let r=e.ha.length>0?e.ha[e.ha.length-1].batchId:qc;for(;d1(e);)try{const s=await e1(e.localStore,r);if(s===null){e.ha.length===0&&n.N_();break}r=s.batchId,p1(e,s)}catch(s){await qm(e,s)}Wm(e)&&Km(e)}function d1(t){return Mi(t)&&t.ha.length<10}function p1(t,e){t.ha.push(e);const n=cr(t);n.M_()&&n.Y_&&n.Z_(e.mutations)}function Wm(t){return Mi(t)&&!cr(t).F_()&&t.ha.length>0}function Km(t){cr(t).start()}async function g1(t){cr(t).ta()}async function m1(t){const e=cr(t);for(const n of t.ha)e.Z_(n.mutations)}async function _1(t,e,n){const r=t.ha.shift(),s=eu.from(r,e,n);await Gm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ka(t)}async function y1(t,e){e&&cr(t).Y_&&await async function(r,s){if(function(a){return dA(a)&&a!==B.ABORTED}(s.code)){const i=r.ha.shift();cr(r).O_(),await Gm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ka(r)}}(t,e),Wm(t)&&Km(t)}async function _d(t,e){const n=Ve(t);n.asyncQueue.verifyOperationInProgress(),Z(Ni,"RemoteStore received new credentials");const r=Mi(n);n.Ta.add(3),await Vi(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ta.delete(3),await Ca(n)}async function v1(t,e){const n=Ve(t);e?(n.Ta.delete(2),await Ca(n)):e||(n.Ta.add(2),await Vi(n),n.da.set("Unknown"))}function cr(t){return t.Va||(t.Va=function(n,r,s){const i=Ve(n);return i.ra(),new l1(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{e_:()=>Promise.resolve(),n_:g1.bind(null,t),i_:y1.bind(null,t),X_:m1.bind(null,t),ea:_1.bind(null,t)}),t.Ia.push(async e=>{e?(t.Va.O_(),await ka(t)):(await t.Va.stop(),t.ha.length>0&&(Z(Ni,`Stopping write stream with ${t.ha.length} pending writes`),t.ha=[]))})),t.Va}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Rr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const a=Date.now()+r,l=new su(e,n,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ue(B.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qm(t,e){if(Or("AsyncQueue",`${e}: ${t}`),Oi(t))return new ue(B.UNAVAILABLE,`${e}: ${t}`);throw t}class E1{constructor(){this.queries=yd(),this.onlineState="Unknown",this.ba=new Set}terminate(){(function(n,r){const s=Ve(n),i=s.queries;s.queries=yd(),i.forEach((a,l)=>{for(const c of l.ya)c.onError(r)})})(this,new ue(B.ABORTED,"Firestore shutting down"))}}function yd(){return new Lr(t=>Sm(t),Rm)}function w1(t){t.ba.forEach(e=>{e.next()})}var vd,Ed;(Ed=vd||(vd={})).Ca="default",Ed.Cache="cache";const b1="SyncEngine";class T1{constructor(e,n,r,s,i,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.au={},this.uu=new Lr(l=>Sm(l),Rm),this.cu=new Map,this.lu=new Set,this.hu=new Vt(pe.comparator),this.Pu=new Map,this.Tu=new tu,this.Iu={},this.Eu=new Map,this.du=gs.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return this.Au===!0}}async function I1(t,e,n){const r=P1(t);try{const s=await function(a,l){const c=Ve(a),u=et.now(),f=l.reduce((_,S)=>_.add(S.key),wt());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",_=>{let S=Xo(),k=wt();return c.Bs.getEntries(_,f).next(O=>{S=O,S.forEach((H,U)=>{U.isValidDocument()||(k=k.add(H))})}).next(()=>c.localDocuments.getOverlayedDocuments(_,S)).next(O=>{p=O;const H=[];for(const U of l){const j=cA(U,p.get(U.key).overlayedDocument);j!=null&&H.push(new Fr(U.key,j,vm(j.value.mapValue),kn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,u,H,l)}).next(O=>{g=O;const H=O.applyToLocalDocumentSet(p,k);return c.documentOverlayCache.saveOverlays(_,O.batchId,H)})}).then(()=>({batchId:g.batchId,changes:Cm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,l,c){let u=a.Iu[a.currentUser.toKey()];u||(u=new Vt(we)),u=u.insert(l,c),a.Iu[a.currentUser.toKey()]=u}(r,s.batchId,n),await xa(r,s.changes),await ka(r.remoteStore)}catch(s){const i=Qm(s,"Failed to persist write");n.reject(i)}}function wd(t,e,n){const r=Ve(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.uu.forEach((i,a)=>{const l=a.view.Da(e);l.snapshot&&s.push(l.snapshot)}),function(a,l){const c=Ve(a);c.onlineState=l;let u=!1;c.queries.forEach((f,p)=>{for(const g of p.ya)g.Da(l)&&(u=!0)}),u&&w1(c)}(r.eventManager,e),s.length&&r.au.j_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function A1(t,e){const n=Ve(t),r=e.batch.batchId;try{const s=await YA(n.localStore,e);Jm(n,r,null),Xm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await xa(n,s)}catch(s){await Hc(s)}}async function R1(t,e,n){const r=Ve(t);try{const s=await function(a,l){const c=Ve(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let f;return c.mutationQueue.lookupMutationBatch(u,l).next(p=>(ze(p!==null,37113),f=p.keys(),c.mutationQueue.removeMutationBatch(u,p))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f)).next(()=>c.localDocuments.getDocuments(u,f))})}(r.localStore,e);Jm(r,e,n),Xm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await xa(r,s)}catch(s){await Hc(s)}}function Xm(t,e){(t.Eu.get(e)||[]).forEach(n=>{n.resolve()}),t.Eu.delete(e)}function Jm(t,e,n){const r=Ve(t);let s=r.Iu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Iu[r.currentUser.toKey()]=s}}async function xa(t,e,n){const r=Ve(t),s=[],i=[],a=[];r.uu.isEmpty()||(r.uu.forEach((l,c)=>{a.push(r.Ru(c,e,n).then(u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=void 0)===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(u){s.push(u);const p=ru.Rs(c.targetId,u);i.push(p)}}))}),await Promise.all(a),r.au.j_(s),await async function(c,u){const f=Ve(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>L.forEach(u,g=>L.forEach(g.ds,_=>f.persistence.referenceDelegate.addReference(p,g.targetId,_)).next(()=>L.forEach(g.As,_=>f.persistence.referenceDelegate.removeReference(p,g.targetId,_)))))}catch(p){if(!Oi(p))throw p;Z(QA,"Failed to update sequence numbers: "+p)}for(const p of u){const g=p.targetId;if(!p.fromCache){const _=f.xs.get(g),S=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(S);f.xs=f.xs.insert(g,k)}}}(r.localStore,i))}async function S1(t,e){const n=Ve(t);if(!n.currentUser.isEqual(e)){Z(b1,"User change. New user:",e.toKey());const r=await Hm(n.localStore,e);n.currentUser=e,function(i,a){i.Eu.forEach(l=>{l.forEach(c=>{c.reject(new ue(B.CANCELLED,a))})}),i.Eu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await xa(n,r.ks)}}function P1(t){const e=Ve(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=A1.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=R1.bind(null,e),e}class Zo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Pa(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,n){return null}bu(e,n){return null}wu(e){return JA(this.persistence,new KA,e.initialUser,this.serializer)}yu(e){return new jm(nu.fi,this.serializer)}pu(e){return new t1}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Zo.provider={build:()=>new Zo};class C1 extends Zo{constructor(e){super(),this.cacheSizeBytes=e}Su(e,n){ze(this.persistence.referenceDelegate instanceof Yo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new DA(r,e.asyncQueue,n)}yu(e){const n=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new jm(r=>Yo.fi(r,n),this.serializer)}}class nc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>wd(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=S1.bind(null,this.syncEngine),await v1(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new E1}()}createDatastore(e){const n=Pa(e.databaseInfo.databaseId),r=function(i){return new o1(i)}(e.databaseInfo);return function(i,a,l,c){return new u1(i,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,a,l){return new f1(r,s,i,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>wd(this.syncEngine,n,0),function(){return gd.C()?new gd:new n1}())}createSyncEngine(e,n){return function(s,i,a,l,c,u,f){const p=new T1(s,i,a,l,c,u);return f&&(p.Au=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Ve(s);Z(Ni,"RemoteStore shutting down."),i.Ta.add(5),await Vi(i),i.Ea.shutdown(),i.da.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}nc.provider={build:()=>new nc};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur="FirestoreClient";class k1{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=um.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{Z(ur,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Z(ur,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vl(t,e){t.asyncQueue.verifyOperationInProgress(),Z(ur,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Hm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await x1(t);Z(ur,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>_d(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>_d(e.remoteStore,s)),t._onlineComponents=e}async function x1(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z(ur,"Using user provided OfflineComponentProvider");try{await vl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===B.FAILED_PRECONDITION||s.code===B.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Ia("Error using user provided cache. Falling back to memory cache: "+n),await vl(t,new Zo)}}else Z(ur,"Using default OfflineComponentProvider"),await vl(t,new C1(void 0));return t._offlineComponents}async function O1(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z(ur,"Using user provided OnlineComponentProvider"),await bd(t,t._uninitializedComponentsProvider._online)):(Z(ur,"Using default OnlineComponentProvider"),await bd(t,new nc))),t._onlineComponents}function D1(t){return O1(t).then(e=>e.syncEngine)}/**
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
 */function N1(t,e,n){if(!n)throw new ue(B.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function V1(t,e,n,r){if(e===!0&&r===!0)throw new ue(B.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Id(t){if(!pe.isDocumentKey(t))throw new ue(B.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function iu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ge(12329,{type:typeof t})}function rc(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ue(B.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=iu(t);throw new ue(B.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zm="firestore.googleapis.com",Ad=!0;class Rd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ue(B.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Zm,this.ssl=Ad}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Ad;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Bm;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<xA)throw new ue(B.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}V1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ym((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ue(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ue(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ue(B.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ou{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rd({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ue(B.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ue(B.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rd(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new uI;switch(r.type){case"firstParty":return new pI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ue(B.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Td.get(n);r&&(Z("ComponentProvider","Removing Datastore"),Td.delete(n),r.terminate())}(this),Promise.resolve()}}function M1(t,e,n,r={}){var s;t=rc(t,ou);const i=Ri(e),a=t._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:t._getEmulatorOptions()}),c=`${e}:${n}`;i&&(yg(`https://${c}`),vg("Firestore",!0)),a.host!==Zm&&a.host!==c&&Ia("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!Pr(u,l)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=vt.MOCK_USER;else{f=Lw(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new ue(B.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new vt(g)}t._authCredentials=new hI(new cm(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new au(this.firestore,e,this._query)}}class xn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new xn(this.firestore,e,this._key)}}class Ei extends au{constructor(e,n,r){super(e,n,GI(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new xn(this.firestore,null,new pe(e))}withConverter(e){return new Ei(this.firestore,e,this._path)}}function L1(t,e,...n){if(t=pn(t),arguments.length===1&&(e=um.newId()),N1("doc","path",e),t instanceof ou){const r=Xe.fromString(e,...n);return Id(r),new xn(t,null,new pe(r))}{if(!(t instanceof xn||t instanceof Ei))throw new ue(B.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Xe.fromString(e,...n));return Id(r),new xn(t.firestore,t instanceof Ei?t.converter:null,new pe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd="AsyncQueue";class Pd{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new zm(this,"async_queue_retry"),this.ec=()=>{const r=yl();r&&Z(Sd,"Visibility state changed to "+r.visibilityState),this.C_.p_()},this.tc=e;const n=yl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const n=yl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise(()=>{});const n=new Rr;return this.rc(()=>this.ju&&this.Zu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.zu.push(e),this.sc()))}async sc(){if(this.zu.length!==0){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!Oi(e))throw e;Z(Sd,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_(()=>this.sc())}}rc(e){const n=this.tc.then(()=>(this.Yu=!0,e().catch(r=>{throw this.Ju=r,this.Yu=!1,Or("INTERNAL UNHANDLED ERROR: ",Cd(r)),r}).then(r=>(this.Yu=!1,r))));return this.tc=n,n}enqueueAfterDelay(e,n,r){this.nc(),this.Xu.indexOf(e)>-1&&(n=0);const s=su.createAndSchedule(this,e,n,r,i=>this.oc(i));return this.Hu.push(s),s}nc(){this.Ju&&ge(47125,{_c:Cd(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do e=this.tc,await e;while(e!==this.tc)}uc(e){for(const n of this.Hu)if(n.timerId===e)return!0;return!1}cc(e){return this.ac().then(()=>{this.Hu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Hu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ac()})}lc(e){this.Xu.push(e)}oc(e){const n=this.Hu.indexOf(e);this.Hu.splice(n,1)}}function Cd(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class e_ extends ou{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Pd,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Pd(e),this._firestoreClient=void 0,await e}}}function F1(t,e){const n=typeof t=="object"?t:Tg(),r=typeof t=="string"?t:Go,s=kc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Vw("firestore");i&&M1(s,...i)}return s}function U1(t){if(t._terminated)throw new ue(B.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||$1(t),t._firestoreClient}function $1(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,u,f){return new xI(l,c,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Ym(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new k1(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wi(gn.fromBase64String(e))}catch(n){throw new ue(B.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wi(gn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ue(B.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class n_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ue(B.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ue(B.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
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
 */const B1=/^__.*__$/;class j1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Di(e,this.data,n,this.fieldTransforms)}}function s_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ge(40011,{hc:t})}}class cu{constructor(e,n,r,s,i,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new cu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.dc(e),s}Ac(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tc({path:r,Ec:!1});return s.Pc(),s}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return ea(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(e.length===0)throw this.Vc("Document fields must not be empty");if(s_(this.hc)&&B1.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class H1{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Pa(e)}gc(e,n,r,s=!1){return new cu({hc:e,methodName:n,fc:r,path:ft.emptyPath(),Ec:!1,mc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function z1(t){const e=t._freezeSettings(),n=Pa(t._databaseId);return new H1(t._databaseId,!!e.ignoreUndefinedProperties,n)}function q1(t,e,n,r,s,i={}){const a=t.gc(i.merge||i.mergeFields?2:0,e,n,s);l_("Data must be an object, but it was:",a,r);const l=o_(r,a);let c,u;if(i.merge)c=new Yt(a.fieldMask),u=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=G1(e,p,n);if(!a.contains(g))throw new ue(B.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Q1(f,g)||f.push(g)}c=new Yt(f),u=a.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,u=a.fieldTransforms;return new j1(new Xt(l),c,u)}class uu extends lu{_toFieldTransform(e){return new iA(e.path,new _i)}isEqual(e){return e instanceof uu}}function i_(t,e){if(a_(t=pn(t)))return l_("Unsupported field value:",e,t),o_(t,e);if(t instanceof lu)return function(r,s){if(!s_(s.hc))throw s.Vc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Vc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Ec&&e.hc!==4)throw e.Vc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const l of r){let c=i_(l,s.Rc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=pn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return nA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=et.fromDate(r);return{timestampValue:Yl(s.serializer,i)}}if(r instanceof et){const i=new et(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yl(s.serializer,i)}}if(r instanceof n_)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof wi)return{bytesValue:mA(s.serializer,r._byteString)};if(r instanceof xn){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Vc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Um(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof r_)return function(a,l){return{mapValue:{fields:{[_m]:{stringValue:ym},[Wl]:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Vc("VectorValues must only contain numeric values.");return Zc(l.serializer,u)})}}}}}}(r,s);throw s.Vc(`Unsupported field value: ${iu(r)}`)}(t,e)}function o_(t,e){const n={};return fm(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ws(t,(r,s)=>{const i=i_(s,e.Ic(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function a_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof et||t instanceof n_||t instanceof wi||t instanceof xn||t instanceof lu||t instanceof r_)}function l_(t,e,n){if(!a_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=iu(n);throw r==="an object"?e.Vc(t+" a custom object"):e.Vc(t+" "+r)}}function G1(t,e,n){if((e=pn(e))instanceof t_)return e._internalPath;if(typeof e=="string")return K1(t,e);throw ea("Field path arguments must be of type string or ",t,!1,void 0,n)}const W1=new RegExp("[~\\*/\\[\\]]");function K1(t,e,n){if(e.search(W1)>=0)throw ea(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new t_(...e.split("."))._internalPath}catch{throw ea(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ea(t,e,n,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new ue(B.INVALID_ARGUMENT,l+t+c)}function Q1(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X1(t,e,n){let r;return r=t?t.toFirestore(e):e,r}function J1(t,e,n){t=rc(t,xn);const r=rc(t.firestore,e_),s=X1(t.converter,e);return Y1(r,[q1(z1(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,kn.none())])}function Y1(t,e){return function(r,s){const i=new Rr;return r.asyncQueue.enqueueAndForget(async()=>I1(await D1(r),s,i)),i.promise}(U1(t),e)}function Z1(){return new uu("serverTimestamp")}(function(e,n=!0){(function(s){Es=s})(ys),cs(new Cr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new e_(new fI(r.getProvider("auth-internal")),new gI(a,r.getProvider("app-check-internal")),function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new ue(B.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wo(u.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),sr(Hf,zf,e),sr(Hf,zf,"esm2017")})();const eR={apiKey:"AIzaSyC_acZxWWtGDDFPdxBaa2TR6JkQcw0k0Fk",authDomain:"afp-site-c1bd9.firebaseapp.com",projectId:"afp-site-c1bd9",storageBucket:"afp-site-c1bd9.firebasestorage.app",messagingSenderId:"533749269819",appId:"1:533749269819:web:47c5dbe921ef3aae83e31e",measurementId:"G-W9TQ1EE3PB"},tR=bg(eR),nR=F1(tR);lI();const rR={class:"footer"},sR={class:"footer-bottom"},iR={class:"footer-nav"},oR={class:"subscribe-box"},aR={key:0,class:"subscribe-message"},lR={class:"footer-copy"},cR={__name:"Footer",setup(t){const e=ot(""),n=ot(""),r=async()=>{try{const s=e.value.trim().toLowerCase();if(!s){n.value="Please enter a valid email.";return}await J1(L1(nR,"mailingList",s),{email:s,subscribedAt:Z1()}),n.value="Thank you for subscribing!",e.value=""}catch(s){s.code==="permission-denied"?n.value="You’re already subscribed.":(console.error("Unexpected error adding email:",s),n.value="An error occurred. Please try again later.")}};return(s,i)=>(ie(),he("footer",rR,[F("div",sR,[F("nav",iR,[re(Pe(it),{to:"/"},{default:Ke(()=>i[1]||(i[1]=[Qe("Home")])),_:1,__:[1]}),re(Pe(it),{to:"/about"},{default:Ke(()=>i[2]||(i[2]=[Qe("About")])),_:1,__:[2]}),re(Pe(it),{to:"/events"},{default:Ke(()=>i[3]||(i[3]=[Qe("Events")])),_:1,__:[3]}),re(Pe(it),{to:"/contact"},{default:Ke(()=>i[4]||(i[4]=[Qe("Contact")])),_:1,__:[4]})]),F("div",oR,[i[6]||(i[6]=F("h3",null,"Join our mailing list",-1)),F("form",{onSubmit:Zp(r,["prevent"])},[xo(F("input",{"onUpdate:modelValue":i[0]||(i[0]=a=>e.value=a),type:"email",placeholder:"Enter your email",required:"",class:"email-input"},null,512),[[Dl,e.value]]),i[5]||(i[5]=F("button",{type:"submit",class:"subscribe-button"},"Subscribe",-1))],32),n.value?(ie(),he("p",aR,je(n.value),1)):Ut("",!0)]),F("p",lR," © "+je(new Date().getFullYear())+" Association of Family Psychiatrists. All rights reserved. ",1)])]))}},uR=kt(cR,[["__scopeId","data-v-32f87464"]]),hR={class:"layout"},fR={class:"page-content"},dR={__name:"App",setup(t){return(e,n)=>(ie(),he(ut,null,[F("div",hR,[re(Rw),F("main",fR,[re(Pe(Sc))])]),re(uR)],64))}},pR=kt(dR,[["__scopeId","data-v-aa0b9fe9"]]),gR="modulepreload",mR=function(t){return"/site/"+t},kd={},Ge=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));s=a(n.map(u=>{if(u=mR(u),u in kd)return;kd[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":gR,f||(g.as="script"),g.crossOrigin="",g.href=u,c&&g.setAttribute("nonce",c),document.head.appendChild(g),f)return new Promise((_,S)=>{g.addEventListener("load",_),g.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})},_R="/site/assets/afp-logo-DTm74N-G.png";function hu(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Ur=hu();function c_(t){Ur=t}var ri={exec:()=>null};function Ce(t,e=""){let n=typeof t=="string"?t:t.source;const r={replace:(s,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(Ct.caret,"$1"),n=n.replace(s,a),r},getRegex:()=>new RegExp(n,e)};return r}var Ct={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceTabs:/^\t+/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] /,listReplaceTask:/^\[[ xX]\] +/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,unescapeTest:/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),hrRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),fencesBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}(?:\`\`\`|~~~)`),headingBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}#`),htmlBeginRegex:t=>new RegExp(`^ {0,${Math.min(3,t-1)}}<(?:[a-z].*>|!--)`,"i")},yR=/^(?:[ \t]*(?:\n|$))+/,vR=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,ER=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Li=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,wR=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,fu=/(?:[*+-]|\d{1,9}[.)])/,u_=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,h_=Ce(u_).replace(/bull/g,fu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),bR=Ce(u_).replace(/bull/g,fu).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),du=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,TR=/^[^\n]+/,pu=/(?!\s*\])(?:\\.|[^\[\]\\])+/,IR=Ce(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",pu).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),AR=Ce(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,fu).getRegex(),Oa="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",gu=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,RR=Ce("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",gu).replace("tag",Oa).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),f_=Ce(du).replace("hr",Li).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Oa).getRegex(),SR=Ce(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",f_).getRegex(),mu={blockquote:SR,code:vR,def:IR,fences:ER,heading:wR,hr:Li,html:RR,lheading:h_,list:AR,newline:yR,paragraph:f_,table:ri,text:TR},xd=Ce("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Li).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Oa).getRegex(),PR={...mu,lheading:bR,table:xd,paragraph:Ce(du).replace("hr",Li).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",xd).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Oa).getRegex()},CR={...mu,html:Ce(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",gu).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ri,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Ce(du).replace("hr",Li).replace("heading",` *#{1,6} *[^
]`).replace("lheading",h_).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},kR=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,xR=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,d_=/^( {2,}|\\)\n(?!\s*$)/,OR=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Da=/[\p{P}\p{S}]/u,_u=/[\s\p{P}\p{S}]/u,p_=/[^\s\p{P}\p{S}]/u,DR=Ce(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,_u).getRegex(),g_=/(?!~)[\p{P}\p{S}]/u,NR=/(?!~)[\s\p{P}\p{S}]/u,VR=/(?:[^\s\p{P}\p{S}]|~)/u,MR=/\[[^[\]]*?\]\((?:\\.|[^\\\(\)]|\((?:\\.|[^\\\(\)])*\))*\)|`[^`]*?`|<[^<>]*?>/g,m_=/^(?:\*+(?:((?!\*)punct)|[^\s*]))|^_+(?:((?!_)punct)|([^\s_]))/,LR=Ce(m_,"u").replace(/punct/g,Da).getRegex(),FR=Ce(m_,"u").replace(/punct/g,g_).getRegex(),__="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",UR=Ce(__,"gu").replace(/notPunctSpace/g,p_).replace(/punctSpace/g,_u).replace(/punct/g,Da).getRegex(),$R=Ce(__,"gu").replace(/notPunctSpace/g,VR).replace(/punctSpace/g,NR).replace(/punct/g,g_).getRegex(),BR=Ce("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,p_).replace(/punctSpace/g,_u).replace(/punct/g,Da).getRegex(),jR=Ce(/\\(punct)/,"gu").replace(/punct/g,Da).getRegex(),HR=Ce(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),zR=Ce(gu).replace("(?:-->|$)","-->").getRegex(),qR=Ce("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",zR).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ta=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,GR=Ce(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]*(?:\n[ \t]*)?)(title))?\s*\)/).replace("label",ta).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),y_=Ce(/^!?\[(label)\]\[(ref)\]/).replace("label",ta).replace("ref",pu).getRegex(),v_=Ce(/^!?\[(ref)\](?:\[\])?/).replace("ref",pu).getRegex(),WR=Ce("reflink|nolink(?!\\()","g").replace("reflink",y_).replace("nolink",v_).getRegex(),yu={_backpedal:ri,anyPunctuation:jR,autolink:HR,blockSkip:MR,br:d_,code:xR,del:ri,emStrongLDelim:LR,emStrongRDelimAst:UR,emStrongRDelimUnd:BR,escape:kR,link:GR,nolink:v_,punctuation:DR,reflink:y_,reflinkSearch:WR,tag:qR,text:OR,url:ri},KR={...yu,link:Ce(/^!?\[(label)\]\((.*?)\)/).replace("label",ta).getRegex(),reflink:Ce(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ta).getRegex()},sc={...yu,emStrongRDelimAst:$R,emStrongLDelim:FR,url:Ce(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\.|[^\\])*?(?:\\.|[^\s~\\]))\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},QR={...sc,br:Ce(d_).replace("{2,}","*").getRegex(),text:Ce(sc.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},uo={normal:mu,gfm:PR,pedantic:CR},Us={normal:yu,gfm:sc,breaks:QR,pedantic:KR},XR={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Od=t=>XR[t];function on(t,e){if(e){if(Ct.escapeTest.test(t))return t.replace(Ct.escapeReplace,Od)}else if(Ct.escapeTestNoEncode.test(t))return t.replace(Ct.escapeReplaceNoEncode,Od);return t}function Dd(t){try{t=encodeURI(t).replace(Ct.percentDecode,"%")}catch{return null}return t}function Nd(t,e){var i;const n=t.replace(Ct.findPipe,(a,l,c)=>{let u=!1,f=l;for(;--f>=0&&c[f]==="\\";)u=!u;return u?"|":" |"}),r=n.split(Ct.splitPipe);let s=0;if(r[0].trim()||r.shift(),r.length>0&&!((i=r.at(-1))!=null&&i.trim())&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;s<r.length;s++)r[s]=r[s].trim().replace(Ct.slashPipe,"|");return r}function $s(t,e,n){const r=t.length;if(r===0)return"";let s=0;for(;s<r&&t.charAt(r-s-1)===e;)s++;return t.slice(0,r-s)}function JR(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function Vd(t,e,n,r,s){const i=e.href,a=e.title||null,l=t[1].replace(s.other.outputLinkReplace,"$1");r.state.inLink=!0;const c={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:a,text:l,tokens:r.inlineTokens(l)};return r.state.inLink=!1,c}function YR(t,e,n){const r=t.match(n.other.indentCodeCompensation);if(r===null)return e;const s=r[1];return e.split(`
`).map(i=>{const a=i.match(n.other.beginningSpace);if(a===null)return i;const[l]=a;return l.length>=s.length?i.slice(s.length):i}).join(`
`)}var na=class{constructor(t){Oe(this,"options");Oe(this,"rules");Oe(this,"lexer");this.options=t||Ur}space(t){const e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){const e=this.rules.block.code.exec(t);if(e){const n=e[0].replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:e[0],codeBlockStyle:"indented",text:this.options.pedantic?n:$s(n,`
`)}}}fences(t){const e=this.rules.block.fences.exec(t);if(e){const n=e[0],r=YR(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){const e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){const r=$s(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:e[0],depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){const e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:$s(e[0],`
`)}}blockquote(t){const e=this.rules.block.blockquote.exec(t);if(e){let n=$s(e[0],`
`).split(`
`),r="",s="";const i=[];for(;n.length>0;){let a=!1;const l=[];let c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))l.push(n[c]),a=!0;else if(!a)l.push(n[c]);else break;n=n.slice(c);const u=l.join(`
`),f=u.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${u}`:u,s=s?`${s}
${f}`:f;const p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(f,i,!0),this.lexer.state.top=p,n.length===0)break;const g=i.at(-1);if((g==null?void 0:g.type)==="code")break;if((g==null?void 0:g.type)==="blockquote"){const _=g,S=_.raw+`
`+n.join(`
`),k=this.blockquote(S);i[i.length-1]=k,r=r.substring(0,r.length-_.raw.length)+k.raw,s=s.substring(0,s.length-_.text.length)+k.text;break}else if((g==null?void 0:g.type)==="list"){const _=g,S=_.raw+`
`+n.join(`
`),k=this.list(S);i[i.length-1]=k,r=r.substring(0,r.length-g.raw.length)+k.raw,s=s.substring(0,s.length-_.raw.length)+k.raw,n=S.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:s}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim();const r=n.length>1,s={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");const i=this.rules.other.listItemRegex(n);let a=!1;for(;t;){let c=!1,u="",f="";if(!(e=i.exec(t))||this.rules.block.hr.test(t))break;u=e[0],t=t.substring(u.length);let p=e[2].split(`
`,1)[0].replace(this.rules.other.listReplaceTabs,H=>" ".repeat(3*H.length)),g=t.split(`
`,1)[0],_=!p.trim(),S=0;if(this.options.pedantic?(S=2,f=p.trimStart()):_?S=e[1].length+1:(S=e[2].search(this.rules.other.nonSpaceChar),S=S>4?1:S,f=p.slice(S),S+=e[1].length),_&&this.rules.other.blankLine.test(g)&&(u+=g+`
`,t=t.substring(g.length+1),c=!0),!c){const H=this.rules.other.nextBulletRegex(S),U=this.rules.other.hrRegex(S),j=this.rules.other.fencesBeginRegex(S),z=this.rules.other.headingBeginRegex(S),le=this.rules.other.htmlBeginRegex(S);for(;t;){const se=t.split(`
`,1)[0];let A;if(g=se,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),A=g):A=g.replace(this.rules.other.tabCharGlobal,"    "),j.test(g)||z.test(g)||le.test(g)||H.test(g)||U.test(g))break;if(A.search(this.rules.other.nonSpaceChar)>=S||!g.trim())f+=`
`+A.slice(S);else{if(_||p.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||j.test(p)||z.test(p)||U.test(p))break;f+=`
`+g}!_&&!g.trim()&&(_=!0),u+=se+`
`,t=t.substring(se.length+1),p=A.slice(S)}}s.loose||(a?s.loose=!0:this.rules.other.doubleBlankLine.test(u)&&(a=!0));let k=null,O;this.options.gfm&&(k=this.rules.other.listIsTask.exec(f),k&&(O=k[0]!=="[ ] ",f=f.replace(this.rules.other.listReplaceTask,""))),s.items.push({type:"list_item",raw:u,task:!!k,checked:O,loose:!1,text:f,tokens:[]}),s.raw+=u}const l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=s.raw.trimEnd();for(let c=0;c<s.items.length;c++)if(this.lexer.state.top=!1,s.items[c].tokens=this.lexer.blockTokens(s.items[c].text,[]),!s.loose){const u=s.items[c].tokens.filter(p=>p.type==="space"),f=u.length>0&&u.some(p=>this.rules.other.anyLine.test(p.raw));s.loose=f}if(s.loose)for(let c=0;c<s.items.length;c++)s.items[c].loose=!0;return s}}html(t){const e=this.rules.block.html.exec(t);if(e)return{type:"html",block:!0,raw:e[0],pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:e[0]}}def(t){const e=this.rules.block.def.exec(t);if(e){const n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",s=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:e[0],href:r,title:s}}}table(t){var a;const e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;const n=Nd(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),s=(a=e[3])!=null&&a.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:e[0],header:[],align:[],rows:[]};if(n.length===r.length){for(const l of r)this.rules.other.tableAlignRight.test(l)?i.align.push("right"):this.rules.other.tableAlignCenter.test(l)?i.align.push("center"):this.rules.other.tableAlignLeft.test(l)?i.align.push("left"):i.align.push(null);for(let l=0;l<n.length;l++)i.header.push({text:n[l],tokens:this.lexer.inline(n[l]),header:!0,align:i.align[l]});for(const l of s)i.rows.push(Nd(l,i.header.length).map((c,u)=>({text:c,tokens:this.lexer.inline(c),header:!1,align:i.align[u]})));return i}}lheading(t){const e=this.rules.block.lheading.exec(t);if(e)return{type:"heading",raw:e[0],depth:e[2].charAt(0)==="="?1:2,text:e[1],tokens:this.lexer.inline(e[1])}}paragraph(t){const e=this.rules.block.paragraph.exec(t);if(e){const n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){const e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){const e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){const e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){const e=this.rules.inline.link.exec(t);if(e){const n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;const i=$s(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{const i=JR(e[2],"()");if(i===-2)return;if(i>-1){const l=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,l).trim(),e[3]=""}}let r=e[2],s="";if(this.options.pedantic){const i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],s=i[3])}else s=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Vd(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){const r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),s=e[r.toLowerCase()];if(!s){const i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return Vd(n,s,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!r||r[3]&&n.match(this.rules.other.unicodeAlphaNumeric))return;if(!(r[1]||r[2]||"")||!n||this.rules.inline.punctuation.exec(n)){const i=[...r[0]].length-1;let a,l,c=i,u=0;const f=r[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*t.length+i);(r=f.exec(e))!=null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(l=[...a].length,r[3]||r[4]){c+=l;continue}else if((r[5]||r[6])&&i%3&&!((i+l)%3)){u+=l;continue}if(c-=l,c>0)continue;l=Math.min(l,l+c+u);const p=[...r[0]][0].length,g=t.slice(0,i+r.index+p+l);if(Math.min(i,l)%2){const S=g.slice(1,-1);return{type:"em",raw:g,text:S,tokens:this.lexer.inlineTokens(S)}}const _=g.slice(2,-2);return{type:"strong",raw:g,text:_,tokens:this.lexer.inlineTokens(_)}}}}codespan(t){const e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," ");const r=this.rules.other.nonSpaceChar.test(n),s=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&s&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){const e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t){const e=this.rules.inline.del.exec(t);if(e)return{type:"del",raw:e[0],text:e[2],tokens:this.lexer.inlineTokens(e[2])}}autolink(t){const e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(t){var n;let e;if(e=this.rules.inline.url.exec(t)){let r,s;if(e[2]==="@")r=e[0],s="mailto:"+r;else{let i;do i=e[0],e[0]=((n=this.rules.inline._backpedal.exec(e[0]))==null?void 0:n[0])??"";while(i!==e[0]);r=e[0],e[1]==="www."?s="http://"+e[0]:s=e[0]}return{type:"link",raw:e[0],text:r,href:s,tokens:[{type:"text",raw:r,text:r}]}}}inlineText(t){const e=this.rules.inline.text.exec(t);if(e){const n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},Pn=class ic{constructor(e){Oe(this,"tokens");Oe(this,"options");Oe(this,"state");Oe(this,"tokenizer");Oe(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Ur,this.options.tokenizer=this.options.tokenizer||new na,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};const n={other:Ct,block:uo.normal,inline:Us.normal};this.options.pedantic?(n.block=uo.pedantic,n.inline=Us.pedantic):this.options.gfm&&(n.block=uo.gfm,this.options.breaks?n.inline=Us.breaks:n.inline=Us.gfm),this.tokenizer.rules=n}static get rules(){return{block:uo,inline:Us}}static lex(e,n){return new ic(n).lex(e)}static lexInline(e,n){return new ic(n).inlineTokens(e)}lex(e){e=e.replace(Ct.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){const r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){var s,i,a;for(this.options.pedantic&&(e=e.replace(Ct.tabCharGlobal,"    ").replace(Ct.spaceLine,""));e;){let l;if((i=(s=this.options.extensions)==null?void 0:s.block)!=null&&i.some(u=>(l=u.call({lexer:this},e,n))?(e=e.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.space(e)){e=e.substring(l.raw.length);const u=n.at(-1);l.raw.length===1&&u!==void 0?u.raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(e)){e=e.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(l=this.tokenizer.fences(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(e)){e=e.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="paragraph"||(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.raw,this.inlineQueue.at(-1).src=u.text):this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title});continue}if(l=this.tokenizer.table(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(e)){e=e.substring(l.raw.length),n.push(l);continue}let c=e;if((a=this.options.extensions)!=null&&a.startBlock){let u=1/0;const f=e.slice(1);let p;this.options.extensions.startBlock.forEach(g=>{p=g.call({lexer:this},f),typeof p=="number"&&p>=0&&(u=Math.min(u,p))}),u<1/0&&u>=0&&(c=e.substring(0,u+1))}if(this.state.top&&(l=this.tokenizer.paragraph(c))){const u=n.at(-1);r&&(u==null?void 0:u.type)==="paragraph"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l),r=c.length!==e.length,e=e.substring(l.raw.length);continue}if(l=this.tokenizer.text(e)){e=e.substring(l.raw.length);const u=n.at(-1);(u==null?void 0:u.type)==="text"?(u.raw+=`
`+l.raw,u.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=u.text):n.push(l);continue}if(e){const u="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(u);break}else throw new Error(u)}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){var l,c,u;let r=e,s=null;if(this.tokens.links){const f=Object.keys(this.tokens.links);if(f.length>0)for(;(s=this.tokenizer.rules.inline.reflinkSearch.exec(r))!=null;)f.includes(s[0].slice(s[0].lastIndexOf("[")+1,-1))&&(r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(s=this.tokenizer.rules.inline.anyPunctuation.exec(r))!=null;)r=r.slice(0,s.index)+"++"+r.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;(s=this.tokenizer.rules.inline.blockSkip.exec(r))!=null;)r=r.slice(0,s.index)+"["+"a".repeat(s[0].length-2)+"]"+r.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);let i=!1,a="";for(;e;){i||(a=""),i=!1;let f;if((c=(l=this.options.extensions)==null?void 0:l.inline)!=null&&c.some(g=>(f=g.call({lexer:this},e,n))?(e=e.substring(f.raw.length),n.push(f),!0):!1))continue;if(f=this.tokenizer.escape(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.tag(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.link(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(f.raw.length);const g=n.at(-1);f.type==="text"&&(g==null?void 0:g.type)==="text"?(g.raw+=f.raw,g.text+=f.text):n.push(f);continue}if(f=this.tokenizer.emStrong(e,r,a)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.codespan(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.br(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.del(e)){e=e.substring(f.raw.length),n.push(f);continue}if(f=this.tokenizer.autolink(e)){e=e.substring(f.raw.length),n.push(f);continue}if(!this.state.inLink&&(f=this.tokenizer.url(e))){e=e.substring(f.raw.length),n.push(f);continue}let p=e;if((u=this.options.extensions)!=null&&u.startInline){let g=1/0;const _=e.slice(1);let S;this.options.extensions.startInline.forEach(k=>{S=k.call({lexer:this},_),typeof S=="number"&&S>=0&&(g=Math.min(g,S))}),g<1/0&&g>=0&&(p=e.substring(0,g+1))}if(f=this.tokenizer.inlineText(p)){e=e.substring(f.raw.length),f.raw.slice(-1)!=="_"&&(a=f.raw.slice(-1)),i=!0;const g=n.at(-1);(g==null?void 0:g.type)==="text"?(g.raw+=f.raw,g.text+=f.text):n.push(f);continue}if(e){const g="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(g);break}else throw new Error(g)}}return n}},ra=class{constructor(t){Oe(this,"options");Oe(this,"parser");this.options=t||Ur}space(t){return""}code({text:t,lang:e,escaped:n}){var i;const r=(i=(e||"").match(Ct.notSpaceStart))==null?void 0:i[0],s=t.replace(Ct.endingNewline,"")+`
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
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${on(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){const r=this.parser.parseInline(n),s=Dd(t);if(s===null)return r;t=s;let i='<a href="'+t+'"';return e&&(i+=' title="'+on(e)+'"'),i+=">"+r+"</a>",i}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));const s=Dd(t);if(s===null)return on(n);t=s;let i=`<img src="${t}" alt="${n}"`;return e&&(i+=` title="${on(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:on(t.text)}},vu=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}},Cn=class oc{constructor(e){Oe(this,"options");Oe(this,"renderer");Oe(this,"textRenderer");this.options=e||Ur,this.options.renderer=this.options.renderer||new ra,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new vu}static parse(e,n){return new oc(n).parse(e)}static parseInline(e,n){return new oc(n).parseInline(e)}parse(e,n=!0){var s,i;let r="";for(let a=0;a<e.length;a++){const l=e[a];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[l.type]){const u=l,f=this.options.extensions.renderers[u.type].call({parser:this},u);if(f!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)){r+=f||"";continue}}const c=l;switch(c.type){case"space":{r+=this.renderer.space(c);continue}case"hr":{r+=this.renderer.hr(c);continue}case"heading":{r+=this.renderer.heading(c);continue}case"code":{r+=this.renderer.code(c);continue}case"table":{r+=this.renderer.table(c);continue}case"blockquote":{r+=this.renderer.blockquote(c);continue}case"list":{r+=this.renderer.list(c);continue}case"html":{r+=this.renderer.html(c);continue}case"paragraph":{r+=this.renderer.paragraph(c);continue}case"text":{let u=c,f=this.renderer.text(u);for(;a+1<e.length&&e[a+1].type==="text";)u=e[++a],f+=`
`+this.renderer.text(u);n?r+=this.renderer.paragraph({type:"paragraph",raw:f,text:f,tokens:[{type:"text",raw:f,text:f,escaped:!0}]}):r+=f;continue}default:{const u='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}parseInline(e,n=this.renderer){var s,i;let r="";for(let a=0;a<e.length;a++){const l=e[a];if((i=(s=this.options.extensions)==null?void 0:s.renderers)!=null&&i[l.type]){const u=this.options.extensions.renderers[l.type].call({parser:this},l);if(u!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(l.type)){r+=u||"";continue}}const c=l;switch(c.type){case"escape":{r+=n.text(c);break}case"html":{r+=n.html(c);break}case"link":{r+=n.link(c);break}case"image":{r+=n.image(c);break}case"strong":{r+=n.strong(c);break}case"em":{r+=n.em(c);break}case"codespan":{r+=n.codespan(c);break}case"br":{r+=n.br(c);break}case"del":{r+=n.del(c);break}case"text":{r+=n.text(c);break}default:{const u='Token with "'+c.type+'" type was not found.';if(this.options.silent)return console.error(u),"";throw new Error(u)}}}return r}},El,Ro=(El=class{constructor(t){Oe(this,"options");Oe(this,"block");this.options=t||Ur}preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}provideLexer(){return this.block?Pn.lex:Pn.lexInline}provideParser(){return this.block?Cn.parse:Cn.parseInline}},Oe(El,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"])),El),ZR=class{constructor(...t){Oe(this,"defaults",hu());Oe(this,"options",this.setOptions);Oe(this,"parse",this.parseMarkdown(!0));Oe(this,"parseInline",this.parseMarkdown(!1));Oe(this,"Parser",Cn);Oe(this,"Renderer",ra);Oe(this,"TextRenderer",vu);Oe(this,"Lexer",Pn);Oe(this,"Tokenizer",na);Oe(this,"Hooks",Ro);this.use(...t)}walkTokens(t,e){var r,s;let n=[];for(const i of t)switch(n=n.concat(e.call(this,i)),i.type){case"table":{const a=i;for(const l of a.header)n=n.concat(this.walkTokens(l.tokens,e));for(const l of a.rows)for(const c of l)n=n.concat(this.walkTokens(c.tokens,e));break}case"list":{const a=i;n=n.concat(this.walkTokens(a.items,e));break}default:{const a=i;(s=(r=this.defaults.extensions)==null?void 0:r.childTokens)!=null&&s[a.type]?this.defaults.extensions.childTokens[a.type].forEach(l=>{const c=a[l].flat(1/0);n=n.concat(this.walkTokens(c,e))}):a.tokens&&(n=n.concat(this.walkTokens(a.tokens,e)))}}return n}use(...t){const e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{const r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(s=>{if(!s.name)throw new Error("extension name required");if("renderer"in s){const i=e.renderers[s.name];i?e.renderers[s.name]=function(...a){let l=s.renderer.apply(this,a);return l===!1&&(l=i.apply(this,a)),l}:e.renderers[s.name]=s.renderer}if("tokenizer"in s){if(!s.level||s.level!=="block"&&s.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");const i=e[s.level];i?i.unshift(s.tokenizer):e[s.level]=[s.tokenizer],s.start&&(s.level==="block"?e.startBlock?e.startBlock.push(s.start):e.startBlock=[s.start]:s.level==="inline"&&(e.startInline?e.startInline.push(s.start):e.startInline=[s.start]))}"childTokens"in s&&s.childTokens&&(e.childTokens[s.name]=s.childTokens)}),r.extensions=e),n.renderer){const s=this.defaults.renderer||new ra(this.defaults);for(const i in n.renderer){if(!(i in s))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;const a=i,l=n.renderer[a],c=s[a];s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f||""}}r.renderer=s}if(n.tokenizer){const s=this.defaults.tokenizer||new na(this.defaults);for(const i in n.tokenizer){if(!(i in s))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;const a=i,l=n.tokenizer[a],c=s[a];s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f}}r.tokenizer=s}if(n.hooks){const s=this.defaults.hooks||new Ro;for(const i in n.hooks){if(!(i in s))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;const a=i,l=n.hooks[a],c=s[a];Ro.passThroughHooks.has(i)?s[a]=u=>{if(this.defaults.async)return Promise.resolve(l.call(s,u)).then(p=>c.call(s,p));const f=l.call(s,u);return c.call(s,f)}:s[a]=(...u)=>{let f=l.apply(s,u);return f===!1&&(f=c.apply(s,u)),f}}r.hooks=s}if(n.walkTokens){const s=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(a){let l=[];return l.push(i.call(this,a)),s&&(l=l.concat(s.call(this,a))),l}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return Pn.lex(t,e??this.defaults)}parser(t,e){return Cn.parse(t,e??this.defaults)}parseMarkdown(t){return(n,r)=>{const s={...r},i={...this.defaults,...s},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&s.async===!1)return a(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof n>"u"||n===null)return a(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return a(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));i.hooks&&(i.hooks.options=i,i.hooks.block=t);const l=i.hooks?i.hooks.provideLexer():t?Pn.lex:Pn.lexInline,c=i.hooks?i.hooks.provideParser():t?Cn.parse:Cn.parseInline;if(i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(u=>l(u,i)).then(u=>i.hooks?i.hooks.processAllTokens(u):u).then(u=>i.walkTokens?Promise.all(this.walkTokens(u,i.walkTokens)).then(()=>u):u).then(u=>c(u,i)).then(u=>i.hooks?i.hooks.postprocess(u):u).catch(a);try{i.hooks&&(n=i.hooks.preprocess(n));let u=l(n,i);i.hooks&&(u=i.hooks.processAllTokens(u)),i.walkTokens&&this.walkTokens(u,i.walkTokens);let f=c(u,i);return i.hooks&&(f=i.hooks.postprocess(f)),f}catch(u){return a(u)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){const r="<p>An error occurred:</p><pre>"+on(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},Vr=new ZR;function Ae(t,e){return Vr.parse(t,e)}Ae.options=Ae.setOptions=function(t){return Vr.setOptions(t),Ae.defaults=Vr.defaults,c_(Ae.defaults),Ae};Ae.getDefaults=hu;Ae.defaults=Ur;Ae.use=function(...t){return Vr.use(...t),Ae.defaults=Vr.defaults,c_(Ae.defaults),Ae};Ae.walkTokens=function(t,e){return Vr.walkTokens(t,e)};Ae.parseInline=Vr.parseInline;Ae.Parser=Cn;Ae.parser=Cn.parse;Ae.Renderer=ra;Ae.TextRenderer=vu;Ae.Lexer=Pn;Ae.lexer=Pn.lex;Ae.Tokenizer=na;Ae.Hooks=Ro;Ae.parse=Ae;Ae.options;Ae.setOptions;Ae.use;Ae.walkTokens;Ae.parseInline;Cn.parse;Pn.lex;const eS={class:"card"},tS=["src"],nS={class:"card-content"},rS={class:"card-title"},sS={class:"card-subtitle"},iS=["innerHTML"],oS={__name:"Card",props:{image:{type:String,default:""},title:String,subtitle:String,details:String},setup(t){const e=t,n=ot(!1),r=ot(!0),s=Pt(()=>e.details?Ae.parseInline(e.details):"");return(i,a)=>(ie(),he("div",eS,[r.value?(ie(),he("img",{key:0,src:t.image,alt:"Card image",class:"card-image",onError:a[0]||(a[0]=l=>r.value=!1)},null,40,tS)):Ut("",!0),F("div",nS,[F("h3",rS,je(t.title),1),F("p",sS,je(t.subtitle),1),t.details?(ie(),he("button",{key:0,onClick:a[1]||(a[1]=l=>n.value=!n.value),class:"cta-button"},je(n.value?"Hide":"Learn More"),1)):Ut("",!0),re(Yp,{name:"fade"},{default:Ke(()=>[n.value?(ie(),he("div",{key:0,class:"card-details",innerHTML:s.value},null,8,iS)):Ut("",!0)]),_:1})])]))}},aS=kt(oS,[["__scopeId","data-v-ae8421c8"]]),lS={class:"card-grid-section"},cS={class:"grid-title"},uS={class:"card-grid"},hS={__name:"CardGrid",props:{title:{type:String},cards:{type:Array,required:!0}},setup(t){return(e,n)=>(ie(),he("section",lS,[F("h2",cS,je(t.title),1),F("div",uS,[(ie(!0),he(ut,null,os(t.cards,(r,s)=>(ie(),_s(aS,_a({key:s},{ref_for:!0},r),null,16))),128))])]))}},sa=kt(hS,[["__scopeId","data-v-8a2cffb2"]]),fS={class:"article-card"},dS=["src","alt"],pS={class:"content"},gS={class:"title"},mS=["href"],_S={__name:"ArticleCard",props:{title:String,thumbnail:String,url:String},setup(t){return(e,n)=>(ie(),he("div",fS,[F("img",{src:t.thumbnail,alt:t.title,class:"thumbnail"},null,8,dS),F("div",pS,[F("h3",gS,je(t.title),1),F("a",{href:t.url,target:"_blank",rel:"noopener",class:"read-button"},"Read Article",8,mS)])]))}},yS=kt(_S,[["__scopeId","data-v-08790d9a"]]),vS={class:"article-grid-section"},ES={class:"grid-title"},wS={class:"article-grid"},bS={__name:"ArticleGrid",props:{title:String,articles:Array},setup(t){return(e,n)=>(ie(),he("section",vS,[F("h2",ES,je(t.title),1),F("div",wS,[(ie(!0),he(ut,null,os(t.articles,(r,s)=>(ie(),_s(yS,_a({key:s},{ref_for:!0},r),null,16))),128))])]))}},TS=kt(bS,[["__scopeId","data-v-6cbd1349"]]),IS=["id"],AS=["src","alt"],RS={class:"event-content"},SS={class:"event-title"},PS={class:"event-datetime"},CS={key:0},kS={key:0,class:"event-location"},xS=["innerHTML"],OS=["href"],DS={key:2,class:"schedule"},NS={class:"schedule-time"},VS=["innerHTML"],MS={__name:"Event",props:{id:String,title:String,date:String,time:String,location:String,description:String,image:String,rsvpLink:String,link:String,linkLabel:{type:String,default:"RSVP / Access"},schedule:{type:Array,default:()=>[]}},setup(t){const e=t,n=Pt(()=>{var f;const a=(f=e.date)==null?void 0:f.trim();if(!a)return"";const l=/\b\d{1,2}\b/.test(a),c=new Date(a);if(isNaN(c.getTime()))return a;const u=l?{year:"numeric",month:"long",day:"numeric"}:{year:"numeric",month:"long"};return c.toLocaleDateString(void 0,u)}),r=Pt(()=>e.description?Ae.parseInline(e.description):""),s=Pt(()=>e.schedule.map(a=>({...a,parsedTitle:Ae.parseInline(a.title||"")}))),i={initial:{opacity:0,y:30},enter:{opacity:1,y:0,transition:{duration:.6}}};return(a,l)=>{const c=Yy("motion");return xo((ie(),he("article",{id:t.id,class:"event-card animate-fade-slide"},[t.image?(ie(),he("img",{key:0,src:t.image,alt:t.title,class:"event-image"},null,8,AS)):Ut("",!0),F("div",RS,[F("h2",SS,je(t.title),1),F("p",PS,[Qe(je(n.value),1),t.time?(ie(),he("span",CS," • "+je(t.time),1)):Ut("",!0)]),t.location?(ie(),he("p",kS,je(t.location),1)):Ut("",!0),F("p",{class:"event-description",innerHTML:r.value},null,8,xS),t.rsvpLink||t.link?(ie(),he("a",{key:1,href:t.rsvpLink||t.link,target:"_blank",rel:"noopener",class:"event-button"},je(t.linkLabel),9,OS)):Ut("",!0),t.schedule&&t.schedule.length?(ie(),he("div",DS,[l[0]||(l[0]=F("h3",null,"Event Schedule",-1)),F("ul",null,[(ie(!0),he(ut,null,os(s.value,(u,f)=>(ie(),he("li",{key:f,class:"schedule-item"},[F("span",NS,je(u.time),1),F("span",{class:"schedule-title",innerHTML:u.parsedTitle},null,8,VS)]))),128))])])):Ut("",!0)])],8,IS)),[[c,i]])}}},E_=kt(MS,[["__scopeId","data-v-ad340ab7"]]),LS=[{image:"https://media.istockphoto.com/id/1317804584/photo/one-businesswoman-studio-portrait-looking-at-the-camera.jpg?s=2048x2048&w=is&k=20&c=bUHQJBt4Nbp0IEngDcXMMQteAnGi7fz1WpEuq3zLrOI=",title:"AACAP",subtitle:"Annual Meeting • October 2025",details:"The American Academy of Child and Adolescent Psychiatry (AACAP) is the leading national professional medical association dedicated to promoting healthy development and the mental health of children, adolescents, and families. Join us for their annual meeting featuring cutting-edge research, clinical workshops, and networking opportunities with child and adolescent psychiatry experts."},{image:"https://media.istockphoto.com/id/1411002384/photo/nurses-meeting.jpg?s=2048x2048&w=is&k=20&c=M5E3-J6IVCX6cvVBGyfedmTXEPjedRxyE2NZMkdv9hM=",title:"APA",subtitle:"Annual Meeting • May 2026",details:"The American Psychiatric Association (APA) is the world's largest psychiatric organization, representing more than 38,000 physician members specializing in the diagnosis, treatment, prevention, and research of mental illnesses. Their annual meeting brings together psychiatrists from around the world for education, networking, and the latest advances in psychiatric care and research."},{image:"https://media.istockphoto.com/id/1783743772/photo/female-speaker-giving-a-presentation-during-business-seminar-at-convention-center.jpg?s=2048x2048&w=is&k=20&c=h7aIvTLP5PhWfrp54V_yUhtoD1cZqqwauSmqMAsbnyw=",title:"Annual AFP Conference",subtitle:"Virtual • March 2026",details:"Our flagship event featuring keynote speakers, panels, and networking opportunities. The Association of Family Psychiatrists Annual Conference is the premier gathering for family psychiatry professionals, offering comprehensive education on family-centered mental health care, innovative treatment approaches, and collaborative practice models."}],FS=[{title:"Coping With Problematic Effects of Social Media",thumbnail:"https://images.squarespace-cdn.com/content/v1/6267042fe703aa417b69ec37/ff56a26d-ca75-4256-8854-6ddba48c6fc5/Teenage+girl+using+smart+phone+at+home+stock+photo.jpg?format=2500w",url:"https://www.psychologytoday.com/us/blog/psychiatrys-think-tank/202501/coping-with-problematic-effects-of-social-media"},{title:"Community Support Strategies",thumbnail:"https://media.istockphoto.com/id/1465173464/photo/business-network-concept-teamwork-partnership-human-resources.jpg?s=2048x2048&w=is&k=20&c=45hL9SREGO-8XjTxsmFy1Iph1lHSxEqD-MTkVlodM_o="},{title:"Trauma-Informed Care",thumbnail:"https://media.istockphoto.com/id/2206797715/photo/cubes-form-the-expression-ptsd.jpg?s=2048x2048&w=is&k=20&c=w4i03qsp8ue3YYBBhSuqcaAwzhfmyWGuEBmA2QkN2Tg="}],US=[{title:"Adriana Cantos, MD"},{title:"Aimin Mitwally, DO"},{title:"Aisha Julakanti, MD"},{title:"Allred McKay, MD"},{title:"Allyson Folsom Davis, MD"},{title:"Alexander Norton, MD"},{title:"Ana-Maria McGill, DO"},{title:"Andrea Weir, DO"},{title:"Frank Direnno, MD"},{title:"Isabella Caldwell, MD"},{title:"Joseph Pareira, MD"},{title:"Mario Montelongo, MD"},{title:"Michael Destounis, MD"},{title:"Neharika Padala, MD"},{title:"Saagar Patel, DO"},{title:"Tyler Francisco, MD"}],$S={title:"Highlights: 2024 Annual Family Psychiatry Conference",date:"September 21, 2025",time:"9:00 AM – 4:00 PM PT",description:"Join us for the 2025 Annual Conference, featuring leading experts in family psychiatry. Engage in keynotes, panels, and networking opportunities.",link:"https://drive.google.com/file/d/14MEsEO4A65rdNfa7eHmyuKKwWBJJDtLl/view?usp=drive_link",linkLabel:"Watch Recording",schedule:[{time:" 11:00 AM",title:"Introduction by Dr. Glick on the state of psychiatric practice, it’s efficacy, and why it isn’t used more in practice"},{time:"11:10 AM",title:"[Family Work in Adult Outpatient Setting](https://www.familypsychiatrists.org/s/family-work-in-outpatient-setting-Carolyn-Fulton.pdf) (Carolyn Fulton)"},{time:"11:45 PM",title:"[Role of Family Engagement in PHP](https://www.familypsychiatrists.org/s/Role-of-Family-Engagement-in-a-Partial-Hospital-Program-Tumuluru.pdf) (Dr. Tumuluru)"},{time:"12:20 PM",title:"Break"},{time:"12:30 PM",title:"[Family and Family Interventions in Institutional Care](https://www.familypsychiatrists.org/s/family-interventions-in-institutionalized-care-settings-Gogineni.pdf) (Dr. Gogineni)"},{time:"1:05 PM",title:"[Understanding and Treating Adolescent Eating Disorders](https://www.familypsychiatrists.org/s/understanding-and-treating-adolescent-eating-disorders-the-role-of-the-psychiatrist-in-family-based.pdf) (Dr. Spector and Dr. Spettigue)"},{time:"1:40 PM",title:"Break Out Rooms"}]};new URL("/site/assets/image-1-WqlQefbX.png",import.meta.url).href,new URL("/site/assets/image-2-C8zF5TFW.png",import.meta.url).href,new URL("/site/assets/image-3-BmE6nKQ9.png",import.meta.url).href,new URL("/site/assets/image-4-CcpSA-LC.png",import.meta.url).href,new URL("/site/assets/image-5-BgXx49vf.png",import.meta.url).href,new URL("/site/assets/image-6-D1eFJqKs.png",import.meta.url).href,new URL("/site/assets/image-7-D8qVh35q.png",import.meta.url).href,new URL("/site/assets/image-8-pcZjUcC0.png",import.meta.url).href,new URL("/site/assets/image-9-C__fjlSb.png",import.meta.url).href,new URL("/site/assets/image-10-RvDCpge0.png",import.meta.url).href,new URL("/site/assets/image-11-C6iqnLot.png",import.meta.url).href;const BS="/site/assets/image-1-WqlQefbX.png",jS="/site/assets/image-2-C8zF5TFW.png",HS="/site/assets/image-3-BmE6nKQ9.png",zS="/site/assets/image-4-CcpSA-LC.png",qS="/site/assets/image-5-BgXx49vf.png",GS="/site/assets/image-6-D1eFJqKs.png",WS="/site/assets/image-7-D8qVh35q.png",KS="/site/assets/image-8-pcZjUcC0.png",QS="/site/assets/image-9-C__fjlSb.png",XS="/site/assets/image-10-RvDCpge0.png",JS="/site/assets/image-11-C6iqnLot.png",YS={class:"home"},ZS={class:"about",id:"about"},eP={class:"conference-and-carousel"},tP={class:"columns-container"},nP={class:"conference-column",id:"conference"},rP={class:"carousel-column",id:"conference-carousel"},sP={class:"carousel-container"},iP=["src","alt"],oP={class:"carousel-indicators"},aP=["onClick","aria-label"],lP={__name:"HomeView",setup(t){const e=ot([{src:BS,alt:"AFP Conference Photo 1"},{src:jS,alt:"AFP Conference Photo 2"},{src:HS,alt:"AFP Conference Photo 3"},{src:zS,alt:"AFP Conference Photo 4"},{src:qS,alt:"AFP Conference Photo 5"},{src:GS,alt:"AFP Conference Photo 6"},{src:WS,alt:"AFP Conference Photo 7"},{src:KS,alt:"AFP Conference Photo 8"},{src:QS,alt:"AFP Conference Photo 9"},{src:XS,alt:"AFP Conference Photo 10"},{src:JS,alt:"AFP Conference Photo 11"}]),n=ot(0);let r=null;const s=()=>{n.value=(n.value+1)%e.value.length},i=()=>{n.value=n.value===0?e.value.length-1:n.value-1},a=u=>{n.value=u},l=()=>{r=setInterval(s,5e3)},c=()=>{r&&(clearInterval(r),r=null)};return Ii(()=>{l()}),Ec(()=>{c()}),(u,f)=>(ie(),he("section",YS,[f[6]||(f[6]=Wp('<div class="intro" data-v-64aa2cd5><div class="logo-column" data-v-64aa2cd5><img src="'+_R+'" alt="AFP Logo" class="logo-img" data-v-64aa2cd5></div><div class="welcome-column" id="welcome" data-v-64aa2cd5><h1 class="welcome-title" data-v-64aa2cd5>Welcome to the Association of Family Psychiatrists</h1><p class="welcome-subtitle" data-v-64aa2cd5> Promoting mental wellness and supporting family psychiatry through education, advocacy, and community. </p></div></div>',1)),F("div",ZS,[f[1]||(f[1]=F("h2",null,"About Us",-1)),f[2]||(f[2]=F("p",null," The Association of Family Psychiatrists is dedicated to advancing the field of family mental health by fostering professional development, sharing best practices, and connecting practitioners across the country. ",-1)),re(Pe(it),{to:"/about",class:"cta-button"},{default:Ke(()=>f[0]||(f[0]=[Qe("Learn More")])),_:1,__:[0]})]),F("div",eP,[f[5]||(f[5]=F("h2",{class:"section-title"},"Conference Highlights",-1)),F("div",tP,[F("div",nP,[re(E_,ny(Gp(Pe($S))),null,16)]),F("div",rP,[F("div",sP,[F("div",{class:"carousel-track",style:ms({transform:`translateX(-${n.value*100}%)`})},[(ie(!0),he(ut,null,os(e.value,(p,g)=>(ie(),he("div",{key:g,class:"carousel-slide"},[F("img",{src:p.src,alt:p.alt,class:"carousel-image"},null,8,iP)]))),128))],4),F("button",{class:"carousel-button prev",onClick:i,"aria-label":"Previous slide"},f[3]||(f[3]=[F("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[F("polyline",{points:"15,18 9,12 15,6"})],-1)])),F("button",{class:"carousel-button next",onClick:s,"aria-label":"Next slide"},f[4]||(f[4]=[F("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[F("polyline",{points:"9,18 15,12 9,6"})],-1)])),F("div",oP,[(ie(!0),he(ut,null,os(e.value,(p,g)=>(ie(),he("button",{key:g,class:bi(["indicator",{active:n.value===g}]),onClick:_=>a(g),"aria-label":`Go to slide ${g+1}`},null,10,aP))),128))])])])])]),re(sa,{title:"Affiliated Organizations",cards:Pe(LS),id:"affiliated-organizations"},null,8,["cards"]),re(TS,{title:"Featured Books / Publications",articles:Pe(FS),id:"featured-books"},null,8,["articles"]),re(sa,{title:"2025 Winners of our Annual Award for Excellence in Family Care",cards:Pe(US),id:"award-winners"},null,8,["cards"])]))}},cP=kt(lP,[["__scopeId","data-v-64aa2cd5"]]),uP={class:"overlay animate-fade-slide"},hP={class:"title"},fP={class:"subtitle"},dP={__name:"Hero",props:{title:String,subtitle:String,image:String},setup(t){return(e,n)=>(ie(),he("section",{class:"hero",style:ms({backgroundImage:`url(${t.image})`})},[F("div",uP,[F("h1",hP,je(t.title),1),F("p",fP,je(t.subtitle),1)])],4))}},pP=kt(dP,[["__scopeId","data-v-7cb3ac27"]]),gP=[{title:"Rao Gogenini",subtitle:"President",details:"Leading the Association of Family Psychiatrists with dedication and vision."},{title:"Randi Libbon",subtitle:"Vice President and Chair, Membership Committee",details:"Overseeing membership growth and engagement initiatives."},{title:"Rajesh Mehta",subtitle:"Secretary",details:"Managing organizational records and communications."},{title:"Alison Heru",subtitle:"Treasurer",details:"Overseeing financial management and budgetary planning."},{title:"Kasey Moss",subtitle:"Assembly Liaison",details:"Representing the association in external assemblies and partnerships."},{title:"Ellen Berman",subtitle:"Past President",details:"Providing guidance and continuity based on previous leadership experience."}],mP={class:"about-page"},_P={class:"intro"},yP={class:"officers"},vP={class:"officers-directory"},EP={__name:"AboutView",setup(t){return(e,n)=>(ie(),he("div",mP,[F("section",_P,[re(pP,{title:"Welcome to the Association of Family Psychiatrists",subtitle:"Promoting mental wellness and supporting family psychiatry through education, advocacy, and community.",image:"https://images.squarespace-cdn.com/content/v1/5748cc56746fb940f105bd1c/22364a6b-02db-4f89-8840-8ad7de5d6682/family+therapy+pic.jpg"}),n[0]||(n[0]=F("div",{class:"section-content",id:"about-statement"},[F("h1",{class:"section-heading"},"About the Association"),F("p",null," The Association of Family Psychiatrists is committed to advancing the field of family mental health by fostering collaboration, research, education, and advocacy. ")],-1))]),n[2]||(n[2]=Wp('<section class="mission" data-v-d7aaf9d5><div class="section-content" id="mission-statement" data-v-d7aaf9d5><h2 class="section-heading" data-v-d7aaf9d5>Our Mission</h2><p data-v-d7aaf9d5> We strive to support psychiatrists and mental health professionals who work with families, providing resources, training, and a professional network to promote mental wellness at every stage of life. </p></div></section><section class="vision" data-v-d7aaf9d5><div class="section-content" id="vision-statement" data-v-d7aaf9d5><h2 class="section-heading" data-v-d7aaf9d5>Our Vision</h2><p data-v-d7aaf9d5> A world where every family has access to compassionate, evidence-based psychiatric care. </p></div></section>',2)),F("section",yP,[n[1]||(n[1]=F("div",{class:"section-content",id:"officers-section"},[F("h2",{class:"section-heading"},"Our Leadership Team"),F("p",null," Meet the dedicated professionals who guide our association and work tirelessly to advance the field of family psychiatry. ")],-1)),F("div",vP,[re(sa,{title:"Executive Officers",cards:Pe(gP)},null,8,["cards"])])])]))}},wP=kt(EP,[["__scopeId","data-v-d7aaf9d5"]]),bP={class:"info-section"},TP={class:"heading"},IP={key:0,class:"subheading"},AP={class:"description"},RP={__name:"InformationSection",props:{heading:String,subheading:String,description:String,link:String},setup(t){return(e,n)=>{const r=Xy("RouterLink");return ie(),he("section",bP,[F("h2",TP,je(t.heading),1),t.subheading?(ie(),he("h3",IP,je(t.subheading),1)):Ut("",!0),F("p",AP,je(t.description),1),re(r,{to:t.link,class:"read-more"},{default:Ke(()=>n[0]||(n[0]=[Qe("Read More")])),_:1,__:[0]},8,["to"])])}}},bn=kt(RP,[["__scopeId","data-v-af70b806"]]),SP={class:"resources"},PP={key:1},CP={__name:"ResourcesView",setup(t){return(e,n)=>(ie(),he("section",SP,[e.$route.name!=="resources"?(ie(),_s(Pe(Sc),{key:0})):(ie(),he("div",PP,[n[0]||(n[0]=F("h1",{class:"page-title animate-fade-slide"},"Resources",-1)),re(bn,{class:"animate-fade-slide",heading:"Our Listserv",subheading:"Join the discussion",description:"Visit the discussion group of the Association of Family Psychiatry on Google Groups.",link:"/resources/listserv"}),re(bn,{class:"animate-fade-slide",heading:"Articles of Interest",subheading:"",description:"Archived articles of interest to our members",link:"/resources/articles"}),re(bn,{class:"animate-fade-slide",heading:"General Web Resources",subheading:"",description:"In addition to this page, resources including books and articles can be found throughout the website.",link:"/resources/web"}),re(bn,{class:"animate-fade-slide",heading:"Child & Adolescent ",description:"Resources for child and adolescent psychiatry",link:"/resources/child-adolescent"}),re(bn,{class:"animate-fade-slide",heading:"Couples & Adults ",description:"Resources for couples and adults",link:"/resources/couples-adults"}),re(bn,{class:"animate-fade-slide",heading:"Culture & Family ",description:"Resources for culture and family",link:"/resources/culture-family"}),re(bn,{class:"animate-fade-slide",heading:"Training ",description:"Resources for training",link:"/resources/training"}),re(bn,{class:"animate-fade-slide",heading:"Family Treatment in Medical Education",description:"",link:"/resources/family-treatment"}),re(bn,{class:"animate-fade-slide",heading:"Annual Resident/Fellow Recognition Award",description:"Nominations requested for excellence in family-oriented care",link:"/resources/award-recognition"})]))]))}},kP={class:"member-view"},xP={key:0,class:"verification-section animate-fade-slide"},OP={class:"verification-card"},DP={class:"form-group"},NP=["disabled"],VP={class:"form-group"},MP=["disabled"],LP=["disabled"],FP={key:0,class:"loading-container"},UP={key:1},$P={key:0,class:"error-message"},BP={key:1,class:"success-message"},jP={key:1,class:"member-directory animate-fade-slide"},HP={class:"welcome-message"},zP={key:0,class:"loading-section"},qP={__name:"MemberView",setup(t){const e=ot(!1),n=ot(""),r=ot(""),s=ot(!1),i=ot(!1),a=ot(""),l=ot(""),c=ot([]);Ii(()=>{const g=localStorage.getItem("afp_member");if(g)try{const _=JSON.parse(g);n.value=_.name,r.value=_.email,e.value=!0,u(_.name,_.email)}catch(_){console.error("Error parsing saved member data:",_),localStorage.removeItem("afp_member")}});const u=async(g,_)=>{i.value=!0;try{const S=await fetch("https://us-central1-afp-site-c1bd9.cloudfunctions.net/verifyMember",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:g,email:_})}),k=await S.json();S.ok&&k.isMember?c.value=(k.members||[]).map(O=>({title:O.name,subtitle:[O.specialization,O.location].filter(Boolean).join(" | "),details:[O.description?O.description:"",O.email?`<br><br>Email: [${O.email}](mailto:${O.email})`:"",O.phone?`<br>Phone: ${O.phone}`:"",O.website?`<br>Website: [${O.website}](${O.website})`:""].filter(Boolean).join("")})):a.value=k.error||"Failed to load members."}catch(S){console.error("Failed to fetch member cards:",S),a.value="An error occurred while loading members."}finally{i.value=!1}},f=async()=>{if(!n.value||!r.value){a.value="Please enter both name and email.";return}s.value=!0,a.value="",l.value="";try{const g=await fetch("https://us-central1-afp-site-c1bd9.cloudfunctions.net/verifyMember",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.value,email:r.value})}),_=await g.json();if(g.ok&&_.isMember){const S={name:n.value,email:r.value,verifiedAt:new Date().toISOString()};localStorage.setItem("afp_member",JSON.stringify(S)),c.value=(_.members||[]).map(k=>({title:k.name,subtitle:[k.specialization,k.location].filter(Boolean).join(" | "),details:[k.description?k.description:"",k.email?`<br><br>Email: [${k.email}](mailto:${k.email})`:"",k.phone?`<br>Phone: ${k.phone}`:"",k.website?`<br>Website: [${k.website}](${k.website})`:""].filter(Boolean).join("")})),l.value="Membership verified! Welcome to the member directory.",setTimeout(()=>{e.value=!0,l.value=""},1500)}else a.value=_.error||"Membership not found. Please check your information or contact us if you believe this is an error."}catch(g){console.error("Verification error:",g),a.value="An error occurred during verification. Please try again later."}finally{s.value=!1}},p=()=>{localStorage.removeItem("afp_member"),e.value=!1,n.value="",r.value="",a.value="",l.value=""};return(g,_)=>(ie(),he("section",kP,[_[8]||(_[8]=F("h1",{class:"page-title animate-fade-slide"},"Our Members",-1)),e.value?(ie(),he("div",jP,[F("div",HP,[F("p",null,"Welcome, "+je(n.value)+"!",1)]),i.value?(ie(),he("div",zP,_[7]||(_[7]=[F("div",{class:"loading-circle large"},null,-1),F("p",null,"Loading member directory...",-1)]))):(ie(),_s(sa,{key:1,cards:c.value},null,8,["cards"])),F("button",{onClick:p,class:"logout-button"},"Sign Out")])):(ie(),he("div",xP,[F("div",OP,[_[5]||(_[5]=F("h2",null,"Member Verification",-1)),_[6]||(_[6]=F("p",null,' Please enter your information to access the member directory. You can enter your name without titles (e.g., "Jane Doe" instead of "Jane Doe, MD, DPM"). ',-1)),F("form",{onSubmit:Zp(f,["prevent"]),class:"verification-form"},[F("div",DP,[_[2]||(_[2]=F("label",{for:"memberName"},"Full Name (without titles)",-1)),xo(F("input",{id:"memberName","onUpdate:modelValue":_[0]||(_[0]=S=>n.value=S),type:"text",placeholder:"Enter your name (e.g., Jane Doe)",required:"",disabled:s.value},null,8,NP),[[Dl,n.value]])]),F("div",VP,[_[3]||(_[3]=F("label",{for:"memberEmail"},"Email Address",-1)),xo(F("input",{id:"memberEmail","onUpdate:modelValue":_[1]||(_[1]=S=>r.value=S),type:"email",placeholder:"Enter your email address",required:"",disabled:s.value},null,8,MP),[[Dl,r.value]])]),F("button",{type:"submit",class:"verify-button",disabled:s.value},[s.value?(ie(),he("div",FP,_[4]||(_[4]=[F("div",{class:"loading-circle"},null,-1),F("span",null,"Verifying...",-1)]))):(ie(),he("span",UP,"Verify Membership"))],8,LP)],32),a.value?(ie(),he("div",$P,je(a.value),1)):Ut("",!0),l.value?(ie(),he("div",BP,je(l.value),1)):Ut("",!0)])]))]))}},GP=kt(qP,[["__scopeId","data-v-01d0c8f7"]]),WP=[{id:"aacap",title:"American Academy of Child and Adolescent Psychiatry Annual Meeting",date:"October 2025",time:"",location:"Annual Meeting",description:"A virtual seminar exploring the latest research in child and adolescent psychiatry.",image:"https://media.istockphoto.com/id/1496377921/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=xuCCbqrrZoE0jKxLd8aW2U3dSjxwJaKw99EDea1q91w=",linkLabel:"Join Webinar"},{id:"afp",title:"Annual Family Psychiatry Conference",date:"March 2026",location:"Virtual",description:"Join leading experts in family psychiatry for a full day of workshops and keynotes.",image:"https://media.istockphoto.com/id/1496377580/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=cQAx2DYW0wlK5IgykC0pqGupR2lSwDmw7SEn2fuVgS0="},{id:"apa",title:"American Psychological Association Annual Meeting",date:"May 2026",location:"Online",description:"A virtual seminar exploring the latest research in psychiatry.",image:"https://media.istockphoto.com/id/1496377921/photo/group-of-people-applauding.jpg?s=2048x2048&w=is&k=20&c=xuCCbqrrZoE0jKxLd8aW2U3dSjxwJaKw99EDea1q91w="}],KP={class:"events-view"},QP={class:"events-container"},XP={__name:"EventsView",setup(t){return(e,n)=>(ie(),he("section",KP,[n[0]||(n[0]=F("h1",{class:"animate-fade-slide"},"Upcoming Events",-1)),F("div",QP,[(ie(!0),he(ut,null,os(Pe(WP),r=>(ie(),_s(E_,_a({key:r.id},{ref_for:!0},r),null,16))),128))])]))}},JP=kt(XP,[["__scopeId","data-v-3f74fb81"]]),YP={},ZP={class:"contact-view"};function eC(t,e){return ie(),he("section",ZP,e[0]||(e[0]=[F("h1",{class:"page-title animate-fade-slide"},"Contact Us",-1),F("p",{class:"page-subtitle animate-fade-slide",style:{"animation-delay":"0.2s"}}," We'd love to hear from you! Reach out with any questions, suggestions, or inquiries. ",-1),F("div",{class:"contact-info animate-fade-slide",style:{"animation-delay":"0.4s"}},[F("p",null,[Qe("Email: "),F("a",{href:"mailto:info@familypsychiatrists.org"},"info@familypsychiatrists.org")]),F("p",null,"Phone: (555) 123-4567"),F("p",null,"Mailing Address: 123 Main Street, Suite 456, San Francisco, CA 94105")],-1),F("div",{class:"contact-form animate-fade-slide",style:{"animation-delay":"0.6s"}},[F("h2",null,"Send Us a Message"),F("form",{action:"https://formkeep.com/f/32d60a487d3c","accept-charset":"UTF-8",enctype:"multipart/form-data",class:"contact-form-form",method:"POST"},[F("input",{type:"text",name:"name",placeholder:"Your Name",required:""}),F("input",{type:"email",name:"_replyto",placeholder:"Your Email",required:""}),F("textarea",{name:"message",placeholder:"Your Message",rows:"5",required:""}),F("input",{type:"hidden",name:"_next",value:"https://yoursite.com/thank-you"}),F("button",{type:"submit",class:"cta-button"},"Send Message")])],-1)]))}const tC=kt(YP,[["render",eC],["__scopeId","data-v-712da2b9"]]),nC=Ew({history:JE(),routes:[{path:"/",name:"home",component:cP},{path:"/about",name:"about",component:wP},{path:"/resources",name:"resources",component:CP,children:[{path:"listserv",name:"resources-listserv",component:()=>Ge(()=>import("./ListservView-COkiqJxA.js"),__vite__mapDeps([0,1,2]))},{path:"award-recognition",name:"resources-award-recognition",component:()=>Ge(()=>import("./AwardRecognitionView-BpUICEcC.js"),__vite__mapDeps([3,4]))},{path:"family-treatment",name:"resources-family-treatment",component:()=>Ge(()=>import("./FamilyTreatmentView-CDkUwNfT.js"),__vite__mapDeps([5,1,2]))},{path:"articles",name:"resources-articles",component:()=>Ge(()=>import("./ArticlesView-BNbUlrIp.js"),__vite__mapDeps([6,1,2]))},{path:"web",name:"resources-web",component:()=>Ge(()=>import("./WebResourcesView-DeA5Gp3C.js"),__vite__mapDeps([7,1,2]))},{path:"child-adolescent",name:"resources-child-adolescent",component:()=>Ge(()=>import("./ChildAdolescentView-CXq9yYy4.js"),[]),children:[{path:"aacap",name:"resources-child-adolescent-aacap",component:()=>Ge(()=>import("./AACAPView-DQk8m4r9.js"),__vite__mapDeps([8,1,2]))},{path:"family-centered",name:"resources-child-adolescent-family-centered",component:()=>Ge(()=>import("./FamilyCenteredView-Bv5JqUSQ.js"),__vite__mapDeps([9,1,2]))}]},{path:"couples-adults",name:"resources-couples-adults",component:()=>Ge(()=>import("./CouplesAdultsView-BPuHj8NX.js"),[]),children:[{path:"psychiatric-resources",name:"resources-couples-adults-psychiatric-resources",component:()=>Ge(()=>import("./PsychiatricResourcesView-BEmeubl9.js"),__vite__mapDeps([10,1,2]))},{path:"books",name:"resources-couples-adults-books",component:()=>Ge(()=>import("./BooksView-zSymTuRr.js"),__vite__mapDeps([11,1,2]))}]},{path:"culture-family",name:"resources-culture-family",component:()=>Ge(()=>import("./CultureFamilyView-CuCnNLRL.js"),[]),children:[{path:"resources",name:"resources-culture-family-resources",component:()=>Ge(()=>import("./CultureFamilyResourcesView-BuTuDw77.js"),__vite__mapDeps([12,1,2]))},{path:"cultural-anthropology",name:"resources-culture-family-cultural-anthropology",component:()=>Ge(()=>import("./CulturalAnthropologyView-CNJDgdf8.js"),__vite__mapDeps([13,1,2]))}]},{path:"training",name:"resources-training",component:()=>Ge(()=>import("./TrainingView-CB9oGkx2.js"),[]),children:[{path:"curriculum-in-adult-psychiatric-residency-training",name:"resources-training-curriculum",component:()=>Ge(()=>import("./CurriculumInAdultPsychiatricResidencyTrainingView-lF_eCkb6.js"),__vite__mapDeps([14,1,2]))},{path:"training-programs-in-family-psychiatry",name:"resources-training-programs",component:()=>Ge(()=>import("./TrainingProgramsInFamilyPsychiatryView-Uhjf7F7l.js"),__vite__mapDeps([15,1,2]))}]}]},{path:"/members",name:"members",component:GP},{path:"/events",name:"events",component:JP},{path:"/contact",name:"contact",component:tC},{path:"/confirmation",name:"confirmation",component:()=>Ge(()=>import("./MembershipConfirmationView-BG6wxllT.js"),[])},{path:"/membership",name:"membership",component:()=>Ge(()=>import("./MembershipView-BBUs8kmA.js"),__vite__mapDeps([16,17]))},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>Ge(()=>import("./PlaceholderView-DmC08JMU.js"),[])}],scrollBehavior(t,e,n){return t.hash?{el:t.hash,behavior:"smooth"}:{top:0}}}),Eu=gE(pR);Eu.use(vE());Eu.use(nC);Eu.mount("#app");export{ut as F,bn as I,Sc as R,Yp as T,kt as _,he as a,Wp as b,_s as c,F as d,re as e,it as f,Qe as g,sC as h,Ut as i,Pt as j,iC as k,ot as l,Ae as m,ms as n,ie as o,Ii as p,hp as q,os as r,bi as s,je as t,Pe as u,Zp as v,Ke as w,xo as x,Dl as y};
