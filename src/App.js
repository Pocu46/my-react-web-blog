import './App.scss';
import {Home} from "./components/pages/Home/Home";
import {Article} from "./components/pages/Article/Article";
import {createBrowserRouter} from "react-router-dom";
import PostLists, {postsLoader} from "./components/pages/PostsList/PostLists";
import Header from "./components/UI/Header/Header";
import {CreatePostComponent, sendPost} from "./components/pages/CreatePostComponent/CreatePostComponent";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import EditPost, {editPost} from "./components/pages/EditPost/EditPost";

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
            element: <CreatePostComponent />,
            action: sendPost
          },
          {
            path: 'lists',
            element: <PostLists />,
            loader: postsLoader,
            children: [
              {
                path: ':id/edit/:summary/:text/:type',
                element: <EditPost />,
                action: editPost
              },
              {
                path: ':id/delete',
                element: <h1>delete</h1>
              },
              {
                path: ':id/favorite',
                element: <h1>favorite</h1>
              }
            ]
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
