(function(t){function e(e){for(var n,r,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&f.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var c=i[o];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/derdroste/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0214":function(t,e,i){},"0674":function(t,e,i){},"09a1":function(t,e,i){t.exports=i.p+"media/cashmo.f92d5626.mp3"},"0a14":function(t,e,i){},"12b4":function(t,e,i){"use strict";var n=i("9393"),s=i.n(n);s.a},"17ba":function(t,e,i){t.exports=i.p+"img/bassboxxx.14d94af3.svg"},"1bf2":function(t,e,i){t.exports=i.p+"img/native.63f72425.svg"},"1d19":function(t,e,i){t.exports=i.p+"img/csharp.f6ca27e9.svg"},"1f04":function(t,e,i){t.exports=i.p+"img/css.2dfd9d5e.svg"},"22d6":function(t,e,i){},"23a5":function(t,e,i){},"2f5b":function(t,e,i){},3079:function(t,e,i){"use strict";var n=i("c05b"),s=i.n(n);s.a},3442:function(t,e,i){t.exports=i.p+"img/ts.49b085ee.svg"},"39b0":function(t,e,i){"use strict";var n=i("0a14"),s=i.n(n);s.a},"40fc":function(t,e,i){t.exports=i.p+"img/js.0cc07760.svg"},4968:function(t,e,i){},"4bf9":function(t,e,i){t.exports=i.p+"img/Lukas.9b02934a.jpg"},"4c36":function(t,e,i){t.exports=i.p+"img/react.ffd6911f.svg"},5447:function(t,e,i){"use strict";var n=i("22d6"),s=i.n(n);s.a},"545a":function(t,e,i){t.exports=i.p+"img/html.e6ec38c0.svg"},"54c3":function(t,e,i){t.exports=i.p+"img/ps.26cf33ec.svg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),s=i("8c4f"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:t.appState},[i("Navigation"),i("main",{staticClass:"page-main"},[i("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[i("router-view")],1)],1),i("player"),i("Footer")],1)},r=[],o=(i("ac1f"),i("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"header"},[n("div",{staticClass:"menu-toggle",class:{"is-active":t.flyOut},on:{click:t.toggleMenu}},[n("svg",[n("use",{attrs:{"xlink:href":i("cfe4")+"#gear-alt"}})])]),n("div",{staticClass:"main-bar",class:{"is-active":t.flyOut}},[n("div",{staticClass:"headline",class:{"is-active":t.flyOut}},[n("span",[t._v("Dr "),n("span",[n("transition",{attrs:{name:"fade",mode:"out-in"}}),"home"===t.appState?n("svg",[n("use",{attrs:{"xlink:href":i("5cc9")+"#home"}})]):t._e(),"city"===t.appState?n("svg",[n("use",{attrs:{"xlink:href":i("c935")+"#city"}})]):t._e()],1),t._v(" ste")])])]),n("nav",{staticClass:"navigation",class:{"is-active":t.flyOut}},[n("div",{staticClass:"overlay-left"}),n("div",{staticClass:"overlay-right"}),n("div",{staticClass:"menu"},[n("ul",[t._l(t.items,(function(e){return[n("li",{key:e.id},[n("a",{class:{"is-active":e.url===t.$route.path},attrs:{href:"#"},on:{click:function(i){return t.push(e.url,i)}}},[t._v(t._s(e.title))])])]}))],2)]),n("div",{staticClass:"contact"},[n("ul",[t._l(t.contactLinks,(function(e){return[n("li",{key:e.id},[n("a",{attrs:{href:e.link}},[n("svg",[n("use",{attrs:{"xlink:href":e.svg}})]),t._v(" "+t._s(e.title)+" ")])])]}))],2)])])])}),c=[],l={data:function(){return{items:[{id:0,title:"Start",url:"/"},{id:1,title:"Steckbrief",url:"/characteristics"},{id:2,title:"Techstack",url:"/techstack"},{id:3,title:"Blog",url:"/blog"}]}}},u=i("2f62");n["a"].use(u["a"]);var d=new u["a"].Store({state:{startPage:0,player:!1,personal:0,blog:0,app:"home"},mutations:{passed:function(t){t.startPage++},passPersonal:function(t){t.personal++},setPlayer:function(t){t.startPage++},setBlog:function(t,e){t.blog=e},setApp:function(t,e){t.app=e}}}),f={name:"Navigation",mixins:[l],data:function(){return{flyOut:!1,scrolled:!1,contactLinks:[{id:0,title:"015752238408",link:"#",svg:""},{id:1,title:"dr.oste129@gmail.com",link:"#",svg:""}]}},methods:{toggleMenu:function(){this.flyOut=!this.flyOut},push:function(t,e){e.preventDefault(),this.$route.path!==t&&(this.flyOut=!1,this.$router.push(t))}},computed:{appState:function(){return d.state.app}}},p=f,m=(i("a0dd"),i("2877")),v=Object(m["a"])(p,o,c,!1,null,"132d46b4",null),h=v.exports,g=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("footer",{staticClass:"footer"},[i("div",{staticClass:"text-center"},[i("div",{staticClass:"anchor"},[i("a",{attrs:{href:"#"}},[t._v("Schreibe mir!")])]),i("ul",[i("li",{staticClass:"title"},[t._v(" Lukas Droste ")]),i("li",[t._v(" Cranachstrasse 1 ")]),i("li",[t._v(" 50733 Köln ")])]),i("ul",[i("li",[i("a",{attrs:{href:"#"}},[t._v("01575 2238408")])]),i("li",[i("a",{attrs:{href:"#"}},[t._v("dr.oste129@gmail.com")])])]),i("span",[t._v("© 2020")]),i("a",{attrs:{href:"#"}},[t._v(" Lukas Droste")]),i("br"),i("span",[i("a",{attrs:{href:"#"}},[t._v("Datenschutz ")]),t._v(" / "),i("a",{attrs:{href:"#"}},[t._v("Impressum")])])])])}],_={name:"Footer"},k=_,w=(i("a40f"),Object(m["a"])(k,g,b,!1,null,"743ec44e",null)),x=w.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showPlayer?n("div",{staticClass:"player",class:{"is-active":t.playing}},[n("svg",{on:{click:t.playAudio}},[n("use",{attrs:{"xlink:href":i("17ba")+"#Layer_1"}})])]):t._e()},j=[],C={name:"Player",data:function(){return{playing:!1,audio:new Audio(i("09a1"))}},methods:{playAudio:function(){this.audio.loop=!0,!1===this.playing?(this.audio.play(),this.playing=!0):(this.audio.pause(),this.playing=!1);var t=document.documentElement;t.style.setProperty("--font","Don Graffiti"),t.style.setProperty("--space","2px")}},computed:{showPlayer:function(){return d.state.player}}},S=C,O=(i("b574"),Object(m["a"])(S,y,j,!1,null,"4bbb57f7",null)),D=O.exports,B="fade",N={name:"App",data:function(){return{transitionName:B}},components:{Player:D,Navigation:h,Footer:x},computed:{appState:function(){return d.state.app}},created:function(){var t=this;this.$router.beforeEach((function(e,i,n){var s=e.meta.transitionName||i.meta.transitionName;if("slide"===s){var a=e.path.split("/").length,r=i.path.split("/").length;s=a<r?"slide-right":"slide-left"}t.transitionName=s||B,n()}))}},E=N,P=(i("5c0b"),Object(m["a"])(E,a,r,!1,null,null,null)),L=P.exports,$=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"swipe-left",rawName:"v-swipe-left",value:t.swipeLeft,expression:"swipeLeft"}],staticClass:"start"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[0===t.activeComponent?i("welcome"):t._e(),1===t.activeComponent?i("choose"):t._e()],1)],1)},W=[],I=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"welcome"},[t._m(0),i("div",{staticClass:"slide"},[i("section-skew",{attrs:{"first-of":!0,text:"Mein Name ist Lukas Droste und ich programmiere und designe Webanwendungen. Wenn du mehr über mich und meine Arbeit erfahren willst, dann swipe nach links oder klicke oben auf das kleine Zahnrad um direkt ins Menü zu gelangen."}})],1)])},T=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-center"},[i("h1",[t._v("Willkommen auf meiner Webseite!")])])}],F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"section-skew",class:{"first-of":t.firstOf}},[i("p",[t._v(t._s(t.text))])])])},M=[],A={name:"SectionSkew",props:{text:{String:String,required:!0},firstOf:{Boolean:Boolean,required:!0}}},q=A,R=(i("bed7"),Object(m["a"])(q,F,M,!1,null,"f352584a",null)),G=R.exports,z={name:"Welcome",components:{SectionSkew:G}},U=z,J=(i("666a"),Object(m["a"])(U,I,T,!1,null,"237445e5",null)),H=J.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"choose"},[i("Section",{attrs:{"first-of":"true",text:"Was genau interessiert dich denn?"}}),i("ul",[t._l(t.items.slice(1),(function(e){return[i("li",{key:e.id,staticClass:"anchor"},[i("router-link",{attrs:{to:e.url}},[t._v(" "+t._s(e.title)+" ")])],1)]}))],2)],1)},Z=[],Y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"section",class:{"first-of":t.firstOf}},[i("p",[t._v(t._s(t.text))])])])},Q=[],V={name:"Section",props:{text:{String:String,required:!0},firstOf:{Boolean:Boolean,required:!0}}},X=V,tt=(i("39b0"),Object(m["a"])(X,Y,Q,!1,null,"7ea0adf0",null)),et=tt.exports,it={created:function(){window.scroll(0,0)}},nt={name:"Choose",components:{Section:et},mixins:[l,it]},st=nt,at=(i("684f"),Object(m["a"])(st,K,Z,!1,null,"7d054836",null)),rt=at.exports,ot={name:"Index",components:{Welcome:H,Choose:rt},methods:{swipeLeft:function(){this.activeComponent<1&&d.commit("passed")}},computed:{activeComponent:function(){return d.state.startPage}}},ct=ot,lt=(i("e3ca"),Object(m["a"])(ct,$,W,!1,null,"283ea516",null)),ut=lt.exports,dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"characteristics-page"},[n("section-skew",{attrs:{"first-of":!0,text:"Du kannst die Zettel abreissen, indem du sie nach unten ziehst!"}}),n("div",{staticClass:"wrapper"},[n("div",{staticClass:"characteristics"},[n("div",{staticClass:"clipboard"},[n("svg",{directives:[{name:"swipe-down",rawName:"v-swipe-down",value:t.rip,expression:"rip"}]},[n("use",{attrs:{"xlink:href":i("605b")+"#clip"}})])]),n("transition",{attrs:{name:"rip"}},[t._l(t.items,(function(e,i){return[i===t.iterator?n("div",{key:e.id,staticClass:"paper"},[n("div",{staticClass:"content"},[n("span",{class:[{title:0===t.iterator},{subtitle:t.iterator>0}]},[e.imageUrl?n("img",{attrs:{src:e.imageUrl,alt:"#"}}):t._e(),t._v(" "+t._s(e.title)+" ")]),n("ul",[t._l(e.listItems,(function(e){return[n("li",{key:e.id},[n("span",[n("strong",[t._v(t._s(e.title)+" ")])]),n("span",[t._v(t._s(e.text))])])]}))],2)])]):t._e()]}))],2)],1)])],1)},ft=[],pt={data:function(){return{items:[{id:0,imageUrl:i("c496"),title:"Hi!",listItems:[{id:0,title:"Name:",text:"Lukas Droste"},{id:1,title:"geboren in:",text:"Soest"},{id:2,title:"lebe in:",text:"Köln"},{id:3,title:"Grösse:",text:"1.88m"}]},{id:1,title:"Berufliches:",listItems:[{id:0,title:"Was genau?",text:"Frontendentwickler"},{id:1,title:"Wie lange?",text:"Seit 2018"},{id:2,title:"Was hast du studiert?",text:"Medieninformatik an der Uni Köln"}]},{id:2,title:"Berufliches:",listItems:[{id:0,title:"Wie lange programmierst du schon?",text:"Seit 2013"},{id:1,title:"Welche Sprachen sprichst du?",text:"JS, C++, C#, PHP"}]}]}}},mt={name:"Index",components:{SectionSkew:G},mixins:[pt,it],data:function(){return{iterator:0}},methods:{rip:function(){this.iterator<this.items.length&&this.iterator++}}},vt=mt,ht=(i("852d"),Object(m["a"])(vt,dt,ft,!1,null,"c228fcbc",null)),gt=ht.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tech-page"},[i("section-skew",{attrs:{"first-of":!0,text:"Wenn dich interessiert, welche Technologien ich tagtäglich benutze, dann swipe dich doch mal durch mein Tech-Stack-Karussel!"}}),i("tech-slider")],1)},_t=[],kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"swipe-left",rawName:"v-swipe-left",value:t.rotateSliderLeft,expression:"rotateSliderLeft"},{name:"swipe-right",rawName:"v-swipe-right",value:t.rotateSliderRight,expression:"rotateSliderRight"}],staticClass:"techstack"},[i("div",{staticClass:"container"},[i("div",{staticClass:"slider",style:"transform: rotateY("+t.curveSlider+"deg)"},[t._l(t.stacks,(function(e){return[i("div",{key:e.id,staticClass:"stack",style:"transform: rotateY("+e.id*t.getDegree+"deg) translateZ("+t.getDegree*t.imageMargin+"px);"},[i("div",{staticClass:"stack-wrapper",class:{"is-active":t.activeDescription===e.id}},[i("img",{attrs:{draggable:"false",src:e.url,alt:"#"}})])])]}))],2)]),i("div",{staticClass:"text-center description"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[t._l(t.stacks,(function(e){return[t.activeDescription===e.id?i("div",{key:e.id},[i("p",[t._v(t._s(e.type)+":")]),i("h2",[t._v(t._s(e.title))])]):t._e()]}))],2)],1)])},wt=[],xt={data:function(){return{stacks:[{id:0,url:i("f62e"),type:"Frontend",title:"Vue.js"},{id:1,url:i("6ec5"),type:"Frontend",title:"Nuxt.js"},{id:2,url:i("4c36"),type:"Frontend",title:"React"},{id:3,url:i("1bf2"),type:"Apps",title:"Nativescript"},{id:4,url:i("40fc"),type:"Frontend",title:"Javascript"},{id:5,url:i("3442"),type:"Frontend",title:"Typescript"},{id:6,url:i("8d1f"),type:"Frontend",title:"Sass"},{id:7,url:i("1f04"),type:"Frontend",title:"CSS"},{id:8,url:i("545a"),type:"Frontend",title:"HTML"},{id:9,url:i("9082"),type:"Frontend",title:"Jquery"},{id:10,url:i("b6ed"),type:"Bundler",title:"Webpack"},{id:11,url:i("5cc2"),type:"Infrastruktur",title:"Gitlab"},{id:12,url:i("5a62"),type:"Transcompiler",title:"Babel"},{id:13,url:i("6ce8"),type:"Backend",title:"Node"},{id:14,url:i("79b1"),type:"Backend",title:"Mongo"},{id:15,url:i("6c05"),type:"Game Development",title:"C++"},{id:16,url:i("fb69"),type:"Bundler",title:"Grunt"},{id:17,url:i("dba6"),type:"Backend",title:"MySQL"},{id:18,url:i("1d19"),type:"Game Development",title:"C#"},{id:19,url:i("54c3"),type:"Design",title:"Photoshop"}]}}},yt={name:"TechSlider",mixins:[xt],data:function(){return{curveSlider:0,activeDescription:0,imageMargin:12}},methods:{rotateSliderLeft:function(){this.curveSlider=this.curveSlider-this.getDegree,this.activeDescription!==this.stacks.length-1?this.activeDescription++:this.activeDescription=0},rotateSliderRight:function(){this.curveSlider=this.curveSlider+this.getDegree,0!==this.activeDescription?this.activeDescription--:this.activeDescription=this.stacks.length-1}},computed:{getDegree:function(){var t=360/this.stacks.length;return t}},created:function(){window.innerWidth>1023&&(this.imageMargin=24)}},jt=yt,Ct=(i("3079"),Object(m["a"])(jt,kt,wt,!1,null,"3ea7ae38",null)),St=Ct.exports,Ot={name:"Index",components:{SectionSkew:G,TechSlider:St},mixins:[it]},Dt=Ot,Bt=Object(m["a"])(Dt,bt,_t,!1,null,"05ace3fe",null),Nt=Bt.exports,Et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"swipe-left",rawName:"v-swipe-left",value:t.increaseState,expression:"increaseState"}],staticClass:"personal"},[i("transition",{attrs:{name:"fade",mode:"out-in"}},[0===t.personalState?i("welcome"):t._e(),1===t.personalState?i("choose"):t._e()],1)],1)},Pt=[],Lt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"welcome"},[i("Section",{attrs:{"first-of":!0,text:"Hey, Du hast heute den Jackpot gemacht! Denn du darfst heute einen virtuellen Tag mit mir verbringen, um mich besser kennen zu lernen."}}),i("border"),i("Section",{attrs:{"first-of":!1,text:"All die Steckbriefe und Kurzinformationen finde ich ein bisschen unpersönlich. Lass uns lieber ein Abenteuer erleben!"}}),i("section-skew",{attrs:{"first-of":!1,text:"Also swipe einfach nach Links und los geht´s! b ubodenjukanjdeejkn"}})],1)},$t=[],Wt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("hr",{staticClass:"border"})},It=[],Tt={name:"Border"},Ft=Tt,Mt=(i("8b21"),Object(m["a"])(Ft,Wt,It,!1,null,"c78b7e74",null)),At=Mt.exports,qt={name:"Welcome",components:{SectionSkew:G,Border:At,Section:et}},Rt=qt,Gt=Object(m["a"])(Rt,Lt,$t,!1,null,"505968ad",null),zt=Gt.exports,Ut=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"choose"},[i("Section",{attrs:{"first-of":!0,text:"Wo möchtest du den Tag mit mir verbringen?"}}),i("Border"),i("div",{staticClass:"choose-tags"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],attrs:{type:"radio",id:"city",value:"city"},domProps:{checked:t._q(t.location,"city")},on:{change:function(e){t.location="city"}}}),i("label",{staticClass:"tag city",attrs:{for:"city"}}),i("input",{directives:[{name:"model",rawName:"v-model",value:t.location,expression:"location"}],attrs:{type:"radio",id:"outdoor",value:"outdoor"},domProps:{checked:t._q(t.location,"outdoor")},on:{change:function(e){t.location="outdoor"}}}),i("label",{staticClass:"tag city",attrs:{for:"outdoor"}})]),i("Border"),"home"!==t.location?i("div",{staticClass:"anchor"},[i("router-link",{attrs:{to:""},nativeOn:{click:function(e){return t.setAppLocation(e)}}},[t._v("Auf geht´s")])],1):t._e()],1)},Jt=[],Ht={name:"Choose",components:{Border:At,Section:et},data:function(){return{location:"home"}},methods:{setAppLocation:function(){d.commit("setApp",this.location);var t=document.documentElement;"city"===this.location&&(t.style.setProperty("--main-bar-color","#0f0f0f"),t.style.setProperty("--navigation-mobile-color","#dbe4eb"),t.style.setProperty("--font","Don Graffiti"))}}},Kt=Ht,Zt=(i("12b4"),Object(m["a"])(Kt,Ut,Jt,!1,null,"054750bc",null)),Yt=Zt.exports,Qt={name:"Index",components:{Choose:Yt,Welcome:zt},methods:{increaseState:function(){this.personalState<1&&d.commit("passPersonal")}},computed:{personalState:function(){return d.state.personal}}},Vt=Qt,Xt=(i("c3ff"),Object(m["a"])(Vt,Et,Pt,!1,null,"541419c2",null)),te=Xt.exports,ee=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog"},[n("Section",{attrs:{"first-of":!0,text:"Lukas bloggt über Webentwicklung, Spiele Entwicklung und alles mögliche!"}}),t._l(t.filter,(function(e){return[n("div",{key:e.id,staticClass:"blog-preview"},[n("img",{attrs:{src:i("e480")("./"+e.image),alt:"#"}}),n("div",{staticClass:"content"},[n("div",{staticClass:"date"},[n("span",[t._v(t._s(e.date))])]),n("div",{staticClass:"title"},[n("span",[t._v(t._s(e.title))])]),n("div",{staticClass:"description"},[n("span",[t._v(t._s(e.description))])]),n("router-link",{staticClass:"anchor",attrs:{to:"/blog/detail"},nativeOn:{click:function(i){return t.setBlog(e.id)}}},[t._v("Weiterlesen")])],1)])]}))],2)},ie=[],ne=(i("fb6a"),{data:function(){return{blogs:[{id:0,title:"Erster Blog",image:"Lukas.jpg",date:"29. Februar 2020",description:"Das ist mein erster Blog. Das ist die Beschreibung. Blabla bla bla balal Bla",sections:[{id:0,subtitle:"schneter",content:"fleter",border:!0}]},{id:1,title:"Zweiter Blog",image:"Lukas.jpg",date:"30. Februar 2020",description:"Das ist mein zweiter Blog. Das ist die Beschreibung. Blabla bla bla balal Bla",sections:[{id:0,subtitle:"schneter",content:"fleter wkjndjkew jnwehkhj jkndjnekjw jnejndje kjndew jne jnwjndwe jnekjwd jknkwejdn jknjnwe jnkjnew",border:!0},{id:1,subtitle:"schneter",content:"fleter wkjndjkew jnwehkhj jkndjnekjw jnejndje kjndew jne jnwjndwe jnekjwd jknkwejdn jknjnwe jnkjnew"},{id:2,content:"fleter wkjndjkew jnwehkhj jkndjnekjw jnejndje kjndew jne jnwjndwe jnekjwd jknkwejdn jknjnwe jnkjnew",image:"Lukas.jpg"}]}]}}}),se={name:"Index",components:{Section:et},mixins:[ne,it],methods:{setBlog:function(t){d.commit("setBlog",t)}},computed:{filter:function(){return this.blogs.slice().reverse()}}},ae=se,re=(i("5447"),Object(m["a"])(ae,ee,ie,!1,null,"96fc1734",null)),oe=re.exports,ce=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"blog-detail"},[t._l(t.blogs,(function(e){return[e.id===t.stateBlog?n("div",{key:e.id,staticClass:"content"},[n("h1",[t._v(t._s(e.title))]),n("span",[t._v(t._s(e.date))]),n("div",{staticClass:"head-section"},[n("img",{attrs:{src:i("e480")("./"+e.image),alt:"#"}})]),t._l(e.sections,(function(e){return[n("div",{key:e.id,staticClass:"text-section"},[e.subtitle?n("h2",[t._v(t._s(e.subtitle))]):t._e(),e.image?n("img",{attrs:{src:i("e480")("./"+e.image),alt:"#"}}):t._e(),n("p",[t._v(t._s(e.content))]),e.border?n("border"):n("div",{staticClass:"seperator"})],1)]}))],2):t._e()]}))],2)},le=[],ue={name:"Detail",components:{Border:At},mixins:[ne,it],computed:{stateBlog:function(){return d.state.blog}}},de=ue,fe=(i("7f98"),Object(m["a"])(de,ce,le,!1,null,"17083ca7",null)),pe=fe.exports,me=[{path:"/",component:ut,meta:{transitionName:"slide"}},{path:"/characteristics",component:gt,meta:{transitionName:"slide"}},{path:"/techstack",component:Nt,meta:{transitionName:"slide"}},{path:"/personal",component:te,meta:{transitionName:"slide"}},{path:"/blog",component:oe,meta:{transitionName:"slide"}},{path:"/blog/detail",component:pe,meta:{transitionName:"slide"}}],ve=i("c8b5"),he=i.n(ve);n["a"].use(s["a"]);var ge=new s["a"]({routes:me});n["a"].config.productionTip=!1,n["a"].directive("swipe-left",{bind:function(t,e){if("function"===typeof e.value){var i=new he.a(t);i.get("swipe").set({direction:he.a.DIRECTION_LEFT}),i.on("swipe",e.value)}}}),n["a"].directive("swipe-right",{bind:function(t,e){if("function"===typeof e.value){var i=new he.a(t);i.get("swipe").set({direction:he.a.DIRECTION_RIGHT}),i.on("swipe",e.value)}}}),n["a"].directive("swipe-up",{bind:function(t,e){if("function"===typeof e.value){var i=new he.a(t);i.get("swipe").set({direction:he.a.DIRECTION_UP}),i.on("swipe",e.value)}}}),n["a"].directive("swipe-down",{bind:function(t,e){if("function"===typeof e.value){var i=new he.a(t);i.get("swipe").set({direction:he.a.DIRECTION_DOWN}),i.on("swipe",e.value)}}}),new n["a"]({router:ge,render:function(t){return t(L)}}).$mount("#app")},"5a62":function(t,e,i){t.exports=i.p+"img/babel.68b4e041.svg"},"5c0b":function(t,e,i){"use strict";var n=i("9c0c"),s=i.n(n);s.a},"5cc2":function(t,e,i){t.exports=i.p+"img/gitlab.d4acb285.svg"},"5cc9":function(t,e,i){t.exports=i.p+"img/gear.690f5f70.svg"},"605b":function(t,e,i){t.exports=i.p+"img/clipboard.42957931.svg"},"666a":function(t,e,i){"use strict";var n=i("2f5b"),s=i.n(n);s.a},"684f":function(t,e,i){"use strict";var n=i("23a5"),s=i.n(n);s.a},"6c05":function(t,e,i){t.exports=i.p+"img/cplusplus.21264c20.svg"},"6ce8":function(t,e,i){t.exports=i.p+"img/node.2c966757.svg"},"6ec5":function(t,e,i){t.exports=i.p+"img/nuxt-square.ca6dcaaf.svg"},"74b5":function(t,e,i){},7860:function(t,e,i){},"79b1":function(t,e,i){t.exports=i.p+"img/mongo.7d551712.svg"},"7f98":function(t,e,i){"use strict";var n=i("adbc"),s=i.n(n);s.a},"852d":function(t,e,i){"use strict";var n=i("0674"),s=i.n(n);s.a},"85ea":function(t,e,i){},"8b21":function(t,e,i){"use strict";var n=i("4968"),s=i.n(n);s.a},"8d1f":function(t,e,i){t.exports=i.p+"img/sass.be6ce5f6.svg"},"8daf":function(t,e,i){},9082:function(t,e,i){t.exports=i.p+"img/jquery.4493b9c8.svg"},9393:function(t,e,i){},"9c0c":function(t,e,i){},"9fcb":function(t,e,i){},a0dd:function(t,e,i){"use strict";var n=i("74b5"),s=i.n(n);s.a},a40f:function(t,e,i){"use strict";var n=i("7860"),s=i.n(n);s.a},adbc:function(t,e,i){},b574:function(t,e,i){"use strict";var n=i("9fcb"),s=i.n(n);s.a},b6ed:function(t,e,i){t.exports=i.p+"img/webpack.aa5db28d.svg"},bed7:function(t,e,i){"use strict";var n=i("0214"),s=i.n(n);s.a},c05b:function(t,e,i){},c3ff:function(t,e,i){"use strict";var n=i("8daf"),s=i.n(n);s.a},c496:function(t,e,i){t.exports=i.p+"img/portrait.96265fe0.jpg"},c935:function(t,e,i){t.exports=i.p+"img/ride.36c1f845.svg"},cfe4:function(t,e,i){t.exports=i.p+"img/gear-alt.45fe624c.svg"},dba6:function(t,e,i){t.exports=i.p+"img/sql.9b09eccb.svg"},e3ca:function(t,e,i){"use strict";var n=i("85ea"),s=i.n(n);s.a},e480:function(t,e,i){var n={"./Lukas.jpg":"4bf9"};function s(t){var e=a(t);return i(e)}function a(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=a,t.exports=s,s.id="e480"},f62e:function(t,e,i){t.exports=i.p+"img/vue.a7cf30ac.svg"},fb69:function(t,e,i){t.exports=i.p+"img/grunt.bd106486.svg"}});
//# sourceMappingURL=app.ffbe3dd4.js.map