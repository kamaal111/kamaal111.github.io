(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{1398:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/cheat-sheet/tmux",function(){return s(5300)}])},5300:function(e,n,s){"use strict";s.r(n);var a=s(5893),t=s(1151),i=s(3882),r=s(7312);function _createMdxContent(e){let n=Object.assign({h2:"h2",p:"p",pre:"pre",code:"code",span:"span"},(0,t.ah)(),e.components);return(0,a.jsxs)(i.Z,{title:"TMUX",children:[(0,a.jsx)(n.h2,{children:"Sessions"}),(0,a.jsx)(n.p,{children:"Start a new session."}),(0,a.jsx)(r.Z,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"hljs language-bash",children:"tmux\n"})})}),(0,a.jsx)(n.p,{children:"List sessions."}),(0,a.jsx)(r.Z,{children:(0,a.jsx)(n.pre,{children:(0,a.jsxs)(n.code,{className:"hljs language-bash",children:["tmux ",(0,a.jsx)(n.span,{className:"hljs-built_in",children:"ls"}),"\n"]})})}),(0,a.jsx)(n.p,{children:"Attach to last session."}),(0,a.jsx)(r.Z,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"hljs language-bash",children:"tmux a\n"})})}),(0,a.jsx)(n.p,{children:"Attach to a session using the session name."}),(0,a.jsx)(r.Z,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"hljs language-bash",children:"tmux a -t <SESSION_NAME>\n"})})}),(0,a.jsx)(n.h2,{children:"Windows"}),(0,a.jsx)(n.p,{children:"Create window."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"(CTRL + B) C\n"})}),(0,a.jsx)(n.p,{children:"Next window."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"(CTRL + B) N\n"})}),(0,a.jsx)(n.p,{children:"Next window."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"(CTRL + B) P\n"})}),(0,a.jsx)(n.p,{children:"Switch/select window by number."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"(CTRL + B) 0...9\n"})}),(0,a.jsx)(n.h2,{children:"Panes"}),(0,a.jsx)(n.p,{children:"Split pane with horizontal layout."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"(CTRL + B) %\n"})}),(0,a.jsx)(n.p,{children:"Split pane with vertical layout."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'(CTRL + B) ""\n'})}),(0,a.jsx)(n.p,{children:"Switch to pane to the direction."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"(CTRL + B) ↑\n(CTRL + B) ↓\n(CTRL + B) →\n(CTRL + B) ←\n"})})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},7312:function(e,n,s){"use strict";var a=s(5893);s(7294);var t=s(3967),i=s.n(t),r=s(7518);n.Z=function(e){let{children:n,enabled:s=!0}=e;return s?(0,a.jsxs)("div",{className:"copyable-code",children:[(0,a.jsx)("button",{type:"button","aria-label":"Copy button",className:"copy-button",onClick:e=>{},children:(0,a.jsx)(r.Z,{name:i()("fa","fa-2x","fa-clipboard","copy-icon")})}),n]}):n}},7518:function(e,n,s){"use strict";var a=s(5893);s(7294),n.Z=function(e){let{name:n}=e;return(0,a.jsx)("i",{className:n})}},3882:function(e,n,s){"use strict";s.d(n,{Z:function(){return Layouts_Page}});var a=s(5893),t=s(7294),i=s(7931);let r=new Date,c=r.getFullYear();var components_Footer=function(){let e;return(0,a.jsx)("footer",{children:(0,a.jsx)("div",{children:(0,a.jsx)("p",{children:(e=c===i.Z.since?String(i.Z.since):"".concat(i.Z.since,"-").concat(c),"Ⓒ ".concat(e," ").concat(i.Z.fullName))})})})},l=s(9008),o=s.n(l),Head=function(){return(0,a.jsx)(o(),{children:(0,a.jsx)("title",{children:"Kamaal Farah"})})},d=s(1664),h=s.n(d),u=s(3967),m=s.n(u),x=s(7518),components_Divider=function(e){let{className:n}=e,s=m()("divider",null!=n?n:"");return(0,a.jsx)("div",{className:s})},hooks_useMediaQuery=function(e){let[n,s]=t.useState(!1);return t.useEffect(()=>{let a=window.matchMedia(e);function listener(){n!==a.matches&&s(a.matches)}return a.matches!==n&&s(a.matches),window.addEventListener("resize",listener),()=>{window.removeEventListener("resize",listener)}},[n,e]),n};function Header(){let[e,n]=t.useState(!1),s=hooks_useMediaQuery("(max-width: 770px)"),r=t.useCallback(s=>{s.preventDefault(),n(!e)},[e]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"header",children:[(0,a.jsx)("div",{className:"home-link",children:(0,a.jsx)(h(),{href:"/",children:i.Z.fullName})}),(0,a.jsx)("div",{className:"menu-links",children:(0,a.jsx)(Header.MenuItems,{showMobileLayout:s,dropDownMenuItemsAreVisible:e,onHamburgerClick:r})})]}),(0,a.jsx)(Header.Dropdown,{isVisible:e&&s})]})}Header.Dropdown=function(e){let{isVisible:n}=e;return n?(0,a.jsxs)("div",{className:"dropdown-container",children:[(0,a.jsx)(components_Divider,{className:"animated-appearing"}),(0,a.jsx)("ul",{className:m()("dropdown","animated-appearing"),children:i.Z.menuItems.map(e=>{let{id:n,name:s,link:t}=e;return(0,a.jsx)("li",{children:(0,a.jsx)(h(),{href:t,children:s})},n)})}),(0,a.jsx)(components_Divider,{className:m()("animated-appearing","no-margin-bottom")})]}):null},Header.MenuItems=function(e){let{showMobileLayout:n,dropDownMenuItemsAreVisible:s,onHamburgerClick:t}=e;return n?(0,a.jsx)("button",{type:"button","aria-label":"Options menu",className:"icon-link",onClick:t,children:(0,a.jsx)(x.Z,{name:m()("fa","fa-bars","fa-fw","hamburger",{toggled:s})})}):(0,a.jsx)(a.Fragment,{children:i.Z.menuItems.map(e=>{let{id:n,name:s,link:t}=e;return(0,a.jsx)(h(),{href:t,children:s},n)})})};var Layouts_Page=function(e){let{children:n,title:s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Head,{}),(0,a.jsx)(Header,{}),(0,a.jsxs)("main",{children:[null!=s?(0,a.jsx)("h1",{className:"title",children:s}):null,n]}),(0,a.jsx)(components_Footer,{})]})}},7931:function(e,n){"use strict";n.Z={fullName:"Kamaal Farah",menuItems:[{id:"7845be0e-c294-48a4-9515-235d97b9ce83",link:"/projects",name:"Projects"},{id:"2f58ea56-1a22-4641-872f-873efb9b48fc",link:"/til",name:"TIL"}],socials:[{id:"69f7f3ca-72a0-4feb-aa17-27da51e09351",icon:"fa fa-2x fa-github",name:"GitHub",url:"https://github.com/kamaal111/"},{id:"59083d8c-399a-49dd-be52-4e4031a14023",icon:"fa fa-2x fa-linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/kamaalfarah/"},{id:"62959d55-66a9-4212-8ded-33e817c88c50",icon:"fa fa-2x fa-apple",name:"App Store",url:"https://apps.apple.com/bj/developer/kamaal-farah/id1502158009/"},{id:"2db4def3-38c9-43f6-8ee9-3f49800a0f0a",icon:"fa fa-2x fa-instagram",name:"Instagram",url:"https://www.instagram.com/_kamaalio/"}],since:2020,currentRoles:["Full Stack Software Engineer","iOS/macOS Developer"],contactEmail:"app.kamaal@gmail.com",lastUpdatedTermsAndConditions:"February 14th 2022"}},1151:function(e,n,s){"use strict";s.d(n,{ah:function(){return useMDXComponents}});var a=s(7294);let t=a.createContext({});function useMDXComponents(e){let n=a.useContext(t);return a.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[456,774,888,179],function(){return e(e.s=1398)}),_N_E=e.O()}]);