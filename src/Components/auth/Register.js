import React, { useState } from 'react'
import { useHistory } from 'react-router'
import './index.css'
import wave from '../../Assets/login-wave.svg'

const Register = () => {
  const history = useHistory()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [disabled, setDisabled] = useState(false)

  const handleChange = (event) => {
    setError('')
    if(event.target.name === 'username') {
      setUsername(event.target.value)
    } else if (event.target.name === 'email') {
      setEmail(event.target.value)
    } else {
      setPassword(event.target.value)
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    setDisabled(true)
    console.log(username)
    const data = {
      email,
      password
    }

    fetch('https://lazy-reader-backend.herokuapp.com/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
      console.log(res)
      if(res.status === 200) {
        history.push('/search')
      } else {
        setError(res)
        setDisabled(false)
      }
    })
  }

  return(
    <div>
      <div className='login-header'>
        <h1 style={{ color: '#0099ff' }} className='title'>Lazy Reader</h1>
      </div>
        <form action="/search" className="sign-up-form">
        <h2 className="title">Sign up</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input type="text" name='username' onChange={handleChange} placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fas fa-envelope"></i>
          <input type="email" name='email' onChange={handleChange} placeholder="Email" />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input type="password" name='password' onChange={handleChange} placeholder="Password" />
        </div>
        <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
        <input type="submit" onClick={onSubmit} className="btn" value="Sign up" disabled={disabled} />
        <p className="social-text">
          Already have an account? 
          <a href='/login' style={{textDecoration: 'none', cursor: 'pointer', color: '#0099ff' }}> Sign In</a>
        </p>
      </form>
      <img alt='wave' src={wave} className='login-wave'/>
    </div>
  )
}

export default Register
