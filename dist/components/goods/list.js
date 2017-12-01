'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _couter = require('./../common/couter.js');

var _couter2 = _interopRequireDefault(_couter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GoodsList = function (_wepy$component) {
  _inherits(GoodsList, _wepy$component);

  function GoodsList() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, GoodsList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = GoodsList.__proto__ || Object.getPrototypeOf(GoodsList)).call.apply(_ref, [this].concat(args))), _this), _this.components = {
      'couter': _couter2.default
    }, _this.data = {
      toView: '',
      checked: -1,
      scrollTops: {},
      dir: 'down',
      currentTop: 0,
      // types: ['first', 'second', 'third', 'fourth'],
      items: [{
        typeId: 0,
        title: '蔬菜',
        child: [{
          id: 0,
          title: '某种食物',
          desc: '能吃的',
          price: '30'
        }, {
          id: 1,
          title: '某种食物',
          desc: '能吃的',
          price: '50'
        }, {
          id: 2,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 3,
          title: '某种食物',
          desc: '能吃的',
          price: '200'
        }, {
          id: 4,
          title: '某种食物',
          desc: '能吃的',
          price: '300'
        }, {
          id: 5,
          title: '某种食物',
          desc: '能吃的',
          price: '500'
        }]
      }, {
        typeId: 1,
        title: '水果',
        child: [{
          id: 10,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 11,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 12,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 13,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 14,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 15,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }]
      }, {
        typeId: 2,
        title: '肉',
        child: [{
          id: 20,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 21,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 22,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 23,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 24,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 25,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }]
      }, {
        typeId: 3,
        title: '海鲜',
        child: [{
          id: 30,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 31,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 32,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 33,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 34,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }, {
          id: 35,
          title: '某种食物',
          desc: '能吃的',
          price: '100'
        }]
      }]
    }, _this.methods = {
      onScroll: function onScroll(event) {
        // 如果是右侧的滚动view
        if (event.currentTarget.id === 'right') {
          // 判断滚动的方向
          var top = event.detail.scrollTop;
          this.dir = this.currentTop < top ? 'down' : 'up';
          this.currentTop = top;
          // 判断当前滚动条所在区域，如果不在当前区域则进行跳转
          // console.log('scroll', this.checked, this.items.length, this.toView)
          if (this.checked < this.items.length - 1 && top > this.scrollTops[this.getNextView()] && this.dir === 'down') {
            this.setChecked(this.checked + 1);
          }
          if (this.checked > 0 && top < this.scrollTops[this.toView] && this.dir === 'up') {
            this.setChecked(this.checked - 1);
          }
        }
      },
      toType: function toType(item, index) {
        this.toView = this.getType(item.typeId);
        this.setChecked(index);
      },
      catchAdd: function catchAdd(pidx, cidx) {
        //添加
        if (!this.items[pidx].child[cidx].num) {
          this.items[pidx].child[cidx].num = 0;
        }
        ++this.items[pidx].child[cidx].num;
        this.$emit('addToCart', this.items[pidx].child[cidx]);
      },
      catchReduce: function catchReduce(pidx, cidx) {
        if (!this.items[pidx].child[cidx].num) {
          this.items[pidx].child[cidx].num = 0;
        }
        --this.items[pidx].child[cidx].num;
        this.$emit('addToCart', this.items[pidx].child[cidx]);
        // addToCart
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(GoodsList, [{
    key: 'onLoad',
    value: function onLoad() {
      console.log('onLoad', this.items);
      this.setChecked(0);
    }
  }, {
    key: 'setChecked',
    value: function setChecked(index) {
      var idx = index || 0;

      if (this.items && this.items.length > 0 && idx < this.items.length) {
        this.checked = idx;
        this.toView = this.getType(this.items[idx].typeId);
      }
    }
  }, {
    key: 'getScrollTops',
    value: function getScrollTops() {
      var _this2 = this;

      var query = _wepy2.default.createSelectorQuery();

      var _loop = function _loop(i) {
        var id = _this2.getType(_this2.items[i].typeId);
        query.select('#' + id).boundingClientRect(function (rect) {
          _this2.scrollTops[id] = rect.top;
        }).exec();
      };

      for (var i = 0; i < this.items.length; ++i) {
        _loop(i);
      }
    }
  }, {
    key: 'getNextView',
    value: function getNextView() {
      var typeId = this.items[this.checked + 1].typeId;
      return this.getType(typeId);
    }
  }, {
    key: 'getPreView',
    value: function getPreView() {
      var typeId = this.items[this.checked - 1].typeId;
      return this.getType(typeId);
    }
  }, {
    key: 'getType',
    value: function getType(typeId) {
      return 'type-' + typeId;
    }
  }]);

  return GoodsList;
}(_wepy2.default.component);

exports.default = GoodsList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QuanMiXSwibmFtZXMiOlsiR29vZHNMaXN0IiwiY29tcG9uZW50cyIsImRhdGEiLCJ0b1ZpZXciLCJjaGVja2VkIiwic2Nyb2xsVG9wcyIsImRpciIsImN1cnJlbnRUb3AiLCJpdGVtcyIsInR5cGVJZCIsInRpdGxlIiwiY2hpbGQiLCJpZCIsImRlc2MiLCJwcmljZSIsIm1ldGhvZHMiLCJvblNjcm9sbCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsInRvcCIsImRldGFpbCIsInNjcm9sbFRvcCIsImxlbmd0aCIsImdldE5leHRWaWV3Iiwic2V0Q2hlY2tlZCIsInRvVHlwZSIsIml0ZW0iLCJpbmRleCIsImdldFR5cGUiLCJjYXRjaEFkZCIsInBpZHgiLCJjaWR4IiwibnVtIiwiJGVtaXQiLCJjYXRjaFJlZHVjZSIsImNvbnNvbGUiLCJsb2ciLCJpZHgiLCJxdWVyeSIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJpIiwic2VsZWN0IiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsImV4ZWMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsUzs7Ozs7Ozs7Ozs7Ozs7NExBQ25CQyxVLEdBQWE7QUFDWDtBQURXLEssUUFJYkMsSSxHQUFPO0FBQ0xDLGNBQVEsRUFESDtBQUVMQyxlQUFTLENBQUMsQ0FGTDtBQUdMQyxrQkFBWSxFQUhQO0FBSUxDLFdBQUssTUFKQTtBQUtMQyxrQkFBWSxDQUxQO0FBTUw7QUFDQUMsYUFBTyxDQUNMO0FBQ0VDLGdCQUFRLENBRFY7QUFFRUMsZUFBTyxJQUZUO0FBR0VDLGVBQU8sQ0FDTDtBQUNFQyxjQUFJLENBRE47QUFFRUYsaUJBQU8sTUFGVDtBQUdFRyxnQkFBTSxLQUhSO0FBSUVDLGlCQUFPO0FBSlQsU0FESyxFQU1GO0FBQ0RGLGNBQUksQ0FESDtBQUVERixpQkFBTyxNQUZOO0FBR0RHLGdCQUFNLEtBSEw7QUFJREMsaUJBQU87QUFKTixTQU5F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YixDQUFQO0FBQ0Q7Ozs0QkFFUUEsTSxFQUFRO0FBQ2YsdUJBQWVBLE1BQWY7QUFDRDs7OztFQWxQb0MsZUFBS29DLFM7O2tCQUF2QjdDLFMiLCJmaWxlIjoibGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBDb3V0ZXIgZnJvbSAnLi4vY29tbW9uL2NvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR29vZHNMaXN0IGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBjb21wb25lbnRzID0ge1xuICAgICdjb3V0ZXInOiBDb3V0ZXJcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgdG9WaWV3OiAnJyxcbiAgICBjaGVja2VkOiAtMSxcbiAgICBzY3JvbGxUb3BzOiB7fSxcbiAgICBkaXI6ICdkb3duJyxcbiAgICBjdXJyZW50VG9wOiAwLFxuICAgIC8vIHR5cGVzOiBbJ2ZpcnN0JywgJ3NlY29uZCcsICd0aGlyZCcsICdmb3VydGgnXSxcbiAgICBpdGVtczogW1xuICAgICAge1xuICAgICAgICB0eXBlSWQ6IDAsXG4gICAgICAgIHRpdGxlOiAn6JSs6I+cJyxcbiAgICAgICAgY2hpbGQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMCxcbiAgICAgICAgICAgIHRpdGxlOiAn5p+Q56eN6aOf54mpJyxcbiAgICAgICAgICAgIGRlc2M6ICfog73lkIPnmoQnLFxuICAgICAgICAgICAgcHJpY2U6ICczMCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHRpdGxlOiAn5p+Q56eN6aOf54mpJyxcbiAgICAgICAgICAgIGRlc2M6ICfog73lkIPnmoQnLFxuICAgICAgICAgICAgcHJpY2U6ICc1MCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIHRpdGxlOiAn5p+Q56eN6aOf54mpJyxcbiAgICAgICAgICAgIGRlc2M6ICfog73lkIPnmoQnLFxuICAgICAgICAgICAgcHJpY2U6ICcxMDAnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICB0aXRsZTogJ+afkOenjemjn+eJqScsXG4gICAgICAgICAgICBkZXNjOiAn6IO95ZCD55qEJyxcbiAgICAgICAgICAgIHByaWNlOiAnMjAwJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgdGl0bGU6ICfmn5Dnp43po5/niaknLFxuICAgICAgICAgICAgZGVzYzogJ+iDveWQg+eahCcsXG4gICAgICAgICAgICBwcmljZTogJzMwMCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgIHRpdGxlOiAn5p+Q56eN6aOf54mpJyxcbiAgICAgICAgICAgIGRlc2M6ICfog73lkIPnmoQnLFxuICAgICAgICAgICAgcHJpY2U6ICc1MDAnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LCB7XG4gICAgICAgIHR5cGVJZDogMSxcbiAgICAgICAgdGl0bGU6ICfmsLTmnpwnLFxuICAgICAgICBjaGlsZDogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMCxcbiAgICAgICAgICAgIHRpdGxlOiAn5p+Q56eN6aOf54mpJyxcbiAgICAgICAgICAgIGRlc2M6ICfog73lkIPnmoQnLFxuICAgICAgICAgICAgcHJpY2U6ICcxMDAnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDExLFxuICAgICAgICAgICAgdGl0bGU6ICfmn5Dnp43po5/niaknLFxuICAgICAgICAgICAgZGVzYzogJ+iDveWQg+eahCcsXG4gICAgICAgICAgICBwcmljZTogJzEwMCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogMTIsXG4gICAgICAgICAgICB0aXRsZTogJ+afkOenjemjn+eJqScsXG4gICAgICAgICAgICBkZXNjOiAn6IO95ZCD55qEJyxcbiAgICAgICAgICAgIHByaWNlOiAnMTAwJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiAxMyxcbiAgICAgICAgICAgIHRpdGxlOiAn5p+Q56eN6aOf54mpJyxcbiAgICAgICAgICAgIGRlc2M6ICfog73lkIPnmoQnLFxuICAgICAgICAgICAgcHJpY2U6ICcxMDAnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDE0LFxuICAgICAgICAgICAgdGl0bGU6ICfmn5Dnp43po5/niaknLFxuICAgICAgICAgICAgZGVzYzogJ+iDveWQg+eahCcsXG4gICAgICAgICAgICBwcmljZTogJzEwMCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogMTUsXG4gICAgICAgICAgICB0aXRsZTogJ+afkOenjemjn+eJqScsXG4gICAgICAgICAgICBkZXNjOiAn6IO95ZCD55qEJyxcbiAgICAgICAgICAgIHByaWNlOiAnMTAwJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSwge1xuICAgICAgICB0eXBlSWQ6IDIsXG4gICAgICAgIHRpdGxlOiAn6IKJJyxcbiAgICAgICAgY2hpbGQ6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogMjAsXG4gICAgICAgICAgICB0aXRsZTogJ+afkOenjemjn+eJqScsXG4gICAgICAgICAgICBkZXNjOiAn6IO95ZCD55qEJyxcbiAgICAgICAgICAgIHByaWNlOiAnMTAwJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiAyMSxcbiAgICAgICAgICAgIHRpdGxlOiAn5p+Q56eN6aOf54mpJyxcbiAgICAgICAgICAgIGRlc2M6ICfog73lkIPnmoQnLFxuICAgICAgICAgICAgcHJpY2U6ICcxMDAnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDIyLFxuICAgICAgICAgICAgdGl0bGU6ICfmn5Dnp43po5/niaknLFxuICAgICAgICAgICAgZGVzYzogJ+iDveWQg+eahCcsXG4gICAgICAgICAgICBwcmljZTogJzEwMCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogMjMsXG4gICAgICAgICAgICB0aXRsZTogJ+afkOenjemjn+eJqScsXG4gICAgICAgICAgICBkZXNjOiAn6IO95ZCD55qEJyxcbiAgICAgICAgICAgIHByaWNlOiAnMTAwJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiAyNCxcbiAgICAgICAgICAgIHRpdGxlOiAn5p+Q56eN6aOf54mpJyxcbiAgICAgICAgICAgIGRlc2M6ICfog73lkIPnmoQnLFxuICAgICAgICAgICAgcHJpY2U6ICcxMDAnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDI1LFxuICAgICAgICAgICAgdGl0bGU6ICfmn5Dnp43po5/niaknLFxuICAgICAgICAgICAgZGVzYzogJ+iDveWQg+eahCcsXG4gICAgICAgICAgICBwcmljZTogJzEwMCdcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sIHtcbiAgICAgICAgdHlwZUlkOiAzLFxuICAgICAgICB0aXRsZTogJ+a1t+mynCcsXG4gICAgICAgIGNoaWxkOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMwLFxuICAgICAgICAgICAgdGl0bGU6ICfmn5Dnp43po5/niaknLFxuICAgICAgICAgICAgZGVzYzogJ+iDveWQg+eahCcsXG4gICAgICAgICAgICBwcmljZTogJzEwMCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogMzEsXG4gICAgICAgICAgICB0aXRsZTogJ+afkOenjemjn+eJqScsXG4gICAgICAgICAgICBkZXNjOiAn6IO95ZCD55qEJyxcbiAgICAgICAgICAgIHByaWNlOiAnMTAwJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiAzMixcbiAgICAgICAgICAgIHRpdGxlOiAn5p+Q56eN6aOf54mpJyxcbiAgICAgICAgICAgIGRlc2M6ICfog73lkIPnmoQnLFxuICAgICAgICAgICAgcHJpY2U6ICcxMDAnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgaWQ6IDMzLFxuICAgICAgICAgICAgdGl0bGU6ICfmn5Dnp43po5/niaknLFxuICAgICAgICAgICAgZGVzYzogJ+iDveWQg+eahCcsXG4gICAgICAgICAgICBwcmljZTogJzEwMCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICBpZDogMzQsXG4gICAgICAgICAgICB0aXRsZTogJ+afkOenjemjn+eJqScsXG4gICAgICAgICAgICBkZXNjOiAn6IO95ZCD55qEJyxcbiAgICAgICAgICAgIHByaWNlOiAnMTAwJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGlkOiAzNSxcbiAgICAgICAgICAgIHRpdGxlOiAn5p+Q56eN6aOf54mpJyxcbiAgICAgICAgICAgIGRlc2M6ICfog73lkIPnmoQnLFxuICAgICAgICAgICAgcHJpY2U6ICcxMDAnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XG4gICAgXVxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBvblNjcm9sbCAoZXZlbnQpIHtcbiAgICAgIC8vIOWmguaenOaYr+WPs+S+p+eahOa7muWKqHZpZXdcbiAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmlkID09PSAncmlnaHQnKSB7XG4gICAgICAgIC8vIOWIpOaWrea7muWKqOeahOaWueWQkVxuICAgICAgICBsZXQgdG9wID0gZXZlbnQuZGV0YWlsLnNjcm9sbFRvcFxuICAgICAgICB0aGlzLmRpciA9IHRoaXMuY3VycmVudFRvcCA8IHRvcCA/ICdkb3duJyA6ICd1cCdcbiAgICAgICAgdGhpcy5jdXJyZW50VG9wID0gdG9wXG4gICAgICAgIC8vIOWIpOaWreW9k+WJjea7muWKqOadoeaJgOWcqOWMuuWfn++8jOWmguaenOS4jeWcqOW9k+WJjeWMuuWfn+WImei/m+ihjOi3s+i9rFxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc2Nyb2xsJywgdGhpcy5jaGVja2VkLCB0aGlzLml0ZW1zLmxlbmd0aCwgdGhpcy50b1ZpZXcpXG4gICAgICAgIGlmICh0aGlzLmNoZWNrZWQgPCB0aGlzLml0ZW1zLmxlbmd0aCAtIDEgJiZcbiAgICAgICAgICAgIHRvcCA+IHRoaXMuc2Nyb2xsVG9wc1t0aGlzLmdldE5leHRWaWV3KCldICYmXG4gICAgICAgICAgICB0aGlzLmRpciA9PT0gJ2Rvd24nKSB7XG4gICAgICAgICAgdGhpcy5zZXRDaGVja2VkKHRoaXMuY2hlY2tlZCArIDEpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2hlY2tlZCA+IDAgJiZcbiAgICAgICAgICAgIHRvcCA8IHRoaXMuc2Nyb2xsVG9wc1t0aGlzLnRvVmlld10gJiZcbiAgICAgICAgICAgIHRoaXMuZGlyID09PSAndXAnKSB7XG4gICAgICAgICAgdGhpcy5zZXRDaGVja2VkKHRoaXMuY2hlY2tlZCAtIDEpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIHRvVHlwZSAoaXRlbSwgaW5kZXgpIHtcbiAgICAgIHRoaXMudG9WaWV3ID0gdGhpcy5nZXRUeXBlKGl0ZW0udHlwZUlkKVxuICAgICAgdGhpcy5zZXRDaGVja2VkKGluZGV4KVxuICAgIH0sXG4gICAgY2F0Y2hBZGQgKHBpZHgsIGNpZHgpIHsgLy/mt7vliqBcbiAgICAgIGlmICghdGhpcy5pdGVtc1twaWR4XS5jaGlsZFtjaWR4XS5udW0pIHtcbiAgICAgICAgdGhpcy5pdGVtc1twaWR4XS5jaGlsZFtjaWR4XS5udW0gPSAwXG4gICAgICB9XG4gICAgICArK3RoaXMuaXRlbXNbcGlkeF0uY2hpbGRbY2lkeF0ubnVtXG4gICAgICB0aGlzLiRlbWl0KCdhZGRUb0NhcnQnLCB0aGlzLml0ZW1zW3BpZHhdLmNoaWxkW2NpZHhdKVxuICAgIH0sXG4gICAgY2F0Y2hSZWR1Y2UgKHBpZHgsIGNpZHgpIHtcbiAgICAgIGlmICghdGhpcy5pdGVtc1twaWR4XS5jaGlsZFtjaWR4XS5udW0pIHtcbiAgICAgICAgdGhpcy5pdGVtc1twaWR4XS5jaGlsZFtjaWR4XS5udW0gPSAwXG4gICAgICB9XG4gICAgICAtLXRoaXMuaXRlbXNbcGlkeF0uY2hpbGRbY2lkeF0ubnVtXG4gICAgICB0aGlzLiRlbWl0KCdhZGRUb0NhcnQnLCB0aGlzLml0ZW1zW3BpZHhdLmNoaWxkW2NpZHhdKVxuICAgICAgLy8gYWRkVG9DYXJ0XG4gICAgfVxuICB9XG5cbiAgb25Mb2FkICgpIHtcbiAgICBjb25zb2xlLmxvZygnb25Mb2FkJywgdGhpcy5pdGVtcylcbiAgICB0aGlzLnNldENoZWNrZWQoMClcbiAgfVxuXG4gIHNldENoZWNrZWQgKGluZGV4KSB7XG4gICAgbGV0IGlkeCA9IGluZGV4IHx8IDBcblxuICAgIGlmICh0aGlzLml0ZW1zICYmXG4gICAgICAgIHRoaXMuaXRlbXMubGVuZ3RoID4gMCAmJlxuICAgICAgICBpZHggPCB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgdGhpcy5jaGVja2VkID0gaWR4XG4gICAgICB0aGlzLnRvVmlldyA9IHRoaXMuZ2V0VHlwZSh0aGlzLml0ZW1zW2lkeF0udHlwZUlkKVxuICAgIH1cbiAgfVxuXG4gIGdldFNjcm9sbFRvcHMgKCkge1xuICAgIGxldCBxdWVyeSA9IHdlcHkuY3JlYXRlU2VsZWN0b3JRdWVyeSgpXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1zLmxlbmd0aDsgKytpKSB7XG4gICAgICBsZXQgaWQgPSB0aGlzLmdldFR5cGUodGhpcy5pdGVtc1tpXS50eXBlSWQpXG4gICAgICBxdWVyeS5zZWxlY3QoYCMke2lkfWApLmJvdW5kaW5nQ2xpZW50UmVjdCgocmVjdCkgPT4ge1xuICAgICAgICB0aGlzLnNjcm9sbFRvcHNbaWRdID0gcmVjdC50b3BcbiAgICAgIH0pLmV4ZWMoKVxuICAgIH1cbiAgfVxuXG4gIGdldE5leHRWaWV3ICgpIHtcbiAgICBsZXQgdHlwZUlkID0gdGhpcy5pdGVtc1t0aGlzLmNoZWNrZWQgKyAxXS50eXBlSWRcbiAgICByZXR1cm4gdGhpcy5nZXRUeXBlKHR5cGVJZClcbiAgfVxuXG4gIGdldFByZVZpZXcgKCkge1xuICAgIGxldCB0eXBlSWQgPSB0aGlzLml0ZW1zW3RoaXMuY2hlY2tlZCAtIDFdLnR5cGVJZFxuICAgIHJldHVybiB0aGlzLmdldFR5cGUodHlwZUlkKVxuICB9XG5cbiAgZ2V0VHlwZSAodHlwZUlkKSB7XG4gICAgcmV0dXJuIGB0eXBlLSR7dHlwZUlkfWBcbiAgfVxufVxuIl19