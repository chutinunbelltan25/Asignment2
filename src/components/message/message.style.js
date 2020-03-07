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
export const ReplyStopMessage = styled.div `
    display: grid;
    justify-items: center;
    background-color: #93E2D5;
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

export const Navber = styled.div `
    display: grid;
    justify-items: flex-start;
    width: 100%;
    height: 8vh;
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
export const Space = styled.div `
    width: 100%;
    height: 40px;
    background-color: transparent;
`

export const Footer = styled.div `
    display: grid;
    grid-template-columns: 80% 20% ; 
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
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