"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[445],{82162:function(It,U,t){t.r(U),t.d(U,{default:function(){return be}});var de=t(97857),K=t.n(de),ve=t(19632),me=t.n(ve),he=t(15009),Y=t.n(he),Se=t(99289),Q=t.n(Se),Ie=t(5574),A=t.n(Ie),V=t(46500),ge=t(90930),j=t(96638),X=t(36158),k=t(97582),h=t(67294),$=t(45210);function Ne(o){var f=(0,h.useRef)(0),e=(0,k.CR)((0,h.useState)(o),2),c=e[0],r=e[1],u=(0,h.useCallback)(function(m){cancelAnimationFrame(f.current),f.current=requestAnimationFrame(function(){r(m)})},[]);return(0,$.Z)(function(){cancelAnimationFrame(f.current)}),[c,u]}var pe=Ne,Re=t(3930),Ce=t(92770),ye=t(52982);function W(o,f){if(ye.Z){if(!o)return f;var e;return(0,Ce.mf)(o)?e=o():"current"in o?e=o.current:e=o,e}}var w=t(8224),Ee=function(o){var f=function(e,c,r){var u=(0,h.useRef)(!1),m=(0,h.useRef)([]),S=(0,h.useRef)([]),I=(0,h.useRef)();o(function(){var d,C=Array.isArray(r)?r:[r],i=C.map(function(s){return W(s)});if(!u.current){u.current=!0,m.current=i,S.current=c,I.current=e();return}(i.length!==m.current.length||!(0,w.Z)(m.current,i)||!(0,w.Z)(S.current,c))&&((d=I.current)===null||d===void 0||d.call(I),m.current=i,S.current=c,I.current=e())}),(0,$.Z)(function(){var d;(d=I.current)===null||d===void 0||d.call(I),u.current=!1})};return f},Ze=Ee,Le=Ze(h.useEffect),Ae=Le;function je(o,f,e){e===void 0&&(e={});var c=(0,Re.Z)(f);Ae(function(){var r=W(e.target,window);if(r!=null&&r.addEventListener){var u=function(m){return c.current(m)};return r.addEventListener(o,u,{capture:e.capture,once:e.once,passive:e.passive}),function(){r.removeEventListener(o,u,{capture:e.capture})}}},[o,e.capture,e.once,e.passive],e.target)}var Pe=je,Xe={screenX:NaN,screenY:NaN,clientX:NaN,clientY:NaN,pageX:NaN,pageY:NaN,elementX:NaN,elementY:NaN,elementH:NaN,elementW:NaN,elementPosX:NaN,elementPosY:NaN},Ye=function(o){var f=(0,k.CR)(pe(Xe),2),e=f[0],c=f[1];return Pe("mousemove",function(r){var u=r.screenX,m=r.screenY,S=r.clientX,I=r.clientY,d=r.pageX,C=r.pageY,i={screenX:u,screenY:m,clientX:S,clientY:I,pageX:d,pageY:C,elementX:NaN,elementY:NaN,elementH:NaN,elementW:NaN,elementPosX:NaN,elementPosY:NaN},s=W(o);if(s){var y=s.getBoundingClientRect(),H=y.left,F=y.top,te=y.width,ne=y.height;i.elementPosX=H+window.pageXOffset,i.elementPosY=F+window.pageYOffset,i.elementX=d-i.elementPosX,i.elementY=C-i.elementPosY,i.elementW=te,i.elementH=ne}c(i)},{target:function(){return document}}),e},b=t(68872),xe=t(45093),q=t(80854),x={floorList:"floorList___N4iHi",active:"active___Ryykx",threeMain:"threeMain___u9czE",css2dRender:"css2dRender___gItOl"},Fe=t(57632),p=t(24712),Te=t(71262),_=t(14422),ee=t(93178),Me=t(43842),Oe=t(22759),We=t(91111),Be=t(64599),He=t.n(Be),ze=t(12444),Ge=t.n(ze),De=t(72004),Je=t.n(De),Ue=t(9783),Ke=t.n(Ue),E=t(99477),Qe=function(){function o(){Ge()(this,o),Ke()(this,"resources",void 0),this.resources=new Set}return Je()(o,[{key:"track",value:function(e){var c=this;if(!e)return e;if(Array.isArray(e))return e.forEach(function(i){return c.track(i)}),e;if((e.dispose||e instanceof E.Tme)&&this.resources.add(e),e instanceof E.Tme)this.track(e.geometry),this.track(e.material),this.track(e.children);else if(e instanceof E.F5T){for(var r=0,u=Object.values(e);r<u.length;r++){var m=u[r];m instanceof E.xEZ&&this.track(m)}if(e.uniforms)for(var S=0,I=Object.values(e.uniforms);S<I.length;S++){var d=I[S];if(d){var C=d.value;(C instanceof E.xEZ||Array.isArray(C))&&this.track(C)}}}return e}},{key:"untrack",value:function(e){this.resources.delete(e)}},{key:"dispose",value:function(){var e=He()(this.resources),c;try{for(e.s();!(c=e.n()).done;){var r=c.value;r instanceof E.Tme&&r.parent&&r.parent.remove(r),r.dispose&&r.dispose()}}catch(u){e.e(u)}finally{e.f()}this.resources.clear()}}]),o}(),B=t(3682),Ve=t(79497),ke=t(77572),$e=t(87177),R=t(85893),we=function(){var f,e=(0,h.useRef)([]),c=new Qe,r=(0,h.useRef)(),u=(0,j.Z)({mouse:new E.FM8,rayChildren:[],raycaster:new E.iMs,floorGroup:new E.ZAu}),m=A()(u,2),S=m[0],I=m[1],d=(0,q.useParams)(),C=(0,j.Z)({floorInfo:{},floorList:[],floorId:""}),i=A()(C,2),s=i[0],y=i[1],H=(0,j.Z)({thatStoreId:""}),F=A()(H,2),te=F[0],ne=F[1],qe=(0,X.Z)(V.BG,{manual:!0,onSuccess:function(){var a=Q()(Y()().mark(function l(v){var N;return Y()().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:if(!v.success){g.next=6;break}return y({floorInfo:v.data}),g.next=4,(0,Te.m)(_.DE+v.data.url);case 4:N=g.sent,it(N);case 6:case"end":return g.stop()}},l)}));function n(l){return a.apply(this,arguments)}return n}()}),_e=qe.run,et=(0,X.Z)(ee.HC,{manual:!0,onSuccess:function(n){n.success?(M({open:!1}),b.ZP.success(n.msg)):b.ZP.error(n.msg)}}),tt=et.run;(0,h.useEffect)(function(){c.dispose(),_e({floorId:s.floorId||""})},[s.floorId]),(0,X.Z)(V.jl,{onSuccess:function(n){if(n.success){if(d.id&&d.id!==":id")y({floorId:d.id});else{var l;y({floorId:(l=n.data[0])===null||l===void 0?void 0:l.floorId})}y({floorList:n.data.sort(function(v,N){return v.floorIndex&&N.floorIndex&&v.floorIndex-N.floorIndex})})}}});var nt=function(n){n&&s.floorId!==n&&y({floorId:n})},L=(0,h.useRef)(null),z=(0,h.useRef)(null),gt=Ye(L.current);(0,h.useEffect)(function(){r.current=c.track.bind(c),L.current&&z.current&&((0,p.S1)(L.current,z.current),p.jG.setAnimationLoop(at),window.addEventListener("click",rt))},[]);var rt=(0,h.useCallback)(function(a){if(_.TM.effective&&a.target.localName==="canvas"){var n,l,v,N=S.mouse.clone(),P=(0,B.fJ)(L.current);N.x=(a.clientX-P.left)/((n=L.current)===null||n===void 0?void 0:n.offsetWidth)*2-1,N.y=-((a.clientY-P.top)/((l=L.current)===null||l===void 0?void 0:l.offsetHeight))*2+1,I({mouse:N}),S.raycaster.setFromCamera(N,p.nS);var g=S.raycaster.intersectObjects(e.current);if(((v=g[0])===null||v===void 0||(v=v.object)===null||v===void 0?void 0:v.name)==="floor"){var Z=g[0].point.toArray();Z&&ce({open:!0,pointId:(0,Fe.Z)(),pointV3:Z});return}if(g[0]&&g[0].object){var D,J=g[0].object;if(!((D=J.userData)!==null&&D!==void 0&&D.bindInfo)){var O=J.storeId;if(O){var ue=p.Ah.getObjectByProperty("storeId",O);ue&&(ue.material=Ve.kg.clone()),J.storeType==="bind"?ct(O):oe("".concat(O))}}}}},[S.floorGroup]),at=function(){p.jG.render(p.Ah,p.nS),p.tf.render(p.Ah,p.nS)},ot=(0,j.Z)({open:!1,storeId:"",addId:""}),re=A()(ot,2),G=re[0],ae=re[1],oe=function(n,l){ae({open:!0,storeId:l?"":n,addId:n})},st=(0,j.Z)({open:!1,storeId:""}),se=A()(st,2),T=se[0],M=se[1],lt=(0,X.Z)(ee.Ev,{manual:!0,debounceWait:300,onSuccess:function(n){n.success&&(0,B.u4)(n.data,S.floorGroup)}}),le=lt.run,ft=(0,X.Z)($e.Wh,{manual:!0,debounceWait:300,onSuccess:function(n){n.success&&(0,B.uz)(n.data)}}),fe=ft.run,it=function(){var a=Q()(Y()().mark(function n(l){var v,N,P;return Y()().wrap(function(Z){for(;;)switch(Z.prev=Z.next){case 0:return v=(0,We.R)(l),N=v.size,P=v.center,l.position.copy(P.clone().negate()),I({rayChildren:l.children,floorGroup:l}),e.current=me()(l.children),r.current(l),p.Ah.add(l),Z.next=8,le(s.floorId||"");case 8:return Z.next=10,fe(s.floorId||"");case 10:case"end":return Z.stop()}},n)}));return function(l){return a.apply(this,arguments)}}(),ct=function(n){M({open:!0,storeId:n})},ut=function(){M({open:!1}),oe(T.storeId,!1)},dt=function(){tt(T.storeId),console.log("\u5220\u9664\u56DE\u8C03")},vt=function(){q.history.push({pathname:"/amap/".concat(s.floorId)})},mt=function(n){ce({open:n})},ht=(0,j.Z)({floorId:s.floorId||"",open:!1,setOpen:mt,floorList:s.floorList,pointV3:[0,0,0]}),ie=A()(ht,2),St=ie[0],ce=ie[1];return(0,R.jsxs)(ge._z,{title:(f=s.floorInfo)===null||f===void 0?void 0:f.name,ghost:!0,children:[(0,R.jsx)(xe.ZP,{onClick:vt,children:"\u5927\u5C4F\u6F14\u793A"}),(0,R.jsx)("ul",{className:x.floorList,children:(s.floorList||[]).map(function(a){return(0,R.jsx)("li",{onClick:function(){return nt(a.floorId)},className:"".concat(s.floorId===a.floorId?x.active:""),children:(0,R.jsx)("span",{children:a.name})},a.floorId)})}),(0,R.jsxs)("div",{className:x.threeMain,children:[(0,R.jsx)("canvas",{ref:L}),(0,R.jsx)("div",{className:x.css2dRender,ref:z})]}),(0,R.jsx)(Me.Z,{floorId:s.floorId||"",storeId:G.storeId,open:G.open,setOpen:function(n){return ae({open:n})},floorList:s.floorList,addId:G.addId,refreshStore:le}),(0,R.jsx)(Oe.Z,{delBtnCallback:dt,editBtnCallback:ut,open:T.open,floorList:s.floorList,setOpen:function(n){return M({open:n})},storeId:T.storeId}),(0,R.jsx)(ke.Z,K()(K()({},St),{},{refreshPoint:fe,floorId:s.floorId||"",floorList:s.floorList}))]})},be=we}}]);
