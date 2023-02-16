import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import wave from '../../Assets/login-wave.svg'
import './index.css'

const Login = () => {
  const history = useHistory()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChange = (event) => {
    if (event.target.name === 'email') {
      setEmail(event.target.value)
    } else {
      setPassword(event.target.value)
    }
  }

  const onSubmit = async (event) => {
    event.preventDefault()

    const sc = document.createElement('script')
    sc.src = 'https://arvi.postaffiliatepro.com/scripts/29jk0fhxkw'
    sc.text = "PostAffTracker.setAccountId('default1'); var sale = PostAffTracker.createAction('accountSetup'); sale.setTotalCost('120.50'); sale.setOrderID('ORD_12345XYZ'); sale.setProductID('test product'); sale.setStatus('A'); PostAffTracker.register();"
    sc.id = 'pap_x2s6df8d'
    sc.type = 'text/javascript'

    document.body.appendChild(sc)



    const data = {
      email,
      password
    }

    fetch('https://lazy-reader-backend.herokuapp.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((res) => {
        console.log(res)
        console.log(res)
        if (res.status === 200) {
          history.push('/search')
        }
      })
  }

  return (
    <div>
      <div className='login-header'>
        <h1 style={{ color: '#0099ff' }} className='title'>Lazy Reader</h1>
      </div>
      <div style={{ marginTop: '50px' }}>
        <form action="/search" className="sign-in-form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" name='email' onChange={handleChange} placeholder="Email" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"></i>
            <input type="password" name='password' onChange={handleChange} placeholder="Password" />
          </div>
          <p style={{ margin: '10px 0' }}><a href='/' style={{ textDecoration: 'none' }}>Forgot password?</a></p>
          <input type="submit" onClick={onSubmit} value="Login" className="btn solid" />
          <p className="social-text">
            Do not have an account?
            <a href='/register' style={{ textDecoration: 'none', cursor: 'pointer', color: '#0099ff' }}> Sign Up</a>
          </p>
        </form>
      </div>
      <img alt='wave' src={wave} className='login-wave' />

    </div>
  )
}

export default Login
