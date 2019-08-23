import React, {Component} from 'react';
import {getUserData} from './git-service';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ReactJson from 'react-json-view';

export class Home extends Component {
  constructor() {
     this.state = {output : 'No Result Found....'}
  }
    handleSubmit = (e) => {
    e.preventDefault();
    // this.context.router.push({pathname: `/${this._input.value}`});
    const data = new FormData(e.target);
    console.log(this._input.value);
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
      <p> My First React Component </p> 
      <section className="con-home">
      <Form onSubmit={this.handleSubmit}>
       <FormGroup>
       <Input type="text" name="userName" id="uName" placeholder="Enter A Git Hub User" ref={ref => (this._input = ref)} />
      </FormGroup>
       <Button color="info">Go !</Button>
      </Form >
      </section>
      <section>
       <span> {this.state.output.toString()} </span>
       
      </section>
      </div>
    ) 
  }
}