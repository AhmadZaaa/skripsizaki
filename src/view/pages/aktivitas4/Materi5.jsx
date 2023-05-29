import { Col, Row, Card, Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import NavBarPeluang from '../../../components/NavBarPeluang';
import Sidebar from '../../../components/Sidebar';
import { useNavigate } from 'react-router-dom';

export default function Materi5() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const toContohSoal7to8 = () => {
    navigate('/contohsoal7to8');
  };

  const toMateri4 = () => {
    navigate('/materi4');
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
            <h1 style={{ color: 'black' }}>B. Aturan Penjumlahan</h1>
            <div style={{ textAlign: 'justify' }}>
              <p>
                Pada pembelajaran sebelumnya kalian telah memahami tentang
                distribusi peluang. Pada pembelajaran kali ini kalian akan
                belajar tentang aturan penjumlahan. Masih ingat pelajaran
                sebelumnya, dimana kalian menggunakan dua buah dadu untuk
                mencari distribusi peluang? Pada pelemparan dua dadu, untuk
                menentukan peluang kejadian jumlah mata dadu mendapat 3 atau 4
                dilakukan dengan menjulahkan peluang untuk mendapatkan jumlah
                mata dadu 3 atau 4, yaitu{' '}
                <math>
                  <mfrac>
                    <mrow>
                      <mi>2</mi>
                    </mrow>
                    <mrow>
                      <mn>36</mn>
                    </mrow>
                  </mfrac>
                </math>
                +
                <math>
                  <mfrac>
                    <mrow>
                      <mi>3</mi>
                    </mrow>
                    <mrow>
                      <mn>36</mn>
                    </mrow>
                  </mfrac>
                </math>
                =
                <math>
                  <mfrac>
                    <mrow>
                      <mi>5</mi>
                    </mrow>
                    <mrow>
                      <mn>36</mn>
                    </mrow>
                  </mfrac>
                </math>
                <br />
              </p>
              <p>
                Pada pembelajaran kali ini kita akan membahas lebih dalam
                tentang aturan penjumlahan, aturan penjumlahan terbagi menjadi
                dua yaitu, peluang kejadian saling lepas dan peluang kejadian
                tidak saling lepas
              </p>
              <h2 style={{ color: 'black' }}>
                A. Peluang Kejadian Tidak Saling Lepas
              </h2>
              <p>
                Peluang kejadian tidak saling lepas adalah dua kejadian yang
                bisa terjadi bersamaan. Agar kalian lebih mudah memahami konsep
                peluang kejadian tidak saling lepas, misalkan Mila dan Nana
                melemparkan dua koin bersamaan. Saat Mila melemparkan koin satu
                kali muncul gambar dan angka. Sedangkan saat koin dilemparkan
                Nana muncul angka bersamaan.
              </p>

              <p>
                Gambar dan angka yang ada pada koin tersebut bisa muncul
                bersamaan. Inilah yang disebut peluang kejadian tidak saling
                lepas karena ada dua kejadian yang mungkin terjadi bersamaan.
                Kemudian ciri – ciri peluang kejadian tidak saling lepas yaitu
                memiliki irisan peluang, untuk lebih jelasnya perhatikan diagram
                venn pada Gambar 2 dibawah ini.
              </p>
            </div>
            <Card style={{ width: '100%' }} className="text-center" border="0">
              <Card.Body>
                <Card.Img
                  variant="top"
                  src="/foto/diagramvenn1.png"
                  alt=""
                  className="rounded"
                />
              </Card.Body>
            </Card>{' '}
            <p>
              {' '}
              Sehingga rumus peluang kejadian A dan B saling lepas adalah :{' '}
              <br />
              <span style={{ fontSize: '50px' }}>
                P(A U B) = P(A) + P(B) – P(A n B)
              </span>
            </p>
            <Button
              className="d-flex float-end  text-center my-3"
              variant="info"
              onClick={toContohSoal7to8}
            >
              Selanjutnya
            </Button>
            <Button
              style={{ width: '8rem' }}
              className="my-3"
              onClick={toMateri4}
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
