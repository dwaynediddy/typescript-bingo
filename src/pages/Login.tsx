import React from 'react'
import { Link } from 'react-router-dom'
import '../login.css'

const Login = () => {
    const handleLogin = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        const { name, password } = e.target as typeof e.target & {
            name: {value: string}
            password: {value: string}
        }
        console.log(name.value, password.value)
    }

  return (
    <div className="loginContainer">
        <h3>Login</h3>
        <form className='formContainer'
            onSubmit={handleLogin}
        >
            <label className='loginLabel'>Enter Teams Name</label>
            <input 
                type='text'
                name='name'
                placeholder='Team Name'
                className="loginInput"
                />
            <label className='loginLabel'>Enter Teams Password</label>
            <input 
                type='password'
                name='password'
                placeholder='Enter Password'
                className="loginInput"
            />
        </form>
            <Link to='/bingo'>
                <button className='loginButton' type='submit'>Login</button>
            </Link>
    </div>
    
  )
}

export default Login