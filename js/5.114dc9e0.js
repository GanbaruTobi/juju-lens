(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"29db":function(t,e,o){},"56c6":function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"models absolute fit flex items-stretch"},[o("div",{staticClass:"fit column"},[o("q-toolbar",{staticClass:"col-auto row q-mb-sm"},[o("q-tabs",{staticClass:"model-machine-tabs q-pa-xs",attrs:{"inline-label":"",shrink:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-route-tab",{attrs:{label:"Models",icon:"share",name:"models",to:{name:"models"}}}),o("q-route-tab",{attrs:{label:"Machines",icon:"fas fa-server",name:"machines",to:{name:"machines"}}})],1),o("q-space"),o("div",{staticStyle:{flex:"0.1 0.5 10em"},attrs:{id:"sort-models-select"}},[o("q-select",{staticClass:"on-left",attrs:{label:"Sort By",options:t.sortModelsByOptions,color:t.$q.dark.isActive?"secondary":"primary",filled:""},model:{value:t.sortModelsBy,callback:function(e){t.sortModelsBy=e},expression:"sortModelsBy"}})],1),o("q-btn",{attrs:{color:"positive",icon:"fas fa-plus"},on:{click:function(e){return t.startCreate()}}})],1),o("q-scroll-area",{ref:"modelScrollArea",staticClass:"col-grow",attrs:{"thumb-style":{width:"5px"}}},[o("div",{staticClass:"q-pa-sm"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-grow text-h5 q-mb-md xs"},[t._v("\n            Models\n          ")]),o("div",{staticStyle:{flex:"0.1 0.5 10em",position:"relative",top:"-0.5em"},attrs:{id:"sort-models-select-mobile"}},[o("q-select",{staticClass:"on-left",attrs:{dense:"",label:"Sort By",options:t.sortModelsByOptions,color:t.$q.dark.isActive?"secondary":"primary",filled:""},model:{value:t.sortModelsBy,callback:function(e){t.sortModelsBy=e},expression:"sortModelsBy"}})],1)]),o("transition-group",{attrs:{name:"model-group-trans",tag:"div"}},t._l(t.models,(function(e){return o("div",{key:e.id,staticClass:"q-mb-md full-width"},[o("q-toolbar",{directives:[{name:"ripple",rawName:"v-ripple"}],staticClass:"bg-primary text-white full-width",on:{click:function(o){return t.$set(t.modelsExpanded,e.id,!t.modelsExpanded[e.id])}}},[o("q-icon",{style:{color:e.statusIcon.color},attrs:{name:e.statusIcon.icon,size:"1.7em"}}),o("q-toolbar-title",{staticStyle:{flex:"1 1 0%"}},[o("span",[t._v("\n                  "+t._s(e.name)+"\n                  "),o("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle"}},[t._v("\n                    "+t._s(e.name)+"\n                  ")])],1)]),o("div",{staticClass:"avatar-stack"},t._l(e.applications,(function(e){return o("q-avatar",{key:e.id,attrs:{size:"2em"}},[o("q-img",{attrs:{src:e.charm.imageUrl}}),o("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle","content-style":"font-size: 0.8em;"}},[t._v("\n                    "+t._s(e.name)+"\n                  ")])],1)})),1),o("q-btn",{staticStyle:{transition:"transform 0.2s"},style:{transform:t.modelsExpanded[e.id]?"rotateZ(180deg)":"none"},attrs:{round:"",dense:"",flat:"",icon:"arrow_downward"}}),o("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"more_vert"},on:{click:function(t){t.stopPropagation()}}})],1),o("q-slide-transition",[t.modelsExpanded[e.id]?o("div",[o("q-tab-panels",{staticStyle:{"background-color":"hsla(0, 0%, 0%, 0)"},attrs:{animated:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[o("q-tab-panel",{staticClass:"q-pa-none",attrs:{id:"model-"+e.id,name:"models"}},[o("q-list",{attrs:{bordered:"",separator:""}},t._l(e.applications,(function(e){return o("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:e.id,staticClass:"row",attrs:{clickable:"",id:"application-"+e.id}},[o("q-item-section",{attrs:{avatar:""}},[o("q-icon",{style:{color:e.statusIcon.color},attrs:{name:e.statusIcon.icon,size:"1.7em"}})],1),o("q-item-section",{attrs:{avatar:""}},[o("q-img",{attrs:{src:e.charm.imageUrl}})],1),o("q-item-section",[o("div",[t._v("\n                            "+t._s(e.name)+"\n                          ")]),o("div",{staticClass:"row reverse"},t._l(e.units,(function(e){return o("div",{key:e.id},[o("q-icon",{staticClass:"q-ma-xs",style:{color:e.statusIcon.color},attrs:{name:e.statusIcon.icon,size:"1.em"}}),o("q-tooltip",{attrs:{anchor:"top middle",self:"bottom middle","content-style":"font-size: 0.8rem;"}},[t._v("\n                                "+t._s(e.status.message||"status: "+e.status.severity)+"\n                              ")])],1)})),0)]),o("q-item-section",{attrs:{side:""}},[o("q-btn",{attrs:{round:"",dense:"",flat:"",icon:"more_vert"},on:{click:function(t){t.stopPropagation()}}})],1)],1)})),1)],1),o("q-tab-panel",{attrs:{name:"machines"}},[o("div",{staticClass:"text-h5"},[t._v("Machine List Comming Soon!")])])],1)],1):t._e()])],1)})),0)],1)]),"models"==t.tab?o("div",{staticClass:"bg-dark text-white",staticStyle:{height:"2em"}},[o("q-bar",{attrs:{dense:""}},[o("img",{staticStyle:{height:"1em"},attrs:{src:"/statics/charmIcons/spark.svg",ratio:1}}),o("div",{staticClass:"text-weight-bold ellipsis"},[t._v("my-app")]),o("q-space"),o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{dense:"",flat:"",icon:"fas fa-window-minimize"},on:{click:function(e){return t.$emit("minimize")}}},[o("q-tooltip",{attrs:{"transition-show":"jump-up","transition-hide":"jump-down",anchor:"top middle",self:"bottom middle",delay:300}},[t._v("\n            Hide\n          ")])],1)],1)],1):t._e()],1),o("juju-loading",{attrs:{loading:t.loading}})],1)},s=[],i=o("b7b1"),n=o("fb60");const r={icon:"fas fa-check-circle",color:"var(--q-color-positive)"},l={icon:"fas fa-exclamation-triangle",color:"var(--q-color-warning)"},c={icon:"fas fa-exclamation-circle",color:"var(--q-color-negative)"},d={icon:"fas fa-circle",color:"var(--q-color-positive)"},m={icon:"fas fa-circle",color:"var(--q-color-warning)"},p={icon:"fas fa-circle",color:"var(--q-color-negative)"};function u(t,e){const o=n["a"][t];return o>=n["a"].blocked?e?p:c:o>=n["a"].maintenance?e?m:l:e?d:r}var f=o("b2da"),h=o("60a3"),v=o("4bb5"),b=o("0831"),y=o("f303"),g=o("18d6"),q=function(t,e,o,a){var s,i=arguments.length,n=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(n=(i<3?s(n):i>3?s(e,o,n):s(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n},w=function(t,e,o,a){function s(t){return t instanceof o?t:new o((function(e){e(t)}))}return new(o||(o=Promise))((function(o,i){function n(t){try{l(a.next(t))}catch(e){i(e)}}function r(t){try{l(a["throw"](t))}catch(e){i(e)}}function l(t){t.done?o(t.value):s(t.value).then(n,r)}l((a=a.apply(t,e||[])).next())}))};const S=Object(v["a"])("juju"),{offset:x}=y["c"],{setScrollPosition:C}=b["a"],_="sortModelsBy";let j=class extends h["d"]{constructor(){super(...arguments),this.sortModelsByOptions=["Status","Name"],this.sortModelsBy="Status",this.loading=!1,this.tab="models",this.activeApplication=null,this.modelsExpanded={}}onSortModelsByChange(t){g["a"].set(_,t)}scrollToElement(t){const e=this.$refs.modelScrollArea,o=e.getScrollTarget(),a=e.getScrollPosition(),s=x(t).top,i=a+s-122,n=100;C(o,i,n)}get models(){const t=[];for(const e of this.rawModels){const o=this.applications.filter(t=>t.modelId==e.id).map(t=>{const e=this.units.filter(e=>e.applicationId==t.id).map(t=>Object.assign({statusIcon:u(t.status.severity,!0)},t)),o=e.map(t=>t.status.severity).sort((t,e)=>n["a"][e]-n["a"][t])[0];return Object.assign({charm:this.charmStore.filter(e=>e.id==t.charmId)[0],units:e,statusIcon:u(o),statusSeverity:o},t)}),a=o.map(t=>t.statusSeverity).sort((t,e)=>n["a"][e]-n["a"][t])[0];t.push(Object.assign({applications:o,statusIcon:u(a),statusSeverity:a},e))}return t.sort((t,e)=>"Status"==this.sortModelsBy?n["a"][e.statusSeverity]-n["a"][t.statusSeverity]:t.name>e.name?1:-1)}created(){return w(this,void 0,void 0,(function*(){const t=g["a"].getItem(_);!t||"Status"!=t&&"Name"!=t||(this.sortModelsBy=t),yield this.fetchData(),this.scrollToApp()}))}fetchData(){return w(this,void 0,void 0,(function*(){this.loading=!0,yield this.loadAllState(),this.loading=!1}))}scrollToApp(){const t=this.$route.query.unitId;if(!t)return;const e=this.units.filter(e=>e.id==t)[0],o=this.applications.filter(t=>t.id==e.applicationId)[0];this.$set(this.modelsExpanded,o.modelId,!0),setTimeout(function t(){const e=document.getElementById("application-"+o.id);e?this.scrollToElement(e):setTimeout(t,100)}.bind(this),200)}};q([S.State],j.prototype,"currentController",void 0),q([S.State("models")],j.prototype,"rawModels",void 0),q([S.State("store")],j.prototype,"charmStore",void 0),q([S.State],j.prototype,"applications",void 0),q([S.State],j.prototype,"units",void 0),q([S.Action(f["a"].loadAllState)],j.prototype,"loadAllState",void 0),q([Object(h["e"])("sortModelsBy")],j.prototype,"onSortModelsByChange",null),q([Object(h["e"])("$route")],j.prototype,"scrollToApp",null),j=q([Object(h["a"])({components:{JujuLoading:i["a"]}})],j);var k=j,T=k,I=(o("ca6e"),o("2877")),Q=o("65c6"),B=o("429b"),M=o("7867"),O=o("2c91"),L=o("ddd8"),A=o("9c40"),E=o("4983"),P=o("0016"),$=o("6ac5"),R=o("05c0"),z=o("cb32"),H=o("068f"),N=o("e9c1"),D=o("adad"),J=o("823b"),U=o("1c1c"),Z=o("66e5"),F=o("4074"),G=o("d847"),K=o("7460"),V=o("714f"),W=o("eebe"),X=o.n(W),Y=Object(I["a"])(T,a,s,!1,null,null,null);e["default"]=Y.exports;X()(Y,"components",{QToolbar:Q["a"],QTabs:B["a"],QRouteTab:M["a"],QSpace:O["a"],QSelect:L["a"],QBtn:A["a"],QScrollArea:E["a"],QIcon:P["a"],QToolbarTitle:$["a"],QTooltip:R["a"],QAvatar:z["a"],QImg:H["a"],QSlideTransition:N["a"],QTabPanels:D["a"],QTabPanel:J["a"],QList:U["a"],QItem:Z["a"],QItemSection:F["a"],QBar:G["a"],QTab:K["a"]}),X()(Y,"directives",{Ripple:V["a"]})},b7b1:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-inner-loading",{attrs:{showing:t.showLoading}},[o("q-spinner-rings",{attrs:{size:"80%",color:t.$q.dark.isActive?"secondary":"primary"}})],1)},s=[],i=o("74f7"),n=o("792f"),r=o("60a3"),l=function(t,e,o,a){var s,i=arguments.length,n=i<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,o):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)n=Reflect.decorate(t,e,o,a);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(n=(i<3?s(n):i>3?s(e,o,n):s(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n};let c=class extends r["d"]{constructor(){super(...arguments),this.showLoading=!1,this.showLoadingTimeoutHandle=null}created(){this.onLoadingChange(this.loading)}onLoadingChange(t){t||(this.showLoading=!1),!t&&this.showLoadingTimeoutHandle?clearTimeout(this.showLoadingTimeoutHandle):t&&!this.showLoadingTimeoutHandle&&(this.showLoadingTimeoutHandle=setTimeout(()=>this.showLoading=!0,this.delay))}};l([Object(r["c"])(Boolean)],c.prototype,"loading",void 0),l([Object(r["c"])({type:Number,default:300})],c.prototype,"delay",void 0),l([Object(r["e"])("loading")],c.prototype,"onLoadingChange",null),c=l([Object(r["a"])({components:{QInnerLoading:i["a"],QSpinnerRings:n["a"]}})],c);var d=c,m=d,p=o("2877"),u=o("eebe"),f=o.n(u),h=Object(p["a"])(m,a,s,!1,null,null,null);e["a"]=h.exports;f()(h,"components",{QInnerLoading:i["a"],QSpinnerRings:n["a"]})},ca6e:function(t,e,o){"use strict";var a=o("29db"),s=o.n(a);s.a}}]);