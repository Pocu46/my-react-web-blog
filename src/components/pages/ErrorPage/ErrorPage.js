import Header from "../../UI/Header/Header";
import {useRouteError} from 'react-router-dom';
import './ErrorPage.scss';

const ErrorPage = () => {
  const error = useRouteError()

  let status = 404
  let message = 'Couldn\'t find resource or page.'

  if(error.status === 500) {
    status = 500
    message = error.data.message
  }

  return(
    <div className="error-wrapper">
      <Header />

      <h1>{status}</h1>
      <p>{message}</p>
    </div>
  )
}

export default ErrorPage;