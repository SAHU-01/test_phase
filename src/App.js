import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

//importing router components

import Suggestion from "./pages/Suggestion";
import TigaMerge from "./pages/TigaMerge";
import Suggested_Documents from "./pages/Suggested_Documents";
import Suggested_Document from "./pages/Suggested_Document";
import Listed_Documents from "./pages/Listed_Documents";
import Previewing from "./pages/Previewing";
import PdfPrint from "./pages/PdfPrint";

import './App.css';

function App() {
  return (
   <BrowserRouter>
   <Routes>
     <Route path="/" element={<TigaMerge/>}></Route>
     <Route path="/Suggestion" element={<Suggestion/>}></Route>
     <Route path="/Suggested_Documents" element={<Suggested_Documents/>}></Route>
     <Route path="/Suggested_Document" element={<Suggested_Document/>}></Route>
     <Route path="/Listed_Documents" element={<Listed_Documents/>}></Route>
     <Route path="/PdfPrint" element={<PdfPrint/>}></Route>
   </Routes>
 </BrowserRouter>
  );
}

export default App;
