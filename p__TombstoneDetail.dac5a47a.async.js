(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{Bjv0:function(e,t,a){e.exports={articleList:"antd-pro-pages-tombstone-detail-components-articles-index-articleList",listItemMetaTitle:"antd-pro-pages-tombstone-detail-components-articles-index-listItemMetaTitle"}},"F/MW":function(e,t,a){e.exports={listContent:"antd-pro-pages-tombstone-detail-components-article-list-content-index-listContent",description:"antd-pro-pages-tombstone-detail-components-article-list-content-index-description",extra:"antd-pro-pages-tombstone-detail-components-article-list-content-index-extra"}},HQKh:function(e,t,a){e.exports={avatarList:"antd-pro-pages-tombstone-detail-components-avatar-list-index-avatarList",avatarItem:"antd-pro-pages-tombstone-detail-components-avatar-list-index-avatarItem",avatarItemLarge:"antd-pro-pages-tombstone-detail-components-avatar-list-index-avatarItemLarge",avatarItemSmall:"antd-pro-pages-tombstone-detail-components-avatar-list-index-avatarItemSmall",avatarItemMini:"antd-pro-pages-tombstone-detail-components-avatar-list-index-avatarItemMini"}},Hrlw:function(e,t,a){"use strict";var l=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("6JCT");var n=l(a("cVEF"));a("8cEv");var r=l(a("mkpw")),d=a("vGWC"),u=l(a("2w0b")),i=a("XLjY"),s=l(a("gorE")),o=l(a("Bjv0")),c=function(e){var t=e.list,a=function(e){var t=e.icon,a=e.text;return u.default.createElement("span",null,t," ",a)};return u.default.createElement(r.default,{size:"large",className:o.default.articleList,rowKey:"id",itemLayout:"vertical",dataSource:t,renderItem:function(e){return u.default.createElement(r.default.Item,{key:e.id,actions:[u.default.createElement(a,{key:"star",icon:u.default.createElement(d.StarTwoTone,null),text:e.star}),u.default.createElement(a,{key:"like",icon:u.default.createElement(d.LikeOutlined,null),text:e.like}),u.default.createElement(a,{key:"message",icon:u.default.createElement(d.MessageFilled,null),text:e.message})]},u.default.createElement(r.default.Item.Meta,{title:u.default.createElement("a",{className:o.default.listItemMetaTitle,href:e.href},e.title),description:u.default.createElement("span",null,u.default.createElement(n.default,null,"Ant Design"),u.default.createElement(n.default,null,"\u8bbe\u8ba1\u8bed\u8a00"),u.default.createElement(n.default,null,"\u8682\u8681\u91d1\u670d"))}),u.default.createElement(s.default,{data:e}))}})},f=(0,i.connect)(function(e){var t=e.tombstoneDetail;return{list:t.list}})(c);t.default=f},M8WL:function(e,t,a){"use strict";var l=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.formatWan=v,t.default=void 0,a("GSzA");var n=l(a("bZS8"));a("YeaM");var r=l(a("nMnT"));a("dzFY");var d=l(a("CmWd"));a("TQIi");var u=l(a("l69Q"));a("8cEv");var i=l(a("mkpw"));a("c+Nv");var s=l(a("iU1m")),o=a("vGWC"),c=l(a("2w0b")),f=a("XLjY"),m=l(a("BS6i")),p=l(a("Ph18"));function v(e){var t=1*e;if(!t||Number.isNaN(t))return"";var a=e;return e>1e4&&(a=c.default.createElement("span",null,Math.floor(e/1e4),c.default.createElement("span",{style:{position:"relative",top:-2,fontSize:14,fontStyle:"normal",marginLeft:2}},"\u4e07"))),a}var E=function(e){var t=e.list,a=c.default.createElement(s.default,null,c.default.createElement(s.default.Item,null,c.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.alipay.com/"},"1st menu item")),c.default.createElement(s.default.Item,null,c.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.taobao.com/"},"2nd menu item")),c.default.createElement(s.default.Item,null,c.default.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.tmall.com/"},"3d menu item"))),l=function(e){var t=e.activeUser,a=e.newUser;return c.default.createElement("div",{className:p.default.cardInfo},c.default.createElement("div",null,c.default.createElement("p",null,"\u6d3b\u8dc3\u7528\u6237"),c.default.createElement("p",null,t)),c.default.createElement("div",null,c.default.createElement("p",null,"\u65b0\u589e\u7528\u6237"),c.default.createElement("p",null,a)))};return c.default.createElement(i.default,{rowKey:"id",className:p.default.filterCardList,grid:{gutter:24,xxl:3,xl:2,lg:2,md:2,sm:2,xs:1},dataSource:t,renderItem:function(e){return c.default.createElement(i.default.Item,{key:e.id},c.default.createElement(u.default,{hoverable:!0,bodyStyle:{paddingBottom:20},actions:[c.default.createElement(d.default,{key:"download",title:"\u4e0b\u8f7d"},c.default.createElement(o.DownloadOutlined,null)),c.default.createElement(d.default,{title:"\u7f16\u8f91",key:"edit"},c.default.createElement(o.EditOutlined,null)),c.default.createElement(d.default,{title:"\u5206\u4eab",key:"share"},c.default.createElement(o.ShareAltOutlined,null)),c.default.createElement(r.default,{overlay:a,key:"ellipsis"},c.default.createElement(o.EllipsisOutlined,null))]},c.default.createElement(u.default.Meta,{avatar:c.default.createElement(n.default,{size:"small",src:e.avatar}),title:e.title}),c.default.createElement("div",{className:p.default.cardItemContent},c.default.createElement(l,{activeUser:v(e.activeUser),newUser:(0,m.default)(e.newUser).format("0,0")}))))}})},b=(0,f.connect)(function(e){var t=e.tombstoneDetail;return{list:t.list}})(E);t.default=b},PGf4:function(e,t,a){"use strict";var l=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("TQIi");var n=l(a("l69Q"));a("8cEv");var r=l(a("mkpw")),d=l(a("2w0b")),u=a("XLjY"),i=l(a("a/LZ")),s=l(a("PNwT")),o=l(a("bm8o")),c=function(e){var t=e.list;return d.default.createElement(r.default,{className:o.default.coverCardList,rowKey:"id",grid:{gutter:24,xxl:3,xl:2,lg:2,md:2,sm:2,xs:1},dataSource:t,renderItem:function(e){return d.default.createElement(r.default.Item,null,d.default.createElement(n.default,{className:o.default.card,hoverable:!0,cover:d.default.createElement("img",{alt:e.title,src:e.cover})},d.default.createElement(n.default.Meta,{title:d.default.createElement("a",null,e.title),description:e.subDescription}),d.default.createElement("div",{className:o.default.cardItemContent},d.default.createElement("span",null,(0,i.default)(e.updatedAt).fromNow()),d.default.createElement("div",{className:o.default.avatarList},d.default.createElement(s.default,{size:"small"},e.members.map(function(t){return d.default.createElement(s.default.Item,{key:"".concat(e.id,"-avatar-").concat(t.id),src:t.avatar,tips:t.name})}))))))}})},f=(0,u.connect)(function(e){var t=e.tombstoneDetail;return{list:t.list}})(c);t.default=f},PNwT:function(e,t,a){"use strict";var l=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a("BG4o"));a("GSzA");var r=l(a("bZS8"));a("dzFY");var d=l(a("CmWd")),u=l(a("3CjV")),i=l(a("2w0b")),s=l(a("iczh")),o=l(a("HQKh")),c=function(e){var t;return(0,s.default)(o.default.avatarItem,(t={},(0,u.default)(t,o.default.avatarItemLarge,"large"===e),(0,u.default)(t,o.default.avatarItemSmall,"small"===e),(0,u.default)(t,o.default.avatarItemMini,"mini"===e),t))},f=function(e){var t=e.src,a=e.size,l=e.tips,n=e.onClick,u=void 0===n?function(){}:n,s=c(a);return i.default.createElement("li",{className:s,onClick:u},l?i.default.createElement(d.default,{title:l},i.default.createElement(r.default,{src:t,size:a,style:{cursor:"pointer"}})):i.default.createElement(r.default,{src:t,size:a}))},m=function(e){var t=e.children,a=e.size,l=e.maxLength,d=void 0===l?5:l,u=e.excessItemsStyle,s=(0,n.default)(e,["children","size","maxLength","excessItemsStyle"]),f=i.default.Children.count(t),m=d>=f?f:d,p=i.default.Children.toArray(t),v=p.slice(0,m).map(function(e){return i.default.cloneElement(e,{size:a})});if(m<f){var E=c(a);v.push(i.default.createElement("li",{key:"exceed",className:E},i.default.createElement(r.default,{size:a,style:u},"+".concat(f-d))))}return i.default.createElement("div",Object.assign({},s,{className:o.default.avatarList}),i.default.createElement("ul",null," ",v," "))};m.Item=f;var p=m;t.default=p},Ph18:function(e,t,a){e.exports={filterCardList:"antd-pro-pages-tombstone-detail-components-applications-index-filterCardList",cardInfo:"antd-pro-pages-tombstone-detail-components-applications-index-cardInfo"}},VYmS:function(e,t,a){e.exports={avatarHolder:"antd-pro-pages-tombstone-detail-center-avatarHolder",name:"antd-pro-pages-tombstone-detail-center-name",detail:"antd-pro-pages-tombstone-detail-center-detail",title:"antd-pro-pages-tombstone-detail-center-title",group:"antd-pro-pages-tombstone-detail-center-group",address:"antd-pro-pages-tombstone-detail-center-address",tagsTitle:"antd-pro-pages-tombstone-detail-center-tagsTitle",teamTitle:"antd-pro-pages-tombstone-detail-center-teamTitle",tags:"antd-pro-pages-tombstone-detail-center-tags",team:"antd-pro-pages-tombstone-detail-center-team",tabsCard:"antd-pro-pages-tombstone-detail-center-tabsCard"}},bm8o:function(e,t,a){e.exports={coverCardList:"antd-pro-pages-tombstone-detail-components-projects-index-coverCardList",card:"antd-pro-pages-tombstone-detail-components-projects-index-card",cardItemContent:"antd-pro-pages-tombstone-detail-components-projects-index-cardItemContent",avatarList:"antd-pro-pages-tombstone-detail-components-projects-index-avatarList",cardList:"antd-pro-pages-tombstone-detail-components-projects-index-cardList"}},gorE:function(e,t,a){"use strict";var l=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("GSzA");var n=l(a("bZS8")),r=l(a("2w0b")),d=l(a("a/LZ")),u=l(a("F/MW")),i=function(e){var t=e.data,a=t.content,l=t.updatedAt,i=t.avatar,s=t.owner,o=t.href;return r.default.createElement("div",{className:u.default.listContent},r.default.createElement("div",{className:u.default.description},a),r.default.createElement("div",{className:u.default.extra},r.default.createElement(n.default,{src:i,size:"small"}),r.default.createElement("a",{href:o},s)," \u53d1\u5e03\u5728 ",r.default.createElement("a",{href:o},o),r.default.createElement("em",null,(0,d.default)(l).format("YYYY-MM-DD HH:mm"))))},s=i;t.default=s},vH4G:function(e,t,a){"use strict";var l=a("fbTi"),n=a("mZ4U");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("TQIi");var r=n(a("l69Q"));a("15e7");var d=n(a("D46T"));a("yKvZ");var u=n(a("oSHl")),i=n(a("rXjv")),s=n(a("43Yg")),o=n(a("/tCh")),c=n(a("scpF")),f=n(a("O/V9")),m=n(a("Tfcp")),p=n(a("8aBX")),v=l(a("2w0b")),E=n(a("a/LZ")),b=a("bw4D"),g=a("XLjY"),h=n(a("PGf4")),y=n(a("Hrlw")),w=n(a("M8WL")),x=n(a("VYmS")),I=[{key:"articles",tab:v.default.createElement("span",null,"\u6587\u7ae0 ",v.default.createElement("span",{style:{fontSize:14}},"(8)"))},{key:"projects",tab:v.default.createElement("span",null,"\u56fe\u7247 ",v.default.createElement("span",{style:{fontSize:14}},"(8)"))}],L=function(e){function t(){var e;return(0,s.default)(this,t),e=(0,c.default)(this,(0,f.default)(t).apply(this,arguments)),e.state={newTags:[],inputVisible:!1,inputValue:"",tabKey:"articles"},e.input=void 0,e.onTabChange=function(t){e.setState({tabKey:t})},e.showInput=function(){e.setState({inputVisible:!0},function(){return e.input&&e.input.focus()})},e.saveInputRef=function(t){e.input=t},e.handleInputChange=function(t){e.setState({inputValue:t.target.value})},e.handleInputConfirm=function(){var t=(0,m.default)(e),a=t.state,l=a.inputValue,n=a.newTags;l&&0===n.filter(function(e){return e.label===l}).length&&(n=[].concat((0,i.default)(n),[{key:"new-".concat(n.length),label:l}])),e.setState({newTags:n,inputVisible:!1,inputValue:""})},e.renderChildrenByTabKey=function(e){return"projects"===e?v.default.createElement(h.default,null):"applications"===e?v.default.createElement(w.default,null):"articles"===e?v.default.createElement(y.default,null):null},e}return(0,p.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"tombstoneDetail/fetchDeceased"})}},{key:"render",value:function(){var e=this.state,t=(e.newTags,e.inputVisible,e.inputValue,e.tabKey),a=this.props,l=a.deceased,n=void 0===l?{}:l,i=a.deceasedLoading,s=i||!(n&&Object.keys(n).length);return v.default.createElement(b.GridContent,null,v.default.createElement(u.default,{gutter:24},v.default.createElement(d.default,{lg:7,md:24},v.default.createElement(r.default,{bordered:!1,style:{marginBottom:24},loading:s},!s&&v.default.createElement("div",null,v.default.createElement("div",{className:x.default.avatarHolder},v.default.createElement("img",{alt:"",src:n.avatar}),v.default.createElement("div",{className:x.default.name},n.name),v.default.createElement("div",null,n.gender," \u5e74\u9f84: ",n.age)),v.default.createElement("div",{className:x.default.detail},v.default.createElement("p",null,v.default.createElement("i",{className:x.default.title}),n.profession),v.default.createElement("p",null,v.default.createElement("i",{className:x.default.group}),n.cause_of_death),v.default.createElement("p",null,v.default.createElement("i",{className:x.default.group}),(0,E.default)(n.death_time).format("YYYY-MM-DD HH:mm:ss")),v.default.createElement("p",null,v.default.createElement("i",{className:x.default.address}),n.working_city))))),v.default.createElement(d.default,{lg:17,md:24},v.default.createElement(r.default,{className:x.default.tabsCard,bordered:!1,tabList:I,activeTabKey:t,onTabChange:this.onTabChange},this.renderChildrenByTabKey(t)))))}}]),t}(v.Component),C=(0,g.connect)(function(e){var t=e.loading,a=e.tombstoneDetail;return{deceased:a.deceased,deceasedLoading:t.effects["tombstoneDetail/fetchDeceased"]}})(L);t.default=C}}]);