import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SideBarGuru from '../../../components/SideBarGuru';
import { Row, Col, Container, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBarPeluang from '../../../components/NavBarPeluang';
import { DownloadTableExcel } from 'react-export-table-to-excel';

const baseURL =
  'https://restapiskripsizaki-default-rtdb.asia-southeast1.firebasedatabase.app/Evaluasi.json';

// const baseURLDelete =
//   'https://restapiskripsizaki-default-rtdb.asia-southeast1.firebasedatabase.app/evaluasi';

export default function EvaluasiHasil() {
  const [nilai, setNilai] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const tableRef = useRef(null);
  const navigate = useNavigate();

  const toSoalLatihan1 = () => {
    navigate('/latihan1');
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth <= 768) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  }, [windowWidth]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      let result = response.data;
      console.log(result);
      // Mengubah objek menjadi array dan menyortir berdasarkan nama
      const sortedNilai = Object.entries(result).sort(([a], [b]) =>
        a.localeCompare(b)
      );
      setNilai(sortedNilai);
    });
  }, []);

  // const deleteData = (siswa) => {
  //   axios
  //     .delete(`${baseURLDelete}/${siswa}.json`)
  //     .then(() => {
  //       console.log(`Data for ${siswa} deleted successfully.`);
  //       // Lakukan pembaruan data setelah penghapusan berhasil
  //       const updatedNilai = nilai.filter(([nama]) => nama !== siswa);
  //       setNilai(updatedNilai);
  //     })
  //     .catch((error) => {
  //       console.error(`Failed to delete data for ${siswa}. Error:`, error);
  //     });
  // };

  if (!nilai) return null;

  return (
    <>
      <Row>
        <Container>
          <NavBarPeluang />
        </Container>
        <Col md={isSidebarOpen ? 3 : 0}>{isSidebarOpen && <SideBarGuru />}</Col>
        <Col md={isSidebarOpen ? 8 : 12} className="m-3">
          <Container>
            <DownloadTableExcel
              filename="Evaluasi"
              sheet="Evaluasi"
              currentTableRef={tableRef.current}
            >
              <button className="btn btn-info my-3"> Export excel </button>
            </DownloadTableExcel>
            <Table striped bordered responsive ref={tableRef}>
              <thead>
                <tr>
                  <th>Nama</th>
                  <th>Nilai</th>
                  {Array.from({ length: 15 }, (_, index) => (
                    <th key={index}>Soal {index + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {nilai.map(([siswa, siswaData]) => (
                  <tr key={siswa}>
                    <td>{siswa}</td>
                    <td>{siswaData.value}</td>
                    {siswaData.answers.map((answer, index) => (
                      <td
                        key={index}
                        style={{
                          background: answer.correct ? 'green' : 'red',
                        }}
                      >
                        {answer.selected}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>

            <Button
              className="d-flex float-end  text-center mt-3"
              variant="info"
              shadow-sm
              onClick={toSoalLatihan1}
            >
              Selanjutnya
            </Button>
          </Container>
        </Col>
      </Row>
    </>
  );
}
