import React, {useEffect, useRef} from "react";
import './CreatePostComponent.scss'
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import Button from "../../UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {createCartActions} from "../../../store/create-cart-slice";

export const CreatePostComponent = () => {
  const dispatch = useDispatch()
  const createCartText = useSelector(state => state.createCart)

  const summaryRef = useRef('')
  const textRef = useRef('')
  const typeRef = useRef('Note')

  const summaryChangeHandler = (event) => {
    summaryRef.current.value = event.target.value
  }

  const textChangeHandler = (event) => {
    textRef.current.value = event.target.value
  }

  const typeChangeHandler = (event) => {
    typeRef.current.value = event.target.value
    let index = event.nativeEvent.target.selectedIndex;
    typeRef.current.value = event.nativeEvent.target[index].text
    console.log(typeRef.current.value)
  }

  const createPostHandler = (event) => {
    dispatch(createCartActions.addNewPost({
      summary: summaryRef.current.value,
      text: textRef.current.value,
      type: typeRef.current.value
    }))

    summaryRef.current.value = ''
    textRef.current.value = ''
    typeRef.current.value = 'Note'
  }

  // useEffect(() => {
  //   console.log('effect works')
  //   console.log(createCartText.summary, createCartText.text, createCartText.type)
  // }, [createCartText])

  return (
    <WrapperComponent className="createPostComponent-wrapper">

      <h2 className="createPostComponent-header">Create New Post</h2>

      <div className="mb-3">
        <label className="form-label">Summary</label>
        <input
          ref={summaryRef}
          // value={summaryRef}
          onChange={summaryChangeHandler}
          type="text" className="form-control"
          placeholder="Enter your summary"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Text</label>
        <textarea
          ref={textRef}
          onChange={textChangeHandler}
          // value={textRef}
          className="form-control"
          placeholder="Enter your article text"
        />
      </div>

      <div className="input-group mb-3">
        <select ref={typeRef} onChange={typeChangeHandler} value={typeRef} className="form-select" >
          <option defaultValue>Note</option>
          <option value="1">News</option>
        </select>
        <label className="input-group-text">Options</label>
      </div>

      <Button type="button" className="btn btn-success" onClick={createPostHandler}>Save</Button>

    </WrapperComponent>
  )
}