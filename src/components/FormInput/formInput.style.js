import styled from "styled-components";

export const Style = styled.div `
    display: grid;
    justify-items: center;
    input {
        width: 250px;
        height: 30px;
        border-radius: 5px;
        border: ${props => props.validation ? '1px solid red' : '1px solid silver'}
    }
    button { 
        background-color: #2a9df4;
        border-radius: 5px;
        width: 80px;
        height: 40px;
        color: white;
    }
`
export const Validation = styled.div `
    margin: 5px;
    min-height: 12.5px;
    font-size: 11px;
    color: #757575;
`
