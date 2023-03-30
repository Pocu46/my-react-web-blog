import './App.scss';
import {Home} from "./components/pages/Home/Home";
import {Article} from "./components/pages/Article/Article";
import {createBrowserRouter} from "react-router-dom";
import PostLists, {postsLoader} from "./components/pages/PostsList/PostLists";
import {CreatePostComponent, sendPost} from "./components/pages/CreatePostComponent/CreatePostComponent";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";
import {editPost} from "./components/pages/EditPost/EditPost";
import {postAction} from "./components/pages/Post/Post";
import FavoritePosts from "./components/pages/FavoritePosts/FavoritePosts";
import Root from "./components/pages/Root/Root";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
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
            action: postAction,
            children: [
              // {
              //   path: ':id/edit/:summary/:text/:type',
              //   element: <EditPost />,
              //   action: editPost
              // }
            ]
          },
          {
            path: 'favorites',
            element: <FavoritePosts />,
            loader: postsLoader,
            action: postAction
          },
          // {
          //   path: ':id/edit/',
          //   action: editPost
          // }
        ]
      }
    ]
  }
])

const App = () => {
  return (
    <div className="wrapper">
      <Root/>
    </div>
  )
}

export default App;
