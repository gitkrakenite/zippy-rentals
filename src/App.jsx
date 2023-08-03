import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Cars from "./pages/Cars";

function App() {
  return (
    <div className="bg-zinc-200 min-h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/cars" element={<Cars />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
