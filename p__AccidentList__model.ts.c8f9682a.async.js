(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{WvKS:function(e,t,a){"use strict";var r=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("mK77")),s=r(a("Ico4")),u=a("f1D5"),c={namespace:"accidentList",state:{list:[]},effects:{fetch:s.default.mark(function e(t,a){var r,n,c,i;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.payload,n=a.call,c=a.put,e.next=4,n(u.queryFakeList,r);case 4:return i=e.sent,e.next=7,c({type:"queryList",payload:Array.isArray(i)?i:[]});case 7:case"end":return e.stop()}},e)})},reducers:{queryList:function(e,t){return(0,n.default)({},e,{list:t.payload})}}},i=c;t.default=i}}]);