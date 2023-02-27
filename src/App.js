import './App.scss';
import {Home} from "./components/pages/Home/Home";
import {Article} from "./components/pages/Article/Article";
import {createBrowserRouter, Outlet} from "react-router-dom";
import PostLists from "./components/pages/PostsList/PostLists";
import NotFound from "./components/pages/ErrorPage/ErrorPage";
import Header from "./components/UI/Header/Header";
import {CreatePostComponent} from "./components/pages/CreatePostComponent/CreatePostComponent";
import ErrorPage from "./components/pages/ErrorPage/ErrorPage";


// const routeDefinitions = createRoutesFromElements(
//   <Routes>
//     <Route path="/" element={<Header />}>
//       <Route index element={<Home />} />
//       <Route path="/article" element={<Article />} />
//       <Route path="*" element={<NotFound />} />
//       <Route path="/posts" element={<PostLists />} />
//     </Route>
//   </Routes>
// )
//
// export const router = createBrowserRouter(routeDefinitions)

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Header/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/post/',
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
