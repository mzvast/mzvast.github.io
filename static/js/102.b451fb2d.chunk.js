(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{417:function(n,e,t){"use strict";t.r(e),t.d(e,"readingTime",function(){return c}),t.d(e,"default",function(){return i}),t.d(e,"tableOfContents",function(){return b}),t.d(e,"frontMatter",function(){return u});var a=t(32),s=(t(0),t(44)),c={text:"1 min read",minutes:.905,time:54300.00000000001,words:181},l={},p="wrapper";function i(n){var e=n.components,t=Object(a.a)(n,["components"]);return Object(s.b)(p,Object.assign({},l,t,{components:e,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"\u4f60\u53ef\u4ee5\u4ece\u672c\u6587\u4e86\u89e3\u5230"},"\u4f60\u53ef\u4ee5\u4ece\u672c\u6587\u4e86\u89e3\u5230"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"\u672c\u6587\u80cc\u666f"),Object(s.b)("li",{parentName:"ol"},"\u7528WebRTC\u6784\u5efa\u5c4f\u5e55\u5206\u4eab\u5e94\u7528 ")),Object(s.b)("p",null,"\u672c\u6587\u5bf9\u5e94\u7684\u4ee3\u7801",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/mzvast/how2webrtc"}),"\u5728\u6b64"),"\u3002"),Object(s.b)("h2",{id:"\u672c\u6587\u80cc\u666f"},"\u672c\u6587\u80cc\u666f"),Object(s.b)("p",null,"\u9996\u5148\uff0c\u672c\u6587\u4e0d\u662fWebRTC\u96f6\u57fa\u7840\u6559\u7a0b\u3002\u8bb0\u5f55\u548c\u5206\u4eab\u5728\u7f16\u5199\u5c4f\u5e55\u5206\u4eabdemo\u65f6\u5019\u9047\u5230\u7684\u95ee\u9898\u3002"),Object(s.b)("p",null,"\u4ee3\u7801\u7684master\u5206\u652f\u662f\u4fee\u6539\u81ea",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://dev.to/michaelneu/i-webrtc-you-building-a-video-chat-in-javascript-2j38"}),"building-a-video-chat-in-javascript"),"\uff0cdevelop\u5206\u652f\u5bf9\u534f\u8bae\u8fdb\u884c\u4e86\u91cd\u6784\u548c\u6a21\u5757\u5316\u6539\u8fdb\uff0c\u5e76\u589e\u52a0\u5404\u79cd\u6e05\u7406\u80fd\u529b\u3002"),Object(s.b)("h2",{id:"\u7528webrtc\u6784\u5efa\u5c4f\u5e55\u5206\u4eab\u5e94\u7528"},"\u7528WebRTC\u6784\u5efa\u5c4f\u5e55\u5206\u4eab\u5e94\u7528"),Object(s.b)("p",null,"\u6211\u4eec\u7684\u573a\u666f\u662f1\u4e2a\u6559\u5e08(A)\uff0c1\u4e2a\u5b66\u751f\u7aef(B)\u3002\u8001\u5e08\u53ef\u4ee5\u53d1\u8d77\u6295\u5c4f\uff0c\u770b\u5230\u5b66\u751f\u5c4f\u5e55\u5185\u5bb9\u3002"),Object(s.b)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0cwebrtc\u5c5e\u4e8e\u70b9\u5bf9\u70b9\u53cc\u5411\u901a\u4fe1\uff0c\u8c01\u662f\u4e3b\u53eb\u65b9\u672c\u8eab\u5e76\u4e0d\u91cd\u8981\u3002"),Object(s.b)("p",null,"\u3010\u57fa\u4e8e\u4ea4\u4e92\u8003\u91cf\u3011\u7531\u4e8e\u5b66\u751f\u7aef\u5728\u4e1a\u52a1\u573a\u666f\u4e0b\u6709\u53ef\u80fd\u5b58\u5728\u62a2\u5360\u7684\u60c5\u51b5\uff0c\u5373B\u5728\u8ddfA1\u6295\u5c4f\uff0c\u6b64\u65f6A2\u8981\u62a2\u5360\uff0c\u4e3a\u4e86\u5f97\u77e5B\u662f\u5426\u88ab\u5360\u7528\uff0c\u6240\u4ee5A\u5148\u8bd5\u63a2\u6027\u7684\u95ee\u4e00\u4e0bB\u662f\u4e0d\u662f\u5fd9\uff0c\u4ece\u800c\u907f\u514d\u65e0\u610f\u4e2d\u62a2\u5360\u6b63\u5728\u6295\u5c4f\u7684\u8bbe\u5907\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u9009\u62e9\u4e09\u6b65\u8d70\uff1aA\u8bd5\u63a2B\uff08\u6216\u8005\u62a2\u5360\u901a\u77e5\uff09\uff0cB\u4e3b\u52a8\uff08\u6216\u8005\u65ad\u5f00\u524d\u4e00\u4e2a\u8fde\u63a5\uff09\uff0cA\u786e\u8ba4\u3002"),Object(s.b)("p",null,"\u5b8c\u6574\u7684offer/answer\u673a\u5236\u5982\u4e0b\uff1a"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A \u544a\u77e5 B \u8981\u5f00\u59cb\u6295\u5c4f\u4e86(",Object(s.b)("inlineCode",{parentName:"li"},"A --\x3e B"),")"),Object(s.b)("li",{parentName:"ul"},"B \u521b\u5efa\u4e00\u4e2aRTCPeerConnection\u5bf9\u8c61\uff0c\u4f7f\u7528.createOffer()\u65b9\u6cd5\u4ea7\u751f\u4e00\u4e2aoffer\uff08\u4e00\u4e2aSDP\u4f1a\u8bdd\u63cf\u8ff0\uff09"),Object(s.b)("li",{parentName:"ul"},"B \u7528\u4ed6\u7684offer\u8c03\u7528setLocalDescription()"),Object(s.b)("li",{parentName:"ul"},"B \u5c06offer\u5b57\u7b26\u4e32\u5316\uff0c\u5e76\u4f7f\u7528\u4fe1\u4ee4\u673a\u5236\u5c06\u5176\u53d1\u9001\u7ed9A(",Object(s.b)("inlineCode",{parentName:"li"},"A <-- B"),")"),Object(s.b)("li",{parentName:"ul"},"A\u7528B\u7684offer\u8c03\u7528setRemoteDescription()\uff0c\u4ee5\u4fbf\u5979\u7684RTCPeerConnection\u77e5\u9053B\u7684\u8bbe\u7f6e\u3002"),Object(s.b)("li",{parentName:"ul"},"A\u8c03\u7528createAnswer()\uff0c\u6210\u529f\u7684\u56de\u8c03\u662f\u4f20\u5165\u4e00\u4e2a\u672c\u5730\u7684\u4f1a\u8bdd\u63cf\u8ff0\uff1aA\u7684answer\u3002"),Object(s.b)("li",{parentName:"ul"},"\u901a\u8fc7\u8c03\u7528setLocalDescription()\u5c06\u5176answer\u8bbe\u7f6e\u4e3a\u672c\u5730\u63cf\u8ff0\u3002"),Object(s.b)("li",{parentName:"ul"},"A\u7136\u540e\u4f7f\u7528\u4fe1\u4ee4\u673a\u5236\u5c06\u5979\u7684\u5b57\u7b26\u4e32\u5316\u7684answer\u53d1\u56de\u7ed9B(",Object(s.b)("inlineCode",{parentName:"li"},"A --\x3e B"),")\u3002"),Object(s.b)("li",{parentName:"ul"},"B\u4f7f\u7528setRemoteDescription()\u5c06A\u7684\u5e94\u7b54\u8bbe\u7f6e\u4e3a\u8fdc\u7a0b\u4f1a\u8bdd\u63cf\u8ff0")),Object(s.b)("p",null,"AB\u8fd8\u9700\u8981\u4ea4\u6362\u7f51\u8def\u4fe1\u606f\uff0c\u201c\u67e5\u627e\u5019\u9009\u4eba\uff08find candidate\uff09\u201d\u8fd9\u4e2a\u8868\u8fbe\u662f\u6307\u4f7f\u7528ICE\u6846\u67b6\u67e5\u627e\u7f51\u7edc\u63a5\u53e3\u548c\u7aef\u53e3\u7684\u8fc7\u7a0b\u3002"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"A \u521b\u5efa\u4e00\u4e2aRTCPeerConnection\u5bf9\u8c61\uff0c\u7ed1\u5b9ahandler\u76d1\u542cicecandidate\u4e8b\u4ef6\u3002"),Object(s.b)("li",{parentName:"ul"},"\u5f53A\u4eceB\u90a3\u91cc\u83b7\u5f97\u5019\u9009\u6d88\u606f\u65f6\uff0c\u5979\u8c03\u7528addIceCandidate()\uff0c\u5c06\u5019\u9009\u9879\u6dfb\u52a0\u5217\u8868\u4e2d\u3002(",Object(s.b)("inlineCode",{parentName:"li"},"A <-- B"),")"),Object(s.b)("li",{parentName:"ul"},"\u5728handler\u4e2d\uff0cA\u901a\u8fc7\u4ed6\u4eec\u7684\u4fe1\u4ee4\u901a\u9053\u5c06\u5b57\u7b26\u4e32\u5316\u7684\u5019\u9009\u6570\u636e\u53d1\u9001\u7ed9B\u3002(",Object(s.b)("inlineCode",{parentName:"li"},"A --\x3e B"),")"),Object(s.b)("li",{parentName:"ul"},"B\u505a\u7c7b\u4f3c\u7684\u5904\u7406\uff0c\u8c03\u7528addIceCandidate()\uff0c\u5c06\u5019\u9009\u9879\u6dfb\u52a0\u5217\u8868\u4e2d")),Object(s.b)("p",null,"JSEP\u652f\u6301ICE Candidate Trickling\uff0c\u5b83\u5141\u8bb8\u4e3b\u53eb\u65b9(caller)\u5728\u6700\u521d\u7684offer\u4e4b\u540e\u9012\u589e\u5730\u5411\u88ab\u53eb\u65b9\u63d0\u4f9b\u5019\u9009\u9879\uff08candidates\uff09\uff0c\u5e76\u4f7f\u88ab\u53eb\u65b9\u5f00\u59cb\u5728\u901a\u8bdd\u4e2d\u8fdb\u884c\u64cd\u4f5c\u5e76\u5efa\u7acb\u8fde\u63a5\u800c\u4e0d\u7528\u7b49\u6240\u6709\u5019\u9009\u9879\u5230\u8fbe\u3002"),Object(s.b)("p",null,"\u26a0\ufe0f\u4e0b\u56fe\u4e2d\uff0c\u5de6\u8fb9\u8ba4\u4e3a\u662fB\uff0c\u53f3\u8fb9\u662fA\u3002\uff08\u5ffd\u7565\u62ec\u53f7\u4e2d\u7684AB\uff09"),Object(s.b)("p",null,Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://miro.medium.com/max/1302/1*HmMdrpVBTP2vYMhrVOdNOw.jpeg",alt:"Image for post"}))),Object(s.b)("h3",{id:"\u5bf9\u7aef\u53d1\u73b0\u4e0e\u4fe1\u4ee4\u670d\u52a1\u5668"},"\u5bf9\u7aef\u53d1\u73b0\u4e0e\u4fe1\u4ee4\u670d\u52a1\u5668"),Object(s.b)("p",null,"\u53ef\u4ee5\u7528\u4efb\u4f55\u6d88\u606f\u670d\u52a1\u5b9e\u73b0\uff0c\u6bd4\u5982websocket\uff0cmqtt\u7b49\u3002"),Object(s.b)("h3",{id:"\u5728\u4fe1\u4ee4\u4e4b\u540e\uff1a\u4f7f\u7528-ice\u6765\u5bf9\u4ed8nat\u548c\u9632\u706b\u5899"},"\u5728\u4fe1\u4ee4\u4e4b\u540e\uff1a\u4f7f\u7528 ICE\u6765\u5bf9\u4ed8NAT\u548c\u9632\u706b\u5899"),Object(s.b)("p",null,"\u5bf9\u4e8e\u5143\u6570\u636e\u4fe1\u4ee4\uff0cWebRTC\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528\u4e2d\u4ecb\u670d\u52a1\u5668\uff0c\u4f46\u5bf9\u4e8e\u5b9e\u9645\u7684\u5a92\u4f53\u548c\u6570\u636e\u6d41\uff0c\u4e00\u65e6\u5efa\u7acb\u5bf9\u8bdd\u7684\u8bdd\uff0cRTCPeerConnection\u5c31\u4f1a\u5c1d\u8bd5\u70b9\u5bf9\u70b9\u5730\u76f4\u63a5\u8fde\u63a5\u5ba2\u6237\u7aef\u3002"),Object(s.b)("p",null,"\u5728\u7b80\u5355\u7684\u60c5\u51b5\u4e2d\uff0c\u6bcf\u4e2aWebRTC\u7aef\u70b9\u90fd\u6709\u4e00\u4e2a\u552f\u4e00\u7684\u5730\u5740\uff0c\u53ef\u4ee5\u4e0e\u5176\u4ed6\u7aef\u8fdb\u884c\u4ea4\u6362\u4ee5\u4fbf\u76f4\u63a5\u901a\u4fe1\u3002\n",Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://michaelyou.github.io/img/without_nat.png",alt:null}))),Object(s.b)("p",null,"\u5b9e\u9645\u4e0a\u5927\u591a\u6570\u8bbe\u5907\u90fd\u662f\u5904\u5728\u4e00\u5c42\u6216\u8005\u591a\u5c42NAT\u4e4b\u540e\u7684\uff0c\u5176\u4e2d\u6709\u4e00\u4e9b\u5305\u542b\u53ef\u4ee5\u963b\u6321\u67d0\u4e9b\u7aef\u53e3\u548c\u534f\u8bae\u7684\u9632\u75c5\u6bd2\u8f6f\u4ef6\uff0c\u8fd8\u6709\u5f88\u591a\u8bbe\u5907\u662f\u5728\u4ee3\u7406\u548c\u516c\u53f8\u9632\u706b\u5899\u4e4b\u540e\u7684\u3002\u9632\u706b\u5899\u548cNAT\u5b9e\u9645\u4e0a\u53ef\u4ee5\u7531\u76f8\u540c\u7684\u8bbe\u5907\u5b9e\u73b0\uff0c\u6bd4\u5982\u8bf4\u5bb6\u5eadWiFi\u8def\u7531\u5668\u3002\n",Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://michaelyou.github.io/img/nat_real_world.png",alt:null}))),Object(s.b)("p",null,"WebRTC\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u4f7f\u7528ICE\u6846\u67b6\u6765\u6d88\u9664\u5b9e\u9645\u7f51\u7edc\u7684\u590d\u6742\u6027\u3002\u4e3a\u4e86\u5b9e\u73b0\u8fd9\u4e00\u70b9\uff0c\u4f60\u7684\u5e94\u7528\u7a0b\u5e8f\u5fc5\u987b\u5c06 ICE\u670d\u52a1\u5668\u7684URL\u4f20\u9012\u7ed9RTCPeerConnection\uff0c\u5c31\u50cf\u4e0b\u9762\u6240\u63cf\u8ff0\u7684\u90a3\u6837\u3002"),Object(s.b)("p",null,"ICE\u8bd5\u56fe\u627e\u5230\u8fde\u63a5\u5bf9\u65b9\u7684\u6700\u4f73\u9014\u5f84\u3002\u5b83\u4f1a\u5e76\u884c\u5730\u5c1d\u8bd5\u6240\u6709\u53ef\u80fd\u6027\uff0c\u5e76\u9009\u62e9\u6700\u6709\u6548\u7684\u9009\u9879\u3002 ICE\u9996\u5148\u5c1d\u8bd5\u4f7f\u7528\u4ece\u8bbe\u5907\u64cd\u4f5c\u7cfb\u7edf\u548c\u7f51\u5361\u83b7\u53d6\u7684\u4e3b\u673a\u5730\u5740\u8fdb\u884c\u8fde\u63a5\uff1b\u5982\u679c\u4e0d\u6210\u529f\u7684\u8bdd\uff08\u5bf9\u4e8eNAT\u540e\u9762\u7684\u8bbe\u5907\u5c31\u4f1a\u5931\u8d25\uff09\uff0c ICE\u4f1a\u4f7f\u7528 STUN\u670d\u52a1\u5668\u83b7\u53d6\u5916\u90e8\u5730\u5740\uff0c\u5982\u679c\u8fd8\u662f\u5931\u8d25\u7684\u8bdd\uff0c\u5219\u901a\u8fc7 TURN\u4e2d\u7ee7\u670d\u52a1\u5668\u8def\u7531\u6570\u636e\u3002"),Object(s.b)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff1a"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"STUN\u670d\u52a1\u5668\u662f\u7528\u6765\u83b7\u53d6\u5916\u90e8\u5730\u5740\u7684\u3002")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"TURN\u670d\u52a1\u5668\u662f\u7528\u6765\u5728\u76f4\u63a5\u8fde\u63a5\uff08\u70b9\u5230\u70b9\uff09\u5931\u8d25\u7684\u60c5\u51b5\u4e0b\u8fdb\u884c\u4e2d\u7ee7\u6570\u636e\u6d41\u91cf\u7684"))),Object(s.b)("p",null,"\u6bcf\u4e2a TURN\u670d\u52a1\u5668\u90fd\u652f\u6301 STUN\uff1a TURN\u670d\u52a1\u5668\u4e5f\u662f\u4e00\u4e2a\u589e\u52a0\u4e86\u5185\u7f6e\u4e2d\u7ee7\u529f\u80fd\u7684 STUN\u670d\u52a1\u5668\u3002 ICE\u8fd8\u53ef\u4ee5\u5e94\u4ed8NAT\u8bbe\u7f6e\u7684\u590d\u6742\u6027\uff1a\u5b9e\u9645\u4e0a\uff0cNAT\u201c\u6253\u5b54\u201d\u53ef\u80fd\u4e0d\u4ec5\u4ec5\u9700\u8981\u4e00\u4e2a\u516c\u5171IP:\u7aef\u53e3\u5730\u5740\u3002"),Object(s.b)("p",null,"STUN \u548c/\u6216 TURN\u670d\u52a1\u5668\u7684URL\uff08\u53ef\u9009\u62e9\u5730\uff09\u7531iceServers\u914d\u7f6e\u5bf9\u8c61\u4e2d\u7684WebRTC\u5e94\u7528\u7a0b\u5e8f\u6307\u5b9a\uff0c\u8be5\u914d\u7f6e\u5bf9\u8c61\u662fRTCPeerConnection\u6784\u9020\u51fd\u6570\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002\u5bf9\u4e8e\u672c\u9879\u76ee\u6765\u8bf4\uff0c\u503c\u770b\u8d77\u6765\u662f\u8fd9\u6837\u7684"),Object(s.b)("pre",null,Object(s.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript","data-language":"typescript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">const</span> webrtc <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RTCPeerConnection</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      iceServers<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          urls<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"stun:stun.stunprotocol.org"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          url<span class="token punctuation">:</span> <span class="token string">"turn:relay.backups.cz"</span><span class="token punctuation">,</span>\n          credential<span class="token punctuation">:</span> <span class="token string">"webrtc"</span><span class="token punctuation">,</span>\n          username<span class="token punctuation">:</span> <span class="token string">"webrtc"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          url<span class="token punctuation">:</span> <span class="token string">"turn:relay.backups.cz?transport=tcp"</span><span class="token punctuation">,</span>\n          credential<span class="token punctuation">:</span> <span class="token string">"webrtc"</span><span class="token punctuation">,</span>\n          username<span class="token punctuation">:</span> <span class="token string">"webrtc"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}))),Object(s.b)("p",null,"\u4e00\u65e6RTCPeerConnection\u5177\u6709\u8be5\u4fe1\u606f\uff0c ICE\u7684\u4f5c\u7528\u5c31\u4f1a\u81ea\u52a8\u53d1\u751f\uff1aRTCPeerConnection\u4f7f\u7528 ICE\u6846\u67b6 \u6765\u8ba1\u7b97\u5230\u5bf9\u7aef\u4e4b\u95f4\u7684\u6700\u4f73\u8def\u5f84\uff0c\u5e76\u6839\u636e\u9700\u8981\u4f7f\u7528 STUN\u548c TURN\u670d\u52a1\u5668\u3002"),Object(s.b)("h3",{id:"stun"},"STUN"),Object(s.b)("p",null,"NAT\u7ed9\u8bbe\u5907\u63d0\u4f9b\u4e86\u4e00\u4e2aIP\u5730\u5740\u4ee5\u4f7f\u7528\u4e13\u7528\u5c40\u57df\u7f51\uff0c\u4f46\u662f\u8fd9\u4e2a\u5730\u5740\u4e0d\u80fd\u5728\u5916\u90e8\u4f7f\u7528\u3002\u7531\u4e8e\u6ca1\u6709\u516c\u7528\u5730\u5740\uff0cWebRTC\u7aef\u5bf9\u7aef\u5c31\u65e0\u6cd5\u8fdb\u884c\u901a\u4fe1\u3002\u800cWebRTC\u4f7f\u7528STUN\u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\u3002"),Object(s.b)("p",null,"STUN\u670d\u52a1\u5668\u4f4d\u4e8e\u516c\u5171\u7f51\u7edc\u4e0a\uff0c\u5e76\u4e14\u6709\u4e00\u4e2a\u7b80\u5355\u7684\u4efb\u52a1\uff1a\u68c0\u67e5\u4f20\u5165\u8bf7\u6c42\u7684IP\u5730\u5740\uff08\u6765\u81ea\u8fd0\u884c\u5728NAT\u540e\u9762\u7684\u5e94\u7528\u7a0b\u5e8f\uff09\uff0c\u5e76\u5c06\u8be5\u5730\u5740\u4f5c\u4e3a\u54cd\u5e94\u53d1\u9001\u56de\u53bb\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c\u5e94\u7528\u7a0b\u5e8f\u4f7f\u7528 STUN\u670d\u52a1\u5668\u4ece\u516c\u5171\u89d2\u5ea6\u53d1\u73b0\u5176IP:\u7aef\u53e3\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u4f7f\u5f97WebRTC\u4e00\u7aef\u4e3a\u81ea\u5df1\u83b7\u5f97\u4e00\u4e2a\u53ef\u516c\u5f00\u8bbf\u95ee\u7684\u5730\u5740\uff0c\u7136\u540e\u901a\u8fc7\u4fe1\u4ee4\u673a\u5236\u5c06\u5176\u4f20\u9012\u7ed9\u53e6\u4e00\u7aef\u4ee5\u5efa\u7acb\u76f4\u63a5\u8fde\u63a5\u3002\uff08\u5b9e\u9645\u4e0a\u4e0d\u540cNAT\u5de5\u4f5c\u65b9\u5f0f\u90fd\u6709\u6240\u4e0d\u540c\uff0c\u53ef\u80fd\u6709\u591a\u4e2aNAT\u5c42\uff0c\u4f46\u662f\u539f\u7406\u662f\u4e00\u6837\u7684\uff09\u3002"),Object(s.b)("p",null,"\u56e0\u4e3a STUN\u670d\u52a1\u5668\u4e0d\u9700\u8981\u505a\u592a\u591a\u7684\u5de5\u4f5c\u6216\u8005\u8bb0\u7279\u522b\u591a\u7684\u4e1c\u897f\uff0c\u6240\u4ee5\u76f8\u5bf9\u4f4e\u89c4\u683c\u7684 STUN\u670d\u52a1\u5668\u5c31\u53ef\u4ee5\u5904\u7406\u5927\u91cf\u7684\u8bf7\u6c42\u3002"),Object(s.b)("p",null,"\u6839\u636ewebrtcstats.com\u7684\u7edf\u8ba1\uff082013\u5e74\uff09\uff0c\u5927\u591a\u6570WebRTC\u901a\u8bdd\u90fd\u6210\u529f\u5730\u4f7f\u7528 STUN\u8fdb\u884c\u8fde\u63a5\uff0c\u670986%\u3002\u5c3d\u7ba1\u5bf9\u4e8e\u9632\u706b\u5899\u4e4b\u540e\u7684\u4e24\u7aef\u4e4b\u95f4\u7684\u547c\u53eb\u4ee5\u53ca\u590d\u6742\u7684NAT\u914d\u7f6e\uff0c\u6210\u529f\u901a\u8bdd\u91cf\u4f1a\u66f4\u5c11\u4e00\u4e9b\u3002\n",Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://michaelyou.github.io/img/stun.png",alt:null}))),Object(s.b)("h3",{id:"turn"},"TURN"),Object(s.b)("p",null,"RTCPeerConnection\u5c1d\u8bd5\u901a\u8fc7UDP\u5efa\u7acb\u5bf9\u7b49\u7aef\u4e4b\u95f4\u7684\u76f4\u63a5\u901a\u4fe1\u3002\u5982\u679c\u5931\u8d25\u7684\u8bdd\uff0cRTCPeerConnection\u5c31\u4f1a\u4f7f\u7528TCP\u8fdb\u884c\u8fde\u63a5\u3002\u5982\u679c\u4f7f\u7528TCP\u8fd8\u5931\u8d25\u7684\u8bdd\uff0c\u53ef\u4ee5\u7528 TURN\u670d\u52a1\u5668\u4f5c\u4e3a\u540e\u5907\uff0c\u5728\u7ec8\u7aef\u4e4b\u95f4\u8f6c\u53d1\u6570\u636e\u3002"),Object(s.b)("p",null,"\u91cd\u7533\uff1a TURN\u7528\u4e8e\u4e2d\u7ee7\u5bf9\u7b49\u7aef\u4e4b\u95f4\u7684\u97f3\u9891/\u89c6\u9891/\u6570\u636e\u6d41\uff0c\u800c\u4e0d\u662f\u4fe1\u4ee4\u6570\u636e\u3002"),Object(s.b)("p",null,"TURN\u670d\u52a1\u5668\u5177\u6709\u516c\u5171\u5730\u5740\uff0c\u56e0\u6b64\u5373\u4f7f\u5bf9\u7b49\u7aef\u4f4d\u4e8e\u9632\u706b\u5899\u6216\u4ee3\u7406\u4e4b\u540e\u4e5f\u53ef\u4ee5\u4e0e\u5176\u4ed6\u4eba\u8054\u7cfb\u3002 TURN\u670d\u52a1\u5668\u6709\u4e00\u4e2a\u6982\u5ff5\u4e0a\u6765\u8bb2\u7b80\u5355\u7684\u4efb\u52a1\u2014\u4e2d\u7ee7\u6570\u636e\u6d41\u2014\u4f46\u662f\u4e0e STUN\u670d\u52a1\u5668\u4e0d\u540c\u7684\u662f\uff0c\u4ed6\u4eec\u4f1a\u6d88\u8017\u5927\u91cf\u7684\u5e26\u5bbd\u3002\u6362\u53e5\u8bdd\u8bf4\uff0c TURN\u670d\u52a1\u5668\u9700\u8981\u66f4\u52a0\u7684\u5f3a\u5927\u3002\n",Object(s.b)("img",Object.assign({parentName:"p"},{src:"https://michaelyou.github.io/img/turn.png",alt:null}))),Object(s.b)("p",null,"\u4e0a\u56fe\u663e\u793a\u4e86 TURN\u7684\u4f5c\u7528\uff1a\u5355\u7eaf\u7684 STUN\u6ca1\u6709\u6210\u529f\u5efa\u7acb\u8fde\u63a5\uff0c\u6240\u4ee5\u6bcf\u4e2a\u5bf9\u7b49\u7aef\u8fd8\u9700\u8981\u4f7f\u7528 TURN\u670d\u52a1\u5668\u3002"),Object(s.b)("p",null,"\u5173\u4e8e\u5982\u4f55\u642d\u5efaSTUN\u548cTURN\u670d\u52a1\u5668\u53c2\u89c1",Object(s.b)("a",Object.assign({parentName:"p"},{href:"https://michaelyou.github.io/2018/08/01/%E7%9C%9F%E5%AE%9E%E4%B8%96%E7%95%8C%E4%B8%AD%E7%9A%84WebRTC/"}),"\u771f\u5b9e\u4e16\u754c\u4e2d\u7684WebRTC\uff1aSTUN, TURN and signaling")),Object(s.b)("h2",{id:"refs"},"Refs"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://dev.to/michaelneu/i-webrtc-you-building-a-video-chat-in-javascript-2j38"}),"building-a-video-chat-in-javascript")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://medium.com/av-transcode/what-is-webrtc-and-how-to-setup-stun-turn-server-for-webrtc-communication-63314728b9d0"}),"what-is-webrtc-and-how-to-setup-stun-turn-server-for-webrtc-communication")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://zhuanlan.zhihu.com/p/75387873"}),"WebRTC\uff1a\u8fde\u63a5\u5efa\u7acb\u8fc7\u7a0b\u7684\u7f51\u7edc\u7a7f\u900f")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("a",Object.assign({parentName:"li"},{href:"https://michaelyou.github.io/2018/08/01/%E7%9C%9F%E5%AE%9E%E4%B8%96%E7%95%8C%E4%B8%AD%E7%9A%84WebRTC/"}),"\u771f\u5b9e\u4e16\u754c\u4e2d\u7684WebRTC\uff1aSTUN, TURN and signaling"))))}i.isMDXComponent=!0;var b=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"\u4f60\u53ef\u4ee5\u4ece\u672c\u6587\u4e86\u89e3\u5230",level:2,title:"\u4f60\u53ef\u4ee5\u4ece\u672c\u6587\u4e86\u89e3\u5230",children:[]},{id:"\u672c\u6587\u80cc\u666f",level:2,title:"\u672c\u6587\u80cc\u666f",children:[]},{id:"\u7528webrtc\u6784\u5efa\u5c4f\u5e55\u5206\u4eab\u5e94\u7528",level:2,title:"\u7528WebRTC\u6784\u5efa\u5c4f\u5e55\u5206\u4eab\u5e94\u7528",children:[{id:"\u5bf9\u7aef\u53d1\u73b0\u4e0e\u4fe1\u4ee4\u670d\u52a1\u5668",level:3,title:"\u5bf9\u7aef\u53d1\u73b0\u4e0e\u4fe1\u4ee4\u670d\u52a1\u5668",children:[]},{id:"\u5728\u4fe1\u4ee4\u4e4b\u540e\uff1a\u4f7f\u7528-ice\u6765\u5bf9\u4ed8nat\u548c\u9632\u706b\u5899",level:3,title:"\u5728\u4fe1\u4ee4\u4e4b\u540e\uff1a\u4f7f\u7528 ICE\u6765\u5bf9\u4ed8NAT\u548c\u9632\u706b\u5899",children:[]},{id:"stun",level:3,title:"STUN",children:[]},{id:"turn",level:3,title:"TURN",children:[]}]},{id:"refs",level:2,title:"Refs",children:[]}]},u={}}}]);
//# sourceMappingURL=102.b451fb2d.chunk.js.map