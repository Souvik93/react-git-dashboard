import React, {Component} from 'react';
import {getUserData} from './git-service';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import ReactJson from 'react-json-view';
import UserProfile from './UserProfile';
import RepoDetails from './RepoDetails';
import Spinner from './Spinner';

export class Home extends Component {
  constructor() {
     this.state = {output :{data: ''},
     userName: '',
     isPending: false
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
  this.setState({isPending: true});
  getUserData(this._input.value).then(resp => {
    console.log("Hey There !! From getUserDetails Method");
    console.log(resp.data);
    this.setState({
      output: resp,
      isPending: false});
  })
  .catch(err => {
    alert("Sommer Error Occured While Fetching Git User Details");
    this.setState({isPending: false});
  }); 
}

handleInputChange = (event) => {
  this.setState({'userName': event.target.value})
}

  render() {
    return (
      <div >
       <Spinner isVisible={this.state.isPending}/>
      <div className="row">
      <div className="col-sm-4">
      <section className="con-home">
      <Form onSubmit={this.handleSubmit}>
       <FormGroup>
       <input type="text" className="form-control" value={this.state.userName} onChange={this.handleInputChange} name="userName" id="uName" placeholder="Enter A Git Hub User" ref={ref => (this._input = ref)} />
      </FormGroup>
       <Button color="info" disabled={!this.state.userName}>Go !</Button>
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
