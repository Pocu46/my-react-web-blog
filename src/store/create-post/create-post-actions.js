import {uiActions} from "../ui-slice";

export const sendPostData = post => {
  return async dispatch => {
    dispatch(uiActions.showNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending post data!'
    }))

    const sendPost = async () => {
      const url = 'https://wfm-js-blog-463dd-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      const payload = {
        method: 'POST',
        body: JSON.stringify({
          summary: post.summary,
          text: post.text,
          type: post.type
        })
      }

      const response = await fetch(url, payload)
      if (!response.ok) {
        console.log('send Post failed')
      }
    }

    try {
      await sendPost()

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Post data is sent!'
      }))
    } catch (error) {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending post data failed!'
      }))
    }
  }
}