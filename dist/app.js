'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _constant = require('./utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import './common/styles/common.scss'

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/mine/userinfo', 'pages/mine/settings', 'pages/mine/address', 'pages/goods/goods', 'pages/order/detail', 'pages/goods/order', 'pages/goods/addr'],
      window: {
        'navigationBarTextStyle': 'white',
        'navigationBarBackgroundColor': '#69B273',
        'enablePullDownRefresh': false
      }
    };
    _this.globalData = {
      userInfo: null,
      systemInfo: null
    };

    _this.use('requestfix');
    _this.use('promisify');
    return _this;
  }

  _createClass(_default, [{
    key: 'onLaunch',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.getUserInfo();
                this.getSystemInfo();

              case 2:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function onLaunch() {
        return _ref.apply(this, arguments);
      }

      return onLaunch;
    }()
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'getUserInfo',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var res;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _wepy2.default.getUserInfo();

              case 3:
                res = _context2.sent;

                _wepy2.default.setStorageSync(_constant.USER_INFO, res.userInfo);
                this.globalData.userInfo = res.userInfo;
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2['catch'](0);
                return _context2.abrupt('return', new Error(_context2.t0));

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this, [[0, 8]]);
      }));

      function getUserInfo() {
        return _ref2.apply(this, arguments);
      }

      return getUserInfo;
    }()
  }, {
    key: 'getSystemInfo',
    value: function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _wepy2.default.getSystemInfo();

              case 3:
                this.globalData.systemInfo = _context3.sent;
                _context3.next = 9;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3['catch'](0);
                return _context3.abrupt('return', new Error(_context3.t0));

              case 9:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this, [[0, 6]]);
      }));

      function getSystemInfo() {
        return _ref3.apply(this, arguments);
      }

      return getSystemInfo;
    }()

    // getUserInfo(cb) {
    //   const that = this
    //   if (this.globalData.userInfo) {
    //     return this.globalData.userInfo
    //   }
    //   wepy.getUserInfo({
    //     success (res) {
    //       that.globalData.userInfo = res.userInfo
    //       cb && cb(res.userInfo)
    //     }
    //   })
    // }

  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInN5c3RlbUluZm8iLCJ1c2UiLCJnZXRVc2VySW5mbyIsImdldFN5c3RlbUluZm8iLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0IiwicmVzIiwic2V0U3RvcmFnZVN5bmMiLCJFcnJvciIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7O0FBMEJFLHNCQUFlO0FBQUE7O0FBQUE7O0FBQUEsVUF2QmZBLE1BdUJlLEdBdkJOO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwscUJBRkssRUFHTCxxQkFISyxFQUlMLG9CQUpLLEVBS0wsbUJBTEssRUFNTCxvQkFOSyxFQU9MLG1CQVBLLEVBUUwsa0JBUkssQ0FEQTtBQVdQQyxjQUFRO0FBQ04sa0NBQTBCLE9BRHBCO0FBRU4sd0NBQWdDLFNBRjFCO0FBR04saUNBQXlCO0FBSG5CO0FBWEQsS0F1Qk07QUFBQSxVQUxmQyxVQUtlLEdBTEY7QUFDWEMsZ0JBQVUsSUFEQztBQUVYQyxrQkFBWTtBQUZELEtBS0U7O0FBRWIsVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQSxHQUFMLENBQVMsV0FBVDtBQUhhO0FBSWQ7Ozs7Ozs7Ozs7QUFHQyxxQkFBS0MsV0FBTDtBQUNBLHFCQUFLQyxhQUFMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR0tDLEMsRUFBRztBQUNSLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUN0Q0MsbUJBQVcsWUFBTTtBQUNmRixrQkFBUSxrQkFBUjtBQUNELFNBRkQsRUFFR0YsSUFBSSxJQUZQO0FBR0QsT0FKTSxDQUFQO0FBS0Q7Ozs7Ozs7Ozs7Ozt1QkFJbUIsZUFBS0YsV0FBTCxFOzs7QUFBWk8sbUI7O0FBQ0osK0JBQUtDLGNBQUwsc0JBQStCRCxJQUFJVixRQUFuQztBQUNBLHFCQUFLRCxVQUFMLENBQWdCQyxRQUFoQixHQUEyQlUsSUFBSVYsUUFBL0I7Ozs7Ozs7a0RBRU8sSUFBSVksS0FBSixjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkFNNEIsZUFBS1IsYUFBTCxFOzs7QUFBbkMscUJBQUtMLFVBQUwsQ0FBZ0JFLFU7Ozs7Ozs7a0RBRVQsSUFBSVcsS0FBSixjOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7RUF4RTJCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuaW1wb3J0IHsgVVNFUl9JTkZPIH0gZnJvbSAnLi91dGlscy9jb25zdGFudCdcbi8vIGltcG9ydCAnLi9jb21tb24vc3R5bGVzL2NvbW1vbi5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgY29uZmlnID0ge1xuICAgIHBhZ2VzOiBbXG4gICAgICAncGFnZXMvaW5kZXgnLFxuICAgICAgJ3BhZ2VzL21pbmUvdXNlcmluZm8nLFxuICAgICAgJ3BhZ2VzL21pbmUvc2V0dGluZ3MnLFxuICAgICAgJ3BhZ2VzL21pbmUvYWRkcmVzcycsXG4gICAgICAncGFnZXMvZ29vZHMvZ29vZHMnLFxuICAgICAgJ3BhZ2VzL29yZGVyL2RldGFpbCcsXG4gICAgICAncGFnZXMvZ29vZHMvb3JkZXInLFxuICAgICAgJ3BhZ2VzL2dvb2RzL2FkZHInXG4gICAgXSxcbiAgICB3aW5kb3c6IHtcbiAgICAgICduYXZpZ2F0aW9uQmFyVGV4dFN0eWxlJzogJ3doaXRlJyxcbiAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyM2OUIyNzMnLFxuICAgICAgJ2VuYWJsZVB1bGxEb3duUmVmcmVzaCc6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgZ2xvYmFsRGF0YSA9IHtcbiAgICB1c2VySW5mbzogbnVsbCxcbiAgICBzeXN0ZW1JbmZvOiBudWxsXG4gIH1cblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoKVxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcbiAgICB0aGlzLnVzZSgncHJvbWlzaWZ5JylcbiAgfVxuXG4gIGFzeW5jIG9uTGF1bmNoICgpIHtcbiAgICB0aGlzLmdldFVzZXJJbmZvKClcbiAgICB0aGlzLmdldFN5c3RlbUluZm8oKVxuICB9XG5cbiAgc2xlZXAgKHMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxuICAgICAgfSwgcyAqIDEwMDApXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGdldFVzZXJJbmZvICgpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkuZ2V0VXNlckluZm8oKVxuICAgICAgd2VweS5zZXRTdG9yYWdlU3luYyhVU0VSX0lORk8sIHJlcy51c2VySW5mbylcbiAgICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihlcnIpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0U3lzdGVtSW5mbyAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuZ2xvYmFsRGF0YS5zeXN0ZW1JbmZvID0gYXdhaXQgd2VweS5nZXRTeXN0ZW1JbmZvKClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoZXJyKVxuICAgIH1cbiAgfVxuXG4gIC8vIGdldFVzZXJJbmZvKGNiKSB7XG4gIC8vICAgY29uc3QgdGhhdCA9IHRoaXNcbiAgLy8gICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XG4gIC8vICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXG4gIC8vICAgfVxuICAvLyAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAvLyAgICAgc3VjY2VzcyAocmVzKSB7XG4gIC8vICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAvLyAgICAgICBjYiAmJiBjYihyZXMudXNlckluZm8pXG4gIC8vICAgICB9XG4gIC8vICAgfSlcbiAgLy8gfVxufVxuIl19