'use strict';

import React, { PureComponent, PropTypes } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

export default class Tagging extends PureComponent {
  static defaultProps = {
    image: '',
    width: '400px',
    height: '400px',
    tags: [],
    onReplace: Function.prototype,
    onDelete: Function.prototype,
    maxLength: 16
  };

  static propTypes = {
    image: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        x: PropTypes.number,
        y: PropTypes.number,
        index: PropTypes.number
    })),
    onReplace: PropTypes.func,
    onDelete: PropTypes.func,
    maxLength: PropTypes.number
  };

  constructor(props) {
      super(props);

      this.state = {
        chosenIndex: null
      };
      this.clickedTime = null;

      this.deleteTag = this.deleteTag.bind(this);
      this.hideAllDeletes = this.hideAllDeletes.bind(this);
  }

  hideAllDeletes() {
    [].forEach.call(ReactDOM.findDOMNode(this.refs['tagging-wrapper']).querySelectorAll('.delete'), element => {
      element.classList.add('hide');
    });
  }

  deleteTag(tag, index) {
    this.hideAllDeletes();
    this.setState({chosenIndex: null});
    this.props.onDelete(tag, index, this.props.tags.filter((tag, ind) => ind !== index));
  }

  render() {
      return (
        <div
          className={'tagging-wrapper'}
          style={{
            backgroundImage: `url(${this.props.image})`,
            width: this.props.width,
            height: this.props.height,
          }}
          ref='tagging-wrapper'
          onClick={() => {
            this.hideAllDeletes();
            this.setState({chosenIndex: null});
          }}
        >
          {this.props.tags.map((tag, index) => {
            // closure veriables
            let canMove = false;
            let startMoving = event => {
              event.stopPropagation();
              canMove = true;
              document.addEventListener('mousemove', processMoving, false);
              document.addEventListener('touchmove', processMoving, false);
            };
            let processMoving = event => {
              event.preventDefault();
              event.stopPropagation();
              if (canMove && this.state.chosenIndex === index) {
                let ref = ReactDOM.findDOMNode(this.refs[index]);
                if (ref) {
                  let wrapper = ReactDOM.findDOMNode(this.refs['tagging-wrapper']).getBoundingClientRect(),
                    boundingClientRect = ref.getBoundingClientRect();
                  ref.style.cursor = '-webkit-grabbing';
                  ref.style.cursor = 'grabbing';
                  // handle device touches
                  if (event.changedTouches) {
                    event.clientX = event.changedTouches[0].clientX;
                    event.clientY = event.changedTouches[0].clientY;
                  }
                  // handle borders
                  if (wrapper.left + boundingClientRect.width / 2 > event.clientX) {
                    tag.x = 0;
                  } else if (wrapper.left + wrapper.width - boundingClientRect.width / 2 < event.clientX) {
                    tag.x = wrapper.width - boundingClientRect.width;
                  } else {
                    tag.x = parseFloat(ref.style.left) + event.clientX - (boundingClientRect.left + boundingClientRect.width / 2);
                  }
                  if (wrapper.top + boundingClientRect.height / 2 > event.clientY) {
                    tag.y = 0;
                  } else if (wrapper.top + wrapper.height - boundingClientRect.height / 2 < event.clientY) {
                    tag.y = wrapper.height - boundingClientRect.height;
                  } else {
                    tag.y = parseFloat(ref.style.top) + event.clientY - (boundingClientRect.top + boundingClientRect.height / 2);
                  }

                  // handle .delete position
                  let deleteElement = ref.querySelector('.delete');
                  if (wrapper.left + wrapper.width - boundingClientRect.width / 2 < event.clientX + deleteElement.getBoundingClientRect().width) {
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
            let stopMoving = event => {
              event.stopPropagation();
              let ref = ReactDOM.findDOMNode(this.refs[index]);
              ref.style.cursor = '';
              this.props.onReplace(tag, index, this.props.tags.map((tag, ind) => {
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
            return (
              <div
                className={`tagging-element ${this.state.chosenIndex === index ? 'grab-mode' : ''}`}
                key={tag.id}
                ref={index}
                style={{
                  zIndex: tag.index,
                  left: tag.x,
                  top: tag.y
                }}
                onClick={event => {
                  event.stopPropagation();
                  if (this.state.chosenIndex !== index) {
                    this.hideAllDeletes();
                    this.setState({chosenIndex: index});
                    ReactDOM.findDOMNode(this.refs[index]).querySelector('.delete').classList.remove('hide');
                  }
                  if (new Date().getTime() - this.clickedTime < 300) {
                    // double click / tap
                    this.hideAllDeletes();
                    this.setState({chosenIndex: null});
                  }
                  this.clickedTime = new Date().getTime();
                }}
                onMouseDown={startMoving}
                onTouchStart={startMoving}
                onMouseUp={stopMoving}
                onTouchEnd={stopMoving}
              >
                <span
                  className={'title'}
                >
                  {tag.title.length + 3 > this.props.maxLength ? tag.title.slice(0, this.props.maxLength - 3) + '...' : tag.title}
                </span>
                <span
                  className={'delete hide'}
                  onClick={event => {
                    event.stopPropagation();
                    this.deleteTag(tag, index);
                  }}
                >X</span>
              </div>
            );
          })}
        </div>
      );
  }
}
