import React, { Component } from 'react';
import RepoListItem from './RepoListItem';

export default class RepoLists extends Component {


  constructor() {
       // {this.props.repoLists.map((object, i) => <RepoListItem repo={object} key={object.id} />)}
    // this.setState({repoLists: props});
    this.state = {
    repoLists: []
  }

  }
  render () {
    return (
        <div>
        <span>Repository Details.</span>
         <ul className="list-unstyled" style={{'overflow-y': 'auto', 'height': '650px'}}>
       
          {this.props.repoLists.map((object, i) => <RepoListItem repo={object} key={object.id} indexNo={i} />)}

          </ul>
      </div>
    );

  }
}

RepoLists.propTypes= {
  repoLists: []
}
RepoLists.defaultProps = {
  repoLists: 0
}