import React, {useEffect, useState} from "react";
import './CreatePostComponent.scss';
import WrapperComponent from "../../UI/WrapperComponent/WrapperComponent";
import Button from "../../UI/Button/Button";
import {Form, json, redirect, useNavigation, useLoaderData} from "react-router-dom";
import Notification from "../../Notification/Notification";
import moment from 'moment';

export const CreatePostComponent = () => {
  const navigation = useNavigation()
  const loaderData = useLoaderData()
  const [loading, setLoading] = useState(false)
  console.log(loaderData)

  useEffect(() => {
    console.log(navigation.state)
    let timer
    if (navigation.state === 'submitting') {
      setLoading(true)

      timer = setTimeout(() => {
        setLoading(false)
      }, 1500)
    }

    // return () =>  clearTimeout(timer)
  }, [navigation.state])

  return (
    <WrapperComponent className="createPostComponent-wrapper">
      {
        loading && <Notification
          status="submitting"
          title="Submitting"
          message="Submitting New Post to the server!"
        />
      }

      <Form method='post'>
        <h2 className="createPostComponent-header">Create New Post</h2>

        <div className="mb-3">
          <label className="form-label">Summary *</label>
          <input
            name="summary"
            type="text"
            className={`form-control`}
            placeholder="Enter your summary"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Text *</label>
          <textarea
            name="text"
            className={`form-control`}
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
      </Form>

    </WrapperComponent>
  )
}

export const sendPost = async ({request, params}) => {
  const url = 'https://wfm-js-blog-463dd-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
  const data = await request.formData()
  const payload = {
    method: 'POST',
    body: JSON.stringify({
      summary: data.get('summary'),
      text: data.get('text'),
      type: data.get('type'),
      isFavorite: false,
      time: moment().format('MMMM Do YYYY, h:mm:ss a')
    })
  }

  try {
    const response = await fetch(url, payload)

    if(!response?.ok) {
      throw json({message: 'The Post isn\'t saved!'}, {status: 500})
    }
  } catch {
    throw json({message: 'Server doesn\'t available at this moment!'}, {status: 404})
  }

  return redirect('/post/create')
  // redirect('')
  // return {message: 'Post have been created!'}
}