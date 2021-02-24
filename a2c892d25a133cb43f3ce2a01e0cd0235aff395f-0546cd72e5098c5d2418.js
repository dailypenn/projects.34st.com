/*! For license information please see a2c892d25a133cb43f3ce2a01e0cd0235aff395f-0546cd72e5098c5d2418.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1Uvv":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return l}));var r=a("q1tI"),n=a.n(r),i=a("vOnD"),o=(i.a.a.withConfig({displayName:"Typography__StyledLink",componentId:"tu2nmk-0"})(["color:#000000 !important;text-decoration:none !important;"]),i.a.text.withConfig({displayName:"Typography__NavText",componentId:"tu2nmk-1"})(["font-size:80%;font-family:'Libre Franklin',sans-serif;color:",";transition:0.3s;:hover{color:#B5B4B4;transition:0.3s;}"],(function(e){var t=e.color;return void 0===t?"#283033":t}))),s=i.a.a.withConfig({displayName:"Typography__StyledAnchorWrapper",componentId:"tu2nmk-2"})(["color:#000000 !important;text-decoration:none !important;"]),l=function(e){var t=e.link,a=e.children;return n.a.createElement(s,{href:t,target:"_blank",rel:"noreferrer"},a)}},"3Z9Z":function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),o=a.n(i),s=a("q1tI"),l=a.n(s),d=a("vUet"),c=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.noGutters,u=e.as,f=void 0===u?"div":u,m=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),p=Object(d.a)(a,"row"),g=p+"-cols",h=[];return c.forEach((function(e){var t,a=m[e];delete m[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&h.push(""+g+r+"-"+t)})),l.a.createElement(f,Object(r.a)({ref:t},m,{className:o.a.apply(void 0,[i,p,s&&"no-gutters"].concat(h))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),o=r(a("VbXa")),s=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,y=b&&window.IntersectionObserver,w=new WeakMap;function x(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+o+s+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,o=e.ariaHidden,s=d.default.createElement(C,(0,l.default)({ref:t,src:a},i,{ariaHidden:o}));return r.length>1?d.default.createElement("picture",null,n(r),s):s})),C=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!v&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||b&&(v||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:b}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,v=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,w=e.itemProp,S=e.loading,L=e.draggable,I=g||h;if(!I)return null;var R=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,F=(0,l.default)({opacity:R?1:0,transition:z?"opacity "+b+"ms":"none"},s),j="boolean"==typeof v?"lightgray":v,T={transitionDelay:b+"ms"},P=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&T,s,f),V={title:t,alt:this.state.isVisible?"":a,style:P,className:m,itemProp:w},_=this.state.isHydrated?p(I):I[0];if(g)return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:_.maxWidth?_.maxWidth+"px":null,maxHeight:_.maxHeight?_.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(_.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/_.aspectRatio+"%"}}),j&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:j,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&T)}),_.base64&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:V,imageVariants:I,generateSources:N}),_.tracedSVG&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:V,imageVariants:I,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,x(I),d.default.createElement(C,{alt:a,title:t,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:F,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:S},_,{imageVariants:I}))}}));if(h){var H=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_.width,height:_.height},i);return"inherit"===i.display&&delete H.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:H,ref:this.handleRef,key:"fixed-"+JSON.stringify(_.srcSet)},j&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:j,width:_.width,opacity:this.state.imgLoaded?0:1,height:_.height},z&&T)}),_.base64&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.base64,spreadProps:V,imageVariants:I,generateSources:N}),_.tracedSVG&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:_.tracedSVG,spreadProps:V,imageVariants:I,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,x(I),d.default.createElement(C,{alt:a,title:t,width:_.width,height:_.height,sizes:_.sizes,src:_.src,crossOrigin:this.props.crossOrigin,srcSet:_.srcSet,style:F,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:S},_,{imageVariants:I}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),F=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function j(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}R.propTypes={resolutions:z,sizes:F,fixed:j(c.default.oneOfType([z,c.default.arrayOf(z)])),fluid:j(c.default.oneOfType([F,c.default.arrayOf(F)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var T=R;t.default=T},JI6e:function(e,t,a){"use strict";var r=a("wx14"),n=a("zLVn"),i=a("TSYQ"),o=a.n(i),s=a("q1tI"),l=a.n(s),d=a("vUet"),c=["xl","lg","md","sm","xs"],u=l.a.forwardRef((function(e,t){var a=e.bsPrefix,i=e.className,s=e.as,u=void 0===s?"div":s,f=Object(n.a)(e,["bsPrefix","className","as"]),m=Object(d.a)(a,"col"),p=[],g=[];return c.forEach((function(e){var t,a,r,n=f[e];if(delete f[e],"object"==typeof n&&null!=n){var i=n.span;t=void 0===i||i,a=n.offset,r=n.order}else t=n;var o="xs"!==e?"-"+e:"";t&&p.push(!0===t?""+m+o:""+m+o+"-"+t),null!=r&&g.push("order"+o+"-"+r),null!=a&&g.push("offset"+o+"-"+a)})),p.length||p.push(m),l.a.createElement(u,Object(r.a)({},f,{ref:t,className:o.a.apply(void 0,[i].concat(p,g))}))}));u.displayName="Col",t.a=u},Jzpe:function(e,t,a){"use strict";a.d(t,"a",(function(){return l})),a.d(t,"b",(function(){return g})),a.d(t,"c",(function(){return c.b}));var r=a("q1tI"),n=a.n(r),i=a("vOnD"),o=a("irN4"),s=i.a.div.withConfig({displayName:"Footer__Credit",componentId:"sc-1j7yllt-0"})(["color:",";"," padding:1rem;font-size:80%;text-align:center;background-color:",";a{color:white;text-decoration:none !important;:hover{color:#B5B4B4;transition:0.3s;}}"],(function(e){var t=e.fontColor;return void 0===t?"#000000":t}),(function(e){var t=e.font;return void 0===t?o.e:t}),(function(e){var t=e.bgColor;return void 0===t?"#FFFFFF":t})),l=function(e){var t=e.font,a=e.emoji,r=void 0===a?"💖":a,i=e.bgColor,o=e.fontColor,l=e.year,d=void 0===l?"2021":l;return n.a.createElement(s,{font:t,bgColor:i,fontColor:o},"Made with ",n.a.createElement("span",{role:"img"},r)," by ",n.a.createElement("a",{href:"https://tech.thedp.com/",target:"_blank",rel:"noreferrer"},"The Daily Pennsylvanian Tech Department")," © ",d,". All rights reserved.")},d=a("Wbzz"),c=a("1Uvv"),u=i.a.img.withConfig({displayName:"Navbar__Image",componentId:"jz2kbo-0"})(["max-height:45px;@media (max-width:768px){max-height:30px;}"]),f=i.a.ul.withConfig({displayName:"Navbar__LeftUL",componentId:"jz2kbo-1"})(["margin-right:1rem;@media (max-width:768px){margin-right:0;}"]),m=i.a.ul.withConfig({displayName:"Navbar__RightUL",componentId:"jz2kbo-2"})(["margin-left:1rem;@media (max-width:768px){margin-left:0;}"]),p=function(e){var t=e.link,a=e.children;return t.includes("http")?n.a.createElement("a",{href:t,className:"nav-link",target:"_blank"},a):n.a.createElement(d.a,{to:"#"+t,className:"nav-link",target:"_blank"},a)},g=function(e){var t=e.titles,a=e.font,r=e.bgColor,i=void 0===r?"#FFFFFF":r,o=e.fontColor,s=void 0===o?"#283033":o,l=e.img,d=void 0===l?"/img/DP-Logo-Full.png":l,g=t.left,h=t.right;return n.a.createElement("nav",{className:"navbar sticky-top navbar-expand-lg",style:{fontFamily:"Libre Franklin",backgroundColor:i,color:s,boxShadow:"0px 5px 6px #00000029",opacity:1}},n.a.createElement("div",{className:"navbar-collapse w-100 dual-collapse2 order-1 order-md-0 collapse"},n.a.createElement(f,{className:"navbar-nav ml-auto text-center"},g.map((function(e){var t=e.text,r=e.link;return n.a.createElement("li",{className:"nav-item"},n.a.createElement(p,{link:r},n.a.createElement(c.a,{font:a,color:s},t)))})))),n.a.createElement("div",{className:"mx-auto my-2 order-0 order-md-1 position-relative",style:{textAlign:"center"}},n.a.createElement("a",{className:"mx-auto",href:"https://www.34st.com/"},n.a.createElement(u,{src:d,className:"img-fluid"})),n.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":".dual-collapse2","aria-expanded":"false"},n.a.createElement("span",{className:"navbar-toggler-icon"},"#FFFFFF"===i?n.a.createElement("img",{src:"/icons/menu.svg",style:{transform:"translate(0, 0.2rem)"}}):n.a.createElement("img",{src:"/icons/menu-white.svg",style:{transform:"translate(0, 0.2rem)"}})))),n.a.createElement("div",{className:"navbar-collapse w-100 dual-collapse2 order-2 order-md-2 collapse"},n.a.createElement(m,{className:"navbar-nav mr-auto text-center"},h.map((function(e){var t=e.text,r=e.link;return n.a.createElement("li",{className:"nav-item"},n.a.createElement(p,{link:r},n.a.createElement(c.a,{font:a,color:s},t)))})))))}},TSYQ:function(e,t,a){var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var o=n.apply(null,r);o&&e.push(o)}else if("object"===i)for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},irN4:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"e",(function(){return n})),a.d(t,"d",(function(){return i})),a.d(t,"c",(function(){return o})),a.d(t,"f",(function(){return s})),a.d(t,"a",(function(){return l}));var r="\n  font-family: 'Funkturm';\n  font-weight: 400;\n",n="\n  font-family: 'Futura-PT', sans-serif;\n  font-weight: 400;\n",i="\n  font-family: 'Futura-PT', sans-serif;\n  font-weight: 500;\n",o="\n  font-family: 'Futura-PT', sans-serif;\n  font-weight: 700;\n",s="\n  font-family: 'Libre Franklin', sans-serif;\n  font-weight: 500;\n",l="\n  font-family: 'BN Chester', sans-serif;\n  font-weight: 400;\n"},vUet:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("wx14");var r=a("q1tI"),n=a.n(r),i=n.a.createContext({});i.Consumer,i.Provider;function o(e,t){var a=Object(r.useContext)(i);return e||a[t]||t}},wx14:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return r}))},zLVn:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=a2c892d25a133cb43f3ce2a01e0cd0235aff395f-0546cd72e5098c5d2418.js.map