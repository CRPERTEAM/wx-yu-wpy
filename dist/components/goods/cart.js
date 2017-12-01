'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _mask = require('./../common/mask.js');

var _mask2 = _interopRequireDefault(_mask);

var _constant = require('./../../utils/constant.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodsCart = function (_wepy$component) {
  _inherits(GoodsCart, _wepy$component);

  function GoodsCart() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoodsCart);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsCart.__proto__ || Object.getPrototypeOf(GoodsCart)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "mask": { "xmlns:wx": "" } }, _this.$events = {}, _this.components = {
      'mask': _mask2.default
    }, _this.props = {
      list: Array,
      twoWay: true
    }, _this.data = {
      show: false,
      totalPrice: 0,
      listObj: {
        totalPrice: '',
        list: []
      }
    }, _this.methods = {
      showList: function showList() {
        if (this.list.length === 0) {
          return;
        }
        this.show = true;
      },
      toPay: function toPay() {
        // 将goods存到storage里
        console.log('set storage: ', this.list);
        this.listObj.list = this.list;
        _wepy2.default.setStorageSync(_constant.CART_GOODS, this.listObj);
        _wepy2.default.navigateTo({ url: '/pages/goods/order' });
        console.log('pay money.');
      }
    }, _this.events = {
      hide: function hide() {
        this.show = false;
      },


      'cartChange': function cartChange(cartList) {
        _this.totalPrice = 0;
        for (var i = 0; i < cartList.length; ++i) {
          _this.totalPrice += parseInt(cartList[i].price) * parseInt(cartList[i].num);
        }
        _this.listObj.totalPrice = _this.totalPrice;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return GoodsCart;
}(_wepy2.default.component);

exports.default = GoodsCart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuanMiXSwibmFtZXMiOlsiR29vZHNDYXJ0IiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwicHJvcHMiLCJsaXN0IiwiQXJyYXkiLCJ0d29XYXkiLCJkYXRhIiwic2hvdyIsInRvdGFsUHJpY2UiLCJsaXN0T2JqIiwibWV0aG9kcyIsInNob3dMaXN0IiwibGVuZ3RoIiwidG9QYXkiLCJjb25zb2xlIiwibG9nIiwic2V0U3RvcmFnZVN5bmMiLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZXZlbnRzIiwiaGlkZSIsImNhcnRMaXN0IiwiaSIsInBhcnNlSW50IiwicHJpY2UiLCJudW0iLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFcUJBLFM7Ozs7Ozs7Ozs7Ozs7OzRMQUNwQkMsTyxHQUFVLEUsUUFDWEMsTSxHQUFTLEVBQUMsUUFBTyxFQUFDLFlBQVcsRUFBWixFQUFSLEUsUUFDVEMsTyxHQUFVLEUsUUFDVEMsVSxHQUFhO0FBQ1Y7QUFEVSxLLFFBSVpDLEssR0FBUTtBQUNOQyxZQUFNQyxLQURBO0FBRU5DLGNBQVE7QUFGRixLLFFBS1JDLEksR0FBTztBQUNMQyxZQUFNLEtBREQ7QUFFTEMsa0JBQVksQ0FGUDtBQUdMQyxlQUFTO0FBQ1BELG9CQUFZLEVBREw7QUFFUEwsY0FBTTtBQUZDO0FBSEosSyxRQVNQTyxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDSTtBQUNWLFlBQUksS0FBS1IsSUFBTCxDQUFVUyxNQUFWLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCO0FBQ0Q7QUFDRCxhQUFLTCxJQUFMLEdBQVksSUFBWjtBQUNELE9BTk87QUFPUk0sV0FQUSxtQkFPQztBQUNQO0FBQ0FDLGdCQUFRQyxHQUFSLENBQVksZUFBWixFQUE2QixLQUFLWixJQUFsQztBQUNBLGFBQUtNLE9BQUwsQ0FBYU4sSUFBYixHQUFvQixLQUFLQSxJQUF6QjtBQUNBLHVCQUFLYSxjQUFMLHVCQUFnQyxLQUFLUCxPQUFyQztBQUNBLHVCQUFLUSxVQUFMLENBQWdCLEVBQUVDLEtBQUssb0JBQVAsRUFBaEI7QUFDQUosZ0JBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0Q7QUFkTyxLLFFBaUJWSSxNLEdBQVM7QUFDUEMsVUFETyxrQkFDQztBQUNOLGFBQUtiLElBQUwsR0FBWSxLQUFaO0FBQ0QsT0FITTs7O0FBS1Asb0JBQWMsb0JBQUNjLFFBQUQsRUFBYztBQUMxQixjQUFLYixVQUFMLEdBQWtCLENBQWxCO0FBQ0EsYUFBSyxJQUFJYyxJQUFJLENBQWIsRUFBZ0JBLElBQUlELFNBQVNULE1BQTdCLEVBQXFDLEVBQUVVLENBQXZDLEVBQTBDO0FBQ3hDLGdCQUFLZCxVQUFMLElBQW1CZSxTQUFTRixTQUFTQyxDQUFULEVBQVlFLEtBQXJCLElBQThCRCxTQUFTRixTQUFTQyxDQUFULEVBQVlHLEdBQXJCLENBQWpEO0FBQ0Q7QUFDRCxjQUFLaEIsT0FBTCxDQUFhRCxVQUFiLEdBQTBCLE1BQUtBLFVBQS9CO0FBQ0Q7QUFYTSxLOzs7O0VBdkM0QixlQUFLa0IsUzs7a0JBQXZCN0IsUyIsImZpbGUiOiJjYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IE1hc2sgZnJvbSAnLi4vY29tbW9uL21hc2snXG5pbXBvcnQgeyBDQVJUX0dPT0RTIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2RzQ2FydCBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm1hc2tcIjp7XCJ4bWxuczp3eFwiOlwiXCJ9fTtcclxuJGV2ZW50cyA9IHt9O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAnbWFzayc6IE1hc2tcbiAgfVxuXG4gIHByb3BzID0ge1xuICAgIGxpc3Q6IEFycmF5LFxuICAgIHR3b1dheTogdHJ1ZVxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBzaG93OiBmYWxzZSxcbiAgICB0b3RhbFByaWNlOiAwLFxuICAgIGxpc3RPYmo6IHtcbiAgICAgIHRvdGFsUHJpY2U6ICcnLFxuICAgICAgbGlzdDogW11cbiAgICB9XG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHNob3dMaXN0ICgpIHtcbiAgICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdGhpcy5zaG93ID0gdHJ1ZVxuICAgIH0sXG4gICAgdG9QYXkgKCkge1xuICAgICAgLy8g5bCGZ29vZHPlrZjliLBzdG9yYWdl6YeMXG4gICAgICBjb25zb2xlLmxvZygnc2V0IHN0b3JhZ2U6ICcsIHRoaXMubGlzdClcbiAgICAgIHRoaXMubGlzdE9iai5saXN0ID0gdGhpcy5saXN0XG4gICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKENBUlRfR09PRFMsIHRoaXMubGlzdE9iailcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7IHVybDogJy9wYWdlcy9nb29kcy9vcmRlcicgfSlcbiAgICAgIGNvbnNvbGUubG9nKCdwYXkgbW9uZXkuJylcbiAgICB9XG4gIH1cblxuICBldmVudHMgPSB7XG4gICAgaGlkZSAoKSB7XG4gICAgICB0aGlzLnNob3cgPSBmYWxzZVxuICAgIH0sXG5cbiAgICAnY2FydENoYW5nZSc6IChjYXJ0TGlzdCkgPT4ge1xuICAgICAgdGhpcy50b3RhbFByaWNlID0gMFxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJ0TGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICB0aGlzLnRvdGFsUHJpY2UgKz0gcGFyc2VJbnQoY2FydExpc3RbaV0ucHJpY2UpICogcGFyc2VJbnQoY2FydExpc3RbaV0ubnVtKVxuICAgICAgfVxuICAgICAgdGhpcy5saXN0T2JqLnRvdGFsUHJpY2UgPSB0aGlzLnRvdGFsUHJpY2VcbiAgICB9XG4gIH1cbn1cbiJdfQ==