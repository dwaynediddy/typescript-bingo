import React from 'react'
import { Link } from 'react-router-dom'
import '../login.css'

const Login = () => {

    const handleLogin = (e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
    }

  return (
    <div className="loginContainer">
        <h3>Login</h3>
        <form className='formContainer'>
            <label className='loginLabel'>Enter Teams Name</label>
            <input 
                type='text'
                name='name'
                placeholder='Team Name'
                className="loginInput"
                />
            <label className='loginLabel'>Enter Teams Password</label>
            <input 
                type='text'
                name='password'
                placeholder='Enter Password'
                className="loginInput"
            />
        </form>
            <Link to='/bingo'>
                <button className='loginButton' onSubmit={handleLogin}>Login</button>
            </Link>
    </div>
    
  )
}

export default Login