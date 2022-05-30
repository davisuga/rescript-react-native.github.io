(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{157:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),i=(n(0),n(189)),c={slug:"install",title:"Installation"},o={unversionedId:"install",id:"install",isDocsHomePage:!1,title:"Installation",description:"Depending on how you want to start with ReScript React Native, you have",source:"@site/docs/install.md",sourceDirName:".",slug:"/install",permalink:"/docs/install",editUrl:"https://github.com/rescript-react-native/rescript-react-native.github.io/edit/src/docs/install.md",version:"current",frontMatter:{slug:"install",title:"Installation"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/"},next:{title:"Usage",permalink:"/docs/usage"}},l=[{value:"Create a new project with <em>ReScript React Native</em>",id:"create-a-new-project-with-rescript-react-native",children:[]},{value:"Add <em>ReScript React Native</em> to an existing project",id:"add-rescript-react-native-to-an-existing-project",children:[]},{value:"Note about <code>rescript-react-native</code> version number",id:"note-about-rescript-react-native-version-number",children:[]}],p={toc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Depending on how you want to start with ",Object(i.b)("em",{parentName:"p"},"ReScript React Native"),", you have\ndifferent options to install it:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#create-a-new-project-with-rescript-react-native"},"Create a new project with ",Object(i.b)("em",{parentName:"a"},"ReScript React Native"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"#add-rescript-react-native-to-an-existing-project"},"Add ",Object(i.b)("em",{parentName:"a"},"ReScript React Native")," to an existing project"))),Object(i.b)("p",null,"All options will basically help you to have :"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://rescript-lang.org/"},"ReScript")," (",Object(i.b)("inlineCode",{parentName:"li"},"rescript"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://rescript-lang.org/docs/react/latest/introduction"},"ReScript React")," (",Object(i.b)("inlineCode",{parentName:"li"},"@rescript/react"),")"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"ReScript React Native")," (",Object(i.b)("inlineCode",{parentName:"li"},"rescript-react-native"),")")),Object(i.b)("p",null,"Below we assume you are already familiar with React Native. If you are new to\nReact Native, please have a quick look to\n",Object(i.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/getting-started.html"},"React Native Getting Started documentation"),"\nin order to get the minimal requirements."),Object(i.b)("h2",{id:"create-a-new-project-with-rescript-react-native"},"Create a new project with ",Object(i.b)("em",{parentName:"h2"},"ReScript React Native")),Object(i.b)("p",null,"React Native allows to create new project from a template, so we made one. By\nchoosing this option you will get an hello world project that will already have\nall the requirements included."),Object(i.b)("p",null,"When you have correctly\n",Object(i.b)("a",{parentName:"p",href:"https://reactnative.dev/docs/getting-started#the-react-native-cli"},Object(i.b)("inlineCode",{parentName:"a"},"react-native-cli")),"\ninstalled, you can run the following command:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-console"},"npx @react-native-community/cli init --template @rescript-react-native/template MyApp\ncd MyApp\n")),Object(i.b)("p",null,"\ud83d\udc96 Your project is setup, you can just check\n",Object(i.b)("a",{parentName:"p",href:"/docs/usage/"},"how to use ",Object(i.b)("em",{parentName:"a"},"ReScript React Native"))," right\naway!"),Object(i.b)("hr",null),Object(i.b)("p",null,"\u26a0\ufe0f We don't provide yet instructions for ",Object(i.b)("em",{parentName:"p"},"Expo")," users. ",Object(i.b)("em",{parentName:"p"},"If you are familiar with\nExpo, feel free to open\n",Object(i.b)("a",{parentName:"em",href:"https://github.com/rescript-react-native/rescript-react-native/issues/new?title=Expo+template"},"an issue"),"\nso we can discuss about that"),"."),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"If you are an Expo user, just have a look at the instructions below when your\nExpo app is ready"),"."),Object(i.b)("h2",{id:"add-rescript-react-native-to-an-existing-project"},"Add ",Object(i.b)("em",{parentName:"h2"},"ReScript React Native")," to an existing project"),Object(i.b)("p",null,"If you already have an existing project, it's really fast to get all the thing\nyou need to start using ReScript React Native right away!"),Object(i.b)("p",null,"\ud83d\udc49 ",Object(i.b)("strong",{parentName:"p"},"You can decide to use ReScript React Native for certain components only")," as\nthe compilation process generate normal JavaScript."),Object(i.b)("p",null,"Go into your project root & then install the requirements:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-console"},"npm install rescript --save-dev\nnpm install @rescript/react rescript-react-native\n")),Object(i.b)("p",null,"Then create a file named ",Object(i.b)("inlineCode",{parentName:"p"},"bsconfig.json")," at the same level at your\n",Object(i.b)("inlineCode",{parentName:"p"},"package.json")," with the following content"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-rescript-react-native-app",\n  "reason": { "react-jsx": 3 },\n  "package-specs": {\n    "module": "es6",\n    "in-source": true\n  },\n  "suffix": ".bs.js",\n  "sources": [\n    {\n      "dir": "src",\n      "subdirs": true\n    }\n  ],\n  "bs-dependencies": ["@rescript/react", "rescript-react-native"]\n}\n')),Object(i.b)("p",null,"The main things you should notice here:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"JavaScript generated will be using ",Object(i.b)("inlineCode",{parentName:"li"},"import")," & ",Object(i.b)("inlineCode",{parentName:"li"},"export")," (",Object(i.b)("em",{parentName:"li"},"es6"),")."),Object(i.b)("li",{parentName:"ul"},"JavaScript generated files will have ",Object(i.b)("inlineCode",{parentName:"li"},".bs.js")," extension (easy to find)"),Object(i.b)("li",{parentName:"ul"},"ReScript code will be compiled from ",Object(i.b)("inlineCode",{parentName:"li"},"src")," folder."),Object(i.b)("li",{parentName:"ul"},"ReScript will use ",Object(i.b)("inlineCode",{parentName:"li"},"@rescript/react")," & ",Object(i.b)("inlineCode",{parentName:"li"},"rescript-react-native")," packages as\ndependencies.")),Object(i.b)("p",null,"\ud83d\udc40 ",Object(i.b)("em",{parentName:"p"},"For details about this file, please refer to\n",Object(i.b)("a",{parentName:"em",href:"https://rescript-lang.org/docs/manual/latest/build-configuration"},"ReScript Configuration documentation"),"\nif needed.")),Object(i.b)("p",null,"When it's done, you are ready to\n",Object(i.b)("a",{parentName:"p",href:"/docs/usage/"},"use ReScript React Native")," !"),Object(i.b)("hr",null),Object(i.b)("h2",{id:"note-about-rescript-react-native-version-number"},"Note about ",Object(i.b)("inlineCode",{parentName:"h2"},"rescript-react-native")," version number"),Object(i.b)("p",null,"We decided to try something simple for you:"),Object(i.b)("p",null,"\u269b\ufe0f ",Object(i.b)("inlineCode",{parentName:"p"},"rescript-react-native")," ",Object(i.b)("inlineCode",{parentName:"p"},"0.60.*")," means it should work with ",Object(i.b)("inlineCode",{parentName:"p"},"react-native"),"\n",Object(i.b)("inlineCode",{parentName:"p"},"^0.60.0"),"."),Object(i.b)("p",null,"We keep patch number for bindings fixes. ",Object(i.b)("inlineCode",{parentName:"p"},"react-native")," patches should not\naffect our bindings. This means last digit don't need to match each others:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"react-native@0.60.8")," should work with ",Object(i.b)("inlineCode",{parentName:"li"},"rescript-react-native@0.60.0")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"react-native@0.60.2")," should work with ",Object(i.b)("inlineCode",{parentName:"li"},"rescript-react-native@0.60.4"))),Object(i.b)("p",null,"\ud83d\udc49 In short: ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("inlineCode",{parentName:"strong"},"rescript-react-native")," ",Object(i.b)("inlineCode",{parentName:"strong"},"0.x.*")," means it should work with\n",Object(i.b)("inlineCode",{parentName:"strong"},"react-native@^0.x.*")),"."))}s.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),s=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=s(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(n),m=a,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||i;return n?r.a.createElement(d,o(o({ref:t},p),{},{components:n})):r.a.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);