import React from 'react';
import { YourMessage, Navber, Footer, Chat, ReplyStopMessage, Time, TimeReply } from "./message.style";
const Message = (props) => {
        const { text, message, handleChange, handleSubmit, logout, scrollWin } = props;        
    return (
        <div>
            <Navber>
            <button onClick={logout}>Log out</button>
            </Navber>
            <Chat >
            {message.length !== 0 && message.map((item, index) => (
            <ul>
            <YourMessage key={index} > 
                    {item.text}
            </YourMessage>
            <Time>{item.time}</Time>
            </ul> 
            ))}
            {message.map(item => {
            if (item.stop !== ""){
            return (
            <ul>
            <ReplyStopMessage>{item.stop}</ReplyStopMessage>
            <TimeReply>{item.time}</TimeReply>
            </ul>
            )}
            })}
            </Chat>
            <Footer onSubmit={handleSubmit}>
              <input 
              type='text' 
              value={text}
              onChange={handleChange}
              placeholder="Type your message here ..."
              />
              <button onClick={handleSubmit} >Send</button>
          </Footer>
          
        </div>
    )
}
export default Message

