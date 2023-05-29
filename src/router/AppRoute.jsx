import { Route, Routes } from 'react-router-dom';
import Dashboard from '../view/pages/dashboard/dashboard';
import Materi1 from '../view/pages/aktivitas1/materi1';
import Latihan1 from '../view/pages/aktivitas1/Latihan1';
import Materi2 from '../view/pages/aktivitas2/Materi2';
import Latihan2 from '../view/pages/aktivitas2/Latihan2';
import ContohSoal2to5 from '../view/pages/aktivitas2/ContohSoal2to5';
import Materi3 from '../view/pages/aktivitas3/Materi3';
import Latihan3to4 from '../view/pages/aktivitas3/Latihan3to4';
import Materi4 from '../view/pages/aktivitas3/Materi4';
import Quiz1 from '../view/pages/soal/Quiz1';
import Materi5 from '../view/pages/aktivitas4/Materi5';
import ContohSoal7to8 from '../view/pages/aktivitas4/ContohSoal7to8';
import Latihan6 from '../view/pages/aktivitas4/Latihan6';
import Materi6 from '../view/pages/aktivitas5/Materi6';
import ContohSoal9to11 from '../view/pages/aktivitas5/ContohSoal9to11';
import Latihan7 from '../view/pages/aktivitas5/Latihan7';
import Quiz2 from '../view/pages/soal/Quiz2';
import QuizAkhir from '../view/pages/soal/QuizAkhir';
import LoginGuru from '../view/pages/halamanGuru/LoginGuru';
import KuisSatuHasil from '../view/pages/halamanGuru/KuisSatuHasil';
import KuisDuaHasil from '../view/pages/halamanGuru/KuisDuaHasil';
import EvaluasiHasil from '../view/pages/halamanGuru/EvaluasiHasil';
import LoginSiswa from '../view/pages/dashboard/LoginSiswa';
import HalamanSelesai from '../view/pages/soal/HalamanSelesai';
import CapaianPembelajaran from '../view/pages/dashboard/CapaianPembelajaran';

export default function AppRoute() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/materi1" element={<Materi1 />} />
      <Route path="/latihan1" element={<Latihan1 />} />
      <Route path="/materi2" element={<Materi2 />} />
      <Route path="/contohsoal2to5" element={<ContohSoal2to5 />} />
      <Route path="/latihan2" element={<Latihan2 />} />
      <Route path="/materi3" element={<Materi3 />} />
      <Route path="/latihan3to4" element={<Latihan3to4 />} />
      <Route path="/materi4" element={<Materi4 />} />
      <Route path="/quiz1" element={<Quiz1 />} />
      <Route path="/materi5" element={<Materi5 />} />
      <Route path="/contohsoal7to8" element={<ContohSoal7to8 />} />
      <Route path="/latihan6" element={<Latihan6 />} />
      <Route path="/materi6" element={<Materi6 />} />
      <Route path="/contohsoal9to11" element={<ContohSoal9to11 />} />
      <Route path="/Latihan7" element={<Latihan7 />} />
      <Route path="/quiz2" element={<Quiz2 />} />
      <Route path="/quizakhir" element={<QuizAkhir />} />
      <Route path="/loginguru" element={<LoginGuru />} />
      <Route path="/Kuissatuhasil" element={<KuisSatuHasil />} />
      <Route path="/kuisduahasil" element={<KuisDuaHasil />} />
      <Route path="/evaluasihasil" element={<EvaluasiHasil />} />
      <Route path="/loginsiswa" element={<LoginSiswa />} />
      <Route path="/halamanselesai" element={<HalamanSelesai />} />
      <Route path="capaiansiswa" element={<CapaianPembelajaran />} />
    </Routes>
  );
}
