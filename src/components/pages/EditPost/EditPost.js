import React, {useEffect, useRef} from "react";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import {Form, json, redirect, useFetcher, useNavigation, useParams, useSubmit, useActionData} from "react-router-dom";
import moment from "moment";
import '../CreatePostComponent/CreatePostComponent.scss';
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";

const EditPost = ({editPostData, setIsEditVisible, setDoReload}) => {
  // const {summary, text, type} = useParams()
  let submit = useSubmit()
  const fetcher = useFetcher()
  const navigation = useNavigation()
  let actionData = useActionData()
  const formRef = useRef()

  const editPost = async (payload) => {
    const url = `https://wfm-js-blog-463dd-default-rtdb.europe-west1.firebasedatabase.app/posts/${editPostData.id}.json`

    try {
      const response = await fetch(url, payload)

      if (!response?.ok) {
        throw new Error('The Post isn\'t saved!')
      }
    } catch {
      throw new Error('Server doesn\'t available at this moment!')
    }

    setDoReload(true)
  }

  const editPostSubmitHandler = () => {
    // submit({id: editPostData.id, fu: 5}, {method: 'patch'})
    // submit({str: "string"}, {method: 'patch'})
    const formData = new FormData(formRef.current)

    const payload = {
      method: 'PATCH',
      body: JSON.stringify({
        summary: formData.get('editedSummary'),
        text: formData.get('editedText'),
        type: formData.get('editedType'),
        time: moment().format('MMMM Do YYYY, h:mm:ss a')
      })
    }

    editPost(payload)
    setIsEditVisible(false)
  }

  return (
    <Modal setIsEditVisible={setIsEditVisible}>
      <form
        className="modal-body__wrapper"
        ref={formRef}
        // method="patch"
        // action={`/post/${editPostData.id}/edit`}
        onClick={(event) => {
          event.stopPropagation()
        }}
        // onSubmit={editPostSubmitHandler}
      >
        <WrapperComponent className="createPostComponent-wrapper">
          <h2 className="createPostComponent-header">Edit Post</h2>

          <div className="mb-3">
            <label className="form-label">Summary *</label>
            <input
              name="editedSummary"
              type="text"
              className={`form-control`}
              placeholder="Enter your summary"
              defaultValue={editPostData.summary}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Text *</label>
            <textarea
              name="editedText"
              className={`form-control`}
              placeholder="Enter your article text"
              defaultValue={editPostData.text}
              required
            />
          </div>

          <div className="input-group mb-3">
            <select
              name="editedType"
              className="form-select"
              defaultValue={editPostData.type}
            >
              <option defaultValue>Note</option>
              <option>News</option>
            </select>
            <label className="input-group-text">Options</label>
          </div>

          <Button
            type="button"
            className="btn btn-success"
            onClick={editPostSubmitHandler}
          >
            Save
          </Button>
        </WrapperComponent>
      </form>
    </Modal>
  )
}

export default EditPost;

// export const editPost = async ({request, params}) => {
//   const url = `https://wfm-js-blog-463dd-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.id}.json`
//   const data = await request.formData()
//   const close = false
//
//   console.log(data.get('str'))
//   // console.log(params)
//   // console.log(request.method)
//
//   const payload = {
//     method: 'PATCH',
//     body: JSON.stringify({
//       summary: data.get('editedSummary'),
//       text: data.get('editedText'),
//       type: data.get('editedType'),
//       time: moment().format('MMMM Do YYYY, h:mm:ss a')
//     })
//   }
//
//   try {
//     const response = await fetch(url, payload)
//
//     if (!response?.ok) {
//       throw json({message: 'The Post isn\'t saved!'}, {status: 500})
//     }
//   } catch {
//     throw json({message: 'Server doesn\'t available at this moment!'}, {status: 404})
//   }
//
//   // return close
//   return redirect('/post/lists')
// }