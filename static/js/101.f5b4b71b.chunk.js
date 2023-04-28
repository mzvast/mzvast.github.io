(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{247:function(e,n,a){"use strict";a.r(n),a.d(n,"readingTime",function(){return p}),a.d(n,"default",function(){return m}),a.d(n,"tableOfContents",function(){return r}),a.d(n,"frontMatter",function(){return c});var t=a(36),l=(a(0),a(35)),p={text:"1 min read",minutes:.985,time:59100,words:197},s={},i="wrapper";function m(e){var n=e.components,a=Object(t.a)(e,["components"]);return Object(l.mdx)(i,Object.assign({},s,a,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("h2",{id:"\u73af\u5883"},"\u73af\u5883"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"\u7c7bunix\u7cfb\u7edf"),Object(l.mdx)("li",{parentName:"ul"},"\u4e0d\u652f\u6301windows")),Object(l.mdx)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"\u524d\u7f6e\u9700\u6c42"),Object(l.mdx)("ul",{parentName:"li"},Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Ubuntu/Debian:  "),Object(l.mdx)("pre",{parentName:"li"},Object(l.mdx)("code",Object.assign({parentName:"pre"},{}),"```bash\nsudo apt-get install -y make build-essential libssl-dev zlib1g-dev libbz2-dev \nlibreadline-dev libsqlite3-dev wget curl llvm libncurses5-dev libncursesw5-dev xz-utils\n```\n"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Fedora/CentOS/RHEL:  "),Object(l.mdx)("pre",{parentName:"li"},Object(l.mdx)("code",Object.assign({parentName:"pre"},{}),"```bash\nyum install zlib-devel bzip2 bzip2-devel readline-devel sqlite sqlite-devel openssl-devel\n```\n"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Mac OS X:"),Object(l.mdx)("pre",{parentName:"li"},Object(l.mdx)("code",Object.assign({parentName:"pre"},{}),"```bash\nbrew install readline xz\n```\n"))))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"\u8fd0\u884c\u4e00\u952e\u5b89\u88c5\u811a\u672c(\u5b89\u88c5\u5b8c\u81ea\u5e26virtualenv\u63d2\u4ef6)"))),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash","data-language":"bash","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'$ <span class="token function">curl</span> -L https://raw.githubusercontent.com/yyuu/pyenv-installer/master/bin/pyenv-installer <span class="token operator">|</span> <span class="token function">bash</span>\n'}}))),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"\u7136\u540e\u6839\u636e\u63d0\u793a\u53ef\u80fd\u9700\u8981\u628a\u8fd9\u6bb5\u52a0\u5165\u5230~/.bash_profile,\u91cd\u8f7d\u4e00\u4e0bshell")),Object(l.mdx)("pre",null,Object(l.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash","data-language":"bash","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">"~/.pyenv/bin:<span class="token environment constant">$PATH</span>"</span>\n<span class="token builtin class-name">eval</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span>pyenv init -<span class="token variable">)</span></span>"</span>\n<span class="token builtin class-name">eval</span> <span class="token string">"<span class="token variable"><span class="token variable">$(</span>pyenv virtualenv-init -<span class="token variable">)</span></span>"</span>\n'}}))),Object(l.mdx)("h2",{id:"\u4ee5\u521b\u5efaflask\u9879\u76ee\u4e3a\u4f8b\u6d4b\u8bd5"},"\u4ee5\u521b\u5efaflask\u9879\u76ee\u4e3a\u4f8b\u6d4b\u8bd5"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"\u5728\u4efb\u610f\u4f4d\u7f6e\u65b0\u5efaflask\u76ee\u5f55:",Object(l.mdx)("br",{parentName:"p"}),"\n",Object(l.mdx)("inlineCode",{parentName:"p"},"mkdir -p pythonProject/flask&&cd pythonProject/flask"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"\u5b89\u88c53.5.2\u7248\u672cpython:",Object(l.mdx)("br",{parentName:"p"}),"\n",Object(l.mdx)("inlineCode",{parentName:"p"},"pyenv install 3.5.2"),"\n- \u6ce8\u610f\uff1a\u5728proxychains4\u4ee3\u7406\u7684\u60c5\u51b5\u4e0b\u82e5\u5728ipv6\u7f51\u7edc\u4e2d\u5b89\u88c5\u540e\u9762\u7684python\u53ef\u80fd\u4f1a\u62a5\u9519",Object(l.mdx)("br",{parentName:"p"}),"\n",Object(l.mdx)("inlineCode",{parentName:"p"},'You must get working getaddrinfo() function. or you can specify "--disable-ipv6". getaddrinfo()'),"\n- \u89e3\u51b3\u65b9\u6cd5",Object(l.mdx)("br",{parentName:"p"}),"\n","\u5728\u547d\u4ee4\u524d\u52a0\u4e0a\u4ee3\u7406\u5730\u5740\uff0c\u4f8b\u5982",Object(l.mdx)("br",{parentName:"p"}),"\n","",Object(l.mdx)("inlineCode",{parentName:"p"},"http_proxy=127.0.0.1:1080 pyenv install 3.5.2"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"\u57283.5.2\u7248\u672c\u4e0b\u521b\u5efa\u540d\u4e3aflask\u7684\u865a\u62df\u73af\u5883(\u8fd9\u4e2aflask\u7684\u547d\u540d\u548c\u4e0a\u9762\u90a3\u4e2a\u76ee\u5f55\u540d\u6ca1\u6709\u4efb\u4f55\u5173\u7cfb):",Object(l.mdx)("br",{parentName:"p"}),"\n",Object(l.mdx)("inlineCode",{parentName:"p"},"pyenv virtualenv 3.5.2 flask"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"\u65b0\u5efapyenv\u7528\u4e8e\u8bc6\u522b\u73af\u5883\u7684\u6587\u4ef6(pyenv\u901a\u8fc7\u8be5\u6587\u4ef6\u8bc6\u522b\u8fd9\u4e2a\u76ee\u5f55\u7684\u865a\u62df\u73af\u5883)\uff1a",Object(l.mdx)("br",{parentName:"p"}),"\n",Object(l.mdx)("inlineCode",{parentName:"p"},'echo "flask"> .python-version'),Object(l.mdx)("br",{parentName:"p"}),"\n","\u6b64\u65f6\u53ef\u4ee5\u770b\u5230\u547d\u4ee4\u63d0\u793a\u7b26\u524d\u51fa\u73b0\u4e86",Object(l.mdx)("inlineCode",{parentName:"p"},"(flask)"),"\u7684\u6807\u8bc6\uff0c\u8bf4\u660e\u73b0\u5728\u7684\u73af\u5883\u4e0e\u7cfb\u7edf\u73af\u5883\u9694\u79bb\u4e86")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"\u5b89\u88c5Flask\u5305",Object(l.mdx)("br",{parentName:"p"}),"\n",Object(l.mdx)("inlineCode",{parentName:"p"},"pip install Flask"))),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"\u65b0\u5efaflask demo\u4e3b\u7a0b\u5e8f\n",Object(l.mdx)("inlineCode",{parentName:"p"},"cat >app.py"),"\n\u7c98\u8d34\u8fd9\u6bb5"),Object(l.mdx)("pre",{parentName:"li"},Object(l.mdx)("code",Object.assign({parentName:"pre"},{}),'```python\nfrom flask import Flask\napp = Flask(__name__)\n\n@app.route("/")\ndef hello():\n    return "Hello World!"\n\nif __name__ == "__main__":\n    app.run()\n```\n')),Object(l.mdx)("p",{parentName:"li"},"\u56de\u8f66,ctrl+D")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"\u8fd0\u884c",Object(l.mdx)("inlineCode",{parentName:"p"},"python app.py"),"\u53ef\u4ee5\u770b\u5230\u7a0b\u5e8f\u6b63\u5e38\u8fd0\u884c\u4e86")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"\u5378\u8f7d\u67d0virtualenv",Object(l.mdx)("br",{parentName:"p"}),"\n",Object(l.mdx)("inlineCode",{parentName:"p"},"pyenv uninstall flask")))),Object(l.mdx)("h2",{id:"shell\u73af\u5883\u4e0b\u4f7f\u7528virtualenv"},"shell\u73af\u5883\u4e0b\u4f7f\u7528virtualenv"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"\u4e0a\u9762\u4ecb\u7ecd\u7684\u662f\u7528.python-version\u6587\u4ef6\u7684\u65b9\u5f0f\u8ba9shell\u81ea\u52a8\u8bc6\u522b\u5f53\u524d\u76ee\u5f55\u6240\u5728\u73af\u5883\u3002\u5047\u5982\u60f3\u624b\u52a8\u5207\u6362\u5f53\u524dshell\u6240\u7528\u7684virtualenv\u8be5\u600e\u4e48\u64cd\u4f5c\u5462\uff1f  "),Object(l.mdx)("pre",{parentName:"li"},Object(l.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash","data-language":"bash","data-highlighted-line-numbers":"",dangerouslySetInnerHTML:{__html:'<span class="token comment">#pyenv shell &lt; virtualenv NAME \u6216\u8005system ></span>\npyenv shell flask <span class="token comment">#\u5207\u6362\u5230\u540d\u4e3aflask\u7684virtualenv</span>\npyenv shell system <span class="token comment">#\u5207\u6362\u5230\u7cfb\u7edf\u9ed8\u8ba4\u7684\u73af\u5883</span>\n'}}))))),Object(l.mdx)("h2",{id:"\u540e\u8bb0"},"\u540e\u8bb0"),Object(l.mdx)("p",null,"\u8fd9\u6837\u4e00\u6765\u5728linux\u7cfb\u7edf\u4e0a\u7684python\u7248\u672c\u7ba1\u7406\u95ee\u9898\u662f\u89e3\u51b3\u4e86\uff0c\u800c\u4e14\u4f7f\u7528\u8d77\u6765\u8ddfnvm\u7279\u522b\u63a5\u8fd1\uff0c\u4f46\u5728windows\u73af\u5883\u5e76\u4e0d\u80fd\u7528\u8fd9\u4e2a\u7a0b\u5e8f\uff0c\u6709\u5f85\u8fdb\u4e00\u6b65\u63a2\u7d22\u3002"),Object(l.mdx)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/yyuu/pyenv"}),"pyenv"),"  "),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/yyuu/pyenv-installer"}),"pyenv-installer\u5b89\u88c5\u5668"),"  "),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("a",Object.assign({parentName:"li"},{href:"https://github.com/yyuu/pyenv-virtualenv"}),"pyenv-virtualenv\u63d2\u4ef6"),"  ")))}m.isMDXComponent=!0;var r=function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return[{id:"\u73af\u5883",level:2,title:"\u73af\u5883",children:[]},{id:"\u5b89\u88c5",level:2,title:"\u5b89\u88c5",children:[]},{id:"\u4ee5\u521b\u5efaflask\u9879\u76ee\u4e3a\u4f8b\u6d4b\u8bd5",level:2,title:"\u4ee5\u521b\u5efaflask\u9879\u76ee\u4e3a\u4f8b\u6d4b\u8bd5",children:[]},{id:"shell\u73af\u5883\u4e0b\u4f7f\u7528virtualenv",level:2,title:"shell\u73af\u5883\u4e0b\u4f7f\u7528virtualenv",children:[]},{id:"\u540e\u8bb0",level:2,title:"\u540e\u8bb0",children:[]},{id:"\u53c2\u8003",level:2,title:"\u53c2\u8003",children:[]}]},c={}}}]);
//# sourceMappingURL=101.f5b4b71b.chunk.js.map