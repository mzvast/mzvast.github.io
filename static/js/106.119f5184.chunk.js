(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{258:function(n,s,a){"use strict";a.r(s),a.d(s,"readingTime",function(){return e}),a.d(s,"default",function(){return l}),a.d(s,"tableOfContents",function(){return r}),a.d(s,"frontMatter",function(){return u});var t=a(36),p=(a(0),a(35)),e={text:"2 min read",minutes:2,time:12e4,words:400},o={},c="wrapper";function l(n){var s=n.components,a=Object(t.a)(n,["components"]);return Object(p.mdx)(c,Object.assign({},o,a,{components:s,mdxType:"MDXLayout"}),Object(p.mdx)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),Object(p.mdx)("p",null,"2018 \u5e74\u4ee5\u6765\u7684\u8dd1\u4e86\u8bb8\u4e45\u7684 react \u9879\u76ee\uff0c\u4e00\u76f4\u662f\u57fa\u4e8e cra\uff08create-react-app\uff09\u5b98\u65b9\u811a\u624b\u67b6\u5e76\u4e14\u4e0d eject\uff0c\u901a\u8fc7 react-app-rewired \u8fdb\u884c\u81ea\u5b9a\u4e49\u914d\u7f6e\u7684\u3002\u5f53\u65f6\u867d\u7136\u6709\u4e0d\u5c11\u7b2c\u4e09\u65b9\u7684 ts\uff08typescript\uff09\u5316\u65b9\u6848\uff0c\u4f46\u4e0d\u5c11\u5b98\u65b9\u652f\u6301\u4e14\u9700\u8981 eject \u4e14\u9700\u8981\u7b2c\u4e09\u65b9 ts loader\uff0c\u6240\u4ee5\u90fd\u5728\u53ef\u5347\u7ea7\u6027\u4e0a\u6709\u786c\u4f24\u3002\u800c\u5feb\u5230\u5e74\u5e95\u7684\u65f6\u5019\uff0cBabel7 \u51fa\u6765\uff0c\u5e76\u4e14 babel \u5b98\u65b9\u652f\u6301 typescript\uff0c\u4e0e\u6b64\u540c\u65f6 Facebook \u5c06 cra2.0 \u52a0\u5165\u4e86 ts \u7684\u652f\u6301\uff0c\u652f\u6301\u751f\u6210 ts \u9879\u76ee(",Object(p.mdx)("a",Object.assign({parentName:"p"},{href:"https://facebook.github.io/create-react-app/docs/adding-typescript"}),"cra-doc"),")\u3002"),Object(p.mdx)("p",null,"\u672c\u6587\u5c1d\u8bd5\u5c06\u6211\u4eec\u5de5\u7a0b\u7684\u5347\u7ea7\u8fc7\u7a0b\u548c\u91c7\u5751\u8fdb\u884c\u603b\u7ed3\u548c\u5206\u4eab\u3002"),Object(p.mdx)("p",null,"\u539f\u5de5\u7a0b\u4e3b\u8981\u914d\u7f6e\u662f"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"create-react-app (1.x )"),Object(p.mdx)("li",{parentName:"ul"},"flow"),Object(p.mdx)("li",{parentName:"ul"},"react-app-rewired (1.x)")),Object(p.mdx)("p",null,"\u76ee\u6807\u5347\u7ea7\u540e\u7684\u914d\u7f6e\u662f"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"create-react-app (2.x )"),Object(p.mdx)("li",{parentName:"ul"},"typescript"),Object(p.mdx)("li",{parentName:"ul"},"react-app-rewired (2.x)")),Object(p.mdx)("h2",{id:"\u6b65\u9aa4\u62c6\u89e3"},"\u6b65\u9aa4\u62c6\u89e3"),Object(p.mdx)("h3",{id:"1\u3001\u5347\u7ea7-cra-\u7248\u672c"},"1\u3001\u5347\u7ea7 cra \u7248\u672c"),Object(p.mdx)("p",null,"\u9996\u5148\u5347\u7ea7",Object(p.mdx)("inlineCode",{parentName:"p"},"react-scripts react-app-rewired"),"\u5230 2.x \u7248\u672c"),Object(p.mdx)("h3",{id:"2\u3001\u91cd\u547d\u540d\u6587\u4ef6\u540d"},"2\u3001\u91cd\u547d\u540d\u6587\u4ef6\u540d"),Object(p.mdx)("p",null,"\u5c06 src \u4e0b\u7684 js \u548c jsx \u6587\u4ef6\u6539\u6210 tsx \u6587\u4ef6\u3002\u53ef\u4ee5\u5229\u7528",Object(p.mdx)("inlineCode",{parentName:"p"},'find ./src -name "*.jsx" -exec sh -c \'mv "$0" "${0%.jsx}.tsx"\' {} \\;'),"\u548c",Object(p.mdx)("inlineCode",{parentName:"p"},'find ./src -name "*.js" -exec sh -c \'mv "$0" "${0%.jsx}.tsx"\' {} \\;'),"\u4e24\u6761\u6307\u4ee4\u3002"),Object(p.mdx)("h3",{id:"3\u3001\u542f\u52a8\u9879\u76ee"},"3\u3001\u542f\u52a8\u9879\u76ee"),Object(p.mdx)("p",null,"\u8fd0\u884c",Object(p.mdx)("inlineCode",{parentName:"p"},"npm start"),"\uff0ccra \u4f1a\u68c0\u6d4b\u5230\u9879\u76ee\u662f typescript \u5de5\u7a0b\u7136\u540e\u4e3a\u4f60\u4ea7\u751f\u4e00\u4e2a tsconfig.json \u6587\u4ef6\u3002\u5efa\u8bae\u5c06 compilerOptions \u7684 strict \u503c\u6539\u6210 false\uff0c\u4ee5\u907f\u514d\u8fc7\u5206\u4e25\u683c\u7684 any \u68c0\u67e5\u5bfc\u81f4\u9879\u76ee\u7f16\u4e0d\u8fc7\u3002\u8fd9\u4e2a\u6587\u4ef6\u5927\u81f4\u957f\u8fd9\u6837:"),Object(p.mdx)("pre",null,Object(p.mdx)("code",Object.assign({parentName:"pre"},{className:"language-json","data-language":"json","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token punctuation">{</span>\n    <span class="token property">"compilerOptions"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"es5"</span><span class="token punctuation">,</span>\n        <span class="token property">"lib"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"dom"</span><span class="token punctuation">,</span> <span class="token string">"dom.iterable"</span><span class="token punctuation">,</span> <span class="token string">"esnext"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token property">"allowJs"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"skipLibCheck"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"esModuleInterop"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"allowSyntheticDefaultImports"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"strict"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// default is true</span>\n        <span class="token property">"forceConsistentCasingInFileNames"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"module"</span><span class="token operator">:</span> <span class="token string">"esnext"</span><span class="token punctuation">,</span>\n        <span class="token property">"moduleResolution"</span><span class="token operator">:</span> <span class="token string">"node"</span><span class="token punctuation">,</span>\n        <span class="token property">"resolveJsonModule"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"isolatedModules"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"noEmit"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token property">"jsx"</span><span class="token operator">:</span> <span class="token string">"preserve"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"src"</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n'}}))),Object(p.mdx)("h3",{id:"4\u3001\u5feb\u6377\u5b89\u88c5-typings"},"4\u3001\u5feb\u6377\u5b89\u88c5 typings"),Object(p.mdx)("p",null,"\u53ef\u4ee5\u5168\u5c40\u5b89\u88c5",Object(p.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/nfour/types-installer"}),"types-installer"),"\u6765\u8fdb\u884c\u81ea\u52a8\u5316\u7684\u4f9d\u8d56\u89e3\u6790\u548c\u5b89\u88c5\u3002"),Object(p.mdx)("pre",null,Object(p.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript","data-language":"javascript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'$ npm i <span class="token operator">-</span>g types<span class="token operator">-</span>installer\n$ types<span class="token operator">-</span>installer\n'}}))),Object(p.mdx)("h3",{id:"5\u3001\u4fee\u590d\u6240\u6709\u7f16\u8bd1\u9519\u8bef"},"5\u3001\u4fee\u590d\u6240\u6709\u7f16\u8bd1\u9519\u8bef"),Object(p.mdx)("p",null,"\u8fd9\u662f\u5de5\u4f5c\u91cf\u6700\u5927\u4e5f\u662f\u6700\u590d\u6742\u7684\u6b65\u9aa4\u3002\u6839\u636e\u5de5\u7a0b\u6587\u4ef6\u591a\u5c11\u53ef\u80fd\u4f1a\u82b1\u8d39 1 \u5929\u5230\u82e5\u5e72\u5929\u7684\u5de5\u4f5c\u91cf\u3002\u4f46\u65e2\u7136\u9009\u62e9\u4e86\u5f00\u59cb\uff0c\u5c31\u8bf7\u575a\u4fe1\u7ed3\u679c\u662f\u7f8e\u597d\u7684\u3002"),Object(p.mdx)("h3",{id:"\u4e00\u4e2a-\u6bd4\u8f83\u590d\u6742\u7684\u5e26\u6709-redux-\u7684-react-\u7ec4\u4ef6\u7684\u901a\u5e38-ts-\u5199\u6cd5"},"\u4e00\u4e2a \u6bd4\u8f83\u590d\u6742\u7684\u5e26\u6709 redux \u7684 react \u7ec4\u4ef6\u7684\u901a\u5e38 ts \u5199\u6cd5"),Object(p.mdx)("ul",null,Object(p.mdx)("li",{parentName:"ul"},"\u8fd9\u91cc redux \u7684 state \u548c dispatch \u7684 any \u58f0\u660e\u662f\u53ef\u4ee5\u901a\u8fc7\u5f15\u5165 store \u6587\u4ef6\u6765\u5b9e\u73b0\u7684\uff0c\u5077\u61d2\u4e86\u3002"),Object(p.mdx)("li",{parentName:"ul"},"RouteComponentProps \u662f\u4e3a\u4e86 withRouter \u53ef\u4ee5\u6b63\u786e\u8bc6\u522b this.props.history \u7b49 react-router \u5c5e\u6027\u3002"),Object(p.mdx)("li",{parentName:"ul"},"CSSProperties \u662f\u4e3a\u4e86\u8ba9 style \u5bf9\u8c61\u53ef\u4ee5\u6b63\u786e\u88ab\u8bc6\u522b\u3002\u5f53\u7136\u5de5\u7a0b\u4e2d\u7528\u7684\u662f styled-components \u5c31\u4e0d\u9700\u8981\u8fd9\u6761\u4e86\u3002")),Object(p.mdx)("pre",null,Object(p.mdx)("code",Object.assign({parentName:"pre"},{className:"language-typescript","data-language":"typescript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span>Component<span class="token punctuation">,</span> CSSProperties<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>Route<span class="token punctuation">,</span> withRouter<span class="token punctuation">,</span> RouteComponentProps<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span>connect<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-redux\'</span><span class="token punctuation">;</span>\n<span class="token keyword">interface</span> <span class="token class-name">OwnProps</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name">StateProps</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">interface</span> <span class="token class-name">DispatchProps</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token keyword">type</span> Props <span class="token operator">=</span> OwnProps <span class="token operator">&amp;</span> StateProps <span class="token operator">&amp;</span> DispatchProps <span class="token operator">&amp;</span> RouteComponentProps<span class="token punctuation">;</span>\n<span class="token keyword">type</span> State <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token keyword">class</span> <span class="token class-name">Hello</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span><span class="token operator">&lt;</span>Props<span class="token punctuation">,</span> State<span class="token operator">></span> <span class="token punctuation">{</span>\n    state<span class="token punctuation">:</span> State <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> myStyle <span class="token operator">=</span> <span class="token punctuation">{</span>\n            background<span class="token punctuation">:</span> <span class="token string">\'red\'</span>\n        <span class="token punctuation">}</span> <span class="token keyword">as</span> CSSProperties<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span>myStyle<span class="token punctuation">}</span><span class="token operator">></span>hellow<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n<span class="token keyword">const</span> <span class="token function-variable function">mapStateToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">:</span> <span class="token builtin">any</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>\n    state\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> <span class="token function-variable function">mapDispatchToProps</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">dispatch<span class="token punctuation">:</span> <span class="token builtin">any</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span>dispatch<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span>\n    mapStateToProps<span class="token punctuation">,</span>\n    mapDispatchToProps\n<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token function">withRouter</span><span class="token punctuation">(</span>Hellow<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n'}}))),Object(p.mdx)("h3",{id:"absolute-\u5f15\u7528\u7684\u89e3\u51b3\u65b9\u6848"},"absolute \u5f15\u7528\u7684\u89e3\u51b3\u65b9\u6848"),Object(p.mdx)("p",null,"\u5728\u901a\u5e38\u7684\u5de5\u7a0b\u4e2d\uff0c\u6211\u4eec\u4f1a\u8bbe\u5b9a alias \u6765\u65b9\u4fbf\u7edd\u5bf9\u5730\u5740\u7684\u5f15\u7528\uff0c\u6bd4\u5982\u7528@\u8bb0\u53f7\u6765\u6307\u5411 src \u8def\u5f84\u3002"),Object(p.mdx)("p",null,"\u901a\u5e38\u5728 config-overrides \u91cc\u9762\u8fd9\u4e48\u914d\u7f6e"),Object(p.mdx)("pre",null,Object(p.mdx)("code",Object.assign({parentName:"pre"},{className:"language-javascript","data-language":"javascript","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token function-variable function">webpack</span><span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">config<span class="token punctuation">,</span> env</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        config<span class="token punctuation">.</span>resolve <span class="token operator">=</span> <span class="token punctuation">{</span>\n            <span class="token operator">...</span>config<span class="token punctuation">.</span>resolve<span class="token punctuation">,</span>\n            alias<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n                <span class="token string">\'@\'</span><span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'src\'</span><span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n'}}))),Object(p.mdx)("p",null,"\u8fd9\u4e2a\u5728 cra \u7684 typescript \u5de5\u7a0b\u4e2d\u7f16\u8bd1\u662f\u53ef\u4ee5\u7684\uff0c\u4f46 typescript \u89e3\u6790\u5668\u9ed8\u8ba4\u662f\u4e0d\u652f\u6301\u7684\uff08\u4f1a\u51fa\u73b0\u7ea2\u8272\u6ce2\u6d6a\u7ebf\u544a\u8bc9\u4f60@\u65e0\u6cd5\u8bc6\u522b\uff09\uff0c\u901a\u8fc7\u6539 tsconfig \u7684\u65b9\u6cd5\u5e76\u6ca1\u6709\u5f97\u5230\u5b98\u65b9\u7684\u652f\u6301\u3002\u7ecf\u8fc7\u63a2\u7d22\u548c\u8bd5\u9a8c\uff0c\u76ee\u524d\u6700\u5b8c\u7f8e\u7684\u65b9\u6848\u5c31\u662f\u8f6f\u94fe\u63a5src\u8def\u5f84\u5230node_modules/@\u3002\u800c\u4e14\u4ee5\u540e\u5b98\u65b9\u652f\u6301\u914d\u7f6e\u4e4b\u540e\uff0c\u4e5f\u53ef\u4ee5\u65b9\u4fbf\u7684\u5207\u8fc7\u53bb\u3002"),Object(p.mdx)("p",null,"\u5bf9 package.json \u90e8\u5206\u914d\u7f6e\u5982\u4e0b\u3002"),Object(p.mdx)("pre",null,Object(p.mdx)("code",Object.assign({parentName:"pre"},{className:"language-json","data-language":"json","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token punctuation">{</span>\n    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"postinstall"</span><span class="token operator">:</span> <span class="token string">"yarn link-modules"</span><span class="token punctuation">,</span>\n        <span class="token property">"unlink-modules"</span><span class="token operator">:</span> <span class="token string">"rimraf node_modules/@"</span><span class="token punctuation">,</span>\n        <span class="token property">"link-modules"</span><span class="token operator">:</span> <span class="token string">"globstar --node -- lnk \\"./src/*\\" \\"./node_modules/@/\\""</span><span class="token punctuation">,</span>\n        <span class="token property">"relink-modules"</span><span class="token operator">:</span> <span class="token string">"yarn unlink-modules &amp;&amp; yarn link-modules"</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n'}}))),Object(p.mdx)("p",null,"\u9700\u8981\u7684\u4f9d\u8d56\u5219\u53ef\u4ee5\u7528\u6307\u4ee4\u5b89\u88c5:"),Object(p.mdx)("pre",null,Object(p.mdx)("code",Object.assign({parentName:"pre"},{className:"language-shell","data-language":"shell","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token function">yarn</span> <span class="token function">add</span> -D rimraf lnk-cli globstar\n'}}))),Object(p.mdx)("p",null,"\u73b0\u5728\u53ea\u8981\u8fd0\u884c",Object(p.mdx)("inlineCode",{parentName:"p"},"yarn"),"\u6216\u8005",Object(p.mdx)("inlineCode",{parentName:"p"},"npm i")," \u5c31\u4f1a\u81ea\u52a8\u94fe\u63a5src\u5230node_modules/@\u4e86\u3002"),Object(p.mdx)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),Object(p.mdx)("p",null,"typescript \u5728\u590d\u6742\u5927\u578b\u4f01\u4e1a\u9879\u76ee\u4e2d\u8d8a\u6765\u8d8a\u4f53\u73b0\u51fa\u5176\u4f18\u52bf\uff0c\u6211\u4eec\u5c06\u4f1a\u575a\u5b9a\u4e0d\u79fb\u7684\u8f6c\u5230 typescript \u4e0a\u6765\u3002"),Object(p.mdx)("h2",{id:"refs"},"Refs"),Object(p.mdx)("p",null,Object(p.mdx)("a",Object.assign({parentName:"p"},{href:"https://medium.com/knerd/typescript-tips-series-proper-typing-of-react-redux-connected-components-eda058b6727d"}),"Typescript Tips Series: Proper Typing of react-redux Connected Components"),"\n",Object(p.mdx)("a",Object.assign({parentName:"p"},{href:"https://facebook.github.io/create-react-app/docs/adding-typescript"}),"cra adding-typescript")))}l.isMDXComponent=!0;var r=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"\u80cc\u666f",level:2,title:"\u80cc\u666f",children:[]},{id:"\u6b65\u9aa4\u62c6\u89e3",level:2,title:"\u6b65\u9aa4\u62c6\u89e3",children:[{id:"1\u3001\u5347\u7ea7-cra-\u7248\u672c",level:3,title:"1\u3001\u5347\u7ea7 cra \u7248\u672c",children:[]},{id:"2\u3001\u91cd\u547d\u540d\u6587\u4ef6\u540d",level:3,title:"2\u3001\u91cd\u547d\u540d\u6587\u4ef6\u540d",children:[]},{id:"3\u3001\u542f\u52a8\u9879\u76ee",level:3,title:"3\u3001\u542f\u52a8\u9879\u76ee",children:[]},{id:"4\u3001\u5feb\u6377\u5b89\u88c5-typings",level:3,title:"4\u3001\u5feb\u6377\u5b89\u88c5 typings",children:[]},{id:"5\u3001\u4fee\u590d\u6240\u6709\u7f16\u8bd1\u9519\u8bef",level:3,title:"5\u3001\u4fee\u590d\u6240\u6709\u7f16\u8bd1\u9519\u8bef",children:[]},{id:"\u4e00\u4e2a-\u6bd4\u8f83\u590d\u6742\u7684\u5e26\u6709-redux-\u7684-react-\u7ec4\u4ef6\u7684\u901a\u5e38-ts-\u5199\u6cd5",level:3,title:"\u4e00\u4e2a \u6bd4\u8f83\u590d\u6742\u7684\u5e26\u6709 redux \u7684 react \u7ec4\u4ef6\u7684\u901a\u5e38 ts \u5199\u6cd5",children:[]},{id:"absolute-\u5f15\u7528\u7684\u89e3\u51b3\u65b9\u6848",level:3,title:"absolute \u5f15\u7528\u7684\u89e3\u51b3\u65b9\u6848",children:[]}]},{id:"\u603b\u7ed3",level:2,title:"\u603b\u7ed3",children:[]},{id:"refs",level:2,title:"Refs",children:[]}]},u={}}}]);
//# sourceMappingURL=106.119f5184.chunk.js.map