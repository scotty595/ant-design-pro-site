webpackJsonp([30,49],{1550:function(n,s){n.exports={content:["article",["p","\u6211\u4eec\u57fa\u4e8e Ant Design \u89c6\u89c9\u98ce\u683c\u642d\u5efa\u4e86 Ant Design Pro\uff0c\u8fd9\u5957\u98ce\u683c\u7ecf\u8fc7\u8bbe\u8ba1\u5e08\u7684\u7cbe\u5fc3\u8c03\u914d\uff0c\u9002\u5408\u5927\u591a\u6570\u4e2d\u540e\u53f0\u9879\u76ee\u3002\u5982\u679c\u5bf9\u89c6\u89c9\u98ce\u683c\u6709\u989d\u5916\u7684\u8981\u6c42\uff0c\u63a8\u8350\u4f7f\u7528\u4ee5\u4e0b\u7684\u65b9\u5f0f\u8fdb\u884c\u5b9a\u5236\u3002"],["h2","\u4e3b\u9898\u5b9a\u5236"],["p","\u6211\u4eec\u57fa\u4e8e Ant Design React \u8fdb\u884c\u5f00\u53d1\uff0c\u5b8c\u5168\u652f\u6301\u5b98\u65b9\u63d0\u4f9b\u7684 less \u53d8\u91cf\u5b9a\u5236\u529f\u80fd\uff0c\u5177\u4f53\u65b9\u5f0f\u5982\u4e0b\uff1a"],["p","\u5728\u811a\u624b\u67b6\u76ee\u5f55\u4e2d\u627e\u5230 ",["code","src/theme.js"]," \u5982\u4e0b\u3002"],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">\'font-size-base\'</span><span class="token punctuation">:</span> <span class="token string">\'14px\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'badge-font-size\'</span><span class="token punctuation">:</span> <span class="token string">\'12px\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'btn-font-size-lg\'</span><span class="token punctuation">:</span> <span class="token string">\'@font-size-base\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'menu-dark-bg\'</span><span class="token punctuation">:</span> <span class="token string">\'#00182E\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'menu-dark-submenu-bg\'</span><span class="token punctuation">:</span> <span class="token string">\'#000B14\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'layout-sider-background\'</span><span class="token punctuation">:</span> <span class="token string">\'#00182E\'</span><span class="token punctuation">,</span>\n  <span class="token string">\'layout-body-background\'</span><span class="token punctuation">:</span> <span class="token string">\'#f0f2f5\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","// https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less\nmodule.exports = {\n  'font-size-base': '14px',\n  'badge-font-size': '12px',\n  'btn-font-size-lg': '@font-size-base',\n  'menu-dark-bg': '#00182E',\n  'menu-dark-submenu-bg': '#000B14',\n  'layout-sider-background': '#00182E',\n  'layout-body-background': '#f0f2f5',\n};"]],["p","\u5728 ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"},"\u6240\u6709\u53d8\u91cf\u8868"]," \u627e\u5230\u9700\u8981\u4fee\u6539\u7684\u53d8\u91cf\uff0c\u4fee\u6539\u540e\u542f\u52a8 ",["code","npm start"],"\uff0c\u5c31\u53ef\u4ee5\u5728\u4f60\u7684\u5e94\u7528\u754c\u9762\u770b\u5230\u6548\u679c\u4e86\u3002"],["p","\u66f4\u591a\u65b9\u5f0f\u53ef\u4ee5\u53c2\u8003\u5b98\u65b9\u6587\u6863\uff1a",["a",{title:null,href:"http://ant.design/docs/react/customize-theme-cn"},"\u5b9a\u5236\u4e3b\u9898"],"\u3002"],["blockquote",["p","\u5c0f\u6280\u5de7\uff1a\u4f60\u53ef\u4ee5\u628a\u4ee5\u4e0a\u7684\u4e3b\u9898\u914d\u7f6e\u6587\u4ef6 ",["code","theme.js"]," \u53d1\u5e03\u6210\u5355\u72ec\u7684 npm \u5305\u6765\u5f15\u5165\uff0c\u65b9\u4fbf\u4e0d\u540c\u9879\u76ee\u4e4b\u95f4\u7684\u590d\u7528\u3002\n\u5728 ",["code",".roadhogrc"]," \u4e2d\u4fee\u6539 ",["code",'"theme": "./node_modules/your-package/theme.js"']," \u4e3a\u76f8\u5e94\u8def\u5f84\u5373\u53ef\u3002"]],["h2","\u6837\u5f0f\u8986\u76d6"],["p","Ant Design \u7684\u901a\u7528\u6837\u5f0f\u53d8\u91cf\u53ef\u80fd\u65e0\u6cd5\u6ee1\u8db3\u6240\u6709\u5b9a\u5236\u9700\u6c42\uff0c\u4f60\u9700\u8981\u5168\u5c40\u8986\u76d6\u9ed8\u8ba4\u7684\u7ec4\u4ef6\u6837\u5f0f\u3002\u6211\u4eec\u53ef\u4ee5\u53c2\u7167 ",["a",{title:null,href:"/docs/style"},"\u6837\u5f0f"]," \u7ae0\u8282\u6765\u8986\u76d6\u6837\u5f0f\u3002"],["h3","\u5168\u5c40\u8986\u76d6\u7ec4\u4ef6"],["p","\u6bd4\u5982\u5728 ",["code","src/index.less"]," \u91cc\u4fee\u6539\u6240\u6709\u6807\u7b7e\u7684\u5b57\u4f53\u5927\u5c0f\u3002"],["pre",{lang:"less",highlighted:'<span class="token comment" spellcheck="true">// src/index.less</span>\n<span class="token selector">:global</span> <span class="token punctuation">{</span>\n  <span class="token selector">.ant-tag</span> <span class="token punctuation">{</span>\n    <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">12</span>px<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>'},["code","// src/index.less\n:global {\n  .ant-tag {\n    font-size: 12px;\n  }\n}"]],["h3","\u5355\u72ec\u8986\u76d6\u6307\u5b9a\u7ec4\u4ef6"],["pre",{lang:"less",highlighted:'<span class="token comment" spellcheck="true">// sample.less</span>\n<span class="token selector">.customTag</span> <span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">18</span>px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","// sample.less\n.customTag {\n  font-size: 18px;\n}"]],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> styles <span class="token keyword">from</span> <span class="token string">\'./sample.less\'</span><span class="token punctuation">;</span>\n\n<span class="token operator">...</span>\n\n<span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Tag</span> <span class="token attr-name">className</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>styles<span class="token punctuation">.</span>customTag<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\u5b9a\u5236\u6807\u7b7e<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Tag</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>'},["code","import styles from './sample.less';\n\n...\n\nreturn <Tag className={styles.customTag}>\u5b9a\u5236\u6807\u7b7e</Tag>;"]],["blockquote",["p","\u6211\u4eec\u4e0d\u63a8\u8350\u8fdb\u884c\u6837\u5f0f\u8986\u76d6\uff0c\u4e00\u662f\u9ed8\u8ba4\u4e3b\u9898\u548c\u7ec4\u4ef6\u662f\u7ecf\u8fc7\u4e86\u8bbe\u8ba1\u5e08\u7cbe\u5fc3\u8c03\u8282\uff0c\u5f3a\u884c\u8986\u76d6\u53ef\u80fd\u4f1a\u5f71\u54cd\u6574\u4f53\u6548\u679c\uff1b\u4e8c\u662f\u8986\u76d6\u4ee3\u7801\u53ef\u80fd\u56e0\u4e3a\u7ec4\u4ef6\u5e93\u7248\u672c\u5347\u7ea7\u800c\u5931\u6548\u3002"]],["h2","\u5b98\u65b9\u4e3b\u9898"],["p","\u76ee\u524d Ant Design Pro \u6682\u65f6\u53ea\u6709\u4e00\u5957\u9ed8\u8ba4\u4e3b\u9898\uff0c\u6211\u4eec\u8ba1\u5212\u5728\u4e4b\u540e\u63a8\u51fa\u66f4\u591a\u5b98\u65b9\u4e3b\u9898\u4ee5\u6ee1\u8db3\u4e2a\u6027\u5316\u7684\u9700\u6c42\uff0c\u656c\u8bf7\u671f\u5f85\u3002"]],meta:{order:13,title:"\u66f4\u6362\u4e3b\u9898",type:"\u8fdb\u9636",filename:"docs/theme.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4e3b\u9898\u5b9a\u5236",title:"\u4e3b\u9898\u5b9a\u5236"},"\u4e3b\u9898\u5b9a\u5236"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u6837\u5f0f\u8986\u76d6",title:"\u6837\u5f0f\u8986\u76d6"},"\u6837\u5f0f\u8986\u76d6"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5b98\u65b9\u4e3b\u9898",title:"\u5b98\u65b9\u4e3b\u9898"},"\u5b98\u65b9\u4e3b\u9898"]]]}}});