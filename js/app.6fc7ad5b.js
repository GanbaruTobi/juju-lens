(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{0:function(e,t,r){e.exports=r("2f39")},"2f39":function(e,t,r){"use strict";r.r(t);var n=r("967e"),o=r.n(n),a=(r("a481"),r("96cf"),r("fa84")),l=r.n(a),s=(r("573e"),r("7d6e"),r("e54f"),r("62f2"),r("7e6d"),r("2b0e")),c=r("1f91"),u=r("42d2"),i=r("b05d"),d=r("436b"),p=r("18d6"),f=r("2a19");s["a"].use(i["a"],{config:{dark:"auto",notify:{position:"top-right"}},lang:c["a"],iconSet:u["a"],plugins:{Dialog:d["a"],LocalStorage:p["a"],Notify:f["a"]}});var m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"q-app"}},[r("router-view")],1)},b=[],h=r("60a3"),C=function(e,t,r,n){var o,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)l=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(l=(a<3?o(l):a>3?o(t,r,l):o(t,r))||l);return a>3&&l&&Object.defineProperty(t,r,l),l};let w=class extends h["d"]{created(){const e=this.$q.localStorage.getItem("darkMode");null==e||"boolean"!=typeof e&&"auto"!=e||this.$q.dark.set(e)}};w=C([h["a"]],w);var v=w,g=v,x=r("2877"),y=Object(x["a"])(g,m,b,!1,null,null,null),k=y.exports,j=r("4bde"),W=r("2f62");const P={debugWindow:{visible:!1,maximized:!1}};var z=P;const O={};var q=O;const N={};var T=N;const D={toggleDebugWindow(e){e.debugWindow.visible=!e.debugWindow.visible},toggleDebugWindowMaximized(e){e.debugWindow.maximized=!e.debugWindow.maximized}};var M=D;const R={namespaced:!0,actions:q,getters:T,mutations:M,state:z};var V=R;const I={currentController:null,controllers:[],clouds:[],cloudCredentials:[]};var Y=I,A=r("b2da");const B={someAction(){}};var S=B,$=r("cf2e");const G={namespaced:!0,actions:A["b"],getters:S,mutations:$["a"],state:Y};var L=G,J=Object(j["store"])((function({Vue:e}){e.use(W["a"]);const t=new W["a"].Store({modules:{floatingWindows:V,juju:L},strict:!1});return t})),K=r("8c4f");const E=[{path:"/",component:()=>Promise.all([r.e(0),r.e(3)]).then(r.bind(null,"713b")),children:[{path:"",name:"home",redirect:"/controllers"},{path:"/controllers",name:"controllers",component:()=>Promise.all([r.e(0),r.e(7)]).then(r.bind(null,"a7d4"))},{path:"/models",name:"models",component:()=>r.e(8).then(r.bind(null,"56c6"))},{path:"/admin",name:"admin",component:()=>r.e(6).then(r.bind(null,"34ab"))},{path:"/welcome",name:"welcome",component:()=>Promise.all([r.e(0),r.e(4)]).then(r.bind(null,"35a8"))}]}];E.push({path:"*",component:()=>Promise.all([r.e(0),r.e(5)]).then(r.bind(null,"e51e"))});var H=E,Q=r("fe09"),_=Object(j["route"])((function({Vue:e}){e.use(K["a"]);const t=new K["a"]({scrollBehavior:()=>({x:0,y:0}),routes:H,mode:"hash",base:""});return t.beforeEach((e,t,r)=>{const n="seen-juju-lens-before";if(Q["a"].getItem(n)||"welcome"==e.name)r();else{r({name:"welcome",query:Object.assign({welcomePageTo:e.fullPath},e.query)});try{Q["a"].set(n,"true")}catch(o){console.error(o)}}}),t})),U=function(){return X.apply(this,arguments)};function X(){return X=l()(o.a.mark((function e(){var t,r,n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("function"!==typeof J){e.next=6;break}return e.next=3,J({Vue:s["a"]});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=J;case 7:if(t=e.t0,"function"!==typeof _){e.next=14;break}return e.next=11,_({Vue:s["a"],store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=_;case 15:return r=e.t1,t.$router=r,n={router:r,store:t,render:function(e){return e(k)}},n.el="#q-app",e.abrupt("return",{app:n,store:t,router:r});case 20:case"end":return e.stop()}}),e)}))),X.apply(this,arguments)}var F=r("bc3a"),Z=r.n(F),ee=Object(j["boot"])(({Vue:e})=>{e.prototype.$axios=Z.a});function te(){return re.apply(this,arguments)}function re(){return re=l()(o.a.mark((function e(){var t,r,n,a,l,c,u,i,d;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:t=e.sent,r=t.app,n=t.store,a=t.router,l=!0,c=function(e){l=!1,window.location.href=e},u=window.location.href.replace(window.location.origin,""),i=[ee],d=0;case 11:if(!(!0===l&&d<i.length)){e.next=29;break}if("function"===typeof i[d]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,i[d]({app:r,router:a,store:n,Vue:s["a"],ssrContext:null,redirect:c,urlPath:u});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e["catch"](14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:d++,e.next=11;break;case 29:if(!1!==l){e.next=31;break}return e.abrupt("return");case 31:new s["a"](r);case 32:case"end":return e.stop()}}),e,null,[[14,19]])}))),re.apply(this,arguments)}te()},"7e6d":function(e,t,r){},b2da:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r("cf2e"),o={controllers:[{name:"my-controller",cloud:"aws",region:"us-west",accessLevel:"admin"}],clouds:[{name:"aws",availableRegions:["us-west","us-east","asia"]},{name:"azure",availableRegions:["centralus","centralasion"]}],cloudCredentials:[{name:"my-aws-creds",accessKey:"y5dh1MGzHBv541YA8ONI3zGjTkLpnf46TCNbWDxi",secretKey:"iBMlj6jrl93i27NBYrwNvJYXq2UbhQ"},{name:"my-azure-creds",adAId:"y5dh1MGzHBv541YA8ONI3zGjTkLpnf46TCNbWDxi",sId:"VW29TSfKD",adAP:"mNfq7YWRwTgfW5vwfxYRp"}]};const a=o;function l(){const e=[100,500,1e3,1500,2e3];return e[Math.floor(Math.random()*e.length)]}function s(e){return new Promise(t=>{setTimeout(()=>t(e()),l())})}const c={loadControllers:"loadControllers",addController:"addController",updateController:"updateController",deleteController:"deleteController"},u={[c.loadControllers](e){return s(()=>{e.commit(n["b"].setControllers,a.controllers)})},[c.deleteController](e,t){return s(()=>{e.commit(n["b"].deleteController,t)})}};t["b"]=u},cf2e:function(e,t,r){"use strict";r.d(t,"b",(function(){return n}));const n={setCurrentController:"setCurrentController",setControllers:"setControllers",addController:"addController",updateController:"updateController",deleteController:"deleteController",setClouds:"setClouds",setCloudCredentials:"setCloudCredentials"},o={[n.setCurrentController](e,t){e.currentController=t},[n.setControllers](e,t){e.controllers=t},[n.addController](e,t){e.controllers.push(t)},[n.updateController](e,t){e.controllers=e.controllers.map(e=>e.name==t.name?t:e)},[n.deleteController](e,t){e.controllers=e.controllers.filter(e=>e.name!=t),e.currentController==t&&(e.currentController=null)},[n.setClouds](e,t){e.clouds=t},[n.setCloudCredentials](e,t){e.cloudCredentials=t}};t["a"]=o}},[[0,2,0]]]);