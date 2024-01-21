import "./index.css";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResultPage from "./pages/ResultPage";
// import { testFirebase } from "./firebaseTest.js";

/* 
To add more paths for the paging, follow:
* import cruzhacks2024 from ...;
* <Route path='/cruzhacks2024' element={<cruzhacks2024 />} />
*/

function App() {
  // testFirebase();

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/result" element={<ResultPage />} />
      </Routes>
    </>
  );
}

export default App;
