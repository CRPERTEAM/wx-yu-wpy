'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tab = require('./../components/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _home = require('./../components/index/home.js');

var _home2 = _interopRequireDefault(_home);

var _order = require('./../components/index/order.js');

var _order2 = _interopRequireDefault(_order);

var _mine = require('./../components/index/mine.js');

var _mine2 = _interopRequireDefault(_mine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'navigationBarTitleText': ''
    }, _this.$repeat = {}, _this.$props = { "tabbar": { "xmlns:v-bind": "", "v-bind:active.sync": "currentTab", "class": "tab" } }, _this.$events = {}, _this.components = {
      tabbar: _tab2.default, // 底部 tabs
      home: _home2.default, // 主页组件
      order: _order2.default, // 订单
      mine: _mine2.default // 个人中心
    }, _this.data = {
      currentTab: 0,
      title: '123',
      tabbarHeight: 51
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.t0 = console;
                _context.next = 3;
                return _wepy2.default.getSystemInfo();

              case 3:
                _context.t1 = _context.sent;

                _context.t0.log.call(_context.t0, 'systemInfo: ', _context.t1);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLoad() {
        return _ref2.apply(this, arguments);
      }

      return onLoad;
    }()
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwidGFiYmFyIiwiaG9tZSIsIm9yZGVyIiwibWluZSIsImRhdGEiLCJjdXJyZW50VGFiIiwidGl0bGUiLCJ0YWJiYXJIZWlnaHQiLCJjb25zb2xlIiwiZ2V0U3lzdGVtSW5mbyIsImxvZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQLGdDQUEwQjtBQURuQixLLFFBSVZDLE8sR0FBVSxFLFFBQ1hDLE0sR0FBUyxFQUFDLFVBQVMsRUFBQyxnQkFBZSxFQUFoQixFQUFtQixzQkFBcUIsWUFBeEMsRUFBcUQsU0FBUSxLQUE3RCxFQUFWLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1ZDLDJCQURVLEVBQ0k7QUFDZEMsMEJBRlUsRUFFRTtBQUNaQyw0QkFIVSxFQUdLO0FBQ2ZDLDBCQUpVLENBSUM7QUFKRCxLLFFBT1pDLEksR0FBTztBQUNMQyxrQkFBWSxDQURQO0FBRUxDLGFBQU8sS0FGRjtBQUdMQyxvQkFBYztBQUhULEs7Ozs7Ozs7Ozs7OzhCQU9MQyxPOzt1QkFBa0MsZUFBS0MsYUFBTCxFOzs7Ozs0QkFBMUJDLEcsbUJBQUksYzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXRCbUIsZUFBS0MsSTs7a0JBQW5CakIsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBUYWIgZnJvbSAnLi4vY29tcG9uZW50cy90YWInXG5pbXBvcnQgSG9tZSBmcm9tICcuLi9jb21wb25lbnRzL2luZGV4L2hvbWUnXG5pbXBvcnQgT3JkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9pbmRleC9vcmRlcidcbmltcG9ydCBNaW5lIGZyb20gJy4uL2NvbXBvbmVudHMvaW5kZXgvbWluZSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAnJ1xuICB9XG5cbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcInRhYmJhclwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6YWN0aXZlLnN5bmNcIjpcImN1cnJlbnRUYWJcIixcImNsYXNzXCI6XCJ0YWJcIn19O1xyXG4kZXZlbnRzID0ge307XHJcbiBjb21wb25lbnRzID0ge1xuICAgIHRhYmJhcjogVGFiLCAgLy8g5bqV6YOoIHRhYnNcbiAgICBob21lOiBIb21lLCAvLyDkuLvpobXnu4Tku7ZcbiAgICBvcmRlcjogT3JkZXIsICAvLyDorqLljZVcbiAgICBtaW5lOiBNaW5lIC8vIOS4quS6uuS4reW/g1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBjdXJyZW50VGFiOiAwLFxuICAgIHRpdGxlOiAnMTIzJyxcbiAgICB0YWJiYXJIZWlnaHQ6IDUxXG4gIH1cblxuICBhc3luYyBvbkxvYWQgKCkge1xuICAgIGNvbnNvbGUubG9nKCdzeXN0ZW1JbmZvOiAnLCBhd2FpdCB3ZXB5LmdldFN5c3RlbUluZm8oKSlcbiAgfVxufVxuIl19