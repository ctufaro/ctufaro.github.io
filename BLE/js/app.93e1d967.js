(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],f=0,v=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&v.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("8c4f"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:""}},[a("v-toolbar-title",{staticClass:"headline text-uppercase"},[a("span",[e._v("Vuetify")]),a("span",{staticClass:"font-weight-light"},[e._v("SANDBOX")]),a("v-spacer")],1),a("v-spacer"),a("v-toolbar-items",{staticClass:"pr-5"},[a("v-btn",{attrs:{text:""}},[a("router-link",{attrs:{to:"/ble"}},[e._v("BLE")])],1),a("v-btn",{attrs:{text:""}},[a("router-link",{attrs:{to:"/centered"}},[e._v("CEN")])],1)],1),a("v-switch",{staticClass:"mt-6",on:{change:e.toggle}})],1),a("v-content",[a("router-view")],1)],1)},i=[],s={name:"App",data:function(){return{}},methods:{toggle:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}},mounted:function(){}},c=s,l=a("2877"),u=a("6544"),f=a.n(u),v=a("7496"),p=a("40dc"),d=a("8336"),g=a("a75b"),b=a("2fa4"),h=a("b73d"),m=a("2a7f"),y=Object(l["a"])(c,o,i,!1,null,null,null),_=y.exports;f()(y,{VApp:v["a"],VAppBar:p["a"],VBtn:d["a"],VContent:g["a"],VSpacer:b["a"],VSwitch:h["a"],VToolbarItems:m["a"],VToolbarTitle:m["b"]});var x=a("f309");n["a"].use(x["a"]);var w=new x["a"]({icons:{iconfont:"mdiSvg"}}),V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticClass:"pa-2"},[a("div",[a("h1",{on:{click:e.refresh}},[e._v(e._s(e.title))])]),a("v-flex",{attrs:{lg6:""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{attrs:{lg3:"","pr-7":""}},[a("v-text-field",{attrs:{label:"Service UUID:",readonly:""},model:{value:e.serviceUuid,callback:function(t){e.serviceUuid=t},expression:"serviceUuid"}})],1),a("v-flex",{attrs:{lg3:""}},[a("v-text-field",{attrs:{label:"Characteristic UUID:",readonly:""},model:{value:e.characteristicUuid,callback:function(t){e.characteristicUuid=t},expression:"characteristicUuid"}})],1)],1),a("div",{staticClass:"pb-3 d-flex justify-space-between"},[a("v-btn",{attrs:{outlined:"",large:"",fab:""},on:{click:function(t){t.preventDefault(),e.message="\\uf004"}}},[a("v-icon",[e._v("fas fa-heart")])],1),a("v-btn",{attrs:{outlined:"",large:"",fab:""},on:{click:function(t){t.preventDefault(),e.message="\\uf006"}}},[a("v-icon",[e._v("far fa-star")])],1),a("v-btn",{attrs:{outlined:"",large:"",fab:""},on:{click:function(t){t.preventDefault(),e.message="\\uf118"}}},[a("v-icon",[e._v("far fa-smile")])],1),a("v-btn",{attrs:{outlined:"",large:"",fab:""},on:{click:function(t){t.preventDefault(),e.message="\\uf1B0"}}},[a("v-icon",[e._v("fas fa-paw")])],1),a("v-btn",{attrs:{outlined:"",large:"",fab:""},on:{click:function(t){t.preventDefault(),e.message="\\uf164"}}},[a("v-icon",[e._v("fas fa-thumbs-up")])],1)],1),a("div",{staticClass:"pb-4 d-flex justify-space-between"},[a("v-btn",{attrs:{outlined:"",large:"",fab:""},on:{click:function(t){t.preventDefault(),e.message="\\uf25B"}}},[a("v-icon",[e._v("far fa-hand-peace")])],1),a("v-btn",{attrs:{outlined:"",large:"",fab:""},on:{click:function(t){t.preventDefault(),e.message="\\uf06E"}}},[a("v-icon",[e._v("far fa-eye")])],1),a("v-btn",{attrs:{outlined:"",large:"",fab:""},on:{click:function(t){t.preventDefault(),e.message="\\uf1BB"}}},[a("v-icon",[e._v("fas fa-tree")])],1),a("v-btn",{attrs:{outlined:"",large:"",fab:""},on:{click:function(t){t.preventDefault(),e.message="\\uf001"}}},[a("v-icon",[e._v("fas fa-music")])],1),a("v-btn",{attrs:{outlined:"",large:"",fab:""},on:{click:function(t){t.preventDefault(),e.message="\\uf0E7"}}},[a("v-icon",[e._v("fas fa-bolt")])],1)],1),a("v-text-field",{attrs:{label:"Message:"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),a("v-btn",{attrs:{color:"primary mb-10",small:""},on:{click:function(t){return t.preventDefault(),e.getDevices(t)}}},[e._v("CONNECT/SEND")]),a("v-alert",{attrs:{type:"info"}},[e._v("Log: "+e._s(e.logmsg))]),a("v-alert",{attrs:{type:"error"}},[e._v("Error: "+e._s(e.error))])],1)],1)},k=[],C=(a("99af"),a("a15b"),a("d81d"),a("fb6a"),a("b0c0"),a("e25e"),{data:function(){return{title:"BLE Configuration",message:"hello world",logmsg:"",error:"",serviceUuid:"0xec00",characteristicUuid:"0xec0f"}},mounted:function(){navigator.bluetooth||this.setError("Web Bluetooth API is not available.\n")},methods:{getDevices:function(){var e=this;if(this.clearLog(),navigator.bluetooth){var t,a=0,n=0;a=parseInt(this.serviceUuid),n=parseInt(this.characteristicUuid),this.log("Requesting Bluetooth Device..."),navigator.bluetooth.requestDevice({filters:[{services:[a]}]}).then((function(a){return t=a,e.log("-> Name:      "+a.name),t.addEventListener("gattserverdisconnected",e.onDisconnected),a.gatt.connect()})).then((function(e){return e.getPrimaryService(a)})).then((function(e){if(n)return e.getCharacteristic(n)})).then((function(t){var a=new TextEncoder("utf-8");return e.log("Encoded Message: "+a.encode(e.message)),t.writeValue(a.encode(e.message))})).then((function(){e.log("Message successfully sent !")})).catch((function(t){e.log("Error: "+t)}))}else this.setError("No Bluetooth detected")},onDisconnected:function(e){var t=event.target;this.log("Device: ".concat(t.name," is disconnected (Error: ").concat(e,")"))},log:function(){var e=Array.prototype.slice.call(arguments).map((function(e){return"string"===typeof e?e:JSON.stringify(e)})).join(" ");this.logmsg+=e+"\n"},clearLog:function(){this.logmsg=""},setError:function(e){this.error=e},refresh:function(){window.location.reload(!1)}}}),D=C,E=a("0798"),O=a("0e8f"),j=a("132d"),B=a("a722"),S=a("8654"),T=Object(l["a"])(D,V,k,!1,null,null,null),U=T.exports;f()(T,{VAlert:E["a"],VApp:v["a"],VBtn:d["a"],VFlex:O["a"],VIcon:j["a"],VLayout:B["a"],VTextField:S["a"]});var A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{attrs:{id:"inspire"}},[a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"10",sm:"8",md:"4"}},[a("v-card",{staticClass:"elevation-12"},[a("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[a("v-toolbar-title",[e._v("Login form")]),a("v-spacer")],1),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Login",name:"login",type:"text"}},[a("template",{slot:"prepend"},[a("v-icon",[e._v("fas fa-user")])],1)],2),a("v-text-field",{attrs:{id:"password",label:"Password",name:"password",type:"password"}},[a("template",{slot:"prepend"},[a("v-icon",[e._v("fas fa-lock")])],1)],2)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary"}},[e._v("Login")])],1)],1)],1)],1)],1)],1)],1)},L=[],P={props:{source:String}},I=P,N=a("b0af"),M=a("99d9"),$=a("62ad"),F=a("a523"),J=a("4bd4"),q=a("0fd9"),R=a("71d9"),W=Object(l["a"])(I,A,L,!1,null,null,null),X=W.exports;f()(W,{VApp:v["a"],VBtn:d["a"],VCard:N["a"],VCardActions:M["a"],VCardText:M["b"],VCol:$["a"],VContainer:F["a"],VContent:g["a"],VForm:J["a"],VIcon:j["a"],VRow:q["a"],VSpacer:b["a"],VTextField:S["a"],VToolbar:R["a"],VToolbarTitle:m["b"]}),n["a"].use(r["a"]);var z=new r["a"]({routes:[{path:"/",component:U},{path:"/ble",component:U},{path:"/centered",component:X}],scrollBehavior:function(){return{x:0,y:0}}});n["a"].config.productionTip=!1,n["a"].use(r["a"]),new n["a"]({vuetify:w,render:function(e){return e(_)},router:z}).$mount("#app")}});
//# sourceMappingURL=app.93e1d967.js.map