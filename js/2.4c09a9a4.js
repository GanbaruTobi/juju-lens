(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"059a":function(t,e,i){},"452c":function(t,e,i){},"546f":function(t,e,i){"use strict";var o=i("6426");i.n(o).a},"55ab":function(t,e,i){"use strict";var o=i("059a");i.n(o).a},"5ea5":function(t,e,i){"use strict";var o=i("452c");i.n(o).a},6426:function(t,e,i){},"6d2c":function(t,e,i){"use strict";var o=i("c4f6");i.n(o).a},"713b":function(t,e,i){"use strict";i.r(e);var o=i("60a3"),n=function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let a=class DarkModeToggle extends o.c{setDarkMode(t){this.$q.dark.set(t);try{window.appLocalStorage.setItem("darkMode",t)}catch(t){console.error(t)}}updateDarkMode(){!0===this.$q.dark.isActive?this.setDarkMode(!1):this.setDarkMode(!0)}get btnIcon(){return!0===this.$q.dark.isActive?"fas fa-sun":"fas fa-moon"}get btnLabel(){return!0===this.$q.dark.isActive?"Light Mode":"Dark Mode"}};a=n([o.a],a);var s=a,r=i("2877"),l=i("66e5"),c=i("9c40"),d=i("05c0"),u=i("4074"),m=i("0016"),p=i("714f"),g=i("eebe"),h=i.n(g),f=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:this.updateDarkMode}},[e("q-item-section",{attrs:{avatar:""}},[e("q-icon",{attrs:{name:this.btnIcon}})],1),e("q-item-section",[this._v("\n    "+this._s(this.btnLabel)+"\n  ")])],1)}),[],!1,null,null,null),w=f.exports;h()(f,"components",{QItem:l.a,QBtn:c.a,QTooltip:d.a,QItemSection:u.a,QIcon:m.a}),h()(f,"directives",{Ripple:p.a});var b=function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let v=class Badge extends o.c{};b([Object(o.b)(Boolean)],v.prototype,"left",void 0),v=b([o.a],v);var M=v,y=(i("5ea5"),Object(r.a)(M,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"badge q-px-xs",style:{left:this.left?"-0.25rem":void 0,right:this.left?void 0:"-0.25rem"}},[this._t("default")],2)}),[],!1,null,null,null).exports),x=i("f303"),z=function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};const{height:j,width:k}=x.c;let W=class FloatingWindow extends o.c{constructor(){super(...arguments),this.transitionDuration=.3,this.transitioning=!1,this.top=15,this.left=15,this.right=15,this.bottom=15,this.showPositionButtons=!1,this.positionButtonGlobalClickListener=null}get floatingWindowStyle(){const t=this.transitioning?`transition: all ${this.transitionDuration}s;`:"";return this.maximized?t+"margin: 0; transform: none; right: 0; bottom: 0; left: 0; top: 0;":t+`left: ${this.left}%; top: ${this.top}%; right: ${this.right}%; bottom: ${this.bottom}%;`}onMaximizedChange(){this.transitioning=!0,setTimeout(()=>this.transitioning=!1,1e3*this.transitionDuration)}onShowPositionButtonChange(t){t&&(this.positionButtonGlobalClickListener=this.globalClickListener.bind(this),document.addEventListener("mousedown",this.positionButtonGlobalClickListener))}globalClickListener(){this.showPositionButtons=!1,this.positionButtonGlobalClickListener&&(document.removeEventListener("mousedown",this.positionButtonGlobalClickListener),this.positionButtonGlobalClickListener=null)}get parentSize(){return[k(this.$refs.parentSizeDetector),j(this.$refs.parentSizeDetector)]}moveWindow(t){this.maximized||(this.left+=t.delta.x/this.parentSize[0]*100,this.top+=t.delta.y/this.parentSize[1]*100,this.right-=t.delta.x/this.parentSize[0]*100,this.bottom-=t.delta.y/this.parentSize[1]*100)}setWindowTilePosition([t,e]){if(this.showPositionButtons=!1,this.transitioning=!0,this.maximized&&this.$emit("restore"),0==t&&0==e)return this.left=15,this.top=15,this.right=15,void(this.bottom=15);0==t?(this.left=0,this.right=0):1==t?(this.left=50,this.right=0):-1==t&&(this.right=50,this.left=0),0==e?(this.top=0,this.bottom=0):1==e?(this.top=50,this.bottom=0):-1==e&&(this.top=0,this.bottom=50),setTimeout(()=>this.transitioning=!1,1e3*this.transitionDuration)}resizeWindowTop(t){if(!this.maximized){const e=this.top+t.delta.y/this.parentSize[1]*100;this.top=e>=0?e:0}}resizeWindowBottom(t){this.maximized||(this.bottom=this.bottom-t.delta.y/this.parentSize[1]*100)}resizeWindowRight(t){this.maximized||(this.right=this.right-t.delta.x/this.parentSize[0]*100)}resizeWindowLeft(t){if(!this.maximized){const e=this.left+t.delta.x/this.parentSize[0]*100;this.left=e>=0?e:0}}resizeWindowTopLeft(t){this.resizeWindowTop(t),this.resizeWindowLeft(t)}resizeWindowTopRight(t){this.resizeWindowRight(t),this.resizeWindowTop(t)}resizeWindowBottomLeft(t){this.resizeWindowBottom(t),this.resizeWindowLeft(t)}resizeWindowBottomRight(t){this.resizeWindowBottom(t),this.resizeWindowRight(t)}};z([Object(o.b)({type:String,default:""})],W.prototype,"title",void 0),z([Object(o.b)(Boolean)],W.prototype,"maximized",void 0),z([Object(o.b)({type:Boolean,default:!0})],W.prototype,"visible",void 0),z([Object(o.b)({type:Boolean,default:!0})],W.prototype,"showMinimize",void 0),z([Object(o.b)({type:Boolean,default:!0})],W.prototype,"showMaximize",void 0),z([Object(o.b)({type:Boolean,default:!0})],W.prototype,"showClose",void 0),z([Object(o.b)(String)],W.prototype,"icon",void 0),z([Object(o.d)("maximized")],W.prototype,"onMaximizedChange",null),z([Object(o.d)("showPositionButtons")],W.prototype,"onShowPositionButtonChange",null),W=z([o.a],W);var T=W,C=(i("6d2c"),i("f09f")),D=i("d847"),O=i("2c91"),I=i("75c3"),L=Object(r.a)(T,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"parentSizeDetector",staticStyle:{position:"absolute",top:"0",bottom:"0",right:"0",left:"0",overflow:"hidden","pointer-events":"none"}},[i("transition",{attrs:{name:"window-transition"}},[t.visible?i("div",{staticClass:"floating-window shadow-2",style:t.floatingWindowStyle},[i("q-card",{staticClass:"fit column"},[i("q-bar",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:t.moveWindow,expression:"moveWindow",modifiers:{mouse:!0,prevent:!0}}],staticClass:"col-auto floating-window--bar cursor-pointer"},[t.icon?i("q-icon",{attrs:{name:t.icon}}):t._e(),i("div",{staticClass:"text-weight-bold ellipsis"},[t._v(t._s(t.title))]),i("q-space"),i("div",{staticStyle:{position:"relative"}},[t.showMinimize?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-th"},on:{click:function(e){t.showPositionButtons=!t.showPositionButtons}}},[i("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:500}},[t._v("\n                Position\n              ")])],1):t._e(),t._l([[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,0]],(function(e,o){var n=e[0],a=e[1];return i("transition",{key:o,attrs:{name:"pos-btn-trans"}},[t.showPositionButtons?i("q-btn",{staticClass:"position-button",style:"position: absolute; left: "+3*n+"em; top: "+3*a+"em;",attrs:{round:"",dense:"",color:"secondary"},on:{click:function(e){return t.setWindowTilePosition([n,a])}}},[i("q-icon",0!=n||0!=a?{style:"transform: rotate("+45*-o+"deg)",attrs:{name:"arrow_drop_down"}}:{attrs:{name:"pages"}})],1):t._e()],1)}))],2),t.showMinimize?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-minimize"},on:{click:function(e){return t.$emit("minimize")}}},[i("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:500}},[t._v("\n              Minimize\n            ")])],1):t._e(),!t.maximized&&t.showMaximize?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-expand"},on:{click:function(e){return t.$emit("maximize")}}},[i("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:500}},[t._v("\n              Maximize\n            ")])],1):t._e(),t.maximized&&t.showMaximize?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-restore"},on:{click:function(e){return t.$emit("restore")}}},[i("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:500}},[t._v("\n              Restore\n            ")])],1):t._e(),t.showClose?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-close"},on:{click:function(e){return t.$emit("close")}}},[i("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:500}},[t._v("\n              Close\n            ")])],1):t._e()],1),i("div",{staticClass:"col relative-position"},[i("div",{staticClass:"floating-window--content"},[t._t("default")],2)]),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.up.down.prevent",value:t.resizeWindowTop,expression:"resizeWindowTop",modifiers:{mouse:!0,up:!0,down:!0,prevent:!0}}],staticStyle:{position:"absolute",left:"0",right:"0",top:"0",cursor:"ns-resize",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.up.down.prevent",value:t.resizeWindowBottom,expression:"resizeWindowBottom",modifiers:{mouse:!0,up:!0,down:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",right:"0",left:"0",cursor:"ns-resize",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.left.right.prevent",value:t.resizeWindowRight,expression:"resizeWindowRight",modifiers:{mouse:!0,left:!0,right:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",right:"0",top:"0",cursor:"ew-resize",width:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.left.right.prevent",value:t.resizeWindowLeft,expression:"resizeWindowLeft",modifiers:{mouse:!0,left:!0,right:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",right:"left",top:"0",cursor:"ew-resize",width:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:t.resizeWindowTopLeft,expression:"resizeWindowTopLeft",modifiers:{mouse:!0,prevent:!0}}],staticStyle:{position:"absolute",top:"0",left:"0",cursor:"nw-resize",width:"0.7em",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:t.resizeWindowTopRight,expression:"resizeWindowTopRight",modifiers:{mouse:!0,prevent:!0}}],staticStyle:{position:"absolute",top:"0",right:"0",cursor:"ne-resize",width:"0.7em",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:t.resizeWindowBottomLeft,expression:"resizeWindowBottomLeft",modifiers:{mouse:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",left:"0",cursor:"sw-resize",width:"0.7em",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:t.resizeWindowBottomRight,expression:"resizeWindowBottomRight",modifiers:{mouse:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",right:"0",cursor:"se-resize",width:"0.7em",height:"0.7em"}})],1)],1):t._e()])],1)}),[],!1,null,null,null),N=L.exports;h()(L,"components",{QCard:C.a,QBar:D.a,QIcon:m.a,QSpace:O.a,QBtn:c.a,QTooltip:d.a}),h()(L,"directives",{TouchPan:I.a,Ripple:p.a});var q=i("4bb5"),S=i("f319"),Q=i("6260"),_=function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};const E=Object(q.a)("app");let P=class FloatingTerminalWindow extends o.c{constructor(){super(...arguments),this.termText="ubuntu@host $ "}get floatingWindow(){return this.floatingWindows.filter(t=>t.id==this.floatingWindowId)[0]}};_([Object(o.b)(String)],P.prototype,"floatingWindowId",void 0),_([E.State],P.prototype,"floatingWindows",void 0),_([E.Mutation(S.b.toggleFloatingWindowVisible)],P.prototype,"toggleFloatingWindowVisible",void 0),_([E.Mutation(S.b.toggleFloatingWindowMaximized)],P.prototype,"toggleFloatingWindowMaximized",void 0),_([E.Mutation(S.b.focusFloatingWindow)],P.prototype,"focusFloatingWindow",void 0),_([E.Action(Q.a.removeFloatingWindow)],P.prototype,"removeFloatingWindow",void 0),P=_([Object(o.a)({components:{FloatingWindowComponent:N}})],P);var A=P,F=(i("55ab"),i("27f9")),B=Object(r.a)(A,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("floating-window-component",{staticClass:"floating-terminal-window",style:{"z-index":t.floatingWindow.zIndex},attrs:{title:t.floatingWindow.unit.name,visible:t.floatingWindow.visible,maximized:t.floatingWindow.maximized,icon:"fas fa-terminal"},on:{maximize:function(e){return t.toggleFloatingWindowMaximized(t.floatingWindowId)},restore:function(e){return t.toggleFloatingWindowMaximized(t.floatingWindowId)},minimize:function(e){return t.toggleFloatingWindowVisible(t.floatingWindowId)},close:function(e){return t.removeFloatingWindow(t.floatingWindowId)}},nativeOn:{click:function(e){return t.focusFloatingWindow(t.floatingWindowId)}}},[i("div",{staticClass:"floating-terminal-window--terminal fit q-pa-xs"},[i("q-input",{staticStyle:{width:"100% height: 100%"},attrs:{square:"",autogrow:"",type:"textarea"},model:{value:t.termText,callback:function(e){t.termText=e},expression:"termText"}})],1)])],1)}),[],!1,null,null,null),R=B.exports;h()(B,"components",{QInput:F.a});var $=i("bd4c"),Y=function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};const G=Object(q.a)("app"),H=["The app is doing something...","Oh, no! Something is not right here!","This is totally not important so don't mind me.","This is a really long log message that repeats itself multiple times.   This is a really long log message that repeats itself multiple times.   This is a really long log message that repeats itself multiple times.   This is a really long log message that repeats itself multiple times. "];let Z=class FloatingTerminalWindow extends o.c{constructor(){super(...arguments),this.logEntries=[],this.logColumns=[{name:"timestamp",label:"Timestamp",field:"timestamp",sortable:!0,align:"left",format:t=>$.a.formatDate(t,"YY-MM-DD:HH-MM-ss:SS")},{name:"message",label:"Message",field:"message",sortable:!0,align:"left"}]}get floatingWindow(){return this.floatingWindows.filter(t=>t.id==this.floatingWindowId)[0]}created(){setTimeout(function t(){this.logEntries.push({timestamp:Date.now(),message:H[Math.floor(Math.random()*H.length)]}),setTimeout(t.bind(this),1500*Math.random())}.bind(this),200)}};Y([Object(o.b)(String)],Z.prototype,"floatingWindowId",void 0),Y([G.State],Z.prototype,"floatingWindows",void 0),Y([G.Mutation(S.b.toggleFloatingWindowVisible)],Z.prototype,"toggleFloatingWindowVisible",void 0),Y([G.Mutation(S.b.toggleFloatingWindowMaximized)],Z.prototype,"toggleFloatingWindowMaximized",void 0),Y([G.Mutation(S.b.focusFloatingWindow)],Z.prototype,"focusFloatingWindow",void 0),Y([G.Action(Q.a.removeFloatingWindow)],Z.prototype,"removeFloatingWindow",void 0),Z=Y([Object(o.a)({components:{FloatingWindowComponent:N}})],Z);var V=Z,U=i("eaac"),J=Object(r.a)(V,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("floating-window-component",{staticClass:"floating-log-window",style:{"z-index":t.floatingWindow.zIndex},attrs:{title:t.floatingWindow.unit.name,visible:t.floatingWindow.visible,maximized:t.floatingWindow.maximized,icon:"fas fa-file-alt"},on:{maximize:function(e){return t.toggleFloatingWindowMaximized(t.floatingWindowId)},restore:function(e){return t.toggleFloatingWindowMaximized(t.floatingWindowId)},minimize:function(e){return t.toggleFloatingWindowVisible(t.floatingWindowId)},close:function(e){return t.removeFloatingWindow(t.floatingWindowId)}},nativeOn:{click:function(e){return t.focusFloatingWindow(t.floatingWindowId)}}},[i("q-table",{staticStyle:{"max-height":"100%"},attrs:{dense:"","virtual-scroll":"","hide-bottom":"",pagination:{rowsPerPage:0},data:t.logEntries,columns:t.logColumns,"table-style":"box-shadow: none;"}})],1)],1)}),[],!1,null,null,null),X=J.exports;h()(J,"components",{QTable:U.a});var K=function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};const tt=Object(q.a)("app");let et=class DebugWindow extends o.c{};K([tt.State],et.prototype,"debugWindow",void 0),K([tt.Mutation],et.prototype,"toggleDebugWindow",void 0),K([tt.Mutation],et.prototype,"toggleDebugWindowMaximized",void 0),et=K([Object(o.a)({components:{FloatingWindow:N}})],et);var it=et,ot=Object(r.a)(it,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("floating-window",{attrs:{title:"Debug Window",visible:this.debugWindow.visible,maximized:this.debugWindow.maximized,showClose:!1,icon:"fas fa-bug"},on:{maximize:this.toggleDebugWindowMaximized,restore:this.toggleDebugWindowMaximized,minimize:this.toggleDebugWindow}},[e("p",[this._v("Hello World")])])],1)}),[],!1,null,null,null).exports,nt=i("b2da"),at=i("fb60"),st=i("b444"),rt=function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};const lt=Object(q.a)("juju"),ct=Object(q.a)("app");let dt=class MainLayout extends o.c{constructor(){super(...arguments),this.taskbarBreakpoint=599,this.showTaskbar=!1,this.taskbarMini=!0,this.showMenuDrawer=!1,this.routerTransitionInProgress=!1,this.showTitle=!0,this.mainLinks=[{label:"Models",icon:"share",to:{name:"models"}},{label:"Controllers",icon:"gamepad",to:{name:"controllers"}}],this.taskbarExpandChangeTimeout=null}get floatingTermWindows(){return this.floatingWindows.filter(t=>t.kind==st.a[st.a.terminal])}get floatingLogWindows(){return this.floatingWindows.filter(t=>t.kind==st.a[st.a.log])}get currentController(){return this.globalCurrentController}set currentController(t){this.setCurrentController(t)}get controllerOptions(){const t=[];for(const e in this.controllers)t.push(e);return["All",...t]}expandTaskbar(){this.taskbarExpandChangeTimeout&&clearTimeout(this.taskbarExpandChangeTimeout),this.taskbarMini=!1}collapseTaskbar(){this.taskbarExpandChangeTimeout&&clearTimeout(this.taskbarExpandChangeTimeout),this.taskbarExpandChangeTimeout=setTimeout(()=>{this.taskbarMini=!0},300)}get unitNotifications(){const t=[];for(const e of this.models)for(const i of e.applications)for(const e of i.units){const o=at.a[e["workload-status"].current];o>at.a.active&&t.push({app:i,unit:e,isError:o>=at.a.blocked})}return t.sort((t,e)=>at.a[e.unit["workload-status"].current]-at.a[t.unit["workload-status"].current])}get unitErrorCount(){return this.unitNotifications.filter(t=>t.isError).length}get unitWarningCount(){return this.unitNotifications.filter(t=>!t.isError).length}windowWidth(){return window.innerWidth}showFeedbackDialog(){this.$q.dialog({title:"Leave Feedback",html:!0,message:'We\'re so glad you want to leave feedback! Right now the best way to do that is to           reply to the public <a target="_blank" href="https://discourse.juju.is/t/juju-lens-a-new-juju-gui-you-dont-have-to-deploy/3309?u=zicklag">           forum topic</a> so that everyone can see and collaborate on it!'})}};rt([ct.State],dt.prototype,"floatingWindows",void 0),rt([ct.Mutation(S.b.removeFloatingWindow)],dt.prototype,"removeFloatingWindow",void 0),rt([ct.Mutation(S.b.toggleFloatingWindowVisible)],dt.prototype,"toggleFloatingWindowVisible",void 0),rt([lt.State("currentController")],dt.prototype,"globalCurrentController",void 0),rt([lt.State],dt.prototype,"controllers",void 0),rt([lt.Action(nt.a.setCurrentController)],dt.prototype,"setCurrentController",void 0),rt([lt.Action(nt.a.logout)],dt.prototype,"logout",void 0),rt([lt.Getter("currentControllerModelsFilled")],dt.prototype,"models",void 0),dt=rt([Object(o.a)({components:{DarkModeToggle:w,FloatingWindowComponent:N,FloatingTerminalWindow:R,FloatingLogWindow:X,DebugWindow:ot,Badge:y}})],dt);var ut=dt,mt=(i("546f"),i("4d5a")),pt=i("e359"),gt=i("65c6"),ht=i("cb32"),ft=i("6ac5"),wt=i("3980"),bt=i("429b"),vt=i("7867"),Mt=i("ddd8"),yt=i("4e73"),xt=i("1c1c"),zt=i("0170"),jt=i("58a81"),kt=i("9404"),Wt=i("4983"),Tt=i("eb85"),Ct=i("09e3"),Dt=i("9989"),Ot=i("8572"),It=i("7f67"),Lt=Object(r.a)(ut,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{staticClass:"main-layout",class:{"router-transitioning":t.routerTransitionInProgress},attrs:{view:"hHh lpr lFf"}},[o("q-header",{staticClass:"bg-primary text-white main-layout--header",attrs:{elevated:""}},[o("q-toolbar",[o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"xs on-left",attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.showTaskbar=!t.showTaskbar}}}),o("router-link",{staticClass:"wrapper-link",attrs:{to:{name:"home"}}},[o("q-avatar",[o("img",{attrs:{src:i("9b19")}})])],1),o("q-toolbar-title",{style:t.showTitle?"":"padding: 0;"},[o("router-link",{staticClass:"wrapper-link",attrs:{to:{name:"home"}}},[t.showTitle?o("span",[t._v("Juju Lens")]):t._e()]),o("q-resize-observer",{on:{resize:function(e){var i=e.width;return t.showTitle=i>86}}})],1),o("q-tabs",{staticClass:"gt-mobile-menu",attrs:{"inline-label":"",shrink:""}},t._l(t.mainLinks,(function(t,e){return o("q-route-tab",{key:e,staticStyle:{"font-size":"0.3em"},attrs:{icon:t.icon,label:t.label,to:t.to}})})),1),o("q-select",{staticClass:"q-mx-sm controller-select",staticStyle:{flex:"0.1 1 12em"},attrs:{filled:"",dark:"",options:t.controllerOptions,"option-label":"name",label:"Controller","popup-content-class":"controller-select-popup"},model:{value:t.currentController,callback:function(e){t.currentController=e},expression:"currentController"}}),o("div",{staticClass:"on-right",staticStyle:{position:"relative"}},[o("q-btn",{class:{"ringing-bell":!!t.unitErrorCount},staticStyle:{padding:"0.2rem"},attrs:{flat:"",dense:"",icon:"fas fa-bell"}},[o("q-menu",[o("q-list",{staticClass:"alert-menu"},t._l(t.unitNotifications,(function(e){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.unit.lensId,attrs:{clickable:"",to:{name:"models",query:{unitId:e.unit.lensId}}}},[o("q-item-section",[o("q-item-label",[o("div",{staticClass:"row items-center"},[o("div",{attrs:{clas:"col on-left"}},[o("span",{staticClass:"on-left"},[t._v("\n                          "+t._s(e.unit.name)+"\n                        ")])]),o("div",{staticClass:"col row reverse"},[o("q-badge",{staticClass:"col-auto",class:{"text-black":!e.isError},attrs:{color:e.isError?"negative":"warning"}},[t._v("\n                          "+t._s(e.unit["workload-status"].current)+"\n                        ")])],1)])]),e.unit["workload-status"].message?o("q-item-label",{attrs:{caption:""}},[t._v("\n                    "+t._s(e.unit["workload-status"].message)+"\n                  ")]):t._e()],1)],1)})),1)],1)],1),t.unitErrorCount>0?o("badge",{staticClass:"bg-negative text-white",attrs:{left:""}},[t._v("\n          "+t._s(t.unitErrorCount)+"\n        ")]):t._e(),t.unitWarningCount>0?o("badge",{staticClass:"bg-warning text-black"},[t._v("\n          "+t._s(t.unitWarningCount)+"\n        ")]):t._e()],1),o("q-btn",{staticClass:"lt-mobile-menu on-right",attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.showMenuDrawer=!t.showMenuDrawer}}})],1)],1),o("q-drawer",{attrs:{mini:t.taskbarMini,"mini-to-overlay":"",bordered:"","show-if-above":"",breakpoint:t.taskbarBreakpoint,width:200,"content-class":"taskbar"},on:{mouseover:t.expandTaskbar,mouseout:t.collapseTaskbar},model:{value:t.showTaskbar,callback:function(e){t.showTaskbar=e},expression:"showTaskbar"}},[o("div",{staticClass:"column fit no-wrap"},[o("q-scroll-area",{staticClass:"col",attrs:{"thumb-style":{width:"3px"}}},[o("q-list",t._l(t.floatingWindows,(function(e){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,attrs:{clickable:""},on:{click:function(i){t.toggleFloatingWindowVisible(e.id),e.visible&&t.focus}}},[o("q-menu",{attrs:{"context-menu":"",anchor:"center right",self:"center left","content-style":"z-index: 10000","transition-show":"jump-right","transition-hide":"jump-left"}},[o("q-list",{attrs:{dense:""}},[o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(i){return t.removeFloatingWindow(e.id)}}},[o("q-item-section",{attrs:{side:""}},[o("q-icon",{attrs:{color:"negative",name:"fas fa-window-close"}})],1),o("q-item-section",[t._v("Close")])],1)],1)],1),o("q-item-section",{staticStyle:{"min-width":"2em"},attrs:{avatar:""}},[o("q-icon",{attrs:{name:"log"==e.kind?"fas fa-file-alt":"fas fa-terminal"}})],1),o("q-item-section",[t._v("\n              "+t._s(e.app.name)+" / "+t._s(e.unit.index)+"\n            ")])],1)})),1)],1),o("q-separator",{staticStyle:{height:"1px"}}),o("q-list",[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:{name:"welcome"}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"info"}})],1),o("q-item-section",[t._v("\n            Welcome Page\n          ")])],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:t.showFeedbackDialog}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"fas fa-bullhorn"}})],1),o("q-item-section",[t._v("\n            Leave Feedback\n          ")])],1),o("dark-mode-toggle"),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:t.logout}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"logout"}})],1),o("q-item-section",[t._v("\n            Logout\n          ")])],1)],1)],1)]),o("q-drawer",{attrs:{side:"right",width:200,"content-class":"menu-drawer"},model:{value:t.showMenuDrawer,callback:function(e){t.showMenuDrawer=e},expression:"showMenuDrawer"}},[o("q-scroll-area",{staticClass:"fit"},[o("q-list",{staticClass:"menu-list",attrs:{padding:""}},[o("q-item",[o("q-item-section",{staticClass:"text-weight-bold"},[t._v("\n            Menu\n          ")])],1),t._l(t.mainLinks,(function(e,i){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:i,attrs:{clickable:"",to:e.to}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:e.icon}})],1),o("q-item-section",[t._v("\n            "+t._s(e.label)+"\n          ")])],1)}))],2)],1)],1),o("q-page-container",[o("q-page",[o("transition",{attrs:{name:"router-slide-down",mode:"out-in"},on:{"before-leave":function(e){t.routerTransitionInProgress=!0},"after-enter":function(e){t.routerTransitionInProgress=!1}}},[o("router-view")],1),t._l(t.floatingTermWindows,(function(t){return o("floating-terminal-window",{key:t.id,attrs:{floatingWindowId:t.id}})})),t._l(t.floatingLogWindows,(function(t){return o("floating-log-window",{key:t.id,attrs:{floatingWindowId:t.id}})}))],2)],1)],1)}),[],!1,null,null,null);e.default=Lt.exports;h()(Lt,"components",{QLayout:mt.a,QHeader:pt.a,QToolbar:gt.a,QBtn:c.a,QAvatar:ht.a,QToolbarTitle:ft.a,QResizeObserver:wt.a,QTabs:bt.a,QRouteTab:vt.a,QSelect:Mt.a,QMenu:yt.a,QList:xt.a,QItem:l.a,QItemSection:u.a,QItemLabel:zt.a,QBadge:jt.a,QDrawer:kt.a,QScrollArea:Wt.a,QIcon:m.a,QSeparator:Tt.a,QPageContainer:Ct.a,QPage:Dt.a,QField:Ot.a}),h()(Lt,"directives",{Ripple:p.a,ClosePopup:It.a})},"9b19":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE5OC40MjQiIHZpZXdCb3g9IjAgMCAxOTguNDI0IDE5OC40MjQiIHdpZHRoPSIxOTguNDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9Ijk5LjIxMTk5OCIgY3k9Ijk5LjIxMTk5OCIgZmlsbD0iI2U5NTQyMCIgcj0iOTkuMjExOTk4Ii8+PGcgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDEuNjY5OTk4IDE2Ljk2NTk5NikiPjxjaXJjbGUgY3g9IjYzLjIxMjAwMiIgY3k9Ijc2LjU3NTk5NiIgcj0iNi4xNDIiLz48cGF0aCBkPSJtNjguODgxIDY1LjIzN2gtMTEuMzM4di00NS4zNTRjMC0xMC45NCA4LjkwMi0xOS44NDIgMTkuODQyLTE5Ljg0MiAxMC45NDEgMCAxOS44NDIgOC45MDIgMTkuODQyIDE5Ljg0MnYxMS4zMzlsLTExLjMzOC0uMDAxdi0xMS4zMzhjMC0yLjI3Mi0uODg1LTQuNDA4LTIuNDkxLTYuMDE0LTEuNjA2LTEuNjA0LTMuNzQxLTIuNDkxLTYuMDEzLTIuNDkxLTQuNjg5IDAtOC41MDQgMy44MTYtOC41MDQgOC41MDV6Ii8+PHBhdGggZD0ibTEwNS43MyA4NS4wNzljLTEwLjk0IDAtMTkuODQyLTguOS0xOS44NDItMTkuODQydi0yOC4zNDVoMTEuMzM4djI4LjM0NWMwIDQuNjkgMy44MTQgOC41MDUgOC41MDQgOC41MDVzOC41LTMuODE0IDguNS04LjUwNXYtMjguMzQ1aDExLjM0djI4LjM0NWMwIDUuMy0yLjA2IDEwLjI4My01LjgxIDE0LjAzMS0zLjc0IDMuNzQ5LTguNzMgNS44MTEtMTQuMDMgNS44MTF6Ii8+PGNpcmNsZSBjeD0iNi41MTkiIGN5PSIxNDQuNjAwMDEiIHI9IjYuMTQyIi8+PHBhdGggZD0ibTEyLjE4OCAxMzMuMjdoLTExLjMzOHYtNjIuMzYyYzAtMTAuOTQxIDguOTAxLTE5Ljg0MiAxOS44NDMtMTkuODQyIDEwLjk0MSAwIDE5Ljg0MiA4LjkwMSAxOS44NDIgMTkuODQydjExLjMzOWgtMTEuMzM5di0xMS4zMzljMC0yLjI3Mi0uODg0LTQuNDA4LTIuNDkxLTYuMDE0LTEuNjA2LTEuNjA0LTMuNzQyLTIuNDkxLTYuMDEzLTIuNDkxLTQuNjg5IDAtOC41MDQgMy44MTYtOC41MDQgOC41MDV6Ii8+PHBhdGggZD0ibTQ5LjAzOSAxMzYuMWMtMTAuOTQxIDAtMTkuODQzLTguOS0xOS44NDMtMTkuODR2LTI4LjM0NmgxMS4zMzl2MjguMzQ2YzAgNC42OSAzLjgxNSA4LjUgOC41MDQgOC41czguNTA0LTMuODEgOC41MDQtOC41di0yOC4zNDZoMTEuMzM4djI4LjM0NmMwIDUuMy0yLjA2NCAxMC4yOC01LjgxMiAxNC4wM3MtOC43MzEgNS44MS0xNC4wMyA1LjgxeiIvPjwvZz48L2c+PC9zdmc+"},c4f6:function(t,e,i){}}]);