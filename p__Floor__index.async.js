"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[396],{14422:function(x,j,e){e.d(j,{DE:function(){return S},I2:function(){return P},Qt:function(){return g},S$:function(){return M},TM:function(){return c},Yc:function(){return l},ag:function(){return C},cl:function(){return y},qn:function(){return R}});var S="https://three-statices.oss-cn-hangzhou.aliyuncs.com",l=function(n){return n.PROMOSE_ERROR_MSG="\u64CD\u4F5C\u5931\u8D25",n.PROMOSE_SUCCESS_MSG="\u64CD\u4F5C\u6210\u529F",n.PROMOSE_ERROR_DELEETE_MSG="\u64CD\u4F5C\u6210\u529F",n.PROMOSE_ERROR_GETBYID_MSG="\u6807\u8BC6\u4E0D\u5B58\u5728",n.PROMOSE_ERROR_ISHAVE_MSG="\u6570\u636E\u4E0D\u5B58\u5728",n}({}),M=new Map([["floor","\u9910\u996E"],["game","\u5A31\u4E50"],["clothing","\u670D\u88C5"],["education","\u6559\u80B2"],["algo","\u4EBA\u5DE5\u667A\u80FD"],["other","\u5176\u4ED6"]]),P=new Map([["fire","\u6D88\u9632"],["wc","\u536B\u751F\u95F4"],["shops","\u5546\u94FA"],["rest","\u4F11\u606F\u533A"],["visitorCenter","\u6E38\u5BA2\u4E2D\u5FC3"],["parking","\u505C\u8F66\u573A"],["myposition","\u6211\u7684\u4F4D\u7F6E"]]),C=new Map([["fire","/floor-map/icon/xiaofangshuan.png"],["wc","/floor-map/icon/ziyuan.png"],["shops","/floor-map/icon/shangpuzhuanrang-.png"],["rest","/floor-map/icon/xiuxiqu2.png"],["visitorCenter","/floor-map/icon/kefu.png"],["parking","/floor-map/icon/tingchechang.png"]]),g=[{name:"\u95F2\u6797\u57E0",url:"/floor-map/%E8%A5%BF%E5%8D%95%E5%A4%A7%E6%82%A6%E5%9F%8E/F1-01.svg"}],R={rules:[{required:!0,message:"${label}\u5FC5\u586B"}]},y={labelCol:{span:6},wrapperCol:{span:12}},c={effective:!0}},34368:function(x,j,e){e.r(j),e.d(j,{default:function(){return V}});var S=e(97857),l=e.n(S),M=e(15009),P=e.n(M),C=e(99289),g=e.n(C),R=e(5574),y=e.n(R),c=e(90930),n={container:"container___Nrkw8",floorList:"floorList___QGLBe"},d=e(68872),E=e(23323),p=e(63620),s=e(98086),o=e(10418),i=e(5062),u=e(78957),t=e(45093),r=e(4393),h=e(86738),_=e(61781),O=e(26412),b=e(32983),f=e(46500),F=e(67294),G=e(27704),w=e(36531),I=e(29158),A=e(36158),z=e(80854),B=e(14422),a=e(85893),Q=function(){var X=(0,F.useState)(""),N=y()(X,2),ve=N[0],he=N[1],k=function(){var v=g()(P()().mark(function m(Z){var T;return P()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,(0,f.wA)(Z);case 2:T=D.sent,T.success?(d.ZP.success(T.msg),W()):d.ZP.error(T.msg);case 4:case"end":return D.stop()}},m)}));return function(Z){return v.apply(this,arguments)}}(),q=(0,A.Z)(f.jl,{manual:!1,debounceWait:300,onSuccess:function(m){m.success&&se(m.data)}}),W=q.run,ee=(0,A.Z)(f.RT,{manual:!0,onSuccess:function(m){m.success?(W(),d.ZP.success(m.msg)):d.ZP.error(m.msg)}}),te=ee.run,ne=(0,A.Z)(f.TW,{manual:!0,onSuccess:function(m){m.success?(d.ZP.success(m.msg),K({open:!1,isEdit:!1}),W()):d.ZP.error(m.msg)}}),re=ne.run,ae=(0,F.useState)([]),Y=y()(ae,2),$=Y[0],se=Y[1],oe=(0,F.useState)({open:!1,title:"\u65B0\u589E\u666F\u533A",floorData:{}}),H=y()(oe,2),L=H[0],K=H[1],ue=E.Z.useForm(),le=y()(ue,1),U=le[0],ie=function(){K({open:!0,title:"\u65B0\u589E\u666F\u533A",isEdit:!1})},_e=function(){U.validateFields().then(function(){var m=g()(P()().mark(function Z(T){return P()().wrap(function(D){for(;;)switch(D.prev=D.next){case 0:if(!L.isEdit){D.next=5;break}return D.next=3,re(L.editFloorId||"",T);case 3:D.next=7;break;case 5:return D.next=7,k(T);case 7:J();case 8:case"end":return D.stop()}},Z)}));return function(Z){return m.apply(this,arguments)}}())},J=function(){U.resetFields(),K({open:!1})},ce=function(m){K({open:!0,isEdit:!0,editFloorId:m.floorId||"",title:"\u7F16\u8F91\u666F\u533A"}),U.setFieldsValue(m)},de=function(m){z.history.push("/amap/".concat(m))};return(0,a.jsxs)(c._z,{ghost:!0,children:[(0,a.jsx)(p.Z,{title:L.title,open:L.open,onOk:_e,onCancel:J,children:(0,a.jsxs)(E.Z,l()(l()({form:U},B.cl),{},{children:[(0,a.jsx)(E.Z.Item,l()(l()({},B.qn),{},{label:"\u666F\u533A\u540D\u79F0",name:"name",children:(0,a.jsx)(s.Z,{})})),(0,a.jsx)(E.Z.Item,l()(l()({},B.qn),{},{label:"\u8D77\u59CB\u4F4D\u7F6E",initialValue:"119.985163,30.221529",name:"position",children:(0,a.jsx)(s.Z,{})})),(0,a.jsx)(E.Z.Item,l()(l()({},B.qn),{},{label:"\u666F\u533A\u7D22\u5F15",name:"floorIndex",children:(0,a.jsx)(o.Z,{step:"1",precision:0,min:1})})),(0,a.jsx)(E.Z.Item,l()(l()(l()({},B.qn),B.qn),{},{label:"\u6A21\u578B\u8DEF\u5F84",name:"url",children:(0,a.jsx)(i.Z,{options:B.Qt,fieldNames:{label:"name",value:"url"}})}))]}))}),(0,a.jsx)(u.Z,{children:(0,a.jsx)(t.ZP,{type:"primary",onClick:ie,children:"\u65B0\u589E\u666F\u533A"})}),(0,a.jsx)("div",{className:n.floorList,children:$.length!==0?$.map(function(v){return(0,a.jsx)(r.Z,{size:"small",title:v.name,extra:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h.Z,{title:"\u5220\u9664\u666F\u533A",description:"\u662F\u5426\u5220\u9664\u666F\u533A",onConfirm:function(){return te((v==null?void 0:v.floorId)||"")},okText:"\u662F",cancelText:"\u5426",children:(0,a.jsx)(_.Z,{title:"\u5220\u9664",children:(0,a.jsx)(t.ZP,{danger:!0,icon:(0,a.jsx)(G.Z,{}),type:"link"})})}),(0,a.jsx)(_.Z,{title:"\u7F16\u8F91",children:(0,a.jsx)(t.ZP,{icon:(0,a.jsx)(w.Z,{}),onClick:function(){return ce(v)},type:"link"})}),(0,a.jsx)(_.Z,{title:"\u67E5\u770B",children:(0,a.jsx)(t.ZP,{icon:(0,a.jsx)(I.Z,{}),onClick:function(){return de(v.floorId||"")},type:"link"})})]}),style:{width:300},children:(0,a.jsx)(O.Z,{items:[{key:"Descriptions"+v.floorIndex,label:"\u666F\u533A\u7D22\u5F15",children:(0,a.jsx)("p",{children:v.floorIndex})},{key:"Descriptions"+v.storeCount,label:"\u5546\u94FA\u6570\u91CF",children:(0,a.jsx)("p",{children:v.storeCount||0})}]})},v.floorId)}):(0,a.jsx)(b.Z,{})})]})},V=Q},46500:function(x,j,e){e.d(j,{BG:function(){return E},RT:function(){return o},TW:function(){return s},jl:function(){return i},wA:function(){return p}});var S=e(15009),l=e.n(S),M=e(99289),P=e.n(M),C=e(97857),g=e.n(C),R=e(31065),y=e(57632),c=e(20701),n=e(14422),d=new R.y("floorData","floorId"),E=function(t){return new Promise(function(r,h){t.floorId?d.getDataByKeyPath(t.floorId).then(function(_){r(_?(0,c.Em)(JSON.parse(_.data)):(0,c.Z5)(n.Yc.PROMOSE_ERROR_GETBYID_MSG))}):r((0,c.Z5)(n.Yc.PROMOSE_ERROR_GETBYID_MSG))})},p=function(t){return new Promise(function(r,h){var _=(0,y.Z)();t.name!==void 0&&t.floorIndex!==void 0&&t.url!==void 0?(d.saveDataByKeyPath(_,g()(g()({},t),{},{floorId:_})),r((0,c.Em)({floorId:_},n.Yc.PROMOSE_SUCCESS_MSG))):r((0,c.Z5)(n.Yc.PROMOSE_ERROR_MSG))})},s=function(){var u=P()(l()().mark(function t(r,h){return l()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return O.abrupt("return",new Promise(function(){var b=P()(l()().mark(function f(F,G){return l()().wrap(function(I){for(;;)switch(I.prev=I.next){case 0:try{d.getDataByKeyPath(r).then(function(A){d.saveDataByKeyPath(r,g()(g()({},JSON.parse(A.data)),h)),F((0,c.Em)(void 0,n.Yc.PROMOSE_SUCCESS_MSG))})}catch(A){F((0,c.Z5)(n.Yc.PROMOSE_ERROR_MSG))}case 1:case"end":return I.stop()}},f)}));return function(f,F){return b.apply(this,arguments)}}()));case 1:case"end":return O.stop()}},t)}));return function(r,h){return u.apply(this,arguments)}}(),o=function(t){return new Promise(function(){var r=P()(l()().mark(function h(_,O){return l()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:t?d.removeDataByKeyPath(t).then(function(){_((0,c.Em)(void 0,n.Yc.PROMOSE_SUCCESS_MSG))}).catch(function(F){_((0,c.Z5)(n.Yc.PROMOSE_ERROR_DELEETE_MSG))}):_((0,c.Z5)(n.Yc.PROMOSE_ERROR_ISHAVE_MSG));case 1:case"end":return f.stop()}},h)}));return function(h,_){return r.apply(this,arguments)}}())},i=function(){return new Promise(function(){var t=P()(l()().mark(function r(h,_){var O;return l()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.prev=0,f.next=3,d.getAllData();case 3:O=f.sent,h((0,c.Em)(O)),f.next=10;break;case 7:f.prev=7,f.t0=f.catch(0),h((0,c.Z5)(n.Yc.PROMOSE_ERROR_MSG));case 10:case"end":return f.stop()}},r,null,[[0,7]])}));return function(r,h){return t.apply(this,arguments)}}())}},20701:function(x,j,e){e.d(j,{Em:function(){return C},Z5:function(){return g}});var S=e(5574),l=e.n(S),M=e(97857),P=e.n(M),C=function(n,d){return{success:!0,msg:d||"",data:n}},g=function(n){return{success:!1,msg:n||"",data:null}},R=function(n,d){var E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{},o=new URLSearchParams(s).toString();return console.log("queryString",o),new Promise(function(i,u){fetch("".concat(n).concat(o?"?"+o:""),{method:d||"POST",headers:_objectSpread(_objectSpread({},E),{},{Accept:"text/event-stream"}),body:JSON.stringify(p||{})}).finally(function(){console.log(123)}).then(function(t){if(!t.ok)throw new Error("Network response was not ok");return t.text()}).then(function(t){console.log("eventStreamData",t)}).catch(function(t){u(t),console.error("There was a problem with your fetch operation:",t)})})};function y(c){var n=c.trim().split(`
`),d=null;if(n.forEach(function(p){var s=p.split(":"),o=_slicedToArray(s,2),i=o[0],u=o[1];i.trim()==="data"&&(d=u.trim().replace(/\\/g,""))}),d)try{var E=JSON.parse(d);return console.log(E),E}catch(p){console.error("Failed to parse JSON:",p)}return null}},31065:function(x,j,e){e.d(j,{y:function(){return d}});var S=e(15009),l=e.n(S),M=e(99289),P=e.n(M),C=e(12444),g=e.n(C),R=e(72004),y=e.n(R),c=e(9783),n=e.n(c),d=function(){function E(p){var s=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"id";g()(this,E),n()(this,"databaseName",void 0),n()(this,"db",void 0),n()(this,"isOpen",!1),n()(this,"keyPath",void 0),this.databaseName=p,this.keyPath=o;var i=window.indexedDB.open(this.databaseName);i.onerror=function(){console.log("\u6570\u636E\u5E93\u6253\u5F00\u62A5\u9519"),s.isOpen=!1},i.onsuccess=function(){s.db=i.result,console.log("\u6570\u636E\u5E93\u6253\u5F00\u6210\u529F"),s.isOpen=!0},i.onupgradeneeded=function(u){s.db=u.target.result,s.db.objectStoreNames.contains(s.databaseName)||s.db.createObjectStore(s.databaseName,{keyPath:s.keyPath})}}return y()(E,[{key:"saveDataByKeyPath",value:function(){var p=P()(l()().mark(function o(i,u){var t,r,h,_;return l()().wrap(function(b){for(;;)switch(b.prev=b.next){case 0:return t=JSON.stringify(u),r={data:t},r[this.keyPath]=i,b.next=5,this.isHave(i);case 5:h=b.sent,_=this.db.transaction([this.databaseName],"readwrite").objectStore(this.databaseName),console.log("store",_,r),h?_.put(r):_.add(r);case 9:case"end":return b.stop()}},o,this)}));function s(o,i){return p.apply(this,arguments)}return s}()},{key:"isHave",value:function(s){var o=this;return new Promise(function(i){var u=o.db.transaction(o.databaseName).objectStore(o.databaseName);u.openCursor().onsuccess=function(t){var r=t.target.result;console.log("cursor",r,s),i(r&&(r==null?void 0:r.primaryKey)===s)}})}},{key:"getAllData",value:function(s,o){var i=this;return new Promise(function(u){var t=[],r=i.db.transaction(i.databaseName).objectStore(i.databaseName);r.openCursor().onsuccess=function(h){var _=h.target.result;if(_){var O=_.value,b=JSON.parse(O.data);s&&o!==void 0?b[s]===o&&t.push(b):t.push(b),_.continue()}else u(t)}})}},{key:"getDataByKeyPath",value:function(s){var o=this;return new Promise(function(i){var u=o.db.transaction([o.databaseName]).objectStore(o.databaseName).get(s);u.onsuccess=function(){u!=null&&u.result?i(u==null?void 0:u.result):i(null)}})}},{key:"removeDataByKeyPath",value:function(s){var o=this;return new Promise(function(i){var u=o.db.transaction([o.databaseName],"readwrite").objectStore(o.databaseName).delete(s);u.onsuccess=function(){i(!0)}})}}]),E}()}}]);
