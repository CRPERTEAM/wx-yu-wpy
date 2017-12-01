"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _constant = require('./../../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LMineHeader = function (_wepy$component) {
  _inherits(LMineHeader, _wepy$component);

  function LMineHeader() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LMineHeader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LMineHeader.__proto__ || Object.getPrototypeOf(LMineHeader)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      userInfo: {}
    }, _this.props = {}, _this.methods = {}, _this.watch = {
      userInfo: function userInfo(newValue, oldValue) {
        console.log("最新的用户信息:", newValue);
        console.log("获取之前的用户信息:", oldValue);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LMineHeader, [{
    key: "onLoad",
    value: function onLoad() {
      this.getUserInfo();
    }
  }, {
    key: "getUserInfo",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // 先从storage里面去取（第一次一般取不到，storage异步，可能还未设置进去）没取到则调用接口
                this.userInfo = _wepy2.default.getStorageSync(_constant.USER_INFO) || {};
                console.log("this.userInfo:", this.userInfo, Object.keys(this.userInfo));

                // 判断是否拿到对象的 key,若无则重新调用请求借口尝试获取

                if (!(Object.keys(this.userInfo).length === 0)) {
                  _context.next = 11;
                  break;
                }

                _context.prev = 3;
                _context.next = 6;
                return _wepy2.default.getUserInfo().then(function (res) {
                  console.log("userinfo: ", res.userInfo);
                  _this2.userInfo = res.userInfo;
                  _this2.$apply(); // 组件发起脏检查
                });

              case 6:
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](3);
                return _context.abrupt("return", new Error(_context.t0));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 8]]);
      }));

      function getUserInfo() {
        return _ref2.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }]);

  return LMineHeader;
}(_wepy2.default.component);

exports.default = LMineHeader;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5qcyJdLCJuYW1lcyI6WyJMTWluZUhlYWRlciIsImRhdGEiLCJ1c2VySW5mbyIsInByb3BzIiwibWV0aG9kcyIsIndhdGNoIiwibmV3VmFsdWUiLCJvbGRWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRVc2VySW5mbyIsImdldFN0b3JhZ2VTeW5jIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInRoZW4iLCJyZXMiLCIkYXBwbHkiLCJFcnJvciIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7Ozs7Ozs7OztnTUFDbkJDLEksR0FBTztBQUNMQyxnQkFBVTtBQURMLEssUUFJUEMsSyxHQUFRLEUsUUFNUkMsTyxHQUFVLEUsUUFxQlZDLEssR0FBUTtBQUNOSCxjQURNLG9CQUNHSSxRQURILEVBQ2FDLFFBRGIsRUFDdUI7QUFDM0JDLGdCQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QkgsUUFBeEI7QUFDQUUsZ0JBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixRQUExQjtBQUNEO0FBSkssSzs7Ozs7NkJBekJDO0FBQ1AsV0FBS0csV0FBTDtBQUNEOzs7Ozs7Ozs7OztBQUtDO0FBQ0EscUJBQUtSLFFBQUwsR0FBZ0IsZUFBS1MsY0FBTCx5QkFBa0MsRUFBbEQ7QUFDQUgsd0JBQVFDLEdBQVIsQ0FBWSxnQkFBWixFQUE4QixLQUFLUCxRQUFuQyxFQUE2Q1UsT0FBT0MsSUFBUCxDQUFZLEtBQUtYLFFBQWpCLENBQTdDOztBQUVBOztzQkFDSVUsT0FBT0MsSUFBUCxDQUFZLEtBQUtYLFFBQWpCLEVBQTJCWSxNQUEzQixLQUFzQyxDOzs7Ozs7O3VCQUVoQyxlQUFLSixXQUFMLEdBQW1CSyxJQUFuQixDQUF3QixlQUFPO0FBQ25DUCwwQkFBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJPLElBQUlkLFFBQTlCO0FBQ0EseUJBQUtBLFFBQUwsR0FBZ0JjLElBQUlkLFFBQXBCO0FBQ0EseUJBQUtlLE1BQUwsR0FIbUMsQ0FHcEI7QUFDaEIsaUJBSkssQzs7Ozs7Ozs7O2lEQU1DLElBQUlDLEtBQUosYTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTNCMEIsZUFBS0MsUzs7a0JBQXpCbkIsVyIsImZpbGUiOiJoZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcbiAgaW1wb3J0IHsgVVNFUl9JTkZPIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbnN0YW50XCI7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTE1pbmVIZWFkZXIgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJJbmZvOiB7fVxuICAgIH07XG5cbiAgICBwcm9wcyA9IHt9O1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7fTtcblxuICAgIGFzeW5jIGdldFVzZXJJbmZvKCkge1xuICAgICAgLy8g5YWI5LuOc3RvcmFnZemHjOmdouWOu+WPlu+8iOesrOS4gOasoeS4gOiIrOWPluS4jeWIsO+8jHN0b3JhZ2XlvILmraXvvIzlj6/og73ov5jmnKrorr7nva7ov5vljrvvvInmsqHlj5bliLDliJnosIPnlKjmjqXlj6NcbiAgICAgIHRoaXMudXNlckluZm8gPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKFVTRVJfSU5GTykgfHwge307XG4gICAgICBjb25zb2xlLmxvZyhcInRoaXMudXNlckluZm86XCIsIHRoaXMudXNlckluZm8sIE9iamVjdC5rZXlzKHRoaXMudXNlckluZm8pKTtcblxuICAgICAgLy8g5Yik5pat5piv5ZCm5ou/5Yiw5a+56LGh55qEIGtleSzoi6Xml6DliJnph43mlrDosIPnlKjor7fmsYLlgJ/lj6PlsJ3or5Xojrflj5ZcbiAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLnVzZXJJbmZvKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBhd2FpdCB3ZXB5LmdldFVzZXJJbmZvKCkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyaW5mbzogXCIsIHJlcy51c2VySW5mbyk7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTsgLy8g57uE5Lu25Y+R6LW36ISP5qOA5p+lXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHdhdGNoID0ge1xuICAgICAgdXNlckluZm8obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pyA5paw55qE55So5oi35L+h5oGvOlwiLCBuZXdWYWx1ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi6I635Y+W5LmL5YmN55qE55So5oi35L+h5oGvOlwiLCBvbGRWYWx1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuIl19