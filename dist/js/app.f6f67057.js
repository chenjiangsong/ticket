(function(t){function e(e){for(var r,o,s=e[0],u=e[1],c=e[2],h=0,f=[];h<s.length;h++)o=s[h],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var l=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("header",{staticClass:"header"},[n("div",{staticClass:"purchase-board"},[n("el-card",{attrs:{shadow:"never"}},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",{attrs:{label:"请输入购票数量"}},[n("el-input-number",{attrs:{min:1,max:5,label:"请输入购票数量",size:"mini"},model:{value:t.num,callback:function(e){t.num=e},expression:"num"}})],1),n("el-form-item",[n("el-button",{attrs:{size:"mini"},on:{click:t.buy}},[t._v("购票")]),n("el-button",{attrs:{size:"mini"},on:{click:t.autoBuy}},[t._v("自动随机购票")])],1)],1)],1)],1)]),n("el-card",{attrs:{"body-style":"overflow: scroll"}},[n("canvas",{attrs:{id:"hall",width:"2000",height:"1000"}})])],1)},i=[],o=(n("ac6a"),n("6c7b"),n("d225")),s=n("b0b4");function u(t){return Math.floor(Math.random()*t)+1}function c(t){return t.reduce(function(t,e){return t+e},0)}function l(t){return Math.PI/180*t}n("5df3"),n("1c4c");var h,f=n("bd86"),d=(h={},Object(f["a"])(h,45,Math.PI/4),Object(f["a"])(h,90,Math.PI/2),Object(f["a"])(h,180,Math.PI),Object(f["a"])(h,360,2*Math.PI),["A","B","C","D"]),p=Array.from({length:26}).map(function(t,e){return 50+2*e}),b={A:{angle:178,color:"#FFFF99"},B:{angle:224,color:"#FF6666"},C:{angle:270,color:"#99CCFF"},D:{angle:316,color:"#FF99CC"}},v=1,g=0,m=function(){function t(e){var n=e.area,r=e.rowIndex,a=e.seatIndex,i=(e.canvas,e.ctx),s=e.zeroPoint;Object(o["a"])(this,t),this.id=g++,this.select=!1,this.rowIndex=r,this.seatIndex=a,this.area=n,this.ctx=i,this.zeroPoint=s,this.lastSelected=!1}return Object(s["a"])(t,[{key:"selected",value:function(){this.select=!0,this.lastSelected=!0}},{key:"render",value:function(){var t=this.ctx,e=this.zeroPoint,n=e.x,r=e.y,a=this.rowIndex,i=this.seatIndex;t.beginPath();var o=50+2*(a-1),s=b[this.area],u=l(s.angle)+l(45)/o*(i-1),c=l(s.angle)+l(45)/o*i;t.arc(n*v,r*v,(210+15*(a-1))*v,u,c),t.arc(n*v,r*v,(210+15*a-2)*v,c,u,!0),t.fillStyle=s.color,t.strokeStyle="#AAAAAA",this.lastSelected&&(t.fillStyle="#333333"),this.select&&t.fill(),t.closePath(),t.stroke(),this.lastSelected=!1}}]),t}(),y=(n("7514"),0),S=function(){function t(e){var n=e.rowIndex,r=e.area;Object(o["a"])(this,t),this.id=y++,this.seats=[],this.selectIndex=0,this.freeSeatsNum=0,this.seatMap=[],this.weight=0,this.normalSeat=[],this.area=r,this.rowIndex=n,this.seatIndex=1,this.goldSeat=[],this.normalSeat=[]}return Object(s["a"])(t,[{key:"addSeat",value:function(t){this.seats.push(t),this.freeSeatsNum++,t.render(),this.updateSeatMap()}},{key:"getFreeNum",value:function(){return this.freeSeatsNum}},{key:"getAvailableSeatsCount",value:function(t){if(this.freeSeatsNum<t)return{goldSeat:this.goldSeat,normalSeat:this.normalSeat};for(var e=this.seatMap.join(""),n="",r=0;r<t;r++)n+="0";for(var a=0;a<this.seats.length;a++)e.substr(a,t)===n&&(this.normalSeat.push(a+1),(e.substr(a-1,t)!==n&&e.substr(a+1,t)!==n||0===a&&e.substr(a+1,t)!==n||a===this.seats.length-1&&e.substr(a-1,t)!==n)&&this.goldSeat.push(a+1));return{goldSeat:this.goldSeat,normalSeat:this.normalSeat}}},{key:"lockSeat",value:function(t){for(var e=this,n=this.goldSeat.length?this.goldSeat:this.normalSeat,r=u(n.length),a=n[r-1],i=[],o=function(t){var n=a++,r=e.seats.find(function(t){return t.seatIndex===n});r?(r.selected(),e.freeSeatsNum--,i.push(r)):console.error("没找到的keyIndex",n)},s=0;s<t;s++)o(s)}},{key:"updateSeatMap",value:function(){this.seatMap=this.seats.map(function(t){return t.select?1:0}),this.goldSeat=[],this.normalSeat=[]}}]),t}(),w=(n("8e6e"),n("456d"),n("768b"));function O(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?O(n,!0).forEach(function(e){Object(f["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):O(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var k=function(){function t(e){var n=e.ctx;Object(o["a"])(this,t),this.ctx=n,this.rows=[]}return Object(s["a"])(t,[{key:"addRow",value:function(t){this.rows.push(t)}},{key:"repaint",value:function(){this.ctx.clearRect(0,0,2e3,1e3),this.rows.forEach(function(t){t.updateSeatMap(),t.seats.forEach(function(t){t.render()})})}},{key:"buyTickets",value:function(t){if(t<1)return!1;var e=this.getAllFreeSeatNum();return e<t?(alert("座位不够啦"),!1):(this.distribute(t),!0)}},{key:"getAllFreeSeatNum",value:function(){return c(this.rows.map(function(t){return t.getFreeNum()}))}},{key:"distribute",value:function(t){var e=0,n=[0,0],r=!1,a=this.rows.map(function(e){var n=e.getAvailableSeatsCount(t),a=n.goldSeat,i=n.normalSeat;return a.length&&(r=!0),x({},e,{goldSeat:a,normalSeat:i})}),i=[];if(a.forEach(function(t){var a=r?t.goldSeat.length:t.normalSeat.length;if(a>0){e+=a;var o=[];o[0]=n[1]+1,o[1]=n[1]+a,n=o,i.push({id:t.id,region:o})}}),e<1){var o=Math.floor(t/2)+1,s=t-o;return this.buyTickets(o),void this.buyTickets(s)}var c=u(e),l=i.find(function(t){var e=t.region,n=Object(w["a"])(e,2),r=n[0],a=n[1];return r<=c&&c<=a}),h=this.rows.find(function(t){return t.id===l.id});h.lockSeat(t),this.repaint()}}]),t}(),j=n("5118"),P={data:function(){return{num:5,rowsAll:[],ticketManager:null}},mounted:function(){var t=this,e=document.getElementById("hall"),n=e.getContext("2d"),r={x:600,y:600};this.ticketManager=new k({ctx:n}),d.forEach(function(e){p.forEach(function(a,i){for(var o=i+1,s=new S({area:e,rowIndex:o}),u=1;u<=a;u++){var c=new m({area:e,rowIndex:o,seatIndex:u,ctx:n,zeroPoint:r});s.addSeat(c)}t.ticketManager.addRow(s)})})},methods:{buy:function(){this.ticketManager.buyTickets(this.num)},autoBuy:function(){var t=this,e=setInterval(function(){var n=t.ticketManager.buyTickets(u(5));n||Object(j["clearInterval"])(e)},200)}}},I=P,M=(n("7c55"),n("2877")),A=Object(M["a"])(I,a,i,!1,null,null,null),F=A.exports,C=n("5c96"),_=n.n(C);n("0fae");r["default"].use(_.a),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(F)}}).$mount("#app")},"5c48":function(t,e,n){},"7c55":function(t,e,n){"use strict";var r=n("5c48"),a=n.n(r);a.a}});
//# sourceMappingURL=app.f6f67057.js.map