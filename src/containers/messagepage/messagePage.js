import React from "react";
import { Message } from "../../components";
import { Redirect } from 'react-router-dom'
import moment from 'moment'
class MessagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friendUpdated: [],
      message: [],
      oldMessage: [],
      text: "",
      change: false,
      stop: '',
      display: 'none',
      time: moment().format('LT')
    };
  }

  componentDidMount() {
    const messagetext = JSON.parse(localStorage.getItem("Newmessage")) || []
    this.setState({ 
      message: messagetext
    }, this.myMessage);
  }

  myMessage = () => {
    const {message} = this.state
    this.setState({
      message
    })
    localStorage.setItem('Newmessage',JSON.stringify(message))
    console.log(message);
    
  }
  showDelete = (item,index) => {
    const { text, message, stop, change, display  } = this.state
    console.log(this.state);
    message.map( (item,index2) => index == index2 ?  
    this.setState({ 
      message: message,
      text: text,
      stop: stop,
      change: change,
      time: moment().format('LT'),
      display : "block" 
    })
     : 
    this.setState({ 
      message: message,
      text: text,
      stop: stop,
      change: change,
      time: moment().format('LT'),
      display: "none"
    }) 
    )
    console.log(this.state)
    }
  
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };


  handleSubmit = e => {
    const { text, message, stop, change, display, friendUpdated } = this.state;
    if (text !== ''){
    message.push({
      text: text,
      stop: stop,
      change: change,
      display: display,
      time: moment().format('LT')
    });
    const friendStatus = JSON.parse(localStorage.getItem("message"));
    // friendStatus.map(item => {if(item.id === id) {
    //   let updateItem = {...item, stastus: 'Last message at  ' + moment().format('l')}
    //   console.log(updateItem);
    //   return  
    // } else {
    //  return item
    // }})
      
      
    console.log(friendStatus);
    // localStorage.setItem('friend',JSON.stringify(this.state.friendUpdated))
  }
    if (message.length > 18) {
        this.setState({
          message: message,
          text: "",
          stop: 'Stop !! I got it please stop',
          change: change,
          display: display,
          time: moment().format('LT')
        });
        localStorage.setItem('Newmessage',JSON.stringify(this.state.message))
    }
    else {
      this.setState({
        message: message,
        text: "",
        stop: '',
        change: change,
        display: display,
        time: moment().format('LT')
      });
      localStorage.setItem("Newmessage", JSON.stringify(this.state.message));
      console.log(this.state.message);
    }
  };
  deleteMessage = e => {
    const {message} = this.state
      message.map()
      
  }

  backToFriend = e => {
    this.props.history.push("/Friend");
  };
  
  render() {
    const token = localStorage.getItem('login')
    return(
      <div>
        {
         !token && <Redirect to="/login"/> 
        }
        <Message
          text={this.state.text}
          message={this.state.message}
          display={this.state.display}
          showDelete={this.showDelete}
          backToFriend={this.backToFriend}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          replyMessage={this.replyMessage}
          scrollWin={this.scrollWin}
        />
      </div>
    )
  }
}
export default MessagePage;

