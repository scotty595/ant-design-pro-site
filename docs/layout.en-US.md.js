webpackJsonp([48,66],{1720:function(n,s){n.exports={content:["article",{},["h2","Using the Grid Component"],["p","Grid layout is widely used, one of its major benefits is responsiveness."],["p","Grid Component provided by Ant Design is tremedously powerful. you can set span, responsive columns, and optional ",["code","flex"]," layout. It covers a majority of use-cases: See ",["a",{title:null,href:"http://ant.design/components/grid/"},"Grid"]," for details."],["h2","Using the Layout Component"],["p","If you need more structured layout components, then ",["a",{title:null,href:"http://ant.design/components/layout/"},"Layout"]," is your best option. You only need to fill in the blanks to build professional layout. See ",["a",{title:null,href:"http://ant.design/components/layout/"},"Layout"]," for details."],["h2","Building layout components for specific use cases."],["p","Under most cases, we will build more specific components from the above ones, that includes navigation, sidebar, notification, titles etc., An example would be ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/src/layouts/BasicLayout.js"},"BasicLayout"]," from Ant Design Pro."],["p","We put layout components inside ",["code","layout"],", parrallel to ",["code","routes"]," and ",["code","components"],". It is worth noting that layout components has no fundamental difference from other components, just that it deals with layout."],["h3","Handling ",["code","this.props.children"]],["p","In the process of building higher level abstraction, we often need to handle child nodes contained by Layout, ",["code","this.props.children"]," refers to the children of a component, If you need to filter",["code","children"],", we recommend using ",["a",{title:null,href:"https://facebook.github.io/react/docs/react-api.html#react.children.map"},"React.children.forEach"],"."],["pre",{lang:"jsx",highlighted:'React<span class="token punctuation">.</span>Children<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>children<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">[</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>'},["code","React.Children.forEach(children, function[(thisArg)])"]],["p","If you need to pass additional ",["code","props"]," to children, we recommend using ",["a",{title:null,href:"https://facebook.github.io/react/docs/context.html"},"Context"]],["h2","Layout from Ant Design Pro"],["p","We abstract common layouts in Ant Design Pro, and put them in ",["code","/layouts"],", includes:"],["ul",["li",["p","BasicLayout: Basic Layout, includes header navigation, sidebar and notification."]]],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/oXmyfmffJVvdbmDoGvuF.png"}]],["ul",["li",["p","BlankLayout: Blank Layout"]],["li",["p","PageHeaderLayout: Standard Layout with Page Header"]],["li",["p","UserLayout: Layout for login and sign-ups."]]],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/mXsydBXvLqBVEZLMssEy.png"}]],["h3","Usage"],["p","To manage mappings between routes and pages, we put configurations under ",["code","src/common/router.js"]," as follows:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> routerConfig <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">\'/\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    component<span class="token punctuation">:</span> <span class="token function">dynamicWrapper</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'user\'</span><span class="token punctuation">,</span> <span class="token string">\'login\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'../layouts/BasicLayout\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'/dashboard/analysis\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    component<span class="token punctuation">:</span> <span class="token function">dynamicWrapper</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'chart\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'../routes/Dashboard/Analysis\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'/user\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    component<span class="token punctuation">:</span> <span class="token function">dynamicWrapper</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'../layouts/UserLayout\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'/user/login\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    component<span class="token punctuation">:</span> <span class="token function">dynamicWrapper</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">\'login\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">\'../routes/User/Login\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","const routerConfig = {\n  '/': {\n    component: dynamicWrapper(app, ['user', 'login'], () => import('../layouts/BasicLayout')),\n  },\n  '/dashboard/analysis': {\n    component: dynamicWrapper(app, ['chart'], () => import('../routes/Dashboard/Analysis')),\n  },\n  '/user': {\n    component: dynamicWrapper(app, [], () => import('../layouts/UserLayout')),\n  },\n  '/user/login': {\n    component: dynamicWrapper(app, ['login'], () => import('../routes/User/Login')),\n  },\n};"]],["p","See ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/src/router.js"},"router.js"]," for more details."]],meta:{order:2,title:"Layout",type:"Introduction",filename:"docs/layout.en-US.md"},description:["section",["p","Layout is the outermost structure for a project, ususaly consists of navigation, footer, sidebar, notification and content. There are also a lot of different layouts within a page."],["p","Ant Design currently provides two componetns for layout: ",["a",{title:null,href:"http://ant.design/components/layout/"},"Layout"]," and ",["a",{title:null,href:"http://ant.design/components/grid/"},"Grid"],"."]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Using-the-Grid-Component",title:"Using the Grid Component"},"Using the Grid Component"]],["li",["a",{className:"bisheng-toc-h2",href:"#Using-the-Layout-Component",title:"Using the Layout Component"},"Using the Layout Component"]],["li",["a",{className:"bisheng-toc-h2",href:"#Building-layout-components-for-specific-use-cases.",title:"Building layout components for specific use cases."},"Building layout components for specific use cases."]],["li",["a",{className:"bisheng-toc-h2",href:"#Layout-from-Ant-Design-Pro",title:"Layout from Ant Design Pro"},"Layout from Ant Design Pro"]]]}}});