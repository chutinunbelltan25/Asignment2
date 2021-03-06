import React from 'react';
import { Style, Validation } from "./formInput.style";
const FormInput = (props) => {
        const {  handleSubmit,
                 handleChange,
                 username,
                 password,
                 alertUsername, 
                 ErrorValidationUsername, 
                 ErrorValidationPassword}
                 = props;        
    return (
        <Style  
        validation={alertUsername}
        >
            <br/>
            <form 
            onSubmit={handleSubmit}
            noValidate
            >
              <input 
              type='text' 
              value={username}
              onChange={handleChange}
              name="username"
              placeholder=" Username"
              required
              />
            <Validation>
            {ErrorValidationUsername( "Username is incorrect", "")}
            </Validation>
            <div className='password'>
              <input 
              required
              value={password}
              onChange={handleChange}
              type="password"
              name="password"
              placeholder=" Password"
               />
            </div>
            <Validation>
              {ErrorValidationPassword("Password is incorrect", "")}
            </Validation>
            <div className='submit'>
              <button onClick={handleSubmit}>Login</button>
            </div>
          </form>
        </Style>
    )
}
export default FormInput
