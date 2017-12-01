"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MineList = function (_wepy$component) {
  _inherits(MineList, _wepy$component);

  function MineList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MineList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MineList.__proto__ || Object.getPrototypeOf(MineList)).call.apply(_ref, [this].concat(args))), _this), _this.data = {
      items: [{
        title: "收货地址",
        icon: "icon-zuobiao",
        path: "address",
        style: "color:#2980d9;"
      }, {
        title: "13588568241",
        icon: "icon-dianhua",
        style: "color:#e74c3c;"
      }, {
        title: "设置",
        icon: "icon-shezhi",
        path: "settings",
        style: "color:#34495e;"
      }],
      paths: {
        address: "/pages/mine/address",
        settings: "/pages/mine/settings"
      }
    }, _this.methods = {
      toPath: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(path) {
          var type, settings;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(path && path === "address")) {
                    _context.next = 20;
                    break;
                  }

                  _context.prev = 1;
                  _context.next = 4;
                  return _wepy2.default.chooseAddress();

                case 4:
                  _context.next = 18;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context["catch"](1);
                  type = "scope.address";
                  _context.next = 11;
                  return _wepy2.default.getSetting();

                case 11:
                  settings = _context.sent;

                  if (settings.authSetting[type]) {
                    _context.next = 17;
                    break;
                  }

                  _context.next = 15;
                  return _wepy2.default.showModal({
                    title: "提示",
                    content: "\u8BF7\u5728\u5C0F\u7A0B\u5E8F\u8BBE\u7F6E\u754C\u9762\uFF08\u53F3\u4E0A\u89D2 - \u5173\u4E8E - \u53F3\u4E0A\u89D2 - \u8BBE\u7F6E\uFF09\u4E2D\u5F00\u542F\u6388\u6743"
                  });

                case 15:
                  _context.next = 18;
                  break;

                case 17:
                  console.log("err", _context.t0);

                case 18:
                  _context.next = 21;
                  break;

                case 20:
                  _wepy2.default.navigateTo({ url: this.paths[path] });

                case 21:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 6]]);
        }));

        function toPath(_x) {
          return _ref2.apply(this, arguments);
        }

        return toPath;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return MineList;
}(_wepy2.default.component);

exports.default = MineList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiTWluZUxpc3QiLCJkYXRhIiwiaXRlbXMiLCJ0aXRsZSIsImljb24iLCJwYXRoIiwic3R5bGUiLCJwYXRocyIsImFkZHJlc3MiLCJzZXR0aW5ncyIsIm1ldGhvZHMiLCJ0b1BhdGgiLCJjaG9vc2VBZGRyZXNzIiwidHlwZSIsImdldFNldHRpbmciLCJhdXRoU2V0dGluZyIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJjb25zb2xlIiwibG9nIiwibmF2aWdhdGVUbyIsInVybCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7Ozs7Ozs7Ozs7OztJQUVxQkEsUTs7Ozs7Ozs7Ozs7Ozs7MExBQ25CQyxJLEdBQU87QUFDTEMsYUFBTyxDQUNMO0FBQ0VDLGVBQU8sTUFEVDtBQUVFQyxjQUFNLGNBRlI7QUFHRUMsY0FBTSxTQUhSO0FBSUVDLGVBQU87QUFKVCxPQURLLEVBT0w7QUFDRUgsZUFBTyxhQURUO0FBRUVDLGNBQU0sY0FGUjtBQUdFRSxlQUFPO0FBSFQsT0FQSyxFQVlMO0FBQ0VILGVBQU8sSUFEVDtBQUVFQyxjQUFNLGFBRlI7QUFHRUMsY0FBTSxVQUhSO0FBSUVDLGVBQU87QUFKVCxPQVpLLENBREY7QUFvQkxDLGFBQU87QUFDTEMsaUJBQVMscUJBREo7QUFFTEMsa0JBQVU7QUFGTDtBQXBCRixLLFFBMEJQQyxPLEdBQVU7QUFDRkMsWUFERTtBQUFBLDZGQUNLTixJQURMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUVGQSxRQUFRQSxTQUFTLFNBRmY7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBLHlCQUlJLGVBQUtPLGFBQUwsRUFKSjs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTUVDLHNCQU5GLEdBTVMsZUFOVDtBQUFBO0FBQUEseUJBT21CLGVBQUtDLFVBQUwsRUFQbkI7O0FBQUE7QUFPRUwsMEJBUEY7O0FBQUEsc0JBUUdBLFNBQVNNLFdBQVQsQ0FBcUJGLElBQXJCLENBUkg7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSx5QkFTTSxlQUFLRyxTQUFMLENBQWU7QUFDbkJiLDJCQUFPLElBRFk7QUFFbkJjO0FBRm1CLG1CQUFmLENBVE47O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBY0FDLDBCQUFRQyxHQUFSLENBQVksS0FBWjs7QUFkQTtBQUFBO0FBQUE7O0FBQUE7QUFrQkosaUNBQUtDLFVBQUwsQ0FBZ0IsRUFBRUMsS0FBSyxLQUFLZCxLQUFMLENBQVdGLElBQVgsQ0FBUCxFQUFoQjs7QUFsQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7O0VBM0IwQixlQUFLaUIsUzs7a0JBQXRCdEIsUSIsImZpbGUiOiJsaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gXCJ3ZXB5XCI7XG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWluZUxpc3QgZXh0ZW5kcyB3ZXB5LmNvbXBvbmVudCB7XG4gICAgZGF0YSA9IHtcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCLmlLbotKflnLDlnYBcIixcbiAgICAgICAgICBpY29uOiBcImljb24tenVvYmlhb1wiLFxuICAgICAgICAgIHBhdGg6IFwiYWRkcmVzc1wiLFxuICAgICAgICAgIHN0eWxlOiBcImNvbG9yOiMyOTgwZDk7XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiBcIjEzNTg4NTY4MjQxXCIsXG4gICAgICAgICAgaWNvbjogXCJpY29uLWRpYW5odWFcIixcbiAgICAgICAgICBzdHlsZTogXCJjb2xvcjojZTc0YzNjO1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogXCLorr7nva5cIixcbiAgICAgICAgICBpY29uOiBcImljb24tc2hlemhpXCIsXG4gICAgICAgICAgcGF0aDogXCJzZXR0aW5nc1wiLFxuICAgICAgICAgIHN0eWxlOiBcImNvbG9yOiMzNDQ5NWU7XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHBhdGhzOiB7XG4gICAgICAgIGFkZHJlc3M6IFwiL3BhZ2VzL21pbmUvYWRkcmVzc1wiLFxuICAgICAgICBzZXR0aW5nczogXCIvcGFnZXMvbWluZS9zZXR0aW5nc1wiXG4gICAgICB9XG4gICAgfTtcblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBhc3luYyB0b1BhdGgocGF0aCkgeyAvLyDot6/lvoTot7PovazliKTmlq1cbiAgICAgICAgaWYgKHBhdGggJiYgcGF0aCA9PT0gXCJhZGRyZXNzXCIpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgd2VweS5jaG9vc2VBZGRyZXNzKCk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBsZXQgdHlwZSA9IFwic2NvcGUuYWRkcmVzc1wiO1xuICAgICAgICAgICAgbGV0IHNldHRpbmdzID0gYXdhaXQgd2VweS5nZXRTZXR0aW5nKCk7XG4gICAgICAgICAgICBpZiAoIXNldHRpbmdzLmF1dGhTZXR0aW5nW3R5cGVdKSB7XG4gICAgICAgICAgICAgIGF3YWl0IHdlcHkuc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogXCLmj5DnpLpcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBg6K+35Zyo5bCP56iL5bqP6K6+572u55WM6Z2i77yI5Y+z5LiK6KeSIC0g5YWz5LqOIC0g5Y+z5LiK6KeSIC0g6K6+572u77yJ5Lit5byA5ZCv5o6I5p2DYFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogdGhpcy5wYXRoc1twYXRoXSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cbiJdfQ==