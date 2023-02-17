import React, {useEffect, useRef, useState} from "react";
import './CreatePostComponent.scss';
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import Button from "../../UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {createPostActions} from "../../../store/create-post-slice";
import {sendPostData} from "../../../store/create-post-actions";
import Notification from "../../Notification/Notification";

let isInitial = true

const setError = (ref, setMessage) => {
  if (ref.current.value.trim().length < 3) {
    setMessage(true)
    ref.current.focus()
  }
}

export const CreatePostComponent = () => {
  const dispatch = useDispatch()
  const post = useSelector(state => state.createPost)
  const notification = useSelector(state => state.ui.notification)

  const summaryRef = useRef('')
  const textRef = useRef('')
  const typeRef = useRef('Note')

  const [summaryError, setSummaryError] = useState(false)
  const [textError, setTextError] = useState(false)

  const summaryChangeHandler = (event) => {
    summaryRef.current.value = event.target.value
  }

  const textChangeHandler = (event) => {
    textRef.current.value = event.target.value
  }

  const typeChangeHandler = (event) => {
    typeRef.current.value = event.target.value
  }

  const createPostHandler = () => {
    setError(summaryRef, setSummaryError)
    setError(textRef, setTextError)

    if(summaryError || textError) {
      return
    }

    if(isInitial) {
      isInitial = false
      return
    }

    dispatch(createPostActions.addNewPost({
      summary: summaryRef.current.value.trim(),
      text: textRef.current.value.trim(),
      type: typeRef.current.value
    }))

    summaryRef.current.value = ''
    textRef.current.value = ''
    typeRef.current.value = 'Note'
  }

  useEffect(() => {
    dispatch(sendPostData(post))
  }, [post])

  const summaryClass = summaryError ? 'error-message__input' : ''
  const textClass = textError ? 'error-message__input' : ''

  return (
    <WrapperComponent className="createPostComponent-wrapper">

      <h2 className="createPostComponent-header">Create New Post</h2>

      <div className="mb-3">
        <label className="form-label">Summary *</label>
        <input
          ref={summaryRef}
          onChange={summaryChangeHandler}
          type="text"
          className={`form-control ${summaryClass}`}
          placeholder="Enter your summary"
        />
        {summaryError && <p className="error-message">Summary should have at least 3 characters</p>}
      </div>
      <div className="mb-3">
        <label className="form-label">Text *</label>
        <textarea
          ref={textRef}
          onChange={textChangeHandler}
          className={`form-control ${textClass}`}
          placeholder="Enter your article text"
        />
        {textError && <p className="error-message">Text should have at least 3 characters</p>}
      </div>

      <div className="input-group mb-3">
        <select ref={typeRef} onChange={typeChangeHandler} className="form-select">
          <option defaultValue>Note</option>
          <option>News</option>
        </select>
        <label className="input-group-text">Options</label>
      </div>

      <Button type="button" className="btn btn-success" onClick={createPostHandler}>Save</Button>

      {notification && <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
      />}

    </WrapperComponent>
  )
}