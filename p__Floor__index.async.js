"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[396],{14422:function(W,p,e){e.d(p,{Qt:function(){return x},Yc:function(){return D},uV:function(){return c}});var D=function(d){return d.PROMOSE_ERROR_MSG="\u64CD\u4F5C\u5931\u8D25",d.PROMOSE_SUCCESS_MSG="\u64CD\u4F5C\u6210\u529F",d.PROMOSE_ERROR_DELEETE_MSG="\u64CD\u4F5C\u6210\u529F",d.PROMOSE_ERROR_GETBYID_MSG="\u6807\u8BC6\u4E0D\u5B58\u5728",d.PROMOSE_ERROR_ISHAVE_MSG="\u6570\u636E\u4E0D\u5B58\u5728",d}({}),c=[{label:"\u9910\u996E",value:"floor"},{label:"\u5A31\u4E50",value:"game"},{label:"\u670D\u88C5",value:"clothing"},{label:"\u6559\u80B2",value:"education"},{label:"\u4EBA\u5DE5\u667A\u80FD",value:"algo"},{label:"\u5176\u4ED6",value:"other"}],x=[{name:"F1",url:"floor-map/%E8%A5%BF%E5%8D%95%E5%A4%A7%E6%82%A6%E5%9F%8E/F1.svg"}]},34368:function(W,p,e){e.r(p),e.d(p,{default:function(){return S}});var D=e(15009),c=e.n(D),x=e(99289),d=e.n(x),A=e(5574),g=e.n(A),b=e(90930),Y={container:"container___Nrkw8",floorList:"floorList___QGLBe"},F=e(68872),E=e(27494),K=e(63620),j=e(98086),L=e(10418),$=e(5062),P=e(78957),h=e(45093),m=e(4393),R=e(86738),Z=e(61781),H=e(26412),U=e(32983),O=e(32774),B=e(67294),f=e(27704),o=e(36531),t=e(29158),a=e(577),r=e(80854),u=e(14422),n=e(85893),s=function(){var J=(0,B.useState)(""),y=g()(J,2),V=y[0],he=y[1],q=function(){var i=d()(c()().mark(function l(G){var C;return c()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,(0,O.wA)(G);case 2:C=v.sent,C.success?(F.ZP.success(C.msg),Q()):F.ZP.error(C.msg);case 4:case"end":return v.stop()}},l)}));return function(G){return i.apply(this,arguments)}}(),_=(0,a.Z)(O.jl,{manual:!1,debounceWait:300,onSuccess:function(l){l.success&&se(l.data)}}),Q=_.run,ee=(0,a.Z)(O.RT,{manual:!0,onSuccess:function(l){l.success?(Q(),F.ZP.success(l.msg)):F.ZP.error(l.msg)}}),te=ee.run,ne=(0,a.Z)(O.TW,{manual:!0,onSuccess:function(l){l.success?(F.ZP.success(l.msg),N({open:!1,isEdit:!1}),Q()):F.ZP.error(l.msg)}}),ae=ne.run,re=(0,B.useState)([]),w=g()(re,2),z=w[0],se=w[1],oe=(0,B.useState)({open:!1,title:"\u65B0\u589E\u697C\u5C42",floorData:{}}),k=g()(oe,2),I=k[0],N=k[1],ue=E.Z.useForm(),le=g()(ue,1),T=le[0],ie=function(){N({open:!0,title:"\u65B0\u589E\u697C\u5C42",isEdit:!1})},ce=function(){T.validateFields().then(function(){var l=d()(c()().mark(function G(C){return c()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(!I.isEdit){v.next=5;break}return v.next=3,ae(I.editFloorId||"",C);case 3:v.next=7;break;case 5:return v.next=7,q(C);case 7:X();case 8:case"end":return v.stop()}},G)}));return function(G){return l.apply(this,arguments)}}())},X=function(){T.resetFields(),N({open:!1})},de=function(l){N({open:!0,isEdit:!0,editFloorId:l.floorId||"",title:"\u7F16\u8F91\u697C\u5C42"}),T.setFieldsValue(l)},fe=function(l){r.history.push("/store-model/".concat(l))};return(0,n.jsxs)(b._z,{ghost:!0,children:[(0,n.jsx)(K.Z,{title:I.title,open:I.open,onOk:ce,onCancel:X,children:(0,n.jsxs)(E.Z,{form:T,labelCol:{span:4},wrapperCol:{span:12},children:[(0,n.jsx)(E.Z.Item,{label:"\u697C\u5C42\u540D\u79F0",name:"name",children:(0,n.jsx)(j.Z,{})}),(0,n.jsx)(E.Z.Item,{label:"\u697C\u5C42\u7D22\u5F15",name:"floorIndex",children:(0,n.jsx)(L.Z,{step:"1"})}),(0,n.jsx)(E.Z.Item,{label:"\u6A21\u578B\u8DEF\u5F84",name:"url",children:(0,n.jsx)($.Z,{options:u.Qt,fieldNames:{label:"name",value:"url"}})})]})}),(0,n.jsx)(P.Z,{children:(0,n.jsx)(h.ZP,{type:"primary",onClick:ie,children:"\u65B0\u589E\u697C\u5C42"})}),(0,n.jsx)("div",{className:Y.floorList,children:z.length!==0?z.map(function(i){return(0,n.jsx)(m.Z,{size:"small",title:i.name,extra:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(R.Z,{title:"\u5220\u9664\u697C\u5C42",description:"\u662F\u5426\u5220\u9664\u697C\u5C42",onConfirm:function(){return te((i==null?void 0:i.floorId)||"")},okText:"\u662F",cancelText:"\u5426",children:(0,n.jsx)(Z.Z,{title:"\u5220\u9664",children:(0,n.jsx)(h.ZP,{danger:!0,icon:(0,n.jsx)(f.Z,{}),type:"link"})})}),(0,n.jsx)(Z.Z,{title:"\u7F16\u8F91",children:(0,n.jsx)(h.ZP,{icon:(0,n.jsx)(o.Z,{}),onClick:function(){return de(i)},type:"link"})}),(0,n.jsx)(Z.Z,{title:"\u67E5\u770B",children:(0,n.jsx)(h.ZP,{icon:(0,n.jsx)(t.Z,{}),onClick:function(){return fe(i.floorId||"")},type:"link"})})]}),style:{width:300},children:(0,n.jsx)(H.Z,{items:[{key:"Descriptions"+i.floorIndex,label:"\u697C\u5C42\u7D22\u5F15",children:(0,n.jsx)("p",{children:i.floorIndex})},{key:"Descriptions"+i.storeCount,label:"\u5546\u94FA\u6570\u91CF",children:(0,n.jsx)("p",{children:i.storeCount||0})}]})},i.floorId)}):(0,n.jsx)(U.Z,{})})]})},S=s},32774:function(W,p,e){e.d(p,{wA:function(){return H},jl:function(){return B},BG:function(){return Z},RT:function(){return O},TW:function(){return U}});var D=e(15009),c=e.n(D),x=e(99289),d=e.n(x),A=e(97857),g=e.n(A),b=e(12444),Y=e.n(b),F=e(72004),E=e.n(F),K=e(9783),j=e.n(K),L=function(){function f(o){var t=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"id";Y()(this,f),j()(this,"databaseName",void 0),j()(this,"db",void 0),j()(this,"isOpen",!1),j()(this,"keyPath",void 0),this.databaseName=o,this.keyPath=a;var r=window.indexedDB.open(this.databaseName);r.onerror=function(){console.log("\u6570\u636E\u5E93\u6253\u5F00\u62A5\u9519"),t.isOpen=!1},r.onsuccess=function(){t.db=r.result,console.log("\u6570\u636E\u5E93\u6253\u5F00\u6210\u529F"),t.isOpen=!0},r.onupgradeneeded=function(u){t.db=u.target.result,t.db.objectStoreNames.contains(t.databaseName)||t.db.createObjectStore(t.databaseName,{keyPath:t.keyPath})}}return E()(f,[{key:"saveDataByKeyPath",value:function(){var o=d()(c()().mark(function a(r,u){var n,s,S,M;return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return n=JSON.stringify(u),s={data:n},s[this.keyPath]=r,y.next=5,this.isHave(r);case 5:S=y.sent,M=this.db.transaction([this.databaseName],"readwrite").objectStore(this.databaseName),S?M.put(s):M.add(s);case 8:case"end":return y.stop()}},a,this)}));function t(a,r){return o.apply(this,arguments)}return t}()},{key:"isHave",value:function(t){var a=this;return new Promise(function(r){var u=a.db.transaction(a.databaseName).objectStore(a.databaseName);u.openCursor().onsuccess=function(n){var s=n.target.result;console.log("cursor",s,t),r(s&&(s==null?void 0:s.primaryKey)===t)}})}},{key:"getAllData",value:function(){var t=this;return new Promise(function(a){var r=[],u=t.db.transaction(t.databaseName).objectStore(t.databaseName);u.openCursor().onsuccess=function(n){var s=n.target.result;if(s){var S=s.value;r.push(JSON.parse(S.data)),s.continue()}else a(r)}})}},{key:"getDataByKeyPath",value:function(t){var a=this;return new Promise(function(r){var u=a.db.transaction([a.databaseName]).objectStore(a.databaseName).get(t);u.onsuccess=function(){console.log("request",u),u!=null&&u.result?r(u==null?void 0:u.result):r(null)}})}},{key:"removeDataByKeyPath",value:function(t){var a=this;return new Promise(function(r){var u=a.db.transaction([a.databaseName],"readwrite").objectStore(a.databaseName).delete(t);u.onsuccess=function(){r(!0)}})}}]),f}(),$=e(57632),P=function(o,t){return{success:!0,msg:t||"",data:o}},h=function(o){return{success:!1,msg:o||"",data:null}},m=e(14422),R=new L("floorData","floorId"),Z=function(o){return new Promise(function(t,a){o.floorId?R.getDataByKeyPath(o.floorId).then(function(r){t(r?P(JSON.parse(r.data)):h(m.Yc.PROMOSE_ERROR_GETBYID_MSG))}):t(h(m.Yc.PROMOSE_ERROR_GETBYID_MSG))})},H=function(o){return new Promise(function(t,a){var r=(0,$.Z)();o.name!==void 0&&o.floorIndex!==void 0&&o.url!==void 0?(R.saveDataByKeyPath(r,g()(g()({},o),{},{floorId:r})),t(P({floorId:r},m.Yc.PROMOSE_SUCCESS_MSG))):t(h(m.Yc.PROMOSE_ERROR_MSG))})},U=function(){var f=d()(c()().mark(function o(t,a){return c()().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.abrupt("return",new Promise(function(){var n=d()(c()().mark(function s(S,M){return c()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:try{R.getDataByKeyPath(t).then(function(V){R.saveDataByKeyPath(t,g()(g()(g()({},JSON.parse(V.data)),a),{},{floorId:t})),S(P(void 0,m.Yc.PROMOSE_SUCCESS_MSG))})}catch(V){S(h(m.Yc.PROMOSE_ERROR_MSG))}case 1:case"end":return y.stop()}},s)}));return function(s,S){return n.apply(this,arguments)}}()));case 1:case"end":return u.stop()}},o)}));return function(t,a){return f.apply(this,arguments)}}(),O=function(o){return new Promise(function(){var t=d()(c()().mark(function a(r,u){return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:o?R.removeDataByKeyPath(o).then(function(){r(P(void 0,m.Yc.PROMOSE_SUCCESS_MSG))}).catch(function(S){r(h(m.Yc.PROMOSE_ERROR_DELEETE_MSG))}):r(h(m.Yc.PROMOSE_ERROR_ISHAVE_MSG));case 1:case"end":return s.stop()}},a)}));return function(a,r){return t.apply(this,arguments)}}())},B=function(){return new Promise(function(){var o=d()(c()().mark(function t(a,r){var u;return c()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,R.getAllData();case 3:u=s.sent,a(P(u)),s.next=10;break;case 7:s.prev=7,s.t0=s.catch(0),a(h(m.Yc.PROMOSE_ERROR_MSG));case 10:case"end":return s.stop()}},t,null,[[0,7]])}));return function(t,a){return o.apply(this,arguments)}}())}}}]);