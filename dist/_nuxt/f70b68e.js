(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{306:function(t,e,n){var content=n(312);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("30fa31d0",content,!0,{sourceMap:!1})},307:function(t,e,n){"use strict";n.r(e);n(19);var o={components:{Navigation:function(){return Promise.resolve().then(n.bind(null,315))}},data:function(){return{isSticky:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){var e=window.scrollY;t.isSticky=e>=200}))},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)},toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-section header-transparent",class:{"is-sticky":t.isSticky}},[n("div",{staticClass:"header-inner"},[n("div",{staticClass:"container position-relative"},[n("div",{staticClass:"row justify-content-between align-items-center"},[n("div",{staticClass:"col-xl-2 col-auto order-0"},[n("div",{staticClass:"header-logo"},[n("n-link",{attrs:{to:"/home-two"}},[n("img",{staticClass:"dark-logo",attrs:{src:"/images/logo/logo.png",alt:"Agency Logo"}}),t._v(" "),n("img",{staticClass:"light-logo",attrs:{src:"/images/logo/logo.png",alt:"Agency Logo"}})])],1)]),t._v(" "),n("div",{staticClass:"col-auto col-xl d-flex align-items-center justify-content-xl-center justify-content-end order-2 order-xl-1"},[n("div",{staticClass:"menu-column-area d-none d-xl-block position-static"},[n("Navigation")],1),t._v(" "),n("div",{staticClass:"header-mobile-menu-toggle d-xl-none ml-sm-2"},[n("button",{staticClass:"toggle",on:{click:function(e){return t.mobiletoggleClass("addClass","show-mobile-menu")}}},[n("i",{staticClass:"icon-top"}),t._v(" "),n("i",{staticClass:"icon-middle"}),t._v(" "),n("i",{staticClass:"icon-bottom"})])])])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navigation:n(315).default})},308:function(t,e,n){"use strict";n.r(e);n(19);var o={components:{MobileNavigation:function(){return Promise.resolve().then(n.bind(null,314))}},methods:{mobiletoggleClass:function(t,e){var n=document.querySelector("#offcanvas-menu");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup-mobile-menu popup-mobile-visiable",attrs:{id:"offcanvas-menu"}},[n("div",{staticClass:"mobile-menu-overlay",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}}),t._v(" "),n("div",{staticClass:"inner custom-scrollbar"},[n("div",{staticClass:"mobile-header"},[n("div",{staticClass:"logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"/images/logo/logo.png",alt:"site logo"}})])],1),t._v(" "),n("button",{staticClass:"mobile-close-btn",on:{click:function(e){return t.mobiletoggleClass("removeClass","show-mobile-menu")}}})]),t._v(" "),n("div",{staticClass:"menu-content"},[n("MobileNavigation")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MobileNavigation:n(314).default})},309:function(t,e,n){"use strict";n.r(e);var o={methods:{toggleClass:function(t,e){var n=document.querySelector("#search-popup");"addClass"===t?n.classList.add(e):n.classList.remove(e)}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-search-active",attrs:{id:"search-popup"}},[n("div",{staticClass:"sidebar-search-icon"},[n("button",{staticClass:"search-close",on:{click:function(e){return t.toggleClass("removeClass","search-popup-open")}}},[n("i",{staticClass:"pe-7s-close"})])]),t._v(" "),t._m(0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"sidebar-search-input"},[e("form",[e("div",{staticClass:"form-search"},[e("input",{staticClass:"input-text",attrs:{id:"search",value:"",placeholder:"",type:"search"}}),this._v(" "),e("button",[e("i",{staticClass:"fa fa-search"})])])]),this._v(" "),e("p",{staticClass:"form-description"},[this._v("Hit enter to search")])])}],!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);var footer=n(313),o={data:function(){return{footerData:footer}}},l=n(43),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer-section",style:{backgroundColor:"#030e22"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row section-padding pt-0 mtn-30"},[n("div",{staticClass:"col-md-4 col-sm-6 col-12 mt-30"},[n("div",{staticClass:"footer-widget"},[n("div",{staticClass:"footer-logo"},[n("n-link",{attrs:{to:"/"}},[n("img",{attrs:{src:t.footerData.footerAboutWidget.logoSrc,alt:"Logo"}})])],1),t._v(" "),n("div",{staticClass:"footer-widget-content"},[n("div",{staticClass:"content"},[n("p",[n("a",{attrs:{href:""}},[t._v(t._s(t.footerData.footerAboutWidget.location))])])]),t._v(" "),n("div",{staticClass:"footer-social-inline"},[n("a",{attrs:{href:t.footerData.footerAboutWidget.twitterUrl}},[n("i",{staticClass:"fab fa-twitter-square"})]),t._v(" "),n("a",{attrs:{href:t.footerData.footerAboutWidget.fbUrl}},[n("i",{staticClass:"fab fa-facebook-square"})]),t._v(" "),n("a",{attrs:{href:t.footerData.footerAboutWidget.instagramUrl}},[n("i",{staticClass:"fab fa-instagram"})])])])])]),t._v(" "),n("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-30"},[n("div",{staticClass:"footer-widget-content",staticStyle:{"margin-top":"4rem"}},[n("div",{staticClass:"content"},[n("p",[n("a",{attrs:{href:""}},[t._v(t._s(t.footerData.footerAboutWidget.pobox))])])])])]),t._v(" "),n("div",{staticClass:"col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 mt-30"},[n("div",{staticClass:"footer-widget-content",staticStyle:{"margin-top":"4rem"}},[n("div",{staticClass:"content"},[n("p",[n("a",{attrs:{href:"tel:+237 690 05 26 54"}},[t._v(t._s(t.footerData.footerAboutWidget.WhatsApp))])]),t._v(" "),n("p",[n("a",{attrs:{href:"mailto:hello@hasagency.com"}},[t._v(t._s(t.footerData.footerAboutWidget.email))])])])])])]),t._v(" "),t._m(0)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("p",{staticClass:"copyright"},[this._v("Copyright © 2021 "),e("a",{attrs:{href:"#"}},[this._v("RC3D")]),this._v(". All Rights Reserved.")])])])}],!1,null,null,null);e.default=component.exports},311:function(t,e,n){"use strict";n(306)},312:function(t,e,n){(e=n(44)(!1)).push([t.i,'.offcanvas-navigation ul{padding-left:0}.offcanvas-navigation ul li{border-bottom:1px solid hsla(0,0%,100%,.15)}.offcanvas-navigation ul li.menu-item-has-children .sub-menu{height:0;opacity:0;transition:.3s;visibility:hidden}.offcanvas-navigation ul li.menu-item-has-children.active>.sub-menu{height:100%;opacity:1;visibility:visible;padding-left:0}.offcanvas-navigation ul li a{color:#fff;font-size:16px;font-weight:500;padding:10px 0;display:block}.offcanvas-navigation ul li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu{margin-left:15px;transition:.4s}.offcanvas-navigation ul.sub-menu li{list-style:none;border:none}.offcanvas-navigation ul.sub-menu li a{color:#fff;font-weight:400}.offcanvas-navigation ul.sub-menu li a:hover{color:#1292ee}.offcanvas-navigation ul.sub-menu li .sub-menu li a{font-size:13px;padding:5px 0}.offcanvas-navigation ul li.menu-item-has-children{position:relative;display:block}.offcanvas-navigation ul li.menu-item-has-children a{display:inline-block}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children.active>.menu-expand i:before{transform:rotate(0)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand{top:5px;right:0;width:35px;height:35px;cursor:pointer;line-height:35px;position:absolute;text-align:center;background-color:hsla(0,0%,100%,.1)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand:hover{background-color:hsla(0,0%,100%,.2)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i{display:block;border-bottom:1px solid #fff;position:relative;width:10px;text-align:center;top:50%;left:50%;transform:translate(-50%,-50%)}.offcanvas-navigation ul li.menu-item-has-children .menu-expand i:before{width:100%;content:"";border-bottom:1px solid #fff;display:block;position:absolute;top:0;transform:rotate(90deg);transition:.4s}',""]),t.exports=e},313:function(t){t.exports=JSON.parse('{"footerAboutWidget":{"logoSrc":"/images/logo/logo.png","location":"Siège de RC3D : Cameroun-Yaoundé-Rue Montée Bastos","pobox":"BP : 35637 Tel: +237 243 008 581  / 665 869 997","WhatsApp":"+237 690 05 26 54","email":"contact@rc3d.org","fbUrl":"#","twitterUrl":"#","instagramUrl":"#"},"footerLinkTitleOne":"Services","navListOne":[{"navTitle":"Marketing","navUrl":"/"},{"navTitle":"SEO/SEM","navUrl":"/"},{"navTitle":"Development","navUrl":"/"},{"navTitle":"UX Design","navUrl":"/"}],"footerLinkTitleTwo":"Products","navListTwo":[{"navTitle":"Elementor Guru","navUrl":"/"},{"navTitle":"WooLentor Pro","navUrl":"/"},{"navTitle":"Plugins","navUrl":"/"},{"navTitle":"Page Builder","navUrl":"/"}],"footerLinkTitleThree":"About","navListThree":[{"navTitle":"Features","navUrl":"/"},{"navTitle":"Our Partners","navUrl":"/"},{"navTitle":"Affiliate Program","navUrl":"/"},{"navTitle":"Pricing","navUrl":"/"}],"footerLinkTitleFour":"Contact","navListFour":[{"navTitle":"Support Ticket","navUrl":"/"},{"navTitle":"Help Desk","navUrl":"/"},{"navTitle":"Live Chat","navUrl":"/"},{"navTitle":"FAQs","navUrl":"/"}]}')},314:function(t,e,n){"use strict";n.r(e);var o={name:"MobileNavMenu",mounted:function(){for(var t=document.querySelector("#offcanvas-navigation"),e=t.querySelectorAll(".sub-menu"),n=t.querySelectorAll("a"),i=0;i<e.length;i++)e[i].insertAdjacentHTML("beforebegin","<span class='menu-expand'><i></i></span>");for(var o=t.querySelectorAll(".menu-expand"),l=o.length,r=0;r<l;r++)o[r].addEventListener("click",(function(t){v(t)}));for(var c=0;c<n.length;c++)n[c].addEventListener("click",(function(){d()}));var v=function(t){t.currentTarget.parentElement.classList.toggle("active")},d=function(){document.querySelector("#offcanvas-mobile-menu").classList.remove("active")}}},l=(n(311),n(43)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mobile-navigation"},[n("nav",{staticClass:"offcanvas-navigation",attrs:{id:"offcanvas-navigation"}},[n("ul",[n("li",{},[n("n-link",{attrs:{to:"/"}},[t._v("Accueil")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/project"}},[t._v("Nos Réalision & archives")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Nos Programme et Services")])],1),t._v(" "),n("li",{},[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"#"}},[t._v(" Contexte et Justiification")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v(" A Propos")])],1)])])])}),[],!1,null,null,null);e.default=component.exports},315:function(t,e,n){"use strict";n.r(e);var o=n(43),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"site-main-menu"},[n("ul",[n("li",{},[n("n-link",{attrs:{to:"/home-two"}},[t._v("Accueil")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/about"}},[t._v(" A Propos")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/project"}},[t._v("Nos Réalision & archives")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"/service"}},[t._v("Nos Programme et Services")])],1),t._v(" "),n("li",[n("n-link",{attrs:{to:"#"}},[t._v(" Contexte et Justiification")])],1),t._v(" "),n("li",{},[n("n-link",{attrs:{to:"/contact-us"}},[t._v("Contact")])],1)])])}),[],!1,null,null,null);e.default=component.exports},317:function(t,e,n){"use strict";n.r(e);var o={props:["items","title","backgroundUrl"]},l=n(43),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-title-section section-padding-top bg-cover",style:{backgroundImage:"url("+this.backgroundUrl+")"},attrs:{"data-overlay":"0.7"}},[e("div",{staticClass:"page-title"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title"},[this._v(this._s(this.title))])])]),this._v(" "),e("div",{staticClass:"page-breadcrumb position-static"},[e("div",{staticClass:"container"},[e("b-breadcrumb",{staticClass:"page-breadcrumb",attrs:{items:this.items}})],1)])])}),[],!1,null,null,null);e.default=component.exports},327:function(t){t.exports=JSON.parse('[{"id":1,"imgSrc":"/images/project/2014.jpg","title":"Forum pour la Coopération Décentralisée et du Développement Durable édition 2014 Montréal-Canada"},{"id":2,"imgSrc":"/images/project/2016.jpg","title":"Forum pour la Coopération Décentralisée et du Développement Durable édition 2016 Montréal-Canada"},{"id":3,"imgSrc":"/images/project/2018.jpg","title":" Forum pour la Coopération Décentralisée et du Développement Durable édition 2018 Montréal-Canada"},{"id":4,"imgSrc":"/images/project/2021.jpg","title":" Forum pour la Coopération Décentralisée et du Développement Durable édition 2020 Montréal-Canada"}]')},333:function(t,e,n){"use strict";n.r(e);var o=n(327),l={data:function(){return{projectData:o}}},r=n(43),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-padding-t90-b100"},[n("div",{staticClass:"container"},[t._m(0),t._v(" "),n("div",{staticClass:"row row-cols-lg-3 row-cols-md-2 row-cols-1 mtn-30"},t._l(t.projectData,(function(e,o){return n("div",{key:o,staticClass:"col mt-30"},[n("div",{staticClass:"work"},[n("div",{staticClass:"thumbnail"},[n("n-link",{staticClass:"image",attrs:{to:"/project-details"}},[n("img",{attrs:{src:e.imgSrc,alt:e.title}})])],1),t._v(" "),n("div",{staticClass:"info"},[n("h3",{staticClass:"title"},[n("n-link",{attrs:{to:"/project-details"}},[t._v(t._s(e.title))])],1),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(e.desc))])])])])})),0),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title text-center",attrs:{"data-aos":"fade-up"}},[e("p",{staticClass:"title fz-32",staticStyle:{"font-size":"20px"}},[this._v("Le Réseau pour la Coopération Décentralisée et le Développement Durable (RC3D), dans le cadre de ses missions, s’est donné comme objectif de répondre aux besoins de formation des municipalités pour une meilleure efficacité dans l’action, c’est dans cette optique que nous mettons régulièrement sur pieds des forums pour faciliter et la cohésion et la mise en relation des organismes. Sur ceux, plusieurs forums ont été organisé jusqu’à nos jours à l'instar du ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"section-title text-center ",staticStyle:{"font-size":"20px","margin-top":"6rem"},attrs:{"data-aos":"fade-up"}},[e("h2",{staticClass:"title fz-32",staticStyle:{"font-size":"30px"}},[this._v("Nos Archives")]),this._v(" "),e("p",{staticClass:"title fz-32",staticStyle:{"font-size":"20px","margin-top":"1rem","font-weight":"300"}},[this._v("Le RC3D est une organisation à but non lucratif créée en 2014 qui met en exergue tous les acteurs de son réseau dans l’optique d’une collaboration avec un intérêt mutuel. Il s’agit en effet d’assurer le bon déroulement des missions qui favorisent la matérialisation des partenariats gagnant-gagnants. Notre mission principale est ainsi de promouvoir le développement et la décentralisation sur une stratégie participative qui inclut la formation, l’intégration et la promotion des organisations publiques, privées et de la société civile agissant dans le cadre de la décentralisation et de l’économie sociale.")])])}],!1,null,null,null);e.default=component.exports},342:function(t,e,n){"use strict";n.r(e);n(19);var o={components:{TheHeader:function(){return Promise.resolve().then(n.bind(null,307))},OffCanvasMobileMenu:function(){return Promise.resolve().then(n.bind(null,308))},SearchPopup:function(){return Promise.resolve().then(n.bind(null,309))},BreadcrumbOne:function(){return Promise.resolve().then(n.bind(null,317))},ProjectWrapper:function(){return Promise.resolve().then(n.bind(null,333))},CallToActionTwo:function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,352))},AboutFour:function(){return Promise.all([n.e(0),n.e(21)]).then(n.bind(null,320))},BrandLogoCarousel:function(){return n.e(19).then(n.bind(null,353))},FaqOne:function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,354))},TheFooter:function(){return Promise.resolve().then(n.bind(null,310))}},data:function(){return{items:[{text:"Home",to:"/"},{text:"Project",active:!0}]}},head:function(){return{title:"Project"}}},l=n(43),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-container"},[e("TheHeader"),this._v(" "),e("OffCanvasMobileMenu"),this._v(" "),e("SearchPopup"),this._v(" "),e("BreadcrumbOne",{attrs:{items:this.items,backgroundUrl:"/images/bg/header-prog.jpg"}}),this._v(" "),e("ProjectWrapper"),this._v(" "),e("TheFooter")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheHeader:n(307).default,OffCanvasMobileMenu:n(308).default,SearchPopup:n(309).default,BreadcrumbOne:n(317).default,ProjectWrapper:n(333).default,TheFooter:n(310).default})}}]);