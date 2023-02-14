import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './index.css'
import searchFailed from '../../Assets/searchFailed.svg'

const Forum = ({ match }) => {
  const {
    params: { courseId }
  } = match
  const history = useHistory()

  const [searchText, setSearchText] = useState('')
  const [threadList, setThreadList] = useState([])
  const [threads, setThreads] = useState([])

  useEffect(() => {
    const getData = async () => {
      await fetch(`https://lazy-reader-backend.herokuapp.com/course/${courseId}/forum`)
      .then((res) => {
        console.log(res);
        if(res.status === 200) {
          return res.json()
        }
      })
      .then((res) => {
        console.log(res)
        setThreadList(res)
        setThreads(res.map((e) => {
          return {
            id: e.id,
            title: e.title
          }
        }))
      })
    }
    getData()
  }, [courseId])

  const threadCard = (thread) => {
    console.log(thread);
    return (
      <div className='card' key={thread.id}>
        <h2>{thread.title}</h2>
        <div style={{ display: 'flex' }}>
          <Link className='link' to={`./forum/${thread.id}`} type='button'>Open</Link>
        </div>
      </div>
    )
  }

  const handleChange = (event) => {
    let threadArray
    setSearchText(event.target.value)
  
    if(event.target.value === '') {
      setThreads(threadList)
    } else {
      threadArray = threadList.map(e => {
        const query = event.target.value
        if(e['id'].toLowerCase().includes(query) || e['name'].toLowerCase().includes(query)) {
          return e
        }
        return undefined
      })
      threadArray = threadArray.filter(e => {
        return e !== undefined;
      })
      setThreads(threadArray)
    }
  }

  return (
    <div style={{ maxHeight: '100vh' }}>
      <div className='login-header'  style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h1 style={{ color: '#0099ff' }} className='title'>Lazy Reader</h1>
        <h2 style={{ color: '#0099ff', marginRight: '60px', fontWeight: '300' }}>
          <a style={{ textDecoration: 'none' }} href='/'>Logout</a>
        </h2>
      </div>
      <div className='forum-body'>
        <div className='search-box'>
          <input 
            type='text' 
            className='search-bar'
            placeholder='Search...'
            onChange={handleChange}
            value={searchText}
          />
          <button onClick={() => history.push('./forum/add')}>New Post</button>
        </div>
        {
          (threads.length) ?
            <div className='resultBox'>
              {threads.map(threadCard)}
            </div>
          :
          <div>
            <img alt='searchFailed' src={searchFailed} className='search-image' />
            <h1 style={{ textAlign: 'center', color: '#53E3FE' }}>No results!</h1>
          </div>
        }
      </div>
    </div>
  )
}

export default Forum
