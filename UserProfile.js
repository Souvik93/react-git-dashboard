
import React, { Component } from 'react';

export default class UserProfile extends Component {
  render () {
    return (
      <div>
        <section>
        <div className="col-sm-4">
          <img
            src={this.props.userDetails.avatar_url}
            className="rounded-circle img-responsive"
            alt="User Avatar"
          />
          </div>
          <div className="col-sm-8">
          <h4>
            <span> {this.props.userDetails.name} </span>
          </h4>
          <h4>
            
             <span> {this.props.userDetails.login} </span>
          </h4>
          <h4>
            <span> {this.props.userDetails.bio} </span>
          </h4>
          <h4>
            <span> {this.props.userDetails.location} </span>
          </h4>
          </div>
        </section>
      </div>
    )
  }
}
