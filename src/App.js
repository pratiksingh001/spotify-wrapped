import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Auth from "./components/Auth";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Auth />
      </BrowserRouter>
    </div>
  );
}

export default App;
