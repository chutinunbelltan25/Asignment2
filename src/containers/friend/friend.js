import React from 'react'
import { FriendNew } from '../../components'
import moment from 'moment'

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            friend: [],
            name: '',
            photo: '',
            status: '',
            show: false,
            time: 'Last message at  ' + moment().format('l'),
        }
    }

    
    // deleteFriend = () => {

    // }
    // showDelete = () => {
    //     This.state.display == "none" ? 
    //     This.setState({ display : "block" }) : 
    //     this.setState({ display : "none"})
    // }

   

    logout = e => {
        localStorage.clear();
        this.props.history.push("/login");
      };

    render() {
        return(
            <div>
                <FriendNew
                logout={this.logout}
                />
            </div>
        )
    }
}
export default Friend