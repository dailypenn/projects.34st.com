(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"4JlD":function(e,t,n){"use strict";var a=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,l){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?i(o(e),(function(o){var l=encodeURIComponent(a(o))+n;return r(e[o])?i(e[o],(function(e){return l+encodeURIComponent(a(e))})).join(t):l+encodeURIComponent(a(e[o]))})).join(t):l?encodeURIComponent(a(l))+n+encodeURIComponent(a(e)):""};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function i(e,t){if(e.map)return e.map(t);for(var n=[],a=0;a<e.length;a++)n.push(t(e[a],a));return n}var o=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},"5loA":function(e,t,n){"use strict";var a,r=n("q1tI"),i=n("s4NR"),o=(a=function(e,t){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}a(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},c=function(e){function t(t){var n=e.call(this,t)||this;return n.request=null,n.cancel=function(){n.request&&n.request.cancel()},n.handleFetchSuccess=function(e){n.props.onSuccess&&n.props.onSuccess(e),n.setState({html:e.html},(function(){window.instgrm.Embeds.process(),n.props.onAfterRender&&n.props.onAfterRender()}))},n.handleFetchFailure=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];clearTimeout(n.timer),n.props.onFailure&&n.props.onFailure(e)},n.createRequestPromise=function(e){var t={};return t.promise=new Promise((function(n,a){var r=fetch(e).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return a(e)}));return t.cancel=function(){return a(new Error("Cancelled"))},r})),t},n.state={html:null},n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;window.instgrm?this.fetchEmbed(this.getQueryParams(this.props)):(this.props.injectScript&&!document.getElementById("react-instagram-embed-script")&&this.injectScript(),this.checkAPI().then((function(){e.fetchEmbed(e.getQueryParams(e.props))})))},t.prototype.componentDidUpdate=function(e){var t=this.props,n=t.url,a=t.hideCaption,r=t.maxWidth,i=t.containerTagName;e.url===n&&e.hideCaption===a&&e.maxWidth===r&&e.containerTagName===i||(this.request.cancel(),this.fetchEmbed(this.getQueryParams(this.props)))},t.prototype.componentWillUnmount=function(){this.cancel()},t.prototype.render=function(){var e=this.props.containerTagName;return r.createElement(e,l({},this.omitComponentProps(),{dangerouslySetInnerHTML:{__html:this.state.html||""}}))},t.prototype.fetchEmbed=function(e){this.request=this.createRequestPromise("https://graph.facebook.com/v11.0/instagram_oembed/?"+e),this.props.onLoading&&this.props.onLoading(),this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure)},t.prototype.omitComponentProps=function(){var e=this.props;e.url,e.clientAccessToken,e.hideCaption,e.maxWidth,e.containerTagName,e.onLoading,e.onSuccess,e.onAfterRender,e.onFailure,e.protocol,e.injectScript;return m(e,["url","clientAccessToken","hideCaption","maxWidth","containerTagName","onLoading","onSuccess","onAfterRender","onFailure","protocol","injectScript"])},t.prototype.injectScript=function(){var e=0===window.location.protocol.indexOf("file")?this.props.protocol:"",t=document.createElement("script");t.async=t.defer=!0,t.src=e+"//platform.instagram.com/en_US/embeds.js",t.id="react-instagram-embed-script";var n=document.body;n&&n.appendChild(t)},t.prototype.checkAPI=function(){var e=this;return new Promise((function(t){!function e(n){n.timer=window.setTimeout((function(){window.instgrm?(clearTimeout(n.timer),t()):e(n)}),20)}(e)}))},t.prototype.getQueryParams=function(e){var t=e.url,n=e.clientAccessToken,a=e.hideCaption,r=e.maxWidth;return Object(i.stringify)({url:t,access_token:n,hidecaption:a,maxwidth:"number"==typeof r&&r>=320?r:void 0,omitscript:!0})},t.defaultProps={hideCaption:!1,containerTagName:"div",protocol:"https:",injectScript:!0},t}(r.PureComponent);t.a=c},YtPJ:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("qhky"),o=n("Wbzz"),l=n("9eSz"),m=n.n(l),c=n("Jzpe"),s=n("vOnD"),d=n("irN4"),p=n("yfCg"),u=n.n(p),h=s.a.div.withConfig({displayName:"Feature__Background",componentId:"sc-4mjg49-0"})(["background-image:url(",");width:100%;padding:3rem;background-size:cover;@media(max-width:768px){padding:3rem 2rem;}"],u.a),f=s.a.div.withConfig({displayName:"Feature__FeatureHeading",componentId:"sc-4mjg49-1"})(["font-size:1.7rem;border:2px solid white;width:fit-content;color:white;padding:0 .4rem;",""],d.j),g=s.a.div.withConfig({displayName:"Feature__FeatureHeadline",componentId:"sc-4mjg49-2"})(["font-size:3.6rem;line-height:4rem;color:white;padding:20rem 0 1rem 0;width:41%;"," @media(max-width:768px){font-size:3rem;line-height:3.8rem;width:100%;padding-top:5rem;}"],d.j),w=s.a.div.withConfig({displayName:"Feature__FeatureSubHeading",componentId:"sc-4mjg49-3"})(["font-size:1.7rem;color:white;line-height:1.6rem;"," width:41%;margin-top:2rem;@media(max-width:768px){font-size:1.5rem;line-height:2rem;width:100%;}"],d.m),E=s.a.div.withConfig({displayName:"Feature__Author",componentId:"sc-4mjg49-4"})(["font-size:1.7rem;color:white;width:fit-content;margin:auto;text-align:center;margin-top:2.5rem;"," @media(max-width:768px){font-size:1.5rem;width:100%;}"],d.j),v=function(){return r.a.createElement(h,null,r.a.createElement(c.e,{link:"https://www.34st.com/article/2021/02/dating-covid-quarantine-coronavirus-romance-pawelski"},r.a.createElement(f,null,"FEATURE"),r.a.createElement(g,null,"It’s Not You, It’s COVID–19: Finding and Losing Love in Quarantine"),r.a.createElement(w,null,"Penn couples and professors on the challenges of keeping love alive during the pandemic."),r.a.createElement(E,null,"BY ANGELA SHEN")))},y=n("5loA"),b=s.a.div.withConfig({displayName:"shared__LoveHeading",componentId:"sc-13f76t6-0"})(["width:fit-content;padding:.5rem 1.2rem;margin:8rem auto 3rem;text-align:center;font-size:4rem;line-height 4rem;border:3px solid ",";color:",";"," @media(max-width:768px){font-size:3rem;line-height 3rem;margin-top:4rem;}"],(function(e){var t=e.color;return void 0===t?"#283033":t}),(function(e){var t=e.color;return void 0===t?"#283033":t}),d.j),x=s.a.div.withConfig({displayName:"shared__Container",componentId:"sc-13f76t6-1"})(["border:1px solid #DDDDDD;position:relative;"]),k=s.a.div.withConfig({displayName:"shared__Tag",componentId:"sc-13f76t6-2"})(["  float:left;position:absolute;left:0px;bottom:0px;z-index:1000;width:100%;height:auto;background-color:rgba(0,0,0,0.7);color:#FFFFFF;font-size:1vw;"," padding-left:1rem;padding-top:0.5rem;padding-right:1rem;@media (max-width:768px){font-size:1em;}"],d.m),I=s.a.p.withConfig({displayName:"shared__Author",componentId:"sc-13f76t6-3"})([""," text-transform:uppercase;font-size:0.75vw;@media (max-width:768px){font-size:1em;}margin-top:0.75rem;margin-bottom:0.25rem;"],d.k),C=s.a.div.withConfig({displayName:"shared__BoldText",componentId:"sc-13f76t6-4"})(["font-size:1.7rem;"," text-align:center;margin:auto;max-width:75%;@media(max-width:768px){font-size:1rem;max-width:100%;padding:0 1rem;}"],d.k),_=s.a.div.withConfig({displayName:"shared__RegularText",componentId:"sc-13f76t6-5"})(["font-size:1.2rem;"," text-align:center;max-width:75%;margin:auto;padding:1.5rem 0;@media(max-width:768px){font-size:1rem;max-width:100%;padding:0.5rem 1rem;}"],d.l),F=s.a.div.withConfig({displayName:"Video__Wrapper",componentId:"sc-fz11lm-0"})(["margin:3rem 0;"]),j=s.a.div.withConfig({displayName:"Video__VidFormat",componentId:"sc-fz11lm-1"})(["width:75%;max-width:658px;margin:auto;padding-top:2rem;iframe{max-width:none;}@media (max-width:768px){width:100%;padding:1rem 1rem 4rem;}"]),S=function(){return r.a.createElement(F,null,r.a.createElement(C,null,"VIDEO"),r.a.createElement(_,null,"It's Not You, It's COVID–19: Meet the Couples",r.a.createElement("br",null),"Street sat down with two couples to learn more about their relationships, and how they had to change once Penn shut down last March."),r.a.createElement(C,null,"By Jesse Zhang"),r.a.createElement(j,null,r.a.createElement(y.a,{url:"https://www.instagram.com/tv/CLFpqaej4jH/?utm_source=ig_web_copy_link",clientAccessToken:"947756802416627|a36b8dffc1596399ee685a4677ebc2a2",maxWidth:658,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0})))},O=n("3Z9Z"),N=n("JI6e"),A=n("1Uvv"),L=s.a.div.withConfig({displayName:"Love__Articles",componentId:"sc-wn8atx-0"})(["background-color:",";padding:1.5rem 4rem;margin:auto;margin-bottom:6rem;width:75%;@media(max-width:768px){width:90%;padding:0.5rem 1rem 1rem;margin-bottom:4rem;}"],(function(e){var t=e.color;return void 0===t?"#283033":t})),T=s.a.div.withConfig({displayName:"Love__ArticleSpacing",componentId:"sc-wn8atx-1"})(["margin:3rem 0;@media(max-width:768px){margin:2rem 0;}"]),z=s.a.div.withConfig({displayName:"Love__ArticleTitle",componentId:"sc-wn8atx-2"})(["font-size:2rem;color:white;"," padding:1rem 0 1rem 2rem;@media(max-width:768px){font-size:1.5rem;padding:1rem 0.5rem 0;line-height:1.9rem;}"],d.l),B=s.a.div.withConfig({displayName:"Love__ArticleAuthor",componentId:"sc-wn8atx-3"})(["font-size:1rem;color:white;"," padding-left:2rem;@media(max-width:768px){font-size:0.8rem;padding:0.5rem;}"],d.l),P=function(e){var t=e.article,n=t.title,a=t.author,i=t.img,o=t.link;return r.a.createElement(T,null,r.a.createElement(A.b,{link:o},r.a.createElement(O.a,null,r.a.createElement(N.a,{sm:5,md:5},r.a.createElement(m.a,{fluid:i.childImageSharp.fluid})),r.a.createElement(N.a,{sm:7,md:7},r.a.createElement(z,null,n),r.a.createElement(B,null,"BY ",a.toUpperCase())))))},R=function(e){var t=e.articles,n=e.color,a=void 0===n?"#283033":n,i=e.section;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:"0 2rem"}},r.a.createElement(b,{color:a},i)),r.a.createElement(L,{color:a},t&&t.map((function(e){return r.a.createElement(P,{article:e})}))))},D=n("40+L"),U=n.n(D),q=(n("VLDe"),s.a.span.withConfig({displayName:"Essay__Badge",componentId:"sc-1kvu8jo-0"})(["background-color:",";"," border-radius:10px;width:3rem;color:black;font-size:70%;margin-right:1rem;text-align:center;display:inline-block;text-transform:uppercase;"],(function(e){var t=e.backgroundColor;return void 0===t?"#283033":t}),d.k)),M={desktop:{breakpoint:{max:3e3,min:1024},items:3,slidesToSlide:3},tablet:{breakpoint:{max:1024,min:464},items:2,slidesToSlide:2},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}},Y=function(e){var t=e.articles,n=e.deviceType,a=e.headerColor,i=void 0===a?"#FDB6B0":a;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:"0 2rem"}},r.a.createElement(b,{color:i},"ESSAY WINNERS")),r.a.createElement(U.a,{draggable:!1,showDots:!0,removeArrowOnDeviceType:["desktop"],responsive:M,ssr:!0,infinite:!0,autoPlay:"mobile"!==n,autoPlaySpeed:3500,keyBoardControl:!0,customTransition:"all .5",transitionDuration:500,containerClass:"carousel-container",deviceType:n,dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px"},t&&t.map((function(e){return r.a.createElement(A.b,{link:e.link},r.a.createElement(x,null,r.a.createElement(k,null,r.a.createElement(q,{backgroundColor:e.color},e.place),r.a.createElement("p",{style:{marginBottom:"0.2rem"}},e.title),r.a.createElement(I,null,"BY ",e.author)),r.a.createElement(m.a,{fluid:e.img.childImageSharp.fluid})))}))))},V=s.a.div.withConfig({displayName:"Multimedia__BoxedText",componentId:"sc-1b8dwb6-0"})(["margin:2rem 2rem;padding:0.5rem 1.2rem;font-size:1.2vw;border:3px solid #FDB6B0;color:#FDB6B0;"," @media(max-width:768px){font-size:1.1rem;margin:0;}"],d.m),Q=s.a.div.withConfig({displayName:"Multimedia__ImageContainer",componentId:"sc-1b8dwb6-1"})(["margin:auto;width:75%;@media(max-width:768px){width:90%}"]),W=s.a.div.withConfig({displayName:"Multimedia__Container",componentId:"sc-1b8dwb6-2"})(["margin:2rem 0;position:relative;@media(max-width:768px){}"]),J=s.a.div.withConfig({displayName:"Multimedia__MobileContainer",componentId:"sc-1b8dwb6-3"})(["margin:2rem 0;position:relative;@media(max-width:768px){margin:0}"]),K=Object(s.a)(O.a).withConfig({displayName:"Multimedia__NoMarginRow",componentId:"sc-1b8dwb6-4"})(["margin-right:0px;margin-top:-2rem;"]),H=function(e){var t=e.multimedia;return r.a.createElement(Q,null,r.a.createElement(b,{color:"#FDB6B0"},"MULTIMEDIA"),r.a.createElement(C,null,"Photo essay: Redefining Love In Lockdown".toUpperCase()),r.a.createElement(_,{style:{marginBottom:"1rem"}},"From puppies to coffee cups, here’s how Street survived life under lockdown."),r.a.createElement(K,null,r.a.createElement(N.a,{sm:12,md:5},t.slice(0,3)&&t.slice(0,3).map((function(e){return r.a.createElement(A.b,{link:e.link},r.a.createElement(W,null,r.a.createElement(k,null,r.a.createElement("p",{style:{marginBottom:"0.2rem"}},e.title),r.a.createElement(I,null,"BY ",e.author)),r.a.createElement(m.a,{fluid:e.img.childImageSharp.fluid})))}))),r.a.createElement(N.a,{sm:12,md:7},r.a.createElement(A.b,{link:t[3].link},r.a.createElement(J,null,r.a.createElement(k,null,r.a.createElement("p",{style:{marginBottom:"0.2rem"}},t[3].title),r.a.createElement(I,null,"BY ",t[3].author)),r.a.createElement(m.a,{fluid:t[3].img.childImageSharp.fluid}))),t.slice(4,6)&&t.slice(4,6).map((function(e){return r.a.createElement(A.b,{link:e.link},r.a.createElement(W,null,r.a.createElement(k,null,r.a.createElement("p",{style:{marginBottom:"0.2rem"}},e.title),r.a.createElement(I,null,"BY ",e.author)),r.a.createElement(m.a,{fluid:e.img.childImageSharp.fluid})))})))),r.a.createElement(K,null,t.slice(6,9)&&t.slice(6,9).map((function(e){return r.a.createElement(N.a,{sm:12,md:4},r.a.createElement(A.b,{link:e.link},r.a.createElement(W,null,r.a.createElement(k,null,r.a.createElement("p",{style:{marginBottom:"0.2rem"}},e.title),r.a.createElement(I,null,"BY ",e.author)),r.a.createElement(m.a,{fluid:e.img.childImageSharp.fluid,style:{height:"500px"}}))))}))),r.a.createElement(K,null,r.a.createElement(N.a,{sm:12,md:5},r.a.createElement(A.b,{link:t[9].link},r.a.createElement(W,null,r.a.createElement(k,null,r.a.createElement("p",{style:{marginBottom:"0.2rem"}},t[9].title),r.a.createElement(I,null,"BY ",t[9].author)),r.a.createElement(m.a,{fluid:t[9].img.childImageSharp.fluid})))),r.a.createElement(N.a,{sm:12,md:7},r.a.createElement(V,null,r.a.createElement("p",null,'While none of us could have anticipated the effects that the advent of COVID-19 would have on our society, the hardships and grief of life under lockdown have certainly been felt by all of us. Seperated from our loved ones and facing a future full of uncertainty, quarantine has pushed us to find new ways to cope with our so-called "new normal".'),r.a.createElement("p",null,"Street welcomed staffers to submit photos of the things that brought them a sense of peace during this time. From snuggling with pets to exploring a new hobby, here are a few tidbits of positivity that helped our staff survive the past year.")))))},X={left:[{text:"FEATURE",link:"feature"},{text:"ESSAY WINNERS",link:"essay-winners"},{text:"MULTIMEDIA",link:"multimedia"}],right:[{text:"LOVE, IRL.",link:"irl"},{text:"LOVE, 4 U.",link:"for-you"},{text:"LOVE, ONLINE.",link:"online"}]};t.default=function(){var e=Object(o.d)("435087634").allFile.edges[0].node.childrenLoveIssueJson[0],t=e.cover_img,n=e.essay_winner,a=e.multimedia,l=e.love_irl,s=e.love_4_u,d=e.love_online;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,null,r.a.createElement("meta",{charset:"utf-8"}),r.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.a.createElement("meta",{name:"description",content:"Love Issue"}),r.a.createElement("title",null,"Love Issue | 34th Street"),r.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"}),r.a.createElement("meta",{property:"og:title",content:"TTYL, XOXO: Street’s Quarantined Love Issue"}),r.a.createElement("meta",{property:"og:image",content:"https://snworksceo.imgix.net/dpn-34s/8cf07f0e-d79c-445a-994d-da4dae0b1c9b.sized-1000x1000.png"}),r.a.createElement("meta",{property:"og:description",content:"From Zoom dates to long walks around our blocks, here’s how Penn found love under lockdown"}),r.a.createElement("meta",{property:"og:type",content:"article"}),r.a.createElement("meta",{property:"og:url",content:"https://projects.34st.com/2021/love-issue"}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("meta",{name:"twitter:title",content:"TTYL, XOXO: Street’s Quarantined Love Issue"}),r.a.createElement("meta",{name:"twitter:image",content:"https://snworksceo.imgix.net/dpn-34s/8cf07f0e-d79c-445a-994d-da4dae0b1c9b.sized-1000x1000.png"}),r.a.createElement("meta",{name:"twitter:description",content:"From Zoom dates to long walks around our blocks, here’s how Penn found love under lockdown"}),r.a.createElement("meta",{name:"twitter:url",content:"https://projects.34st.com/2021/love-issue"}),r.a.createElement("meta",{name:"twitter:site",content:"@dailypenn"}),r.a.createElement("script",{src:"https://code.jquery.com/jquery-3.2.1.slim.min.js",integrity:"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",crossOrigin:"anonymous"}),r.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",integrity:"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",crossOrigin:"anonymous"}),r.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",integrity:"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",crossOrigin:"anonymous"})),r.a.createElement(c.c,{titles:X,bgColor:"#FFFFFF",fontColor:"#000000",img:"/img/34st-navbar-logo-white.png"}),r.a.createElement(m.a,{fluid:t.childImageSharp.fluid,imgStyle:{objectFit:"contain"}}),r.a.createElement("div",{id:"feature"}),r.a.createElement(v,null),r.a.createElement("div",{id:"essay-winners"}),r.a.createElement(Y,{articles:n}),r.a.createElement("div",{id:"multimedia"}),r.a.createElement(H,{multimedia:a}),r.a.createElement(S,null),r.a.createElement("div",{id:"irl"}),r.a.createElement(R,{articles:l,color:"#73A992",section:"LOVE, IRL."}),r.a.createElement("div",{id:"for-you"}),r.a.createElement(R,{articles:s,color:"#B7C4EB",section:"LOVE, 4 U."}),r.a.createElement("div",{id:"online"}),r.a.createElement(R,{articles:d,color:"#FD9B7B",section:"LOVE, ONLINE."}),r.a.createElement(c.b,{emoji:"💖",bgColor:"#000000",fontColor:"#FFFFFF",year:"2021"}))}},kd2E:function(e,t,n){"use strict";function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,i){t=t||"&",n=n||"=";var o={};if("string"!=typeof e||0===e.length)return o;var l=/\+/g;e=e.split(t);var m=1e3;i&&"number"==typeof i.maxKeys&&(m=i.maxKeys);var c=e.length;m>0&&c>m&&(c=m);for(var s=0;s<c;++s){var d,p,u,h,f=e[s].replace(l,"%20"),g=f.indexOf(n);g>=0?(d=f.substr(0,g),p=f.substr(g+1)):(d=f,p=""),u=decodeURIComponent(d),h=decodeURIComponent(p),a(o,u)?r(o[u])?o[u].push(h):o[u]=[o[u],h]:o[u]=h}return o};var r=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},s4NR:function(e,t,n){"use strict";t.decode=t.parse=n("kd2E"),t.encode=t.stringify=n("4JlD")},yfCg:function(e,t,n){e.exports=n.p+"static/feature-eae08a6487c47da05df574a2c5439e31.png"}}]);
//# sourceMappingURL=component---src-pages-2021-love-issue-js-e4b53961232843109b22.js.map