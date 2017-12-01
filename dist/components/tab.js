"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tab = function (_wepy$component) {
  _inherits(Tab, _wepy$component);

  function Tab() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tab);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tab.__proto__ || Object.getPrototypeOf(Tab)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      active: {
        twoWay: true
      }
    }, _this.data = {
      items: [{
        id: 0,
        title: "首页",
        icon: "icon-shouye"
      }, {
        id: 1,
        title: "订单",
        icon: "icon-dingdan"
      }, {
        id: 2,
        title: "我的",
        icon: "icon-yonghu"
      }]
    }, _this.methods = {
      change: function change(idx, evt) {
        this.active = idx;
        _wepy2.default.setNavigationBarTitle({ title: this.items[idx].title });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tab, [{
    key: "onLoad",
    value: function onLoad() {
      _wepy2.default.setNavigationBarTitle({ title: this.items[0].title });
    }
  }]);

  return Tab;
}(_wepy2.default.component);

exports.default = Tab;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi5qcyJdLCJuYW1lcyI6WyJUYWIiLCJwcm9wcyIsImFjdGl2ZSIsInR3b1dheSIsImRhdGEiLCJpdGVtcyIsImlkIiwidGl0bGUiLCJpY29uIiwibWV0aG9kcyIsImNoYW5nZSIsImlkeCIsImV2dCIsInNldE5hdmlnYXRpb25CYXJUaXRsZSIsImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsRzs7Ozs7Ozs7Ozs7Ozs7Z0xBQ25CQyxLLEdBQVE7QUFDTkMsY0FBUTtBQUNOQyxnQkFBUTtBQURGO0FBREYsSyxRQUtSQyxJLEdBQU87QUFDTEMsYUFBTyxDQUNMO0FBQ0VDLFlBQUksQ0FETjtBQUVFQyxlQUFPLElBRlQ7QUFHRUMsY0FBTTtBQUhSLE9BREssRUFNTDtBQUNFRixZQUFJLENBRE47QUFFRUMsZUFBTyxJQUZUO0FBR0VDLGNBQU07QUFIUixPQU5LLEVBV0w7QUFDRUYsWUFBSSxDQUROO0FBRUVDLGVBQU8sSUFGVDtBQUdFQyxjQUFNO0FBSFIsT0FYSztBQURGLEssUUFvQlBDLE8sR0FBVTtBQUNSQyxZQURRLGtCQUNEQyxHQURDLEVBQ0lDLEdBREosRUFDUztBQUNmLGFBQUtWLE1BQUwsR0FBY1MsR0FBZDtBQUNBLHVCQUFLRSxxQkFBTCxDQUEyQixFQUFFTixPQUFPLEtBQUtGLEtBQUwsQ0FBV00sR0FBWCxFQUFnQkosS0FBekIsRUFBM0I7QUFDRDtBQUpPLEs7Ozs7OzZCQU9EO0FBQ1AscUJBQUtNLHFCQUFMLENBQTJCLEVBQUVOLE9BQU8sS0FBS0YsS0FBTCxDQUFXLENBQVgsRUFBY0UsS0FBdkIsRUFBM0I7QUFDRDs7OztFQW5DOEIsZUFBS08sUzs7a0JBQWpCZCxHIiwiZmlsZSI6InRhYi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tIFwid2VweVwiO1xuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYiBleHRlbmRzIHdlcHkuY29tcG9uZW50IHtcbiAgICBwcm9wcyA9IHtcbiAgICAgIGFjdGl2ZToge1xuICAgICAgICB0d29XYXk6IHRydWVcbiAgICAgIH1cbiAgICB9O1xuICAgIGRhdGEgPSB7XG4gICAgICBpdGVtczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgdGl0bGU6IFwi6aaW6aG1XCIsXG4gICAgICAgICAgaWNvbjogXCJpY29uLXNob3V5ZVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMSxcbiAgICAgICAgICB0aXRsZTogXCLorqLljZVcIixcbiAgICAgICAgICBpY29uOiBcImljb24tZGluZ2RhblwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogMixcbiAgICAgICAgICB0aXRsZTogXCLmiJHnmoRcIixcbiAgICAgICAgICBpY29uOiBcImljb24teW9uZ2h1XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH07XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgY2hhbmdlKGlkeCwgZXZ0KSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gaWR4O1xuICAgICAgICB3ZXB5LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7IHRpdGxlOiB0aGlzLml0ZW1zW2lkeF0udGl0bGUgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgIHdlcHkuc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgdGl0bGU6IHRoaXMuaXRlbXNbMF0udGl0bGUgfSk7XG4gICAgfVxuICB9XG4iXX0=