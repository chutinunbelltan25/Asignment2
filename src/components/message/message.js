import React from 'react';
import { YourMessage, Navber, Footer, ReplyStopMessage, Space, Time } from "./message.style";
const Message = (props) => {
        const { text, message, handleChange, handleSubmit, logout, replyMessage} = props;        
    return (
        <div>
            <Navber>
            <button onClick={logout}>Log out</button>
            </Navber>
            {message.length !== 0 && message.map((item, index) => (
            <div>
            <YourMessage key={index} > 
                <div>
                    {item.text}
                </div>
            </YourMessage>
            <Time>{item.time}</Time>
            {/* <ReplyStopMessage >
            <div>
                asas{/* replyMessage( "Stop !! I got it please stop", "") */}
            {/* </div> */}
            {/* </ReplyStopMessage> */}
            </div>
            ))}
            <Space>
            </Space>
            <Footer onSubmit={handleSubmit}>
              <input 
              type='text' 
              value={text}
              onChange={handleChange}
              placeholder="Type your message here ..."
              />
              <button onClick={handleSubmit}>Send</button>
          </Footer>
        </div>
    )
}
export default Message

