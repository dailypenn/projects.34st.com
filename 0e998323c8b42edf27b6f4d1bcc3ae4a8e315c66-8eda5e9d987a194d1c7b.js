/*! For license information please see 0e998323c8b42edf27b6f4d1bcc3ae4a8e315c66-8eda5e9d987a194d1c7b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1Uvv":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l}));var n=a("q1tI"),r=a.n(n),i=a("vOnD"),o=(i.a.a.withConfig({displayName:"Typography__StyledLink",componentId:"sc-tu2nmk-0"})(["color:#000000 !important;text-decoration:none !important;"]),i.a.text.withConfig({displayName:"Typography__NavText",componentId:"sc-tu2nmk-1"})(["font-size:80%;font-family:'Libre Franklin',sans-serif;color:",";transition:0.3s;:hover{color:#B5B4B4;transition:0.3s;}"],(function(e){var t=e.color;return void 0===t?"#283033":t}))),s=i.a.a.withConfig({displayName:"Typography__StyledAnchorWrapper",componentId:"sc-tu2nmk-2"})(["color:#000000 !important;text-decoration:none !important;"]),l=function(e){var t=e.link,a=e.children;return r.a.createElement(s,{href:t,target:"_blank",rel:"noreferrer"},a)}},"3Z9Z":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),i=a("TSYQ"),o=a.n(i),s=a("q1tI"),l=a.n(s),d=a("vUet"),c=["bsPrefix","className","noGutters","as"],f=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.noGutters,u=e.as,m=void 0===u?"div":u,p=Object(r.a)(e,c),g=Object(d.a)(a,"row"),h=g+"-cols",v=[];return f.forEach((function(e){var t,a=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&v.push(""+h+n+"-"+t)})),l.a.createElement(m,Object(n.a)({ref:t},p,{className:o.a.apply(void 0,[i,g,s&&"no-gutters"].concat(v))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},"9eSz":function(e,t,a){"use strict";var n=a("TqRt");t.__esModule=!0,t.default=void 0;var r,i=n(a("PJYZ")),o=n(a("VbXa")),s=n(a("8OQS")),l=n(a("pVnL")),d=n(a("q1tI")),c=n(a("17x9")),f=function(e){var t=(0,l.default)({},e),a=t.resolutions,n=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},u=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,n=p(t||a||[]);return n&&n.src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(u);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=f(e),a=m(t);return g[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,w=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},n&&d.default.createElement("source",{type:"image/webp",media:r,srcSet:n,sizes:i}),a&&d.default.createElement("source",{media:r,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:n})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:n})}))}function k(e,t){var a=e.srcSet,n=e.srcSetWebp,r=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?n:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+d+o+s+a+n+t+i+r+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=d.default.forwardRef((function(e,t){var a=e.src,n=e.imageVariants,r=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(z,(0,l.default)({ref:t,src:a},i,{ariaHidden:o}));return n.length>1?d.default.createElement("picture",null,r(n),s):s})),z=d.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,o=e.onLoad,c=e.onError,f=e.loading,u=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:n,src:r},p,{onLoad:o,onError:c,ref:t,loading:f,draggable:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,u=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,S=e.loading,k=e.draggable,I=g||h;if(!I)return null;var O=!1===this.state.fadeIn||this.state.imgLoaded,F=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:O?1:0,transition:F?"opacity "+b+"ms":"none"},s),_="boolean"==typeof v?"lightgray":v,j={transitionDelay:b+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},F&&j,s,u),P={title:t,alt:this.state.isVisible?"":a,style:T,className:m,itemProp:w},V=this.state.isHydrated?p(I):I[0];if(g)return d.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:V.maxWidth?V.maxWidth+"px":null,maxHeight:V.maxHeight?V.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(V.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/V.aspectRatio+"%"}}),_&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},F&&j)}),V.base64&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:P,imageVariants:I,generateSources:N}),V.tracedSVG&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:P,imageVariants:I,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,x(I),d.default.createElement(z,{alt:a,title:t,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:S},V,{imageVariants:I}))}}));if(h){var q=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},i);return"inherit"===i.display&&delete q.display,d.default.createElement(y,{className:(n||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},_&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:_,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},F&&j)}),V.base64&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:V.base64,spreadProps:P,imageVariants:I,generateSources:N}),V.tracedSVG&&d.default.createElement(C,{ariaHidden:!0,ref:this.placeholderRef,src:V.tracedSVG,spreadProps:P,imageVariants:I,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,x(I),d.default.createElement(z,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:k})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:S},V,{imageVariants:I}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var F=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function _(e){return function(t,a,n){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+n+"`, but their values are both `undefined`.");c.default.checkPropTypes(((r={})[a]=e,r),t,"prop",n)}}O.propTypes={resolutions:F,sizes:R,fixed:_(c.default.oneOfType([F,c.default.arrayOf(F)])),fluid:_(c.default.oneOfType([R,c.default.arrayOf(R)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var j=O;t.default=j},JI6e:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),i=a("TSYQ"),o=a.n(i),s=a("q1tI"),l=a.n(s),d=a("vUet"),c=["bsPrefix","className","as"],f=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.as,u=void 0===s?"div":s,m=Object(r.a)(e,c),p=Object(d.a)(a,"col"),g=[],h=[];return f.forEach((function(e){var t,a,n,r=m[e];if(delete m[e],"object"==typeof r&&null!=r){var i=r.span;t=void 0===i||i,a=r.offset,n=r.order}else t=r;var o="xs"!==e?"-"+e:"";t&&g.push(!0===t?""+p+o:""+p+o+"-"+t),null!=n&&h.push("order"+o+"-"+n),null!=a&&h.push("offset"+o+"-"+a)})),g.length||g.push(p),l.a.createElement(u,Object(n.a)({},m,{ref:t,className:o.a.apply(void 0,[i].concat(g,h))}))}));u.displayName="Col",t.a=u},Jzpe:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return g})),a.d(t,"e",(function(){return c.b})),a.d(t,"a",(function(){return h})),a.d(t,"d",(function(){return v}));var n=a("q1tI"),r=a.n(n),i=a("vOnD"),o=a("irN4"),s=i.a.div.withConfig({displayName:"Footer__Credit",componentId:"sc-1j7yllt-0"})(["color:",";"," padding:1rem;font-size:80%;text-align:center;background-color:",";a{color:white;text-decoration:none !important;:hover{color:#B5B4B4;transition:0.3s;}}"],(function(e){var t=e.fontColor;return void 0===t?"#000000":t}),(function(e){var t=e.font;return void 0===t?o.l:t}),(function(e){var t=e.bgColor;return void 0===t?"#FFFFFF":t})),l=function(e){var t=e.font,a=e.emoji,n=void 0===a?"💖":a,i=e.bgColor,o=e.fontColor,l=e.year,d=void 0===l?"2021":l;return r.a.createElement(s,{font:t,bgColor:i,fontColor:o},"Made with ",r.a.createElement("span",{role:"img"}," ",n," ")," by The Daily Pennsylvanian Web Department © ",d,". All rights reserved.")},d=a("Wbzz"),c=a("1Uvv"),f=i.a.img.withConfig({displayName:"Navbar__Image",componentId:"sc-jz2kbo-0"})(["max-height:45px;@media (max-width:768px){max-height:30px;}"]),u=i.a.ul.withConfig({displayName:"Navbar__LeftUL",componentId:"sc-jz2kbo-1"})(["margin-right:1rem;@media (max-width:768px){margin-right:0;}"]),m=i.a.ul.withConfig({displayName:"Navbar__RightUL",componentId:"sc-jz2kbo-2"})(["margin-left:1rem;@media (max-width:768px){margin-left:0;}"]),p=function(e){var t=e.link,a=e.children;return t.includes("http")?r.a.createElement("a",{href:t,className:"nav-link",target:"_blank"},a):r.a.createElement(d.a,{to:"#"+t,className:"nav-link",target:"_blank"},a)},g=function(e){var t=e.titles,a=e.font,n=e.bgColor,i=void 0===n?"#FFFFFF":n,o=e.fontColor,s=void 0===o?"#283033":o,l=e.img,d=void 0===l?"/img/DP-Logo-Full.png":l,g=t.left,h=t.right;return r.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg",style:{fontFamily:"Libre Franklin",backgroundColor:i,color:s,boxShadow:"0px 5px 6px #00000029",opacity:1}},r.a.createElement("div",{className:"navbar-collapse w-100 dual-collapse2 order-1 order-md-0 collapse"},r.a.createElement(u,{className:"navbar-nav ml-auto text-center"},g.map((function(e){var t=e.text,n=e.link;return r.a.createElement("li",{className:"nav-item"},r.a.createElement(p,{link:n},r.a.createElement(c.a,{font:a,color:s},t)))})))),r.a.createElement("div",{className:"mx-auto my-2 order-0 order-md-1 position-relative",style:{textAlign:"center"}},r.a.createElement("a",{className:"mx-auto",href:"https://www.34st.com/"},r.a.createElement(f,{src:d,className:"img-fluid"})),r.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":".dual-collapse2","aria-expanded":"false"},r.a.createElement("span",{className:"navbar-toggler-icon"},"#FFFFFF"===i?r.a.createElement("img",{src:"/icons/menu.svg",style:{transform:"translate(0, 0.2rem)"}}):r.a.createElement("img",{src:"/icons/menu-white.svg",style:{transform:"translate(0, 0.2rem)"}})))),r.a.createElement("div",{className:"navbar-collapse w-100 dual-collapse2 order-2 order-md-2 collapse"},r.a.createElement(m,{className:"navbar-nav mr-auto text-center"},h.map((function(e){var t=e.text,n=e.link;return r.a.createElement("li",{className:"nav-item"},r.a.createElement(p,{link:n},r.a.createElement(c.a,{font:a,color:s},t)))})))))},h=i.a.div.withConfig({displayName:"Wrapper__BackgroundWrapper",componentId:"sc-9prgp9-0"})(["background-color:",";"],(function(e){return e.color})),v=(a("oBxG"),i.a.div.withConfig({displayName:"Spacer",componentId:"sc-pagve-0"})(["background-color:rgba(0,0,0,0);height:",";width:100%;"],(function(e){return e.height})))},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var o=r.apply(null,n);o&&e.push(o)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var s in n)a.call(n,s)&&n[s]&&e.push(s);else e.push(n.toString())}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},irN4:function(e,t,a){"use strict";a.d(t,"i",(function(){return n})),a.d(t,"l",(function(){return r})),a.d(t,"k",(function(){return i})),a.d(t,"j",(function(){return o})),a.d(t,"m",(function(){return s})),a.d(t,"e",(function(){return l})),a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return f})),a.d(t,"d",(function(){return u})),a.d(t,"q",(function(){return m})),a.d(t,"g",(function(){return p})),a.d(t,"h",(function(){return g})),a.d(t,"p",(function(){return h})),a.d(t,"o",(function(){return v})),a.d(t,"n",(function(){return b})),a.d(t,"r",(function(){return y})),a.d(t,"f",(function(){return w})),a.d(t,"s",(function(){return x}));var n="\n  font-family: 'Funkturm';\n  font-weight: 400;\n",r="\n  font-family: 'Futura-PT', sans-serif;\n  font-weight: 200;\n",i="\n  font-family: 'Futura-PT', sans-serif;\n  font-weight: 500;\n",o="\n  font-family: 'Futura-PT', sans-serif;\n  font-weight: 700;\n",s="\n  font-family: 'Libre Franklin', sans-serif;\n  font-weight: 500;\n",l="\n  font-family: 'BN Chester', sans-serif;\n  font-weight: 400;\n",d="\n  font-family: 'Agrandir-GrandLight', sans-serif;\n  font-weight: 400;\n",c="\n  font-family: 'Agrandir-GrandHeavy', sans-serif;\n  font-weight: 400;\n",f="\n  font-family: 'Agrandir-Regular', sans-serif;\n  font-weight: 400;\n",u="\n  font-family: 'Agrandir-TextBold', sans-serif;\n  font-weight: 400;\n",m="\n  font-family: 'Magilio-Regular', sans-serif;\n  font-weight: 400;\n",p="\n  font-family: 'Derivia-Regular', sans-serif;\n  font-weight: 400;\n",g="\n  font-family: 'DM Serif Display', sans-serif;\n  font-weight: 700;\n",h="\n  font-family: 'Lora', sans-serif;\n  font-weight: 400;\n",v="\n  font-family: 'Lora', sans-serif;\n  font-weight: 500;\n",b="\n  font-family: 'Lora', sans-serif;\n  font-weight: 600;\n",y="\n  font-family: 'Martel', sans-serif;\n  font-weight: 200;\n",w="\n  font-family: 'Cooper-Nouveau', sans-serif;\n  font-weight: 400;\n",x="\n  font-family: 'peachy-keen-jf', sans-serif;\n  font-weight: 400;\n"},oBxG:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("vOnD"),o=a("irN4"),s=a("Jzpe"),l=i.a.div.withConfig({displayName:"Feature__Background",componentId:"sc-q52x6w-0"})(["background-color:rgba(0,0,0,.4);background-blend-mode:multiply;background-image:url(",");width:100%;padding:3rem;background-size:cover;@media(max-width:768px){padding:3rem 2rem;}"],(function(e){return e.img})),d=i.a.div.withConfig({displayName:"Feature__FeatureHeading",componentId:"sc-q52x6w-1"})(["font-size:1.7rem;text-transform:uppercase;border:2px solid white;width:fit-content;color:white;padding:.4rem .4rem 0 .4rem;",""],o.d),c=i.a.div.withConfig({displayName:"Feature__FeatureHeadline",componentId:"sc-q52x6w-2"})(["font-size:4.3rem;line-height:4.4rem;color:white;padding:20rem 0 1rem 0;width:70%;"," @media(max-width:768px){font-size:3rem;line-height:3.8rem;width:100%;padding-top:5rem;}"],o.a),f=i.a.div.withConfig({displayName:"Feature__FeatureSubHeading",componentId:"sc-q52x6w-3"})(["font-size:1.5rem;color:white;line-height:1.6rem;"," width:41%;margin-top:2rem;@media(max-width:768px){font-size:1.5rem;line-height:2rem;width:100%;}"],o.k),u=i.a.div.withConfig({displayName:"Feature__Author",componentId:"sc-q52x6w-4"})(["font-size:1.6rem;text-transform:uppercase;color:white;width:fit-content;margin:auto;text-align:center;margin-top:2.5rem;"," @media(max-width:768px){font-size:1.5rem;width:100%;}"],o.d);t.a=function(e){var t=e.link,a=e.heading,n=e.headline,i=e.subheading,o=e.author,m=e.img;return r.a.createElement(l,{img:m},r.a.createElement(s.e,{link:t},r.a.createElement(d,null,a),r.a.createElement(c,null,n),r.a.createElement(f,null,i),r.a.createElement(u,null,"BY ",o)))}},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("wx14");var n=a("q1tI"),r=a.n(n),i=r.a.createContext({});i.Consumer,i.Provider;function o(e,t){var a=Object(n.useContext)(i);return e||a[t]||t}},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=0e998323c8b42edf27b6f4d1bcc3ae4a8e315c66-8eda5e9d987a194d1c7b.js.map