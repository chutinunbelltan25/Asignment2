import React from 'react';
import { Validation } from "./login.style";
import { FormInput, Message } from "../../components";


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      obj: [],
      username: "",
      alertUsername: false,
      password: "",
      alertPassword: false,
      validateUser:"Username is incorrect"
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
      // console.log(validateForm)
      
    };

    handleChange = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    // ErrorValidationLabel = (alertUsername) =>
    // alertUsername !== true ? (
    //   {validateUser}
    //   ) : null;
    
    handleSubmit = e => {
      e.preventDefault();
    if (this.validateForm()) {
      const {obj,username,password,alertUsername,alertPassword} =this.state
      obj.push({
        username,
        password,
        alertUsername,
        alertPassword
      })
      // this.setState({
      //   username: this.username,
      //   alertUsername: false,
      //   password: this.password,
      //   alertPassword: false
      // })
      // localStorage.setItem(obj)
    }
    console.log(this.state.obj);
    console.log(e);
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