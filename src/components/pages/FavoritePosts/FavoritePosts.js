import React from "react";
import {useLoaderData, useNavigation, Outlet} from 'react-router-dom';
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import Post from "../Post/Post";
import Notification from "../../Notification/Notification";
import '../PostsList/PostLists.scss';

const FavoritePosts = () => {
  const data = useLoaderData()
  const navigation = useNavigation()

  const posts = []

  for (let key in data) {
    if(data[key].isFavorite === true) {
      posts.unshift({
        id: key,
        summary: data[key].summary,
        text: data[key].text,
        type: data[key].type,
        time: data[key].time,
        isFavorite: data[key].isFavorite
      })
    }
  }

  return (
    <WrapperComponent className="post-lists__position">
      {
        navigation.state === 'loading' && <Notification
          status="pending"
          title="Pending"
          message="Loading Posts data from server."
        />
      }

      <ul className="post-lists__container">
        {posts.map(post => {
          return (
            <li key={post.id} className="post-lists__item">
              <Post
                id={post.id}
                time={post.time}
                summary={post.summary}
                text={post.text}
                type={post.type}
                isFavorite={post.isFavorite}
                page="favorites"
              />
            </li>
          )
        })}
      </ul>

      <Outlet/>

    </WrapperComponent>
  )
}

export default FavoritePosts;