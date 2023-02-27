import React from "react";
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import Button from "../../UI/Button/Button";
import './Post.scss'

const Post = ({summary, text, type}) => {
  return (
    <WrapperComponent className="post-wrapper">
      <header className="post-header">
        <p>{summary}</p>
        <span className="post-header__type">{type || 'Note'}</span>
      </header>

      <p className="post-text">{text}</p>

      <footer className="post-footer">
        <Button
          className="green"
          type="button"
          onClick={() => console.log('Edit')}
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
          className="blue"
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