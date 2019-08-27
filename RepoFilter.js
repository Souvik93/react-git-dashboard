import React, {Component} from 'react';

export default class RepoFilter extends Component {
  render() {
    return(
      <div>
        <input
          type="text"
          placeholder="Filter repositories..."
          className="form-control"
          onKeyUp={({target: {value}}) => this.props.onUpdateFilter(value)}
        />

      </div>
    )
  }
}