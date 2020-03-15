import React from 'react'
import { FriendNew } from '../../components'
import { Redirect } from 'react-router-dom'

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

    async componentDidMount() {
        const myFriend = await JSON.parse(localStorage.getItem("friend"));
        const oldMessageTo = await JSON.parse(localStorage.getItem("oldmessage"));
        this.setState({ 
          dataBase: myFriend,
          friendList: myFriend,
          oldMessage: oldMessageTo
         });
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

    searchFriend = async () => {
      let { name } = await this.state
      name = name.toLowerCase()
      const search = this.state.dataBase.filter(item => ( item.name.toLowerCase().includes(name) ? item : false ))
      this.setState({
        friendList: search
      })
     }

    findMessage = id => {
      const messageFriend = this.state.friendList.find(item => item.id === id )
      const checkId =this.state.oldMessage.filter(item => item.owner_id === id )
      localStorage.setItem("message", JSON.stringify(messageFriend))
      localStorage.setItem("Newmessage", JSON.stringify(checkId))
      this.props.history.push("/MessagePage");
    }

    backToMessage = e => {
      this.props.history.push("/MessagePage");
    };

    deleteFriend = async (id) => {
        const filterDelete = await this.state.friendList.filter(item => item.id !== id)
    this.setState({
        friendList: filterDelete,
        dataBase: filterDelete
    })
    localStorage.setItem("friend", JSON.stringify(this.state.friendList))
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
                oldMessage={this.state.oldMessage}
                friendFind={this.state.friendFind}
                searchFriend={this.searchFriend}
                name={this.state.name}
                inputsearch={this.inputsearch}
                deleteFriend={this.deleteFriend}
                display={this.state.display}
                showSearch={this.showSearch}
                backToMessage={this.backToMessage}
                logout={this.logout}
                findMessage={this.findMessage}
                friendList={this.state.friendList}
                />
            </div>
        )
    }
}
export default Friend