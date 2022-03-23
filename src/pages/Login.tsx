import React, { useState } from 'react'


const Login = () => {
    const [username, setUsername] = useState('')


    const handleLogin = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }
  return (
    <div>
        <h3>Login</h3>
        <form>
            <label>Enter Teams Name</label>
            <input 
                type='text'
                name='name'
                placeholder='Team Name'
                />
            <label>Enter Teams Password</label>
            <input 
                type='text'
                name='password'
                placeholder='Enter Password'
            />
            <button onSubmit={handleLogin}>Login</button>
        </form>
    </div>
    
  )
}

export default Login