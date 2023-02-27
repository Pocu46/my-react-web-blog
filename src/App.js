import './App.scss';
import {Home} from "./components/pages/Home/Home";
import {Article} from "./components/pages/Article/Article";
import {createBrowserRouter} from "react-router-dom";
import PostLists from "./components/pages/PostsList/PostLists";
import Header from "./components/UI/Header/Header";
import {CreatePostComponent} from "./components/pages/CreatePostComponent/CreatePostComponent";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'post',
        element: <Article />,
        children: [
          {
            path: 'create',
            element: <CreatePostComponent />
          },
          {
            path: 'lists',
            element: <PostLists />
          },
          {
            path: 'favorites',
            element: <h1>Favorites</h1>
          },
        ]
      }
    ]
  }
])

const App = () => {
  return (
    <div className="wrapper">
      <Header/>
    </div>
  )
}

export default App;
