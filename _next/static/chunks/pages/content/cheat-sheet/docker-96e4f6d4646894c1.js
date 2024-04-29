(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[604],{4802:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/cheat-sheet/docker",function(){return t(789)}])},789:function(e,n,t){"use strict";t.r(n);var a=t(5893),r=t(1151),i=t(3882),s=t(7312);function _createMdxContent(e){let n=Object.assign({p:"p",code:"code",pre:"pre"},(0,r.ah)(),e.components);return(0,a.jsxs)(i.Z,{title:"Docker",children:[(0,a.jsxs)(n.p,{children:["To attach to running process on a docker container. To detach from the current process press:\n",(0,a.jsx)(n.code,{children:"CTRL + Q"})," followed by ",(0,a.jsx)(n.code,{children:"CONTROL + P"}),"."]}),(0,a.jsx)(s.Z,{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"hljs language-bash",children:"docker attach <CONTAINER_ID or CONTAINER_NAME>\n"})})})]})}n.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,r.ah)(),e.components);return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(_createMdxContent,e)})):_createMdxContent(e)}},7312:function(e,n,t){"use strict";var a=t(5893);t(7294);var r=t(3967),i=t.n(r),s=t(7518);async function onClick(e){var n,t,a;let r;let i=null===(a=e.props)||void 0===a?void 0:null===(t=a.children)||void 0===t?void 0:null===(n=t.props)||void 0===n?void 0:n.children;null!=i&&(r="string"==typeof i?i:i.map(e=>{var n,t;return"string"==typeof e?e:null!==(t=null==e?void 0:null===(n=e.props)||void 0===n?void 0:n.children)&&void 0!==t?t:""}).join(""),await navigator.clipboard.writeText(r))}n.Z=function(e){let{children:n,enabled:t=!0}=e;return t?(0,a.jsxs)("div",{className:"copyable-code",children:[(0,a.jsx)("button",{type:"button","aria-label":"Copy button",className:"copy-button",onClick:e=>{(async()=>{e.preventDefault(),await onClick(n)})()},children:(0,a.jsx)(s.Z,{name:i()("fa","fa-2x","fa-clipboard","copy-icon")})}),n]}):n}},7518:function(e,n,t){"use strict";var a=t(5893);t(7294),n.Z=function(e){let{name:n}=e;return(0,a.jsx)("i",{className:n})}},3882:function(e,n,t){"use strict";t.d(n,{Z:function(){return Layouts_Page}});var a=t(5893),r=t(7294),i=t(7931);let s=new Date,c=s.getFullYear();var components_Footer=function(){let e;return(0,a.jsx)("footer",{children:(0,a.jsx)("div",{children:(0,a.jsx)("p",{children:(e=c===i.Z.since?String(i.Z.since):"".concat(i.Z.since,"-").concat(c),"Ⓒ ".concat(e," ").concat(i.Z.fullName))})})})},o=t(9008),l=t.n(o),Head=function(){return(0,a.jsx)(l(),{children:(0,a.jsx)("title",{children:"Kamaal Farah"})})},d=t(1664),u=t.n(d),m=t(3967),p=t.n(m),h=t(7518),components_Divider=function(e){let{className:n}=e,t=p()("divider",null!=n?n:"");return(0,a.jsx)("div",{className:t})},hooks_useMediaQuery=function(e){let[n,t]=r.useState(!1);return r.useEffect(()=>{let a=window.matchMedia(e);function listener(){n!==a.matches&&t(a.matches)}return a.matches!==n&&t(a.matches),window.addEventListener("resize",listener),()=>{window.removeEventListener("resize",listener)}},[n,e]),n};function Header(){let[e,n]=r.useState(!1),t=hooks_useMediaQuery("(max-width: 770px)"),s=r.useCallback(t=>{t.preventDefault(),n(!e)},[e]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"header",children:[(0,a.jsx)("div",{className:"home-link",children:(0,a.jsx)(u(),{href:"/",children:i.Z.fullName})}),(0,a.jsx)("div",{className:"menu-links",children:(0,a.jsx)(Header.MenuItems,{showMobileLayout:t,dropDownMenuItemsAreVisible:e,onHamburgerClick:s})})]}),(0,a.jsx)(Header.Dropdown,{isVisible:e&&t})]})}Header.Dropdown=function(e){let{isVisible:n}=e;return n?(0,a.jsxs)("div",{className:"dropdown-container",children:[(0,a.jsx)(components_Divider,{className:"animated-appearing"}),(0,a.jsx)("ul",{className:p()("dropdown","animated-appearing"),children:i.Z.menuItems.map(e=>{let{id:n,name:t,link:r}=e;return(0,a.jsx)("li",{children:(0,a.jsx)(u(),{href:r,children:t})},n)})}),(0,a.jsx)(components_Divider,{className:p()("animated-appearing","no-margin-bottom")})]}):null},Header.MenuItems=function(e){let{showMobileLayout:n,dropDownMenuItemsAreVisible:t,onHamburgerClick:r}=e;return n?(0,a.jsx)("button",{type:"button","aria-label":"Options menu",className:"icon-link",onClick:r,children:(0,a.jsx)(h.Z,{name:p()("fa","fa-bars","fa-fw","hamburger",{toggled:t})})}):(0,a.jsx)(a.Fragment,{children:i.Z.menuItems.map(e=>{let{id:n,name:t,link:r}=e;return(0,a.jsx)(u(),{href:r,children:t},n)})})};var Layouts_Page=function(e){let{children:n,title:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(Head,{}),(0,a.jsx)(Header,{}),(0,a.jsxs)("main",{children:[null!=t?(0,a.jsx)("h1",{className:"title",children:t}):null,n]}),(0,a.jsx)(components_Footer,{})]})}},7931:function(e,n){"use strict";n.Z={fullName:"Kamaal Farah",menuItems:[{id:"7845be0e-c294-48a4-9515-235d97b9ce83",link:"/projects",name:"Projects"},{id:"2f58ea56-1a22-4641-872f-873efb9b48fc",link:"/til",name:"TIL"}],socials:[{id:"69f7f3ca-72a0-4feb-aa17-27da51e09351",icon:"fa fa-2x fa-github",name:"GitHub",url:"https://github.com/kamaal111/"},{id:"59083d8c-399a-49dd-be52-4e4031a14023",icon:"fa fa-2x fa-linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/kamaalfarah/"},{id:"62959d55-66a9-4212-8ded-33e817c88c50",icon:"fa fa-2x fa-apple",name:"App Store",url:"https://apps.apple.com/bj/developer/kamaal-farah/id1502158009/"}],since:2020,currentRoles:["Full Stack Software Engineer","iOS/macOS Developer"],contactEmail:"app.kamaal@gmail.com",lastUpdatedTermsAndConditions:"February 14th 2022"}},1151:function(e,n,t){"use strict";t.d(n,{ah:function(){return useMDXComponents}});var a=t(7294);let r=a.createContext({});function useMDXComponents(e){let n=a.useContext(r);return a.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[456,774,888,179],function(){return e(e.s=4802)}),_N_E=e.O()}]);