(function(o,f){typeof exports=="object"&&typeof module<"u"?f(exports):typeof define=="function"&&define.amd?define(["exports"],f):(o=typeof globalThis<"u"?globalThis:o||self,f(o.index={}))})(this,function(o){"use strict";function f(t){return{all:t=t||new Map,on:function(i,n){var e=t.get(i);e?e.push(n):t.set(i,[n])},off:function(i,n){var e=t.get(i);e&&(n?e.splice(e.indexOf(n)>>>0,1):t.set(i,[]))},emit:function(i,n){var e=t.get(i);e&&e.slice().map(function(u){u(n)}),(e=t.get("*"))&&e.slice().map(function(u){u(i,n)})}}}const s=f,c=new s;o.emitter=c,Object.defineProperty(o,Symbol.toStringTag,{value:"Module"})});
