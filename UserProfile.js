import React, {Component} from 'react';

export class UserProfile extends Componenet {
  render () {
    return (
      <div>
        <section>
          <img
            src={user.avatar_url}
            className="img-rounded img-responsive"
            alt="User Avatar"
          />
        </section>
      </div>
    )
  }
}