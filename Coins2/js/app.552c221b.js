(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],p=0,f=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],r=!0,s=1;s<o.length;s++){var c=o[s];0!==a[c]&&(r=!1)}r&&(n.splice(e--,1),t=i(i.s=o[0]))}return t}var r={},a={app:0},n=[];function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=r,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"2fb9":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);var r=o("2b0e"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",{staticClass:"pa-2",attrs:{fluid:""}},[o("v-row",t._l(t.items,(function(e,r){return o("v-col",{key:r},[o("v-card",{attrs:{color:e.color}},[o("v-list-item",{attrs:{"three-line":""}},[o("v-list-item-avatar",{attrs:{size:"50",tile:""}},[o("v-img",{attrs:{src:e.src}})],1),o("v-list-item-content",[o("div",{staticClass:"txt"},[o("div",{staticClass:"coin"},[t._v(t._s(e.coin))]),o("div",{staticClass:"stats"},[t._v(t._s(e.stats))]),o("div",{staticClass:"profit"},[t._v(t._s(e.profit))])])])],1),o("div",{staticClass:"footer"},[o("div",[t._v("#"+t._s(e.rank))]),o("div",[t._v(t._s(e.volume))])])],1)],1)})),1),o("v-footer",{staticClass:"portfolio",attrs:{absolute:""}},[o("v-col",{staticClass:"text-center",attrs:{cols:"12"}},[o("strong",[t._v("$1,425.00")]),o("div",{staticStyle:{"font-size":"smaller"}},[t._v("$217,123,425.00")])])],1)],1)},n=[],i={data:()=>({items:[],hold:["electroneum","tomochain","bitcoin"],url:"https://api.coinmarketcap.com/v2/global/"}),mounted(){this.getdata()},methods:{getdata(){this.hold.forEach(t=>{this.axios.get(`https://api.coinmarketcap.com/v1/ticker/${t}/?ref=widget&convert=USD`).then(t=>{console.log(t.data)}),"electroneum"===t&&this.items.push({color:"#C0C0C0",src:"https://s2.coinmarketcap.com/static/img/coins/200x200/2137.png",coin:"Electroneum (ETN)",stats:"$0.003921 USD (4.04%)",profit:"123.45",rank:"1",volume:"$307.86k"}),"tomochain"===t&&this.items.push({color:"#1E223F",src:"https://s2.coinmarketcap.com/static/img/coins/200x200/2570.png",coin:"TomoChain (TOMO)",stats:"$0.003921 USD (4.04%)",profit:"123.45",rank:"1",volume:"$307.86k"}),"bitcoin"===t&&this.items.push({color:"#FFCFA8",src:"https://s2.coinmarketcap.com/static/img/coins/200x200/1.png",coin:"Bitcoin (BTC)",stats:"$0.003921 USD (4.04%)",profit:"123.45",rank:"1",volume:"$307.86k"})})}}},s=i,c=(o("d982"),o("2877")),l=o("6544"),u=o.n(l),p=o("b0af"),f=o("62ad"),v=o("a523"),d=o("553a"),m=o("adda"),h=o("da13"),b=o("8270"),g=o("5d23"),_=o("0fd9"),y=Object(c["a"])(s,a,n,!1,null,"074ead11",null),k=y.exports;u()(y,{VCard:p["a"],VCol:f["a"],VContainer:v["a"],VFooter:d["a"],VImg:m["a"],VListItem:h["a"],VListItemAvatar:b["a"],VListItemContent:g["a"],VRow:_["a"]});var C=o("f309");r["a"].use(C["a"]);var w=new C["a"]({theme:{dark:!0}}),O=o("bc3a"),x=o.n(O),$=o("a7fe"),j=o.n($);r["a"].use(j.a,x.a),r["a"].config.productionTip=!1,new r["a"]({vuetify:w,render:t=>t(k)}).$mount("#app")},d982:function(t,e,o){"use strict";var r=o("2fb9"),a=o.n(r);a.a}});
//# sourceMappingURL=app.552c221b.js.map