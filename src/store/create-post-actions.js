export const sendPostData = post => {
  return async dispatch => {
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
    } catch (error) {
      console.error(error.message)
    }
  }
}