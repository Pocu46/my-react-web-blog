import './App.scss';
import {Home} from "./components/pages/Home";
import {Article} from "./components/pages/Article";

const App = () => {
  return (
    <div className="wrapper">
      <Home />
      <Article />
    </div>
  )
}

export default App;
