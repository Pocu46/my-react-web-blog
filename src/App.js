import './App.scss';
import {Home} from "./components/pages/Home/Home";
import {Article} from "./components/pages/Article/Article";
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";


const routeDefenitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<Article />} />
  </Route>
)

export const router = createBrowserRouter(routeDefenitions)

const App = () => {
  return (
    <div className="wrapper">
      <Home />
      <Article />
    </div>
  )
}

export default App;
