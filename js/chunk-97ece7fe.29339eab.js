(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-97ece7fe"],{9269:function(e,t,n){"use strict";n.r(t);var a=n("bee2"),r=n("d4ec"),i=n("262e"),l=n("2caf"),u=n("9ab4"),c=n("1b40"),s=(n("a630"),n("3ca3"),n("b0c0"),n("d3b7"),n("ddb0"),n("d81d"),[{name:"questions",value:17},{name:"schools",value:25},{name:"philosophers",value:35}]),o={questions:"green",schools:"red",philosophers:"blue"},h=200,f=200,d=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"init",value:function(){var e=this.canvasInit(),t=this.dataInit();this.barInit3(e,t)}},{key:"canvasInit",value:function(){var e=document.getElementById("bar-container1");e.width=2*h,e.height=2*f,e.style.width="".concat(h,"px"),e.style.height="".concat(f,"px");var t=null==e?void 0:e.getContext("2d");return t.translate(10,10),t.scale(1,1),t}},{key:"dataInit",value:function(){return{names:Array.from(s,(function(e){return e.name})),values:Array.from(s,(function(e){return e.value})),indexs:Array.from(s,(function(e,t){return t}))}}},{key:"barInit3",value:function(e,t){for(var n=t.names,a=(t.values,t.indexs,0);a<n.length;a+=1)this.renderGraf(e,a,t)}},{key:"renderGraf",value:function(e,t,n){var a=n.names,r=n.values,i=(n.indexs,a[t]),l=r[t],u=o[i],c=r[0];r.map((function(e){return e>c&&(c=e),e}));var s=l,h=110*t,f=c-s;console.log("第一条数据：  x==> ",h," y==> ",f," width==> ",100," height==> ",s),e.fillStyle=u,e.fillRect(h,f,100,s),e.textAlign="center",e.textBaseline="middle",e.fillStyle="white",e.font="16px PingFangSC-Regular, sans-serif",e.fillText(l,h+50,f+s/2)}},{key:"mounted",value:function(){this.init()}}]),n}(c.d),v=d=Object(u.a)([c.a],d),b=n("2877"),y=Object(b.a)(v,(function(){var e=this.$createElement;return(this._self._c||e)("canvas",{attrs:{id:"bar-container1"}})}),[],!1,null,"0b9ac68e",null).exports,m=n("2909"),g=500,p=500,x=400,O=400,j=10,k=10,w=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n,[{key:"init",value:function(){var e=this.canvasInit(),t=this.dataInit();this.barLine(e),this.barChart(e,t)}},{key:"canvasInit",value:function(){var e=document.getElementById("bar-container2");e.width=2*g,e.height=2*p,e.style.width="".concat(g,"px"),e.style.height="".concat(p,"px");var t=null==e?void 0:e.getContext("2d");return t.translate(g-x,p-O),t.scale(2,2),t}},{key:"dataInit",value:function(){var e=x,t=O,n=j,a=k,r=Array.from(s,(function(e){return e.name})),i=Array.from(s,(function(e){return e.value})),l=Array.from(s,(function(e,t){return t})),u=Math.max.apply(Math,Object(m.a)(i));return{names:r,values:i,indexs:l,heights:Array.from(s,(function(e){return(t-a)*(e.value/u)})),barWidth:(e-n*(l.length+1))/l.length}}},{key:"barChart",value:function(e,t){for(var n=t.indexs,a=0;a<n.length;a+=1){var r=this.renderComputed(e,a,t);this.renderGraf(e,r),this.renderValueTitle(e,r)}}},{key:"renderComputed",value:function(e,t,n){var a=n.names,r=n.values,i=n.heights,l=n.barWidth,u=a[t],c=r[t],s=o[u],h=O,f=j,d=i[t],v=f*(t+1)+l*t,b=h-d;return console.log("第二条数据：  x==> ",v," y==> ",b," width==> ",l," height==> ",d),{color:s,x:v,y:b,barWidth:l,barHeight:d,currentValue:c}}},{key:"renderGraf",value:function(e,t){var n=t.color,a=t.x,r=t.y,i=t.barWidth,l=t.barHeight;e.fillStyle=n,e.fillRect(a,r,i,l)}},{key:"renderValueTitle",value:function(e,t){var n=t.x,a=t.y,r=t.barWidth,i=t.barHeight,l=t.currentValue;e.textAlign="center",e.textBaseline="middle",e.fillStyle="white",e.font="16px PingFangSC-Regular, sans-serif",e.fillText(l,n+r/2,a+i/2)}},{key:"barLine",value:function(e){var t=x,n=O;e.fillStyle="black",e.fillRect(0,n,t,2),e.fillRect(0,n,2,-n)}},{key:"mounted",value:function(){this.init()}}]),n}(c.d),C=w=Object(u.a)([c.a],w),I=Object(b.a)(C,(function(){var e=this.$createElement;return(this._self._c||e)("canvas",{attrs:{id:"bar-container2"}})}),[],!1,null,"9133d858",null).exports,A=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(a.a)(n)}(c.d),S=A=Object(u.a)([Object(c.a)({components:{CanvasOne:y,CanvasTwo:I}})],A),R=(n("b2ed"),Object(b.a)(S,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("CanvasOne"),t("CanvasTwo")],1)}),[],!1,null,"4dab1006",null));t.default=R.exports},b2ed:function(e,t,n){"use strict";n("e7a2")},e7a2:function(e,t,n){}}]);