import React from 'react';
import { FormInput } from "../../components";
import { Redirect } from 'react-router-dom';


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

    ErrorValidationUsername = ( validatePass, notvalid) => {
    const { alertUsername } = this.state
    return alertUsername === false ? (
      <div>{notvalid}</div>
      ) : <div>{validatePass}</div>;
    }

    ErrorValidationPassword = ( validatePass, notvalid) => {
    const { alertPassword } = this.state
    return alertPassword === false ? (
      <div>{notvalid}</div>
      ) : <div>{validatePass}</div>;
    }
    handleSubmit = e => {
      e.preventDefault();
    if (this.validateForm()) {
      const {username,password,alertUsername,alertPassword} =this.state
      this.setState({
        username,
        password,
        alertUsername,
        alertPassword
      })

      localStorage.setItem(
        'login',this.state
        )
        if (localStorage.getItem("login") === this.props.history.push("/MessagePage")){
          this.props.history.push("/login")
        }
    }
  };

  render() {
    const token = localStorage.getItem('login')
    return (
      <div>
        {
          token && <Redirect to="/MessagePage"/>
        }
          <FormInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          username={this.state.username}
          password={this.state.password}
          alertUsername={this.state.alertUsername}
          ErrorValidationUsername={this.ErrorValidationUsername}
          ErrorValidationPassword={this.ErrorValidationPassword}
          />    
        
      </div>
    )
  }
}
export default Login