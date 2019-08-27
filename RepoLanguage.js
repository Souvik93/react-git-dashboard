import React, {Component} from 'react';
import { Badge } from 'reactstrap';

export default class RepoLanguage extends Component {
  render() {
    return(
     
      this.props.lang !==null ? <Badge href="#" color="primary">{this.props.lang}</Badge>:  <Badge href="#" color="danger"> Not Found</Badge>
    );
  }
}