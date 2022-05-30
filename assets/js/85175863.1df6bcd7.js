(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(189)),l={slug:"cheatsheet",title:"Cheatsheet"},c={unversionedId:"cheatsheet",id:"cheatsheet",isDocsHomePage:!1,title:"Cheatsheet",description:"If you are not familiar with ReScript / Reason, be sure to check ReScript Overview to learn how to interop with JavaScript",source:"@site/docs/cheatsheet.md",sourceDirName:".",slug:"/cheatsheet",permalink:"/docs/cheatsheet",editUrl:"https://github.com/rescript-react-native/rescript-react-native.github.io/edit/src/docs/cheatsheet.md",version:"current",frontMatter:{slug:"cheatsheet",title:"Cheatsheet"},sidebar:"docs",previous:{title:"Example",permalink:"/docs/example"}},o=[{value:"JSX String",id:"jsx-string",children:[{value:"JavaScript JSX String",id:"javascript-jsx-string",children:[]},{value:"JSX String",id:"jsx-string-1",children:[]}]},{value:"JSX Number (int)",id:"jsx-number-int",children:[{value:"JavaScript JSX Number (int)",id:"javascript-jsx-number-int",children:[]},{value:"JSX Number (int)",id:"jsx-number-int-1",children:[]}]},{value:"JSX Number (float)",id:"jsx-number-float",children:[{value:"JavaScript JSX Number (float)",id:"javascript-jsx-number-float",children:[]},{value:"JSX Number (float)",id:"jsx-number-float-1",children:[]}]},{value:"JSX Array (of string)",id:"jsx-array-of-string",children:[{value:"JavaScript JSX Array (of string)",id:"javascript-jsx-array-of-string",children:[]},{value:"JSX Array (of string)",id:"jsx-array-of-string-1",children:[]}]},{value:"JSX conditional string",id:"jsx-conditional-string",children:[{value:"JavaScript JSX conditional string",id:"javascript-jsx-conditional-string",children:[]},{value:"JSX conditional string",id:"jsx-conditional-string-1",children:[]}]},{value:"JSX optional value",id:"jsx-optional-value",children:[{value:"JavaScript JSX optional string",id:"javascript-jsx-optional-string",children:[]},{value:"JSX optional string",id:"jsx-optional-string",children:[]}]},{value:"React Native StyleSheet",id:"react-native-stylesheet",children:[{value:"JavaScript React Native StyleSheet",id:"javascript-react-native-stylesheet",children:[]},{value:"ReScript React Native StyleSheet",id:"rescript-react-native-stylesheet",children:[]}]},{value:"Concatened styles",id:"concatened-styles",children:[{value:"JavaScript Concatened styles",id:"javascript-concatened-styles",children:[]},{value:"Concatened styles",id:"concatened-styles-1",children:[]}]},{value:"Optional styles",id:"optional-styles",children:[{value:"JavaScript Optional styles",id:"javascript-optional-styles",children:[]},{value:"Optional styles",id:"optional-styles-1",children:[]}]},{value:"Hello world",id:"hello-world",children:[{value:"JavaScript Hello World",id:"javascript-hello-world",children:[]},{value:"Hello World",id:"hello-world-1",children:[]}]}],s={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If you are not familiar with ReScript / Reason, be sure to check ",Object(i.b)("a",{parentName:"p",href:"https://rescript-lang.org/docs/manual/latest/overview"},"ReScript Overview")," to learn how to interop with JavaScript"),Object(i.b)("h2",{id:"jsx-string"},"JSX String"),Object(i.b)("h3",{id:"javascript-jsx-string"},"JavaScript JSX String"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"<Text>Hello, world!</Text>\n")),Object(i.b)("h3",{id:"jsx-string-1"},"JSX String"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rescript"},'<Text> {"Hello, world!"->React.string} </Text>\n')),Object(i.b)("h2",{id:"jsx-number-int"},"JSX Number (int)"),Object(i.b)("h3",{id:"javascript-jsx-number-int"},"JavaScript JSX Number (int)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"<Text>42</Text>\n")),Object(i.b)("h3",{id:"jsx-number-int-1"},"JSX Number (int)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rescript"},"<Text>\n  {42\n  ->Js.Int.toString\n  ->React.string}\n</Text>\n")),Object(i.b)("h2",{id:"jsx-number-float"},"JSX Number (float)"),Object(i.b)("h3",{id:"javascript-jsx-number-float"},"JavaScript JSX Number (float)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"<Text>4.2</Text>\n")),Object(i.b)("h3",{id:"jsx-number-float-1"},"JSX Number (float)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rescript"},"<Text>\n  {4.2\n  ->Js.Float.toString\n  ->React.string}\n</Text>\n")),Object(i.b)("h2",{id:"jsx-array-of-string"},"JSX Array (of string)"),Object(i.b)("h3",{id:"javascript-jsx-array-of-string"},"JavaScript JSX Array (of string)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"{items.map((item, i) =>\n  <Text key={i++item}>\n    {item}\n  </Text>\n)}\n")),Object(i.b)("h3",{id:"jsx-array-of-string-1"},"JSX Array (of string)"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rescript"},"{items\n->Belt.Array.mapWithIndex((item, index) =>\n  <Text\n    key=((index->Js.Int.toString)++item)>\n    {item->React.string}\n  </Text>\n  )\n->React.array}\n")),Object(i.b)("h2",{id:"jsx-conditional-string"},"JSX conditional string"),Object(i.b)("h3",{id:"javascript-jsx-conditional-string"},"JavaScript JSX conditional string"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"<Text>{condition && something}</Text>\n")),Object(i.b)("h3",{id:"jsx-conditional-string-1"},"JSX conditional string"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rescript"},"<Text>\n  {\n    condition ? something->React.string : React.null\n  }\n</Text>\n")),Object(i.b)("h2",{id:"jsx-optional-value"},"JSX optional value"),Object(i.b)("h3",{id:"javascript-jsx-optional-string"},"JavaScript JSX optional string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Assuming ",Object(i.b)("inlineCode",{parentName:"em"},"something")," is a ",Object(i.b)("inlineCode",{parentName:"em"},"string")," that can be ",Object(i.b)("inlineCode",{parentName:"em"},"undefined"),".")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"{\n  something && <Text>{something.toUpperCase()}</Text>;\n}\n")),Object(i.b)("h3",{id:"jsx-optional-string"},"JSX optional string"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Recommended: Assuming ",Object(i.b)("inlineCode",{parentName:"em"},"something")," is an\n",Object(i.b)("a",{parentName:"em",href:"https://rescript-lang.org/docs/manual/latest/null-undefined-option"},"optional")," ",Object(i.b)("inlineCode",{parentName:"em"},"string"),".")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rescript"},"{\n  something\n  ->Belt.Option.map(thing =>\n    <Text>\n      {thing\n      ->Js.String.toUpperCase\n      ->React.string}\n    </Text>\n  )\n  ->Belt.Option.getWithDefault(React.null)\n}\n")),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"If you have to work with JavaScript/JSON: Assuming ",Object(i.b)("inlineCode",{parentName:"em"},"something")," is a JavaScript\n",Object(i.b)("inlineCode",{parentName:"em"},"string")," that can be ",Object(i.b)("inlineCode",{parentName:"em"},"undefined"),".")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rescript"},"{\n  something\n  ->Js.Nullable.toOption /* convert undefined || string  as option(string) */\n  ->Belt.Option.map(thing =>\n    <Text>\n      {thing\n      ->Js.String.toUpperCase\n      ->React.string}\n    </Text>\n  )\n  ->Belt.Option.getWithDefault(React.null)\n}\n")),Object(i.b)("h2",{id:"react-native-stylesheet"},"React Native StyleSheet"),Object(i.b)("h3",{id:"javascript-react-native-stylesheet"},"JavaScript React Native StyleSheet"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'import { StyleSheet } from "react-native";\n\nconst styles = StyleSheet.create({\n  container: {\n    maxHeight: 600,\n    width: 800,\n    justifyContent: "flex-start",\n    alignItems: "center",\n    margin: "auto",\n  },\n  cornerThing: {\n    position: "absolute",\n    top: 100,\n    right: -20,\n    transform: [{ rotate: "4deg" }],\n  },\n  text: {\n    textTransform: "uppercase",\n  },\n});\n\nconsole.log(StyleSheet.flatten([styles.container]));\n')),Object(i.b)("h3",{id:"rescript-react-native-stylesheet"},"ReScript React Native StyleSheet"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rescript"},'open ReactNative\nopen ReactNative.Style // this is useful since all units & style methods comes from Style module\n\nlet styles =\n  {\n    "container":\n      viewStyle(\n        ~maxHeight=600.->dp,\n        ~width=80.->pct,\n        ~justifyContent=`flexStart,\n        ~alignItems=`center,\n        ~margin=auto,\n        (),\n      ),\n    "cornerThing":\n      viewStyle(\n        ~position=`absolute,\n        ~top=100.->dp,\n        ~right=(-20.)->dp,\n        ~transform=[|rotate(~rotate=4.->deg)|],\n        (),\n      ),\n    "text": textStyle(~textTransform=`uppercase, ()),\n  }->StyleSheet.create\n\nJs.log(StyleSheet.flatten([|styles##container|]))\n')),Object(i.b)("h2",{id:"concatened-styles"},"Concatened styles"),Object(i.b)("h3",{id:"javascript-concatened-styles"},"JavaScript Concatened styles"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"<View style={[styles.container, styles.containerAdditionalStyles]} />\n")),Object(i.b)("h3",{id:"concatened-styles-1"},"Concatened styles"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rescript"},"open ReactNative.Style\n\n<View\n  style={array([|\n    styles##container,\n    styles##containerAdditionalStyles\n  |])}\n/>\n")),Object(i.b)("h2",{id:"optional-styles"},"Optional styles"),Object(i.b)("h3",{id:"javascript-optional-styles"},"JavaScript Optional styles"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},"<View\n  style={[\n    styles.container,\n    condition && styles.containerAdditionalStyles,\n    condition2 && { width: 40 },\n  ]}\n/>\n")),Object(i.b)("h3",{id:"optional-styles-1"},"Optional styles"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rescript"},"open ReactNative.Style\n\n<View\n  style={arrayOption([|\n    Some(styles##container),\n    condition ? Some(styles##containerAdditionalStyles) : None,\n    condition2 ? Some(viewStyle(~width=40.->dp, ())) : None,\n  |])}\n/>\n")),Object(i.b)("h2",{id:"hello-world"},"Hello world"),Object(i.b)("h3",{id:"javascript-hello-world"},"JavaScript Hello World"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-javascript"},'/* App.js */\nimport React, { Component } from "react";\nimport { Text, View } from "react-native";\n\nexport default class HelloWorld extends Component {\n  render() {\n    return (\n      <View\n        style={{\n          flex: 1,\n          justifyContent: "center",\n          alignItems: "center",\n        }}\n      >\n        <Text>Hello, {this.props.name || "world"}!</Text>\n      </View>\n    );\n  }\n}\n')),Object(i.b)("h3",{id:"hello-world-1"},"Hello World"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-rescript"},'/* App.res */\nopen Belt\nopen ReactNative\nopen ReactNative.Style\n\n[@react.component]\nlet make = (~name=?) => {\n  <View\n    style={\n      viewStyle(~flex=1., ~justifyContent=`center, ~alignItems=`center, ())\n    }>\n    <Text>\n      {("Hello, " ++ name->Option.getWithDefault("world") ++ "!")\n       ->React.string}\n    </Text>\n  </View>\n}\n')))}p.isMDXComponent=!0},189:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||b[u]||i;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);