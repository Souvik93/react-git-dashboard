import React, {Component} from 'react';
import RepoLists from './RepoLists';
export default class RepoDetails extends Component {

  render() {
    return (
      <div>
      <span>Hey There!! This Repo Details Component....</span>
      <div class= "col-sm-12"> <RepoLists/> </div>
      </div>
    );
  }
}