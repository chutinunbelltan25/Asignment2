import React from 'react';
import { FormInput } from "../../components";
import { Redirect } from 'react-router-dom';
import moment from 'moment'


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      alertUsername: false,
      password: "",
      alertPassword: false,
      friendList: [
        {
          id: "a0b1-c2d3-e4f5",
          name: "Alice",
          photo: 'https://i.pinimg.com/originals/26/94/92/2694922c532a25e46e7125c62caf9c1f.jpg',
          status: 'Last message at  ' + moment().format('l'),
          date: '12/2/2020 07:00:00'
        },
        {
          id: "a4b5-c6d7-e8f9",
          name: "Bob",
          photo: 'https://i.pinimg.com/originals/9a/a8/ca/9aa8ca30c2b4b225702a5c580374dd98.jpg',
          status: 'Last message at  ' + moment().format('l'),
          date: '12/2/2020 07:00:00'
          
        },
        {
          id: "a9b0-c1d2-e3f4",
          name: "Carter",
          photo: 'https://i.pinimg.com/originals/17/6c/57/176c57ed3f305ec6ffd91b5b199b9927.png',
          status: "Your friends is accepted",
          date: '12/2/2020 07:00:00'
        }
      ],
      message: [
        {
          id: "m0n1-o2p3-q4r5",
          owner_id: "a0b1-c2d3-e4f5",
          text: "Hi :D",
          change: false,
          stop: '',
          display: 'none',
          time: '12.00 PM',
        },
        {
          id: "m0n1-o2p3-q4r5",
          owner_id: "a0b1-c2d3-e4f5",
          text: "Hi Alice, I'm Bell",
          change: false,
          stop: '',
          display: 'none',
          time: moment().format('LT'),
          day: '12/2/2020'
        },
        {
          id: "m0n1-o2p3-q4r5",
          owner_id: "a4b5-c6d7-e8f9",
          text: "Hi Bob, I'm belle",
          change: false,
          stop: '',
          display: 'none',
          time: moment().format('LT')
        },{
          id: "m0n1-o2p3-q4r5",
          owner_id: "a4b5-c6d7-e8f9",
          text: "How are you",
          change: false,
          stop: '',
          display: 'none',
          time: moment().format('LT'),
          day: '12/2/2020'
        },

      ],
      token:localStorage.getItem('login'),
      }
      
    }

    componentDidMount() {
      const { friendList, message } = this.state
      localStorage.getItem('friend',JSON.stringify(this.state.friendList))
      localStorage.getItem('oldMessage',JSON.stringify(this.state.message))
      this.setState({ 
          friendList,
          message
       });
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

    errorValidateUsername = ( validatePass, notValid) => {
    const { alertUsername } = this.state
    if (alertUsername === false){
      return <div>{notValid}</div>
    } else {
      return <div>{validatePass}</div>
    }
    }

    errorValidatePassword = ( validatePass, notValid) => {
    const { alertPassword } = this.state
    if (alertPassword === false){
      return <div>{notValid}</div>
    } else {
      return <div>{validatePass}</div>
    }
    }
    
    handleSubmit = e => {
      e.preventDefault();
    if (this.validateForm()) {
      const {
        username,
        password,
        alertUsername,
        alertPassword
      } =this.state
      this.setState({
        username,
        password,
        alertUsername,
        alertPassword
      })
      localStorage.setItem(
        'login',this.state
        )
        if (localStorage.getItem("login") === this.props.history.push("/Friend")){
          this.props.history.push("/login")
        }
    }
  };

  render() {
    const { token } = this.state
    return (
      <div>
        {
          token && <Redirect to="/Friend"/>
        }
          <FormInput
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          username={this.state.username}
          password={this.state.password}
          alertUsername={this.state.alertUsername}
          errorValidateUsername={this.errorValidateUsername}
          errorValidatePassword={this.errorValidatePassword}
          />    
        
      </div>
    )
  }
}
export default Login