exports.id=5381,exports.ids=[5381],exports.modules={95381:(e,d,n)=>{let b={"821c7762b2060bdce10837322b48adc18d240fe0":()=>Promise.resolve().then(n.bind(n,20519)).then(e=>e.getQuestions),"3bc2359fa248fe8d9bb51f32f694f8168afc4eff":()=>Promise.resolve().then(n.bind(n,20519)).then(e=>e.createQuestion),f965694f345c18cee82acdbc5c368f054d15290f:()=>Promise.resolve().then(n.bind(n,20519)).then(e=>e.getQuestionById),b59c2737e199d82f69502500447398331027dd41:()=>Promise.resolve().then(n.bind(n,20519)).then(e=>e.upvoteQuestion),dd881be5cec2daccfbd91fce885c73c6a57d3618:()=>Promise.resolve().then(n.bind(n,20519)).then(e=>e.downvoteQuestion),db4a18dc7615bcdc23047151fe6fd7b77a1fb44c:()=>Promise.resolve().then(n.bind(n,20519)).then(e=>e.deleteQuestion),"67bd28a4564c2a0921aaa97c4e0eaa2fe0012ec9":()=>Promise.resolve().then(n.bind(n,20519)).then(e=>e.editQuestion),"12576103a6c44923d6f02ed638154e8fe0b75370":()=>Promise.resolve().then(n.bind(n,20519)).then(e=>e.getHotQuestions),b933556f3edfcde6177da02173a0e964ef73d845:()=>Promise.resolve().then(n.bind(n,20519)).then(e=>e.getRecommendedQuestions),"5e0056903e1618bbcb06c4616a225605eac62ed6":()=>Promise.resolve().then(n.bind(n,98976)).then(e=>e.getTopInteractedTags),"6b893ecf9522374bd68298d421fefa59c684f7d2":()=>Promise.resolve().then(n.bind(n,98976)).then(e=>e.getAllTags),"1683de04029ffd8bfadfa76a4427256f1689231d":()=>Promise.resolve().then(n.bind(n,98976)).then(e=>e.getQuestionsByTagId),"8d24a67398aa9d329bb7401320e50519799a8a2b":()=>Promise.resolve().then(n.bind(n,98976)).then(e=>e.getTopPopularTags)};async function endpoint(e,...d){let n=await b[e]();return n.apply(null,d)}e.exports={"821c7762b2060bdce10837322b48adc18d240fe0":endpoint.bind(null,"821c7762b2060bdce10837322b48adc18d240fe0"),"3bc2359fa248fe8d9bb51f32f694f8168afc4eff":endpoint.bind(null,"3bc2359fa248fe8d9bb51f32f694f8168afc4eff"),f965694f345c18cee82acdbc5c368f054d15290f:endpoint.bind(null,"f965694f345c18cee82acdbc5c368f054d15290f"),b59c2737e199d82f69502500447398331027dd41:endpoint.bind(null,"b59c2737e199d82f69502500447398331027dd41"),dd881be5cec2daccfbd91fce885c73c6a57d3618:endpoint.bind(null,"dd881be5cec2daccfbd91fce885c73c6a57d3618"),db4a18dc7615bcdc23047151fe6fd7b77a1fb44c:endpoint.bind(null,"db4a18dc7615bcdc23047151fe6fd7b77a1fb44c"),"67bd28a4564c2a0921aaa97c4e0eaa2fe0012ec9":endpoint.bind(null,"67bd28a4564c2a0921aaa97c4e0eaa2fe0012ec9"),"12576103a6c44923d6f02ed638154e8fe0b75370":endpoint.bind(null,"12576103a6c44923d6f02ed638154e8fe0b75370"),b933556f3edfcde6177da02173a0e964ef73d845:endpoint.bind(null,"b933556f3edfcde6177da02173a0e964ef73d845"),"5e0056903e1618bbcb06c4616a225605eac62ed6":endpoint.bind(null,"5e0056903e1618bbcb06c4616a225605eac62ed6"),"6b893ecf9522374bd68298d421fefa59c684f7d2":endpoint.bind(null,"6b893ecf9522374bd68298d421fefa59c684f7d2"),"1683de04029ffd8bfadfa76a4427256f1689231d":endpoint.bind(null,"1683de04029ffd8bfadfa76a4427256f1689231d"),"8d24a67398aa9d329bb7401320e50519799a8a2b":endpoint.bind(null,"8d24a67398aa9d329bb7401320e50519799a8a2b")}}};