import styled from 'styled-components'

export const Frienddiv = styled.div `

`
export const Friendlist = styled.div `
    display: grid;
    justify-items: start;
    grid-template-columns: 20% 60% 20%;
    background-color: #f0f0f1;
    border-color: silver;
    border-style: solid;
    border-width: 1px;
    width: 100%;
    height: 120px;
    span {
        display:block;
    }
    button {
        cursor: pointer;
        width: 100px;
        height: 40px;
        margin: 40px 10px;
        background-color: #ff9999;
        border-radius: 5px;
    }
`
export const Detail = styled.div `

    img {
        cursor: pointer;
        width: 100px;
        height: 100px;
        object-fit: cover;
        object-position: 40% 1%;
        margin: 10px 20px;
}


`

export const Time = styled.div `
    display: grid;
    justify-items: flex-end;
    margin-right: 20px;
    font-size: medium;
`


export const TimeReply = styled.div `
    display: grid;
    margin-left: 20px;
    font-size: smaller;
`

export const ReplyStopMessage = styled.div `
    display: grid;
    justify-items: center;
    background-color: #93E2D5;
    border-radius: 5px;
    padding: 30px;
    position: unset;
    bottom: 10px;
    margin-left: 20px;
    margin-right: 700px;
    margin-top: 25px;
    margin-bottom: 25px;
    right: 40px;
    bottom: 70px;
    span {
        display: block;
    }
`

export const Navber = styled.div `
    display: grid;
    grid-template-columns: 10% 40% 30% 10%;
    justify-items: flex-start;
    position: absolute;
    width: 100%;
    height: 8vh;
    overflow:hidden;
    background-color: #93E2D5;

    input { 
        width: 300px;
        height: 28px;
        margin: 13px 10px;
        border-radius: 5px;
        border: 1px solid silver;
    }

`
export const ButtonSearch = styled.button `
    cursor: pointer;
    background-color: #2a9df4;
    border-radius: 5px;
    width: 120px;
    height: 40px;
    color: white;
    margin: 9px;
`

export const Buttonback = styled.button `
    cursor: pointer;
    background-color: silver;
    border-radius: 5px;
    width: 80px;
    height: 40px;
    color: black;
    margin: 9px;
`

export const Myfriend = styled.div `
    height: 90%;
    width: 100%;
    position: absolute;
    overflow: auto;
    top:60px; 

`

export const Footer = styled.div `
    display: grid;
    grid-template-columns: 10% 900% ; 
    position: absolute;
    bottom: 0;
    height: 6vh;
    width: 100%;
    overflow:hidden;
    background-color: #93E2D5;

    button {
        cursor: pointer;
        margin-top: 5px;
        margin-left: 10px;
        margin-bottom: 5px;
        color: white;
        background-color: #ff9999;
        font-size: 15px;
        border-radius: 5px;

    }
    

`