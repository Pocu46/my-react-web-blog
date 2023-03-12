import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import {Form, useLoaderData} from "react-router-dom";
import React from "react";

const text = 'zzz'

const EditPost = ({params: {id=''} = {}}) => {
  const data = useLoaderData()
  console.log(data, id)

  return (
    <Modal>
      <Form className="modal-body__wrapper" method="patch">

        <h2 className="createPostComponent-header">Edit Post</h2>

        <div className="mb-3">
          <label className="form-label">Summary *</label>
          <input
            name="summary"
            type="text"
            className={`form-control`}
            placeholder="Enter your summary"
            defaultValue={text}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Text *</label>
          <textarea
            name="text"
            className={`form-control`}
            placeholder="Enter your article text"
            defaultValue={text}
            required
          />
        </div>

        <div className="input-group mb-3">
          <select
            name="type"
            className="form-select"
            defaultValue={text}
          >
            <option defaultValue>Note</option>
            <option>News</option>
          </select>
          <label className="input-group-text">Options</label>
        </div>

        <Button
          type="submit"
          className="btn btn-success"
          // disabled={loading}
        >
          Save
        </Button>

      </Form>

    </Modal>
  )
}

export default EditPost;