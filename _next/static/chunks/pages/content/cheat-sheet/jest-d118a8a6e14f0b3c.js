(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[780],{2331:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/cheat-sheet/jest",function(){return a(3122)}])},3602:function(e,n,a){"use strict";function t(e,n,a,t,r,i,s){try{var c=e[i](s),l=c.value}catch(o){return void a(o)}c.done?n(l):Promise.resolve(l).then(t,r)}function r(e){return function(){var n=this,a=arguments;return new Promise((function(r,i){var s=e.apply(n,a);function c(e){t(s,r,i,c,l,"next",e)}function l(e){t(s,r,i,c,l,"throw",e)}c(void 0)}))}}a.d(n,{Z:function(){return f}});var i=a(4051),s=a.n(i),c=a(5893),l=(a(7294),a(1539)),o=a(9583);function u(e){return d.apply(this,arguments)}function d(){return(d=r(s().mark((function e(n){var a,t,r,i,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=(i=null===(a=n.props)||void 0===a||null===(t=a.children)||void 0===t||null===(r=t.props)||void 0===r?void 0:r.children)){e.next=4;break}return e.abrupt("return");case 4:return c="string"===typeof i?i:i.map((function(e){var n,a;return"string"===typeof e?e:null!==(a=null===e||void 0===e||null===(n=e.props)||void 0===n?void 0:n.children)&&void 0!==a?a:""})).join(""),e.next=8,navigator.clipboard.writeText(c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=function(e){var n=e.children,a=e.enabled;return void 0===a||a?(0,c.jsxs)("div",{className:"copyable-code",children:[(0,c.jsx)("button",{type:"button",className:"copy-button",onClick:function(){var e=r(s().mark((function e(a){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,u(n);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),children:(0,c.jsx)(o.Z,{name:(0,l.default)("fa","fa-2x","fa-clipboard","copy-icon")})}),n]}):n}},9583:function(e,n,a){"use strict";var t=a(5893);a(7294);n.Z=function(e){var n=e.name;return(0,t.jsx)("i",{className:n})}},449:function(e,n,a){"use strict";a.d(n,{Z:function(){return g}});var t=a(5893),r=a(7294),i=a(6704);var s=(new Date).getFullYear();function c(){var e;return e=s===i.Z.since?String(i.Z.since):"".concat(i.Z.since,"-").concat(s),"\u24b8 ".concat(e," ").concat(i.Z.fullName)}var l=function(){return(0,t.jsx)("footer",{children:(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:c()})})})},o=a(9008),u=a.n(o);var d=function(){return(0,t.jsx)(u(),{children:(0,t.jsx)("title",{children:"Kamaal Farah"})})},f=a(603),h=a(1664),m=a.n(h),p=a(1539),v=a(9583);var x=function(e){var n=e.className,a=(0,p.default)("divider",null!==n&&void 0!==n?n:"");return(0,t.jsx)("div",{className:a})};var j=function(e){var n=(0,f.Z)(r.useState(!1),2),a=n[0],t=n[1];return r.useEffect((function(){var n=function(){a!==r.matches&&t(r.matches)},r=window.matchMedia(e);return r.matches!==a&&t(r.matches),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[a,e]),a};function b(){var e=(0,f.Z)(r.useState(!1),2),n=e[0],a=e[1],s=j("(max-width: 770px)"),c=r.useCallback((function(e){e.preventDefault(),a(!n)}),[n]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"header",children:[(0,t.jsx)("div",{className:"home-link",children:(0,t.jsx)(m(),{href:"/",children:i.Z.fullName})}),(0,t.jsx)("div",{className:"menu-links",children:(0,t.jsx)(b.MenuItems,{showMobileLayout:s,dropDownMenuItemsAreVisible:n,onHamburgerClick:c})})]}),(0,t.jsx)(b.Dropdown,{isVisible:n&&s})]})}b.Dropdown=function(e){return e.isVisible?(0,t.jsxs)("div",{className:"dropdown-container",children:[(0,t.jsx)(x,{className:"animated-appearing"}),(0,t.jsx)("ul",{className:(0,p.default)("dropdown","animated-appearing"),children:i.Z.menuItems.map((function(e){var n=e.id,a=e.name,r=e.link;return(0,t.jsx)("li",{children:(0,t.jsx)(m(),{href:r,children:a})},n)}))}),(0,t.jsx)(x,{className:(0,p.default)("animated-appearing","no-margin-bottom")})]}):null},b.MenuItems=function(e){var n=e.showMobileLayout,a=e.dropDownMenuItemsAreVisible,r=e.onHamburgerClick;return n?(0,t.jsx)("button",{type:"button",className:"icon-link",onClick:r,children:(0,t.jsx)(v.Z,{name:(0,p.default)("fa","fa-bars","fa-fw","hamburger",{toggled:a})})}):(0,t.jsx)(t.Fragment,{children:i.Z.menuItems.map((function(e){var n=e.id,a=e.name,r=e.link;return(0,t.jsx)(m(),{href:r,children:a},n)}))})};var w=b;var g=function(e){var n=e.children,a=e.title;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{}),(0,t.jsx)(w,{}),(0,t.jsxs)("main",{children:[null!=a?(0,t.jsx)("h1",{className:"title",children:a}):null,n]}),(0,t.jsx)(l,{})]})}},6704:function(e,n){"use strict";n.Z={fullName:"Kamaal Farah",menuItems:[{id:"7845be0e-c294-48a4-9515-235d97b9ce83",link:"/projects",name:"Projects"},{id:"2f58ea56-1a22-4641-872f-873efb9b48fc",link:"/blogs",name:"Blogs"},{id:"e789b819-d7c0-480f-89a2-99c03c1151e8",link:"/cheat-sheet",name:"Cheat sheet"}],socials:[{id:"69f7f3ca-72a0-4feb-aa17-27da51e09351",icon:"fa fa-2x fa-github",name:"GitHub",url:"https://github.com/kamaal111/"},{id:"59083d8c-399a-49dd-be52-4e4031a14023",icon:"fa fa-2x fa-linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/kamaalfarah/"},{id:"62959d55-66a9-4212-8ded-33e817c88c50",icon:"fa fa-2x fa-apple",name:"App Store",url:"https://apps.apple.com/bj/developer/kamaal-farah/id1502158009/"},{id:"2db4def3-38c9-43f6-8ee9-3f49800a0f0a",icon:"fa fa-2x fa-instagram",name:"Instagram",url:"https://www.instagram.com/_kamaalio/"}],since:2020,currentRoles:["Full Stack Software Engineer","iOS/macOS Developer"],contactEmail:"app.kamaal@gmail.com",lastUpdatedTermsAndConditions:"February 14th 2022"}},3122:function(e,n,a){"use strict";a.r(n);var t=a(5893),r=a(1151),i=a(449),s=a(3602);function c(e){var n=Object.assign({p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(i.Z,{title:"Jest",children:[(0,t.jsx)(n.p,{children:"Run a single test."}),(0,t.jsx)(s.Z,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"hljs language-shell",children:'jest -t "<test name>"\n'})})}),(0,t.jsx)(n.p,{children:"Watch tests."}),(0,t.jsx)(s.Z,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"hljs language-shell",children:"jest --watch\n"})})}),(0,t.jsx)(n.p,{children:"Run tests in files."}),(0,t.jsx)(s.Z,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"hljs language-shell",children:'jest "<filepath>"\n'})})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.ah)(),e.components),a=n.wrapper;return a?(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(c,e)})):c(e)}},1151:function(e,n,a){"use strict";a.d(n,{ah:function(){return i}});var t=a(7294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"===typeof e?e(n):{...n,...e}),[n,e])}}},function(e){e.O(0,[570,774,888,179],(function(){return n=2331,e(e.s=n);var n}));var n=e.O();_N_E=n}]);