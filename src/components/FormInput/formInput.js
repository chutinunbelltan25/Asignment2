import React from 'react';
import { Style, Validation } from "./formInput.style";
const FormInput = (props) => {
        const {  handleSubmit, handleChange, username, password, alertUsername, alertPassword, ErrorValidationLabel} = props;
        
    return (
        <Style>
            <br/>
            <form 
            onSubmit={handleSubmit}
            noValidate
            >
            <div className='user-name'>
              <input 
              type='text' 
              value={username}
              onChange={handleChange}
              name="username"
              placeholder="Username"
              required
              />
            </div>
            <br/>
            <Validation>
            {/* {ErrorValidationLabel} */}
            </Validation>
            <div className='password'>
              <input 
              required
              value={password}
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Password"
               />
            </div>
            <br/>
            <Validation>
            {/* <ErrorValidationLabel
            txtLbl="Password is incorrect"
            alert={alertPassword}
            /> */}
            </Validation>
            <br/>
            <div className='submit'>
              <button onClick={handleSubmit}>Login</button>
            </div>
          </form>
        </Style>
    )
}
export default FormInput
