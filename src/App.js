import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";

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
      </Routes>
    </>
  );
}

export default App;

