import React from "react";
import './CreatePostComponent.scss'
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";

export const CreatePostComponent = () => {
  return(
    <WrapperComponent className="createPostComponent-wrapper">

      <h2 className="createPostComponent-header">Create New Post</h2>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Summary</label>
        <input type="email" className="form-control" placeholder="Enter your summary" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Text</label>
        <textarea className="form-control" placeholder="Enter your article text" />
      </div>

      <div className="input-group mb-3">
        <select className="form-select" id="inputGroupSelect02">
          <option selected>Note</option>
          <option value="1">News</option>
        </select>
        <label className="input-group-text" htmlFor="inputGroupSelect02">Options</label>
      </div>

      <button type="button" className="btn btn-success">Save</button>

    </WrapperComponent>
  )
}