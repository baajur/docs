(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{219:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(11),o=(n(0),n(241)),i={id:"first-datastore",title:"Your first Datastore"},c={id:"first-datastore",isDocsHomePage:!1,title:"Your first Datastore",description:"In the last section, we made a HTTP request that created a 404. We'll use _the",source:"@site/docs/first-datastore.md",permalink:"/docs/first-datastore"},s=[],l={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In the last section, we made a HTTP request that created a 404. We'll use ",Object(o.b)("em",{parentName:"p"},"the\ntrace")," of that HTTP request to build an endpoint, a technique we call ",Object(o.b)("strong",{parentName:"p"},"Trace\nDriven Development"),"."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Hit the plus (+) button in the 404 section of the sidebar. This creates a\nHTTP endpoint with the HTTP verb (POST) and path (/test) set from the request\nthat creates the 404.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/gettingstarted/Screen_Shot_2020-02-11_at_10.44.54_AM.png",alt:"ngstarted/Screen_Shot_2020-02-11_at_10.44.54_AM.png"}))),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"Hover over the white dot on the left hand side. Here, you can see the full\nbody of the incoming trace from when you posted to the endpoint from the\nREPL, including the body.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/gettingstarted/Screen_Shot_2020-02-11_at_10.45.57_AM.png",alt:"ngstarted/Screen_Shot_2020-02-11_at_10.45.57_AM.png"}))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"Let's save the ",Object(o.b)("inlineCode",{parentName:"li"},"request")," body to a variable by typing\n",Object(o.b)("inlineCode",{parentName:"li"},"let data = request.body"),". As you can see, the autocomplete knows the field\nnames of ",Object(o.b)("inlineCode",{parentName:"li"},"request")," from the trace, and will complete them for you.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/gettingstarted/Screen_Shot_2020-02-11_at_10.47.10_AM.png",alt:"ngstarted/Screen_Shot_2020-02-11_at_10.47.10_AM.png"}))),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Let's put this in a datastore. Like we saw with the ",Object(o.b)("inlineCode",{parentName:"li"},"HttpClient"),' library,\ntyping "DB" in the blank will pull up all datastore functions.')),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/gettingstarted/Screen_Shot_2020-02-11_at_10.48.24_AM.png",alt:"ngstarted/Screen_Shot_2020-02-11_at_10.48.24_AM.png"}))),Object(o.b)("p",null,"In this case, we want ",Object(o.b)("inlineCode",{parentName:"p"},"DB::set"),", which takes three arguments."),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/gettingstarted/Screen_Shot_2020-02-11_at_10.48.51_AM.png",alt:"ngstarted/Screen_Shot_2020-02-11_at_10.48.51_AM.png"}))),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},'Now let\'s make our datastore. From the sidebar or the omnibox, create a new\ndatastore called "Requests", with fields ',Object(o.b)("inlineCode",{parentName:"li"},"data")," and ",Object(o.b)("inlineCode",{parentName:"li"},"time"),".")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/gettingstarted/datastore.png",alt:"ngstarted/datastore.png"}))),Object(o.b)("p",null,"Dark's datastores are key-value stores; each record has a unique key that is\nused to store and retrieve the value. For instance, a possible set of records\nwith keys in the above datastore would look like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),'{\n  key1: {\n          data: {\n                  test: "test2"\n                },\n          time: <Date: 2020-02-11T18:54:39Z>\n        },\n  key2: {\n          data: {\n                  test: "test1"\n                },\n          time: <Date: 2020-02-11T18:54:43Z>\n        }\n}\n')),Object(o.b)("ol",{start:6},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Now that we have a datastore, let's finish our post endpoint."),Object(o.b)("p",{parentName:"li"},"The first argument is the record we're inserting. This needs to match the\nschema, and so it needs to include both ",Object(o.b)("inlineCode",{parentName:"p"},"date")," and ",Object(o.b)("inlineCode",{parentName:"p"},"time")," (you cannot insert\nrecords that are missing fields). Insert our data from above (seeing the live\nvalue to the left) and use the ",Object(o.b)("inlineCode",{parentName:"p"},"Date::now")," function to get the ",Object(o.b)("inlineCode",{parentName:"p"},"time")," field."))),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/gettingstarted/Screen_Shot_2020-02-11_at_10.57.58_AM.png",alt:"ngstarted/Screen_Shot_2020-02-11_at_10.57.58_AM.png"}))),Object(o.b)("ol",{start:7},Object(o.b)("li",{parentName:"ol"},"We need a unique key for each record that we store. The ",Object(o.b)("inlineCode",{parentName:"li"},"DB::generateKey"),"\nfunction generates random keys ","\u2013"," this is useful when your record has no\nobvious unique identifier.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/gettingstarted/Screen_Shot_2020-02-11_at_10.59.24_AM.png",alt:"ngstarted/Screen_Shot_2020-02-11_at_10.59.24_AM.png"}))),Object(o.b)("ol",{start:8},Object(o.b)("li",{parentName:"ol"},"The final argument is the Datastore: ",Object(o.b)("inlineCode",{parentName:"li"},"Requests"),".")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/gettingstarted/Screen_Shot_2020-02-11_at_11.00.04_AM.png",alt:"ngstarted/Screen_Shot_2020-02-11_at_11.00.04_AM.png"}))),Object(o.b)("ol",{start:9},Object(o.b)("li",{parentName:"ol"},"To call the ",Object(o.b)("inlineCode",{parentName:"li"},"DB::set")," function, we first need to run the two functions with\nside effects (",Object(o.b)("inlineCode",{parentName:"li"},"DB::generateKey")," and ",Object(o.b)("inlineCode",{parentName:"li"},"Date::now"),") by hitting the play button.\nAfter hitting those two play buttons, the ",Object(o.b)("inlineCode",{parentName:"li"},"DB::set")," play button will be\nenabled:")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/gettingstarted/Screen_Shot_2020-02-11_at_11.00.55_AM.png",alt:"ngstarted/Screen_Shot_2020-02-11_at_11.00.55_AM.png"}))),Object(o.b)("ol",{start:10},Object(o.b)("li",{parentName:"ol"},"Finally, hitting the play button for ",Object(o.b)("inlineCode",{parentName:"li"},"DB::set")," inserts the record into the\ndatastore. This locks the datastore, preventing us from changing the schema,\nwhich we see indicated by the red lock (\ud83d\udd12) icon.")),Object(o.b)("p",null,Object(o.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/img/gettingstarted/Screen_Shot_2020-02-11_at_11.01.32_AM.png",alt:"ngstarted/Screen_Shot_2020-02-11_at_11.01.32_AM.png"}))))}b.isMDXComponent=!0},241:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),u=a,m=p["".concat(i,".").concat(u)]||p[u]||d[u]||o;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);