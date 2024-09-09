import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Gyms from "./pages/Gyms";
import Layout from "./pages/Layout";
import Request from "./pages/Request";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main />} />
            <Route path="/gyms" element={<Gyms />} />
            <Route path="/request" element={<Request />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
