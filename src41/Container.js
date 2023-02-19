import React from "react";

export default class Container extends React.Component {
  render() {
    return (
      <div className='container'>
        <h2>{this.props.title}</h2>
        {this.props.children}
      </div>
    );
  }
}
