/*! For license information please see stories-Kezdolap-mdx.1f660177.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkcollabit_storybook=self.webpackChunkcollabit_storybook||[]).push([[765],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./src/stories/Kezdolap.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");const logo_namespaceObject="data:image/png;base64,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";function _createMdxContent(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Kezdőlap"}),"\n",(0,jsx_runtime.jsxs)("div",{className:"sb-container",children:[(0,jsx_runtime.jsx)("img",{src:logo_namespaceObject,alt:"CollabIT logo"}),(0,jsx_runtime.jsx)("h1",{children:"CollabIT Components Gallery"})]}),"\n",(0,jsx_runtime.jsx)("style",{children:"\n  .sb-container {\n    margin-bottom: 48px;\n    text-align: center;\n  }\n  "})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent()}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./node_modules/tslib/tslib.es6.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C6:()=>__extends,Cg:()=>__decorate,Cl:()=>__assign,Tt:()=>__rest,fX:()=>__spreadArray});var extendStatics=function(d,b){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(d[p]=b[p])},extendStatics(d,b)};function __extends(d,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(null!=s&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]])}return t}function __decorate(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}Object.create;function __spreadArray(to,from,pack){if(pack||2===arguments.length)for(var ar,i=0,l=from.length;i<l;i++)!ar&&i in from||(ar||(ar=Array.prototype.slice.call(from,0,i)),ar[i]=from[i]);return to.concat(ar||Array.prototype.slice.call(from))}Object.create;"function"==typeof SuppressedError&&SuppressedError}}]);