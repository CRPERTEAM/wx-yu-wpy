'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var OrderTab = function (_wepy$component) {
  _inherits(OrderTab, _wepy$component);

  function OrderTab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, OrderTab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OrderTab.__proto__ || Object.getPrototypeOf(OrderTab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      active: {
        twoWay: true
      }
    }, _this.data = {
      items: [{
        title: '支付订单'
      }, {
        title: '赊账订单'
      }]
    }, _this.methods = {
      //  tabs变更
      change: function change(idx, evt) {
        this.active = idx;
      }
    }, _this.watch = {
      active: function active(newValue) {
        console.log('active: ', newValue);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return OrderTab;
}(_wepy2.default.component);

exports.default = OrderTab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJPcmRlclRhYiIsInByb3BzIiwiYWN0aXZlIiwidHdvV2F5IiwiZGF0YSIsIml0ZW1zIiwidGl0bGUiLCJtZXRob2RzIiwiY2hhbmdlIiwiaWR4IiwiZXZ0Iiwid2F0Y2giLCJuZXdWYWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxROzs7Ozs7Ozs7Ozs7OzswTEFDbkJDLEssR0FBUTtBQUNOQyxjQUFRO0FBQ05DLGdCQUFRO0FBREY7QUFERixLLFFBTVJDLEksR0FBTztBQUNMQyxhQUFPLENBQUM7QUFDTkMsZUFBTztBQURELE9BQUQsRUFFSjtBQUNEQSxlQUFPO0FBRE4sT0FGSTtBQURGLEssUUFRUEMsTyxHQUFVO0FBQ1I7QUFDQUMsWUFGUSxrQkFFQUMsR0FGQSxFQUVLQyxHQUZMLEVBRVU7QUFDaEIsYUFBS1IsTUFBTCxHQUFjTyxHQUFkO0FBQ0Q7QUFKTyxLLFFBT1ZFLEssR0FBUTtBQUNOVCxZQURNLGtCQUNFVSxRQURGLEVBQ1k7QUFDaEJDLGdCQUFRQyxHQUFSLENBQVksVUFBWixFQUF3QkYsUUFBeEI7QUFDRDtBQUhLLEs7Ozs7RUF0QjRCLGVBQUtHLFM7O2tCQUF0QmYsUSIsImZpbGUiOiJ0YWIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9yZGVyVGFiIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBhY3RpdmU6IHtcbiAgICAgIHR3b1dheTogdHJ1ZVxuICAgIH1cbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgaXRlbXM6IFt7XG4gICAgICB0aXRsZTogJ+aUr+S7mOiuouWNlSdcbiAgICB9LCB7XG4gICAgICB0aXRsZTogJ+i1iui0puiuouWNlSdcbiAgICB9XVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICAvLyAgdGFic+WPmOabtFxuICAgIGNoYW5nZSAoaWR4LCBldnQpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gaWR4XG4gICAgfVxuICB9XG5cbiAgd2F0Y2ggPSB7XG4gICAgYWN0aXZlIChuZXdWYWx1ZSkge1xuICAgICAgY29uc29sZS5sb2coJ2FjdGl2ZTogJywgbmV3VmFsdWUpXG4gICAgfVxuICB9XG59XG4iXX0=