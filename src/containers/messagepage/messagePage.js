import React from "react";
import { Message } from "../../components";
import { Redirect } from 'react-router-dom'
import moment from 'moment'
class MessagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mixmessage: [],
      friendUpdated: [],
      message: [],
      friend: [],
      oldMessage: [],
      owner_id: '',
      text: "",
      change: false,
      stop: '',
      display: 'none',
      time: moment().format('LT'),
      day: ''
    };
  }

  async componentDidMount() {
    const messagetext = await JSON.parse(localStorage.getItem("Newmessage")) || []
    const friendStatus = await JSON.parse(localStorage.getItem("message"));
    const update = await JSON.parse(localStorage.getItem("oldmessage"));
    
    this.setState({ 
      mixmessage: update,
      message: messagetext,
      friend: friendStatus
    });
    localStorage.setItem('Newmessage',JSON.stringify(this.state.message))
  }


  hideDelete = () => {
    this.state.message.map(item => 
      item.display === 'block' ? item.display = 'none' : 'none')
    this.forceUpdate()

  }

  showDelete = (item,index) => {
    let showDeleted = item.display === 'none' ? 'block' : 'none'
    item.display = showDeleted
    this.forceUpdate()
    }
  
  deleteMessage = (item,index) => {
    this.state.message.map((item,indexMessage) => {
      if (indexMessage === index ) {
        return (
        item.text = 'your message was deleted.',
        item.change = true,
        item.display = 'none'
        )
      } else {
        return item
      }
      })
      const {message, mixmessage} = this.state
      localStorage.setItem('oldmessage',JSON.stringify(mixmessage.concat
        (message 
          [message.length-1]
        )))
    }
  
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };


  handleSubmit = e => {
    const { text, message, stop, change, display, friend, day } = this.state;
    if (text !== ''){
    message.push({
      owner_id: friend.id,
      text: text,
      stop: stop,
      change: change,
      display: display,
      time: moment().format('LT'),
      day: moment().format('l')
    });
  }
    if (message.length > 18) {
        this.setState({
          text: "",
          stop: 'Stop !! I got it please stop',
          change: change,
          display: display,
          time: moment().format('LT'),
          day: day
        });
        const {message, mixmessage} = this.state
        localStorage.setItem('Newmessage',JSON.stringify(message))
        localStorage.setItem('oldmessage',JSON.stringify(mixmessage.concat
          (message 
            [message.length-1]
          )))
    }
    else {
      this.setState({
        message: message,
        text: "",
        stop: '',
        change: change,
        display: display,
        time: moment().format('LT'),
        day: day
      });
      localStorage.setItem("Newmessage", JSON.stringify(this.state.message));
      localStorage.setItem('oldmessage',JSON.stringify
      (this.state.mixmessage.concat
        (message 
          [message.length-1]
        )))
    }
  };
  
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
          hideDelete={this.hideDelete}
          text={this.state.text}
          deleteMessage={this.deleteMessage}
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

