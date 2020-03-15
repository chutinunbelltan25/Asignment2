import React from 'react'
import { Friendlist, Navber, Footer, Myfriend, Time, Detail, Buttonback, ButtonSearch } from "./friendnew.style";

const FriendNew = (props) => {
    const { 
        logout, 
        showSearch, 
        display, 
        oldMessage, 
        backToMessage, 
        friendList, 
        findMessage, 
        deleteFriend, 
        inputsearch, 
        name 
        } = props;
    let showUpdate = (item) =>{
       let oldMessageArray = oldMessage.filter( data => data.owner_id === item.id ? data : undefined)
        if (oldMessageArray.length < 1 ){
            return "Your friends is accepted"
        } else {
            return 'Last message at  ' + oldMessageArray[oldMessageArray.length-1].day
        }
    }
    return (
        <div>
            <Navber>
                <div><Buttonback onClick={backToMessage}>back</Buttonback></div>
                <div></div>
                <div >
                <input 
                style = {{display : display }}
                type='text'
                name='name'
                value={name}
                onChange={inputsearch}
                />
                </div>
                <div>
                <ButtonSearch onClick={showSearch}>Search Friend</ButtonSearch>
                </div>

            </Navber>
            <Myfriend >
            {friendList.map((item) => ( 
            <Friendlist key={item.id}> 
            <Detail>
                <img 
                src={item.photo} 
                onClick={()=>findMessage(item.id)}
                alt='' 
                />
            </Detail>
            <div>
                <h1>{item.name}</h1>
               
            <Time>
                {showUpdate(item)}
            </Time>
            </div>
            <button onClick={()=>deleteFriend(item.id)}>Delete</button>
            </Friendlist>
            ))}
            </Myfriend>
            <Footer >
            <button onClick={logout}>Log out</button>
          </Footer>
        </div>
    )
}
export default FriendNew