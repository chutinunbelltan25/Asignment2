import React from 'react';
import { Validation } from "./login.style";
import { FormInput, Message } from "../../components";


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      alertUsername: false,
      password: "",
      alertPassword: false,
      }
    }
    
    validateForm = () => {
      let { username, password, alertUsername, alertPassword } = this.state;
      let notInvalid = true;
  
      if (username !== "username") {
        alertUsername = true;
        notInvalid = false;
      } else {
        alertUsername = false;
      }
  
      if (password !== "123456789") {
        alertPassword = true;
        notInvalid = false;
      } else {
        alertPassword = false;
      }
  
      this.setState({ 
        alertUsername, 
        alertPassword,
        username,
        password,
      });
      return notInvalid;      
    };

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    ErrorValidationLabel = (alertUsername, validatePass, notvalid) => {
      console.log("hello")
    return alertUsername !== false ? (
      <div>{notvalid}</div>
      ) : <div>{validatePass}</div>;
    }

    ErrorValidationLabel = (alertPassword, validatePass, notvalid) => {
      console.log("hello")
    return alertPassword !== false ? (
      <div>{notvalid}</div>
      ) : <div>{validatePass}</div>;
    }
      
    
    handleSubmit = e => {
      e.preventDefault();
      console.log(this.state);
    if (this.validateForm()) {
      const {username,password,alertUsername,alertPassword} =this.state
      this.state.push({
        username,
        password,
        alertUsername,
        alertPassword
      })
      this.setState({
        username,
        password,
        alertUsername,
        alertPassword
      })
      localStorage.setItem(this.state)
    }
    console.log(this.state.username);
  };

  render() {

    return (
      <div>
          <FormInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          username={this.state.username}
          password={this.state.password}
          ErrorValidationLabel={this.ErrorValidationLabel}
          />    
        
      </div>
    )
  }
}
export default Login