(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4JlD":function(e,t,n){"use strict";var i=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,t,n,l){return t=t||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e?r(o(e),(function(o){var l=encodeURIComponent(i(o))+n;return a(e[o])?r(e[o],(function(e){return l+encodeURIComponent(i(e))})).join(t):l+encodeURIComponent(i(e[o]))})).join(t):l?encodeURIComponent(i(l))+n+encodeURIComponent(i(e)):""};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function r(e,t){if(e.map)return e.map(t);for(var n=[],i=0;i<e.length;i++)n.push(t(e[i],i));return n}var o=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}},"5loA":function(e,t,n){"use strict";var i,a=n("q1tI"),r=n("s4NR"),o=(i=function(e,t){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}i(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),l=function(){return(l=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},c=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(i=Object.getOwnPropertySymbols(e);a<i.length;a++)t.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(e,i[a])&&(n[i[a]]=e[i[a]])}return n},m=function(e){function t(t){var n=e.call(this,t)||this;return n.request=null,n.cancel=function(){n.request&&n.request.cancel()},n.handleFetchSuccess=function(e){n.props.onSuccess&&n.props.onSuccess(e),n.setState({html:e.html},(function(){window.instgrm.Embeds.process(),n.props.onAfterRender&&n.props.onAfterRender()}))},n.handleFetchFailure=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];clearTimeout(n.timer),n.props.onFailure&&n.props.onFailure(e)},n.createRequestPromise=function(e){var t={};return t.promise=new Promise((function(n,i){var a=fetch(e).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return i(e)}));return t.cancel=function(){return i(new Error("Cancelled"))},a})),t},n.state={html:null},n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;window.instgrm?this.fetchEmbed(this.getQueryParams(this.props)):(this.props.injectScript&&!document.getElementById("react-instagram-embed-script")&&this.injectScript(),this.checkAPI().then((function(){e.fetchEmbed(e.getQueryParams(e.props))})))},t.prototype.componentDidUpdate=function(e){var t=this.props,n=t.url,i=t.hideCaption,a=t.maxWidth,r=t.containerTagName;e.url===n&&e.hideCaption===i&&e.maxWidth===a&&e.containerTagName===r||(this.request.cancel(),this.fetchEmbed(this.getQueryParams(this.props)))},t.prototype.componentWillUnmount=function(){this.cancel()},t.prototype.render=function(){var e=this.props.containerTagName;return a.createElement(e,l({},this.omitComponentProps(),{dangerouslySetInnerHTML:{__html:this.state.html||""}}))},t.prototype.fetchEmbed=function(e){this.request=this.createRequestPromise("https://graph.facebook.com/v11.0/instagram_oembed/?"+e),this.props.onLoading&&this.props.onLoading(),this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure)},t.prototype.omitComponentProps=function(){var e=this.props;e.url,e.clientAccessToken,e.hideCaption,e.maxWidth,e.containerTagName,e.onLoading,e.onSuccess,e.onAfterRender,e.onFailure,e.protocol,e.injectScript;return c(e,["url","clientAccessToken","hideCaption","maxWidth","containerTagName","onLoading","onSuccess","onAfterRender","onFailure","protocol","injectScript"])},t.prototype.injectScript=function(){var e=0===window.location.protocol.indexOf("file")?this.props.protocol:"",t=document.createElement("script");t.async=t.defer=!0,t.src=e+"//platform.instagram.com/en_US/embeds.js",t.id="react-instagram-embed-script";var n=document.body;n&&n.appendChild(t)},t.prototype.checkAPI=function(){var e=this;return new Promise((function(t){!function e(n){n.timer=window.setTimeout((function(){window.instgrm?(clearTimeout(n.timer),t()):e(n)}),20)}(e)}))},t.prototype.getQueryParams=function(e){var t=e.url,n=e.clientAccessToken,i=e.hideCaption,a=e.maxWidth;return Object(r.stringify)({url:t,access_token:n,hidecaption:i,maxwidth:"number"==typeof a&&a>=320?a:void 0,omitscript:!0})},t.defaultProps={hideCaption:!1,containerTagName:"div",protocol:"https:",injectScript:!0},t}(a.PureComponent);t.a=m},kd2E:function(e,t,n){"use strict";function i(e,t){return Object.prototype.hasOwnProperty.call(e,t)}e.exports=function(e,t,n,r){t=t||"&",n=n||"=";var o={};if("string"!=typeof e||0===e.length)return o;var l=/\+/g;e=e.split(t);var c=1e3;r&&"number"==typeof r.maxKeys&&(c=r.maxKeys);var m=e.length;c>0&&m>c&&(m=c);for(var d=0;d<m;++d){var s,p,h,g,u=e[d].replace(l,"%20"),f=u.indexOf(n);f>=0?(s=u.substr(0,f),p=u.substr(f+1)):(s=u,p=""),h=decodeURIComponent(s),g=decodeURIComponent(p),i(o,h)?a(o[h])?o[h].push(g):o[h]=[o[h],g]:o[h]=g}return o};var a=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},s4NR:function(e,t,n){"use strict";t.decode=t.parse=n("kd2E"),t.encode=t.stringify=n("4JlD")},thwc:function(e,t,n){e.exports=n.p+"static/webheader-01-b8af24cde635ca1069f743acde786a41.png"},xO44:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),r=n("qhky"),o=n("Wbzz"),l=(n("9eSz"),n("Jzpe")),c=n("thwc"),m=n.n(c),d=n("vOnD"),s=n("3Z9Z"),p=n("JI6e"),h=n("1Uvv"),g=n("irN4"),u=d.a.div.withConfig({displayName:"Feature__Container",componentId:"sc-cd69o5-0"})(["margin:auto;width:90%;padding:10vw 0 6rem 0;"]),f=d.a.div.withConfig({displayName:"Feature__Section",componentId:"sc-cd69o5-1"})(["  z-index:1000;width:fit-content;height:auto;color:#111;font-size:14px;padding:6px 10px 3px 10px;border-radius:20px;background-color:#DFDA00;margin-bottom:40px;text-transform:uppercase;",""],g.d),w=d.a.a.withConfig({displayName:"Feature__Heading",componentId:"sc-cd69o5-2"})(["width:fit-content;font-size:6vw;line-height 7vw;text-transform:uppercase;color:",";"," @media(max-width:768px){font-size:4rem;line-height 4.5rem;}&:hover{color:#DFDA00;}"],(function(e){var t=e.color;return void 0===t?"#DFDA00":t}),g.f),x=d.a.p.withConfig({displayName:"Feature__Subheading",componentId:"sc-cd69o5-3"})([""," color:#DFDA00;font-size:max(1.7vw,20px);margin-top:0.8rem;"],g.c),b=d.a.p.withConfig({displayName:"Feature__Author",componentId:"sc-cd69o5-4"})([""," color:#F8B3AE;text-transform:uppercase;font-size:max(1.8vw,23px);margin-top:0.8rem;"],g.d),v=d.a.div.withConfig({displayName:"Feature__ImageContainer",componentId:"sc-cd69o5-5"})(["position:relative;float:right;width:90%;height:100%;margin:0 1rem 0 5px;overflow:hidden;@media(max-width:768px){width:100%;}"]),E=function(e){var t=e.link,n=(e.heading,e.headline),i=e.subheading,r=e.author,o=e.img;return a.a.createElement(u,null,a.a.createElement(s.a,null,a.a.createElement(p.a,{sm:12,md:5,lg:5},a.a.createElement(f,null,"Letter from the Editor"),a.a.createElement(w,{color:"#DFDA00",href:t,target:"_blank"},n),a.a.createElement(x,null,i),a.a.createElement(b,null,"BY ",r)),a.a.createElement(p.a,{sm:12,md:7,lg:7},a.a.createElement(v,null,a.a.createElement(h.b,{link:t},a.a.createElement("img",{src:o,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",border:"1px solid #999"}}))))))},y=n("5loA"),_=d.a.div.withConfig({displayName:"InstagramSection__Container",componentId:"sc-1nrlo9s-0"})(["width:100%;padding-top:3rem;background-color:#05260D;"]),j=d.a.div.withConfig({displayName:"InstagramSection__VidFormat",componentId:"sc-1nrlo9s-1"})(["width:100%;margin:auto;padding-top:2rem;display:flex;flex-wrap:wrap;justify-content:center;iframe{max-width:none;}@media (max-width:768px){width:100%;padding:1rem 1rem 4rem;}"]),k=d.a.div.withConfig({displayName:"InstagramSection__HeadingWrapper",componentId:"sc-1nrlo9s-2"})(["width:100%;padding:1rem 0 0.4rem 0;margin:0 0 8rem 0;text-align:center;font-size:3rem;line-height 3rem;text-transform:uppercase;color:#111;background-color:#F8B3AE;white-space:nowrap;overflow:hidden;",""],g.d),I=d.a.div.withConfig({displayName:"InstagramSection__SubheadingWrapper",componentId:"sc-1nrlo9s-3"})(["  width:100%;height:100%;display:flex;justify-content:flex-end;align-items:center;@media (max-width:768px){justify-content:center;align-items:center;}"]),C=d.a.div.withConfig({displayName:"InstagramSection__Subheading",componentId:"sc-1nrlo9s-4"})(["  z-index:1000;height:auto;color:#DFDA00;font-size:min(32px,3vw);line-height:min(44px,3.5vw);width:85%;text-align:right;@media (max-width:768px){text-align:center;margin:0 0 3rem 0;font-size:21px;line-height:30px;}",""],g.c),A=function(e){var t=e.title,n=e.link,i=e.subhead;return a.a.createElement(_,null,a.a.createElement(k,null,t),a.a.createElement(s.a,{style:{margin:"0"}},a.a.createElement(p.a,{sm:12,md:6,lg:6},a.a.createElement(I,null,a.a.createElement(C,null,i))),a.a.createElement(p.a,{sm:12,md:5,lg:5},a.a.createElement(j,null,a.a.createElement(y.a,{url:n,clientAccessToken:"947756802416627|a36b8dffc1596399ee685a4677ebc2a2",maxWidth:400,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0})))))},F=d.a.div.withConfig({displayName:"shared__Heading",componentId:"sc-12dkme8-0"})(["width:fit-content;padding:0.5rem 1.2rem;margin:4rem auto 1.2rem;text-align:center;-webkit-text-stroke:1px #000;font-size:3rem;line-height 4rem;text-transform:uppercase;color:",";"," @media(max-width:992px){font-size:2.4rem;line-height 3rem;margin-top:3rem;}"],(function(e){var t=e.color;return void 0===t?"#283033":t}),g.c),N=(d.a.div.withConfig({displayName:"shared__Container",componentId:"sc-12dkme8-1"})(["border:1px solid #DDDDDD;position:relative;"]),d.a.div.withConfig({displayName:"shared__MajorSection",componentId:"sc-12dkme8-2"})(["  z-index:1000;width:100%;text-align:center;height:auto;color:#111;font-size:25px;margin-bottom:15px;",""],g.d)),S=d.a.div.withConfig({displayName:"shared__Section",componentId:"sc-12dkme8-3"})(["  z-index:1000;width:fit-content;height:auto;color:#111;font-size:14px;padding:6px 10px 3px 10px;border-radius:20px;background-color:#F8B3AE;margin-bottom:20px;",""],g.d),P=d.a.div.withConfig({displayName:"shared__MajorTitle",componentId:"sc-12dkme8-4"})(["  z-index:1000;width:100%;height:auto;text-align:center;color:#111;font-size:1.7vw;line-height:2.5vw;"," &:hover{color:#111;}"],g.c),z=d.a.a.withConfig({displayName:"shared__Title",componentId:"sc-12dkme8-5"})(["  z-index:1000;width:95%;height:auto;color:#DFDA00;font-size:1.7vw;line-height:2.5vw;"," @media (max-width:992px){font-size:3.3vw;line-height:4vw;}&:hover{color:#DFDA00;}"],g.c),D=(d.a.div.withConfig({displayName:"shared__Tag",componentId:"sc-12dkme8-6"})(["  z-index:1000;width:100%;height:auto;color:#FFFFFF;font-size:max(1.1vw,14px);line-height:max(1.1vw,14px);"," @media (max-width:768px){font-size:1em;}"],g.k),d.a.p.withConfig({displayName:"shared__Author",componentId:"sc-12dkme8-7"})([""," color:#DFDA00;text-transform:uppercase;font-size:14px;margin-top:0.8rem;@media (max-width:992px){margin-top:1.2rem;font-size:2.3vw;}"],g.d)),G=d.a.p.withConfig({displayName:"shared__MajorAuthor",componentId:"sc-12dkme8-8"})([""," width:100%;text-align:center;color:#111;text-transform:uppercase;font-size:14px;margin-top:1rem;"],g.d),O=(d.a.div.withConfig({displayName:"shared__BoldText",componentId:"sc-12dkme8-9"})(["font-size:1.7rem;"," text-align:center;margin:auto;max-width:75%;@media(max-width:992px){font-size:1rem;max-width:100%;padding:0 1rem;}"],g.i),d.a.div.withConfig({displayName:"shared__RegularText",componentId:"sc-12dkme8-10"})(["font-size:1.2rem;"," text-align:center;max-width:75%;margin:auto;padding:1.5rem 0;@media(max-width:768px){font-size:1rem;max-width:100%;padding:0.5rem 1rem;}"],g.j),d.a.div.withConfig({displayName:"ArticleGrid__Container",componentId:"sc-kz8sjs-0"})(["margin:auto;width:90%;@media(max-width:768px){width:90%}"])),R=d.a.div.withConfig({displayName:"ArticleGrid__ArticleContainer",componentId:"sc-kz8sjs-1"})(["display:flex;margin:1rem 0 0;height:22vw;width:auto;@media(max-width:992px){height:max(33vw,200px);margin:3.5vw 0 3.5vw 0;}"]),T=d.a.div.withConfig({displayName:"ArticleGrid__ImageContainer",componentId:"sc-kz8sjs-2"})(["position:relative;width:100%;height:100%;margin:0 5px 0 5px;overflow:hidden;"]),M=d.a.div.withConfig({displayName:"ArticleGrid__TextContainer",componentId:"sc-kz8sjs-3"})(["position:relative;padding:1.2rem;padding-top:1.6rem;width:100%;height:100%;margin:0 5px 0 5px;overflow:hidden;@media(max-width:992px){padding:5vw;}"]),B=d.a.div.withConfig({displayName:"ArticleGrid__ArticleSpacer",componentId:"sc-kz8sjs-4"})(["height:2.5rem;@media(max-width:992px){height:0px;}"]),U=function(e){var t=e.multimedia,n=e.title;return a.a.createElement(O,null,a.a.createElement(F,{color:"#DFDA00"},n),a.a.createElement(s.a,null,t.slice(0,2)&&t.slice(0,2).map((function(e){return a.a.createElement(p.a,{sm:12,md:12,lg:6},a.a.createElement(R,null,a.a.createElement(T,null,a.a.createElement(h.b,{link:e.published_link},a.a.createElement("img",{src:e.image,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",border:"1px solid #999"}}))),a.a.createElement(M,null,a.a.createElement(S,null,e.section),a.a.createElement(z,{style:{marginTop:"0rem"},href:e.published_link,target:"_blank"},e.title),a.a.createElement(D,{style:{marginBottom:"0rem"}},"BY ",e.author))))}))),a.a.createElement(B,null),a.a.createElement(s.a,null,t.slice(2,4)&&t.slice(2,4).map((function(e){return a.a.createElement(p.a,{sm:12,md:12,lg:6},a.a.createElement(R,null,a.a.createElement(T,null,a.a.createElement(h.b,{link:e.published_link},a.a.createElement("img",{src:e.image,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",border:"1px solid #999"}}))),a.a.createElement(M,null,a.a.createElement(S,null,e.section),a.a.createElement(z,{style:{marginTop:"0rem"},href:e.published_link,target:"_blank"},e.title),a.a.createElement(D,{style:{marginBottom:"0rem"}},"BY ",e.author))))}))))},L=d.a.div.withConfig({displayName:"ArticleGridMajorLeft__Container",componentId:"sc-3hnzgj-0"})(["margin:auto;width:90%;@media(max-width:768px){width:90%}"]),q=d.a.div.withConfig({displayName:"ArticleGridMajorLeft__ArticleContainer",componentId:"sc-3hnzgj-1"})(["display:flex;margin:2rem 0 0;height:22vw;width:auto;@media(max-width:992px){height:max(33vw,200px);margin:3.5vw 0 3.5vw 0;}"]),W=d.a.div.withConfig({displayName:"ArticleGridMajorLeft__ImageContainer",componentId:"sc-3hnzgj-2"})(["position:relative;width:100%;height:100%;margin:0 5px 0 5px;overflow:hidden;"]),Y=d.a.div.withConfig({displayName:"ArticleGridMajorLeft__MajorImageContainer",componentId:"sc-3hnzgj-3"})(["position:absolute;bottom:4rem;left:2rem;width:calc(100% - 4.5rem);height:59%;margin:20px 5px 0 5px;overflow:hidden;background-color:#f0f;"]),J=d.a.div.withConfig({displayName:"ArticleGridMajorLeft__TextContainer",componentId:"sc-3hnzgj-4"})(["position:relative;padding:1.2rem;padding-top:1.6rem;width:100%;height:100%;margin:0 5px 0 5px;overflow:hidden;@media(max-width:992px){padding:5vw;}"]),Q=d.a.div.withConfig({displayName:"ArticleGridMajorLeft__MajorArticleContainerSmall",componentId:"sc-3hnzgj-5"})(["width:100%;display:none;@media(max-width:992px){height:max(33vw,200px);margin:2.5vw 0 6.5vw 0;display:block;}"]),K=d.a.div.withConfig({displayName:"ArticleGridMajorLeft__MajorArticleContainerLarge",componentId:"sc-3hnzgj-6"})(["height:calc(66vw + 4rem);width:100%;margin:2rem 1rem 0;background-color:#F8B3AE;display:block;@media(max-width:992px){display:none;}"]),V=function(e){var t=e.multimedia,n=e.title;return a.a.createElement(L,null,a.a.createElement(F,{color:"#DFDA00"},n),a.a.createElement(s.a,null,a.a.createElement(p.a,{sm:12,md:12,lg:5},a.a.createElement(s.a,null,a.a.createElement(K,null,a.a.createElement(h.b,{link:t[0].published_link,style:{padding:"2rem"}},a.a.createElement("div",{style:{width:"100%",height:"100%",padding:"2rem"}},a.a.createElement(N,null,t[0].section),a.a.createElement(P,null,t[0].title),a.a.createElement(G,{style:{marginBottom:"0rem"}},"BY ",t[0].author),a.a.createElement(Y,null,a.a.createElement(h.b,{link:t[0].published_link},a.a.createElement("img",{src:t[0].image,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",border:"1px solid #999"}})))))),a.a.createElement(Q,null,a.a.createElement(q,null,a.a.createElement(W,null,a.a.createElement(h.b,{link:t[0].published_link},a.a.createElement("img",{src:t[0].image,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",border:"1px solid #999"}}))),a.a.createElement(J,null,a.a.createElement(S,null,t[0].section),a.a.createElement(z,{style:{marginTop:"0rem"},href:t[0].published_link,target:"_blank"},t[0].title),a.a.createElement(D,{style:{marginBottom:"0rem"}},"BY ",t[0].author)))))),a.a.createElement(p.a,{sm:12,md:12,lg:7},t.slice(1,4)&&t.slice(1,4).map((function(e){return a.a.createElement(s.a,null,a.a.createElement(q,null,a.a.createElement(W,null,a.a.createElement(h.b,{link:e.published_link},a.a.createElement("img",{src:e.image,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",border:"1px solid #999"}}))),a.a.createElement(J,null,a.a.createElement(S,null,e.section),a.a.createElement(z,{style:{marginTop:"0rem"},href:e.published_link,target:"_blank"},e.title),a.a.createElement(D,{style:{marginBottom:"0rem"}},"BY ",e.author))))})))))},H=d.a.div.withConfig({displayName:"ArticleGridMajorRight__Container",componentId:"sc-1wriffh-0"})(["margin:auto;width:90%;@media(max-width:768px){width:90%}"]),X=d.a.div.withConfig({displayName:"ArticleGridMajorRight__ArticleContainer",componentId:"sc-1wriffh-1"})(["display:flex;margin:2rem 0 0;height:22vw;width:auto;@media(max-width:992px){height:max(33vw,200px);margin:3.5vw 0 3.5vw 0;}"]),Z=d.a.div.withConfig({displayName:"ArticleGridMajorRight__ImageContainer",componentId:"sc-1wriffh-2"})(["position:relative;width:100%;height:100%;margin:0 5px 0 5px;overflow:hidden;"]),$=d.a.div.withConfig({displayName:"ArticleGridMajorRight__MajorImageContainer",componentId:"sc-1wriffh-3"})(["position:absolute;bottom:4rem;left:2rem;width:calc(100% - 4.5rem);height:59%;margin:20px 5px 0 5px;overflow:hidden;background-color:#f0f;"]),ee=d.a.div.withConfig({displayName:"ArticleGridMajorRight__TextContainer",componentId:"sc-1wriffh-4"})(["position:relative;padding:1.2rem;padding-top:1.6rem;width:100%;height:100%;margin:0 5px 0 5px;overflow:hidden;@media(max-width:992px){padding:5vw;}"]),te=d.a.div.withConfig({displayName:"ArticleGridMajorRight__MajorArticleContainerSmall",componentId:"sc-1wriffh-5"})(["width:100%;display:none;@media(max-width:992px){height:max(33vw,200px);margin:2.5vw 0 6.5vw 0;display:block;}"]),ne=d.a.div.withConfig({displayName:"ArticleGridMajorRight__MajorArticleContainerLarge",componentId:"sc-1wriffh-6"})(["height:calc(66vw + 4rem);width:100%;margin:2rem 1rem 0;background-color:#F8B3AE;display:block;@media(max-width:992px){display:none;}"]),ie=function(e){var t=e.multimedia,n=e.title;return a.a.createElement(H,null,a.a.createElement(F,{color:"#DFDA00"},n),a.a.createElement(s.a,null,a.a.createElement(p.a,{sm:12,md:12,lg:0},a.a.createElement(s.a,null,a.a.createElement(te,null,a.a.createElement(X,null,a.a.createElement(Z,null,a.a.createElement(h.b,{link:t[0].published_link},a.a.createElement("img",{src:t[0].image,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",border:"1px solid #999"}}))),a.a.createElement(ee,null,a.a.createElement(S,null,t[0].section),a.a.createElement(z,{style:{marginTop:"0rem"},href:t[0].published_link,target:"_blank"},t[0].title),a.a.createElement(D,{style:{marginBottom:"0rem"}},"BY ",t[0].author)))))),a.a.createElement(p.a,{sm:12,md:12,lg:7},t.slice(1,4)&&t.slice(1,4).map((function(e){return a.a.createElement(s.a,null,a.a.createElement(X,null,a.a.createElement(Z,null,a.a.createElement(h.b,{link:e.published_link},a.a.createElement("img",{src:e.image,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",border:"1px solid #999"}}))),a.a.createElement(ee,null,a.a.createElement(S,null,e.section),a.a.createElement(z,{style:{marginTop:"0rem"},href:e.published_link,target:"_blank"},e.title),a.a.createElement(D,{style:{marginBottom:"0rem"}},"BY ",e.author))))}))),a.a.createElement(p.a,{sm:12,md:12,lg:5},a.a.createElement(s.a,null,a.a.createElement(ne,null,a.a.createElement(h.b,{link:t[0].published_link,style:{padding:"2rem"}},a.a.createElement("div",{style:{width:"100%",height:"100%",padding:"2rem"}},a.a.createElement(N,null,t[0].section),a.a.createElement(P,null,t[0].title),a.a.createElement(G,{style:{marginBottom:"0rem"}},"BY ",t[0].author),a.a.createElement($,null,a.a.createElement(h.b,{link:t[0].published_link},a.a.createElement("img",{src:t[0].image,style:{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",border:"1px solid #999"}}))))))))))},ae={left:[{text:"FEATURE",link:"feature"},{text:"INSTAGRAM",link:"instagram"},{text:"FINDING OUR VOICE",link:"finding-our-voice"}],right:[{text:"FINDING OUR PLACE",link:"finding-our-place"},{text:"FINDING OUR POWER",link:"finding-our-power"},{text:"FINDING OURSELVES",link:"finding-ourselves"}]};t.default=function(){var e=Object(o.d)("1571102571").allFile.edges[0].node.childrenPennInterrupted2021Json[0],t=e.letter,n=e.instagram,i=e.finding_our_power,c=e.finding_our_place,d=e.finding_our_voice,s=e.finding_ourselves;return a.a.createElement(a.a.Fragment,null,a.a.createElement(r.a,null,a.a.createElement("meta",{charset:"utf-8"}),a.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),a.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.a.createElement("meta",{name:"description",content:"Pandemic, Protest, and Philly: Returning and Remembering in 2021"}),a.a.createElement("title",null,"Penn, Interrupted | 34th Street"),a.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"}),a.a.createElement("meta",{property:"og:title",content:"Penn, Interrupted | 34th Street"}),a.a.createElement("meta",{property:"og:image",content:"https://snworksceo.imgix.net/dpn/1becac24-f565-447b-b482-a1a7c388fa45.sized-1000x1000.png?"}),a.a.createElement("meta",{property:"og:description",content:"Pandemic, Protest, and Philly: Returning and Remembering in 2021"}),a.a.createElement("meta",{property:"og:type",content:"article"}),a.a.createElement("meta",{property:"og:url",content:"https://projects.34st.com/2021/penn-interrupted"}),a.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.a.createElement("meta",{name:"twitter:title",content:"Penn, Interrupted | 34th Street"}),a.a.createElement("meta",{name:"twitter:image",content:"https://snworksceo.imgix.net/dpn/1becac24-f565-447b-b482-a1a7c388fa45.sized-1000x1000.png?"}),a.a.createElement("meta",{name:"twitter:description",content:"Pandemic, Protest, and Philly: Returning and Remembering in 2021"}),a.a.createElement("meta",{name:"twitter:url",content:"https://projects.34st.com/2021/penn-interrupted"}),a.a.createElement("meta",{name:"twitter:site",content:"@dailypenn"}),a.a.createElement("script",{src:"https://code.jquery.com/jquery-3.2.1.slim.min.js",integrity:"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",crossOrigin:"anonymous"}),a.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",integrity:"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",crossOrigin:"anonymous"}),a.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",integrity:"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",crossOrigin:"anonymous"})),a.a.createElement(l.a,{color:"#05260D"},a.a.createElement(l.c,{titles:ae,bgColor:"#FFFFFF",fontColor:"#000000",img:"/img/34st-navbar-logo-white.png"}),a.a.createElement("div",null,a.a.createElement("img",{src:m.a,style:{width:"100%",boxShadow:"0px 5px 6px #00000029"}})),a.a.createElement("div",{id:"feature"}),a.a.createElement(E,{link:t[0].published_link,headline:t[0].title,subheading:t[0].subhead,author:t[0].author,img:t[0].image_link}),a.a.createElement("div",{id:"instagram"}),a.a.createElement(A,{title:"IG @34stmag - IG @34stmag - IG @34stmag - IG @34stmag - IG @34stmag - IG @34stmag -  IG @34stmag - IG @34stmag - IG @34stmag - IG @34stmag - IG @34stmag - IG @34stmag - ",link:n[0].published_link,subhead:n[0].subhead}),a.a.createElement("div",{id:"finding-our-voice"}),a.a.createElement(V,{multimedia:d,title:"Finding our Voice"}),a.a.createElement("div",{id:"finding-our-place"}),a.a.createElement(U,{multimedia:c,title:"Finding our Place"}),a.a.createElement("div",{id:"finding-our-power"}),a.a.createElement(ie,{multimedia:i,title:"Finding our Power"}),a.a.createElement("div",{id:"finding-ourselves"}),a.a.createElement(U,{multimedia:s,title:"Finding Ourselves"}),a.a.createElement(l.d,{height:"5rem"}),a.a.createElement(l.b,{emoji:"✊",bgColor:"#FFF",fontColor:"#000",year:"2021"})))}}}]);
//# sourceMappingURL=component---src-pages-2021-penn-interrupted-js-e603107ab872b96da1b5.js.map