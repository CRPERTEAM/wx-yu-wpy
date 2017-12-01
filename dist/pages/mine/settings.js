"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MineSettings = function (_wepy$page) {
  _inherits(MineSettings, _wepy$page);

  function MineSettings() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MineSettings);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MineSettings.__proto__ || Object.getPrototypeOf(MineSettings)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: "设置"
    }, _this.data = {
      items: [{ title: "用户信息", type: "scope.userInfo" }, { title: "收货地址", type: "scope.address" }]
    }, _this.methods = {
      authroize: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(type) {
          var settings, auth;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;

                  console.log(this);
                  _context.next = 4;
                  return _wepy2.default.getSetting();

                case 4:
                  settings = _context.sent;

                  console.log("settings: ", settings);

                  if (settings.authSetting[type]) {
                    _context.next = 14;
                    break;
                  }

                  console.log("authorize");
                  _context.next = 10;
                  return _wepy2.default.authorize({
                    scope: type
                  });

                case 10:
                  auth = _context.sent;

                  console.log("authorize");
                  _context.next = 15;
                  break;

                case 14:
                  wx.openSetting({
                    success: function success(res) {}
                  }); //请求打开授权

                case 15:
                  _context.next = 20;
                  break;

                case 17:
                  _context.prev = 17;
                  _context.t0 = _context["catch"](0);

                  console.log(_context.t0);

                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[0, 17]]);
        }));

        function authroize(_x) {
          return _ref2.apply(this, arguments);
        }

        return authroize;
      }()
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return MineSettings;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(MineSettings , 'pages/mine/settings'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLmpzIl0sIm5hbWVzIjpbIk1pbmVTZXR0aW5ncyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJkYXRhIiwiaXRlbXMiLCJ0aXRsZSIsInR5cGUiLCJtZXRob2RzIiwiYXV0aHJvaXplIiwiY29uc29sZSIsImxvZyIsImdldFNldHRpbmciLCJzZXR0aW5ncyIsImF1dGhTZXR0aW5nIiwiYXV0aG9yaXplIiwic2NvcGUiLCJhdXRoIiwid3giLCJvcGVuU2V0dGluZyIsInN1Y2Nlc3MiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7Ozs7O0lBRXFCQSxZOzs7Ozs7Ozs7Ozs7OztrTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUlUQyxJLEdBQU87QUFDTEMsYUFBTyxDQUNMLEVBQUVDLE9BQU8sTUFBVCxFQUFpQkMsTUFBTSxnQkFBdkIsRUFESyxFQUVMLEVBQUVELE9BQU8sTUFBVCxFQUFpQkMsTUFBTSxlQUF2QixFQUZLO0FBREYsSyxRQU9QQyxPLEdBQVU7QUFDRkMsZUFERTtBQUFBLDZGQUNRRixJQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUdKRywwQkFBUUMsR0FBUixDQUFZLElBQVo7QUFISTtBQUFBLHlCQUlpQixlQUFLQyxVQUFMLEVBSmpCOztBQUFBO0FBSUFDLDBCQUpBOztBQUtKSCwwQkFBUUMsR0FBUixDQUFZLFlBQVosRUFBMEJFLFFBQTFCOztBQUxJLHNCQU1DQSxTQUFTQyxXQUFULENBQXFCUCxJQUFyQixDQU5EO0FBQUE7QUFBQTtBQUFBOztBQU9GRywwQkFBUUMsR0FBUixDQUFZLFdBQVo7QUFQRTtBQUFBLHlCQVFlLGVBQUtJLFNBQUwsQ0FBZTtBQUM5QkMsMkJBQU9UO0FBRHVCLG1CQUFmLENBUmY7O0FBQUE7QUFRRVUsc0JBUkY7O0FBV0ZQLDBCQUFRQyxHQUFSLENBQVksV0FBWjtBQVhFO0FBQUE7O0FBQUE7QUFhRk8scUJBQUdDLFdBQUgsQ0FBZTtBQUNiQyw2QkFBUyxzQkFBTyxDQUFFO0FBREwsbUJBQWYsRUFiRSxDQWVFOztBQWZGO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBa0JKViwwQkFBUUMsR0FBUjs7QUFsQkk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxLOzs7O0VBWjhCLGVBQUtVLEk7O2tCQUExQnBCLFkiLCJmaWxlIjoic2V0dGluZ3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSBcIndlcHlcIjtcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lU2V0dGluZ3MgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6IFwi6K6+572uXCJcbiAgICB9O1xuXG4gICAgZGF0YSA9IHtcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHsgdGl0bGU6IFwi55So5oi35L+h5oGvXCIsIHR5cGU6IFwic2NvcGUudXNlckluZm9cIiB9LFxuICAgICAgICB7IHRpdGxlOiBcIuaUtui0p+WcsOWdgFwiLCB0eXBlOiBcInNjb3BlLmFkZHJlc3NcIiB9XG4gICAgICBdXG4gICAgfTtcblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICBhc3luYyBhdXRocm9pemUodHlwZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgIGxldCBzZXR0aW5ncyA9IGF3YWl0IHdlcHkuZ2V0U2V0dGluZygpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwic2V0dGluZ3M6IFwiLCBzZXR0aW5ncyk7XG4gICAgICAgICAgaWYgKCFzZXR0aW5ncy5hdXRoU2V0dGluZ1t0eXBlXSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRob3JpemVcIik7XG4gICAgICAgICAgICBsZXQgYXV0aCA9IGF3YWl0IHdlcHkuYXV0aG9yaXplKHtcbiAgICAgICAgICAgICAgc2NvcGU6IHR5cGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdXRob3JpemVcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHd4Lm9wZW5TZXR0aW5nKHtcbiAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHt9XG4gICAgICAgICAgICB9KTsgLy/or7fmsYLmiZPlvIDmjojmnYNcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG4iXX0=