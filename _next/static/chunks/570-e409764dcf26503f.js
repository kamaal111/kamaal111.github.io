(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[570],{987:function(e,t){"use strict";t.default=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce((function(e,t){if(null==t)return e;if("string"==typeof t)return[].concat(e,[t]);var n=Object.entries(t).filter((function(e){return e[1]})).map((function(e){return e[0]}));return[].concat(e,n)}),[]).join(" ")}},1539:function(e,t,n){"use strict";e.exports=n(987)},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(7294))&&o.__esModule?o:{default:o},a=n(6273),f=n(2725),l=n(3462),i=n(1018),c=n(7190),s=n(1210),d=n(8684);var p="undefined"!==typeof u.default.useTransition,v={};function y(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var b=u.default.forwardRef((function(e,t){var n,o=e.href,b=e.as,h=e.children,g=e.prefetch,m=e.passHref,_=e.replace,M=e.shallow,j=e.scroll,C=e.locale,O=e.onClick,x=e.onMouseEnter,E=e.legacyBehavior,k=void 0===E?!0!==Boolean(!1):E,w=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=h,!k||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var L=!1!==g,R=r(p?u.default.useTransition():[],2)[1],A=u.default.useContext(l.RouterContext),I=u.default.useContext(i.AppRouterContext);I&&(A=I);var P,S=u.default.useMemo((function(){var e=r(a.resolveHref(A,o,!0),2),t=e[0],n=e[1];return{href:t,as:b?a.resolveHref(A,b):n||t}}),[A,o,b]),U=S.href,T=S.as,B=u.default.useRef(U),D=u.default.useRef(T);k&&(P=u.default.Children.only(n));var H=k?P&&"object"===typeof P&&P.ref:t,K=r(c.useIntersection({rootMargin:"200px"}),3),N=K[0],Z=K[1],q=K[2],z=u.default.useCallback((function(e){D.current===T&&B.current===U||(q(),D.current=T,B.current=U),N(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[T,H,U,q,N]);u.default.useEffect((function(){var e=Z&&L&&a.isLocalURL(U),t="undefined"!==typeof C?C:A&&A.locale,n=v[U+"%"+T+(t?"%"+t:"")];e&&!n&&y(A,U,T,{locale:t})}),[T,U,Z,C,L,A]);var $={ref:z,onClick:function(e){k||"function"!==typeof O||O(e),k&&P.props&&"function"===typeof P.props.onClick&&P.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,f,l,i){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var c=function(){t[o?"replace":"push"](n,r,{shallow:u,locale:l,scroll:f})};i?i(c):c()}}(e,A,U,T,_,M,j,C,I?R:void 0)},onMouseEnter:function(e){k||"function"!==typeof x||x(e),k&&P.props&&"function"===typeof P.props.onMouseEnter&&P.props.onMouseEnter(e),a.isLocalURL(U)&&y(A,U,T,{priority:!0})}};if(!k||m||"a"===P.type&&!("href"in P.props)){var F="undefined"!==typeof C?C:A&&A.locale,G=A&&A.isLocaleDomain&&s.getDomainLocale(T,F,A.locales,A.domainLocales);$.href=G||d.addBasePath(f.addLocale(T,F,A&&A.defaultLocale))}return k?u.default.cloneElement(P,$):u.default.createElement("a",Object.assign({},w,$),n)}));t.default=b,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,i=e.disabled||!a,c=o.useRef(),s=r(o.useState(!1),2),d=s[0],p=s[1],v=r(o.useState(null),2),y=v[0],b=v[1];o.useEffect((function(){if(a){if(c.current&&(c.current(),c.current=void 0),i||d)return;return y&&y.tagName&&(c.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=f.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},l.push(n),f.set(n,t),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),f.delete(o);var t=l.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&l.splice(t,1)}}}(y,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==c.current||c.current(),c.current=void 0}}if(!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[y,i,n,t,d]);var h=o.useCallback((function(){p(!1)}),[]);return[b,d,h]};var o=n(7294),u=n(9311),a="function"===typeof IntersectionObserver;var f=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AppRouterContext=void 0;var o=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.AppRouterContext=o},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},603:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return o}})}}]);