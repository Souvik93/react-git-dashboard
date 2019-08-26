import React, {Component} from 'react';
import {getUserData} from './git-service';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ReactJson from 'react-json-view';
import UserProfile from './UserProfile';
import RepoDetails from './RepoDetails';

export class Home extends Component {
  constructor() {
     this.state = {output :{data: ''},
     userName: ''
     }
  }
    handleSubmit = (e) => {
    e.preventDefault();
    // this.context.router.push({pathname: `/${this._input.value}`});
    const data = new FormData(e.target);
    console.log(this._input.value);
    this.setState({userName: this._input.value})
    this.getUserDetails();

  }

getUserDetails() {
  getUserData(this._input.value).then(resp => {
    console.log("Hey There !! From getUserDetails Method");
    console.log(resp.data);
    this.setState({output: resp});
  });
}

  render() {
    return (
      <div>
      <div className="row">
      <div className="col-sm-12">
      <p> My First React Component </p> 
      </div>
      <div className="col-sm-4">
      <section className="con-home">
      <Form onSubmit={this.handleSubmit}>
       <FormGroup>
       <input type="text" className="form-control" name="userName" id="uName" placeholder="Enter A Git Hub User" ref={ref => (this._input = ref)} />
      </FormGroup>
       <Button color="info">Go !</Button>
      </Form >
      </section>
      </div>
      <div className="col-sm-4">
      <section>
       <UserProfile userDetails={this.state.output.data} />
      
      </section>
      </div>
      <div className="col-sm-4">
      <RepoDetails userName={this.state.userName} />
      </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
             <ReactJson src={this.state.output.data} theme="monokai" />
        </div>
      </div>
      </div>
    ) 
  }
}
