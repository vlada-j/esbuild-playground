var TWEEN=(()=>{var v=Object.defineProperty;var A=e=>v(e,"__esModule",{value:!0});var E=(e,t)=>{A(e);for(var r in t)v(e,r,{get:t[r],enumerable:!0})};var D={};E(D,{Easing:()=>b,Group:()=>c,Interpolation:()=>d,Sequence:()=>p,Tween:()=>T,VERSION:()=>P,add:()=>U,default:()=>j,getAll:()=>S,nextId:()=>C,now:()=>o,remove:()=>M,removeAll:()=>O,update:()=>R});var w={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math.sin((1-e)*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return .5*(1-Math.sin(Math.PI*(.5-e)))}},Exponential:{In:function(e){return e===0?0:Math.pow(1024,e-1)},Out:function(e){return e===1?1:1-Math.pow(2,-10*e)},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(-Math.pow(2,-10*(e-1))+2)}},Circular:{In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){return e===0?0:e===1?1:-Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI)},Out:function(e){return e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin((e-.1)*5*Math.PI)+1},InOut:function(e){return e===0?0:e===1?1:(e*=2,e<1?-.5*Math.pow(2,10*(e-1))*Math.sin((e-1.1)*5*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin((e-1.1)*5*Math.PI)+1)}},Back:{In:function(e){let t=1.70158;return e===1?1:e*e*((t+1)*e-t)},Out:function(e){let t=1.70158;return e===0?0:--e*e*((t+1)*e+t)+1},InOut:function(e){let t=1.70158*1.525;return(e*=2)<1?.5*(e*e*((t+1)*e-t)):.5*((e-=2)*e*((t+1)*e+t)+2)}},Bounce:{In:function(e){return 1-w.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?w.Bounce.In(e*2)*.5:w.Bounce.Out(e*2-1)*.5+.5}},generatePow:function(e=4){return e=e<Number.EPSILON?Number.EPSILON:e,e=e>1e4?1e4:e,{In:function(t){return t**e},Out:function(t){return 1-(1-t)**e},InOut:function(t){return t<.5?(t*2)**e/2:(1-(2-t*2)**e)/2+.5}}}},b=w;var m;typeof self=="undefined"&&typeof process!="undefined"&&process.hrtime?m=function(){let e=process.hrtime();return e[0]*1e3+e[1]/1e6}:typeof self!="undefined"&&self.performance!==void 0&&self.performance.now!==void 0?m=self.performance.now.bind(self.performance):Date.now!==void 0?m=Date.now:m=function(){return new Date().getTime()};var o=m;var c=class{constructor(){this._tweens={};this._tweensAddedDuringUpdate={}}getAll(){return Object.keys(this._tweens).map(t=>this._tweens[t])}removeAll(){this._tweens={}}add(t){this._tweens[t.getId()]=t,this._tweensAddedDuringUpdate[t.getId()]=t}remove(t){delete this._tweens[t.getId()],delete this._tweensAddedDuringUpdate[t.getId()]}update(t=o(),r=!1){let n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(let i=0;i<n.length;i++){let s=this._tweens[n[i]],u=!r;s&&s.update(t,u)===!1&&!r&&delete this._tweens[n[i]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var y={Linear:function(e,t){let r=e.length-1,n=r*t,i=Math.floor(n),s=y.Utils.Linear;return t<0?s(e[0],e[1],n):t>1?s(e[r],e[r-1],r-n):s(e[i],e[i+1>r?r:i+1],n-i)},Bezier:function(e,t){let r=0,n=e.length-1,i=Math.pow,s=y.Utils.Bernstein;for(let u=0;u<=n;u++)r+=i(1-t,n-u)*i(t,u)*e[u]*s(n,u);return r},CatmullRom:function(e,t){let r=e.length-1,n=r*t,i=Math.floor(n),s=y.Utils.CatmullRom;return e[0]===e[r]?(t<0&&(i=Math.floor(n=r*(1+t))),s(e[(i-1+r)%r],e[i],e[(i+1)%r],e[(i+2)%r],n-i)):t<0?e[0]-(s(e[0],e[0],e[1],e[1],-n)-e[0]):t>1?e[r]-(s(e[r],e[r],e[r-1],e[r-1],n-r)-e[r]):s(e[i?i-1:0],e[i],e[r<i+1?r:i+1],e[r<i+2?r:i+2],n-i)},Utils:{Linear:function(e,t,r){return(t-e)*r+e},Bernstein:function(e,t){let r=y.Utils.Factorial;return r(e)/r(t)/r(e-t)},Factorial:function(){let e=[1];return function(t){let r=1;if(e[t])return e[t];for(let n=t;n>1;n--)r*=n;return e[t]=r,r}}(),CatmullRom:function(e,t,r,n,i){let s=(r-e)*.5,u=(n-t)*.5,a=i*i,l=i*a;return(2*t-2*r+s+u)*l+(-3*t+3*r-2*s-u)*a+s*i+t}}},d=y;var I=class{static nextId(){return I._nextId++}},p=I;p._nextId=0;var g=new c;var k=class{constructor(t,r=g){this._object=t;this._group=r;this._isPaused=!1;this._pauseStart=0;this._valuesStart={};this._valuesEnd={};this._valuesStartRepeat={};this._duration=1e3;this._initialRepeat=0;this._repeat=0;this._yoyo=!1;this._isPlaying=!1;this._reversed=!1;this._delayTime=0;this._startTime=0;this._easingFunction=b.Linear.None;this._interpolationFunction=d.Linear;this._chainedTweens=[];this._onStartCallbackFired=!1;this._id=p.nextId();this._isChainStopped=!1;this._goToEnd=!1}getId(){return this._id}isPlaying(){return this._isPlaying}isPaused(){return this._isPaused}to(t,r){return this._valuesEnd=Object.create(t),r!==void 0&&(this._duration=r),this}duration(t=1e3){return this._duration=t,this}start(t=o()){if(this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(let r in this._valuesStartRepeat)this._swapEndStartRepeatValues(r),this._valuesStart[r]=this._valuesStartRepeat[r]}return this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=t,this._startTime+=this._delayTime,this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat),this}_setupProperties(t,r,n,i){for(let s in n){let u=t[s],a=Array.isArray(u),l=a?"array":typeof u,_=!a&&Array.isArray(n[s]);if(!(l==="undefined"||l==="function")){if(_){let f=n[s];if(f.length===0)continue;f=f.map(this._handleRelativeValue.bind(this,u)),n[s]=[u].concat(f)}if((l==="object"||a)&&u&&!_){r[s]=a?[]:{};for(let f in u)r[s][f]=u[f];i[s]=a?[]:{},this._setupProperties(u,r[s],n[s],i[s])}else typeof r[s]=="undefined"&&(r[s]=u),a||(r[s]*=1),_?i[s]=n[s].slice().reverse():i[s]=r[s]||0}}}stop(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this}end(){return this._goToEnd=!0,this.update(1/0),this}pause(t=o()){return this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=t,this._group&&this._group.remove(this),this)}resume(t=o()){return!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=t-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)}stopChainedTweens(){for(let t=0,r=this._chainedTweens.length;t<r;t++)this._chainedTweens[t].stop();return this}group(t=g){return this._group=t,this}delay(t=0){return this._delayTime=t,this}repeat(t=0){return this._initialRepeat=t,this._repeat=t,this}repeatDelay(t){return this._repeatDelayTime=t,this}yoyo(t=!1){return this._yoyo=t,this}easing(t=b.Linear.None){return this._easingFunction=t,this}interpolation(t=d.Linear){return this._interpolationFunction=t,this}chain(...t){return this._chainedTweens=t,this}onStart(t){return this._onStartCallback=t,this}onUpdate(t){return this._onUpdateCallback=t,this}onRepeat(t){return this._onRepeatCallback=t,this}onComplete(t){return this._onCompleteCallback=t,this}onStop(t){return this._onStopCallback=t,this}update(t=o(),r=!0){if(this._isPaused)return!0;let n,i,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(t>s)return!1;r&&this.start(t)}if(this._goToEnd=!1,t<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),i=(t-this._startTime)/this._duration,i=this._duration===0||i>1?1:i;let u=this._easingFunction(i);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,u),this._onUpdateCallback&&this._onUpdateCallback(this._object,i),i===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=t+this._repeatDelayTime:this._startTime=t+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(let a=0,l=this._chainedTweens.length;a<l;a++)this._chainedTweens[a].start(this._startTime+this._duration);return this._isPlaying=!1,!1}return!0}_updateProperties(t,r,n,i){for(let s in n){if(r[s]===void 0)continue;let u=r[s]||0,a=n[s],l=Array.isArray(t[s]),_=Array.isArray(a);!l&&_?t[s]=this._interpolationFunction(a,i):typeof a=="object"&&a?this._updateProperties(t[s],u,a,i):(a=this._handleRelativeValue(u,a),typeof a=="number"&&(t[s]=u+(a-u)*i))}}_handleRelativeValue(t,r){return typeof r!="string"?r:r.charAt(0)==="+"||r.charAt(0)==="-"?t+parseFloat(r):parseFloat(r)}_swapEndStartRepeatValues(t){let r=this._valuesStartRepeat[t],n=this._valuesEnd[t];typeof n=="string"?this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(n):this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=r}},T=k;var F="18.6.4",P=F;var C=p.nextId,h=g,S=h.getAll.bind(h),O=h.removeAll.bind(h),U=h.add.bind(h),M=h.remove.bind(h),R=h.update.bind(h);var x={Easing:b,Group:c,Interpolation:d,now:o,Sequence:p,nextId:C,Tween:T,VERSION:P,getAll:S,removeAll:O,add:U,remove:M,update:R},j=x;return D;})();
//# sourceMappingURL=tween.js.map