import { Col, Row, Card, Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import NavBarPeluang from '../../../components/NavBarPeluang';
import Sidebar from '../../../components/Sidebar';
import { useNavigate } from 'react-router-dom';

export default function Materi1() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const toSoalLatihan1 = () => {
    navigate('/latihan1');
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
            <h1 style={{ color: 'black' }}>A. Distribusi Peluang</h1>

            <div style={{ textAlign: 'justify' }}>
              <p>
                Apakah kalian ingat materi peluang yang pernah kalian pelajari
                pada saat kalian masih SMP? Jika sebuah kejadian tidak mungkin
                terjadi (mustahil) maka peluangnya adalah 0, dan jika kejadian
                pasti terjadi maka peluangnya adalah 1. Contoh dari kejadian
                mustahil adalah seorang pria hamil, karena seorang pria tidak
                mungkin hamil. <br />
              </p>
              <p>
                Contoh dari peluang kejadian pasti adalah setiap orang pasti
                akan mati. Kemudian ada peluang kejadian mungkin terjadi,
                contohnya hari akan mendung atau cerah.
              </p>
              <p>
                Peluang dituliskan dalam bentuk pecahan atau desimal. Ruang
                sampel adalah himpunan semua hasil yang mungkin akan terjadi,
                dilambangkan dengan S. semua anggota S ditulis dengan simbol
                n(S). Peluang terjadinya kejadian A adalah P(A) =
                <math>
                  <mfrac>
                    <mrow>
                      <mi>n(A)</mi>
                    </mrow>
                    <mrow>
                      <mn>n(S)</mn>
                    </mrow>
                  </mfrac>
                </math>
                , dimana n(A) adalah banyaknya anggota dalam kejadian A dan n(S)
                adalah banyaknya anggota dalam himpunan ruang sampel.
              </p>
              <p>
                Untuk lebih mengingat kembali materi yang pernah dipelajari pada
                saat SMP perhatikan Contoh 1 dibawah ini.
              </p>
            </div>
            <Card style={{ border: 'none' }}>
              <Card.Header style={{ border: 'none' }}>
                Contoh Soal 1
              </Card.Header>
              <Card.Body className="bgDasar2">
                <Card.Text>
                  Tentukan peluang kejadian munculnya kartu hati yang diambil
                  dari 52 kartu remi yang dikocok!
                </Card.Text>
                <Card.Title>Penyelesaian : </Card.Title>
                <Card.Text>
                  <b>1. Tentukan ruang sampel</b>
                </Card.Text>
                <Card.Text>
                  Ruang sampel dari kartu remi adalah 52 sehingga n(S) = 52
                </Card.Text>
                <Card.Text>
                  <b>2. Tentukan ruang sampel</b>
                </Card.Text>
                <Card.Text>
                  Banyaknya kejadian dari munculnya kartu hati adalah 13
                  sehingga n(a) = 13
                </Card.Text>
                <Card.Text>
                  <b>3. hitung peluang kejadian</b>
                </Card.Text>
                <Card.Text>
                  Gunakan rumus P(A)=
                  <math>
                    <mfrac>
                      <mrow>
                        <mi>n(A)</mi>
                      </mrow>
                      <mrow>
                        <mn>n(S)</mn>
                      </mrow>
                    </mfrac>
                  </math>
                  , sehingga
                </Card.Text>
                <Card.Text>
                  P(A)=
                  <math>
                    <mfrac>
                      <mrow>
                        <mi>13</mi>
                      </mrow>
                      <mrow>
                        <mn>52</mn>
                      </mrow>
                    </mfrac>
                  </math>
                  =
                  <math>
                    <mfrac>
                      <mrow>
                        <mi>1</mi>
                      </mrow>
                      <mrow>
                        <mn>4</mn>
                      </mrow>
                    </mfrac>
                  </math>
                </Card.Text>
                <Card.Text>
                  <b>
                    Jawabannya adalah ={' '}
                    <math>
                      <b>
                        <mfrac>
                          <mrow>
                            <mi>1</mi>
                          </mrow>
                          <mrow>
                            <mn>4</mn>
                          </mrow>
                        </mfrac>
                      </b>
                    </math>
                  </b>
                </Card.Text>
              </Card.Body>
            </Card>
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
