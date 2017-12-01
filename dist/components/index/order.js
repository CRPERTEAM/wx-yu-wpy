'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tab = require('./../order/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _list = require('./../order/list.js');

var _list2 = _interopRequireDefault(_list);

var _blankTip = require('./../common/blankTip.js');

var _blankTip2 = _interopRequireDefault(_blankTip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Order = function (_wepy$component) {
  _inherits(Order, _wepy$component);

  function Order() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Order);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Order.__proto__ || Object.getPrototypeOf(Order)).call.apply(_ref, [this].concat(args))), _this), _this.$repeat = {}, _this.$props = { "order-tab": { "xmlns:v-bind": "", "v-bind:active.sync": "active" }, "order-list-a": { "v-bind:list.once": "list1", "xmlns:wx": "" }, "order-list-b": { "v-bind:list.once": "list2" }, "blank-tip": { "v-bind:icon.once": "icon", "v-bind:msg.once": "msg" } }, _this.$events = {}, _this.components = {
      'order-tab': _tab2.default,
      'order-list-a': _list2.default,
      'order-list-b': _list2.default,
      'blank-tip': _blankTip2.default
    }, _this.data = {
      active: 0,
      list1: [{
        id: 0,
        title: '卖蔬菜',
        createTime: '2017-11-05 22:22:22',
        price: '100',
        items: [{
          title: '西兰花'
        }, {
          title: '茄子'
        }],
        status: 0
      }, {
        id: 0,
        title: '卖蔬菜',
        createTime: '2017-11-05 22:22:22',
        price: '100',
        items: [{
          title: '西兰花'
        }, {
          title: '茄子'
        }],
        status: 0
      }, {
        id: 0,
        title: '卖蔬菜',
        createTime: '2017-11-05 22:22:22',
        price: '100',
        items: [{
          title: '西兰花'
        }, {
          title: '茄子'
        }],
        status: 0
      }, {
        id: 0,
        title: '卖蔬菜',
        createTime: '2017-11-05 22:22:22',
        price: '100',
        items: [{
          title: '西兰花'
        }, {
          title: '茄子'
        }],
        status: 0
      }],
      list2: [{
        id: 0,
        title: '不卖蔬菜',
        createTime: '2017-11-01 22:22:22',
        price: '100',
        items: [{
          title: '番茄'
        }, {
          title: '土豆'
        }],
        status: 1
      }],
      icon: 'icon-dingdan',
      msg: '目前没有订单'
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Order, [{
    key: 'onLoad',
    value: function onLoad() {
      // this.createOrderLists()
    }
  }, {
    key: 'createOrderLists',
    value: function createOrderLists() {
      var list1 = [{
        id: 0,
        title: '卖蔬菜',
        createTime: '2017-11-05 22:22:22',
        price: '100',
        items: [{
          title: '西兰花'
        }, {
          title: '茄子'
        }],
        status: 0
      }];
      var list2 = [{
        id: 0,
        title: '卖蔬菜',
        createTime: '2017-11-01 22:22:22',
        price: '100',
        items: [{
          title: '番茄'
        }, {
          title: '土豆'
        }],
        status: 1
      }];

      this.orderLists[0] = list1;
      this.orderLists[1] = list2;
    }
  }]);

  return Order;
}(_wepy2.default.component);

exports.default = Order;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLmpzIl0sIm5hbWVzIjpbIk9yZGVyIiwiJHJlcGVhdCIsIiRwcm9wcyIsIiRldmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsImFjdGl2ZSIsImxpc3QxIiwiaWQiLCJ0aXRsZSIsImNyZWF0ZVRpbWUiLCJwcmljZSIsIml0ZW1zIiwic3RhdHVzIiwibGlzdDIiLCJpY29uIiwibXNnIiwib3JkZXJMaXN0cyIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ3BCQyxPLEdBQVUsRSxRQUNYQyxNLEdBQVMsRUFBQyxhQUFZLEVBQUMsZ0JBQWUsRUFBaEIsRUFBbUIsc0JBQXFCLFFBQXhDLEVBQWIsRUFBK0QsZ0JBQWUsRUFBQyxvQkFBbUIsT0FBcEIsRUFBNEIsWUFBVyxFQUF2QyxFQUE5RSxFQUF5SCxnQkFBZSxFQUFDLG9CQUFtQixPQUFwQixFQUF4SSxFQUFxSyxhQUFZLEVBQUMsb0JBQW1CLE1BQXBCLEVBQTJCLG1CQUFrQixLQUE3QyxFQUFqTCxFLFFBQ1RDLE8sR0FBVSxFLFFBQ1RDLFUsR0FBYTtBQUNWLGdDQURVO0FBRVYsb0NBRlU7QUFHVixvQ0FIVTtBQUlWO0FBSlUsSyxRQU9aQyxJLEdBQU87QUFDTEMsY0FBUSxDQURIO0FBRUxDLGFBQU8sQ0FDTDtBQUNFQyxZQUFJLENBRE47QUFFRUMsZUFBTyxLQUZUO0FBR0VDLG9CQUFZLHFCQUhkO0FBSUVDLGVBQU8sS0FKVDtBQUtFQyxlQUFPLENBQ0w7QUFDRUgsaUJBQU87QUFEVCxTQURLLEVBR0Y7QUFDREEsaUJBQU87QUFETixTQUhFLENBTFQ7QUFZRUksZ0JBQVE7QUFaVixPQURLLEVBZUw7QUFDRUwsWUFBSSxDQUROO0FBRUVDLGVBQU8sS0FGVDtBQUdFQyxvQkFBWSxxQkFIZDtBQUlFQyxlQUFPLEtBSlQ7QUFLRUMsZUFBTyxDQUNMO0FBQ0VILGlCQUFPO0FBRFQsU0FESyxFQUdGO0FBQ0RBLGlCQUFPO0FBRE4sU0FIRSxDQUxUO0FBWUVJLGdCQUFRO0FBWlYsT0FmSyxFQTZCTDtBQUNFTCxZQUFJLENBRE47QUFFRUMsZUFBTyxLQUZUO0FBR0VDLG9CQUFZLHFCQUhkO0FBSUVDLGVBQU8sS0FKVDtBQUtFQyxlQUFPLENBQ0w7QUFDRUgsaUJBQU87QUFEVCxTQURLLEVBR0Y7QUFDREEsaUJBQU87QUFETixTQUhFLENBTFQ7QUFZRUksZ0JBQVE7QUFaVixPQTdCSyxFQTJDTDtBQUNFTCxZQUFJLENBRE47QUFFRUMsZUFBTyxLQUZUO0FBR0VDLG9CQUFZLHFCQUhkO0FBSUVDLGVBQU8sS0FKVDtBQUtFQyxlQUFPLENBQ0w7QUFDRUgsaUJBQU87QUFEVCxTQURLLEVBR0Y7QUFDREEsaUJBQU87QUFETixTQUhFLENBTFQ7QUFZRUksZ0JBQVE7QUFaVixPQTNDSyxDQUZGO0FBNERMQyxhQUFPLENBQ0w7QUFDRU4sWUFBSSxDQUROO0FBRUVDLGVBQU8sTUFGVDtBQUdFQyxvQkFBWSxxQkFIZDtBQUlFQyxlQUFPLEtBSlQ7QUFLRUMsZUFBTyxDQUNMO0FBQ0VILGlCQUFPO0FBRFQsU0FESyxFQUdGO0FBQ0RBLGlCQUFPO0FBRE4sU0FIRSxDQUxUO0FBWUVJLGdCQUFRO0FBWlYsT0FESyxDQTVERjtBQTRFTEUsWUFBTSxjQTVFRDtBQTZFTEMsV0FBSztBQTdFQSxLOzs7Ozs2QkFnRkc7QUFDUjtBQUNEOzs7dUNBRW1CO0FBQ2xCLFVBQUlULFFBQVEsQ0FBQztBQUNYQyxZQUFJLENBRE87QUFFWEMsZUFBTyxLQUZJO0FBR1hDLG9CQUFZLHFCQUhEO0FBSVhDLGVBQU8sS0FKSTtBQUtYQyxlQUFPLENBQ0w7QUFDRUgsaUJBQU87QUFEVCxTQURLLEVBR0Y7QUFDREEsaUJBQU87QUFETixTQUhFLENBTEk7QUFZWEksZ0JBQVE7QUFaRyxPQUFELENBQVo7QUFjQSxVQUFJQyxRQUFRLENBQUM7QUFDWE4sWUFBSSxDQURPO0FBRVhDLGVBQU8sS0FGSTtBQUdYQyxvQkFBWSxxQkFIRDtBQUlYQyxlQUFPLEtBSkk7QUFLWEMsZUFBTyxDQUNMO0FBQ0VILGlCQUFPO0FBRFQsU0FESyxFQUdGO0FBQ0RBLGlCQUFPO0FBRE4sU0FIRSxDQUxJO0FBWVhJLGdCQUFRO0FBWkcsT0FBRCxDQUFaOztBQWVBLFdBQUtJLFVBQUwsQ0FBZ0IsQ0FBaEIsSUFBcUJWLEtBQXJCO0FBQ0EsV0FBS1UsVUFBTCxDQUFnQixDQUFoQixJQUFxQkgsS0FBckI7QUFDRDs7OztFQS9IZ0MsZUFBS0ksUzs7a0JBQW5CbEIsSyIsImZpbGUiOiJvcmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCBPcmRlclRhYiBmcm9tICcuLi9vcmRlci90YWInXG5pbXBvcnQgT3JkZXJMaXN0IGZyb20gJy4uL29yZGVyL2xpc3QnXG5pbXBvcnQgQmxhbmtUaXAgZnJvbSAnLi4vY29tbW9uL2JsYW5rVGlwJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPcmRlciBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAkcmVwZWF0ID0ge307XHJcbiRwcm9wcyA9IHtcIm9yZGVyLXRhYlwiOntcInhtbG5zOnYtYmluZFwiOlwiXCIsXCJ2LWJpbmQ6YWN0aXZlLnN5bmNcIjpcImFjdGl2ZVwifSxcIm9yZGVyLWxpc3QtYVwiOntcInYtYmluZDpsaXN0Lm9uY2VcIjpcImxpc3QxXCIsXCJ4bWxuczp3eFwiOlwiXCJ9LFwib3JkZXItbGlzdC1iXCI6e1widi1iaW5kOmxpc3Qub25jZVwiOlwibGlzdDJcIn0sXCJibGFuay10aXBcIjp7XCJ2LWJpbmQ6aWNvbi5vbmNlXCI6XCJpY29uXCIsXCJ2LWJpbmQ6bXNnLm9uY2VcIjpcIm1zZ1wifX07XHJcbiRldmVudHMgPSB7fTtcclxuIGNvbXBvbmVudHMgPSB7XG4gICAgJ29yZGVyLXRhYic6IE9yZGVyVGFiLFxuICAgICdvcmRlci1saXN0LWEnOiBPcmRlckxpc3QsXG4gICAgJ29yZGVyLWxpc3QtYic6IE9yZGVyTGlzdCxcbiAgICAnYmxhbmstdGlwJzogQmxhbmtUaXBcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgYWN0aXZlOiAwLFxuICAgIGxpc3QxOiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICB0aXRsZTogJ+WNluiUrOiPnCcsXG4gICAgICAgIGNyZWF0ZVRpbWU6ICcyMDE3LTExLTA1IDIyOjIyOjIyJyxcbiAgICAgICAgcHJpY2U6ICcxMDAnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAn6KW/5YWw6IqxJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRpdGxlOiAn6IyE5a2QJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdHVzOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgdGl0bGU6ICfljZbolKzoj5wnLFxuICAgICAgICBjcmVhdGVUaW1lOiAnMjAxNy0xMS0wNSAyMjoyMjoyMicsXG4gICAgICAgIHByaWNlOiAnMTAwJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ+ilv+WFsOiKsSdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0aXRsZTogJ+iMhOWtkCdcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXR1czogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDAsXG4gICAgICAgIHRpdGxlOiAn5Y2W6JSs6I+cJyxcbiAgICAgICAgY3JlYXRlVGltZTogJzIwMTctMTEtMDUgMjI6MjI6MjInLFxuICAgICAgICBwcmljZTogJzEwMCcsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICfopb/lhbDoirEnXG4gICAgICAgICAgfSwge1xuICAgICAgICAgICAgdGl0bGU6ICfojITlrZAnXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0dXM6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICB0aXRsZTogJ+WNluiUrOiPnCcsXG4gICAgICAgIGNyZWF0ZVRpbWU6ICcyMDE3LTExLTA1IDIyOjIyOjIyJyxcbiAgICAgICAgcHJpY2U6ICcxMDAnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAn6KW/5YWw6IqxJ1xuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIHRpdGxlOiAn6IyE5a2QJ1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdHVzOiAwXG4gICAgICB9XG4gICAgXSxcbiAgICBsaXN0MjogW1xuICAgICAge1xuICAgICAgICBpZDogMCxcbiAgICAgICAgdGl0bGU6ICfkuI3ljZbolKzoj5wnLFxuICAgICAgICBjcmVhdGVUaW1lOiAnMjAxNy0xMS0wMSAyMjoyMjoyMicsXG4gICAgICAgIHByaWNlOiAnMTAwJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZTogJ+eVquiMhCdcbiAgICAgICAgICB9LCB7XG4gICAgICAgICAgICB0aXRsZTogJ+Wcn+ixhidcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXR1czogMVxuICAgICAgfVxuICAgIF0sXG4gICAgaWNvbjogJ2ljb24tZGluZ2RhbicsXG4gICAgbXNnOiAn55uu5YmN5rKh5pyJ6K6i5Y2VJ1xuICB9XG5cbiAgb25Mb2FkICgpIHtcbiAgICAvLyB0aGlzLmNyZWF0ZU9yZGVyTGlzdHMoKVxuICB9XG5cbiAgY3JlYXRlT3JkZXJMaXN0cyAoKSB7XG4gICAgbGV0IGxpc3QxID0gW3tcbiAgICAgIGlkOiAwLFxuICAgICAgdGl0bGU6ICfljZbolKzoj5wnLFxuICAgICAgY3JlYXRlVGltZTogJzIwMTctMTEtMDUgMjI6MjI6MjInLFxuICAgICAgcHJpY2U6ICcxMDAnLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHRpdGxlOiAn6KW/5YWw6IqxJ1xuICAgICAgICB9LCB7XG4gICAgICAgICAgdGl0bGU6ICfojITlrZAnXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzdGF0dXM6IDBcbiAgICB9XVxuICAgIGxldCBsaXN0MiA9IFt7XG4gICAgICBpZDogMCxcbiAgICAgIHRpdGxlOiAn5Y2W6JSs6I+cJyxcbiAgICAgIGNyZWF0ZVRpbWU6ICcyMDE3LTExLTAxIDIyOjIyOjIyJyxcbiAgICAgIHByaWNlOiAnMTAwJyxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogJ+eVquiMhCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHRpdGxlOiAn5Zyf6LGGJ1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc3RhdHVzOiAxXG4gICAgfV1cblxuICAgIHRoaXMub3JkZXJMaXN0c1swXSA9IGxpc3QxXG4gICAgdGhpcy5vcmRlckxpc3RzWzFdID0gbGlzdDJcbiAgfVxufVxuIl19