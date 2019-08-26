import React, {Component} from 'react';

export default class RepoListItem extends Component {
  render() {
    return (
      <div>
          <span>Hey There !! From RepoListItem Componenet....</span>
          <li>
           {this.props.repo.name}
          </li>
      </div>
    );
  }
}


