(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{6192:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return t(8282)}])},9583:function(e,n,t){"use strict";var r=t(5893);t(7294);n.Z=function(e){var n=e.name;return(0,r.jsx)("i",{className:n})}},1194:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(1799),a=t(9396),i=t(5893),s=(t(7294),t(449)),l=t(1664),c=t.n(l);var o=function(e){var n=e.isExternalLink,t=e.link,r=e.children;return n?(0,i.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:r}):(0,i.jsx)(c(),{href:t,children:r})},u=t(1156);function d(e){var n=e.title,t=e.contentKey,l=u[t].filter((function(e){var n=e.routesPath,t=e.externalLink;return!e.draft&&(null!=n||null!=t)})).map((function(e){return(0,a.Z)((0,r.Z)({},e),{hasExternalLink:null!=e.externalLink,date:new Date(e.date)})})).sort((function(e,n){return n.date.getTime()-e.date.getTime()}));return(0,i.jsx)(s.Z,{title:n,children:l.map((function(e){var n=e.routesPath,t=e.externalLink,r=e.title,a=e.date,s=e.hasExternalLink,l=null!==n&&void 0!==n?n:t;return(0,i.jsx)(d.Item,{link:l,title:r,date:a,isExternalLink:s},l)}))})}d.Item=function(e){var n=e.date,t=e.link,r=e.title,a=e.isExternalLink;return(0,i.jsxs)("div",{className:"list-item",children:[(0,i.jsx)("span",{className:"date",children:n.toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric"})}),(0,i.jsx)("div",{className:"colored-links",children:(0,i.jsx)(o,{isExternalLink:a,link:t,children:(0,i.jsx)("h2",{children:r})})})]})};var f=d},449:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var r=t(5893),a=t(7294),i=t(6704);var s=(new Date).getFullYear();function l(){var e;return e=s===i.Z.since?String(i.Z.since):"".concat(i.Z.since,"-").concat(s),"\u24b8 ".concat(e," ").concat(i.Z.fullName)}var c=function(){return(0,r.jsx)("footer",{children:(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:l()})})})},o=t(9008),u=t.n(o);var d=function(){return(0,r.jsx)(u(),{children:(0,r.jsx)("title",{children:"Kamaal Farah"})})},f=t(603),m=t(1664),h=t.n(m),p=t(1539),j=t(9583);var x=function(e){var n=e.className,t=(0,p.default)("divider",null!==n&&void 0!==n?n:"");return(0,r.jsx)("div",{className:t})};var v=function(e){var n=(0,f.Z)(a.useState(!1),2),t=n[0],r=n[1];return a.useEffect((function(){var n=function(){t!==a.matches&&r(a.matches)},a=window.matchMedia(e);return a.matches!==t&&r(a.matches),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[t,e]),t};function b(){var e=(0,f.Z)(a.useState(!1),2),n=e[0],t=e[1],s=v("(max-width: 770px)"),l=a.useCallback((function(){t(!n)}),[n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"header",children:[(0,r.jsx)("div",{className:"home-link",children:(0,r.jsx)(h(),{href:"/",children:i.Z.fullName})}),(0,r.jsx)("div",{className:"menu-links",children:(0,r.jsx)(b.MenuItems,{showMobileLayout:s,dropDownMenuItemsAreVisible:n,onHamburgerClick:l})})]}),(0,r.jsx)(b.Dropdown,{isVisible:n&&s})]})}b.Dropdown=function(e){return e.isVisible?(0,r.jsxs)("div",{className:"dropdown-container",children:[(0,r.jsx)(x,{className:"animated-appearing"}),(0,r.jsx)("ul",{className:(0,p.default)("dropdown","animated-appearing"),children:i.Z.menuItems.map((function(e){var n=e.id,t=e.name,a=e.link;return(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:a,children:t})},n)}))}),(0,r.jsx)(x,{className:(0,p.default)("animated-appearing","no-margin-bottom")})]}):null},b.MenuItems=function(e){var n=e.showMobileLayout,t=e.dropDownMenuItemsAreVisible,a=e.onHamburgerClick;return n?(0,r.jsx)("button",{type:"button",className:"icon-link",onClick:a,children:(0,r.jsx)(j.Z,{name:(0,p.default)("fa","fa-bars","fa-fw","hamburger",{toggled:t})})}):(0,r.jsx)(r.Fragment,{children:i.Z.menuItems.map((function(e){var n=e.id,t=e.name,a=e.link;return(0,r.jsx)(h(),{href:a,children:t},n)}))})};var k=b;var g=function(e){var n=e.children,t=e.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(k,{}),(0,r.jsxs)("main",{children:[null!=t?(0,r.jsx)("h1",{className:"title",children:t}):null,n]}),(0,r.jsx)(c,{})]})}},6704:function(e,n){"use strict";n.Z={fullName:"Kamaal Farah",menuItems:[{id:"7845be0e-c294-48a4-9515-235d97b9ce83",link:"/projects",name:"Projects"},{id:"2f58ea56-1a22-4641-872f-873efb9b48fc",link:"/blogs",name:"Blogs"}],socials:[{id:"69f7f3ca-72a0-4feb-aa17-27da51e09351",icon:"fa fa-2x fa-github",name:"GitHub",url:"https://github.com/kamaal111/"},{id:"59083d8c-399a-49dd-be52-4e4031a14023",icon:"fa fa-2x fa-linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/kamaalfarah/"},{id:"62959d55-66a9-4212-8ded-33e817c88c50",icon:"fa fa-2x fa-apple",name:"App Store",url:"https://apps.apple.com/bj/developer/kamaal-farah/id1502158009/"}],since:2020,currentRoles:["Full Stack Software Engineer","iOS/macOS Developer"],contactEmail:"app.kamaal@gmail.com",lastUpdatedTermsAndConditions:"February 14th 2022"}},8282:function(e,n,t){"use strict";t.r(n);var r=t(5893),a=(t(7294),t(1194));n.default=function(){return(0,r.jsx)(a.Z,{title:"Projects",contentKey:"projects"})}},9396:function(e,n,t){"use strict";function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}t.d(n,{Z:function(){return r}})},1156:function(e){"use strict";e.exports=JSON.parse('{"blogs":[{"name":"swiftUIEnvironment.md","title":"SwiftUI Environment","draft":true,"date":"2022-07-10T21:21:45+02:00","routesPath":"/blogs/swiftUIEnvironment","page":"/blogs","query":"swiftUIEnvironment"},{"name":"test.md","title":"Test","draft":false,"date":"2022-07-11T19:21:45+02:00","routesPath":"/blogs/test","page":"/blogs","query":"test"}],"projects":[{"name":"colorselector.md","title":"Color Selector","draft":false,"date":"2020-04-03T19:28:45+02:00","featuredImage":"https://mrhelstein.com/wp-content/uploads/2022/05/spy-x-family-BXQMfk.jpeg","externalLink":"https://kamaal.io/colorselector"},{"name":"gameoflife.md","title":"WASM: Game Of Life","draft":false,"date":"2022-02-19T20:39:53+02:00","externalLink":"https://kamaal.io/wasm-game-of-life/"}]}')}},function(e){e.O(0,[570,774,888,179],(function(){return n=6192,e(e.s=n);var n}));var n=e.O();_N_E=n}]);