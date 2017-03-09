webpackJsonp([0],{

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__source_index__ = __webpack_require__(81);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var App = function (_PureComponent) {
  _inherits(App, _PureComponent);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      tags: [{
        id: 'id_1',
        title: 'Lorem Ipsum',
        x: 200,
        y: 200,
        index: 0
      }, {
        id: 'id_2',
        title: 'Lorem',
        x: 200,
        y: 300,
        index: 1
      }, {
        id: 'id_3',
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        x: 100,
        y: 100,
        index: 1
      }]
    };
    _this.maxLength = 20;

    _this.onReplace = _this.onReplace.bind(_this);
    _this.onDelete = _this.onDelete.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'onReplace',
    value: function onReplace(element, index, array) {
      if (array) {
        this.setState({ tags: array });
      }
    }
  }, {
    key: 'onDelete',
    value: function onDelete(element, index, array) {
      if (array) {
        this.setState({ tags: array });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__source_index__["a" /* default */], {
        image: './image.jpg',
        width: '512px',
        height: '512px',
        tags: this.state.tags,
        onReplace: this.onReplace,
        onDelete: this.onDelete,
        maxLength: this.maxLength
      });
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = App;


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_dom__["render"])(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null), document.getElementById('react-app'));

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Tagging = function (_PureComponent) {
  _inherits(Tagging, _PureComponent);

  function Tagging(props) {
    _classCallCheck(this, Tagging);

    var _this = _possibleConstructorReturn(this, (Tagging.__proto__ || Object.getPrototypeOf(Tagging)).call(this, props));

    _this.state = {
      chosenIndex: null
    };

    _this.deleteTag = _this.deleteTag.bind(_this);
    _this.hideAllDeletes = _this.hideAllDeletes.bind(_this);
    return _this;
  }

  _createClass(Tagging, [{
    key: 'hideAllDeletes',
    value: function hideAllDeletes() {
      [].forEach.call(__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(this.refs['tagging-wrapper']).querySelectorAll('.delete'), function (element) {
        element.classList.add('hide');
      });
    }
  }, {
    key: 'deleteTag',
    value: function deleteTag(tag, index) {
      this.hideAllDeletes();
      this.setState({ chosenIndex: null });
      this.props.onDelete(tag, index, this.props.tags.filter(function (tag, ind) {
        return ind !== index;
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          className: 'tagging-wrapper',
          style: {
            backgroundImage: 'url(' + this.props.image + ')',
            width: this.props.width,
            height: this.props.height
          },
          ref: 'tagging-wrapper',
          onClick: function onClick() {
            _this2.hideAllDeletes();
            _this2.setState({ chosenIndex: null });
          }
        },
        this.props.tags.map(function (tag, index) {
          // closure veriables
          var canMove = false;
          var startMoving = function startMoving(event) {
            canMove = true;
            document.addEventListener('mousemove', processMoving, false);
            document.addEventListener('touchmove', processMoving, false);
          };
          var processMoving = function processMoving(event) {
            if (canMove && _this2.state.chosenIndex === index) {
              var ref = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(_this2.refs[index]);
              if (ref) {
                var wrapper = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(_this2.refs['tagging-wrapper']).getBoundingClientRect(),
                    boundingClientRect = ref.getBoundingClientRect();
                ref.style.cursor = '-webkit-grabbing';
                ref.style.cursor = 'grabbing';
                // handle borders
                if (wrapper.left + boundingClientRect.width / 2 > event.pageX) {
                  tag.x = 0;
                } else if (wrapper.left + wrapper.width - boundingClientRect.width / 2 < event.pageX) {
                  tag.x = wrapper.width - boundingClientRect.width;
                } else {
                  tag.x = parseFloat(ref.style.left) + event.pageX - (boundingClientRect.left + boundingClientRect.width / 2);
                }
                if (wrapper.top + boundingClientRect.height / 2 > event.pageY) {
                  tag.y = 0;
                } else if (wrapper.top + wrapper.height - boundingClientRect.height / 2 < event.pageY) {
                  tag.y = wrapper.height - boundingClientRect.height;
                } else {
                  tag.y = parseFloat(ref.style.top) + event.pageY - (boundingClientRect.top + boundingClientRect.height / 2);
                }

                // handle .delete position
                var deleteElement = ref.querySelector('.delete');
                if (wrapper.left + wrapper.width - boundingClientRect.width / 2 < event.pageX + deleteElement.getBoundingClientRect().width) {
                  deleteElement.classList.add('pull-left');
                } else {
                  deleteElement.classList.remove('pull-left');
                }

                // set values
                ref.style.left = tag.x + 'px';
                ref.style.top = tag.y + 'px';
              }
            }
          };
          var stopMoving = function stopMoving(event) {
            var ref = __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(_this2.refs[index]);
            ref.style.cursor = '';
            _this2.props.onReplace(tag, index, _this2.props.tags.map(function (tag, ind) {
              if (ind === index) {
                tag.x = parseFloat(ref.style.left);
                tag.y = parseFloat(ref.style.top);
              }
              return tag;
            }));
            canMove = false;
            document.removeEventListener('mousemove', processMoving);
            document.removeEventListener('touchmove', processMoving);
          };
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            {
              className: 'tagging-element ' + (_this2.state.chosenIndex === index ? 'grab-mode' : ''),
              key: tag.id,
              ref: index,
              style: {
                zIndex: tag.index,
                left: tag.x,
                top: tag.y
              },
              onClick: function onClick(event) {
                event.stopPropagation();
                _this2.hideAllDeletes();
                _this2.setState({ chosenIndex: index });
                __WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.findDOMNode(_this2.refs[index]).querySelector('.delete').classList.remove('hide');
              },
              onMouseDown: startMoving,
              onTouchStart: startMoving,
              onMouseUp: stopMoving,
              onTouchEnd: stopMoving
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                className: 'title'
              },
              tag.title.length + 3 > _this2.props.maxLength ? tag.title.slice(0, _this2.props.maxLength - 3) + '...' : tag.title
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'span',
              {
                className: 'delete hide',
                onClick: function onClick(event) {
                  event.stopPropagation();
                  _this2.deleteTag(tag, index);
                }
              },
              'X'
            )
          );
        })
      );
    }
  }]);

  return Tagging;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

Tagging.defaultProps = {
  image: '',
  width: '400px',
  height: '400px',
  tags: [],
  onReplace: Function.prototype,
  onDelete: Function.prototype,
  maxLength: 16
};
Tagging.propTypes = {
  image: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  width: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  height: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  tags: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    id: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
    title: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
    x: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number,
    y: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number,
    index: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number
  })),
  onReplace: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  onDelete: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func,
  maxLength: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].number
};
/* harmony default export */ __webpack_exports__["a"] = Tagging;

/***/ }),

/***/ 82:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[179]);
//# sourceMappingURL=main.js.map