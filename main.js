'use strict';

import React, { PureComponent } from 'react';
import { render } from 'react-dom';

import Tagging from './source/index';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      tags: [
        {
          id: 'id_1',
          title: 'Lorem Ipsum',
          x: 200,
          y: 200,
          index: 0
        },
        {
          id: 'id_2',
          title: 'Lorem',
          x: 200,
          y: 300,
          index: 1
        },
        {
          id: 'id_3',
          title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          x: 100,
          y: 100,
          index: 1
        }
      ]
    };
    this.maxLength = 20;

    this.onReplace = this.onReplace.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  onReplace(element, index, array) {
    if (array) {
      this.setState({tags: array});
    }
  }

  onDelete(element, index, array) {
    if (array) {
      this.setState({tags: array});
    }
  }

  render() {
    return (
      <Tagging
        image={'./image.jpg'}
        width={'512px'}
        height={'512px'}
        tags={this.state.tags}
        onReplace={this.onReplace}
        onDelete={this.onDelete}
        maxLength={this.maxLength}
      />
    );
  }
}

render(
    <App/>,
    document.getElementById('react-app')
);
