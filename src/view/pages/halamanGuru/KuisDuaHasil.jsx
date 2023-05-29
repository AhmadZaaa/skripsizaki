import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import SideBarGuru from '../../../components/SideBarGuru';
import { Row, Col, Container, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import NavBarPeluang from '../../../components/NavBarPeluang';
import { DownloadTableExcel } from 'react-export-table-to-excel';

const baseURL =
  'https://restapiskripsizaki-default-rtdb.asia-southeast1.firebasedatabase.app/NilaiKuis2.json';

// const baseURLDelete =
//   'https://restapiskripsizaki-default-rtdb.asia-southeast1.firebasedatabase.app/NilaiKuis2';

export default function KuisDuaHasil() {
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
              filename="Kuis 2 Hasil"
              sheet="Kuis 2"
              currentTableRef={tableRef.current}
            >
              <button className="btn btn-info my-3"> Export excel </button>
            </DownloadTableExcel>
            <Table striped bordered responsive ref={tableRef}>
              <thead>
                <tr>
                  <th style={{ paddingRight: '30px', paddingLeft: '30px' }}>
                    Nama
                  </th>
                  <th>Nilai</th>
                  {Array.from({ length: 10 }, (_, index) => (
                    <th key={index}>Soal {index + 1}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {nilai.map(([siswa, siswaData]) => (
                  <tr key={siswa}>
                    <td>{siswa}</td>
                    <td
                      style={{
                        background: siswaData.value < 75 ? 'red' : 'green',
                      }}
                    >
                      {siswaData.value}
                    </td>
                    {siswaData.answers.map((answer, index) => (
                      <td
                        key={index}
                        style={{
                          background: answer === 'isCorrect' ? 'green' : 'red',
                        }}
                      >
                        {answer}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>

            <Button
              className="d-flex float-end text-center mt-3"
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
