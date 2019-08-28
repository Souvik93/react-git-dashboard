import React, {Component} from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
export default class Notification extends Component {
  constructor() {

  }
  render() {
    return(
      <div>
      <Toast isOpen={this.props.show} className="float-sm-right">
         <ToastHeader icon={this.props.status} toggle={this.props.toggleHandler}>Notification</ToastHeader>
        <ToastBody >
          {this.props.message}
        </ToastBody>
      </Toast>
      </div>
    )
  }
}