(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{3089:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/blogs/swiftUIMacOSEditMode",function(){return s(5136)}])},9583:function(e,n,s){"use strict";var a=s(5893);s(7294);n.Z=function(e){var n=e.name;return(0,a.jsx)("i",{className:n})}},449:function(e,n,s){"use strict";s.d(n,{Z:function(){return b}});var a=s(5893),t=s(7294),i=s(6704);var r=(new Date).getFullYear();function l(){var e;return e=r===i.Z.since?String(i.Z.since):"".concat(i.Z.since,"-").concat(r),"\u24b8 ".concat(e," ").concat(i.Z.fullName)}var c=function(){return(0,a.jsx)("footer",{children:(0,a.jsx)("div",{children:(0,a.jsx)("p",{children:l()})})})},o=s(9008),d=s.n(o);var h=function(){return(0,a.jsx)(d(),{children:(0,a.jsx)("title",{children:"Kamaal Farah"})})},m=s(603),u=s(1664),j=s.n(u),p=s(1539),f=s(9583);var x=function(e){var n=e.className,s=(0,p.default)("divider",null!==n&&void 0!==n?n:"");return(0,a.jsx)("div",{className:s})};var w=function(e){var n=(0,m.Z)(t.useState(!1),2),s=n[0],a=n[1];return t.useEffect((function(){var n=function(){s!==t.matches&&a(t.matches)},t=window.matchMedia(e);return t.matches!==s&&a(t.matches),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[s,e]),s};function v(){var e=(0,m.Z)(t.useState(!1),2),n=e[0],s=e[1],r=w("(max-width: 770px)"),l=t.useCallback((function(){s(!n)}),[n]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"header",children:[(0,a.jsx)("div",{className:"home-link",children:(0,a.jsx)(j(),{href:"/",children:i.Z.fullName})}),(0,a.jsx)("div",{className:"menu-links",children:(0,a.jsx)(v.MenuItems,{showMobileLayout:r,dropDownMenuItemsAreVisible:n,onHamburgerClick:l})})]}),(0,a.jsx)(v.Dropdown,{isVisible:n&&r})]})}v.Dropdown=function(e){return e.isVisible?(0,a.jsxs)("div",{className:"dropdown-container",children:[(0,a.jsx)(x,{className:"animated-appearing"}),(0,a.jsx)("ul",{className:(0,p.default)("dropdown","animated-appearing"),children:i.Z.menuItems.map((function(e){var n=e.id,s=e.name,t=e.link;return(0,a.jsx)("li",{children:(0,a.jsx)(j(),{href:t,children:s})},n)}))}),(0,a.jsx)(x,{className:(0,p.default)("animated-appearing","no-margin-bottom")})]}):null},v.MenuItems=function(e){var n=e.showMobileLayout,s=e.dropDownMenuItemsAreVisible,t=e.onHamburgerClick;return n?(0,a.jsx)("button",{type:"button",className:"icon-link",onClick:t,children:(0,a.jsx)(f.Z,{name:(0,p.default)("fa","fa-bars","fa-fw","hamburger",{toggled:s})})}):(0,a.jsx)(a.Fragment,{children:i.Z.menuItems.map((function(e){var n=e.id,s=e.name,t=e.link;return(0,a.jsx)(j(),{href:t,children:s},n)}))})};var N=v;var b=function(e){var n=e.children,s=e.title;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{}),(0,a.jsx)(N,{}),(0,a.jsxs)("main",{children:[null!=s?(0,a.jsx)("h1",{className:"title",children:s}):null,n]}),(0,a.jsx)(c,{})]})}},6704:function(e,n){"use strict";n.Z={fullName:"Kamaal Farah",menuItems:[{id:"7845be0e-c294-48a4-9515-235d97b9ce83",link:"/projects",name:"Projects"},{id:"2f58ea56-1a22-4641-872f-873efb9b48fc",link:"/blogs",name:"Blogs"}],socials:[{id:"69f7f3ca-72a0-4feb-aa17-27da51e09351",icon:"fa fa-2x fa-github",name:"GitHub",url:"https://github.com/kamaal111/"},{id:"59083d8c-399a-49dd-be52-4e4031a14023",icon:"fa fa-2x fa-linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/kamaalfarah/"},{id:"62959d55-66a9-4212-8ded-33e817c88c50",icon:"fa fa-2x fa-apple",name:"App Store",url:"https://apps.apple.com/bj/developer/kamaal-farah/id1502158009/"}],since:2020,currentRoles:["Full Stack Software Engineer","iOS/macOS Developer"],contactEmail:"app.kamaal@gmail.com",lastUpdatedTermsAndConditions:"February 14th 2022"}},5136:function(e,n,s){"use strict";s.r(n);var a=s(5893),t=s(1151),i=s(449);function r(e){var n=Object.assign({p:"p",code:"code",h2:"h2",pre:"pre",span:"span"},(0,t.ah)(),e.components);return(0,a.jsxs)(i.Z,{title:"SwiftUI macOS Edit Mode",children:[(0,a.jsxs)(n.p,{children:["So I really wanted to have the same ",(0,a.jsx)(n.code,{children:"EditButton"})," when we develop our iOS apps in SwiftUI.\nTo reuse as much as possible between both platforms I got motivated to make my own implementation of\nof the ",(0,a.jsx)(n.code,{children:"EditButton"}),"."]}),(0,a.jsx)(n.h2,{children:"iOS EditMode usage"}),(0,a.jsx)(n.p,{children:"This is what we want to implement for macOS."}),(0,a.jsx)(n.pre,{children:(0,a.jsxs)(n.code,{className:"hljs language-swift",children:[(0,a.jsx)(n.span,{className:"hljs-keyword",children:"struct"})," ",(0,a.jsx)(n.span,{className:"hljs-title class_",children:"ContentView"}),": ",(0,a.jsx)(n.span,{className:"hljs-title class_",children:"View"})," {\n    ",(0,a.jsx)(n.span,{className:"hljs-comment",children:"/// Environment key to get the current "}),"\n    ",(0,a.jsx)(n.span,{className:"hljs-comment",children:"/// EditMode state"}),"\n    ",(0,a.jsx)(n.span,{className:"hljs-meta",children:"@Environment"}),"(\\.editMode) ",(0,a.jsx)(n.span,{className:"hljs-keyword",children:"var"})," editMode: ",(0,a.jsx)(n.span,{className:"hljs-type",children:"EditMode"}),"\n\n    ",(0,a.jsx)(n.span,{className:"hljs-keyword",children:"var"})," body: ",(0,a.jsx)(n.span,{className:"hljs-keyword",children:"some"})," ",(0,a.jsx)(n.span,{className:"hljs-type",children:"View"})," {\n        ",(0,a.jsx)(n.span,{className:"hljs-comment",children:"/// Button to toggle the edit mode"}),"\n        ",(0,a.jsx)(n.span,{className:"hljs-type",children:"EditButton"}),"()\n    }\n}\n"]})}),(0,a.jsx)(n.h2,{children:"EditMode model"}),(0,a.jsxs)(n.p,{children:["Let's first start of with implementing the ",(0,a.jsx)(n.code,{children:"EditMode"})," model."]}),(0,a.jsx)(n.pre,{children:(0,a.jsxs)(n.code,{className:"hljs language-swift",children:[(0,a.jsx)(n.span,{className:"hljs-keyword",children:"enum"})," ",(0,a.jsx)(n.span,{className:"hljs-title class_",children:"EditMode"})," {\n    ",(0,a.jsx)(n.span,{className:"hljs-keyword",children:"case"})," active\n    ",(0,a.jsx)(n.span,{className:"hljs-keyword",children:"case"})," inactive\n\n    ",(0,a.jsx)(n.span,{className:"hljs-keyword",children:"var"})," isEditing: ",(0,a.jsx)(n.span,{className:"hljs-type",children:"Bool"})," {\n        ",(0,a.jsx)(n.span,{className:"hljs-keyword",children:"self"})," ",(0,a.jsx)(n.span,{className:"hljs-operator",children:"=="})," .active\n    }\n}\n"]})})]})}n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object.assign({},(0,t.ah)(),e.components),s=n.wrapper;return s?(0,a.jsx)(s,Object.assign({},e,{children:(0,a.jsx)(r,e)})):r(e)}},1151:function(e,n,s){"use strict";s.d(n,{ah:function(){return i}});var a=s(7294);const t=a.createContext({});function i(e){const n=a.useContext(t);return a.useMemo((()=>"function"===typeof e?e(n):{...n,...e}),[n,e])}}},function(e){e.O(0,[570,774,888,179],(function(){return n=3089,e(e.s=n);var n}));var n=e.O();_N_E=n}]);