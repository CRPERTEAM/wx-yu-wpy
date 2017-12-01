'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// import util from './util'
// import md5 from './md5'

// const API_SECRET_KEY = 'www.mall.cycle.com'
// const TIMESTAMP = util.getCurrentTime()
// const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())
var baseUrl = 'http://jsonplaceholder.typicode.com/post';

exports.default = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
  var res;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('method: ' + method);

          if (!(['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'].indexOf(method.toUpperCase()) === -1)) {
            _context.next = 3;
            break;
          }

          return _context.abrupt('return', new Error('method is error.(方法不能为空)'));

        case 3:

          _wepy2.default.showToast({
            title: '加载中',
            icon: 'loading'
          });

          _context.next = 6;
          return _wepy2.default.request({
            url: baseUrl + url,
            method: method.toUpperCase() || 'GET',
            data: data,
            header: { 'Content-Type': 'application/json' }
          });

        case 6:
          res = _context.sent;


          _wepy2.default.hideToast();

          return _context.abrupt('return', res);

        case 9:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZldGNoLmpzIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJ1cmwiLCJkYXRhIiwibWV0aG9kIiwiY29uc29sZSIsImxvZyIsImluZGV4T2YiLCJ0b1VwcGVyQ2FzZSIsIkVycm9yIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwicmVxdWVzdCIsImhlYWRlciIsInJlcyIsImhpZGVUb2FzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7Ozs7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxVQUFVLDBDQUFoQjs7MEVBRWU7QUFBQSxNQUFPQyxHQUFQLHVFQUFhLEVBQWI7QUFBQSxNQUFpQkMsSUFBakIsdUVBQXdCLEVBQXhCO0FBQUEsTUFBNEJDLE1BQTVCLHVFQUFxQyxLQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDYkMsa0JBQVFDLEdBQVIsY0FBdUJGLE1BQXZCOztBQURhLGdCQUVULENBQUMsS0FBRCxFQUFRLE1BQVIsRUFBZ0IsS0FBaEIsRUFBdUIsUUFBdkIsRUFBaUMsU0FBakMsRUFBNENHLE9BQTVDLENBQW9ESCxPQUFPSSxXQUFQLEVBQXBELE1BQThFLENBQUMsQ0FGdEU7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMkNBR0osSUFBSUMsS0FBSixDQUFVLDBCQUFWLENBSEk7O0FBQUE7O0FBTWIseUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxtQkFBTyxLQURNO0FBRWJDLGtCQUFNO0FBRk8sV0FBZjs7QUFOYTtBQUFBLGlCQVdHLGVBQUtDLE9BQUwsQ0FBYTtBQUMzQlgsaUJBQUtELFVBQVVDLEdBRFk7QUFFM0JFLG9CQUFRQSxPQUFPSSxXQUFQLE1BQXdCLEtBRkw7QUFHM0JMLGtCQUFNQSxJQUhxQjtBQUkzQlcsb0JBQVEsRUFBRSxnQkFBZ0Isa0JBQWxCO0FBSm1CLFdBQWIsQ0FYSDs7QUFBQTtBQVdUQyxhQVhTOzs7QUFrQmIseUJBQUtDLFNBQUw7O0FBbEJhLDJDQW9CTkQsR0FwQk07O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQyIsImZpbGUiOiJmZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4vLyBpbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwnXG4vLyBpbXBvcnQgbWQ1IGZyb20gJy4vbWQ1J1xuXG4vLyBjb25zdCBBUElfU0VDUkVUX0tFWSA9ICd3d3cubWFsbC5jeWNsZS5jb20nXG4vLyBjb25zdCBUSU1FU1RBTVAgPSB1dGlsLmdldEN1cnJlbnRUaW1lKClcbi8vIGNvbnN0IFNJR04gPSBtZDUuaGV4X21kNSgoVElNRVNUQU1QICsgQVBJX1NFQ1JFVF9LRVkpLnRvTG93ZXJDYXNlKCkpXG5jb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh1cmwgPSAnJywgZGF0YSA9IHt9LCBtZXRob2QgPSAnR0VUJykgPT4ge1xuICBjb25zb2xlLmxvZyhgbWV0aG9kOiAke21ldGhvZH1gKVxuICBpZiAoWydHRVQnLCAnUE9TVCcsICdQVVQnLCAnREVMRVRFJywgJ09QVElPTlMnXS5pbmRleE9mKG1ldGhvZC50b1VwcGVyQ2FzZSgpKSA9PT0gLTEpIHtcbiAgICByZXR1cm4gbmV3IEVycm9yKCdtZXRob2QgaXMgZXJyb3IuKOaWueazleS4jeiDveS4uuepuiknKVxuICB9XG5cbiAgd2VweS5zaG93VG9hc3Qoe1xuICAgIHRpdGxlOiAn5Yqg6L295LitJyxcbiAgICBpY29uOiAnbG9hZGluZydcbiAgfSlcblxuICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICB1cmw6IGJhc2VVcmwgKyB1cmwsXG4gICAgbWV0aG9kOiBtZXRob2QudG9VcHBlckNhc2UoKSB8fCAnR0VUJyxcbiAgICBkYXRhOiBkYXRhLFxuICAgIGhlYWRlcjogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cbiAgfSlcblxuICB3ZXB5LmhpZGVUb2FzdCgpXG5cbiAgcmV0dXJuIHJlc1xufVxuIl19