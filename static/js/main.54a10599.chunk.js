(this["webpackJsonpcollection-img"]=this["webpackJsonpcollection-img"]||[]).push([[0],{37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){},50:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(16),s=(c(37),c(38),c(12)),o=(c(39),c(9)),r=c(3),i=(c(40),c.p+"static/media/arrow.526845e8.svg"),l=c(1);function b(){var e=Object(a.useState)(1),t=Object(s.a)(e,2),c=t[0],n=t[1];function r(){c<5?n(c+1):5==c&&n(1)}Object(a.useEffect)((function(){var e=window.setInterval((function(){return r()}),15e3);return function(){return clearInterval(e)}}),[c]);var b=[1,2,3,4,5];return Object(l.jsxs)("div",{className:"homepage",children:[b.map((function(e){return Object(l.jsx)("div",{className:c==e?"homepage__tabs homepage__tabs_active":"homepage__tabs",id:"bg-".concat(e)},e)})),Object(l.jsx)("div",{className:"homepage__tabs homepage__tabs_active",id:"darkness"}),Object(l.jsxs)("div",{className:"homepage__content",children:[Object(l.jsx)("p",{className:"homepage__upper-title",children:"React creation"}),Object(l.jsx)("h2",{className:"homepage__title",children:"Image collection"}),Object(l.jsxs)("p",{className:"homepage__text",children:["This website was made with the help of react for showing junior (and maybe middle)",Object(l.jsx)("br",{}),"skills in frontend coding and creating"," ",Object(l.jsx)("span",{className:"homepage__text-span",children:"SPA"})," using react technologies"]}),Object(l.jsx)(o.b,{to:"/collection",className:"homepage__link",children:Object(l.jsx)("button",{className:"homepage__CTA",children:"Check images"})})]}),Object(l.jsxs)("div",{className:"homepage__tabs-btns",children:[Object(l.jsx)("button",{className:"homepage__btn",onClick:function(){c>1?n(c-1):1==c&&n(5)},children:Object(l.jsx)("img",{src:i,className:"homepage__arrow",id:"left"})}),Object(l.jsx)("div",{className:"homepage__points",children:b.map((function(e){return Object(l.jsx)("div",{className:c==e?"homepage__point homepage__point_active":"homepage__point",onClick:function(){return n(e)}},e)}))}),Object(l.jsx)("button",{className:"homepage__btn",onClick:r,children:Object(l.jsx)("img",{src:i,className:"homepage__arrow",id:"right"})})]})]})}c(50);var m,j=c(11),u=c(13),d=c.n(u),p=c(17),_=c(31),g=c.n(_);!function(e){e.FETCH_IMAGES="FETCH_IMAGES",e.FETCH_IMAGES_SUCCESS="FETCH_IMAGES_SUCCESS",e.FETCH_IMAGES_ERROR="FETCH_IMAGES_ERROR"}(m||(m={}));var h,O=j.c;function f(){var e=O((function(e){return e.images})),t=e.images,c=e.error,n=e.loaded,s=O((function(e){return e.sortedImages})),r=s.sorted,i=s.sortedImages,b=Object(j.b)();return Object(a.useEffect)((function(){b(function(){var e=Object(p.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:m.FETCH_IMAGES}),e.next=4,g.a.get("https://intense-cliffs-94475.herokuapp.com/images");case 4:return c=e.sent,t({type:m.FETCH_IMAGES_SUCCESS,payload:c.data.sort((function(e,t){return e.id-t.id}))}),e.abrupt("return",{images:c.data});case 9:e.prev=9,e.t0=e.catch(0),t({type:m.FETCH_IMAGES_ERROR});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(l.jsxs)("div",{className:"collection-page",children:[Object(l.jsxs)("div",{className:"collection-page__filters",children:[Object(l.jsx)("p",{className:"collection-page__filters-title",children:"Filters"}),Object(l.jsx)("div",{className:"collcetion-page__buttons",children:Object(l.jsx)("button",{className:r?"collection-page__button collection-page__button_active":"collection-page__button",onClick:function(){1==r?b({type:h.SORTED_IMAGES}):0==r&&b(function(e){return function(){var t=Object(p.a)(d.a.mark((function t(c){var a,n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:h.SORTED_IMAGES}),a=JSON.parse(JSON.stringify(e)),n=a.map((function(e){return{id:e.id,link:e.link,title:e.title,date:new Date(e.date)}})).sort((function(e,t){return t.date-e.date})),c({type:h.SORTED_IMAGES_SUCCESS,payload:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))},children:"New to old"})})]}),Object(l.jsxs)("div",{className:"collection-page__content",children:[Object(l.jsx)("h3",{className:"collection-page__content-title",children:"Images"}),Object(l.jsx)("div",{className:"collection-page__images",children:n?c?Object(l.jsxs)("div",{className:"collection-page__err",children:[Object(l.jsx)("p",{children:"Sorry, the connection is lost"}),Object(l.jsx)("button",{className:"collection-page__reload",onClick:function(){return window.location.reload()},children:"Reload"})]}):r?i.map((function(e){return Object(l.jsx)(o.b,{to:{pathname:"/collection/".concat(e.id),state:{item:e}},children:Object(l.jsx)("div",{className:"collection-page__card",style:{background:"url("+e.link+")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}})},e.id)})):t.map((function(e){return Object(l.jsx)(o.b,{to:{pathname:"/collection/".concat(e.id),state:{item:e}},children:Object(l.jsx)("div",{className:"collection-page__card",style:{background:"url("+e.link+")",backgroundSize:"cover",backgroundRepeat:"no-repeat"}})},e.id)})):Object(l.jsx)("p",{className:"collection-page__loading",children:"Loading..."})})]})]})}!function(e){e.SORTED_IMAGES="SORTED_IMAGES",e.SORTED_IMAGES_SUCCESS="SORTED_IMAGES_SUCCESS"}(h||(h={}));c(71);var x=c.p+"static/media/vk.f8937a21.svg",v=c.p+"static/media/telegram.746bb8a2.svg",S=c.p+"static/media/google.41100058.svg";function N(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1],r=Object(a.useRef)(null);return Object(l.jsxs)("div",{className:"about-page",children:[Object(l.jsxs)("div",{className:"about-page__content",children:[Object(l.jsxs)("p",{className:"about-page__text",children:["Hello, this is Pesochenski\u2019s small react pet-project, made for show some junior or middle",Object(l.jsx)("br",{}),"skills in frontend development.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"This small website is the part of Pesochenski\u2019s portfolio for",Object(l.jsx)("br",{}),"office(but of course not only) work.",Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),"Done with love to IT sphere. Thanks for whatching!"]}),Object(l.jsxs)("div",{className:"about-page__contacts",children:[Object(l.jsx)("button",{className:"about-page__site",children:Object(l.jsx)("a",{href:"https://t.me/pesochenski",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:v})})}),Object(l.jsx)("button",{className:"about-page__site",onClick:function(){null!==r.current&&(r.current.focus(),r.current.select(),document.execCommand("copy"),n(!0),setTimeout((function(){return n(!1)}),3e3))},children:Object(l.jsx)("img",{src:S})}),Object(l.jsx)("button",{className:"about-page__site",children:Object(l.jsx)("a",{href:"https://vk.com/pesochenski",target:"_blank",rel:"noreferrer",children:Object(l.jsx)("img",{src:x})})})]})]}),Object(l.jsx)("input",{ref:r,type:"email",className:"about-page__mail",value:"pesochenski.corp@gmail.com",readOnly:!0}),Object(l.jsx)("div",{className:c?"about-page__mail-copied about-page__mail-copied_active":"about-page__mail-copied",children:Object(l.jsx)("p",{className:"about-page__title-copied",children:"Email copied to clipboard"})}),Object(l.jsx)(o.b,{className:"about-page__link",to:"/",children:"Back to homepage"})]})}c(72);function E(){return Object(l.jsxs)("div",{className:"err-page",children:[Object(l.jsx)("p",{className:"err-page__err",children:"Error"}),Object(l.jsx)("p",{className:"err-page__404",children:"404"}),Object(l.jsx)("p",{className:"err-page__title",children:"Not found"}),Object(l.jsx)("p",{className:"err-page__text",children:"Try to check your internet connection"})]})}c(73);function k(){var e=Object(r.g)(),t=Object(r.f)(),c=e.state.item;return Object(l.jsx)("div",{className:"item-page",children:Object(l.jsxs)("div",{className:"item-page__content",children:[Object(l.jsxs)("div",{className:"item-page__main",children:[Object(l.jsx)("h3",{className:"item-page__title",children:c.title}),Object(l.jsx)("img",{className:"item-page__image",src:c.link,alt:"Image"})]}),Object(l.jsxs)("div",{className:"item-page__info",children:[Object(l.jsx)("p",{className:"item-page__text",children:"This item page shows some information about cards, including title of the image and ability to go back to the collection. So, you can test and estimate it."}),Object(l.jsx)("button",{className:"item-page__go-back",onClick:function(){return t.goBack()},children:"Go back"})]})]})})}function C(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),c=t[0],n=t[1];var i=[{name:"Home",path:"/",burger:{from:1,to:2}},{name:"Collection",path:"/collection",burger:{from:2,to:3}},{name:"About",path:"/about",burger:{from:3,to:1}}];return Object(l.jsxs)(o.a,{children:[Object(l.jsx)("nav",{className:c?"navbar navbar_active":"navbar",children:i.map((function(e){return Object(l.jsx)(o.c,{exact:!0,to:e.path,className:"navbar__link",activeClassName:"navbar__link_active",onClick:function(){return n(!1)},children:e.name},e.burger.from)}))}),Object(l.jsx)("button",{className:"burger",onClick:function(){n(0==c)},children:i.map((function(e){return Object(l.jsx)("div",{className:"burger__item burger__item-".concat(c?e.burger.to:e.burger.from)},e.burger.from)}))}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/",component:b}),Object(l.jsx)(r.a,{exact:!0,path:"/collection",component:f}),Object(l.jsx)(r.a,{path:"/about",component:N}),Object(l.jsx)(r.a,{path:"/collection/:id",component:k}),Object(l.jsx)(r.a,{path:"*",component:E})]})]})}var I=function(){return Object(l.jsx)(C,{})},T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,75)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),a(e),n(e),s(e),o(e)}))},y=c(15),w=c(32),R={images:[],loaded:!1,error:!1};var A={sortedImages:[],sorted:!1};var G=Object(y.b)({images:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.FETCH_IMAGES:return{images:[],loaded:!1,error:!1};case m.FETCH_IMAGES_SUCCESS:return{images:t.payload,loaded:!0,error:!1};case m.FETCH_IMAGES_ERROR:return{images:[],loaded:!0,error:!0};default:return e}},sortedImages:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h.SORTED_IMAGES:return{sortedImages:[],sorted:!e.sorted};case h.SORTED_IMAGES_SUCCESS:return{sortedImages:t.payload,sorted:!0};default:return e}}}),M=Object(y.c)(G,Object(y.a)(w.a));Object(n.render)(Object(l.jsx)(j.a,{store:M,children:Object(l.jsx)(I,{})}),document.getElementById("root")),T()}},[[74,1,2]]]);
//# sourceMappingURL=main.54a10599.chunk.js.map