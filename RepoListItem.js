import React, {Component} from 'react';

export default class RepoListItem extends Component {
  render() {
    return (
      <div>
          <li>
          <span> <a href={this.props.repo.html_url} target="_blank"> {this.props.repo.name} </a> <span className="float-sm-right">{this.props.repo.language}</span> </span>
          <hr />
          </li>
      </div>
    );
  }
}


