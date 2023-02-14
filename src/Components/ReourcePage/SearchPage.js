import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import Header from '../Header'
import './index.css'
import search from '../../Assets/search.svg'
import searchFailed from '../../Assets/searchFailed.svg'

const SearchPage = () => {
  const history = useHistory()
  const [searchText, setSearchText] = useState('')
  const [courseData, setCourseData] = useState([])
  const [courseList, setCourseList] = useState([])
  const [courses, setCourses] = useState([])

  useEffect(() => {
    const getData = async () => {
      await fetch('https://lazy-reader-backend.herokuapp.com/course', {
        method: 'GET'
      })
      .then((res) => {
        if(res.status === 200) {
          return res.json()
        }
      })
      .then((res) => {
        setCourseData(res)
        setCourseList(res.map((e) => {
          return {
            id: e.courseId,
            name: e.courseName
          }
        }))
      })
    }
    getData()
  }, [])

  const handleClick = (url, id) => {
    const data = courseData.filter((course) => {
      return course.courseId === id
    })[0]
    history.push({
      pathname: url,
      state: {
        courseName: data.courseName,
        bookName: data.bookName,
        bookLink: data.link,
        playListLink: data.playListLink,
        playListName: data.playListName,
        channelName: data.channelName
      }
    })
  }

  const courseCard = (course) => {
    return (
      <div className='card'>
        <h2>{course.id} {course.name}</h2>
        <div className='link' onClick={() => handleClick(`course/${course.id}`, course.id)} type='button'>View</div>
      </div>
    )
  }

  const handleChange = (event) => {
    let courseArray
    setSearchText(event.target.value)
    courseArray = courseList.map(element => {
      if(element['id'].toLowerCase().includes(event.target.value) || element['name'].toLowerCase().includes(event.target.value)) {
        return element
      }
      return undefined
    })
    courseArray = courseArray.filter(element => {
      return element !== undefined;
    })
    setCourses(courseArray)
  }

  return (
      <div style={{ maxHeight: '100vh' }}>
        <Header />
        <div className='body'>
          <div className='search-box'>
            <input 
              type='text' 
              className='search-bar'
              placeholder='Search...'
              onChange={handleChange}
              value={searchText}
            />
          </div>
          {
            (searchText === '') ? 
            <div>
              <img alt='searchImage' src={search} className='search-image' />
              <h1 style={{ textAlign: 'center', color: '#53E3FE' }}>Start searching!</h1>
            </div>
            :
              (courses.length) ?
                <div className='resultBox'>
                  {courses.map(courseCard)}
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

export default SearchPage
