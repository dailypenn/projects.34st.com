(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4JlD":function(e,t,n){"use strict";var r=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,c){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?a(o(e),(function(o){var c=encodeURIComponent(r(o))+n;return i(e[o])?a(e[o],(function(e){return c+encodeURIComponent(r(e))})).join(t):c+encodeURIComponent(r(e[o]))})).join(t):c?encodeURIComponent(r(c))+n+encodeURIComponent(r(e)):""};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function a(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var o=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},"5loA":function(e,t,n){"use strict";var r,i=n("q1tI"),a=n("s4NR"),o=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},l=function(e){function t(t){var n=e.call(this,t)||this;return n.request=null,n.cancel=function(){n.request&&n.request.cancel()},n.handleFetchSuccess=function(e){n.props.onSuccess&&n.props.onSuccess(e),n.setState({html:e.html},(function(){window.instgrm.Embeds.process(),n.props.onAfterRender&&n.props.onAfterRender()}))},n.handleFetchFailure=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];clearTimeout(n.timer),n.props.onFailure&&n.props.onFailure(e)},n.createRequestPromise=function(e){var t={};return t.promise=new Promise((function(n,r){var i=fetch(e).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return r(e)}));return t.cancel=function(){return r(new Error("Cancelled"))},i})),t},n.state={html:null},n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;window.instgrm?this.fetchEmbed(this.getQueryParams(this.props)):(this.props.injectScript&&!document.getElementById("react-instagram-embed-script")&&this.injectScript(),this.checkAPI().then((function(){e.fetchEmbed(e.getQueryParams(e.props))})))},t.prototype.componentDidUpdate=function(e){var t=this.props,n=t.url,r=t.hideCaption,i=t.maxWidth,a=t.containerTagName;e.url===n&&e.hideCaption===r&&e.maxWidth===i&&e.containerTagName===a||(this.request.cancel(),this.fetchEmbed(this.getQueryParams(this.props)))},t.prototype.componentWillUnmount=function(){this.cancel()},t.prototype.render=function(){var e=this.props.containerTagName;return i.createElement(e,c({},this.omitComponentProps(),{dangerouslySetInnerHTML:{__html:this.state.html||""}}))},t.prototype.fetchEmbed=function(e){this.request=this.createRequestPromise("https://graph.facebook.com/v11.0/instagram_oembed/?"+e),this.props.onLoading&&this.props.onLoading(),this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure)},t.prototype.omitComponentProps=function(){var e=this.props;e.url,e.clientAccessToken,e.hideCaption,e.maxWidth,e.containerTagName,e.onLoading,e.onSuccess,e.onAfterRender,e.onFailure,e.protocol,e.injectScript;return m(e,["url","clientAccessToken","hideCaption","maxWidth","containerTagName","onLoading","onSuccess","onAfterRender","onFailure","protocol","injectScript"])},t.prototype.injectScript=function(){var e=0===window.location.protocol.indexOf("file")?this.props.protocol:"",t=document.createElement("script");t.async=t.defer=!0,t.src=e+"//platform.instagram.com/en_US/embeds.js",t.id="react-instagram-embed-script";var n=document.body;n&&n.appendChild(t)},t.prototype.checkAPI=function(){var e=this;return new Promise((function(t){!function e(n){n.timer=window.setTimeout((function(){window.instgrm?(clearTimeout(n.timer),t()):e(n)}),20)}(e)}))},t.prototype.getQueryParams=function(e){var t=e.url,n=e.clientAccessToken,r=e.hideCaption,i=e.maxWidth;return Object(a.stringify)({url:t,access_token:n,hidecaption:r,maxwidth:"number"==typeof i&&i>=320?i:void 0,omitscript:!0})},t.defaultProps={hideCaption:!1,containerTagName:"div",protocol:"https:",injectScript:!0},t}(i.PureComponent);t.a=l},GsPM:function(e,t,n){e.exports=n.p+"static/cover_img-d11029cad3e4d6ddaa5b0b5a3e2eb588.png"},ZZz4:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("qhky"),o=n("Wbzz"),c=(n("9eSz"),n("Jzpe")),m=n("GsPM"),l=n.n(m),s=n("vOnD"),d=n("irN4"),p=s.a.div.withConfig({displayName:"Feature__Background",componentId:"sc-1fzh91j-0"})(["background-color:rgba(0,0,0,.4);background-blend-mode:multiply;background-image:url(",");width:100%;padding:3rem;background-size:cover;@media(max-width:768px){padding:3rem 2rem;}"],(function(e){return e.img})),u=s.a.div.withConfig({displayName:"Feature__FeatureHeading",componentId:"sc-1fzh91j-1"})(["font-size:1.7rem;text-transform:uppercase;border:2px solid white;width:fit-content;color:white;padding:.4rem .4rem 0 .4rem;",""],d.d),h=s.a.div.withConfig({displayName:"Feature__FeatureHeadline",componentId:"sc-1fzh91j-2"})(["font-size:4.6rem;line-height:4.7rem;color:white;padding:20rem 0 1rem 0;width:70%;"," @media(max-width:768px){font-size:3rem;line-height:3.8rem;width:100%;padding-top:5rem;}"],d.l),g=s.a.div.withConfig({displayName:"Feature__FeatureSubHeading",componentId:"sc-1fzh91j-3"})(["font-size:1.3rem;color:white;line-height:1.5rem;"," width:41%;margin-top:2rem;@media(max-width:768px){font-size:1.5rem;line-height:2rem;width:100%;}"],d.i),f=s.a.div.withConfig({displayName:"Feature__Author",componentId:"sc-1fzh91j-4"})(["font-size:1.6rem;text-transform:uppercase;color:white;width:fit-content;margin:auto;text-align:center;margin-top:2.5rem;"," @media(max-width:768px){font-size:1.5rem;width:100%;}"],d.d),b=function(e){var t=e.link,n=e.heading,r=e.headline,a=e.subheading,o=e.author,m=e.img;return i.a.createElement(p,{img:m},i.a.createElement(c.e,{link:t},i.a.createElement(u,null,n),i.a.createElement(h,null,r),i.a.createElement(g,null,a),i.a.createElement(f,null,"BY ",o)))},w=n("3Z9Z"),y=n("JI6e"),x=n("5loA"),v=s.a.div.withConfig({displayName:"shared__Heading",componentId:"sc-1ftv9er-0"})(["width:fit-content;padding:.5rem 1.2rem;margin:4rem auto 0.2rem;text-align:center;-webkit-text-stroke:1px #573A78;font-size:5rem;line-height 4rem;color:",";"," @media(max-width:768px){font-size:3rem;line-height 3rem;margin-top:4rem;}"],(function(e){var t=e.color;return void 0===t?"#283033":t}),d.l),E=(s.a.div.withConfig({displayName:"shared__Container",componentId:"sc-1ftv9er-1"})(["border:1px solid #DDDDDD;position:relative;"]),s.a.div.withConfig({displayName:"shared__Title",componentId:"sc-1ftv9er-2"})(["  float:left;position:absolute;left:10px;top:30px;z-index:1000;width:95%;height:auto;color:#FFFFFF;font-size:max(2vw,20px);line-height:max(2vw,20px);"," padding-left:1rem;padding-top:0.5rem;padding-right:1rem;@media (max-width:768px){font-size:2rem;line-height:2.2rem;}"],d.l)),F=s.a.div.withConfig({displayName:"shared__Tag",componentId:"sc-1ftv9er-3"})(["  float:left;position:absolute;left:10px;bottom:30px;z-index:1000;width:100%;height:auto;color:#FFFFFF;font-size:max(1.1vw,14px);line-height:max(1.1vw,14px);"," padding-left:1rem;padding-top:0.5rem;padding-right:1rem;@media (max-width:768px){font-size:1em;}"],d.j),_=s.a.p.withConfig({displayName:"shared__Author",componentId:"sc-1ftv9er-4"})([""," text-transform:uppercase;font-size:max(1.1vw,10px);@media (max-width:768px){font-size:1em;}margin-top:2rem;margin-bottom:.25rem;"],d.j),k=(s.a.div.withConfig({displayName:"shared__BoldText",componentId:"sc-1ftv9er-5"})(["font-size:1.7rem;"," text-align:center;margin:auto;max-width:75%;@media(max-width:768px){font-size:1rem;max-width:100%;padding:0 1rem;}"],d.h),s.a.div.withConfig({displayName:"shared__RegularText",componentId:"sc-1ftv9er-6"})(["font-size:1.2rem;"," text-align:center;max-width:75%;margin:auto;padding:1.5rem 0;@media(max-width:768px){font-size:1rem;max-width:100%;padding:0.5rem 1rem;}"],d.i),s.a.div.withConfig({displayName:"InstagramSection__Container",componentId:"sc-15fvmud-0"})(["width:100%;padding:0.5rem 2rem 2rem 2rem;background-color:#FCFCE2;@media(max-width:768px){padding:3rem 2rem;}"])),j=s.a.div.withConfig({displayName:"InstagramSection__VidFormat",componentId:"sc-15fvmud-1"})(["width:100%;margin:auto;padding-top:2rem;display:flex;flex-wrap:wrap;justify-content:center;iframe{max-width:none;}@media (max-width:768px){width:100%;padding:1rem 1rem 4rem;}"]),C=function(e){var t=e.title,n=e.links;return i.a.createElement(k,null,i.a.createElement(v,{color:"#FFD4C3"},t),i.a.createElement(w.a,{style:{marginBottom:"3rem"}},n&&n.map((function(e){return i.a.createElement(y.a,{sm:12,md:6,lg:4},i.a.createElement(j,null,i.a.createElement(x.a,{url:e.link,clientAccessToken:"947756802416627|a36b8dffc1596399ee685a4677ebc2a2",maxWidth:400,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0})))}))))},I=n("1Uvv"),O=s.a.div.withConfig({displayName:"ArticleGrid__Container",componentId:"sc-cdqsg-0"})(["margin:auto;width:85%;max-width:900px;@media(max-width:768px){width:90%}"]),A=s.a.div.withConfig({displayName:"ArticleGrid__ArticleContainer",componentId:"sc-cdqsg-1"})(["margin:2rem 0rem 0rem;position:relative;"]),N=s.a.div.withConfig({displayName:"ArticleGrid__ImageContainer",componentId:"sc-cdqsg-2"})(["width:100%;height:min(400px,40vw);overflow:hidden;@media(max-width:768px){height:70vw;}"]),z=function(e){var t=e.multimedia,n=e.title;return i.a.createElement(O,null,i.a.createElement(v,{color:"#FFD4C3"},n),i.a.createElement(w.a,null,i.a.createElement(y.a,{sm:12,md:6,lg:6},t.slice(0,2)&&t.slice(0,2).map((function(e){return i.a.createElement(I.b,{link:e.published_link},i.a.createElement(A,null,i.a.createElement(E,{style:{marginTop:"0.5rem"}},e.title),i.a.createElement(F,null,i.a.createElement("p",null,e.subhead),i.a.createElement(_,null,"BY ",e.author)),i.a.createElement(N,null,i.a.createElement("img",{src:e.image,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",filter:"brightness(60%)"}}))))}))),i.a.createElement(y.a,{sm:12,md:6,lg:6},t.slice(2,4)&&t.slice(2,4).map((function(e){return i.a.createElement(I.b,{link:e.published_link},i.a.createElement(A,null,i.a.createElement(E,{style:{marginTop:"0.5rem"}},e.title),i.a.createElement(F,null,i.a.createElement("p",null,e.subhead),i.a.createElement(_,{style:{marginBottom:"0.6rem"}},"BY ",e.author)),i.a.createElement(N,null,i.a.createElement("img",{src:e.image,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",filter:"brightness(60%)"}}))))})))))},S={left:[{text:"FEATURE",link:"feature"},{text:"GRABBING A BITE",link:"grabbing-a-bite"},{text:"BREAKING BREAD",link:"breaking-bread"}],right:[{text:"SKIMMING THE MENU",link:"skimming-the-menu"},{text:"FOOD FOR THOUGHT",link:"food-for-thought"}]};t.default=function(){var e=Object(o.d)("3069585373").allFile.edges[0].node.childrenDiningGuideFall2021Json[0],t=e.feature,n=e.instagram,r=e.grabbing_a_bite,m=e.breaking_bread,s=e.skimming_the_menu,d=e.food_for_thought;return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,null,i.a.createElement("meta",{charset:"utf-8"}),i.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("meta",{name:"description",content:"Dining Guide"}),i.a.createElement("title",null,"Dining Guide Fall 2021: Resetting the Table | 34th Street"),i.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"}),i.a.createElement("meta",{property:"og:title",content:"Dining Guide Fall 2021: Resetting the Table"}),i.a.createElement("meta",{property:"og:image",content:"https://snworksceo.imgix.net/dpn/aacde8d3-c7b2-4c05-9860-856d1cbe9c52.sized-1000x1000.png?"}),i.a.createElement("meta",{property:"og:description",content:"COVID-19 shut down Philly’s restaurant scene for months. Now, our favorite eateries are back — but the menu looks different."}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:url",content:"https://projects.34st.com/2021/dining-guide-fall"}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:title",content:"Dining Guide Fall 2021: Resetting the Table"}),i.a.createElement("meta",{name:"twitter:image",content:"https://snworksceo.imgix.net/dpn/aacde8d3-c7b2-4c05-9860-856d1cbe9c52.sized-1000x1000.png?"}),i.a.createElement("meta",{name:"twitter:description",content:"COVID-19 shut down Philly’s restaurant scene for months. Now, our favorite eateries are back — but the menu looks different."}),i.a.createElement("meta",{name:"twitter:url",content:"https://projects.34st.com/2021/dining-guide-fall"}),i.a.createElement("meta",{name:"twitter:site",content:"@dailypenn"}),i.a.createElement("script",{src:"https://code.jquery.com/jquery-3.2.1.slim.min.js",integrity:"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",crossOrigin:"anonymous"}),i.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",integrity:"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",crossOrigin:"anonymous"}),i.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",integrity:"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",crossOrigin:"anonymous"})),i.a.createElement(c.a,{color:"#FCFCE2"},i.a.createElement(c.c,{titles:S,bgColor:"#FFFFFF",fontColor:"#000000",img:"/img/34st-navbar-logo-white.png"}),i.a.createElement("div",null,i.a.createElement("img",{src:l.a,style:{width:"100%",boxShadow:"0px 5px 6px #00000029"}})),i.a.createElement("div",{id:"feature"}),i.a.createElement(b,{link:t[0].published_link,heading:"Feature",headline:t[0].title,subheading:t[0].subhead,author:t[0].author,img:t[0].image_link}),i.a.createElement("div",{id:"multimedia"}),i.a.createElement(C,{title:"IG: @34stmag",links:n}),i.a.createElement("div",{id:"grabbing-a-bite"}),i.a.createElement(z,{multimedia:r,title:"Grabbing a Bite"}),i.a.createElement("div",{id:"breaking-bread"}),i.a.createElement(z,{multimedia:m,title:"Breaking Bread"}),i.a.createElement("div",{id:"skimming-the-menu"}),i.a.createElement(z,{multimedia:s,title:"Skimming the Menu"}),i.a.createElement("div",{id:"food-for-thought"}),i.a.createElement(z,{multimedia:d,title:"Food for Thought"}),i.a.createElement(c.d,{height:"5rem"}),i.a.createElement(c.b,{emoji:"🍳",bgColor:"#FFF",fontColor:"#000",year:"2021"})))}},kd2E:function(e,t,n){"use strict";function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,a){t=t||"&",n=n||"=";var o={};if("string"!=typeof e||0===e.length)return o;var c=/\+/g;e=e.split(t);var m=1e3;a&&"number"==typeof a.maxKeys&&(m=a.maxKeys);var l=e.length;m>0&&l>m&&(l=m);for(var s=0;s<l;++s){var d,p,u,h,g=e[s].replace(c,"%20"),f=g.indexOf(n);f>=0?(d=g.substr(0,f),p=g.substr(f+1)):(d=g,p=""),u=decodeURIComponent(d),h=decodeURIComponent(p),r(o,u)?i(o[u])?o[u].push(h):o[u]=[o[u],h]:o[u]=h}return o};var i=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},s4NR:function(e,t,n){"use strict";t.decode=t.parse=n("kd2E"),t.encode=t.stringify=n("4JlD")}}]);
//# sourceMappingURL=component---src-pages-2021-dining-guide-fall-js-15c1952dbb081543147a.js.map