(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(e,t,o){e.exports=o("2f39")},"2f39":function(e,t,o){"use strict";o.r(t);var n=o("967e"),r=o.n(n),a=(o("a481"),o("96cf"),o("fa84")),l=o.n(a),i=(o("573e"),o("7d6e"),o("e54f"),o("62f2"),o("7e6d"),o("2b0e")),c=o("1f91"),s=o("42d2"),u=o("b05d"),d=o("436b"),m=o("18d6"),f=o("2a19");i.a.use(u.a,{config:{dark:"auto",notify:{position:"top-right"}},lang:c.a,iconSet:s.a,plugins:{Dialog:d.a,LocalStorage:m.a,Notify:f.a}});var p=o("60a3"),b=o("b2da"),g=o("4bb5"),h=function(e,t,o,n){var r,a=arguments.length,l=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,o,n);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(l=(a<3?r(l):a>3?r(t,o,l):r(t,o))||l);return a>3&&l&&Object.defineProperty(t,o,l),l},w=function(e,t,o,n){return new(o||(o=Promise))((function(r,a){function l(e){try{c(n.next(e))}catch(e){a(e)}}function i(e){try{c(n.throw(e))}catch(e){a(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(l,i)}c((n=n.apply(e,t||[])).next())}))};const v=Object(g.a)("juju");let C=class App extends p.d{created(){return w(this,void 0,void 0,(function*(){const e=this.$q.localStorage.getItem("darkMode");null==e||"boolean"!=typeof e&&"auto"!=e||this.$q.dark.set(e),yield this.loadControllers()}))}};h([v.Action(b.b.loadControllers)],C.prototype,"loadControllers",void 0),C=h([p.a],C);var W=C,x=o("2877"),y=Object(x.a)(W,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)}),[],!1,null,null,null).exports,j=o("4bde"),k=o("2f62"),F=o("b444"),O=o("6260");var S={},I=o("f319");var z={namespaced:!0,actions:O.b,getters:S,mutations:I.a,state:F.b},P=o("fb60"),q=o("aaf8");function V(e,t){const o={};for(const n in t){const r=t[n];for(const t in r[e]){const n=r[e][t];o[t]=n}}return o}function D(e){return"All"!=e.currentController?e.controllers[e.currentController]:{models:V("models",e.controllers),units:V("units",e.controllers),applications:V("applications",e.controllers),charms:V("charms",e.controllers),machines:V("machines",e.controllers)}}var A={["currentControllerData"]:e=>D(e),["currentControllerModelsFilled"](e){const t=D(e),o=[];for(const e in t.models)o.push(Object(q.a)(t,e));return o}},$=o("cf2e");var H={namespaced:!0,actions:b.c,getters:A,mutations:$.a,state:P.b},M=Object(j.store)((function({Vue:e}){e.use(k.a);return new k.a.Store({modules:{app:z,juju:H},strict:!1})})),T=o("afbc"),L=function(){return J.apply(this,arguments)};function J(){return(J=l()(r.a.mark((function e(){var t,o,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof M){e.next=6;break}return e.next=3,M({Vue:i.a});case 3:e.t0=e.sent,e.next=7;break;case 6:e.t0=M;case 7:if(t=e.t0,"function"!=typeof T.b){e.next=14;break}return e.next=11,Object(T.b)({Vue:i.a,store:t});case 11:e.t1=e.sent,e.next=15;break;case 14:e.t1=T.b;case 15:return o=e.t1,t.$router=o,(n={router:o,store:t,render:function(e){return e(y)}}).el="#q-app",e.abrupt("return",{app:n,store:t,router:o});case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=o("bc3a"),E=o.n(R),U=Object(j.boot)(({Vue:e})=>{e.prototype.$axios=E.a});function _(){return(_=l()(r.a.mark((function e(){var t,o,n,a,l,c,s,u,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:t=e.sent,o=t.app,n=t.store,a=t.router,l=!0,c=function(e){l=!1,window.location.href=e},s=window.location.href.replace(window.location.origin,""),u=[U],d=0;case 11:if(!(!0===l&&d<u.length)){e.next=29;break}if("function"==typeof u[d]){e.next=14;break}return e.abrupt("continue",26);case 14:return e.prev=14,e.next=17,u[d]({app:o,router:a,store:n,Vue:i.a,ssrContext:null,redirect:c,urlPath:s});case 17:e.next=26;break;case 19:if(e.prev=19,e.t0=e.catch(14),!e.t0||!e.t0.url){e.next=24;break}return window.location.href=e.t0.url,e.abrupt("return");case 24:return console.error("[Quasar] boot error:",e.t0),e.abrupt("return");case 26:d++,e.next=11;break;case 29:if(!1!==l){e.next=31;break}return e.abrupt("return");case 31:new i.a(o);case 32:case"end":return e.stop()}}),e,null,[[14,19]])})))).apply(this,arguments)}!function(){_.apply(this,arguments)}()},6260:function(e,t,o){"use strict";o.d(t,"a",(function(){return i}));var n=o("2b0e"),r=o("b444"),a=o("f319"),l=o("1732");const i={addFloatingWindow:"addFloatingWindow",removeFloatingWindow:"removeFloatingWindow"},c={[i.addFloatingWindow](e,{unit:t,app:o,kind:i}){const c=Object(l.a)(),s={id:c,unit:t,app:o,visible:!1,maximized:!1,zIndex:0,kind:r.a[i]};return e.commit(a.b.addFloatingWindow,s),n.a.nextTick(()=>{e.commit(a.b.toggleFloatingWindowVisible,s.id)}),c},[i.removeFloatingWindow](e,t){e.commit(a.b.hideFloatingWindow,t),n.a.nextTick(()=>{setTimeout(()=>{e.commit(a.b.removeFloatingWindow,t)},400)})}};t.b=c},"7e6d":function(e,t,o){},aaf8:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"a",(function(){return p}));var n=o("fb60");function r(e,t,o){return e+"/"+t+"/"+o}const a={icon:"fas fa-check-circle",color:"var(--q-color-positive)"},l={icon:"fas fa-exclamation-triangle",color:"var(--q-color-warning)"},i={icon:"fas fa-exclamation-circle",color:"var(--q-color-negative)"},c={icon:"fas fa-circle",color:"var(--q-color-positive)"},s={icon:"fas fa-circle",color:"var(--q-color-warning)"},u={icon:"fas fa-circle",color:"var(--q-color-negative)"};function d(e,t){const o=n.a[e];return o>=n.a.blocked?t?u:i:o>=n.a.maintenance?t?s:l:t?c:a}function m(e){return Object.assign({statusIcon:d(e["workload-status"].current,!0)},e)}function f(e,t){const o=e.applications[t];let r=[];for(const t in e.units){const a=e.units[t];a.name.startsWith(o.name)&&a["model-uuid"]==o["model-uuid"]&&r.push(m(a)),r=r.sort((e,t)=>n.a[t["workload-status"].current]-n.a[e["workload-status"].current])}const a=r.map(e=>e["workload-status"].current)[0];return Object.assign({charmIconUrl:(l=o["charm-url"],l.replace("cs:","https://api.jujucharms.com/charmstore/v5/")+"/icon.svg"),units:r,statusIcon:d(a),statusSeverity:a||"active"},o);var l}function p(e,t){const o=e.models[t];let r=[];for(const t in e.applications){e.applications[t]["model-uuid"]==o["model-uuid"]&&r.push(f(e,t)),r=r.sort((e,t)=>n.a[t.statusSeverity]-n.a[e.statusSeverity])}const a=r.map(e=>e.statusSeverity)[0];return Object.assign({statusSeverity:a||"active",statusIcon:d(a),applications:r},o)}},afbc:function(e,t,o){"use strict";o.d(t,"a",(function(){return c}));var n=o("4bde"),r=o("8c4f");const a=[{name:"clear-data",path:"/clear-data",component:()=>o.e(9).then(o.bind(null,"a13b"))},{path:"/",component:()=>Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"713b")),children:[{path:"",name:"home",redirect:"/models"},{path:"/controllers",component:()=>Promise.all([o.e(0),o.e(6)]).then(o.bind(null,"a7d4")),children:[{path:"",name:"controllers"},{path:"cloud-credentials",name:"cloud-credentials"}]},{path:"/models",component:()=>Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"56c6")),children:[{path:"",name:"models"},{path:"machines",name:"machines"}]},{path:"/my-account",name:"my-account",component:()=>Promise.all([o.e(0),o.e(7)]).then(o.bind(null,"8c2d"))},{path:"/admin",name:"admin",component:()=>Promise.all([o.e(0),o.e(8)]).then(o.bind(null,"34ab"))},{path:"/welcome",name:"welcome",component:()=>Promise.all([o.e(0),o.e(5)]).then(o.bind(null,"35a8"))}]}];a.push({path:"*",component:()=>Promise.all([o.e(0),o.e(10)]).then(o.bind(null,"e51e"))});var l=a,i=o("18d6");const c="seen-juju-lens-before";t.b=Object(n.route)((function({Vue:e}){e.use(r.a);const t=new r.a({scrollBehavior:()=>({x:0,y:0}),routes:l,mode:"hash",base:""});return t.beforeEach((e,t,o)=>{if(i.a.getItem(c)||"welcome"==e.name)o();else{o({name:"welcome",query:Object.assign({welcomePageTo:e.fullPath},e.query)});try{i.a.set(c,"true")}catch(e){console.error(e)}}}),t}))},b2da:function(e,t,o){"use strict";o.d(t,"b",(function(){return f})),o.d(t,"a",(function(){return p}));var n=o("436b"),r=o("2a19"),a=o("cf2e"),l=o("18d6"),i=o("3b3d"),c=o.n(i),s=o("9927"),u=o.n(s),d=o("24f0"),m=o.n(d);const f={loadControllers:"loadControllers",setCurrentController:"setCurrentController",updateController:"updateController",deleteController:"deleteController",establishControllerConn:"establishControllerConn",logout:"logout"},p="jujuState";function b(e){const t={};for(const o in e.controllers)t[o]={applications:{},charms:{},machines:{},models:{},units:{},username:e.controllers[o].username,password:e.controllers[o].password,host:e.controllers[o].host,port:e.controllers[o].port};const o={currentController:e.currentController,controllers:t};l.a.set(p,o)}const g={[f.setCurrentController](e,t){e.commit(a.b.setCurrentController,t),b(e.state)},[f.loadControllers](e){const t=l.a.getItem(p);if(t){e.commit(a.b.setCurrentController,t.currentController);for(const o in t.controllers)e.dispatch(f.updateController,{name:o,controller:t.controllers[o]})}},[f.updateController](e,{name:t,controller:o}){const n=e.state.controllers[t];n&&n.controllerWatchHandle&&n.controllerWatchHandle.stop(e=>{e&&console.error(e)}),e.commit(a.b.updateController,{name:t,controller:o}),b(e.state),o.conn||o.controllerWatchHandle||e.dispatch(f.establishControllerConn,t)},[f.establishControllerConn](e,t){const o=e.state.controllers[t];if(!o)return;const n={debug:!1,facades:[u.a,m.a],wsclass:WebSocket};c.a.connectAndLogin(`wss://${o.host}:${o.port}/api`,{user:"admin"==o.username?"user-admin":o.username,password:o.password},n,(n,r)=>{if(n)return console.error(n),void setTimeout(()=>{e.dispatch(f.establishControllerConn,t)},1e3);const l=r.conn.facades.controller,i=l.watch((o,n)=>{if(o)console.log(o);else for(const o of n.deltas)e.commit(a.b.updateControllerData,{name:t,data:o})});o.conn=l,o.controllerWatchHandle=i,e.commit(a.b.updateController,{name:t,controller:o})})},[f.deleteController](e,t){const o=e.state.controllers[t];console.log,o&&o.conn&&o.controllerWatchHandle&&o.controllerWatchHandle.stop(e=>{e&&console.error(e)}),e.commit(a.b.deleteController,t),b(e.state)},[f.logout](e){n.a.create({title:"Logout",message:"Are you sure you want to logout of all controllers? You will have to add them manually again to re-connect.",cancel:!0,ok:{color:"negative",label:"Logout"}}).onOk(()=>{e.commit(a.b.clearState),b(e.state),r.a.create({type:"positive",message:"Succesfully logged you out",icon:"logout",position:"bottom-right",timeout:2e3})})}};t.c=g},b444:function(e,t,o){"use strict";var n;o.d(t,"a",(function(){return n})),function(e){e[e.log=0]="log",e[e.terminal=1]="terminal"}(n||(n={}));t.b={debugWindow:{visible:!1,maximized:!1},floatingWindows:[]}},cf2e:function(e,t,o){"use strict";o.d(t,"b",(function(){return a}));var n=o("2b0e"),r=o("aaf8");const a={setCurrentController:"setCurrentController",setControllers:"setControllers",updateController:"updateController",deleteController:"deleteController",updateControllerData:"updateControllerData",clearState:"clearState"},l={[a.setCurrentController](e,t){e.currentController=t},[a.setControllers](e,t){e.controllers=t},[a.updateController](e,{name:t,controller:o}){n.a.set(e.controllers,t,o)},[a.deleteController](e,t){n.a.delete(e.controllers,t),e.currentController==t&&(e.currentController="All")},[a.updateControllerData](e,{name:t,data:[o,a,l]}){if("model"==o){const o=l,i=Object(r.b)(t,o["model-uuid"],o.name);"change"==a?n.a.set(e.controllers[t].models,i,Object.assign({lensId:i},o)):"remove"==a&&n.a.delete(e.controllers[t].models,i)}else if("application"==o){const o=l,i=Object(r.b)(t,o["model-uuid"],o.name);"change"==a?n.a.set(e.controllers[t].applications,i,Object.assign({lensId:i},o)):"remove"==a&&n.a.delete(e.controllers[t].applications,i)}else if("unit"==o){const o=l,i=Object(r.b)(t,o["model-uuid"],o.name);"change"==a?n.a.set(e.controllers[t].units,i,Object.assign({lensId:i},o)):"remove"==a&&n.a.delete(e.controllers[t].units,i)}else if("machine"==o){const o=l,i=Object(r.b)(t,o["model-uuid"],o.id);"change"==a?n.a.set(e.controllers[t].machines,i,Object.assign({lensId:i},o)):"remove"==a&&n.a.delete(e.controllers[t].machines,i)}else if("charm"==o){const o=l,i=Object(r.b)(t,o["model-uuid"],o["charm-url"]);"change"==a?n.a.set(e.controllers[t].charms,i,Object.assign({lensId:i},o)):"remove"==a&&n.a.delete(e.controllers[t].charms,i)}else console.warn("Unidentified resource type from Juju controller changefeed: "+o)},[a.clearState](e){e.controllers={},e.currentController="All"}};t.a=l},f319:function(e,t,o){"use strict";o.d(t,"b",(function(){return n}));const n={addFloatingWindow:"addFloatingWindow",toggleFloatingWindowMaximized:"toggleFloatingWindowMaximized",toggleFloatingWindowVisible:"toggleFloatingWindowVisible",hideFloatingWindow:"hideFloatingWindow",focusFloatingWindow:"focusFloatingWindow",removeFloatingWindow:"removeFloatingWindow"};function r(e,t){e.floatingWindows.map(e=>{e.id==t?e.zIndex=1:e.zIndex=0})}const a={toggleDebugWindow(e){e.debugWindow.visible=!e.debugWindow.visible},toggleDebugWindowMaximized(e){e.debugWindow.maximized=!e.debugWindow.maximized},[n.addFloatingWindow](e,t){e.floatingWindows.push(t)},[n.toggleFloatingWindowMaximized](e,t){e.floatingWindows.map(e=>{e.id==t&&(e.maximized=!e.maximized)})},[n.toggleFloatingWindowVisible](e,t){let o=!1;e.floatingWindows.map(e=>{e.id==t&&(e.visible=!e.visible,o=e.visible)}),o&&r(e,t)},[n.hideFloatingWindow](e,t){e.floatingWindows.map(e=>{e.id==t&&(e.visible=!1)})},[n.focusFloatingWindow](e,t){r(e,t)},[n.removeFloatingWindow](e,t){e.floatingWindows=e.floatingWindows.filter(e=>e.id!=t)}};t.a=a},fb60:function(e,t,o){"use strict";var n;o.d(t,"a",(function(){return n})),function(e){e[e.active=0]="active",e[e.started=1]="started",e[e.maintenance=2]="maintenance",e[e.unknown=3]="unknown",e[e.waiting=4]="waiting",e[e.blocked=5]="blocked",e[e.error=6]="error",e[e.terminated=7]="terminated"}(n||(n={}));t.b={currentController:"All",controllers:{}}}},[[0,2,0]]]);