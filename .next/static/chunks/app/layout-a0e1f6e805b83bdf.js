(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4197:function(e,r,t){Promise.resolve().then(t.t.bind(t,8877,23)),Promise.resolve().then(t.bind(t,4783)),Promise.resolve().then(t.bind(t,2145)),Promise.resolve().then(t.bind(t,3530)),Promise.resolve().then(t.bind(t,1507)),Promise.resolve().then(t.bind(t,1726)),Promise.resolve().then(t.bind(t,9776)),Promise.resolve().then(t.bind(t,1142)),Promise.resolve().then(t.t.bind(t,9695,23)),Promise.resolve().then(t.t.bind(t,5672,23)),Promise.resolve().then(t.t.bind(t,2440,23))},4783:function(e,r,t){"use strict";t.r(r),t.d(r,{ThemeProvider:function(){return ThemeProvider},useTheme:function(){return useTheme}});var n=t(6705),o=t(955);let s=(0,o.createContext)(void 0);function ThemeProvider(e){let{children:r}=e,[t,i]=(0,o.useState)(""),handleThemeChange=()=>{"dark"!==localStorage.theme&&("theme"in localStorage||!window.matchMedia("(prefers-color-scheme: dark)").matches)?(i("light"),document.documentElement.classList.remove("dark")):(i("dark"),document.documentElement.classList.add("dark"))};return(0,o.useEffect)(()=>{handleThemeChange()},[t]),(0,n.jsx)(s.Provider,{value:{mode:t,setMode:i},children:r})}function useTheme(){let e=(0,o.useContext)(s);if(void 0===e)throw Error("useTheme must be used within a ThemeProvider");return e}},8877:function(){},2440:function(){},9695:function(e){e.exports={style:{fontFamily:"'__Inter_d04102', '__Inter_Fallback_d04102'",fontStyle:"normal"},className:"__className_d04102",variable:"__variable_d04102"}},5672:function(e){e.exports={style:{fontFamily:"'__Space_Grotesk_b512f8', '__Space_Grotesk_Fallback_b512f8'",fontStyle:"normal"},className:"__className_b512f8",variable:"__variable_b512f8"}},9991:function(e,r,t){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(955),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function q(e,r,t){var n,s={},c=null,_=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(_=r.ref),r)i.call(r,n)&&!l.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:c,ref:_,props:s,_owner:a.current}}r.Fragment=s,r.jsx=q,r.jsxs=q},6705:function(e,r,t){"use strict";e.exports=t(9991)}},function(e){e.O(0,[869,121,26,744],function(){return e(e.s=4197)}),_N_E=e.O()}]);