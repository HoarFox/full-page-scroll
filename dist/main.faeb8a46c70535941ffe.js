!function(e){function t(t){for(var r,c,i=t[0],a=t[1],u=t[2],l=0,p=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(f&&f(t);p.length;)p.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var a=n[i];0!==o[a]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},s=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],a=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var f=a;s.push([133,1]),n()}({133:function(e,t,n){n(134),e.exports=n(330)},320:function(e,t,n){},330:function(e,t,n){"use strict";n.r(t);n(320);var r=n(1),o=n.n(r),s=n(64),c=n(31),i=n(30),a=n(131),u=n(132),f={sectionsNumber:3,currentSection:3,offsetSections:0,contPosY:0,contPosX:0,slidesNumber:3,currentSlide:1,offsetSlides:0,sliderPosX:0,offsetAxis:!1,isDown:!1,posX:0,posY:0,offsetX:0,offsetY:0,isHorMovable:!1,screenHeight:0,screenWidth:0};function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=Object(i.combineReducers)({main:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,n=t.payload,r=t.type;switch(r){case"SET_SCREEN_DIMENSIONS":return console.log(n),p(p({},e),{},{screenHeight:n.screenHeight,screenWidth:n.screenWidth});case"PRESS":return p(p({},e),{},{isDown:!0});case"RELEASE":return p(p({},e),{},{isDown:!1});case"HOR_MOVABLE_PRESS":return p(p({},e),{},{isHorMovable:!0});case"HOR_MOVABLE_RELEASE":return p(p({},e),{},{isHorMovable:!1});case"SET_POS":return p(p({},e),{},{posX:n.posX,posY:n.posY});case"SET_CONT_POS":return p(p({},e),{},{contPosX:n.contPosX,contPosY:n.contPosY});case"SET_OFFSETS":return p(p({},e),{},{posX:n.posX,posY:n.posY,offsetX:n.offsetX,offsetY:n.offsetY});case"RESET":return p(p({},e),{},{posX:0,posY:0,offsetX:0,offsetY:0,offsetSections:0,offsetSlides:0,offsetAxis:!1});case"RESET_X":return p(p({},e),{},{posX:0,offsetX:0});case"RESET_Y":return p(p({},e),{},{posY:0,offsetY:0});case"SET_SECTION":return p(p({},e),{},{currentSection:n.currentSection,contPosY:n.contPosY});case"SET_OFFSET_SECTIONS":return p(p({},e),{},{offsetSections:n.offsetSections});case"SET_SLIDE":return p(p({},e),{},{currentSlide:n.currentSlide,sliderPosX:n.sliderPosX});case"SET_OFFSET_SLIDES":return p(p({},e),{},{offsetSlides:n.offsetSlides});case"SET_OFFSET_AXIS":return p(p({},e),{},{offsetAxis:n.offsetAxis});default:return e}}}),E=[u.a],m=Object(i.createStore)(S,{},Object(a.composeWithDevTools)(i.applyMiddleware.apply(void 0,E))),v=n(29),h=n.n(v),b=o.a.forwardRef((function(e,t){var n=e.className,r=e.main,s=e.children,c=r.screenHeight,i=r.screenWidth,a={width:"".concat(i,"px"),height:"".concat(c,"px")};return o.a.createElement("div",{ref:t,className:n,style:a},s)}));b.propTypes={main:h.a.object.isRequired};var O=Object(c.b)((function(e){return{main:e.main}}),null,null,{forwardRef:!0})(b),y=function(e){return o.a.createElement("div",{className:"slider-controls"},o.a.createElement("div",{className:"slider-controls__knob"}))};y.propTypes={};var _=y,T=function(e,t){var n=Math.abs(e),r=Math.abs(t);return{type:"SET_OFFSET_AXIS",payload:{offsetAxis:(n>25||r>25)&&(Math.abs(e)/Math.abs(t)>1?"horizontal":"verticle")}}},w=function(e){var t=new WebKitCSSMatrix(window.getComputedStyle(e).webkitTransform);return{x:t.m41,y:t.m42}},P=function(e){var t=window.getComputedStyle(e);return{width:parseInt(t.getPropertyValue("width").replace(/px/,"")),height:parseInt(t.getPropertyValue("height").replace(/px/,""))}},g=function(e,t,n){var r=P(e),o=r.height,s=r.width,c=Math.abs(t)/s,i=Math.abs(n)/o,a=0,u=0;return c>.15&&(a=Math.ceil(c/1.15)),i>.15&&(u=Math.ceil(i/1.15)),t>0&&(a*=-1),n>0&&(u*=-1),{offsetIntX:a,offsetIntY:u}},M=function(e){var t=e.main,n=e.horMovablePress,s=e.horMovableRelease,c=e.setOffsetSlides,i=e.setSlide,a=t.offsetX,u=t.sliderPosX,f=t.offsetAxis,l=t.isDown,p=t.isHorMovable,d=Object(r.useRef)(null),S=function(e){n()},E=function(e){l&&"verticle"!==f&&c(d.current)},m=function(e){s(),i(d.current)},v=function(e){i(d.current)};Object(r.useEffect)((function(){return window.addEventListener("resize",v),i(d.current),function(){window.addEventListener("resize",v)}}),[]);var h={transform:"translate3D(".concat("verticle"===f?u:u+a,"px, 0px, 0px)")};return o.a.createElement("div",{className:"slider-container",onMouseDown:S,onMouseMove:E,onMouseUp:m,onTouchStart:S,onTouchMove:E,onTouchEnd:m},o.a.createElement("div",{className:"slider-track ".concat(p&&"verticle"!==f?"":"transitioned"),style:h},o.a.createElement("div",{className:"slider-item slider-item__1",ref:d}),o.a.createElement("div",{className:"slider-item slider-item__2"}),o.a.createElement("div",{className:"slider-item slider-item__3"})),o.a.createElement(_,null))};M.propTypes={main:h.a.object.isRequired};var Y=Object(c.b)((function(e){return{main:e.main}}),{horMovablePress:function(){return{type:"HOR_MOVABLE_PRESS"}},horMovableRelease:function(){return{type:"HOR_MOVABLE_RELEASE"}},setOffsetSlides:function(e,t){return function(n,r){var o;if(void 0!==t)o=t;else{o=0;var s=r().main,c=s.offsetX,i=s.offsetY;o=g(e,c,i).offsetIntX}n({type:"SET_OFFSET_SLIDES",payload:{offsetSlides:o}})}},setSlide:function(e){return function(t,n){var r=n().main,o=r.slidesNumber,s=r.currentSlide+r.offsetSlides;s<1&&(s=1),s>o&&(s=o),t({type:"SET_SLIDE",payload:{currentSlide:s,sliderPosX:P(e).width*(s-1)*-1}})}}})(M),X=function(e){var t=e.main,n=e.press,s=e.release,c=e.setPositions,i=e.setContentPositions,a=e.setOffsets,u=e.reset,f=e.setOffsetSections,l=e.setSection,p=(e.resetY,e.setScreenDimensions),d=t.isDown,S=t.contPosY,E=t.offsetY,m=t.offsetAxis,v=t.isHorMovable,h=Object(r.useRef)(null),b=Object(r.useRef)(null),y="horizontal"===m&&v,_=function(e,t){n(),i(h.current),c(e,t)},T=function(e,t){d&&(a(e,t),y||f(b.current))},w=function(e){s(),l(b.current),u()},P=function(e){var t=.01*e.deltaY;f(null,t),l(b.current),u()},g=function(e){console.log("resize!"),p(),l(b.current)};Object(r.useEffect)((function(){return window.addEventListener("mousewheel",P),window.addEventListener("resize",g),p(),l(b.current),function(){window.removeEventListener("mousewheel",P),window.addEventListener("resize",g)}}),[]);var M={transform:"translate3D(0px, ".concat(y?S:S+E,"px, 0px)")};return o.a.createElement("div",{className:"container",onMouseDown:function(e){_(e.screenX,e.screenY)},onMouseMove:function(e){T(e.screenX,e.screenY)},onMouseUp:w,onTouchStart:function(e){_(e.changedTouches[0].screenX,e.changedTouches[0].screenY)},onTouchMove:function(e){T(e.changedTouches[0].screenX,e.changedTouches[0].screenY)},onTouchEnd:w},o.a.createElement("main",{className:"content ".concat(!d||y?"transitioned":""),ref:h,style:M},o.a.createElement(O,{className:"section section__1",ref:b}),o.a.createElement(O,{className:"section section__2"}),o.a.createElement(O,{className:"section section__3"},o.a.createElement(Y,null))),o.a.createElement("div",{className:"sections-controls"},o.a.createElement("div",{className:"sections-controls__option"}),o.a.createElement("div",{className:"sections-controls__option"}),o.a.createElement("div",{className:"sections-controls__option"})))};X.propTypes={main:h.a.object.isRequired};var j=Object(c.b)((function(e){return{main:e.main}}),{press:function(){return{type:"PRESS"}},release:function(){return{type:"RELEASE"}},setPositions:function(e,t){return{type:"SET_POS",payload:{posX:e,posY:t}}},setContentPositions:function(e){var t=w(e);return{type:"SET_CONT_POS",payload:{contPosX:t.x,contPosY:t.y}}},setOffsets:function(e,t){return function(n,r){var o=r().main,s=o.offsetX,c=o.offsetY,i=o.posX,a=o.posY;o.offsetAxis||n(T(s,c)),n({type:"SET_OFFSETS",payload:{posX:e,posY:t,offsetX:s+e-i,offsetY:c+t-a}})}},reset:function(){return{type:"RESET"}},setOffsetSections:function(e,t){return function(n,r){var o;if(void 0!==t)o=t;else{o=0;var s=r().main,c=s.offsetY,i=s.offsetX;o=g(e,i,c).offsetIntY}n({type:"SET_OFFSET_SECTIONS",payload:{offsetSections:o}})}},setSection:function(e){return function(t,n){var r=n().main,o=r.sectionsNumber,s=r.currentSection+r.offsetSections;s<1&&(s=1),s>o&&(s=o),t({type:"SET_SECTION",payload:{currentSection:s,contPosY:P(e).height*(s-1)*-1}})}},resetY:function(){return{type:"RESET_Y"}},setScreenDimensions:function(){return{type:"SET_SCREEN_DIMENSIONS",payload:{screenHeight:document.documentElement.clientHeight,screenWidth:document.documentElement.clientWidth}}}})(X),N=function(){return o.a.createElement(c.a,{store:m},o.a.createElement(j,null))};Object(s.render)(o.a.createElement(N,null),document.getElementById("app"))}});