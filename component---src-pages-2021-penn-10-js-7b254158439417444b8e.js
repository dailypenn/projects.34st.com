(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4JlD":function(e,t,n){"use strict";var a=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,c){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?r(o(e),(function(o){var c=encodeURIComponent(a(o))+n;return i(e[o])?r(e[o],(function(e){return c+encodeURIComponent(a(e))})).join(t):c+encodeURIComponent(a(e[o]))})).join(t):c?encodeURIComponent(a(c))+n+encodeURIComponent(a(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function r(e,t){if(e.map)return e.map(t);for(var n=[],a=0;a<e.length;a++)n.push(t(e[a],a));return n}var o=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},"5loA":function(e,t,n){"use strict";var a,i=n("q1tI"),r=n("s4NR"),o=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n},d=function(e){function t(t){var n=e.call(this,t)||this;return n.request=null,n.cancel=function(){n.request&&n.request.cancel()},n.handleFetchSuccess=function(e){n.props.onSuccess&&n.props.onSuccess(e),n.setState({html:e.html},(function(){window.instgrm.Embeds.process(),n.props.onAfterRender&&n.props.onAfterRender()}))},n.handleFetchFailure=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];clearTimeout(n.timer),n.props.onFailure&&n.props.onFailure(e)},n.createRequestPromise=function(e){var t={};return t.promise=new Promise((function(n,a){var i=fetch(e).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return a(e)}));return t.cancel=function(){return a(new Error("Cancelled"))},i})),t},n.state={html:null},n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;window.instgrm?this.fetchEmbed(this.getQueryParams(this.props)):(this.props.injectScript&&!document.getElementById("react-instagram-embed-script")&&this.injectScript(),this.checkAPI().then((function(){e.fetchEmbed(e.getQueryParams(e.props))})))},t.prototype.componentDidUpdate=function(e){var t=this.props,n=t.url,a=t.hideCaption,i=t.maxWidth,r=t.containerTagName;e.url===n&&e.hideCaption===a&&e.maxWidth===i&&e.containerTagName===r||(this.request.cancel(),this.fetchEmbed(this.getQueryParams(this.props)))},t.prototype.componentWillUnmount=function(){this.cancel()},t.prototype.render=function(){var e=this.props.containerTagName;return i.createElement(e,c({},this.omitComponentProps(),{dangerouslySetInnerHTML:{__html:this.state.html||""}}))},t.prototype.fetchEmbed=function(e){this.request=this.createRequestPromise("https://graph.facebook.com/v11.0/instagram_oembed/?"+e),this.props.onLoading&&this.props.onLoading(),this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure)},t.prototype.omitComponentProps=function(){var e=this.props;e.url,e.clientAccessToken,e.hideCaption,e.maxWidth,e.containerTagName,e.onLoading,e.onSuccess,e.onAfterRender,e.onFailure,e.protocol,e.injectScript;return m(e,["url","clientAccessToken","hideCaption","maxWidth","containerTagName","onLoading","onSuccess","onAfterRender","onFailure","protocol","injectScript"])},t.prototype.injectScript=function(){var e=0===window.location.protocol.indexOf("file")?this.props.protocol:"",t=document.createElement("script");t.async=t.defer=!0,t.src=e+"//platform.instagram.com/en_US/embeds.js",t.id="react-instagram-embed-script";var n=document.body;n&&n.appendChild(t)},t.prototype.checkAPI=function(){var e=this;return new Promise((function(t){!function e(n){n.timer=window.setTimeout((function(){window.instgrm?(clearTimeout(n.timer),t()):e(n)}),20)}(e)}))},t.prototype.getQueryParams=function(e){var t=e.url,n=e.clientAccessToken,a=e.hideCaption,i=e.maxWidth;return Object(r.stringify)({url:t,access_token:n,hidecaption:a,maxwidth:"number"==typeof i&&i>=320?i:void 0,omitscript:!0})},t.defaultProps={hideCaption:!1,containerTagName:"div",protocol:"https:",injectScript:!0},t}(i.PureComponent);t.a=d},fUJN:function(e,t,n){e.exports=n.p+"static/cover_img-bd7592c1fd0721f8c1846ebce9b6d20d.png"},kd2E:function(e,t,n){"use strict";function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,r){t=t||"&",n=n||"=";var o={};if("string"!=typeof e||0===e.length)return o;var c=/\+/g;e=e.split(t);var m=1e3;r&&"number"==typeof r.maxKeys&&(m=r.maxKeys);var d=e.length;m>0&&d>m&&(d=m);for(var p=0;p<d;++p){var l,s,h,u,f=e[p].replace(c,"%20"),g=f.indexOf(n);g>=0?(l=f.substr(0,g),s=f.substr(g+1)):(l=f,s=""),h=decodeURIComponent(l),u=decodeURIComponent(s),a(o,h)?i(o[h])?o[h].push(u):o[h]=[o[h],u]:o[h]=u}return o};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},s4NR:function(e,t,n){"use strict";t.decode=t.parse=n("kd2E"),t.encode=t.stringify=n("4JlD")},xBvo:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),i=n.n(a),r=n("qhky"),o=n("Wbzz"),c=n("9eSz"),m=n.n(c),d=n("Jzpe"),p=n("fUJN"),l=n.n(p),s=n("vOnD"),h=n("JI6e"),u=n("3Z9Z"),f=n("irN4"),g=s.a.div.withConfig({displayName:"shared__BoxedHeading",componentId:"sc-xt2rjc-0"})(["width:fit-content;padding:.7rem .5rem 0rem .5rem;margin:4rem auto 3.4rem;text-align:center;text-transform:uppercase;-webkit-text-stroke:1.5px #573A78;font-size:3rem;line-height 3rem;border:3px solid #532E67;color:",";"," @media(max-width:768px){font-size:3rem;line-height 3rem;margin-top:4rem;}"],(function(e){var t=e.color;return void 0===t?"#532E67":t}),f.a),x=s.a.div.withConfig({displayName:"shared__Heading",componentId:"sc-xt2rjc-1"})(["width:fit-content;padding:0rem;margin:0rem;text-align:left;-webkit-text-stroke:1.5px #573A78;font-size:3.3rem;line-height 3.3rem;color:",";"," @media(max-width:768px){font-size:3.3rem;line-height 3.3rem;}"],(function(e){var t=e.color;return void 0===t?"#532E67":t}),f.a),w=(s.a.div.withConfig({displayName:"shared__Container",componentId:"sc-xt2rjc-2"})(["position:relative;"]),s.a.div.withConfig({displayName:"shared__Title",componentId:"sc-xt2rjc-3"})(["  text-align:center;position:absolute;top:1.5%;z-index:1000;width:100%;height:auto;color:#532E67;font-size:2.8vw;line-height:13px;"," padding-left:1rem;padding-top:0.5rem;padding-right:1rem;@media (max-width:768px){font-size:1.8em;}"],f.a)),v=s.a.div.withConfig({displayName:"shared__Tag",componentId:"sc-xt2rjc-4"})(["  float:left;position:absolute;top:1.5%;left:0px;z-index:1000;width:100%;height:auto;color:#532E67;font-size:1.35em;line-height:100%;padding-top:0.5rem;"," @media (max-width:768px){font-size:1.4em;}"],f.k),E=(s.a.p.withConfig({displayName:"shared__Author",componentId:"sc-xt2rjc-5"})([""," text-transform:uppercase;font-size:1.1vw;@media (max-width:768px){font-size:1em;}margin-top:2rem;margin-bottom:.25rem;"],f.k),s.a.div.withConfig({displayName:"shared__BoldText",componentId:"sc-xt2rjc-6"})(["font-size:1.7rem;"," text-align:center;margin:auto;max-width:75%;@media(max-width:768px){font-size:1rem;max-width:100%;padding:0 1rem;}"],f.i),s.a.div.withConfig({displayName:"shared__RegularText",componentId:"sc-xt2rjc-7"})(["font-size:1.2rem;"," text-align:center;max-width:75%;margin:auto;padding:1.5rem 0;@media(max-width:768px){font-size:1rem;max-width:100%;padding:0.5rem 1rem;}"],f.j),s.a.div.withConfig({displayName:"shared__InfoSubhead",componentId:"sc-xt2rjc-8"})(["  float:left;left:0px;z-index:1000;width:100%;color:#532E67;font-size:1em;line-height:100%;padding-top:0.5rem;"," @media (max-width:768px){font-size:1.15em;}"],f.k)),y=s.a.div.withConfig({displayName:"shared__InfoAuthor",componentId:"sc-xt2rjc-9"})(["  float:left;left:0px;z-index:1000;width:100%;color:#532E67;font-size:1.5em;line-height:100%;padding-top:0.5rem;text-transform:uppercase;"," @media (max-width:768px){font-size:1.15em;}"],f.j),b=s.a.span.withConfig({displayName:"shared__DropCap",componentId:"sc-xt2rjc-10"})(["float:left;margin-top:-3.3rem;font-size:4.5rem;height:5.7rem;color:",";"," @media(max-width:768px){font-size:2rem;margin-top:-1.2rem;height:2.6rem;}"],(function(e){var t=e.color;return void 0===t?"white":t}),f.i),C=n("1Uvv"),_=s.a.div.withConfig({displayName:"ProfileGrid__ImageContainer",componentId:"sc-ublpza-0"})(["margin:auto;width:85%;position:relative;max-width:1100px;@media(max-width:768px){}"]),j=s.a.div.withConfig({displayName:"ProfileGrid__Container",componentId:"sc-ublpza-1"})(["margin:auto auto 12.5rem;position:relative;width:100%;@media(max-width:768px){}"]),F=(s.a.div.withConfig({displayName:"ProfileGrid__Background",componentId:"sc-ublpza-2"})(["background-image:url(",");width:100%;background-size:cover;border:'3px solid #CCC';"],(function(e){return e.img})),function(e){var t=e.profiles;return i.a.createElement(h.a,{sm:12,md:6,lg:6},t&&t.map((function(e){return i.a.createElement(C.b,{link:e.link},i.a.createElement(j,null,i.a.createElement(m.a,{fluid:e.img.childImageSharp.fluid,style:{border:"3px solid #CCC"}}),i.a.createElement(w,{style:{padding:"calc(100% + 2rem) 1rem 1rem"}},e.name),i.a.createElement(v,{style:{padding:"calc(100% + 4.5rem) 0.2rem 0.2rem"}},e.subhead)))})))}),I=function(e){var t=e.profiles,n=e.title;return i.a.createElement(_,null,i.a.createElement(g,{color:"#532E67"},n),i.a.createElement(u.a,null,i.a.createElement(F,{profiles:t.slice(0,5)}),i.a.createElement(F,{profiles:t.slice(5,10)})))},k=n("IujW"),P=n.n(k),N=s.a.div.withConfig({displayName:"EditorLetter__Container",componentId:"sc-1web05b-0"})(["margin:auto;position:relative;width:100%;height:auto;background-color:#FFF;@media(max-width:768px){}"]),z=s.a.div.withConfig({displayName:"EditorLetter__InfoContainer",componentId:"sc-1web05b-1"})(["margin:auto;position:relative;width:100%;height:auto;padding-top:5rem;padding-left:13rem;background-color:#FFF;@media(max-width:1400px){padding-left:10rem;}@media(max-width:1200px){padding-left:8rem;}@media(max-width:1000px){padding-left:6rem;}@media(max-width:800px){padding-left:5rem;}@media(max-width:600px){padding-left:3rem;}@media(max-width:400px){padding-left:3rem;}"]),O=s.a.div.withConfig({displayName:"EditorLetter__Line",componentId:"sc-1web05b-2"})(["width:",";height:14px;background-color:#532E67;@media(max-width:768px){}"],(function(e){var t=e.width;return void 0===t?"100px":t})),S=s.a.div.withConfig({displayName:"EditorLetter__LetterContainer",componentId:"sc-1web05b-3"})(["margin:auto;position:relative;width:100%;height:auto;background-color:#FFF;padding-top:10rem;padding-right:1rem;padding-left:1rem;@media(max-width:768px){padding-top:4rem;}"]),A=function(e){var t=e.letter;return i.a.createElement(h.a,{sm:12,md:5,lg:5,xl:4},i.a.createElement(z,null,i.a.createElement(x,{color:"#532E67"},"Letter"),i.a.createElement(x,{color:"#532E67"},"From"),i.a.createElement(x,{color:"#532E67"},"The"),i.a.createElement(x,{color:"#532E67"},"Editor"),i.a.createElement(O,{width:"160px"}),i.a.createElement(E,{style:{marginTop:"50px"}},t.subheading),i.a.createElement(y,{style:{marginTop:"45px",marginBottom:"45px"}},"BY ",t.author)))},T=function(e){var t=e.letter;return i.a.createElement(h.a,{sm:12,md:7,lg:7,xl:8},i.a.createElement(S,null,i.a.createElement(b,{color:"#532E67"},"S"),t.text&&t.text.map((function(e,t){return i.a.createElement(P.a,{children:e,linkTarget:"_blank"})}))))},R=function(e){var t=e.letter;return i.a.createElement(N,null,i.a.createElement(u.a,null,i.a.createElement(A,{letter:t}),i.a.createElement(T,{letter:t})))},U=n("5loA"),L=s.a.div.withConfig({displayName:"PennDeclassified__Container",componentId:"sc-1atv464-0"})(["margin:auto;position:relative;width:100%;height:auto;background-color:#FFF;margin-left:0rem;@media(max-width:768px){}"]),D=s.a.div.withConfig({displayName:"PennDeclassified__HeaderContainer",componentId:"sc-1atv464-1"})(["margin:auto;position:relative;width:100%;height:auto;padding-top:5rem;padding-left:23%;background-color:#FFF;@media(max-width:1400px){padding-left:12rem;}@media(max-width:1200px){padding-left:9rem;}@media(max-width:1000px){padding-left:6rem;}@media(max-width:800px){padding-left:4rem;}@media(max-width:600px){padding-left:3rem;}@media(max-width:400px){padding-left:2rem;}"]),q=s.a.div.withConfig({displayName:"PennDeclassified__Line",componentId:"sc-1atv464-2"})(["width:",";height:14px;background-color:#532E67;max-width:750px;@media(max-width:768px){}"],(function(e){var t=e.width;return void 0===t?"100px":t})),J=(s.a.div.withConfig({displayName:"PennDeclassified__LetterContainer",componentId:"sc-1atv464-3"})(["margin:auto;position:relative;width:100%;height:auto;background-color:#FFF;padding-top:10rem;padding-right:5rem;margin-left:5rem;@media(max-width:768px){padding-top:4rem;}"]),s.a.div.withConfig({displayName:"PennDeclassified__Heading",componentId:"sc-1atv464-4"})(["width:fit-content;padding:0rem;margin:0rem;text-align:left;font-size:3rem;line-height 3rem;color:",";"," @media(max-width:768px){font-size:2rem;line-height 2rem;}"],(function(e){var t=e.color;return void 0===t?"#532E67":t}),f.a)),W=function(e){var t=e.info;return i.a.createElement(i.a.Fragment,null,i.a.createElement(D,null,i.a.createElement(J,{color:"#532E67"},"P*NN DECLASSIFIED:"),i.a.createElement(J,{color:"#532E67"},"SCHOOL SURVIVAL GUIDE"),i.a.createElement(q,{width:"70%"}),i.a.createElement(y,{style:{marginTop:"20px",marginBottom:"10px"}},"BY ",t.author),i.a.createElement(E,{style:{marginTop:"10px",marginBottom:"10px",maxWidth:"80%"}},t.subheading)))},B=s.a.div.withConfig({displayName:"PennDeclassified__VidFormat",componentId:"sc-1atv464-5"})(["width:100%;margin:auto;padding-top:2rem;display:flex;flex-wrap:wrap;justify-content:center;iframe{max-width:none;}@media (max-width:768px){width:100%;padding:1rem 1rem 4rem;}"]),Q=function(e){var t=e.info;return i.a.createElement(h.a,{sm:12,md:12,lg:12},i.a.createElement(B,null,i.a.createElement(U.a,{url:t.link,clientAccessToken:"947756802416627|a36b8dffc1596399ee685a4677ebc2a2",maxWidth:400,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0})))},G=function(e){var t=e.info;return i.a.createElement(L,null,i.a.createElement(u.a,null,i.a.createElement(W,{info:t}),i.a.createElement(Q,{info:t})))},K={left:[],right:[]};t.default=function(){var e=Object(o.d)("223051278").allFile.edges[0].node.childrenPenn102021Json[0],t=e.editor_letter,n=e.penn_declassified,a=e.profiles;return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,null,i.a.createElement("meta",{charset:"utf-8"}),i.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("meta",{name:"description",content:"Penn 10"}),i.a.createElement("title",null,"Penn 10: Class of 2021 | 34th Street"),i.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"}),i.a.createElement("meta",{property:"og:title",content:"Penn 10: Class of 2021"}),i.a.createElement("meta",{property:"og:image",content:"https://snworksceo.imgix.net/dpn-34s/60e8675f-fdaa-4943-a678-3ad35b6a9afd.sized-1000x1000.jpeg?"}),i.a.createElement("meta",{property:"og:description",content:"From working on the frontlines of the pandemic to creating inclusive spaces on campus, this is the class of 2021 Penn 10."}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:url",content:"https://projects.34st.com/2021/penn-10"}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:title",content:"Penn 10: Class of 2021"}),i.a.createElement("meta",{name:"twitter:image",content:"https://snworksceo.imgix.net/dpn-34s/60e8675f-fdaa-4943-a678-3ad35b6a9afd.sized-1000x1000.jpeg?"}),i.a.createElement("meta",{name:"twitter:description",content:"From working on the frontlines of the pandemic to creating inclusive spaces on campus, this is the class of 2021 Penn 10."}),i.a.createElement("meta",{name:"twitter:url",content:"https://projects.34st.com/2021/penn-10"}),i.a.createElement("meta",{name:"twitter:site",content:"@dailypenn"}),i.a.createElement("script",{src:"https://code.jquery.com/jquery-3.2.1.slim.min.js",integrity:"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",crossOrigin:"anonymous"}),i.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",integrity:"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",crossOrigin:"anonymous"}),i.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",integrity:"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",crossOrigin:"anonymous"})),i.a.createElement(d.a,{color:"#fff"},i.a.createElement(d.c,{titles:K,bgColor:"#FFFFFF",fontColor:"#FFFFFF",img:"/img/34st-navbar-logo-purple.png"}),i.a.createElement("div",null,i.a.createElement("img",{src:l.a,style:{width:"100%",boxShadow:"0px 5px 6px #00000029"}})),i.a.createElement("div",{id:"editor-letter"}),i.a.createElement(R,{letter:t[0]}),i.a.createElement("div",{id:"penn-declassified"}),i.a.createElement(G,{info:n[0]}),i.a.createElement("div",{id:"profiles"}),i.a.createElement(I,{profiles:a,title:"Profiles"}),i.a.createElement(d.d,{height:"3rem"}),i.a.createElement(d.b,{emoji:"🌟",bgColor:"#000",fontColor:"#fff",year:"2021"})))}}}]);
//# sourceMappingURL=component---src-pages-2021-penn-10-js-7b254158439417444b8e.js.map