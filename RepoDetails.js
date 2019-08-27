import React, {Component} from 'react';
import RepoLists from './RepoLists';
import RepoFilter from './RepoFilter';
import { getRepoData } from './git-service';
export default class RepoDetails extends Component {

  constructor() {
    this.state = {'repoLists':[]};
  }

componentDidUpdate(prevProps, prevState) {
  // only update chart if the data has changed
  if (prevProps.userName !== this.props.userName) {
    this.getRepoDetails(this.props.userName);
  }
}

getRepoDetails(userNAme) {
  getRepoData(userNAme).then(resp => {

    this.setState({'repoLists':resp.data});
    console.log("Hey There !!!! From getRepoDetails() Method");
    console.log(this.state.repoLists);
   
  })

}

  render() {
    return (
      <div>
      <span>Hey There!! This Repo Details Component....</span>
      <div className="col-sm-12">
        <RepoFilter />
      </div>
      <div className= "col-sm-12"> <RepoLists repoLists={this.state.repoLists}/> </div>
      </div>
    );
  }
}