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

var Home = function (_wepy$component) {
  _inherits(Home, _wepy$component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.components = {}, _this.data = {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 500,
      imgUrls: ['http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'],
      indicatorActiveColor: '#13b113'
    }, _this.methods = {
      toGoodsList: function toGoodsList() {
        _wepy2.default.navigateTo({
          url: '/pages/goods/goods'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Home;
}(_wepy2.default.component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuanMiXSwibmFtZXMiOlsiSG9tZSIsImNvbXBvbmVudHMiLCJkYXRhIiwiaW5kaWNhdG9yRG90cyIsImF1dG9wbGF5IiwiaW50ZXJ2YWwiLCJkdXJhdGlvbiIsImltZ1VybHMiLCJpbmRpY2F0b3JBY3RpdmVDb2xvciIsIm1ldGhvZHMiLCJ0b0dvb2RzTGlzdCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxJOzs7Ozs7Ozs7Ozs7OztrTEFDbkJDLFUsR0FBYSxFLFFBR2JDLEksR0FBTztBQUNMQyxxQkFBZSxJQURWO0FBRUxDLGdCQUFVLElBRkw7QUFHTEMsZ0JBQVUsSUFITDtBQUlMQyxnQkFBVSxHQUpMO0FBS0xDLGVBQVMsQ0FDUCxzRUFETyxFQUVQLHNFQUZPLEVBR1Asc0VBSE8sQ0FMSjtBQVVMQyw0QkFBc0I7QUFWakIsSyxRQWFQQyxPLEdBQVU7QUFDUkMsaUJBRFEseUJBQ087QUFDYix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRDtBQUxPLEs7Ozs7RUFqQnNCLGVBQUtDLFM7O2tCQUFsQmIsSSIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgd2VweS5jb21wb25lbnQge1xuICBjb21wb25lbnRzID0ge1xuICB9XG5cbiAgZGF0YSA9IHtcbiAgICBpbmRpY2F0b3JEb3RzOiB0cnVlLFxuICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgIGludGVydmFsOiA1MDAwLFxuICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgaW1nVXJsczogW1xuICAgICAgJ2h0dHA6Ly9pbWcwMi50b29vcGVuLmNvbS9pbWFnZXMvMjAxNTA5MjgvdG9vb3Blbl9zeV8xNDM5MTI3NTU3MjYuanBnJyxcbiAgICAgICdodHRwOi8vaW1nMDYudG9vb3Blbi5jb20vaW1hZ2VzLzIwMTYwODE4L3Rvb29wZW5fc3lfMTc1ODY2NDM0Mjk2LmpwZycsXG4gICAgICAnaHR0cDovL2ltZzA2LnRvb29wZW4uY29tL2ltYWdlcy8yMDE2MDgxOC90b29vcGVuX3N5XzE3NTgzMzA0NzcxNS5qcGcnXG4gICAgXSxcbiAgICBpbmRpY2F0b3JBY3RpdmVDb2xvcjogJyMxM2IxMTMnXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIHRvR29vZHNMaXN0ICgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9nb29kcy9nb29kcydcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG4iXX0=