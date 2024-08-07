"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[445],{

/***/ 82162:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Store; }
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
// EXTERNAL MODULE: ./src/request/floor.ts
var floor = __webpack_require__(46500);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/components/PageContainer/index.js + 21 modules
var PageContainer = __webpack_require__(90930);
// EXTERNAL MODULE: ./node_modules/ahooks/es/useSetState/index.js
var useSetState = __webpack_require__(96638);
// EXTERNAL MODULE: ./node_modules/ahooks/es/useRequest/index.js + 25 modules
var useRequest = __webpack_require__(36158);
// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.mjs
var tslib_es6 = __webpack_require__(97582);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/ahooks/es/useUnmount/index.js
var useUnmount = __webpack_require__(45210);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/useRafState/index.js



function useRafState(initialState) {
  var ref = (0,react.useRef)(0);
  var _a = (0,tslib_es6/* __read */.CR)((0,react.useState)(initialState), 2),
    state = _a[0],
    setState = _a[1];
  var setRafState = (0,react.useCallback)(function (value) {
    cancelAnimationFrame(ref.current);
    ref.current = requestAnimationFrame(function () {
      setState(value);
    });
  }, []);
  (0,useUnmount/* default */.Z)(function () {
    cancelAnimationFrame(ref.current);
  });
  return [state, setRafState];
}
/* harmony default export */ var es_useRafState = (useRafState);
// EXTERNAL MODULE: ./node_modules/ahooks/es/useLatest/index.js
var useLatest = __webpack_require__(3930);
// EXTERNAL MODULE: ./node_modules/ahooks/es/utils/index.js
var utils = __webpack_require__(92770);
// EXTERNAL MODULE: ./node_modules/ahooks/es/utils/isBrowser.js
var isBrowser = __webpack_require__(52982);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/utils/domTarget.js


function getTargetElement(target, defaultElement) {
  if (!isBrowser/* default */.Z) {
    return undefined;
  }
  if (!target) {
    return defaultElement;
  }
  var targetElement;
  if ((0,utils/* isFunction */.mf)(target)) {
    targetElement = target();
  } else if ('current' in target) {
    targetElement = target.current;
  } else {
    targetElement = target;
  }
  return targetElement;
}
// EXTERNAL MODULE: ./node_modules/ahooks/es/utils/depsAreSame.js
var depsAreSame = __webpack_require__(8224);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/utils/createEffectWithTarget.js




var createEffectWithTarget = function (useEffectType) {
  /**
   *
   * @param effect
   * @param deps
   * @param target target should compare ref.current vs ref.current, dom vs dom, ()=>dom vs ()=>dom
   */
  var useEffectWithTarget = function (effect, deps, target) {
    var hasInitRef = (0,react.useRef)(false);
    var lastElementRef = (0,react.useRef)([]);
    var lastDepsRef = (0,react.useRef)([]);
    var unLoadRef = (0,react.useRef)();
    useEffectType(function () {
      var _a;
      var targets = Array.isArray(target) ? target : [target];
      var els = targets.map(function (item) {
        return getTargetElement(item);
      });
      // init run
      if (!hasInitRef.current) {
        hasInitRef.current = true;
        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
        return;
      }
      if (els.length !== lastElementRef.current.length || !(0,depsAreSame/* default */.Z)(lastElementRef.current, els) || !(0,depsAreSame/* default */.Z)(lastDepsRef.current, deps)) {
        (_a = unLoadRef.current) === null || _a === void 0 ? void 0 : _a.call(unLoadRef);
        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
      }
    });
    (0,useUnmount/* default */.Z)(function () {
      var _a;
      (_a = unLoadRef.current) === null || _a === void 0 ? void 0 : _a.call(unLoadRef);
      // for react-refresh
      hasInitRef.current = false;
    });
  };
  return useEffectWithTarget;
};
/* harmony default export */ var utils_createEffectWithTarget = (createEffectWithTarget);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/utils/useEffectWithTarget.js


var useEffectWithTarget = utils_createEffectWithTarget(react.useEffect);
/* harmony default export */ var utils_useEffectWithTarget = (useEffectWithTarget);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/useEventListener/index.js



function useEventListener(eventName, handler, options) {
  if (options === void 0) {
    options = {};
  }
  var handlerRef = (0,useLatest/* default */.Z)(handler);
  utils_useEffectWithTarget(function () {
    var targetElement = getTargetElement(options.target, window);
    if (!(targetElement === null || targetElement === void 0 ? void 0 : targetElement.addEventListener)) {
      return;
    }
    var eventListener = function (event) {
      return handlerRef.current(event);
    };
    targetElement.addEventListener(eventName, eventListener, {
      capture: options.capture,
      once: options.once,
      passive: options.passive
    });
    return function () {
      targetElement.removeEventListener(eventName, eventListener, {
        capture: options.capture
      });
    };
  }, [eventName, options.capture, options.once, options.passive], options.target);
}
/* harmony default export */ var es_useEventListener = (useEventListener);
;// CONCATENATED MODULE: ./node_modules/ahooks/es/useMouse/index.js




var initState = {
  screenX: NaN,
  screenY: NaN,
  clientX: NaN,
  clientY: NaN,
  pageX: NaN,
  pageY: NaN,
  elementX: NaN,
  elementY: NaN,
  elementH: NaN,
  elementW: NaN,
  elementPosX: NaN,
  elementPosY: NaN
};
/* harmony default export */ var useMouse = (function (target) {
  var _a = (0,tslib_es6/* __read */.CR)(es_useRafState(initState), 2),
    state = _a[0],
    setState = _a[1];
  es_useEventListener('mousemove', function (event) {
    var screenX = event.screenX,
      screenY = event.screenY,
      clientX = event.clientX,
      clientY = event.clientY,
      pageX = event.pageX,
      pageY = event.pageY;
    var newState = {
      screenX: screenX,
      screenY: screenY,
      clientX: clientX,
      clientY: clientY,
      pageX: pageX,
      pageY: pageY,
      elementX: NaN,
      elementY: NaN,
      elementH: NaN,
      elementW: NaN,
      elementPosX: NaN,
      elementPosY: NaN
    };
    var targetElement = getTargetElement(target);
    if (targetElement) {
      var _a = targetElement.getBoundingClientRect(),
        left = _a.left,
        top_1 = _a.top,
        width = _a.width,
        height = _a.height;
      newState.elementPosX = left + window.pageXOffset;
      newState.elementPosY = top_1 + window.pageYOffset;
      newState.elementX = pageX - newState.elementPosX;
      newState.elementY = pageY - newState.elementPosY;
      newState.elementW = width;
      newState.elementH = height;
    }
    setState(newState);
  }, {
    target: function () {
      return document;
    }
  });
  return state;
});
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 12 modules
var message = __webpack_require__(68872);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 15 modules
var es_button = __webpack_require__(45093);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(80854);
;// CONCATENATED MODULE: ./src/pages/Store/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Storemodules = ({"floorList":"floorList___N4iHi","active":"active___Ryykx","threeMain":"threeMain___u9czE","css2dRender":"css2dRender___gItOl"});
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(57632);
// EXTERNAL MODULE: ./src/components/three/scene.tsx
var scene = __webpack_require__(24712);
// EXTERNAL MODULE: ./src/components/three/svg2Model.ts + 1 modules
var svg2Model = __webpack_require__(71262);
// EXTERNAL MODULE: ./src/dictionary.ts
var dictionary = __webpack_require__(14422);
// EXTERNAL MODULE: ./src/request/store.ts
var store = __webpack_require__(93178);
// EXTERNAL MODULE: ./src/pages/Store/components/editAdd/index.tsx
var editAdd = __webpack_require__(43842);
// EXTERNAL MODULE: ./src/pages/Store/components/watch/index.tsx
var components_watch = __webpack_require__(22759);
// EXTERNAL MODULE: ./src/components/three/utils.ts
var three_utils = __webpack_require__(91111);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createForOfIteratorHelper.js
var createForOfIteratorHelper = __webpack_require__(64599);
var createForOfIteratorHelper_default = /*#__PURE__*/__webpack_require__.n(createForOfIteratorHelper);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(12444);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(72004);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(9783);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);
// EXTERNAL MODULE: ./node_modules/three/build/three.module.js
var three_module = __webpack_require__(99477);
;// CONCATENATED MODULE: ./src/utils/ResourceTracker.ts






// 无痕删除模型
// 使用方法
//      创建
// const moreResMgr = new ResourceTracker();
// const moreTrack = moreResMgr.track.bind(moreResMgr)
// let moreMesh = moreTrack(new THREE.Mesh())
//      销毁
// moreResMgr.dispose()
var ResourceTracker = /*#__PURE__*/function () {
  function ResourceTracker() {
    classCallCheck_default()(this, ResourceTracker);
    defineProperty_default()(this, "resources", void 0);
    this.resources = new Set();
  }
  createClass_default()(ResourceTracker, [{
    key: "track",
    value: function track(resource) {
      var _this = this;
      if (!resource) {
        return resource;
      }
      // 判断如果传来的是数组，则遍历一遍重新执行一下这个方法
      if (Array.isArray(resource)) {
        resource.forEach(function (resource) {
          return _this.track(resource);
        });
        return resource;
      }
      if (resource.dispose || resource instanceof three_module/* Object3D */.Tme) {
        this.resources.add(resource);
      }
      if (resource instanceof three_module/* Object3D */.Tme) {
        this.track(resource.geometry);
        this.track(resource.material);
        this.track(resource.children);
      } else if (resource instanceof three_module/* Material */.F5T) {
        for (var _i = 0, _Object$values = Object.values(resource); _i < _Object$values.length; _i++) {
          var value = _Object$values[_i];
          if (value instanceof three_module/* Texture */.xEZ) {
            this.track(value);
          }
        }
        if (resource.uniforms) {
          for (var _i2 = 0, _Object$values2 = Object.values(resource.uniforms); _i2 < _Object$values2.length; _i2++) {
            var _value = _Object$values2[_i2];
            if (_value) {
              var uniformValue = _value.value;
              if (uniformValue instanceof three_module/* Texture */.xEZ || Array.isArray(uniformValue)) {
                this.track(uniformValue);
              }
            }
          }
        }
      }
      return resource;
    }
  }, {
    key: "untrack",
    value: function untrack(resource) {
      this.resources["delete"](resource);
    }
    // 销毁
  }, {
    key: "dispose",
    value: function dispose() {
      var _iterator = createForOfIteratorHelper_default()(this.resources),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var resource = _step.value;
          if (resource instanceof three_module/* Object3D */.Tme) {
            if (resource.parent) {
              resource.parent.remove(resource);
            }
          }
          if (resource.dispose) {
            resource.dispose();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.resources.clear();
    }
  }]);
  return ResourceTracker;
}();
// EXTERNAL MODULE: ./src/utils/global.tsx
var global = __webpack_require__(29142);
// EXTERNAL MODULE: ./src/components/three/material.ts
var material = __webpack_require__(79497);
// EXTERNAL MODULE: ./src/pages/Store/components/PointEdit/index.tsx
var PointEdit = __webpack_require__(77572);
// EXTERNAL MODULE: ./src/request/point.ts
var point = __webpack_require__(87177);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/Store/index.tsx





























var FloorModel = function FloorModel() {
  var _floorState$floorInfo;
  var floorGroupChildrenRef = (0,react.useRef)([]);
  var resMgr = new ResourceTracker();
  var handleModel = (0,react.useRef)();
  var _useSetState = (0,useSetState/* default */.Z)({
      mouse: new three_module/* Vector2 */.FM8(),
      rayChildren: [],
      raycaster: new three_module/* Raycaster */.iMs(),
      floorGroup: new three_module/* Group */.ZAu()
    }),
    _useSetState2 = slicedToArray_default()(_useSetState, 2),
    rayState = _useSetState2[0],
    setRayState = _useSetState2[1];
  var urlParams = (0,_umi_production_exports.useParams)();
  var _useSetState3 = (0,useSetState/* default */.Z)({
      floorInfo: {},
      floorList: [],
      floorId: ''
    }),
    _useSetState4 = slicedToArray_default()(_useSetState3, 2),
    floorState = _useSetState4[0],
    setFloorState = _useSetState4[1];
  var _useSetState5 = (0,useSetState/* default */.Z)({
      thatStoreId: ''
    }),
    _useSetState6 = slicedToArray_default()(_useSetState5, 2),
    storeState = _useSetState6[0],
    setStoreState = _useSetState6[1];
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
                setFloorState({
                  floorInfo: res.data
                });
                _context.next = 4;
                return (0,svg2Model/* getSVG2Model */.m)(dictionary/* OSS_URL */.DE + res.data.url);
              case 4:
                floorGroup = _context.sent;
                handleStore(floorGroup);
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
  var _useRequest2 = (0,useRequest/* default */.Z)(store/* removeStoreByStoreId */.HC, {
      manual: true,
      onSuccess: function onSuccess(res) {
        if (res.success) {
          setWatchStore({
            open: false
          });
          message/* default */.ZP.success(res.msg);
        } else {
          message/* default */.ZP.error(res.msg);
        }
      }
    }),
    removeStore = _useRequest2.run;
  (0,react.useEffect)(function () {
    resMgr.dispose();
    getFloorInfo({
      floorId: floorState.floorId || ''
    });
  }, [floorState.floorId]);
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
  var chooseFloor = function chooseFloor(floorId) {
    if (floorId && floorState.floorId !== floorId) {
      setFloorState({
        floorId: floorId
      });
    }
  };
  var canvasRef = (0,react.useRef)(null);
  var css2dRenderRef = (0,react.useRef)(null);
  var mouseRef = useMouse(canvasRef.current);
  (0,react.useEffect)(function () {
    handleModel.current = resMgr.track.bind(resMgr);
    if (canvasRef.current && css2dRenderRef.current) {
      (0,scene/* init */.S1)(canvasRef.current, css2dRenderRef.current);
      scene/* renderer */.jG.setAnimationLoop(render);
      window.addEventListener('click', clickFloor);
    }
  }, []);
  var clickFloor = (0,react.useCallback)(function (event) {
    if (dictionary/* MouseState */.TM.effective && event.target.localName === 'canvas') {
      var _canvasRef$current, _canvasRef$current2, _rallyist$;
      var mouse = rayState.mouse.clone();
      var offsetPosition = (0,global/* getElementLeft */.fJ)(canvasRef.current);
      mouse.x = (event.clientX - offsetPosition.left) / ((_canvasRef$current = canvasRef.current) === null || _canvasRef$current === void 0 ? void 0 : _canvasRef$current.offsetWidth) * 2 - 1;
      mouse.y = -((event.clientY - offsetPosition.top) / ((_canvasRef$current2 = canvasRef.current) === null || _canvasRef$current2 === void 0 ? void 0 : _canvasRef$current2.offsetHeight)) * 2 + 1;
      setRayState({
        mouse: mouse
      });
      rayState.raycaster.setFromCamera(mouse, scene/* camera */.nS);
      var rallyist = rayState.raycaster.intersectObjects(floorGroupChildrenRef.current);
      if (((_rallyist$ = rallyist[0]) === null || _rallyist$ === void 0 || (_rallyist$ = _rallyist$.object) === null || _rallyist$ === void 0 ? void 0 : _rallyist$.name) === 'floor') {
        var pointV3 = rallyist[0].point.toArray();
        if (pointV3) {
          setPointProps({
            open: true,
            pointId: (0,v4/* default */.Z)(),
            pointV3: pointV3
          });
        }
        return;
      }
      if (rallyist[0] && rallyist[0].object) {
        var _mesh$userData;
        var mesh = rallyist[0].object;
        if (!((_mesh$userData = mesh.userData) !== null && _mesh$userData !== void 0 && _mesh$userData.bindInfo)) {
          var id = mesh.storeId;
          if (id) {
            var thatMesh = scene/* scene */.Ah.getObjectByProperty('storeId', id);
            if (thatMesh) {
              thatMesh.material = material/* chooseStoreMaterial */.kg.clone();
            }
            if (mesh.storeType === 'bind') {
              watch(id);
            } else {
              addModalOpen("".concat(id));
            }
          }
        }
        ;
      }
    }
  }, [rayState.floorGroup]);
  var render = function render() {
    scene/* renderer */.jG.render(scene/* scene */.Ah, scene/* camera */.nS);
    scene/* labelRenderer */.tf.render(scene/* scene */.Ah, scene/* camera */.nS);
  };
  var _useSetState7 = (0,useSetState/* default */.Z)({
      open: false,
      storeId: '',
      addId: ''
    }),
    _useSetState8 = slicedToArray_default()(_useSetState7, 2),
    storeModal = _useSetState8[0],
    setStoreModal = _useSetState8[1];
  var addModalOpen = function addModalOpen(id, isAdd) {
    setStoreModal({
      open: true,
      storeId: isAdd ? '' : id,
      addId: id
    });
  };
  var _useSetState9 = (0,useSetState/* default */.Z)({
      open: false,
      storeId: ''
    }),
    _useSetState10 = slicedToArray_default()(_useSetState9, 2),
    watchStore = _useSetState10[0],
    setWatchStore = _useSetState10[1];
  var _useRequest3 = (0,useRequest/* default */.Z)(store/* getStoreListByFloorId */.Ev, {
      manual: true,
      debounceWait: 300,
      onSuccess: function onSuccess(res) {
        if (res.success) {
          (0,global/* bindMaterialById */.u4)(res.data, rayState.floorGroup);
        }
      }
    }),
    getFLoorStore = _useRequest3.run;
  var _useRequest4 = (0,useRequest/* default */.Z)(point/* getPointListByFloorId */.Wh, {
      manual: true,
      debounceWait: 300,
      onSuccess: function onSuccess(res) {
        if (res.success) {
          (0,global/* createPointTypesMesh */.uz)(res.data);
        }
      }
    }),
    getPointList = _useRequest4.run;
  var handleStore = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(floorGroup) {
      var _getBox3Info, size, center;
      return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _getBox3Info = (0,three_utils/* getBox3Info */.R)(floorGroup), size = _getBox3Info.size, center = _getBox3Info.center;
            floorGroup.position.copy(center.clone().negate());
            setRayState({
              rayChildren: floorGroup.children,
              floorGroup: floorGroup
            });
            floorGroupChildrenRef.current = toConsumableArray_default()(floorGroup.children);
            handleModel.current(floorGroup);
            scene/* scene */.Ah.add(floorGroup);
            _context2.next = 8;
            return getFLoorStore(floorState.floorId || '');
          case 8:
            _context2.next = 10;
            return getPointList(floorState.floorId || '');
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function handleStore(_x2) {
      return _ref.apply(this, arguments);
    };
  }();
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
  var delBtnCallback = function delBtnCallback() {
    // 删除回调

    removeStore(watchStore.storeId);
    console.log('删除回调');
  };
  var toAmap = function toAmap() {
    _umi_production_exports.history.push({
      pathname: "/amap/".concat(floorState.floorId)
    });
  };
  var pointEditModalOpen = function pointEditModalOpen(open) {
    setPointProps({
      open: open
    });
  };
  var _useSetState11 = (0,useSetState/* default */.Z)({
      floorId: floorState.floorId || '',
      open: false,
      setOpen: pointEditModalOpen,
      floorList: floorState.floorList,
      pointV3: [0, 0, 0]
    }),
    _useSetState12 = slicedToArray_default()(_useSetState11, 2),
    pointProps = _useSetState12[0],
    setPointProps = _useSetState12[1];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(PageContainer/* PageContainer */._z, {
    title: (_floorState$floorInfo = floorState.floorInfo) === null || _floorState$floorInfo === void 0 ? void 0 : _floorState$floorInfo.name,
    ghost: true,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
      onClick: toAmap,
      children: "\u5927\u5C4F\u6F14\u793A"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("ul", {
      className: Storemodules.floorList,
      children: (floorState.floorList || []).map(function (floorInfo) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)("li", {
          onClick: function onClick() {
            return chooseFloor(floorInfo.floorId);
          },
          className: "".concat(floorState.floorId === floorInfo.floorId ? Storemodules.active : ''),
          children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
            children: floorInfo.name
          })
        }, floorInfo.floorId);
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
      className: Storemodules.threeMain,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)("canvas", {
        ref: canvasRef
      }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
        className: Storemodules.css2dRender,
        ref: css2dRenderRef
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(editAdd/* default */.Z, {
      floorId: floorState.floorId || '',
      storeId: storeModal.storeId,
      open: storeModal.open,
      setOpen: function setOpen(value) {
        return setStoreModal({
          open: value
        });
      },
      floorList: floorState.floorList,
      addId: storeModal.addId,
      refreshStore: getFLoorStore
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
      floorId: floorState.floorId || '',
      floorList: floorState.floorList
    }))]
  });
};
/* harmony default export */ var Store = (FloorModel);

/***/ })

}]);