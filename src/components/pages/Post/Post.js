import React from "react";
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import Button from "../../UI/Button/Button";
import './Post.scss'

const Post = ({id, summary, text, type, time, isFavorite}) => {
  const typeClass = type === 'Note' ? 'post-header__type' : 'post-header__type news'

  return (
    <WrapperComponent className="post-wrapper">
      <header className="post-header">
        <p>{time}</p>
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
          onClick={() => console.log('Edit', id)}
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