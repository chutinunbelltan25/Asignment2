import styled from "styled-components";

export const YourMessage = styled.div `
    display: grid;
    justify-items: center;
    background-color: #ff9999;
    border-radius: 5px;
    padding: 30px;
    position: unset;
    bottom: 10px;
    margin-left: 700px;
    margin-right: 20px;
    margin-top: 25px;
    margin-bottom: 25px;
    right: 40px;
    bottom: 70px;
    span {
        display:block;
    }
`

export const Time = styled.div `
    display: grid;
    justify-items: flex-end;
    margin-right: 20px;
    font-size: smaller;
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
        display:block;
    }
`

export const Navber = styled.div `
    display: grid;
    justify-items: flex-start;
    position: absolute;
    width: 100%;
    height: 8vh;
    overflow:hidden;
    background-color: #93E2D5;

    button { 
        background-color: #ff9999;
        border-radius: 5px;
        width: 60px;
        height: 40px;
        color: white;
        margin: 9px;
    }
`
export const Chat = styled.div `
    height: 80%;
    width: 100%;
    position: absolute;
    overflow: auto;
    top:60px; 

`

export const Footer = styled.div `
    display: grid;
    grid-template-columns: 80% 20% ; 
    position: absolute;
    bottom: 0;
    width: 100%;
    overflow:hidden;
    background-color: silver;

    input {
        margin: 5px 10px;
        height: 30px;
        font-size: 20px;
        border-radius: 5px;

    }
    button {
        margin: 5px 8px;
        color: white;
        background-color: #93E2D5;
        font-size: 15px;
        border-radius: 5px;

    }
    

`