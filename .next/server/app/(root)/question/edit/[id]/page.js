(()=>{var e={};e.id=1580,e.ids=[1580],e.modules={11185:e=>{"use strict";e.exports=require("mongoose")},47849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},55403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},94749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},10467:e=>{"use strict";e.exports=require("next/dist/compiled/@vercel/og/index.node.js")},41790:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page-experimental.runtime.prod.js")},25528:e=>{"use strict";e.exports=require("next/dist\\client\\components\\action-async-storage.external.js")},91877:e=>{"use strict";e.exports=require("next/dist\\client\\components\\request-async-storage.external.js")},25319:e=>{"use strict";e.exports=require("next/dist\\client\\components\\static-generation-async-storage.external.js")},14300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},57147:e=>{"use strict";e.exports=require("fs")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},87561:e=>{"use strict";e.exports=require("node:fs")},88849:e=>{"use strict";e.exports=require("node:http")},22286:e=>{"use strict";e.exports=require("node:https")},87503:e=>{"use strict";e.exports=require("node:net")},49411:e=>{"use strict";e.exports=require("node:path")},97742:e=>{"use strict";e.exports=require("node:process")},84492:e=>{"use strict";e.exports=require("node:stream")},72477:e=>{"use strict";e.exports=require("node:stream/web")},41041:e=>{"use strict";e.exports=require("node:url")},47261:e=>{"use strict";e.exports=require("node:util")},65628:e=>{"use strict";e.exports=require("node:zlib")},71017:e=>{"use strict";e.exports=require("path")},77282:e=>{"use strict";e.exports=require("process")},12781:e=>{"use strict";e.exports=require("stream")},57310:e=>{"use strict";e.exports=require("url")},71267:e=>{"use strict";e.exports=require("worker_threads")},59796:e=>{"use strict";e.exports=require("zlib")},73346:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>x,originalPathname:()=>l,pages:()=>c,routeModule:()=>m,tree:()=>p});var s=r(73137),i=r(54647),o=r(4183),n=r.n(o),a=r(71775),u={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(u[e]=()=>a[e]);r.d(t,u);let d=s.AppPageRouteModule,p=["",{children:["(root)",{children:["question",{children:["edit",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,22720)),"C:\\Users\\af_K_ar\\stack_overflow_nextjs14\\app\\(root)\\question\\edit\\[id]\\page.tsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,6630)),"C:\\Users\\af_K_ar\\stack_overflow_nextjs14\\app\\(root)\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,83932)),"C:\\Users\\af_K_ar\\stack_overflow_nextjs14\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,51918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,57481))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\Users\\af_K_ar\\stack_overflow_nextjs14\\app\\(root)\\question\\edit\\[id]\\page.tsx"],l="/(root)/question/edit/[id]/page",x={require:r,loadChunk:()=>Promise.resolve()},m=new d({definition:{kind:i.x.APP_PAGE,page:"/(root)/question/edit/[id]/page",pathname:"/question/edit/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:p}})},13814:(e,t,r)=>{Promise.resolve().then(r.bind(r,56088)),Promise.resolve().then(r.bind(r,16373)),Promise.resolve().then(r.bind(r,52990)),Promise.resolve().then(r.bind(r,84102)),Promise.resolve().then(r.bind(r,54390)),Promise.resolve().then(r.bind(r,31704)),Promise.resolve().then(r.bind(r,90222))},22720:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var s=r(48144),i=r(63301),o=r(20519),n=r(60954),a=r(38798);let Page=async({params:e})=>{let{userId:t}=(0,a.I8)();if(!t)return null;let r=await (0,n.getUserById)({userId:t}),u=await (0,o.getQuestionById)({questionId:e.id});return(0,s.jsxs)(s.Fragment,{children:[s.jsx("h1",{className:"h1-bold text-dark100_light900",children:"Edit Question"}),s.jsx("div",{className:"mt-9",children:s.jsx(i.ZP,{type:"Edit",mongoUserId:r._id,questionDetails:JSON.stringify(u)})})]})},u=Page}};var t=require("../../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[9922,9859,9925,1209,6466,3640,70,672,9689,3256,9614,5662,954,8131,2360,9839,1869],()=>__webpack_exec__(73346));module.exports=r})();