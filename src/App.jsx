import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import Splash from "./pages/Splash";

function App() {
  return (
    <div className="bg-zinc-200 min-h-[100vh]">
      <BrowserRouter>
        <Splash />
      </BrowserRouter>
    </div>
  );
}

export default App;
