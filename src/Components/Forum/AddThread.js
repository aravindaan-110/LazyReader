import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../Header'

const AddThread = ({ match }) => {
  const {
    params: { courseId }
  } = match
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const history = useHistory()

  const handleClick = async () => {
    const data = {
      title,
      Comment: {
        Name: 'Rahul',
        Message: message,
        timeSent: '24 May 2021'
      }
    }
    await fetch(`https://lazy-reader-backend.herokuapp.com/course/${courseId}/forum`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((res) => {
      console.log(res)
      return res.json()
    })
    .then((data) => {
      console.log(data.id)
      history.push(data.id)
    })
  }

  const handleChange = (event) => {
    if(event.target.name === 'title')
      setTitle(event.target.value)
    else
      setMessage(event.target.value)
  }

  return (
    <div>
      <Header />
      <div className='body'>
        <h1 style={{ margin: '50px 0px', textAlign: 'center' }}>Add a new thread</h1>
        <div className='add-box'>
          <input 
            onChange={handleChange}
            value={title}
            className='title-bar'
            type='text'
            name='title'
            placeholder='Title'
          />
          <textarea
            onChange={handleChange}
            value={message}
            className='message-bar'
            name='message'
            type='text-area'
            rows={5}
            placeholder='Message'
          />
          <button style={{ width: '20%', marginLeft: '40%' }} onClick={handleClick}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddThread
