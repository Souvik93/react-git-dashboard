
import React, { Component } from 'react';

export default class UserProfile extends Component {
  render () {
    return (
      <div>
        <section>
          <img
            src={this.props.userDetails.avatar_url}
            className="img-rounded img-responsive"
            alt="User Avatar"
          />
        </section>
      </div>
    )
  }
}
