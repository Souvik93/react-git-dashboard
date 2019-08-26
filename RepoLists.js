import React, { Component } from 'react';
import RepoListItem from './RepoListItem';

export default class RepoLists extends Component {
  render () {
    return (
         <div>
        <span>Hey There From !! Repo Lists Component.</span>
         <ul className="list-unstyled">
         {this.props.repoLists.map((object, i) => <RepoListItem repo={object} key={object.id} />)}

          </ul>
      </div>
    );

  }
}