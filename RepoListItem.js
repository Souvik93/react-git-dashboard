import React, {Component} from 'react';
import RepoLanguage from './RepoLanguage';

export default class RepoListItem extends Component {
  render() {
    return (
      <div>
          <li>
          <span>{this.props.indexNo+1}.</span>
          <span> <a href={this.props.repo.html_url} target="_blank"> {this.props.repo.name} </a>
          <span className="float-sm-right"> <RepoLanguage lang={this.props.repo.language}/></span> </span>
          <hr />
          </li>
      </div>
    );
  }
}


