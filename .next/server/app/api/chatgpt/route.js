"use strict";(()=>{var e={};e.id=3467,e.ids=[3467],e.modules={30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},34411:(e,t,a)=>{a.r(t),a.d(t,{headerHooks:()=>d,originalPathname:()=>m,requestAsyncStorage:()=>c,routeModule:()=>p,serverHooks:()=>l,staticGenerationAsyncStorage:()=>u,staticGenerationBailout:()=>h});var o={};a.r(o),a.d(o,{POST:()=>POST}),a(95655);var r=a(83323),s=a(54647),n=a(66886);let POST=async e=>{let{question:t}=await e.json();try{let e=await fetch("https://api.openai.com/v1/chat/completions",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${process.env.OPENAI_API_KEY}`},body:JSON.stringify({model:"gpt-3.5-turbo",messages:[{role:"system",content:"You are a knowlegeable assistant that provides quality information."},{role:"user",content:`Tell me ${t}`}]})}),a=await e.json(),o=a.choices[0].message.content;return n.Z.json({reply:o})}catch(e){return n.Z.json({error:e.message})}},i=r.AppRouteRouteModule,p=new i({definition:{kind:s.x.APP_ROUTE,page:"/api/chatgpt/route",pathname:"/api/chatgpt",filename:"route",bundlePath:"app/api/chatgpt/route"},resolvedPagePath:"C:\\Users\\af_K_ar\\stack_overflow_nextjs14\\app\\api\\chatgpt\\route.ts",nextConfigOutput:"",userland:o}),{requestAsyncStorage:c,staticGenerationAsyncStorage:u,serverHooks:l,headerHooks:d,staticGenerationBailout:h}=p,m="/api/chatgpt/route"}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[9922,9727],()=>__webpack_exec__(34411));module.exports=a})();