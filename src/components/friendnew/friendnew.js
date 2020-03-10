import React from 'react'
import { Friendlist, Navber, Footer, Myfriend, Time, Detail } from "./friendnew.style";

const FriendNew = (props) => {
    const { logout } = props;
    return (
        <div>
            <Navber>
            <button>Search Friend</button>
            </Navber>
            <Myfriend >
            <Friendlist > 
            <Detail>
                <img src='https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555925520/shape/mentalfloss/800px-princesslineup.jpg' alt='' />
            </Detail>
            <div>
                <h1>JOM</h1>
                <Time>status Time</Time>
            </div>
            <button>Delete</button>
            </Friendlist>
            <Friendlist > 
            <Detail>
                <img src='https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555925520/shape/mentalfloss/800px-princesslineup.jpg' alt='' />
            </Detail>
            <div>
                <h1>JOM</h1>
                <Time>status Time</Time>
            </div>
            <button>Delete</button>
            </Friendlist>
            </Myfriend>
            <Footer >
            <button onClick={logout}>Log out</button>
          </Footer>
        </div>
    )
}
export default FriendNew