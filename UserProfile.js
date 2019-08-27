
import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import Grow from '@material-ui/core/Grow';

export default class UserProfile extends Component {

  
  render() {
    return (
      <div>
        <section>
          <div className="col-md-4">
            <img
              src={this.props.userDetails.avatar_url}
              className="rounded-circle img-responsive git-img"
              alt="User Avatar"
            />
          </div>
          <div className="col-md-8">
            <Grow in={true}>
            <ListItem>
             
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Name" secondary={this.props.userDetails.name} />
            </ListItem>
            </Grow>
        
            <Divider variant="inset" />

              <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary={this.props.userDetails.company} />
            </ListItem>
            
            <Divider variant="inset"/>

              <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <ImageIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Bio" secondary={this.props.userDetails.bio} />
            </ListItem>

            <Divider variant="inset" />

              <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Location" secondary={this.props.userDetails.location} />
            </ListItem>
          </div>
        </section>
      </div>
    )
  }
}
