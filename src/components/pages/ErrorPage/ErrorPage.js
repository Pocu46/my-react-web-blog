import Header from "../../UI/Header/Header";
import {useRouteError} from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError()

  let status = 404
  let message = 'Couldn\'t find resource or page.'

  if(error.status === 500) {
    status = 500
    message = error.data.message
  }

  return(
    <>
      <Header />

      <h1>{status}</h1>
      <p>{message}</p>
    </>
  )
}

export default ErrorPage;