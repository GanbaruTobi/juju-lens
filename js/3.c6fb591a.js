(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"3cff":function(t,e,i){},"546f":function(t,e,i){"use strict";var o=i("ed30"),n=i.n(o);n.a},"5ea5":function(t,e,i){"use strict";var o=i("61e0"),n=i.n(o);n.a},"61e0":function(t,e,i){},"6d2c":function(t,e,i){"use strict";var o=i("9fca"),n=i.n(o);n.a},"713b":function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-layout",{staticClass:"main-layout",class:{"router-transitioning":t.routerTransitionInProgress},attrs:{view:"hHh lpr lFf"}},[o("q-header",{staticClass:"bg-primary text-white main-layout--header",attrs:{elevated:""}},[o("q-toolbar",[o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"xs on-left",attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.showTaskbar=!t.showTaskbar}}}),o("router-link",{staticClass:"wrapper-link",attrs:{to:{name:"home"}}},[o("q-avatar",[o("img",{attrs:{src:i("9b19")}})])],1),o("q-toolbar-title",{style:t.showTitle?"":"padding: 0;"},[o("router-link",{staticClass:"wrapper-link",attrs:{to:{name:"home"}}},[t.showTitle?o("span",[t._v("Juju Lens")]):t._e()]),o("q-resize-observer",{on:{resize:function(e){var i=e.width;return t.showTitle=i>86}}})],1),o("q-tabs",{staticClass:"gt-mobile-menu",attrs:{"inline-label":"",shrink:""}},t._l(t.mainLinks,(function(t,e){return o("q-route-tab",{key:e,staticStyle:{"font-size":"0.3em"},attrs:{icon:t.icon,label:t.label,to:t.to}})})),1),o("q-select",{staticClass:"q-mx-sm controller-select",staticStyle:{flex:"0.1 1 12em"},attrs:{filled:"",dark:"",options:t.controllerOptions,"option-label":"name",label:"Controller","popup-content-class":"controller-select-popup"},model:{value:t.currentController,callback:function(e){t.currentController=e},expression:"currentController"}}),o("div",{staticClass:"on-right",staticStyle:{position:"relative"}},[o("q-btn",{class:{"ringing-bell":!!t.unitErrorCount},staticStyle:{padding:"0.2rem"},attrs:{flat:"",dense:"",icon:"fas fa-bell"}},[o("q-menu",[o("q-list",{staticClass:"alert-menu"},t._l(t.unitNotifications,(function(e){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.unit.id,attrs:{clickable:"",to:{name:"models",query:{unitId:e.unit.id}}}},[o("q-item-section",[o("q-item-label",[o("div",{staticClass:"row items-center"},[o("div",{attrs:{clas:"col on-left"}},[o("span",{staticClass:"on-left"},[t._v("\n                          "+t._s(e.app.name)+"/"+t._s(e.unit.index)+"\n                        ")])]),o("div",{staticClass:"col row reverse"},[o("q-badge",{staticClass:"col-auto",class:{"text-black":!e.isError},attrs:{color:e.isError?"negative":"warning"}},[t._v("\n                          "+t._s(e.unit.status.severity)+"\n                        ")])],1)])]),e.unit.status.message?o("q-item-label",{attrs:{caption:""}},[t._v("\n                    "+t._s(e.unit.status.message)+"\n                  ")]):t._e()],1)],1)})),1)],1)],1),o("badge",{staticClass:"bg-negative text-white",attrs:{left:""}},[t._v(t._s(t.unitErrorCount))]),o("badge",{staticClass:"bg-warning text-black"},[t._v(t._s(t.unitWarningCount))])],1),o("q-btn",{staticClass:"lt-mobile-menu on-right",attrs:{flat:"",round:"",dense:"",icon:"menu"},on:{click:function(e){t.showMenuDrawer=!t.showMenuDrawer}}})],1)],1),o("q-drawer",{attrs:{mini:t.taskbarMini,"mini-to-overlay":"",bordered:"","show-if-above":"",breakpoint:t.taskbarBreakpoint,width:200,"content-class":"taskbar"},on:{mouseover:function(e){t.taskbarMini=!1},mouseout:function(e){t.taskbarMini=!0}},model:{value:t.showTaskbar,callback:function(e){t.showTaskbar=e},expression:"showTaskbar"}},[o("div",{staticClass:"column fit"},[o("q-scroll-area",{staticClass:"col",attrs:{"thumb-style":{width:"3px"}}},[o("q-list",[t._l([{type:"term",unitName:"my-app/1"},{type:"log",unitName:"my-app/2"},{type:"log",unitName:"my-db/1"},{type:"log",unitName:"my-longer-app-name-app/2"}],(function(e,i){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:i,attrs:{clickable:""}},[o("q-menu",{attrs:{"context-menu":"",anchor:"center right",self:"center left","content-style":"z-index: 10000","transition-show":"jump-right","transition-hide":"jump-left"}},[o("q-list",{attrs:{dense:""}},[o("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""}},[o("q-item-section",{attrs:{side:""}},[o("q-icon",{attrs:{name:"fas fa-window-close"}})],1),o("q-item-section",[t._v("Close")])],1)],1)],1),o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"log"==e.type?"fas fa-file-alt":"fas fa-terminal"}})],1),o("q-item-section",{staticClass:"ellipsis",attrs:{avatar:""}},[t._v("\n              "+t._s(e.unitName)+"\n            ")])],1)})),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){t.$store.commit("app/toggleDebugWindow"),t.windowWidth()<=t.taskbarBreakpoint&&(t.showTaskbar=!1)}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"fas fa-bug"}})],1),o("q-item-section",[t._v("\n              Debug Window\n            ")])],1)],2)],1),o("q-separator",{staticStyle:{height:"1px"}}),o("q-list",[o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:{name:"welcome"}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"info"}})],1),o("q-item-section",[t._v("\n            Welcome Page\n          ")])],1),o("dark-mode-toggle"),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",to:{name:"my-account"}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"person"}})],1),o("q-item-section",[t._v("\n            My Account\n          ")])],1),o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:function(e){t.showTerminal=!t.showTerminal,t.windowWidth()<=t.taskbarBreakpoint&&(t.showTaskbar=!1)}}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:"fas fa-terminal"}})],1),o("q-item-section",[t._v("\n            Juju Terminal\n          ")])],1)],1)],1)]),o("q-drawer",{attrs:{side:"right",width:200,"content-class":"menu-drawer"},model:{value:t.showMenuDrawer,callback:function(e){t.showMenuDrawer=e},expression:"showMenuDrawer"}},[o("q-scroll-area",{staticClass:"fit"},[o("q-list",{staticClass:"menu-list",attrs:{padding:""}},[o("q-item",[o("q-item-section",{staticClass:"text-weight-bold"},[t._v("\n            Menu\n          ")])],1),t._l(t.mainLinks,(function(e,i){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:i,attrs:{clickable:"",to:e.to}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{attrs:{name:e.icon}})],1),o("q-item-section",[t._v("\n            "+t._s(e.label)+"\n          ")])],1)}))],2)],1)],1),o("q-page-container",[o("q-page",[o("transition",{attrs:{name:"router-slide-down",mode:"out-in"},on:{"before-leave":function(e){t.routerTransitionInProgress=!0},"after-enter":function(e){t.routerTransitionInProgress=!1}}},[o("router-view")],1),o("debug-window")],1)],1),o("q-footer",[o("embedded-terminal",{attrs:{visible:t.showTerminal,maximized:t.terminalMaximized},on:{minimize:function(e){t.showTerminal=!1},maximize:function(e){t.terminalMaximized=!0},restore:function(e){t.terminalMaximized=!1}}})],1)],1)},n=[],a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:""},on:{click:t.updateDarkMode}},[i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:t.btnIcon}})],1),i("q-item-section",[t._v("\n    "+t._s(t.btnLabel)+"\n  ")])],1)},s=[],r=i("60a3"),l=function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let c=class extends r["d"]{setDarkMode(t){this.$q.dark.set(t);try{this.$q.localStorage.set("darkMode",t)}catch(e){console.error(e)}}updateDarkMode(){const t=this.$q.dark.mode;"auto"===t?this.setDarkMode(!0):!1===t?this.setDarkMode("auto"):this.setDarkMode(!1)}get btnIcon(){const t=this.$q.dark.mode;return"auto"===t?"brightness_4":!1===t?"fas fa-sun":"fas fa-moon"}get btnLabel(){const t=this.$q.dark.mode;return"auto"===t?"Auto Dark Mode":!1===t?"Light Mode":"Dark Mode"}};c=l([r["a"]],c);var u=c,d=u,m=i("2877"),p=i("eebe"),h=i.n(p),f=i("66e5"),g=i("9c40"),w=i("05c0"),v=i("4074"),b=i("0016"),M=i("714f"),z=Object(m["a"])(d,a,s,!1,null,null,null),y=z.exports;h()(z,"components",{QItem:f["a"],QBtn:g["a"],QTooltip:w["a"],QItemSection:v["a"],QIcon:b["a"]}),h()(z,"directives",{Ripple:M["a"]});var j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"badge q-px-xs",style:{left:t.left?"-0.25rem":void 0,right:t.left?void 0:"-0.25rem"}},[t._t("default")],2)},x=[],T=function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let k=class extends r["d"]{};T([Object(r["c"])(Boolean)],k.prototype,"left",void 0),k=T([r["a"]],k);var C=k,D=C,N=(i("5ea5"),Object(m["a"])(D,j,x,!1,null,null,null)),O=N.exports,q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"parentSizeDetector",staticStyle:{position:"absolute",top:"0",bottom:"0",right:"0",left:"0",overflow:"hidden","pointer-events":"none"}},[i("transition",{attrs:{name:"window-transition"}},[t.visible?i("div",{staticClass:"floating-window shadow-2",style:t.floatingWindowStyle},[i("q-card",{staticClass:"fit"},[i("q-bar",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:t.moveWindow,expression:"moveWindow",modifiers:{mouse:!0,prevent:!0}}],staticClass:"floating-window--bar cursor-pointer"},[t.icon?i("q-icon",{attrs:{name:t.icon}}):t._e(),i("div",{staticClass:"text-weight-bold ellipsis"},[t._v(t._s(t.title))]),i("q-space"),i("div",{staticStyle:{position:"relative"}},[t.showMinimize?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-th"},on:{click:function(e){t.showPositionButtons=!t.showPositionButtons}}},[i("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:500}},[t._v("\n                Position\n              ")])],1):t._e(),t._l([[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,0]],(function(e,o){var n=e[0],a=e[1];return i("transition",{key:o,attrs:{name:"pos-btn-trans"}},[t.showPositionButtons?i("q-btn",{staticClass:"position-button",style:"position: absolute; left: "+3*n+"em; top: "+3*a+"em;",attrs:{round:"",dense:"",color:"secondary"},on:{click:function(e){return t.setWindowTilePosition([n,a])}}},[i("q-icon",0!=n||0!=a?{style:"transform: rotate("+45*-o+"deg)",attrs:{name:"arrow_drop_down"}}:{attrs:{name:"pages"}})],1):t._e()],1)}))],2),t.showMinimize?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-minimize"},on:{click:function(e){return t.$emit("minimize")}}},[i("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:500}},[t._v("\n              Minimize\n            ")])],1):t._e(),!t.maximized&&t.showMaximize?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-expand"},on:{click:function(e){return t.$emit("maximize")}}},[i("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:500}},[t._v("\n              Maximize\n            ")])],1):t._e(),t.maximized&&t.showMaximize?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-restore"},on:{click:function(e){return t.$emit("restore")}}},[i("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:500}},[t._v("\n              Restore\n            ")])],1):t._e(),t.showClose?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-close"},on:{click:function(e){return t.$emit("close")}}},[i("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:500}},[t._v("\n              Close\n            ")])],1):t._e()],1),i("div",{staticClass:"floating-window--content"},[t._t("default")],2),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.up.down.prevent",value:t.resizeWindowTop,expression:"resizeWindowTop",modifiers:{mouse:!0,up:!0,down:!0,prevent:!0}}],staticStyle:{position:"absolute",left:"0",right:"0",top:"0",cursor:"ns-resize",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.up.down.prevent",value:t.resizeWindowBottom,expression:"resizeWindowBottom",modifiers:{mouse:!0,up:!0,down:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",right:"0",left:"0",cursor:"ns-resize",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.left.right.prevent",value:t.resizeWindowRight,expression:"resizeWindowRight",modifiers:{mouse:!0,left:!0,right:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",right:"0",top:"0",cursor:"ew-resize",width:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.left.right.prevent",value:t.resizeWindowLeft,expression:"resizeWindowLeft",modifiers:{mouse:!0,left:!0,right:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",right:"left",top:"0",cursor:"ew-resize",width:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:t.resizeWindowTopLeft,expression:"resizeWindowTopLeft",modifiers:{mouse:!0,prevent:!0}}],staticStyle:{position:"absolute",top:"0",left:"0",cursor:"nw-resize",width:"0.7em",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:t.resizeWindowTopRight,expression:"resizeWindowTopRight",modifiers:{mouse:!0,prevent:!0}}],staticStyle:{position:"absolute",top:"0",right:"0",cursor:"ne-resize",width:"0.7em",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:t.resizeWindowBottomLeft,expression:"resizeWindowBottomLeft",modifiers:{mouse:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",left:"0",cursor:"sw-resize",width:"0.7em",height:"0.7em"}}),i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.prevent",value:t.resizeWindowBottomRight,expression:"resizeWindowBottomRight",modifiers:{mouse:!0,prevent:!0}}],staticStyle:{position:"absolute",bottom:"0",right:"0",cursor:"se-resize",width:"0.7em",height:"0.7em"}})],1)],1):t._e()])],1)},L=[],I=i("fe09"),S=function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};const{height:Q,width:_}=I["d"];let W=class extends r["d"]{constructor(){super(...arguments),this.transitionDuration=.3,this.transitioning=!1,this.top=15,this.left=15,this.right=15,this.bottom=15,this.showPositionButtons=!1,this.positionButtonGlobalClickListener=null}get floatingWindowStyle(){const t=this.transitioning?`transition: all ${this.transitionDuration}s;`:"";return this.maximized?t+"margin: 0; transform: none; right: 0; bottom: 0; left: 0; top: 0;":t+`left: ${this.left}%; top: ${this.top}%; right: ${this.right}%; bottom: ${this.bottom}%;`}onMaximizedChange(){this.transitioning=!0,setTimeout(()=>this.transitioning=!1,1e3*this.transitionDuration)}onShowPositionButtonChange(t){t&&(this.positionButtonGlobalClickListener=this.globalClickListener.bind(this),document.addEventListener("mousedown",this.positionButtonGlobalClickListener))}globalClickListener(){this.showPositionButtons=!1,this.positionButtonGlobalClickListener&&(document.removeEventListener("mousedown",this.positionButtonGlobalClickListener),this.positionButtonGlobalClickListener=null)}get parentSize(){return[_(this.$refs.parentSizeDetector),Q(this.$refs.parentSizeDetector)]}moveWindow(t){this.maximized||(this.left+=t.delta.x/this.parentSize[0]*100,this.top+=t.delta.y/this.parentSize[1]*100,this.right-=t.delta.x/this.parentSize[0]*100,this.bottom-=t.delta.y/this.parentSize[1]*100)}setWindowTilePosition([t,e]){if(this.showPositionButtons=!1,this.transitioning=!0,this.maximized&&this.$emit("restore"),0==t&&0==e)return this.left=15,this.top=15,this.right=15,void(this.bottom=15);0==t?(this.left=0,this.right=0):1==t?(this.left=50,this.right=0):-1==t&&(this.right=50,this.left=0),0==e?(this.top=0,this.bottom=0):1==e?(this.top=50,this.bottom=0):-1==e&&(this.top=0,this.bottom=50),setTimeout(()=>this.transitioning=!1,1e3*this.transitionDuration)}resizeWindowTop(t){if(!this.maximized){const e=this.top+t.delta.y/this.parentSize[1]*100;this.top=e>=0?e:0}}resizeWindowBottom(t){this.maximized||(this.bottom=this.bottom-t.delta.y/this.parentSize[1]*100)}resizeWindowRight(t){this.maximized||(this.right=this.right-t.delta.x/this.parentSize[0]*100)}resizeWindowLeft(t){if(!this.maximized){const e=this.left+t.delta.x/this.parentSize[0]*100;this.left=e>=0?e:0}}resizeWindowTopLeft(t){this.resizeWindowTop(t),this.resizeWindowLeft(t)}resizeWindowTopRight(t){this.resizeWindowRight(t),this.resizeWindowTop(t)}resizeWindowBottomLeft(t){this.resizeWindowBottom(t),this.resizeWindowLeft(t)}resizeWindowBottomRight(t){this.resizeWindowBottom(t),this.resizeWindowRight(t)}};S([Object(r["c"])({type:String,default:""})],W.prototype,"title",void 0),S([Object(r["c"])(Boolean)],W.prototype,"maximized",void 0),S([Object(r["c"])({type:Boolean,default:!0})],W.prototype,"visible",void 0),S([Object(r["c"])({type:Boolean,default:!0})],W.prototype,"showMinimize",void 0),S([Object(r["c"])({type:Boolean,default:!0})],W.prototype,"showMaximize",void 0),S([Object(r["c"])({type:Boolean,default:!0})],W.prototype,"showClose",void 0),S([Object(r["c"])(String)],W.prototype,"icon",void 0),S([Object(r["e"])("maximized")],W.prototype,"onMaximizedChange",null),S([Object(r["e"])("showPositionButtons")],W.prototype,"onShowPositionButtonChange",null),W=S([r["a"]],W);var E=W,B=E,A=(i("6d2c"),i("f09f")),P=i("d847"),R=i("2c91"),$=i("75c3"),H=Object(m["a"])(B,q,L,!1,null,null,null),Y=H.exports;h()(H,"components",{QCard:A["a"],QBar:P["a"],QIcon:b["a"],QSpace:R["a"],QBtn:g["a"],QTooltip:w["a"]}),h()(H,"directives",{TouchPan:$["a"],Ripple:M["a"]});var G=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"embedded-terminal",style:{height:(t.visible?t.maximized?t.maxHeight:t.height:0)+"px",transition:t.transitioning?"all "+t.transitionDuration+"s ease":""}},[i("div",{directives:[{name:"touch-pan",rawName:"v-touch-pan.mouse.up.down.prevent",value:t.resizeTop,expression:"resizeTop",modifiers:{mouse:!0,up:!0,down:!0,prevent:!0}}],staticStyle:{position:"absolute",left:"0",right:"0",top:"0",cursor:"ns-resize",height:"0.7em"}}),i("q-bar",{staticClass:"embedded-terminal--bar bg-primary",attrs:{dense:""}},[i("q-icon",{attrs:{name:"fas fa-terminal"}}),i("div",{staticClass:"text-weight-bold ellipsis"},[t._v("Terminal")]),i("q-space"),t.maximized?t._e():i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-expand"},on:{click:function(e){return t.$emit("maximize")}}},[i("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:300}},[t._v("\n        Maximize\n      ")])],1),t.maximized?i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-restore"},on:{click:function(e){return t.$emit("restore")}}},[i("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:300}},[t._v("\n        Maximize\n      ")])],1):t._e(),i("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-minimize"},on:{click:function(e){return t.$emit("minimize")}}},[i("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:300}},[t._v("\n        Hide\n      ")])],1)],1),i("div",{staticClass:"embedded-terminal--body fit q-pa-xs"},[i("q-input",{staticStyle:{width:"100% height: 100%"},attrs:{square:"",autogrow:"",type:"textarea"},model:{value:t.termText,callback:function(e){t.termText=e},expression:"termText"}})],1)],1)},Z=[],U=function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};let J=class extends r["d"]{constructor(){super(...arguments),this.height=200,this.transitionDuration=.3,this.transitioning=!1,this.termText="jujuuser@jujucontroller $ "}get maxHeight(){return window.innerHeight-this.layout.header.offset}resizeTop(t){this.maximized&&(this.$emit("restore"),this.height=this.maxHeight);const e=this.height-t.delta.y;e<30?(this.height=0,this.$emit("minimize")):this.height=e}onHeightChange(){this.height>this.maxHeight&&(this.height=this.maxHeight)}onVisibleChange(){this.transitioning=!0,this.height<50&&(this.height=200),setTimeout(()=>this.transitioning=!1,1e3*this.transitionDuration)}};U([Object(r["c"])(Boolean)],J.prototype,"visible",void 0),U([Object(r["c"])(Boolean)],J.prototype,"maximized",void 0),U([Object(r["b"])("layout")],J.prototype,"layout",void 0),U([Object(r["e"])("height")],J.prototype,"onHeightChange",null),U([Object(r["e"])("visible"),Object(r["e"])("maximized")],J.prototype,"onVisibleChange",null),J=U([r["a"]],J);var F=J,V=F,X=(i("ed72"),i("27f9")),K=i("8572"),tt=Object(m["a"])(V,G,Z,!1,null,null,null),et=tt.exports;h()(tt,"components",{QBar:P["a"],QIcon:b["a"],QSpace:R["a"],QBtn:g["a"],QTooltip:w["a"],QInput:X["a"],QField:K["a"]}),h()(tt,"directives",{TouchPan:$["a"],Ripple:M["a"]});var it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("floating-window",{attrs:{title:"Debug Window",visible:t.debugWindow.visible,maximized:t.debugWindow.maximized,showClose:!1,icon:"fas fa-bug"},on:{maximize:t.toggleDebugWindowMaximized,restore:t.toggleDebugWindowMaximized,minimize:t.toggleDebugWindow}},[i("p",[t._v("Hello World")])])],1)},ot=[],nt=i("4bb5"),at=function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};const st=Object(nt["a"])("app");let rt=class extends r["d"]{};at([st.State],rt.prototype,"debugWindow",void 0),at([st.Mutation],rt.prototype,"toggleDebugWindow",void 0),at([st.Mutation],rt.prototype,"toggleDebugWindowMaximized",void 0),rt=at([Object(r["a"])({components:{FloatingWindow:Y}})],rt);var lt=rt,ct=lt,ut=Object(m["a"])(ct,it,ot,!1,null,null,null),dt=ut.exports,mt=i("b2da"),pt=i("fb60"),ht=function(t,e,i,o){var n,a=arguments.length,s=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var r=t.length-1;r>=0;r--)(n=t[r])&&(s=(a<3?n(s):a>3?n(e,i,s):n(e,i))||s);return a>3&&s&&Object.defineProperty(e,i,s),s};const ft=Object(nt["a"])("juju");let gt=class extends r["d"]{constructor(){super(...arguments),this.taskbarBreakpoint=599,this.showTaskbar=!1,this.taskbarMini=!0,this.showMenuDrawer=!1,this.routerTransitionInProgress=!1,this.showTerminal=!1,this.terminalMaximized=!1,this.showTitle=!0,this.mainLinks=[{label:"Models",icon:"share",to:{name:"models"}},{label:"Controllers",icon:"gamepad",to:{name:"controllers"}},{label:"Admin",icon:"person",to:{name:"admin"}}]}get currentController(){return this.globalCurrentController}set currentController(t){this.setCurrentController(t)}get controllerOptions(){return this.controllers}created(){this.loadAllState()}get unitNotifications(){const t=[];for(const e of this.units){const i=pt["a"][e.status.severity];if(i>pt["a"].active){const o=this.applications.filter(t=>t.id==e.applicationId)[0];t.push({app:o,unit:e,isError:i>=pt["a"].blocked})}}return t.sort((t,e)=>pt["a"][e.unit.status.severity]-pt["a"][t.unit.status.severity])}get unitErrorCount(){return this.unitNotifications.filter(t=>t.isError).length}get unitWarningCount(){return this.unitNotifications.filter(t=>!t.isError).length}windowWidth(){return window.innerWidth}};ht([ft.State("currentController")],gt.prototype,"globalCurrentController",void 0),ht([ft.State],gt.prototype,"controllers",void 0),ht([ft.Action(mt["a"].setCurrentController)],gt.prototype,"setCurrentController",void 0),ht([ft.State],gt.prototype,"units",void 0),ht([ft.State],gt.prototype,"applications",void 0),ht([ft.Action(mt["a"].loadAllState)],gt.prototype,"loadAllState",void 0),gt=ht([Object(r["a"])({components:{DarkModeToggle:y,FloatingWindow:Y,DebugWindow:dt,EmbeddedTerminal:et,Badge:O}})],gt);var wt=gt,vt=wt,bt=(i("546f"),i("4d5a")),Mt=i("e359"),zt=i("65c6"),yt=i("cb32"),jt=i("6ac5"),xt=i("3980"),Tt=i("429b"),kt=i("7867"),Ct=i("ddd8"),Dt=i("4e73"),Nt=i("1c1c"),Ot=i("0170"),qt=i("58a8"),Lt=i("9404"),It=i("4983"),St=i("eb85"),Qt=i("09e3"),_t=i("9989"),Wt=i("7ff0"),Et=i("7f67"),Bt=Object(m["a"])(vt,o,n,!1,null,null,null);e["default"]=Bt.exports;h()(Bt,"components",{QLayout:bt["a"],QHeader:Mt["a"],QToolbar:zt["a"],QBtn:g["a"],QAvatar:yt["a"],QToolbarTitle:jt["a"],QResizeObserver:xt["a"],QTabs:Tt["a"],QRouteTab:kt["a"],QSelect:Ct["a"],QMenu:Dt["a"],QList:Nt["a"],QItem:f["a"],QItemSection:v["a"],QItemLabel:Ot["a"],QBadge:qt["a"],QDrawer:Lt["a"],QScrollArea:It["a"],QIcon:b["a"],QSeparator:St["a"],QPageContainer:Qt["a"],QPage:_t["a"],QFooter:Wt["a"],QField:K["a"]}),h()(Bt,"directives",{Ripple:M["a"],ClosePopup:Et["a"]})},"9b19":function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjE5OC40MjQiIHZpZXdCb3g9IjAgMCAxOTguNDI0IDE5OC40MjQiIHdpZHRoPSIxOTguNDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGZpbGw9Im5vbmUiPjxjaXJjbGUgY3g9Ijk5LjIxMTk5OCIgY3k9Ijk5LjIxMTk5OCIgZmlsbD0iI2U5NTQyMCIgcj0iOTkuMjExOTk4Ii8+PGcgZmlsbD0iI2ZmZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNDEuNjY5OTk4IDE2Ljk2NTk5NikiPjxjaXJjbGUgY3g9IjYzLjIxMjAwMiIgY3k9Ijc2LjU3NTk5NiIgcj0iNi4xNDIiLz48cGF0aCBkPSJtNjguODgxIDY1LjIzN2gtMTEuMzM4di00NS4zNTRjMC0xMC45NCA4LjkwMi0xOS44NDIgMTkuODQyLTE5Ljg0MiAxMC45NDEgMCAxOS44NDIgOC45MDIgMTkuODQyIDE5Ljg0MnYxMS4zMzlsLTExLjMzOC0uMDAxdi0xMS4zMzhjMC0yLjI3Mi0uODg1LTQuNDA4LTIuNDkxLTYuMDE0LTEuNjA2LTEuNjA0LTMuNzQxLTIuNDkxLTYuMDEzLTIuNDkxLTQuNjg5IDAtOC41MDQgMy44MTYtOC41MDQgOC41MDV6Ii8+PHBhdGggZD0ibTEwNS43MyA4NS4wNzljLTEwLjk0IDAtMTkuODQyLTguOS0xOS44NDItMTkuODQydi0yOC4zNDVoMTEuMzM4djI4LjM0NWMwIDQuNjkgMy44MTQgOC41MDUgOC41MDQgOC41MDVzOC41LTMuODE0IDguNS04LjUwNXYtMjguMzQ1aDExLjM0djI4LjM0NWMwIDUuMy0yLjA2IDEwLjI4My01LjgxIDE0LjAzMS0zLjc0IDMuNzQ5LTguNzMgNS44MTEtMTQuMDMgNS44MTF6Ii8+PGNpcmNsZSBjeD0iNi41MTkiIGN5PSIxNDQuNjAwMDEiIHI9IjYuMTQyIi8+PHBhdGggZD0ibTEyLjE4OCAxMzMuMjdoLTExLjMzOHYtNjIuMzYyYzAtMTAuOTQxIDguOTAxLTE5Ljg0MiAxOS44NDMtMTkuODQyIDEwLjk0MSAwIDE5Ljg0MiA4LjkwMSAxOS44NDIgMTkuODQydjExLjMzOWgtMTEuMzM5di0xMS4zMzljMC0yLjI3Mi0uODg0LTQuNDA4LTIuNDkxLTYuMDE0LTEuNjA2LTEuNjA0LTMuNzQyLTIuNDkxLTYuMDEzLTIuNDkxLTQuNjg5IDAtOC41MDQgMy44MTYtOC41MDQgOC41MDV6Ii8+PHBhdGggZD0ibTQ5LjAzOSAxMzYuMWMtMTAuOTQxIDAtMTkuODQzLTguOS0xOS44NDMtMTkuODR2LTI4LjM0NmgxMS4zMzl2MjguMzQ2YzAgNC42OSAzLjgxNSA4LjUgOC41MDQgOC41czguNTA0LTMuODEgOC41MDQtOC41di0yOC4zNDZoMTEuMzM4djI4LjM0NmMwIDUuMy0yLjA2NCAxMC4yOC01LjgxMiAxNC4wM3MtOC43MzEgNS44MS0xNC4wMyA1LjgxeiIvPjwvZz48L2c+PC9zdmc+"},"9fca":function(t,e,i){},ed30:function(t,e,i){},ed72:function(t,e,i){"use strict";var o=i("3cff"),n=i.n(o);n.a}}]);