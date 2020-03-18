import React from "react";
import { Message } from "../../components";
import { Redirect } from 'react-router-dom'
import moment from 'moment'
class MessagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mixMessage: [],
      friendUpdated: [],
      message: [],
      friend: [],
      oldMessage: [],
      owner_id: '',
      text: "",
      change: false,
      stop: '',
      display: 'none',
      time: '',
      sec: '',
      day: '',
      token:localStorage.getItem('login'),
    };
  }

  async componentDidMount() {
    const messageText = await JSON.parse(localStorage.getItem("newMessage")) 
    const friendStatus = await JSON.parse(localStorage.getItem("message"));
    const update = await JSON.parse(localStorage.getItem("oldMessage"));
    
    this.setState({ 
      mixMessage: update,
      message: messageText,
      friend: friendStatus
    });
    localStorage.getItem('newMessage',JSON.stringify(this.state.message))
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
      const {message, mixMessage} = this.state
      this.setState({
        mixMessage: message
      })
      localStorage.setItem('oldMessage',JSON.stringify(mixMessage.concat
        (message 
          [message.length-1]
        )))
    }
  
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };


  handleSubmit = async e => {
    const { 
      text, 
      message, 
      stop, 
      change, 
      display, 
      friend, 
      day 
    } = this.state;

    if (text !== ''){
    message.push({
      owner_id: friend.id,
      text: text,
      stop: stop,
      change: change,
      display: display,
      time: moment().format('LT'),
      day: moment().format('l'),
      sec: moment().format(),
    });
  }

    if (message.length > 18) {
        this.setState({
          text: "",
          stop: 'Stop !! I got it please stop',
          change: change,
          display: display,
          time: moment().format('LT'),
          day: day,
          sec: moment().format(),
        });
        const {message, mixMessage} = this.state
        const messageForOld = localStorage.setItem('newMessage',JSON.stringify(mixMessage.concat
          (message 
            [message.length-1]
          )))
        localStorage.setItem('oldMessage',JSON.stringify(messageForOld))
    }
    else {
      this.setState({
        message: message,
        text: "",
        stop: '',
        change: change,
        display: display,
        time: moment().format('LT'),
        day: day,
        sec: moment().format(),
      });

      const messageForOld = localStorage.setItem("newMessage", JSON.stringify(this.state.mixMessage.concat
        (message 
          [message.length-1]
        )));
      localStorage.setItem('oldMessage',JSON.stringify(messageForOld))
    }
      let messageSort = message.filter( data => data.owner_id === friend.id ? data : undefined)
      let date = messageSort[messageSort.length - 1].sec
      const friendSort = await JSON.parse(localStorage.getItem("friend"));
      friendSort.map(item => item.id === friend.id ? item.date = date : item )
      friendSort.sort((before,after) => {
        return new Date(after.date) - new Date(before.date)
      })
      this.setState({
        friendUpdated: friendSort
      })
      localStorage.setItem("friend", JSON.stringify(friendSort))
  }
  
  backToFriend = e => {
    this.props.history.push("/Friend");
  };
  
  render() {
    const { token } = this.state
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
        />
      </div>
    )
  }
}
export default MessagePage;

