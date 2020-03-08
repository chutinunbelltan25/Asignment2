import React from "react";
import { Message } from "../../components";
import { ReplyStopMessage } from './massagePage.style'
import moment from 'moment'
class MessagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      text: "",
      notStop: '',
      stop: '',
      time: moment().format('LT')
    };
  }

  componentDidMount() {
    const message = JSON.parse(localStorage.getItem("text")) || []
    this.setState({ message });
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
    console.log(e.target.value);
  };

  handleSubmit = e => {
    const { text, message, stop, notStop } = this.state;
    message.push({
      text: text,
      stop: stop,
      notStop: notStop,
      time: moment().format('LT')
    });
    if (message.length > 19) {
        this.setState({
          message: message,
          text: "",
          stop: 'Stop !! I got it please stop',
          notStop: notStop,
          time: moment().format('LT')
        });
        localStorage.setItem('text',JSON.stringify(this.state.message))
    }
    else {
      this.setState({
        message: message,
        text: "",
        stop: '',
        notStop: notStop,
        time: moment().format('LT')
      });
      localStorage.setItem("text", JSON.stringify(this.state.message));
      console.log(this.state.message);
    }
  };

  logout = e => {
    localStorage.clear();
    this.props.history.push("/login");
  };
  render() {
    return (
      <div>
        <Message
          text={this.state.text}
          message={this.state.message}
          logout={this.logout}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          replyMessage={this.replyMessage}
        />
      </div>
    );
  }
}
export default MessagePage;
