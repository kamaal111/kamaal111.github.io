(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[55],{9151:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogs",function(){return t(8989)}])},9583:function(e,n,t){"use strict";var r=t(5893);t(7294);n.Z=function(e){var n=e.name;return(0,r.jsx)("i",{className:n})}},1194:function(e,n,t){"use strict";t.d(n,{Z:function(){return f}});var r=t(1799),a=t(9396),i=t(5893),s=(t(7294),t(449)),l=t(1664),c=t.n(l);var u=function(e){var n=e.isExternalLink,t=e.link,r=e.children;return n?(0,i.jsx)("a",{href:t,target:"_blank",rel:"noopener noreferrer",children:r}):(0,i.jsx)(c(),{href:t,children:r})},o=t(1156);function d(e){var n=e.title,t=e.contentKey,l=o[t].filter((function(e){var n=e.routesPath,t=e.externalLink;return!e.draft&&(null!=n||null!=t)})).map((function(e){return(0,a.Z)((0,r.Z)({},e),{hasExternalLink:null!=e.externalLink,date:new Date(e.date)})})).sort((function(e,n){return n.date.getTime()-e.date.getTime()}));return(0,i.jsx)(s.Z,{title:n,children:l.map((function(e){var n=e.routesPath,t=e.externalLink,r=e.title,a=e.date,s=e.hasExternalLink,l=null!==n&&void 0!==n?n:t;return(0,i.jsx)(d.Item,{link:l,title:r,date:a,isExternalLink:s},l)}))})}d.Item=function(e){var n=e.date,t=e.link,r=e.title,a=e.isExternalLink;return(0,i.jsxs)("div",{className:"list-item",children:[(0,i.jsx)("span",{className:"date",children:n.toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric"})}),(0,i.jsx)("div",{className:"colored-links",children:(0,i.jsx)(u,{isExternalLink:a,link:t,children:(0,i.jsx)("h2",{children:r})})})]})};var f=d},449:function(e,n,t){"use strict";t.d(n,{Z:function(){return g}});var r=t(5893),a=t(7294),i=t(6704);var s=(new Date).getFullYear();function l(){var e;return e=s===i.Z.since?String(i.Z.since):"".concat(i.Z.since,"-").concat(s),"\u24b8 ".concat(e," ").concat(i.Z.fullName)}var c=function(){return(0,r.jsx)("footer",{children:(0,r.jsx)("div",{children:(0,r.jsx)("p",{children:l()})})})},u=t(9008),o=t.n(u);var d=function(){return(0,r.jsx)(o(),{children:(0,r.jsx)("title",{children:"Kamaal Farah"})})},f=t(603),m=t(1664),h=t.n(m),x=t(1539),p=t(9583);var v=function(e){var n=e.className,t=(0,x.default)("divider",null!==n&&void 0!==n?n:"");return(0,r.jsx)("div",{className:t})};var j=function(e){var n=(0,f.Z)(a.useState(!1),2),t=n[0],r=n[1];return a.useEffect((function(){var n=function(){t!==a.matches&&r(a.matches)},a=window.matchMedia(e);return a.matches!==t&&r(a.matches),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[t,e]),t};function k(){var e=(0,f.Z)(a.useState(!1),2),n=e[0],t=e[1],s=j("(max-width: 770px)"),l=a.useCallback((function(){t(!n)}),[n]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"header",children:[(0,r.jsx)("div",{className:"home-link",children:(0,r.jsx)(h(),{href:"/",children:i.Z.fullName})}),(0,r.jsx)("div",{className:"menu-links",children:(0,r.jsx)(k.MenuItems,{showMobileLayout:s,dropDownMenuItemsAreVisible:n,onHamburgerClick:l})})]}),(0,r.jsx)(k.Dropdown,{isVisible:n&&s})]})}k.Dropdown=function(e){return e.isVisible?(0,r.jsxs)("div",{className:"dropdown-container",children:[(0,r.jsx)(v,{className:"animated-appearing"}),(0,r.jsx)("ul",{className:(0,x.default)("dropdown","animated-appearing"),children:i.Z.menuItems.map((function(e){var n=e.id,t=e.name,a=e.link;return(0,r.jsx)("li",{children:(0,r.jsx)(h(),{href:a,children:t})},n)}))}),(0,r.jsx)(v,{className:(0,x.default)("animated-appearing","no-margin-bottom")})]}):null},k.MenuItems=function(e){var n=e.showMobileLayout,t=e.dropDownMenuItemsAreVisible,a=e.onHamburgerClick;return n?(0,r.jsx)("button",{type:"button",className:"icon-link",onClick:a,children:(0,r.jsx)(p.Z,{name:(0,x.default)("fa","fa-bars","fa-fw","hamburger",{toggled:t})})}):(0,r.jsx)(r.Fragment,{children:i.Z.menuItems.map((function(e){var n=e.id,t=e.name,a=e.link;return(0,r.jsx)(h(),{href:a,children:t},n)}))})};var b=k;var g=function(e){var n=e.children,t=e.title;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),(0,r.jsx)(b,{}),(0,r.jsxs)("main",{children:[null!=t?(0,r.jsx)("h1",{className:"title",children:t}):null,n]}),(0,r.jsx)(c,{})]})}},6704:function(e,n){"use strict";n.Z={fullName:"Kamaal Farah",menuItems:[{id:"7845be0e-c294-48a4-9515-235d97b9ce83",link:"/projects",name:"Projects"},{id:"2f58ea56-1a22-4641-872f-873efb9b48fc",link:"/blogs",name:"Blogs"}],socials:[{id:"69f7f3ca-72a0-4feb-aa17-27da51e09351",icon:"fa fa-2x fa-github",name:"GitHub",url:"https://github.com/kamaal111/"},{id:"59083d8c-399a-49dd-be52-4e4031a14023",icon:"fa fa-2x fa-linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/kamaalfarah/"},{id:"62959d55-66a9-4212-8ded-33e817c88c50",icon:"fa fa-2x fa-apple",name:"App Store",url:"https://apps.apple.com/bj/developer/kamaal-farah/id1502158009/"}],since:2020,currentRoles:["Full Stack Software Engineer","iOS/macOS Developer"],contactEmail:"app.kamaal@gmail.com",lastUpdatedTermsAndConditions:"February 14th 2022"}},8989:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(603),a=t(5893),i=t(7294),s=t(1163),l=t(1194),c=t(1758),u=t(449),o=t(1156),d=t(7568),f=t(4051),m=t.n(f);function h(){return(h=(0,d.Z)(m().mark((function e(n){var t,r,a,i,s;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,fetch("../../content".concat(n,".md"));case 4:t=e.sent,e.next=10;break;case 7:return e.prev=7,e.t0=e.catch(1),e.abrupt("return",null);case 10:return e.prev=11,e.next=14,t.text();case 14:r=e.sent,e.next=20;break;case 17:return e.prev=17,e.t1=e.catch(11),e.abrupt("return",null);case 20:if(a=r.split("\n"),-1!==(i=a.findIndex((function(e){return"---"===e})))){e.next=24;break}return e.abrupt("return",null);case 24:if(-1!==(s=a.findIndex((function(e,n){return"---"===e&&n!==i})))){e.next=27;break}return e.abrupt("return",null);case 27:return e.abrupt("return",a.slice(s+1).join("\n"));case 28:case"end":return e.stop()}}),e,null,[[1,7],[11,17]])})))).apply(this,arguments)}var x=function(e){return h.apply(this,arguments)};var p=function(e){var n=e.category,t=e.contentKey,s=(0,r.Z)(i.useState(""),2),l=s[0],d=s[1],f=o[n].find((function(e){return e.query===t})),m=null==f;return i.useEffect((function(){m||x(f.routesPath).then((function(e){null!=e&&d(e)}))}),[m]),m?(0,a.jsx)(u.Z,{title:"Not Found \ud83e\udd72",children:(0,a.jsx)("div",{})}):(0,a.jsx)(u.Z,{title:null===f||void 0===f?void 0:f.title,children:(0,a.jsx)(c.D,{children:l})})};var v=function(){var e=(0,r.Z)(i.useState(!0),2),n=e[0],t=e[1],c=(0,s.useRouter)();i.useEffect((function(){setTimeout((function(){t(!1)}),500)}),[]);var o=c.asPath.split("/").filter((function(e){return""!==e}));return n?(0,a.jsx)(u.Z,{title:"Loading....",children:(0,a.jsx)("div",{})}):o.length>1?(0,a.jsx)(p,{category:o[0],contentKey:o[1]}):(0,a.jsx)(l.Z,{title:"Blogs",contentKey:"blogs"})}},1156:function(e){"use strict";e.exports=JSON.parse('{"blogs":[{"name":"swiftUIEnvironment.md","title":"SwiftUI Environment","draft":true,"date":"2022-07-10T21:21:45+02:00","routesPath":"/blogs/swiftUIEnvironment","page":"/blogs","query":"swiftUIEnvironment"},{"name":"test.md","title":"Test","draft":false,"date":"2022-07-11T19:21:45+02:00","routesPath":"/blogs/test","page":"/blogs","query":"test"}],"projects":[{"name":"colorselector.md","title":"Color Selector","draft":false,"date":"2020-04-03T19:28:45+02:00","featuredImage":"https://mrhelstein.com/wp-content/uploads/2022/05/spy-x-family-BXQMfk.jpeg","externalLink":"https://kamaal.io/colorselector"},{"name":"gameoflife.md","title":"WASM: Game Of Life","draft":false,"date":"2022-02-19T20:39:53+02:00","externalLink":"https://kamaal.io/wasm-game-of-life/"}]}')}},function(e){e.O(0,[570,8,774,888,179],(function(){return n=9151,e(e.s=n);var n}));var n=e.O();_N_E=n}]);