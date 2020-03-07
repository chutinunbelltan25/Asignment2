import React from 'react';
import { YourMessage, Navber, Footer, ReplyStopMessage, Space } from "./message.style";
const Message = (props) => {
        const { text, message, handleChange, handleSubmit, logout, data, replyMessage} = props;        
    return (
        <div>
            <Navber>
            <button onClick={logout}>Log out</button>
            </Navber>
            {data.length !== 0 && data.map(item => (
            <YourMessage >
                <div>
                    {item.text}
                </div>
            </YourMessage>
            // <ReplyStopMessage >
            // <div>
            //     replyMessage( "Stop !! I got it please stop", "")
            // </div>
            // </ReplyStopMessage>
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

