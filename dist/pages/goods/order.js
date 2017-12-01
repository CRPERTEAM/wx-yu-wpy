'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _constant = require('./../../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodsOrder = function (_wepy$page) {
  _inherits(GoodsOrder, _wepy$page);

  function GoodsOrder() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoodsOrder);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsOrder.__proto__ || Object.getPrototypeOf(GoodsOrder)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'navigationBarTitleText': '订单配送至'

      // props = {
      //   list: {
      //     type: Array,
      //     twoWay: true
      //   }
      // }

    }, _this.data = {
      items: [{ name: 'paynow', value: '立即支付', checked: 'true' }, { name: 'paylater', value: '稍后支付' }],
      list: [],
      totalPrice: 0
    }, _this.methods = {
      toAddrEdit: function toAddrEdit() {
        _wepy2.default.navigateTo({ url: '/pages/goods/addr' });
      },
      radioChange: function radioChange(e) {
        console.log('change', e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoodsOrder, [{
    key: 'onLoad',
    value: function onLoad() {
      var listObj = _wepy2.default.getStorageSync(_constant.CART_GOODS);
      this.list = listObj.list;
      this.totalPrice = listObj.totalPrice;
    }
  }]);

  return GoodsOrder;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(GoodsOrder , 'pages/goods/order'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIkdvb2RzT3JkZXIiLCJjb25maWciLCJkYXRhIiwiaXRlbXMiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwibGlzdCIsInRvdGFsUHJpY2UiLCJtZXRob2RzIiwidG9BZGRyRWRpdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJyYWRpb0NoYW5nZSIsImUiLCJjb25zb2xlIiwibG9nIiwibGlzdE9iaiIsImdldFN0b3JhZ2VTeW5jIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7OztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUCxnQ0FBMEI7O0FBRzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFUUyxLLFFBV1RDLEksR0FBTztBQUNMQyxhQUFPLENBQ0wsRUFBQ0MsTUFBTSxRQUFQLEVBQWlCQyxPQUFPLE1BQXhCLEVBQWdDQyxTQUFTLE1BQXpDLEVBREssRUFFTCxFQUFDRixNQUFNLFVBQVAsRUFBbUJDLE9BQU8sTUFBMUIsRUFGSyxDQURGO0FBS0xFLFlBQU0sRUFMRDtBQU1MQyxrQkFBWTtBQU5QLEssUUFTUEMsTyxHQUFVO0FBQ1JDLGdCQURRLHdCQUNNO0FBQ1osdUJBQUtDLFVBQUwsQ0FBZ0IsRUFBRUMsS0FBSyxtQkFBUCxFQUFoQjtBQUNELE9BSE87QUFLUkMsaUJBTFEsdUJBS0tDLENBTEwsRUFLUTtBQUNkQyxnQkFBUUMsR0FBUixDQUFZLFFBQVosRUFBc0JGLENBQXRCO0FBQ0Q7QUFQTyxLOzs7Ozs2QkFVQTtBQUNSLFVBQUlHLFVBQVUsZUFBS0MsY0FBTCxzQkFBZDtBQUNBLFdBQUtYLElBQUwsR0FBWVUsUUFBUVYsSUFBcEI7QUFDQSxXQUFLQyxVQUFMLEdBQWtCUyxRQUFRVCxVQUExQjtBQUNEOzs7O0VBbkNxQyxlQUFLVyxJOztrQkFBeEJuQixVIiwiZmlsZSI6Im9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHsgQ0FSVF9HT09EUyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHb29kc09yZGVyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ+iuouWNlemFjemAgeiHsydcbiAgfVxuXG4gIC8vIHByb3BzID0ge1xuICAvLyAgIGxpc3Q6IHtcbiAgLy8gICAgIHR5cGU6IEFycmF5LFxuICAvLyAgICAgdHdvV2F5OiB0cnVlXG4gIC8vICAgfVxuICAvLyB9XG5cbiAgZGF0YSA9IHtcbiAgICBpdGVtczogW1xuICAgICAge25hbWU6ICdwYXlub3cnLCB2YWx1ZTogJ+eri+WNs+aUr+S7mCcsIGNoZWNrZWQ6ICd0cnVlJ30sXG4gICAgICB7bmFtZTogJ3BheWxhdGVyJywgdmFsdWU6ICfnqI3lkI7mlK/ku5gnfVxuICAgIF0sXG4gICAgbGlzdDogW10sXG4gICAgdG90YWxQcmljZTogMFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICB0b0FkZHJFZGl0ICgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogJy9wYWdlcy9nb29kcy9hZGRyJyB9KVxuICAgIH0sXG5cbiAgICByYWRpb0NoYW5nZSAoZSkge1xuICAgICAgY29uc29sZS5sb2coJ2NoYW5nZScsIGUpXG4gICAgfVxuICB9XG5cbiAgb25Mb2FkICgpIHtcbiAgICBsZXQgbGlzdE9iaiA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoQ0FSVF9HT09EUylcbiAgICB0aGlzLmxpc3QgPSBsaXN0T2JqLmxpc3RcbiAgICB0aGlzLnRvdGFsUHJpY2UgPSBsaXN0T2JqLnRvdGFsUHJpY2VcbiAgfVxufVxuIl19