import React, {Component} from 'react';

export default class RepoFilter extends Component {
  render() {
    return(
      <div>
        <span>Hey There !! From Repo Filter Component....</span>

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