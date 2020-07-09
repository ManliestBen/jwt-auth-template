import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';

class SignupForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConf: ''
  };

  handleChange = (e) => {
    this.props.updateMessage('');
    this.setState({
      // Using ES2015 Computed Property Names
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(this.state);
      this.props.handleSignupOrLogin();
      this.props.history.push('/');
    } catch (err) {
      // Invalid user data (probably duplicate email)
      this.props.updateMessage(err.message);
    }
  }

  isFormInvalid() {
    return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <form className="col s12" autocomplete="off" onSubmit={this.handleSubmit} >
          <div className="row">
            <div className="input-field col s12">
              <input type="text" autocomplete="off" className="active" id="name" value={this.state.name} name="name" onChange={this.handleChange} />
              <label htmlFor="name">Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="text" autocomplete="off" className="active" id="email" value={this.state.email} name="email" onChange={this.handleChange} />
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="password" autocomplete="off" className="active" id="password" value={this.state.password} name="password" onChange={this.handleChange} />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input type="password" autocomplete="off" className="active" id="confirm" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
              <label htmlFor="confirm">Confirm Password</label>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-12 text-center">
              <button className="btn green" disabled={this.isFormInvalid()}>Sign Up<i class="material-icons right">person_add</i></button>&nbsp;&nbsp;
              <Link className="btn red" to='/'>Cancel<i class="material-icons right">cancel</i></Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
