'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _header = require('./../../components/goods/header.js');

var _header2 = _interopRequireDefault(_header);

var _list = require('./../../components/goods/list.js');

var _list2 = _interopRequireDefault(_list);

var _cart = require('./../../components/goods/cart.js');

var _cart2 = _interopRequireDefault(_cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Goods = function (_wepy$page) {
  _inherits(Goods, _wepy$page);

  function Goods() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Goods);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Goods.__proto__ || Object.getPrototypeOf(Goods)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      'navigationBarTitleText': '商品列表'
    }, _this.$repeat = {}, _this.$props = { "goods-list": { "class": "list", "xmlns:v-on": "" }, "goods-cart": { "class": "bottom", "xmlns:v-bind": "", "v-bind:list.sync": "cartList" } }, _this.$events = { "goods-list": { "v-on:addToCard": "addToCard" } }, _this.components = {
      'goods-header': _header2.default,
      'goods-list': _list2.default,
      'goods-cart': _cart2.default
    }, _this.data = {
      cartList: []
    }, _this.methods = {
      addToCard: function addToCard(item, event) {
        console.log('methods addToCard', item);
      }
    }, _this.events = {
      'addToCart': function addToCart(goods) {
        console.log('addToCard', goods);
        var added = false;
        for (var i = 0; i < _this.cartList.length; ++i) {
          var item = _this.cartList[i];
          if (goods.id === item.id) {
            added = true;
            item.num = goods.num;
            // 说明该商品已经没有数量，则可以从购物车内删除
            if (item.num <= 0) {
              _this.cartList.splice(i, 1);
            }
          }
        }

        if (!added) {
          _this.cartList.push(goods);
        }

        _this.$broadcast('cartChange', _this.cartList);
        console.log('cartList: ', _this.cartList);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Goods, [{
    key: 'onReady',
    value: function onReady() {
      this.$invoke('goods-list', 'getScrollTops');
    }
  }]);

  return Goods;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Goods , 'pages/goods/goods'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdvb2RzLmpzIl0sIm5hbWVzIjpbIkdvb2RzIiwiY29uZmlnIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsImNhcnRMaXN0IiwibWV0aG9kcyIsImFkZFRvQ2FyZCIsIml0ZW0iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJnb29kcyIsImFkZGVkIiwiaSIsImxlbmd0aCIsImlkIiwibnVtIiwic3BsaWNlIiwicHVzaCIsIiRicm9hZGNhc3QiLCIkaW52b2tlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUCxnQ0FBMEI7QUFEbkIsSyxRQUlWQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxjQUFhLEVBQUMsU0FBUSxNQUFULEVBQWdCLGNBQWEsRUFBN0IsRUFBZCxFQUErQyxjQUFhLEVBQUMsU0FBUSxRQUFULEVBQWtCLGdCQUFlLEVBQWpDLEVBQW9DLG9CQUFtQixVQUF2RCxFQUE1RCxFLFFBQ1RDLE8sR0FBVSxFQUFDLGNBQWEsRUFBQyxrQkFBaUIsV0FBbEIsRUFBZCxFLFFBQ1RDLFUsR0FBYTtBQUNWLHNDQURVO0FBRVYsa0NBRlU7QUFHVjtBQUhVLEssUUFNWkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBREwsSyxRQUlQQyxPLEdBQVU7QUFDUkMsZUFEUSxxQkFDR0MsSUFESCxFQUNTQyxLQURULEVBQ2dCO0FBQ3RCQyxnQkFBUUMsR0FBUixDQUFZLG1CQUFaLEVBQWlDSCxJQUFqQztBQUNEO0FBSE8sSyxRQVVWSSxNLEdBQVM7QUFDUCxtQkFBYSxtQkFBQ0MsS0FBRCxFQUFXO0FBQ3RCSCxnQkFBUUMsR0FBUixDQUFZLFdBQVosRUFBeUJFLEtBQXpCO0FBQ0EsWUFBSUMsUUFBUSxLQUFaO0FBQ0EsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksTUFBS1YsUUFBTCxDQUFjVyxNQUFsQyxFQUEwQyxFQUFFRCxDQUE1QyxFQUErQztBQUM3QyxjQUFJUCxPQUFPLE1BQUtILFFBQUwsQ0FBY1UsQ0FBZCxDQUFYO0FBQ0EsY0FBSUYsTUFBTUksRUFBTixLQUFhVCxLQUFLUyxFQUF0QixFQUEwQjtBQUN4Qkgsb0JBQVEsSUFBUjtBQUNBTixpQkFBS1UsR0FBTCxHQUFXTCxNQUFNSyxHQUFqQjtBQUNBO0FBQ0EsZ0JBQUlWLEtBQUtVLEdBQUwsSUFBWSxDQUFoQixFQUFtQjtBQUNqQixvQkFBS2IsUUFBTCxDQUFjYyxNQUFkLENBQXFCSixDQUFyQixFQUF3QixDQUF4QjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxZQUFJLENBQUNELEtBQUwsRUFBWTtBQUNWLGdCQUFLVCxRQUFMLENBQWNlLElBQWQsQ0FBbUJQLEtBQW5CO0FBQ0Q7O0FBRUQsY0FBS1EsVUFBTCxDQUFnQixZQUFoQixFQUE4QixNQUFLaEIsUUFBbkM7QUFDQUssZ0JBQVFDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLE1BQUtOLFFBQS9CO0FBQ0Q7QUF0Qk0sSzs7Ozs7OEJBSkU7QUFDVCxXQUFLaUIsT0FBTCxDQUFhLFlBQWIsRUFBMkIsZUFBM0I7QUFDRDs7OztFQTFCZ0MsZUFBS0MsSTs7a0JBQW5CekIsSyIsImZpbGUiOiJnb29kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBHb29kc0hlYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2dvb2RzL2hlYWRlcidcbmltcG9ydCBHb29kc0xpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9nb29kcy9saXN0J1xuaW1wb3J0IEdvb2RzQ2FydCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2dvb2RzL2NhcnQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdvb2RzIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ+WVhuWTgeWIl+ihqCdcbiAgfVxuXG4gJHJlcGVhdCA9IHt9O1xyXG4kcHJvcHMgPSB7XCJnb29kcy1saXN0XCI6e1wiY2xhc3NcIjpcImxpc3RcIixcInhtbG5zOnYtb25cIjpcIlwifSxcImdvb2RzLWNhcnRcIjp7XCJjbGFzc1wiOlwiYm90dG9tXCIsXCJ4bWxuczp2LWJpbmRcIjpcIlwiLFwidi1iaW5kOmxpc3Quc3luY1wiOlwiY2FydExpc3RcIn19O1xyXG4kZXZlbnRzID0ge1wiZ29vZHMtbGlzdFwiOntcInYtb246YWRkVG9DYXJkXCI6XCJhZGRUb0NhcmRcIn19O1xyXG4gY29tcG9uZW50cyA9IHtcbiAgICAnZ29vZHMtaGVhZGVyJzogR29vZHNIZWFkZXIsXG4gICAgJ2dvb2RzLWxpc3QnOiBHb29kc0xpc3QsXG4gICAgJ2dvb2RzLWNhcnQnOiBHb29kc0NhcnRcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgY2FydExpc3Q6IFtdXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGFkZFRvQ2FyZCAoaXRlbSwgZXZlbnQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdtZXRob2RzIGFkZFRvQ2FyZCcsIGl0ZW0pXG4gICAgfVxuICB9XG5cbiAgb25SZWFkeSAoKSB7XG4gICAgdGhpcy4kaW52b2tlKCdnb29kcy1saXN0JywgJ2dldFNjcm9sbFRvcHMnKVxuICB9XG5cbiAgZXZlbnRzID0ge1xuICAgICdhZGRUb0NhcnQnOiAoZ29vZHMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdhZGRUb0NhcmQnLCBnb29kcylcbiAgICAgIGxldCBhZGRlZCA9IGZhbHNlXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2FydExpc3QubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmNhcnRMaXN0W2ldXG4gICAgICAgIGlmIChnb29kcy5pZCA9PT0gaXRlbS5pZCkge1xuICAgICAgICAgIGFkZGVkID0gdHJ1ZVxuICAgICAgICAgIGl0ZW0ubnVtID0gZ29vZHMubnVtXG4gICAgICAgICAgLy8g6K+05piO6K+l5ZWG5ZOB5bey57uP5rKh5pyJ5pWw6YeP77yM5YiZ5Y+v5Lul5LuO6LSt54mp6L2m5YaF5Yig6ZmkXG4gICAgICAgICAgaWYgKGl0ZW0ubnVtIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMuY2FydExpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghYWRkZWQpIHtcbiAgICAgICAgdGhpcy5jYXJ0TGlzdC5wdXNoKGdvb2RzKVxuICAgICAgfVxuXG4gICAgICB0aGlzLiRicm9hZGNhc3QoJ2NhcnRDaGFuZ2UnLCB0aGlzLmNhcnRMaXN0KVxuICAgICAgY29uc29sZS5sb2coJ2NhcnRMaXN0OiAnLCB0aGlzLmNhcnRMaXN0KVxuICAgIH1cbiAgfVxufVxuIl19