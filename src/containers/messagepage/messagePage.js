import React from "react";
import { Message } from "../../components";
import moment from 'moment'
class MessagePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: [],
      text: "",
      stop: false,
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
    const { text, message, stop } = this.state;
    message.push({
      text: text,
      stop: stop,
      time: moment().format('LT')
    });
    if (message.length > 20) {
      alert()
    }
    else {
      this.setState({
        message: message,
        text: "",
        stop: false,
        time: moment().format('LT')
      });
      localStorage.setItem("text", JSON.stringify(this.state.message));
      console.log(this.state.message);
    }
  };

  // replyMessage = () => {
  //     const { stop } =this.state
  //     (stop === true
  //     ) ? (
  //     <div>{stopMessage}</div>
  //     ) : <div>{notstopMessage}</div>
  // }

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
