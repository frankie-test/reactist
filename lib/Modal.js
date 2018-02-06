!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("react-dom")):"function"==typeof define&&define.amd?define("reactist",["react","react-dom"],t):"object"==typeof exports?exports.reactist=t(require("react"),require("react-dom")):e.reactist=t(e.React,e.ReactDOM)}("undefined"!=typeof self?self:this,function(e,t){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=173)}({1:function(t,n){t.exports=e},11:function(e,n){e.exports=t},173:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();n(174);var s=n(1),c=o(s),u=n(11),f=o(u),d=n(2),p=o(d),h=n(176),m=o(h),y=function(e){function t(e,n){r(this,t);var o=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return o._handleKeyDown=o._handleKeyDown.bind(o),o._closeModal=o._closeModal.bind(o),o._handleOverlayClick=o._handleOverlayClick.bind(o),window.addEventListener("keydown",o._handleKeyDown),window.addEventListener("click",o._handleOverlayClick),o}return i(t,e),l(t,[{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this._handleKeyDown),window.removeEventListener("click",this._handleOverlayClick)}},{key:"_closeModal",value:function(){f.default.unmountComponentAtNode(document.getElementById("modal_box"))}},{key:"_handleKeyDown",value:function(e){27===e.keyCode&&this._closeModal()}},{key:"_handleOverlayClick",value:function(e){this.props.closeOnOverlayClick&&e&&e.target&&"reactist-overlay"===e.target.id&&this._closeModal()}},{key:"render",value:function(){var e="reactist_modal_box";return this.props.large&&(e+=" large"),this.props.className&&(e+=" "+this.props.className),c.default.createElement("div",{className:"reactist_overlay",id:"reactist-overlay"},c.default.createElement("div",{className:e},this.props.children))}}]),t}(c.default.Component);y.displayName="Modal.Box",y.defaultProps={large:!1,closeOnOverlayClick:!1},y.propTypes={className:p.default.string,large:p.default.bool,closeOnOverlayClick:p.default.bool,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node])};var b=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"_closeModal",value:function(e){e.preventDefault(),"function"==typeof this.props.beforeClose&&this.props.beforeClose(),f.default.unmountComponentAtNode(document.getElementById("modal_box"))}},{key:"render",value:function(){return c.default.createElement("div",{className:"reactist_modal_box__header"},c.default.createElement("p",null,this.props.title&&c.default.createElement("span",{className:"title"},this.props.title),this.props.subtitle&&c.default.createElement("span",{className:"subtitle"},this.props.subtitle),this.props.children),c.default.createElement("a",{className:"close",onClick:this._closeModal.bind(this),href:"#"},c.default.createElement(m.default,null)))}}]),t}(c.default.Component);b.displayName="Modal.Header",b.propTypes={children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),title:p.default.string,subtitle:p.default.string,beforeClose:p.default.func};var _=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"_closeModal",value:function(e){e.preventDefault(),f.default.unmountComponentAtNode(document.getElementById("modal_box"))}},{key:"render",value:function(){var e="reactist_modal_box__body";return this.props.className&&(e+=" "+this.props.className),c.default.createElement("div",{className:e},this.props.showCloseIcon&&c.default.createElement("a",{className:"close",onClick:this._closeModal.bind(this),href:"#"},c.default.createElement(m.default,null)),this.props.icon?c.default.createElement("div",{className:"dialog"},c.default.createElement("div",{className:"icon"},this.props.icon),c.default.createElement("div",{className:"content"},this.props.children)):this.props.children)}}]),t}(c.default.Component);_.displayName="Modal.Body",_.defaultProps={showCloseIcon:!1},_.propTypes={icon:p.default.node,showCloseIcon:p.default.bool,className:p.default.string,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node])};var v=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),l(t,[{key:"_onClick",value:function(e){"function"==typeof e&&e(),f.default.unmountComponentAtNode(document.getElementById("modal_box"))}},{key:"render",value:function(){var e=this,t=c.default.Children.map(this.props.children,function(t){return!!t&&(t.props.close?c.default.cloneElement(t,{onClick:function(){return e._onClick(t.props.onClick)}}):c.default.cloneElement(t))});return c.default.createElement("div",{className:"reactist_modal_box__actions"},t)}}]),t}(c.default.Component);v.displayName="Modal.Actions",v.propTypes={children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node])},t.default={Box:y,Header:b,Body:_,Actions:v}},174:function(e,t,n){var o=n(175);"string"==typeof o&&(o=[[e.i,o,""]]);var r={hmr:!0};r.transform=void 0,n(4)(o,r),o.locals&&(e.exports=o.locals)},175:function(e,t,n){t=e.exports=n(3)(!1),t.push([e.i,'@keyframes fadein{0%{opacity:0}to{opacity:1}}@keyframes spinner-bouncedelay{0%,80%,to{transform:scale(0)}40%{transform:scale(1)}}.reactist_overlay{position:fixed;top:0;right:0;bottom:0;left:0;display:flex;align-items:flex-start;justify-content:center;z-index:2;background:rgba(0,0,0,.7);overflow:auto;padding-top:60px;animation:fadein .25s}.reactist_modal_box{overflow:auto;overflow-x:hidden;width:580px;border-radius:4px;box-shadow:0 2px 8px 0 rgba(0,0,0,.16);margin-bottom:60px}.reactist_modal_box.large{width:60%;max-width:1000px}@media only screen and (max-width:992px){.reactist_modal_box,.reactist_modal_box.large{width:calc(100% - 120px)}}.reactist_modal_box__header{display:flex;align-items:center;background-color:#f9f9f9;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom:1px solid #fafafa}.reactist_modal_box__header p{margin:0 0 0 25px;padding:10px 0;font-size:.875rem;color:#404040;font-weight:700;line-height:1.7}.reactist_modal_box__header .title{font-size:1rem;color:#404040;font-weight:700;line-height:1.8;display:block;margin-top:5px}.reactist_modal_box__header .subtitle{font-size:.81rem;color:#a5a5a5;font-weight:400;line-height:1.6;display:block;margin-top:5px}.reactist_modal_box__header a{display:flex;align-items:center;justify-content:center;width:46px;height:46px;margin-left:auto;margin-right:8px}.reactist_modal_box__body{padding:20px 25px 25px;background-color:#fff;font-size:.875rem;color:#404040;font-weight:400;line-height:1.7}.reactist_modal_box__body .dialog{overflow:auto}.reactist_modal_box__body .dialog .icon{width:42px;float:left;margin-right:20px}.reactist_modal_box__body .dialog .icon>*{max-height:42px;max-width:100%}.reactist_modal_box__body .dialog .content{float:right;width:calc(100% - 62px)}.reactist_modal_box__body .dialog .content h1{margin:0;font-size:.875rem;color:#404040;font-weight:700;line-height:1.7;line-height:1}.reactist_modal_box__body:after{clear:both;content:"";display:block}.reactist_modal_box__body .close{float:right}.reactist_modal_box__actions{display:flex;justify-content:flex-end;padding:20px 25px;background-color:#fff;border-top:1px solid #ececec}.reactist_modal_box__actions button{margin-left:10px}',""])},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=function(e){return e&&e.__esModule?e:{default:e}}(o),a=function(){return r.default.createElement("svg",{width:"12",height:"12",viewBox:"0 0 12 12"},r.default.createElement("path",{d:"M12 1.427L10.573 0 5.997 4.576 1.424.003l-1.42 1.42 4.572 4.574L0 10.573 1.427 12l4.576-4.576 4.573 4.573 1.42-1.42-4.572-4.574L12 1.427z",fillRule:"evenodd",fill:"#B3B3B3"}))};t.default=a},2:function(e,t,n){e.exports=n(6)()},3:function(e,t){function n(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=o(r);return[n].concat(r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"})).concat([a]).join("\n")}return[n].join("\n")}function o(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var o=n(t,e);return t[2]?"@media "+t[2]+"{"+o+"}":o}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var o={},r=0;r<this.length;r++){var a=this[r][0];"number"==typeof a&&(o[a]=!0)}for(r=0;r<e.length;r++){var i=e[r];"number"==typeof i[0]&&o[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),t.push(i))}},t}},4:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],r=h[o.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](o.parts[a]);for(;a<o.parts.length;a++)r.parts.push(u(o.parts[a],t))}else{for(var i=[],a=0;a<o.parts.length;a++)i.push(u(o.parts[a],t));h[o.id]={id:o.id,refs:1,parts:i}}}}function r(e,t){for(var n=[],o={},r=0;r<e.length;r++){var a=e[r],i=t.base?a[0]+t.base:a[0],l=a[1],s=a[2],c=a[3],u={css:l,media:s,sourceMap:c};o[i]?o[i].parts.push(u):n.push(o[i]={id:i,parts:[u]})}return n}function a(e,t){var n=y(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=v[v.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=y(e.insertInto+" "+e.insertAt.before);n.insertBefore(t,r)}}function i(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function l(e){var t=document.createElement("style");return e.attrs.type="text/css",c(t,e.attrs),a(e,t),t}function s(e){var t=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",c(t,e.attrs),a(e,t),t}function c(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function u(e,t){var n,o,r,a;if(t.transform&&e.css){if(!(a=t.transform(e.css)))return function(){};e.css=a}if(t.singleton){var c=_++;n=b||(b=l(t)),o=f.bind(null,n,c,!1),r=f.bind(null,n,c,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),o=p.bind(null,n,t),r=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),o=d.bind(null,n),r=function(){i(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else r()}}function f(e,t,n,o){var r=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var a=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t,n){var o=n.css,r=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||a)&&(o=g(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([o],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(i),l&&URL.revokeObjectURL(l)}var h={},m=function(e){var t;return function(){return void 0===t&&(t=e.apply(this,arguments)),t}}(function(){return window&&document&&document.all&&!window.atob}),y=function(e){var t={};return function(n){if(void 0===t[n]){var o=e.call(this,n);if(o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}t[n]=o}return t[n]}}(function(e){return document.querySelector(e)}),b=null,_=0,v=[],g=n(5);e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},t.attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=m()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=r(e,t);return o(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var l=n[i],s=h[l.id];s.refs--,a.push(s)}e&&o(r(e,t),t);for(var i=0;i<a.length;i++){var s=a[i];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete h[s.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},5:function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,o=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return e;var a;return a=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(a)+")"})}},6:function(e,t,n){"use strict";var o=n(7),r=n(8),a=n(9);e.exports=function(){function e(e,t,n,o,i,l){l!==a&&r(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=o,n.PropTypes=n,n}},7:function(e,t,n){"use strict";function o(e){return function(){return e}}var r=function(){};r.thatReturns=o,r.thatReturnsFalse=o(!1),r.thatReturnsTrue=o(!0),r.thatReturnsNull=o(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},8:function(e,t,n){"use strict";function o(e,t,n,o,a,i,l,s){if(r(t),!e){var c;if(void 0===t)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,a,i,l,s],f=0;c=new Error(t.replace(/%s/g,function(){return u[f++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}}var r=function(e){};e.exports=o},9:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}})});
//# sourceMappingURL=Modal.map