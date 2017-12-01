'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _header = require('./../mine/header.js');

var _header2 = _interopRequireDefault(_header);

var _list = require('./../mine/list.js');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Mine = function (_wepy$component) {
  _inherits(Mine, _wepy$component);

  function Mine() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Mine);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Mine.__proto__ || Object.getPrototypeOf(Mine)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      'mine-header': _header2.default,
      'mine-list': _list2.default
    }, _this.methods = {
      toUserinfo: function toUserinfo() {
        console.log('to user info');
        this.$navigate({ url: 'mine/userinfo' });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Mine;
}(_wepy2.default.component);

exports.default = Mine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pbmUuanMiXSwibmFtZXMiOlsiTWluZSIsImNvbXBvbmVudHMiLCJtZXRob2RzIiwidG9Vc2VyaW5mbyIsImNvbnNvbGUiLCJsb2ciLCIkbmF2aWdhdGUiLCJ1cmwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSTs7Ozs7Ozs7Ozs7Ozs7a0xBQ25CQyxVLEdBQWE7QUFDWCxxQ0FEVztBQUVYO0FBRlcsSyxRQUtiQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ007QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWSxjQUFaO0FBQ0EsYUFBS0MsU0FBTCxDQUFlLEVBQUNDLEtBQUssZUFBTixFQUFmO0FBQ0Q7QUFKTyxLOzs7O0VBTnNCLGVBQUtDLFM7O2tCQUFsQlIsSSIsImZpbGUiOiJtaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IE1pbmVIZWFkZXIgZnJvbSAnLi4vbWluZS9oZWFkZXInXG5pbXBvcnQgTWluZUxpc3QgZnJvbSAnLi4vbWluZS9saXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5lIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBjb21wb25lbnRzID0ge1xuICAgICdtaW5lLWhlYWRlcic6IE1pbmVIZWFkZXIsXG4gICAgJ21pbmUtbGlzdCc6IE1pbmVMaXN0XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHRvVXNlcmluZm8gKCkge1xuICAgICAgY29uc29sZS5sb2coJ3RvIHVzZXIgaW5mbycpXG4gICAgICB0aGlzLiRuYXZpZ2F0ZSh7dXJsOiAnbWluZS91c2VyaW5mbyd9KVxuICAgIH1cbiAgfVxufVxuIl19