import React from 'react';
import { Message } from "../../components";

class MessagePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          message: [],
          text: '',
        }
      }

    handleChange = e => {
        this.setState({
          text: e.target.value
        })
        console.log(e.target.value);
    }
    handleSubmit = e => {
        const { text, message } = this.state
        message.push({
            text: text
          })
        this.setState({
            message: message,
            text: ''
        })
        localStorage.setItem("text", JSON.stringify(this.state.message))
        console.log(this.state);
        const data = JSON.parse(localStorage.getItem("text")) 
        console.log(data);

      }

    // replyMessage = (stopMessage, notstopMessage) => {
    //     const { message } =this.state
    //     message.length(
    //         item => item.text > 21
    //     ) ? (
    //     <div>{stopMessage}</div>
    //     ) : <div>{notstopMessage}</div>
    // }

    logout = e => {
        localStorage.clear()
        this.props.history.push("/login")
    }
    render() {
        return (
          <div>
              <Message 
              text={this.state.text}
              message={this.state.message}
              data={this.data}
              logout={this.logout}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              replyMessage={this.replyMessage}
              />
          </div>
        )
      }
    }
    export default MessagePage