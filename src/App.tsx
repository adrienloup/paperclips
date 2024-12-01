import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home/Home";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/paperclips" element={<HomePage />} />
        <Route path="/paperclips/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
