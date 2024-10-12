import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import './Signupp.css'

function Login() {
    const [username,setUsername] = useState('')
    const [lpassword,setPassword] = useState('')


  return (
    <div className='login_container'>
        <div className='inner_container'>
            <h2 className='heading'>Login Page</h2>
            <form>
                <input className='all_inputs' type='text' value={username} onChange={(e)=> setUsername(e.target.value)} /><br></br>
                <input className='all_inputs' type="text" value={lpassword} onChange={(e)=> setPassword(e.target.value)}/>
                
                    <button className='login_button' type='submit'>Login</button>
                <Link to="/signuppp">
                <button className='s_button' type="submit">Signup</button>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default Login