(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==o[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},o={app:0},n=[];function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("1356"),o=a.n(r);o.a},1356:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"pa-2",attrs:{fluid:""}},[a("v-row",t._l(t.items,(function(e,r){return a("v-col",{key:r},[a("v-card",{attrs:{color:e.color}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-avatar",{attrs:{size:"50",tile:""}},[a("v-img",{attrs:{src:e.src}})],1),a("v-list-item-content",[a("div",{staticClass:"txt"},[a("div",{staticClass:"coin"},[t._v(t._s(e.coin))]),a("div",{staticClass:"stats"},[t._v(t._s(e.price)+"  "),a("span",{class:e.fclr},[t._v("("+t._s(e.changein)+"%)")])]),"Bitcoin (BTC)"!=e.coin?a("div",{staticClass:"profit"},[t._v("PROFIT $"+t._s(e.profit))]):t._e()])])],1),a("div",{staticClass:"footer"},[a("div",[t._v("#"+t._s(e.rank))]),a("div",[t._v("$"+t._s(e.volume))])])],1)],1)})),1),a("div",{staticStyle:{"padding-bottom":"72px"}}),a("v-footer",{staticClass:"portfolio",attrs:{fixed:"",color:"#2E3032"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12"},on:{click:function(e){return e.preventDefault(),t.pageRefresh(e)}}},[a("strong",[t._v("$"+t._s(this.portfolio.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g,",")))]),a("div",{staticStyle:{"font-size":"smaller"}},[t._v("$"+t._s(this.totalmarket))])])],1)],1)},n=[],i={data:()=>({items:[],hold:[{name:"electroneum",quantity:210805.03,imageurl:"https://s2.coinmarketcap.com/static/img/coins/200x200/2137.png",lstname:"Electroneum (ETN)",color:"#0F1317"},{name:"tomochain",quantity:2020.103,imageurl:"https://s2.coinmarketcap.com/static/img/coins/200x200/2570.png",lstname:"TomoChain (TOMO)",color:"#0F1317"},{name:"bitcoin",quantity:0,imageurl:"https://s2.coinmarketcap.com/static/img/coins/200x200/1.png",lstname:"Bitcoin (BTC)",color:"#0F1317"}],portfolio:0,totalmarket:"",decimals:5}),mounted(){this.getdata()},methods:{getdata(){this.hold.forEach(t=>{this.axios.get(`https://api.coinmarketcap.com/v1/ticker/${t.name}/?ref=widget&convert=USD`).then(e=>{this.items.push({color:t.color,src:t.imageurl,coin:t.lstname,price:parseFloat(e.data[0]["price_usd"]).toFixed(this.decimals),fclr:Number(e.data[0]["percent_change_24h"])<0?"loss":"gain",changein:Number(e.data[0]["percent_change_24h"]),profit:parseFloat(e.data[0]["price_usd"]).toFixed(this.decimals)*t.quantity,rank:e.data[0].rank,volume:this.currency(e.data[0]["24h_volume_usd"],2)}),this.portfolio=this.portfolio+parseFloat(e.data[0]["price_usd"]).toFixed(this.decimals)*t.quantity})}),this.axios.get("https://api.coinmarketcap.com/v2/global/").then(t=>{this.totalmarket=this.currency(t.data.data.quotes.USD["total_market_cap"],2)})},pageRefresh(){document.location.reload()},currency(t,e){e=Math.pow(10,e);for(var a=["K","M","B","T"],r=a.length-1;r>=0;r--){var o=Math.pow(10,3*(r+1));if(o<=t){1e3==(t=Math.round(t*e/o)/e)&&r<a.length-1&&(t=1,r++),t+=" "+a[r];break}}return t}}},s=i,c=(a("034f"),a("2877")),l=a("6544"),u=a.n(l),p=a("b0af"),d=a("62ad"),f=a("a523"),m=a("553a"),h=a("adda"),v=a("da13"),g=a("8270"),_=a("5d23"),y=a("0fd9"),b=Object(c["a"])(s,o,n,!1,null,null,null),k=b.exports;u()(b,{VCard:p["a"],VCol:d["a"],VContainer:f["a"],VFooter:m["a"],VImg:h["a"],VListItem:v["a"],VListItemAvatar:g["a"],VListItemContent:_["a"],VRow:y["a"]});var x=a("f309");r["a"].use(x["a"]);var w=new x["a"]({theme:{dark:!0}}),C=a("bc3a"),O=a.n(C),F=a("a7fe"),j=a.n(F);r["a"].use(j.a,O.a),r["a"].config.productionTip=!1,new r["a"]({vuetify:w,render:t=>t(k)}).$mount("#app")}});
//# sourceMappingURL=app.71b82d73.js.map