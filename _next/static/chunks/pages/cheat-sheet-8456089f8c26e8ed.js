(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[747],{3751:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/cheat-sheet",function(){return a(6680)}])},8162:function(e,t,a){"use strict";var n=a(5893);a(7294),t.Z=function(e){let{name:t}=e;return(0,n.jsx)("i",{className:t})}},8132:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var n=a(5893);a(7294);var i=a(1539),l=a(763),r=a(1664),s=a.n(r),c=function(e){let{isExternalLink:t,link:a,children:i}=e;return t?(0,n.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:i}):(0,n.jsx)(s(),{href:a,children:i})},o=JSON.parse('{"cheat-sheet":[{"name":"docker.mdx","title":"Docker","draft":false,"date":"2022-07-13T22:00:45+02:00","routesPath":"/cheat-sheet/docker","page":"/content/cheat-sheet/docker"},{"name":"git.mdx","title":"Git","draft":false,"date":"2022-07-13T22:00:45+02:00","routesPath":"/cheat-sheet/git","page":"/content/cheat-sheet/git"},{"name":"jest.mdx","title":"Jest","draft":false,"date":"2022-07-13T22:00:45+02:00","routesPath":"/cheat-sheet/jest","page":"/content/cheat-sheet/jest"},{"name":"tmux.mdx","title":"TMUX","draft":false,"date":"2022-07-30T16:52:45+02:00","routesPath":"/cheat-sheet/tmux","page":"/content/cheat-sheet/tmux"}],"projects":[{"name":"colorselector.md","title":"Color Selector","draft":false,"date":"2020-04-03T19:28:45+02:00","featuredImage":"https://mrhelstein.com/wp-content/uploads/2022/05/spy-x-family-BXQMfk.jpeg","externalLink":"https://kamaal.io/colorselector"},{"name":"gameoflife.md","title":"WASM: Game Of Life","draft":false,"date":"2022-02-19T20:39:53+02:00","externalLink":"https://kamaal.io/wasm-game-of-life/"}],"til":[{"name":"solvingCoreDataRaceConditions.mdx","title":"Solving CoreData race conditions","draft":false,"date":"2022-07-30T17:16:45+02:00","routesPath":"/til/solvingCoreDataRaceConditions","page":"/content/til/solvingCoreDataRaceConditions"},{"name":"swiftUIMacOSEditMode.mdx","title":"SwiftUI macOS Edit Mode","draft":false,"date":"2022-07-13T21:45:45+02:00","routesPath":"/til/swiftUIMacOSEditMode","page":"/content/til/swiftUIMacOSEditMode"}]}');function d(e){let{title:t,contentKey:a,configuration:i}=e,r=o[a].filter(e=>{let{routesPath:t,externalLink:a,draft:n}=e;return!n&&(null!=t||null!=a)}).map(e=>({...e,hasExternalLink:null!=e.externalLink,date:new Date(e.date)})).sort((e,t)=>t.date.getTime()-e.date.getTime());return(0,n.jsx)(l.Z,{title:t,children:(0,n.jsx)("ul",{children:r.map(e=>{let{routesPath:t,externalLink:a,title:l,date:r,hasExternalLink:s}=e,c=null!=t?t:a;return(0,n.jsx)(d.Item,{link:c,title:l,date:r,isExternalLink:s,configuration:i},c)})})})}d.Item=function(e){var t,a;let{date:l,link:r,title:s,isExternalLink:o,configuration:d}=e;return(0,n.jsxs)("li",{className:(0,i.default)("list-item",{bulleted:null!==(t=null==d?void 0:d.bulleted)&&void 0!==t&&t}),children:[null!==(a=null==d?void 0:d.hideDate)&&void 0!==a&&a?null:(0,n.jsx)("span",{className:"date",children:l.toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric"})}),(0,n.jsx)("div",{className:"colored-links",children:(0,n.jsx)(c,{isExternalLink:o,link:r,children:(0,n.jsx)("h2",{children:s})})})]})};var u=d},763:function(e,t,a){"use strict";a.d(t,{Z:function(){return k}});var n=a(5893),i=a(7294),l=a(8725);let r=new Date,s=r.getFullYear();var c=function(){let e;return(0,n.jsx)("footer",{children:(0,n.jsx)("div",{children:(0,n.jsx)("p",{children:(e=s===l.Z.since?String(l.Z.since):"".concat(l.Z.since,"-").concat(s),"Ⓒ ".concat(e," ").concat(l.Z.fullName))})})})},o=a(9008),d=a.n(o),u=function(){return(0,n.jsx)(d(),{children:(0,n.jsx)("title",{children:"Kamaal Farah"})})},m=a(1664),f=a.n(m),h=a(1539),x=a(8162),p=function(e){let{className:t}=e,a=(0,h.default)("divider",null!=t?t:"");return(0,n.jsx)("div",{className:a})},j=function(e){let[t,a]=i.useState(!1);return i.useEffect(()=>{let n=window.matchMedia(e);function i(){t!==n.matches&&a(n.matches)}return n.matches!==t&&a(n.matches),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[t,e]),t};function g(){let[e,t]=i.useState(!1),a=j("(max-width: 770px)"),r=i.useCallback(a=>{a.preventDefault(),t(!e)},[e]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"header",children:[(0,n.jsx)("div",{className:"home-link",children:(0,n.jsx)(f(),{href:"/",children:l.Z.fullName})}),(0,n.jsx)("div",{className:"menu-links",children:(0,n.jsx)(g.MenuItems,{showMobileLayout:a,dropDownMenuItemsAreVisible:e,onHamburgerClick:r})})]}),(0,n.jsx)(g.Dropdown,{isVisible:e&&a})]})}g.Dropdown=function(e){let{isVisible:t}=e;return t?(0,n.jsxs)("div",{className:"dropdown-container",children:[(0,n.jsx)(p,{className:"animated-appearing"}),(0,n.jsx)("ul",{className:(0,h.default)("dropdown","animated-appearing"),children:l.Z.menuItems.map(e=>{let{id:t,name:a,link:i}=e;return(0,n.jsx)("li",{children:(0,n.jsx)(f(),{href:i,children:a})},t)})}),(0,n.jsx)(p,{className:(0,h.default)("animated-appearing","no-margin-bottom")})]}):null},g.MenuItems=function(e){let{showMobileLayout:t,dropDownMenuItemsAreVisible:a,onHamburgerClick:i}=e;return t?(0,n.jsx)("button",{type:"button",className:"icon-link",onClick:i,children:(0,n.jsx)(x.Z,{name:(0,h.default)("fa","fa-bars","fa-fw","hamburger",{toggled:a})})}):(0,n.jsx)(n.Fragment,{children:l.Z.menuItems.map(e=>{let{id:t,name:a,link:i}=e;return(0,n.jsx)(f(),{href:i,children:a},t)})})};var k=function(e){let{children:t,title:a}=e;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(u,{}),(0,n.jsx)(g,{}),(0,n.jsxs)("main",{children:[null!=a?(0,n.jsx)("h1",{className:"title",children:a}):null,t]}),(0,n.jsx)(c,{})]})}},8725:function(e,t){"use strict";t.Z={fullName:"Kamaal Farah",menuItems:[{id:"7845be0e-c294-48a4-9515-235d97b9ce83",link:"/projects",name:"Projects"},{id:"2f58ea56-1a22-4641-872f-873efb9b48fc",link:"/til",name:"TIL"}],socials:[{id:"69f7f3ca-72a0-4feb-aa17-27da51e09351",icon:"fa fa-2x fa-github",name:"GitHub",url:"https://github.com/kamaal111/"},{id:"59083d8c-399a-49dd-be52-4e4031a14023",icon:"fa fa-2x fa-linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/kamaalfarah/"},{id:"62959d55-66a9-4212-8ded-33e817c88c50",icon:"fa fa-2x fa-apple",name:"App Store",url:"https://apps.apple.com/bj/developer/kamaal-farah/id1502158009/"},{id:"2db4def3-38c9-43f6-8ee9-3f49800a0f0a",icon:"fa fa-2x fa-instagram",name:"Instagram",url:"https://www.instagram.com/_kamaalio/"}],since:2020,currentRoles:["Full Stack Software Engineer","iOS/macOS Developer"],contactEmail:"app.kamaal@gmail.com",lastUpdatedTermsAndConditions:"February 14th 2022"}},6680:function(e,t,a){"use strict";a.r(t);var n=a(5893);a(7294);var i=a(8132);t.default=function(){return(0,n.jsx)(i.Z,{title:"Cheat Sheet",contentKey:"cheat-sheet",configuration:{hideDate:!0,bulleted:!0}})}}},function(e){e.O(0,[433,774,888,179],function(){return e(e.s=3751)}),_N_E=e.O()}]);