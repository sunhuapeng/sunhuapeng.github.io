webpackJsonp([7],{Cyma:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("mnNT"),s={name:"note",components:{"art-list":i("Y5Jn").a},data:function(){return{articleList:[]}},watch:{articleList:function(t,e){this.$store.dispatch("fileList",t)}},methods:{getFiles:function(){var t=this,e=new n.a;e.init("笔记"),e.getFile.then(function(e){t.articleList=e})}},computed:{},mounted:function(){},created:function(){this.getFiles(),console.log()}},a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"other-note Modular"},[e("h2",[this._v("NOTE")]),this._v(" "),this.articleList.length?e("art-list",{attrs:{type:"",artData:this.articleList}}):e("p",{staticClass:"nothing"},[this._v("\n    啥子都没得...\n  ")])],1)},staticRenderFns:[]};var r=i("C7Lr")(s,a,!1,function(t){i("ZEqm")},"data-v-66bed746",null);e.default=r.exports},ZEqm:function(t,e){}});
//# sourceMappingURL=7.45226d18f55f0605335e.js.map