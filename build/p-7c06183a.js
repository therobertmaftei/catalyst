var n=typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};function e(n,e,t){return t={path:e,exports:{},require:function(n,e){return o()}},n(t,t.exports),t.exports}function o(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var t=e((function(e){(function(n,o){if(e.exports){e.exports=o()}else{n.log=o()}})(n,(function(){var n=function(){};var e="undefined";var o=typeof window!==e&&typeof window.navigator!==e&&/Trident\/|MSIE /.test(window.navigator.userAgent);var t=["trace","debug","info","warn","error"];function i(n,e){var o=n[e];if(typeof o.bind==="function"){return o.bind(n)}else{try{return Function.prototype.bind.call(o,n)}catch(e){return function(){return Function.prototype.apply.apply(o,[n,arguments])}}}}function r(){if(console.log){if(console.log.apply){console.log.apply(console,arguments)}else{Function.prototype.apply.apply(console.log,[console,arguments])}}if(console.trace)console.trace()}function f(t){if(t==="debug"){t="log"}if(typeof console===e){return false}else if(t==="trace"&&o){return r}else if(console[t]!==undefined){return i(console,t)}else if(console.log!==undefined){return i(console,"log")}else{return n}}function u(e,o){for(var i=0;i<t.length;i++){var r=t[i];this[r]=i<e?n:this.methodFactory(r,e,o)}this.log=this.debug}function c(n,o,t){return function(){if(typeof console!==e){u.call(this,o,t);this[n].apply(this,arguments)}}}function l(n,e,o){return f(n)||c.apply(this,arguments)}function s(n,o,i){var r=this;var f;o=o==null?"WARN":o;var c="loglevel";if(typeof n==="string"){c+=":"+n}else if(typeof n==="symbol"){c=undefined}function s(n){var o=(t[n]||"silent").toUpperCase();if(typeof window===e||!c)return;try{window.localStorage[c]=o;return}catch(n){}try{window.document.cookie=encodeURIComponent(c)+"="+o+";"}catch(n){}}function a(){var n;if(typeof window===e||!c)return;try{n=window.localStorage[c]}catch(n){}if(typeof n===e){try{var o=window.document.cookie;var t=o.indexOf(encodeURIComponent(c)+"=");if(t!==-1){n=/^([^;]+)/.exec(o.slice(t))[1]}}catch(n){}}if(r.levels[n]===undefined){n=undefined}return n}function d(){if(typeof window===e||!c)return;try{window.localStorage.removeItem(c);return}catch(n){}try{window.document.cookie=encodeURIComponent(c)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(n){}}r.name=n;r.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5};r.methodFactory=i||l;r.getLevel=function(){return f};r.setLevel=function(o,t){if(typeof o==="string"&&r.levels[o.toUpperCase()]!==undefined){o=r.levels[o.toUpperCase()]}if(typeof o==="number"&&o>=0&&o<=r.levels.SILENT){f=o;if(t!==false){s(o)}u.call(r,o,n);if(typeof console===e&&o<r.levels.SILENT){return"No console available for logging"}}else{throw"log.setLevel() called with invalid level: "+o}};r.setDefaultLevel=function(n){o=n;if(!a()){r.setLevel(n,false)}};r.resetLevel=function(){r.setLevel(o,false);d()};r.enableAll=function(n){r.setLevel(r.levels.TRACE,n)};r.disableAll=function(n){r.setLevel(r.levels.SILENT,n)};var w=a();if(w==null){w=o}r.setLevel(w,false)}var a=new s;var d={};a.getLogger=function n(e){if(typeof e!=="symbol"&&typeof e!=="string"||e===""){throw new TypeError("You must supply a name when creating a logger.")}var o=d[e];if(!o){o=d[e]=new s(e,a.getLevel(),a.methodFactory)}return o};var w=typeof window!==e?window.log:undefined;a.noConflict=function(){if(typeof window!==e&&window.log===a){window.log=w}return a};a.getLoggers=function n(){return d};a["default"]=a;return a}))}));export{n as a,e as c,t as l};
//# sourceMappingURL=p-7c06183a.js.map