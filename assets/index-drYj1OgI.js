(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vl="186",Ss={ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vf=0,qc=1,Wf=2,ir=1,Xf=2,js=3,Pi=0,hn=1,Ue=2,Jn=0,sr=1,gi=2,$c=3,Kc=4,Yf=5,_s=100,qf=101,$f=102,Kf=103,Zf=104,Jf=200,Qf=201,jf=202,td=203,Du=204,Nu=205,ed=206,nd=207,id=208,sd=209,rd=210,ad=211,od=212,ld=213,cd=214,Wo=0,Xo=1,Yo=2,cr=3,qo=4,$o=5,Ko=6,Zo=7,Uu=0,hd=1,ud=2,Qn=0,Wl=1,Xl=2,Yl=3,Ga=4,ql=5,$l=6,Kl=7,Ou=300,qi=301,As=302,ga=303,io=304,Va=306,Ii=1e3,fi=1001,Jo=1002,Je=1003,fd=1004,Dr=1005,en=1006,so=1007,Wi=1008,Sn=1009,Fu=1010,zu=1011,hr=1012,Zl=1013,ni=1014,kn=1015,gn=1016,Jl=1017,Ql=1018,ur=1020,Bu=35902,ku=35899,Hu=1021,Gu=1022,Hn=1023,xi=1026,Xi=1027,jl=1028,tc=1029,$i=1030,ec=1031,nc=1033,xa=33776,_a=33777,va=33778,ya=33779,Qo=35840,jo=35841,tl=35842,el=35843,nl=36196,il=37492,sl=37496,rl=37488,al=37489,Ta=37490,ol=37491,ll=37808,cl=37809,hl=37810,ul=37811,fl=37812,dl=37813,pl=37814,ml=37815,gl=37816,xl=37817,_l=37818,vl=37819,yl=37820,Ml=37821,Sl=36492,bl=36494,El=36495,wl=36283,Tl=36284,Aa=36285,Al=36286,dd=3200,Rl=0,pd=1,Ri="",Pe="srgb",Ra="srgb-linear",Ca="linear",Me="srgb",ro=7680,md=519,gd=512,xd=513,_d=514,ic=515,vd=516,yd=517,sc=518,Md=519,Sd=35044,Zc="300 es",Kn=2e3,fr=2001;function bd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Pa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Ed(){const n=Pa("canvas");return n.style.display="block",n}const Jc={};function Qc(...n){const t="THREE."+n.shift();console.log(t,...n)}function Vu(n){const t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){const e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Jt(...n){n=Vu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ge(...n){n=Vu(n);const t="THREE."+n.shift();{const e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function bs(...n){const t=n.join(" ");t in Jc||(Jc[t]=!0,Jt(...n))}function wd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}const Td={[Wo]:Xo,[Yo]:Ko,[qo]:Zo,[cr]:$o,[Xo]:Wo,[Ko]:Yo,[Zo]:qo,[$o]:cr};class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const i=e[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let jc=1234567;const rr=Math.PI/180,Rs=180/Math.PI;function Ji(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(je[n&255]+je[n>>8&255]+je[n>>16&255]+je[n>>24&255]+"-"+je[t&255]+je[t>>8&255]+"-"+je[t>>16&15|64]+je[t>>24&255]+"-"+je[e&63|128]+je[e>>8&255]+"-"+je[e>>16&255]+je[e>>24&255]+je[i&255]+je[i>>8&255]+je[i>>16&255]+je[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function rc(n,t){return(n%t+t)%t}function Ad(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Rd(n,t,e){return n!==t?(e-n)/(t-n):0}function ar(n,t,e){return(1-e)*n+e*t}function Cd(n,t,e,i){return ar(n,t,1-Math.exp(-e*i))}function Pd(n,t=1){return t-Math.abs(rc(n,t*2)-t)}function Id(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Ld(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Dd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Nd(n,t){return n+Math.random()*(t-n)}function Ud(n){return n*(.5-Math.random())}function Od(n){n!==void 0&&(jc=n);let t=jc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Fd(n){return n*rr}function zd(n){return n*Rs}function Bd(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function kd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Hd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gd(n,t,e,i,s){const r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+i)/2),u=a((t+i)/2),d=r((t-i)/2),h=a((t-i)/2),f=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*u,c*d,c*h,o*l);break;case"YZY":n.set(c*h,o*u,c*d,o*l);break;case"ZXZ":n.set(c*d,c*h,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*u,o*l);break;default:Jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function vs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ln(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Wa={DEG2RAD:rr,RAD2DEG:Rs,generateUUID:Ji,clamp:re,euclideanModulo:rc,mapLinear:Ad,inverseLerp:Rd,lerp:ar,damp:Cd,pingpong:Pd,smoothstep:Id,smootherstep:Ld,randInt:Dd,randFloat:Nd,randFloatSpread:Ud,seededRandom:Od,degToRad:Fd,radToDeg:zd,isPowerOfTwo:Bd,ceilPowerOfTwo:kd,floorPowerOfTwo:Hd,setQuaternionFromProperEuler:Gd,normalize:ln,denormalize:vs},Lc=class Lc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Lc.prototype.isVector2=!0;let at=Lc;class Pn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let c=i[s+0],l=i[s+1],u=i[s+2],d=i[s+3],h=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const v=Math.acos(m),S=Math.sin(v);p=Math.sin(p*v)/S,o=Math.sin(o*v)/S,c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+_*o}else{c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+_*o;const v=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=v,l*=v,u*=v,d*=v}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){const o=i[s],c=i[s+1],l=i[s+2],u=i[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-o*f,t[e+2]=l*g+u*f+o*h-c*d,t[e+3]=u*g-o*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(s/2),d=o(r/2),h=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case"YZX":this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case"XZY":this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=i*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-i*l,this._z=r*u+a*l+i*c-s*o,this._w=a*u-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Dc=class Dc{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(th.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*i),u=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+c*l+a*d-o*u,this.y=i+c*u+o*l-r*d,this.z=s+c*d+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ao.copy(this).projectOnVector(t),this.sub(ao)}reflect(t){return this.sub(ao.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Dc.prototype.isVector3=!0;let I=Dc;const ao=new I,th=new Pn,Nc=class Nc{constructor(t,e,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l)}set(t,e,i,s,r,a,o,c,l){const u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],_=s[0],m=s[3],p=s[6],v=s[1],S=s[4],x=s[7],M=s[2],b=s[5],A=s[8];return r[0]=a*_+o*v+c*M,r[3]=a*m+o*S+c*b,r[6]=a*p+o*x+c*A,r[1]=l*_+u*v+d*M,r[4]=l*m+u*S+d*b,r[7]=l*p+u*x+d*A,r[2]=h*_+f*v+g*M,r[5]=h*m+f*S+g*b,r[8]=h*p+f*x+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-i*r*u+i*o*c+s*r*l-s*a*c}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,h=o*c-u*r,f=l*r-a*c,g=e*d+i*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*l-u*i)*_,t[2]=(o*i-s*a)*_,t[3]=h*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(i*c-l*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(oo.makeScale(t,e)),this}rotate(t){return bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(oo.makeRotation(-t)),this}translate(t,e){return bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(oo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Nc.prototype.isMatrix3=!0;let ie=Nc;const oo=new ie,eh=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nh=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vd(){const n={enabled:!0,workingColorSpace:Ra,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Me&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Me&&(s.r=Es(s.r),s.g=Es(s.g),s.b=Es(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ri?Ca:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ra]:{primaries:t,whitePoint:i,transfer:Ca,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:i,transfer:Me,toXYZ:eh,fromXYZ:nh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),n}const pe=Vd();function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Es(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let is;class Wd{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{is===void 0&&(is=Pa("canvas")),is.width=t.width,is.height=t.height;const s=is.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=is}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Pa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(pi(e[i]/255)*255):e[i]=pi(e[i]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xd=0;class ac{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Ji(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(lo(s[a].image)):r.push(lo(s[a]))}else r=lo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function lo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}let Yd=0;const co=new I;class nn extends Di{constructor(t=nn.DEFAULT_IMAGE,e=nn.DEFAULT_MAPPING,i=fi,s=fi,r=en,a=Wi,o=Hn,c=Sn,l=nn.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yd++}),this.uuid=Ji(),this.name="",this.source=new ac(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(co).x}get height(){return this.source.getSize(co).y}get depth(){return this.source.getSize(co).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const i=t[e];if(i===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ou)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ii:t.x=t.x-Math.floor(t.x);break;case fi:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ii:t.y=t.y-Math.floor(t.y);break;case fi:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Ou;nn.DEFAULT_ANISOTROPY=1;const Uc=class Uc{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,x=(f+1)/2,M=(p+1)/2,b=(u+h)/4,A=(d+_)/4,y=(g+m)/4;return S>x&&S>M?S<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(S),s=b/i,r=A/i):x>M?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=b/s,r=y/s):M<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),i=A/r,s=y/r),this.set(i,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(h-u)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Uc.prototype.isVector4=!0;let Le=Uc;class qd extends Di{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];const s={width:t,height:e,depth:i.depth},r=new nn(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){const e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const s=Object.assign({},t.textures[e].image);this.textures[e].source=new ac(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends qd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Wu extends nn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $d extends nn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Ha=class Ha{constructor(t,e,i,s,r,a,o,c,l,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,c,l,u,d,h,f,g,_,m)}set(t,e,i,s,r,a,o,c,l,u,d,h,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ha().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const e=this.elements,i=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),a=1/ss.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-_*l,e[9]=-o*c,e[2]=_-h*l,e[6]=g+f*l,e[10]=a*c}else if(t.order==="YXZ"){const h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+h*o,e[10]=a*c}else if(t.order==="ZXY"){const h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const h=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order==="XZY"){const h=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,Zd)}lookAt(t,e,i){const s=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Si.crossVectors(i,vn),Si.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Si.crossVectors(i,vn)),Si.normalize(),Nr.crossVectors(vn,Si),s[0]=Si.x,s[4]=Nr.x,s[8]=vn.x,s[1]=Si.y,s[5]=Nr.y,s[9]=vn.y,s[2]=Si.z,s[6]=Nr.z,s[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],S=i[7],x=i[11],M=i[15],b=s[0],A=s[4],y=s[8],w=s[12],R=s[1],L=s[5],N=s[9],z=s[13],P=s[2],D=s[6],X=s[10],H=s[14],et=s[3],K=s[7],tt=s[11],j=s[15];return r[0]=a*b+o*R+c*P+l*et,r[4]=a*A+o*L+c*D+l*K,r[8]=a*y+o*N+c*X+l*tt,r[12]=a*w+o*z+c*H+l*j,r[1]=u*b+d*R+h*P+f*et,r[5]=u*A+d*L+h*D+f*K,r[9]=u*y+d*N+h*X+f*tt,r[13]=u*w+d*z+h*H+f*j,r[2]=g*b+_*R+m*P+p*et,r[6]=g*A+_*L+m*D+p*K,r[10]=g*y+_*N+m*X+p*tt,r[14]=g*w+_*z+m*H+p*j,r[3]=v*b+S*R+x*P+M*et,r[7]=v*A+S*L+x*D+M*K,r[11]=v*y+S*N+x*X+M*tt,r[15]=v*w+S*z+x*H+M*j,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],v=c*f-l*h,S=o*f-l*d,x=o*h-c*d,M=a*f-l*u,b=a*h-c*u,A=a*d-o*u;return e*(_*v-m*S+p*x)-i*(g*v-m*M+p*b)+s*(g*S-_*M+p*A)-r*(g*x-_*b+m*A)}determinantAffine(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-i*(r*u-o*c)+s*(r*l-a*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=e*o-i*a,S=e*c-s*a,x=e*l-r*a,M=i*c-s*o,b=i*l-r*o,A=s*l-r*c,y=u*_-d*g,w=u*m-h*g,R=u*p-f*g,L=d*m-h*_,N=d*p-f*_,z=h*p-f*m,P=v*z-S*N+x*L+M*R-b*w+A*y;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return t[0]=(o*z-c*N+l*L)*D,t[1]=(s*N-i*z-r*L)*D,t[2]=(_*A-m*b+p*M)*D,t[3]=(h*b-d*A-f*M)*D,t[4]=(c*R-a*z-l*w)*D,t[5]=(e*z-s*R+r*w)*D,t[6]=(m*x-g*A-p*S)*D,t[7]=(u*A-h*x+f*S)*D,t[8]=(a*N-o*R+l*y)*D,t[9]=(i*R-e*N-r*y)*D,t[10]=(g*b-_*x+p*v)*D,t[11]=(d*x-u*b-f*v)*D,t[12]=(o*w-a*L-c*y)*D,t[13]=(e*L-i*w+s*y)*D,t[14]=(_*S-g*M-m*v)*D,t[15]=(u*M-d*S+h*v)*D,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+i,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,d=o+o,h=r*l,f=r*u,g=r*d,_=a*u,m=a*d,p=o*d,v=c*l,S=c*u,x=c*d,M=i.x,b=i.y,A=i.z;return s[0]=(1-(_+p))*M,s[1]=(f+x)*M,s[2]=(g-S)*M,s[3]=0,s[4]=(f-x)*b,s[5]=(1-(h+p))*b,s[6]=(m+v)*b,s[7]=0,s[8]=(g+S)*A,s[9]=(m-v)*A,s[10]=(1-(h+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=ss.set(s[0],s[1],s[2]).length();const o=ss.set(s[4],s[5],s[6]).length(),c=ss.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Un.copy(this);const l=1/a,u=1/o,d=1/c;return Un.elements[0]*=l,Un.elements[1]*=l,Un.elements[2]*=l,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=d,Un.elements[9]*=d,Un.elements[10]*=d,e.setFromRotationMatrix(Un),i.x=a,i.y=o,i.z=c,this}makePerspective(t,e,i,s,r,a,o=Kn,c=!1){const l=this.elements,u=2*r/(e-t),d=2*r/(i-s),h=(e+t)/(e-t),f=(i+s)/(i-s);let g,_;if(c)g=r/(a-r),_=a*r/(a-r);else if(o===Kn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===fr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Kn,c=!1){const l=this.elements,u=2/(e-t),d=2/(i-s),h=-(e+t)/(e-t),f=-(i+s)/(i-s);let g,_;if(c)g=1/(a-r),_=a/(a-r);else if(o===Kn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===fr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ha.prototype.isMatrix4=!0;let he=Ha;const ss=new I,Un=new he,Kd=new I(0,0,0),Zd=new I(1,1,1),Si=new I,Nr=new I,vn=new I,ih=new he,sh=new Pn;class _i{constructor(t=0,e=0,i=0,s=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return ih.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ih,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sh.setFromEuler(this),this.setFromQuaternion(sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class oc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jd=0;const rh=new I,rs=new Pn,ri=new he,Ur=new I,ks=new I,Qd=new I,jd=new Pn,ah=new I(1,0,0),oh=new I(0,1,0),lh=new I(0,0,1),ch={type:"added"},tp={type:"removed"},as={type:"childadded",child:null},ho={type:"childremoved",child:null};class Ne extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new I,e=new _i,i=new Pn,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new ie}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(ah,t)}rotateY(t){return this.rotateOnAxis(oh,t)}rotateZ(t){return this.rotateOnAxis(lh,t)}translateOnAxis(t,e){return rh.copy(t).applyQuaternion(this.quaternion),this.position.add(rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ah,t)}translateY(t){return this.translateOnAxis(oh,t)}translateZ(t){return this.translateOnAxis(lh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ri.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ur.copy(t):Ur.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ri.lookAt(ks,Ur,this.up):ri.lookAt(Ur,ks,this.up),this.quaternion.setFromRotationMatrix(ri),s&&(ri.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(ri),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ge("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ch),as.child=t,this.dispatchEvent(as),as.child=null):ge("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tp),ho.child=t,this.dispatchEvent(ho),ho.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ri.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ri.multiply(t.parent.matrixWorld)),t.applyMatrix4(ri),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ch),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,Qd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,jd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ne.DEFAULT_UP=new I(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class At extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ep={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new At,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new At,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new At,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&h>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ep)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new At;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function fo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Pt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=pe.workingColorSpace){if(t=rc(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=fo(a,r,t+1/3),this.g=fo(a,r,t),this.b=fo(a,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function i(r){r!==void 0&&parseFloat(r)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const i=Xu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return pe.workingToColorSpace(tn.copy(this),t),Math.round(re(tn.r*255,0,255))*65536+Math.round(re(tn.g*255,0,255))*256+Math.round(re(tn.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(tn.copy(this),e);const i=tn.r,s=tn.g,r=tn.b,a=Math.max(i,s,r),o=Math.min(i,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Pe){pe.workingToColorSpace(tn.copy(this),t);const e=tn.r,i=tn.g,s=tn.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(bi),this.setHSL(bi.h+t,bi.s+e,bi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(bi),t.getHSL(Or);const i=ar(bi.h,Or.h,e),s=ar(bi.s,Or.s,e),r=ar(bi.l,Or.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new Pt;Pt.NAMES=Xu;class Yu extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}}const On=new I,ai=new I,po=new I,oi=new I,os=new I,ls=new I,hh=new I,mo=new I,go=new I,xo=new I,_o=new Le,vo=new Le,yo=new Le;class Bn{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),On.subVectors(t,e),s.cross(On);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){On.subVectors(s,e),ai.subVectors(i,e),po.subVectors(t,e);const a=On.dot(On),o=On.dot(ai),c=On.dot(po),l=ai.dot(ai),u=ai.dot(po),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;const h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,i,s,r,a,o,c){return this.getBarycoord(t,e,i,s,oi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,oi.x),c.addScaledVector(a,oi.y),c.addScaledVector(o,oi.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return _o.setScalar(0),vo.setScalar(0),yo.setScalar(0),_o.fromBufferAttribute(t,e),vo.fromBufferAttribute(t,i),yo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(_o,r.x),a.addScaledVector(vo,r.y),a.addScaledVector(yo,r.z),a}static isFrontFacing(t,e,i,s){return On.subVectors(i,e),ai.subVectors(t,e),On.cross(ai).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return On.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),On.cross(ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Bn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Bn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Bn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Bn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Bn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,o;os.subVectors(s,i),ls.subVectors(r,i),mo.subVectors(t,i);const c=os.dot(mo),l=ls.dot(mo);if(c<=0&&l<=0)return e.copy(i);go.subVectors(t,s);const u=os.dot(go),d=ls.dot(go);if(u>=0&&d<=u)return e.copy(s);const h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(i).addScaledVector(os,a);xo.subVectors(t,r);const f=os.dot(xo),g=ls.dot(xo);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(i).addScaledVector(ls,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return hh.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(hh,o);const p=1/(m+_+h);return a=_*p,o=h*p,e.copy(i).addScaledVector(os,a).addScaledVector(ls,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Qi{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Fn):Fn.fromBufferAttribute(r,a),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fr.copy(i.boundingBox)),Fr.applyMatrix4(t.matrixWorld),this.union(Fr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),zr.subVectors(this.max,Hs),cs.subVectors(t.a,Hs),hs.subVectors(t.b,Hs),us.subVectors(t.c,Hs),Ei.subVectors(hs,cs),wi.subVectors(us,hs),Oi.subVectors(cs,us);let e=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-Oi.z,Oi.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,Oi.z,0,-Oi.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-Oi.y,Oi.x,0];return!Mo(e,cs,hs,us,zr)||(e=[1,0,0,0,1,0,0,0,1],!Mo(e,cs,hs,us,zr))?!1:(Br.crossVectors(Ei,wi),e=[Br.x,Br.y,Br.z],Mo(e,cs,hs,us,zr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const li=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,Fr=new Qi,cs=new I,hs=new I,us=new I,Ei=new I,wi=new I,Oi=new I,Hs=new I,zr=new I,Br=new I,Fi=new I;function Mo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Fi.fromArray(n,r);const o=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),c=t.dot(Fi),l=e.dot(Fi),u=i.dot(Fi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const ke=new I,kr=new at;let np=0;class jn extends Di{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:np++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Sd,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)kr.fromBufferAttribute(this,e),kr.applyMatrix3(t),this.setXY(e,kr.x,kr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=vs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ln(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=ln(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array),s=ln(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ln(e,this.array),i=ln(i,this.array),s=ln(s,this.array),r=ln(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}}class qu extends jn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class $u extends jn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class jt extends jn{constructor(t,e,i){super(new Float32Array(t),e,i)}}const ip=new Qi,Gs=new I,So=new I;class ji{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ip.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);const e=Gs.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Gs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(So.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(So)),this.expandByPoint(Gs.copy(t.center).sub(So))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let sp=0;const wn=new he,bo=new Ne,fs=new I,yn=new Qi,Vs=new Qi,$e=new I;class Ae extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bd(t)?$u:qu)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ie().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,i){return wn.makeTranslation(t,e,i),this.applyMatrix4(wn),this}scale(t,e,i){return wn.makeScale(t,e,i),this.applyMatrix4(wn),this}lookAt(t){return bo.lookAt(t),bo.updateMatrix(),this.applyMatrix4(bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fs).negate(),this.translate(fs.x,fs.y,fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(i,3))}else{const i=Math.min(t.length,e.count);for(let s=0;s<i;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];yn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ji);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?($e.addVectors(yn.min,Vs.min),yn.expandByPoint($e),$e.addVectors(yn.max,Vs.max),yn.expandByPoint($e)):(yn.expandByPoint(Vs.min),yn.expandByPoint(Vs.max))}yn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($e));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)$e.fromBufferAttribute(o,l),c&&(fs.fromBufferAttribute(t,l),$e.add(fs)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new jn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let y=0;y<i.count;y++)o[y]=new I,c[y]=new I;const l=new I,u=new I,d=new I,h=new at,f=new at,g=new at,_=new I,m=new I;function p(y,w,R){l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,w),d.fromBufferAttribute(i,R),h.fromBufferAttribute(r,y),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),u.sub(l),d.sub(l),f.sub(h),g.sub(h);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),o[y].add(_),o[w].add(_),o[R].add(_),c[y].add(m),c[w].add(m),c[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let y=0,w=v.length;y<w;++y){const R=v[y],L=R.start,N=R.count;for(let z=L,P=L+N;z<P;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const S=new I,x=new I,M=new I,b=new I;function A(y){M.fromBufferAttribute(s,y),b.copy(M);const w=o[y];S.copy(w),S.sub(M.multiplyScalar(M.dot(w))).normalize(),x.crossVectors(b,w);const L=x.dot(c[y])<0?-1:1;a.setXYZW(y,S.x,S.y,S.z,L)}for(let y=0,w=v.length;y<w;++y){const R=v[y],L=R.start,N=R.count;for(let z=L,P=L+N;z<P;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new jn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const s=new I,r=new I,a=new I,o=new I,c=new I,l=new I,u=new I,d=new I;if(t)for(let h=0,f=t.count;h<f;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(o,c){const l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new jn(h,u,d)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,i=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=t(c,i);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,d=l.length;u<d;u++){const h=l[u],f=t(h,i);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const c in i){const l=i[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){const f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],d=r[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eo=new I,rp=new I,ap=new ie;class ui{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Eo.subVectors(i,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){const s=t.delta(Eo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ap.getNormalMatrix(t),s=this.coplanarPoint(Eo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let op=0;class ts extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=sr,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Du,this.blendDst=Nu,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=cr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ro,this.stencilZFail=ro,this.stencilZPass=ro,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new ui().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new at().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const ci=new I,wo=new I,Hr=new I,Gr=new I;class br{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){wo.copy(t).add(e).multiplyScalar(.5),Hr.copy(e).sub(t).normalize(),Gr.copy(this.origin).sub(wo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Hr),o=Gr.dot(this.direction),c=-Gr.dot(Hr),l=Gr.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=r*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-r,-c),r),f=h*(h+2*c)+l):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+h*(h+2*c)+l);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(wo).addScaledVector(Hr,h),f}intersectSphere(t,e){if(t.radius<0)return null;ci.subVectors(t.center,this.origin);const i=ci.dot(this.direction),s=ci.dot(ci)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(t.min.x-h.x)*l,s=(t.max.x-h.x)*l):(i=(t.max.x-h.x)*l,s=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,i,s,r){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,g=e.x-a.x,_=e.y-a.y,m=e.z-a.z,p=i.x-a.x,v=i.y-a.y,S=i.z-a.z,x=Math.abs(c),M=Math.abs(l),b=Math.abs(u);let A,y,w,R,L,N,z,P,D,X,H,et;if(x>=M&&x>=b?(w=c,N=d,D=g,et=p,c>=0?(A=l,y=u,R=h,L=f,z=_,P=m,X=v,H=S):(A=u,y=l,R=f,L=h,z=m,P=_,X=S,H=v)):M>=b?(w=l,N=h,D=_,et=v,l>=0?(A=u,y=c,R=f,L=d,z=m,P=g,X=S,H=p):(A=c,y=u,R=d,L=f,z=g,P=m,X=p,H=S)):(w=u,N=f,D=m,et=S,u>=0?(A=c,y=l,R=d,L=h,z=g,P=_,X=p,H=v):(A=l,y=c,R=h,L=d,z=_,P=g,X=v,H=p)),w===0)return null;const K=A/w,tt=y/w,j=1/w,Nt=R-K*N,ot=L-tt*N,k=z-K*D,nt=P-tt*D,ft=X-K*et,B=H-tt*et,q=ft*nt-B*k,ht=Nt*B-ot*ft,Ut=k*ot-nt*Nt;if(s){if(q<0||ht<0||Ut<0)return null}else if((q<0||ht<0||Ut<0)&&(q>0||ht>0||Ut>0))return null;const gt=q+ht+Ut;if(gt===0)return null;const Ht=j*(q*N+ht*D+Ut*et);return(gt>0?Ht<0:Ht>0)?null:this.at(Ht/gt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te extends ts{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=Uu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const uh=new he,zi=new br,Vr=new ji,fh=new I,Wr=new I,Xr=new I,Yr=new I,To=new I,qr=new I,dh=new I,$r=new I;class Zt extends Ne{constructor(t=new Ae,e=new te){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){qr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],d=r[c];u!==0&&(To.fromBufferAttribute(d,t),a?qr.addScaledVector(To,u):qr.addScaledVector(To.sub(e),u))}e.add(qr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere),Vr.applyMatrix4(r),zi.copy(t.ray).recast(t.near),!(Vr.containsPoint(zi.origin)===!1&&(zi.intersectSphere(Vr,fh)===null||zi.origin.distanceToSquared(fh)>(t.far-t.near)**2))&&(uh.copy(r).invert(),zi.copy(t.ray).applyMatrix4(uh),!(i.boundingBox!==null&&zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,zi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,M=S;x<M;x+=3){const b=o.getX(x),A=o.getX(x+1),y=o.getX(x+2);s=Kr(this,p,t,i,l,u,d,b,A,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),S=o.getX(m+1),x=o.getX(m+2);s=Kr(this,a,t,i,l,u,d,v,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=v,M=S;x<M;x+=3){const b=x,A=x+1,y=x+2;s=Kr(this,p,t,i,l,u,d,b,A,y),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const v=m,S=m+1,x=m+2;s=Kr(this,a,t,i,l,u,d,v,S,x),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function lp(n,t,e,i,s,r,a,o){let c;if(t.side===hn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,t.side===Pi,o),c===null)return null;$r.copy(o),$r.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo($r);return l<e.near||l>e.far?null:{distance:l,point:$r.clone(),object:n}}function Kr(n,t,e,i,s,r,a,o,c,l){n.getVertexPosition(o,Wr),n.getVertexPosition(c,Xr),n.getVertexPosition(l,Yr);const u=lp(n,t,e,i,Wr,Xr,Yr,dh);if(u){const d=new I;Bn.getBarycoord(dh,Wr,Xr,Yr,d),s&&(u.uv=Bn.getInterpolatedAttribute(s,o,c,l,d,new at)),r&&(u.uv1=Bn.getInterpolatedAttribute(r,o,c,l,d,new at)),a&&(u.normal=Bn.getInterpolatedAttribute(a,o,c,l,d,new I),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new I,materialIndex:0};Bn.getNormal(Wr,Xr,Yr,h.normal),u.face=h,u.barycoord=d}return u}class Ku extends nn{constructor(t=null,e=1,i=1,s,r,a,o,c,l=Je,u=Je,d,h){super(null,a,o,c,l,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ph extends jn{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ds=new he,mh=new he,Zr=[],gh=new Qi,cp=new he,Ws=new Zt,Xs=new ji;class Cl extends Zt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ph(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,cp)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ds),gh.copy(t.boundingBox).applyMatrix4(ds),this.boundingBox.union(gh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ji),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,ds),Xs.copy(t.boundingSphere).applyMatrix4(ds),this.boundingSphere.union(Xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){const i=this.matrixWorld,s=this.count;if(Ws.geometry=this.geometry,Ws.material=this.material,Ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Xs.copy(this.boundingSphere),Xs.applyMatrix4(i),t.ray.intersectsSphere(Xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ds),mh.multiplyMatrices(i,ds),Ws.matrixWorld=mh,Ws.raycast(t,Zr);for(let a=0,o=Zr.length;a<o;a++){const c=Zr[a];c.instanceId=r,c.object=this,e.push(c)}Zr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new ph(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){const i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ku(new Float32Array(s*this.count),s,this.count,jl,kn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bi=new ji,hp=new at(.5,.5),Jr=new I;class lc{constructor(t=new ui,e=new ui,i=new ui,s=new ui,r=new ui,a=new ui){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Kn,i=!1){const s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],S=r[13],x=r[14],M=r[15];if(s[0].setComponents(l-a,f-u,p-g,M-v).normalize(),s[1].setComponents(l+a,f+u,p+g,M+v).normalize(),s[2].setComponents(l+o,f+d,p+_,M+S).normalize(),s[3].setComponents(l-o,f-d,p-_,M-S).normalize(),i)s[4].setComponents(c,h,m,x).normalize(),s[5].setComponents(l-c,f-h,p-m,M-x).normalize();else if(s[4].setComponents(l-c,f-h,p-m,M-x).normalize(),e===Kn)s[5].setComponents(l+c,f+h,p+m,M+x).normalize();else if(e===fr)s[5].setComponents(c,h,m,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(t){Bi.center.set(0,0,0);const e=hp.distanceTo(t.center);return Bi.radius=.7071067811865476+e,Bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Jr.x=s.normal.x>0?t.max.x:t.min.x,Jr.y=s.normal.y>0?t.max.y:t.min.y,Jr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Zu extends ts{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ia=new I,La=new I,xh=new he,Ys=new br,Qr=new ji,Ao=new I,_h=new I;class up extends Ne{constructor(t=new Ae,e=new Zu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Ia.fromBufferAttribute(e,s-1),La.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Ia.distanceTo(La);t.setAttribute("lineDistance",new jt(i,1))}else Jt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qr.copy(i.boundingSphere),Qr.applyMatrix4(s),Qr.radius+=r,t.ray.intersectsSphere(Qr)===!1)return;xh.copy(s).invert(),Ys.copy(t.ray).applyMatrix4(xh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=u.getX(_),v=u.getX(_+1),S=jr(this,t,Ys,c,p,v,_);S&&e.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=jr(this,t,Ys,c,_,m,g-1);p&&e.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=l){const p=jr(this,t,Ys,c,_,_+1,_);p&&e.push(p)}if(this.isLineLoop){const _=jr(this,t,Ys,c,g-1,f,g-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function jr(n,t,e,i,s,r,a){const o=n.geometry.attributes.position;if(Ia.fromBufferAttribute(o,s),La.fromBufferAttribute(o,r),e.distanceSqToSegment(Ia,La,Ao,_h)>i)return;Ao.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ao);if(!(l<t.near||l>t.far))return{distance:l,point:_h.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}class Ju extends ts{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const vh=new he,Pl=new br,ta=new ji,ea=new I;class fp extends Ne{constructor(t=new Ae,e=new Ju){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(s),ta.radius+=r,t.ray.intersectsSphere(ta)===!1)return;vh.copy(s).invert(),Pl.copy(t.ray).applyMatrix4(vh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){const h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=h,_=f;g<_;g++){const m=l.getX(g);ea.fromBufferAttribute(d,m),yh(ea,m,c,s,t,e,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)ea.fromBufferAttribute(d,g),yh(ea,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function yh(n,t,e,i,s,r,a){const o=Pl.distanceSqToPoint(n);if(o<e){const c=new I;Pl.closestPointToPoint(n,c),c.applyMatrix4(i);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Qu extends nn{constructor(t=[],e=qi,i,s,r,a,o,c,l,u){super(t,e,i,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class _n extends nn{constructor(t,e,i,s,r,a,o,c,l){super(t,e,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class dr extends nn{constructor(t,e,i=ni,s,r,a,o=Je,c=Je,l,u=xi,d=1){if(u!==xi&&u!==Xi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:t,height:e,depth:d};super(h,s,r,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ac(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}}class dp extends dr{constructor(t,e=ni,i=qi,s,r,a=Je,o=Je,c,l=xi){const u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class ju extends nn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Dn extends Ae{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(d,2));function g(_,m,p,v,S,x,M,b,A,y,w){const R=x/A,L=M/y,N=x/2,z=M/2,P=b/2,D=A+1,X=y+1;let H=0,et=0;const K=new I;for(let tt=0;tt<X;tt++){const j=tt*L-z;for(let Nt=0;Nt<D;Nt++){const ot=Nt*R-N;K[_]=ot*v,K[m]=j*S,K[p]=P,l.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[p]=b>0?1:-1,u.push(K.x,K.y,K.z),d.push(Nt/A),d.push(1-tt/y),H+=1}}for(let tt=0;tt<y;tt++)for(let j=0;j<A;j++){const Nt=h+j+D*tt,ot=h+j+D*(tt+1),k=h+(j+1)+D*(tt+1),nt=h+(j+1)+D*tt;c.push(Nt,ot,nt),c.push(ot,k,nt),et+=6}o.addGroup(f,et,w),f+=et,h+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class pr extends Ae{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));const a=[],o=[],c=[],l=[],u=e/2,d=Math.PI/2*t,h=e,f=2*d+h,g=i*2+r,_=s+1,m=new I,p=new I;for(let v=0;v<=g;v++){let S=0,x=0,M=0,b=0;if(v<=i){const w=v/i,R=w*Math.PI/2;x=-u-t*Math.cos(R),M=t*Math.sin(R),b=-t*Math.cos(R),S=w*d}else if(v<=i+r){const w=(v-i)/r;x=-u+w*e,M=t,b=0,S=d+w*h}else{const w=(v-i-r)/i,R=w*Math.PI/2;x=u+t*Math.sin(R),M=t*Math.cos(R),b=t*Math.sin(R),S=d+h+w*d}const A=Math.max(0,Math.min(1,S/f));let y=0;v===0?y=.5/s:v===g&&(y=-.5/s);for(let w=0;w<=s;w++){const R=w/s,L=R*Math.PI*2,N=Math.sin(L),z=Math.cos(L);p.x=-M*z,p.y=x,p.z=M*N,o.push(p.x,p.y,p.z),m.set(-M*z,b,M*N),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+y,A)}if(v>0){const w=(v-1)*_;for(let R=0;R<s;R++){const L=w+R,N=w+R+1,z=v*_+R,P=v*_+R+1;a.push(L,N,z),a.push(N,P,z)}}}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pr(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}}class ti extends Ae{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],l=new I,u=new at;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){const f=i+d/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,c.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("normal",new jt(o,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ti(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class mn extends Ae{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],h=[],f=[];let g=0;const _=[],m=i/2;let p=0;v(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(f,2));function v(){const x=new I,M=new I;let b=0;const A=(e-t)/i;for(let y=0;y<=r;y++){const w=[],R=y/r,L=R*(e-t)+t;for(let N=0;N<=s;N++){const z=N/s,P=z*c+o,D=Math.sin(P),X=Math.cos(P);M.x=L*D,M.y=-R*i+m,M.z=L*X,d.push(M.x,M.y,M.z),x.set(D,A,X).normalize(),h.push(x.x,x.y,x.z),f.push(z,1-R),w.push(g++)}_.push(w)}for(let y=0;y<s;y++)for(let w=0;w<r;w++){const R=_[w][y],L=_[w+1][y],N=_[w+1][y+1],z=_[w][y+1];(t>0||w!==0)&&(u.push(R,L,z),b+=3),(e>0||w!==r-1)&&(u.push(L,N,z),b+=3)}l.addGroup(p,b,0),p+=b}function S(x){const M=g,b=new at,A=new I;let y=0;const w=x===!0?t:e,R=x===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*R,0),h.push(0,R,0),f.push(.5,.5),g++;const L=g;for(let N=0;N<=s;N++){const P=N/s*c+o,D=Math.cos(P),X=Math.sin(P);A.x=w*X,A.y=m*R,A.z=w*D,d.push(A.x,A.y,A.z),h.push(0,R,0),b.x=D*.5+.5,b.y=X*.5*R+.5,f.push(b.x,b.y),g++}for(let N=0;N<s;N++){const z=M+N,P=L+N;x===!0?u.push(P,P+1,z):u.push(P+1,P,z),y+=3}l.addGroup(p,y,x===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mi extends mn{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new mi(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xa extends Ae{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};const r=[],a=[];o(s),l(i),u(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const S=new I,x=new I,M=new I;for(let b=0;b<e.length;b+=3)f(e[b+0],S),f(e[b+1],x),f(e[b+2],M),c(S,x,M,v)}function c(v,S,x,M){const b=M+1,A=[];for(let y=0;y<=b;y++){A[y]=[];const w=v.clone().lerp(x,y/b),R=S.clone().lerp(x,y/b),L=b-y;for(let N=0;N<=L;N++)N===0&&y===b?A[y][N]=w:A[y][N]=w.clone().lerp(R,N/L)}for(let y=0;y<b;y++)for(let w=0;w<2*(b-y)-1;w++){const R=Math.floor(w/2);w%2===0?(h(A[y][R+1]),h(A[y+1][R]),h(A[y][R])):(h(A[y][R+1]),h(A[y+1][R+1]),h(A[y+1][R]))}}function l(v){const S=new I;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(v),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function u(){const v=new I;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];const x=m(v)/2/Math.PI+.5,M=p(v)/Math.PI+.5;a.push(x,1-M)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){const S=a[v+0],x=a[v+2],M=a[v+4],b=Math.max(S,x,M),A=Math.min(S,x,M);b>.9&&A<.1&&(S<.2&&(a[v+0]+=1),x<.2&&(a[v+2]+=1),M<.2&&(a[v+4]+=1))}}function h(v){r.push(v.x,v.y,v.z)}function f(v,S){const x=v*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function g(){const v=new I,S=new I,x=new I,M=new I,b=new at,A=new at,y=new at;for(let w=0,R=0;w<r.length;w+=9,R+=6){v.set(r[w+0],r[w+1],r[w+2]),S.set(r[w+3],r[w+4],r[w+5]),x.set(r[w+6],r[w+7],r[w+8]),b.set(a[R+0],a[R+1]),A.set(a[R+2],a[R+3]),y.set(a[R+4],a[R+5]),M.copy(v).add(S).add(x).divideScalar(3);const L=m(M);_(b,R+0,v,L),_(A,R+2,S,L),_(y,R+4,x,L)}}function _(v,S,x,M){M<0&&v.x===1&&(a[S]=v.x-1),x.x===0&&x.z===0&&(a[S]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xa(t.vertices,t.indices,t.radius,t.detail)}}class cc extends Xa{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-i,0,-s,i,0,s,-i,0,s,i,-s,-i,0,-s,i,0,s,-i,0,s,i,0,-i,0,-s,i,0,-s,-i,0,s,i,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cc(t.radius,t.detail)}}class si{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const i=this.getLengths();let s=0;const r=i.length;let a;e?a=e:a=t*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);const u=i[s],h=i[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new at:new I);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){const i=new I,s=[],r=[],a=[],o=new I,c=new he;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=l&&(l=u,i.set(1,0,0)),d<=l&&(l=d,i.set(0,1,0)),h<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(re(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(re(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class hc extends si{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new at){const i=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=c-this.aX,f=l-this.aY;c=h*u-f*d+this.aX,l=h*d+f*u+this.aY}return i.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class pp extends hc{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function uc(){let n=0,t=0,e=0,i=0;function s(r,a,o,c){n=r,t=o,e=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,d){let h=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+d)+(c-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){const a=r*r,o=a*r;return n+t*r+e*a+i*o}}}const Mh=new I,Sh=new I,Ro=new uc,Co=new uc,Po=new uc;class Il extends si{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){const i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(Sh.subVectors(s[0],s[1]).add(s[0]),l=Sh);const d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Mh.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Mh),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ro.initNonuniformCatmullRom(l.x,d.x,h.x,u.x,g,_,m),Co.initNonuniformCatmullRom(l.y,d.y,h.y,u.y,g,_,m),Po.initNonuniformCatmullRom(l.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(l.x,d.x,h.x,u.x,this.tension),Co.initCatmullRom(l.y,d.y,h.y,u.y,this.tension),Po.initCatmullRom(l.z,d.z,h.z,u.z,this.tension));return i.set(Ro.calc(c),Co.calc(c),Po.calc(c)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function bh(n,t,e,i,s){const r=(i-t)*.5,a=(s-e)*.5,o=n*n,c=n*o;return(2*e-2*i+r+a)*c+(-3*e+3*i-2*r-a)*o+r*n+e}function mp(n,t){const e=1-n;return e*e*t}function gp(n,t){return 2*(1-n)*n*t}function xp(n,t){return n*n*t}function or(n,t,e,i){return mp(n,t)+gp(n,e)+xp(n,i)}function _p(n,t){const e=1-n;return e*e*e*t}function vp(n,t){const e=1-n;return 3*e*e*n*t}function yp(n,t){return 3*(1-n)*n*n*t}function Mp(n,t){return n*n*n*t}function lr(n,t,e,i,s){return _p(n,t)+vp(n,e)+yp(n,i)+Mp(n,s)}class tf extends si{constructor(t=new at,e=new at,i=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new at){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(lr(t,s.x,r.x,a.x,o.x),lr(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sp extends si{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){const i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(lr(t,s.x,r.x,a.x,o.x),lr(t,s.y,r.y,a.y,o.y),lr(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ef extends si{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class bp extends si{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nf extends si{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(or(t,s.x,r.x,a.x),or(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class sf extends si{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){const i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(or(t,s.x,r.x,a.x),or(t,s.y,r.y,a.y),or(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class rf extends si{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(bh(o,c.x,l.x,u.x,d.x),bh(o,c.y,l.y,u.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var Da=Object.freeze({__proto__:null,ArcCurve:pp,CatmullRomCurve3:Il,CubicBezierCurve:tf,CubicBezierCurve3:Sp,EllipseCurve:hc,LineCurve:ef,LineCurve3:bp,QuadraticBezierCurve:nf,QuadraticBezierCurve3:sf,SplineCurve:rf});class Ep extends si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Da[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=i){const a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const s=t.curves[e];this.curves.push(new Da[s.type]().fromJSON(s))}return this}}class Ll extends Ep{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const i=new ef(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){const r=new nf(this.currentPoint.clone(),new at(t,e),new at(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){const o=new tf(this.currentPoint.clone(),new at(t,e),new at(i,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),i=new rf(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+l,e+u,i,s,r,a,o,c),this}absellipse(t,e,i,s,r,a,o,c){const l=new hc(t,e,i,s,r,a,o,c);if(this.curves.length>0){const d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ds extends Ll{constructor(t){super(t),this.uuid=Ji(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){const s=t.holes[e];this.holes.push(new Ll().fromJSON(s))}return this}}function wp(n,t,e=2){const i=t&&t.length,s=i?t[0]*e:n.length;let r=af(n,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=Pp(n,t,r,e)),n.length>80*e){o=n[0],c=n[1];let u=o,d=c;for(let h=e;h<s;h+=e){const f=n[h],g=n[h+1];f<o&&(o=f),g<c&&(c=g),f>u&&(u=f),g>d&&(d=g)}l=Math.max(u-o,d-c),l=l!==0?32767/l:0}return mr(r,a,e,o,c,l,0),a}function af(n,t,e,i,s){let r;if(s===Hp(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=Eh(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=Eh(a/i|0,n[a],n[a+1],r);return r&&Cs(r,r.next)&&(xr(r),r=r.next),r}function Ki(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Cs(e,e.next)||De(e.prev,e,e.next)===0)){if(xr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function mr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Up(n,i,s,r);let o=n;for(;n.prev!==n.next;){const c=n.prev,l=n.next;if(r?Ap(n,i,s,r):Tp(n)){t.push(c.i,n.i,l.i),xr(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=Rp(Ki(n),t),mr(n,t,e,i,s,r,2)):a===2&&Cp(n,t,e,i,s,r):mr(Ki(n),t,e,i,s,r,1);break}}}function Tp(n){const t=n.prev,e=n,i=n.next;if(De(t,e,i)>=0)return!1;const s=t.x,r=e.x,a=i.x,o=t.y,c=e.y,l=i.y,u=Math.min(s,r,a),d=Math.min(o,c,l),h=Math.max(s,r,a),f=Math.max(o,c,l);let g=i.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&tr(s,o,r,c,a,l,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Ap(n,t,e,i){const s=n.prev,r=n,a=n.next;if(De(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,c,l),g=Math.min(u,d,h),_=Math.max(o,c,l),m=Math.max(u,d,h),p=Dl(f,g,t,e,i),v=Dl(_,m,t,e,i);let S=n.prevZ,x=n.nextZ;for(;S&&S.z>=p&&x&&x.z<=v;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&tr(o,u,c,d,l,h,S.x,S.y)&&De(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&tr(o,u,c,d,l,h,x.x,x.y)&&De(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&tr(o,u,c,d,l,h,S.x,S.y)&&De(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=v;){if(x.x>=f&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&tr(o,u,c,d,l,h,x.x,x.y)&&De(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Rp(n,t){let e=n;do{const i=e.prev,s=e.next.next;!Cs(i,s)&&lf(i,e,e.next,s)&&gr(i,s)&&gr(s,i)&&(t.push(i.i,e.i,s.i),xr(e),xr(e.next),e=n=s),e=e.next}while(e!==n);return Ki(e)}function Cp(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&zp(a,o)){let c=cf(a,o);a=Ki(a,a.next),c=Ki(c,c.next),mr(a,t,e,i,s,r,0),mr(c,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Pp(n,t,e,i){const s=[];for(let r=0,a=t.length;r<a;r++){const o=t[r]*i,c=r<a-1?t[r+1]*i:n.length,l=af(n,o,c,i,!1);l===l.next&&(l.steiner=!0),s.push(Fp(l))}s.sort(Ip);for(let r=0;r<s.length;r++)e=Lp(s[r],e);return e}function Ip(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Lp(n,t){const e=Dp(n,t);if(!e)return t;const i=cf(e,n);return Ki(i,i.next),Ki(e,e.next)}function Dp(n,t){let e=t;const i=n.x,s=n.y;let r=-1/0,a;if(Cs(n,e))return e;do{if(Cs(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){const d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;e=a;do{if(i>=e.x&&e.x>=c&&i!==e.x&&of(s<l?i:r,s,c,l,s<l?r:i,s,e.x,e.y)){const d=Math.abs(s-e.y)/(i-e.x);gr(e,n)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&Np(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function Np(n,t){return De(n.prev,n,t.prev)<0&&De(t.next,n,n.next)<0}function Up(n,t,e,i){let s=n;do s.z===0&&(s.z=Dl(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Op(s)}function Op(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Dl(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Fp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function of(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function tr(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&of(n,t,e,i,s,r,a,o)}function zp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Bp(n,t)&&(gr(n,t)&&gr(t,n)&&kp(n,t)&&(De(n.prev,n,t.prev)||De(n,t.prev,t))||Cs(n,t)&&De(n.prev,n,n.next)>0&&De(t.prev,t,t.next)>0)}function De(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Cs(n,t){return n.x===t.x&&n.y===t.y}function lf(n,t,e,i){const s=ia(De(n,t,e)),r=ia(De(n,t,i)),a=ia(De(e,i,n)),o=ia(De(e,i,t));return!!(s!==r&&a!==o||s===0&&na(n,e,t)||r===0&&na(n,i,t)||a===0&&na(e,n,i)||o===0&&na(e,t,i))}function na(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ia(n){return n>0?1:n<0?-1:0}function Bp(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&lf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function gr(n,t){return De(n.prev,n,n.next)<0?De(n,t,n.next)>=0&&De(n,n.prev,t)>=0:De(n,t,n.prev)<0||De(n,n.next,t)<0}function kp(n,t){let e=n,i=!1;const s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function cf(n,t){const e=Nl(n.i,n.x,n.y),i=Nl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Eh(n,t,e,i){const s=Nl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function xr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Nl(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hp(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}class Gp{static triangulate(t,e,i=2){return wp(t,e,i)}}class di{static area(t){const e=t.length;let i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return di.area(t)<0}static triangulateShape(t,e){const i=[],s=[],r=[];wh(t),Th(i,t);let a=t.length;e.forEach(wh);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Th(i,e[c]);const o=Gp.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function wh(n){const t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Th(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}class Er extends Ae{constructor(t=new Ds([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const i=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const l=t[o];a(l)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function a(o){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Vp;let S,x=!1,M,b,A,y;if(p){S=p.getSpacedPoints(u),x=!0,h=!1;const rt=p.isCatmullRomCurve3?p.closed:!1;M=p.computeFrenetFrames(u,rt),b=new I,A=new I,y=new I}h||(m=0,f=0,g=0,_=0);const w=o.extractPoints(l);let R=w.shape;const L=w.holes;if(!di.isClockWise(R)){R=R.reverse();for(let rt=0,ut=L.length;rt<ut;rt++){const dt=L[rt];di.isClockWise(dt)&&(L[rt]=dt.reverse())}}function z(rt){const dt=10000000000000001e-36;let pt=rt[0];for(let _t=1;_t<=rt.length;_t++){const $t=_t%rt.length,qt=rt[$t],Qt=qt.x-pt.x,ne=qt.y-pt.y,U=Qt*Qt+ne*ne,_e=Math.max(Math.abs(qt.x),Math.abs(qt.y),Math.abs(pt.x),Math.abs(pt.y)),ue=dt*_e*_e;if(U<=ue){rt.splice($t,1),_t--;continue}pt=qt}}z(R),L.forEach(z);const P=L.length,D=R;for(let rt=0;rt<P;rt++){const ut=L[rt];R=R.concat(ut)}function X(rt,ut,dt){return ut||ge("ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(ut,dt)}const H=R.length;function et(rt,ut,dt){let pt,_t,$t;const qt=rt.x-ut.x,Qt=rt.y-ut.y,ne=dt.x-rt.x,U=dt.y-rt.y,_e=qt*qt+Qt*Qt,ue=qt*U-Qt*ne;if(Math.abs(ue)>Number.EPSILON){const C=Math.sqrt(_e),E=Math.sqrt(ne*ne+U*U),G=ut.x-Qt/C,Y=ut.y+qt/C,J=dt.x-U/E,mt=dt.y+ne/E,xt=((J-G)*U-(mt-Y)*ne)/(qt*U-Qt*ne);pt=G+qt*xt-rt.x,_t=Y+Qt*xt-rt.y;const Q=pt*pt+_t*_t;if(Q<=2)return new at(pt,_t);$t=Math.sqrt(Q/2)}else{let C=!1;qt>Number.EPSILON?ne>Number.EPSILON&&(C=!0):qt<-Number.EPSILON?ne<-Number.EPSILON&&(C=!0):Math.sign(Qt)===Math.sign(U)&&(C=!0),C?(pt=-Qt,_t=qt,$t=Math.sqrt(_e)):(pt=qt,_t=Qt,$t=Math.sqrt(_e/2))}return new at(pt/$t,_t/$t)}const K=[];for(let rt=0,ut=D.length,dt=ut-1,pt=rt+1;rt<ut;rt++,dt++,pt++)dt===ut&&(dt=0),pt===ut&&(pt=0),K[rt]=et(D[rt],D[dt],D[pt]);const tt=[];let j,Nt=K.concat();for(let rt=0,ut=P;rt<ut;rt++){const dt=L[rt];j=[];for(let pt=0,_t=dt.length,$t=_t-1,qt=pt+1;pt<_t;pt++,$t++,qt++)$t===_t&&($t=0),qt===_t&&(qt=0),j[pt]=et(dt[pt],dt[$t],dt[qt]);tt.push(j),Nt=Nt.concat(j)}let ot;if(m===0)ot=di.triangulateShape(D,L);else{const rt=[],ut=[];for(let dt=0;dt<m;dt++){const pt=dt/m,_t=f*Math.cos(pt*Math.PI/2),$t=g*Math.sin(pt*Math.PI/2)+_;for(let qt=0,Qt=D.length;qt<Qt;qt++){const ne=X(D[qt],K[qt],$t);ht(ne.x,ne.y,-_t),pt===0&&rt.push(ne)}for(let qt=0,Qt=P;qt<Qt;qt++){const ne=L[qt];j=tt[qt];const U=[];for(let _e=0,ue=ne.length;_e<ue;_e++){const C=X(ne[_e],j[_e],$t);ht(C.x,C.y,-_t),pt===0&&U.push(C)}pt===0&&ut.push(U)}}ot=di.triangulateShape(rt,ut)}const k=ot.length,nt=g+_;for(let rt=0;rt<H;rt++){const ut=h?X(R[rt],Nt[rt],nt):R[rt];x?(A.copy(M.normals[0]).multiplyScalar(ut.x),b.copy(M.binormals[0]).multiplyScalar(ut.y),y.copy(S[0]).add(A).add(b),ht(y.x,y.y,y.z)):ht(ut.x,ut.y,0)}for(let rt=1;rt<=u;rt++)for(let ut=0;ut<H;ut++){const dt=h?X(R[ut],Nt[ut],nt):R[ut];x?(A.copy(M.normals[rt]).multiplyScalar(dt.x),b.copy(M.binormals[rt]).multiplyScalar(dt.y),y.copy(S[rt]).add(A).add(b),ht(y.x,y.y,y.z)):ht(dt.x,dt.y,d/u*rt)}for(let rt=m-1;rt>=0;rt--){const ut=rt/m,dt=f*Math.cos(ut*Math.PI/2),pt=g*Math.sin(ut*Math.PI/2)+_;for(let _t=0,$t=D.length;_t<$t;_t++){const qt=X(D[_t],K[_t],pt);ht(qt.x,qt.y,d+dt)}for(let _t=0,$t=L.length;_t<$t;_t++){const qt=L[_t];j=tt[_t];for(let Qt=0,ne=qt.length;Qt<ne;Qt++){const U=X(qt[Qt],j[Qt],pt);x?ht(U.x,U.y+S[u-1].y,S[u-1].x+dt):ht(U.x,U.y,d+dt)}}}ft(),B();function ft(){const rt=s.length/3;if(h){let ut=0,dt=H*ut;for(let pt=0;pt<k;pt++){const _t=ot[pt];Ut(_t[2]+dt,_t[1]+dt,_t[0]+dt)}ut=u+m*2,dt=H*ut;for(let pt=0;pt<k;pt++){const _t=ot[pt];Ut(_t[0]+dt,_t[1]+dt,_t[2]+dt)}}else{for(let ut=0;ut<k;ut++){const dt=ot[ut];Ut(dt[2],dt[1],dt[0])}for(let ut=0;ut<k;ut++){const dt=ot[ut];Ut(dt[0]+H*u,dt[1]+H*u,dt[2]+H*u)}}i.addGroup(rt,s.length/3-rt,0)}function B(){const rt=s.length/3;let ut=0;q(D,ut),ut+=D.length;for(let dt=0,pt=L.length;dt<pt;dt++){const _t=L[dt];q(_t,ut),ut+=_t.length}i.addGroup(rt,s.length/3-rt,1)}function q(rt,ut){let dt=rt.length;for(;--dt>=0;){const pt=dt;let _t=dt-1;_t<0&&(_t=rt.length-1);for(let $t=0,qt=u+m*2;$t<qt;$t++){const Qt=H*$t,ne=H*($t+1),U=ut+pt+Qt,_e=ut+_t+Qt,ue=ut+_t+ne,C=ut+pt+ne;gt(U,_e,ue,C)}}}function ht(rt,ut,dt){c.push(rt),c.push(ut),c.push(dt)}function Ut(rt,ut,dt){Ht(rt),Ht(ut),Ht(dt);const pt=s.length/3,_t=v.generateTopUV(i,s,pt-3,pt-2,pt-1);me(_t[0]),me(_t[1]),me(_t[2])}function gt(rt,ut,dt,pt){Ht(rt),Ht(ut),Ht(pt),Ht(ut),Ht(dt),Ht(pt);const _t=s.length/3,$t=v.generateSideWallUV(i,s,_t-6,_t-3,_t-2,_t-1);me($t[0]),me($t[1]),me($t[3]),me($t[1]),me($t[2]),me($t[3])}function Ht(rt){s.push(c[rt*3+0]),s.push(c[rt*3+1]),s.push(c[rt*3+2])}function me(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Wp(e,i,t)}static fromJSON(t,e){const i=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];i.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Da[s.type]().fromJSON(s)),new Er(i,t.options)}}const Vp={generateTopUV:function(n,t,e,i,s){const r=t[e*3],a=t[e*3+1],o=t[i*3],c=t[i*3+1],l=t[s*3],u=t[s*3+1];return[new at(r,a),new at(o,c),new at(l,u)]},generateSideWallUV:function(n,t,e,i,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],l=t[i*3],u=t[i*3+1],d=t[i*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-l)?[new at(a,1-c),new at(l,1-d),new at(h,1-g),new at(_,1-p)]:[new at(o,1-c),new at(u,1-d),new at(f,1-g),new at(m,1-p)]}};function Wp(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){const r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ws extends Xa{constructor(t=1,e=0){const i=(1+Math.sqrt(5))/2,s=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ws(t.radius,t.detail)}}class ee extends Ae{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(i),c=Math.floor(s),l=o+1,u=c+1,d=t/o,h=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*h-a;for(let S=0;S<l;S++){const x=S*d-r;g.push(x,-v,0),_.push(0,0,1),m.push(S/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){const S=v+l*p,x=v+l*(p+1),M=v+1+l*(p+1),b=v+1+l*p;f.push(S,x,b),f.push(x,M,b)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ya extends Ae{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let d=t;const h=(e-t)/s,f=new I,g=new at;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,u.push(g.x,g.y)}d+=h}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const v=p+m,S=v,x=v+i+1,M=v+i+2,b=v+1;o.push(S,x,b),o.push(x,M,b)}}this.setIndex(o),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ya(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class fc extends Ae{constructor(t=new Ds([new at(0,.5),new at(-.5,-.5),new at(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const i=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(t)===!1)l(t);else for(let u=0;u<t.length;u++)l(t[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(i),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(r,3)),this.setAttribute("uv",new jt(a,2));function l(u){const d=s.length/3,h=u.extractPoints(e);let f=h.shape;const g=h.holes;di.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){const v=g[m];di.isClockWise(v)===!0&&(g[m]=v.reverse())}const _=di.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){const v=g[m];f=f.concat(v)}for(let m=0,p=f.length;m<p;m++){const v=f[m];s.push(v.x,v.y,0),r.push(0,0,1),a.push(v.x,v.y)}for(let m=0,p=_.length;m<p;m++){const v=_[m],S=v[0]+d,x=v[1]+d,M=v[2]+d;i.push(S,x,M),c+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Xp(e,t)}static fromJSON(t,e){const i=[];for(let s=0,r=t.shapes.length;s<r;s++){const a=e[t.shapes[s]];i.push(a)}return new fc(i,t.curveSegments)}}function Xp(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){const s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}class Xe extends Ae{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new I,h=new I,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const v=[],S=p/i,x=a+S*o,M=t*Math.cos(x),b=Math.sqrt(t*t-M*M);let A=0;p===0&&a===0?A=.5/e:p===i&&c===Math.PI&&(A=-.5/e);for(let y=0;y<=e;y++){const w=y/e,R=s+w*r;d.x=-b*Math.cos(R),d.y=M,d.z=b*Math.sin(R),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(w+A,1-S),v.push(l++)}u.push(v)}for(let p=0;p<i;p++)for(let v=0;v<e;v++){const S=u[p][v+1],x=u[p][v],M=u[p+1][v],b=u[p+1][v+1];(p!==0||a>0)&&f.push(S,x,b),(p!==i-1||c<Math.PI)&&f.push(x,M,b)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Zi extends Ae{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);const c=[],l=[],u=[],d=[],h=new I,f=new I,g=new I;for(let _=0;_<=i;_++){const m=a+_/i*o;for(let p=0;p<=s;p++){const v=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(v),f.y=(t+e*Math.cos(m))*Math.sin(v),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){const p=(s+1)*_+m-1,v=(s+1)*(_-1)+m-1,S=(s+1)*(_-1)+m,x=(s+1)*_+m;c.push(p,v,x),c.push(v,S,x)}this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}class dc extends Ae{constructor(t=1,e=.4,i=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:i,radialSegments:s,p:r,q:a},i=Math.floor(i),s=Math.floor(s);const o=[],c=[],l=[],u=[],d=new I,h=new I,f=new I,g=new I,_=new I,m=new I,p=new I;for(let S=0;S<=i;++S){const x=S/i*r*Math.PI*2;v(x,r,a,t,f),v(x+.01,r,a,t,g),m.subVectors(g,f),p.addVectors(g,f),_.crossVectors(m,p),p.crossVectors(_,m),_.normalize(),p.normalize();for(let M=0;M<=s;++M){const b=M/s*Math.PI*2,A=-e*Math.cos(b),y=e*Math.sin(b);d.x=f.x+(A*p.x+y*_.x),d.y=f.y+(A*p.y+y*_.y),d.z=f.z+(A*p.z+y*_.z),c.push(d.x,d.y,d.z),h.subVectors(d,f).normalize(),l.push(h.x,h.y,h.z),u.push(S/i),u.push(M/s)}}for(let S=1;S<=i;S++)for(let x=1;x<=s;x++){const M=(s+1)*(S-1)+(x-1),b=(s+1)*S+(x-1),A=(s+1)*S+x,y=(s+1)*(S-1)+x;o.push(M,b,y),o.push(b,A,y)}this.setIndex(o),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(u,2));function v(S,x,M,b,A){const y=Math.cos(S),w=Math.sin(S),R=M/x*S,L=Math.cos(R);A.x=b*(2+L)*.5*y,A.y=b*(2+L)*w*.5,A.z=b*Math.sin(R)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dc(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class Na extends Ae{constructor(t=new sf(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,c=new I,l=new at;let u=new I;const d=[],h=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(f,2));function _(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),v(),p()}function m(S){u=t.getPointAt(S/e,u);const x=a.normals[S],M=a.binormals[S];for(let b=0;b<=s;b++){const A=b/s*Math.PI*2,y=Math.sin(A),w=-Math.cos(A);c.x=w*x.x+y*M.x,c.y=w*x.y+y*M.y,c.z=w*x.z+y*M.z,c.normalize(),h.push(c.x,c.y,c.z),o.x=u.x+i*c.x,o.y=u.y+i*c.y,o.z=u.z+i*c.z,d.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=e;S++)for(let x=1;x<=s;x++){const M=(s+1)*(S-1)+(x-1),b=(s+1)*S+(x-1),A=(s+1)*S+x,y=(s+1)*(S-1)+x;g.push(M,b,y),g.push(b,A,y)}}function v(){for(let S=0;S<=e;S++)for(let x=0;x<=s;x++)l.x=S/e,l.y=x/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Na(new Da[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}function Ps(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];if(Ah(s))s.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Ah(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function cn(n){const t={};for(let e=0;e<n.length;e++){const i=Ps(n[e]);for(const s in i)t[s]=i[s]}return t}function Ah(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Yp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function hf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const _r={clone:Ps,merge:cn};var qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$p=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ke extends ts{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=$p,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ps(t.uniforms),this.uniformsGroups=Yp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(const i in t.uniforms){const s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Pt().setHex(s.value);break;case"v2":this.uniforms[i].value=new at().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[i].value=new ie().fromArray(s.value);break;case"m4":this.uniforms[i].value=new he().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class uf extends Ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lt extends ts{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ci extends lt{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return re(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Kp extends ts{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zp extends ts{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class qa extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}}class Jp extends qa{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){const e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}}const Io=new he,Rh=new I,Ch=new I;class pc{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lc,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera;Rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rh),Ch.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ch),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Io.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Io,t.coordinateSystem,t.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===fr||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const sa=new I,ra=new Pn,Xn=new I;class ff extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(sa,ra,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,Xn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(sa,ra,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sa,ra,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ti=new I,Ph=new at,Ih=new at;class pn extends ff{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(rr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(rr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z),Ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ti.x,Ti.y).multiplyScalar(-t/Ti.z)}getViewSize(t,e){return this.getViewBounds(t,Ph,Ih),e.subVectors(Ih,Ph)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(rr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}class Qp extends pc{constructor(){super(new pn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){const e=this.camera,i=Rs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(i!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=i,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){const t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}}class df extends qa{constructor(t,e,i=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Qp}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}}class jp extends pc{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}}class t0 extends qa{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new jp}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}}class $a extends ff{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class e0 extends pc{constructor(){super(new $a(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Lh extends qa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new e0}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}}const ps=-90,ms=1;class n0 extends Ne{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pn(ps,ms,t,e);s.layers=this.layers,this.add(s);const r=new pn(ps,ms,t,e);r.layers=this.layers,this.add(r);const a=new pn(ps,ms,t,e);a.layers=this.layers,this.add(a);const o=new pn(ps,ms,t,e);o.layers=this.layers,this.add(o);const c=new pn(ps,ms,t,e);c.layers=this.layers,this.add(c);const l=new pn(ps,ms,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,c]=e;for(const l of e)this.remove(l);if(t===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===fr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class i0 extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class s0{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=r0.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function r0(){this._document.hidden===!1&&this.reset()}const Dh=new he;class a0{constructor(t,e,i=0,s=1/0){this.ray=new br(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new oc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ge("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Dh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Dh),this}intersectObject(t,e=!0,i=[]){return Ul(t,this,i,e),i.sort(Nh),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Ul(t[s],this,i,e);return i.sort(Nh),i}}function Nh(n,t){return n.distance-t.distance}function Ul(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){const r=n.children;for(let a=0,o=r.length;a<o;a++)Ul(r[a],t,e,!0)}}class Uh{constructor(t=1,e=0,i=0){this.radius=t,this.phi=e,this.theta=i}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=re(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(re(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Oc=class Oc{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){const r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Oc.prototype.isMatrix2=!0;let Oh=Oc;class o0 extends Di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Fh(n,t,e,i){const s=l0(i);switch(e){case Hu:return n*t;case jl:return n*t/s.components*s.byteLength;case tc:return n*t/s.components*s.byteLength;case $i:return n*t*2/s.components*s.byteLength;case ec:return n*t*2/s.components*s.byteLength;case Gu:return n*t*3/s.components*s.byteLength;case Hn:return n*t*4/s.components*s.byteLength;case nc:return n*t*4/s.components*s.byteLength;case xa:case _a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case va:case ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jo:case el:return Math.max(n,16)*Math.max(t,8)/4;case Qo:case tl:return Math.max(n,8)*Math.max(t,8)/2;case nl:case il:case rl:case al:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case sl:case Ta:case ol:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case cl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case hl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ul:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case fl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case dl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case pl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case ml:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case gl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case xl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case _l:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case vl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case yl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Ml:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Sl:case bl:case El:return Math.ceil(n/4)*Math.ceil(t/4)*16;case wl:case Tl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Aa:case Al:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function l0(n){switch(n){case Sn:case Fu:return{byteLength:1,components:1};case hr:case zu:case gn:return{byteLength:2,components:1};case Jl:case Ql:return{byteLength:2,components:4};case ni:case Zl:case kn:return{byteLength:4,components:1};case Bu:case ku:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vl}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function pf(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function c0(n){const t=new WeakMap;function e(o,c){const l=o.array,u=o.usage,d=l.byteLength,h=n.createBuffer();n.bindBuffer(c,h),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(n.bindBuffer(l,o),d.length===0)n.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(n.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var h0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,u0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,f0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,p0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,m0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,g0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,x0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,v0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,y0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,M0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,b0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,E0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,A0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,R0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,I0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,L0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,D0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,N0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,U0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,O0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,F0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,z0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,B0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,k0="gl_FragColor = linearToOutputTexel( gl_FragColor );",H0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,G0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,V0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,W0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,X0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,q0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,J0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Q0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,j0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tm=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,em=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,am=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,om=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lm=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hm=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,um=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fm=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_m=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ym=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Am=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Nm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,km=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ym=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,qm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$m=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Km=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Qm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ng=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ig=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rg=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ug=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_g=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,vg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ag=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cg=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ig=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Lg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dg=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ng=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ug=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Og=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Bg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kg=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,oe={alphahash_fragment:h0,alphahash_pars_fragment:u0,alphamap_fragment:f0,alphamap_pars_fragment:d0,alphatest_fragment:p0,alphatest_pars_fragment:m0,aomap_fragment:g0,aomap_pars_fragment:x0,batching_pars_vertex:_0,batching_vertex:v0,begin_vertex:y0,beginnormal_vertex:M0,bsdfs:S0,iridescence_fragment:b0,bumpmap_pars_fragment:E0,clipping_planes_fragment:w0,clipping_planes_pars_fragment:T0,clipping_planes_pars_vertex:A0,clipping_planes_vertex:R0,color_fragment:C0,color_pars_fragment:P0,color_pars_vertex:I0,color_vertex:L0,common:D0,cube_uv_reflection_fragment:N0,defaultnormal_vertex:U0,displacementmap_pars_vertex:O0,displacementmap_vertex:F0,emissivemap_fragment:z0,emissivemap_pars_fragment:B0,colorspace_fragment:k0,colorspace_pars_fragment:H0,envmap_fragment:G0,envmap_common_pars_fragment:V0,envmap_pars_fragment:W0,envmap_pars_vertex:X0,envmap_physical_pars_fragment:nm,envmap_vertex:Y0,fog_vertex:q0,fog_pars_vertex:$0,fog_fragment:K0,fog_pars_fragment:Z0,gradientmap_pars_fragment:J0,lightmap_pars_fragment:Q0,lights_lambert_fragment:j0,lights_lambert_pars_fragment:tm,lights_pars_begin:em,lights_toon_fragment:im,lights_toon_pars_fragment:sm,lights_phong_fragment:rm,lights_phong_pars_fragment:am,lights_physical_fragment:om,lights_physical_pars_fragment:lm,lights_fragment_begin:cm,lights_fragment_maps:hm,lights_fragment_end:um,lightprobes_pars_fragment:fm,logdepthbuf_fragment:dm,logdepthbuf_pars_fragment:pm,logdepthbuf_pars_vertex:mm,logdepthbuf_vertex:gm,map_fragment:xm,map_pars_fragment:_m,map_particle_fragment:vm,map_particle_pars_fragment:ym,metalnessmap_fragment:Mm,metalnessmap_pars_fragment:Sm,morphinstance_vertex:bm,morphcolor_vertex:Em,morphnormal_vertex:wm,morphtarget_pars_vertex:Tm,morphtarget_vertex:Am,normal_fragment_begin:Rm,normal_fragment_maps:Cm,normal_pars_fragment:Pm,normal_pars_vertex:Im,normal_vertex:Lm,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Nm,clearcoat_normal_fragment_maps:Um,clearcoat_pars_fragment:Om,iridescence_pars_fragment:Fm,opaque_fragment:zm,packing:Bm,premultiplied_alpha_fragment:km,project_vertex:Hm,dithering_fragment:Gm,dithering_pars_fragment:Vm,roughnessmap_fragment:Wm,roughnessmap_pars_fragment:Xm,shadowmap_pars_fragment:Ym,shadowmap_pars_vertex:qm,shadowmap_vertex:$m,shadowmask_pars_fragment:Km,skinbase_vertex:Zm,skinning_pars_vertex:Jm,skinning_vertex:Qm,skinnormal_vertex:jm,specularmap_fragment:tg,specularmap_pars_fragment:eg,tonemapping_fragment:ng,tonemapping_pars_fragment:ig,transmission_fragment:sg,transmission_pars_fragment:rg,uv_pars_fragment:ag,uv_pars_vertex:og,uv_vertex:lg,worldpos_vertex:cg,background_vert:hg,background_frag:ug,backgroundCube_vert:fg,backgroundCube_frag:dg,cube_vert:pg,cube_frag:mg,depth_vert:gg,depth_frag:xg,distance_vert:_g,distance_frag:vg,equirect_vert:yg,equirect_frag:Mg,linedashed_vert:Sg,linedashed_frag:bg,meshbasic_vert:Eg,meshbasic_frag:wg,meshlambert_vert:Tg,meshlambert_frag:Ag,meshmatcap_vert:Rg,meshmatcap_frag:Cg,meshnormal_vert:Pg,meshnormal_frag:Ig,meshphong_vert:Lg,meshphong_frag:Dg,meshphysical_vert:Ng,meshphysical_frag:Ug,meshtoon_vert:Og,meshtoon_frag:Fg,points_vert:zg,points_frag:Bg,shadow_vert:kg,shadow_frag:Hg,sprite_vert:Gg,sprite_frag:Vg},Et={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},$n={basic:{uniforms:cn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:cn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:cn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:cn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:cn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new Pt(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:cn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:cn([Et.points,Et.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:cn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:cn([Et.common,Et.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:cn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:cn([Et.sprite,Et.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:cn([Et.common,Et.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:cn([Et.lights,Et.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};$n.physical={uniforms:cn([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};const aa={r:0,b:0,g:0},Wg=new he,mf=new ie;mf.set(-1,0,0,0,1,0,0,0,1);function Xg(n,t,e,i,s,r){const a=new Pt(0);let o=s===!0?0:1,c,l,u=null,d=0,h=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const x=v.backgroundBlurriness>0;S=t.get(S,x)}return S}function g(v){let S=!1;const x=f(v);x===null?m(a,o):x&&x.isColor&&(m(x,1),S=!0);const M=n.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(v,S){const x=f(S);x&&(x.isCubeTexture||x.mapping===Va)?(l===void 0&&(l=new Zt(new Dn(1,1,1),new Ke({name:"BackgroundCubeMaterial",uniforms:Ps($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Wg.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(mf),l.material.toneMapped=pe.getTransfer(x.colorSpace)!==Me,(u!==x||d!==x.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Zt(new ee(2,2),new Ke({name:"BackgroundMaterial",uniforms:Ps($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=pe.getTransfer(x.colorSpace)!==Me,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,S){v.getRGB(aa,hf(n)),e.buffers.color.setClear(aa.r,aa.g,aa.b,S,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:_,dispose:p}}function Yg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null);let r=s,a=!1;function o(L,N,z,P,D){let X=!1;const H=d(L,P,z,N);r!==H&&(r=H,l(r.object)),X=f(L,P,z,D),X&&g(L,P,z,D),D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,x(L,N,z,P),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function c(){return n.createVertexArray()}function l(L){return n.bindVertexArray(L)}function u(L){return n.deleteVertexArray(L)}function d(L,N,z,P){const D=P.wireframe===!0;let X=i[N.id];X===void 0&&(X={},i[N.id]=X);const H=L.isInstancedMesh===!0?L.id:0;let et=X[H];et===void 0&&(et={},X[H]=et);let K=et[z.id];K===void 0&&(K={},et[z.id]=K);let tt=K[D];return tt===void 0&&(tt=h(c()),K[D]=tt),tt}function h(L){const N=[],z=[],P=[];for(let D=0;D<e;D++)N[D]=0,z[D]=0,P[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:P,object:L,attributes:{},index:null}}function f(L,N,z,P){const D=r.attributes,X=N.attributes;let H=0;const et=z.getAttributes();for(const K in et)if(et[K].location>=0){const j=D[K];let Nt=X[K];if(Nt===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(Nt=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(Nt=L.instanceColor)),j===void 0||j.attribute!==Nt||Nt&&j.data!==Nt.data)return!0;H++}return r.attributesNum!==H||r.index!==P}function g(L,N,z,P){const D={},X=N.attributes;let H=0;const et=z.getAttributes();for(const K in et)if(et[K].location>=0){let j=X[K];j===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));const Nt={};Nt.attribute=j,j&&j.data&&(Nt.data=j.data),D[K]=Nt,H++}r.attributes=D,r.attributesNum=H,r.index=P}function _(){const L=r.newAttributes;for(let N=0,z=L.length;N<z;N++)L[N]=0}function m(L){p(L,0)}function p(L,N){const z=r.newAttributes,P=r.enabledAttributes,D=r.attributeDivisors;z[L]=1,P[L]===0&&(n.enableVertexAttribArray(L),P[L]=1),D[L]!==N&&(n.vertexAttribDivisor(L,N),D[L]=N)}function v(){const L=r.newAttributes,N=r.enabledAttributes;for(let z=0,P=N.length;z<P;z++)N[z]!==L[z]&&(n.disableVertexAttribArray(z),N[z]=0)}function S(L,N,z,P,D,X,H){H===!0?n.vertexAttribIPointer(L,N,z,D,X):n.vertexAttribPointer(L,N,z,P,D,X)}function x(L,N,z,P){_();const D=P.attributes,X=z.getAttributes(),H=N.defaultAttributeValues;for(const et in X){const K=X[et];if(K.location>=0){let tt=D[et];if(tt===void 0&&(et==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),et==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor)),tt!==void 0){const j=tt.normalized,Nt=tt.itemSize,ot=t.get(tt);if(ot===void 0)continue;const k=ot.buffer,nt=ot.type,ft=ot.bytesPerElement,B=nt===n.INT||nt===n.UNSIGNED_INT||tt.gpuType===Zl;if(tt.isInterleavedBufferAttribute){const q=tt.data,ht=q.stride,Ut=tt.offset;if(q.isInstancedInterleavedBuffer){for(let gt=0;gt<K.locationSize;gt++)p(K.location+gt,q.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let gt=0;gt<K.locationSize;gt++)m(K.location+gt);n.bindBuffer(n.ARRAY_BUFFER,k);for(let gt=0;gt<K.locationSize;gt++)S(K.location+gt,Nt/K.locationSize,nt,j,ht*ft,(Ut+Nt/K.locationSize*gt)*ft,B)}else{if(tt.isInstancedBufferAttribute){for(let q=0;q<K.locationSize;q++)p(K.location+q,tt.meshPerAttribute);L.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let q=0;q<K.locationSize;q++)m(K.location+q);n.bindBuffer(n.ARRAY_BUFFER,k);for(let q=0;q<K.locationSize;q++)S(K.location+q,Nt/K.locationSize,nt,j,Nt*ft,Nt/K.locationSize*q*ft,B)}}else if(H!==void 0){const j=H[et];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(K.location,j);break;case 3:n.vertexAttrib3fv(K.location,j);break;case 4:n.vertexAttrib4fv(K.location,j);break;default:n.vertexAttrib1fv(K.location,j)}}}}v()}function M(){w();for(const L in i){const N=i[L];for(const z in N){const P=N[z];for(const D in P){const X=P[D];for(const H in X)u(X[H].object),delete X[H];delete P[D]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;const N=i[L.id];for(const z in N){const P=N[z];for(const D in P){const X=P[D];for(const H in X)u(X[H].object),delete X[H];delete P[D]}}delete i[L.id]}function A(L){for(const N in i){const z=i[N];for(const P in z){const D=z[P];if(D[L.id]===void 0)continue;const X=D[L.id];for(const H in X)u(X[H].object),delete X[H];delete D[L.id]}}}function y(L){for(const N in i){const z=i[N],P=L.isInstancedMesh===!0?L.id:0,D=z[P];if(D!==void 0){for(const X in D){const H=D[X];for(const et in H)u(H[et].object),delete H[et];delete D[X]}delete z[P],Object.keys(z).length===0&&delete i[N]}}}function w(){R(),a=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function qg(n,t,e){let i;function s(c){i=c}function r(c,l){n.drawArrays(i,c,l),e.update(l,i,1)}function a(c,l,u){u!==0&&(n.drawArraysInstanced(i,c,l,u),e.update(l,i,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $g(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==Hn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const y=A===gn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Sn&&A!==kn&&!y&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const u=c(l);u!==l&&(Jt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),v=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:x,maxSamples:M,samples:b}}function Kg(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new ui,o=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||s;return s=h,i=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):l();else{const v=r?0:i,S=v*4;let x=p.clippingState||null;c.value=x,x=u(g,h,S,f);for(let M=0;M!==S;++M)x[M]=e[M];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)a.copy(d[S]).applyMatrix4(v,o),a.normal.toArray(m,x),m[x+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const Ms=4,Zg=6,Jg=20,Qg=256,qs=new $a,zh=new Pt;let Lo=null,Do=0,No=0,Uo=!1;const jg=new I,ki=new I;class Ol{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){const{size:a=256,position:o=jg}=r;Lo=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lo,Do,No),this._renderer.xr.enabled=Uo,t.scissorTest=!1,gs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===qi||t.mapping===As?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lo=this._renderer.getRenderTarget(),Do=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Uo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:gn,format:Hn,colorSpace:Ra,depthBuffer:!1},s=Bh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bh(t,e,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tx(r)),this._blurMaterial=nx(r,t,e),this._ggxMaterial=ex(r,t,e)}return s}_compileMaterial(t){const e=new Zt(new Ae,t);this._renderer.compile(e,qs)}_sceneToCubeUV(t,e,i,s,r){const c=new pn(90,1,e,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(zh),d.toneMapping=Qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zt(new Dn,new te({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(zh),p=!0);for(let S=0;S<6;S++){const x=S%3;x===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[S],r.y,r.z)):x===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[S]));const M=this._cubeSize;gs(s,x*M,S>2?M:0,M,M),d.setRenderTarget(s),p&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=v}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===qi||t.mapping===As;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;gs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,qs)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,l=i/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-u*u),h=l*1.25,f=d*h,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-Ms?i-g+Ms:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,gs(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(o,qs),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,gs(t,m,p,3*_,2*_),s.setRenderTarget(t),s.render(o,qs)}_blur(t,e,i,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;const l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;const u=this._sizeLods[s],d=3*u*(s>this._lodMax-Ms?s-this._lodMax+Ms:0),h=4*(this._cubeSize-u);gs(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(c,qs)}}function tx(n){const t=[],e=[];let i=n;const s=n-Ms+1+Zg;for(let r=0;r<s;r++){const a=Math.pow(2,i);t.push(a);const o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let p=0;p<d;p++){const v=p%3*2/3-1,S=p>2?0:-1,x=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];g.set(x,f*h*p);for(let M=0;M<h;M++){const b=u[M*2]*2-1,A=u[M*2+1]*2-1;p===0?ki.set(1,A,b):p===1?ki.set(-b,1,-A):p===2?ki.set(-b,A,1):p===3?ki.set(-1,A,-b):p===4?ki.set(-b,-1,A):ki.set(b,A,-1),ki.toArray(_,(p*h+M)*f)}}const m=new Ae;m.setAttribute("position",new jn(g,f)),m.setAttribute("outputDirection",new jn(_,f)),e.push(new Zt(m,null)),i>Ms&&i--}return{lodMeshes:e,sizeLods:t}}function Bh(n,t,e){const i=new un(n,t,e);return i.texture.mapping=Va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function gs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ex(n,t,e){return new Ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Qg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ka(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function nx(n,t,e){return new Ke({name:"SphericalGaussianBlur",defines:{SAMPLES:Jg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ka(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function kh(){return new Ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Hh(){return new Ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ka(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Jn,depthTest:!1,depthWrite:!1})}function Ka(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class gf extends un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Qu(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Dn(5,5,5),r=new Ke({name:"CubemapFromEquirect",uniforms:Ps(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Jn});r.uniforms.tEquirect.value=e;const a=new Zt(s,r),o=e.minFilter;return e.minFilter===Wi&&(e.minFilter=en),new n0(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}function ix(n){let t=new WeakMap,e=new WeakMap,i=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){const f=h.mapping;if(f===ga||f===io)if(t.has(h)){const g=t.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new gf(g.height);return _.fromEquirectangularTexture(n,h),t.set(h,_),h.addEventListener("dispose",l),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const f=h.mapping,g=f===ga||f===io,_=f===qi||f===As;if(g||_){let m=e.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new Ol(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{const v=h.image;return g&&v&&v.height>0||_&&v&&c(v)?(i===null&&(i=new Ol(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===ga?h.mapping=qi:f===io&&(h.mapping=As),h}function c(h){let f=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function l(h){const f=h.target;f.removeEventListener("dispose",l);const g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){const f=h.target;f.removeEventListener("dispose",u);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function sx(n){const t={};function e(i){if(t[i]!==void 0)return t[i];const s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&bs("WebGLRenderer: "+i+" extension not supported."),s}}}function rx(n,t,e,i){const s={},r=new WeakMap;function a(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];const f=r.get(h);f&&(t.remove(f),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function c(d){const h=d.attributes;for(const f in h)t.update(h[f],n.ARRAY_BUFFER)}function l(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(f!==null){const v=f.array;_=f.version;for(let S=0,x=v.length;S<x;S+=3){const M=v[S+0],b=v[S+1],A=v[S+2];h.push(M,b,b,A,A,M)}}else{const v=g.array;_=g.version;for(let S=0,x=v.length/3-1;S<x;S+=3){const M=S+0,b=S+1,A=S+2;h.push(M,b,b,A,A,M)}}const m=new(g.count>=65535?$u:qu)(h,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){const h=r.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function ax(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,h){n.drawElements(i,h,r,d*a),e.update(h,i,1)}function l(d,h,f){f!==0&&(n.drawElementsInstanced(i,h,r,d*a,f),e.update(h,i,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];e.update(_,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ox(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function lx(n,t,e){const i=new WeakMap,s=new Le;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let R=function(){y.dispose(),i.delete(o),o.removeEventListener("dispose",R)};var f=R;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let x=0;g===!0&&(x=1),_===!0&&(x=2),m===!0&&(x=3);let M=o.attributes.position.count*x,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const A=new Float32Array(M*b*4*d),y=new Wu(A,M,b,d);y.type=kn,y.needsUpdate=!0;const w=x*4;for(let L=0;L<d;L++){const N=p[L],z=v[L],P=S[L],D=M*b*4*L;for(let X=0;X<N.count;X++){const H=X*w;g===!0&&(s.fromBufferAttribute(N,X),A[D+H+0]=s.x,A[D+H+1]=s.y,A[D+H+2]=s.z,A[D+H+3]=0),_===!0&&(s.fromBufferAttribute(z,X),A[D+H+4]=s.x,A[D+H+5]=s.y,A[D+H+6]=s.z,A[D+H+7]=0),m===!0&&(s.fromBufferAttribute(P,X),A[D+H+8]=s.x,A[D+H+9]=s.y,A[D+H+10]=s.z,A[D+H+11]=P.itemSize===4?s.w:1)}}h={count:d,texture:y,size:new at(M,b)},i.set(o,h),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",h.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function cx(n,t,e,i,s){let r=new WeakMap;function a(l){const u=s.render.frame,d=l.geometry,h=t.get(l,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}const hx={[Wl]:"LINEAR_TONE_MAPPING",[Xl]:"REINHARD_TONE_MAPPING",[Yl]:"CINEON_TONE_MAPPING",[Ga]:"ACES_FILMIC_TONE_MAPPING",[$l]:"AGX_TONE_MAPPING",[Kl]:"NEUTRAL_TONE_MAPPING",[ql]:"CUSTOM_TONE_MAPPING"};function ux(n,t,e,i,s,r){const a=new un(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Ae;l.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new jt([0,2,0,0,2,0],2));const u=new uf({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Zt(l,u),h=new $a(-1,1,1,-1,0,1);let f=null,g=null,_=!1,m,p=null,v=[],S=!1;this.setSize=function(x,M){a.setSize(x,M),o!==null&&o.setSize(x,M),c!==null&&c.setSize(x,M);for(let b=0;b<v.length;b++){const A=v[b];A.setSize&&A.setSize(x,M)}},this.setEffects=function(x){v=x,S=v.length>0&&v[0].isRenderPass===!0;const M=a.width,b=a.height;v.length>0&&o===null&&(o=new un(M,b,{type:gn,depthBuffer:!1,stencilBuffer:!1}),c=new un(M,b,{type:gn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){const y=v[A];y.setSize&&y.setSize(M,b)}},this.begin=function(x,M){if(_||x.toneMapping===Qn&&v.length===0)return!1;if(p=M,M!==null){const b=M.width,A=M.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return S===!1&&x.setRenderTarget(a),m=x.toneMapping,x.toneMapping=Qn,!0},this.hasRenderPass=function(){return S},this.end=function(x,M){x.toneMapping=m,_=!0;let b=a,A=o;for(let y=0;y<v.length;y++){const w=v[y];w.enabled!==!1&&(w.render(x,A,b,M),w.needsSwap!==!1&&(b=A,A=A===o?c:o))}if(f!==x.outputColorSpace||g!==x.toneMapping){f=x.outputColorSpace,g=x.toneMapping,u.defines={},pe.getTransfer(f)===Me&&(u.defines.SRGB_TRANSFER="");const y=hx[g];y&&(u.defines[y]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=b.texture,x.setRenderTarget(p),x.render(d,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}const xf=new nn,Fl=new dr(1,1),_f=new Wu,vf=new $d,yf=new Qu,Gh=[],Vh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),Yh=new Float32Array(4);function Ns(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Gh[s];if(r===void 0&&(r=new Float32Array(s),Gh[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function Ye(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function qe(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Za(n,t){let e=Vh[t];e===void 0&&(e=new Int32Array(t),Vh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function fx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function dx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2fv(this.addr,t),qe(e,t)}}function px(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;n.uniform3fv(this.addr,t),qe(e,t)}}function mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4fv(this.addr,t),qe(e,t)}}function gx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;Yh.set(i),n.uniformMatrix2fv(this.addr,!1,Yh),qe(e,i)}}function xx(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;Xh.set(i),n.uniformMatrix3fv(this.addr,!1,Xh),qe(e,i)}}function _x(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Ye(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,i))return;Wh.set(i),n.uniformMatrix4fv(this.addr,!1,Wh),qe(e,i)}}function vx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function yx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2iv(this.addr,t),qe(e,t)}}function Mx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3iv(this.addr,t),qe(e,t)}}function Sx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4iv(this.addr,t),qe(e,t)}}function bx(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ex(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;n.uniform2uiv(this.addr,t),qe(e,t)}}function wx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;n.uniform3uiv(this.addr,t),qe(e,t)}}function Tx(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;n.uniform4uiv(this.addr,t),qe(e,t)}}function Ax(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fl.compareFunction=e.isReversedDepthBuffer()?sc:ic,r=Fl):r=xf,e.setTexture2D(t||r,s)}function Rx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||vf,s)}function Cx(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||yf,s)}function Px(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||_f,s)}function Ix(n){switch(n){case 5126:return fx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return xx;case 35676:return _x;case 5124:case 35670:return vx;case 35667:case 35671:return yx;case 35668:case 35672:return Mx;case 35669:case 35673:return Sx;case 5125:return bx;case 36294:return Ex;case 36295:return wx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Rx;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Px}}function Lx(n,t){n.uniform1fv(this.addr,t)}function Dx(n,t){const e=Ns(t,this.size,2);n.uniform2fv(this.addr,e)}function Nx(n,t){const e=Ns(t,this.size,3);n.uniform3fv(this.addr,e)}function Ux(n,t){const e=Ns(t,this.size,4);n.uniform4fv(this.addr,e)}function Ox(n,t){const e=Ns(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Fx(n,t){const e=Ns(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function zx(n,t){const e=Ns(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Bx(n,t){n.uniform1iv(this.addr,t)}function kx(n,t){n.uniform2iv(this.addr,t)}function Hx(n,t){n.uniform3iv(this.addr,t)}function Gx(n,t){n.uniform4iv(this.addr,t)}function Vx(n,t){n.uniform1uiv(this.addr,t)}function Wx(n,t){n.uniform2uiv(this.addr,t)}function Xx(n,t){n.uniform3uiv(this.addr,t)}function Yx(n,t){n.uniform4uiv(this.addr,t)}function qx(n,t,e){const i=this.cache,s=t.length,r=Za(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Fl:a=xf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function $x(n,t,e){const i=this.cache,s=t.length,r=Za(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||vf,r[a])}function Kx(n,t,e){const i=this.cache,s=t.length,r=Za(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yf,r[a])}function Zx(n,t,e){const i=this.cache,s=t.length,r=Za(e,s);Ye(i,r)||(n.uniform1iv(this.addr,r),qe(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||_f,r[a])}function Jx(n){switch(n){case 5126:return Lx;case 35664:return Dx;case 35665:return Nx;case 35666:return Ux;case 35674:return Ox;case 35675:return Fx;case 35676:return zx;case 5124:case 35670:return Bx;case 35667:case 35671:return kx;case 35668:case 35672:return Hx;case 35669:case 35673:return Gx;case 5125:return Vx;case 36294:return Wx;case 36295:return Xx;case 36296:return Yx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Kx;case 36289:case 36303:case 36311:case 36292:return Zx}}class Qx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ix(e.type)}}class jx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jx(e.type)}}class t_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],i)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function qh(n,t){n.seq.push(t),n.map[t.id]=t}function e_(n,t,e){const i=n.name,s=i.length;for(Oo.lastIndex=0;;){const r=Oo.exec(i),a=Oo.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){qh(e,l===void 0?new Qx(o,n,t):new jx(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new t_(o),qh(e,d)),e=d}}}class Ma{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);e_(o,c,this)}const s=[],r=[];for(const a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function $h(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const n_=37297;let i_=0;function s_(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}const Kh=new ie;function r_(n){pe._getMatrix(Kh,pe.workingColorSpace,n);const t=`mat3( ${Kh.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(n)){case Ca:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Zh(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+s_(n.getShaderSource(t),o)}else return r}function a_(n,t){const e=r_(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}const o_={[Wl]:"Linear",[Xl]:"Reinhard",[Yl]:"Cineon",[Ga]:"ACESFilmic",[$l]:"AgX",[Kl]:"Neutral",[ql]:"Custom"};function l_(n,t){const e=o_[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const oa=new I;function c_(){pe.getLuminanceCoefficients(oa);const n=oa.x.toFixed(4),t=oa.y.toFixed(4),e=oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function h_(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(er).join(`
`)}function u_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function f_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function er(n){return n!==""}function Jh(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const d_=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(n){return n.replace(d_,m_)}const p_=new Map;function m_(n,t){let e=oe[t];if(e===void 0){const i=p_.get(t);if(i!==void 0)e=oe[i],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return zl(e)}const g_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jh(n){return n.replace(g_,x_)}function x_(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function tu(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const __={[ir]:"SHADOWMAP_TYPE_PCF",[js]:"SHADOWMAP_TYPE_VSM"};function v_(n){return __[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const y_={[qi]:"ENVMAP_TYPE_CUBE",[As]:"ENVMAP_TYPE_CUBE",[Va]:"ENVMAP_TYPE_CUBE_UV"};function M_(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":y_[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const S_={[As]:"ENVMAP_MODE_REFRACTION"};function b_(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":S_[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const E_={[Uu]:"ENVMAP_BLENDING_MULTIPLY",[hd]:"ENVMAP_BLENDING_MIX",[ud]:"ENVMAP_BLENDING_ADD"};function w_(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":E_[n.combine]||"ENVMAP_BLENDING_NONE"}function T_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function A_(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=v_(e),l=M_(e),u=b_(e),d=w_(e),h=T_(e),f=h_(e),g=u_(r),_=s.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(er).join(`
`),p.length>0&&(p+=`
`)):(m=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(er).join(`
`),p=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?oe.tonemapping_pars_fragment:"",e.toneMapping!==Qn?l_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,a_("linearToOutputTexel",e.outputColorSpace),c_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(er).join(`
`)),a=zl(a),a=Jh(a,e),a=Qh(a,e),o=zl(o),o=Jh(o,e),o=Qh(o,e),a=jh(a),o=jh(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=v+m+a,x=v+p+o,M=$h(s,s.VERTEX_SHADER,S),b=$h(s,s.FRAGMENT_SHADER,x);s.attachShader(_,M),s.attachShader(_,b),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(L){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(_)||"",z=s.getShaderInfoLog(M)||"",P=s.getShaderInfoLog(b)||"",D=N.trim(),X=z.trim(),H=P.trim();let et=!0,K=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(et=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,M,b);else{const tt=Zh(s,M,"vertex"),j=Zh(s,b,"fragment");ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+tt+`
`+j)}else D!==""?Jt("WebGLProgram: Program Info Log:",D):(X===""||H==="")&&(K=!1);K&&(L.diagnostics={runnable:et,programLog:D,vertexShader:{log:X,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(M),s.deleteShader(b),y=new Ma(s,_),w=f_(s,_)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(_,n_)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=i_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}let R_=0;class C_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){const s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new P_(t),e.set(t,i)),i}}class P_{constructor(t){this.id=R_++,this.code=t,this.usedTimes=0}}function I_(n){return n===$i||n===Ta||n===Aa}function L_(n,t,e,i,s,r){const a=new oc,o=new C_,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function _(y,w,R,L,N,z){const P=L.fog,D=N.geometry,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,H=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,et=t.get(y.envMap||X,H),K=et&&et.mapping===Va?et.image.height:null,tt=f[y.type];y.precision!==null&&(h=i.getMaxPrecision(y.precision),h!==y.precision&&Jt("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Nt=j!==void 0?j.length:0;let ot=0;D.morphAttributes.position!==void 0&&(ot=1),D.morphAttributes.normal!==void 0&&(ot=2),D.morphAttributes.color!==void 0&&(ot=3);let k,nt,ft,B;if(tt){const Re=$n[tt];k=Re.vertexShader,nt=Re.fragmentShader}else{k=y.vertexShader,nt=y.fragmentShader;const Re=o.getVertexShaderStage(y),ve=o.getFragmentShaderStage(y);o.update(y,Re,ve),ft=Re.id,B=ve.id}const q=n.getRenderTarget(),ht=n.state.buffers.depth.getReversed(),Ut=N.isInstancedMesh===!0,gt=N.isBatchedMesh===!0,Ht=!!y.map,me=!!y.matcap,rt=!!et,ut=!!y.aoMap,dt=!!y.lightMap,pt=!!y.bumpMap&&y.wireframe===!1,_t=!!y.normalMap,$t=!!y.displacementMap,qt=!!y.emissiveMap,Qt=!!y.metalnessMap,ne=!!y.roughnessMap,U=y.anisotropy>0,_e=y.clearcoat>0,ue=y.dispersion>0,C=y.retroreflectivity>0,E=y.iridescence>0,G=y.sheen>0,Y=y.transmission>0,J=U&&!!y.anisotropyMap,mt=_e&&!!y.clearcoatMap,xt=_e&&!!y.clearcoatNormalMap,Q=_e&&!!y.clearcoatRoughnessMap,st=E&&!!y.iridescenceMap,vt=E&&!!y.iridescenceThicknessMap,Wt=G&&!!y.sheenColorMap,bt=G&&!!y.sheenRoughnessMap,yt=!!y.specularMap,Xt=!!y.specularColorMap,Kt=!!y.specularIntensityMap,se=Y&&!!y.transmissionMap,F=Y&&!!y.thicknessMap,Mt=!!y.gradientMap,it=!!y.alphaMap,St=y.alphaTest>0,Lt=!!y.alphaHash,ct=!!y.extensions;let Yt=Qn;y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Yt=n.toneMapping);const Gt={shaderID:tt,shaderType:y.type,shaderName:y.name,vertexShader:k,fragmentShader:nt,defines:y.defines,customVertexShaderID:ft,customFragmentShaderID:B,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:gt,batchingColor:gt&&N._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,instancingMorph:Ut&&N.morphTexture!==null,outputColorSpace:q===null?n.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Ht,matcap:me,envMap:rt,envMapMode:rt&&et.mapping,envMapCubeUVHeight:K,aoMap:ut,lightMap:dt,bumpMap:pt,normalMap:_t,displacementMap:$t,emissiveMap:qt,normalMapObjectSpace:_t&&y.normalMapType===pd,normalMapTangentSpace:_t&&y.normalMapType===Rl,packedNormalMap:_t&&y.normalMapType===Rl&&I_(y.normalMap.format),metalnessMap:Qt,roughnessMap:ne,anisotropy:U,anisotropyMap:J,clearcoat:_e,clearcoatMap:mt,clearcoatNormalMap:xt,clearcoatRoughnessMap:Q,dispersion:ue,retroreflection:C,iridescence:E,iridescenceMap:st,iridescenceThicknessMap:vt,sheen:G,sheenColorMap:Wt,sheenRoughnessMap:bt,specularMap:yt,specularColorMap:Xt,specularIntensityMap:Kt,transmission:Y,transmissionMap:se,thicknessMap:F,gradientMap:Mt,opaque:y.transparent===!1&&y.blending===sr&&y.alphaToCoverage===!1,alphaMap:it,alphaTest:St,alphaHash:Lt,combine:y.combine,mapUv:Ht&&g(y.map.channel),aoMapUv:ut&&g(y.aoMap.channel),lightMapUv:dt&&g(y.lightMap.channel),bumpMapUv:pt&&g(y.bumpMap.channel),normalMapUv:_t&&g(y.normalMap.channel),displacementMapUv:$t&&g(y.displacementMap.channel),emissiveMapUv:qt&&g(y.emissiveMap.channel),metalnessMapUv:Qt&&g(y.metalnessMap.channel),roughnessMapUv:ne&&g(y.roughnessMap.channel),anisotropyMapUv:J&&g(y.anisotropyMap.channel),clearcoatMapUv:mt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(y.sheenRoughnessMap.channel),specularMapUv:yt&&g(y.specularMap.channel),specularColorMapUv:Xt&&g(y.specularColorMap.channel),specularIntensityMapUv:Kt&&g(y.specularIntensityMap.channel),transmissionMapUv:se&&g(y.transmissionMap.channel),thicknessMapUv:F&&g(y.thicknessMap.channel),alphaMapUv:it&&g(y.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(_t||U),vertexNormals:!!D.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!D.attributes.uv&&(Ht||it),fog:!!P,useFog:y.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||D.attributes.normal===void 0&&_t===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ht,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:ot,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Yt,decodeVideoTexture:Ht&&y.map.isVideoTexture===!0&&pe.getTransfer(y.map.colorSpace)===Me,decodeVideoTextureEmissive:qt&&y.emissiveMap.isVideoTexture===!0&&pe.getTransfer(y.emissiveMap.colorSpace)===Me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ue,flipSided:y.side===hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&y.extensions.multiDraw===!0||gt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Gt.vertexUv1s=c.has(1),Gt.vertexUv2s=c.has(2),Gt.vertexUv3s=c.has(3),c.clear(),Gt}function m(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)w.push(R),w.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(w,y),v(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function p(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numSunLights),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numSunLightShadows),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function v(y,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function S(y){const w=f[y.type];let R;if(w){const L=$n[w];R=_r.clone(L.uniforms)}else R=y.uniforms;return R}function x(y,w){let R=u.get(w);return R!==void 0?++R.usedTimes:(R=new A_(n,w,y,s),l.push(R),u.set(w,R)),R}function M(y){if(--y.usedTimes===0){const w=l.indexOf(y);l[w]=l[l.length-1],l.pop(),u.delete(y.cacheKey),y.destroy()}}function b(y){o.remove(y)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:S,acquireProgram:x,releaseProgram:M,releaseShaderCache:b,programs:l,dispose:A}}function D_(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function N_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function eu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function nu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,m,p){let v=n[t];return v===void 0?(v={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},n[t]=v):(v.id=h.id,v.object=h,v.geometry=f,v.material=g,v.materialVariant=a(h),v.groupOrder=_,v.renderOrder=h.renderOrder,v.z=m,v.group=p),t++,v}function c(h,f,g,_,m,p,v){v.reversedDepth===!0&&(m=-m);const S=o(h,f,g,_,m,p);g.transmission>0?i.push(S):g.transparent===!0?s.push(S):e.push(S)}function l(h,f,g,_,m,p){const v=o(h,f,g,_,m,p);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(h,f){e.length>1&&e.sort(h||N_),i.length>1&&i.sort(f||eu),s.length>1&&s.sort(f||eu)}function d(){for(let h=t,f=n.length;h<f;h++){const g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:u}}function U_(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new nu,n.set(i,[a])):s>=r.length?(a=new nu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function O_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Pt};break;case"SpotLight":e={position:new I,direction:new I,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function F_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let z_=0;function B_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function k_(n){const t=new O_,e=F_(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new I);const s=new I,r=new he,a=new he;function o(l){let u=0,d=0,h=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,v=0,S=0,x=0,M=0,b=0,A=0,y=0,w=0,R=0;l.sort(B_);for(let N=0,z=l.length;N<z;N++){const P=l[N],D=P.color,X=P.intensity,H=P.distance;let et=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===$i?et=P.shadow.map.texture:et=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=D.r*X,d+=D.g*X,h+=D.b*X;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],X);R++}else if(P.isSunLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,j=e.get(P);j.shadowIntensity=tt.intensity,j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),i.sunShadow[g]=j,i.sunShadowMap[g]=et;const Nt=tt.getViewportCount();for(let ot=0;ot<Nt;ot++)i.sunShadowMatrix[_+ot]=tt.getMatrix(ot),i.sunShadowCascade[_+ot]=tt._cascadeData[ot];_+=Nt,g++}i.sun[f]=K,f++}else if(P.isDirectionalLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const tt=P.shadow,j=e.get(P);j.shadowIntensity=tt.intensity,j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,i.directionalShadow[m]=j,i.directionalShadowMap[m]=et,i.directionalShadowMatrix[m]=P.shadow.matrix,M++}i.directional[m]=K,m++}else if(P.isSpotLight){const K=t.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(D).multiplyScalar(X),K.distance=H,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[v]=K;const tt=P.shadow;if(P.map&&(i.spotLightMap[y]=P.map,y++,tt.updateMatrices(P),P.castShadow&&w++),i.spotLightMatrix[v]=tt.matrix,P.castShadow){const j=e.get(P);j.shadowIntensity=tt.intensity,j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,i.spotShadow[v]=j,i.spotShadowMap[v]=et,A++}v++}else if(P.isRectAreaLight){const K=t.get(P);K.color.copy(D).multiplyScalar(X),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[S]=K,S++}else if(P.isPointLight){const K=t.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const tt=P.shadow,j=e.get(P);j.shadowIntensity=tt.intensity,j.shadowBias=tt.bias,j.shadowNormalBias=tt.normalBias,j.shadowRadius=tt.radius,j.shadowMapSize=tt.mapSize,j.shadowCameraNear=tt.camera.near,j.shadowCameraFar=tt.camera.far,i.pointShadow[p]=j,i.pointShadowMap[p]=et,i.pointShadowMatrix[p]=P.shadow.matrix,b++}i.point[p]=K,p++}else if(P.isHemisphereLight){const K=t.get(P);K.skyColor.copy(P.color).multiplyScalar(X),K.groundColor.copy(P.groundColor).multiplyScalar(X),i.hemi[x]=K,x++}}S>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Et.LTC_FLOAT_1,i.rectAreaLTC2=Et.LTC_FLOAT_2):(i.rectAreaLTC1=Et.LTC_HALF_1,i.rectAreaLTC2=Et.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==S||L.hemiLength!==x||L.numSunShadows!==g||L.numDirectionalShadows!==M||L.numPointShadows!==b||L.numSpotShadows!==A||L.numSpotMaps!==y||L.numLightProbes!==R)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=S,i.point.length=p,i.hemi.length=x,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+y-w,i.spotLightMap.length=y,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=v,L.rectAreaLength=S,L.hemiLength=x,L.numSunShadows=g,L.numDirectionalShadows=M,L.numPointShadows=b,L.numSpotShadows=A,L.numSpotMaps=y,L.numLightProbes=R,i.version=z_++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0,m=0;const p=u.matrixWorldInverse;for(let v=0,S=l.length;v<S;v++){const x=l[v];if(x.isSunLight){const M=i.sun[d];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),d++}else if(x.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(x.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(x.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),f++}else if(x.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function iu(n){const t=new k_(n),e=[],i=[],s=[];function r(h){d.camera=h,e.length=0,i.length=0,s.length=0}function a(h){e.push(h)}function o(h){i.push(h)}function c(h){s.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}const d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function H_(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new iu(n),t.set(s,[o])):r>=a.length?(o=new iu(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}const G_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,V_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,W_=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],X_=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],su=new he,$s=new I,Fo=new I;function Y_(n,t,e){let i=new lc;const s=new at,r=new at,a=new Le,o=new Kp,c=new Zp,l={},u=e.maxTextureSize,d={[Pi]:hn,[hn]:Pi,[Ue]:Ue},h=new Ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:G_,fragmentShader:V_}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ae;g.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Zt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ir;let p=this.type;this.render=function(b,A,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Xf&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ir);const w=n.getRenderTarget(),R=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Jn),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const z=p!==this.type;z&&A.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(D=>D.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,D=b.length;P<D;P++){const X=b[P],H=X.shadow;if(H===void 0){Jt("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const et=H.getFrameExtents();s.multiply(et),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/et.x),s.x=r.x*et.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/et.y),s.y=r.y*et.y,H.mapSize.y=r.y));const K=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=K,H.map===null||z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===js){if(X.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new un(s.x,s.y,{format:$i,type:gn,minFilter:en,magFilter:en,generateMipmaps:!1}),H.map.texture.name=X.name+".shadowMap",H.map.depthTexture=new dr(s.x,s.y,kn),H.map.depthTexture.name=X.name+".shadowMapDepth",H.map.depthTexture.format=xi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Je,H.map.depthTexture.magFilter=Je}else X.isPointLight?(H.map=new gf(s.x),H.map.depthTexture=new dp(s.x,ni)):(H.map=new un(s.x,s.y),H.map.depthTexture=new dr(s.x,s.y,ni)),H.map.depthTexture.name=X.name+".shadowMap",H.map.depthTexture.format=xi,this.type===ir?(H.map.depthTexture.compareFunction=K?sc:ic,H.map.depthTexture.minFilter=en,H.map.depthTexture.magFilter=en):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Je,H.map.depthTexture.magFilter=Je);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);const tt=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();X.isPointLight!==!0&&H.updateMatrices(X,y);for(let j=0;j<tt;j++){const Nt=H.getCamera(j);if(X.isPointLight){const ot=H.camera,k=H.matrix,nt=X.distance||ot.far;nt!==ot.far&&(ot.far=nt,ot.updateProjectionMatrix()),$s.setFromMatrixPosition(X.matrixWorld),ot.position.copy($s),Fo.copy(ot.position),Fo.add(W_[j]),ot.up.copy(X_[j]),ot.lookAt(Fo),ot.updateMatrixWorld(),k.makeTranslation(-$s.x,-$s.y,-$s.z),su.multiplyMatrices(ot.projectionMatrix,ot.matrixWorldInverse),H._frustum.setFromProjectionMatrix(su,ot.coordinateSystem,ot.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,j),n.clear();else{j===0&&(n.setRenderTarget(H.map),n.clear());const ot=H.getViewport(j);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),N.viewport(a)}i=H.getFrustum(j),x(A,y,Nt,X,this.type)}H.isPointLightShadow!==!0&&this.type===js&&v(H,y),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,R,L)};function v(b,A){const y=t.update(_);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new un(s.x,s.y,{format:$i,type:gn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),h.uniforms.shadow_pass.value=b.map.depthTexture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(A,null,y,h,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(A,null,y,f,_,null)}function S(b,A,y,w){let R=null;const L=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=y.isPointLight===!0?c:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=R.uuid,z=A.uuid;let P=l[N];P===void 0&&(P={},l[N]=P);let D=P[z];D===void 0&&(D=R.clone(),P[z]=D,A.addEventListener("dispose",M)),R=D}if(R.visible=A.visible,R.wireframe=A.wireframe,w===js?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:d[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const N=n.properties.get(R);N.light=y}return R}function x(b,A,y,w,R){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===js)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const z=t.update(b),P=b.material;if(Array.isArray(P)){const D=z.groups;for(let X=0,H=D.length;X<H;X++){const et=D[X],K=P[et.materialIndex];if(K&&K.visible){const tt=S(b,K,w,R);b.onBeforeShadow(n,b,A,y,z,tt,et),n.renderBufferDirect(y,null,z,tt,b,et),b.onAfterShadow(n,b,A,y,z,tt,et)}}}else if(P.visible){const D=S(b,P,w,R);b.onBeforeShadow(n,b,A,y,z,D,null),n.renderBufferDirect(y,null,z,D,b,null),b.onAfterShadow(n,b,A,y,z,D,null)}}const N=b.children;for(let z=0,P=N.length;z<P;z++)x(N[z],A,y,w,R)}function M(b){b.target.removeEventListener("dispose",M);for(const y in l){const w=l[y],R=b.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function q_(n,t){function e(){let F=!1;const Mt=new Le;let it=null;const St=new Le(0,0,0,0);return{setMask:function(Lt){it!==Lt&&!F&&(n.colorMask(Lt,Lt,Lt,Lt),it=Lt)},setLocked:function(Lt){F=Lt},setClear:function(Lt,ct,Yt,Gt,Re){Re===!0&&(Lt*=Gt,ct*=Gt,Yt*=Gt),Mt.set(Lt,ct,Yt,Gt),St.equals(Mt)===!1&&(n.clearColor(Lt,ct,Yt,Gt),St.copy(Mt))},reset:function(){F=!1,it=null,St.set(-1,0,0,0)}}}function i(){let F=!1,Mt=!1,it=null,St=null,Lt=null;return{setReversed:function(ct){if(Mt!==ct){const Yt=t.get("EXT_clip_control");ct?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT),Mt=ct;const Gt=Lt;Lt=null,this.setClear(Gt)}},getReversed:function(){return Mt},setTest:function(ct){ct?q(n.DEPTH_TEST):ht(n.DEPTH_TEST)},setMask:function(ct){it!==ct&&!F&&(n.depthMask(ct),it=ct)},setFunc:function(ct){if(Mt&&(ct=Td[ct]),St!==ct){switch(ct){case Wo:n.depthFunc(n.NEVER);break;case Xo:n.depthFunc(n.ALWAYS);break;case Yo:n.depthFunc(n.LESS);break;case cr:n.depthFunc(n.LEQUAL);break;case qo:n.depthFunc(n.EQUAL);break;case $o:n.depthFunc(n.GEQUAL);break;case Ko:n.depthFunc(n.GREATER);break;case Zo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}St=ct}},setLocked:function(ct){F=ct},setClear:function(ct){Lt!==ct&&(Lt=ct,Mt&&(ct=1-ct),n.clearDepth(ct))},reset:function(){F=!1,it=null,St=null,Lt=null,Mt=!1}}}function s(){let F=!1,Mt=null,it=null,St=null,Lt=null,ct=null,Yt=null,Gt=null,Re=null;return{setTest:function(ve){F||(ve?q(n.STENCIL_TEST):ht(n.STENCIL_TEST))},setMask:function(ve){Mt!==ve&&!F&&(n.stencilMask(ve),Mt=ve)},setFunc:function(ve,Nn,Vn){(it!==ve||St!==Nn||Lt!==Vn)&&(n.stencilFunc(ve,Nn,Vn),it=ve,St=Nn,Lt=Vn)},setOp:function(ve,Nn,Vn){(ct!==ve||Yt!==Nn||Gt!==Vn)&&(n.stencilOp(ve,Nn,Vn),ct=ve,Yt=Nn,Gt=Vn)},setLocked:function(ve){F=ve},setClear:function(ve){Re!==ve&&(n.clearStencil(ve),Re=ve)},reset:function(){F=!1,Mt=null,it=null,St=null,Lt=null,ct=null,Yt=null,Gt=null,Re=null}}}const r=new e,a=new i,o=new s,c=new WeakMap,l=new WeakMap;let u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,v=null,S=null,x=null,M=null,b=null,A=null,y=new Pt(0,0,0),w=0,R=!1,L=null,N=null,z=null,P=null,D=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,et=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(K)[1]),H=et>=1):K.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),H=et>=2);let tt=null,j={};const Nt=n.getParameter(n.SCISSOR_BOX),ot=n.getParameter(n.VIEWPORT),k=new Le().fromArray(Nt),nt=new Le().fromArray(ot);function ft(F,Mt,it,St){const Lt=new Uint8Array(4),ct=n.createTexture();n.bindTexture(F,ct),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<it;Yt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Mt,0,n.RGBA,1,1,St,0,n.RGBA,n.UNSIGNED_BYTE,Lt):n.texImage2D(Mt+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Lt);return ct}const B={};B[n.TEXTURE_2D]=ft(n.TEXTURE_2D,n.TEXTURE_2D,1),B[n.TEXTURE_CUBE_MAP]=ft(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[n.TEXTURE_2D_ARRAY]=ft(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),B[n.TEXTURE_3D]=ft(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),q(n.DEPTH_TEST),a.setFunc(cr),pt(!1),_t(qc),q(n.CULL_FACE),ut(Jn);function q(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function ht(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Ut(F,Mt){return h[F]!==Mt?(n.bindFramebuffer(F,Mt),h[F]=Mt,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Mt),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Mt),!0):!1}function gt(F,Mt){let it=g,St=!1;if(F){it=f.get(Mt),it===void 0&&(it=[],f.set(Mt,it));const Lt=F.textures;if(it.length!==Lt.length||it[0]!==n.COLOR_ATTACHMENT0){for(let ct=0,Yt=Lt.length;ct<Yt;ct++)it[ct]=n.COLOR_ATTACHMENT0+ct;it.length=Lt.length,St=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,St=!0);St&&n.drawBuffers(it)}function Ht(F){return _!==F?(n.useProgram(F),_=F,!0):!1}const me={[_s]:n.FUNC_ADD,[qf]:n.FUNC_SUBTRACT,[$f]:n.FUNC_REVERSE_SUBTRACT};me[Kf]=n.MIN,me[Zf]=n.MAX;const rt={[Jf]:n.ZERO,[Qf]:n.ONE,[jf]:n.SRC_COLOR,[Du]:n.SRC_ALPHA,[rd]:n.SRC_ALPHA_SATURATE,[id]:n.DST_COLOR,[ed]:n.DST_ALPHA,[td]:n.ONE_MINUS_SRC_COLOR,[Nu]:n.ONE_MINUS_SRC_ALPHA,[sd]:n.ONE_MINUS_DST_COLOR,[nd]:n.ONE_MINUS_DST_ALPHA,[ad]:n.CONSTANT_COLOR,[od]:n.ONE_MINUS_CONSTANT_COLOR,[ld]:n.CONSTANT_ALPHA,[cd]:n.ONE_MINUS_CONSTANT_ALPHA};function ut(F,Mt,it,St,Lt,ct,Yt,Gt,Re,ve){if(F===Jn){m===!0&&(ht(n.BLEND),m=!1);return}if(m===!1&&(q(n.BLEND),m=!0),F!==Yf){if(F!==p||ve!==R){if((v!==_s||M!==_s)&&(n.blendEquation(n.FUNC_ADD),v=_s,M=_s),ve)switch(F){case sr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gi:n.blendFunc(n.ONE,n.ONE);break;case $c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Kc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ge("WebGLState: Invalid blending: ",F);break}else switch(F){case sr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case $c:ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Kc:ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ge("WebGLState: Invalid blending: ",F);break}S=null,x=null,b=null,A=null,y.set(0,0,0),w=0,p=F,R=ve}return}Lt=Lt||Mt,ct=ct||it,Yt=Yt||St,(Mt!==v||Lt!==M)&&(n.blendEquationSeparate(me[Mt],me[Lt]),v=Mt,M=Lt),(it!==S||St!==x||ct!==b||Yt!==A)&&(n.blendFuncSeparate(rt[it],rt[St],rt[ct],rt[Yt]),S=it,x=St,b=ct,A=Yt),(Gt.equals(y)===!1||Re!==w)&&(n.blendColor(Gt.r,Gt.g,Gt.b,Re),y.copy(Gt),w=Re),p=F,R=!1}function dt(F,Mt){F.side===Ue?ht(n.CULL_FACE):q(n.CULL_FACE);let it=F.side===hn;Mt&&(it=!it),pt(it),F.blending===sr&&F.transparent===!1?ut(Jn):ut(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);const St=F.stencilWrite;o.setTest(St),St&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),qt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?q(n.SAMPLE_ALPHA_TO_COVERAGE):ht(n.SAMPLE_ALPHA_TO_COVERAGE)}function pt(F){L!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),L=F)}function _t(F){F!==Vf?(q(n.CULL_FACE),F!==N&&(F===qc?n.cullFace(n.BACK):F===Wf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ht(n.CULL_FACE),N=F}function $t(F){F!==z&&(H&&n.lineWidth(F),z=F)}function qt(F,Mt,it){F?(q(n.POLYGON_OFFSET_FILL),(P!==Mt||D!==it)&&(P=Mt,D=it,a.getReversed()&&(Mt=-Mt),n.polygonOffset(Mt,it))):ht(n.POLYGON_OFFSET_FILL)}function Qt(F){F?q(n.SCISSOR_TEST):ht(n.SCISSOR_TEST)}function ne(F){F===void 0&&(F=n.TEXTURE0+X-1),tt!==F&&(n.activeTexture(F),tt=F)}function U(F,Mt,it){it===void 0&&(tt===null?it=n.TEXTURE0+X-1:it=tt);let St=j[it];St===void 0&&(St={type:void 0,texture:void 0},j[it]=St),(St.type!==F||St.texture!==Mt)&&(tt!==it&&(n.activeTexture(it),tt=it),n.bindTexture(F,Mt||B[F]),St.type=F,St.texture=Mt)}function _e(){const F=j[tt];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ue(){try{n.compressedTexImage2D(...arguments)}catch(F){ge("WebGLState:",F)}}function C(){try{n.compressedTexImage3D(...arguments)}catch(F){ge("WebGLState:",F)}}function E(){try{n.texSubImage2D(...arguments)}catch(F){ge("WebGLState:",F)}}function G(){try{n.texSubImage3D(...arguments)}catch(F){ge("WebGLState:",F)}}function Y(){try{n.compressedTexSubImage2D(...arguments)}catch(F){ge("WebGLState:",F)}}function J(){try{n.compressedTexSubImage3D(...arguments)}catch(F){ge("WebGLState:",F)}}function mt(){try{n.texStorage2D(...arguments)}catch(F){ge("WebGLState:",F)}}function xt(){try{n.texStorage3D(...arguments)}catch(F){ge("WebGLState:",F)}}function Q(){try{n.texImage2D(...arguments)}catch(F){ge("WebGLState:",F)}}function st(){try{n.texImage3D(...arguments)}catch(F){ge("WebGLState:",F)}}function vt(F){return d[F]!==void 0?d[F]:n.getParameter(F)}function Wt(F,Mt){d[F]!==Mt&&(n.pixelStorei(F,Mt),d[F]=Mt)}function bt(F){k.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),k.copy(F))}function yt(F){nt.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),nt.copy(F))}function Xt(F,Mt){let it=l.get(Mt);it===void 0&&(it=new WeakMap,l.set(Mt,it));let St=it.get(F);St===void 0&&(St=n.getUniformBlockIndex(Mt,F.name),it.set(F,St))}function Kt(F,Mt){const St=l.get(Mt).get(F);c.get(Mt)!==St&&(n.uniformBlockBinding(Mt,St,F.__bindingPointIndex),c.set(Mt,St))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},d={},tt=null,j={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,v=null,S=null,x=null,M=null,b=null,A=null,y=new Pt(0,0,0),w=0,R=!1,L=null,N=null,z=null,P=null,D=null,k.set(0,0,n.canvas.width,n.canvas.height),nt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:q,disable:ht,bindFramebuffer:Ut,drawBuffers:gt,useProgram:Ht,setBlending:ut,setMaterial:dt,setFlipSided:pt,setCullFace:_t,setLineWidth:$t,setPolygonOffset:qt,setScissorTest:Qt,activeTexture:ne,bindTexture:U,unbindTexture:_e,compressedTexImage2D:ue,compressedTexImage3D:C,texImage2D:Q,texImage3D:st,pixelStorei:Wt,getParameter:vt,updateUBOMapping:Xt,uniformBlockBinding:Kt,texStorage2D:mt,texStorage3D:xt,texSubImage2D:E,texSubImage3D:G,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:bt,viewport:yt,reset:se}}function $_(n,t,e,i,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new at,u=new WeakMap,d=new Set;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return g?new OffscreenCanvas(C,E):Pa("canvas")}function m(C,E,G){let Y=1;const J=ue(C);if((J.width>G||J.height>G)&&(Y=G/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const mt=Math.floor(Y*J.width),xt=Math.floor(Y*J.height);h===void 0&&(h=_(mt,xt));const Q=E?_(mt,xt):h;return Q.width=mt,Q.height=xt,Q.getContext("2d").drawImage(C,0,0,mt,xt),Jt("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+mt+"x"+xt+")."),Q}else return"data"in C&&Jt("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function p(C){return C.generateMipmaps}function v(C){n.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function x(C,E,G,Y,J,mt=!1){if(C!==null){if(n[C]!==void 0)return n[C];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let xt;Y&&(xt=t.get("EXT_texture_norm16"),xt||Jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=E;if(E===n.RED&&(G===n.FLOAT&&(Q=n.R32F),G===n.HALF_FLOAT&&(Q=n.R16F),G===n.UNSIGNED_BYTE&&(Q=n.R8),G===n.UNSIGNED_SHORT&&xt&&(Q=xt.R16_EXT),G===n.SHORT&&xt&&(Q=xt.R16_SNORM_EXT)),E===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.R8UI),G===n.UNSIGNED_SHORT&&(Q=n.R16UI),G===n.UNSIGNED_INT&&(Q=n.R32UI),G===n.BYTE&&(Q=n.R8I),G===n.SHORT&&(Q=n.R16I),G===n.INT&&(Q=n.R32I)),E===n.RG&&(G===n.FLOAT&&(Q=n.RG32F),G===n.HALF_FLOAT&&(Q=n.RG16F),G===n.UNSIGNED_BYTE&&(Q=n.RG8),G===n.UNSIGNED_SHORT&&xt&&(Q=xt.RG16_EXT),G===n.SHORT&&xt&&(Q=xt.RG16_SNORM_EXT)),E===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RG8UI),G===n.UNSIGNED_SHORT&&(Q=n.RG16UI),G===n.UNSIGNED_INT&&(Q=n.RG32UI),G===n.BYTE&&(Q=n.RG8I),G===n.SHORT&&(Q=n.RG16I),G===n.INT&&(Q=n.RG32I)),E===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),G===n.UNSIGNED_INT&&(Q=n.RGB32UI),G===n.BYTE&&(Q=n.RGB8I),G===n.SHORT&&(Q=n.RGB16I),G===n.INT&&(Q=n.RGB32I)),E===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),G===n.UNSIGNED_INT&&(Q=n.RGBA32UI),G===n.BYTE&&(Q=n.RGBA8I),G===n.SHORT&&(Q=n.RGBA16I),G===n.INT&&(Q=n.RGBA32I)),E===n.RGB&&(G===n.UNSIGNED_SHORT&&xt&&(Q=xt.RGB16_EXT),G===n.SHORT&&xt&&(Q=xt.RGB16_SNORM_EXT),G===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),G===n.UNSIGNED_INT_10F_11F_11F_REV&&(Q=n.R11F_G11F_B10F)),E===n.RGBA){const st=mt?Ca:pe.getTransfer(J);G===n.FLOAT&&(Q=n.RGBA32F),G===n.HALF_FLOAT&&(Q=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Q=st===Me?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT&&xt&&(Q=xt.RGBA16_EXT),G===n.SHORT&&xt&&(Q=xt.RGBA16_SNORM_EXT),G===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function M(C,E){let G;return C?E===null||E===ni||E===ur?G=n.DEPTH24_STENCIL8:E===kn?G=n.DEPTH32F_STENCIL8:E===hr&&(G=n.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ni||E===ur?G=n.DEPTH_COMPONENT24:E===kn?G=n.DEPTH_COMPONENT32F:E===hr&&(G=n.DEPTH_COMPONENT16),G}function b(C,E){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Je&&C.minFilter!==en?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function A(C){const E=C.target;E.removeEventListener("dispose",A),w(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&d.delete(E)}function y(C){const E=C.target;E.removeEventListener("dispose",y),L(E)}function w(C){const E=i.get(C);if(E.__webglInit===void 0)return;const G=C.source,Y=f.get(G);if(Y){const J=Y[E.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(C),Object.keys(Y).length===0&&f.delete(G)}i.remove(C)}function R(C){const E=i.get(C);n.deleteTexture(E.__webglTexture);const G=C.source,Y=f.get(G);delete Y[E.__cacheKey],a.memory.textures--}function L(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(E.__webglFramebuffer[Y]))for(let J=0;J<E.__webglFramebuffer[Y].length;J++)n.deleteFramebuffer(E.__webglFramebuffer[Y][J]);else n.deleteFramebuffer(E.__webglFramebuffer[Y]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[Y])}else{if(Array.isArray(E.__webglFramebuffer))for(let Y=0;Y<E.__webglFramebuffer.length;Y++)n.deleteFramebuffer(E.__webglFramebuffer[Y]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Y=0;Y<E.__webglColorRenderbuffer.length;Y++)E.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[Y]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=C.textures;for(let Y=0,J=G.length;Y<J;Y++){const mt=i.get(G[Y]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),a.memory.textures--),i.remove(G[Y])}i.remove(C)}let N=0;function z(){N=0}function P(){return N}function D(C){N=C}function X(){const C=N;return C>=s.maxTextures&&Jt("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,C}function H(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function et(C,E){const G=i.get(C);if(C.isVideoTexture&&U(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&G.__version!==C.version){const Y=C.image;if(Y===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(G,C,E);return}}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+E)}function K(C,E){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ht(G,C,E);return}else C.isExternalTexture&&(G.__webglTexture=C.sourceTexture?C.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+E)}function tt(C,E){const G=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&G.__version!==C.version){ht(G,C,E);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+E)}function j(C,E){const G=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&G.__version!==C.version){Ut(G,C,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+E)}const Nt={[Ii]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[Jo]:n.MIRRORED_REPEAT},ot={[Je]:n.NEAREST,[fd]:n.NEAREST_MIPMAP_NEAREST,[Dr]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[so]:n.LINEAR_MIPMAP_NEAREST,[Wi]:n.LINEAR_MIPMAP_LINEAR},k={[gd]:n.NEVER,[Md]:n.ALWAYS,[xd]:n.LESS,[ic]:n.LEQUAL,[_d]:n.EQUAL,[sc]:n.GEQUAL,[vd]:n.GREATER,[yd]:n.NOTEQUAL};function nt(C,E){if(E.type===kn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===en||E.magFilter===so||E.magFilter===Dr||E.magFilter===Wi||E.minFilter===en||E.minFilter===so||E.minFilter===Dr||E.minFilter===Wi)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,Nt[E.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,Nt[E.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,Nt[E.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,ot[E.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,ot[E.minFilter]),E.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,k[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Je||E.minFilter!==Dr&&E.minFilter!==Wi||E.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(C,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ft(C,E){let G=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",A));const Y=E.source;let J=f.get(Y);J===void 0&&(J={},f.set(Y,J));const mt=H(E);if(mt!==C.__cacheKey){J[mt]===void 0&&(J[mt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),J[mt].usedTimes++;const xt=J[C.__cacheKey];xt!==void 0&&(J[C.__cacheKey].usedTimes--,xt.usedTimes===0&&R(E)),C.__cacheKey=mt,C.__webglTexture=J[mt].texture}return G}function B(C,E,G){return Math.floor(Math.floor(C/G)/E)}function q(C,E,G,Y){const mt=C.updateRanges;if(mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,E.width,E.height,G,Y,E.data);else{mt.sort((Wt,bt)=>Wt.start-bt.start);let xt=0;for(let Wt=1;Wt<mt.length;Wt++){const bt=mt[xt],yt=mt[Wt],Xt=bt.start+bt.count,Kt=B(yt.start,E.width,4),se=B(bt.start,E.width,4);yt.start<=Xt+1&&Kt===se&&B(yt.start+yt.count-1,E.width,4)===Kt?bt.count=Math.max(bt.count,yt.start+yt.count-bt.start):(++xt,mt[xt]=yt)}mt.length=xt+1;const Q=e.getParameter(n.UNPACK_ROW_LENGTH),st=e.getParameter(n.UNPACK_SKIP_PIXELS),vt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,E.width);for(let Wt=0,bt=mt.length;Wt<bt;Wt++){const yt=mt[Wt],Xt=Math.floor(yt.start/4),Kt=Math.ceil(yt.count/4),se=Xt%E.width,F=Math.floor(Xt/E.width),Mt=Kt,it=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,se),e.pixelStorei(n.UNPACK_SKIP_ROWS,F),e.texSubImage2D(n.TEXTURE_2D,0,se,F,Mt,it,G,Y,E.data)}C.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,Q),e.pixelStorei(n.UNPACK_SKIP_PIXELS,st),e.pixelStorei(n.UNPACK_SKIP_ROWS,vt)}}function ht(C,E,G){let Y=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Y=n.TEXTURE_3D);const J=ft(C,E),mt=E.source;e.bindTexture(Y,C.__webglTexture,n.TEXTURE0+G);const xt=i.get(mt);if(mt.version!==xt.__version||J===!0){if(e.activeTexture(n.TEXTURE0+G),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const it=pe.getPrimaries(pe.workingColorSpace),St=E.colorSpace===Ri?null:pe.getPrimaries(E.colorSpace),Lt=E.colorSpace===Ri||it===St?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt)}e.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment);let st=m(E.image,!1,s.maxTextureSize);st=_e(E,st);const vt=r.convert(E.format,E.colorSpace),Wt=r.convert(E.type);let bt=x(E.internalFormat,vt,Wt,E.normalized,E.colorSpace,E.isVideoTexture);nt(Y,E);let yt;const Xt=E.mipmaps,Kt=E.isVideoTexture!==!0,se=xt.__version===void 0||J===!0,F=mt.dataReady,Mt=b(E,st);if(E.isDepthTexture)bt=M(E.format===Xi,E.type),se&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,bt,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,bt,st.width,st.height,0,vt,Wt,null));else if(E.isDataTexture)if(Xt.length>0){Kt&&se&&e.texStorage2D(n.TEXTURE_2D,Mt,bt,Xt[0].width,Xt[0].height);for(let it=0,St=Xt.length;it<St;it++)yt=Xt[it],Kt?F&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,yt.width,yt.height,vt,Wt,yt.data):e.texImage2D(n.TEXTURE_2D,it,bt,yt.width,yt.height,0,vt,Wt,yt.data);E.generateMipmaps=!1}else Kt?(se&&e.texStorage2D(n.TEXTURE_2D,Mt,bt,st.width,st.height),F&&q(E,st,vt,Wt)):e.texImage2D(n.TEXTURE_2D,0,bt,st.width,st.height,0,vt,Wt,st.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Kt&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,bt,Xt[0].width,Xt[0].height,st.depth);for(let it=0,St=Xt.length;it<St;it++)if(yt=Xt[it],E.format!==Hn)if(vt!==null)if(Kt){if(F)if(E.layerUpdates.size>0){const Lt=Fh(yt.width,yt.height,E.format,E.type);for(const ct of E.layerUpdates){const Yt=yt.data.subarray(ct*Lt/yt.data.BYTES_PER_ELEMENT,(ct+1)*Lt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,ct,yt.width,yt.height,1,vt,Yt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,yt.width,yt.height,st.depth,vt,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,it,bt,yt.width,yt.height,st.depth,0,yt.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?F&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,it,0,0,0,yt.width,yt.height,st.depth,vt,Wt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,it,bt,yt.width,yt.height,st.depth,0,vt,Wt,yt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Kt&&se&&e.texStorage2D(n.TEXTURE_2D,Mt,bt,Xt[0].width,Xt[0].height);for(let it=0,St=Xt.length;it<St;it++)yt=Xt[it],E.format!==Hn?vt!==null?Kt?F&&e.compressedTexSubImage2D(n.TEXTURE_2D,it,0,0,yt.width,yt.height,vt,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,it,bt,yt.width,yt.height,0,yt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?F&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,yt.width,yt.height,vt,Wt,yt.data):e.texImage2D(n.TEXTURE_2D,it,bt,yt.width,yt.height,0,vt,Wt,yt.data)}else if(E.isDataArrayTexture)if(Kt){if(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Mt,bt,st.width,st.height,st.depth),F)if(E.layerUpdates.size>0){const it=Fh(st.width,st.height,E.format,E.type);for(const St of E.layerUpdates){const Lt=st.data.subarray(St*it/st.data.BYTES_PER_ELEMENT,(St+1)*it/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,St,st.width,st.height,1,vt,Wt,Lt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,vt,Wt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,bt,st.width,st.height,st.depth,0,vt,Wt,st.data);else if(E.isData3DTexture)Kt?(se&&e.texStorage3D(n.TEXTURE_3D,Mt,bt,st.width,st.height,st.depth),F&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,vt,Wt,st.data)):e.texImage3D(n.TEXTURE_3D,0,bt,st.width,st.height,st.depth,0,vt,Wt,st.data);else if(E.isFramebufferTexture){if(se)if(Kt)e.texStorage2D(n.TEXTURE_2D,Mt,bt,st.width,st.height);else{let it=st.width,St=st.height;for(let Lt=0;Lt<Mt;Lt++)e.texImage2D(n.TEXTURE_2D,Lt,bt,it,St,0,vt,Wt,null),it>>=1,St>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in n){const it=n.canvas;if(it.hasAttribute("layoutsubtree")||it.setAttribute("layoutsubtree","true"),st.parentNode!==it){it.appendChild(st),d.add(E),it.onpaint=St=>{const Lt=St.changedElements;for(const ct of d)Lt.includes(ct.image)&&(ct.needsUpdate=!0)},it.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,st);else{const Lt=n.RGBA,ct=n.RGBA,Yt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Lt,ct,Yt,st)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Xt.length>0){if(Kt&&se){const it=ue(Xt[0]);e.texStorage2D(n.TEXTURE_2D,Mt,bt,it.width,it.height)}for(let it=0,St=Xt.length;it<St;it++)yt=Xt[it],Kt?F&&e.texSubImage2D(n.TEXTURE_2D,it,0,0,vt,Wt,yt):e.texImage2D(n.TEXTURE_2D,it,bt,vt,Wt,yt);E.generateMipmaps=!1}else if(Kt){if(se){const it=ue(st);e.texStorage2D(n.TEXTURE_2D,Mt,bt,it.width,it.height)}F&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Wt,st)}else e.texImage2D(n.TEXTURE_2D,0,bt,vt,Wt,st);p(E)&&v(Y),xt.__version=mt.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Ut(C,E,G){if(E.image.length!==6)return;const Y=ft(C,E),J=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+G);const mt=i.get(J);if(J.version!==mt.__version||Y===!0){e.activeTexture(n.TEXTURE0+G);const xt=pe.getPrimaries(pe.workingColorSpace),Q=E.colorSpace===Ri?null:pe.getPrimaries(E.colorSpace),st=E.colorSpace===Ri||xt===Q?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);const vt=E.isCompressedTexture||E.image[0].isCompressedTexture,Wt=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let ct=0;ct<6;ct++)!vt&&!Wt?bt[ct]=m(E.image[ct],!0,s.maxCubemapSize):bt[ct]=Wt?E.image[ct].image:E.image[ct],bt[ct]=_e(E,bt[ct]);const yt=bt[0],Xt=r.convert(E.format,E.colorSpace),Kt=r.convert(E.type),se=x(E.internalFormat,Xt,Kt,E.normalized,E.colorSpace),F=E.isVideoTexture!==!0,Mt=mt.__version===void 0||Y===!0,it=J.dataReady;let St=b(E,yt);nt(n.TEXTURE_CUBE_MAP,E);let Lt;if(vt){F&&Mt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,St,se,yt.width,yt.height);for(let ct=0;ct<6;ct++){Lt=bt[ct].mipmaps;for(let Yt=0;Yt<Lt.length;Yt++){const Gt=Lt[Yt];E.format!==Hn?Xt!==null?F?it&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt,0,0,Gt.width,Gt.height,Xt,Gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt,se,Gt.width,Gt.height,0,Gt.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt,0,0,Gt.width,Gt.height,Xt,Kt,Gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt,se,Gt.width,Gt.height,0,Xt,Kt,Gt.data)}}}else{if(Lt=E.mipmaps,F&&Mt){Lt.length>0&&St++;const ct=ue(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,St,se,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Wt){F?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,bt[ct].width,bt[ct].height,Xt,Kt,bt[ct].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,se,bt[ct].width,bt[ct].height,0,Xt,Kt,bt[ct].data);for(let Yt=0;Yt<Lt.length;Yt++){const Re=Lt[Yt].image[ct].image;F?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt+1,0,0,Re.width,Re.height,Xt,Kt,Re.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt+1,se,Re.width,Re.height,0,Xt,Kt,Re.data)}}else{F?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Xt,Kt,bt[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,se,Xt,Kt,bt[ct]);for(let Yt=0;Yt<Lt.length;Yt++){const Gt=Lt[Yt];F?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt+1,0,0,Xt,Kt,Gt.image[ct]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Yt+1,se,Xt,Kt,Gt.image[ct])}}}p(E)&&v(n.TEXTURE_CUBE_MAP),mt.__version=J.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function gt(C,E,G,Y,J,mt){const xt=r.convert(G.format,G.colorSpace),Q=r.convert(G.type),st=x(G.internalFormat,xt,Q,G.normalized,G.colorSpace),vt=i.get(E),Wt=i.get(G);if(Wt.__renderTarget=E,!vt.__hasExternalTextures){const bt=Math.max(1,E.width>>mt),yt=Math.max(1,E.height>>mt);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,mt,st,bt,yt,E.depth,0,xt,Q,null):e.texImage2D(J,mt,st,bt,yt,0,xt,Q,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),ne(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,J,Wt.__webglTexture,0,Qt(E)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,J,Wt.__webglTexture,mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(C,E,G){if(n.bindRenderbuffer(n.RENDERBUFFER,C),E.depthBuffer){const Y=E.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,mt=M(E.stencilBuffer,J),xt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;ne(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qt(E),mt,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt(E),mt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,mt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,C)}else{const Y=E.textures;for(let J=0;J<Y.length;J++){const mt=Y[J],xt=r.convert(mt.format,mt.colorSpace),Q=r.convert(mt.type),st=x(mt.internalFormat,xt,Q,mt.normalized,mt.colorSpace);ne(E)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Qt(E),st,E.width,E.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,Qt(E),st,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,st,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function me(C,E,G){const Y=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(E.depthTexture);if(J.__renderTarget=E,(!J.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,E.depthTexture.addEventListener("dispose",A)),J.__webglTexture===void 0){J.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),nt(n.TEXTURE_CUBE_MAP,E.depthTexture);const vt=r.convert(E.depthTexture.format),Wt=r.convert(E.depthTexture.type);let bt;E.depthTexture.format===xi?bt=n.DEPTH_COMPONENT24:E.depthTexture.format===Xi&&(bt=n.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,bt,E.width,E.height,0,vt,Wt,null)}}else et(E.depthTexture,0);const mt=J.__webglTexture,xt=Qt(E),Q=Y?n.TEXTURE_CUBE_MAP_POSITIVE_X+G:n.TEXTURE_2D,st=E.depthTexture.format===Xi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(E.depthTexture.format===xi)ne(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,Q,mt,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,st,Q,mt,0);else if(E.depthTexture.format===Xi)ne(E)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,Q,mt,0,xt):n.framebufferTexture2D(n.FRAMEBUFFER,st,Q,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function rt(C){const E=i.get(C),G=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const Y=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Y){const J=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),E.__depthDisposeCallback=J}E.__boundDepthTexture=Y}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let Y=0;Y<6;Y++)me(E.__webglFramebuffer[Y],C,Y);else{const Y=C.texture.mipmaps;Y&&Y.length>0?me(E.__webglFramebuffer[0],C,0):me(E.__webglFramebuffer,C,0)}else if(G){E.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[Y]),E.__webglDepthbuffer[Y]===void 0)E.__webglDepthbuffer[Y]=n.createRenderbuffer(),Ht(E.__webglDepthbuffer[Y],C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,mt)}}else{const Y=C.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),Ht(E.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,mt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ut(C,E,G){const Y=i.get(C);E!==void 0&&gt(Y.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&rt(C)}function dt(C){const E=C.texture,G=i.get(C),Y=i.get(E);C.addEventListener("dispose",y);const J=C.textures,mt=C.isWebGLCubeRenderTarget===!0,xt=J.length>1;if(xt||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=E.version,a.memory.textures++),mt){G.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Q]=[];for(let st=0;st<E.mipmaps.length;st++)G.__webglFramebuffer[Q][st]=n.createFramebuffer()}else G.__webglFramebuffer[Q]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Q=0;Q<E.mipmaps.length;Q++)G.__webglFramebuffer[Q]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(xt)for(let Q=0,st=J.length;Q<st;Q++){const vt=i.get(J[Q]);vt.__webglTexture===void 0&&(vt.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&ne(C)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){const st=J[Q];G.__webglColorRenderbuffer[Q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[Q]);const vt=r.convert(st.format,st.colorSpace),Wt=r.convert(st.type),bt=x(st.internalFormat,vt,Wt,st.normalized,st.colorSpace,C.isXRRenderTarget===!0),yt=Qt(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,bt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Q,n.RENDERBUFFER,G.__webglColorRenderbuffer[Q])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),Ht(G.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(mt){e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),nt(n.TEXTURE_CUBE_MAP,E);for(let Q=0;Q<6;Q++)if(E.mipmaps&&E.mipmaps.length>0)for(let st=0;st<E.mipmaps.length;st++)gt(G.__webglFramebuffer[Q][st],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,st);else gt(G.__webglFramebuffer[Q],C,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(E)&&v(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let Q=0,st=J.length;Q<st;Q++){const vt=J[Q],Wt=i.get(vt);let bt=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(bt=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(bt,Wt.__webglTexture),nt(bt,vt),gt(G.__webglFramebuffer,C,vt,n.COLOR_ATTACHMENT0+Q,bt,0),p(vt)&&v(bt)}e.unbindTexture()}else{let Q=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Q=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(Q,Y.__webglTexture),nt(Q,E),E.mipmaps&&E.mipmaps.length>0)for(let st=0;st<E.mipmaps.length;st++)gt(G.__webglFramebuffer[st],C,E,n.COLOR_ATTACHMENT0,Q,st);else gt(G.__webglFramebuffer,C,E,n.COLOR_ATTACHMENT0,Q,0);p(E)&&v(Q),e.unbindTexture()}C.depthBuffer&&rt(C)}function pt(C){const E=C.textures;for(let G=0,Y=E.length;G<Y;G++){const J=E[G];if(p(J)){const mt=S(C),xt=i.get(J).__webglTexture;e.bindTexture(mt,xt),v(mt),e.unbindTexture()}}}const _t=[],$t=[];function qt(C){if(C.samples>0){if(ne(C)===!1){const E=C.textures,G=C.width,Y=C.height;let J=n.COLOR_BUFFER_BIT;const mt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=i.get(C),Q=E.length>1;if(Q)for(let vt=0;vt<E.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const st=C.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let vt=0;vt<E.length;vt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),Q){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);const Wt=i.get(E[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Wt,0)}n.blitFramebuffer(0,0,G,Y,0,0,G,Y,J,n.NEAREST),c===!0&&(_t.length=0,$t.length=0,_t.push(n.COLOR_ATTACHMENT0+vt),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(_t.push(mt),$t.push(mt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$t)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Q)for(let vt=0;vt<E.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,xt.__webglColorRenderbuffer[vt]);const Wt=i.get(E[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,Wt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){const E=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function Qt(C){return Math.min(s.maxSamples,C.samples)}function ne(C){const E=i.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function U(C){const E=a.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function _e(C,E){const G=C.colorSpace,Y=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||G!==Ra&&G!==Ri&&(pe.getTransfer(G)===Me?(Y!==Hn||J!==Sn)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ge("WebGLTextures: Unsupported texture color space:",G)),E}function ue(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.getTextureUnits=P,this.setTextureUnits=D,this.setTexture2D=et,this.setTexture2DArray=K,this.setTexture3D=tt,this.setTextureCube=j,this.rebindTextures=ut,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=ne,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function K_(n,t){function e(i,s=Ri){let r;const a=pe.getTransfer(s);if(i===Sn)return n.UNSIGNED_BYTE;if(i===Jl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ql)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ku)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Fu)return n.BYTE;if(i===zu)return n.SHORT;if(i===hr)return n.UNSIGNED_SHORT;if(i===Zl)return n.INT;if(i===ni)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===gn)return n.HALF_FLOAT;if(i===Hu)return n.ALPHA;if(i===Gu)return n.RGB;if(i===Hn)return n.RGBA;if(i===xi)return n.DEPTH_COMPONENT;if(i===Xi)return n.DEPTH_STENCIL;if(i===jl)return n.RED;if(i===tc)return n.RED_INTEGER;if(i===$i)return n.RG;if(i===ec)return n.RG_INTEGER;if(i===nc)return n.RGBA_INTEGER;if(i===xa||i===_a||i===va||i===ya)if(a===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===_a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===va)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qo||i===jo||i===tl||i===el)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nl||i===il||i===sl||i===rl||i===al||i===Ta||i===ol)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===nl||i===il)return a===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===rl)return r.COMPRESSED_R11_EAC;if(i===al)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Ta)return r.COMPRESSED_RG11_EAC;if(i===ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ll||i===cl||i===hl||i===ul||i===fl||i===dl||i===pl||i===ml||i===gl||i===xl||i===_l||i===vl||i===yl||i===Ml)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ll)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ul)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===fl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===dl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===_l)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===yl)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ml)return a===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sl||i===bl||i===El)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Sl)return a===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===bl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===El)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wl||i===Tl||i===Aa||i===Al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===wl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ur?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}const Z_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,J_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Q_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const i=new ju(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Ke({vertexShader:Z_,fragmentShader:J_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Zt(new ee(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j_ extends Di{constructor(t,e){super();const i=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,h=null,f=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Q_,p={},v=e.getContextAttributes();let S=null,x=null;const M=[],b=[],A=new at;let y=null,w=null;const R=new pn;R.viewport=new Le;const L=new pn;L.viewport=new Le;const N=[R,L],z=new i0;let P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let q=M[B];return q===void 0&&(q=new uo,M[B]=q),q.getTargetRaySpace()},this.getControllerGrip=function(B){let q=M[B];return q===void 0&&(q=new uo,M[B]=q),q.getGripSpace()},this.getHand=function(B){let q=M[B];return q===void 0&&(q=new uo,M[B]=q),q.getHandSpace()};function X(B){const q=b.indexOf(B.inputSource);if(q===-1)return;const ht=M[q];ht!==void 0&&(ht.update(B.inputSource,B.frame,l||a),ht.dispatchEvent({type:B.type,data:B.inputSource}))}function H(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",et);for(let B=0;B<M.length;B++){const q=b[B];q!==null&&(b[B]=null,M[B].disconnect(q))}P=null,D=null,m.reset();for(const B in p)delete p[B];if(t.setRenderTarget(S),f=null,h=null,d=null,s=null,x=null,ft.stop(),i.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),w!==null){const B=w.camera;B.fov=w.fov,B.zoom=w.zoom,B.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,i.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,i.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",H),s.addEventListener("inputsourceschange",et),v.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Ut=null,gt=null;v.depth&&(gt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=v.stencil?Xi:xi,Ut=v.stencil?ur:ni);const Ht={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(Ht),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),x=new un(h.textureWidth,h.textureHeight,{format:Hn,type:Sn,depthTexture:new dr(h.textureWidth,h.textureHeight,Ut,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const ht={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ht),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new un(f.framebufferWidth,f.framebufferHeight,{format:Hn,type:Sn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ft.setContext(s),ft.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(B){for(let q=0;q<B.removed.length;q++){const ht=B.removed[q],Ut=b.indexOf(ht);Ut>=0&&(b[Ut]=null,M[Ut].disconnect(ht))}for(let q=0;q<B.added.length;q++){const ht=B.added[q];let Ut=b.indexOf(ht);if(Ut===-1){for(let Ht=0;Ht<M.length;Ht++)if(Ht>=b.length){b.push(ht),Ut=Ht;break}else if(b[Ht]===null){b[Ht]=ht,Ut=Ht;break}if(Ut===-1)break}const gt=M[Ut];gt&&gt.connect(ht)}}const K=new I,tt=new I;function j(B,q,ht){K.setFromMatrixPosition(q.matrixWorld),tt.setFromMatrixPosition(ht.matrixWorld);const Ut=K.distanceTo(tt),gt=q.projectionMatrix.elements,Ht=ht.projectionMatrix.elements,me=gt[14]/(gt[10]-1),rt=gt[14]/(gt[10]+1),ut=(gt[9]+1)/gt[5],dt=(gt[9]-1)/gt[5],pt=(gt[8]-1)/gt[0],_t=(Ht[8]+1)/Ht[0],$t=me*pt,qt=me*_t,Qt=Ut/(-pt+_t),ne=Qt*-pt;if(q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(ne),B.translateZ(Qt),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),gt[10]===-1)B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{const U=me+Qt,_e=rt+Qt,ue=$t-ne,C=qt+(Ut-ne),E=ut*rt/_e*U,G=dt*rt/_e*U;B.projectionMatrix.makePerspective(ue,C,E,G,U,_e),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Nt(B,q){q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;let q=B.near,ht=B.far;m.texture!==null&&(m.depthNear>0&&(q=m.depthNear),m.depthFar>0&&(ht=m.depthFar)),z.near=L.near=R.near=q,z.far=L.far=R.far=ht,(P!==z.near||D!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,D=z.far),z.layers.mask=B.layers.mask|6,R.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;const Ut=B.parent,gt=z.cameras;Nt(z,Ut);for(let Ht=0;Ht<gt.length;Ht++)Nt(gt[Ht],Ut);gt.length===2?j(z,R,L):z.projectionMatrix.copy(R.projectionMatrix),w===null&&B.isPerspectiveCamera&&(w={camera:B,fov:B.fov,zoom:B.zoom}),ot(B,z,Ut)};function ot(B,q,ht){ht===null?B.matrix.copy(q.matrixWorld):(B.matrix.copy(ht.matrixWorld),B.matrix.invert(),B.matrix.multiply(q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(q.projectionMatrix),B.projectionMatrixInverse.copy(q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Rs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(B){c=B,h!==null&&(h.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(B){return p[B]};let k=null;function nt(B,q){if(u=q.getViewerPose(l||a),g=q,u!==null){const ht=u.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let Ut=!1;ht.length!==z.cameras.length&&(z.cameras.length=0,Ut=!0);for(let rt=0;rt<ht.length;rt++){const ut=ht[rt];let dt=null;if(f!==null)dt=f.getViewport(ut);else{const _t=d.getViewSubImage(h,ut);dt=_t.viewport,rt===0&&(t.setRenderTargetTextures(x,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(x))}let pt=N[rt];pt===void 0&&(pt=new pn,pt.layers.enable(rt),pt.viewport=new Le,N[rt]=pt),pt.matrix.fromArray(ut.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(ut.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(dt.x,dt.y,dt.width,dt.height),rt===0&&(z.matrix.copy(pt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Ut===!0&&z.cameras.push(pt)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const rt=d.getDepthInformation(ht[0]);rt&&rt.isValid&&rt.texture&&m.init(rt,s.renderState)}if(gt&&gt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let rt=0;rt<ht.length;rt++){const ut=ht[rt].camera;if(ut){let dt=p[ut];dt||(dt=new ju,p[ut]=dt);const pt=d.getCameraImage(ut);dt.sourceTexture=pt}}}}for(let ht=0;ht<M.length;ht++){const Ut=b[ht],gt=M[ht];Ut!==null&&gt!==void 0&&gt.update(Ut,q,l||a)}k&&k(B,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),g=null}const ft=new pf;ft.setAnimationLoop(nt),this.setAnimationLoop=function(B){k=B},this.dispose=function(){}}}const tv=new he,Mf=new ie;Mf.set(-1,0,0,0,1,0,0,0,1);function ev(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,hf(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,S,x){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===hn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===hn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),S=v.envMap,x=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(tv.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===hn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function nv(n,t,e,i){let s={},r={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,M){const b=M.program;i.uniformBlockBinding(x,b)}function l(x,M){let b=s[x.id];b===void 0&&(m(x),b=u(x),s[x.id]=b,x.addEventListener("dispose",v));const A=M.program;i.updateUBOMapping(x,A);const y=t.render.frame;r[x.id]!==y&&(h(x),r[x.id]=y)}function u(x){const M=d();x.__bindingPointIndex=M;const b=n.createBuffer(),A=x.__size,y=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,A,y),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,b),b}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(x){const M=s[x.id],b=x.uniforms,A=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let y=0,w=b.length;y<w;y++){const R=b[y];if(Array.isArray(R))for(let L=0,N=R.length;L<N;L++)f(R[L],y,L,A);else f(R,y,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,M,b,A){if(_(x,M,b,A)===!0){const y=x.__offset,w=x.value;if(Array.isArray(w)){let R=0;for(let L=0;L<w.length;L++){const N=w[L],z=p(N);g(N,x.__data,R),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(R+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,x.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,y,x.__data)}}function g(x,M,b){typeof x=="number"||typeof x=="boolean"?M[0]=x:x.isMatrix3?(M[0]=x.elements[0],M[1]=x.elements[1],M[2]=x.elements[2],M[3]=0,M[4]=x.elements[3],M[5]=x.elements[4],M[6]=x.elements[5],M[7]=0,M[8]=x.elements[6],M[9]=x.elements[7],M[10]=x.elements[8],M[11]=0):ArrayBuffer.isView(x)?M.set(new x.constructor(x.buffer,x.byteOffset,M.length)):x.toArray(M,b)}function _(x,M,b,A){const y=x.value,w=M+"_"+b;if(A[w]===void 0)return typeof y=="number"||typeof y=="boolean"?A[w]=y:ArrayBuffer.isView(y)?A[w]=y.slice():A[w]=y.clone(),!0;{const R=A[w];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return A[w]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(x){const M=x.uniforms;let b=0;const A=16;for(let w=0,R=M.length;w<R;w++){const L=Array.isArray(M[w])?M[w]:[M[w]];for(let N=0,z=L.length;N<z;N++){const P=L[N],D=Array.isArray(P.value)?P.value:[P.value];for(let X=0,H=D.length;X<H;X++){const et=D[X],K=p(et),tt=b%A,j=tt%K.boundary,Nt=tt+j;b+=j,Nt!==0&&A-Nt<K.storage&&(b+=A-Nt),P.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,b+=K.storage}}}const y=b%A;return y>0&&(b+=A-y),x.__size=b,x.__cache={},this}function p(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Jt("WebGLRenderer: Unsupported uniform value type.",x),M}function v(x){const M=x.target;M.removeEventListener("dispose",v);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function S(){for(const x in s)n.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:c,update:l,dispose:S}}const iv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yn=null;function sv(){return Yn===null&&(Yn=new Ku(iv,16,16,$i,gn),Yn.name="DFG_LUT",Yn.minFilter=en,Yn.magFilter=en,Yn.wrapS=fi,Yn.wrapT=fi,Yn.generateMipmaps=!1,Yn.needsUpdate=!0),Yn}class rv{constructor(t={}){const{canvas:e=Ed(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Sn}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=f,m=new Set([nc,ec,tc]),p=new Set([Sn,ni,hr,ur,Jl,Ql]),v=new Uint32Array(4),S=new Int32Array(4),x=new I;let M=null,b=null;const A=[],y=[];let w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let L=!1,N=null,z=null,P=null,D=null;this._outputColorSpace=Pe;let X=0,H=0,et=null,K=-1,tt=null;const j=new Le,Nt=new Le;let ot=null;const k=new Pt(0);let nt=0,ft=e.width,B=e.height,q=1,ht=null,Ut=null;const gt=new Le(0,0,ft,B),Ht=new Le(0,0,ft,B);let me=!1;const rt=new lc;let ut=!1,dt=!1;const pt=new he,_t=new I,$t=new Le,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function ne(){return et===null?q:1}let U=i;function _e(T,O){return e.getContext(T,O)}let ue,C,E,G,Y,J,mt,xt,Q,st,vt,Wt,bt,yt,Xt,Kt,se,F,Mt,it,St,Lt,ct;try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vl}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Nn,!1),U===null){const O="webgl2";if(U=_e(O,T),U===null)throw _e(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Yt()}catch(T){throw e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),ge("WebGLRenderer: "+T.message),T}function Yt(){ue=new sx(U),ue.init(),St=new K_(U,ue),C=new $g(U,ue,t,St),E=new q_(U,ue),C.reversedDepthBuffer&&h&&E.buffers.depth.setReversed(!0),z=U.createFramebuffer(),P=U.createFramebuffer(),D=U.createFramebuffer(),G=new ox(U),Y=new D_,J=new $_(U,ue,E,Y,C,St,G),mt=new ix(R),xt=new c0(U),Lt=new Yg(U,xt),Q=new rx(U,xt,G,Lt),st=new cx(U,Q,xt,Lt,G),F=new lx(U,C,J),Xt=new Kg(Y),vt=new L_(R,mt,ue,C,Lt,Xt),Wt=new ev(R,Y),bt=new U_,yt=new H_(ue),se=new Xg(R,mt,E,st,g,c),Kt=new Y_(R,st,C),ct=new nv(U,G,C,E),Mt=new qg(U,ue,G),it=new ax(U,ue,G),G.programs=vt.programs,R.capabilities=C,R.extensions=ue,R.properties=Y,R.renderLists=bt,R.shadowMap=Kt,R.state=E,R.info=G}_!==Sn&&(w=new ux(_,e.width,e.height,o,s,r));const Gt=new j_(R,U);this.xr=Gt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(T){T!==void 0&&(q=T,this.setSize(ft,B,!1))},this.getSize=function(T){return T.set(ft,B)},this.setSize=function(T,O,$=!0){if(Gt.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}ft=T,B=O,e.width=Math.floor(T*q),e.height=Math.floor(O*q),$===!0&&(e.style.width=T+"px",e.style.height=O+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(ft*q,B*q).floor()},this.setDrawingBufferSize=function(T,O,$){ft=T,B=O,q=$,e.width=Math.floor(T*$),e.height=Math.floor(O*$),this.setViewport(0,0,T,O)},this.setEffects=function(T){if(_===Sn){ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let O=0;O<T.length;O++)if(T[O].isOutputPass===!0){Jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(j)},this.getViewport=function(T){return T.copy(gt)},this.setViewport=function(T,O,$,V){T.isVector4?gt.set(T.x,T.y,T.z,T.w):gt.set(T,O,$,V),E.viewport(j.copy(gt).multiplyScalar(q).round())},this.getScissor=function(T){return T.copy(Ht)},this.setScissor=function(T,O,$,V){T.isVector4?Ht.set(T.x,T.y,T.z,T.w):Ht.set(T,O,$,V),E.scissor(Nt.copy(Ht).multiplyScalar(q).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(T){E.setScissorTest(me=T)},this.setOpaqueSort=function(T){ht=T},this.setTransparentSort=function(T){Ut=T},this.getClearColor=function(T){return T.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(T=!0,O=!0,$=!0){let V=0;if(T){let W=!1;if(et!==null){const Rt=et.texture.format;W=m.has(Rt)}if(W){const Rt=et.texture.type,Ft=p.has(Rt),wt=se.getClearColor(),Bt=se.getClearAlpha(),Vt=wt.r,ae=wt.g,fe=wt.b;Ft?(v[0]=Vt,v[1]=ae,v[2]=fe,v[3]=Bt,U.clearBufferuiv(U.COLOR,0,v)):(S[0]=Vt,S[1]=ae,S[2]=fe,S[3]=Bt,U.clearBufferiv(U.COLOR,0,S))}else V|=U.COLOR_BUFFER_BIT}O&&(V|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),$&&(V|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&U.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Nn,!1),se.dispose(),bt.dispose(),yt.dispose(),Y.dispose(),mt.dispose(),st.dispose(),Lt.dispose(),ct.dispose(),vt.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",zc),Gt.removeEventListener("sessionend",Bc),Ui.stop()};function Re(T){T.preventDefault(),Qc("WebGLRenderer: Context Lost."),L=!0}function ve(){Qc("WebGLRenderer: Context Restored."),L=!1;const T=G.autoReset,O=Kt.enabled,$=Kt.autoUpdate,V=Kt.needsUpdate,W=Kt.type;Yt(),G.autoReset=T,Kt.enabled=O,Kt.autoUpdate=$,Kt.needsUpdate=V,Kt.type=W}function Nn(T){ge("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Vn(T){const O=T.target;O.removeEventListener("dispose",Vn),Of(O)}function Of(T){Ff(T),Y.remove(T)}function Ff(T){const O=Y.get(T).programs;O!==void 0&&(O.forEach(function($){vt.releaseProgram($)}),T.isShaderMaterial&&vt.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,$,V,W,Rt){O===null&&(O=qt);const Ft=W.isMesh&&W.matrixWorld.determinantAffine()<0,wt=kf(T,O,$,V,W);E.setMaterial(V,Ft);let Bt=$.index,Vt=1;if(V.wireframe===!0){if(Bt=Q.getWireframeAttribute($),Bt===void 0)return;Vt=2}const ae=$.drawRange,fe=$.attributes.position;let kt=ae.start*Vt,ye=(ae.start+ae.count)*Vt;Rt!==null&&(kt=Math.max(kt,Rt.start*Vt),ye=Math.min(ye,(Rt.start+Rt.count)*Vt)),Bt!==null?(kt=Math.max(kt,0),ye=Math.min(ye,Bt.count)):fe!=null&&(kt=Math.max(kt,0),ye=Math.min(ye,fe.count));const Be=ye-kt;if(Be<0||Be===1/0)return;Lt.setup(W,V,wt,$,Bt);let Ie,Te=Mt;if(Bt!==null&&(Ie=xt.get(Bt),Te=it,Te.setIndex(Ie)),W.isMesh)V.wireframe===!0?(E.setLineWidth(V.wireframeLinewidth*ne()),Te.setMode(U.LINES)):Te.setMode(U.TRIANGLES);else if(W.isLine){let Qe=V.linewidth;Qe===void 0&&(Qe=1),E.setLineWidth(Qe*ne()),W.isLineSegments?Te.setMode(U.LINES):W.isLineLoop?Te.setMode(U.LINE_LOOP):Te.setMode(U.LINE_STRIP)}else W.isPoints?Te.setMode(U.POINTS):W.isSprite&&Te.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(ue.get("WEBGL_multi_draw"))Te.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Qe=W._multiDrawStarts,Ot=W._multiDrawCounts,rn=W._multiDrawCount,xe=Bt?xt.get(Bt).bytesPerElement:1,En=Y.get(V).currentProgram.getUniforms();for(let Wn=0;Wn<rn;Wn++)En.setValue(U,"_gl_DrawID",Wn),Te.render(Qe[Wn]/xe,Ot[Wn])}else if(W.isInstancedMesh)Te.renderInstances(kt,Be,W.count);else if($.isInstancedBufferGeometry){const Qe=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ot=Math.min($.instanceCount,Qe);Te.renderInstances(kt,Be,Ot)}else Te.render(kt,Be)};function Fc(T,O,$,V){N!==null&&T.isNodeMaterial&&N.setObject(V,T),ut===!0&&Xt.setState(T,$,!1),T.transparent===!0&&T.side===Ue&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,Lr(T,O,V),T.side=Pi,T.needsUpdate=!0,Lr(T,O,V),T.side=Ue):Lr(T,O,V)}this.compile=function(T,O,$=null){$===null&&($=T),N!==null&&N.renderStart(T,O,$),b=yt.get($),b.init(O),y.push(b),$.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),T!==$&&T.traverseVisible(function(W){W.isLight&&W.layers.test(O.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),N!==null&&N.updateLights(b.state.lightsArray),dt=this.localClippingEnabled,ut=Xt.init(this.clippingPlanes,dt),ut===!0&&Xt.setGlobalState(this.clippingPlanes,O),N!==null&&Kt.render(b.state.shadowsArray,$,O);const V=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Rt=W.material;if(Rt)if(Array.isArray(Rt))for(let Ft=0;Ft<Rt.length;Ft++){const wt=Rt[Ft];Fc(wt,$,O,W),V.add(wt)}else Fc(Rt,$,O,W),V.add(Rt)}),b=y.pop(),N!==null&&N.renderEnd(),V},this.compileAsync=function(T,O,$=null){const V=this.compile(T,O,$);return new Promise(W=>{function Rt(){if(V.forEach(function(Ft){const Bt=Y.get(Ft).currentProgram;(Bt===void 0||Bt.isReady())&&V.delete(Ft)}),V.size===0){W(T);return}setTimeout(Rt,10)}ue.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let eo=null;function zf(T){eo&&eo(T)}function zc(){Ui.stop()}function Bc(){Ui.start()}const Ui=new pf;Ui.setAnimationLoop(zf),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(T){eo=T,Gt.setAnimationLoop(T),T===null?Ui.stop():Ui.start()},Gt.addEventListener("sessionstart",zc),Gt.addEventListener("sessionend",Bc),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(T,O);const $=Gt.enabled===!0&&Gt.isPresenting===!0,V=w!==null&&(et===null||$)&&w.begin(R,et);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(O),O=Gt.getCamera()),T.isScene===!0&&T.onBeforeRender(R,T,O,et),b=yt.get(T,y.length),b.init(O),b.state.textureUnits=J.getTextureUnits(),y.push(b),pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),rt.setFromProjectionMatrix(pt,Kn,O.reversedDepth),dt=this.localClippingEnabled,ut=Xt.init(this.clippingPlanes,dt),M=bt.get(T,A.length),M.init(),A.push(M),Gt.enabled===!0&&Gt.isPresenting===!0){const Ft=R.xr.getDepthSensingMesh();Ft!==null&&no(Ft,O,-1/0,R.sortObjects)}no(T,O,0,R.sortObjects),M.finish(),N!==null&&N.updateLights(b.state.lightsArray),R.sortObjects===!0&&M.sort(ht,Ut),Qt=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Qt&&se.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ut===!0&&Xt.beginShadows();const W=b.state.shadowsArray;if(Kt.render(W,T,O),ut===!0&&Xt.endShadows(),(V&&w.hasRenderPass())===!1){const Ft=M.opaque,wt=M.transmissive;if(b.setupLights(),O.isArrayCamera){const Bt=O.cameras;if(wt.length>0)for(let Vt=0,ae=Bt.length;Vt<ae;Vt++){const fe=Bt[Vt];Hc(Ft,wt,T,fe)}Qt&&se.render(T);for(let Vt=0,ae=Bt.length;Vt<ae;Vt++){const fe=Bt[Vt];kc(M,T,fe,fe.viewport)}}else wt.length>0&&Hc(Ft,wt,T,O),Qt&&se.render(T),kc(M,T,O)}et!==null&&H===0&&(J.updateMultisampleRenderTarget(et),J.updateRenderTargetMipmap(et)),V&&w.end(R),T.isScene===!0&&T.onAfterRender(R,T,O),Lt.resetDefaultState(),K=-1,tt=null,y.pop(),y.length>0?(b=y[y.length-1],J.setTextureUnits(b.state.textureUnits),ut===!0&&Xt.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,N!==null&&N.renderEnd()};function no(T,O,$,V){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)$=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(rt)){V&&$t.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pt);const Ft=st.update(T),wt=T.material;wt.visible&&M.push(T,Ft,wt,$,$t.z,null,O)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(rt))){const Ft=st.update(T),wt=T.material;if(V&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$t.copy(T.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),$t.copy(Ft.boundingSphere.center)),$t.applyMatrix4(T.matrixWorld).applyMatrix4(pt)),Array.isArray(wt)){const Bt=Ft.groups;for(let Vt=0,ae=Bt.length;Vt<ae;Vt++){const fe=Bt[Vt],kt=wt[fe.materialIndex];kt&&kt.visible&&M.push(T,Ft,kt,$,$t.z,fe,O)}}else wt.visible&&M.push(T,Ft,wt,$,$t.z,null,O)}}const Rt=T.children;for(let Ft=0,wt=Rt.length;Ft<wt;Ft++)no(Rt[Ft],O,$,V)}function kc(T,O,$,V){const{opaque:W,transmissive:Rt,transparent:Ft}=T;b.setupLightsView($),ut===!0&&Xt.setGlobalState(R.clippingPlanes,$),V&&E.viewport(j.copy(V)),W.length>0&&Ir(W,O,$),Rt.length>0&&Ir(Rt,O,$),Ft.length>0&&Ir(Ft,O,$),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Hc(T,O,$,V){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[V.id]===void 0){const kt=ue.has("EXT_color_buffer_half_float")||ue.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[V.id]=new un(1,1,{generateMipmaps:!0,type:kt?gn:Sn,minFilter:Wi,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pe.workingColorSpace})}const Rt=b.state.transmissionRenderTarget[V.id],Ft=V.viewport||j;Rt.setSize(Ft.z*R.transmissionResolutionScale,Ft.w*R.transmissionResolutionScale);const wt=R.getRenderTarget(),Bt=R.getActiveCubeFace(),Vt=R.getActiveMipmapLevel();R.setRenderTarget(Rt),R.getClearColor(k),nt=R.getClearAlpha(),nt<1&&R.setClearColor(16777215,.5),R.clear(),Qt&&se.render($);const ae=R.toneMapping;R.toneMapping=Qn;const fe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),b.setupLightsView(V),ut===!0&&Xt.setGlobalState(R.clippingPlanes,V),Ir(T,$,V),J.updateMultisampleRenderTarget(Rt),J.updateRenderTargetMipmap(Rt),ue.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ye=0,Be=O.length;ye<Be;ye++){const Ie=O[ye],{object:Te,geometry:Qe,material:Ot,group:rn}=Ie;if(Ot.side===Ue&&Te.layers.test(V.layers)){const xe=Ot.side;Ot.side=hn,Ot.needsUpdate=!0,Gc(Te,$,V,Qe,Ot,rn),Ot.side=xe,Ot.needsUpdate=!0,kt=!0}}kt===!0&&(J.updateMultisampleRenderTarget(Rt),J.updateRenderTargetMipmap(Rt))}R.setRenderTarget(wt,Bt,Vt),R.setClearColor(k,nt),fe!==void 0&&(V.viewport=fe),R.toneMapping=ae}function Ir(T,O,$){const V=O.isScene===!0?O.overrideMaterial:null;for(let W=0,Rt=T.length;W<Rt;W++){const Ft=T[W],{object:wt,geometry:Bt,group:Vt}=Ft;let ae=Ft.material;ae.allowOverride===!0&&V!==null&&(ae=V),wt.layers.test($.layers)&&Gc(wt,O,$,Bt,ae,Vt)}}function Gc(T,O,$,V,W,Rt){N!==null&&W.isNodeMaterial&&N.setObject(T,W),T.onBeforeRender(R,O,$,V,W,Rt),T.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(R,O,$,V,T,Rt),W.transparent===!0&&W.side===Ue&&W.forceSinglePass===!1?(W.side=hn,W.needsUpdate=!0,R.renderBufferDirect($,O,V,W,T,Rt),W.side=Pi,W.needsUpdate=!0,R.renderBufferDirect($,O,V,W,T,Rt),W.side=Ue):R.renderBufferDirect($,O,V,W,T,Rt),T.onAfterRender(R,O,$,V,W,Rt)}function Lr(T,O,$){O.isScene!==!0&&(O=qt);const V=Y.get(T),W=b.state.lights,Rt=b.state.shadowsArray,Ft=W.state.version,wt=vt.getParameters(T,W.state,Rt,O,$,b.state.lightProbeGridArray),Bt=vt.getProgramCacheKey(wt);let Vt=V.programs;V.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?O.environment:null,V.fog=O.fog;const ae=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;V.envMap=mt.get(T.envMap||V.environment,ae),V.envMapRotation=V.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Vt===void 0&&(T.addEventListener("dispose",Vn),Vt=new Map,V.programs=Vt);let fe=Vt.get(Bt);if(fe!==void 0){if(V.currentProgram===fe&&V.lightsStateVersion===Ft)return Wc(T,wt),fe}else wt.uniforms=vt.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,$,wt),T.onBeforeCompile(wt,R),fe=vt.acquireProgram(wt,Bt),Vt.set(Bt,fe),V.uniforms=wt.uniforms;const kt=V.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(kt.clippingPlanes=Xt.uniform),Wc(T,wt),V.needsLights=Gf(T),V.lightsStateVersion=Ft,V.needsLights&&(kt.ambientLightColor.value=W.state.ambient,kt.lightProbe.value=W.state.probe,kt.sunLights.value=W.state.sun,kt.sunLightShadows.value=W.state.sunShadow,kt.directionalLights.value=W.state.directional,kt.directionalLightShadows.value=W.state.directionalShadow,kt.spotLights.value=W.state.spot,kt.spotLightShadows.value=W.state.spotShadow,kt.rectAreaLights.value=W.state.rectArea,kt.ltc_1.value=W.state.rectAreaLTC1,kt.ltc_2.value=W.state.rectAreaLTC2,kt.pointLights.value=W.state.point,kt.pointLightShadows.value=W.state.pointShadow,kt.hemisphereLights.value=W.state.hemi,kt.sunShadowMatrix.value=W.state.sunShadowMatrix,kt.sunShadowCascade.value=W.state.sunShadowCascade,kt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,kt.spotLightMatrix.value=W.state.spotLightMatrix,kt.spotLightMap.value=W.state.spotLightMap,kt.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=b.state.lightProbeGridArray.length>0,V.currentProgram=fe,V.uniformsList=null,fe}function Vc(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Ma.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Wc(T,O){const $=Y.get(T);$.outputColorSpace=O.outputColorSpace,$.batching=O.batching,$.batchingColor=O.batchingColor,$.instancing=O.instancing,$.instancingColor=O.instancingColor,$.instancingMorph=O.instancingMorph,$.skinning=O.skinning,$.morphTargets=O.morphTargets,$.morphNormals=O.morphNormals,$.morphColors=O.morphColors,$.morphTargetsCount=O.morphTargetsCount,$.numClippingPlanes=O.numClippingPlanes,$.numIntersection=O.numClipIntersection,$.vertexAlphas=O.vertexAlphas,$.vertexTangents=O.vertexTangents,$.toneMapping=O.toneMapping}function Bf(T,O){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;x.setFromMatrixPosition(O.matrixWorld);for(let $=0,V=T.length;$<V;$++){const W=T[$];if(W.texture!==null&&W.boundingBox.containsPoint(x))return W}return null}function kf(T,O,$,V,W){O.isScene!==!0&&(O=qt),J.resetTextureUnits();const Rt=O.fog,Ft=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?O.environment:null,wt=et===null?R.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:pe.workingColorSpace,Bt=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Vt=mt.get(V.envMap||Ft,Bt),ae=V.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,fe=!!$.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),kt=!!$.morphAttributes.position,ye=!!$.morphAttributes.normal,Be=!!$.morphAttributes.color;let Ie=Qn;V.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ie=R.toneMapping);const Te=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Qe=Te!==void 0?Te.length:0,Ot=Y.get(V),rn=b.state.lights;if(ut===!0&&(dt===!0||T!==tt)){const Ce=T===tt&&V.id===K;Xt.setState(V,T,Ce)}let xe=!1;V.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==rn.state.version||Ot.outputColorSpace!==wt||W.isBatchedMesh&&Ot.batching===!1||!W.isBatchedMesh&&Ot.batching===!0||W.isBatchedMesh&&Ot.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ot.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ot.instancing===!1||!W.isInstancedMesh&&Ot.instancing===!0||W.isSkinnedMesh&&Ot.skinning===!1||!W.isSkinnedMesh&&Ot.skinning===!0||W.isInstancedMesh&&Ot.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ot.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ot.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ot.instancingMorph===!1&&W.morphTexture!==null||Ot.envMap!==Vt||V.fog===!0&&Ot.fog!==Rt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==Xt.numPlanes||Ot.numIntersection!==Xt.numIntersection)||Ot.vertexAlphas!==ae||Ot.vertexTangents!==fe||Ot.morphTargets!==kt||Ot.morphNormals!==ye||Ot.morphColors!==Be||Ot.toneMapping!==Ie||Ot.morphTargetsCount!==Qe||!!Ot.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(xe=!0):(xe=!0,Ot.__version=V.version);let En=Ot.currentProgram;xe===!0&&(En=Lr(V,O,W),N&&V.isNodeMaterial&&N.onUpdateProgram(V,En,Ot));let Wn=!1,vi=!1,es=!1;const we=En.getUniforms(),Fe=Ot.uniforms;if(E.useProgram(En.program)&&(Wn=!0,vi=!0,es=!0),V.id!==K&&(K=V.id,vi=!0),Ot.needsLights){const Ce=Bf(b.state.lightProbeGridArray,W);Ot.lightProbeGrid!==Ce&&(Ot.lightProbeGrid=Ce,vi=!0)}if(Wn||tt!==T){E.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),we.setValue(U,"projectionMatrix",T.projectionMatrix),we.setValue(U,"viewMatrix",T.matrixWorldInverse);const Mi=we.map.cameraPosition;Mi!==void 0&&Mi.setValue(U,_t.setFromMatrixPosition(T.matrixWorld)),C.logarithmicDepthBuffer&&we.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&we.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),tt!==T&&(tt=T,vi=!0,es=!0)}if(Ot.needsLights&&(rn.state.sunShadowMap.length>0&&we.setValue(U,"sunShadowMap",rn.state.sunShadowMap,J),rn.state.directionalShadowMap.length>0&&we.setValue(U,"directionalShadowMap",rn.state.directionalShadowMap,J),rn.state.spotShadowMap.length>0&&we.setValue(U,"spotShadowMap",rn.state.spotShadowMap,J),rn.state.pointShadowMap.length>0&&we.setValue(U,"pointShadowMap",rn.state.pointShadowMap,J)),W.isSkinnedMesh){we.setOptional(U,W,"bindMatrix"),we.setOptional(U,W,"bindMatrixInverse");const Ce=W.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),we.setValue(U,"boneTexture",Ce.boneTexture,J))}W.isBatchedMesh&&(we.setOptional(U,W,"batchingTexture"),we.setValue(U,"batchingTexture",W._matricesTexture,J),we.setOptional(U,W,"batchingIdTexture"),we.setValue(U,"batchingIdTexture",W._indirectTexture,J),we.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&we.setValue(U,"batchingColorTexture",W._colorsTexture,J));const yi=$.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&F.update(W,$,En),(vi||Ot.receiveShadow!==W.receiveShadow)&&(Ot.receiveShadow=W.receiveShadow,we.setValue(U,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&O.environment!==null&&(Fe.envMapIntensity.value=O.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=sv()),vi){if(we.setValue(U,"toneMappingExposure",R.toneMappingExposure),Ot.needsLights&&Hf(Fe,es),Rt&&V.fog===!0&&Wt.refreshFogUniforms(Fe,Rt),Wt.refreshMaterialUniforms(Fe,V,q,B,b.state.transmissionRenderTarget[T.id]),Ot.needsLights&&Ot.lightProbeGrid){const Ce=Ot.lightProbeGrid;Fe.probesSH.value=Ce.texture,Fe.probesMin.value.copy(Ce.boundingBox.min),Fe.probesMax.value.copy(Ce.boundingBox.max),Fe.probesResolution.value.copy(Ce.resolution)}Ma.upload(U,Vc(Ot),Fe,J)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ma.upload(U,Vc(Ot),Fe,J),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&we.setValue(U,"center",W.center),we.setValue(U,"modelViewMatrix",W.modelViewMatrix),we.setValue(U,"normalMatrix",W.normalMatrix),we.setValue(U,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){const Ce=V.uniformsGroups;for(let Mi=0,ns=Ce.length;Mi<ns;Mi++){const Yc=Ce[Mi];ct.update(Yc,En),ct.bind(Yc,En)}}return En}function Hf(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.sunLights.needsUpdate=O,T.sunLightShadows.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Gf(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(T,O,$){const V=Y.get(T);V.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),Y.get(T.texture).__webglTexture=O,Y.get(T.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:$,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,O){const $=Y.get(T);$.__webglFramebuffer=O,$.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,$=0){et=T,X=O,H=$;let V=null,W=!1,Rt=!1;if(T){const wt=Y.get(T);if(wt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(U.FRAMEBUFFER,wt.__webglFramebuffer),j.copy(T.viewport),Nt.copy(T.scissor),ot=T.scissorTest,E.viewport(j),E.scissor(Nt),E.setScissorTest(ot),K=-1;return}else if(wt.__webglFramebuffer===void 0)J.setupRenderTarget(T);else if(wt.__hasExternalTextures)J.rebindTextures(T,Y.get(T.texture).__webglTexture,Y.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ae=T.depthTexture;if(wt.__boundDepthTexture!==ae){if(ae!==null&&Y.has(ae)&&(T.width!==ae.image.width||T.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(T)}}const Bt=T.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Rt=!0);const Vt=Y.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Vt[O])?V=Vt[O][$]:V=Vt[O],W=!0):T.samples>0&&J.useMultisampledRTT(T)===!1?V=Y.get(T).__webglMultisampledFramebuffer:Array.isArray(Vt)?V=Vt[$]:V=Vt,j.copy(T.viewport),Nt.copy(T.scissor),ot=T.scissorTest}else j.copy(gt).multiplyScalar(q).floor(),Nt.copy(Ht).multiplyScalar(q).floor(),ot=me;if($!==0&&(V=z),E.bindFramebuffer(U.FRAMEBUFFER,V)&&E.drawBuffers(T,V),E.viewport(j),E.scissor(Nt),E.setScissorTest(ot),W){const wt=Y.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,wt.__webglTexture,$)}else if(Rt){const wt=O;for(let Bt=0;Bt<T.textures.length;Bt++){const Vt=Y.get(T.textures[Bt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Bt,Vt.__webglTexture,$,wt)}}else if(T!==null&&$!==0){const wt=Y.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,wt.__webglTexture,$)}K=-1};function Xc(T){const O=Y.get(T);return(O.__readFormat!==T.format||O.__readType!==T.type)&&(O.__readFormat=T.format,O.__readType=T.type,O.__formatReadable=C.textureFormatReadable(T.format),O.__typeReadable=C.textureTypeReadable(T.type)),O}this.readRenderTargetPixels=function(T,O,$,V,W,Rt,Ft,wt=0){if(!(T&&T.isWebGLRenderTarget)){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(Bt=Bt[Ft]),Bt){E.bindFramebuffer(U.FRAMEBUFFER,Bt);try{const Vt=T.textures[wt],ae=Vt.format,fe=Vt.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+wt);const kt=Xc(Vt);if(kt.__formatReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-V&&$>=0&&$<=T.height-W&&U.readPixels(O,$,V,W,St.convert(ae),St.convert(fe),Rt)}finally{const Vt=et!==null?Y.get(et).__webglFramebuffer:null;E.bindFramebuffer(U.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(T,O,$,V,W,Rt,Ft,wt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=Y.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ft!==void 0&&(Bt=Bt[Ft]),Bt)if(O>=0&&O<=T.width-V&&$>=0&&$<=T.height-W){E.bindFramebuffer(U.FRAMEBUFFER,Bt);const Vt=T.textures[wt],ae=Vt.format,fe=Vt.type;T.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+wt);const kt=Xc(Vt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ye=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.bufferData(U.PIXEL_PACK_BUFFER,Rt.byteLength,U.STREAM_READ),U.readPixels(O,$,V,W,St.convert(ae),St.convert(fe),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Be=et!==null?Y.get(et).__webglFramebuffer:null;E.bindFramebuffer(U.FRAMEBUFFER,Be);const Ie=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await wd(U,Ie,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Rt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ye),U.deleteSync(Ie),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,O=null,$=0){const V=Math.pow(2,-$),W=Math.floor(T.image.width*V),Rt=Math.floor(T.image.height*V),Ft=O!==null?O.x:0,wt=O!==null?O.y:0;J.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,Ft,wt,W,Rt),E.unbindTexture()},this.copyTextureToTexture=function(T,O,$=null,V=null,W=0,Rt=0){let Ft,wt,Bt,Vt,ae,fe,kt,ye,Be;const Ie=T.isCompressedTexture?T.mipmaps[Rt]:T.image;if($!==null)Ft=$.max.x-$.min.x,wt=$.max.y-$.min.y,Bt=$.isBox3?$.max.z-$.min.z:1,Vt=$.min.x,ae=$.min.y,fe=$.isBox3?$.min.z:0;else{const Fe=Math.pow(2,-W);Ft=Math.floor(Ie.width*Fe),wt=Math.floor(Ie.height*Fe),T.isDataArrayTexture?Bt=Ie.depth:T.isData3DTexture?Bt=Math.floor(Ie.depth*Fe):Bt=1,Vt=0,ae=0,fe=0}V!==null?(kt=V.x,ye=V.y,Be=V.z):(kt=0,ye=0,Be=0);const Te=St.convert(O.format),Qe=St.convert(O.type);let Ot;O.isData3DTexture?(J.setTexture3D(O,0),Ot=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(J.setTexture2DArray(O,0),Ot=U.TEXTURE_2D_ARRAY):(J.setTexture2D(O,0),Ot=U.TEXTURE_2D),E.activeTexture(U.TEXTURE0),E.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),E.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),E.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const rn=E.getParameter(U.UNPACK_ROW_LENGTH),xe=E.getParameter(U.UNPACK_IMAGE_HEIGHT),En=E.getParameter(U.UNPACK_SKIP_PIXELS),Wn=E.getParameter(U.UNPACK_SKIP_ROWS),vi=E.getParameter(U.UNPACK_SKIP_IMAGES);E.pixelStorei(U.UNPACK_ROW_LENGTH,Ie.width),E.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ie.height),E.pixelStorei(U.UNPACK_SKIP_PIXELS,Vt),E.pixelStorei(U.UNPACK_SKIP_ROWS,ae),E.pixelStorei(U.UNPACK_SKIP_IMAGES,fe);const es=T.isDataArrayTexture||T.isData3DTexture,we=O.isDataArrayTexture||O.isData3DTexture;if(T.isDepthTexture){const Fe=Y.get(T),yi=Y.get(O),Ce=Y.get(Fe.__renderTarget),Mi=Y.get(yi.__renderTarget);E.bindFramebuffer(U.READ_FRAMEBUFFER,Ce.__webglFramebuffer),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let ns=0;ns<Bt;ns++)es&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Y.get(T).__webglTexture,W,fe+ns),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Y.get(O).__webglTexture,Rt,Be+ns)),U.blitFramebuffer(Vt,ae,Ft,wt,kt,ye,Ft,wt,U.DEPTH_BUFFER_BIT,U.NEAREST);E.bindFramebuffer(U.READ_FRAMEBUFFER,null),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||Y.has(T)){const Fe=Y.get(T),yi=Y.get(O);E.bindFramebuffer(U.READ_FRAMEBUFFER,P),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,D);for(let Ce=0;Ce<Bt;Ce++)es?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Fe.__webglTexture,W,fe+Ce):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Fe.__webglTexture,W),we?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,yi.__webglTexture,Rt,Be+Ce):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,yi.__webglTexture,Rt),W!==0?U.blitFramebuffer(Vt,ae,Ft,wt,kt,ye,Ft,wt,U.COLOR_BUFFER_BIT,U.NEAREST):we?U.copyTexSubImage3D(Ot,Rt,kt,ye,Be+Ce,Vt,ae,Ft,wt):U.copyTexSubImage2D(Ot,Rt,kt,ye,Vt,ae,Ft,wt);E.bindFramebuffer(U.READ_FRAMEBUFFER,null),E.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else we?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Ot,Rt,kt,ye,Be,Ft,wt,Bt,Te,Qe,Ie.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Ot,Rt,kt,ye,Be,Ft,wt,Bt,Te,Ie.data):U.texSubImage3D(Ot,Rt,kt,ye,Be,Ft,wt,Bt,Te,Qe,Ie):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Rt,kt,ye,Ft,wt,Te,Qe,Ie.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Rt,kt,ye,Ie.width,Ie.height,Te,Ie.data):U.texSubImage2D(U.TEXTURE_2D,Rt,kt,ye,Ft,wt,Te,Qe,Ie);E.pixelStorei(U.UNPACK_ROW_LENGTH,rn),E.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xe),E.pixelStorei(U.UNPACK_SKIP_PIXELS,En),E.pixelStorei(U.UNPACK_SKIP_ROWS,Wn),E.pixelStorei(U.UNPACK_SKIP_IMAGES,vi),Rt===0&&O.generateMipmaps&&U.generateMipmap(Ot),E.unbindTexture()},this.initRenderTarget=function(T){Y.get(T).__webglFramebuffer===void 0&&J.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?J.setTextureCube(T,0):T.isData3DTexture?J.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?J.setTexture2DArray(T,0):J.setTexture2D(T,0),E.unbindTexture()},this.resetState=function(){X=0,H=0,et=null,E.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}const ru={type:"change"},mc={type:"start"},Sf={type:"end"},la=new br,au=new ui,av=Math.cos(70*Wa.DEG2RAD),Ge=new I,dn=2*Math.PI,Ee={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},zo=1e-6;class ov extends o0{constructor(t,e=null){super(t,e),this.state=Ee.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ss.ROTATE,MIDDLE:Ss.DOLLY,RIGHT:Ss.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Pn,this._lastTargetPosition=new I,this._quat=new Pn().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Uh,this._sphericalDelta=new Uh,this._scale=1,this._panOffset=new I,this._rotateStart=new at,this._rotateEnd=new at,this._rotateDelta=new at,this._panStart=new at,this._panEnd=new at,this._panDelta=new at,this._dollyStart=new at,this._dollyEnd=new at,this._dollyDelta=new at,this._dollyDirection=new I,this._mouse=new at,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cv.bind(this),this._onPointerDown=lv.bind(this),this._onPointerUp=hv.bind(this),this._onContextMenu=xv.bind(this),this._onMouseWheel=dv.bind(this),this._onKeyDown=pv.bind(this),this._onTouchStart=mv.bind(this),this._onTouchMove=gv.bind(this),this._onMouseDown=uv.bind(this),this._onMouseMove=fv.bind(this),this._interceptControlDown=_v.bind(this),this._interceptControlUp=vv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Ee.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ru),this.update(),this.state=Ee.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const e=this.object.position;Ge.copy(e).sub(this.target),Ge.applyQuaternion(this._quat),this._spherical.setFromVector3(Ge),this.autoRotate&&this.state===Ee.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=dn:i>Math.PI&&(i-=dn),s<-Math.PI?s+=dn:s>Math.PI&&(s-=dn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ge.setFromSpherical(this._spherical),Ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Ge.length();a=this._clampDistance(o*this._scale);const c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){const o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;const l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(la.origin.copy(this.object.position),la.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(la.direction))<av?this.object.lookAt(this.target):(au.setFromNormalAndCoplanarPoint(this.object.up,this.target),la.intersectPlane(au,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>zo||8*(1-this._lastQuaternion.dot(this.object.quaternion))>zo||this._lastTargetPosition.distanceToSquared(this.target)>zo?(this.dispatchEvent(ru),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?dn/60*this.autoRotateSpeed*t:dn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ge.setFromMatrixColumn(e,0),Ge.multiplyScalar(-t),this._panOffset.add(Ge)}_panUp(t,e){this.screenSpacePanning===!0?Ge.setFromMatrixColumn(e,1):(Ge.setFromMatrixColumn(e,0),Ge.crossVectors(this.object.up,Ge)),Ge.multiplyScalar(t),this._panOffset.add(Ge)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Ge.copy(s).sub(this.target);let r=Ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,a=i.width,o=i.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-dn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(dn*this._rotateDelta.x/e.clientHeight),this._rotateUp(dn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new at,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function lv(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function cv(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function hv(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sf),this.state=Ee.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function uv(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Ss.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Ee.DOLLY;break;case Ss.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ee.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ee.ROTATE}break;case Ss.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Ee.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Ee.PAN}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(mc)}function fv(n){switch(this.state){case Ee.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Ee.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Ee.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function dv(n){this.enabled===!1||this.enableZoom===!1||this.state!==Ee.NONE||(n.preventDefault(),this.dispatchEvent(mc),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Sf))}function pv(n){this.enabled!==!1&&this._handleKeyDown(n)}function mv(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ys.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Ee.TOUCH_ROTATE;break;case ys.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Ee.TOUCH_PAN;break;default:this.state=Ee.NONE}break;case 2:switch(this.touches.TWO){case ys.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Ee.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Ee.TOUCH_DOLLY_ROTATE;break;default:this.state=Ee.NONE}break;default:this.state=Ee.NONE}this.state!==Ee.NONE&&this.dispatchEvent(mc)}function gv(n){switch(this._trackPointer(n),this.state){case Ee.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Ee.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Ee.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Ee.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Ee.NONE}}function xv(n){this.enabled!==!1&&n.preventDefault()}function _v(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vv(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class gc extends Ne{constructor(t=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new at(.5,.5),this.rotation2D=0,this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this.center=t.center,this.rotation2D=t.rotation2D,this}}const xs=new I,ou=new he,lu=new he,cu=new I,hu=new I;class yv{constructor(t={}){const e=this;let i,s,r,a;const o={objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c,this.sortObjects=!0,this.getSize=function(){return{width:i,height:s}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),ou.copy(_.matrixWorldInverse),lu.multiplyMatrices(_.projectionMatrix,ou),u(g,g,_),this.sortObjects&&f(g)},this.setSize=function(g,_){i=g,s=_,r=i/2,a=s/2,c.style.width=g+"px",c.style.height=_+"px"};function l(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)l(g.children[_])}function u(g,_,m){if(g.visible===!1){l(g);return}if(g.isCSS2DObject){xs.setFromMatrixPosition(g.matrixWorld),xs.applyMatrix4(lu);const p=xs.z>=-1&&xs.z<=1&&g.layers.test(m.layers)===!0,v=g.element;if(v.style.display=p===!0?"":"none",p===!0){g.onBeforeRender(e,_,m);const x=100*g.center.x,M=100*g.center.y;v.style.transformOrigin=`${x}% ${M}%`;const b=-g.rotation2D,A=xs.x*r+r,y=-xs.y*a+a;v.style.transform=`translate(${-x}%, ${-M}%) translate(${A}px, ${y}px) rotate(${b}rad)`,v.parentNode!==c&&c.appendChild(v),g.onAfterRender(e,_,m)}const S={distanceToCameraSquared:d(m,g)};o.objects.set(g,S)}for(let p=0,v=g.children.length;p<v;p++)u(g.children[p],_,m)}function d(g,_){return cu.setFromMatrixPosition(g.matrixWorld),hu.setFromMatrixPosition(_.matrixWorld),cu.distanceToSquared(hu)}function h(g){const _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function f(g){const _=h(g).sort(function(p,v){if(p.renderOrder!==v.renderOrder)return v.renderOrder-p.renderOrder;const S=o.objects.get(p).distanceToCameraSquared,x=o.objects.get(v).distanceToCameraSquared;return S-x}),m=_.length;for(let p=0,v=_.length;p<v;p++)_[p].element.style.zIndex=m-p}}}const Sa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Us{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Mv=new $a(-1,1,1,-1,0,1);class Sv extends Ae{constructor(){super(),this.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jt([0,2,0,0,2,0],2))}}const bv=new Sv;class xc{constructor(t){this._mesh=new Zt(bv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Mv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class bf extends Us{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ke?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=_r.clone(t.uniforms),this.material=new Ke({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new xc(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class uu extends Us{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Ev extends Us{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class wv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new at);this._width=i.width,this._height=i.height,e=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:gn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new bf(Sa),this.copyPass.material.blending=Jn,this.timer=new s0}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}uu!==void 0&&(a instanceof uu?i=!0:a instanceof Ev&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Tv extends Us{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Pt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Av={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Is extends Us{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new Pt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,a,{type:gn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new un(r,a,{type:gn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const h=new un(r,a,{type:gn,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+u,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),r=Math.round(r/2),a=Math.round(a/2)}const o=Av;this.highPassUniforms=_r.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ke({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new at(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=_r.clone(Sa.uniforms),this.blendMaterial=new Ke({uniforms:this.copyUniforms,vertexShader:Sa.vertexShader,fragmentShader:Sa.fragmentShader,premultipliedAlpha:!0,blending:gi,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Pt,this._oldClearAlpha=1,this._basic=new te,this._fsQuad=new xc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Is.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Is.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[],i=t/3;for(let a=0;a<t;a++)e.push(.39894*Math.exp(-.5*a*a/(i*i))/i);const s=[],r=[];for(let a=1;a<t;a+=2){const o=e[a],c=a+1<t?e[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new Ke({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ke({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Is.BlurDirectionX=new at(1,0);Is.BlurDirectionY=new at(0,1);const ca={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Rv extends Us{constructor(){super(),this.isOutputPass=!0,this.uniforms=_r.clone(ca.uniforms),this.material=new uf({name:ca.name,uniforms:this.uniforms,vertexShader:ca.vertexShader,fragmentShader:ca.fragmentShader}),this._fsQuad=new xc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},pe.getTransfer(this._outputColorSpace)===Me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Xl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Yl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ga?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$l?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===ql&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const fu=new I,Cv=new Pn,du=new I;class Pv extends Ne{constructor(t=document.createElement("div")){super(),this.isCSS3DObject=!0,this.element=t,this.element.style.position="absolute",this.element.style.pointerEvents="auto",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.addEventListener("removed",function(){this.traverse(function(e){e.element&&e.element instanceof e.element.ownerDocument.defaultView.Element&&e.element.parentNode!==null&&e.element.remove()})})}copy(t,e){return super.copy(t,e),this.element=t.element.cloneNode(!0),this}}const qn=new he,Iv=new he;class Lv{constructor(t={}){const e=this;let i,s,r,a;const o={camera:{style:""},objects:new WeakMap},c=t.element!==void 0?t.element:document.createElement("div");c.style.overflow="hidden",this.domElement=c;const l=document.createElement("div");l.style.transformOrigin="0 0",l.style.pointerEvents="none",c.appendChild(l);const u=document.createElement("div");u.style.transformStyle="preserve-3d",l.appendChild(u),this.getSize=function(){return{width:i,height:s}},this.render=function(m,p){const v=p.projectionMatrix.elements[5]*a;p.view&&p.view.enabled?(l.style.transform=`translate( ${-p.view.offsetX*(i/p.view.width)}px, ${-p.view.offsetY*(s/p.view.height)}px )`,l.style.transform+=`scale( ${p.view.fullWidth/p.view.width}, ${p.view.fullHeight/p.view.height} )`):l.style.transform="",m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld();let S,x;p.isOrthographicCamera&&(S=-(p.right+p.left)/2,x=(p.top+p.bottom)/2);const M=p.view&&p.view.enabled?p.view.height/p.view.fullHeight:1,b=p.isOrthographicCamera?`scale( ${M} )scale(`+v+")translate("+d(S)+"px,"+d(x)+"px)"+h(p.matrixWorldInverse):`scale( ${M} )translateZ(`+v+"px)"+h(p.matrixWorldInverse),y=(p.isPerspectiveCamera?"perspective("+v+"px) ":"")+b+"translate("+r+"px,"+a+"px)";o.camera.style!==y&&(u.style.transform=y,o.camera.style=y),_(m,m,p)},this.setSize=function(m,p){i=m,s=p,r=i/2,a=s/2,c.style.width=m+"px",c.style.height=p+"px",l.style.width=m+"px",l.style.height=p+"px",u.style.width=m+"px",u.style.height=p+"px"};function d(m){return Math.abs(m)<1e-10?0:m}function h(m){const p=m.elements;return"matrix3d("+d(p[0])+","+d(-p[1])+","+d(p[2])+","+d(p[3])+","+d(p[4])+","+d(-p[5])+","+d(p[6])+","+d(p[7])+","+d(p[8])+","+d(-p[9])+","+d(p[10])+","+d(p[11])+","+d(p[12])+","+d(-p[13])+","+d(p[14])+","+d(p[15])+")"}function f(m){const p=m.elements;return"translate(-50%,-50%)"+("matrix3d("+d(p[0])+","+d(p[1])+","+d(p[2])+","+d(p[3])+","+d(-p[4])+","+d(-p[5])+","+d(-p[6])+","+d(-p[7])+","+d(p[8])+","+d(p[9])+","+d(p[10])+","+d(p[11])+","+d(p[12])+","+d(p[13])+","+d(p[14])+","+d(p[15])+")")}function g(m){m.isCSS3DObject&&(m.element.style.display="none");for(let p=0,v=m.children.length;p<v;p++)g(m.children[p])}function _(m,p,v,S){if(m.visible===!1){g(m);return}if(m.isCSS3DObject){const x=m.layers.test(v.layers)===!0,M=m.element;if(M.style.display=x===!0?"":"none",x===!0){m.onBeforeRender(e,p,v);let b;m.isCSS3DSprite?(qn.copy(v.matrixWorldInverse),qn.transpose(),m.rotation2D!==0&&qn.multiply(Iv.makeRotationZ(m.rotation2D)),m.matrixWorld.decompose(fu,Cv,du),qn.setPosition(fu),qn.scale(du),qn.elements[3]=0,qn.elements[7]=0,qn.elements[11]=0,qn.elements[15]=1,b=f(qn)):b=f(m.matrixWorld);const A=o.objects.get(m);if(A===void 0||A.style!==b){M.style.transform=b;const y={style:b};o.objects.set(m,y)}M.parentNode!==u&&u.appendChild(M),m.onAfterRender(e,p,v)}}for(let x=0,M=m.children.length;x<M;x++)_(m.children[x],p,v)}}}const _c={title:"Sidatreya's Office",subtitle:"Live view of your agents at work"},Os=[{id:"b1",name:"Server & Utilities",level:-1,label:"B1"},{id:"trading",name:"Trading Room",level:0,label:"01"},{id:"admin",name:"Admin Block",level:1,label:"02"},{id:"studio",name:"Creative Studio",level:2,label:"03"},{id:"property",name:"Property Management",level:3,label:"04"}],zn=n=>({status:"idle",task:"Waiting for first check-in",tasks:[n.role],logs:[`${n.name} checked in`],...n}),Ve=[zn({id:"pro-trader",name:"Pro Trader",role:"Markets & trading research",color:"#34d399",floor:"trading",desk:{x:-1.6,z:-2.4},tasks:["Scanning NIFTY 50 for breakout setups","Watching BTC/USDT on the 15m chart","Reworking BTC and ASTER scenario charts"],logs:["NIFTY 50 tested resistance — flagged for review","BTC/USDT funding flipped positive","Added 3 notes to the trading KB"]}),zn({id:"gk",name:"GK",role:"Coordinator",color:"#a78bfa",floor:"admin",desk:{x:1.4,z:1.6,wide:!0},tasks:["Coordinating the team and routing new requests","Preparing the morning summary for Sidatreya"],logs:['Assigned "market scan" to Pro Trader',"Re-prioritised the task queue","Handed a design brief to Furniture Designer"]}),zn({id:"linkedin",name:"Linkedin",role:"Content & engagement",color:"#fbbf24",floor:"admin",desk:{x:-9.6,z:-3.2},tasks:["Drafting a post on India-first GTM","Replying to comments on the latest post"],logs:["Drafted a hook for the India-first GTM post","Replied to 6 comments on the latest post"]}),zn({id:"whatsapp-manager",name:"Whatsapp Manager",role:"WhatsApp tasks & reminders",color:"#84cc16",floor:"admin",desk:{x:-4.7,z:-3.9},tasks:["Sorting new WhatsApp task requests","Sending reminder digests"],logs:["Logged 4 new tasks from WhatsApp","Sent the evening reminder digest"]}),zn({id:"developer",name:"Developer",role:"Builds & integrations",color:"#fb923c",floor:"admin",desk:{x:4.7,z:-3.9},tasks:["Writing the build brief","Fixing a deployment issue"],logs:["Pushed a fix to main","Build brief is ready"]}),zn({id:"developer-whatsapp",name:"Developer Whatsapp Manager",role:"WhatsApp task-manager development",color:"#ef4444",floor:"admin",desk:{x:9.7,z:-3.2},tasks:["Setting up the WhatsApp task-manager service","Testing message parsing"],logs:["Created the whatsapp-task-manager venv","Webhook test passed"]}),zn({id:"grok-bot",name:"Grok Bot",role:"Architect — drafting, designing & rendering",color:"#38bdf8",floor:"studio",desk:{x:-10.2,z:-2.6},tasks:["Revising the site zoning diagram","Rendering the house elevations","Drafting the floor plan"],logs:["Produced a final zoning diagram","Rendered elevation option B","Updated the drafting set"]}),zn({id:"furniture-designer",name:"Furniture Designer",role:"Product & furniture design",color:"#f472b6",floor:"studio",desk:{x:-3.6,z:-3.3},tasks:["Rendering design options for the study built-in","Sketching a walnut lounge chair"],logs:["Rendered walnut lounge chair v3","Exported moodboard: Japandi living room"]}),zn({id:"landscape-designer",name:"Landscape Designer",role:"Landscape & garden design",color:"#14b8a6",floor:"studio",desk:{x:2,z:-3.3},tasks:["Planting plan for the front garden","Rendering the courtyard landscape"],logs:["Picked native shrubs for the boundary","Rendered courtyard option A"]}),zn({id:"boq",name:"BOQ",role:"BOQ & quantities — the math/counting desk",color:"#d4a373",floor:"studio",desk:{x:7.6,z:-3.3},kind:"station",tasks:["Counting quantities for the house plan","Pricing the BOQ"],logs:["BOQ v1 totals updated","Steel quantities re-checked"]}),zn({id:"6c94624b-cff0-445d-acf3-76a7780c90f3",name:"Property Manager",role:"Property & Land Intelligence — department head",color:"#d946ef",floor:"property",desk:{x:-11.6,z:-6.6},tasks:["Reviewing flagged deeds","Planning the property department floor"],logs:["Sent the floor brief to the architect","Reviewed 12 flagged parcels (example)"]})],Dv=["Waiting for the next task","Standing by","No assigned task yet"],Ai=n=>n[Math.floor(Math.random()*n.length)];function Nv({intervalMs:n=3200,historySize:t=60}={}){const e=new Set,i=[],s=new Map(Ve.map(u=>[u.id,{status:u.status,task:u.task,progress:u.status==="working"?.35:0}]));let r=null;const a=u=>{i.push(u),i.length>t&&i.shift(),e.forEach(d=>d(u))},o=Date.now(),c=[["gk","Office opened — 5 agents online"],["pro-trader",Ai(Ve[1].logs)],["gk",Ve[0].logs[0]],["linkedin",Ai(Ve[3].logs)],["grok-bot",Ai(Ve[2].logs)],["furniture-designer",Ai(Ve[4].logs)],["gk",Ve[0].logs[2]]];c.forEach(([u,d],h)=>{i.push({ts:new Date(o-(c.length-h)*47e3),agentId:u,type:"log",message:d})});function l(){const u=Ai(Ve),d=s.get(u.id),h=[...s.values()].filter(g=>g.status==="working").length,f=Math.random();if(d.status==="idle"&&(f<.45||h<1)){d.status="working",d.task=Ai(u.tasks),d.progress=.05,a({ts:new Date,agentId:u.id,type:"status",status:"working",task:d.task,message:`Started: ${d.task}`});return}if(d.status==="working"&&(d.progress>.9||f<.18&&h>1)){const g=d.task;d.status="idle",d.task=Ai(Dv),d.progress=0,a({ts:new Date,agentId:u.id,type:"status",status:"idle",task:d.task,message:`Finished: ${g}`});return}d.status==="working"&&(d.progress=Math.min(1,d.progress+.15+Math.random()*.2)),a({ts:new Date,agentId:u.id,type:"log",message:Ai(u.logs)})}return{history:i,getState:u=>s.get(u),subscribe(u){return e.add(u),()=>e.delete(u)},start(){r||(r=setInterval(l,n))},stop(){clearInterval(r),r=null}}}const pu="Waiting for first check-in";function Uv({url:n="./status.json",intervalMs:t=15e3}={}){const e=new Set,i=[],s=new Map(Ve.map(d=>[d.id,{status:"idle",task:pu,progress:0,lastActive:null}])),r=new Set(Ve.map(d=>d.id));let a=null,o=null;const c={history:i,updatedAt:null,error:null,getState:d=>s.get(d),subscribe(d){return e.add(d),()=>e.delete(d)},start(){a||(l(),a=setInterval(l,t),document.addEventListener("visibilitychange",()=>document.visibilityState==="visible"&&l()))},stop(){clearInterval(a),a=null},refresh:()=>l()};async function l(){try{const d=n.includes("?")?"&":"?",h=await fetch(`${n}${d}t=${Date.now()}`,{cache:"no-store"});if(!h.ok)throw new Error(`HTTP ${h.status}`);const f=await h.json();if(c.error=null,f.updatedAt===o){e.forEach(g=>g({type:"heartbeat"}));return}o=f.updatedAt,u(f),e.forEach(g=>g({type:"sync"}))}catch(d){c.error=String(d.message||d),console.warn("[office] status.json poll failed:",c.error),e.forEach(h=>h({type:"error",error:c.error}))}}function u(d){const h=d.updatedAt?new Date(d.updatedAt):null;c.updatedAt=h&&!isNaN(h)?h:null;for(const g of Array.isArray(d.agents)?d.agents:[]){if(!r.has(g.id))continue;const _=g.status==="working"?"working":"idle",m=Number(g.progress);s.set(g.id,{status:_,task:typeof g.task=="string"&&g.task.trim()?g.task:pu,progress:Number.isFinite(m)?Math.max(0,Math.min(1,m)):0,hasProgress:Number.isFinite(m),detail:typeof g.detail=="string"&&g.detail.trim()?g.detail.trim():null,source:g.source==="reported"?"reported":"inferred",reportedAt:g.reportedAt?new Date(g.reportedAt):null,lastActive:g.lastActive?new Date(g.lastActive):null})}const f=(Array.isArray(d.events)?d.events:[]).filter(g=>g&&r.has(g.agentId)&&g.text).map(g=>({ts:new Date(g.time),agentId:g.agentId,type:"log",message:String(g.text)})).filter(g=>!isNaN(g.ts)).sort((g,_)=>g.ts-_.ts).slice(-40);i.splice(0,i.length,...f)}return c}function wr(n,t,e=[1,1]){const i=document.createElement("canvas");i.width=i.height=n,t(i.getContext("2d"),n);const s=new _n(i);return s.colorSpace=Pe,s.wrapS=s.wrapT=Ii,s.repeat.set(...e),s.anisotropy=8,s}let mu=12345;const be=()=>(mu=mu*16807%2147483647)/2147483647;function gu(n="#6b3f24",t="#3e2213",e="#8a5532"){return wr(512,(i,s)=>{i.fillStyle=n,i.fillRect(0,0,s,s);for(let r=0;r<140;r++){const a=be()*s,o=2+be()*6,c=.004+be()*.01;i.strokeStyle=be()<.5?t:e,i.globalAlpha=.08+be()*.22,i.lineWidth=.6+be()*2.2,i.beginPath();for(let l=0;l<=s;l+=8)i.lineTo(l,a+Math.sin(l*c+r)*o+Math.sin(l*c*3.1)*o*.3);i.stroke()}i.globalAlpha=1})}function Ov(n){return wr(1024,(t,e)=>{const i=t.createLinearGradient(0,0,e,e);i.addColorStop(0,"#1e1c3a"),i.addColorStop(1,"#191832"),t.fillStyle=i,t.fillRect(0,0,e,e);for(let s=0;s<2600;s++)t.fillStyle=`rgba(255,255,255,${be()*.035})`,t.fillRect(be()*e,be()*e,2,2);for(let s=0;s<26;s++){t.strokeStyle=be()<.7?"rgba(190,180,255,0.16)":"rgba(255,255,255,0.22)",t.lineWidth=.6+be()*1.8,t.beginPath();let r=be()*e,a=be()*e;t.moveTo(r,a);for(let o=0;o<9;o++)r+=(be()-.3)*160,a+=(be()-.5)*120,t.lineTo(r,a);t.stroke()}t.strokeStyle="rgba(8,8,20,0.75)",t.lineWidth=3;for(const s of[0,e/2])t.beginPath(),t.moveTo(s,0),t.lineTo(s,e),t.stroke(),t.beginPath(),t.moveTo(0,s),t.lineTo(e,s),t.stroke()},n)}function Fv(){return wr(512,(n,t)=>{n.fillStyle="#eceaf2",n.fillRect(0,0,t,t);for(let e=0;e<18;e++){n.strokeStyle=`rgba(120,115,150,${.1+be()*.2})`,n.lineWidth=.5+be()*1.5,n.beginPath();let i=be()*t,s=be()*t;n.moveTo(i,s);for(let r=0;r<7;r++)i+=(be()-.4)*120,s+=(be()-.5)*90,n.lineTo(i,s);n.stroke()}})}function Ks(n,t=[4,4]){return wr(256,(e,i)=>{e.fillStyle=n,e.fillRect(0,0,i,i);for(let s=0;s<i;s+=3)e.fillStyle=`rgba(0,0,0,${.05+be()*.05})`,e.fillRect(0,s,i,1);for(let s=0;s<i;s+=3)e.fillStyle=`rgba(255,255,255,${.02+be()*.04})`,e.fillRect(s,0,1,i)},t)}function zv(n=[5,3]){return wr(1024,(t,e)=>{const s=e/8,r=["#8a5a36","#9a6840","#7c4f2e","#a3714a","#8f5f3a","#835532"];for(let a=0;a<8;a++){let o=-be()*e*.5;for(;o<e;){const c=e*(.45+be()*.4);t.fillStyle=r[Math.floor(be()*r.length)],t.fillRect(o,a*s,c,s);for(let l=0;l<14;l++){const u=a*s+be()*s;t.strokeStyle=be()<.6?"rgba(60,32,16,0.35)":"rgba(210,160,110,0.25)",t.lineWidth=.6+be()*1.6,t.beginPath();for(let d=o;d<=o+c;d+=12)t.lineTo(d,u+Math.sin(d*.01+l)*2.5);t.stroke()}t.fillStyle="rgba(30,16,8,0.85)",t.fillRect(o,a*s,3,s),o+=c}t.fillStyle="rgba(25,12,6,0.9)",t.fillRect(0,a*s,e,4)}},n)}function Bv(){const n=gu(),t=gu("#b08356","#7a5432","#cfa577");return{walnut:new lt({map:n,roughness:.42,metalness:0}),oak:new lt({map:t,roughness:.5}),floor:new lt({map:zv([4,3]),roughness:.38,metalness:0,envMapIntensity:.9}),marbleFloor:new lt({map:Ov([7.5,4.5]),roughness:.34,metalness:.05,envMapIntensity:.8}),marbleWhite:new lt({map:Fv(),roughness:.15,metalness:0}),plinth:new Ci({color:15986922,roughness:.32,clearcoat:.7,clearcoatRoughness:.25}),shell:new Ci({color:16184302,roughness:.26,clearcoat:.9,clearcoatRoughness:.18,side:Ue}),bronze:new lt({color:14275787,roughness:.3,metalness:.55}),bullBronze:new lt({color:8015398,roughness:.36,metalness:1}),brass:new lt({color:13214247,roughness:.28,metalness:1}),blackMetal:new lt({color:1776420,roughness:.4,metalness:.7}),whiteMatte:new lt({color:15790070,roughness:.55}),ceramic:new lt({color:16052974,roughness:.22}),terracotta:new lt({color:11817770,roughness:.75}),graphite:new lt({color:1842218,roughness:.3,metalness:.6}),velvetPlum:new lt({map:Ks("#4b2a6b"),roughness:.92}),velvetTeal:new lt({map:Ks("#1f5560"),roughness:.92}),linen:new lt({map:Ks("#d8cfc0"),roughness:.95}),leather:new lt({color:7027234,roughness:.45,metalness:.05}),rugIndigo:new lt({map:Ks("#2b2a62",[8,8]),roughness:1}),rugSand:new lt({map:Ks("#5a4b6e",[8,8]),roughness:1}),leaf:new lt({color:3112266,roughness:.55,side:Ue}),leaf2:new lt({color:4168282,roughness:.55,side:Ue}),glass:new Ci({color:13623534,transparent:!0,opacity:.12,roughness:.05,metalness:0,envMapIntensity:.5,side:Ue,depthWrite:!1})}}function kv(n){const t=document.createElement("canvas");t.width=1024,t.height=512;const e=t.getContext("2d"),i=e.createLinearGradient(0,0,0,512);i.addColorStop(0,"#3b4f7e"),i.addColorStop(.4,"#8a93b8"),i.addColorStop(.5,"#ffc89a"),i.addColorStop(.55,"#7a6a72"),i.addColorStop(1,"#2a2622"),e.fillStyle=i,e.fillRect(0,0,1024,512);const s=(c,l,u,d)=>{const h=e.createRadialGradient(c,l,0,c,l,u);h.addColorStop(0,d),h.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=h,e.fillRect(c-u,l-u,u*2,u*2)};s(330,225,22,"rgba(255,240,220,0.4)"),s(330,240,200,"rgba(255,140,100,0.22)"),s(800,300,160,"rgba(255,170,90,0.35)"),s(600,330,120,"rgba(255,120,200,0.25)");const r=new _n(t);r.mapping=ga,r.colorSpace=Pe;const a=new Ol(n),o=a.fromEquirectangular(r).texture;return a.dispose(),o}const ha=160,Zs=-1.8;function Hv(n,t={}){const e=h=>new Pt(h),i={uTime:{value:0},uMoon:{value:new I(-62,12.5,-152)},uHorizonY:{value:.4},cTop:{value:e("#1a2747")},cMid:{value:e("#45507e")},cHor:{value:e("#f0a070")},cGlow:{value:e("#ffc08a")},cWater:{value:e("#0b1630")},cWater2:{value:e("#26365a")},cHaze:{value:e("#7a7096")},cHi:{value:e("#ffd2a0")}},s="varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",r=new Zt(new Xe(ha,64,32),new Ke({side:hn,depthWrite:!1,uniforms:i,vertexShader:s,fragmentShader:`
        uniform float uTime; uniform vec3 uMoon; uniform float uHorizonY;
        uniform vec3 cTop, cMid, cHor, cGlow, cHaze, cWater;
        varying vec3 vW;
        float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
        void main(){
          vec3 o = vec3(0.0, uHorizonY, 0.0);
          vec3 dir = normalize(vW - o);
          vec3 md = normalize(uMoon - o);
          float y = vW.y - uHorizonY;
          float az = max(dot(normalize(dir.xz), normalize(md.xz)), 0.0);
          vec3 c;
          if (y > 0.0) {
            float h = clamp(y / 32.0, 0.0, 1.0);
            c = mix(cHor, cMid, smoothstep(0.0, 0.12, h));
            c = mix(c, cTop, smoothstep(0.1, 0.65, h));
            c += cGlow * pow(az, 5.0) * exp(-h * 10.0) * 0.8;
            float m = dot(dir, md);
            c += vec3(1.0, 0.95, 0.86) * smoothstep(0.99962, 0.99972, m) * 1.05;
            c += vec3(1.0, 0.82, 0.9) * pow(max(m, 0.0), 2500.0) * 0.2 + cGlow * pow(max(m, 0.0), 60.0) * 0.14;
            vec2 sp = floor(vec2(atan(dir.z, dir.x) * 700.0, dir.y * 700.0));
            float s = hash(sp);
            float tw = 0.55 + 0.45 * sin(uTime * 1.7 + s * 60.0);
            c += vec3(step(0.9975, s) * smoothstep(0.04, 0.2, h) * tw * 0.85);
          } else {
            float d = clamp(-y / 2.2, 0.0, 1.0);
            c = mix(cHaze, cWater, d);
            float streak = pow(az, 2500.0) * (0.6 + 0.4 * sin(vW.y * 12.0 + uTime * 1.5));
            c += vec3(1.0, 0.85, 0.7) * streak * 0.45;
          }
          gl_FragColor = vec4(c, 1.0);
        }`}));r.position.y=Zs,r.renderOrder=-10,n.add(r);const a=new Zt((()=>{const h=new Ds;h.absarc(0,0,ha-.6,0,Math.PI*2,!1);const f=new Ll,g=t.hole||{x0:-17,x1:22,z0:-11,z1:11};return f.moveTo(g.x0,-g.z1),f.lineTo(g.x1,-g.z1),f.lineTo(g.x1,-g.z0),f.lineTo(g.x0,-g.z0),f.lineTo(g.x0,-g.z1),h.holes.push(f),new fc(h,96)})(),new Ke({uniforms:{...i,uR:{value:ha-.6}},vertexShader:s,fragmentShader:`
        uniform float uTime, uR; uniform vec3 uMoon; uniform vec3 cWater, cWater2, cHaze, cHi;
        varying vec3 vW;
        void main(){
          vec2 p = vW.xz; float t = uTime;
          float a1 = p.x * 0.35 + t * 0.7, a2 = p.y * 0.5 - t * 0.9, a3 = (p.x + p.y) * 1.3 + t * 1.4, a4 = p.x * 2.7 - p.y * 2.1 + t * 2.3;
          float n = sin(a1) + sin(a2) + 0.5 * sin(a3) + 0.3 * sin(a4);
          vec3 nrm = normalize(vec3(cos(a1) * 0.09 + cos(a3) * 0.08 + cos(a4) * 0.07, 1.0, cos(a2) * 0.12 + cos(a3) * 0.08 - cos(a4) * 0.05));
          vec3 V = normalize(vW - cameraPosition);
          vec3 Rf = reflect(V, nrm);
          vec3 L = normalize(uMoon - vW);
          float spec = pow(max(dot(Rf, L), 0.0), 90.0);
          float fres = pow(1.0 - max(dot(-V, nrm), 0.0), 3.0);
          vec3 c = mix(cWater, cWater2, fres);
          c += cHi * smoothstep(1.5, 2.3, n) * 0.10;
          c += vec3(1.0, 0.86, 0.72) * spec * 0.6;
          c = mix(c, cHaze, smoothstep(uR * 0.6, uR, length(p)));
          gl_FragColor = vec4(c, 1.0);
        }`}));a.rotation.x=-Math.PI/2,a.position.y=Zs,n.add(a);const o=[],c=[],l=[e("#ffd27a"),e("#ff9ec7"),e("#ffe9b0"),e("#9ad7ff")];for(let h=0;h<260;h++){const f=Wa.lerp(Math.PI*.95,Math.PI*1.32,Math.random()),g=ha-1.2,_=Zs+6.5+Math.pow(Math.random(),2.5)*8;o.push(Math.cos(f)*g,_,Math.sin(f)*g);const m=l[Math.random()*l.length|0].clone().multiplyScalar(1.4+Math.random());c.push(m.r,m.g,m.b)}const u=new Ae;u.setAttribute("position",new jt(o,3)),u.setAttribute("color",new jt(c,3)),n.add(new fp(u,new Ju({size:2.2,sizeAttenuation:!1,vertexColors:!0,depthWrite:!1})));const d=[];for(let h=0;h<5;h++){const f=new At,g=new Zt(new Dn(.9,.18,.3),new te({color:657944})),_=new Zt(new Xe(.09,8,6),new te({color:new Pt(h%2?"#ff4d6d":"#ffe8a3").multiplyScalar(3)}));_.position.y=.35,f.add(g,_),f.scale.setScalar(2.2);const m=Math.PI*(1.05+h*.12),p=40+h*9;f.position.set(Math.cos(m)*p,Zs+.05,Math.sin(m)*p),f.userData={ang:m,rad:p,speed:.004+h*.0015,light:_},n.add(f),d.push(f)}return{update(h){i.uTime.value=h,d.forEach((f,g)=>{const _=f.userData.ang+h*f.userData.speed;f.position.x=Math.cos(_)*f.userData.rad,f.position.z=Math.sin(_)*f.userData.rad,f.position.y=Zs+.05+Math.sin(h*1.3+g)*.04,f.userData.light.visible=Math.sin(h*2.2+g*1.7)>-.6})}}}const xu=["#ffb703","#fb8500","#ff006e","#c77dff","#3a86ff","#ffd166","#06d6a0"].map(n=>new Pt(n));function Bo(n,t,e,i,s){const r=n.distanceTo(t),a=Math.max(2,Math.round(r/e)),o=[];for(let c=0;c<=a;c++){const l=c/a,u=n.clone().lerp(t,l),d=l*r%i/i;u.y-=Math.sin(d*Math.PI)*s,o.push(u)}return o}function ko(n){const t=[];function e(f){const g=f.flatMap(([x,M,b,A])=>Bo(x,M,.32,A||2.5,b)),_=new Cl(new Xe(.055,8,6),new te({color:new Pt(1,1,1).multiplyScalar(2.4)}),g.length),m=new he,p=[];g.forEach((x,M)=>{m.makeTranslation(x.x,x.y,x.z),_.setMatrixAt(M,m);const b=xu[M%xu.length];p.push(b),_.setColorAt(M,b)}),n.add(_),f.forEach(([x,M,b,A])=>{const y=new Ae().setFromPoints(Bo(x,M,.15,A||2.5,b));n.add(new up(y,new Zu({color:3814246})))});let v=0;const S=new Pt;t.push(x=>{if(!(x-v<.12)){v=x;for(let M=0;M<p.length;M++){const b=.35+.65*(.5+.5*Math.sin(x*2.4+M*1.7));_.setColorAt(M,S.copy(p[M]).multiplyScalar(b))}_.instanceColor.needsUpdate=!0}})}function i(f){const g=f.flatMap(([v,S,x,M])=>Bo(v,S,.085,M||1.25,x)),_=new Cl(new ws(.06,0),new lt({roughness:.8,emissive:16742912,emissiveIntensity:.35}),g.length),m=new he,p=[new Pt("#ff9f1c"),new Pt("#ffbf00"),new Pt("#ff7b00")];g.forEach((v,S)=>{m.makeTranslation(v.x,v.y,v.z),_.setMatrixAt(S,m),_.setColorAt(S,p[Math.floor(S/3)%p.length])}),n.add(_)}const s=[];function r(f,g,_,m,p=1){const v=new At,S=new Pt(m),x=new lt({color:S,emissive:S,emissiveIntensity:1.6,roughness:.6,side:Ue}),M=new Zt(new mi(.34,.36,8,1,!0),x);M.position.y=.18;const b=new Zt(new mi(.34,.36,8,1,!0),x);b.rotation.x=Math.PI,b.position.y=-.18;const A=new Zt(new mn(.35,.35,.08,8),new lt({color:16765286,emissive:16758531,emissiveIntensity:.8}));v.add(M,b,A);for(let R=0;R<6;R++){const L=R/6*Math.PI*2,N=new Zt(new Dn(.02,.5,.02),x);N.position.set(Math.cos(L)*.12,-.6,Math.sin(L)*.12),v.add(N)}const y=7.2-g,w=new Zt(new mn(.008,.008,y,4),new te({color:5591162}));w.position.y=.36+y/2-.36,v.add(w),v.scale.setScalar(p),v.position.set(f,g,_),n.add(v),s.push(v)}t.push(f=>s.forEach((g,_)=>{g.rotation.y=f*.3+_,g.rotation.z=Math.sin(f*.8+_)*.04}));const a=[],o=new lt({color:12730636,roughness:.8,emissive:8138002,emissiveIntensity:.3}),c=new te({color:new Pt(3.2,1.9,.5)}),l=new Xe(.13,14,8,0,Math.PI*2,Math.PI/2,Math.PI/2),u=new mi(.035,.13,8);function d(f,g,_=0){const m=new Zt(l,o);m.scale.y=.55,m.position.set(f,_+.075,g);const p=new Zt(u,c);p.position.set(f,_+.13,g),n.add(m,p),a.push(p)}t.push(f=>a.forEach((g,_)=>{const m=.85+Math.sin(f*13+_*2.1)*.12+Math.sin(f*7.3+_)*.08;g.scale.set(1,m,1)}));function h(f,g,_,m=0){const v=document.createElement("canvas");v.width=v.height=512;const S=v.getContext("2d"),x=[["#ff006e","#ffbe0b","#3a86ff","#8338ec","#fb5607"],["#06d6a0","#ffd166","#ef476f","#118ab2","#f78c6b"],["#c77dff","#ff9e00","#00bbf9","#f15bb5","#fee440"]][m%3];S.translate(512/2,512/2);const M=[[.92,24,.09],[.74,16,.12],[.55,12,.13],[.36,8,.14]];S.fillStyle="rgba(255,255,255,0.9)",S.beginPath(),S.arc(0,0,512*.48,0,Math.PI*2),S.fill(),S.fillStyle=x[4],S.beginPath(),S.arc(0,0,512*.465,0,Math.PI*2),S.fill(),M.forEach(([R,L,N],z)=>{S.fillStyle=x[z%4],S.beginPath(),S.arc(0,0,512*.5*R,0,Math.PI*2),S.fill();for(let P=0;P<L;P++)S.save(),S.rotate(P/L*Math.PI*2+z*.2),S.fillStyle=x[(z+1)%4],S.beginPath(),S.ellipse(0,-512*.5*(R-N*.6),512*N*.18,512*N*.42,0,0,Math.PI*2),S.fill(),S.fillStyle="#ffffff",S.beginPath(),S.arc(0,-512*.5*(R-.02),4,0,Math.PI*2),S.fill(),S.restore()}),S.fillStyle="#ffffff",S.beginPath(),S.arc(0,0,512*.07,0,Math.PI*2),S.fill(),S.fillStyle=x[0],S.beginPath(),S.arc(0,0,512*.045,0,Math.PI*2),S.fill();const b=new _n(v);b.colorSpace=Pe;const A=new lt({map:b,transparent:!0,roughness:.9,emissive:16777215,emissiveMap:b,emissiveIntensity:.35}),y=new Zt(new ti(_,64),A);y.rotation.x=-Math.PI/2,y.position.set(f,.011,g),y.receiveShadow=!0,n.add(y);const w=Math.round(_*5);for(let R=0;R<w;R++){const L=R/w*Math.PI*2;d(f+Math.cos(L)*(_+.28),g+Math.sin(L)*(_+.28))}}return{stringLights:e,garlands:i,lantern:r,diya:d,rangoli:h,update:f=>t.forEach(g=>g(f))}}const Js=new I;function Tn(n,t,e,i,s,r){const a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Js.copy(t),Js[i]=0,Js.normalize();const l=.5*a/(a+o),u=1-Js.angleTo(n)/c;return Math.sign(Js[e])===1?u*l:o/(a+o)+l+l*(1-u)}class vc extends Dn{constructor(t=1,e=1,i=1,s=2,r=.1){const a=s*2+1;if(r=Math.min(t/2,e/2,i/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:i,segments:s,radius:r},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new I,l=new I,u=new I(t,e,i).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,_=new I,m=.5/a;for(let p=0,v=0;p<d.length;p+=3,v+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=u.x*Math.sign(c.x)+l.x*r,d[p+1]=u.y*Math.sign(c.y)+l.y*r,d[p+2]=u.z*Math.sign(c.z)+l.z*r,h[p+0]=l.x,h[p+1]=l.y,h[p+2]=l.z,Math.floor(p/g)){case 0:_.set(1,0,0),f[v+0]=Tn(_,l,"z","y",r,i),f[v+1]=1-Tn(_,l,"y","z",r,e);break;case 1:_.set(-1,0,0),f[v+0]=1-Tn(_,l,"z","y",r,i),f[v+1]=1-Tn(_,l,"y","z",r,e);break;case 2:_.set(0,1,0),f[v+0]=1-Tn(_,l,"x","z",r,t),f[v+1]=Tn(_,l,"z","x",r,i);break;case 3:_.set(0,-1,0),f[v+0]=1-Tn(_,l,"x","z",r,t),f[v+1]=1-Tn(_,l,"z","x",r,i);break;case 4:_.set(0,0,1),f[v+0]=1-Tn(_,l,"x","y",r,t),f[v+1]=1-Tn(_,l,"y","x",r,e);break;case 5:_.set(0,0,-1),f[v+0]=Tn(_,l,"x","y",r,t),f[v+1]=1-Tn(_,l,"y","x",r,e);break}}static fromJSON(t){return new vc(t.width,t.height,t.depth,t.segments,t.radius)}}const le=15,zt=9,an=7,Yi=7.6,Se={M:null},ce=(n,t=3)=>new te({color:new Pt(n).multiplyScalar(t)});function Tt(n,t,{x:e=0,y:i=0,z:s=0,cast:r=!0,receive:a=!0}={}){const o=new Zt(n,t);return o.position.set(e,i,s),o.castShadow=r,o.receiveShadow=a,o}const Z=(n,t,e,i,s)=>Tt(new Dn(n,t,e),i,s),It=(n,t,e,i,s,r)=>Tt(new vc(n,t,e,3,i),s,r),Ct=(n,t,e,i,s,r=24)=>Tt(new mn(n,t,e,r),i,s);function Ef(n,t="rgba(0,0,0,0)"){const e=document.createElement("canvas");e.width=e.height=128;const i=e.getContext("2d"),s=i.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,n),s.addColorStop(1,t),i.fillStyle=s,i.fillRect(0,0,128,128);const r=new _n(e);return r.colorSpace=Pe,r}function bn(n,t,e){const i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);const s=new _n(i);return s.colorSpace=Pe,s.anisotropy=8,s}function In(n,t,e,i,s,r){n.beginPath(),n.moveTo(t+r,e),n.arcTo(t+i,e,t+i,e+s,r),n.arcTo(t+i,e+s,t,e+s,r),n.arcTo(t,e+s,t,e,r),n.arcTo(t,e,t+i,e,r),n.closePath()}function Cn(n,t,e,{pxPerUnit:i=200,emissive:s=.9,frame:r=!0}={}){const a=bn(Math.round(n*i),Math.round(t*i),e),o=new At,c=new Zt(new ee(n,t),new te({map:a,color:new Pt(s,s,s)}));return c.position.z=.03,o.add(c),r&&o.add(It(n+.1,t+.1,.05,.02,Se.M.graphite,{})),o}const Ho=n=>String(n).padStart(2,"0"),Ua=n=>`${Ho(n.getHours())}:${Ho(n.getMinutes())}:${Ho(n.getSeconds())}`;let Dt;const Gv=n=>Dt=n;function We(n,t,e,i=1,s=0){const r=new At;if(s===0){r.add(Ct(.34,.26,.6,Dt.ceramic,{y:.3})),r.add(Ct(.31,.31,.03,new lt({color:2825492}),{y:.59}));for(let a=0;a<12;a++){const o=Tt(new mi(.06,1+Math.random()*.5,5),a%2?Dt.leaf:Dt.leaf2),c=a/12*Math.PI*2,l=.2+Math.random()*.45;o.position.set(Math.cos(c)*.1,1.05,Math.sin(c)*.1),o.rotation.set(Math.sin(c)*l,0,-Math.cos(c)*l),r.add(o)}}else{r.add(Ct(.36,.3,.55,Dt.terracotta,{y:.275})),r.add(Ct(.025,.035,1.6,new lt({color:5980208}),{y:1.2}));const a=new Xe(.2,10,8);for(let o=0;o<26;o++){const c=Tt(a,o%3?Dt.leaf:Dt.leaf2),l=Math.random()*Math.PI*2,u=1.2+Math.random()*1,d=.12+Math.random()*.32;c.position.set(Math.cos(l)*d,u,Math.sin(l)*d),c.scale.set(1,1.4,.25),c.rotation.set(Math.random(),l,Math.random()*.6),r.add(c)}}r.scale.setScalar(i),r.position.set(t,0,e),n.add(r)}function yc(n,t,e,i=0){const s=new At,r=2.4,a=3,o=.55;s.add(Z(.06,a,o,Dt.walnut,{x:-r/2,y:a/2})),s.add(Z(.06,a,o,Dt.walnut,{x:r/2,y:a/2})),s.add(Z(r,.05,o,Dt.walnut,{y:a})),s.add(Z(r,a,.03,Dt.graphite,{y:a/2,z:-o/2}));const c=[10166822,13264642,693142,24435,15637248,6966419,15325350,4014171,12271107];for(let l=0;l<4;l++){const u=.1+l*(a/4);s.add(Z(r,.04,o,Dt.walnut,{y:u}));let d=-r/2+.1;const h=l===1?.1:r/2-.15;for(;d<h;){const f=.06+Math.random()*.07,g=.4+Math.random()*.25,_=Z(f,g,.38,new lt({color:c[Math.random()*c.length|0],roughness:.7}),{x:d+f/2,y:u+.02+g/2});s.add(_),d+=f+.012}l===1&&(s.add(Ct(.08,.06,.3,Dt.ceramic,{x:.5,y:u+.17})),s.add(Z(.36,.28,.03,Dt.brass,{x:.9,y:u+.17,z:-.1})))}s.add(Ct(.12,.1,.18,Dt.terracotta,{x:-.6,y:a+.11}));for(let l=0;l<5;l++){const u=Tt(new Xe(.1,8,6),Dt.leaf2,{x:-.6+(Math.random()-.5)*.2,y:a+.3+Math.random()*.1,z:(Math.random()-.5)*.15});u.scale.set(1,.6,1),s.add(u)}s.position.set(t,0,e),s.rotation.y=i,n.add(s)}function wf(n,t,e,i,s,r=2.4){const a=new At;a.add(It(r,.42,.95,.08,s,{y:.33})),a.add(It(r,.62,.22,.08,s,{y:.72,z:-.37}));for(const l of[-1,1])a.add(It(.22,.55,.95,.08,s,{x:l*(r/2-.11),y:.5}));for(const l of[-1,1])a.add(Ct(.025,.02,.12,Dt.brass,{x:l*(r/2-.15),y:.06,z:.35},8),Ct(.025,.02,.12,Dt.brass,{x:l*(r/2-.15),y:.06,z:-.35},8));const o=[15320170,16032353,15167313,14208960],c=Math.max(2,Math.round(r/1));for(let l=0;l<c;l++){const u=It(.42,.4,.14,.06,new lt({color:o[l%o.length],roughness:.95}),{x:-r/2+.45+l*((r-.9)/(c-1)),y:.72,z:-.2});u.rotation.x=-.2,u.rotation.z=(l%2?1:-1)*.08,a.add(u)}a.position.set(t,0,e),a.rotation.y=i,n.add(a)}function Oa(n,t,e,i,s){const r=new At;r.add(It(.85,.38,.85,.08,s,{y:.32})),r.add(It(.85,.6,.18,.08,s,{y:.7,z:-.34}));for(const a of[-1,1])r.add(It(.16,.42,.85,.06,s,{x:a*.42,y:.5}));r.add(It(.38,.36,.12,.05,new lt({color:15320170,roughness:.95}),{y:.68,z:-.2})),r.position.set(t,0,e),r.rotation.y=i,n.add(r)}function Mc(n,t,e,i=16763274){const s=new At;s.add(Ct(.22,.22,.03,Dt.blackMetal,{y:.015})),s.add(Ct(.015,.015,1.7,Dt.brass,{y:.86},8));const r=Ct(.18,.26,.3,new lt({color:16115400,emissive:i,emissiveIntensity:.55,side:Ue}),{y:1.75});s.add(r),s.position.set(t,0,e),n.add(s)}function vr(n,t,e,i,s,r,a=!1){const o=a?new ti(i,64):new ee(i,s),c=Tt(o,r,{x:t,y:.006,z:e,cast:!1});c.rotation.x=-Math.PI/2,n.add(c);const l=a?new Ya(i-.06,i,64):null;if(l){const u=Tt(l,new lt({color:13214247,roughness:.6}),{x:t,y:.008,z:e,cast:!1});u.rotation.x=-Math.PI/2,n.add(u)}}function Sc(n,t,e,i=.75){const s=new At;s.add(Ct(i,i,.05,Dt.marbleWhite,{y:.45},48)),s.add(Ct(.06,.06,.42,Dt.brass,{y:.22},12)),s.add(Ct(.35,.35,.02,Dt.brass,{y:.01},32)),s.add(Ct(.06,.05,.1,Dt.ceramic,{x:.2,y:.53,z:.1},12)),s.add(Ct(.06,.05,.1,new lt({color:15167313,roughness:.3}),{x:.36,y:.53,z:-.05},12)),s.add(Z(.42,.05,.3,new lt({color:2508371,roughness:.7}),{x:-.2,y:.5,z:-.05})),s.add(Z(.36,.04,.26,new lt({color:15320170,roughness:.7}),{x:-.18,y:.545,z:-.03})),s.position.set(t,0,e),n.add(s)}function Vv(n,t,e,i=0){const s=document.createElement("canvas");s.width=768,s.height=512;const r=s.getContext("2d");r.fillStyle="#f2eee6",r.fillRect(0,0,768,512),[["#fde68a","Ship office v2"],["#a7f3d0","NIFTY levels"],["#fbcfe8",`Chair v3
feedback`],["#bfdbfe",`Post Fri
9:00 AM`],["#ddd6fe",`India-first
GTM`],["#fed7aa",`Study
built-in`],["#fde68a",`Diwali
campaign`],["#a7f3d0",`Weekly
review`]].forEach(([u,d],h)=>{const f=40+h%4*180,g=40+Math.floor(h/4)*230;r.save(),r.translate(f+75,g+80),r.rotate((Math.random()-.5)*.12),r.translate(-75,-80),r.fillStyle="rgba(0,0,0,0.12)",r.fillRect(6,8,150,160),r.fillStyle=u,r.fillRect(0,0,150,160),r.fillStyle="#ef4444",r.beginPath(),r.arc(75,12,7,0,Math.PI*2),r.fill(),r.fillStyle="#1f2937",r.font="bold 24px system-ui, sans-serif",d.split(`
`).forEach((_,m)=>r.fillText(_,12,60+m*30)),r.restore()});const o=new _n(s);o.colorSpace=Pe,o.anisotropy=8;const c=new At,l=Tt(new ee(2.6,1.73),new lt({map:o,roughness:.8,emissive:16777215,emissiveMap:o,emissiveIntensity:.22}),{y:2.1,z:.04});c.add(l),c.add(Z(2.7,1.83,.06,Dt.oak,{y:2.1}));for(const u of[-1,1]){const d=Z(.06,3,.06,Dt.oak,{x:u*1.1,y:1.45,z:-.1});d.rotation.x=.05,c.add(d)}c.add(Z(2.6,.05,.14,Dt.oak,{y:1.2,z:.06})),c.position.set(t,0,e),c.rotation.y=i,n.add(c)}const Ni=(n,t,e,i,s=0,r=0)=>(t.position.set(e,r,i),t.rotation.y=s,n.add(t),t),Oe=(n,t={})=>new lt({color:n,roughness:.6,...t});function Wv(n,t,e,i,s=Dt.leather){const r=new At;r.add(It(.95,.42,1,.1,s,{y:.36}));const a=It(.95,.85,.24,.1,s,{y:.85,z:-.5});a.rotation.x=-.35,r.add(a);const o=It(.9,.12,.5,.05,s,{y:.32,z:.72});o.rotation.x=.25,r.add(o);for(const c of[-1,1])r.add(It(.16,.5,.95,.06,s,{x:c*.52,y:.5}));return r.add(Z(.8,.06,.8,Dt.blackMetal,{y:.06})),r.add(It(.5,.2,.1,.05,Oe(15320170,{roughness:.95}),{y:1.12,z:-.6})),Ni(n,r,t,e,i)}function Rn(n,t,e,i=0,s=2042167){const r=new At,a=Oe(s,{roughness:.8});r.add(It(.52,.09,.5,.04,a,{y:.48}));const o=It(.48,.62,.07,.04,a,{y:.86,z:-.24});o.rotation.x=-.1,r.add(o),r.add(Ct(.03,.03,.36,Dt.blackMetal,{y:.27},8));for(let c=0;c<5;c++){const l=c/5*Math.PI*2,u=Z(.3,.025,.04,Dt.blackMetal,{x:Math.cos(l)*.15,y:.06,z:Math.sin(l)*.15});u.rotation.y=-l,r.add(u)}for(const c of[-1,1])r.add(Z(.04,.2,.3,Dt.blackMetal,{x:c*.27,y:.6}));return Ni(n,r,t,e,i)}function Xv(n,t,e,i=0){const s=new At;s.add(It(3.4,1,.7,.03,Dt.walnut,{y:.5})),s.add(Z(3.5,.05,.8,Dt.marbleWhite,{y:1.02})),s.add(Z(3.3,.03,.03,ce("#ffb36b",1.6),{y:.95,z:.37,cast:!1})),s.add(It(.7,.45,.45,.04,Oe(12633292,{metalness:.9,roughness:.25}),{x:-1,y:1.27})),s.add(Ct(.05,.05,.1,Dt.blackMetal,{x:-1.15,y:1,z:.2},10));for(let a=0;a<4;a++)s.add(Ct(.05,.045,.1,Dt.ceramic,{x:.2+a*.16,y:1.1,z:.1},12));s.add(Ct(.18,.18,.12,Oe(15320170),{x:1.1,y:1.1},18));for(let a=0;a<5;a++)s.add(Tt(new Xe(.05,8,6),Oe(11887901),{x:1.02+a%3*.08,y:1.19,z:-.05+Math.floor(a/3)*.1}));const r=Cn(1.8,.9,(a,o,c)=>{a.fillStyle="#14121f",a.fillRect(0,0,o,c),a.fillStyle="#ffd7a8",a.font="700 54px system-ui",a.fillText("COFFEE BAR",30,70),a.font="400 34px system-ui",a.fillStyle="#e9e7ff",["Espresso · Cappuccino","Masala chai · Cold brew","Electrolyte lemonade"].forEach((l,u)=>a.fillText(l,30,130+u*44))});r.position.set(0,2.2,-.36),s.add(r);for(let a=0;a<3;a++){const o=new At;o.add(Ct(.2,.2,.06,Dt.leather,{y:.78},18)),o.add(Ct(.025,.025,.75,Dt.brass,{y:.39},8)),o.add(Ct(.18,.18,.02,Dt.brass,{y:.01},18)),o.position.set(-1+a,0,.85),s.add(o)}return Ni(n,s,t,e,i)}function Yv(n,t,e,i=0){const s=new At,r=5.2,a=5.4,o=3.2,c=bn(1024,640,(m,p,v)=>{const S=m.createLinearGradient(0,0,0,v*.55);S.addColorStop(0,"#5aa9e6"),S.addColorStop(1,"#bde0fe"),m.fillStyle=S,m.fillRect(0,0,p,v),m.fillStyle="#2d6a4f",m.beginPath(),m.moveTo(0,v*.55),m.quadraticCurveTo(p*.5,v*.42,p,v*.55),m.lineTo(p,v),m.lineTo(0,v),m.fill(),m.fillStyle="#52b788",m.beginPath(),m.moveTo(p*.3,v),m.quadraticCurveTo(p*.5,v*.5,p*.58,v*.52),m.quadraticCurveTo(p*.62,v*.6,p*.75,v),m.fill(),m.fillStyle="#95d5b2",m.beginPath(),m.ellipse(p*.6,v*.53,60,14,0,0,Math.PI*2),m.fill(),m.strokeStyle="#fff",m.lineWidth=3,m.beginPath(),m.moveTo(p*.6,v*.53),m.lineTo(p*.6,v*.4),m.stroke(),m.fillStyle="#ef4444",m.beginPath(),m.moveTo(p*.6,v*.4),m.lineTo(p*.64,v*.42),m.lineTo(p*.6,v*.44),m.fill(),m.fillStyle="rgba(0,0,0,0.55)",m.fillRect(20,20,330,150),m.fillStyle="#fff",m.font="700 34px system-ui",m.fillText("HOLE 7 · PAR 4",40,64),m.font="400 28px system-ui",m.fillText("Carry 212 m · Speed 148 km/h",40,104),m.fillText("Spin 2650 rpm",40,140)}),l=new Zt(new ee(r-.3,o-.3),new te({map:c,color:new Pt(.95,.95,.95)}));l.position.set(0,o/2,-a/2+.05),s.add(l);const u=Oe(1776424,{roughness:.5});s.add(Z(r,o,.06,u,{y:o/2,z:-a/2}));const d=new lt({color:1118498,transparent:!0,opacity:.55,roughness:1,side:Ue});for(const m of[-1,1]){const p=Tt(new ee(a,o),d,{x:m*r/2,y:o/2,cast:!1});p.rotation.y=Math.PI/2,s.add(p),s.add(Z(.06,o,.06,Dt.blackMetal,{x:m*r/2,y:o/2,z:a/2}))}s.add(Z(r,.06,.06,Dt.blackMetal,{y:o,z:a/2})),s.add(Z(r,.06,a,u,{y:o+.03}));const h=Tt(new ee(r-.2,a-.4),Oe(3112266,{roughness:1}),{y:.01,cast:!1});h.rotation.x=-Math.PI/2,s.add(h);const f=Tt(new ee(1.4,1.6),Oe(4231532,{roughness:1}),{y:.02,z:1.2,cast:!1});f.rotation.x=-Math.PI/2,s.add(f),s.add(Ct(.012,.012,.06,Dt.whiteMatte,{y:.05,z:1},6)),s.add(Tt(new Xe(.04,12,10),Dt.ceramic,{y:.1,z:1}));const g=new At;g.add(Ct(.012,.012,1.1,Dt.blackMetal,{y:.55},6)),g.add(Z(.12,.05,.05,Dt.brass,{x:.05,y:.02})),g.position.set(.9,0,1.9),g.rotation.z=.25,s.add(g),s.add(It(.4,.15,.25,.03,Dt.graphite,{x:-.8,y:.08,z:1.3})),s.add(Z(r,.04,.04,ce("#22c55e",1.6),{y:.03,z:a/2,cast:!1}));const _=Cn(2,.45,(m,p,v)=>{m.fillStyle="#0b2e1f",m.fillRect(0,0,p,v),m.fillStyle="#86efac",m.font="800 54px system-ui",m.textAlign="center",m.fillText("⛳ GOLF SIMULATOR",p/2,64)});return _.position.set(0,o+.4,a/2),s.add(_),Ni(n,s,t,e,i)}function qv(n,t,e,i=0){const s=new At,r=Cn(5.2,.6,(h,f,g)=>{h.fillStyle="#121022",h.fillRect(0,0,f,g),h.fillStyle="#fde68a",h.font="800 64px system-ui",h.textAlign="center",h.fillText("BOT FUEL BAR · OIL · ELECTRICITY BOOST · ELECTROLYTES",f/2,82)},{pxPerUnit:240});r.position.set(0,2.75,-.6),s.add(r);const a=new At;a.add(It(1.2,1.7,.7,.05,Oe(8138002,{roughness:.4}),{y:.85})),a.add(Z(.9,.5,.02,ce("#f59e0b",1.2),{y:1.25,z:.36,cast:!1}));const o=Oe(15381256,{metalness:.7,roughness:.35});for(let h=0;h<6;h++)a.add(It(.22,.3,.14,.03,o,{x:-.36+h%3*.36,y:.2+Math.floor(h/3)*.34,z:.45}));const c=Ct(.02,.02,.8,Dt.blackMetal,{x:.65,y:1,z:.1},6);c.rotation.z=.3,a.add(c),a.position.x=-1.9,s.add(a);const l=h=>{const f=new At;return f.add(Ct(.28,.32,1.6,Oe(1976635,{metalness:.6,roughness:.3}),{y:.8},20)),f.add(Tt(new Zi(.3,.03,8,32),ce("#22d3ee",2.2),{y:1.3,cast:!1})),f.add(Tt(new Zi(.3,.03,8,32),ce("#22d3ee",2.2),{y:.8,cast:!1})),f.children.slice(-2).forEach(g=>g.rotation.x=Math.PI/2),f.add(Ct(.05,.05,.12,ce("#facc15",2),{y:1.65},10)),f.position.x=h,f};s.add(l(-.25),l(.45));const u=new At;u.add(It(1,1.9,.7,.05,Oe(15067115,{roughness:.3}),{y:.95})),u.add(Z(.85,1.5,.02,new lt({color:10147839,transparent:!0,opacity:.35,roughness:.1}),{y:1.05,z:.36,cast:!1}));const d=[2282478,16020150,10741301,16486972];for(let h=0;h<3;h++)for(let f=0;f<5;f++)u.add(Ct(.05,.05,.26,new lt({color:d[(f+h)%4],emissive:d[(f+h)%4],emissiveIntensity:.4}),{x:-.3+f*.15,y:.55+h*.45,z:.2},10));return u.position.x=1.8,s.add(u),Ni(n,s,t,e,i)}function bc(n,t,e,i,s=6.6,r=15723234){const a=Oe(r,{roughness:1});for(let o=t;o<=e;o+=.9)n.add(Z(.06,.7,3.2,a,{x:o,y:s,z:i,cast:!1})),n.add(Ct(.006,.006,7-s-.35,Dt.blackMetal,{x:o,y:s+.35+(7-s-.35)/2,z:i},4))}function Tf(n,t,e,i,s=0,r=6,a=3){const o=new At,c=[15327958,13148794,16118250,10251077,14273461],l=new mn(.3,.3,.06,6);for(let u=0;u<a;u++)for(let d=0;d<r;d++){const h=Tt(l,Oe(c[(u*3+d)%c.length],{roughness:1}),{x:d*.54+u%2*.27,y:u*.47,cast:!1});h.rotation.x=Math.PI/2,o.add(h)}return o.position.set(t,e,i),o.rotation.y=s,n.add(o),o}function yr(n,t,e,i,s=0,r=1.4,a=1,o=0){const c=[["#ff006e","#ffbe0b","#3a86ff","#1b1b3a"],["#06d6a0","#118ab2","#ffd166","#0b132b"],["#f15bb5","#9b5de5","#00bbf9","#14102a"]][o%3],l=bn(512,Math.round(512*a/r),(d,h,f)=>{d.fillStyle=c[3],d.fillRect(0,0,h,f);for(let g=0;g<7;g++)d.fillStyle=c[g%3],d.globalAlpha=.85,d.beginPath(),d.arc((g*97+o*51)%h,(g*61+o*37)%f,40+g*23%90,0,Math.PI*2),d.fill();d.globalAlpha=1,d.strokeStyle="#ffffff",d.lineWidth=6,d.beginPath(),d.moveTo(0,f*.7),d.bezierCurveTo(h*.3,f*.2,h*.7,f,h,f*.3),d.stroke()}),u=new At;return u.add(Z(r+.1,a+.1,.05,Dt.brass,{})),u.add(Tt(new ee(r,a),new lt({map:l,roughness:.7,emissive:16777215,emissiveMap:l,emissiveIntensity:.2}),{z:.03,cast:!1})),u.position.set(t,e,i),u.rotation.y=s,n.add(u),u}function $v(n,t,e,i=0){const s=new At,r=bn(768,512,(u,d,h)=>{u.fillStyle="#123a73",u.fillRect(0,0,d,h),u.strokeStyle="rgba(255,255,255,0.12)",u.lineWidth=1;for(let f=0;f<d;f+=24)u.beginPath(),u.moveTo(f,0),u.lineTo(f,h),u.stroke();for(let f=0;f<h;f+=24)u.beginPath(),u.moveTo(0,f),u.lineTo(d,f),u.stroke();u.strokeStyle="#e0f2fe",u.lineWidth=4,u.strokeRect(120,90,420,300),u.strokeRect(120,90,200,160),u.strokeRect(320,250,220,140),u.beginPath(),u.arc(320,250,60,Math.PI,Math.PI*1.5),u.stroke(),u.font="600 22px ui-monospace",u.fillStyle="#e0f2fe",u.fillText("LIVING 5.4 × 4.2",140,180),u.fillText("STUDY",360,320),u.fillText("GROUND FLOOR PLAN · 1:100",120,450)}),a=Tt(new ee(1.8,1.2),new lt({map:r,roughness:.8,emissive:16777215,emissiveMap:r,emissiveIntensity:.25}),{y:1.05});a.rotation.x=-Math.PI/2+.45,s.add(a);const o=Z(1.9,.04,1.3,Dt.oak,{y:1.02});o.rotation.x=.45,s.add(o);for(const u of[-1,1]){const d=Z(.05,1,.05,Dt.blackMetal,{x:u*.8,y:.5,z:-.3});s.add(d),s.add(Z(.05,.75,.05,Dt.blackMetal,{x:u*.8,y:.37,z:.35}))}const c=Z(1.6,.01,.06,Dt.whiteMatte,{y:1.1,z:.1});c.rotation.x=.45,s.add(c);const l=Ct(.05,.12,.12,Oe(1120295,{emissive:16773569,emissiveIntensity:.5}),{x:.9,y:1.7,z:-.4},14);s.add(l),s.add(Ct(.01,.01,.8,Dt.brass,{x:.9,y:1.3,z:-.45},6));for(let u=0;u<4;u++){const d=Ct(.05,.05,.8,Oe(u%2?14742270:16317180),{x:-1.2,y:.4+u*.02,z:-.3+u*.12},10);d.rotation.x=.2,s.add(d)}return Ni(n,s,t,e,i)}function Kv(n,t,e){const i=new At;i.add(Z(1.2,.8,1.2,Dt.whiteMatte,{y:.4}));const s=Oe(16317180,{roughness:.4});i.add(Z(.9,.02,.9,Oe(8843180),{y:.81})),i.add(Z(.5,.22,.4,s,{x:-.1,y:.93,z:-.1})),i.add(Z(.3,.16,.3,s,{x:.22,y:.9,z:.15})),i.add(Z(.52,.02,.42,Oe(9741240),{x:-.1,y:1.05,z:-.1})),i.add(Z(.2,.01,.12,new lt({color:3718648,transparent:!0,opacity:.7}),{x:.25,y:.83,z:-.25}));for(let a=0;a<4;a++)i.add(Tt(new Xe(.05,8,6),Dt.leaf2,{x:-.38+a*.25,y:.88,z:.38}));const r=Z(1,.5,1,new Ci({color:16777215,transparent:!0,opacity:.12,roughness:.05}),{y:1.06,cast:!1});return i.add(r),i.position.set(t,0,e),n.add(i),i}function Zv(n,t,e){const i=new At;i.add(Ct(.5,.5,.5,Dt.whiteMatte,{y:.25},24));const s=It(.5,.06,.5,.03,Dt.walnut,{y:.78});i.add(s);const r=It(.5,.42,.05,.03,Dt.walnut,{y:1.05,z:-.22});r.rotation.x=-.15,i.add(r);for(const a of[-1,1])for(const o of[-1,1])i.add(Ct(.02,.015,.28,Dt.walnut,{x:a*.2,y:.62,z:o*.2},6));return i.position.set(t,0,e),n.add(i),i}function Jv(n,t,e){const i=new At;i.add(Ct(.5,.5,.5,Dt.whiteMatte,{y:.25},24)),i.add(Ct(.3,.22,.2,Dt.terracotta,{y:.6},16)),i.add(Ct(.03,.04,.35,Oe(5980208),{y:.85},6));for(let s=0;s<6;s++){const r=Tt(new Xe(.16,10,8),s%2?Dt.leaf:Dt.leaf2,{x:Math.cos(s)*.15,y:1.05+s%3*.05,z:Math.sin(s)*.15});r.scale.set(1,.55,1),i.add(r)}return i.position.set(t,0,e),n.add(i),i}function ba(n,t,e,i=1.1){const s=new At;return s.add(Ct(i,i,.05,Dt.oak,{y:.74},40)),s.add(Ct(.06,.08,.72,Dt.blackMetal,{y:.37},12)),s.add(Ct(.4,.4,.02,Dt.blackMetal,{y:.01},24)),s.position.set(t,0,e),n.add(s),s}function _u(n,t,e,i,s,r,a=0){const o=new At;o.add(It(i,.06,s,.03,Dt.walnut,{y:.75}));for(const l of[-1,1])o.add(Z(.08,.72,s*.6,Dt.blackMetal,{x:l*(i/2-.4),y:.36}));const c=Math.floor((r-(r>6?2:0))/2);for(let l=0;l<c;l++){const u=-i/2+i/(c+1)*(l+1);Rn(o,u,-s/2-.45,0),Rn(o,u,s/2+.45,Math.PI)}return r>6&&(Rn(o,-i/2-.5,0,Math.PI/2),Rn(o,i/2+.5,0,-Math.PI/2)),Ni(n,o,t,e,a)}function Qs(n,t,e=3,{frame:i=Dt.bronze,tint:s}={}){const r=s?new Ci({color:s,transparent:!0,opacity:.16,roughness:.05,depthWrite:!1,side:Ue}):Dt.glass;for(const[a,o,c,l]of t){const u=Math.hypot(c-a,l-o),d=Math.atan2(-(l-o),c-a),h=new At;h.position.set(a,0,o),h.rotation.y=d;const f=Tt(new ee(u,e),r,{x:u/2,y:e/2,cast:!1,receive:!1});f.renderOrder=5,h.add(f),h.add(Z(u,.06,.08,i,{x:u/2,y:e})),h.add(Z(u,.06,.08,i,{x:u/2,y:.03}));for(let g=0;g<=Math.max(1,Math.round(u/1.8));g++)h.add(Z(.05,e,.08,i,{x:g/Math.max(1,Math.round(u/1.8))*u,y:e/2,receive:!1}));n.add(h)}}function Gi(n,t,e,i){for(const[s,r,a,o]of t){const c=Math.hypot(a-s,o-r),l=Math.atan2(-(o-r),a-s),u=Z(c,e,.18,i,{x:(s+a)/2,y:e/2,z:(r+o)/2});u.rotation.y=l,n.add(u)}}function Af(n,t,e,i=0){const s=new At;s.add(It(.7,2.1,1,.02,Oe(987413,{metalness:.6,roughness:.35}),{y:1.05}));const r=new te({color:new Pt("#22c55e").multiplyScalar(2)}),a=new te({color:new Pt("#38bdf8").multiplyScalar(2)});for(let o=0;o<14;o++)s.add(Z(.6,.1,.02,Oe(2040880,{metalness:.5}),{y:.2+o*.13,z:.51,cast:!1})),s.add(Z(.03,.03,.01,o%3?r:a,{x:.22,y:.2+o*.13,z:.525,cast:!1}));return Ni(n,s,t,e,i)}function ze(n,t,e,i,s,r=0,{w:a=2.2,h:o=.4,bg:c="#111827",fg:l="#f8fafc",size:u=52}={}){const d=Cn(a,o,(h,f,g)=>{h.fillStyle=c,h.fillRect(0,0,f,g),h.fillStyle=l,h.font=`800 ${u}px system-ui`,h.textAlign="center",h.textBaseline="middle",h.fillText(t,f/2,g/2+2)},{frame:!1});return d.position.set(e,i,s),d.rotation.y=r,n.add(d),d}const de={x0:le+.2,x1:le+4.4,z0:-zt,z1:-3.6};let ua=null;function Qv(){if(ua)return ua;const n=document.createElement("canvas");n.width=512,n.height=256;const t=n.getContext("2d");[[60,120],[180,40],[320,160],[420,60]].forEach(([i,s])=>{const r=t.createLinearGradient(i,0,i+s,0);r.addColorStop(0,"rgba(255,255,255,0)"),r.addColorStop(.5,"rgba(220,225,255,0.55)"),r.addColorStop(1,"rgba(255,255,255,0)"),t.save(),t.transform(1,0,-.5,1,0,0),t.fillStyle=r,t.fillRect(i,0,s,256),t.restore()});const e=new _n(n);return e.colorSpace=Pe,ua=new te({map:e,transparent:!0,opacity:.07,blending:gi,depthWrite:!1,side:Ue}),ua}function fa(n,t,e,i,s,r,a,{sill:o=!0,top:c=!0,accent:l="#ffcf8a"}={}){const u=Se.M,d=Math.hypot(i-t,s-e),h=Math.atan2(-(s-e),i-t),f=new At;f.position.set(t,0,e),f.rotation.y=h;const g=new Zt(new ee(d,r),u.glass);g.position.set(d/2,r/2,0),g.renderOrder=5,f.add(g);const _=new Zt(new ee(d,r),Qv());_.position.set(d/2,r/2,.01),_.renderOrder=6,f.add(_);const m=Math.max(1,Math.round(d/a));for(let p=0;p<=m;p++)f.add(Z(.07,r,.12,u.bronze,{x:p/m*d,y:r/2,receive:!1}));return r>3&&f.add(Z(d,.05,.1,u.bronze,{x:d/2,y:1.05,cast:!1})),o&&(f.add(Z(d,.14,.18,u.bronze,{x:d/2,y:.07})),f.add(Z(d,.025,.03,ce("#ffd59a",2),{x:d/2,y:.15,z:.08,cast:!1}))),c&&(f.add(Z(d+.1,.18,.2,u.bronze,{x:d/2,y:r})),f.add(Z(d,.025,.03,ce(l,2),{x:d/2,y:r-.1,z:.1,cast:!1}))),n.add(f),f}function jv(n,t,{finish:e}={}){const i=Se.M;n.add(Z(le*2+.6,.6,zt*2+.6,i.plinth,{y:-.3,cast:!1}));const s=Tt(new ee(le*2,zt*2),e||(t.level<0?i.marbleFloor:i.floor),{y:.001,cast:!1});s.rotation.x=-Math.PI/2,n.add(s);const r=ce("#ffd59a",1.6);if(n.add(Z(le*2+.6,.04,.04,r,{y:0,z:zt+.3,cast:!1,receive:!1})),n.add(Z(.04,.04,zt*2+.6,r,{x:le+.3,y:0,cast:!1,receive:!1})),n.add(Z(le*2+.6,.03,.03,ce("#ffc070",1.2),{y:-.58,z:zt+.3,cast:!1,receive:!1})),t.level<0){const p=new lt({color:3816008,roughness:.9});n.add(Z(le*2,an,.4,p,{y:an/2,z:-zt-.1})),n.add(Z(.4,an,zt*2,p,{x:-le-.1,y:an/2})),n.add(Z(.4,an,zt*2+.2+de.z1,p,{x:le+.1,y:an/2,z:(zt+de.z1)/2+.1})),n.add(Z(le*2,.5,.25,p,{y:.25,z:zt}));for(let v=-le+2.5;v<le;v+=5)n.add(Z(.5,an,.5,p,{x:v,y:an/2,z:-zt+.25}));n.add(Z(le*2,.03,.03,ce("#38bdf8",1.4),{y:an-.25,z:-zt+.12,cast:!1}))}else fa(n,-le,-zt,le,-zt,an,2.5),fa(n,-le,zt,-le,-zt,an,3),fa(n,-le,zt,le,zt,1.05,3,{sill:!1,top:!0,accent:"#ffcf8a"}),fa(n,le,zt,le,de.z1,1.05,3,{sill:!1,top:!0,accent:"#ffcf8a"}),n.add(Z(.22,an+.1,.22,i.bronze,{x:-le,y:an/2,z:-zt}));if(t.level>=0)for(const p of[-le,-5,5])n.add(Z(.26,an,.26,i.bronze,{x:p,y:an/2,z:zt-.15}));const a=Cn(9,.5,(p,v,S)=>{p.fillStyle="#0d0b26",p.fillRect(0,0,v,S),p.fillStyle="#f5c46b",p.font="800 70px system-ui",p.textBaseline="middle",p.fillText(t.label,30,S/2+3),p.fillStyle="#f5f3ff",p.font="700 64px system-ui",p.fillText(t.name.toUpperCase(),150,S/2+3)},{frame:!1,emissive:1});a.position.set(-le+4.8,-.3,zt+.31),n.add(a);const o=document.createElement("div");o.className="room-label floor-label",o.textContent=`${t.label} · ${t.name}`;const c=new gc(o);c.position.set(0,.05,zt+.2),n.add(c);const l=new lt({color:15526113,roughness:.4,metalness:0}),u=de.x1-de.x0,d=de.z1-de.z0,h=(de.x0+de.x1)/2,f=(de.z0+de.z1)/2;n.add(Z(u,Yi,d,l,{x:h,y:Yi/2-.6,z:f}));const g=new lt({color:12105160,metalness:1,roughness:.25});for(const p of[-2,.6-2+2.2]){const v=de.z0+1.5+(p<0?0:2.5);n.add(Z(.06,2.5,1.4,g,{x:de.x0-.03,y:1.25,z:v})),n.add(Z(.07,2.62,.04,i.brass,{x:de.x0-.035,y:1.31,z:v})),n.add(Z(.07,.06,1.5,i.brass,{x:de.x0-.035,y:2.55,z:v})),n.add(Z(.03,.08,.3,ce("#fbbf24",1.8),{x:de.x0-.06,y:2.85,z:v,cast:!1}))}const _=Cn(1.6,.42,(p,v,S)=>{p.fillStyle="#0d0b26",p.fillRect(0,0,v,S),p.fillStyle="#fde68a",p.font="800 54px system-ui",p.textAlign="center",p.textBaseline="middle",p.fillText(`LIFT · ${t.label}`,v/2,S/2+2)},{frame:!1});_.position.set(de.x0-.07,3.35,de.z0+2.75),_.rotation.y=-Math.PI/2,n.add(_),n.add(Z(1,2.3,.06,new lt({color:3880278,roughness:.5}),{x:h+.8,y:1.15,z:de.z1+.03}));const m=Cn(1,.3,(p,v,S)=>{p.fillStyle="#065f46",p.fillRect(0,0,v,S),p.fillStyle="#ecfdf5",p.font="800 40px system-ui",p.textAlign="center",p.textBaseline="middle",p.fillText("▲▼ STAIRS",v/2,S/2+2)},{frame:!1});m.position.set(h+.8,2.6,de.z1+.04),n.add(m),n.add(Z(.05,Yi,.05,ce("#ffd59a",1.4),{x:de.x1+.03,y:Yi/2-.6,z:de.z1+.03,cast:!1}))}function ty(n){const t=Se.M;n.add(Z(le*2+.6,.6,zt*2+.6,t.plinth,{y:.3,cast:!1})),n.add(Z(le*2+.6,.04,.04,ce("#ffd59a",1.6),{y:.62,z:zt+.3,cast:!1})),n.add(Z(de.x1-de.x0,1.4,de.z1-de.z0,new lt({color:15526113,roughness:.4}),{x:(de.x0+de.x1)/2,y:.7,z:(de.z0+de.z1)/2}));const e=new lt({color:1981066,roughness:.25,metalness:.6});for(let i=0;i<6;i++)for(let s=0;s<2;s++){const r=Z(3.2,.05,1.6,e,{x:-11+i*3.6,y:1,z:-5+s*2.2});r.rotation.x=-.25,n.add(r)}}const ey={x0:-le-1.5,x1:de.x1+1.5,z0:-zt-1.5,z1:zt+1.5};function ny(n,t,e){const i=new lt({color:14275270,roughness:.7}),s=e-t,r=(t+e)/2,a=-le-.3,o=de.x1+.3,c=-zt-.3,l=zt+.3,u=1.6,d=[Z(u,s,l-c+2*u,i,{x:a-u/2,y:r,cast:!1}),Z(u,s,l-c+2*u,i,{x:o+u/2,y:r,cast:!1}),Z(o-a,s,u,i,{x:(a+o)/2,y:r,z:c-u/2,cast:!1})],h=new At;h.add(Z(o-a,s,u,i,{x:(a+o)/2,y:r,z:l+u/2,cast:!1})),h.add(Z(o-a,s-.6,.2,i,{x:(a+o)/2,y:r-.3,z:l-.1,cast:!1})),[...d,h].forEach(g=>n.add(g));const f=ce("#ffc070",1.3);return n.add(Z(o-a+2*u,.05,.05,f,{x:(a+o)/2,y:e,z:l+u,cast:!1})),n.add(Z(.05,.05,l-c+2*u,f,{x:o+u,y:e,cast:!1})),{front:h}}const vu={},on=(n,t)=>vu[n]||(vu[n]=t());function Ec(n,{scale:t=1.3,ring:e=!0,manager:i=!1}={}){const s=new Pt(n),r=new At;r.scale.setScalar(t);const a=new Ci({color:16185084,roughness:.28,clearcoat:.6,clearcoatRoughness:.2}),o=new Ci({color:s,roughness:.3,clearcoat:.5,emissive:s,emissiveIntensity:.1}),c=new lt({color:1315886,roughness:.15,metalness:.4}),l=new te({color:s.clone().multiplyScalar(2.2)});let u=0;for(const P of String(n))u=u*31+P.charCodeAt(0)>>>0;const d=u%4,h=[["#ffffff","#ef4444"],["#22c55e","#f8fafc"],["#f97316","#111827"],["#38bdf8","#fde047"],["#f472b6","#ffffff"],["#facc15","#1f2937"]][u%6],f=new lt({color:[3099245,2040617,12166270,3883602][d],roughness:.85}),g=new lt({color:16316660,roughness:.5}),_=new lt({color:h[0],roughness:.45}),m=new lt({color:h[1],roughness:.4,emissive:h[1],emissiveIntensity:.15}),p=[];for(const P of[-1,1]){const D=new At;D.position.set(P*.15,.46,0),D.add(Tt(on("leg",()=>new mn(.095,.085,.4,12)),f,{y:-.2})),D.add(It(.22,.06,.34,.025,g,{y:-.44,z:.04})),D.add(It(.2,.1,.28,.045,_,{y:-.37,z:.03})),D.add(It(.21,.035,.16,.015,m,{y:-.37,z:.04})),D.add(It(.17,.04,.08,.02,g,{y:-.34,z:.15})),r.add(D),p.push(D)}const v=new At;v.position.y=.5,r.add(v);const S=new lt({color:[1120295,2042167,8138002,998718][u%4],roughness:.55});if(v.add(It(.68,.64,.5,.16,d===1?S:o,{y:.32})),d===1)v.add(It(.3,.56,.05,.04,o,{y:.32,z:.235})),v.add(It(.7,.07,.52,.03,m,{y:.03}));else{v.add(It(.4,.18,.05,.05,new lt({color:s.clone().multiplyScalar(.7),roughness:.7}),{y:.16,z:.24}));for(const D of[-.06,.06])v.add(Tt(on("string",()=>new mn(.012,.012,.2,6)),a,{x:D,y:.5,z:.255}));const P=Tt(on("hood",()=>new Zi(.22,.08,8,18,Math.PI)),o,{y:.66,z:-.12});P.rotation.x=-.4,v.add(P)}v.add(It(.3,.12,.05,.04,a,{y:.45,z:.24})),v.add(Tt(on("chest",()=>new ti(.05,16)),l,{y:.36,z:.265,cast:!1}));const x=[];for(const P of[-1,1]){const D=new At;D.position.set(P*.4,.52,0),D.add(Tt(on("arm",()=>new pr(.085,.32,4,10)),d===1?S:o,{y:-.2})),D.add(Tt(on("cuff",()=>new mn(.09,.09,.05,12)),a,{y:-.36})),D.add(Tt(on("hand",()=>new Xe(.085,12,10)),a,{y:-.43})),D.rotation.z=P*.12,v.add(D),x.push(D)}const M=new At;M.position.y=.98,v.add(M),M.add(It(.82,.6,.62,.2,a,{})),M.add(It(.64,.36,.08,.1,c,{z:.3,cast:!1}));const b=[];for(const P of[-1,1]){const D=Tt(on("eye",()=>new pr(.045,.06,4,8)),l,{x:P*.14,y:.01,z:.345,cast:!1});M.add(D),b.push(D)}for(const P of[-1,1]){const D=Ct(.1,.1,.08,o,{x:P*.43},16);D.rotation.z=Math.PI/2,M.add(D)}if(M.add(Ct(.015,.015,.22,c,{y:.4},6)),!i){const P=new lt({color:h[1]==="#ffffff"||h[1]==="#f8fafc"?1120295:h[1],roughness:.6});if(d===0||d===2){const D=new At;D.position.y=.27,D.rotation.y=d===2?Math.PI:0,D.add(Tt(on("capdome",()=>new Xe(.36,20,10,0,Math.PI*2,0,Math.PI/2)),P,{}));const X=Tt(on("brim",()=>new mn(.24,.24,.025,20,1,!1,-Math.PI/2,Math.PI)),P,{z:.26,y:.01});X.scale.z=1.1,D.add(X),M.add(D)}else if(d===3){const D=Tt(on("hp",()=>new Zi(.42,.03,8,24,Math.PI)),P,{y:.02});D.rotation.y=Math.PI/2,M.add(D);for(const X of[-1,1]){const H=Ct(.13,.13,.08,P,{x:X*.45},16);H.rotation.z=Math.PI/2,M.add(H)}}else M.add(Tt(on("beanie",()=>new Xe(.37,20,10,0,Math.PI*2,0,Math.PI/2)),P,{y:.24})),M.add(Ct(.375,.375,.1,P,{y:.25},20))}const A=Tt(on("bulb",()=>new Xe(.06,14,10)),l,{y:.53,cast:!1});if(M.add(A),i){const P=new lt({color:15381256,metalness:.8,roughness:.3}),D=Tt(new mi(.06,.26,4),P,{y:.42,z:.27});D.rotation.x=Math.PI,v.add(D);const X=Ct(.3,.33,.1,new lt({color:1973067,roughness:.6}),{y:.34},20);M.add(X),M.add(Ct(.34,.34,.02,P,{y:.3},20));const H=It(.28,.36,.03,.02,new lt({color:9132587,roughness:.6}),{y:-.38,z:.12});H.add(Tt(new ee(.22,.28),new te({color:16317180}),{z:.02,cast:!1})),H.rotation.x=-.5,x[1].add(H)}let y=null,w=null;if(e){y=new te({color:s.clone().multiplyScalar(2),transparent:!0,opacity:.9,side:Ue}),w=new Zt(on("ring",()=>new Ya(.62,.71,64)),y),w.rotation.x=-Math.PI/2,w.position.y=.012,r.add(w);const P=new Zt(on("glow",()=>new ee(2.4,2.4)),new te({map:Ef(`rgba(${s.r*255|0},${s.g*255|0},${s.b*255|0},0.5)`),transparent:!0,depthWrite:!1,blending:gi}));P.rotation.x=-Math.PI/2,P.position.y=.01,r.add(P)}const R=Math.random()*10;let L=2+Math.random()*4;const N=Wa.lerp;function z(P,D="idle"){if(D==="walking"){const H=Math.sin(P*7+R);p[0].rotation.x=H*.45,p[1].rotation.x=-H*.45,x[0].rotation.x=-H*.35,x[1].rotation.x=N(x[1].rotation.x,-.6,.1),v.position.y=.5+Math.abs(Math.cos(P*7+R))*.04,M.rotation.y=N(M.rotation.y,Math.sin(P*.7)*.25,.05)}else p[0].rotation.x=N(p[0].rotation.x,0,.15),p[1].rotation.x=N(p[1].rotation.x,0,.15),v.position.y=.5+Math.sin(P*2.2+R)*.035;D==="working"?(M.rotation.y=N(M.rotation.y,-.25+Math.sin(P*.8+R)*.12,.08),M.rotation.x=N(M.rotation.x,.2,.08),x[0].rotation.x=-1.05+Math.sin(P*16+R)*.14,x[1].rotation.x=-1.05+Math.sin(P*16+R+Math.PI)*.14,l.color.copy(s).multiplyScalar(2.4+Math.sin(P*9)*.5),y&&(y.opacity=.75+Math.sin(P*5)*.25,w.scale.setScalar(1+Math.sin(P*3)*.05))):D==="idle"&&(M.rotation.y=N(M.rotation.y,Math.sin(P*.55+R)*.6,.05),M.rotation.x=N(M.rotation.x,0,.05),x[0].rotation.x=N(x[0].rotation.x,Math.sin(P*1.6+R)*.08,.1),x[1].rotation.x=N(x[1].rotation.x,i?-.6:-Math.sin(P*1.6+R)*.08,.1),l.color.copy(s).multiplyScalar(1.5),y&&(y.opacity=.4,w.scale.setScalar(1)));const X=P>L&&P<L+.12;b.forEach(H=>H.scale.y=X?.15:1),P>L+.12&&(L=P+2.5+Math.random()*4),A.scale.setScalar(1+Math.sin(P*4+R)*.15)}return{group:r,head:M,body:v,arms:x,update:z}}const Hi=n=>n?n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"--:--",iy=30*60*1e3,yu=new Map;function sy(n,t){if(!n)return null;let e=yu.get(n);return e||(e={img:new Image,ok:!1,failed:!1,cbs:[]},e.img.decoding="async",e.img.onload=()=>{e.ok=!0,e.cbs.splice(0).forEach(i=>i())},e.img.onerror=()=>{e.failed=!0,e.cbs.splice(0).forEach(i=>i())},e.img.src=n,yu.set(n,e)),!e.ok&&!e.failed&&t&&e.cbs.push(t),e}function nr(n,t,e,i){const s=String(t||"").split(/\s+/).filter(Boolean),r=[];let a="";for(let c=0;c<s.length;c++){const l=a?`${a} ${s[c]}`:s[c];if(n.measureText(l).width<=e){a=l;continue}if(a&&r.push(a),a=s[c],r.length===i){a="",r[i-1]+=" …";break}}a&&r.length<i&&r.push(a);const o=r.length-1;if(o>=0){let c=r[o];for(;n.measureText(c).width>e&&c.length>3;)c=c.slice(0,-3)+"…";r[o]=c}return r}function ry(n,{width:t=1024,height:e=640,anisotropy:i=8,onNeedsRedraw:s}={}){const r=t,a=e,o=a/640,c=document.createElement("canvas");c.width=r,c.height=a;const l=c.getContext("2d"),u=new _n(c);u.colorSpace=Pe,u.anisotropy=i;let d="";const h={dot:{x:0,y:0},cursor:{x:0,y:0,h:60},working:!1,image:!1},f=(m,p,v="system-ui, sans-serif")=>`${m} ${Math.round(p*o)}px ${v}`;function g(m,p,v,S,x){l.fillStyle=n.color,l.globalAlpha=.25,l.fillRect(0,0,r,100*o),l.globalAlpha=1,l.fillStyle="rgba(8,8,26,0.55)",l.fillRect(0,0,r,100*o),l.fillStyle=n.color,l.fillRect(0,0,14*o,100*o),l.fillStyle="#ffffff",l.font=f(700,56),l.textBaseline="alphabetic",l.fillText(n.name,40*o,68*o),l.font=f(800,44);const M=p?"WORKING":"IDLE",b=l.measureText(M).width;l.fillStyle=p?"#4ade80":"#94a3b8",l.textAlign="right",l.fillText(M,r-36*o,66*o),l.textAlign="left",h.dot={x:r-36*o-b-30*o,y:51*o},l.beginPath(),l.arc(h.dot.x,h.dot.y,13*o,0,Math.PI*2),p?l.fill():(l.lineWidth=4*o,l.strokeStyle="#94a3b8",l.stroke());const A=100*o+44*o;l.fillStyle="rgba(8,8,26,0.7)",l.fillRect(0,100*o,r,62*o),l.font=f(700,32),v?(l.fillStyle="#4ade80",l.fillText(`● LIVE · reported ${Hi(m.reportedAt)}`,40*o,A)):S?(l.fillStyle="#a5b4fc",l.fillText(`reported ${Hi(m.reportedAt)}`,40*o,A)):(l.fillStyle="#fbbf24",l.fillText("estimated from activity",40*o,A)),l.font=f(500,32),l.fillStyle="#b4b2e0",l.textAlign="right",l.fillText(`updated ${Hi(x)}`,r-36*o,A),l.textAlign="left"}function _(m){const p=m.status==="working",v=m.source==="reported"&&m.reportedAt,S=v&&Date.now()-m.reportedAt.getTime()<iy,x=m.lastActive||m.updatedAt,M=(m.events||[]).slice(-2).reverse(),b=m.screenshot?sy(m.screenshot,()=>{d="",s&&s()}):null,A=!!(b&&b.ok),y=JSON.stringify([m.status,m.task,m.detail,m.source,S,v&&Hi(m.reportedAt),Hi(x),M.map(R=>[Hi(R.ts),R.message]),m.screenshot,A]);if(y===d)return h;d=y;const w=l.createLinearGradient(0,0,0,a);if(w.addColorStop(0,p?"#0f1738":"#0c0c22"),w.addColorStop(1,p?"#0a0f28":"#08081a"),l.fillStyle=w,l.fillRect(0,0,r,a),A){const R=b.img,L=162*o,N=a-96*o,z=Math.min(r/R.width,(N-L)/R.height),P=R.width*z,D=R.height*z;l.fillStyle="#05050f",l.fillRect(0,L,r,N-L),l.drawImage(R,(r-P)/2,L+(N-L-D)/2,P,D),g(m,p,S,v,x),l.fillStyle="rgba(8,8,26,0.88)",l.fillRect(0,N,r,a-N),l.fillStyle=n.color,l.fillRect(0,N,r,4*o),l.font=f(700,46),l.fillStyle="#ffffff";const X=nr(l,m.task||"—",r-80*o,1)[0]||"";l.fillText(X,40*o,N+64*o),h.cursor={x:40*o+l.measureText(X).width+12*o,y:N+26*o,h:46*o},h.image=!0}else{l.fillStyle="rgba(255,255,255,0.02)";for(let P=0;P<a;P+=6)l.fillRect(0,P,r,2);g(m,p,S,v,x),l.font=f(700,26),l.fillStyle="#8b8bc4",l.fillText("CURRENT TASK",40*o,206*o),l.font=f(700,70),l.fillStyle=p?"#ffffff":"#d9d9ee";const R=nr(l,m.task||"—",r-90*o,3),L=80*o;R.forEach((P,D)=>l.fillText(P,40*o,276*o+D*L));const N=276*o+(R.length-1)*L;h.cursor={x:40*o+l.measureText(R[R.length-1]||"").width+14*o,y:N-52*o,h:60*o},m.detail&&(l.font=f(500,36),l.fillStyle="#c4c2f0",l.fillText(nr(l,m.detail,r-90*o,1)[0]||"",40*o,N+56*o));const z=a-108*o;l.fillStyle="rgba(139,92,246,0.35)",l.fillRect(40*o,z,r-80*o,2*o),M.forEach((P,D)=>{const X=z+44*o+D*42*o;l.font=f(500,28,"ui-monospace, Menlo, monospace"),l.fillStyle="#7a78b4";const H=Hi(P.ts);l.fillText(H,40*o,X);const et=40*o+l.measureText(H).width+22*o;l.font=f(400,30),l.fillStyle="#d6d5f2",l.fillText(nr(l,P.message,r-et-40*o,1)[0]||"",et,X)}),M.length||(l.font=f(400,30),l.fillStyle="#6f6fa8",l.fillText("No recent events",40*o,z+44*o)),h.image=!1}return h.working=p,u.needsUpdate=!0,h}return{tex:u,draw:_,W:r,H:a,invalidate:()=>d=""}}function ay(n,t,e,{onNeedsRedraw:i}={}){const s=Se.M,r=new Pt(t.color),a=new At;a.position.set(t.desk.x,0,t.desk.z),a.rotation.y=t.desk.rot||0,n.add(a);const o=!!t.desk.wide,c=t.kind==="station",l=o?4.4:3.2,u=1.15,d=.76;a.add(It(l,.06,u,.02,s.walnut,{y:d}));for(const ot of[-1,1])for(const k of[-1,1])a.add(Z(.045,d-.03,.045,s.blackMetal,{x:ot*(l/2-.08),y:(d-.03)/2,z:k*(u/2-.08)}));a.add(It(.5,.55,u-.15,.02,s.whiteMatte,{x:-l/2+.4,y:.42})),a.add(Z(l-.04,.012,.012,ce(t.color,1.8),{y:d-.035,z:u/2,cast:!1}));const h=o?3.9:2.9,f=o?1600:1280,g=800,_=h*(g/f),m=ry(t,{width:f,height:g,onNeedsRedraw:()=>i&&i(t.id)}),p=new At,v=It(h+.1,_+.1,.07,.03,s.graphite,{});p.add(v);const S=new te({map:m.tex}),x=new Zt(new ee(h,_),S);x.position.z=.037,p.add(x),p.add(Z(h*.4,_*.5,.05,s.graphite,{z:-.05}));const M=new Zt(new ti(1,24),new te({color:new Pt("#4ade80").multiplyScalar(1.3),transparent:!0})),b=new Zt(new ee(1,1),new te({color:r.clone().multiplyScalar(1.4)})),A=new Zt(new ee(h,_*.06),new te({color:5267632,transparent:!0,opacity:.06,blending:gi,depthWrite:!1}));[M,b,A].forEach((ot,k)=>{ot.position.z=.04+k*.001,p.add(ot)});const y=(ot,k)=>[(ot/f-.5)*h,(.5-k/g)*_],w=.25,R=new At;if(p.position.y=w+_/2,p.rotation.x=-.06,R.add(p),R.add(Ct(.045,.045,w+_*.3,s.blackMetal,{y:(w+_*.3)/2,z:-.08},12)),R.add(It(.6,.03,.34,.01,s.blackMetal,{y:.015,z:-.04})),R.position.set(o?-.3:-.45,d+.03,-.25),a.add(R),v.userData.agentId=t.id,x.userData.agentId=t.id,o){const ot=It(1.2,.8,.05,.02,s.graphite,{x:-l/2-.55,y:d+.75,z:-.05});ot.rotation.y=.5,a.add(ot);const k=Tt(new ee(1.1,.7),new te({color:new Pt(r).multiplyScalar(.35)}),{x:-l/2-.54,y:d+.75,z:-.02,cast:!1});k.rotation.y=.5,a.add(k),a.add(Ct(.03,.03,.4,s.blackMetal,{x:-l/2-.55,y:d+.2,z:-.07},8))}const L=o?2.2:1.6;a.add(It(.62,.025,.2,.01,s.whiteMatte,{x:0,y:d+.045,z:.3})),a.add(It(.07,.03,.11,.015,s.whiteMatte,{x:.5,y:d+.045,z:.32}));const N=Ct(.06,.055,.13,new lt({color:r,roughness:.3}),{x:l/2-.22,y:d+.095,z:.3},16);a.add(N),a.add(Ct(.07,.055,.1,s.ceramic,{x:-l/2+.25,y:d+.08,z:.3},12));for(let ot=0;ot<5;ot++){const k=Tt(new mi(.025,.12,5),s.leaf2,{x:-l/2+.25+Math.cos(ot)*.03,y:d+.17,z:.3+Math.sin(ot)*.03});k.rotation.set(Math.sin(ot)*.4,0,Math.cos(ot)*.4),a.add(k)}if(c){a.add(It(.3,.04,.4,.02,s.graphite,{x:-.9,y:d+.05,z:.25}));for(let ot=0;ot<12;ot++)a.add(Z(.05,.01,.05,ot%4===3?s.brass:s.whiteMatte,{x:-.97+ot%4*.05,y:d+.075,z:.18+Math.floor(ot/4)*.07}));for(let ot=0;ot<4;ot++)a.add(Z(.42,.012,.3,s.whiteMatte,{x:.9,y:d+.04+ot*.013,z:.25}))}let z=null;const P=new At;P.position.set(L,0,-1),a.add(P),c||(z=Ec(t.color,{scale:1.25}),P.add(z.group));const D=new Zt(new Dn(1.1,2.1,1.1),new te({visible:!1}));D.position.y=1.05,D.userData.agentId=t.id,P.add(D),c&&D.position.set(-L,1.05,1);const X=document.createElement("div");X.className="tag",X.dataset.agent=t.id,X.innerHTML=`<span class="tag-dot" style="background:${t.color}"></span><span class="tag-name">${t.name}</span><span class="tag-state"></span>`;const H=new gc(X);H.position.set(c?-L:0,c?d+_+.75:2.6,c?.8:0),P.add(H);let et=!1,K=null;function tt(ot){ot.status!==K&&(K=ot.status,et=ot.status==="working",X.classList.toggle("working",et),X.querySelector(".tag-state").textContent=et?"working":"idle");const k=m.draw(ot),[nt,ft]=y(k.dot.x,k.dot.y);M.position.set(nt,ft,M.position.z),M.scale.setScalar(13*g/640/f*h),M.visible=et;const[B,q]=y(k.cursor.x+9,k.cursor.y+k.cursor.h/2);b.position.set(B,q,b.position.z),b.scale.set(14/f*h*(g/640),k.cursor.h/g*_,1),b.userData.show=et&&!k.image,b.visible=b.userData.show,A.visible=et,S.color.setScalar(et?1:.6)}function j(ot,k=!0){k&&(z&&z.update(ot,et?"working":"idle"),et&&(M.material.opacity=.35+(.5+.5*Math.sin(ot*4))*.65,b.visible=b.userData.show&&Math.floor(ot*2.2)%2===0,A.position.y=_/2-ot*.18%1*_))}function Nt(){x.updateWorldMatrix(!0,!1);const ot=new I().setFromMatrixPosition(x.matrixWorld),k=new I(0,0,1).applyQuaternion(x.getWorldQuaternion(new Pn));return{center:ot,normal:k,width:h,height:_}}return{agent:t,hit:D,frame:x,tag:X,tex:m.tex,setData:tt,update:j,screenView:Nt,isWorking:()=>et,worldPos:()=>P.getWorldPosition(new I)}}const Mu=3600*1e3;function oy(n,t=Date.now()){const e=n.lastActive?n.lastActive.getTime():0;return n.status==="working"&&e&&t-e>2*Mu?"no update for 2h+":n.status==="idle"&&e&&t-e>6*Mu?"idle 6h+":/error|fail|blocked|stuck/i.test(n.task||"")?"reports a problem":null}function ly(n,t,e,{board:i}={}){const s=Ec("#e2e8f0",{scale:1.15,ring:!1,manager:!0});n.add(s.group);const r=e.map(([S,x])=>new I(S,0,x));s.group.position.copy(r[0]);let a=0,o=0;const c=document.createElement("div");c.className="tag manager-tag",c.innerHTML='<span class="tag-dot" style="background:#fbbf24"></span><span class="tag-name">Floor Manager</span><span class="tag-state"></span><div class="mgr-tip"></div>';const l=new gc(c);l.position.set(0,2.45,0),s.group.add(l);const u=new Zt(new Dn(1,2,1),new te({visible:!1}));u.position.y=1,u.userData.managerFloor=t.id,s.group.add(u);let d=null,h=null;if(i){const S=document.createElement("canvas");S.width=1024,S.height=640,h=S.getContext("2d"),d=new _n(S),d.colorSpace=Pe;const x=new At;x.add(Z(i.w+.1,i.w*.625+.1,.06,Se.M.graphite,{}));const M=new Zt(new ee(i.w,i.w*.625),new te({map:d}));M.position.z=.035,x.add(M),x.position.set(i.x,i.y,i.z),x.rotation.y=i.rot||0,n.add(x)}let f={working:0,total:0,flags:[]};function g(S,x){const M=Date.now(),b=S.map(w=>({a:w,s:x(w.id),flag:oy(x(w.id),M)})),A=b.filter(w=>w.s.status==="working").length,y=b.filter(w=>w.flag);f={working:A,total:b.length,flags:y},c.querySelector(".tag-state").textContent=y.length?`⚠ ${y.length}`:`${A}/${b.length}`,c.classList.toggle("alert",y.length>0),c.querySelector(".mgr-tip").innerHTML=`<b>${t.label} · ${t.name}</b><br>${A} of ${b.length} working`+(y.length?`<br>${y.map(w=>`⚠ ${w.a.name}: ${w.flag}`).join("<br>")}`:"<br>✓ nobody needs help"),h&&_(b,A,y)}function _(S,x,M){const b=h,A=1024,y=640;b.fillStyle="#0b0a24",b.fillRect(0,0,A,y),b.fillStyle="#fbbf24",b.fillRect(0,0,A,96),b.fillStyle="#1c1404",b.font="800 50px system-ui",b.textBaseline="middle",b.fillText(`FLOOR ${t.label} · STATUS`,34,50),b.textAlign="right",b.font="700 44px system-ui",b.fillText(`${x}/${S.length} working`,A-34,50),b.textAlign="left",S.slice(0,6).forEach((w,R)=>{const L=150+R*78;b.fillStyle=w.a.color,In(b,34,L-26,16,52,6),b.fill(),b.fillStyle="#f1f0ff",b.font="700 40px system-ui",b.fillText(w.a.name.length>22?w.a.name.slice(0,21)+"…":w.a.name,68,L),b.textAlign="right",b.fillStyle=w.flag?"#f87171":w.s.status==="working"?"#4ade80":"#94a3b8",b.font="700 36px system-ui",b.fillText(w.flag?`⚠ ${w.flag}`:w.s.status.toUpperCase(),A-34,L),b.textAlign="left"}),M.length?(b.fillStyle="#f87171",b.font="600 34px system-ui",b.fillText(`⚠ Floor Manager is checking on ${M.map(w=>w.a.name).join(", ")}`,34,y-40)):(b.fillStyle="#4ade80",b.font="600 34px system-ui",b.fillText("✓ Floor Manager: nobody needs help right now",34,y-40)),d.needsUpdate=!0}const m=new I;let p=0;function v(S){const x=Math.min(.1,S-p);if(p=S,S<o){s.update(S,"idle");return}const M=r[(a+1)%r.length];m.subVectors(M,s.group.position),m.y=0;const b=m.length();if(b<.05){a=(a+1)%r.length,o=S+2.5+a%2*2;return}const A=Math.min(b,.95*x);s.group.position.addScaledVector(m.normalize(),A);let w=Math.atan2(m.x,m.z)-s.group.rotation.y;w=Math.atan2(Math.sin(w),Math.cos(w)),s.group.rotation.y+=w*Math.min(1,x*6),s.update(S,"walking")}return{update:v,setSummary:g,hit:u,tag:c,summary:()=>f}}const cy="https://s.tradingview.com/embed-widget",da=(n,t)=>`${cy}/${n}/?locale=en#${encodeURIComponent(JSON.stringify(t))}`,Zn={symbolOverview:()=>da("symbol-overview",{symbols:[["S&P 500","FOREXCOM:SPXUSD|1D"],["Bitcoin","BITSTAMP:BTCUSD|1D"],["USD/INR","FX_IDC:USDINR|1D"],["Gold","TVC:GOLD|1D"]],chartOnly:!1,width:"100%",height:"100%",locale:"en",colorTheme:"dark",autosize:!0,showVolume:!1,hideDateRanges:!1,scalePosition:"right",scaleMode:"Normal",fontSize:"12",noTimeScale:!1,valuesTracking:"1",changeMode:"price-and-percent",chartType:"area",lineColor:"#f5c46b",topColor:"rgba(245,196,107,0.35)",bottomColor:"rgba(245,196,107,0)"}),ticker:()=>da("ticker-tape",{symbols:[{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"FX_IDC:USDINR",title:"USD/INR"},{proName:"BINANCE:ETHUSDT",title:"ETH"},{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"TVC:GOLD",title:"Gold"},{proName:"TVC:USOIL",title:"Crude"},{proName:"BINANCE:ASTERUSDT",title:"ASTER"}],showSymbolLogo:!0,colorTheme:"dark",isTransparent:!0,displayMode:"adaptive"}),mini:n=>da("mini-symbol-overview",{symbol:n,width:"100%",height:"100%",dateRange:"1D",colorTheme:"dark",isTransparent:!0,autosize:!0}),overview:()=>da("market-overview",{colorTheme:"dark",dateRange:"1D",showChart:!0,width:"100%",height:"100%",isTransparent:!0,showSymbolLogo:!0,tabs:[{title:"Crypto",symbols:[{s:"BITSTAMP:BTCUSD",d:"Bitcoin"},{s:"BINANCE:ETHUSDT",d:"Ethereum"},{s:"BINANCE:SOLUSDT",d:"Solana"}]},{title:"Forex",symbols:[{s:"FX_IDC:USDINR",d:"USD/INR"},{s:"FX:EURUSD",d:"EUR/USD"}]},{title:"Indices",symbols:[{s:"FOREXCOM:SPXUSD",d:"S&P 500"},{s:"FOREXCOM:NSXUSD",d:"Nasdaq 100"}]}]})};function hy(n,t,e="TradingView · live on this floor"){return bn(1024,640,(i,s,r)=>{i.fillStyle="#0a0f1f",i.fillRect(0,0,s,r),i.strokeStyle="rgba(255,255,255,0.06)";for(let u=0;u<s;u+=64)i.beginPath(),i.moveTo(u,80),i.lineTo(u,r),i.stroke();for(let u=80;u<r;u+=64)i.beginPath(),i.moveTo(0,u),i.lineTo(s,u),i.stroke();i.fillStyle="#e2e8f0",i.font="700 44px system-ui",i.fillText(n,32,56),i.fillStyle="#64748b",i.font="500 26px system-ui",i.textAlign="right",i.fillText(e,s-32,54),i.textAlign="left";let a=r*.6,o=t;const c=[];for(let u=0;u<=s;u+=16)o=(o*9301+49297)%233280,a+=(o/233280-.48)*34,a=Math.max(140,Math.min(r-40,a)),c.push([u,a]);const l=i.createLinearGradient(0,140,0,r);l.addColorStop(0,"rgba(34,197,94,0.35)"),l.addColorStop(1,"rgba(34,197,94,0)"),i.beginPath(),i.moveTo(0,r),c.forEach(([u,d])=>i.lineTo(u,d)),i.lineTo(s,r),i.fillStyle=l,i.fill(),i.beginPath(),c.forEach(([u,d],h)=>h?i.lineTo(u,d):i.moveTo(u,d)),i.strokeStyle="#22c55e",i.lineWidth=4,i.stroke()})}function Bl(n,t,e){const i=Se.M,s=[],r=900;for(const[o,c]of e.entries()){const l=new At;l.position.set(c.x,c.y,c.z),l.rotation.y=c.rotY||0,n.add(l),l.add(Z(c.w+.14,c.h+.14,.08,i.graphite,{}));const u=new Zt(new ee(c.w,c.h),new te({map:hy(c.title,17+o*31,c.sub),color:new Pt(.9,.9,.9)}));u.position.z=.045,l.add(u),l.add(Z(c.w,.03,.03,ce("#22c55e",1.6),{y:-c.h/2-.1,z:.05,cast:!1}));const d=document.createElement("div");d.className="tv3d",d.style.width=`${r}px`,d.style.height=`${Math.round(r*c.h/c.w)}px`;const h=new Pv(d);h.scale.setScalar(c.w/r),h.position.z=.05,l.add(h),h.visible=!1,s.push({obj:h,el:d,url:c.url,loaded:!1,s:c.w/r})}s.forEach(o=>{o.anchor=o.obj.parent,o.anchor.remove(o.obj),t.add(o.obj)});const a=new he;return{setLive(o){for(const c of s)o&&!c.loaded&&(c.el.innerHTML=`<iframe src="${c.url}" loading="lazy" allowtransparency="true" frameborder="0" scrolling="no"></iframe>`,c.loaded=!0),c.obj.visible=o,c.el.style.display=o?"":"none"},sync(){for(const o of s)o.obj.visible&&(o.anchor.updateWorldMatrix(!0,!1),a.copy(o.anchor.matrixWorld).multiply(new he().compose(new I(0,0,.05),new Pn,new I().setScalar(o.s))),a.decompose(o.obj.position,o.obj.quaternion,o.obj.scale))}}}function uy(n,t){const e=Se.M,i=2048,s=965,r=document.createElement("canvas");r.width=i,r.height=s;const a=r.getContext("2d"),o=new _n(r);o.colorSpace=Pe,o.anisotropy=8;const c=new At,l=7,u=l*(s/i);c.add(It(l+.25,u+.25,.14,.04,e.graphite,{y:0}));const d=new Zt(new ee(l,u),new te({map:o,color:new Pt(.95,.95,.95)}));d.position.z=.075,c.add(d),c.add(Z(l+.2,.03,.03,ce("#7c3aed",2.6),{y:-u/2-.14,z:.06,cast:!1})),c.position.set(0,1.9+u/2,-zt+.75),n.add(c);for(const g of[-1,1])n.add(Z(.1,1.95,.1,e.bronze,{x:g*(l/2-.4),y:.97,z:-zt+.7}));n.add(Z(l-.3,.08,.5,e.walnut,{y:.04,z:-zt+.7}));const h=Object.fromEntries(t.map(g=>[g.id,g]));function f(g,_){const m=a.createLinearGradient(0,0,i,s);m.addColorStop(0,"#0c0d2b"),m.addColorStop(1,"#141038"),a.fillStyle=m,a.fillRect(0,0,i,s),a.fillStyle="rgba(255,255,255,0.018)";for(let x=0;x<s;x+=6)a.fillRect(0,x,i,2);a.fillStyle="#ef4444",a.beginPath(),a.arc(70,72,14,0,Math.PI*2),a.fill(),a.fillStyle="#e9e7ff",a.font="700 52px system-ui, sans-serif",a.fillText("LIVE ACTIVITY FEED",100,90),a.fillStyle="#8b8bc4",a.font="500 46px ui-monospace, Menlo, monospace",a.textAlign="right",a.fillText(Ua(new Date),i-50,90),a.textAlign="left",a.fillStyle="#2d2a6e",a.fillRect(50,125,i-100,3);const p=1440,v=g.slice(-10);v.forEach((x,M)=>{const b=196+M*74,A=h[x.agentId];M===v.length-1&&(a.fillStyle="rgba(139,92,246,0.18)",In(a,40,b-50,p-20,66,10),a.fill()),a.fillStyle="#6f6fa8",a.font="500 38px ui-monospace, Menlo, monospace",a.fillText(Ua(x.ts),60,b),a.fillStyle=(A==null?void 0:A.color)||"#fff",a.font="700 38px system-ui, sans-serif";const y=(A==null?void 0:A.name)||x.agentId;a.fillText(y,280,b);const w=a.measureText(y).width;a.fillStyle="#dcdcf5",a.font="400 38px system-ui, sans-serif";let R=x.message;const L=p-310-w-30;for(;a.measureText(R).width>L&&R.length>4;)R=R.slice(0,-2);R!==x.message&&(R=R.trimEnd()+"…"),a.fillText(R,280+w+22,b)});const S=p+70;a.fillStyle="#1a1848",In(a,S-20,150,i-S-30,s-190,18),a.fill(),a.fillStyle="#8b8bc4",a.font="700 36px system-ui, sans-serif",a.fillText("AGENTS",S+10,212),t.forEach((x,M)=>{const b=_(x.id),A=270+M*60;a.fillStyle=x.color,a.beginPath(),a.arc(S+20,A-11,11,0,Math.PI*2),a.fill(),a.fillStyle="#ecebff",a.font="600 32px system-ui, sans-serif";let y=x.name;for(;a.measureText(y).width>300&&y.length>3;)y=y.slice(0,-1);a.fillText(y===x.name?y:y+"…",S+44,A),a.fillStyle=b.status==="working"?"#4ade80":"#94a3b8",a.font="600 28px system-ui, sans-serif",a.textAlign="right",a.fillText(b.status==="working"?"● working":"○ idle",i-70,A),a.textAlign="left"}),o.needsUpdate=!0}return{draw:f}}function Tr(n,t,e,i=0){const s=Se.M;return n.add(Z(.1,1.6,.1,s.blackMetal,{x:t,y:.8,z:e})),n.add(Ct(.35,.35,.04,s.blackMetal,{x:t,y:.02,z:e},20)),{x:t,y:2.15,z:e,rot:i,w:1.7}}function fy(n,{cssScene:t}){const e=Se.M,i=[],s=Bl(n,t,[{title:"Ticker",url:Zn.ticker(),x:-2,y:6.35,z:-zt+.45,w:17.6,h:.55},{title:"BTC / USD",url:Zn.mini("BITSTAMP:BTCUSD"),x:-8.4,y:4.45,z:-zt+.45,w:4.6,h:2.9},{title:"USD / INR",url:Zn.mini("FX_IDC:USDINR"),x:-3.5,y:4.45,z:-zt+.45,w:4.6,h:2.9},{title:"Market overview",url:Zn.overview(),x:2.6,y:4.2,z:-zt+.45,w:6.6,h:3.4}]);return n.add(Z(18,.1,.5,e.walnut,{x:-2,y:2.35,z:-zt+.35})),ze(n,"TRADING FLOOR · LIVE MARKETS",-2,2.6,-zt+.62,0,{w:4.4,h:.32,bg:"#052e1a",fg:"#86efac",size:40}),vr(n,-6.4,3.6,7.2,3.4,e.rugIndigo),[-9,-6.4,-3.8].forEach(r=>Wv(n,r,3.4,Math.PI)),Sc(n,-6.4,5.4,.5),Yv(n,10.4,-4.6,0),qv(n,-13.6,-1.2,Math.PI/2),yr(n,6.6,3.6,-zt+.3,0,2.2,1.4,0),Tf(n,13.6,2.3,2.4,-Math.PI/2,5,3),We(n,-14.2,-8.2,1.15,1),We(n,7.6,7.8,1,0),We(n,-14.2,7.9,1,0),We(n,4.2,1.8,.8,0),Mc(n,-10.6,5.6),Oa(n,10.8,4.8,-Math.PI/4,e.velvetTeal),Oa(n,8.6,5.6,Math.PI/6,e.velvetTeal),{markets:s,ups:i,waypoints:[[-1,1.2],[6.5,1.2],[6.5,6.6],[-11.5,6.6],[-11.5,1.2]],board:Tr(n,4.6,6.8,-.35),light:[[-6,0],[6,0]]}}function dy(n,{agents:t}){const e=Se.M,i=uy(n,t);return Xv(n,-11.4,6.6,0),vr(n,10.4,5.4,6,3.2,e.rugSand),wf(n,10.4,6.6,Math.PI,e.velvetPlum,2.6),Oa(n,7.8,5.2,Math.PI/2,e.velvetTeal),Sc(n,10.4,5,.55),yc(n,-14.6,1.6,Math.PI/2),bc(n,-12,12,.8,6.2),yr(n,-8.2,4.4,-zt+.3,0,1.6,1.1,1),yr(n,8.2,4.4,-zt+.3,0,1.6,1.1,2),We(n,-14.2,-8.2,1.1,1),We(n,14.2,7.9,1,0),We(n,-4.2,-8.2,1,0),We(n,4.2,-8.2,1,0),We(n,-6.8,7.6,.9,1),Mc(n,13.8,4.2),{feed:i,waypoints:[[-7,0],[-2,4.6],[6,3.6],[7,0],[-1,-1]],board:Tr(n,-4.6,6.4,.25),light:[[-6,0],[6,0]]}}function py(n,{agents:t,stations:e}){const i=Se.M,s=[],r=t.filter(f=>f.floor==="studio");ze(n,"LIVE WORK WALL",-3.6,6.6,-zt+.55,0,{w:3.4,h:.34,bg:"#1e1b4b",fg:"#e0e7ff",size:44}),r.forEach((f,g)=>{const p=-11.2+g*4.4,v=new At;v.position.set(p,4.85,-zt+.5),n.add(v),v.add(It(4+.12,2.5+.12,.08,.03,i.graphite,{}));const S=new Zt(new ee(4,2.5),new te({map:e.get(f.id).tex}));S.position.z=.045,S.userData.agentId=f.id,v.add(S),v.add(Z(4,.03,.03,ce(f.color,1.8),{y:-2.5/2-.1,z:.05,cast:!1})),s.push({hit:S})});const a=document.createElement("canvas");a.width=1024,a.height=768;const o=new _n(a);o.colorSpace=Pe;const c=new At;c.position.set(10.6,4.6,-zt+.5),n.add(c),c.add(It(4+.12,3+.12,.08,.03,i.graphite,{}));const l=new Zt(new ee(4,3),new te({map:o}));l.position.z=.045,c.add(l);function u(f){const g=a.getContext("2d");g.fillStyle="#f8f5ee",g.fillRect(0,0,1024,768),g.fillStyle="#1f1b3a",g.font="800 56px system-ui",g.fillText("STUDIO TASK BOARD",40,80),r.forEach((_,m)=>{const p=f(_.id),v=130+m*150;g.fillStyle=_.color,In(g,40,v,944,130,16),g.globalAlpha=.18,g.fill(),g.globalAlpha=1,g.fillStyle=_.color,g.fillRect(40,v,14,130),g.fillStyle="#1f1b3a",g.font="700 40px system-ui",g.fillText(_.name,76,v+48),g.textAlign="right",g.fillStyle=p.status==="working"?"#15803d":"#64748b",g.fillText(p.status.toUpperCase(),964,v+48),g.textAlign="left",g.fillStyle="#334155",g.font="400 34px system-ui",nr(g,p.task,880,2).forEach((S,x)=>g.fillText(S,76,v+92+x*36))}),o.needsUpdate=!0}$v(n,-12.6,1.6,.4),Kv(n,-8.4,1.8),yc(n,-14.6,-5.6,Math.PI/2),Zv(n,-3.4,.9),Jv(n,2.2,.9),Vv(n,5,.6,-.2),vr(n,11.4,4.8,0,0,i.rugIndigo,!0),ba(n,11.4,4.8,1.2);const d=[];[["#f97316",0],["#22d3ee",2.1],["#a3e635",4.2]].forEach(([f,g])=>{const _=Ec(f,{scale:.95,ring:!1});_.group.position.set(11.4+Math.cos(g)*1.75,0,4.8+Math.sin(g)*1.75),_.group.rotation.y=Math.atan2(11.4-_.group.position.x,4.8-_.group.position.z),n.add(_.group),d.push(_)});const h=Cn(1.6,.9,(f,g,_)=>{f.fillStyle="#111",f.fillRect(0,0,g,_),f.strokeStyle="#f97316",f.lineWidth=14,f.beginPath(),f.arc(g/2,_/2-10,90,0,Math.PI*1.6),f.stroke(),f.fillStyle="#fff",f.font="700 30px system-ui",f.textAlign="center",f.fillText("LOGO v4",g/2,_-18)});return h.position.set(11.4,1.6,6.9),h.rotation.y=Math.PI,n.add(h),ze(n,"DESIGN TEAM",11.4,3.2,7.6,Math.PI,{w:2.2,h:.32,bg:"#3b0764",fg:"#f5d0fe",size:44}),bc(n,-12,12,-.2,6.2),Tf(n,14.6,2.6,-1.2,-Math.PI/2,4,3),yr(n,-14.6+.2,4,4.4,Math.PI/2,1.8,1.2,2),We(n,-14.2,7.9,1.1,1),We(n,6.2,7.9,1,0),We(n,14.2,-8.2,1,1),Mc(n,-10.4,4.6),{drawBoard:u,ups:s,update:f=>d.forEach((g,_)=>g.update(f+_,Math.sin(f*.4+_)>.3?"working":"idle")),waypoints:[[-6.8,3.6],[6.6,3.2],[7.6,.2],[-6.6,.2]],board:Tr(n,-6.2,6.4,.3),light:[[-6,0],[6,0]]}}const Fs=(n,t,e)=>{n.save(),n.font="800 26px system-ui";const i="EXAMPLE DATA",s=n.measureText(i).width;n.fillStyle="rgba(251,191,36,0.9)",In(n,t-s-54,e-52,s+30,38,8),n.fill(),n.fillStyle="#1c1404",n.textBaseline="middle",n.fillText(i,t-s-39,e-32),n.restore()};function Ar(n,t,e,i){n.fillStyle="#070b1a",n.fillRect(0,0,t,2e3),n.fillStyle=i,n.fillRect(0,0,t,8),n.fillStyle="#e2e8f0",n.font="800 40px system-ui",n.textBaseline="alphabetic",n.fillText(e,28,62)}function Su(n,t,e){Ar(n,t,"PROPERTY DASHBOARD","#f59e0b"),[["Parcels tracked","1,248"],["Registered","1,032"],["In possession","978"],["In dispute","41"],["Flagged","17"]].forEach(([a,o],c)=>{const l=28+c%3*((t-56)/3),u=90+Math.floor(c/3)*130;n.fillStyle="#111a33",In(n,l,u,(t-56)/3-14,116,12),n.fill(),n.fillStyle=c===3?"#f87171":c===4?"#fbbf24":"#f8fafc",n.font="800 46px system-ui",n.fillText(o,l+18,u+58),n.fillStyle="#94a3b8",n.font="500 24px system-ui",n.fillText(a,l+18,u+96)});const s=[62,48,80,35,55,72,40],r=e-80;n.fillStyle="#94a3b8",n.font="600 22px system-ui",n.fillText("Est. profit by region (example)",t*.36+30,285),s.forEach((a,o)=>{n.fillStyle=o%2?"#38bdf8":"#22c55e",n.fillRect(t*.36+30+o*(t*.6/7),r-a*2.4,t*.6/7-14,a*2.4)}),Fs(n,t,e)}function bu(n,t,e){Ar(n,t,"PARCEL MAP","#22d3ee"),n.fillStyle="#0b2530",n.fillRect(20,84,t-40,e-104);let i=7;const s=()=>(i=(i*9301+49297)%233280)/233280;for(let a=0;a<9;a++){const o=60+s()*(t-120),c=120+s()*(e-200);n.beginPath();for(let l=0;l<7;l++){const u=l/7*Math.PI*2,d=60+s()*70;n.lineTo(o+Math.cos(u)*d,c+Math.sin(u)*d*.7)}n.closePath(),n.fillStyle=`hsla(${180+a*14},45%,${18+a%3*5}%,1)`,n.fill(),n.strokeStyle="rgba(148,233,255,0.35)",n.lineWidth=2,n.stroke()}n.strokeStyle="rgba(255,255,255,0.25)",n.lineWidth=5,n.beginPath(),n.moveTo(20,e*.7),n.bezierCurveTo(t*.3,e*.4,t*.6,e*.9,t-20,e*.45),n.stroke();const r=["#22c55e","#22c55e","#fbbf24","#f87171","#38bdf8"];for(let a=0;a<26;a++){const o=50+s()*(t-100),c=110+s()*(e-190);n.fillStyle=r[a%5],n.beginPath(),n.arc(o,c,9,0,Math.PI*2),n.fill(),n.strokeStyle="#fff",n.lineWidth=2,n.stroke()}n.fillStyle="rgba(7,11,26,0.8)",In(n,34,e-150,330,104,10),n.fill(),[["Registered","#22c55e"],["Pending","#fbbf24"],["Dispute","#f87171"]].forEach(([a,o],c)=>{n.fillStyle=o,n.beginPath(),n.arc(56,e-124+c*30,8,0,7),n.fill(),n.fillStyle="#e2e8f0",n.font="500 22px system-ui",n.fillText(a,74,e-116+c*30)}),n.fillStyle="#94a3b8",n.font="500 20px system-ui",n.fillText("not real locations",t-240,62),Fs(n,t,e)}const Eu=[["Deed reading (OCR + AI)","#22c55e"],["Parcel classification","#22c55e"],["Registration / possession check","#fbbf24"],["Profit calculation","#22c55e"],["Circle-rate refresh","#38bdf8"],["Land-deal data refresh","#38bdf8"],["Project news scan","#22c55e"]];function my(n,t,e,i=0){Ar(n,t,"AUTOMATION STATUS","#22c55e"),Eu.forEach(([s,r],a)=>{const o=104+a*((e-150)/Eu.length),c=(i*(.05+a*.013)+a*.17)%1;n.fillStyle="#cbd5e1",n.font="600 25px system-ui",n.fillText(s,28,o+22),n.fillStyle="#111a33",In(n,t*.55,o+2,t*.4,24,12),n.fill(),n.fillStyle=r,In(n,t*.55,o+2,Math.max(24,t*.4*c),24,12),n.fill()}),Fs(n,t,e)}const Go=["Circle rates revised in District A (example)","New ring road approved near Parcel cluster 7","Registry office hours extended this month","Land-deal volume up 4% week on week","Metro extension tender opens next quarter","Court listing update for 3 tracked cases"];function gy(n,t,e,i=0){Ar(n,t,"NEWS FEED","#a78bfa");const s=Math.floor(i/4)%Go.length;for(let r=0;r<5;r++){const a=96+r*92,o=Go[(r+s)%Go.length];n.fillStyle=r===0?"rgba(167,139,250,0.18)":"#0d1428",In(n,20,a,t-40,80,10),n.fill(),n.fillStyle="#a78bfa",n.font="700 20px ui-monospace",n.fillText(`EXAMPLE · ${String(9+r).padStart(2,"0")}:${String(r*13%60).padStart(2,"0")}`,36,a+30),n.fillStyle="#e2e8f0",n.font="600 26px system-ui",n.fillText(o.length>44?o.slice(0,43)+"…":o,36,a+64)}Fs(n,t,e)}function xy(n,t,e,i=0){Ar(n,t,"HYBRID INFRA · ON-SITE + CLOUD","#38bdf8");const s=(c,l,u,d,h,f,g)=>{n.fillStyle="#0d1428",In(n,c,l,u,d,14),n.fill(),n.strokeStyle=g,n.lineWidth=3,n.stroke(),n.fillStyle=g,n.font="800 28px system-ui",n.fillText(h,c+18,l+40),f.forEach(([_,m,p],v)=>{n.fillStyle="#94a3b8",n.font="500 22px system-ui",n.fillText(_,c+18,l+80+v*34),n.fillStyle=p?"#4ade80":"#fbbf24",n.font="700 22px system-ui",n.textAlign="right",n.fillText(m,c+u-18,l+80+v*34),n.textAlign="left"})},r=(t-110)/2;s(28,90,r,e-160,"ON-SITE (B1)",[["Racks online","12 / 12",1],["CRAC cooling","OK · 22°C",1],["UPS","mains · 100%",1],["Generator","standby",1],["ISP A / ISP B","up / up",1]],"#22c55e"),s(28+r+54,90,r,e-160,"CLOUD",[["Uplink","2 × 1 Gbps",1],["Backup sync","last 02:00",1],["AI inference","healthy",1],["Object storage","68% used",1],["Failover","ready",1]],"#38bdf8");const a=28+r+27,o=e/2;n.fillStyle="#38bdf8";for(let c=0;c<3;c++){const l=(i*.8+c/3)%1;n.globalAlpha=1-l,n.beginPath(),n.arc(a,o-40+l*80,7,0,7),n.fill()}n.globalAlpha=1,Fs(n,t,e)}function Vi(n,t,e,i,{px:s=900,x:r,y:a,z:o,rotY:c=0,frame:l=!0}={}){const u=Se.M,d=document.createElement("canvas");d.width=s,d.height=Math.round(s*e/t);const h=new _n(d);h.colorSpace=Pe,h.anisotropy=8;const f=new At;f.position.set(r,a,o),f.rotation.y=c,n.add(f),l&&f.add(It(t+.12,e+.12,.08,.03,u.graphite,{}));const g=new Zt(new ee(t,e),new te({map:h}));g.position.z=.045,f.add(g);const _=m=>{i(d.getContext("2d"),d.width,d.height,m),h.needsUpdate=!0};return _(0),{redraw:_,group:f}}function kl(n,t,e,i,s){const r=new At;return r.position.set(t,e,i),r.rotation.y=s,n.add(r),r.add(It(.22,.34,.05,.02,new lt({color:988970,metalness:.6,roughness:.3}),{})),r.add(Tt(new ti(.06,20),ce("#22d3ee",2.2),{y:-.04,z:.03,cast:!1})),r.add(Z(.14,.05,.01,ce("#4ade80",1.8),{y:.1,z:.03,cast:!1})),r}function Ea(n,t,e,i,s=4937059){const r=Z(1,2.25,.08,new lt({color:s,metalness:.5,roughness:.4}),{x:t,y:1.125,z:e});return r.rotation.y=i,n.add(r),r}function wu(n,t,e,i,s){for(let r=0;r<i;r++)Af(n,t+r*.75,e,s)}function Tu(n,t,e,i){const s=new At;s.position.set(t,0,e),s.rotation.y=i,n.add(s),s.add(It(1.8,2,.9,.03,new lt({color:15067115,roughness:.4}),{y:1}));for(let r=0;r<9;r++)s.add(Z(1.5,.03,.02,Se.M.graphite,{y:.4+r*.12,z:.46,cast:!1}));return s.add(Z(.35,.22,.02,ce("#38bdf8",1.4),{x:.55,y:1.65,z:.46,cast:!1})),s}function Rf(n,t,e,i,s,{perforated:r=!1,lifted:a=[]}={}){const o=bn(256,256,(l,u,d)=>{if(l.fillStyle=r?"#9aa0ae":"#b9bccb",l.fillRect(0,0,u,d),l.strokeStyle="#6b7080",l.lineWidth=6,l.strokeRect(0,0,u,d),r){l.fillStyle="#585d6c";for(let h=24;h<u;h+=22)for(let f=24;f<d;f+=22)l.beginPath(),l.arc(h,f,5,0,7),l.fill()}});o.wrapS=o.wrapT=Ii,o.repeat.set((i-t)/.6,(s-e)/.6);const c=Tt(new ee(i-t,s-e),new lt({map:o,roughness:.7,metalness:.1}),{x:(t+i)/2,y:.11,z:(e+s)/2,cast:!1});c.rotation.x=-Math.PI/2,n.add(c),n.add(Z(i-t,.1,.04,Se.M.blackMetal,{x:(t+i)/2,y:.05,z:s}));for(const[l,u]of a){n.add(Z(.58,.02,.58,new lt({color:1381663}),{x:l,y:.115,z:u,cast:!1}));const d=Z(.58,.03,.58,new lt({color:12172491}),{x:l+.1,y:.4,z:u+.35});d.rotation.x=1,n.add(d),["#3b82f6","#f59e0b","#22c55e"].forEach((h,f)=>{const g=Ct(.02,.02,.56,new lt({color:h}),{x:l-.18+f*.12,y:.13,z:u},6);g.rotation.x=Math.PI/2,n.add(g)})}}function Hl(n,t,e,i,s,r,a=2.4){return ze(n,t,e,i,s,r,{w:a,h:.34,bg:"#7f1d1d",fg:"#fee2e2",size:38})}function _y(n){const t=Se.M,e=new lt({color:4867411,roughness:.85});Qs(n,[[-8.2,-9,-8.2,-4.7],[-8.2,-3.6,-8.2,-2.6],[-15,-2.6,-8.2,-2.6]],3,{tint:14207231}),ze(n,"DEPARTMENT HEAD",-11.6,3.25,-2.6,0,{w:2.6,h:.3,bg:"#312e81",fg:"#e0e7ff",size:40}),ba(n,-13.2,-4,.75),[0,1,2,3].forEach(x=>{const M=x/4*Math.PI*2+.6;Rn(n,-13.2+Math.cos(M)*1.1,-4+Math.sin(M)*1.1,Math.atan2(Math.cos(M),Math.sin(M))+Math.PI)}),yc(n,-14.6,-7,Math.PI/2),We(n,-9,-8.4,.9,1),vr(n,-11.6,-5.4,6,5.2,t.rugIndigo),Qs(n,[[-8.2,-2.6,-8.2,0],[-8.2,1.1,-8.2,4.2],[-15,4.2,-8.2,4.2]],3,{tint:13166335}),ze(n,"MEETING ROOM · 10",-11.6,3.25,4.2,0,{w:2.6,h:.3,bg:"#0c4a6e",fg:"#e0f2fe",size:40}),_u(n,-11,.8,3.4,1.3,10),Vi(n,2.6,1.6,Su,{x:-14.65,y:2,z:-.3,rotY:Math.PI/2}),Vi(n,2.6,1.6,bu,{x:-14.65,y:2,z:2.4,rotY:Math.PI/2}),Rf(n,-7.6,-3.6,7.4,6,{lifted:[[-6.9,1.8],[6.6,-2.8]]});const i=new lt({color:15196888,roughness:.5}),s=["#f59e0b","#38bdf8","#22c55e","#f472b6"];[-4.8,0,4.8].forEach((x,M)=>{for(let b=0;b<2;b++)for(let A=0;A<2;A++){const y=x-.78+A*1.56,w=b?-.825:-1.575,R=b?1:-1;n.add(It(1.5,.05,.75,.02,i,{x:y,y:.86,z:w}));for(const D of[-1,1])n.add(Z(.05,.84,.6,t.blackMetal,{x:y+D*.7,y:.42,z:w}));const L=w-R*.26,N=b?0:Math.PI,z=It(.62,.38,.03,.01,t.graphite,{x:y,y:1.25,z:L});z.rotation.y=N,n.add(z);const P=Tt(new ee(.56,.32),new te({color:new Pt(s[(M+b+A)%4]).multiplyScalar(.5)}),{x:y,y:1.25,z:L+R*.02,cast:!1});P.rotation.y=N,n.add(P),n.add(Z(.03,.3,.03,t.blackMetal,{x:y,y:1,z:L-R*.03})),n.add(Z(.2,.04,.06,ce("#facc15",1.2),{x:y+.5,y:.9,z:L,cast:!1})),Rn(n,y,w+R*.75,b?Math.PI:0)}n.add(Z(.06,.3,1.5,i,{x,y:1.05,z:-1.2})),n.add(Z(.05,2,.05,t.blackMetal,{x,y:1.95,z:-1.2}))}),n.add(Z(13.4,.04,.4,t.blackMetal,{y:2.95,z:-1.2,cast:!1}));for(let x=-6.6;x<=6.6;x+=.5)n.add(Z(.03,.03,.4,t.blackMetal,{x,y:2.97,z:-1.2,cast:!1}));["#3b82f6","#f59e0b","#22c55e","#e11d48"].forEach((x,M)=>{const b=Ct(.025,.025,13.2,new lt({color:x}),{y:3,z:-1.33+M*.09,cast:!1},6);b.rotation.z=Math.PI/2,n.add(b)});for(const x of[-6.6,6.6])n.add(Ct(.01,.01,4,t.blackMetal,{x,y:5,z:-1.2},4));const r=bn(600,600,(x,M,b)=>{x.strokeStyle="#fbbf24",x.lineWidth=10,x.setLineDash([36,22]),x.strokeRect(10,10,M-20,b-20),x.fillStyle="rgba(251,191,36,0.85)",x.font="800 64px system-ui",x.textAlign="center",x.fillText("FUTURE BAY",M/2,b/2-10),x.font="700 56px system-ui",x.fillText("+4 desks",M/2,b/2+64)});[-2.6,2.6].forEach(x=>{const M=Tt(new ee(3.2,3),new te({map:r,transparent:!0,depthWrite:!1}),{x,y:.125,z:3.8,cast:!1});M.rotation.x=-Math.PI/2,n.add(M)}),ze(n,"OPEN OFFICE · 12 DESKS → 20",0,3.35,-1.2,0,{w:3.6,h:.3,bg:"#1f2937",fg:"#fde68a",size:38}),ze(n,"LIVE MONITORING · PROPERTY INTELLIGENCE  (EXAMPLE DATA)",0,5,-zt+.5,0,{w:9,h:.36,bg:"#111827",fg:"#fde68a",size:40});const a=2.8,o=[Su,bu,my,gy,xy].map((x,M)=>Vi(n,a,1.9,x,{x:-5.9+M*2.95,y:3.6,z:-zt+.5,px:840})),c=Vi(n,14.6,.32,(x,M,b,A=0)=>{x.fillStyle="#0b1020",x.fillRect(0,0,M,b),x.fillStyle="#fde68a",x.font="700 30px system-ui",x.textBaseline="middle";const y="EXAMPLE DATA ·  17 deeds flagged for review  ·  circle-rate refresh queued for 02:00  ·  ISP A + ISP B up  ·  cloud backup synced  ·  3 field visits scheduled  ·  ",w=x.measureText(y).width,R=A*80%w;x.fillText(y+y+y,-R,b/2)},{x:0,y:2.38,z:-zt+.5,px:2400,frame:!1});n.add(It(6.4,.06,.9,.02,t.walnut,{x:-1,y:.78,z:-6.3}));for(const x of[-1,1])n.add(Z(.06,.75,.7,t.blackMetal,{x:-1+x*3,y:.4,z:-6.3}));[-3,-1,1].forEach(x=>{n.add(It(.9,.5,.04,.01,t.graphite,{x,y:1.3,z:-6.55})),n.add(Tt(new ee(.84,.45),new te({color:new Pt("#0ea5e9").multiplyScalar(.55)}),{x,y:1.3,z:-6.525,cast:!1})),Rn(n,x,-5.6,Math.PI)}),ze(n,"AI SUPERVISION DESK",-1,.55,-5.83,0,{w:1.8,h:.2,bg:"#0c4a6e",fg:"#e0f2fe",size:34}),Gi(n,[[7.9,-9,7.9,-6.2],[7.9,-6.2,10.8,-6.2],[10.8,-6.2,10.8,-9]],3,new lt({color:14078944,roughness:.7})),Ea(n,8.7,-6.12,0,9146275),Ea(n,10,-6.12,0,9146275),ze(n,"🚻 TOILETS",9.35,2.6,-6.08,0,{w:1.8,h:.3,bg:"#1e3a8a",fg:"#fff",size:40}),Qs(n,[[7.9,-5.6,10.8,-5.6],[7.9,-5.6,7.9,-3],[7.9,-3,9,-3],[10,-3,10.8,-3],[10.8,-3,10.8,-5.6]],2.8,{tint:12573694}),ba(n,9.35,-4.3,.5),Rn(n,9.35,-5,0),n.add(It(1.2,.7,.05,.02,t.graphite,{x:9.35,y:1.6,z:-5.5})),ze(n,"VIDEO CALL",9.35,3,-3,0,{w:1.6,h:.26,bg:"#1e3a8a",fg:"#fff",size:38}),ze(n,"WELCOME · VISITORS & CLIENTS",13,3,-8.75,0,{w:3.6,h:.34,bg:"#3f1d0b",fg:"#fde68a",size:40}),n.add(It(2.4,1.05,.7,.04,t.walnut,{x:12.6,y:.53,z:-6.6})),n.add(Z(2.5,.05,.8,t.marbleWhite,{x:12.6,y:1.07,z:-6.6})),Rn(n,12.6,-7.4,0),wf(n,12.9,-1.4,Math.PI,t.linen,2.4),Oa(n,11.4,-3.4,Math.PI/2,t.velvetTeal),Sc(n,12.9,-3,.5),We(n,14.4,-4.6,1,1),We(n,11.2,-8.4,.8,0),Qs(n,[[9.6,0,11.6,0],[12.7,0,15,0],[9.6,0,9.6,4.2]],3,{tint:16639626}),Gi(n,[[9.6,4.3,15,4.3]],3,new lt({color:2761024,roughness:.6})),vr(n,12.3,2.1,5,3.8,t.rugSand),_u(n,11.8,2.1,2.4,1.1,6);const l=Vi(n,2.9,1.65,vy,{x:14.75,y:1.85,z:2.1,rotY:-Math.PI/2,px:1100}),u=Cn(3.4,.7,(x,M,b)=>{x.fillStyle="#2a2140",x.fillRect(0,0,M,b),x.fillStyle="#fbbf24",x.font="800 70px Georgia, serif",x.textAlign="center",x.textBaseline="middle",x.fillText("SIDATREYA",M/2,b*.38),x.fillStyle="#e9d5ff",x.font="600 36px system-ui",x.fillText("PROPERTY & LAND INTELLIGENCE",M/2,b*.76)},{frame:!1});u.position.set(12.3,2.2,4.2),u.rotation.y=Math.PI,n.add(u),ze(n,"CLIENT PRESENTATION ROOM",12.3,3.25,0,0,{w:3.4,h:.3,bg:"#713f12",fg:"#fef3c7",size:40}),We(n,10.1,3.7,.8,0),Gi(n,[[9.6,4.8,15,4.8],[9.6,4.8,9.6,5.6],[9.6,6.6,9.6,9]],3.2,e),Gi(n,[[9.6,9,15,9]],1.1,e),n.add(Z(5.4,.12,.2,ce("#ef4444",1.2),{x:12.3,y:3.15,z:4.7,cast:!1})),Ea(n,9.56,6.1,Math.PI/2,7020576),kl(n,9.48,1.35,6.85,-Math.PI/2),Vi(n,.5,.32,(x,M,b)=>{x.fillStyle="#04131c",x.fillRect(0,0,M,b),x.fillStyle="#67e8f9",x.font="800 70px ui-monospace",x.fillText("20°C",20,90),x.font="700 44px ui-monospace",x.fillText("RH 45%",24,160),x.fillStyle="#4ade80",x.fillText("● STABLE",24,220)},{x:9.48,y:1.6,z:7.6,rotY:-Math.PI/2,px:400}),Hl(n,"DEED RECORDS · RESTRICTED",9.46,2.75,6.6,-Math.PI/2,2.8),ze(n,"FIRE-RATED 2 HR · CLIMATE CONTROLLED",9.46,2.4,6.6,-Math.PI/2,{w:2.8,h:.22,bg:"#450a0a",fg:"#fecaca",size:30});const d=new lt({color:7041664,metalness:.7,roughness:.35}),h=[14075809,13219210,14866104].map(x=>new lt({color:x,roughness:.9}));for(let x=0;x<4;x++){const M=5.5+x*.85;n.add(Z(4,2.4,.5,d,{x:12.6,y:1.2,z:M}));for(let A=0;A<4;A++)for(let y=0;y<9;y++)n.add(Z(.36,.42,.06,h[(x+A+y)%3],{x:10.9+y*.42,y:.35+A*.56,z:M+.27,cast:!1}));const b=Ct(.12,.12,.05,t.brass,{x:14.7,y:1.2,z:M+.27},12);b.rotation.x=Math.PI/2,n.add(b)}n.add(It(2.6,.06,.9,.02,i,{x:7.6,y:.86,z:7.4}));for(const x of[-1,1])n.add(Z(.05,.84,.75,t.blackMetal,{x:7.6+x*1.2,y:.42,z:7.4}));n.add(It(.9,.4,.6,.04,new lt({color:15987958,roughness:.4}),{x:7,y:1.1,z:7.4}));const f=Z(.7,.03,.45,t.blackMetal,{x:7,y:1.38,z:7.15});f.rotation.x=-.4,n.add(f);for(let x=0;x<6;x++)n.add(Z(.6,.008,.4,t.whiteMatte,{x:7,y:1.4+x*.01,z:7.15,cast:!1}));n.add(Z(.5,.04,.02,ce("#22d3ee",2),{x:7,y:1,z:7.71,cast:!1})),n.add(It(.8,.5,.04,.01,t.graphite,{x:8.3,y:1.35,z:7.15})),n.add(Tt(new ee(.74,.44),new te({color:new Pt("#22d3ee").multiplyScalar(.5)}),{x:8.3,y:1.35,z:7.175,cast:!1})),Rn(n,7.6,8.3,Math.PI),ze(n,"SCAN & INTAKE → AI PIPELINE",7.6,2.2,6.85,0,{w:2.8,h:.3,bg:"#083344",fg:"#a5f3fc",size:38});const g=bn(256,16,(x,M,b)=>{x.fillStyle="#000",x.fillRect(0,0,M,b);for(let A=0;A<M;A+=64)x.fillStyle="#22d3ee",x.fillRect(A,0,30,b)});g.wrapS=Ii,g.repeat.set(12,1);const _=new te({map:g,transparent:!0,opacity:.9,blending:gi,depthWrite:!1}),m=Tt(new ee(15,.08),_,{x:-.6,y:3.12,z:6.9,cast:!1});m.rotation.x=-Math.PI/2,n.add(m);const p=Tt(new ee(1.8,.08),_,{x:6.9,y:2.25,z:6.88,cast:!1});p.rotation.z=Math.PI/2,n.add(p),n.add(Z(15,.06,.18,t.blackMetal,{x:-.6,y:3.08,z:6.9,cast:!1})),Qs(n,[[-10.4,4.8,-10.4,9]],2.6,{tint:16639626}),n.add(It(4.2,.95,.65,.03,t.walnut,{x:-12.7,y:.48,z:8.5})),n.add(Z(4.3,.05,.75,t.marbleWhite,{x:-12.7,y:.98,z:8.5})),n.add(It(.8,1.9,.7,.04,new lt({color:13751771,metalness:.7,roughness:.3}),{x:-14.5,y:.95,z:5.4})),n.add(Ct(.12,.1,.25,t.ceramic,{x:-12,y:1.13,z:8.5},14)),n.add(It(.45,.4,.35,.03,t.blackMetal,{x:-13.4,y:1.2,z:8.5})),ba(n,-12.6,6.4,.6),Rn(n,-13.4,6.4,Math.PI/2),Rn(n,-11.8,6.4,-Math.PI/2),ze(n,"PANTRY",-12.7,2.3,9.1,0,{w:1.4,h:.28,bg:"#78350f",fg:"#fef3c7",size:40});const v=new lt({color:3621201,roughness:.8});Gi(n,[[-10.2,6.8,-8.2,6.8],[-8.2,6.8,-8.2,7.4]],2.8,v),Gi(n,[[-8.2,8.4,-8.2,9]],2.8,v),Af(n,-9.6,8.2,0),kl(n,-8.1,1.3,7.8,Math.PI/2),Hl(n,"NETWORK · RESTRICTED",-9.2,2.45,6.7,Math.PI,1.9),yr(n,-14.65,4.2,-5.8,Math.PI/2,1.6,1,1),We(n,-7.2,7.4,1,0),We(n,5.6,5.6,.9,1),We(n,-7.2,-8.2,1,1),bc(n,-6,6,2.6,6.2);let S=-1;return{waypoints:[[-6.4,1.2],[6.4,1.2],[6.4,-4.2],[-6.4,-4.2]],board:Tr(n,5.2,4.2,-.3),light:[[-10,0],[2,0],[12,2]],update(x){g.offset.x=-x*.6,!(x-S<.5)&&(S=x,o[2].redraw(x),o[3].redraw(x),o[4].redraw(x),c.redraw(x),l.redraw(x))}}}function vy(n,t,e,i=0){const s=Math.floor(i/6)%3;n.fillStyle="#0f0a1e",n.fillRect(0,0,t,e);const r=n.createLinearGradient(0,0,t,e);if(r.addColorStop(0,"#1e1145"),r.addColorStop(1,"#3b1d0b"),n.fillStyle=r,n.fillRect(0,0,t,e),n.fillStyle="#fbbf24",n.font="800 50px Georgia, serif",n.fillText("Sidatreya · Property & Land Intelligence",40,80),n.fillStyle="#e9d5ff",n.font="600 32px system-ui",n.fillText(["Portfolio overview","Site visual · Parcel cluster 7","Value growth (illustrative)"][s],40,130),s===1){n.fillStyle="#365314",n.fillRect(60,170,t-120,e-250),n.strokeStyle="#fde68a",n.setLineDash([16,10]),n.lineWidth=6,n.strokeRect(160,220,t-320,e-360),n.setLineDash([]),[[260,280,220,140],[540,300,180,200],[780,260,120,120]].forEach(([a,o,c,l])=>{n.fillStyle="#e5e7eb",n.fillRect(a,o,c,l),n.fillStyle="#94a3b8",n.fillRect(a,o,c,18)});for(let a=0;a<14;a++)n.fillStyle="#4d7c0f",n.beginPath(),n.arc(120+a*62,e-110,22,0,7),n.fill()}else if(s===2){n.strokeStyle="#22c55e",n.lineWidth=8,n.beginPath();for(let a=0;a<=10;a++){const o=80+a*((t-160)/10),c=e-120-Math.pow(a,1.4)*22-Math.sin(a)*14;a?n.lineTo(o,c):n.moveTo(o,c)}n.stroke(),n.fillStyle="#94a3b8",n.font="500 24px system-ui",n.fillText("Indexed value, illustrative only",80,e-70)}else[["Parcels","1,248"],["Countries","India first"],["Clients served","38"]].forEach(([a,o],c)=>{const l=60+c*((t-120)/3);n.fillStyle="rgba(255,255,255,0.06)",In(n,l,190,(t-120)/3-30,220,18),n.fill(),n.fillStyle="#fff",n.font="800 60px system-ui",n.fillText(o,l+26,300),n.fillStyle="#c4b5fd",n.font="600 30px system-ui",n.fillText(a,l+26,360)});Fs(n,t,e)}function yy(n){const t=Se.M,e=new lt({color:4935516,roughness:.85});Rf(n,-14.8,-8.8,3.8,3.6,{perforated:!0,lifted:[[-1,2.4]]}),Gi(n,[[3.8,-8.8,3.8,-6.9],[3.8,-5.8,3.8,3.6],[-14.8,3.6,3.8,3.6]],3.2,e),wu(n,-11.6,-4.6,10,0),wu(n,-11.6,-1.4,10,Math.PI),n.add(Z(7.6,.04,2.2,new lt({color:9684477,transparent:!0,opacity:.25,depthWrite:!1}),{x:-8.2,y:2.15,z:-3,cast:!1})),ze(n,"COLD AISLE",-8.2,2.4,-3,0,{w:1.6,h:.26,bg:"#1e3a8a",fg:"#dbeafe",size:40}),Tu(n,-14,-6.6,Math.PI/2),Tu(n,-14,-.6,Math.PI/2),ze(n,"CRAC 1",-13.5,2.3,-6.6,Math.PI/2,{w:1,h:.24,bg:"#0c4a6e",fg:"#e0f2fe",size:40}),ze(n,"CRAC 2",-13.5,2.3,-.6,Math.PI/2,{w:1,h:.24,bg:"#0c4a6e",fg:"#e0f2fe",size:40});const i=(h,f,g,_,m)=>{const p=new At;p.position.set(h,0,f),p.rotation.y=g,n.add(p),p.add(It(.9,1.2,.3,.03,new lt({color:2042167,metalness:.5}),{y:1.6})),p.add(Z(.6,.06,.02,ce(m,1.8),{y:1.9,z:.16,cast:!1})),p.add(Ct(.07,.07,1,new lt({color:m==="#f59e0b"?16096779:3900150}),{y:2.7},10));const v=Cn(1.2,.3,(S,x,M)=>{S.fillStyle=m,S.fillRect(0,0,x,M),S.fillStyle="#0b0b10",S.font="800 46px system-ui",S.textAlign="center",S.textBaseline="middle",S.fillText(_,x/2,M/2+2)},{frame:!1});v.position.set(0,.8,.12),p.add(v)};i(-3,-8.75,0,"ISP A","#f59e0b"),i(-14.75,2.4,Math.PI/2,"ISP B","#60a5fa");const s=Cn(5.6,.9,(h,f,g)=>{h.fillStyle="#0b1324",h.fillRect(0,0,f,g),h.fillStyle="#38bdf8",h.fillRect(0,0,16,g),h.fillStyle="#e0f2fe",h.font="800 84px system-ui",h.textBaseline="middle",h.fillText("Hybrid: on-site servers + cloud",50,g/2+4)},{pxPerUnit:200});s.position.set(-5.4,4.2,-8.68),n.add(s);const r=Vi(n,3.2,1.9,(h,f,g,_=0)=>{h.fillStyle="#060b18",h.fillRect(0,0,f,g),h.fillStyle="#e2e8f0",h.font="800 40px system-ui",h.fillText("CLOUD UPLINK",30,60);for(let m=0;m<3;m++){h.fillStyle="#1f2937",h.fillRect(60+m*70,200,56,180);for(let p=0;p<6;p++)h.fillStyle=(p+m)%3?"#22c55e":"#38bdf8",h.fillRect(70+m*70,214+p*28,10,8)}h.fillStyle="#94a3b8",h.font="600 26px system-ui",h.fillText("ON-SITE · B1",60,420),h.fillStyle="#e0f2fe",[[f-230,230,60],[f-170,200,75],[f-100,235,55]].forEach(([m,p,v])=>{h.beginPath(),h.arc(m,p,v,0,7),h.fill()}),h.fillRect(f-290,230,245,60),h.fillStyle="#94a3b8",h.fillText("CLOUD",f-210,340),h.strokeStyle="#38bdf8",h.lineWidth=6,h.setLineDash([18,12]),h.lineDashOffset=-_*60,h.beginPath(),h.moveTo(280,290),h.lineTo(f-300,260),h.stroke(),h.setLineDash([]),h.fillStyle="#4ade80",h.font="700 26px system-ui",h.fillText("● LINK UP · 2 × 1 Gbps (example)",30,g-30)},{x:.4,y:4,z:-8.6,px:800});Ea(n,3.86,-6.35,Math.PI/2,3359061),kl(n,3.95,1.35,-5.55,Math.PI/2),Hl(n,"SERVER ROOM · AUTHORISED ONLY",3.95,2.75,-6.35,Math.PI/2,3),ze(n,"UPS & BATTERY BANK",9,2.7,-2.7,0,{w:2.6,h:.3,bg:"#14532d",fg:"#dcfce7",size:40});for(let h=0;h<2;h++)n.add(It(1.1,2,.85,.03,new lt({color:2042167,metalness:.5,roughness:.4}),{x:5.4+h*1.3,y:1,z:-1.8})),n.add(Z(.4,.25,.02,ce("#4ade80",1.5),{x:5.4+h*1.3,y:1.6,z:-1.36,cast:!1}));for(let h=0;h<2;h++)for(let f=0;f<6;f++)n.add(Z(.75,1.6,.7,new lt({color:4937059,roughness:.6}),{x:8.4+f*.85,y:.8,z:-1.8+h*2.4})),n.add(Z(.5,.05,.02,ce(f%3?"#4ade80":"#facc15",1.4),{x:8.4+f*.85,y:1.4,z:-1.8+h*2.4+(h?-.36:.36),cast:!1}));const a=new At;a.position.set(9,0,6.6),n.add(a),a.add(It(4.6,1.9,1.8,.06,new lt({color:13273604,roughness:.45,metalness:.3}),{y:1.05})),a.add(Z(4.8,.15,2,t.blackMetal,{y:.08}));for(let h=0;h<8;h++)a.add(Z(.04,1.2,.02,t.blackMetal,{x:-2+h*.15,y:1.1,z:.91,cast:!1}));a.add(Ct(.12,.12,4.2,t.blackMetal,{x:1.8,y:4,z:-.4},12)),a.add(It(1.4,.9,1,.05,new lt({color:3621201}),{x:3.6,y:.45}));const o=Cn(2.8,.36,(h,f,g)=>{h.fillStyle="#111",h.fillRect(0,0,f,g),h.fillStyle="#facc15",h.font="800 46px system-ui",h.textAlign="center",h.textBaseline="middle",h.fillText("BACKUP GENERATOR · 500 kVA",f/2,g/2+2)},{frame:!1});o.position.set(0,2.25,.92),a.add(o);const c=new lt({color:10265519,transparent:!0,opacity:.35,side:Ue,depthWrite:!1}),l=Tt(new ee(10,2.2),c,{x:9.6,y:1.1,z:4.4,cast:!1});n.add(l),ze(n,"B1 · SERVER & UTILITIES",12.6,3.2,-8.68,0,{w:3.6,h:.38,bg:"#0f172a",fg:"#e2e8f0",size:44});const u=Tt(new ee(.12,12),new te({color:16436245}),{x:4.3,y:.012,z:.2,cast:!1});u.rotation.x=-Math.PI/2,n.add(u);let d=-1;return{waypoints:[[5.2,-4.6],[13.4,-4.6],[13.4,3.4],[5.2,3.4]],board:Tr(n,12.6,3.2,-.4),light:[[-6,-2],[9,0]],lightColor:13623551,update(h){h-d<.25||(d=h,r.redraw(h))}}}const Mn=Math.PI*2,ii="#ffd9a0",Mr={cx:(de.x1-le)/2,cz:0,A:(de.x1+le)/2+4.3,B:zt+1.8};let Au=777;const Ze=()=>(Au=Au*16807%2147483647)/2147483647;function Ls(n,t,e,i,s=4,r=180){const a=[];for(let o=0;o<r;o++){const c=o/r*Mn,l=Math.cos(c),u=Math.sin(c);a.push({x:n+e*Math.sign(l)*Math.abs(l)**(2/s),z:t+i*Math.sign(u)*Math.abs(u)**(2/s),u:o/r})}return a}function xn(n,t,e,i,{cast:s=!0}={}){const r=n.length,a=n.map((f,g)=>{let _,m;if(!t&&g===0)_=n[1].x-f.x,m=n[1].z-f.z;else if(!t&&g===r-1)_=f.x-n[r-2].x,m=f.z-n[r-2].z;else{const v=n[(g-1+r)%r],S=n[(g+1)%r];_=S.x-v.x,m=S.z-v.z}const p=Math.hypot(_,m)||1;return{x:m/p,z:-_/p}}),o=n.map((f,g)=>{const _=e(f,g),m=a[g],p=(v,S)=>[f.x+m.x*v,S,f.z+m.z*v];return[p(_.d0,_.yb),p(_.d1,_.yb),p(_.d1,_.yt),p(_.d0,_.yt)]}),c=[],l=[],u=t?r:r-1;for(const[f,g]of[[0,3],[1,2],[3,2],[0,1]]){const _=c.length/3;for(let m=0;m<r;m++)c.push(...o[m][f],...o[m][g]);for(let m=0;m<u;m++){const p=_+m*2,v=_+(m+1)%r*2;l.push(p,v,p+1,v,v+1,p+1)}}const d=new Ae;d.setAttribute("position",new jt(c,3)),d.setIndex(l),d.computeVertexNormals();const h=new Zt(d,i);return h.castShadow=s,h.receiveShadow=!0,h}function wc(n,t,e,i){const s=new Ds(n.map(o=>new at(o.x,-o.z))),r=new Er(s,{depth:e,bevelEnabled:!0,bevelThickness:.06,bevelSize:.06,bevelSegments:3,curveSegments:4});r.rotateX(-Math.PI/2);const a=new Zt(r,i);return a.position.y=t,a.receiveShadow=!0,a.castShadow=!0,a}function Ru(n,t,e,i,s,r=[0,0,0]){const a=new Ds(t.map(([l,u])=>new at(l,u))),o=new Er(a,{depth:e,bevelEnabled:!1});o.translate(0,0,-e/2);const c=new Zt(o,i);return c.position.set(...s),c.rotation.set(...r),c.castShadow=!0,n.add(c),c}const Fa=(n,t,e)=>Math.max(0,Math.sin(n*Mn*t+e));function My(n,t){const e=Se.M,{cx:i,cz:s,A:r,B:a}=Mr,o=Ls(i,s,r,a,4.2),c=t.level*1.15;n.add(wc(o,-.62,.5,e.plinth));const l=f=>({yb:-.9-1.1*Fa(f.u,2,c+Math.PI)**1.5,yt:.3+1.25*Fa(f.u,2,c)**2,d0:-.05,d1:.42});n.add(xn(o,!0,l,e.shell)),n.add(xn(o,!0,f=>{const g=l(f);return{yb:g.yb-.02,yt:g.yb+.03,d0:.1,d1:.16}},ce(ii,1.7),{cast:!1}));const u=e.shell,d=new Dn(.1,Yi,.7);o.filter(f=>f.z<-a*.55||f.x<i-r*.8).forEach((f,g)=>{if(g%4)return;const _=Tt(d,u,{x:f.x,y:Yi/2-.6,z:f.z,receive:!1});_.rotation.y=Math.atan2(f.x-i,f.z-s)+.6*Math.sin(f.u*Mn*3+c),n.add(_)}),Ru(n,[[0,0],[3.8,.05],[0,.55]],.12,e.shell,[i-r+.4,.4,zt+1.2],[0,.5+t.level*.2,0]),Ru(n,[[0,0],[-3.2,0],[0,2.4]],.14,e.shell,[de.x1+1.1,0,de.z1+.5],[0,-.3,0])}function Sy(n,t){const e=Se.M,i=t.level*.9,s=[];for(let a=0;a<=90;a++)s.push({x:-le+.2+a/90*(le*2-.4),z:-zt+.3,u:a/90});const r=[];for(let a=0;a<=60;a++)r.push({z:zt-.4-a/60*(zt*2-.8),x:-le+.3,u:a/60});for(const[a,o]of[[s,2.5],[r,1.6]]){const c=l=>{const u=6.15+.35*Math.sin(l.u*Mn*o+i);return{yb:u,yt:u+.28,d0:0,d1:-.75}};n.add(xn(a,!1,c,e.shell,{cast:!1})),n.add(xn(a,!1,l=>{const u=c(l);return{yb:u.yb-.03,yt:u.yb,d0:-.55,d1:-.7}},ce(ii,2),{cast:!1}))}n.add(Z(le*2-.4,.03,.05,ce("#ffcf8a",1.4),{y:.03,z:-zt+.12,cast:!1}))}function pa(n,{x:t,y:e,z:i,rotY:s=0,w:r=10,h:a=.32,items:o,label:c="EXAMPLE DATA · NOT LIVE PRICES",speed:l=.02}){const h=bn(4096,96,_=>{_.fillStyle="#05070c",_.fillRect(0,0,4096,96),_.font="700 54px ui-monospace, Menlo, monospace",_.textBaseline="middle";let m=20;const p=(v,S)=>{_.fillStyle=S,_.fillText(v,m,96/2+2),m+=_.measureText(v).width+40};for(;m<3896;){_.fillStyle="#f59e0b",_.fillRect(m-8,14,_.measureText(c).width+16,68),_.fillStyle="#111",_.fillText(c,m,50),m+=_.measureText(c).width+50;for(const v of o){if(m>3796)break;p(v.t,v.up===void 0?"#e5e7eb":v.up?"#22c55e":"#ef4444")}}});h.wrapS=Ii,h.repeat.x=Math.min(1,r/a*(96/4096));const f=new At;f.position.set(t,e,i),f.rotation.y=s,n.add(f),f.add(Z(r+.08,a+.08,.06,Se.M.graphite,{cast:!1}));const g=Tt(new ee(r,a),new te({map:h,color:new Pt(1.25,1.25,1.25)}),{z:.035,cast:!1});return f.add(g),{group:f,update:_=>{h.offset.x=_*l%1}}}const ma=[{t:"NIFTY 50 ▲ 0.62%",up:!0},{t:"SENSEX ▲ 0.61%",up:!0},{t:"RELIANCE ▲ 1.00%",up:!0},{t:"TCS ▼ 0.31%",up:!1},{t:"HDFCBANK ▲ 0.95%",up:!0},{t:"INFY ▲ 1.18%",up:!0},{t:"S&P 500 ▲ 0.45%",up:!0},{t:"NASDAQ ▼ 0.12%",up:!1},{t:"GOLD ▲ 0.20%",up:!0}];function Gl(n,{x:t,z:e,rx:i=3.2,rz:s=2,fest:r,skylight:a=!0,bamboo:o=!0,koi:c=!0,sign:l=!1,ceil:u=7}){const d=Se.M,h=new At;h.position.set(t,0,e),n.add(h);const f=[],g=Ls(0,0,i,s,2,96);h.add(xn(g,!0,k=>({yb:0,yt:.32+.1*Math.sin(k.u*Mn*2),d0:0,d1:.28}),d.shell)),h.add(xn(g,!0,k=>({yb:.33+.1*Math.sin(k.u*Mn*2),yt:.36+.1*Math.sin(k.u*Mn*2),d0:.04,d1:.08}),ce(ii,1.6),{cast:!1}));const _=[[-.45,-.25,.55],[.35,.3,.42],[.55,-.35,.3],[-.15,.45,.26]],m=bn(1024,1024,(k,nt,ft)=>{k.fillStyle="#e8e3d8",k.fillRect(0,0,nt,ft);for(let B=0;B<4e3;B++)k.fillStyle=`rgba(120,110,95,${Ze()*.18})`,k.fillRect(Ze()*nt,Ze()*ft,2,2);k.strokeStyle="rgba(140,128,110,0.55)",k.lineWidth=3;for(let B=40;B<nt*.75;B+=18)k.beginPath(),k.ellipse(nt/2,ft/2,B,B,0,0,Mn),k.stroke();for(const[B,q,ht]of _){const Ut=nt/2+B*nt/2,gt=ft/2+q*ft/2;k.fillStyle="#e8e3d8",k.beginPath(),k.arc(Ut,gt,ht*260+60,0,Mn),k.fill();for(let Ht=0;Ht<4;Ht++)k.beginPath(),k.arc(Ut,gt,ht*200+20+Ht*18,0,Mn),k.stroke()}}),p=Tt(new ti(1,72),new lt({map:m,roughness:.95}),{y:.02,cast:!1});p.rotation.x=-Math.PI/2,p.scale.set(i-.02,s-.02,1),h.add(p);const v=new lt({color:7827562,roughness:.92,flatShading:!0}),S=new lt({color:5208626,roughness:1,flatShading:!0});for(const[k,nt,ft]of _){const B=Tt(new cc(1,0),v,{x:k*i,y:ft*.35,z:nt*s});B.scale.set(ft*1.25,ft*.85,ft),B.rotation.set(Ze(),Ze()*3,Ze()*.4),h.add(B);for(let q=0;q<4;q++){const ht=Tt(new ws(.22*ft+.08,0),S,{x:k*i+Math.cos(q*1.7)*ft*1.1,y:.05,z:nt*s+Math.sin(q*1.7)*ft*.9});ht.scale.y=.35,h.add(ht)}}const x=-.05*i,M=-.05*s,b=new lt({color:4863014,roughness:.85}),A=Ct(.07,.12,1.5,b,{x,y:.75,z:M},8);A.rotation.z=.12,h.add(A);for(let k=0;k<4;k++){const nt=Ct(.03,.06,1,b,{x:x+Math.cos(k*1.6)*.3,y:1.6,z:M+Math.sin(k*1.6)*.3},6);nt.rotation.set(Math.sin(k*1.6)*.7,0,-Math.cos(k*1.6)*.7),h.add(nt)}const y=110,w=new Cl(new ws(.22,0),new lt({roughness:.7,flatShading:!0}),y),R=new he,L=new Pt,N=["#8f1a14","#a8231a","#c2361f","#7a1410","#b8481f"];for(let k=0;k<y;k++){const nt=Ze()*Mn,ft=Math.sqrt(Ze())*1.35,B=1.9+Ze()*.75-ft*.25;R.compose(new I(x+Math.cos(nt)*ft,B,M+Math.sin(nt)*ft*.85),new Pn().setFromEuler(new _i(Ze(),Ze(),Ze())),new I(1,.6,1).multiplyScalar(.7+Ze()*.6)),w.setMatrixAt(k,R),w.setColorAt(k,L.set(N[k%N.length]))}if(w.castShadow=!0,h.add(w),o){const k=new lt({color:9416266,roughness:.5}),nt=new lt({color:6265402,roughness:.6,side:Ue});for(let ft=0;ft<9;ft++){const B=.62*i+(Ze()-.5)*.7,q=-.2*s+(Ze()-.5)*.8,ht=Math.min(u-.8,3.6+Ze()*1.8),Ut=Ct(.045,.05,ht,k,{x:B,y:ht/2,z:q},8);Ut.rotation.z=(Ze()-.5)*.08,h.add(Ut);for(let gt=0;gt<6;gt++){const Ht=Tt(new ee(.5,.1),nt,{x:B+Math.cos(gt)*.2,y:ht*(.6+gt*.07),z:q+Math.sin(gt)*.2,cast:!1});Ht.rotation.set(.3,gt*1.1,-.4),h.add(Ht)}}}const z=.62*i,P=.45*s,D=new te({color:new Pt("#ffc46b").multiplyScalar(2.4)});h.add(Ct(.22,.26,.12,v,{x:z,y:.06,z:P},6)),h.add(Ct(.07,.09,.55,v,{x:z,y:.4,z:P},8)),h.add(Ct(.2,.16,.08,v,{x:z,y:.72,z:P},6)),h.add(Z(.2,.2,.2,D,{x:z,y:.86,z:P,cast:!1})),h.add(Tt(new mi(.34,.2,6),v,{x:z,y:1.06,z:P})),h.add(Tt(new Xe(.05,8,6),v,{x:z,y:1.19,z:P}));const X=-.62*i,H=.4*s;h.add(Ct(.32,.36,.38,v,{x:X,y:.19,z:H},10));const et=new Ci({color:2051927,roughness:.04,metalness:.1,clearcoat:1}),K=Tt(new ti(.24,20),et,{x:X,y:.385,z:H,cast:!1});K.rotation.x=-Math.PI/2,h.add(K);const tt=Ct(.025,.025,.7,new lt({color:10465626}),{x:X+.35,y:.55,z:H},8);if(tt.rotation.z=1.2,h.add(tt),c){const k=.25*i,nt=-.55*s+.25,ft=Tt(new ti(1,40),et,{x:k,y:.03,z:nt,cast:!1});ft.rotation.x=-Math.PI/2,ft.scale.set(.9,.5,1),h.add(ft);const B=[];for(let q=0;q<5;q++){const ht=Tt(new pr(.05,.16,4,8),new lt({color:q%2?16742938:16117990,roughness:.4,emissive:q%2?4462592:2236962}),{y:.05,cast:!1});ht.rotation.z=Math.PI/2;const Ut=new At;Ut.position.set(k,0,nt),Ut.add(ht),ht.position.x=.35+q*.08,h.add(Ut),B.push(Ut)}f.push(q=>B.forEach((ht,Ut)=>{ht.rotation.y=q*(.35+Ut*.07)+Ut,ht.scale.set(1,1,.55)}));for(let q=0;q<4;q++)h.add(Ct(.22,.24,.07,v,{x:k-.9+q*.6,y:.04,z:nt+.55+Math.sin(q)*.12},10))}const j=-.3*i,Nt=.62*s;h.add(It(.5,.14,.34,.04,new lt({color:3881791,roughness:.6}),{x:j,y:.07,z:Nt}));const ot=Ct(.03,.05,.4,b,{x:j,y:.32,z:Nt},6);ot.rotation.z=.4,h.add(ot);for(let k=0;k<4;k++){const nt=Tt(new ws(.13,0),new lt({color:4025132,flatShading:!0}),{x:j-.1+k*.08,y:.5+k%2*.06,z:Nt});nt.scale.y=.5,h.add(nt)}if(l){const k=bn(512,256,(B,q,ht)=>{B.fillStyle="#2b2b2e",B.fillRect(0,0,q,ht),B.fillStyle="#c9c5bd",B.font="600 46px Georgia, serif",B.textAlign="center",B.textBaseline="middle",B.fillText("SIDATREYA DESIGNS",q/2,ht/2)}),nt=It(1.3,.75,.22,.03,new lt({color:2829102,roughness:.8}),{x:.75*i,y:.38,z:.75*s});nt.rotation.set(-.12,-.5,0),h.add(nt);const ft=Tt(new ee(1.2,.6),new lt({map:k,roughness:.8}),{z:.115,cast:!1});nt.add(ft)}if(r){const k=Math.round((i+s)*3);for(let nt=0;nt<k;nt++){const ft=nt/k*Mn;r.diya(t+Math.cos(ft)*(i+.45),e+Math.sin(ft)*(s+.45))}}if(a){const k=Ls(0,0,i*.7,s*.7,2,64);h.add(xn(k,!0,()=>({yb:u-.25,yt:u,d0:0,d1:.35}),d.shell,{cast:!1}));const nt=document.createElement("canvas");nt.width=8,nt.height=256;const ft=nt.getContext("2d"),B=ft.createLinearGradient(0,0,0,256);B.addColorStop(0,"rgba(255,244,220,0.5)"),B.addColorStop(.7,"rgba(255,244,220,0.08)"),B.addColorStop(1,"rgba(255,244,220,0)"),ft.fillStyle=B,ft.fillRect(0,0,8,256);const q=new _n(nt);q.colorSpace=Pe;const ht=new te({map:q,transparent:!0,opacity:.14,blending:gi,depthWrite:!1,side:Pi});for(const Ht of[.75]){const me=Tt(new mn(.7*Ht,.95*Ht,u-.1,40,1,!0),ht,{y:(u-.1)/2,cast:!1});me.scale.set(i,1,s),me.rotation.z=.06,me.renderOrder=8,h.add(me)}const Ut=Tt(new ee(2,2),new te({map:Ef("rgba(255,240,205,0.22)"),transparent:!0,blending:gi,depthWrite:!1}),{y:.05,cast:!1});Ut.rotation.x=-Math.PI/2,Ut.scale.set(i*.95,s*.95,1),h.add(Ut);const gt=new df(16773594,22,u+4,.7,.7,1.5);gt.position.set(.3,u+.5,0),gt.target.position.set(0,0,0),h.add(gt,gt.target),f.push(Ht=>{ht.opacity=.13+Math.sin(Ht*.6)*.03})}return{group:h,update:k=>f.forEach(nt=>nt(k))}}function by(n,{x:t,z:e,rotY:i=0,s=1.4}){const r=Se.M,a=new At;a.position.set(t,0,e),a.rotation.y=i,n.add(a);const o=Ls(0,0,1.9,1.05,3,72);a.add(wc(o,0,.42,r.shell)),a.add(xn(o,!0,()=>({yb:.05,yt:.09,d0:.03,d1:.08}),ce(ii,1.8),{cast:!1}));const c=new At;c.position.y=.48,c.scale.setScalar(s),a.add(c);const l=r.bullBronze,u=(_,m,p,v,S,x,M=0,b=0)=>{const A=Tt(new Xe(1,28,20),l,{x:v,y:S,z:x});return A.scale.set(_,m,p),A.rotation.set(0,b,M),c.add(A),A};u(.78,.36,.34,-.05,1.02,0,.12),u(.46,.46,.4,.42,1.08,0,-.35),u(.36,.34,.33,-.62,1.12,0,.25),u(.32,.22,.26,.2,.78,0,0),u(.24,.22,.26,.78,.86,0,-.7),u(.26,.17,.2,1.02,.66,0,-.95),u(.11,.1,.14,1.16,.46,0,0);for(const _ of[-1,1])u(.05,.04,.03,1.12,.7,_*.15);for(const _ of[-1,1]){const m=new Il([new I(.98,.8,_*.14),new I(1,.86,_*.38),new I(1.14,.98,_*.52),new I(1.36,1.06,_*.46)]),p=new Na(m,20,.05,8),v=p.attributes.position,S=new I;for(let x=0;x<v.count;x++){const M=Math.floor(x/9)/20,b=m.getPoint(Math.min(1,M));S.fromBufferAttribute(v,x).sub(b).multiplyScalar(1-.85*M).add(b),v.setXYZ(x,S.x,S.y,S.z)}c.add(Tt(p,l))}const d=new lt({color:2759181,metalness:1,roughness:.45}),h=(_,m,p,v,S,x,M=.1)=>{const b=new At;b.position.set(_,.92,m),b.rotation.z=p,c.add(b),b.add(Ct(M,M*.8,S,l,{y:-S/2},10));const A=new At;A.position.y=-S,A.rotation.z=v,b.add(A),A.add(Tt(new Xe(M*.85,10,8),l)),A.add(Ct(M*.7,M*.55,x,l,{y:-x/2},10)),A.add(Ct(M*.6,M*.75,.08,d,{y:-x-.02},10))};h(.52,.17,-.65,.45,.42,.44,.12),h(.38,-.17,-.3,.1,.42,.46,.12),h(-.66,.17,.7,-.15,.48,.5,.12),h(-.58,-.17,.45,.05,.48,.5,.12);const f=new Il([new I(-.94,1.22,0),new I(-1.16,1.42,.04),new I(-1.08,1.7,.08),new I(-.86,1.74,.06)]);c.add(Tt(new Na(f,16,.028,6),l)),u(.06,.1,.06,-.83,1.76,.06),c.traverse(_=>{_.isMesh&&(_.castShadow=!0)});const g=new df(16769720,40,10,.5,.5,1.4);return g.position.set(1.5,6.4,2),g.target=a,a.add(g),a}function Cu(n,t,e,i,s=1){const r=new At;r.position.set(t,e,i),r.scale.setScalar(s),n.add(r);const a=new lt({color:13936202,metalness:1,roughness:.25,wireframe:!0,emissive:3810568});r.add(new Zt(new dc(1,.38,140,10,2,3),a));const o=new te({color:9075296});for(const c of[-.8,.8])r.add(Tt(new mn(.006,.006,3,4),o,{x:c,y:2.4,cast:!1}));return{group:r,update:c=>{r.rotation.y=c*.08}}}function Ey(n,t,e,i=1){const s=Se.M,r=new At;r.position.set(t,0,e),n.add(r),r.add(Ct(.5,.6,.9,s.shell,{y:.45},32));const a=new Ae,o=[],c=[],l=120,u=6;for(let h=0;h<=l;h++)for(let f=0;f<=u;f++){const g=h/l*Mn,_=(f/u-.5)*.5;o.push((1+_*Math.cos(g/2))*Math.cos(g)*.6,(1+_*Math.cos(g/2))*Math.sin(g)*.6,_*Math.sin(g/2)*.6)}for(let h=0;h<l;h++)for(let f=0;f<u;f++){const g=h*(u+1)+f,_=g+u+1;c.push(g,_,g+1,_,_+1,g+1)}a.setAttribute("position",new jt(o,3)),a.setIndex(c),a.computeVertexNormals();const d=new Zt(a,new lt({color:12745274,metalness:1,roughness:.25,side:Ue}));return d.position.y=1.65,d.scale.setScalar(i),d.castShadow=!0,r.add(d),{group:r,update:h=>{d.rotation.y=h*.15}}}function wy(n,t,e,i,s,r=2.4,a=4.2){const o=bn(512,Math.round(512*a/r),(l,u,d)=>{l.fillStyle="#1b1612",l.fillRect(0,0,u,d);for(let h=0;h<46;h++){l.strokeStyle=h%3?"rgba(201,160,90,0.85)":"rgba(120,90,50,0.9)",l.lineWidth=3,l.beginPath();for(let f=0;f<=d;f+=8)l.lineTo(h*(u/40)+Math.sin(f*.012+h*.25)*40+Math.sin(f*.004)*60,f);l.stroke()}}),c=new At;return c.position.set(t,e,i),c.rotation.y=s,n.add(c),c.add(It(r+.3,a+.3,.12,.12,Se.M.shell,{})),c.add(Tt(new ee(r,a),new lt({map:o,metalness:.6,roughness:.35,emissive:16777215,emissiveMap:o,emissiveIntensity:.12}),{z:.065,cast:!1})),c.add(Z(r+.2,.03,.04,ce(ii,1.6),{y:-a/2-.12,z:.07,cast:!1})),c}function Ty(n,t,e,i){const s=new At;s.position.set(t,e,i),n.add(s);const r=new lt({color:14199893,metalness:1,roughness:.2}),a=[1.3,1,.7].map((o,c)=>{const l=new Zt(new Zi(o,.035,10,80),r);return l.rotation.x=Math.PI/2+c*.35,s.add(l),l});return s.add(Tt(new mn(.006,.006,7-e,4),new te({color:9075296}),{y:(7-e)/2,cast:!1})),{group:s,update:o=>a.forEach((c,l)=>{c.rotation.z=o*(.1+l*.05),c.rotation.y=Math.sin(o*.3+l)*.4})}}function Ay(n,{x:t,z:e,r:i,a0:s,a1:r,h:a=2.6}){const o=[];for(let l=0;l<=40;l++){const u=s+(r-s)*(l/40);o.push({x:t+Math.sin(u)*i,z:e+Math.cos(u)*i,u:l/40})}n.add(xn(o,!1,l=>({yb:0,yt:a+.25*Math.sin(l.u*Math.PI),d0:0,d1:.2}),Se.M.shell)),n.add(xn(o,!1,l=>({yb:a+.25*Math.sin(l.u*Math.PI),yt:a+.03+.25*Math.sin(l.u*Math.PI),d0:.05,d1:.15}),ce(ii,2),{cast:!1}))}function Ry(n,t,e){const i=Se.M,{cx:s,cz:r,A:a,B:o}=Mr,c=Ls(s,r,a,o,4.2);n.add(wc(c,0,.6,i.plinth));const l=f=>({yb:-.3,yt:1+3.4*Fa(f.u,1,2.4)**2+1.4*Fa(f.u,2,.6)**2,d0:-.05,d1:.45});n.add(xn(c,!0,l,i.shell)),n.add(xn(c,!0,f=>{const g=l(f);return{yb:g.yt-.05,yt:g.yt,d0:0,d1:.08}},ce(ii,1.8),{cast:!1}));const u=Gl(e||n,{x:-6.5,z:3.8,rx:3.6,rz:2.2,fest:t,skylight:!1,bamboo:!0,koi:!0,sign:!0,ceil:9}),d=bn(2400,300,(f,g,_)=>{f.clearRect(0,0,g,_),f.font='800 220px "Helvetica Neue", Arial, sans-serif',f.textAlign="center",f.textBaseline="middle",f.lineJoin="round",f.lineWidth=18,f.strokeStyle="rgba(40,26,12,0.9)",f.strokeText("SIDATREYA DESIGNS",g/2,_/2+8),f.shadowColor="rgba(255,200,120,0.9)",f.shadowBlur=24,f.fillStyle="#ffd98a",f.fillText("SIDATREYA DESIGNS",g/2,_/2+8)}),h=Tt(new ee(22,2.75),new te({map:d,transparent:!0,color:new Pt(1.12,1.08,1),depthWrite:!1}),{x:s-2,y:3.4,z:zt+1.6,cast:!1});h.rotation.x=-.05,h.renderOrder=9,n.add(h),n.add(Z(22.4,.08,.3,i.bronze,{x:s-2,y:1.95,z:zt+1.45}));for(const f of[-9,0,9])n.add(Z(.1,1.4,.1,i.bronze,{x:s-2+f,y:1.3,z:zt+1.45}));return{update:u.update,logo:h}}function Cy(n,{x:t,y:e,z:i,w:s=30,h:r=.7}){const c=document.createElement("canvas");c.width=4096,c.height=96;const l=new _n(c);l.colorSpace=Pe,l.wrapS=Ii,l.repeat.x=Math.min(1,s/r*(96/4096));const u=new At;u.position.set(t,e,i),n.add(u),u.add(Z(s+.1,r+.1,.08,Se.M.graphite,{cast:!1})),u.add(Tt(new ee(s,r),new te({map:l,color:new Pt(1.3,1.3,1.3)}),{z:.045,cast:!1}));function d(h,f){const g=c.getContext("2d");g.fillStyle="#05070c",g.fillRect(0,0,4096,96);const m=h.map(S=>({a:S,s:f(S.id)})).filter(S=>S.s.status==="working");g.font="700 56px ui-monospace, Menlo, monospace",g.textBaseline="middle";let p=30;const v=(S,x)=>{g.fillStyle=x,g.fillText(S,p,96/2+2),p+=g.measureText(S).width+50};for(;p<3696;){v("● LIVE OFFICE DATA","#22c55e"),v(`${h.length} AGENTS`,"#f5f5f4"),v(`${m.length} WORKING`,"#86efac"),v(`${h.length-m.length} IDLE`,"#fcd34d");for(const S of m.slice(0,4))v(`${S.a.name.toUpperCase()} ▶ ON TASK`,"#e5e7eb");v("SIDATREYA DESIGNS","#f5c46b")}l.needsUpdate=!0}return{group:u,draw:d,update:h=>{l.offset.x=h*.015%1}}}function Py(n,{x:t,z:e,rotY:i=0,w:s=12,h:r=6.75,y:a=15}){const o=Se.M,c=new At;c.position.set(t,0,e),c.rotation.y=i,n.add(c);for(const l of[-1,1]){const u=[];for(let g=0;g<=30;g++){const _=g/30;u.push([l*(s/2-.3)+l*Math.sin(_*Math.PI)*.9*(1-_),-2+_*(a+r/2+3)])}const d=new Ds;d.moveTo(u[0][0]-.6,u[0][1]),u.forEach(([g,_],m)=>d.lineTo(g+(l>0?.35:-.35)*(1-m/30),_)),[...u].reverse().forEach(([g,_])=>d.lineTo(g-(l>0?.25:-.25),_));const h=new Er(d,{depth:.6,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:2});h.translate(0,0,-.9);const f=new Zt(h,o.shell);f.castShadow=!0,c.add(f)}return c.add(It(s+.5,r+.5,.35,.2,o.shell,{y:a,z:-.2})),c.add(Z(s+.3,.04,.06,ce(ii,2),{y:a-r/2-.2,z:0,cast:!1})),c.add(Z(s+.3,.04,.06,ce(ii,2),{y:a+r/2+.2,z:0,cast:!1})),c}function Iy(n,{y0:t,y1:e}){const i=Se.M,{cx:s,cz:r,A:a,B:o}=Mr,c=[{u0:.33,u1:.97,off:1.05,ya:t-.6,yb:e+2.6,hw:1.15,d:.34},{u0:.46,u1:1.04,off:1.55,ya:t+6.5,yb:e-3,hw:.7,d:.26}];for(const l of c){const d=[],h=Ls(s,r,a+l.off,o+l.off,4.2,720);for(let g=0;g<=220;g++){const _=l.u0+(l.u1-l.u0)*(g/220),m=Math.round((_%1+1)%1*720)%720;d.push({...h[m],s:g/220})}const f=g=>{const _=Math.sin(Math.PI*g.s)**.55,m=l.ya+(l.yb-l.ya)*(.5-.5*Math.cos(Math.PI*g.s));return{yb:m-l.hw*_,yt:m+l.hw*_,d0:0,d1:l.d*(.25+.75*_)}};n.add(xn(d,!1,f,i.shell)),n.add(xn(d,!1,g=>{const _=f(g);return{yb:_.yb-.02,yt:_.yb+.04,d0:_.d1-.06,d1:_.d1+.01}},ce(ii,1.9),{cast:!1}))}}const An=n=>n*Yi;function Ly(n,t,e,{renderer:i,cssScene:s,onStationRedraw:r}){const a=Se.M=Bv();Gv(a),n.background=new Pt(1713991),n.environment=kv(i),n.environmentIntensity=.7,n.add(new Jp(16773600,5916214,.85));const o=new Lh(16770760,1.6);o.castShadow=!0,o.shadow.mapSize.set(2048,2048),Object.assign(o.shadow.camera,{left:-21,right:21,top:15,bottom:-15,near:1,far:70}),o.shadow.bias=-4e-4,o.shadow.normalBias=.03,n.add(o,o.target);const c=new Lh(11122920,.45);c.position.set(-18,30,-22),n.add(c);const l=Hv(n,{hole:ey}),u=ny(n,An(-1)-.6,-.6),d=new Map,h=new Map,f=[],g=[];for(const k of e){const nt=new At;nt.position.y=An(k.level),nt.name=`floor-${k.id}`,n.add(nt),jv(nt,k),k.level>=0&&(My(nt,k),Sy(nt,k));const ft=t.filter(B=>B.floor===k.id);ft.forEach((B,q)=>h.set(B.id,ay(nt,B,q,{onNeedsRedraw:r}))),d.set(k.id,{floor:k,group:nt,agents:ft})}const _={agents:t,stations:h,cssScene:s},m={trading:fy(d.get("trading").group,_),admin:dy(d.get("admin").group,_),studio:py(d.get("studio").group,_),property:_y(d.get("property").group),b1:yy(d.get("b1").group)},p=new At;p.position.y=An(Math.max(...e.map(k=>k.level))+1)-.6,n.add(p),ty(p);const v=new At;v.position.y=.62,p.add(v);const S=ko(v);for(const[k,nt]of d){const ft=m[k];nt.content=ft;for(const[B,q]of ft.light||[]){const ht=new t0(ft.lightColor||16761992,10,17,1.7);ht.position.set(B,4.8,q),nt.group.add(ht),g.push(ht)}nt.manager=ly(nt.group,nt.floor,ft.waypoints,{board:ft.board}),ft.update&&f.push({id:k,fn:ft.update})}const x=(k,nt,ft)=>new I(k,nt,ft),M=[];for(const k of["trading","admin","studio","property"]){const nt=ko(d.get(k).group);nt.stringLights([[x(-le+.25,6.75,zt-.1),x(-le+.25,6.75,-zt+.2),.35,3]]),M.push({id:k,fest:nt})}const b=M[1].fest,A=M[2].fest;b.lantern(-10,5.2,2,"#ff7b00"),b.lantern(9.5,5.4,2.4,"#ff006e"),b.rangoli(-1.6,5.4,1.3,1),A.lantern(-4,5.4,2.6,"#c77dff"),A.lantern(9.6,5.2,1,"#ffb703"),A.rangoli(-8.4,6.3,.95,2),M[0].fest.lantern(-11.2,5.4,5.6,"#ffb703"),M[3].fest.lantern(12.8,5.2,-4,"#ff7b00"),M[3].fest.diya(12.9,-3,.5);const y={trading:[],admin:[],studio:[],property:[],b1:[]},w=k=>d.get(k).group,R=M[0].fest,L=M[3].fest,N=ko(w("b1"));M.push({id:"b1",fest:N}),Ay(w("trading"),{x:1.2,z:5.6,r:3.2,a0:Math.PI-.62,a1:Math.PI+.62,h:2.4}),by(w("trading"),{x:1.3,z:4.4,rotY:-.35,s:1.45}),R.rangoli(1.3,6.9,.8,0);for(let k=0;k<9;k++){const nt=k/9*Math.PI*2;R.diya(1.3+Math.cos(nt)*2.25,4.4+Math.sin(nt)*1.45)}y.trading.push(Cu(w("trading"),-6.4,4.6,3.4,.85).update),y.trading.push(pa(w("trading"),{x:-le+.35,y:5.55,z:0,rotY:Math.PI/2,w:14,h:.34,items:ma}).update),y.admin.push(Gl(w("admin"),{x:3.4,z:6.7,rx:2.6,rz:1.45,fest:M[1].fest,bamboo:!1}).update),y.admin.push(Ey(w("admin"),-7.6,7.5).update),y.admin.push(pa(w("admin"),{x:0,y:5.75,z:-zt+.42,w:9.5,h:.32,items:ma}).update),y.studio.push(Gl(w("studio"),{x:1,z:5.9,rx:4,rz:2.25,fest:M[2].fest,sign:!0}).update),wy(w("studio"),-le+.3,3,-.2,Math.PI/2,2.6,4.4),y.studio.push(Cu(w("studio"),9,5,1.2,.6).update),y.studio.push(pa(w("studio"),{x:-3.6,y:3.4,z:-zt+.42,w:12.5,h:.3,items:ma}).update),L.rangoli(3.2,7.3,.85,1),y.property.push(Ty(w("property"),0,5.2,3.6).update),y.property.push(pa(w("property"),{x:0,y:5.6,z:-zt+.42,w:9,h:.3,items:ma}).update),N.rangoli(6.4,.2,.75,2);const z=Ry(p,S,v),P=new At;n.add(P);const D=Cy(P,{x:Mr.cx,y:An(0)-1.25,z:zt+2.05,w:30,h:.62}),X=An(Math.max(...e.map(k=>k.level))+1)-.6,H=new At;n.add(H),Iy(P,{y0:An(0),y1:X});const et=Bl(H,s,[{title:"LIVE MARKETS",sub:"TradingView ticker tape · live",url:Zn.ticker(),x:Mr.cx-2,y:X+1.35,z:zt+1.75,w:21,h:.62}]),K=Py(P,{x:27.5,z:3.5,rotY:-.18,w:12,h:6.75,y:An(2)}),tt=Bl(K,s,[{title:"SIDATREYA DESIGNS · MARKETS",sub:"TradingView · live feed",url:Zn.symbolOverview(),x:0,y:An(2),z:0,w:12,h:6.75}]);let j=null;function Nt(k){j=k;const nt=k?d.get(k).floor.level:1/0;for(const q of d.values())q.group.visible=!k||q.floor.id===k;u.front.visible=k!=="b1",p.visible=!k;const ft=An(k?nt:1);o.position.set(12,ft+18,15),o.target.position.set(-1,ft,-1);const B=k?1:2.2;Object.assign(o.shadow.camera,{left:-21*B,right:21*B,top:15*B,bottom:-15*B,far:70*B}),o.shadow.camera.updateProjectionMatrix(),m.trading.markets.setLive(k==="trading"),P.visible=!k,H.visible=!k,et.setLive(!k),tt.setLive(!k)}Nt(null);const ot=k=>j?k===j:!0;return{byFloor:d,stations:h,content:m,setFloor:Nt,wallScreen:m.admin.feed,get current(){return j},hitTargets:[...h.values()].flatMap(k=>[k.hit,k.frame]).concat(m.studio.ups.map(k=>k.hit)),managerHits:[...d.values()].map(k=>k.manager.hit),updateManagers(k){for(const nt of d.values())nt.manager.setSummary(nt.agents,k);m.studio.drawBoard(k),D.draw(t,k)},update(k){l.update(k),M.forEach(({id:nt,fest:ft})=>ot(nt)&&ft.update(k)),h.forEach(nt=>nt.update(k,ot(nt.agent.floor)));for(const nt of d.values())nt.group.visible&&nt.manager.update(k);f.forEach(nt=>ot(nt.id)&&nt.fn(k)),m.trading.markets.sync(),j||(et.sync(),tt.sync(),D.update(k),z.update(k),S.update(k));for(const[nt,ft]of Object.entries(y))ot(nt)&&ft.forEach(B=>B(k));g.forEach((nt,ft)=>nt.intensity=10+Math.sin(k*3+ft*2)*.4)}}}function Dy({agents:n,floors:t,world:e,feed:i}){const s=document.getElementById("overlay"),r=s.querySelector(".ov-body"),a=s.querySelector(".ov-title");let o=null,c=null;const l=new Map;function u(){o=null,s.classList.add("hidden"),clearInterval(c),r.innerHTML="",l.clear()}s.querySelector(".ov-close").onclick=u,window.addEventListener("keydown",g=>g.key==="Escape"&&u());function d(){o="screens",a.textContent="Agent screens",r.innerHTML="",r.className="ov-body screens";for(const g of[...t].reverse()){const _=n.filter(S=>S.floor===g.id),m=e.byFloor.get(g.id).manager.summary(),p=document.createElement("div");if(p.className="ov-floor",p.innerHTML=`<b>${g.label} · ${g.name}</b><span>${_.length?`${m.working}/${m.total} working`:"infrastructure"}${m.flags.length?` · ⚠ ${m.flags.map(S=>S.a.name).join(", ")}`:""}</span>`,r.appendChild(p),!_.length)continue;const v=document.createElement("div");v.className="ov-grid",r.appendChild(v);for(const S of _){const x=e.stations.get(S.id).tex.image,M=document.createElement("canvas");M.width=x.width,M.height=x.height,M.onclick=()=>{u(),window.office.focusAgent(S.id)},v.appendChild(M),l.set(S.id,M)}}f(),c=setInterval(f,4e3),s.classList.remove("hidden")}function h(){o="markets",a.textContent="Markets · live (TradingView)",r.className="ov-body markets",r.innerHTML=`
      <iframe class="tv-ticker" src="${Zn.ticker()}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
      <div class="tv-grid">
        <iframe src="${Zn.mini("BITSTAMP:BTCUSD")}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
        <iframe src="${Zn.mini("FX_IDC:USDINR")}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
      </div>
      <iframe class="tv-overview" src="${Zn.overview()}" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
      <p class="tv-note">Market data by TradingView. Example dashboards on Floor 04 are placeholder data.</p>`,s.classList.remove("hidden")}function f(){o==="screens"&&l.forEach((g,_)=>{const m=e.stations.get(_).tex.image;g.getContext("2d").drawImage(m,0,0)})}return document.getElementById("btn-screens").onclick=()=>o==="screens"?u():d(),document.getElementById("btn-markets").onclick=()=>o==="markets"?u():h(),{refresh:f,openScreens:d,openMarkets:h,close:u}}const Tc=new URLSearchParams(location.search).get("demo")==="1",He=Tc?Nv({intervalMs:3200}):Uv({url:"./status.json",intervalMs:15e3}),Ac=document.getElementById("app"),sn=new rv({antialias:!0,powerPreference:"high-performance"}),Ny=Math.min(window.innerWidth,window.innerHeight)<700;sn.setPixelRatio(Math.min(window.devicePixelRatio,Ny?1.25:1.75));sn.setSize(window.innerWidth,window.innerHeight);sn.shadowMap.enabled=!0;sn.shadowMap.type=ir;sn.toneMapping=Ga;sn.toneMappingExposure=1;Ac.appendChild(sn.domElement);const Rr=new Lv;Rr.setSize(window.innerWidth,window.innerHeight);Rr.domElement.className="css3d";Ac.appendChild(Rr.domElement);const Cf=new Yu,zs=new yv;zs.setSize(window.innerWidth,window.innerHeight);zs.domElement.className="css2d";Ac.appendChild(zs.domElement);const Ja=new Yu,fn=new pn(38,window.innerWidth/window.innerHeight,.1,600);function Rc(n){const t=window.innerWidth/window.innerHeight<1,e=window.innerWidth/window.innerHeight,i=t?Math.min(3.4,1.5/e):window.innerWidth<1e3?1.25:1;if(!n)return{pos:new I(34*i,30+6*i,76*i),target:new I(1.5,An(2)+.6,0)};const s=An(Os.find(a=>a.id===n).level),r=n==="b1"?4.5:0;return{pos:new I(6*i,s+(13.2+r)*i,27.5*i),target:new I(t?1.5:-1.2,s+1.8,-2)}}const Pu=new URLSearchParams(location.search);let Li=Os.some(n=>n.id===Pu.get("floor"))?Pu.get("floor"):null,ei=Rc(Li);fn.position.copy(ei.pos);const Ln=new ov(fn,sn.domElement);Ln.target.copy(ei.target);Ln.enableDamping=!0;Ln.dampingFactor=.08;Ln.minDistance=4;Ln.maxDistance=150;Ln.maxPolarAngle=Math.PI*.47;Ln.update();const Bs=new wv(sn);Bs.addPass(new Tv(Ja,fn));const Uy=new Is(new at(window.innerWidth,window.innerHeight),.6,.55,1);Bs.addPass(Uy);Bs.addPass(new bf({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126,0.7152,0.0722));
      c.rgb = mix(c.rgb, c.rgb * vec3(1.05,1.0,0.94), 0.6);               // warm grade
      c.rgb += vec3(0.010,0.006,0.002) * (1.0 - smoothstep(0.0, 0.25, l));  // lift shadows towards indigo
      float v = smoothstep(0.95, 0.35, distance(vUv, vec2(0.5)));
      c.rgb *= mix(0.72, 1.0, v);
      gl_FragColor = c; }`}));Bs.addPass(new Rv);const Gn=Ly(Ja,Ve,Os,{renderer:sn,cssScene:Cf,onStationRedraw:n=>Sr(n)});Gn.setFloor(Li);document.getElementById("title").textContent=_c.title;document.getElementById("subtitle").textContent=_c.subtitle;document.title=_c.title;const Vo=document.getElementById("sidebar"),Cr=new Map;for(const n of[...Os].reverse()){const t=Ve.filter(i=>i.floor===n.id),e=document.createElement("div");if(e.className="floor-head",e.textContent=`${n.label} · ${n.name}`,e.addEventListener("click",()=>Pr(n.id)),Vo.appendChild(e),!t.length){const i=document.createElement("div");i.className="floor-empty",i.textContent="Infrastructure · Floor Manager on duty",Vo.appendChild(i)}for(const i of t){const s=document.createElement("div");s.className="agent-card",s.style.setProperty("--c",i.color),s.innerHTML=`
      <div class="row"><div class="name"><span class="avatar"></span>${i.name}</div><span class="pill"></span></div>
      <div class="task"></div>
      <div class="bar"><i></i></div>`,s.addEventListener("click",()=>to(i.id)),Vo.appendChild(s),Cr.set(i.id,s)}}const Oy=document.getElementById("floorbar"),Pf=new Map;for(const n of[{id:null,label:"ALL",name:"All floors"},...[...Os].reverse()]){const t=document.createElement("button");t.innerHTML=`<b>${n.label}</b><span>${n.id?n.name:"Building"}</span>`,t.title=n.name,t.addEventListener("click",()=>Pr(n.id)),Oy.appendChild(t),Pf.set(n.id,t)}function Pr(n,{fly:t=!0}={}){Li=n,Gn.setFloor(n),ei=Rc(n),Pf.forEach((i,s)=>i.classList.toggle("on",s===n)),document.body.dataset.floor=n||"all";const e=new URL(location.href);n?e.searchParams.set("floor",n):e.searchParams.delete("floor"),history.replaceState(null,"",e),t&&(Qa=null,Cr.forEach(i=>i.classList.remove("selected")),Ts.classList.add("hidden"),ja(ei.pos.clone(),ei.target.clone()))}function Sr(n){const t=He.getState(n),e=Cr.get(n),i=e.querySelector(".pill");i.className=`pill ${t.status}`,i.textContent=t.status,e.querySelector(".task").textContent=t.task,e.querySelector(".bar").style.visibility=t.status==="working"&&t.hasProgress!==!1&&t.progress>0?"visible":"hidden",e.querySelector(".bar > i").style.width=`${Math.round(t.progress*100)}%`,Gn.stations.get(n).setData({...t,updatedAt:He.updatedAt||null,events:He.history.filter(s=>s.agentId===n).slice(-2)}),Qa===n&&Lf(n)}function If(){const n=Ve.map(e=>He.getState(e.id)),t=n.filter(e=>e.status==="working").length;document.getElementById("count-working").textContent=t,document.getElementById("count-idle").textContent=n.length-t,document.getElementById("count-total").textContent=n.length}const Ts=document.getElementById("infocard");let Qa=null;function Lf(n){const t=Ve.find(s=>s.id===n),e=He.getState(n),i=He.history.filter(s=>s.agentId===n).slice(-4).reverse();Ts.style.setProperty("--c",t.color),Ts.innerHTML=`
    <button class="close" title="Close">×</button>
    <h3><span class="avatar" style="width:12px;height:12px;border-radius:4px;background:${t.color};box-shadow:0 0 10px ${t.color}"></span>${t.name}
      <span class="pill ${e.status}" style="margin-left:auto">${e.status}</span></h3>
    <div class="role">${t.role}</div>
    <div class="label">Current task</div>
    <div class="val">${e.task}</div>
    ${e.status==="working"&&e.progress>0?`<div class="bar" style="--c:${t.color}"><i style="width:${Math.round(e.progress*100)}%"></i></div>`:""}
    <div class="label">Recent activity</div>
    <ul>${i.length?i.map(s=>`<li><time>${Ua(s.ts)}</time>${s.message}</li>`).join(""):"<li>No activity yet</li>"}</ul>`,Ts.querySelector(".close").onclick=Cc}let hi=null;function ja(n,t,e=900){hi={fromP:fn.position.clone(),fromT:Ln.target.clone(),toP:n,toT:t,t0:performance.now(),ms:e}}function to(n){var o;const t=(o=Ve.find(c=>c.id===n))==null?void 0:o.floor;t&&t!==Li&&Pr(t,{fly:!1}),Qa=n,Cr.forEach((c,l)=>c.classList.toggle("selected",l===n));const e=Gn.stations.get(n).screenView(),i=2*Math.atan(Math.tan(Wa.degToRad(fn.fov/2))*fn.aspect),s=Math.max(2.2,e.width*1.05/(2*Math.tan(i/2)*(window.innerWidth>900?.52:.9))),r=e.center.clone(),a=r.clone().add(e.normal.clone().multiplyScalar(s)).add(new I(0,s*.12,0));ja(a,r),Lf(n),Ts.classList.remove("hidden")}function Cc(){Qa=null,Cr.forEach(n=>n.classList.remove("selected")),Ts.classList.add("hidden"),ja(ei.pos.clone(),ei.target.clone())}window.addEventListener("keydown",n=>{(n.key==="r"||n.key==="R"||n.key==="Escape")&&Cc()});const Df=n=>{for(let t=n;t;t=t.parent)if(!t.visible&&t!==n)return!1;return!0},za=new a0,Ba=new at;let wa=null;sn.domElement.addEventListener("pointerdown",n=>wa={x:n.clientX,y:n.clientY});sn.domElement.addEventListener("pointerup",n=>{if(!wa||Math.hypot(n.clientX-wa.x,n.clientY-wa.y)>5)return;Ba.set(n.clientX/window.innerWidth*2-1,-(n.clientY/window.innerHeight)*2+1),za.setFromCamera(Ba,fn);const t=za.intersectObjects(Gn.hitTargets.filter(Df),!1)[0];t&&to(t.object.userData.agentId)});sn.domElement.addEventListener("pointermove",n=>{Ba.set(n.clientX/window.innerWidth*2-1,-(n.clientY/window.innerHeight)*2+1),za.setFromCamera(Ba,fn),sn.domElement.style.cursor=za.intersectObjects(Gn.hitTargets.filter(Df),!1).length?"pointer":""});zs.domElement.addEventListener("click",n=>{const t=n.target.closest(".tag");t&&t.dataset.agent?to(t.dataset.agent):t&&t.classList.contains("manager-tag")&&t.classList.toggle("open")});Ve.forEach(n=>Sr(n.id));If();const Nf=Dy({agents:Ve,floors:Os,world:Gn,feed:He}),Pc=()=>Gn.wallScreen.draw(He.history,He.getState),Ic=()=>Gn.updateManagers(He.getState);Ic();Pc();He.subscribe(n=>{if(n.type==="heartbeat"||n.type==="error")return ka();n.agentId&&Tc?Sr(n.agentId):Ve.forEach(t=>Sr(t.id)),If(),Pc(),Ic(),Nf.refresh(),ka()});He.start();const Fy=document.getElementById("live-label"),Iu=document.getElementById("live-chip"),Lu=n=>n.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});function ka(){let n,t;Tc?(n="demo · simulated feed",t="live"):He.updatedAt?Date.now()-He.updatedAt.getTime()>30*60*1e3?(n=`stale · updated ${Lu(He.updatedAt)}`,t="stale"):(n=`live · updated ${Lu(He.updatedAt)}`,t="live"):(n=He.error?"offline · no status data":"connecting…",t="stale"),Fy.textContent=n,Iu.className=`chip ${t}`,Iu.title=He.updatedAt?`Last update: ${He.updatedAt.toLocaleString()}`:""}ka();const zy=document.getElementById("clock");let By=0;const Uf=()=>{zy.textContent=Ua(new Date),++By%30===0&&(Ve.forEach(n=>Sr(n.id)),Ic()),Pc(),ka()};Uf();setInterval(Uf,1e3);window.addEventListener("resize",()=>{fn.aspect=window.innerWidth/window.innerHeight,fn.updateProjectionMatrix(),sn.setSize(window.innerWidth,window.innerHeight),Bs.setSize(window.innerWidth,window.innerHeight),zs.setSize(window.innerWidth,window.innerHeight),Rr.setSize(window.innerWidth,window.innerHeight),ei=Rc(Li)});const ky=performance.now(),Hy=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;sn.setAnimationLoop(()=>{const n=(performance.now()-ky)/1e3;if(hi){const t=Math.min(1,(performance.now()-hi.t0)/hi.ms),e=Hy(t);fn.position.lerpVectors(hi.fromP,hi.toP,e),Ln.target.lerpVectors(hi.fromT,hi.toT,e),t>=1&&(hi=null)}Ln.update(),Gn.update(n),Bs.render(),(Li==="trading"||!Li)&&Rr.render(Cf,fn),zs.render(Ja,fn)});window.office={feed:He,focusAgent:to,clearFocus:Cc,selectFloor:Pr,overlays:Nf,scene:Ja,camera:fn,world:Gn,view:(n,t,e=10)=>ja(new I(...n),new I(...t),e)};Pr(Li,{fly:!1});fn.position.copy(ei.pos);Ln.target.copy(ei.target);Ln.update();
