import './index.css';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/HomePage";
import AboutPage from './pages/AboutPage';
import ResultPage from './pages/ResultPage';


/* 
To add more paths for the paging, follow:
* import cruzhacks2024 from ...;
* <Route path='/cruzhacks2024' element={<cruzhacks2024 />} />
*/

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path="/about" element={< AboutPage />} />
        <Route path="/result" element={< ResultPage />} />
      </Routes>
    </>
  );
}

export default App;

