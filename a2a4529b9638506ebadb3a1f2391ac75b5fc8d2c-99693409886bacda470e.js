(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8+s/":function(e,t,n){"use strict";var r,i=n("q1tI"),a=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):n&&(s=n(s))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return s},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){u.push(this),l()},o.componentDidUpdate=function(){l()},o.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},o.render=function(){return a.createElement(r,this.props)},i}(i.PureComponent);return o(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),o(f,"canUseDOM",c),f}}},"9d8Q":function(e,t,n){},AhtJ:function(e,t,n){e.exports={footer:"footer-module--footer--28Udz"}},FfUf:function(e,t,n){},FvRn:function(e,t,n){e.exports={main:"main-module--main--1os6-"}},"I/Ru":function(e,t,n){"use strict";var r=n("nKUr"),i=(n("q1tI"),n("9d8Q"),n("FfUf"),n("OyDQ"),n("Wbzz")),a=n("OazO"),o=n.n(a),c=function(e){var t,n=e.data,a=null==n||null===(t=n.site)||void 0===t?void 0:t.siteMetadata;return Object(r.jsxs)("header",{className:o.a.header,children:[Object(r.jsxs)("div",{className:o.a.titleArea,children:[Object(r.jsx)("h1",{className:o.a.siteTitle,children:Object(r.jsx)(i.Link,{to:"/",className:o.a.titleLink,children:null==a?void 0:a.title})}),Object(r.jsx)("p",{className:o.a.subtitle,children:null==a?void 0:a.subtitle})]}),Object(r.jsx)("nav",{className:o.a.nav,children:Object(r.jsxs)("ul",{className:o.a.menu,children:[Object(r.jsx)("li",{className:o.a.navLink,children:Object(r.jsx)(i.Link,{to:"/gen",activeClassName:"active",children:"Gen"})}),Object(r.jsx)("li",{className:o.a.navLink+" "+o.a.disabled,children:Object(r.jsx)(i.Link,{to:"/morph",activeClassName:"active",children:"Morph"})}),Object(r.jsx)("li",{className:o.a.navLink,children:Object(r.jsx)(i.Link,{to:"/deriv",activeClassName:"active",children:"Deriv"})}),Object(r.jsx)("li",{className:o.a.navLink,children:Object(r.jsx)(i.Link,{to:"/frequen",activeClassName:"active",children:"Frequen"})}),Object(r.jsx)("li",{className:o.a.navLink+" "+o.a.disabled,children:Object(r.jsx)(i.Link,{to:"/tree",activeClassName:"active",children:"Tree"})}),Object(r.jsx)("li",{className:o.a.navLink+" "+o.a.disabled,children:Object(r.jsx)(i.Link,{to:"/lex",activeClassName:"active",children:"Lex"})})]})})]})},s=function(e){var t=Object(i.useStaticQuery)("326269449");return Object(r.jsx)(c,Object.assign({},e,{data:t}))},u=n("FGyW"),l=(n("jDDT"),n("FvRn")),f=n.n(l),d=function(e){var t=e.children;return Object(r.jsxs)("main",{className:f.a.main,children:[t,Object(r.jsx)(u.b,{draggablePercent:60,position:u.c.POSITION.BOTTOM_CENTER,transition:u.a})]})},p=n("AhtJ"),h=n.n(p),b=function(e){var t,n,i=e.data,a=null==i||null===(t=i.site)||void 0===t?void 0:t.siteMetadata;return Object(r.jsx)("footer",{className:h.a.footer,children:Object(r.jsxs)("p",{className:h.a.copyright,children:[Object(r.jsxs)("a",{href:(null==a?void 0:a.appGhURL)+"/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer",children:["Version ",Object(r.jsx)("i",{className:"fas fa-code"})," ",null==a?void 0:a.version]}),". Built by"," ",Object(r.jsx)("a",{href:null==a?void 0:a.authorURL,target:"_blank",rel:"noopener noreferrer",children:null==a?void 0:a.author}),", copyright © ",(n=(new Date).getFullYear(),n>2017?"2017"+String.fromCharCode(8211)+n:2017..toString())," under the"," ",Object(r.jsxs)("a",{href:"https://choosealicense.com/licenses/agpl-3.0/",target:"_blank",rel:"noopener noreferrer",children:["AGPL-3.0 ",Object(r.jsx)("i",{className:"fas fa-gavel"})," license"]}),"."," ",Object(r.jsxs)("a",{href:null==a?void 0:a.appGhURL,target:"_blank",rel:"noopener noreferrer",children:["View this project on ",Object(r.jsx)("i",{className:"fab fa-github"})," GitHub."]})]})})},m=function(e){var t=Object(i.useStaticQuery)("841973984");return Object(r.jsx)(b,Object.assign({},e,{data:t}))},y=n("VtjL"),v=n.n(y);t.a=function(e){var t=e.children;return Object(r.jsxs)("div",{className:v.a.app,children:[Object(r.jsx)(s,{}),Object(r.jsx)(d,{children:t}),Object(r.jsx)(m,{})]})}},OazO:function(e,t,n){e.exports={header:"header-module--header--1ceFV",titleArea:"header-module--title-area--39TV4",siteTitle:"header-module--site-title--hulq0",titleLink:"header-module--title-link--p94SR",subtitle:"header-module--subtitle--3WSOv",nav:"header-module--nav--1awZZ",menu:"header-module--menu--1bNeR",navLink:"header-module--nav-link--10DzF",disabled:"header-module--disabled--2Y9Rx"}},OyDQ:function(e,t,n){},VtjL:function(e,t,n){e.exports={app:"layout-module--app--2z5tk"}},bmMU:function(e,t){var n="undefined"!=typeof Element,r="function"==typeof Map,i="function"==typeof Set,a="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;e.exports=function(e,t){try{return function e(t,o){if(t===o)return!0;if(t&&o&&"object"==typeof t&&"object"==typeof o){if(t.constructor!==o.constructor)return!1;var c,s,u,l;if(Array.isArray(t)){if((c=t.length)!=o.length)return!1;for(s=c;0!=s--;)if(!e(t[s],o[s]))return!1;return!0}if(r&&t instanceof Map&&o instanceof Map){if(t.size!==o.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!o.has(s.value[0]))return!1;for(l=t.entries();!(s=l.next()).done;)if(!e(s.value[1],o.get(s.value[0])))return!1;return!0}if(i&&t instanceof Set&&o instanceof Set){if(t.size!==o.size)return!1;for(l=t.entries();!(s=l.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(a&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(o)){if((c=t.length)!=o.length)return!1;for(s=c;0!=s--;)if(t[s]!==o[s])return!1;return!0}if(t.constructor===RegExp)return t.source===o.source&&t.flags===o.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===o.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===o.toString();if((c=(u=Object.keys(t)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,u[s]))return!1;if(n&&t instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!t.$$typeof)&&!e(t[u[s]],o[u[s]]))return!1;return!0}return t!=t&&o!=o}(e,t)}catch(o){if((o.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw o}}},jDDT:function(e,t,n){},jNNy:function(e,t,n){"use strict";var r=n("nKUr"),i=(n("q1tI"),n("qhky")),a=n("Wbzz"),o=function(e){var t,n=e.data,a=e.canonical,o=e.description,c=e.lang,s=e.meta,u=e.title,l=null==n||null===(t=n.site)||void 0===t?void 0:t.siteMetadata,f=o||(null==l?void 0:l.description),d=null==l?void 0:l.title,p=null==l?void 0:l.canonical;return p&&a&&(p+=a),Object(r.jsx)(i.a,{htmlAttributes:{lang:c},title:u,titleTemplate:d?"%s | "+d:null,meta:[{name:"description",content:f},{name:"canonical",content:p},{property:"og:title",content:u},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:(null==l?void 0:l.author)||""},{name:"twitter:title",content:u},{name:"twitter:description",content:f}].concat(s)})};o.defaultProps={lang:"en",meta:[],description:""};t.a=function(e){var t=Object(a.useStaticQuery)("4051994697");return Object(r.jsx)(o,Object.assign({},e,{data:t}))}},qhky:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return be}));var r,i,a,o,c=n("17x9"),s=n.n(c),u=n("8+s/"),l=n.n(u),f=n("bmMU"),d=n.n(f),p=n("q1tI"),h=n.n(p),b=n("YVoz"),m=n.n(b),y="bodyAttributes",v="htmlAttributes",j="titleAttributes",O={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(O).map((function(e){return O[e]})),"charset"),g="cssText",w="href",A="http-equiv",C="innerHTML",x="itemprop",S="name",E="property",k="rel",L="src",N="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},I="defaultTitle",M="defer",R="encodeSpecialCharacters",D="onChangeClientState",q="titleTemplate",_=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),F=[O.NOSCRIPT,O.SCRIPT,O.STYLE],U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},V=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},G=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=$(e,O.TITLE),n=$(e,q);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,I);return t||r||void 0},Q=function(e){return $(e,D)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[O.BASE]})).map((function(e){return e[O.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var a=r[i].toLowerCase();if(-1!==e.indexOf(a)&&n[a])return t.concat(n)}return t}),[])},Z=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,a=Object.keys(e),o=0;o<a.length;o++){var c=a[o],s=c.toLowerCase();-1===t.indexOf(s)||n===k&&"canonical"===e[n].toLowerCase()||s===k&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==C&&c!==g&&c!==x||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var c=a[o],s=m()({},r[c],i[c]);r[c]=s}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},X=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){X(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||X:e.requestAnimationFrame||X,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:e.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,d=e.titleAttributes;se(O.BODY,r),se(O.HTML,i),ce(f,d);var p={baseTag:ue(O.BASE,n),linkTags:ue(O.LINK,a),metaTags:ue(O.META,o),noscriptTags:ue(O.NOSCRIPT,c),scriptTags:ue(O.SCRIPT,u),styleTags:ue(O.STYLE,l)},h={},b={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(b[e]=p[e].oldTags)})),t&&t(),s(e,h,b)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(O.TITLE,t)},se=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-react-helmet"),i=r?r.split(","):[],a=[].concat(i),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===i.indexOf(s)&&i.push(s);var l=a.indexOf(s);-1!==l&&a.splice(l,1)}for(var f=a.length-1;f>=0;f--)n.removeAttribute(a[f]);i.length===a.length?n.removeAttribute("data-react-helmet"):n.getAttribute("data-react-helmet")!==o.join(",")&&n.setAttribute("data-react-helmet",o.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(O.HEAD),r=n.querySelectorAll(e+"[data-react-helmet]"),i=Array.prototype.slice.call(r),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===C)n.innerHTML=t.innerHTML;else if(r===g)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute("data-react-helmet","true"),i.some((function(e,t){return o=t,n.isEqualNode(e)}))?i.splice(o,1):a.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:a}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[P[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case O.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})["data-react-helmet"]=!0,i=fe(n,r),[h.a.createElement(O.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=le(n),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+G(a,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+G(a,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case v:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})["data-react-helmet"]=!0,r);return Object.keys(t).forEach((function(e){var n=P[e]||e;if(n===C||n===g){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),h.a.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===C||e===g)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+G(r[t],n)+'"';return e?e+" "+i:i}),""),a=r.innerHTML||r.cssText||"",o=-1===F.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,d=e.titleAttributes;return{base:de(O.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(v,i,r),link:de(O.LINK,a,r),meta:de(O.META,o,r),noscript:de(O.NOSCRIPT,c,r),script:de(O.SCRIPT,s,r),style:de(O.STYLE,u,r),title:de(O.TITLE,{title:f,titleAttributes:d},r)}},he=l()((function(e){return{baseTag:J([w,N],e),bodyAttributes:W(y,e),defer:$(e,M),encode:$(e,R),htmlAttributes:W(v,e),linkTags:Z(O.LINK,[k,w],e),metaTags:Z(O.META,[S,T,A,E,x],e),noscriptTags:Z(O.NOSCRIPT,[C],e),onChangeClientState:Q(e),scriptTags:Z(O.SCRIPT,[L,C],e),styleTags:Z(O.STYLE,[g],e),title:K(e),titleAttributes:W(j,e)}}),(function(e){ie&&ne(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),pe)((function(){return null})),be=(i=he,o=a=function(e){function t(){return z(this,t),V(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!d()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case O.SCRIPT:case O.NOSCRIPT:return{innerHTML:t};case O.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return H({},r,((t={})[n.type]=[].concat(r[n.type]||[],[H({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(r.type){case O.TITLE:return H({},i,((t={})[r.type]=o,t.titleAttributes=H({},a),t));case O.BODY:return H({},i,{bodyAttributes:H({},a)});case O.HTML:return H({},i,{htmlAttributes:H({},a)})}return H({},i,((n={})[r.type]=H({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=H({},t);return Object.keys(e).forEach((function(t){var r;n=H({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return h.a.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[_[n]||n]=e[n],t}),t)}(Y(i,["children"]));switch(n.warnOnInvalidChildren(e,a),e.type){case O.LINK:case O.META:case O.NOSCRIPT:case O.SCRIPT:case O.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:o,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=H({},n);return t&&(r=this.mapChildrenToProps(t,r)),h.a.createElement(i,r)},B(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(h.a.Component),a.propTypes={base:s.a.object,bodyAttributes:s.a.object,children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),defaultTitle:s.a.string,defer:s.a.bool,encodeSpecialCharacters:s.a.bool,htmlAttributes:s.a.object,link:s.a.arrayOf(s.a.object),meta:s.a.arrayOf(s.a.object),noscript:s.a.arrayOf(s.a.object),onChangeClientState:s.a.func,script:s.a.arrayOf(s.a.object),style:s.a.arrayOf(s.a.object),title:s.a.string,titleAttributes:s.a.object,titleTemplate:s.a.string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);be.renderStatic=be.rewind}).call(this,n("yLpj"))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n}}]);
//# sourceMappingURL=a2a4529b9638506ebadb3a1f2391ac75b5fc8d2c-99693409886bacda470e.js.map