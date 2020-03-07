import React from 'react';
import { YourMessage, Navber, Footer } from "./message.style";
const Message = (props) => {
        const { } = props;
    return (
        <div>
            <Navber>
            <button>Log out</button>
            </Navber>
            <YourMessage>
                <div>
                <span>gooooo</span>
                </div>
                <span>gooooo</span>
            </YourMessage>
            <Footer>
              <input 
              type='text' 
              name='Message'  
              noValidate
              placeholder="Type your message here ..."
              />
              <button>Send</button>
          </Footer>
        </div>
    )
}
export default Message
