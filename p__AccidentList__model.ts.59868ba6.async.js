(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{WvKS:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a("mK77")),u=n(a("Ico4")),o=a("f1D5"),l={namespace:"accidentList",state:{list:[]},effects:{fetch:u.default.mark(function e(t,a){var n,r,l,s,c,i;return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=a.call,l=a.put,e.next=4,r(o.queryFakeList,n);case 4:return s=e.sent,console.log("fetch"),console.log(s),c=s[0].body,i=c.slice(3,c.indexOf("```",8)-3),console.log(c),console.log(i),console.log(JSON.parse(c)),e.next=14,l({type:"queryList",payload:Array.isArray(s)?s:[]});case 14:case"end":return e.stop()}},e)})},reducers:{queryList:function(e,t){return(0,r.default)({},e,{list:t.payload})}}},s=l;t.default=s},f1D5:function(e,t,a){"use strict";var n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.queryFakeList=s,t.addRule=i,t.updateRule=p;var r=n(a("mK77")),u=n(a("Ico4")),o=n(a("UWy3")),l=n(a("sy1d"));function s(){return c.apply(this,arguments)}function c(){return c=(0,o.default)(u.default.mark(function e(){return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,l.default)("/api/repos/firefly-light/firefly-light.github.io/issues?labels=accident"));case 1:case"end":return e.stop()}},e)})),c.apply(this,arguments)}function i(e){return d.apply(this,arguments)}function d(){return d=(0,o.default)(u.default.mark(function e(t){return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("addRule"),console.log(t),e.abrupt("return",(0,l.default)("/api/deceased/add",{method:"POST",data:(0,r.default)({},t,{method:"post"})}));case 3:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return f=(0,o.default)(u.default.mark(function e(t){return u.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return console.log("updateRule"),console.log(t),e.abrupt("return",(0,l.default)("/api/deceased/update",{method:"POST",data:(0,r.default)({},t,{method:"update"})}));case 3:case"end":return e.stop()}},e)})),f.apply(this,arguments)}}}]);