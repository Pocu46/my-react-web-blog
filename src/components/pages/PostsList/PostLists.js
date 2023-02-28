import React from "react";
import {useLoaderData} from 'react-router-dom';
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import Post from "../Post/Post";

const PostLists = () => {
  const data = useLoaderData()

  const posts = []

  for(let key in data) {
    posts.unshift({
      id: key,
      summary: data[key].summary,
      text: data[key].text,
      type: data[key].type
    })
  }

  return (
    <WrapperComponent>
      {posts.map(post => {
        return (
          <Post
            key={post.id}
            summary={post.summary}
            text={post.text}
            type={post.type}
          />)
      })}
    </WrapperComponent>
  )
}

export default PostLists;

export const postListsLoader = async () => {
  const url = 'https://wfm-js-blog-463dd-default-rtdb.europe-west1.firebasedatabase.app/posts.json'

  try {
    const response = await fetch(url)
    const data = await response.json()

    return data
  } catch (error) {
    console.error(error)
  }
}