import React from "react";
import { Message } from "../../components";
import { Redirect } from 'react-router-dom'
import moment from 'moment'
class MessagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      text: "",
      change: false,
      stop: '',
      display: 'none',
      time: moment().format('LT')
    };
  }

  componentDidMount() {
    const message = JSON.parse(localStorage.getItem("text")) || []
    this.setState({ message });
  }

  showDelete = () => {
    this.state.display == "none" ? 
    this.setState({ display : "block" }) : 
    this.setState({ display : "none"})
    }
  
  handleChange = e => {
    this.setState({
      text: e.target.value
    });
    console.log(e.target.value);
  };

  // changeMessage = (index) => {
  //   const olditems = this.state.message.slice()
  //   const data = olditems.find(object => object.index === index)
  //   const indexs = olditems.findIndex(object => object.index === index)
  //   const newitem = [
  //     ...olditems.slice(0, indexs),
  //     {
  //       ...data,
  //       text: 'Your message was deleted',
  //       change: true
  //     },
  //     ...olditems.slice(indexs + 1, olditems.length)
  //   ]
  //   console.log(newitem);

  //   this.setState({
  //     message: newitem
  //   })
  // }

  handleSubmit = e => {
    const { text, message, stop, change, display } = this.state;
    if (text !== ''){
    message.push({
      text: text,
      stop: stop,
      change: change,
      display: display,
      time: moment().format('LT')
    });}
    
    if (message.length > 18) {
        this.setState({
          message: message,
          text: "",
          stop: 'Stop !! I got it please stop',
          change: change,
          display: display,
          time: moment().format('LT')
        });
        localStorage.setItem('text',JSON.stringify(this.state.message))
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
      localStorage.setItem("text", JSON.stringify(this.state.message));
      console.log(this.state.message);
    }
  };
  deleteMessage = e => {
    
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

