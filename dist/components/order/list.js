'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderList = function (_wepy$component) {
  _inherits(OrderList, _wepy$component);

  function OrderList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderList.__proto__ || Object.getPrototypeOf(OrderList)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      list: Array
    }, _this.data = {
      payStatus: {
        0: '已付款',
        1: '未付款'
      }
    }, _this.methods = {
      toDetail: function toDetail(id) {
        _wepy2.default.navigateTo({ url: '/pages/order/detail?id=' + id });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OrderList, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('list: ', this.list, this.list.length);
    }
  }]);

  return OrderList;
}(_wepy2.default.component);

exports.default = OrderList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiT3JkZXJMaXN0IiwicHJvcHMiLCJsaXN0IiwiQXJyYXkiLCJkYXRhIiwicGF5U3RhdHVzIiwibWV0aG9kcyIsInRvRGV0YWlsIiwiaWQiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxLLEdBQVE7QUFDTkMsWUFBTUM7QUFEQSxLLFFBSVJDLEksR0FBTztBQUNMQyxpQkFBVztBQUNULFdBQUcsS0FETTtBQUVULFdBQUc7QUFGTTtBQUROLEssUUFXUEMsTyxHQUFVO0FBQ1JDLGNBRFEsb0JBQ0VDLEVBREYsRUFDTTtBQUNaLHVCQUFLQyxVQUFMLENBQWdCLEVBQUNDLGlDQUErQkYsRUFBaEMsRUFBaEI7QUFDRDtBQUhPLEs7Ozs7OzZCQUpBO0FBQ1JHLGNBQVFDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCLEtBQUtWLElBQTNCLEVBQWlDLEtBQUtBLElBQUwsQ0FBVVcsTUFBM0M7QUFDRDs7OztFQWRvQyxlQUFLQyxTOztrQkFBdkJkLFMiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyTGlzdCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgcHJvcHMgPSB7XG4gICAgbGlzdDogQXJyYXlcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgcGF5U3RhdHVzOiB7XG4gICAgICAwOiAn5bey5LuY5qy+JyxcbiAgICAgIDE6ICfmnKrku5jmrL4nXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkICgpIHtcbiAgICBjb25zb2xlLmxvZygnbGlzdDogJywgdGhpcy5saXN0LCB0aGlzLmxpc3QubGVuZ3RoKVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICB0b0RldGFpbCAoaWQpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7dXJsOiBgL3BhZ2VzL29yZGVyL2RldGFpbD9pZD0ke2lkfWB9KVxuICAgIH1cbiAgfVxufVxuIl19