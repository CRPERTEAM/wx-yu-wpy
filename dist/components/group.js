"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _groupitem = require('./groupitem.js');

var _groupitem2 = _interopRequireDefault(_groupitem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Group = function (_wepy$component) {
  _inherits(Group, _wepy$component);

  function Group() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Group);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Group.__proto__ || Object.getPrototypeOf(Group)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      grouplist: {},
      index: {}
    }, _this.$repeat = { "grouplist": { "com": "groupitem", "props": "gitem" } }, _this.$props = { "groupitem": { "xmlns:v-bind": { "value": "", "for": "grouplist.list", "item": "item", "index": "index", "key": "key" }, "v-bind:gitem.once": { "value": "item", "type": "item", "for": "grouplist.list", "item": "item", "index": "index", "key": "key" } } }, _this.$events = {}, _this.components = {
      groupitem: _groupitem2.default
    }, _this.methods = {
      tap: function tap() {
        this.grouplist.name = "Parent Random(" + Math.random() + ")";
        console.log("Clicked Group " + this.$index + ", ID is " + this.grouplist.id);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Group;
}(_wepy2.default.component);

exports.default = Group;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdyb3VwLmpzIl0sIm5hbWVzIjpbIkdyb3VwIiwicHJvcHMiLCJncm91cGxpc3QiLCJpbmRleCIsIiRyZXBlYXQiLCIkcHJvcHMiLCIkZXZlbnRzIiwiY29tcG9uZW50cyIsImdyb3VwaXRlbSIsIm1ldGhvZHMiLCJ0YXAiLCJuYW1lIiwiTWF0aCIsInJhbmRvbSIsImNvbnNvbGUiLCJsb2ciLCIkaW5kZXgiLCJpZCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxLLEdBQVE7QUFDTkMsaUJBQVcsRUFETDtBQUVOQyxhQUFPO0FBRkQsSyxRQUtUQyxPLEdBQVUsRUFBQyxhQUFZLEVBQUMsT0FBTSxXQUFQLEVBQW1CLFNBQVEsT0FBM0IsRUFBYixFLFFBQ2JDLE0sR0FBUyxFQUFDLGFBQVksRUFBQyxnQkFBZSxFQUFDLFNBQVEsRUFBVCxFQUFZLE9BQU0sZ0JBQWxCLEVBQW1DLFFBQU8sTUFBMUMsRUFBaUQsU0FBUSxPQUF6RCxFQUFpRSxPQUFNLEtBQXZFLEVBQWhCLEVBQThGLHFCQUFvQixFQUFDLFNBQVEsTUFBVCxFQUFnQixRQUFPLE1BQXZCLEVBQThCLE9BQU0sZ0JBQXBDLEVBQXFELFFBQU8sTUFBNUQsRUFBbUUsU0FBUSxPQUEzRSxFQUFtRixPQUFNLEtBQXpGLEVBQWxILEVBQWIsRSxRQUNUQyxPLEdBQVUsRSxRQUNUQyxVLEdBQWE7QUFDUkM7QUFEUSxLLFFBR1ZDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0osYUFBS1IsU0FBTCxDQUFlUyxJQUFmLHNCQUF1Q0MsS0FBS0MsTUFBTCxFQUF2QztBQUNBQyxnQkFBUUMsR0FBUixvQkFBNkIsS0FBS0MsTUFBbEMsZ0JBQW1ELEtBQUtkLFNBQUwsQ0FBZWUsRUFBbEU7QUFDRDtBQUpPLEs7Ozs7RUFadUIsZUFBS0MsUzs7a0JBQW5CbEIsSyIsImZpbGUiOiJncm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuICBpbXBvcnQgR3JvdXBJdGVtIGZyb20gXCIuL2dyb3VwaXRlbVwiO1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyb3VwIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICAgIHByb3BzID0ge1xuICAgICAgZ3JvdXBsaXN0OiB7fSxcbiAgICAgIGluZGV4OiB7fVxuICAgIH07XG5cbiAgICRyZXBlYXQgPSB7XCJncm91cGxpc3RcIjp7XCJjb21cIjpcImdyb3VwaXRlbVwiLFwicHJvcHNcIjpcImdpdGVtXCJ9fTtcclxuJHByb3BzID0ge1wiZ3JvdXBpdGVtXCI6e1wieG1sbnM6di1iaW5kXCI6e1widmFsdWVcIjpcIlwiLFwiZm9yXCI6XCJncm91cGxpc3QubGlzdFwiLFwiaXRlbVwiOlwiaXRlbVwiLFwiaW5kZXhcIjpcImluZGV4XCIsXCJrZXlcIjpcImtleVwifSxcInYtYmluZDpnaXRlbS5vbmNlXCI6e1widmFsdWVcIjpcIml0ZW1cIixcInR5cGVcIjpcIml0ZW1cIixcImZvclwiOlwiZ3JvdXBsaXN0Lmxpc3RcIixcIml0ZW1cIjpcIml0ZW1cIixcImluZGV4XCI6XCJpbmRleFwiLFwia2V5XCI6XCJrZXlcIn19fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAgIGdyb3VwaXRlbTogR3JvdXBJdGVtXG4gICAgfTtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdGFwKCkge1xuICAgICAgICB0aGlzLmdyb3VwbGlzdC5uYW1lID0gYFBhcmVudCBSYW5kb20oJHtNYXRoLnJhbmRvbSgpfSlgO1xuICAgICAgICBjb25zb2xlLmxvZyhgQ2xpY2tlZCBHcm91cCAke3RoaXMuJGluZGV4fSwgSUQgaXMgJHt0aGlzLmdyb3VwbGlzdC5pZH1gKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4iXX0=