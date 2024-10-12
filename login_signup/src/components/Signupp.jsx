import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Signupp() {
    const [username,setUsername] = useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail] = useState('')

  return (
    <div className='login_container'>
        <div className='inner_container'>
            <h4>Signup</h4>
            <form>
                <input className='all_inputs' type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <input className='all_inputs' type='number' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input className='all_inputs' type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                
                <button className='s_button'>Signup</button>
                <Link to="/">
                    <button className='login_button'>Login</button>
                </Link>
            </form>
        </div>
    </div>
  )
}

export default Signupp