(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[604],{4802:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/cheat-sheet/docker",function(){return a(789)}])},789:function(e,n,a){"use strict";a.r(n);var t=a(5893),r=a(1151),s=a(3882),i=a(7312);function _createMdxContent(e){let n=Object.assign({p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,t.jsxs)(s.Z,{title:"Docker",children:[(0,t.jsxs)(n.p,{children:["To attach to running process on a docker container. To detach from the current process press:\n",(0,t.jsx)(n.code,{children:"CTRL + Q"})," followed by ",(0,t.jsx)(n.code,{children:"CONTROL + P"}),"."]}),(0,t.jsx)(i.Z,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"hljs language-bash",children:"docker attach <CONTAINER_ID or CONTAINER_NAME>\n"})})})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,t.jsx)(n,Object.assign({},e,{children:(0,t.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},7312:function(e,n,a){"use strict";var t=a(5893);a(7294);var r=a(3967),s=a.n(r),i=a(7518);n.Z=function(e){let{children:n,enabled:a=!0}=e;return a?(0,t.jsxs)("div",{className:"copyable-code",children:[(0,t.jsx)("button",{type:"button","aria-label":"Copy button",className:"copy-button",onClick:e=>{},children:(0,t.jsx)(i.Z,{name:s()("fa","fa-2x","fa-clipboard","copy-icon")})}),n]}):n}},7518:function(e,n,a){"use strict";var t=a(5893);a(7294),n.Z=function(e){let{name:n}=e;return(0,t.jsx)("i",{className:n})}},3882:function(e,n,a){"use strict";a.d(n,{Z:function(){return Layouts_Page}});var t=a(5893),r=a(7294),s=a(7931);let i=new Date,c=i.getFullYear();var components_Footer=function(){let e;return(0,t.jsx)("footer",{children:(0,t.jsx)("div",{children:(0,t.jsx)("p",{children:(e=c===s.Z.since?String(s.Z.since):"".concat(s.Z.since,"-").concat(c),"Ⓒ ".concat(e," ").concat(s.Z.fullName))})})})},o=a(9008),l=a.n(o),Head=function(){return(0,t.jsx)(l(),{children:(0,t.jsx)("title",{children:"Kamaal Farah"})})},d=a(1664),u=a.n(d),m=a(3967),f=a.n(m),h=a(7518),components_Divider=function(e){let{className:n}=e,a=f()("divider",null!=n?n:"");return(0,t.jsx)("div",{className:a})},hooks_useMediaQuery=function(e){let[n,a]=r.useState(!1);return r.useEffect(()=>{let t=window.matchMedia(e);function listener(){n!==t.matches&&a(t.matches)}return t.matches!==n&&a(t.matches),window.addEventListener("resize",listener),()=>{window.removeEventListener("resize",listener)}},[n,e]),n};function Header(){let[e,n]=r.useState(!1),a=hooks_useMediaQuery("(max-width: 770px)"),i=r.useCallback(a=>{a.preventDefault(),n(!e)},[e]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"header",children:[(0,t.jsx)("div",{className:"home-link",children:(0,t.jsx)(u(),{href:"/",children:s.Z.fullName})}),(0,t.jsx)("div",{className:"menu-links",children:(0,t.jsx)(Header.MenuItems,{showMobileLayout:a,dropDownMenuItemsAreVisible:e,onHamburgerClick:i})})]}),(0,t.jsx)(Header.Dropdown,{isVisible:e&&a})]})}Header.Dropdown=function(e){let{isVisible:n}=e;return n?(0,t.jsxs)("div",{className:"dropdown-container",children:[(0,t.jsx)(components_Divider,{className:"animated-appearing"}),(0,t.jsx)("ul",{className:f()("dropdown","animated-appearing"),children:s.Z.menuItems.map(e=>{let{id:n,name:a,link:r}=e;return(0,t.jsx)("li",{children:(0,t.jsx)(u(),{href:r,children:a})},n)})}),(0,t.jsx)(components_Divider,{className:f()("animated-appearing","no-margin-bottom")})]}):null},Header.MenuItems=function(e){let{showMobileLayout:n,dropDownMenuItemsAreVisible:a,onHamburgerClick:r}=e;return n?(0,t.jsx)("button",{type:"button","aria-label":"Options menu",className:"icon-link",onClick:r,children:(0,t.jsx)(h.Z,{name:f()("fa","fa-bars","fa-fw","hamburger",{toggled:a})})}):(0,t.jsx)(t.Fragment,{children:s.Z.menuItems.map(e=>{let{id:n,name:a,link:r}=e;return(0,t.jsx)(u(),{href:r,children:a},n)})})};var Layouts_Page=function(e){let{children:n,title:a}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Head,{}),(0,t.jsx)(Header,{}),(0,t.jsxs)("main",{children:[null!=a?(0,t.jsx)("h1",{className:"title",children:a}):null,n]}),(0,t.jsx)(components_Footer,{})]})}},7931:function(e,n){"use strict";n.Z={fullName:"Kamaal Farah",menuItems:[{id:"7845be0e-c294-48a4-9515-235d97b9ce83",link:"/projects",name:"Projects"},{id:"2f58ea56-1a22-4641-872f-873efb9b48fc",link:"/til",name:"TIL"}],socials:[{id:"69f7f3ca-72a0-4feb-aa17-27da51e09351",icon:"fa fa-2x fa-github",name:"GitHub",url:"https://github.com/kamaal111/"},{id:"59083d8c-399a-49dd-be52-4e4031a14023",icon:"fa fa-2x fa-linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/kamaalfarah/"},{id:"62959d55-66a9-4212-8ded-33e817c88c50",icon:"fa fa-2x fa-apple",name:"App Store",url:"https://apps.apple.com/bj/developer/kamaal-farah/id1502158009/"},{id:"2db4def3-38c9-43f6-8ee9-3f49800a0f0a",icon:"fa fa-2x fa-instagram",name:"Instagram",url:"https://www.instagram.com/_kamaalio/"}],since:2020,currentRoles:["Full Stack Software Engineer","iOS/macOS Developer"],contactEmail:"app.kamaal@gmail.com",lastUpdatedTermsAndConditions:"February 14th 2022"}},1151:function(e,n,a){"use strict";a.d(n,{ah:function(){return useMDXComponents}});var t=a(7294);let r=t.createContext({});function useMDXComponents(e){let n=t.useContext(r);return t.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[456,774,888,179],function(){return e(e.s=4802)}),_N_E=e.O()}]);