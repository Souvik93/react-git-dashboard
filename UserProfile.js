
import React, { Component } from 'react';

export default class UserProfile extends Component {
  render () {
    return (
      <div>
        <section>
          <img
            src={this.props.userDetails.avatar_url}
            className="rounded-circle img-responsive"
            alt="User Avatar"
          />
          <h4>
            <span> {this.props.userDetails.name} </span>
          </h4>
          <h4>
            <span> {this.props.userDetails.bio} </span>
          </h4>
        </section>
      </div>
    )
  }
}
