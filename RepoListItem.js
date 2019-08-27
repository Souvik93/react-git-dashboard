import React, {Component} from 'react';

export default class RepoListItem extends Component {
  render() {
    return (
      <div>
          <li>
          <span> <a href={this.props.repo.html_url} target="_blank"> {this.props.repo.name} </a> </span>
          <hr />
          </li>
      </div>
    );
  }
}


