(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{424:function(n,s,a){"use strict";a.r(s),a.d(s,"readingTime",function(){return c}),a.d(s,"default",function(){return k}),a.d(s,"tableOfContents",function(){return i}),a.d(s,"frontMatter",function(){return r});var t=a(32),p=(a(0),a(44)),o=a(425),e=a.n(o),c={text:"2 min read",minutes:1.4,time:84e3,words:280},u={},l="wrapper";function k(n){var s=n.components,a=Object(t.a)(n,["components"]);return Object(p.b)(l,Object.assign({},u,a,{components:s,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"\u4f60\u53ef\u4ee5\u4ece\u672c\u6587\u4e86\u89e3\u5230"},"\u4f60\u53ef\u4ee5\u4ece\u672c\u6587\u4e86\u89e3\u5230"),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},"\u5de5\u4f5c\u4e2d\u5b9e\u9645\u9700\u6c42\u7684\u4e3e\u4f8b"),Object(p.b)("li",{parentName:"ol"},"\u6d4f\u89c8\u5668\u591a\u6807\u7b7e\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u6cd5\u53ca\u5176\u9002\u7528\u573a\u666f")),Object(p.b)("h2",{id:"\u5de5\u4f5c\u4e2d\u5b9e\u9645\u9700\u6c42\u7684\u4e3e\u4f8b"},"\u5de5\u4f5c\u4e2d\u5b9e\u9645\u9700\u6c42\u7684\u4e3e\u4f8b"),Object(p.b)("p",null,"\u524d\u7f6e\u6761\u4ef6\uff1a\u6709\u4e00\u4e2a\u7ba1\u7406\u7cfb\u7edf\uff0ctab1\u3001tab2 \u90fd\u767b\u5f55\u4e86\u8d26\u6237 user1\u3002\n\u529f\u80fd\uff1a\u767b\u51fa\u5176\u4e2d tab1 \u7684\u8d26\u6237\uff0ctab2 \u9700\u8981\u81ea\u52a8\u767b\u51fa\u3002\n\u601d\u8def\uff1atab \u4e4b\u95f4\u5efa\u7acb eventBus \u4e4b\u7c7b\u7684\u6d88\u606f\u603b\u7ebf\uff0c\u8fdb\u884c\u5e7f\u64ad\u3002"),Object(p.b)("h2",{id:"\u6d4f\u89c8\u5668\u591a\u6807\u7b7e\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u6cd5\u53ca\u5176\u9002\u7528\u573a\u666f"},"\u6d4f\u89c8\u5668\u591a\u6807\u7b7e\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u6cd5\u53ca\u5176\u9002\u7528\u573a\u666f"),Object(p.b)("p",null,Object(p.b)("a",Object.assign({parentName:"p"},{href:"https://juejin.im/post/6844903589924569101"}),"\u8fd9\u7bc7\u6587\u7ae0"),"\u63d0\u5230\uff0c\u5206\u4e3a\u4e09\u79cd\uff1a"),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},"websocket"),Object(p.b)("li",{parentName:"ol"},"SharedWorker"),Object(p.b)("li",{parentName:"ol"},"localstorage")),Object(p.b)("h3",{id:"websocket"},"websocket"),Object(p.b)("p",null,Object(p.b)("a",Object.assign({parentName:"p"},{href:"http://www.ruanyifeng.com/blog/2017/05/websocket.html"}),"websocket"),"\u662f\u5168\u53cc\u5de5\u901a\u4fe1\uff0c\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u5904\u4e8e\u5e73\u7b49\u5730\u4f4d\uff0c\u4efb\u610f\u4e00\u65b9\u90fd\u53ef\u4ee5\u4e3b\u52a8\u53d1\u8d77\u8fde\u63a5\u3002"),Object(p.b)("p",null,"\u7528\u8fd9\u79cd\u65b9\u5f0f\u5b9e\u73b0 tab \u95f4\u901a\u4fe1\u662f\u7528\u8ba2\u9605\u5e7f\u64ad\u673a\u5236\uff0c\u4f46\u9700\u8981\u4e00\u4e2a websocket \u670d\u52a1\u5668\uff08\u274c\uff09\u3002\n\u5927\u81f4\u793a\u610f\u5982\u4e0b\uff1a"),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">var</span> ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">\'wss://echo.websocket.org\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nws<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Connection open ...\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    ws<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">\'everyone-logout\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nws<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Received Message: \'</span> <span class="token operator">+</span> evt<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>evt<span class="token punctuation">.</span>data <span class="token operator">===</span> <span class="token string">\'everyone-logout\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// do something</span>\n    <span class="token punctuation">}</span>\n    ws<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\nws<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">evt</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Connection closed.\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n'}}))),Object(p.b)("h3",{id:"sharedworker"},"SharedWorker"),Object(p.b)("p",null,"\u5b83\u662f webWorker \u7684\u4e00\u79cd\uff0c\u7279\u6b8a\u4e4b\u5904\u662f\u5177\u6709\u5168\u5c40\u4f5c\u7528\u57df, SharedWorkerGlobalScope\u3002\u8981\u4f7f SharedWorker \u8fde\u63a5\u5230\u591a\u4e2a\u4e0d\u540c\u7684\u9875\u9762\uff0c\u8fd9\u4e9b\u9875\u9762\u5fc5\u987b\u662f\u540c\u6e90\u7684\uff08\u76f8\u540c\u7684\u534f\u8bae\u3001host \u4ee5\u53ca\u7aef\u53e3\uff09\u3002\u6b64\u65b9\u6848\u4e0d\u9700\u8981\u670d\u52a1\u5668\uff0c\u4f46\u4e0d\u652f\u6301IE\u3002"),Object(p.b)("p",null,"\u6211\u5bf9 MDN \u8fd9\u4e2a",Object(p.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/mdn/simple-shared-worker"}),"\u4f8b\u5b50"),"\u8fdb\u884c\u4e86\u9b54\u6539\uff0c\u5b9e\u73b0\u4e86\u5e7f\u64ad\u901a\u77e5\u7684\u529f\u80fd\u3002"),Object(p.b)("p",null,"Tips: \u8981\u8c03\u8bd5 worker\uff0c\u53ef\u4ee5\u5728 chrome \u7684 inspect \u9762\u677f\u4e2d\u8fdb\u884c\uff0c\u5728 source \u4e2d\u53ef\u4ee5\u5bf9\u4ee3\u7801\u8fdb\u884c\u65ad\u70b9\u8c03\u8bd5\u3002"),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token comment">// worker.js</span>\n<span class="token keyword">let</span> ports <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// \u8fde\u63a5\u6c60</span>\n<span class="token function-variable function">onconnect</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> port <span class="token operator">=</span> e<span class="token punctuation">.</span>ports<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n    ports<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5165\u6c60</span>\n    port<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">var</span> workerResult <span class="token operator">=</span> <span class="token string">\'everyone-logout\'</span><span class="token punctuation">;</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> p <span class="token keyword">of</span> ports<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token operator">===</span> port<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// \u5f53\u524dtab\u8981\u4e0d\u8981\u6536\u5230</span>\n            p<span class="token punctuation">.</span><span class="token function">postMessage</span><span class="token punctuation">(</span>workerResult<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u901a\u77e5\u5176\u4ed6tab</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n'}}))),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token comment">// \u524d\u53f0js</span>\n<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token operator">!</span>window<span class="token punctuation">.</span>SharedWorker<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> myWorker <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SharedWorker</span><span class="token punctuation">(</span><span class="token string">"worker.js"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  myWorker<span class="token punctuation">.</span>port<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Message received from worker\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>data<span class="token operator">===</span><span class="token string">\'everyone-logout\'</span><span class="token punctuation">;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n     <span class="token comment">// do something</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}}))),Object(p.b)("p",null,"\u5b9e\u9a8c\u6548\u679c\u5982\u4e0b\u56fe\uff1a"),Object(p.b)("img",{src:e.a}),Object(p.b)("h3",{id:"storage"},"storage"),Object(p.b)("p",null,"window\u4e0a\u6709\u4e00\u4e2aonstorage\u4e8b\u4ef6\u53ef\u4ee5\u76d1\u542cstorage\u53d8\u5316\uff0c\u5f53\u524d\u9875\u9762\u53ef\u4ee5\u76d1\u542c\u5230localStorage\u548csessionStorage\u7684onstorage\u4e8b\u4ef6\uff0c\u4f46\u662f\u8de8tab\u95f4\u53ea\u80fd\u4f20\u64adlocalStorage\u7684onstorage\u4e8b\u4ef6\uff08\u8fd9\u4e00\u70b9\u53ef\u4ee5\u901a\u8fc7\u5b9e\u9a8c\u9a8c\u8bc1\uff09\u3002"),Object(p.b)("p",null,"\u4f46\u662f\u95ee\u9898\u6765\u4e86\uff0c\u8fd9\u4e2a\u4e8b\u4ef6\u5982\u4f55\u4f20\u64ad\u6d88\u606f\u5462\uff1f"),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token comment">// \u5b9e\u73b0\u4e00\u4e2a\u4e00\u6b21\u6027\u6d88\u606f\u5e7f\u64ad\u5de5\u5177</span>\n<span class="token comment">// messageBroadcast.ts</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">messageBroadcast</span><span class="token punctuation">(</span><span class="token parameter">message</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    localStorage<span class="token punctuation">.</span><span class="token function">setItem</span><span class="token punctuation">(</span><span class="token string">\'message\'</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    localStorage<span class="token punctuation">.</span><span class="token function">removeItem</span><span class="token punctuation">(</span><span class="token string">\'message\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}))),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> messageBroadcast <span class="token keyword">from</span> <span class="token string">\'@/utils/messageBroadcast\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>logout<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@/utils/logout\'</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">LogoutGuard</span> <span class="token punctuation">{</span>\n    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">subscribeLogout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">subscribeLogout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        window<span class="token punctuation">.</span><span class="token function-variable function">onstorage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e<span class="token punctuation">:</span> StorageEvent</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>key <span class="token operator">===</span> <span class="token string">\'message\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \u6307\u5b9a\u6d88\u606f\u9891\u9053</span>\n                <span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>newValue<span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>message<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// \u4e0d\u5173\u6ce8message\u5220\u9664\uff0c\u53ea\u5173\u6ce8\u65b0\u589e</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>cmd <span class="token operator">&amp;&amp;</span> message<span class="token punctuation">.</span>cmd <span class="token operator">===</span> <span class="token string">\'logout\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token function">notifyLogout</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token function">messageBroadcast</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n            cmd<span class="token punctuation">:</span> <span class="token string">\'logout\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">new</span> <span class="token class-name">LogoutGuard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}))),Object(p.b)("p",null,"\u53ef\u4ee5\u53d1\u73b0\u8fd9\u79cd\u65b9\u5f0f\u53ea\u80fd\u8bf4\u662f\u6bd4\u8f83\u7c97\u7cd9\uff0c\u5982\u679c\u8003\u8651\u5e76\u53d1\uff0c\u5065\u58ee\u6027\u662f\u4e0d\u5982\u4e0a\u9762\u4e24\u79cd\u65b9\u6cd5\u7684\uff08\u5728\u5de5\u5177\u90e8\u5206\u8981\u8003\u8651\u5b9e\u73b0\u961f\u5217\u4f9d\u6b21\u53d1\u9001\u6d88\u606f\uff09\u3002\u4f46\u5bf9\u4e8e\u5b9e\u73b0\u7edf\u4e00\u767b\u51fa\u8fd9\u79cd\u573a\u666f\u662f\u8db3\u591f\u7684\u3002\u6bd5\u7adf\u53ea\u8981\u53d1\u51fa\u4e00\u4e2a\uff0c\u5c31\u4e0d\u518d\u9700\u8981\u8fd9\u4e2a\u8ba2\u9605\u4e86\uff0c\u4efb\u52a1\u5b8c\u6210\uff01"),Object(p.b)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(p.b)("p",null,"\u5728\u5b9e\u9645\u4e1a\u52a1\u4e2d\uff0c\u6211\u9009\u7528\u4e86\u7b2c\u4e09\u79cd\u65b9\u6cd5\u3002\u7b80\u5355\u7c97\u66b4\uff0c\u76f4\u63a5\u6709\u6548\u3002"))}k.isMDXComponent=!0;var i=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"\u4f60\u53ef\u4ee5\u4ece\u672c\u6587\u4e86\u89e3\u5230",level:2,title:"\u4f60\u53ef\u4ee5\u4ece\u672c\u6587\u4e86\u89e3\u5230",children:[]},{id:"\u5de5\u4f5c\u4e2d\u5b9e\u9645\u9700\u6c42\u7684\u4e3e\u4f8b",level:2,title:"\u5de5\u4f5c\u4e2d\u5b9e\u9645\u9700\u6c42\u7684\u4e3e\u4f8b",children:[]},{id:"\u6d4f\u89c8\u5668\u591a\u6807\u7b7e\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u6cd5\u53ca\u5176\u9002\u7528\u573a\u666f",level:2,title:"\u6d4f\u89c8\u5668\u591a\u6807\u7b7e\u901a\u4fe1\u7684\u51e0\u79cd\u65b9\u6cd5\u53ca\u5176\u9002\u7528\u573a\u666f",children:[{id:"websocket",level:3,title:"websocket",children:[]},{id:"sharedworker",level:3,title:"SharedWorker",children:[]},{id:"storage",level:3,title:"storage",children:[]}]},{id:"\u603b\u7ed3",level:2,title:"\u603b\u7ed3",children:[]}]},r={}},425:function(n,s,a){n.exports=a.p+"static/media/snapshot-1.c63d8197.png"}}]);
//# sourceMappingURL=12.81b49369.chunk.js.map