"use strict";exports.id=1326,exports.ids=[1326],exports.modules={81326:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return dynamic}});let n=l(71974);l(53830);let a=n._(l(32227));function convertModule(e){return{default:(null==e?void 0:e.default)||e}}function dynamic(e,t){let l=a.default,n={loading:e=>{let{error:t,isLoading:l,pastDelay:n}=e;return null}};"function"==typeof e&&(n.loader=e),Object.assign(n,t);let o=n.loader;return l({...n,loader:()=>null!=o?o().then(convertModule):Promise.resolve(convertModule(()=>null))})}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},20574:(e,t,l)=>{let{createProxy:n}=l(17536);e.exports=n("C:\\Users\\af_K_ar\\stack_overflow_nextjs14\\node_modules\\next\\dist\\shared\\lib\\lazy-dynamic\\dynamic-no-ssr.js")},32227:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _default}});let n=l(71974),a=n._(l(53830)),o=l(20574),_default=function(e){let t=Object.assign({loader:null,loading:null,ssr:!0},e);function LoadableComponent(e){let l=t.loading,n=a.default.createElement(l,{isLoading:!0,pastDelay:!0,error:null}),u=t.ssr?a.default.Fragment:o.NoSSR,d=t.lazy;return a.default.createElement(a.default.Suspense,{fallback:n},a.default.createElement(u,null,a.default.createElement(d,e)))}return t.lazy=a.default.lazy(t.loader),LoadableComponent.displayName="LoadableComponent",LoadableComponent}}};