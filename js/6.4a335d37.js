(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"0db9":function(e,t,a){"use strict";var o=a("abf3"),s=a.n(o);s.a},"35a8":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-scroll-area",{staticClass:"absolute fit",attrs:{"thumb-style":{width:"5px"}}},[a("div",{staticClass:"row justify-center"},[a("q-card",{staticClass:"column items-center col q-mx-md q-my-lg q-pa-lg shadow-10",staticStyle:{"max-width":"60em"}},[a("div",{staticClass:"text-center text-h3 q-mb-md"},[e._v("Juju Lens GUI Prototype")]),a("a",{staticClass:"logo-banner",attrs:{href:"https://katharostech.com"}},[a("q-img",{attrs:{src:"/statics/katharostech-banner.svg"}})],1),a("p",{staticClass:"q-ma-md text-body1"},[e._v("\n        Welcome to Juju Lens, a GUI prototype developed by\n        "),a("a",{attrs:{href:"https://katharostech.com"}},[e._v("Katharos Technology")]),e._v(". This\n        prototype has been developed as a concept of what we think the Juju\n        GUI should be like. We are hoping that this can serve as a reference\n        of what works well and what does not as well a test-bed for\n        experimentation and feedback for the Juju GUI.\n      ")]),a("p",{staticClass:"q-ma-md text-body1"},[e._v("\n        This GUI is not connected to any real Juju controllers or models. All\n        ineraction is mocked in the browser window without actually making any\n        real requests. Request delay times and unit statuses and logs have\n        been simulated to give a more real feel. Any changes you make will be\n        persisted in the browser window, but can be cleared with the clear\n        button below.\n      ")]),a("p",{staticClass:"q-ma-md text-body1"},[e._v("\n        You can get back to this screen at any time by clicking the info icon\n        in the bottom left menu.\n      ")]),a("div",{staticClass:"flex justify-center q-gutter-md"},[a("q-btn",{attrs:{color:"primary",label:"Get Started",to:e.getStartedLink}}),a("q-btn",{attrs:{color:"negative",label:"Clear Data",icon:"cancel"},on:{click:e.clearData}})],1)])],1)])},s=[],n=a("60a3"),r=a("b2da"),l=a("4bb5"),c=function(e,t,a,o){var s,n=arguments.length,r=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,a,o);else for(var l=e.length-1;l>=0;l--)(s=e[l])&&(r=(n<3?s(r):n>3?s(t,a,r):s(t,a))||r);return n>3&&r&&Object.defineProperty(t,a,r),r};const i=Object(l["a"])("juju");let d=class extends n["d"]{get getStartedLink(){const e=this.$route.query,t=e.welcomePageTo;return"string"==typeof t?(e.welcomePageTo=void 0,{path:t,query:e}):{name:"home"}}clearData(){this.$q.dialog({title:"Are you sure?",message:"Are you sure you want to clear all GUI data? This will reset everything to the initial demo data.",persistent:!0,cancel:!0,ok:{label:"delete",color:"negative"}}).onOk(()=>{this.clearAllState().then(()=>{this.$q.notify({type:"positive",message:"successfully cleared persisted state.",position:"bottom-right",timeout:2e3})})})}};c([i.Action(r["a"].clearAllState)],d.prototype,"clearAllState",void 0),d=c([n["a"]],d);var u=d,h=u,b=(a("0db9"),a("2877")),m=a("eebe"),p=a.n(m),f=a("4983"),y=a("f09f"),w=a("068f"),g=a("9c40"),v=Object(b["a"])(h,o,s,!1,null,"2b07312c",null);t["default"]=v.exports;p()(v,"components",{QScrollArea:f["a"],QCard:y["a"],QImg:w["a"],QBtn:g["a"]})},abf3:function(e,t,a){}}]);