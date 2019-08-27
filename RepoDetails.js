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

handleFilterUpdate = (filter) => {
  console.log("Hey There !! From Handle Filter Method");
  console.log(filter);
  this.setState({'repoLists': this.state.repoLists.filter(
    repoDetails => {
      return !filter || (repoDetails.name && repoDetails.name.toLowerCase().includes(filter))
    }
  )});

  console.log("Hey There !! After handleFilterUpdate Method");
  console.log(this.state.repoLists);

}



  render() {
    return (
      <div>
      <div className="col-sm-12">
        <RepoFilter onUpdateFilter={this.handleFilterUpdate} />
      </div>
      <div className= "col-sm-12"> <RepoLists repoLists={this.state.repoLists}/> </div>
      </div>
    );
  }
}