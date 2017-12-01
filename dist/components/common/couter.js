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

var Counter = function (_wepy$component) {
  _inherits(Counter, _wepy$component);

  function Counter() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Counter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Counter.__proto__ || Object.getPrototypeOf(Counter)).call.apply(_ref, [this].concat(args))), _this), _this.props = {
      num: {
        type: Number,
        default: 0
      },
      item: Object
    }, _this.methods = {
      catchReduce: function catchReduce() {
        this.$emit('reduce');
      },
      catchAdd: function catchAdd() {
        this.$emit('add', this.item);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Counter;
}(_wepy2.default.component);

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvdXRlci5qcyJdLCJuYW1lcyI6WyJDb3VudGVyIiwicHJvcHMiLCJudW0iLCJ0eXBlIiwiTnVtYmVyIiwiZGVmYXVsdCIsIml0ZW0iLCJPYmplY3QiLCJtZXRob2RzIiwiY2F0Y2hSZWR1Y2UiLCIkZW1pdCIsImNhdGNoQWRkIiwiY29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsTzs7Ozs7Ozs7Ozs7Ozs7d0xBQ25CQyxLLEdBQVE7QUFDTkMsV0FBSztBQUNIQyxjQUFNQyxNQURIO0FBRUhDLGlCQUFTO0FBRk4sT0FEQztBQUtOQyxZQUFNQztBQUxBLEssUUFRUkMsTyxHQUFVO0FBQ1JDLGlCQURRLHlCQUNPO0FBQ2IsYUFBS0MsS0FBTCxDQUFXLFFBQVg7QUFDRCxPQUhPO0FBSVJDLGNBSlEsc0JBSUk7QUFDVixhQUFLRCxLQUFMLENBQVcsS0FBWCxFQUFrQixLQUFLSixJQUF2QjtBQUNEO0FBTk8sSzs7OztFQVR5QixlQUFLTSxTOztrQkFBckJaLE8iLCJmaWxlIjoiY291dGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3VudGVyIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBwcm9wcyA9IHtcbiAgICBudW06IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDBcbiAgICB9LFxuICAgIGl0ZW06IE9iamVjdFxuICB9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBjYXRjaFJlZHVjZSAoKSB7XG4gICAgICB0aGlzLiRlbWl0KCdyZWR1Y2UnKVxuICAgIH0sXG4gICAgY2F0Y2hBZGQgKCkge1xuICAgICAgdGhpcy4kZW1pdCgnYWRkJywgdGhpcy5pdGVtKVxuICAgIH1cbiAgfVxufVxuIl19