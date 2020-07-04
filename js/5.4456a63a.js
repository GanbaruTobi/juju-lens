(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"35a8":function(t,e,o){"use strict";o.r(e);var n=o("b2da"),a=o("4bb5"),r=o("60a3"),s=function(t,e,o,n){var a,r=arguments.length,s=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(r<3?a(s):r>3?a(e,o,s):a(e,o))||s);return r>3&&s&&Object.defineProperty(e,o,s),s};const l=Object(a.a)("juju");let c=class Welcome extends r.d{get getStartedLink(){const t=this.$route.query,e=t.welcomePageTo;return"string"==typeof e?(t.welcomePageTo=void 0,{path:e,query:t}):{name:"controllers"}}};s([l.Action(n.b.logout)],c.prototype,"logout",void 0),c=s([r.a],c);var i=c,u=(o("e6ba"),o("2877")),d=o("4983"),y=o("f09f"),f=o("068f"),h=o("54e1"),b=o("9c40"),m=o("eebe"),p=o.n(m),v=Object(u.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-scroll-area",{staticClass:"absolute fit",attrs:{"thumb-style":{width:"5px"}}},[o("div",{staticClass:"row justify-center"},[o("q-card",{staticClass:"column items-center col q-mx-md q-my-lg q-pa-lg shadow-10",staticStyle:{"max-width":"60em"}},[o("div",{staticClass:"text-center text-h3 q-mb-md"},[t._v("Juju Lens")]),o("a",{staticClass:"logo-banner",attrs:{href:"https://katharostech.com"}},[o("q-img",{attrs:{src:"/statics/katharostech-banner.svg"}})],1),o("p",{staticClass:"q-ma-md text-body1"},[t._v("\n        Welcome to Juju Lens, a Juju GUI developed by\n        "),o("a",{attrs:{href:"https://katharostech.com"}},[t._v("Katharos Technology")]),t._v(". Juju Lens\n        is currently under heavy development and many features are not\n        finished yet, but you are free to try it out!\n      ")]),o("p",{staticClass:"q-ma-md text-body1"},[t._v("\n        Juju Lens allows you to connect to any number of different Juju\n        controllers and it will give you a live view into the state of your\n        Juju cluster. You can use this instance of Juju Lens without even\n        having to deploy anything! Everything runs locally in your browser.\n      ")]),o("p",{staticClass:"q-ma-md text-body1"},[t._v("\n        You can add controllers to Juju lens in the\n        "),o("router-link",{attrs:{to:{name:"controllers"}}},[t._v("Controllers")]),t._v("\n        tab by specifying the host and port of the server to connect to along\n        with your user credentials. Once you add your controller, Juju Lens\n        will connect and start displaying the models, applications, and units\n        in the\n        "),o("router-link",{attrs:{to:{name:"models"}}},[t._v("Models")]),t._v(" tab.\n      ")],1),o("p",{staticClass:"q-ma-md text-body1"},[t._v("\n        Currently, controller connection information, including user\n        credentials, are stored in your browser window and persisted across\n        restarts. Eventually there will be a convenient way to login and\n        logout, but for now you must delete the controller from the\n        "),o("router-link",{attrs:{to:{name:"controllers"}}},[t._v("Controllers")]),t._v('\n        tab if you want to "logout" of a controller.\n      ')],1),o("q-banner",{staticClass:"q-ma-md bg-orange text-black",attrs:{"inline-actions":"",rounded:""},scopedSlots:t._u([{key:"action",fn:function(){return[o("q-btn",{attrs:{flat:"",label:"Clear Data",to:{name:"clear-data"}}})]},proxy:!0}])},[o("strong",[t._v("Note:")]),t._v(" If you have previously used the Juju Lens\n        prototype, from before it could actually connect to live controllers,\n        you must clear your data before the new changes will work.\n\n        ")]),o("div",{staticClass:"flex justify-center q-gutter-md q-mt-md"},[o("q-btn",{attrs:{color:"positive",icon:"fas fa-location-arrow",label:"Get Started!",to:t.getStartedLink}}),o("q-btn",{attrs:{type:"a",target:"_blank",href:"https://github.com/katharostech/juju-lens",color:"primary",icon:"fab fa-github",label:"GitHub Repo"}})],1)],1)],1)])}),[],!1,null,"6a610c5a",null);e.default=v.exports;p()(v,"components",{QScrollArea:d.a,QCard:y.a,QImg:f.a,QBanner:h.a,QBtn:b.a})},5709:function(t,e,o){},e6ba:function(t,e,o){"use strict";var n=o("5709");o.n(n).a}}]);