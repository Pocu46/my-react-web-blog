import React from "react";
import Button from "../../UI/Button/Button";
import {Form, json, redirect, useParams} from "react-router-dom";
import moment from "moment";
import '../CreatePostComponent/CreatePostComponent.scss';
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";

const EditPost = () => {
  const params = useParams()

  return (
    <WrapperComponent>
      <Form
        className="modal-body__wrapper"
        method="patch"
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
              defaultValue={params.summary}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Text *</label>
            <textarea
              name="editedText"
              className={`form-control`}
              placeholder="Enter your article text"
              defaultValue={params.text}
              required
            />
          </div>

          <div className="input-group mb-3">
            <select
              name="editedType"
              className="form-select"
              defaultValue={params.type}
            >
              <option defaultValue>Note</option>
              <option>News</option>
            </select>
            <label className="input-group-text">Options</label>
          </div>

          <Button
            type="submit"
            className="btn btn-success"
          >
            Save
          </Button>
        </WrapperComponent>
      </Form>
    </WrapperComponent>
  )
}

export default EditPost;

export const editPost = async ({request, params}) => {
  const url = `https://wfm-js-blog-463dd-default-rtdb.europe-west1.firebasedatabase.app/posts/${params.id}.json`
  const data = await request.formData()

  console.log(params)

  const payload = {
    method: 'PATCH',
    body: JSON.stringify({
      summary: data.get('editedSummary'),
      text: data.get('editedText'),
      type: data.get('editedType'),
      time: moment().format('MMMM Do YYYY, h:mm:ss a')
    })
  }

  try {
    const response = await fetch(url, payload)

    if (!response?.ok) {
      throw json({message: 'The Post isn\'t saved!'}, {status: 500})
    }
  } catch {
    throw json({message: 'Server doesn\'t available at this moment!'}, {status: 404})
  }

  // return redirect('/post/lists')
  return redirect(`/post/${params.page}`)
}