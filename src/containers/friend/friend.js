import React from 'react'
import { FriendNew } from '../../components'
import { Redirect } from 'react-router-dom'
import moment from 'moment'

class Friend extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataBase: [],
            friendList: [],
            oldMessage: [],
            display: 'none',
            name: '',
        }
    }

    newFriend = () => {
      const {friendList, dataBase, oldMessage} = this.state
      this.setState({
        friendList,
        dataBase,
        oldMessage
      })
      
    }

    componentDidMount() {
        const myFriend = JSON.parse(localStorage.getItem("friend"));
        const oldMessageTo = JSON.parse(localStorage.getItem("oldmessage"));
        this.setState({ 
          dataBase: myFriend,
          friendList: myFriend,
          oldMessage: oldMessageTo
         }, this.newFriend);
      }

    showSearch = () => {
        const { display } = this.state
        display === "none" ? 
        this.setState({ display : "block" }) : 
        this.setState({ display : "none"})
     }  

    inputsearch = e => {
       this.setState({
        [e.target.name]: e.target.value 
       }, this.searchFriend)
     }

    searchFriend = () => {
      const { name } = this.state
      const search = this.state.dataBase.filter(item => {
        return item.name === name
      })
      this.setState({
        friendList: search
      })
     }

    messageto = id => {
      const messageFriend = this.state.friendList.find(item => item.id === id )
      const checkId =this.state.oldMessage.filter(item => item.owner_id === id )
      localStorage.setItem("message", JSON.stringify(messageFriend))
      localStorage.setItem("Newmessage", JSON.stringify(checkId))
      this.props.history.push("/MessagePage");
      console.log(messageFriend);
      console.log(checkId);
    }

    backToMessage = e => {
      this.props.history.push("/MessagePage");
    };

    deleteFriend = (id)=> {
        const filterDelete = this.state.friendList.filter(item => item.id !== id)
    this.setState({
        friendList: filterDelete,
    }, this.setDeletefriend)
    } 

    setDeletefriend = () => {
      const {friendList} = this.state
      this.setState({
        friendList,
    })
      localStorage.setItem("friend", JSON.stringify(friendList))
    }

    logout = e => {
        localStorage.clear();
        this.props.history.push("/login");
      };

    render() {
        const token = localStorage.getItem('login')
        return(
            <div>
                {
                 !token && <Redirect to="/login"/> 
                }
                <FriendNew
                friendFind={this.state.friendFind}
                searchFriend={this.searchFriend}
                name={this.state.name}
                inputsearch={this.inputsearch}
                deleteFriend={this.deleteFriend}
                display={this.state.display}
                showSearch={this.showSearch}
                backToMessage={this.backToMessage}
                logout={this.logout}
                messageto={this.messageto}
                friendList={this.state.friendList}
                />
            </div>
        )
    }
}
export default Friend