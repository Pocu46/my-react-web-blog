import React from "react";
import {Form, json, redirect, useNavigate, useSubmit} from 'react-router-dom';
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import Button from "../../UI/Button/Button";
import star from '../../UI/starIcons/star.png';
import goldStar from '../../UI/starIcons/star (2).png';
import './Post.scss'

const Post = ({id, summary, text, type, time, isFavorite}) => {
  const navigate = useNavigate()
  const submit = useSubmit()

  let method = 'patch'
  const favoriteIcon = !isFavorite ? star : goldStar

  const typeClass = type === 'Note' ? 'post-header__type' : 'post-header__type news'

  const editPostHandler = () => {
    navigate(`/post/lists/${id}/edit/${summary}/${text}/${type}`)
  }

  const deleteHandler = () => {
    const isDelete = window.confirm(`Are you sure you want to delete '${summary}' ${type}?`)

    if (isDelete) {
      method = 'delete'

      submit({id}, {method: 'delete'})
    }
  }

  const favoriteHandler = () => {
    submit({id, isFavorite}, {method: 'patch'})
  }

  return (
    <WrapperComponent className="post-wrapper">
      <Form method={method} action="/post/lists">
        <header className="post-header">
          <p className="post-header__text">{time}</p>
          <p>
            <b>{summary}</b>
          </p>
          <div className="post-icons__wrapper">
            <span className={typeClass}>{type}</span>
            <img
              className="post-favorite__icon"
              src={favoriteIcon}
              alt="favorite-icon"
            />
          </div>
        </header>

        <p className="post-text">{text}</p>

        <footer className="post-footer">
          <Button
            className="blue"
            type="button"
            onClick={editPostHandler}
          >
            Edit
          </Button>
          <Button
            className="red"
            type="button"
            onClick={deleteHandler}
          >
            Delete
          </Button>
          <Button
            className="yellow"
            type="button"
            onClick={favoriteHandler}
          >
            {!isFavorite ? 'Favorite' : 'Unfavorite'}
          </Button>
        </footer>
      </Form>
    </WrapperComponent>
  )
}

export default Post;

export const postAction = async ({request}) => {
  const data = await request.formData()
  const url = `https://wfm-js-blog-463dd-default-rtdb.europe-west1.firebasedatabase.app/posts/${data.get('id')}.json`
  let isFavorite

  if((data.get('isFavorite')) === 'false') {
    isFavorite = true
  } else {
    isFavorite = false
  }

  let payload = {
    method: request.method,
    body: JSON.stringify({
      isFavorite: isFavorite
    })
  }

  let message = 'Post isn\'t added to Favorite!'

  if (request.method === 'DELETE') {
    payload = {
      method: request.method,
    }
    message = 'The Post isn\'t deleted!'
  }

  try {
    const response = await fetch(url, payload)

    if (!response?.ok) {
      throw json({message}, {status: 500})
    }
  } catch {
    throw json({message: 'Server doesn\'t available at this moment!'}, {status: 404})
  }

  return redirect('/post/lists')
}