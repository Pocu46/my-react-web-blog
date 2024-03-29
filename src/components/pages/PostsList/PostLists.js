import React, {useEffect, useState} from "react";
import {useLoaderData, useNavigation, json, Outlet} from 'react-router-dom';
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import Post from "../Post/Post";
import Notification from "../../Notification/Notification";
import './PostLists.scss';
import Dropdown from "../../UI/Dropdown/Dropdown";

const PostLists = () => {
  const data = useLoaderData()
  const navigation = useNavigation()
  const [filter, setFilter] = useState('All')
  const [filteredArray, setFilteredArray] = useState([])

  const posts = []

  for (let key in data) {
    posts.unshift({
      id: key,
      summary: data[key].summary,
      text: data[key].text,
      type: data[key].type,
      time: data[key].time,
      isFavorite: data[key].isFavorite
    })
  }

  useEffect(() => {
    if (filter === 'All') {
      setFilteredArray([...posts])
    }
    if (filter === 'Notes') {
      setFilteredArray(posts.filter(post => {
        if (post.type === 'Note') {
          return true
        }
      }))
    }
    if (filter === 'News') {
      setFilteredArray(posts.filter(post => {
        if (post.type === 'News') {
          return true
        }
      }))
    }
  }, [filter, data])

  return (
    <WrapperComponent className="post-lists__position">
      {
        navigation.state === 'loading' && <Notification
          status="pending"
          title="Pending"
          message="Loading Posts data from server."
        />
      }

      <Dropdown setFilter={setFilter}/>

      <ul className="post-lists__container">
        {filteredArray.map(post => {
          return (
            <li key={post.id} className="post-lists__item">
              <Post
                id={post.id}
                time={post.time}
                summary={post.summary}
                text={post.text}
                type={post.type}
                isFavorite={post.isFavorite}
                page="lists"
              />
            </li>
          )
        })}
      </ul>

      <Outlet/>

    </WrapperComponent>
  )
}

export default PostLists;

export const postsLoader = async () => {
  const url = 'https://wfm-js-blog-463dd-default-rtdb.europe-west1.firebasedatabase.app/posts.json'

  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch {
    throw json({message: 'Could not load Posts!'}, {status: 500})
  }
}