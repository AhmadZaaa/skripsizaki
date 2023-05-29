import { Col, Row, Card, Button, Container, Accordion } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import NavBarPeluang from '../../../components/NavBarPeluang';
import Sidebar from '../../../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import DiceRoller from './DiceRoller';

export default function Materi2() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // R1
  // const [jawabanC1R1, setJawabanC1R1] = useState('');
  const [jawabanC2R1, setJawabanC2R1] = useState('');
  const [jawabanC3R1, setJawabanC3R1] = useState('');
  const [jawabanC4R1, setJawabanC4R1] = useState('');
  const [jawabanC5R1, setJawabanC5R1] = useState('');
  const [jawabanC6R1, setJawabanC6R1] = useState('');

  // R2
  const [jawabanC1R2, setJawabanC1R2] = useState('');
  const [jawabanC2R2, setJawabanC2R2] = useState('');
  // const [jawabanC3R2, setJawabanC3R2] = useState('');
  const [jawabanC4R2, setJawabanC4R2] = useState('');
  const [jawabanC5R2, setJawabanC5R2] = useState('');
  const [jawabanC6R2, setJawabanC6R2] = useState('');

  // R3
  const [jawabanC1R3, setJawabanC1R3] = useState('');
  const [jawabanC2R3, setJawabanC2R3] = useState('');
  const [jawabanC3R3, setJawabanC3R3] = useState('');
  const [jawabanC4R3, setJawabanC4R3] = useState('');
  const [jawabanC5R3, setJawabanC5R3] = useState('');
  const [jawabanC6R3, setJawabanC6R3] = useState('');

  // R4
  const [jawabanC1R4, setJawabanC1R4] = useState('');
  const [jawabanC2R4, setJawabanC2R4] = useState('');
  const [jawabanC3R4, setJawabanC3R4] = useState('');
  const [jawabanC4R4, setJawabanC4R4] = useState('');
  // const [jawabanC5R4, setJawabanC5R4] = useState('');
  const [jawabanC6R4, setJawabanC6R4] = useState('');

  // R5
  const [jawabanC1R5, setJawabanC1R5] = useState('');
  const [jawabanC2R5, setJawabanC2R5] = useState('');
  const [jawabanC3R5, setJawabanC3R5] = useState('');
  const [jawabanC4R5, setJawabanC4R5] = useState('');
  const [jawabanC5R5, setJawabanC5R5] = useState('');
  const [jawabanC6R5, setJawabanC6R5] = useState('');

  // R6
  const [jawabanC1R6, setJawabanC1R6] = useState('');
  const [jawabanC2R6, setJawabanC2R6] = useState('');
  const [jawabanC3R6, setJawabanC3R6] = useState('');
  const [jawabanC4R6, setJawabanC4R6] = useState('');
  const [jawabanC5R6, setJawabanC5R6] = useState('');
  const [jawabanC6R6, setJawabanC6R6] = useState('');

  const [jawabanA1, setJawabanA1] = useState('');
  const [jawabanA2, setJawabanA2] = useState('');
  const [jawabanA3, setJawabanA3] = useState('');

  function CekJawabanA1() {
    if (jawabanA1 === 'BENAR') {
      Swal.fire({
        title: 'Jawaban Anda Benar',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then();
    } else {
      Swal.fire({
        title: 'Jawaban Anda Salah',
        text: 'Ulang Lagi',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }

  function CekJawabanA2() {
    if (jawabanA1 === 'BENAR') {
      Swal.fire({
        title: 'Jawaban Anda Benar',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then();
    } else {
      Swal.fire({
        title: 'Jawaban Anda Salah',
        text: 'Ulang Lagi',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }

  function CekJawabanA3() {
    if (jawabanA1 === 'BENAR') {
      Swal.fire({
        title: 'Jawaban Anda Benar',
        icon: 'success',
        confirmButtonText: 'OK',
      }).then();
    } else {
      Swal.fire({
        title: 'Jawaban Anda Salah',
        text: 'Ulang Lagi',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  }

  const navigate = useNavigate();

  const toLatihan1 = () => {
    navigate('/latihan1');
  };

  const toLatihan2 = () => {
    navigate('/contohsoal2to5');
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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

  return (
    <>
      <NavBarPeluang handleToggleSidebar={handleToggleSidebar} />
      <Row>
        <Col md={isSidebarOpen ? 3 : 0}>{isSidebarOpen && <Sidebar />}</Col>
        <Col md={isSidebarOpen ? 8 : 12}>
          <Container className="mx-1">
            <br />
            <h1 style={{ color: 'black' }}>Ayok Bereskplorasi</h1>

            <div style={{ textAlign: 'justify' }}>
              <p>
                Dalam permainan, perlu diketahui bahwa peluang setiap pemain
                untuk memenangkan permainan adalah sama. Salah satu permainan
                tersebut adalah permainan papan (board game). Permainan yang
                menggunakan papan salah satunya monopoli, get rich (Android),
                dan monopoli koin(Android). Pada permainan tersebut dadu
                digunakan untuk menentukan jumlah langkah.
              </p>
              <p>
                Untuk melakukan pelemparan dua buah dadu dengan menekan tombol
                Button Lempar Dadu. Kemudian setelah kalian mencoba melakukan
                pelemparan dadu. Tuliskan hasilnya kedalam tabel disediakan.
                Tabel digunakan untuk mempermudah menentukan ruang sampel dan
                mencari peluang terjadinya kejadian.
              </p>
            </div>

            <DiceRoller />

            <br />
            <br />
            <table className="tabel-tengah">
              {/* { Colunm 1 } */}
              <tr>
                <td className="td-garis">1,1</td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC1R2 === '1,2'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC1R2(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC1R3 === '1,3'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC1R3(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC1R4 === '1,4'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC1R4(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC1R5 === '1,5'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC1R5(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC1R6 === '1,6'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC1R6(e.target.value);
                    }}
                  />
                </td>
              </tr>
              {/* { Colunm 2 } */}
              <tr>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC2R1 === '2,1'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC2R1(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC2R2 === '2,2'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC2R2(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC2R3 === '2,3'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC2R3(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC2R4 === '2,4'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC2R4(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC2R5 === '2,5'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC2R5(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC2R6 === '2,6'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC2R6(e.target.value);
                    }}
                  />
                </td>
              </tr>
              {/* { Colunm 3 } */}
              <tr>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC3R1 === '3,1'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC3R1(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">3,2</td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC3R3 === '3,3'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC3R3(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC3R4 === '3,4'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC3R4(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC3R5 === '3,5'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC3R5(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC3R6 === '3,6'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC3R6(e.target.value);
                    }}
                  />
                </td>
              </tr>
              {/* { Colunm 4 } */}
              <tr>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC4R1 === '4,1'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC4R1(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC4R2 === '4,2'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC4R2(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC4R3 === '4,3'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC4R3(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC4R4 === '4,4'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC4R4(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC4R5 === '4,5'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC4R5(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC4R6 === '4,6'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC4R6(e.target.value);
                    }}
                  />
                </td>
              </tr>
              {/* { Colunm 5 } */}
              <tr>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC5R1 === '5,1'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC5R1(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC5R2 === '5,2'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC5R2(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC5R3 === '5,3'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC5R3(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">5,4</td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC5R5 === '5,5'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC5R5(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC5R6 === '5,6'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC5R6(e.target.value);
                    }}
                  />
                </td>
              </tr>
              {/* { Colunm 6 } */}
              <tr>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC6R1 === '6,1'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC6R1(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC6R2 === '6,2'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC6R2(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC6R3 === '6,3'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC6R3(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC6R4 === '6,4'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC6R4(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC6R5 === '6,5'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC6R5(e.target.value);
                    }}
                  />
                </td>
                <td className="td-garis">
                  <input
                    type="text"
                    placeholder="..."
                    style={{
                      width: '60px',
                      border:
                        jawabanC6R6 === '6,6'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    onChange={(e) => {
                      setJawabanC6R6(e.target.value);
                    }}
                  />
                </td>
              </tr>
            </table>
            <br />
            <p>
              Tabel 1 disebut sebagai ruang sampel dari pelemparan dua buah
              dadu. Terdapat 36 hasil yang berbeda. Kemudian berdasarkan Tabel 1
              jawablah pertanyaan berikut
            </p>

            <Card className="mb-2 shadow" style={{ border: 'none' }}>
              <Card.Header
                className="text-center d-flex justify-content-center"
                style={{ border: 'none' }}
              >
                Ayok Berpikir
              </Card.Header>
              <Accordion className="m-2" style={{ width: '18rem' }}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="shadow">
                    Instruksi
                  </Accordion.Header>
                  <Accordion.Body>
                    Isilah titik-titik dibawah ini dengan benar
                    <br />
                    <b>
                      Jawab Menggunakan Benar apabila{' '}
                      <span style={{ color: 'red' }}>benar</span> ,{' '}
                      <span style={{ color: 'red' }}>salah</span> Apabila
                      jawaban Keliru
                    </b>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <Card.Body style={{ background: 'white' }}>
                <Card.Text>1. Apakah 3,2 berbeda dengan 2,3?</Card.Text>

                <Card.Title style={{ paddingLeft: '50px' }}>
                  Jawab:
                  <input
                    className="mx-1 mt-4 mb-4"
                    type="text"
                    placeholder="..."
                    value={jawabanA1}
                    onChange={(e) => {
                      setJawabanA1(e.target.value.toUpperCase());
                    }}
                  />
                  <br />
                  <Button variant="info" onClick={CekJawabanA1}>
                    Cek Jawaban
                  </Button>
                </Card.Title>

                <Card.Text>
                  2. Apakah semua peluang terjadinya kejadian memiliki peluang
                  yang sama?
                </Card.Text>
                <Card.Title style={{ paddingLeft: '50px' }}>
                  Jawab:
                  <input
                    className="mx-1 mt-4 mb-4"
                    type="text"
                    placeholder="..."
                    value={jawabanA2}
                    onChange={(e) => {
                      setJawabanA2(e.target.value.toUpperCase());
                    }}
                  />
                  <br />
                  <Button variant="info" onClick={CekJawabanA2}>
                    Cek Jawaban
                  </Button>
                </Card.Title>

                <Card.Text>
                  2. Apakah semua peluang terjadinya kejadian memiliki peluang
                  yang sama?
                </Card.Text>
                <Card.Title style={{ paddingLeft: '50px' }}>
                  Jawab:
                  <input
                    className="mx-1 mt-4 mb-4"
                    type="text"
                    placeholder="..."
                    value={jawabanA3}
                    onChange={(e) => {
                      setJawabanA3(e.target.value.toUpperCase());
                    }}
                  />
                  <br />
                  <Button variant="info" onClick={CekJawabanA3}>
                    Cek Jawaban
                  </Button>
                </Card.Title>
              </Card.Body>
            </Card>
            <br />
            <Button
              style={{ width: '8rem' }}
              className="my-3"
              variant="info"
              onClick={toLatihan1}
            >
              Sebelumnya
            </Button>
            <Button
              className="d-flex float-end  text-center my-3"
              variant="info"
              onClick={toLatihan2}
            >
              Selanjutnya
            </Button>
          </Container>
        </Col>
      </Row>
    </>
  );
}
