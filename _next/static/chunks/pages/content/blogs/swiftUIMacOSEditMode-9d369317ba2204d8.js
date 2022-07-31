(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[81],{3089:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/content/blogs/swiftUIMacOSEditMode",function(){return n(5136)}])},9583:function(e,s,n){"use strict";var a=n(5893);n(7294);s.Z=function(e){var s=e.name;return(0,a.jsx)("i",{className:s})}},449:function(e,s,n){"use strict";n.d(s,{Z:function(){return v}});var a=n(5893),l=n(7294),i=n(6704);var t=(new Date).getFullYear();function c(){var e;return e=t===i.Z.since?String(i.Z.since):"".concat(i.Z.since,"-").concat(t),"\u24b8 ".concat(e," ").concat(i.Z.fullName)}var r=function(){return(0,a.jsx)("footer",{children:(0,a.jsx)("div",{children:(0,a.jsx)("p",{children:c()})})})},d=n(9008),h=n.n(d);var o=function(){return(0,a.jsx)(h(),{children:(0,a.jsx)("title",{children:"Kamaal Farah"})})},j=n(603),m=n(1664),p=n.n(m),x=n(1539),u=n(9583);var N=function(e){var s=e.className,n=(0,x.default)("divider",null!==s&&void 0!==s?s:"");return(0,a.jsx)("div",{className:n})};var w=function(e){var s=(0,j.Z)(l.useState(!1),2),n=s[0],a=s[1];return l.useEffect((function(){var s=function(){n!==l.matches&&a(l.matches)},l=window.matchMedia(e);return l.matches!==n&&a(l.matches),window.addEventListener("resize",s),function(){window.removeEventListener("resize",s)}}),[n,e]),n};function f(){var e=(0,j.Z)(l.useState(!1),2),s=e[0],n=e[1],t=w("(max-width: 770px)"),c=l.useCallback((function(){n(!s)}),[s]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"header",children:[(0,a.jsx)("div",{className:"home-link",children:(0,a.jsx)(p(),{href:"/",children:i.Z.fullName})}),(0,a.jsx)("div",{className:"menu-links",children:(0,a.jsx)(f.MenuItems,{showMobileLayout:t,dropDownMenuItemsAreVisible:s,onHamburgerClick:c})})]}),(0,a.jsx)(f.Dropdown,{isVisible:s&&t})]})}f.Dropdown=function(e){return e.isVisible?(0,a.jsxs)("div",{className:"dropdown-container",children:[(0,a.jsx)(N,{className:"animated-appearing"}),(0,a.jsx)("ul",{className:(0,x.default)("dropdown","animated-appearing"),children:i.Z.menuItems.map((function(e){var s=e.id,n=e.name,l=e.link;return(0,a.jsx)("li",{children:(0,a.jsx)(p(),{href:l,children:n})},s)}))}),(0,a.jsx)(N,{className:(0,x.default)("animated-appearing","no-margin-bottom")})]}):null},f.MenuItems=function(e){var s=e.showMobileLayout,n=e.dropDownMenuItemsAreVisible,l=e.onHamburgerClick;return s?(0,a.jsx)("button",{type:"button",className:"icon-link",onClick:l,children:(0,a.jsx)(u.Z,{name:(0,x.default)("fa","fa-bars","fa-fw","hamburger",{toggled:n})})}):(0,a.jsx)(a.Fragment,{children:i.Z.menuItems.map((function(e){var s=e.id,n=e.name,l=e.link;return(0,a.jsx)(p(),{href:l,children:n},s)}))})};var y=f;var v=function(e){var s=e.children,n=e.title;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{}),(0,a.jsx)(y,{}),(0,a.jsxs)("main",{children:[null!=n?(0,a.jsx)("h1",{className:"title",children:n}):null,s]}),(0,a.jsx)(r,{})]})}},6704:function(e,s){"use strict";s.Z={fullName:"Kamaal Farah",menuItems:[{id:"7845be0e-c294-48a4-9515-235d97b9ce83",link:"/projects",name:"Projects"},{id:"2f58ea56-1a22-4641-872f-873efb9b48fc",link:"/blogs",name:"Blogs"},{id:"e789b819-d7c0-480f-89a2-99c03c1151e8",link:"/cheat-sheet",name:"Cheat sheet"}],socials:[{id:"69f7f3ca-72a0-4feb-aa17-27da51e09351",icon:"fa fa-2x fa-github",name:"GitHub",url:"https://github.com/kamaal111/"},{id:"59083d8c-399a-49dd-be52-4e4031a14023",icon:"fa fa-2x fa-linkedin",name:"LinkedIn",url:"https://www.linkedin.com/in/kamaalfarah/"},{id:"62959d55-66a9-4212-8ded-33e817c88c50",icon:"fa fa-2x fa-apple",name:"App Store",url:"https://apps.apple.com/bj/developer/kamaal-farah/id1502158009/"}],since:2020,currentRoles:["Full Stack Software Engineer","iOS/macOS Developer"],contactEmail:"app.kamaal@gmail.com",lastUpdatedTermsAndConditions:"February 14th 2022"}},5136:function(e,s,n){"use strict";n.r(s);var a=n(5893),l=n(1151),i=n(449);function t(e){var s=Object.assign({p:"p",code:"code",h2:"h2",pre:"pre",span:"span",h3:"h3"},(0,l.ah)(),e.components);return(0,a.jsxs)(i.Z,{title:"SwiftUI macOS Edit Mode",children:[(0,a.jsxs)(s.p,{children:["So I really wanted to have the same ",(0,a.jsx)(s.code,{children:"EditButton"})," when we develop our iOS apps in SwiftUI.\nTo reuse as much as possible between both platforms I got motivated to make my own implementation of\nof the ",(0,a.jsx)(s.code,{children:"EditButton"}),"."]}),(0,a.jsxs)(s.p,{children:["Fully functioning code could be found ",(0,a.jsx)("a",{className:"highlighted-link",href:"https://github.com/kamaal111/EditModeMac",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]}),(0,a.jsx)(s.h2,{children:"iOS EditMode usage"}),(0,a.jsx)(s.p,{children:"This is what we want to implement for macOS and is the current way of how we use it on iOS."}),(0,a.jsx)(s.pre,{children:(0,a.jsxs)(s.code,{className:"hljs language-swift",children:[(0,a.jsx)(s.span,{className:"hljs-keyword",children:"struct"})," ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"ContentView"}),": ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"View"})," {\n    ",(0,a.jsx)(s.span,{className:"hljs-comment",children:"/// Environment key to get the current "}),"\n    ",(0,a.jsx)(s.span,{className:"hljs-comment",children:"/// EditMode state"}),"\n    ",(0,a.jsx)(s.span,{className:"hljs-meta",children:"@Environment"}),"(\\.editMode) ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"var"})," editMode: ",(0,a.jsx)(s.span,{className:"hljs-type",children:"EditMode"}),"\n\n    ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"var"})," body: ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"some"})," ",(0,a.jsx)(s.span,{className:"hljs-type",children:"View"})," {\n        ",(0,a.jsx)(s.span,{className:"hljs-comment",children:"/// Button to toggle the edit mode"}),"\n        ",(0,a.jsx)(s.span,{className:"hljs-type",children:"EditButton"}),"()\n    }\n}\n"]})}),(0,a.jsx)(s.h2,{children:"EditMode model"}),(0,a.jsxs)(s.p,{children:["Let's first start of with implementing the ",(0,a.jsx)(s.code,{children:"EditMode"})," model. The ",(0,a.jsx)(s.code,{children:"EditMode"})," model represents\nthe current state of editing."]}),(0,a.jsx)(s.pre,{children:(0,a.jsxs)(s.code,{className:"hljs language-swift",children:[(0,a.jsx)(s.span,{className:"hljs-keyword",children:"enum"})," ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"EditMode"})," {\n    ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"case"})," active\n    ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"case"})," inactive\n\n    ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"var"})," isEditing: ",(0,a.jsx)(s.span,{className:"hljs-type",children:"Bool"})," {\n        ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"self"})," ",(0,a.jsx)(s.span,{className:"hljs-operator",children:"=="})," .active\n    }\n}\n"]})}),(0,a.jsx)(s.h2,{children:"Making EditMode accessible from the environment"}),(0,a.jsxs)(s.p,{children:["To make our ",(0,a.jsx)(s.code,{children:"EditMode"})," state accessible from the ",(0,a.jsx)(s.code,{children:"@Environment"})," property wrapper we need to\ncreate our own ",(0,a.jsx)(s.code,{children:"EnvironmentKey"})," to reference and modify the current edit mode. The static\nproperty ",(0,a.jsx)(s.code,{children:"defaultValue"})," is required for the ",(0,a.jsx)(s.code,{children:"EnvironmentKey"})," to conform to the protocol."]}),(0,a.jsx)(s.pre,{children:(0,a.jsxs)(s.code,{className:"hljs language-swift",children:[(0,a.jsx)(s.span,{className:"hljs-keyword",children:"struct"})," ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"EditModeKey"}),": ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"EnvironmentKey"})," {\n    ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"static"})," ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"let"})," defaultValue: ",(0,a.jsx)(s.span,{className:"hljs-type",children:"EditMode"})," ",(0,a.jsx)(s.span,{className:"hljs-operator",children:"="})," .inactive\n}\n"]})}),(0,a.jsxs)(s.p,{children:["Next we need to extend ",(0,a.jsx)(s.code,{children:"EnvironmentValues"})," with and edit mode key. This how later on access it\nusing the ",(0,a.jsx)(s.code,{children:"@Environment"})," property wrapper using a key path."]}),(0,a.jsx)(s.pre,{children:(0,a.jsxs)(s.code,{className:"hljs language-swift",children:[(0,a.jsx)(s.span,{className:"hljs-keyword",children:"extension"})," ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"EnvironmentValues"})," {\n    ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"var"})," editMode: ",(0,a.jsx)(s.span,{className:"hljs-type",children:"EditMode"})," {\n        ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"get"})," { ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"self"}),"[",(0,a.jsx)(s.span,{className:"hljs-type",children:"EditModeKey"}),".",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"self"}),"] }\n        ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"set"})," { ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"self"}),"[",(0,a.jsx)(s.span,{className:"hljs-type",children:"EditModeKey"}),".",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"self"}),"] ",(0,a.jsx)(s.span,{className:"hljs-operator",children:"="})," newValue }\n    }\n}\n"]})}),(0,a.jsx)(s.h2,{children:"Updating the edit mode state"}),(0,a.jsxs)(s.p,{children:["From the ",(0,a.jsx)(s.code,{children:"ContentView"})," the editMode state is just a regular ",(0,a.jsx)(s.code,{children:"State"})," property we always knew\nand we can edit it's value like we always did. One thing that might be new is using the ",(0,a.jsx)(s.code,{children:"environment"}),"\nview modifier."]}),(0,a.jsxs)(s.p,{children:["Everytime we modify the ",(0,a.jsx)(s.code,{children:"editMode"})," ",(0,a.jsx)(s.code,{children:"State"})," property the changes reflect to the child views that\nare accessing the ",(0,a.jsx)(s.code,{children:"@Environment"})," property wrapper of ",(0,a.jsx)(s.code,{children:"editMode"}),"."]}),(0,a.jsx)(s.pre,{children:(0,a.jsxs)(s.code,{className:"hljs language-swift",children:[(0,a.jsx)(s.span,{className:"hljs-keyword",children:"struct"})," ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"ContentView"}),": ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"View"})," {\n    ",(0,a.jsx)(s.span,{className:"hljs-meta",children:"@State"})," ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"private"})," ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"var"})," editMode: ",(0,a.jsx)(s.span,{className:"hljs-type",children:"EditMode"})," ",(0,a.jsx)(s.span,{className:"hljs-operator",children:"="})," .inactive\n\n    ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"var"})," body: ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"some"})," ",(0,a.jsx)(s.span,{className:"hljs-type",children:"View"})," {\n        ",(0,a.jsx)(s.span,{className:"hljs-type",children:"VStack"})," {\n            ",(0,a.jsx)(s.span,{className:"hljs-type",children:"Button"}),"(action: {\n                editMode ",(0,a.jsx)(s.span,{className:"hljs-operator",children:"="})," editMode.isEditing ",(0,a.jsx)(s.span,{className:"hljs-operator",children:"?"})," .inactive : .active\n            }) {\n                ",(0,a.jsx)(s.span,{className:"hljs-type",children:"Text"}),"(editMode.isEditing ",(0,a.jsx)(s.span,{className:"hljs-operator",children:"?"})," ",(0,a.jsx)(s.span,{className:"hljs-string",children:'"Done"'})," : ",(0,a.jsx)(s.span,{className:"hljs-string",children:'"Edit"'}),")\n            }\n            ",(0,a.jsx)(s.span,{className:"hljs-type",children:"ChildView"}),"()\n        }\n        ",(0,a.jsx)(s.span,{className:"hljs-comment",children:"// Setting the state value the environment"}),"\n        .environment(\\.editMode, editMode)\n    }\n}\n\n",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"struct"})," ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"ChildView"}),": ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"View"})," {\n    ",(0,a.jsx)(s.span,{className:"hljs-comment",children:"// This value behaves like a property value that has been passed"}),"\n    ",(0,a.jsx)(s.span,{className:"hljs-comment",children:"// through by it's parent"}),"\n    ",(0,a.jsx)(s.span,{className:"hljs-meta",children:"@Environment"}),"(\\.editMode) ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"var"})," editMode\n\n    ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"var"})," body: ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"some"})," ",(0,a.jsx)(s.span,{className:"hljs-type",children:"View"})," {\n        ",(0,a.jsx)(s.span,{className:"hljs-type",children:"Text"}),"(",(0,a.jsxs)(s.span,{className:"hljs-string",children:["\"I'm ",(0,a.jsxs)(s.span,{className:"hljs-subst",children:["\\(editMode.isEditing ",(0,a.jsx)(s.span,{className:"hljs-operator",children:"?"})," ",(0,a.jsx)(s.span,{className:"hljs-string",children:'"editing"'})," : ",(0,a.jsx)(s.span,{className:"hljs-string",children:'"not editing"'}),")"]}),'"']}),")\n    }\n}\n"]})}),(0,a.jsx)(s.h2,{children:"Bonus: Implementing EditButton"}),(0,a.jsx)(s.h3,{children:"EditMode view modifier"}),(0,a.jsx)(s.p,{children:"To make it easier for ourself let's create a view modifier to modify edit mode in a\nuniform way."}),(0,a.jsxs)(s.p,{children:["I decided to use ",(0,a.jsx)(s.code,{children:"NotificationCenter"})," to loosely couple updating the ",(0,a.jsx)(s.code,{children:"EditMode"}),". So we\ncan post a new ",(0,a.jsx)(s.code,{children:"EditMode"})," state to this view modifier and the state will get handled accordingly."]}),(0,a.jsx)(s.pre,{children:(0,a.jsxs)(s.code,{className:"hljs language-swift",children:[(0,a.jsx)(s.span,{className:"hljs-keyword",children:"struct"})," ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"EditModeViewModifier"}),": ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"ViewModifier"})," {\n    ",(0,a.jsx)(s.span,{className:"hljs-meta",children:"@State"})," ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"private"})," ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"var"})," editMode: ",(0,a.jsx)(s.span,{className:"hljs-type",children:"EditMode"})," ",(0,a.jsx)(s.span,{className:"hljs-operator",children:"="})," .inactive\n\n    ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"func"})," ",(0,a.jsx)(s.span,{className:"hljs-title function_",children:"body"}),"(",(0,a.jsx)(s.span,{className:"hljs-params",children:"content"}),": ",(0,a.jsx)(s.span,{className:"hljs-type",children:"Content"}),") -> ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"some"})," ",(0,a.jsx)(s.span,{className:"hljs-type",children:"View"})," {\n        content\n            ",(0,a.jsx)(s.span,{className:"hljs-comment",children:"// Setting the state value the environment"}),"\n            .environment(\\.editMode, editMode)\n            .onReceive(",(0,a.jsx)(s.span,{className:"hljs-type",children:"NotificationCenter"}),".default\n                ",(0,a.jsx)(s.span,{className:"hljs-comment",children:'// Using the Notification.Name "change_edit_mode" to recieve edit mode changes'}),"\n                .publisher(for: ",(0,a.jsx)(s.span,{className:"hljs-type",children:"Notification"}),".",(0,a.jsx)(s.span,{className:"hljs-type",children:"Name"}),"(rawValue: ",(0,a.jsx)(s.span,{className:"hljs-string",children:'"change_edit_mode"'}),")), perform: { output ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"in"}),"\n                    ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"guard"})," ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"let"})," newEditMode ",(0,a.jsx)(s.span,{className:"hljs-operator",children:"="})," output.object ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"as?"})," ",(0,a.jsx)(s.span,{className:"hljs-type",children:"EditMode"}),", newEditMode ",(0,a.jsx)(s.span,{className:"hljs-operator",children:"!="})," editMode ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"else"})," { ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"return"})," }\n                    ",(0,a.jsx)(s.span,{className:"hljs-comment",children:"// Updating the edit mode state when publisher has recieved a new value."}),"\n                    editMode ",(0,a.jsx)(s.span,{className:"hljs-operator",children:"="})," newEditMode\n                })\n    }\n}\n\n",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"extension"})," ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"View"})," {\n    ",(0,a.jsx)(s.span,{className:"hljs-comment",children:"// Our uniform view modifier"}),"\n    ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"func"})," ",(0,a.jsx)(s.span,{className:"hljs-title function_",children:"withEditMode"}),"() -> ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"some"})," ",(0,a.jsx)(s.span,{className:"hljs-type",children:"View"})," {\n        ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"self"}),"\n            .modifier(",(0,a.jsx)(s.span,{className:"hljs-type",children:"EditModeViewModifier"}),"())\n    }\n}\n"]})}),(0,a.jsx)(s.h3,{children:"EditButton"}),(0,a.jsxs)(s.p,{children:["This loosely coupled view can toggle between ",(0,a.jsx)(s.code,{children:"EditMode"}),"'s by posting to ",(0,a.jsx)(s.code,{children:"NotificationCenter"}),"."]}),(0,a.jsx)(s.pre,{children:(0,a.jsxs)(s.code,{className:"hljs language-swift",children:[(0,a.jsx)(s.span,{className:"hljs-keyword",children:"struct"})," ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"EditButton"}),": ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"View"})," {\n    ",(0,a.jsx)(s.span,{className:"hljs-meta",children:"@Environment"}),"(\\.editMode) ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"var"})," editMode\n\n    ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"var"})," body: ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"some"})," ",(0,a.jsx)(s.span,{className:"hljs-type",children:"View"})," {\n        ",(0,a.jsx)(s.span,{className:"hljs-type",children:"Button"}),"(action: {\n            ",(0,a.jsx)(s.span,{className:"hljs-type",children:"NotificationCenter"}),".default.post(\n                ",(0,a.jsx)(s.span,{className:"hljs-comment",children:'// Using the Notification.Name "change_edit_mode" to post new edit mode changes'}),"\n                name: ",(0,a.jsx)(s.span,{className:"hljs-type",children:"Notification"}),".",(0,a.jsx)(s.span,{className:"hljs-type",children:"Name"}),"(rawValue: ",(0,a.jsx)(s.span,{className:"hljs-string",children:'"change_edit_mode"'}),"),\n                object: editMode.isEditing ",(0,a.jsx)(s.span,{className:"hljs-operator",children:"?"})," ",(0,a.jsx)(s.span,{className:"hljs-type",children:"EditMode"}),".inactive : ",(0,a.jsx)(s.span,{className:"hljs-type",children:"EditMode"}),".active,\n                userInfo: ",(0,a.jsx)(s.span,{className:"hljs-literal",children:"nil"}),")\n        }) {\n            ",(0,a.jsx)(s.span,{className:"hljs-type",children:"Text"}),"(editMode.isEditing ",(0,a.jsx)(s.span,{className:"hljs-operator",children:"?"})," ",(0,a.jsx)(s.span,{className:"hljs-string",children:'"Done"'})," : ",(0,a.jsx)(s.span,{className:"hljs-string",children:'"Edit"'}),")\n        }\n    }\n}\n"]})}),(0,a.jsx)(s.h3,{children:"Usage"}),(0,a.jsxs)(s.p,{children:["Now let's use our convient ",(0,a.jsx)(s.code,{children:"EditButton"})," with our also very convinient view modifier."]}),(0,a.jsx)(s.pre,{children:(0,a.jsxs)(s.code,{className:"hljs language-swift",children:[(0,a.jsx)(s.span,{className:"hljs-keyword",children:"struct"})," ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"ContentView"}),": ",(0,a.jsx)(s.span,{className:"hljs-title class_",children:"View"})," {\n    ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"var"})," body: ",(0,a.jsx)(s.span,{className:"hljs-keyword",children:"some"})," ",(0,a.jsx)(s.span,{className:"hljs-type",children:"View"})," {\n        ",(0,a.jsx)(s.span,{className:"hljs-type",children:"VStack"})," {\n            ",(0,a.jsx)(s.span,{className:"hljs-type",children:"EditButton"}),"()\n            ",(0,a.jsx)(s.span,{className:"hljs-type",children:"ChildView"}),"()\n        }\n        .withEditMode()\n    }\n}\n"]})}),(0,a.jsxs)(s.p,{children:["\ud83c\udf89 That's all, now we have ",(0,a.jsx)(s.code,{children:"EditMode"})," when developing our apps for macOS. \ud83c\udf89"]})]})}s.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=Object.assign({},(0,l.ah)(),e.components),n=s.wrapper;return n?(0,a.jsx)(n,Object.assign({},e,{children:(0,a.jsx)(t,e)})):t(e)}},1151:function(e,s,n){"use strict";n.d(s,{ah:function(){return i}});var a=n(7294);const l=a.createContext({});function i(e){const s=a.useContext(l);return a.useMemo((()=>"function"===typeof e?e(s):{...s,...e}),[s,e])}}},function(e){e.O(0,[570,774,888,179],(function(){return s=3089,e(e.s=s);var s}));var s=e.O();_N_E=s}]);