(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5loA":function(e,t,n){"use strict";var r,i=n("q1tI"),a=n("Ut80"),o=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return(c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n},s=function(e){function t(t){var n=e.call(this,t)||this;return n.request=null,n.cancel=function(){n.request&&n.request.cancel()},n.handleFetchSuccess=function(e){n.props.onSuccess&&n.props.onSuccess(e),n.setState({html:e.html},(function(){window.instgrm.Embeds.process(),n.props.onAfterRender&&n.props.onAfterRender()}))},n.handleFetchFailure=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];clearTimeout(n.timer),n.props.onFailure&&n.props.onFailure(e)},n.createRequestPromise=function(e){var t={};return t.promise=new Promise((function(n,r){var i=fetch(e).then((function(e){return e.json()})).then((function(e){return n(e)})).catch((function(e){return r(e)}));return t.cancel=function(){return r(new Error("Cancelled"))},i})),t},n.state={html:null},n}return o(t,e),t.prototype.componentDidMount=function(){var e=this;window.instgrm?this.fetchEmbed(this.getQueryParams(this.props)):(this.props.injectScript&&!document.getElementById("react-instagram-embed-script")&&this.injectScript(),this.checkAPI().then((function(){e.fetchEmbed(e.getQueryParams(e.props))})))},t.prototype.componentDidUpdate=function(e){var t=this.props,n=t.url,r=t.hideCaption,i=t.maxWidth,a=t.containerTagName;e.url===n&&e.hideCaption===r&&e.maxWidth===i&&e.containerTagName===a||(this.request.cancel(),this.fetchEmbed(this.getQueryParams(this.props)))},t.prototype.componentWillUnmount=function(){this.cancel()},t.prototype.render=function(){var e=this.props.containerTagName;return i.createElement(e,c({},this.omitComponentProps(),{dangerouslySetInnerHTML:{__html:this.state.html||""}}))},t.prototype.fetchEmbed=function(e){this.request=this.createRequestPromise("https://graph.facebook.com/v8.0/instagram_oembed/?"+e),this.props.onLoading&&this.props.onLoading(),this.request.promise.then(this.handleFetchSuccess).catch(this.handleFetchFailure)},t.prototype.omitComponentProps=function(){var e=this.props;e.url,e.clientAccessToken,e.hideCaption,e.maxWidth,e.containerTagName,e.onLoading,e.onSuccess,e.onAfterRender,e.onFailure,e.protocol,e.injectScript;return m(e,["url","clientAccessToken","hideCaption","maxWidth","containerTagName","onLoading","onSuccess","onAfterRender","onFailure","protocol","injectScript"])},t.prototype.injectScript=function(){var e=0===window.location.protocol.indexOf("file")?this.props.protocol:"",t=document.createElement("script");t.async=t.defer=!0,t.src=e+"//platform.instagram.com/en_US/embeds.js",t.id="react-instagram-embed-script";var n=document.body;n&&n.appendChild(t)},t.prototype.checkAPI=function(){var e=this;return new Promise((function(t){!function e(n){n.timer=window.setTimeout((function(){window.instgrm?(clearTimeout(n.timer),t()):e(n)}),20)}(e)}))},t.prototype.getQueryParams=function(e){var t=e.url,n=e.clientAccessToken,r=e.hideCaption,i=e.maxWidth;return a.stringify({url:t,access_token:n,hidecaption:r,maxwidth:"number"==typeof i&&i>=320?i:void 0,omitscript:!0})},t.defaultProps={hideCaption:!1,containerTagName:"div",protocol:"https:",injectScript:!0},t}(i.PureComponent);t.a=s},"5qsJ":function(e,t,n){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},"8jRI":function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),i=new RegExp("(%[a-f0-9]{2})+","gi");function a(e,t){try{return decodeURIComponent(e.join(""))}catch(i){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],a(n),a(r))}function o(e){try{return decodeURIComponent(e)}catch(i){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=a(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var n={"%FE%FF":"��","%FF%FE":"��"},r=i.exec(e);r;){try{n[r[0]]=decodeURIComponent(r[0])}catch(t){var a=o(r[0]);a!==r[0]&&(n[r[0]]=a)}r=i.exec(e)}n["%C2"]="�";for(var c=Object.keys(n),m=0;m<c.length;m++){var s=c[m];e=e.replace(new RegExp(s,"g"),n[s])}return e}(e)}}},Ut80:function(e,t,n){"use strict";var r=n("5qsJ"),i=n("YVoz"),a=n("8jRI");function o(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function c(e){var t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function m(e,t){var n=function(e){var t;switch(e.arrayFormat){case"index":return function(e,n,r){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return function(e,n,r){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return function(e,t,n){void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=i({arrayFormat:"none"},t)),r=Object.create(null);return"string"!=typeof e?r:(e=e.trim().replace(/^[?#&]/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),i=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:a(o),n(a(i),o,r)})),Object.keys(r).sort().reduce((function(e,t){var n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(n):e[t]=n,e}),Object.create(null))):r}t.extract=c,t.parse=m,t.stringify=function(e,t){!1===(t=i({encode:!0,strict:!0,arrayFormat:"none"},t)).sort&&(t.sort=function(){});var n=function(e){switch(e.arrayFormat){case"index":return function(t,n,r){return null===n?[o(t,e),"[",r,"]"].join(""):[o(t,e),"[",o(r,e),"]=",o(n,e)].join("")};case"bracket":return function(t,n){return null===n?o(t,e):[o(t,e),"[]=",o(n,e)].join("")};default:return function(t,n){return null===n?o(t,e):[o(t,e),"=",o(n,e)].join("")}}}(t);return e?Object.keys(e).sort(t.sort).map((function(r){var i=e[r];if(void 0===i)return"";if(null===i)return o(r,t);if(Array.isArray(i)){var a=[];return i.slice().forEach((function(e){void 0!==e&&a.push(n(r,e,a.length))})),a.join("&")}return o(r,t)+"="+o(i,t)})).filter((function(e){return e.length>0})).join("&"):""},t.parseUrl=function(e,t){return{url:e.split("?")[0]||"",query:m(c(e),t)}}},oZUr:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),i=n.n(r),a=n("qhky"),o=n("Wbzz"),c=n("9eSz"),m=n.n(c),s=n("Jzpe"),l=n("vi++"),p=n.n(l),d=n("oBxG"),u=n("vOnD"),h=n("3Z9Z"),f=n("JI6e"),g=n("5loA"),y=n("irN4"),E=u.a.div.withConfig({displayName:"shared__Heading",componentId:"sc-4o6dm8-0"})(["width:fit-content;padding:.5rem 1.2rem;margin:4rem auto 0.2rem;text-align:center;text-transform:uppercase;-webkit-text-stroke:1.5px #573A78;font-size:3rem;line-height 4rem;color:",";"," @media(max-width:768px){font-size:3rem;line-height 3rem;margin-top:4rem;}"],(function(e){var t=e.color;return void 0===t?"#283033":t}),y.a),x=(u.a.div.withConfig({displayName:"shared__Container",componentId:"sc-4o6dm8-1"})(["border:1px solid #DDDDDD;position:relative;"]),u.a.div.withConfig({displayName:"shared__Title",componentId:"sc-4o6dm8-2"})(["  float:left;position:absolute;left:10px;top:30px;z-index:1000;width:95%;height:auto;color:#FFFFFF;font-size:1.5vw;"," padding-left:1rem;padding-top:0.5rem;padding-right:1rem;@media (max-width:768px){font-size:1em;}"],y.b)),v=u.a.div.withConfig({displayName:"shared__Tag",componentId:"sc-4o6dm8-3"})(["  float:left;position:absolute;left:10px;bottom:30px;z-index:1000;width:100%;height:auto;color:#FFFFFF;font-size:1.15vw;line-height:13px;"," padding-left:1rem;padding-top:0.5rem;padding-right:1rem;@media (max-width:768px){font-size:1em;}"],y.h),w=u.a.p.withConfig({displayName:"shared__Author",componentId:"sc-4o6dm8-4"})([""," text-transform:uppercase;font-size:1.1vw;@media (max-width:768px){font-size:1em;}margin-top:2rem;margin-bottom:.25rem;"],y.h),b=(u.a.div.withConfig({displayName:"shared__BoldText",componentId:"sc-4o6dm8-5"})(["font-size:1.7rem;"," text-align:center;margin:auto;max-width:75%;@media(max-width:768px){font-size:1rem;max-width:100%;padding:0 1rem;}"],y.f),u.a.div.withConfig({displayName:"shared__RegularText",componentId:"sc-4o6dm8-6"})(["font-size:1.2rem;"," text-align:center;max-width:75%;margin:auto;padding:1.5rem 0;@media(max-width:768px){font-size:1rem;max-width:100%;padding:0.5rem 1rem;}"],y.g),u.a.div.withConfig({displayName:"InstagramSection__Container",componentId:"sc-72jpns-0"})(["width:100%;padding:0.5rem 2rem 2rem 2rem;background-color:#DDFAF7;@media(max-width:768px){padding:3rem 2rem;}"])),j=u.a.div.withConfig({displayName:"InstagramSection__VidFormat",componentId:"sc-72jpns-1"})(["width:100%;margin:auto;padding-top:2rem;display:flex;flex-wrap:wrap;justify-content:center;iframe{max-width:none;}@media (max-width:768px){width:100%;padding:1rem 1rem 4rem;}"]),F=function(e){var t=e.title,n=e.links;return i.a.createElement(b,null,i.a.createElement(E,{color:"#FDB6B0"},t),i.a.createElement(h.a,{style:{marginBottom:"3rem"}},n&&n.map((function(e){return i.a.createElement(f.a,{sm:12,md:6,lg:4},i.a.createElement(j,null,i.a.createElement(g.a,{url:e.link,clientAccessToken:"947756802416627|a36b8dffc1596399ee685a4677ebc2a2",maxWidth:400,hideCaption:!1,containerTagName:"div",protocol:"",injectScript:!0})))}))))},k=n("1Uvv"),C=u.a.div.withConfig({displayName:"ArticleGrid__ImageContainer",componentId:"sc-1jkkyh8-0"})(["margin:auto;width:85%;max-width:768px;@media(max-width:768px){width:90%}"]),I=u.a.div.withConfig({displayName:"ArticleGrid__Container",componentId:"sc-1jkkyh8-1"})(["margin:2rem 0rem 0rem;position:relative;@media(max-width:768px){}"]),_=function(e){var t=e.multimedia,n=e.title;return i.a.createElement(C,null,i.a.createElement(E,{color:"#FFD1C0"},n),i.a.createElement(h.a,null,i.a.createElement(f.a,{sm:12,md:6,lg:6},t.slice(0,2)&&t.slice(0,2).map((function(e){return i.a.createElement(k.b,{link:e.link},i.a.createElement(I,null,i.a.createElement(x,null,i.a.createElement("h5",{style:{marginTop:"0.5rem"}},e.title)),i.a.createElement(v,null,i.a.createElement("p",null,e.subhead),i.a.createElement(w,null,"BY ",e.author)),i.a.createElement(m.a,{fluid:e.img.childImageSharp.fluid,style:{boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",filter:"brightness(60%)"}})))}))),i.a.createElement(f.a,{sm:12,md:6,lg:6},t.slice(2,4)&&t.slice(2,4).map((function(e){return i.a.createElement(k.b,{link:e.link},i.a.createElement(I,null,i.a.createElement(x,null,i.a.createElement("h5",{style:{marginBottom:"0.2rem"}},e.title)),i.a.createElement(v,null,i.a.createElement("p",null,e.subhead),i.a.createElement(w,{style:{marginBottom:"0.6rem"}},"BY ",e.author)),i.a.createElement(m.a,{fluid:e.img.childImageSharp.fluid,style:{boxShadow:"0 8px 16px 0 rgba(0,0,0,0.2)",filter:"brightness(60%)"}})))})))))},S={left:[{text:"FEATURE",link:"feature"},{text:"MULTIMEDIA",link:"multimedia"},{text:"PHOTO ESSAY",link:"photo-essay"}],right:[{text:"IN THE KITCHEN",link:"in-the-kitchen"},{text:"ON THE TABLE",link:"on-the-table"},{text:"THE 'SERVICE' INDUSTRY",link:"the-service-industry"}]};t.default=function(){var e=Object(o.d)("3491102778").allFile.edges[0].node.childrenDiningGuideSpring2021Json[0],t=e.feature,n=e.instagram,r=e.photo_essay,c=e.in_the_kitchen,m=e.on_the_table,l=e.the_service_industry;return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,null,i.a.createElement("meta",{charset:"utf-8"}),i.a.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),i.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),i.a.createElement("meta",{name:"description",content:"Dining Guide"}),i.a.createElement("title",null,"Dining Guide Spring 2021 | 34th Street"),i.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"}),i.a.createElement("meta",{property:"og:title",content:"Reality Bites: Street's Spring 2021 Dining Guide"}),i.a.createElement("meta",{property:"og:image",content:"https://snworksceo.imgix.net/dpn/79644a53-b06e-4385-a294-969556c6c677.sized-1000x1000.png"}),i.a.createElement("meta",{property:"og:description",content:"How COVID-19 shook up the food industry"}),i.a.createElement("meta",{property:"og:type",content:"article"}),i.a.createElement("meta",{property:"og:url",content:"https://projects.34st.com/2021/dining-guide-spring"}),i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:title",content:"Reality Bites: Street's Spring 2021 Dining Guide"}),i.a.createElement("meta",{name:"twitter:image",content:"https://snworksceo.imgix.net/dpn/79644a53-b06e-4385-a294-969556c6c677.sized-1000x1000.png"}),i.a.createElement("meta",{name:"twitter:description",content:"How COVID-19 shook up the food industry"}),i.a.createElement("meta",{name:"twitter:url",content:"https://projects.34st.com/2021/dining-guide-spring"}),i.a.createElement("meta",{name:"twitter:site",content:"@dailypenn"}),i.a.createElement("script",{src:"https://code.jquery.com/jquery-3.2.1.slim.min.js",integrity:"sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",crossOrigin:"anonymous"}),i.a.createElement("script",{src:"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",integrity:"sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q",crossOrigin:"anonymous"}),i.a.createElement("script",{src:"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",integrity:"sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",crossOrigin:"anonymous"})),i.a.createElement(s.a,{color:"#D0FDF8"},i.a.createElement(s.c,{titles:S,bgColor:"#FFFFFF",fontColor:"#000000",img:"/img/34st-navbar-logo-white.png"}),i.a.createElement("div",null,i.a.createElement("img",{src:p.a,style:{width:"100%",boxShadow:"0px 5px 6px #00000029"}})),i.a.createElement("div",{id:"feature"}),i.a.createElement(d.a,{link:t[0].link,heading:t[0].heading,headline:t[0].headline,subheading:t[0].subheading,author:t[0].author,img:t[0].img}),i.a.createElement("div",{id:"multimedia"}),i.a.createElement(F,{title:"IG: @34stmag",links:n}),i.a.createElement("div",{id:"photo-essay"}),i.a.createElement(d.a,{link:r[0].link,heading:r[0].heading,headline:r[0].headline,subheading:r[0].subheading,author:r[0].author,img:r[0].img}),i.a.createElement("div",{id:"in-the-kitchen"}),i.a.createElement(_,{multimedia:c,title:"In The Kitchen"}),i.a.createElement("div",{id:"on-the-table"}),i.a.createElement(_,{multimedia:m,title:"On The Table"}),i.a.createElement("div",{id:"the-service-industry"}),i.a.createElement(_,{multimedia:l,title:"The 'Service' Industry"}),i.a.createElement(s.d,{height:"5rem"}),i.a.createElement(s.b,{emoji:"🍳",bgColor:"#FFF",fontColor:"#000",year:"2021"})))}},"vi++":function(e,t,n){e.exports=n.p+"static/cover_img-de5ee31e4a573baccbdecffbe2786dbb.png"}}]);
//# sourceMappingURL=component---src-pages-2021-dining-guide-spring-js-9dc488b05dec8c7c8589.js.map