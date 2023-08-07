import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/Splash";
import Cars from "./pages/Cars";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="bg-zinc-200 min-h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
