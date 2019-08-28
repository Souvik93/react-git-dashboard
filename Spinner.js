import React, {Component} from 'react';
import { Spinner } from 'reactstrap';
import LoadingOverlay from 'react-loading-overlay';

export default class Spinner extends Component {
  render() {
    return (

      this.props.isVisible ? <Spinner style={{ width: '100px', height: '100px' }} type="grow" className="overlay-div" />: null
     
    )
  }
}
