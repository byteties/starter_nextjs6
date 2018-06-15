import React, { Component } from 'react';
import env from '../src/lib/env'

console.log(env.NODE_PORT)
export default class Index extends Component {
  render() {
    return (
      <div>
        Hello
      </div>
    )
  }
};
