(function(e){function t(t){for(var n,i,s=t[0],c=t[1],l=t[2],u=0,p=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function i(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1d1bfe53"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(e);var l=new Error;o=function(t){c.onerror=c.onload=null,clearTimeout(u);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",l.name="ChunkLoadError",l.type=n,l.request=o,r[1](l)}a[e]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[e._e(),r("v-content",[r("router-view")],1)],1)},o=[],i={name:"App",components:{},data:function(){return{}}},s=i,c=r("2877"),l=r("6544"),u=r.n(l),d=r("7496"),p=r("40dc"),f=r("8336"),v=r("a75b"),m=r("132d"),h=r("2fa4"),b=Object(c["a"])(s,a,o,!1,null,null,null),x=b.exports;u()(b,{VApp:d["a"],VAppBar:p["a"],VBtn:f["a"],VContent:v["a"],VIcon:m["a"],VSpacer:h["a"]});r("d3b7");var y=r("8c4f"),g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("h1",[e._v("This is the home page")])])}],k={},V=Object(c["a"])(k,g,_,!1,null,null,null),w=V.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"12",sm:"8",md:"6"}},[r("v-stepper",{model:{value:e.e1,callback:function(t){e.e1=t},expression:"e1"}},[r("v-stepper-header",[r("v-stepper-step",{attrs:{complete:e.e1>1,step:"1"}},[e._v("Register")]),r("v-divider"),r("v-stepper-step",{attrs:{complete:e.e1>2,step:"2"}},[e._v("Add/Edit Questions")]),r("v-divider"),r("v-stepper-step",{attrs:{step:"3"}},[e._v("Review")])],1),r("v-stepper-items",[r("v-stepper-content",{attrs:{step:"1"}},[r("RegisterForm",{on:{submit:function(t){return e.submit(2)}}})],1),r("v-stepper-content",{attrs:{step:"2"}},[r("QuestionMaker",{on:{submit:function(t){return e.submit(3)}}})],1),r("v-stepper-content",{attrs:{step:"3"}},[r("v-alert",{attrs:{text:"",dense:"",color:"teal",icon:"mdi-clock-fast",border:"left"}},[e._v(" Thank you for your submission. Your questions will be reviewed. Vestibulum ullamcorper mauris at ligula. Nulla porta dolor. Vestibulum facilisis, purus nec pulvinar iaculis, ligula mi congue nunc, vitae euismod ligula urna in dolor. Curabitur at lacus ac velit ornare lobortis. ")]),r("v-btn",{attrs:{color:"primary"},on:{click:function(t){e.e1=1}}},[e._v(" RESTART ")])],1)],1)],1)],1)],1)],1)],1)},S=[],C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[e._v("Registration")]),r("v-spacer")],1),r("v-card-text",[r("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Name",required:""}}),r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("v-checkbox",{attrs:{rules:[function(e){return!!e||"You must agree to continue!"}],label:"Do you agree?",required:""},model:{value:e.checkbox,callback:function(t){e.checkbox=t},expression:"checkbox"}}),r("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.submit}},[e._v(" SUBMIT ")])],1)],1)],1)},E=[],q={data:function(){return{valid:!0,name:"RegisterForm",nameRules:[function(e){return!!e||"Name is required"},function(e){return e&&e.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1}},methods:{validate:function(){this.$refs.form.validate()&&(this.snackbar=!0)},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},submit:function(){this.$emit("submit")}}},j=q,O=r("b0af"),R=r("99d9"),$=r("ac7c"),M=r("4bd4"),A=r("8654"),I=r("71d9"),P=r("2a7f"),Q=Object(c["a"])(j,C,E,!1,null,null,null),B=Q.exports;u()(Q,{VBtn:f["a"],VCard:O["a"],VCardText:R["a"],VCheckbox:$["a"],VForm:M["a"],VSpacer:h["a"],VTextField:A["a"],VToolbar:I["a"],VToolbarTitle:P["a"]});var F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[r("v-toolbar-title",[e._v("Add/Edit Questions")]),r("v-spacer")],1),r("v-card-text",[r("v-slide-y-transition",{attrs:{group:""}},e._l(e.questions,(function(t){return r("v-form",{key:t.id},[r("v-text-field",{attrs:{placeholder:"Enter Question Text",label:"Question #"+(t.id+1),filled:"",rounded:""},scopedSlots:e._u([{key:"append",fn:function(){return[r("v-btn",{attrs:{text:"",icon:"",small:""},on:{click:function(r){return e.removequestion(t)}}},[r("v-icon",{attrs:{color:"red"}},[e._v("fas fa-times")])],1)]},proxy:!0}],null,!0),model:{value:t.text,callback:function(r){e.$set(t,"text",r)},expression:"q.text"}}),r("v-slide-y-transition",{attrs:{group:""}},e._l(t.choices,(function(n){return r("div",{key:n.id,staticClass:"pl-4",staticStyle:{width:"90%"}},[r("v-text-field",{attrs:{placeholder:"Enter Choice Text",outlined:"",dense:""},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("v-btn",{attrs:{text:"",small:"",icon:""},on:{click:function(r){return e.correct(n,t.choices)}}},[n.correct?e._e():r("v-icon",{attrs:{color:"grey lighten-2"}},[e._v("far fa-check-circle")]),n.correct?r("v-icon",{attrs:{color:"green lighten-2"}},[e._v("fas fa-check-circle")]):e._e()],1)]},proxy:!0},{key:"append-outer",fn:function(){return[r("v-btn",{attrs:{text:"",icon:"",small:""},on:{click:function(r){return e.remove(n,t.choices)}}},[r("v-icon",{attrs:{color:"red"}},[e._v("fas fa-times-circle")])],1)]},proxy:!0}],null,!0),model:{value:n.text,callback:function(t){e.$set(n,"text",t)},expression:"c.text"}})],1)})),0),r("div",{staticClass:"pl-4 mb-3"},[r("v-btn",{attrs:{"x-small":"",color:"warning",dark:""},on:{click:function(r){return r.preventDefault(),e.addchoice(t)}}},[e._v("+ Add Choice")])],1),r("div",{staticClass:"pa-2"})],1)})),1),r("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:function(t){return e.addquestion()}}},[e._v("ADD QUESTION")]),r("v-btn",{staticClass:"mr-4",attrs:{color:"success"},on:{click:e.submit}},[e._v("SUBMIT")])],1)],1)},D=[],N=(r("d81d"),r("a434"),r("159b"),{name:"QuestionMaker",data:function(){return{questions:[{id:0,text:"How many sides does a hexagon have?",choices:[{id:0,text:"4 sides",correct:!1},{id:1,text:"5 sides",correct:!1},{id:2,text:"6 sides",correct:!0},{id:3,text:"7 sides",correct:!1}]}]}},methods:{submit:function(){this.$emit("submit")},addchoice:function(e){var t=0;if(e.choices.length>0){var r=Math.max.apply(Math,e.choices.map((function(e){return e.id})));t=r+1}e.choices.push({id:t,text:"",correct:!1})},correct:function(e,t){t.forEach((function(t){t.id===e.id?t.correct=!0:t.correct=!1}))},remove:function(e,t){t.forEach((function(t,r,n){t.id===e.id&&n.splice(r,1)}))},removequestion:function(e){this.questions.forEach((function(t,r,n){t.id===e.id&&n.splice(r,1)}))},addquestion:function(){var e=0;if(this.questions.length>0){var t=Math.max.apply(Math,this.questions.map((function(e){return e.id})));e=t+1}this.questions.push({id:e,text:"",choices:[]})}}}),U=N,Y=r("0789"),H=Object(c["a"])(U,F,D,!1,null,null,null),J=H.exports;u()(H,{VBtn:f["a"],VCard:O["a"],VCardText:R["a"],VForm:M["a"],VIcon:m["a"],VSlideYTransition:Y["c"],VSpacer:h["a"],VTextField:A["a"],VToolbar:I["a"],VToolbarTitle:P["a"]});var L={name:"Register",components:{RegisterForm:B,QuestionMaker:J},data:function(){return{e1:0}},methods:{submit:function(e){this.e1=e}}},z=L,G=r("0798"),K=r("62ad"),W=r("a523"),X=r("ce7e"),Z=r("0fd9"),ee=r("7e85"),te=r("e516"),re=r("9c54"),ne=r("56a4"),ae=Object(c["a"])(z,T,S,!1,null,null,null),oe=ae.exports;u()(ae,{VAlert:G["a"],VApp:d["a"],VBtn:f["a"],VCol:K["a"],VContainer:W["a"],VDivider:X["a"],VRow:Z["a"],VStepper:ee["a"],VStepperContent:te["a"],VStepperHeader:re["a"],VStepperItems:re["b"],VStepperStep:ne["a"]}),n["a"].use(y["a"]);var ie=[{path:"/home",name:"home",component:w},{path:"/register",name:"register",component:oe},{path:"/qm",name:"qm",component:J},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],se=new y["a"]({routes:ie}),ce=se,le=r("2f62");n["a"].use(le["a"]);var ue=new le["a"].Store({state:{},mutations:{},actions:{},modules:{}}),de=r("f309");n["a"].use(de["a"]);var pe=new de["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:ce,store:ue,vuetify:pe,render:function(e){return e(x)}}).$mount("#app")}});
//# sourceMappingURL=app.79ea6212.js.map