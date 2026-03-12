import { BrowserRouter, Routes, Route } from "react-router-dom";
import Examination from "./Examination";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/Landing' element={<Landing />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Examination' element={<Examination />} />
      </Routes>
    </BrowserRouter>
  );
}
