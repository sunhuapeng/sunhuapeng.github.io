(self["webpackChunk"] = self["webpackChunk"] || []).push([[691],{

/***/ 81618:
/***/ (function(module) {

"use strict";
(function(m,p){ true?module.exports=p():0})(this,function(){function m(a){var b=[];a.AMapUI&&b.push(p(a.AMapUI));a.Loca&&b.push(r(a.Loca));return Promise.all(b)}function p(a){return new Promise(function(h,c){var f=[];if(a.plugins)for(var e=0;e<a.plugins.length;e+=1)-1==d.AMapUI.plugins.indexOf(a.plugins[e])&&f.push(a.plugins[e]);if(g.AMapUI===b.failed)c("\u524d\u6b21\u8bf7\u6c42 AMapUI \u5931\u8d25");
else if(g.AMapUI===b.notload){g.AMapUI=b.loading;d.AMapUI.version=a.version||d.AMapUI.version;e=d.AMapUI.version;var l=document.body||document.head,k=document.createElement("script");k.type="text/javascript";k.src="https://webapi.amap.com/ui/"+e+"/main.js";k.onerror=function(a){g.AMapUI=b.failed;c("\u8bf7\u6c42 AMapUI \u5931\u8d25")};k.onload=function(){g.AMapUI=b.loaded;if(f.length)window.AMapUI.loadUI(f,function(){for(var a=0,b=f.length;a<b;a++){var c=f[a].split("/").slice(-1)[0];window.AMapUI[c]=
arguments[a]}for(h();n.AMapUI.length;)n.AMapUI.splice(0,1)[0]()});else for(h();n.AMapUI.length;)n.AMapUI.splice(0,1)[0]()};l.appendChild(k)}else g.AMapUI===b.loaded?a.version&&a.version!==d.AMapUI.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c AMapUI \u6df7\u7528"):f.length?window.AMapUI.loadUI(f,function(){for(var a=0,b=f.length;a<b;a++){var c=f[a].split("/").slice(-1)[0];window.AMapUI[c]=arguments[a]}h()}):h():a.version&&a.version!==d.AMapUI.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c AMapUI \u6df7\u7528"):
n.AMapUI.push(function(a){a?c(a):f.length?window.AMapUI.loadUI(f,function(){for(var a=0,b=f.length;a<b;a++){var c=f[a].split("/").slice(-1)[0];window.AMapUI[c]=arguments[a]}h()}):h()})})}function r(a){return new Promise(function(h,c){if(g.Loca===b.failed)c("\u524d\u6b21\u8bf7\u6c42 Loca \u5931\u8d25");else if(g.Loca===b.notload){g.Loca=b.loading;d.Loca.version=a.version||d.Loca.version;var f=d.Loca.version,e=d.AMap.version.startsWith("2"),l=f.startsWith("2");if(e&&!l||!e&&l)c("JSAPI \u4e0e Loca \u7248\u672c\u4e0d\u5bf9\u5e94\uff01\uff01");
else{e=d.key;l=document.body||document.head;var k=document.createElement("script");k.type="text/javascript";k.src="https://webapi.amap.com/loca?v="+f+"&key="+e;k.onerror=function(a){g.Loca=b.failed;c("\u8bf7\u6c42 AMapUI \u5931\u8d25")};k.onload=function(){g.Loca=b.loaded;for(h();n.Loca.length;)n.Loca.splice(0,1)[0]()};l.appendChild(k)}}else g.Loca===b.loaded?a.version&&a.version!==d.Loca.version?c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c Loca \u6df7\u7528"):h():a.version&&a.version!==d.Loca.version?
c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c Loca \u6df7\u7528"):n.Loca.push(function(a){a?c(a):c()})})}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var b;(function(a){a.notload="notload";a.loading="loading";a.loaded="loaded";a.failed="failed"})(b||(b={}));var d={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},g={AMap:b.notload,AMapUI:b.notload,Loca:b.notload},n={AMap:[],AMapUI:[],Loca:[]},q=[],t=function(a){"function"==typeof a&&
(g.AMap===b.loaded?a(window.AMap):q.push(a))};return{load:function(a){return new Promise(function(h,c){if(g.AMap==b.failed)c("");else if(g.AMap==b.notload){var f=a.key,e=a.version,l=a.plugins;f?(window.AMap&&"lbs.amap.com"!==location.host&&c("\u7981\u6b62\u591a\u79cdAPI\u52a0\u8f7d\u65b9\u5f0f\u6df7\u7528"),d.key=f,d.AMap.version=e||d.AMap.version,d.AMap.plugins=l||d.AMap.plugins,g.AMap=b.loading,e=document.body||document.head,window.___onAPILoaded=function(d){delete window.___onAPILoaded;if(d)g.AMap=
b.failed,c(d);else for(g.AMap=b.loaded,m(a).then(function(){h(window.AMap)})["catch"](c);q.length;)q.splice(0,1)[0]()},l=document.createElement("script"),l.type="text/javascript",l.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+d.AMap.version+"&key="+f+"&plugin="+d.AMap.plugins.join(","),l.onerror=function(a){g.AMap=b.failed;c(a)},e.appendChild(l)):c("\u8bf7\u586b\u5199key")}else if(g.AMap==b.loaded)if(a.key&&a.key!==d.key)c("\u591a\u4e2a\u4e0d\u4e00\u81f4\u7684 key");else if(a.version&&
a.version!==d.AMap.version)c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c JSAPI \u6df7\u7528");else{f=[];if(a.plugins)for(e=0;e<a.plugins.length;e+=1)-1==d.AMap.plugins.indexOf(a.plugins[e])&&f.push(a.plugins[e]);if(f.length)window.AMap.plugin(f,function(){m(a).then(function(){h(window.AMap)})["catch"](c)});else m(a).then(function(){h(window.AMap)})["catch"](c)}else if(a.key&&a.key!==d.key)c("\u591a\u4e2a\u4e0d\u4e00\u81f4\u7684 key");else if(a.version&&a.version!==d.AMap.version)c("\u4e0d\u5141\u8bb8\u591a\u4e2a\u7248\u672c JSAPI \u6df7\u7528");
else{var k=[];if(a.plugins)for(e=0;e<a.plugins.length;e+=1)-1==d.AMap.plugins.indexOf(a.plugins[e])&&k.push(a.plugins[e]);t(function(){if(k.length)window.AMap.plugin(k,function(){m(a).then(function(){h(window.AMap)})["catch"](c)});else m(a).then(function(){h(window.AMap)})["catch"](c)})}})},reset:function(){delete window.AMap;delete window.AMapUI;delete window.Loca;d={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}};g={AMap:b.notload,AMapUI:b.notload,
Loca:b.notload};n={AMap:[],AMapUI:[],Loca:[]}}}})


/***/ }),

/***/ 53156:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ AMAP; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(19632);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
;// CONCATENATED MODULE: ./src/pages/AMAP/style.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var stylemodules = ({"container":"container___piSlX","amapBtns":"amapBtns___TKDOt"});
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(80854);
// EXTERNAL MODULE: ./src/utils/public.ts
var utils_public = __webpack_require__(64119);
// EXTERNAL MODULE: ./node_modules/@amap/amap-jsapi-loader/dist/index.js
var dist = __webpack_require__(81618);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/pages/AMAP/ts/createMap.ts



var CreateAMap = function CreateAMap() {
  return new Promise(function (resolve, reject) {
    dist_default().load({
      "key": "e4837115d42c13263434bcfd48074dcc",
      // 申请好的Web端开发者Key，首次调用 load 时必填
      "version": "2.0",
      "plugins": ["AMap.Walking", "AMap.Driving"],
      // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      "Loca": {
        version: '2.0.0'
      }
    }).then( /*#__PURE__*/function () {
      var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(res) {
        return regeneratorRuntime_default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              resolve(res);
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }())["catch"](function (error) {
      reject(error);
    });
  });
};
var ClearBuildPoint = [[119.986343, 30.22536], [119.98631, 30.225325], [119.986263, 30.224848], [119.98609, 30.224193], [119.985871, 30.223613], [119.985542, 30.222954], [119.985286, 30.222578], [119.985049, 30.222334], [119.985156, 30.222196], [119.985207, 30.222107], [119.985924, 30.221664], [119.986602, 30.22148], [119.987217, 30.221367], [119.98743, 30.222036], [119.987565, 30.22294], [119.987497, 30.22345], [119.987778, 30.223592], [119.988224, 30.224764], [119.988403, 30.225153], [119.988277, 30.22522], [119.986408, 30.225395], [119.986343, 30.22536]];
var cleanBuild = function cleanBuild(AMap, map) {
  // 底图楼块扣除
  var building = new AMap.Buildings({
    zIndex: 10
  });
  map.on('click', /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(e) {
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }());
  building.setStyle({
    hideWithoutStyle: false,
    //是否隐藏设定区域外的楼块
    areas: [{
      visible: false,
      //是否可见
      rejectTexture: false,
      //是否屏蔽自定义地图的纹理
      color1: '00000000',
      //楼顶颜色
      color2: '00000000',
      //楼面颜色
      path: [ClearBuildPoint]
    }]
  });
  map.add(building);
};

/**
 * 
 * @param AMap 地图api构造函数
 * @param map 地图实例
 * @param start 起始经纬坐标
 * @param end 结束经纬坐标
 * @returns 路径
 */
var getSearchTrailsLngLat = function getSearchTrailsLngLat(AMap, map, start, end) {
  // 构造路线导航类
  var driving = new AMap.Walking({
    map: map,
    showTraffic: true,
    hideMarkers: true,
    isOutline: false,
    autoFitView: false
  });
  return new Promise(function (resolve, reject) {
    driving.search(new AMap.LngLat(start.x, start.y), new AMap.LngLat(end.x, end.y), function (status, result) {
      if (status === 'complete') {
        resolve(result);
        driving.clear();
      } else {
        reject(result);
      }
    });
  });
};
// EXTERNAL MODULE: ./node_modules/ahooks/es/useRequest/index.js + 25 modules
var useRequest = __webpack_require__(36158);
// EXTERNAL MODULE: ./node_modules/ahooks/es/useSetState/index.js
var useSetState = __webpack_require__(96638);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(97582);
// EXTERNAL MODULE: ./node_modules/ahooks/es/utils/index.js
var utils = __webpack_require__(92770);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/useAsyncEffect/index.js



function isAsyncGenerator(val) {
  return (0,utils/* isFunction */.mf)(val[Symbol.asyncIterator]);
}
function useAsyncEffect(effect, deps) {
  (0,react.useEffect)(function () {
    var e = effect();
    var cancelled = false;
    function execute() {
      return (0,tslib_es6/* __awaiter */.mG)(this, void 0, void 0, function () {
        var result;
        return (0,tslib_es6/* __generator */.Jh)(this, function (_a) {
          switch (_a.label) {
            case 0:
              if (!isAsyncGenerator(e)) return [3 /*break*/, 4];
              _a.label = 1;
            case 1:
              if (false) {}
              return [4 /*yield*/, e.next()];
            case 2:
              result = _a.sent();
              if (result.done || cancelled) {
                return [3 /*break*/, 3];
              }
              return [3 /*break*/, 1];
            case 3:
              return [3 /*break*/, 6];
            case 4:
              return [4 /*yield*/, e];
            case 5:
              _a.sent();
              _a.label = 6;
            case 6:
              return [2 /*return*/];
          }
        });
      });
    }

    execute();
    return function () {
      cancelled = true;
    };
  }, deps);
}
/* harmony default export */ var es_useAsyncEffect = (useAsyncEffect);
// EXTERNAL MODULE: ./node_modules/three/build/three.module.js
var three_module = __webpack_require__(99477);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/loaders/GLTFLoader.js + 1 modules
var GLTFLoader = __webpack_require__(77836);
// EXTERNAL MODULE: ./node_modules/three/examples/jsm/renderers/CSS2DRenderer.js
var CSS2DRenderer = __webpack_require__(81764);
;// CONCATENATED MODULE: ./src/pages/AMAP/ts/AMAPScene.ts






var scene, camera, renderer, customCoords, css2dRenderer, labelRenderer;
var object;
var createScene = function createScene(AMap, map, css2dRenderDom) {
  customCoords = map.customCoords;
  var center = map.getCenter();
  customCoords.setCenter([center.lng, center.lat]);
  return new Promise(function (resolve, reject) {
    var gllayer = new AMap.GLCustomLayer({
      zIndex: 110,
      // 图层的层级
      init: function () {
        var _init = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(gl) {
          var aLight, dLight, helper, scale;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                camera = new three_module/* PerspectiveCamera */.cPb(60, window.innerWidth / window.innerHeight, 100, 1 << 30);
                renderer = new three_module/* WebGLRenderer */.CP7({
                  context: gl // 地图的 gl 上下文
                  // alpha: true,
                  // antialias: true,
                  // canvas: gl.canvas,
                });
                renderer.shadowMap.enabled = true;
                renderer.shadowMap.needsUpdate = true;
                renderer.autoClear = false;
                scene = new three_module/* Scene */.xsS();

                // 环境光照和平行光
                aLight = new three_module/* AmbientLight */.Mig(0xffffff, 0.3);
                scene.add(aLight);
                dLight = new three_module/* DirectionalLight */.Ox3(0xffffff, 1);
                dLight.position.set(1000, -100, 900);
                scene.add(dLight);
                helper = new three_module/* DirectionalLightHelper */.cBI(dLight, 500);
                scene.add(helper);
                labelRenderer = new CSS2DRenderer/* CSS2DRenderer */.M();
                labelRenderer.setSize(window.innerWidth, window.innerHeight);
                labelRenderer.domElement.style.position = "absolute";
                labelRenderer.domElement.style.top = "0";
                labelRenderer.domElement.style.pointerEvents = "none";
                css2dRenderDom && css2dRenderDom.appendChild(labelRenderer.domElement);
                _context.next = 21;
                return initGltf();
              case 21:
                object = _context.sent;
                setRotation(new three_module/* Vector3 */.Pa4(90, 90, 0), object);
                scale = 15;
                object.scale.set(scale, scale, scale);
                object.name = 'duck';
                scene.add(object);
                resolve(true);
              case 28:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function init(_x) {
          return _init.apply(this, arguments);
        }
        return init;
      }(),
      render: function render() {
        var _camera$position, _camera$up, _camera;
        // 重新设置图层的渲染中心点，将模型等物体的渲染中心点重置
        // 否则和 LOCA 可视化等多个图层能力使用的时候会出现物体位置偏移的问题
        customCoords.setCenter([116.271363, 39.992414]);
        var _customCoords$getCame = customCoords.getCameraParams(),
          near = _customCoords$getCame.near,
          far = _customCoords$getCame.far,
          fov = _customCoords$getCame.fov,
          up = _customCoords$getCame.up,
          lookAt = _customCoords$getCame.lookAt,
          position = _customCoords$getCame.position;

        // 2D 地图下使用的正交相机
        // var { near, far, top, bottom, left, right, position, rotation } = customCoords.getCameraParams();

        // 这里的顺序不能颠倒，否则可能会出现绘制卡顿的效果。
        camera.near = near;
        camera.far = far;
        camera.fov = fov;
        (_camera$position = camera.position).set.apply(_camera$position, toConsumableArray_default()(position));
        (_camera$up = camera.up).set.apply(_camera$up, toConsumableArray_default()(up));
        (_camera = camera).lookAt.apply(_camera, toConsumableArray_default()(lookAt));
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
        labelRenderer.render(scene, camera);

        // 这里必须执行！！重新设置 three 的 gl 上下文状态。
        renderer.resetState();
      }
    });
    map.add(gllayer);
  });
};
function setRotation(rotation, object) {
  var x = Math.PI / 180 * (rotation.x || 0);
  var y = Math.PI / 180 * (rotation.y || 0);
  var z = Math.PI / 180 * (rotation.z || 0);
  object.rotation.set(x, y, z);
  return new three_module/* Vector3 */.Pa4(x, y, z);
}

// 对模型的经纬度进行转换
function setPosition(lnglat, object) {
  var position = customCoords.lngLatsToCoords([lnglat])[0];
  if (object) {
    object.position.setX(position[0]);
    object.position.setY(position[1]);
  }
  return new three_module/* Vector2 */.FM8().fromArray(position);
}

// 初始化模型
function initGltf() {
  return new Promise(function (resolve, reject) {
    var loader = new GLTFLoader/* GLTFLoader */.E();
    loader.load('https://a.amap.com/jsapi_demos/static/gltf/Duck.gltf', function (gltf) {
      var object = gltf.scene;
      resolve(object);
    });
  });
}
// EXTERNAL MODULE: ./src/request/floor.ts
var floor = __webpack_require__(46500);
// EXTERNAL MODULE: ./src/components/three/svg2Model.ts + 1 modules
var svg2Model = __webpack_require__(71262);
// EXTERNAL MODULE: ./src/dictionary.ts
var dictionary = __webpack_require__(14422);
// EXTERNAL MODULE: ./src/request/store.ts
var store = __webpack_require__(93178);
// EXTERNAL MODULE: ./src/utils/global.tsx
var global = __webpack_require__(29142);
// EXTERNAL MODULE: ./src/request/point.ts
var point = __webpack_require__(87177);
// EXTERNAL MODULE: ./src/components/three/utils.ts
var three_utils = __webpack_require__(91111);
;// CONCATENATED MODULE: ./src/pages/Bot/style.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Bot_stylemodules = ({"bot":"bot___qlms2","handle":"handle___EAvzP","botContent":"botContent___udgoF"});
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 15 modules
var es_button = __webpack_require__(45093);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 19 modules
var input = __webpack_require__(98086);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/Bot/index.tsx







var Bot = function Bot(props) {
  var answerText = props === null || props === void 0 ? void 0 : props.answerText;
  (0,react.useEffect)(function () {
    setInputValue(answerText || '');
    answerText && getBotAnswer(answerText);
  }, [answerText]);
  var _useState = (0,react.useState)({
      waitting: false,
      loading: false,
      done: true
    }),
    _useState2 = slicedToArray_default()(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var _useSetState = (0,useSetState/* default */.Z)({
      conversation_id: "73635987399797964801",
      botId: "7394790869385297930"
    }),
    _useSetState2 = slicedToArray_default()(_useSetState, 1),
    botInfo = _useSetState2[0];
  var xhrRef = (0,react.useRef)();
  var getBotAnswer = function getBotAnswer(name) {
    console.log('getBotAnswer', name);
    setBotValue('');
    setState({
      waitting: true,
      loading: true,
      done: false
    });
    var str = '';
    var url = 'https://api.coze.cn/v3/chat';
    xhrRef.current = new XMLHttpRequest();
    var xhr = xhrRef.current;
    xhr.open("POST", url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.setRequestHeader("Authorization", 'Bearer pat_lUacIqEfMlf6skVsQnHd69MQKoa5a8FA2WCLwhLtiTvsBVjQTy5bgJlChhEq1MbE');
    xhr.onprogress = function (event) {
      var response = event.target.response;
      if (response.indexOf('event:conversation.message.completed') !== -1) {
        var arr = response.split('data:');
        var lastMessage = arr[arr.length - 1];
        if (lastMessage) {
          try {
            var json = JSON.parse(lastMessage);
            if (json.type === 'answer') {
              str = json === null || json === void 0 ? void 0 : json.content;
            } else if (json.type === 'verbose') {
              console.log('verbose', json);
            }
            if (json === '[DONE]') {
              console.log('结束');
              console.log(str);
              setBotValue(str);
              str = '';
              setState({
                waitting: false,
                loading: false,
                done: true
              });
            }
          } catch (error) {}
        }
      }
    };
    var value = name || inputValue;
    var data = JSON.stringify({
      bot_id: botInfo.botId,
      user_id: botInfo.conversation_id,
      "stream": true,
      "auto_save_history": true,
      "additional_messages": [{
        "role": "user",
        "content": value ? value + '200字内' : "介绍一下闲林埠 200字内",
        "content_type": "text"
      }]
    });
    xhrRef.current.send(data);
  };
  (0,react.useEffect)(function () {
    getBotAnswer();
  }, []);
  var BotChat = function BotChat() {
    if (state !== null && state !== void 0 && state.done) {}
    getBotAnswer();
  };
  var _useState3 = (0,react.useState)(''),
    _useState4 = slicedToArray_default()(_useState3, 2),
    inputValue = _useState4[0],
    setInputValue = _useState4[1];
  var _useState5 = (0,react.useState)(''),
    _useState6 = slicedToArray_default()(_useState5, 2),
    botValue = _useState6[0],
    setBotValue = _useState6[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
    className: Bot_stylemodules.bot,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: Bot_stylemodules.handle,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        loading: state.loading,
        onClick: BotChat,
        children: "\u67E5\u8BE2"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: Bot_stylemodules.botContent,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {
        onChange: function onChange(e) {
          return setInputValue(e.target.value);
        },
        placeholder: "\u8BF7\u8F93\u5165\u95EE\u9898\u6216\u8005\u5730\u70B9",
        value: inputValue,
        type: "text"
      }), botValue]
    })]
  });
};
/* harmony default export */ var pages_Bot = (Bot);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 12 modules
var message = __webpack_require__(68872);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 27 modules
var modal = __webpack_require__(63620);
// EXTERNAL MODULE: ./src/pages/Store/components/editAdd/index.tsx
var editAdd = __webpack_require__(43842);
// EXTERNAL MODULE: ./src/pages/Store/components/watch/index.tsx
var components_watch = __webpack_require__(22759);
// EXTERNAL MODULE: ./src/pages/Store/components/PointEdit/index.tsx
var PointEdit = __webpack_require__(77572);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(57632);
// EXTERNAL MODULE: ./src/components/logo2d/index.tsx
var logo2d = __webpack_require__(54852);
;// CONCATENATED MODULE: ./src/pages/AMAP/index.tsx






























var AMap = function AMap() {
  var urlParams = (0,_umi_production_exports.useParams)();
  var floorGroupChildrenRef = (0,react.useRef)([]);
  var _useState = (0,react.useState)(),
    _useState2 = slicedToArray_default()(_useState, 2),
    floorData = _useState2[0],
    setFloorData = _useState2[1];
  var mylnglat = [119.985955, 30.220642];
  // 获取景区详情
  var _useRequest = (0,useRequest/* default */.Z)(floor/* getFloorInfoByFloorId */.BG, {
      manual: true,
      onSuccess: function () {
        var _onSuccess = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(res) {
          var floorGroup;
          return regeneratorRuntime_default()().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                if (!res.success) {
                  _context.next = 6;
                  break;
                }
                setFloorData(res.data);
                _context.next = 4;
                return (0,svg2Model/* getSVG2Model */.m)(dictionary/* OSS_URL */.DE + res.data.url, true);
              case 4:
                floorGroup = _context.sent;
                handleStore(floorGroup, res.data);
              case 6:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        function onSuccess(_x) {
          return _onSuccess.apply(this, arguments);
        }
        return onSuccess;
      }()
    }),
    getFloorInfo = _useRequest.run;
  var _useRequest2 = (0,useRequest/* default */.Z)(point/* getPointListByFloorId */.Wh, {
      manual: true,
      debounceWait: 300,
      onSuccess: function onSuccess(res) {
        if (res.success) {
          var floor = scene.getObjectByName('floor');
          if (floor) {
            var worldPosition = new three_module/* Vector3 */.Pa4();
            var center = new three_module/* Vector3 */.Pa4();
            var _floor = scene.getObjectByName('floor');
            if (_floor) {
              _floor.getWorldPosition(worldPosition);
              var _getBox3Info = (0,three_utils/* getBox3Info */.R)(_floor),
                c = _getBox3Info.center;
              center.copy(c);
            }
            var arr = toConsumableArray_default()(markList);
            (res.data || []).forEach(function (data) {
              var p = new three_module/* Vector3 */.Pa4().fromArray(data.position);
              var position = new three_module/* Vector3 */.Pa4().set(p.x, -p.y, p.z);
              var iconUrl = "".concat(dictionary/* OSS_URL */.DE).concat(dictionary/* STORE_ATTRIBUTE_ICON_MAP */.ag.get(data.attribute));
              position.add(center);
              var item = {
                logo: iconUrl,
                markData: data
              };
              arr.push(item);
            });
            setMarkList(arr);
          }
        }
      }
    }),
    getPointList = _useRequest2.run;
  var _useState3 = (0,react.useState)(''),
    _useState4 = slicedToArray_default()(_useState3, 2),
    storeName = _useState4[0],
    setStoreName = _useState4[1];
  var logo2dMarkCallback = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(params) {
      var trails, points;
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(params.type === 'name')) {
              _context2.next = 4;
              break;
            }
            setStoreName(params.value);
            _context2.next = 10;
            break;
          case 4:
            if (!(params.type === 'nav')) {
              _context2.next = 10;
              break;
            }
            _context2.next = 7;
            return getSearchTrailsLngLat(AMapRef.current, mapRef.current, new three_module/* Vector2 */.FM8().fromArray(mylnglat), new three_module/* Vector2 */.FM8().fromArray(params.value));
          case 7:
            trails = _context2.sent;
            points = getPath(trails);
            playByPaths(points, 18000);
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function logo2dMarkCallback(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var getPath = function getPath(trails) {
    var paths = [];
    if (trails.info === 'ok') {
      trails.routes.forEach(function (route) {
        route.steps.forEach(function (step) {
          // paths.push([step.path[0].lng, step.path[0].lat])
          // paths.push([step.path[step.path.length-1].lng, step.path[step.path.length-1].lat])
          for (var i = 0; i < step.path.length - 1; i++) {
            var points = step.path;
            // const p2 = step.path[i]
            // paths.push([p2.lng, p2.lat])
            var A = new three_module/* Vector2 */.FM8(points[i].lng, points[i].lat);
            var B = new three_module/* Vector2 */.FM8(points[i + 1].lng, points[i + 1].lat);
            var distance = B.distanceTo(A);
            console.log('distance', distance);
            if (distance !== 0) {
              paths.push(B.toArray());
            }
          }
        });
      });
      console.log('paths', paths);
    }
    return paths;
  };
  var playByPaths = function playByPaths(playPaths, duration) {
    var AMap = AMapRef.current;
    var map = mapRef.current;
    var loca = locaRef.current;
    if (map) {
      // 导航线
      var polyline = new AMap.Polyline({
        path: playPaths,
        // 设置线覆盖物路径
        showDir: true,
        strokeColor: '#3366bb',
        // 线颜色
        strokeWeight: 10,
        // 线宽
        zIndex: 1
      });
      map.add(polyline);
      trailFinshed.current = false;
      loca.viewControl.addTrackAnimate({
        path: playPaths,
        // 镜头轨迹，二维数组，支持海拔
        duration: duration,
        // 时长
        timing: [[0, 0.3], [1, 0.7]],
        // 速率控制器
        rotationSpeed: 10 // 每秒旋转多少度
      }, function () {
        console.log('完成');
        message/* default */.ZP.success('完成');
        trailFinshed.current = true;
      });

      // changeObject()
      loca.animate.start();
    }
  };
  var _useState5 = (0,react.useState)([]),
    _useState6 = slicedToArray_default()(_useState5, 2),
    markList = _useState6[0],
    setMarkList = _useState6[1];

  // 获取景区店铺详情
  var _useRequest3 = (0,useRequest/* default */.Z)(store/* getStoreListByFloorId */.Ev, {
      manual: true,
      debounceWait: 300,
      onSuccess: function onSuccess(res) {
        if (res.success) {
          var shopUrl = "".concat(dictionary/* OSS_URL */.DE).concat(dictionary/* STORE_ATTRIBUTE_ICON_MAP */.ag.get('shops'));
          var arr = toConsumableArray_default()(markList);
          (res.data || []).forEach(function (data) {
            var item = {
              name: data.name,
              logo: data.logo || shopUrl,
              markData: data
            };
            arr.push(item);
          });
          setMarkList(arr);
          (0,global/* bindMaterialById */.u4)(res.data, rayState.floorGroup, scene);
        }
      }
    }),
    getFLoorStore = _useRequest3.run;
  (0,useRequest/* default */.Z)(floor/* getAllData */.jl, {
    onSuccess: function onSuccess(res) {
      if (res.success) {
        if (urlParams.id && urlParams.id !== ':id') {
          setFloorState({
            floorId: urlParams.id
          });
        } else {
          var _res$data$;
          setFloorState({
            floorId: (_res$data$ = res.data[0]) === null || _res$data$ === void 0 ? void 0 : _res$data$.floorId
          });
        }
        setFloorState({
          floorList: res.data.sort(function (a, b) {
            return a.floorIndex && b.floorIndex && a.floorIndex - b.floorIndex;
          })
        });
      }
    }
  });

  // 页面状态
  var _useSetState = (0,useSetState/* default */.Z)({
      mouse: new three_module/* Vector2 */.FM8(),
      rayChildren: [],
      raycaster: new three_module/* Raycaster */.iMs(),
      floorGroup: new three_module/* Group */.ZAu()
    }),
    _useSetState2 = slicedToArray_default()(_useSetState, 2),
    rayState = _useSetState2[0],
    setRayState = _useSetState2[1];
  var handleStore = function handleStore(floorGroup, floorInfo) {
    floorGroupChildrenRef.current = toConsumableArray_default()(floorGroup.children);
    getFLoorStore(urlParams.id || '');
    getPointList(urlParams.id || '');
    // setRotation(new Vector3(0, -180, 180), floorGroup);

    try {
      var objPosition = floorInfo.position.split(',').map(function (n) {
        return Number(n);
      });
      var v2 = setPosition(objPosition);
      floorGroup.position.set(v2.x, v2.y, 0);
      scene.add(floorGroup);
    } catch (error) {
      console.log(error);
    }
  };
  var AMapRef = (0,react.useRef)(null);
  var containerRef = (0,react.useRef)(null);
  var locaRef = (0,react.useRef)(null);
  var trailFinshed = (0,react.useRef)(true);
  var mapRef = (0,react.useRef)();
  var createMap = /*#__PURE__*/function () {
    var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee4() {
      var AMap, map, loca, item, res;
      return regeneratorRuntime_default()().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            AMap = AMapRef.current; // 创建地图
            map = new AMap.Map("container", {
              resizeEnable: true,
              center: [119.986, 30.2235],
              //地图中心点
              zoom: 17.4,
              //地图显示的缩放级别
              viewMode: '3D',
              //开启3D视图,默认为关闭
              buildingAnimation: true,
              //楼块出现是否带动画
              pitch: 45,
              rotation: 45,
              features: ['bg', 'building'],
              // 只显示建筑、道路、区域
              // showLabel: false,  // 隐藏标注信息
              mapStyle: "amap://styles/grey",
              showIndoorMap: false,
              // rotateEnable: false,
              // pitchEnable: false,
              zIndex: 9
            });
            mapRef.current = map;
            loca = new window.Loca.Container({
              map: map,
              zIndex: 9
            });
            locaRef.current = loca;
            render();
            item = {
              logo: 'https://three-statices.oss-cn-hangzhou.aliyuncs.com/floor-map/icon/wodeweizhi.png',
              markData: {
                lnglat: mylnglat,
                attribute: 'myposition'
              }
            };
            setMarkList([].concat(toConsumableArray_default()(markList), [item]));
            map.on('click', /*#__PURE__*/function () {
              var _ref3 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee3(e) {
                var lnglat, mouse, rallyist, mesh, pointV3;
                return regeneratorRuntime_default()().wrap(function _callee3$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      console.log(e.lnglat.lng, e.lnglat.lat);
                      lnglat = [e.lnglat.lng, e.lnglat.lat];
                      mouse = rayState.mouse.clone(); // 高德地图点击事件与3d模型的转换
                      mouse.x = e.originEvent.clientX / window.innerWidth * 2 - 1;
                      mouse.y = -(e.originEvent.clientY / window.innerHeight) * 2 + 1;
                      setRayState({
                        mouse: mouse
                      });
                      rayState.raycaster.setFromCamera(mouse, camera);
                      rallyist = rayState.raycaster.intersectObjects(floorGroupChildrenRef.current);
                      if (rallyist !== null && rallyist !== void 0 && rallyist[0] && rallyist[0].object) {
                        message/* default */.ZP.success('点击在3d模型上');
                        mesh = rallyist[0].object;
                        if (mesh.name !== 'floor') {
                          if (mesh.storeType === 'bind') {
                            console.log('mesh', mesh);
                            watch(mesh.userData.storeInfo.storeId);
                          } else {
                            addModalOpen("".concat(mesh.storeId), true, lnglat);
                          }
                        } else {
                          pointV3 = rallyist[0].point.toArray();
                          if (pointV3) {
                            setPointProps({
                              open: true,
                              pointId: (0,v4/* default */.Z)(),
                              pointV3: pointV3,
                              lnglat: lnglat
                            });
                          }
                        }
                      } else {
                        message/* default */.ZP.success('点击在高德地图上');
                        // const center = map.getCenter();

                        // var position = customCoords.lngLatsToCoords([
                        //     [center.lng, center.lat]
                        // ])[0];
                        // const v3 = new Vector3(position[0], position[1],0, )
                        // console.log('v3', position,v3);
                        // object.position.copy(v3)
                      }
                      map.render();
                    case 10:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee3);
              }));
              return function (_x3) {
                return _ref3.apply(this, arguments);
              };
            }());

            // 清除多余楼块
            cleanBuild(AMap, map);
            // 创建3d场景
            _context4.next = 12;
            return createScene(AMap, map, css2dRenderRef.current);
          case 12:
            res = _context4.sent;
            if (res) {
              if (urlParams.id && urlParams.id !== ':id') {
                getFloorInfo({
                  floorId: urlParams.id
                });
              }
            }
          case 14:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function createMap() {
      return _ref2.apply(this, arguments);
    };
  }();
  var css2dRenderRef = (0,react.useRef)(null);
  es_useAsyncEffect( /*#__PURE__*/asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee5() {
    return regeneratorRuntime_default()().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return CreateAMap();
        case 2:
          AMapRef.current = _context5.sent;
          if (containerRef.current) {
            createMap();
          }
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  })), []);
  var _useSetState3 = (0,useSetState/* default */.Z)({
      open: false,
      storeId: '',
      addId: '',
      lnglat: []
    }),
    _useSetState4 = slicedToArray_default()(_useSetState3, 2),
    storeModal = _useSetState4[0],
    setStoreModal = _useSetState4[1];
  var _useSetState5 = (0,useSetState/* default */.Z)({
      floorInfo: {},
      floorList: [],
      floorId: ''
    }),
    _useSetState6 = slicedToArray_default()(_useSetState5, 2),
    floorState = _useSetState6[0],
    setFloorState = _useSetState6[1];
  var addModalOpen = function addModalOpen(id, isAdd, lnglat) {
    setStoreModal({
      open: true,
      storeId: isAdd ? '' : id,
      addId: id,
      lnglat: lnglat || []
    });
  };
  var _useSetState7 = (0,useSetState/* default */.Z)({
      open: false,
      storeId: ''
    }),
    _useSetState8 = slicedToArray_default()(_useSetState7, 2),
    watchStore = _useSetState8[0],
    setWatchStore = _useSetState8[1];
  var watch = function watch(id) {
    setWatchStore({
      open: true,
      storeId: id
    });
  };
  var editBtnCallback = function editBtnCallback() {
    setWatchStore({
      open: false
    });
    addModalOpen(watchStore.storeId, false);
  };
  var _useRequest4 = (0,useRequest/* default */.Z)(store/* removeStoreByStoreId */.HC, {
      manual: true,
      onSuccess: function onSuccess(res) {
        if (res.success) {
          setWatchStore({
            open: false
          });
          message/* default */.ZP.success(res.msg);
          window.location.reload();
        } else {
          message/* default */.ZP.error(res.msg);
        }
      }
    }),
    removeStore = _useRequest4.run;
  var delBtnCallback = function delBtnCallback() {
    removeStore(watchStore.storeId);
  };
  var pointEditModalOpen = function pointEditModalOpen(open) {
    setPointProps({
      open: open
    });
  };
  var _useSetState9 = (0,useSetState/* default */.Z)({
      floorId: floorState.floorId || '',
      open: false,
      setOpen: pointEditModalOpen,
      floorList: floorState.floorList,
      pointV3: [0, 0, 0],
      lnglat: []
    }),
    _useSetState10 = slicedToArray_default()(_useSetState9, 2),
    pointProps = _useSetState10[0],
    setPointProps = _useSetState10[1];
  var render = function render() {
    requestAnimationFrame(function () {
      render();
    });
    if (!trailFinshed.current) {
      if (mapRef.current) {
        var map = mapRef.current;
        if (object) {
          var center = map.getCenter();
          var position = customCoords.lngLatsToCoords([[center.lng, center.lat]])[0];
          var v3 = new three_module/* Vector3 */.Pa4(position[0], position[1], 10);
          object.position.copy(v3);
          var rotation = map.getRotation();
          object.rotation.y = rotation * Math.PI / 180 - 30;
        }
        map.render();
      }
    }
  };
  var _useSetState11 = (0,useSetState/* default */.Z)({
      open: false
    }),
    _useSetState12 = slicedToArray_default()(_useSetState11, 2),
    markInfoState = _useSetState12[0],
    setMarkInfoState = _useSetState12[1];
  var cancel = function cancel() {
    setMarkInfoState({
      open: false
    });
  };
  var onOk = function onOk() {
    var _markInfoState$markDa;
    cancel();
    logo2dMarkCallback({
      type: 'nav',
      value: (_markInfoState$markDa = markInfoState.markData) === null || _markInfoState$markDa === void 0 ? void 0 : _markInfoState$markDa.lnglat
    });
  };
  var markClick = function markClick(data) {
    if (data) {
      logo2dMarkCallback({
        type: 'name',
        value: data.name
      });
      setMarkInfoState({
        markData: data,
        open: true
      });
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: stylemodules.container,
      ref: containerRef,
      id: "container"
    }), markList.map(function (data) {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(logo2d/* default */.Z, objectSpread2_default()(objectSpread2_default()({
        onClick: markClick
      }, data), {}, {
        map: mapRef.current,
        AMap: AMapRef.current
      }));
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      ref: css2dRenderRef
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(pages_Bot, {
      answerText: storeName
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(editAdd/* default */.Z, {
      floorId: urlParams.id || '',
      storeId: storeModal.storeId,
      open: storeModal.open,
      setOpen: function setOpen(value) {
        return setStoreModal({
          open: value
        });
      },
      floorList: floorState.floorList,
      addId: storeModal.addId,
      refreshStore: getFLoorStore,
      lnglat: storeModal.lnglat
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(components_watch/* default */.Z, {
      delBtnCallback: delBtnCallback,
      editBtnCallback: editBtnCallback,
      open: watchStore.open,
      floorList: floorState.floorList,
      setOpen: function setOpen(value) {
        return setWatchStore({
          open: value
        });
      },
      storeId: watchStore.storeId
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(PointEdit/* default */.Z, objectSpread2_default()(objectSpread2_default()({}, pointProps), {}, {
      refreshPoint: getPointList,
      floorId: urlParams.id || '',
      floorList: floorState.floorList
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
      okText: '导航到这里',
      onCancel: cancel,
      onOk: onOk,
      open: markInfoState.open,
      title: '详情',
      children: markInfoState !== null && markInfoState !== void 0 && markInfoState.markData ? /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["\u5F53\u524D\u76EE\u6807\u4E3A", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            style: {
              color: 'green'
            },
            children: markInfoState.markData.name || dictionary/* STORE_ATTRIBUTE_MAP */.I2.get(markInfoState.markData.attribute)
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)("p", {
          children: ["\u5F53\u524D\u76EE\u6807\u4F4D\u7F6E\u4E3A", /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            style: {
              color: 'green'
            },
            children: (markInfoState.markData.lnglat || []).join('，')
          })]
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "\u53EF\u4EE5\u518D\u6B21\u8FDE\u63A5\u667A\u6167\u8BBE\u65BD\uFF0C\u6BD4\u5982\u667A\u6167\u516C\u6D4B\uFF0C\u667A\u80FD\u6D88\u9632\uFF0C\u667A\u80FD\u6444\u50CF\u5934\u7B49\u76D1\u63A7\u8BBE\u5907"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
          children: "\u4E5F\u53EF\u4EE5\u4ECE\u6A21\u62DF\u7684\u6211\u7684\u4F4D\u7F6E\u5BFC\u822A\u5230\u8FD9\u4E2A\u4F4D\u7F6E\uFF1A"
        })]
      }) : null
    })]
  });
};
/* harmony default export */ var AMAP = (AMap);

/***/ }),

/***/ 64119:
/***/ (function() {

window.mapKey = 'e4837115d42c13263434bcfd48074dcc';
window._AMapSecurityConfig = {
  securityJsCode: '6b98a950ef8e49d5ec66dfb5b67a4308'
};
window.mapParams = {
  "key": window.mapKey,
  // 申请好的Web端开发者Key，首次调用 load 时必填
  "version": "1.4.15",
  // 指定要加载的 JS API 的版本，缺省时默认为 1.4.15
  "plugins": [] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
};

/***/ })

}]);