(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{aD4v:function(a,e,t){"use strict";var n=t("mZ4U");Object.defineProperty(e,"__esModule",{value:!0}),e.fakeChartData=l;var r=n(t("Ico4")),s=n(t("UWy3")),c=n(t("sy1d"));function l(a){return o.apply(this,arguments)}function o(){return o=(0,s.default)(r.default.mark(function a(e){return r.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return console.log("fakeChartData"),console.log(e),a.abrupt("return",(0,c.default)("/api/accident/overview/".concat(e)));case 3:case"end":return a.stop()}},a)})),o.apply(this,arguments)}},dCxu:function(a,e,t){"use strict";var n=t("mZ4U");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(t("mK77")),s=n(t("Ico4")),c=t("aD4v"),l={visitData:[],visitData2:[],salesData:[],searchData:[],offlineData:[],offlineChartData:[],salesTypeData:[],salesTypeDataOnline:[],salesTypeDataOffline:[],radarData:[]},o={namespace:"dashboardAnalysis",state:l,effects:{fetch:s.default.mark(function a(e,t){var n,r,l,o;return s.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=t.call,l=t.put,console.log("fetch"),console.log(n),a.next=6,r(c.fakeChartData,n);case 6:return o=a.sent,a.next=9,l({type:"save",payload:o});case 9:case"end":return a.stop()}},a)}),fetchSalesData:s.default.mark(function a(e,t){var n,r,l,o;return s.default.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return n=e.payload,r=t.call,l=t.put,console.log("fetchSalesData"),console.log(n),a.next=6,r(c.fakeChartData,n);case 6:return o=a.sent,a.next=9,l({type:"save",payload:{salesData:o.salesData}});case 9:case"end":return a.stop()}},a)})},reducers:{save:function(a,e){var t=e.payload;return(0,r.default)({},a,t)},clear:function(){return l}}},u=o;e.default=u}}]);