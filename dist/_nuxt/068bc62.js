(window.webpackJsonp=window.webpackJsonp||[]).push([[14,28],{305:function(t,e,n){"use strict";n.r(e);n(10),n(11);var o=n(316),l=n.n(o),r={props:["addClassName","imgSrc","dataDepth"],mounted:function(){var t=document.querySelectorAll(".scene");t&&t.forEach((function(t,i){new l.a(t)}))}},c=n(43),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shape scene",class:this.addClassName},[e("span",{attrs:{"data-depth":this.dataDepth}},[e("img",{attrs:{src:this.imgSrc,alt:"shape image"}})])])}),[],!1,null,null,null);e.default=component.exports},306:function(t,e,n){var content=n(312);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("30fa31d0",content,!0,{sourceMap:!1})},307:function(t,e,n){"use strict";n.r(e);n(19);var o={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,315))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-section header-transparent",class:{"is-sticky":t.isSticky}},[n("div",{staticClass:"header-inner"},[n("div",{staticClass:"container position-relative"},[n("div",{staticClass:"row justify-content-between align-items-center"},[n("div",{staticClass:"col-xl-2 col-auto order-0"},[n("div",{staticClass:"header-logo"},[n("n-link",{attrs:{to:"/home-two"}},[n("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/logo.png",alt:"Agency Logo"}}),t._v(" "),n("img",{staticClass:"light-logo",attrs:{src:"/images/logo/logo.png",alt:"Agency Logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1"},[n("div",{staticClass:"menu-column-area d-none d-xl-block position-static"},[n("Navigation")],1),t._v(" "),n("div",{staticClass:"header-mobile-menu-toggle d-xl-none ml-sm-2"},[n("button",{staticClass:"toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[n("i",{staticClass:"icon-top"}),t._v(" "),n("i",{staticClass:"icon-middle"}),t._v(" "),n("i",{staticClass:"icon-bottom"})])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(315).default})},308:function(t,e,n){"use strict";n.r(e);n(19);var o={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,314))}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[n("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),n("div",{staticClass:"inner custom-scrollbar"},[n("div",{staticClass:"mobile-header"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/images/logo/logo.png",alt:"site logo"}})])],1),t._v(" "),n("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),n("div",{staticClass:"menu-content"},[n("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(314).default})},309:function(t,e,n){"use strict";n.r(e);var o={methods:{toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-search-active",attrs:{id:"search-popup"}},[n("div",{staticClass:"sidebar-search-icon"},[n("button",{staticClass:"search-close",on:{click:function(e){return t.toggleClass("removeClass","search-popup-open")}}},[n("i",{staticClass:"pe-7s-close"})])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-search-input"},[e("form",[e("div",{staticClass:"form-search"},[e("input",{staticClass:"input-text",attrs:{id:"search",value:"",placeholder:"",type:"search"}}),this._v(" "),e("button",[e("i",{staticClass:"fa fa-search"})])])]),this._v(" "),e("p",{staticClass:"form-description"},[this._v("Hit enter to search")])])}],!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);var footer=n(313),o={data:function(){return{footerData:footer}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-section",style:{backgroundColor:"#030e22"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row section-padding pt-0 mtn-30"},[n("div",{staticClass:"col-md-4 col-sm-6 col-12 mt-30"},[n("div",{staticClass:"footer-widget"},[n("div",{staticClass:"footer-logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:t.footerData.footerAboutWidget.logoSrc,alt:"Logo"}})])],1),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("div",{staticClass:"content"},[n("p",[n("a",{attrs:{href:""}},[t._v(t._s(t.footerData.footerAboutWidget.location))])])]),t._v(" "),n("div",{staticClass:"footer-social-inline"},[n("a",{attrs:{href:t.footerData.footerAboutWidget.twitterUrl}},[n("i",{staticClass:"fab fa-twitter-square"})]),t._v(" "),n("a",{attrs:{href:t.footerData.footerAboutWidget.fbUrl}},[n("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),n("a",{attrs:{href:t.footerData.footerAboutWidget.instagramUrl}},[n("i",{staticClass:"fab fa-instagram"})])])])])]),t._v(" "),n("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-30"},[n("div",{staticClass:"footer-widget-content",staticStyle:{"margin-top":"4rem"}},[n("div",{staticClass:"content"},[n("p",[n("a",{attrs:{href:""}},[t._v(t._s(t.footerData.footerAboutWidget.pobox))])])])])]),t._v(" "),n("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-30"},[n("div",{staticClass:"footer-widget-content",staticStyle:{"margin-top":"4rem"}},[n("div",{staticClass:"content"},[n("p",[n("a",{attrs:{href:"tel:+237 690 05 26 54"}},[t._v(t._s(t.footerData.footerAboutWidget.WhatsApp))])]),t._v(" "),n("p",[n("a",{attrs:{href:"mailto:hello@hasagency.com"}},[t._v(t._s(t.footerData.footerAboutWidget.email))])])])])])]),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("p",{staticClass:"copyright"},[this._v("Copyright © 2021 "),e("a",{attrs:{href:"#"}},[this._v("RC3D")]),this._v(". All Rights Reserved.")])])])}],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n(306)},312:function(t,e,n){(e=n(44)(!1)).push([t.i,'.offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:"";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}',""]),t.exports=e},313:function(t){t.exports=JSON.parse('{"footerAboutWidget":{"logoSrc":"/images/logo/logo.png","location":"Siège de RC3D : Cameroun-Yaoundé-Rue Montée Bastos","pobox":"BP : 35637 Tel: +237 243 008 581  / 665 869 997","WhatsApp":"+237 690 05 26 54","email":"contact@rc3d.org","fbUrl":"#","twitterUrl":"#","instagramUrl":"#"},"footerLinkTitleOne":"Services","navListOne":[{"navTitle":"Marketing","navUrl":"/"},{"navTitle":"SEO/SEM","navUrl":"/"},{"navTitle":"Development","navUrl":"/"},{"navTitle":"UX Design","navUrl":"/"}],"footerLinkTitleTwo":"Products","navListTwo":[{"navTitle":"Elementor Guru","navUrl":"/"},{"navTitle":"WooLentor Pro","navUrl":"/"},{"navTitle":"Plugins","navUrl":"/"},{"navTitle":"Page Builder","navUrl":"/"}],"footerLinkTitleThree":"About","navListThree":[{"navTitle":"Features","navUrl":"/"},{"navTitle":"Our Partners","navUrl":"/"},{"navTitle":"Affiliate Program","navUrl":"/"},{"navTitle":"Pricing","navUrl":"/"}],"footerLinkTitleFour":"Contact","navListFour":[{"navTitle":"Support Ticket","navUrl":"/"},{"navTitle":"Help Desk","navUrl":"/"},{"navTitle":"Live Chat","navUrl":"/"},{"navTitle":"FAQs","navUrl":"/"}]}')},314:function(t,e,n){"use strict";n.r(e);var o={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var o=t.querySelectorAll(".menu-expand"),l=o.length,r=0;r<l;r++)o[r].addEventListener("click",(function(t){v(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){d()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},d=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")}}},l=(n(311),n(43)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-navigation"},[n("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[n("ul",[n("li",{},[n("n-link",{attrs:{to:"/"}},[t._v("Accueil")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/project"}},[t._v("Nos Réalision & archives")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Nos Programme et Services")])],1),t._v(" "),n("li",{},[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"#"}},[t._v(" Contexte et Justiification")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v(" A Propos")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,n){"use strict";n.r(e);var o=n(43),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"site-main-menu"},[n("ul",[n("li",{},[n("n-link",{attrs:{to:"/home-two"}},[t._v("Accueil")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v(" A Propos")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/project"}},[t._v("Nos Réalision & archives")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Nos Programme et Services")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"#"}},[t._v(" Contexte et Justiification")])],1),t._v(" "),n("li",{},[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact")])],1)])])}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,n){"use strict";n.r(e);var o={props:["items","title","backgroundUrl"]},l=n(43),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title-section section-padding-top bg-cover",style:{backgroundImage:"url("+this.backgroundUrl+")"},attrs:{"data-overlay":"0.7"}},[e("div",{staticClass:"page-title"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))])])]),this._v(" "),e("div",{staticClass:"page-breadcrumb position-static"},[e("div",{staticClass:"container"},[e("b-breadcrumb",{staticClass:"page-breadcrumb",attrs:{items:this.items}})],1)])])}),[],!1,null,null,null);e.default=component.exports},319:function(t){t.exports=JSON.parse('[{"id":1,"title":"RENFORCEMENT DES CAPACITÉS","text":"Les Communes font face à un réel défi de développement des ressources humaines, gage de la performance. En effet un exécutif communal efficace et motivée est essentiel à la bonne gouvernance, à ","iconSrc":"/images/svg/linea/linea-basic-target.svg"},{"id":2,"title":"APPUI TECHNIQUE A LA PLANIFICATION, MATURATION ET EXECUTION DES PROJETS","text":"RC3D met son expertise au service d’appui des CTD à la mise en œuvre des diagnostics communautaires, ainsi que l’élaboration des plans de développement.","iconSrc":"/images/svg/linea/linea-basic-target.svg"},{"id":3,"title":"APPUI AU DÉVELOPPEMENT DES PARTENARIATS","text":"Dans l’optique de promouvoir le développement des Collectivités Territoriales Décentralisées (CTD), l’ONG internationale RC3D, avec le soutien de ses partenaires canadiens organise chaque année au Canada ","iconSrc":"/images/svg/linea/linea-basic-target.svg"},{"id":4,"title":"APPUI À L’INFORMATIQUE ET A LA COMMUNICATION","text":"Il s’agit ici de la Construction, mise à jour et maintenance des sites web dynamiques des organismes. Spécifiquement, c’est un vaste programme d’amélioration de la visibilité des communes et autres organisations locales sur le plan national et international.","iconSrc":"/images/svg/linea/linea-basic-target.svg"},{"id":5,"title":"APPUI A LA RESTRUCTURATION ET AU DEVELOPPEMENT DES ASSOCIATIONS LOCALES","text":"En vue d’un meilleur accompagnement des associations locales, nous contribuons à la conception du répertoire des associations et organisations à base communautaire au sein des Communes partenaires ; nous élaborons des plans stratégiques et manuels de procédures de gestion ; nous  Étudions et montons des projets associatifs","iconSrc":"/images/svg/linea/linea-basic-target.svg"}]')},321:function(t,e,n){"use strict";n.r(e);var o={props:["service","addClassName"]},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-box text-center",class:t.addClassName},[n("div",{staticClass:"icon"},[n("img",{staticClass:"svgInject",attrs:{src:t.service.iconSrc,alt:t.service.title}})]),t._v(" "),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v(t._s(t.service.title))]),t._v(" "),n("div",{staticClass:"desc"},[n("p",[t._v(t._s(t.service.text))])]),t._v(" "),n("n-link",{staticClass:"link",attrs:{to:"/project-details"}},[t._v("Learn More")])],1)])}),[],!1,null,null,null);e.default=component.exports},334:function(t,e,n){"use strict";n.r(e);n(19);var o=n(319),l={components:{ServiceItem:function(){return Promise.resolve().then(n.bind(null,321))},ShapeWithAnimation:function(){return Promise.resolve().then(n.bind(null,305))}},data:function(){return{serviceData:o}}},r=n(43),component=Object(r.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-padding-t90 section-padding-bottom"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 icon-box-shape-animation mtn-30"},[this._l(this.serviceData,(function(t,n){return e("div",{key:n,staticClass:"col mt-30",attrs:{"data-aos":"fade-up"}},[e("ServiceItem",{attrs:{service:t,addClassName:"box-border"}})],1)})),this._v(" "),e("ShapeWithAnimation",{attrs:{addClassName:"shape-1","data-depth":"1",imgSrc:"/images/shape-animation/video-shape-1.png"}})],2)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ServiceItem:n(321).default,ShapeWithAnimation:n(305).default})},343:function(t,e,n){"use strict";n.r(e);n(19);var o,l=n(0),r={components:(o={TheHeader:function(){return Promise.resolve().then(n.bind(null,307))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,308))},SearchPopup:function(){return Promise.resolve().then(n.bind(null,309))},BreadcrumbOne:function(){return Promise.resolve().then(n.bind(null,317))},ServiceWrapper:function(){return Promise.resolve().then(n.bind(null,334))},SuccessStory:function(){return n.e(29).then(n.bind(null,355))}},Object(l.a)(o,"ServiceWrapper",(function(){return n.e(30).then(n.bind(null,356))})),Object(l.a)(o,"AboutFour",(function(){return n.e(22).then(n.bind(null,320))})),Object(l.a)(o,"FunfactWithTitle",(function(){return n.e(27).then(n.bind(null,359))})),Object(l.a)(o,"ContactSectionTwo",(function(){return n.e(26).then(n.bind(null,357))})),Object(l.a)(o,"TheFooter",(function(){return Promise.resolve().then(n.bind(null,310))})),o),data:function(){return{items:[{text:"Home",to:"/"},{text:"Service",active:!0}]}},head:function(){return{title:"Service"}}},c=n(43),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-container"},[e("TheHeader"),this._v(" "),e("OffCanvasMobileMenu"),this._v(" "),e("SearchPopup"),this._v(" "),e("BreadcrumbOne",{attrs:{items:this.items,title:"We work with bold brands that we believe in",backgroundUrl:"/images/bg/headerservice.jpg"}}),this._v(" "),e("ServiceWrapper"),this._v(" "),e("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:n(307).default,OffCanvasMobileMenu:n(308).default,SearchPopup:n(309).default,BreadcrumbOne:n(317).default,ServiceWrapper:n(334).default,TheFooter:n(310).default})}}]);