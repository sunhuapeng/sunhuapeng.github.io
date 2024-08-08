"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([[396],{

/***/ 14422:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DE: function() { return /* binding */ OSS_URL; },
/* harmony export */   I2: function() { return /* binding */ STORE_ATTRIBUTE_MAP; },
/* harmony export */   Qt: function() { return /* binding */ FLOOR_MAP_URL; },
/* harmony export */   S$: function() { return /* binding */ STORE_TYPE_MAP; },
/* harmony export */   TM: function() { return /* binding */ MouseState; },
/* harmony export */   Yc: function() { return /* binding */ PROMOSE_RESPONSE; },
/* harmony export */   ag: function() { return /* binding */ STORE_ATTRIBUTE_ICON_MAP; },
/* harmony export */   cl: function() { return /* binding */ formLayout; },
/* harmony export */   qn: function() { return /* binding */ rulesRequired; }
/* harmony export */ });
var OSS_URL = 'https://three-statices.oss-cn-hangzhou.aliyuncs.com';
var PROMOSE_RESPONSE = /*#__PURE__*/function (PROMOSE_RESPONSE) {
  PROMOSE_RESPONSE["PROMOSE_ERROR_MSG"] = "\u64CD\u4F5C\u5931\u8D25";
  PROMOSE_RESPONSE["PROMOSE_SUCCESS_MSG"] = "\u64CD\u4F5C\u6210\u529F";
  PROMOSE_RESPONSE["PROMOSE_ERROR_DELEETE_MSG"] = "\u64CD\u4F5C\u6210\u529F";
  PROMOSE_RESPONSE["PROMOSE_ERROR_GETBYID_MSG"] = "\u6807\u8BC6\u4E0D\u5B58\u5728";
  PROMOSE_RESPONSE["PROMOSE_ERROR_ISHAVE_MSG"] = "\u6570\u636E\u4E0D\u5B58\u5728";
  return PROMOSE_RESPONSE;
}({});
var STORE_TYPE_MAP = new Map([['floor', '餐饮'], ['game', '娱乐'], ['clothing', '服装'], ['education', '教育'], ['algo', '人工智能'], ['other', '其他']]);
var STORE_ATTRIBUTE_MAP = new Map([['fire', '消防'], ['wc', '卫生间'], ['shops', '商铺'], ['rest', '休息区'], ['visitorCenter', '游客中心'], ['parking', '停车场'], ['myposition', '我的位置']]);
var STORE_ATTRIBUTE_ICON_MAP = new Map([['fire', '/floor-map/icon/xiaofangshuan.png'], ['wc', '/floor-map/icon/ziyuan.png'], ['shops', '/floor-map/icon/shangpuzhuanrang-.png'], ['rest', '/floor-map/icon/xiuxiqu2.png'], ['visitorCenter', '/floor-map/icon/kefu.png'], ['parking', '/floor-map/icon/tingchechang.png']]);
var FLOOR_MAP_URL = [{
  name: '闲林埠',
  url: '/floor-map/%E8%A5%BF%E5%8D%95%E5%A4%A7%E6%82%A6%E5%9F%8E/F1-01.svg'
}];
var rulesRequired = {
  rules: [{
    required: true,
    message: '${label}必填'
  }]
};
var formLayout = {
  labelCol: {
    span: 6
  },
  wrapperCol: {
    span: 12
  }
};
var MouseState = {
  effective: true
};

/***/ }),

/***/ 34368:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Floor; }
});

// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__(97857);
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(15009);
var regeneratorRuntime_default = /*#__PURE__*/__webpack_require__.n(regeneratorRuntime);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(99289);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);
// EXTERNAL MODULE: ./node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(5574);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);
// EXTERNAL MODULE: ./node_modules/@ant-design/pro-layout/es/components/PageContainer/index.js + 21 modules
var PageContainer = __webpack_require__(90930);
;// CONCATENATED MODULE: ./src/pages/Floor/index.less?modules
// extracted by mini-css-extract-plugin
/* harmony default export */ var Floormodules = ({"container":"container___Nrkw8","floorList":"floorList___QGLBe"});
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 12 modules
var message = __webpack_require__(68872);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 23 modules
var es_form = __webpack_require__(23323);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 27 modules
var modal = __webpack_require__(63620);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 19 modules
var input = __webpack_require__(98086);
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 17 modules
var input_number = __webpack_require__(10418);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 59 modules
var es_select = __webpack_require__(5062);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 3 modules
var space = __webpack_require__(78957);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js + 15 modules
var es_button = __webpack_require__(45093);
// EXTERNAL MODULE: ./node_modules/antd/es/card/index.js + 4 modules
var card = __webpack_require__(4393);
// EXTERNAL MODULE: ./node_modules/antd/es/popconfirm/index.js + 2 modules
var popconfirm = __webpack_require__(86738);
// EXTERNAL MODULE: ./node_modules/antd/es/tooltip/index.js + 5 modules
var tooltip = __webpack_require__(61781);
// EXTERNAL MODULE: ./node_modules/antd/es/descriptions/index.js + 8 modules
var descriptions = __webpack_require__(26412);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 3 modules
var empty = __webpack_require__(32983);
// EXTERNAL MODULE: ./src/request/floor.ts
var floor = __webpack_require__(46500);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DeleteFilled.js + 1 modules
var DeleteFilled = __webpack_require__(27704);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/EditFilled.js + 1 modules
var EditFilled = __webpack_require__(36531);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/LinkOutlined.js + 1 modules
var LinkOutlined = __webpack_require__(29158);
// EXTERNAL MODULE: ./node_modules/ahooks/es/useRequest/index.js + 25 modules
var useRequest = __webpack_require__(36158);
// EXTERNAL MODULE: ./src/.umi-production/exports.ts + 35 modules
var _umi_production_exports = __webpack_require__(80854);
// EXTERNAL MODULE: ./src/dictionary.ts
var dictionary = __webpack_require__(14422);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./src/pages/Floor/index.tsx
















var HomePage = function HomePage() {
  var _useState = (0,react.useState)(''),
    _useState2 = slicedToArray_default()(_useState, 2),
    newFloorId = _useState2[0],
    setNewFloorId = _useState2[1];
  var add = /*#__PURE__*/function () {
    var _ref = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee(foorInfo) {
      var res;
      return regeneratorRuntime_default()().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0,floor/* createFloorInfo */.wA)(foorInfo);
          case 2:
            res = _context.sent;
            if (res.success) {
              message/* default */.ZP.success(res.msg);
              getAll();
            } else {
              message/* default */.ZP.error(res.msg);
            }
          case 4:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function add(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  // 获取所有数据 延迟300毫秒请求，防止读写冲突
  var _useRequest = (0,useRequest/* default */.Z)(floor/* getAllData */.jl, {
      manual: false,
      debounceWait: 300,
      onSuccess: function onSuccess(res) {
        if (res.success) {
          setFloorList(res.data);
        }
      }
    }),
    getAll = _useRequest.run;

  // 删除景区
  var _useRequest2 = (0,useRequest/* default */.Z)(floor/* removeFloor */.RT, {
      manual: true,
      onSuccess: function onSuccess(res) {
        if (res.success) {
          getAll();
          message/* default */.ZP.success(res.msg);
        } else {
          message/* default */.ZP.error(res.msg);
        }
      }
    }),
    del = _useRequest2.run;
  var _useRequest3 = (0,useRequest/* default */.Z)(floor/* setFloorInfoByFloorId */.TW, {
      manual: true,
      onSuccess: function onSuccess(res) {
        if (res.success) {
          message/* default */.ZP.success(res.msg);
          setFloorState({
            open: false,
            isEdit: false
          });
          getAll();
        } else {
          message/* default */.ZP.error(res.msg);
        }
      }
    }),
    edit = _useRequest3.run;
  var _useState3 = (0,react.useState)([]),
    _useState4 = slicedToArray_default()(_useState3, 2),
    floorList = _useState4[0],
    setFloorList = _useState4[1];
  var _useState5 = (0,react.useState)({
      open: false,
      title: '新增景区',
      floorData: {}
    }),
    _useState6 = slicedToArray_default()(_useState5, 2),
    addFloorState = _useState6[0],
    setFloorState = _useState6[1];
  var _Form$useForm = es_form/* default */.Z.useForm(),
    _Form$useForm2 = slicedToArray_default()(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var openModal = function openModal() {
    setFloorState({
      open: true,
      title: '新增景区',
      isEdit: false
    });
  };
  var checkForm = function checkForm() {
    form.validateFields().then( /*#__PURE__*/function () {
      var _ref2 = asyncToGenerator_default()( /*#__PURE__*/regeneratorRuntime_default()().mark(function _callee2(values) {
        return regeneratorRuntime_default()().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!addFloorState.isEdit) {
                _context2.next = 5;
                break;
              }
              _context2.next = 3;
              return edit(addFloorState.editFloorId || '', values);
            case 3:
              _context2.next = 7;
              break;
            case 5:
              _context2.next = 7;
              return add(values);
            case 7:
              cancel();
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  };
  var cancel = function cancel() {
    form.resetFields();
    setFloorState({
      open: false
    });
  };
  var editFloor = function editFloor(floorData) {
    setFloorState({
      open: true,
      isEdit: true,
      editFloorId: floorData.floorId || '',
      title: '编辑景区'
    });
    form.setFieldsValue(floorData);
  };
  var toModel = function toModel(floorId) {
    _umi_production_exports.history.push("/amap/".concat(floorId));
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(PageContainer/* PageContainer */._z, {
    ghost: true,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z, {
      title: addFloorState.title,
      open: addFloorState.open,
      onOk: checkForm,
      onCancel: cancel,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z, objectSpread2_default()(objectSpread2_default()({
        form: form
      }, dictionary/* formLayout */.cl), {}, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, objectSpread2_default()(objectSpread2_default()({}, dictionary/* rulesRequired */.qn), {}, {
          label: "\u666F\u533A\u540D\u79F0",
          name: "name",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {})
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, objectSpread2_default()(objectSpread2_default()({}, dictionary/* rulesRequired */.qn), {}, {
          label: "\u8D77\u59CB\u4F4D\u7F6E",
          initialValue: "119.985163,30.221529",
          name: "position",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z, {})
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, objectSpread2_default()(objectSpread2_default()({}, dictionary/* rulesRequired */.qn), {}, {
          label: "\u666F\u533A\u7D22\u5F15",
          name: "floorIndex",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z, {
            step: "1",
            precision: 0,
            min: 1
          })
        })), /*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default */.Z.Item, objectSpread2_default()(objectSpread2_default()(objectSpread2_default()({}, dictionary/* rulesRequired */.qn), dictionary/* rulesRequired */.qn), {}, {
          label: "\u6A21\u578B\u8DEF\u5F84",
          name: "url",
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z, {
            options: dictionary/* FLOOR_MAP_URL */.Qt,
            fieldNames: {
              label: 'name',
              value: 'url'
            }
          })
        }))]
      }))
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(space/* default */.Z, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
        type: "primary",
        onClick: openModal,
        children: "\u65B0\u589E\u666F\u533A"
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: Floormodules.floorList,
      children: floorList.length !== 0 ? floorList.map(function (floorItem) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(card/* default */.Z, {
          size: "small",
          title: floorItem.name,
          extra: /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime.jsx)(popconfirm/* default */.Z, {
              title: "\u5220\u9664\u666F\u533A",
              description: "\u662F\u5426\u5220\u9664\u666F\u533A",
              onConfirm: function onConfirm() {
                return del((floorItem === null || floorItem === void 0 ? void 0 : floorItem.floorId) || '');
              },
              okText: "\u662F",
              cancelText: "\u5426",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
                title: "\u5220\u9664",
                children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                  danger: true,
                  icon: /*#__PURE__*/(0,jsx_runtime.jsx)(DeleteFilled/* default */.Z, {}),
                  type: "link"
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
              title: "\u7F16\u8F91",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                icon: /*#__PURE__*/(0,jsx_runtime.jsx)(EditFilled/* default */.Z, {}),
                onClick: function onClick() {
                  return editFloor(floorItem);
                },
                type: "link"
              })
            }), /*#__PURE__*/(0,jsx_runtime.jsx)(tooltip/* default */.Z, {
              title: "\u67E5\u770B",
              children: /*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.ZP, {
                icon: /*#__PURE__*/(0,jsx_runtime.jsx)(LinkOutlined/* default */.Z, {}),
                onClick: function onClick() {
                  return toModel(floorItem.floorId || '');
                },
                type: "link"
              })
            })]
          }),
          style: {
            width: 300
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(descriptions/* default */.Z, {
            items: [{
              key: 'Descriptions' + floorItem.floorIndex,
              label: '景区索引',
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
                children: floorItem.floorIndex
              })
            }, {
              key: 'Descriptions' + floorItem.storeCount,
              label: '商铺数量',
              children: /*#__PURE__*/(0,jsx_runtime.jsx)("p", {
                children: floorItem.storeCount || 0
              })
            }]
          })
        }, floorItem.floorId);
      }) : /*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z, {})
    })]
  });
};
/* harmony default export */ var Floor = (HomePage);

/***/ }),

/***/ 46500:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BG: function() { return /* binding */ getFloorInfoByFloorId; },
/* harmony export */   RT: function() { return /* binding */ removeFloor; },
/* harmony export */   TW: function() { return /* binding */ setFloorInfoByFloorId; },
/* harmony export */   jl: function() { return /* binding */ getAllData; },
/* harmony export */   wA: function() { return /* binding */ createFloorInfo; }
/* harmony export */ });
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15009);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99289);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97857);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_indexedDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31065);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(57632);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20701);
/* harmony import */ var _dictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14422);




var dataBase = new _utils_indexedDB__WEBPACK_IMPORTED_MODULE_3__/* .DataBase */ .y('floorData', 'floorId');




// 查找景区

// 通过景区id获取景区信息
var getFloorInfoByFloorId = function getFloorInfoByFloorId(params) {
  return new Promise(function (res, reg) {
    if (params.floorId) {
      dataBase.getDataByKeyPath(params.floorId).then(function (data) {
        if (data) {
          res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)(JSON.parse(data.data)));
        } else {
          res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_GETBYID_MSG));
        }
      });
    } else {
      res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_GETBYID_MSG));
    }
  });
};
// 新建景区
var createFloorInfo = function createFloorInfo(params) {
  return new Promise(function (res, reg) {
    var key = (0,uuid__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)();
    if (params.name !== undefined && params.floorIndex !== undefined && params.url !== undefined) {
      dataBase.saveDataByKeyPath(key, _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2___default()(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2___default()({}, params), {}, {
        floorId: key
      }));
      res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)({
        floorId: key
      }, _dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_SUCCESS_MSG));
    } else {
      res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_MSG));
    }
  });
};

// 修改景区信息

var setFloorInfoByFloorId = /*#__PURE__*/function () {
  var _ref = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee2(floorId, params) {
    return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref2 = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(res, reg) {
              return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    try {
                      dataBase.getDataByKeyPath(floorId).then(function (oldData) {
                        dataBase.saveDataByKeyPath(floorId, _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2___default()(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_2___default()({}, JSON.parse(oldData.data)), params));
                        res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)(undefined, _dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_SUCCESS_MSG));
                      });
                    } catch (error) {
                      res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_MSG));
                    }
                  case 1:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x3, _x4) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function setFloorInfoByFloorId(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// 删除景区
var removeFloor = function removeFloor(floorId) {
  return new Promise( /*#__PURE__*/function () {
    var _ref3 = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee3(res, reg) {
      return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (floorId) {
              dataBase.removeDataByKeyPath(floorId).then(function () {
                res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)(undefined, _dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_SUCCESS_MSG));
              })["catch"](function (error) {
                res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_DELEETE_MSG));
              });
            } else {
              res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_ISHAVE_MSG));
            }
          case 1:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};
// 获取所有数据
var getAllData = function getAllData() {
  return new Promise( /*#__PURE__*/function () {
    var _ref4 = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee4(res, reg) {
      var allDataList;
      return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return dataBase.getAllData();
          case 3:
            allDataList = _context4.sent;
            res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theSuccess */ .Em)(allDataList));
            _context4.next = 10;
            break;
          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            res((0,___WEBPACK_IMPORTED_MODULE_4__/* .theError */ .Z5)(_dictionary__WEBPACK_IMPORTED_MODULE_5__/* .PROMOSE_RESPONSE */ .Yc.PROMOSE_ERROR_MSG));
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 7]]);
    }));
    return function (_x7, _x8) {
      return _ref4.apply(this, arguments);
    };
  }());
};

/***/ }),

/***/ 20701:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Em: function() { return /* binding */ theSuccess; },
/* harmony export */   Z5: function() { return /* binding */ theError; }
/* harmony export */ });
/* unused harmony export fetchQuery */
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5574);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97857);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__);


var theSuccess = function theSuccess(data, msg) {
  return {
    success: true,
    msg: msg || '',
    data: data
  };
};
var theError = function theError(msg) {
  return {
    success: false,
    msg: msg || '',
    data: null
  };
};

/**
 * 
 * @param url 请求地址
 * @param method 请求方式
 * @param headers 请求头
 * @param params 请求参数
 * @param query 路径参数
 * @returns 
 */
var fetchQuery = function fetchQuery(url, method) {
  var headers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var params = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  var query = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
  var queryString = new URLSearchParams(query).toString();
  console.log('queryString', queryString);
  return new Promise(function (resolve, reject) {
    fetch("".concat(url).concat(queryString ? '?' + queryString : ''), {
      method: method || 'POST',
      // 请求方法  
      headers: _objectSpread(_objectSpread({}, headers), {}, {
        'Accept': 'text/event-stream'
      }),
      body: JSON.stringify(params || {}) // 将我们的数据转换为JSON字符串  
    })["finally"](function () {
      console.log(123);
    }).then(function (response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text(); // 获取响应文本
    }).then(function (eventStreamData) {
      // 在这里解析 eventStreamData，处理事件流
      console.log('eventStreamData', eventStreamData);
    })
    // .then(body => {
    //     console.log(body); // 处理从服务器返回的数据  

    //     const parsedData = parseSSEMessage(body);  
    //     console.log(parsedData);
    //     let arr = body.split('data:');
    //     console.log('arr',arr);

    //     resolve(body)
    // })
    ["catch"](function (error) {
      reject(error);
      console.error('There was a problem with your fetch operation:', error);
    });
  });
};
function parseSSEMessage(message) {
  // 假设message是从SSE连接中接收到的整行数据  
  // 例如: "event:conversation.chat.completed\ndata:{\"id\":\"7394816695363256330\",...}"  

  // 首先，按换行符分割字符串，得到事件名和数据部分  
  var parts = message.trim().split('\n');

  // 遍历分割后的数组，找到data部分  
  var dataPart = null;
  parts.forEach(function (part) {
    var _part$split = part.split(':'),
      _part$split2 = _slicedToArray(_part$split, 2),
      key = _part$split2[0],
      value = _part$split2[1];
    if (key.trim() === 'data') {
      // 去除值前面的空格，并处理JSON转义字符（如果必要的话）  
      // 注意：这里假设数据已经是有效的JSON字符串，但可能包含转义字符  
      dataPart = value.trim().replace(/\\/g, ''); // 这一步可能是不必要的，取决于数据的实际格式  
      // 如果数据中包含转义的JSON字符串（如JSON字符串内部的双引号被转义），你可能需要使用更复杂的逻辑来解析  
    }
  });

  // 解析JSON数据  
  if (dataPart) {
    try {
      var data = JSON.parse(dataPart);
      // 现在你可以使用data对象了  
      console.log(data);
      return data;
    } catch (error) {
      console.error('Failed to parse JSON:', error);
    }
  }

  // 如果没有找到data部分或解析失败，返回null或适当的错误消息  
  return null;
}

/***/ }),

/***/ 31065:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   y: function() { return /* binding */ DataBase; }
/* harmony export */ });
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15009);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99289);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12444);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72004);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9783);
/* harmony import */ var _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__);





/* eslint-disable prettier/prettier */
// import {EventTarget} from 
var DataBase = /*#__PURE__*/function () {
  function DataBase(databaseName) {
    var _this = this;
    var keyPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'id';
    _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2___default()(this, DataBase);
    _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "databaseName", void 0);
    _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "db", void 0);
    _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "isOpen", false);
    _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_defineProperty_js__WEBPACK_IMPORTED_MODULE_4___default()(this, "keyPath", void 0);
    this.databaseName = databaseName;
    this.keyPath = keyPath;
    var request = window.indexedDB.open(this.databaseName);
    request.onerror = function () {
      console.log('数据库打开报错');
      _this.isOpen = false;
    };
    request.onsuccess = function () {
      _this.db = request.result;
      console.log('数据库打开成功');
      _this.isOpen = true;
    };
    request.onupgradeneeded = function (event) {
      _this.db = event.target.result;
      if (!_this.db.objectStoreNames.contains(_this.databaseName)) {
        _this.db.createObjectStore(_this.databaseName, {
          keyPath: _this.keyPath
        }); // 主键自增
      }
    };
  }
  _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_createClass_js__WEBPACK_IMPORTED_MODULE_3___default()(DataBase, [{
    key: "saveDataByKeyPath",
    value: function () {
      var _saveDataByKeyPath = _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().mark(function _callee(kp, data) {
        var strScene, object, isHave, store;
        return _Library_other_blog_three_article_vite_node_modules_umijs_babel_preset_umi_node_modules_babel_runtime_helpers_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_0___default()().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // this.name = name;
              strScene = JSON.stringify(data);
              object = {
                data: strScene
              };
              object[this.keyPath] = kp;
              _context.next = 5;
              return this.isHave(kp);
            case 5:
              isHave = _context.sent;
              store = this.db.transaction([this.databaseName], "readwrite").objectStore(this.databaseName);
              console.log('store', store, object);
              if (isHave) {
                store.put(object);
              } else {
                store.add(object);
              }
            case 9:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function saveDataByKeyPath(_x, _x2) {
        return _saveDataByKeyPath.apply(this, arguments);
      }
      return saveDataByKeyPath;
    }()
  }, {
    key: "isHave",
    value: function isHave(kp) {
      var _this2 = this;
      return new Promise(function (resolve) {
        var objectStore = _this2.db.transaction(_this2.databaseName).objectStore(_this2.databaseName);
        objectStore.openCursor().onsuccess = function (event) {
          var cursor = event.target.result;
          console.log('cursor', cursor, kp);
          resolve(cursor && (cursor === null || cursor === void 0 ? void 0 : cursor.primaryKey) === kp);
        };
      });
    }
  }, {
    key: "getAllData",
    value: function getAllData(key, value) {
      var _this3 = this;
      return new Promise(function (resolve) {
        var dataList = [];
        var objectStore = _this3.db.transaction(_this3.databaseName).objectStore(_this3.databaseName);
        objectStore.openCursor().onsuccess = function (event) {
          var cursor = event.target.result;
          if (cursor) {
            // 获取当前记录
            var record = cursor.value;
            var data = JSON.parse(record.data);
            if (key && value !== undefined) {
              if (data[key] === value) {
                dataList.push(data);
              }
            } else {
              dataList.push(data);
            }

            // 继续遍历下一个记录
            cursor["continue"]();
          } else {
            // 游标遍历完毕
            resolve(dataList);
          }
        };
      });
    }
  }, {
    key: "getDataByKeyPath",
    value: function getDataByKeyPath(kp) {
      var _this4 = this;
      return new Promise(function (resolve) {
        var request = _this4.db.transaction([_this4.databaseName]).objectStore(_this4.databaseName).get(kp);
        request.onsuccess = function () {
          if (request !== null && request !== void 0 && request.result) {
            resolve(request === null || request === void 0 ? void 0 : request.result);
          } else {
            resolve(null);
          }
        };
      });
    }
  }, {
    key: "removeDataByKeyPath",
    value: function removeDataByKeyPath(kp) {
      var _this5 = this;
      return new Promise(function (resolve) {
        var request = _this5.db.transaction([_this5.databaseName], "readwrite").objectStore(_this5.databaseName)["delete"](kp);
        request.onsuccess = function () {
          resolve(true);
        };
      });
    }
  }]);
  return DataBase;
}();

/***/ })

}]);