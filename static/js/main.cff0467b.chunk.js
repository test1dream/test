(this.webpackJsonpweb_front=this.webpackJsonpweb_front||[]).push([[0],{102:function(e,a,t){},114:function(e,a,t){},115:function(e,a,t){},116:function(e,a,t){},117:function(e,a,t){},118:function(e,a,t){},119:function(e,a,t){},120:function(e,a,t){},121:function(e,a,t){},122:function(e,a,t){},123:function(e,a,t){},211:function(e,a,t){},212:function(e,a,t){},213:function(e,a,t){},214:function(e,a,t){},215:function(e,a,t){},216:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(18),c=t.n(r),m=t(5),i=t(241),s=t(240),o=t(22),E=t(11),u=(t(102),n.a.createElement("button",{className:"menuBtn",onClick:function(){document.querySelector(".menu").classList.toggle("open")}},"MENU"));var d=function(){var e=Object(l.useState)(0),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(n.a.createElement("div",{className:"menu"},n.a.createElement(E.b,{exact:!0,key:1,to:"/",activeClassName:"activeNavLink",className:"navLink"},"Home"),n.a.createElement(E.b,{exact:!0,key:2,to:"/works",activeClassName:"activeNavLink",className:"navLink"},"Works"),n.a.createElement(E.b,{exact:!0,key:3,to:"/order",activeClassName:"activeNavLink",className:"navLink"},"Order"),n.a.createElement(E.b,{exact:!0,key:4,to:"/about",activeClassName:"activeNavLink",className:"navLink"},"About"),n.a.createElement(E.b,{exact:!0,key:4,to:"/contact",activeClassName:"activeNavLink",className:"navLink"},"Contact"))),m=Object(o.a)(c,2),i=m[0],s=(m[1],Object(l.useState)(!1)),d=Object(o.a)(s,2),h=d[0],v=d[1];function f(e){if(t!==e){if(e>768){var a=document.querySelector("div.menu");a&&a.classList.remove("open"),v(!1)}else v(!0);r(e)}}return Object(l.useEffect)((function(){return f(window.innerWidth),r(window.innerWidth),function(){window.addEventListener("resize",(function(){f(window.innerWidth)}))}})),n.a.createElement("header",{className:"header"},h?u:"",i)},h=t(237),v=t(233),f=t(235),N=t(238),b=t(236);function p(){return n.a.createElement(v.a,{variant:"body2",color:"textSecondary"},"\xa9 ",(new Date).getFullYear()," Suzuki Web&App Engineer, All Rights Reserved")}var g=Object(f.a)((function(e){return{root:{display:"flex",flexDirection:"column"},main:{marginTop:e.spacing(8),marginBottom:e.spacing(2)},footer:{padding:e.spacing(3,2),marginTop:"auto",textAlign:"center",background:"#fff"}}}));function k(){var e=g();return n.a.createElement("div",{className:e.root,"data-test":"footer"},n.a.createElement(b.a,null),n.a.createElement(h.a,null),n.a.createElement("footer",{className:e.footer},n.a.createElement(N.a,{maxWidth:"sm"},n.a.createElement(v.a,{variant:"body1"}),n.a.createElement(p,null))))}var y=t(34),S=Object(f.a)((function(e){return{root:{height:180},container:{display:"flex"},svgBig:{width:100,height:50},svgSmall:{width:1,height:100},blackSmallPolygon:{stroke:e.palette.common.black,strokeWidth:1},blackBigPolygon:{stroke:e.palette.common.black,strokeWidth:7},darkPpolygon:{stroke:e.palette.primary.dark,strokeWidth:7}}})),x=function(e){var a=e.len,t=S(),l=n.a.useState(!0),r=Object(o.a)(l,2);r[0],r[1];return n.a.createElement("div",{className:String(a)},n.a.createElement("div",{className:t.container},n.a.createElement(y.Motion,{defaultStyle:{x:0},style:{x:Object(y.spring)(10,{stiffness:45,damping:20})}},(function(e){return n.a.createElement("div",null,n.a.createElement("svg",{className:t.svgSmall},n.a.createElement("polygon",{points:"00,"+String(a*e.x/10)+" 00,00",className:t.blackSmallPolygon})))}))))},w=function(e){var a=e.len,t=(e.width,e.color),l=S(),r=n.a.useState(!0),c=Object(o.a)(r,2),m=(c[0],c[1],"black"==t?l.blackBigPolygon:l.darkPpolygon);return n.a.createElement("div",{className:String(a)},n.a.createElement("div",{className:l.container},n.a.createElement(y.Motion,{defaultStyle:{x:0},style:{x:Object(y.spring)(10,{stiffness:45,damping:20})}},(function(e){return n.a.createElement("div",null,n.a.createElement("svg",{className:l.svgBig},n.a.createElement("polygon",{points:String(a*e.x/10)+",10 00,10",className:m})))}))))},B=(t(30),t(114),function(){Object(m.f)();return n.a.createElement("div",{className:"contactWrapper"},n.a.createElement("div",{className:"contactSpacer"}),n.a.createElement("div",{className:"contact"},n.a.createElement("div",{className:"contactBlock"},n.a.createElement("h3",null,"\u304a\u554f\u3044\u5408\u308f\u305b"),n.a.createElement("h1",{className:"bigTitle"},"Contact"),n.a.createElement(w,{len:80,width:8,color:"blue"})),n.a.createElement("div",{onClick:function(){window.location.href="/#/contact"},className:"contactBtnWhite"},"#")),n.a.createElement("div",{className:"contactSpacerSmall"}))}),W=t(88),A=t.n(W),C=(t(115),function(){return n.a.createElement("div",{className:"firstBlock"},n.a.createElement("div",{className:"firstCenter"},n.a.createElement("h1",{style:{fontSize:"5vw"}}," Web&APP"),n.a.createElement("h1",{style:{fontSize:"5vw"}}," Engineer")),n.a.createElement("img",{className:"firstImg",src:A.a}))}),O=(t(116),function(){return Object(l.useEffect)((function(){}),[]),n.a.createElement("div",{className:"secondWrapper"},n.a.createElement("div",{className:"secondSpacer"}),n.a.createElement("div",{className:"second"},n.a.createElement("div",{className:"Block"},n.a.createElement("h1",{className:"bigTitle"}," \u523a\u3055\u308b\u30b5\u30a4\u30c8\u30fb\u30a2\u30d7\u30ea\u5236\u4f5c\u3057\u307e\u3059\u3002"),n.a.createElement(w,{len:70,width:8,color:"blue"})),n.a.createElement("div",{className:"Block"},n.a.createElement("h3",null,"\u4e01\u5be7\u306a\u30d2\u30a2\u30ea\u30f3\u30b0\u304b\u3089\u304a\u5ba2\u69d8\u306e\u6c42\u3081\u308b\u30b4\u30fc\u30eb\u3092\u7406\u89e3\u3057\u3001\u76ee\u6a19\u3092\u9054\u6210\u3059\u308b\u30b5\u30a4\u30c8\u3092\u63d0\u6848\u3057\u307e\u3059\u3002 \u305f\u3060\u898b\u305f\u76ee\u304c\u826f\u3044\u3060\u3051\u3067\u306f\u306a\u304f\u3001WEB\u30b5\u30a4\u30c8\u30fb\u30a2\u30d7\u30ea\u3092\u3082\u3063\u3066\u9054\u6210\u3057\u305f\u3044\u30d3\u30b8\u30cd\u30b9\u4e0a\u306e\u30b4\u30fc\u30eb\u304c\u3042\u308b\u65b9\u306f\u662f\u975e\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002"),n.a.createElement("br",null),n.a.createElement("h3",null,"\u307e\u3060\u30b5\u30a4\u30c8\u30fb\u30a2\u30d7\u30ea\u306e\u30b3\u30f3\u30bb\u30d7\u30c8\u3084\u65b9\u5411\u6027\u304c\u3056\u3063\u304f\u308a\u3068\u3057\u3066\u3044\u308b\u65b9\u3082\u304a\u6c17\u8efd\u306b\u3054\u76f8\u8ac7\u304f\u3060\u3055\u3044\u3002 \u30a4\u30e1\u30fc\u30b8\u3092\u5177\u4f53\u5316\u3059\u308b\u6240\u304b\u3089\u3054\u63d0\u6848\u3057\u307e\u3059\u3002"))),n.a.createElement("div",{className:"secondSpacer"}))}),j=(t(117),function(){return n.a.createElement("div",{className:"homeCard"},n.a.createElement("div",{className:"cardWrapper"},n.a.createElement("img",{className:"imgCard",src:"https://find1dream.github.io/koyano_deploy/img/web.png"}),n.a.createElement("h1",null,"WEB\u5236\u4f5c"),n.a.createElement("br",null),n.a.createElement("h3",null,"\u4f01\u753b\u3001\u8a2d\u8a08\u3001\u30c7\u30b6\u30a4\u30f3\u304b\u3089\u3001\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\uff08HTML\u3001CSS\u3001REACT\u306a\u3069\uff09\u3001\u5c0e\u5165\u307e\u3067\u30c8\u30fc\u30bf\u30eb\u306b\u627f\u3063\u3066\u304a\u308a\u307e\u3059\u3002"),n.a.createElement("h3",null," \u30c7\u30b6\u30a4\u30f3\u30a4\u30e1\u30fc\u30b8\u304c\u5168\u304f\u6c7a\u307e\u3063\u3066\u3044\u306a\u304f\u3066\u3082\u307e\u305a\u306f\u3054\u76f8\u8ac7\u304f\u3060\u3055\u3044\u3002\u304a\u5ba2\u69d8\u306e\u30d3\u30b8\u30cd\u30b9\u306b\u304a\u3051\u308b\u30b3\u30f3\u30bb\u30d7\u30c8\u304b\u3089\u30c7\u30b6\u30a4\u30f3\u30a4\u30e1\u30fc\u30b8\u3092\u5177\u4f53\u5316\u3057\u3066\u3054\u63d0\u6848\u3055\u305b\u3066\u3044\u305f\u3060\u304d\u307e\u3059\u3002")),n.a.createElement("div",{className:"cardWrapper"},n.a.createElement("img",{className:"imgCard",src:"https://find1dream.github.io/koyano_deploy/img/app.png"}),n.a.createElement("h1",null,"\u30cd\u30a4\u30c6\u30a3\u30d6\u30a2\u30d7\u30ea"),n.a.createElement("br",null),n.a.createElement("h3",null,"\u4f01\u753b\u3001\u8a2d\u8a08\u3001\u30c7\u30b6\u30a4\u30f3\u3001\u958b\u767a\uff08SWIFT\u3001JAVA\u3001KOTLIN\u306a\u3069\uff09\u3001\u30ea\u30ea\u30fc\u30b9\u307e\u3067\u30c8\u30fc\u30bf\u30eb\u306b\u627f\u3063\u3066\u304a\u308a\u307e\u3059\u3002"),n.a.createElement("h3",null," \u5404\u7aef\u672b\u30fb\u5404OS\u3067\u306e\u30e6\u30fc\u30b6\u30d3\u30ea\u30c6\u30a3\uff0f\u64cd\u4f5c\u6027\u3092\u610f\u8b58\u3057\u305f\u958b\u767a\u3092\u5fc3\u304c\u3051\u3066\u3044\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30d3\u30ea\u30c6\u30a3\u306e\u9ad8\u3044UI\u3084\u30a2\u30d7\u30ea\u306b\u9069\u3057\u305f\u30a4\u30e9\u30b9\u30c8/\u753b\u50cf\u3092\u3054\u63d0\u6848\u3044\u305f\u3057\u307e\u3059\u3002")),n.a.createElement("div",{className:"cardWrapper"},n.a.createElement("img",{className:"imgCard",src:"https://find1dream.github.io/koyano_deploy/img/mac.png"}),n.a.createElement("h1",null,"UI\u30c7\u30b6\u30a4\u30f3"),n.a.createElement("br",null),n.a.createElement("h3",null,"Web\u30b5\u30a4\u30c8\u30fb\u30a2\u30d7\u30ea\u306a\u3069\u306e\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9(UI)\u306e\u30c7\u30b6\u30a4\u30f3\u3092\u627f\u3063\u3066\u304a\u308a\u307e\u3059\u3002"),n.a.createElement("h3",null,"\u4e16\u754c\u89b3\u3001\u4f1d\u3048\u305f\u3044\u60f3\u3044\u3092\u76f4\u611f\u7684\u306b\u4f1d\u308f\u308b\u3088\u3046\u306a\u5f62\u306b\u3057\u3001\u9577\u304f\u4f7f\u3063\u3066\u3044\u3051\u308b\u3088\u3046\u306a\u30c7\u30b6\u30a4\u30f3\u3092\u63d0\u6848\u81f4\u3057\u307e\u3059\u3002")))}),T=(t(118),function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"third"},n.a.createElement("div",{className:"thirdHead"},n.a.createElement("h3",null," \u30b5\u30fc\u30d3\u30b9\u5185\u5bb9"),n.a.createElement("div",{className:"thirdBlock"},n.a.createElement("h1",{style:{fontSize:"3.5rem"}}," SERVICE ")),n.a.createElement(w,{len:70,width:3,color:"black"}))),n.a.createElement(j,null))}),L=(t(119),function(){return n.a.createElement("div",{className:"fourthWrapper"},n.a.createElement("div",{className:"fourthSpacer"}),n.a.createElement("div",{className:"fourth"},n.a.createElement("div",{className:"fourthBlock"},n.a.createElement("img",{className:"imgFourth",src:"https://find1dream.github.io/koyano_deploy/img/strength_01.jpg"})),n.a.createElement("div",{className:"fourthBlock"},n.a.createElement("h1",{style:{fontSize:"5.5rem",fontFamily:"inherit"}}," 01 "),n.a.createElement(w,{len:100,width:8,color:"blue"}),n.a.createElement("h1",{className:"bigTitle"}," \u4e16\u754c\u89b3\u306e\u8868\u73fe"),n.a.createElement("br",null),n.a.createElement("h3",{className:"fourthText"},"\u4f01\u696d\u3001\u30b5\u30fc\u30d3\u30b9\u306e\u6301\u3064\u4e16\u754c\u89b3\u3084\u30d6\u30e9\u30f3\u30c9\u30a4\u30e1\u30fc\u30b8\u306e\u8868\u73fe\u3092\u5f97\u610f\u3068\u3057\u3066\u3044\u307e\u3059\u3002"),n.a.createElement("br",null),n.a.createElement("h3",null,"  \u304a\u5ba2\u69d8\u4e00\u4eba\u4e00\u4eba\u3078\u306e\u4e01\u5be7\u306a\u30d2\u30a2\u30ea\u30f3\u30b0\u306b\u3088\u308a\u3001\u4f01\u696d\u3084\u30b5\u30fc\u30d3\u30b9\u3092\u78ba\u5b9f\u306b\u7406\u89e3\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u5b9f\u73fe\u3057\u3066\u3044\u307e\u3059\u3002"))),n.a.createElement("div",{className:"fourth"},n.a.createElement("div",{className:"fourthBlock"},n.a.createElement("h1",{style:{fontSize:"5.5rem",fontFamily:"inherit"}}," 02 "),n.a.createElement(w,{len:100,width:8,color:"blue"}),n.a.createElement("h1",{className:"bigTitle"}," \u30b7\u30f3\u30d7\u30eb\u306a\u30c7\u30b6\u30a4\u30f3"),n.a.createElement("br",null),n.a.createElement("h3",null,'"\u30b7\u30f3\u30d7\u30eb=\u60c5\u5831\u91cf\u304c\u5c11\u306a\u3044"\u3068\u3044\u3046\u610f\u5473\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002'),n.a.createElement("br",null),n.a.createElement("h3",null,"\u30ce\u30a4\u30ba\u3068\u306a\u308b\u60c5\u5831\u3092\u5fb9\u5e95\u7684\u306b\u524a\u304e\u843d\u3068\u3057\u3001\u672c\u5f53\u306b\u4f1d\u3048\u305f\u3044\u3053\u3068\u3060\u3051\u3092\u5f37\u70c8\u306a\u5370\u8c61\u3068\u3057\u3066\u6b8b\u3059\u3053\u3068\u304c\u672c\u5f53\u306e\u30b7\u30f3\u30d7\u30eb\u3067\u3059\u3002"),n.a.createElement("br",null),n.a.createElement("h3",null,"\u300c\u8a2a\u554f\u5ba2\u306b\u306f\u78ba\u5b9f\u306b\u5370\u8c61\u3092\u690d\u3048\u4ed8\u3051\u308b\u300d\u305d\u3093\u306a\u30b5\u30a4\u30c8\u5236\u4f5c\u3092\u5f97\u610f\u3068\u3057\u3066\u3044\u307e\u3059\u3002")),n.a.createElement("div",{className:"fourthBlock"},n.a.createElement("img",{className:"imgFourth",src:"https://find1dream.github.io/koyano_deploy/img/strength_02.jpg"}))),n.a.createElement("div",{className:"fourth"},n.a.createElement("div",{className:"fourthBlock"},n.a.createElement("img",{className:"imgFourth",src:"https://find1dream.github.io/koyano_deploy/img/strength_03.jpg"})),n.a.createElement("div",{className:"fourthBlock"},n.a.createElement("h1",{style:{fontSize:"5.5rem",fontFamily:"inherit"}}," 03 "),n.a.createElement(w,{len:100,width:8,color:"blue"}),n.a.createElement("h1",{className:"bigTitle"}," \u30e6\u30fc\u30b6\u30fc\u30d5\u30a1\u30fc\u30b9\u30c8"),n.a.createElement("br",null),n.a.createElement("h3",{className:"fourthText"},"\u3069\u3093\u306a\u306b\u826f\u3044\u30c7\u30b6\u30a4\u30f3\u3067\u3082\u4f7f\u3044\u3065\u3089\u3051\u308c\u3070\u9867\u5ba2\u306f\u60aa\u5370\u8c61\u3057\u304b\u6301\u3061\u307e\u305b\u3093\u3002"),n.a.createElement("br",null),n.a.createElement("h3",null,"\u300c\u30e6\u30fc\u30b6\u30fc\u306b\u3068\u3063\u3066\u4f7f\u3044\u3084\u3059\u3044\u30b5\u30a4\u30c8\u3067\u3042\u308b\u3053\u3068\u300d\u3092\u5e38\u306b\u5ff5\u982d\u306b\u5165\u308c\u3066\u30c7\u30b6\u30a4\u30f3\u3057\u3066\u3044\u307e\u3059\u3002"),n.a.createElement("br",null),n.a.createElement("h3",null,'"\u3069\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u898b\u3066\u3082\u898b\u3084\u3059\u304f\u4f7f\u3044\u3084\u3059\u3044"\u30b5\u30a4\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002'))),n.a.createElement("div",{className:"fourthSpacer"}))}),z=(t(120),function(){return n.a.createElement("div",{className:"homeCard"},n.a.createElement("div",{className:"cardWrapper"},n.a.createElement("img",{className:"imgCard",src:"https://find1dream.github.io/koyano_deploy/img/works_05.png"})),n.a.createElement("div",{className:"cardWrapper"},n.a.createElement("img",{className:"imgCard",src:"https://find1dream.github.io/koyano_deploy/img/works_01.png"})))}),P=(t(121),function(){Object(m.f)();return n.a.createElement("div",null,n.a.createElement("div",{className:"fifth"},n.a.createElement("div",{className:"fifthHead"},n.a.createElement("h3",null," \u4f5c\u54c1"),n.a.createElement("div",{className:"fifthBlock"},n.a.createElement("h1",{style:{fontSize:"3.5rem"}}," WORKS")),n.a.createElement(w,{len:70,width:3,color:"black"}))),n.a.createElement(z,null),n.a.createElement("div",{onClick:function(){window.location.href="/#/works"},className:"detailsBtn"},"Detail"))}),_=(t(122),function(){return n.a.createElement("div",{className:"sixthWrapper"},n.a.createElement("div",{className:"sixthSpacer"}),n.a.createElement("div",{className:"sixth"},n.a.createElement("div",{className:"sixthBlockWhite"},n.a.createElement("h3",null," \u6982\u8981"),n.a.createElement("div",{className:"fifthBlock"},n.a.createElement("h1",{style:{fontSize:"2.0rem"}}," About")),n.a.createElement("div",{onClick:function(){window.location.href="/#/about"},className:"detailsBtnBlack"},"More")),n.a.createElement("div",{className:"sixthBlockBlack"},n.a.createElement("div",{className:"sixthText"},n.a.createElement("h3",null," \u3054\u4f9d\u983c\u65b9\u6cd5"),n.a.createElement("div",{className:"sixthBlock"},n.a.createElement("h1",{style:{fontSize:"2.0rem",color:"white"}}," ORDER")),n.a.createElement("div",{onClick:function(){window.location.href="/#/order"},className:"detailsBtnWhite"},"More")))))}),I=function(){return n.a.createElement("div",{style:{background:"#fff"}},n.a.createElement(C,null),n.a.createElement(O,null),n.a.createElement(T,null),n.a.createElement(L,null),n.a.createElement(P,null),n.a.createElement(_,null))},F=t(44),R=(t(123),function(e){var a=e.workID,t=Object(m.f)();return n.a.createElement("div",{className:"workItem"},n.a.createElement("img",{onClick:function(){t.push("/works/"+a)},className:"workImg",src:"/works/"+a+"-1.jpg"}))}),M=function(){return n.a.createElement("div",{style:{background:"#fff"}},n.a.createElement("div",{className:"worksWrapper"},n.a.createElement("div",{className:"vtextBlock"},n.a.createElement("h1",{style:{fontSize:"4.5rem"}}," WORKS"),n.a.createElement("br",null),n.a.createElement("h3",null," \u5b9f\u7e3e"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"vLine"},n.a.createElement(x,{len:80})),n.a.createElement("div",{className:"worksSpacer"}," "))),n.a.createElement("div",{className:"worksMap"},F.map((function(e,a){return n.a.createElement(R,{workID:e.id})}))))},D=t(89),J=t.n(D);function U(e){return void 0===e||null==e||e.length<=0}var H=t(90),K=t.n(H),q=(t(211),function(){var e=Object(l.useState)(""),a=Object(o.a)(e,2),t=a[0],r=a[1],c=parseInt(window.location.href.split("/").slice(-1)[0]),m=F.filter((function(e,a){if(c===a+1)return!0}));return Object(l.useEffect)((function(){var e="/works/"+c.toString()+".md";!U(m)&&K.a.get(e,{}).then((function(e){r(e.data)})).catch((function(e){return console.log("error article")}))}),[]),n.a.createElement("div",null,n.a.createElement("div",{className:"worksWrapper"},n.a.createElement("div",{className:"vtextBlock"},n.a.createElement("h3",null,"WORKS"),n.a.createElement("br",null),!U(m)&&n.a.createElement("h1",{style:{fontSize:"3.0rem"}}," ",m[0].title),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"vLine"},n.a.createElement(x,{len:80})),n.a.createElement("div",{className:"markdownText"},n.a.createElement(J.a,{source:t})),n.a.createElement("div",{className:"worksSpacer"}," "))))}),V=(t(212),function(){return n.a.createElement("div",{style:{background:"#fff"}},n.a.createElement("div",{className:"orderWrapper"},n.a.createElement("div",{className:"vtextBlock"},n.a.createElement("h1",{style:{fontSize:"4.5rem"}}," order"),n.a.createElement("br",null),n.a.createElement("h3",null,"\u4f9d\u983c\u65b9\u6cd5"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"vLine"},n.a.createElement(x,{len:80})),n.a.createElement("div",{className:"orderSpacer"}," "))),n.a.createElement("div",{className:"orderText"},n.a.createElement("h3",null," \u5236\u4f5c\u306b\u3042\u305f\u308a\u4e8b\u524d\u306b\u3054\u7528\u610f\u9802\u304f\u3082\u306e\u3084\u6ce8\u610f\u4e8b\u9805\u306b\u3064\u3044\u3066\u307e\u3068\u3081\u3066\u3044\u307e\u3059\u3002"),n.a.createElement("h3",null," \u3054\u4f9d\u983c\u3055\u308c\u308b\u969b\u306b\u306f\u3054\u78ba\u8a8d\u9802\u3044\u305f\u4e0a\u3067\u5f53\u30b5\u30a4\u30c8\u3088\u308a\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002"),n.a.createElement("div",{className:"orderSpacer"}," "),n.a.createElement("div",{className:"orderSpacer"}," "),n.a.createElement("h1",{style:{fontSize:"3.0rem",textAlign:"center"}}," \u3054\u4f9d\u983c\u6642\u306b\u7528\u610f\u9802\u304f\u3082\u306e"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"vLine"},n.a.createElement(x,{len:80})),n.a.createElement("h3",{style:{textAlign:"center"}},"\u304a\u898b\u7a4d\u308a\u306e\u969b\u306b\u306f\u4ee5\u4e0b\u60c5\u5831\u3092\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002"),n.a.createElement("div",{className:"orderSpacer"}," ")),n.a.createElement("div",{className:"orderBlock"},n.a.createElement("h3",null," 1.\u3054\u4f9d\u983c\u5185\u5bb9\uff08\u65b0\u898f\u30b5\u30a4\u30c8\u30fb\u30ea\u30cb\u30e5\u30fc\u30a2\u30eb\u30fb\u30ed\u30b4\u5236\u4f5c\u306a\u3069\uff09"),n.a.createElement("h3",null,"2.\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\uff08\u5e0c\u671b\u7d0d\u671f\uff09"),n.a.createElement("h3",null,"3.\u3054\u4e88\u7b97"),n.a.createElement("h3",null,"4.\u30da\u30fc\u30b8\u6570"),n.a.createElement("h3",null,"5.CMS\u306e\u69cb\u7bc9\u5fc5\u8981\u6709\u7121"),n.a.createElement("h3",null,"6.\u30ed\u30b4\u3001\u30d0\u30ca\u30fc\u65b0\u898f\u4f5c\u6210\u306e\u5fc5\u8981\u6709\u7121"),n.a.createElement("h3",null,"7.\u539f\u7a3f\u3084\u7d20\u6750\u306e\u6e96\u5099\u72b6\u6cc1"),n.a.createElement("h3",null,"8.\u30b5\u30fc\u30d0\u30fc\u3001\u30c9\u30e1\u30a4\u30f3\u306e\u53d6\u5f97\u72b6\u6cc1"),n.a.createElement("h3",null,"9.\u4e0d\u5b89\u306a\u70b9\u3084\u73fe\u5728\u304a\u56f0\u308a\u306e\u70b9\u306a\u3069")),n.a.createElement("div",{className:"orderSpacer"}," "),n.a.createElement("div",{className:"orderText"},n.a.createElement("h3",{style:{textAlign:"center"}},"\u307e\u305f\u4ee5\u4e0b\u7d20\u6750\u7b49\u3092\u3042\u3089\u304b\u3058\u3081\u3054\u6e96\u5099\u304a\u9858\u3044\u3057\u307e\u3059\u3002")),n.a.createElement("div",{className:"orderSpacer"}," "),n.a.createElement("div",{className:"orderBlock"},n.a.createElement("h3",null,"\u30fb\u30c6\u30ad\u30b9\u30c8\u539f\u7a3f"),n.a.createElement("h3",null," \u6587\u7ae0\u3092\u305d\u306e\u307e\u307e\u30b3\u30d4\u30fc\u3067\u304d\u308b\u3088\u3046\u3001\u30d7\u30ec\u30fc\u30f3\u30c6\u30ad\u30b9\u30c8\u3067\u3054\u7528\u610f\u304f\u3060\u3055\u3044\u3002"),n.a.createElement("br",null),n.a.createElement("h3",null,"\u30fb\u753b\u50cf"),n.a.createElement("h3",null,"\u4f7f\u7528\u3057\u305f\u3044\u5199\u771f\u3001\u753b\u50cf\u304c\u3042\u308b\u5834\u5408\u306f\u3054\u7528\u610f\u304f\u3060\u3055\u3044\u3002"),n.a.createElement("h3",null,"\u753b\u50cf\u306e\u3054\u7528\u610f\u304c\u306a\u3044\u5834\u5408\u306f\u3053\u3061\u3089\u3067\u7528\u610f\u3059\u308b\u3053\u3068\u3082\u53ef\u80fd\u3067\u3059\u3002"),n.a.createElement("br",null),n.a.createElement("h3",null,"\u30fb\u30ed\u30b4\u30c7\u30fc\u30bf"),n.a.createElement("h3",null,"\u4f1a\u793e\u30ed\u30b4\u306a\u3069\u304c\u5b58\u5728\u3059\u308b\u5834\u5408\u306f\u30ed\u30b4\u30c7\u30fc\u30bf\u3092\u3054\u7528\u610f\u304f\u3060\u3055\u3044\u3002\u30d5\u30a1\u30a4\u30eb\u5f62\u5f0f\u306f\u30d9\u30af\u30bf\u30fc\u30c7\u30fc\u30bf\uff08AI\u3001EPS\u3001PDF\u5f62\u5f0f\uff09\u306b\u3066\u3054\u7528\u610f\u304a\u9858\u3044\u81f4\u3057\u307e\u3059\u3002")),n.a.createElement("div",{className:"orderSpacer"}," "),n.a.createElement("div",{className:"orderText"},n.a.createElement("h1",{style:{fontSize:"3.0rem",textAlign:"center"}}," \u5236\u4f5c\u5de5\u7a0b"),n.a.createElement("div",{className:"vLine"},n.a.createElement(x,{len:80})),n.a.createElement("br",null),n.a.createElement("h3",null,"\u4e0b\u8a18\u306f\u4e00\u822c\u7684\u306a\u5de5\u7a0b\u3067\u3042\u308a\u3001\u5b9f\u969b\u306e\u5de5\u7a0b\u306f\u30b5\u30a4\u30c8\u306b\u3088\u308a\u5909\u308f\u308b\u4e8b\u304c\u3042\u308a\u307e\u3059\u3002")),n.a.createElement("div",{className:"orderSpacer"}," "),n.a.createElement("div",{className:"orderBlock"},n.a.createElement("h3",{style:{textAlign:"center"}},"1.\u3054\u76f8\u8ac7\u3001\u304a\u898b\u7a4d\u308a\u306e\u63d0\u793a"),n.a.createElement("br",null),n.a.createElement("h3",{style:{textAlign:"center"}},"\u2193 "),n.a.createElement("br",null),n.a.createElement("h3",{style:{textAlign:"center"}},"2.\u6b63\u5f0f\u767a\u6ce8"),n.a.createElement("br",null),n.a.createElement("h3",{style:{textAlign:"center"}},"\u2193 "),n.a.createElement("br",null),n.a.createElement("h3",{style:{textAlign:"center"}},"3.\u30d2\u30a2\u30ea\u30f3\u30b0\u30fb\u539f\u7a3f\u6e96\u5099"),n.a.createElement("br",null),n.a.createElement("h3",{style:{textAlign:"center"}},"\u2193 "),n.a.createElement("br",null),n.a.createElement("h3",{style:{textAlign:"center"}},"4.\u30ef\u30a4\u30e4\u30fc\u30d5\u30ec\u30fc\u30e0\u5236\u4f5c"),n.a.createElement("br",null),n.a.createElement("h3",{style:{textAlign:"center"}},"\u2193 "),n.a.createElement("br",null),n.a.createElement("h3",{style:{textAlign:"center"}},"5.\u30c7\u30b6\u30a4\u30f3\u30ab\u30f3\u30d7\u5236\u4f5c"),n.a.createElement("br",null),n.a.createElement("h3",{style:{textAlign:"center"}},"\u2193 "),n.a.createElement("br",null),n.a.createElement("h3",{style:{textAlign:"center"}},"6.\u30b3\u30fc\u30c7\u30a3\u30f3\u30b0\u4f5c\u696d"),n.a.createElement("br",null),n.a.createElement("h3",{style:{textAlign:"center"}},"\u2193 "),n.a.createElement("br",null),n.a.createElement("h3",{style:{textAlign:"center"}},"7.\u6700\u7d42\u30c1\u30a7\u30c3\u30af\u30fb\u4fee\u6b63"),n.a.createElement("br",null),n.a.createElement("h3",{style:{textAlign:"center"}},"\u2193 "),n.a.createElement("br",null),n.a.createElement("h3",{style:{textAlign:"center"}},"8.\u7d0d\u54c1")),n.a.createElement("div",{className:"orderSpacer"}," "),n.a.createElement("div",{className:"orderText"},n.a.createElement("h1",{style:{fontSize:"3.0rem",textAlign:"center"}}," \u6ce8\u610f\u4e8b\u9805"),n.a.createElement("div",{className:"vLine"},n.a.createElement(x,{len:80})),n.a.createElement("br",null)),n.a.createElement("div",{className:"orderBlock"},n.a.createElement("h3",null," \u30fb\u5236\u4f5c\u306b\u95a2\u3059\u308b\u3084\u308a\u53d6\u308a\u306f\u57fa\u672c\u7684\u306b\u30e1\u30fc\u30eb\u3001\u96fb\u8a71\u3001\u30d3\u30c7\u30aa\u4f1a\u8b70\u306e\u3044\u305a\u308c\u304b\u3068\u3055\u305b\u3066\u9802\u3044\u3066\u304a\u308a\u307e\u3059\u304c\u3001\u76f4\u63a5\u30b3\u30df\u30e5\u30cb\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u3068\u308b\u5fc5\u8981\u304c\u3042\u308b\u3068\u5224\u65ad\u3057\u305f\u5834\u5408\u306b\u306f\u5bfe\u9762\u3067\u306e\u6253\u3061\u5408\u308f\u305b\u3082\u5bfe\u5fdc\u3055\u305b\u3066\u9802\u304d\u307e\u3059\u3002"),n.a.createElement("br",null),n.a.createElement("h3",null," \u30fb\u7d0d\u671f\u3001\u4f5c\u696d\u5185\u5bb9\u306b\u3088\u3063\u3066\u306f\u3054\u4f9d\u983c\u3092\u304a\u65ad\u308a\u3059\u308b\u3053\u3068\u3082\u3054\u3056\u3044\u307e\u3059\u306e\u3067\u4e88\u3081\u3054\u4e86\u627f\u304f\u3060\u3055\u3044\u3002"),n.a.createElement("br",null),n.a.createElement("h3",null," \u30fb\u539f\u7a3f\u3001\u30b3\u30d4\u30fc\u306e\u4f5c\u6210\u306b\u3064\u3044\u3066\u306f\u627f\u3063\u3066\u304a\u308a\u307e\u305b\u3093\u3002\u6b63\u5f0f\u767a\u6ce8\u307e\u3067\u306b\u3054\u4f9d\u983c\u8005\u69d8\u306b\u3066\u539f\u7a3f\u306e\u3054\u6e96\u5099\u3092\u304a\u9858\u3044\u81f4\u3057\u307e\u3059\u3002"),n.a.createElement("br",null),n.a.createElement("h3",null," \u30fb\u30b5\u30a4\u30c8\u5236\u4f5c\u3067\u306f\u30c1\u30a7\u30c3\u30af\u4f5c\u696d\u3001\u539f\u7a3f\u4f5c\u6210\u3001\u30d2\u30a2\u30ea\u30f3\u30b0\u306a\u3069\u3001\u304a\u5ba2\u69d8\u306b\u3082\u5de5\u6570\u304c\u767a\u751f\u3059\u308b\u3053\u3068\u304c\u4e88\u60f3\u3055\u308c\u307e\u3059\u3002\u30b9\u30e0\u30fc\u30ba\u306b\u5236\u4f5c\u3092\u9032\u3081\u308b\u305f\u3081\u306b\u3082\u3042\u3089\u304b\u3058\u3081\u30b9\u30b1\u30b8\u30e5\u30fc\u30eb\u306e\u78ba\u4fdd\u3092\u304a\u9858\u3044\u81f4\u3057\u307e\u3059\u3002")),n.a.createElement("div",{className:"orderSpacer"}," "))}),G=(t(213),function(){return n.a.createElement("div",{style:{background:"#fff"}},n.a.createElement("div",{className:"aboutWrapper"},n.a.createElement("div",{className:"vtextBlock"},n.a.createElement("h1",{style:{fontSize:"4.5rem"}}," about"),n.a.createElement("br",null),n.a.createElement("h3",null," \u5b9f\u7e3e"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"vLine"},n.a.createElement(x,{len:80})),n.a.createElement("div",{className:"aboutSpacer"}," "))),n.a.createElement("div",{className:"aboutTableWrapper"},n.a.createElement("div",{className:"aboutTable"},n.a.createElement("h3",null," \u540d\u524d"),n.a.createElement("div",{className:"aboutTableCol"},n.a.createElement("p",null," \u9234\u6728\u3000\u96c4\u592a")),n.a.createElement("br",null),n.a.createElement("h3",null," \u4e8b\u52d9\u6240\u6240\u5728\u5730"),n.a.createElement("div",{className:"aboutTableCol"},n.a.createElement("p",null," \u6771\u4eac\u90fd\u54c1\u5ddd\u533a")),n.a.createElement("br",null),n.a.createElement("h3",null,"\u5f62\u614b"),n.a.createElement("div",{className:"aboutTableCol"},n.a.createElement("p",null,"\u500b\u4eba\u4e8b\u696d\u4e3b")),n.a.createElement("br",null),n.a.createElement("h3",null,"\u9023\u7d61\u5148"),n.a.createElement("div",{className:"aboutTableCol"},n.a.createElement("p",null,"weights.transaction.app@gmail.com")),n.a.createElement("br",null),n.a.createElement("h3",null,"\u4e8b\u696d\u5185\u5bb9"),n.a.createElement("div",{className:"aboutTableCol"},n.a.createElement("p",null,"\u30a6\u30a7\u30d6\u30b5\u30a4\u30c8\u5236\u4f5c\u3001\u30a2\u30d7\u30ea\u5236\u4f5c\u3001\u30c7\u30b6\u30a4\u30f3\u5236\u4f5c\u3001\u4ed6")))),n.a.createElement("div",{className:"aboutSpacer"}," "),n.a.createElement("div",{className:"aboutSpacer"}," "))}),Y=t(239),Q=(t(214),function(){return n.a.createElement("div",{style:{background:"#fff"}},n.a.createElement("div",{className:"contactPageWrapper"},n.a.createElement("div",{className:"vtextBlock"},n.a.createElement("h1",{style:{fontSize:"4.5rem"}}," contact"),n.a.createElement("br",null),n.a.createElement("h3",null,"\u4f9d\u983c\u65b9\u6cd5"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("div",{className:"vLine"},n.a.createElement(x,{len:80})),n.a.createElement("div",{className:"contactPageSpacer"}," ")),n.a.createElement("div",{className:"contactPageText"},n.a.createElement("h3",{style:{textAlign:"center"}},"\u5236\u4f5c\u306e\u3054\u4f9d\u983c\u30fb\u3054\u76f8\u8ac7\u306a\u3069\u304a\u6c17\u8efd\u306b\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002"),n.a.createElement("h3",{style:{textAlign:"center"}},"1\u55b6\u696d\u65e5\u4ee5\u5185\u306b\u3053\u3061\u3089\u304b\u3089\u3054\u9023\u7d61\u3055\u305b\u3066\u9802\u304d\u307e\u3059\u3002"),n.a.createElement("div",{className:"contactPageSpacer"}," "),n.a.createElement(Y.a,{variant:"contained",color:"primary",target:"_blank",href:"https://forms.gle/zGPiqE7n4FbUeyJr8"},"Contact"),n.a.createElement("div",{className:"contactPageSpacer"}," "))))}),X=(t(215),function(){var e=Object(m.g)();return Object(l.useEffect)((function(){}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"wrapper","data-test":"wrapper"},n.a.createElement(d,null)),n.a.createElement(i.a,{className:"router-wrapper"},n.a.createElement(s.a,{timeout:300,classNames:"fade",key:e.pathname},n.a.createElement(m.c,null,n.a.createElement(m.a,{exact:!0,path:"/",component:I}),n.a.createElement(m.a,{exact:!0,path:"/works",component:M}),n.a.createElement(m.a,{path:"/works/:id",component:q}),n.a.createElement(m.a,{exact:!0,path:"/order",component:V}),n.a.createElement(m.a,{exact:!0,path:"/about",component:G}),n.a.createElement(m.a,{exact:!0,path:"/contact",component:Q})))),n.a.createElement(B,null),n.a.createElement(k,null))});function Z(){var e=Object(m.g)().pathname;return Object(l.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var $=n.a.createElement(E.a,null,n.a.createElement(l.Suspense,{fallback:"loading"},n.a.createElement(Z,null),n.a.createElement(X,null)));c.a.render($,document.getElementById("root"))},30:function(e,a,t){},44:function(e){e.exports=JSON.parse('[{"id":"1","title":"EC\u30b5\u30a4\u30c8"},{"id":"2","title":"\u52d5\u753b\u6295\u7a3f\u578bSNS\u30a2\u30d7\u30ea"},{"id":"3","title":"\u30de\u30c3\u30c1\u30f3\u30b0\u30a2\u30d7\u30ea"},{"id":"4","title":"\u30c4\u30fc\u30eb"}]')},88:function(e,a,t){e.exports=t.p+"static/media/first.47febc2c.jpg"},97:function(e,a,t){e.exports=t(216)}},[[97,1,2]]]);