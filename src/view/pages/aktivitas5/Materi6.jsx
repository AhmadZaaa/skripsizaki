import { Col, Row, Card, Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import NavBarPeluang from '../../../components/NavBarPeluang';
import Sidebar from '../../../components/Sidebar';
import { useNavigate } from 'react-router-dom';

export default function Materi6() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const toContohSoal9to11 = () => {
    navigate('/contohsoal9to11');
  };

  const toLatihan6 = () => {
    navigate('/latihan6');
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
            <h2 style={{ color: 'black' }}>B. Peluang Kejadian Saling Lepas</h2>
            <div style={{ textAlign: 'justify' }}>
              <p>
                Peluang kejadian saling lepas adalah dua kejadian yang tidak
                bisa terjadi bersamaan. Agar kalian lebih mudah memahami konsep
                peluang kejadian saling lepas, misalkan Amir dan Dika ingin main
                game bersama. Untuk menentukan urutan siapa yang memulai duluan
                menggunakan sebuah koin yang memiliki permukaan gambar dan
                angka. Saat Amir melemparkan koin satu kali, muncul angka.
                Sedangkan saat koin dilemparkan Dika muncul gambar. Tiap kali
                dilempar, koin akan selalu menunjukkan hasil yang berbeda.
              </p>

              <p>
                Gambar dan angka yang ada pada koin tersebut tidak bisa muncul
                bersamaan. Inilah yang disebut peluang kejadian saling lepas
                karena ada dua kejadian yang mustahil terjadi bersamaan.
                Kemudian ciri – ciri peluang kejadian saling lepas tidak
                memiliki irisan peluang, untuk lebih jelasnya perhatikan diagram
                venn pada Gambar 2 dibawah ini.
              </p>
            </div>
            <Card style={{ width: '100%' }} className="text-center" border="0">
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="/foto/diagramvenn2.png"
                  alt=""
                  className="rounded"
                />
              </Card.Body>
            </Card>
            <p>
              {' '}
              Sehingga rumus peluang kejadian A dan B saling lepas adalah :{' '}
              <br />
              <span style={{ fontSize: '50px' }}>P(A U B) = P(A) + P(B)</span>
            </p>
            <Button
              className="d-flex float-end  text-center my-3"
              variant="info"
              shadow-sm
              onClick={toContohSoal9to11}
            >
              Selanjutnya
            </Button>
            <Button
              style={{ width: '8rem' }}
              className="my-3"
              onClick={toLatihan6}
              variant="info"
            >
              Sebelumnya
            </Button>
          </Container>
        </Col>
      </Row>
    </>
  );
}
