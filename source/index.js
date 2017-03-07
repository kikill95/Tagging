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

      this.deleteTag = this.deleteTag.bind(this);
      this.replaceTag = this.replaceTag.bind(this);
  }

  replaceTag(tag, index) {
    console.log('replaceTag', tag, index)
    // this.props.onReplace(tag, index, this.props.tags.filter((tag, ind) => ind !== index));
  }

  deleteTag(tag, index) {
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
            this.setState({chosenIndex: null});
          }}
        >
          {this.props.tags.map((tag, index) => {
            // closure veriables
            let canMove = false;
            let startMoving = event => {
              canMove = true;
            };
            let processMoving = event => {
              if (canMove && this.state.chosenIndex === index) {
                let ref = ReactDOM.findDOMNode(this.refs[index]);
                if (ref) {
                  let wrapper = ReactDOM.findDOMNode(this.refs['tagging-wrapper']).getBoundingClientRect(),
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
                  ref.style.left = tag.x + 'px';
                  ref.style.top = tag.y + 'px';
                }
              }
            };
            let stopMoving = event => {
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
            };
            return (
              <div
                className={`tagging-element ${this.state.chosenIndex === index ? 'grab-mode' : ''}`}
                key={index}
                ref={index}
                style={{
                  zIndex: tag.index,
                  left: tag.x,
                  top: tag.y
                }}
                onClick={event => {
                  event.stopPropagation();
                  this.setState({chosenIndex: index});
                }}
                onMouseDown={startMoving}
                onMouseMove={processMoving}
                onMouseUp={stopMoving}
                onMouseLeave={stopMoving}
              >
                <span
                  className={'title'}
                >
                  {tag.title.length + 3 > this.props.maxLength ? tag.title.slice(0, this.props.maxLength - 3) + '...' : tag.title}
                </span>
                {
                  this.state.chosenIndex === index ? (
                    <span
                      className={'delete'}
                      onClick={event => {
                        event.stopPropagation();
                        this.deleteTag(tag, index);
                      }}
                    >X</span>
                  ) : null
                }
              </div>
            );
          })}
        </div>
      );
  }
}
