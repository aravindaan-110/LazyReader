import React from 'react'
import '../App.css'

const Header = () => {
  return (
    <div>
      <div className='background'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="2" d="M0,320L80,277.3C160,235,320,149,480,149.3C640,149,800,235,960,250.7C1120,267,1280,213,1360,186.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
      </div>
      <div className='header'>
        <h1 style={{ color: 'white' }} className='title'>Lazy Reader</h1>
        <a href='/' style={{ color: 'white' }} className='logout'>Logout</a>
      </div>
    </div>
  )
}

export default Header
