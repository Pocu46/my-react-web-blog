import React from "react";
import Button from "../UI/Button/Button";

const CreatePostForm = ({loading}) => {
  return(
    <>
      <h2 className="createPostComponent-header">Create New Post</h2>

      <div className="mb-3">
        <label className="form-label">Summary *</label>
        <input
          name="summary"
          type="text"
          className="form-control"
          placeholder="Enter your summary"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Text *</label>
        <textarea
          name="text"
          className="form-control"
          placeholder="Enter your article text"
        />
      </div>

      <div className="input-group mb-3">
        <select name="type" className="form-select">
          <option defaultValue>Note</option>
          <option>News</option>
        </select>
        <label className="input-group-text">Options</label>
      </div>

      <Button
        type="submit"
        className="btn btn-success"
        disabled={loading}
      >
        Save
      </Button>
    </>
  )
}

export default CreatePostForm;