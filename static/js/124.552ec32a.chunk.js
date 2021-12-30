(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{448:function(n,s,a){"use strict";a.r(s),a.d(s,"readingTime",function(){return o}),a.d(s,"default",function(){return u}),a.d(s,"tableOfContents",function(){return l}),a.d(s,"frontMatter",function(){return i});var t=a(32),p=(a(0),a(44)),o={text:"3 min read",minutes:2.54,time:152400,words:508},e={},c="wrapper";function u(n){var s=n.components,a=Object(t.a)(n,["components"]);return Object(p.b)(c,Object.assign({},e,a,{components:s,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"\u4f60\u53ef\u4ee5\u4ece\u672c\u6587\u4e86\u89e3\u5230"},"\u4f60\u53ef\u4ee5\u4ece\u672c\u6587\u4e86\u89e3\u5230"),Object(p.b)("h2",{id:"\u5e27\u52a8\u753b\u65b9\u6848\u7684\u53d8\u66f4"},"\u5e27\u52a8\u753b\u65b9\u6848\u7684\u53d8\u66f4"),Object(p.b)("p",null,"\u7531\u4e8e part1 \u90e8\u5206\u63d0\u5230\u7684\u201c\u6362\u56fe\u7684\u65b9\u6848\u201d\u4ea7\u751f\u7684\u7f51\u7edc\u8bf7\u6c42\u8fc7\u591a\uff0c\u5f71\u54cd\u4e86\u9875\u9762\u6574\u4f53\u7684\u52a0\u8f7d\u3002"),Object(p.b)("p",null,"\u4e3a\u6b64\u6539\u53d8\u4e86\u65b9\u6848\uff0c\u91c7\u7528\u4e86 CSS Sprites \u52a8\u753b\u3002\u8bf4\u4eba\u8bdd\u5c31\u662f N \u5f20\u5e27\u52a8\u753b\u5408\u6210\u4e00\u5f20\u5927\u56fe\uff0c\u7136\u540e\u6309\u987a\u5e8f\u6362\u80cc\u666f\u56fe\u7684\u53d6\u56fe\u4f4d\u7f6e\u3002"),Object(p.b)("p",null,"\u4e3a\u6b64\u6211\u505a\u4e86\u4e00\u4e2a\u5de5\u5177\u9879\u76ee",Object(p.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/mzvast/frame-animation-sprite-maker"}),"frame-animation-sprite-maker"),"\uff0c\u91cc\u9762\u4e3b\u8981\u662f\u7528\u5230\u4e86 gka \u8fd9\u4e2a\u5305\uff0c\u4f7f\u7528\u7684\u65b9\u6cd5\u662f\u628a\u56fe\u7247\u653e\u5165 images \u76ee\u5f55\u4e0b\uff0c\u8fd0\u884c",Object(p.b)("inlineCode",{parentName:"p"},"npm run build:gka"),"\u4f1a\u5728 build \u76ee\u5f55\u4e0b\u751f\u6210\u5408\u6210\u7684\u56fe\uff0c\u4e4b\u540e\u5982\u679c\u56fe\u7247\u5c3a\u5bf8\u6bd4\u8f83\u5927\uff0c\u90a3\u4e48 gka \u538b\u7f29\u4f1a\u51fa\u9519\uff0c\u6211\u4eec\u53ef\u4ee5\u624b\u52a8\u91c7\u7528 imagemin \u518d\u538b\u4e00\u904d\uff0c\u6267\u884c",Object(p.b)("inlineCode",{parentName:"p"},"npm run imagemin"),"\u5373\u53ef\u5728 dist \u76ee\u5f55\u4e0b\u4ea7\u751f\u5982\u4e0b\u914d\u7f6e\u7684\u538b\u7f29\u56fe\u7247\u5566\u3002"),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token comment">// frame-animation-sprite-maker/imagemin.js</span>\n<span class="token keyword">const</span> imagemin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'imagemin\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment">// const imageminJpegtran = require(\'imagemin-jpegtran\');</span>\n<span class="token keyword">const</span> imageminPngquant <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'imagemin-pngquant\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> files <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">imagemin</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">\'build/**/**.{jpg,png}\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n        destination<span class="token punctuation">:</span> <span class="token string">\'dist\'</span><span class="token punctuation">,</span>\n        plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token comment">// imageminJpegtran(),</span>\n            <span class="token function">imageminPngquant</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n                quality<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">0.6</span><span class="token punctuation">,</span> <span class="token number">0.8</span><span class="token punctuation">]</span>\n            <span class="token punctuation">}</span><span class="token punctuation">)</span>\n        <span class="token punctuation">]</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">//=> [{data: &lt;Buffer 89 50 4e \u2026>, destinationPath: \'build/images/foo.jpg\'}, \u2026]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}))),Object(p.b)("p",null,"\u800c\u5728\u79fb\u52a8\u7aef\uff0c\u8fd9\u5957\u52a8\u753b\u7684\u517c\u5bb9\u6027\u8fd8\u662f\u4e0d\u591f\u597d\u3002\u4e3a\u6b64\u6211\u4eec\u7528 Gif \u56fe\u505a\u4e86 H5 \u7684\u52a8\u753b\u3002CSS \u52a8\u753b\u8fd8\u662f\u7559\u7ed9\u4e86 PC\u3002"),Object(p.b)("h2",{id:"\u79fb\u52a8\u7aef\u8fd4\u56de\u4f4d\u7f6e\u95ee\u9898\uff0chook-\u76f8\u5173"},"\u79fb\u52a8\u7aef\u8fd4\u56de\u4f4d\u7f6e\u95ee\u9898\uff0chook \u76f8\u5173"),Object(p.b)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u4e3b\u8981\u51fa\u73b0\u5728\u79fb\u52a8\u7aef\uff0c\u7528\u6237\u5728\u8fd4\u56de\u4e0a\u4e00\u4e2a\u9875\u9762\u7684\u65f6\u5019\uff0c\u6709\u4e00\u5b9a\u51e0\u7387\u505c\u5728\u9519\u8bef\u7684\u5730\u65b9\u3002\u636e\u79f0\u5728 Android \u4e0a\u8f83\u4e3a\u5bb9\u6613\u51fa\u73b0\u3002\u4e3a\u6b64\uff0c\u53ea\u597d\u624b\u52a8\u5b9e\u73b0\u4e00\u4e2a\u7b80\u5355\u7684\u4f4d\u7f6e\u8bb0\u5f55\u5668\u3002\u4f46\u903b\u8f91\u5bf9\u7684\uff0c\u4f46\u5c31\u662f\u62ff\u4e0d\u5230\u6b63\u786e\u7684\u9ad8\u5ea6\uff0c\u5728\u9875\u9762\u9500\u6bc1\u7684\u65f6\u5019\uff0c\u603b\u662f\u4f1a\u53d1\u751f\u9ad8\u5ea6\u7a81\u53d8\u3002\n\u7136\u540e\uff0c\u5c31\u60f3\u5230\u4e86 useEffect \u662f\u5f02\u6b65\u5165\u5217\u7684\uff0c\u53ef\u4ee5\u8bd5\u8bd5\u540c\u6b65\u6267\u884c\u7684 useLayoutEffect\uff0c\u7ed3\u679c\u8fd8\u771f\u597d\u4e86\uff0c\u6267\u884c\u63d0\u524d\u4e86\uff0c\u9ad8\u5ea6\u4e0d\u4f1a\u7a81\u53d8\u4e86\u3002"),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-typescript","data-language":"typescript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> Env <span class="token keyword">from</span> <span class="token string">\'Env\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>useEffect<span class="token punctuation">,</span> useLayoutEffect<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>useLocation<span class="token punctuation">,</span> useHistory<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> isFirstLoad <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n<span class="token comment">// blocking mode will delay page render, so element will not show immediately</span>\n<span class="token keyword">let</span> scrollMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">let</span> lastPathname <span class="token operator">=</span> <span class="token string">\'\'</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">ScrollToTopPatch</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>pathname<span class="token punctuation">,</span> state<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useLocation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span>action<span class="token punctuation">,</span> length<span class="token punctuation">,</span> location<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// console.log(\'ddt::action\', action, isFirstLoad);</span>\n    <span class="token keyword">let</span> skip <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>action <span class="token operator">===</span> <span class="token string">\'POP\'</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>isFirstLoad<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token comment">// history\u8fd4\u56de\u4e0d\u8df3\u8f6c\u9876\u90e8</span>\n        skip <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n        <span class="token comment">// fix hooks order change , DON\'T return null</span>\n    <span class="token punctuation">}</span>\n    isFirstLoad <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n<span class="highlighted-line">    <span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>        <span class="token comment">// console.log(\'ddt::pathname\', pathname);</span>\n        <span class="token comment">// console.log(\'ddt::action\', action, pathname, lastPathname);</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>action <span class="token operator">===</span> <span class="token string">\'POP\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// console.log(\'ddt::doScroll\', action);</span>\n            <span class="token comment">// back?</span>\n<span class="highlighted-line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>pathname <span class="token keyword">in</span> scrollMap<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>                <span class="token comment">// pop\u65f6\uff0c\u5982\u679c\u6709\u5b58\uff0c\u5219\u56de\u5230\u8bb0\u5fc6\u7684\u4f4d\u7f6e</span>\n                <span class="token comment">// console.log(\'ddt::doScroll\', action, scrollMap[pathname]);</span>\n                window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> scrollMap<span class="token punctuation">[</span>pathname<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n            <span class="token keyword">return</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>skip<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>\n        <span class="token comment">// use search instead of hash when using history router</span>\n        <span class="token keyword">const</span> hasJumpSignal <span class="token operator">=</span> location<span class="token punctuation">.</span>search<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">\'anchor=\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>hasJumpSignal<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">const</span> anchor<span class="token punctuation">:</span> <span class="token builtin">string</span> <span class="token operator">=</span> location<span class="token punctuation">.</span>search\n                <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'anchor=\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>\n                <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'&amp;\'</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n            <span class="token keyword">const</span> element<span class="token punctuation">:</span> <span class="token builtin">any</span> <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>anchor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">const</span> backScrollOffset <span class="token operator">=</span> Env<span class="token punctuation">.</span>ua<span class="token punctuation">.</span>isH5 <span class="token operator">?</span> <span class="token number">100</span> <span class="token punctuation">:</span> <span class="token number">200</span><span class="token punctuation">;</span>\n            element <span class="token operator">&amp;&amp;</span> window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> element<span class="token punctuation">.</span>offsetTop <span class="token operator">-</span> backScrollOffset<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>\n            <span class="token comment">// console.log(\'ddt::top!\');</span>\n            window<span class="token punctuation">.</span><span class="token function">scrollTo</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>pathname<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="highlighted-line">    <span class="token function">useLayoutEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>        <span class="token comment">// \u6b64\u5904\u7528useEffect\u5219\u4f1a\u8bfb\u5230\u9519\u8bef\u7684\u5c3a\u5bf8</span>\n        <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token comment">// console.log(\'ddt::unmount!\', pathname);</span>\n            scrollMap<span class="token punctuation">[</span>pathname<span class="token punctuation">]</span> <span class="token operator">=</span> window<span class="token punctuation">.</span>scrollY<span class="token punctuation">;</span> <span class="token comment">//max; //</span>\n            <span class="token comment">// console.log(\'ddt::do scrollMap\', scrollMap);</span>\n            lastPathname <span class="token operator">=</span> pathname<span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n'}}))),Object(p.b)("h2",{id:"\u5f00\u53d1\u6548\u7387\u7684\u76f8\u5173\u5de5\u5177\u3001\u5e93"},"\u5f00\u53d1\u6548\u7387\u7684\u76f8\u5173\u5de5\u5177\u3001\u5e93"),Object(p.b)("p",null,"hygen \u505a\u4ee3\u7801\u751f\u6210\u5668\uff0c\u7edf\u4e00 components\u3001pages \u7684\u6a21\u677f"),Object(p.b)("p",null,"storybook \u505a UI \u7ec4\u4ef6\u7684\u72ec\u7acb\u5f00\u53d1\u73af\u5883\uff08\u5355\u6d4b\u73af\u5883\uff09"),Object(p.b)("h2",{id:"ssr-\u6a21\u5f0f\u4e0b\u7684-es5-\u76f4\u8fde\u8c03\u8bd5\u65b9\u6cd5"},"SSR \u6a21\u5f0f\u4e0b\u7684 es5 \u76f4\u8fde\u8c03\u8bd5\u65b9\u6cd5"),Object(p.b)("p",null,"part1 \u63d0\u5230 SPA \u6a21\u5f0f\u4e0b\u7684\u76f4\u8fde\u65b9\u6cd5\u3002\u4f46\u5728 SSR \u6a21\u5f0f\u4e0b\uff0c\u7531\u4e8e\u7aef\u53e3\u5360\u7528\u7b49\u95ee\u9898\uff0c\u5c31\u5931\u6548\u4e86\u3002"),Object(p.b)("p",null,"\u5176\u5b9e\u8981\u89e3\u51b3\u4e24\u4e2a\u95ee\u9898\uff1a"),Object(p.b)("h3",{id:"\u7b2c\u4e00\u6b65\u662f\u5982\u4f55\u8ba9\u53ccserver\u5728\u4ee3\u7406\u7684\u60c5\u51b5\u4e0brun\u8d77\u6765\u3002"},"\u7b2c\u4e00\u6b65\u662f\u5982\u4f55\u8ba9\u53ccserver\u5728\u4ee3\u7406\u7684\u60c5\u51b5\u4e0brun\u8d77\u6765\u3002"),Object(p.b)("p",null,"razzle\u7684ssr\u5f00\u53d1\u73af\u5883\u7684\u53ccserver\u67b6\u6784\uff0c\u5927\u81f4\u5982\u4e0b\uff1a"),Object(p.b)("p",null,"3000=> express server \u8d1f\u8d23renderToString\uff0c\u6d41\u91cf\u7684\u76f4\u63a5\u5165\u53e3\n3001=> webpackDevServer \u8d1f\u8d23\u9759\u6001\u6587\u4ef6\uff08\u9ed8\u8ba4\u6ce8\u5165localhost:3001\uff09"),Object(p.b)("p",null,"\u800c\u5728\u5916\u90e8\u8bbe\u5907\u5982\u624b\u673a\u7aef\u901a\u8fc7proxy\u8fde\u63a5\uff0c\u5c06\u4e0d\u80fd\u89e3\u6790localhost:3001\uff0c\u56e0\u6b64\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u914d\u7f6e\u8f6c\u53d1\u3002"),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{}),"http://vredu.baidu.com localhost:3000\nhttp://vvredu.baidu.com localhost:3001\n")),Object(p.b)("p",null,"\u8fd9\u6837\u5c31\u5b8c\u6210\u4e86\u7aef\u53e3\u8f6c\u53d1\u3002"),Object(p.b)("h3",{id:"\u7b2c\u4e8c\u90e8\u662f\u5982\u4f55\u7f16\u8bd1\u6210es5"},"\u7b2c\u4e8c\u90e8\u662f\u5982\u4f55\u7f16\u8bd1\u6210es5"),Object(p.b)("p",null,"\u7b2c\u4e00\u6b65\u5b8c\u6210\u540e\uff0c\u53d1\u73b0\u5916\u90e8\u7684js\u8f6c\u6210\u4e86es5\uff0c\u4f46\u662f\u4e00\u4e9brazzle\u5185\u90e8\u7684\u4ee3\u7801\u8fd8\u662fes6."),Object(p.b)("p",null,"\u8fd8\u597d\u6211\u4eec\u5728 github \u4e0a\u627e\u5230\u8fd9\u6837\u7684\u5b9e\u73b0\u65b9\u6cd5\uff0c\u5c06\u8fd9\u4e9b\u6587\u4ef6\u518d\u6b21\u8fdb\u884cbabel\u7f16\u8bd1\u3002"),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-jsx","data-language":"jsx","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token comment">// razzle.config.js</span>\n<span class="token keyword">const</span> ieRule <span class="token operator">=</span> <span class="token punctuation">{</span>\n    test<span class="token punctuation">:</span> <span class="token regex">/\\.jsx?$/</span><span class="token punctuation">,</span>\n    include<span class="token punctuation">:</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>\n        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">node_modules/(?=(</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">[</span>\n            <span class="token string">\'acorn-jsx\'</span><span class="token punctuation">,</span>\n            <span class="token string">\'estree-walker\'</span><span class="token punctuation">,</span>\n            <span class="token string">\'regexpu-core\'</span><span class="token punctuation">,</span>\n            <span class="token string">\'unicode-match-property-ecmascript\'</span><span class="token punctuation">,</span>\n            <span class="token string">\'unicode-match-property-value-ecmascript\'</span><span class="token punctuation">,</span>\n            <span class="token string">\'react-dev-utils\'</span><span class="token punctuation">,</span>\n            <span class="token string">\'ansi-styles\'</span><span class="token punctuation">,</span>\n            <span class="token string">\'ansi-regex\'</span><span class="token punctuation">,</span>\n            <span class="token string">\'chalk\'</span><span class="token punctuation">,</span>\n            <span class="token string">\'strip-ansi\'</span>\n        <span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'|\'</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">))</span><span class="token template-punctuation string">`</span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">,</span>\n    use<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            presets<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">[</span>\n                    <span class="token string">\'@babel/preset-env\'</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">{</span>\n                        targets<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                            ie<span class="token punctuation">:</span> <span class="token number">11</span>\n                        <span class="token punctuation">}</span>\n                    <span class="token punctuation">}</span>\n                <span class="token punctuation">]</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            name<span class="token punctuation">:</span> <span class="token string">\'typescript\'</span><span class="token punctuation">,</span>\n            options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                useBabel<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                tsLoader<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                    transpileOnly<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                    experimentalWatchApi<span class="token punctuation">:</span> <span class="token boolean">true</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                forkTsChecker<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                    tsconfig<span class="token punctuation">:</span> <span class="token string">\'./tsconfig.json\'</span><span class="token punctuation">,</span>\n                    tslint<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n                    watch<span class="token punctuation">:</span> <span class="token string">\'./src\'</span><span class="token punctuation">,</span>\n                    typeCheck<span class="token punctuation">:</span> <span class="token boolean">true</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token function-variable function">modifyWebpackConfig</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>env<span class="token punctuation">:</span> <span class="token punctuation">{</span>target<span class="token punctuation">,</span> dev<span class="token punctuation">}</span><span class="token punctuation">,</span> webpackConfig<span class="token punctuation">:</span> config<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>dev <span class="token operator">&amp;&amp;</span> target <span class="token operator">===</span> <span class="token string">\'web\'</span> <span class="token operator">&amp;&amp;</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">ECMA</span> <span class="token operator">===</span> <span class="token string">\'5\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'es5 running\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token comment">// config.entry.client[0] = require.resolve(\'webpack/hot/dev-server\');</span>\n            config<span class="token punctuation">.</span>module<span class="token punctuation">.</span>rules<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>ieRule<span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n'}}))),Object(p.b)("pre",null,Object(p.b)("code",Object.assign({parentName:"pre"},{className:"language-json","data-language":"json","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token comment">// .babelrc</span>\n<span class="token punctuation">{</span>\n    <span class="token property">"presets"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">[</span>\n        <span class="token string">"razzle/babel"</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          <span class="token property">"targets"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token property">"browsers"</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n              <span class="token string">"ie 11"</span><span class="token punctuation">,</span>\n              <span class="token string">"last 2 Chrome versions"</span><span class="token punctuation">,</span>\n              <span class="token string">"last 2 Firefox versions"</span><span class="token punctuation">,</span>\n              <span class="token string">"last 2 Safari versions"</span>\n            <span class="token punctuation">]</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n      <span class="token punctuation">]</span>\n    <span class="token punctuation">]</span>\n  <span class="token punctuation">}</span>\n'}}))))}u.isMDXComponent=!0;var l=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"\u4f60\u53ef\u4ee5\u4ece\u672c\u6587\u4e86\u89e3\u5230",level:2,title:"\u4f60\u53ef\u4ee5\u4ece\u672c\u6587\u4e86\u89e3\u5230",children:[]},{id:"\u5e27\u52a8\u753b\u65b9\u6848\u7684\u53d8\u66f4",level:2,title:"\u5e27\u52a8\u753b\u65b9\u6848\u7684\u53d8\u66f4",children:[]},{id:"\u79fb\u52a8\u7aef\u8fd4\u56de\u4f4d\u7f6e\u95ee\u9898\uff0chook-\u76f8\u5173",level:2,title:"\u79fb\u52a8\u7aef\u8fd4\u56de\u4f4d\u7f6e\u95ee\u9898\uff0chook \u76f8\u5173",children:[]},{id:"\u5f00\u53d1\u6548\u7387\u7684\u76f8\u5173\u5de5\u5177\u3001\u5e93",level:2,title:"\u5f00\u53d1\u6548\u7387\u7684\u76f8\u5173\u5de5\u5177\u3001\u5e93",children:[]},{id:"ssr-\u6a21\u5f0f\u4e0b\u7684-es5-\u76f4\u8fde\u8c03\u8bd5\u65b9\u6cd5",level:2,title:"SSR \u6a21\u5f0f\u4e0b\u7684 es5 \u76f4\u8fde\u8c03\u8bd5\u65b9\u6cd5",children:[{id:"\u7b2c\u4e00\u6b65\u662f\u5982\u4f55\u8ba9\u53ccserver\u5728\u4ee3\u7406\u7684\u60c5\u51b5\u4e0brun\u8d77\u6765\u3002",level:3,title:"\u7b2c\u4e00\u6b65\u662f\u5982\u4f55\u8ba9\u53ccserver\u5728\u4ee3\u7406\u7684\u60c5\u51b5\u4e0brun\u8d77\u6765\u3002",children:[]},{id:"\u7b2c\u4e8c\u90e8\u662f\u5982\u4f55\u7f16\u8bd1\u6210es5",level:3,title:"\u7b2c\u4e8c\u90e8\u662f\u5982\u4f55\u7f16\u8bd1\u6210es5",children:[]}]}]},i={}}}]);
//# sourceMappingURL=124.552ec32a.chunk.js.map