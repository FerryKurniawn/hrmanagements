import Login from "./assets/components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";
import Datakaryawan from "./assets/components/a-datakaryawan";
import Dashboard from "./assets/components/a-dashboard";
import Ketidakhadiran from "./assets/components/a-ketidakhadiran";
import Karyawandashboard from "./assets/components/k-dashboard";
import Rekap from "./assets/components/k-rekappresensi";
import Ketidakhadirankaryawan from "./assets/components/k-ketidakhadiran";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admindashboard" element={<Dashboard />} />
          <Route path="/datakaryawan" element={<Datakaryawan />} />
          <Route path="/ketidakhadiran" element={<Ketidakhadiran />} />
          <Route path="/karyawanhome" element={<Karyawandashboard />} />
          <Route path="/rekap-presensi" element={<Rekap />} />
          <Route path="/ketidak-hadiran" element={<Ketidakhadirankaryawan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
