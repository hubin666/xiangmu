"use strict";function _classCallCheck(e,l){if(!(e instanceof l))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,l){for(var t=0;t<l.length;t++){var n=l[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(l,t,n){return t&&e(l.prototype,t),n&&e(l,n),l}}(),Bullet=function(){function e(){_classCallCheck(this,e),this.ele=null}return _createClass(e,[{key:"init",value:function(){return this.ele=document.createElement("div"),gameEngine.ele.appendChild(this.ele),gameEngine.allBullets.push(this),this.ele.className="bullet",this.ele.style.left=myPlane.ele.offsetLeft+myPlane.ele.offsetWidth/2-this.ele.offsetWidth/2+1+"px",this.ele.style.top=myPlane.ele.offsetTop-this.ele.offsetHeight+"px",this}},{key:"move",value:function(){var e=this;this.timer=setInterval(function(){e.ele.offsetTop<-18?(clearInterval(e.timer),gameEngine.ele.removeChild(e.ele),gameEngine.allBullets.splice(gameEngine.allBullets.indexOf(e),1)):e.ele.style.top=e.ele.offsetTop-10+"px"},30)}},{key:"boom",value:function(){clearInterval(this.timer),this.ele.className="bullet-die";var e=0,l=this,t=["images/die1.png","images/die2.png"],n=setInterval(function(){l.ele.style.background="url("+t[++e]+") no-repeat",clearInterval(n),gameEngine.ele.removeChild(l.ele)},100)}}]),e}();