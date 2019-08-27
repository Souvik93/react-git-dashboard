import React, {Component} from 'react';
export default class RepoLanguage extends Component {
  render() {
    return(
      this.props.lang !==null ? <span> {this.props.lang}</span> : <span>Not Found</span>
    );
  }
}