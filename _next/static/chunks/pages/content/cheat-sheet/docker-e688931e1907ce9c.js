(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[604],{4802:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/cheat-sheet/docker",function(){return a(5401)}])},9583:function(e,n,a){"use strict";var t=a(5893);a(7294);n.Z=function(e){var n=e.name;return(0,t.jsx)("i",{className:n})}},449:function(e,n,a){"use strict";a.d(n,{Z:function(){return w}});var t=a(5893),r=a(7294),i=a(6704);var s=(new Date).getFullYear();function c(){var e;return e=s===i.Z.since?String(i.Z.since):"".concat(i.Z.since,"-").concat(s),"\u24b8 ".concat(e," ").concat(i.Z.fullName)}var o=function(){return(0,t.jsx)("footer",{children:(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:c()})})})},l=a(9008),u=a.n(l);var d=function(){return(0,t.jsx)(u(),{children:(0,t.jsx)("title",{children:"Kamaal Farah"})})},m=a(603),f=a(1664),h=a.n(f),p=a(1539),j=a(9583);var x=function(e){var n=e.className,a=(0,p.default)("divider",null!==n&&void 0!==n?n:"");return(0,t.jsx)("div",{className:a})};var v=function(e){var n=(0,m.Z)(r.useState(!1),2),a=n[0],t=n[1];return r.useEffect((function(){var n=function(){a!==r.matches&&t(r.matches)},r=window.matchMedia(e);return r.matches!==a&&t(r.matches),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[a,e]),a};function b(){var e=(0,m.Z)(r.useState(!1),2),n=e[0],a=e[1],s=v("(max-width: 770px)"),c=r.useCallback((function(){a(!n)}),[n]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"header",children:[(0,t.jsx)("div",{className:"home-link",children:(0,t.jsx)(h(),{href:"/",children:i.Z.fullName})}),(0,t.jsx)("div",{className:"menu-links",children:(0,t.jsx)(b.MenuItems,{showMobileLayout:s,dropDownMenuItemsAreVisible:n,onHamburgerClick:c})})]}),(0,t.jsx)(b.Dropdown,{isVisible:n&&s})]})}b.Dropdown=function(e){return e.isVisible?(0,t.jsxs)("div",{className:"dropdown-container",children:[(0,t.jsx)(x,{className:"animated-appearing"}),(0,t.jsx)("ul",{className:(0,p.default)("dropdown","animated-appearing"),children:i.Z.menuItems.map((function(e){var n=e.id,a=e.name,r=e.link;return(0,t.jsx)("li",{children:(0,t.jsx)(h(),{href:r,children:a})},n)}))}),(0,t.jsx)(x,{className:(0,p.default)("animated-appearing","no-margin-bottom")})]}):null},b.MenuItems=function(e){var n=e.showMobileLayout,a=e.dropDownMenuItemsAreVisible,r=e.onHamburgerClick;return n?(0,t.jsx)("button",{type:"button",className:"icon-link",onClick:r,children:(0,t.jsx)(j.Z,{name:(0,p.default)("fa","fa-bars","fa-fw","hamburger",{toggled:a})})}):(0,t.jsx)(t.Fragment,{children:i.Z.menuItems.map((function(e){var n=e.id,a=e.name,r=e.link;return(0,t.jsx)(h(),{href:r,children:a},n)}))})};var k=b;var w=function(e){var n=e.children,a=e.title;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d,{}),(0,t.jsx)(k,{}),(0,t.jsxs)("main",{children:[null!=a?(0,t.jsx)("h1",{className:"title",children:a}):null,n]}),(0,t.jsx)(o,{})]})}},6704:function(e,n){"use strict";n.Z={fullName:"Kamaal Farah",menuItems:[{id:"7845be0e-c294-48a4-9515-235d97b9ce83",link:"/projects",name:"Projects"},{id:"2f58ea56-1a22-4641-872f-873efb9b48fc",link:"/blogs",name:"Blogs"},{id:"e789b819-d7c0-480f-89a2-99c03c1151e8",link:"/cheat-sheet",name:"Cheat sheet"}],socials:[{id:"69f7f3ca-72a0-4feb-aa17-27da51e09351",icon:"fa fa-2x fa-github",name:"GitHub",url:"https://github.com/kamaal111/"},{id:"59083d8c-399a-49dd-be52-4e4031a14023",icon:"fa fa-2x fa-linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/kamaalfarah/"},{id:"62959d55-66a9-4212-8ded-33e817c88c50",icon:"fa fa-2x fa-apple",name:"App Store",url:"https://apps.apple.com/bj/developer/kamaal-farah/id1502158009/"}],since:2020,currentRoles:["Full Stack Software Engineer","iOS/macOS Developer"],contactEmail:"app.kamaal@gmail.com",lastUpdatedTermsAndConditions:"February 14th 2022"}},5401:function(e,n,a){"use strict";a.r(n);var t=a(5893),r=a(1151),i=a(449);function s(e){var n=Object.assign({p:"p",pre:"pre",code:"code"},(0,r.ah)(),e.components);return(0,t.jsxs)(i.Z,{title:"Docker",children:[(0,t.jsx)(n.p,{children:"To attach to running process on a docker container."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"hljs language-bash",children:"docker attach <CONTAINER_ID or CONTAINER_NAME>\n"})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,r.ah)(),e.components),a=n.wrapper;return a?(0,t.jsx)(a,Object.assign({},e,{children:(0,t.jsx)(s,e)})):s(e)}},1151:function(e,n,a){"use strict";a.d(n,{ah:function(){return i}});var t=a(7294);const r=t.createContext({});function i(e){const n=t.useContext(r);return t.useMemo((()=>"function"===typeof e?e(n):{...n,...e}),[n,e])}}},function(e){e.O(0,[570,774,888,179],(function(){return n=4802,e(e.s=n);var n}));var n=e.O();_N_E=n}]);