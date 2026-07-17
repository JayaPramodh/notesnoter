import { Home } from "./pages/home";
import './app.css';
import { Route, Routes } from "react-router-dom";
import { Important } from "./pages/important";
import { Bin } from "./pages/bin";
import { Archive } from "./pages/archive";

function App() {

  return (
    <div className="App inconsolata-font">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/important" element={<Important />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/bin" element={<Bin />} />
      </Routes>
    </div>
  )
}

export default App
