'use strict';

import React, { PureComponent, PropTypes } from 'react';

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
          onClick={() => {
            this.setState({chosenIndex: null});
          }}
        >
          {this.props.tags.map((tag, index) => {
            return (
              <div
                className={'tagging-element'}
                key={index}
                style={{
                  zIndex: tag.index,
                  left: tag.x,
                  top: tag.y
                }}
                onClick={event => {
                  event.stopPropagation();
                  this.setState({chosenIndex: index});
                }}
              >
                <span className={'title'}>{tag.title.length + 3 > this.props.maxLength ? tag.title.slice(0, this.props.maxLength - 3) + '...' : tag.title}</span>
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
