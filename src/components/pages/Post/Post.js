import React from "react";
import {useNavigate} from 'react-router-dom';
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import Button from "../../UI/Button/Button";
import './Post.scss'

const Post = ({id, summary, text, type, time, isFavorite}) => {
  const navigate = useNavigate()

  const typeClass = type === 'Note' ? 'post-header__type' : 'post-header__type news'

  const editPostHandler = () => {
    navigate(`${id}/edit`)
  }

  return (
    <WrapperComponent className="post-wrapper">
      <header className="post-header">
        <p className="post-header__text">{time}</p>
        <p>
          <b>{summary}</b>
        </p>
        <span className={typeClass}>{type}</span>
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
          onClick={() => console.log('Delete')}
        >
          Delete
        </Button>
        <Button
          className="yellow"
          type="button"
          onClick={() => console.log('Favorite')}
        >
          Favorite
        </Button>
      </footer>
    </WrapperComponent>
  )
}

export default Post;