import { Col, Row, Card, Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import NavBarPeluang from '../../../components/NavBarPeluang';
import Sidebar from '../../../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import '../../../assets/style/style.css';

export default function Materi3() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const toLatihan2 = () => {
    navigate('/latihan2');
  };

  const toLatihan3 = () => {
    navigate('/latihan3to4');
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
            <h1 style={{ color: 'black' }}>Distribusi Peluang</h1>
            <div style={{ textAlign: 'justify' }}>
              <p>
                Setelah kalian mengingat kembali tentang peluang, kemudian
                mengetahui tentang peluang muncul kejadian kita akan masuk ke
                materi selanjutnya, yaitu distribusi peluang. Distribusi peluang
                adalah sebuah daftar yang berisi seluruh hasil yang mungkin dari
                suatu percobaan dan peluang yang berkaitan dengan setiap hasil
                tersebut. Selang nilai peluang suatu kejadian adalah dari 0-1.
                Sedangkan, jumlah dari seluruh peluang hasil harus sama dengan
                1. <br />
                perhatikan contoh soal 6 dibawah ini untuk lebih memahaminya
              </p>
            </div>

            <Card className="mb-2 mx-1  " bg="light">
              <Card.Header style={{ border: 'none' }}>
                Contoh Soal 6
              </Card.Header>
              <Card.Body className="bgDasar2">
                <Card.Text>
                  Amir dan Hasan sedang melakukan pelemparan sebuah dadu,
                  tentukan distribusi peluang dari pelemparan satu buah dadu?
                </Card.Text>
                <Card.Title>Penyelesaian : </Card.Title>
                <Card.Text>
                  untuk mengetahui distribusi peluang buatlah sebuah tabel
                  dengan mata dadu muncul dan peluangnya seperti tabel 2 dibawah
                  ini
                </Card.Text>

                <Card className="shadow">
                  <b>
                    <table className="tabel-tengah">
                      <tr className="tr-garis">
                        <td className="td-garis">Mata Dadu Muncul</td>
                        <td className="td-garis">Peluang</td>
                      </tr>
                      <tr className="tr-garis">
                        <td className="td-garis">1</td>
                        <td className="td-garis">
                          <math>
                            <b>
                              <mfrac>
                                <mrow>
                                  <mi>1</mi>
                                </mrow>
                                <mrow>
                                  <mn>6</mn>
                                </mrow>
                              </mfrac>
                            </b>
                          </math>
                        </td>
                      </tr>
                      <tr className="tr-garis">
                        <td className="td-garis">2</td>
                        <td className="td-garis">
                          <math>
                            <b>
                              <mfrac>
                                <mrow>
                                  <mi>1</mi>
                                </mrow>
                                <mrow>
                                  <mn>6</mn>
                                </mrow>
                              </mfrac>
                            </b>
                          </math>
                        </td>
                      </tr>
                      <tr className="tr-garis">
                        <td className="td-garis">3</td>
                        <td className="td-garis">
                          <math>
                            <b>
                              <mfrac>
                                <mrow>
                                  <mi>1</mi>
                                </mrow>
                                <mrow>
                                  <mn>6</mn>
                                </mrow>
                              </mfrac>
                            </b>
                          </math>
                        </td>
                      </tr>
                      <tr className="tr-garis">
                        <td className="td-garis">4</td>
                        <td className="td-garis">
                          <math>
                            <b>
                              <mfrac>
                                <mrow>
                                  <mi>1</mi>
                                </mrow>
                                <mrow>
                                  <mn>6</mn>
                                </mrow>
                              </mfrac>
                            </b>
                          </math>
                        </td>
                      </tr>
                      <tr className="tr-garis">
                        <td className="td-garis">5</td>
                        <td className="td-garis">
                          <math>
                            <b>
                              <mfrac>
                                <mrow>
                                  <mi>1</mi>
                                </mrow>
                                <mrow>
                                  <mn>6</mn>
                                </mrow>
                              </mfrac>
                            </b>
                          </math>
                        </td>
                      </tr>
                      <tr className="tr-garis">
                        <td className="td-garis">6</td>
                        <td className="td-garis">
                          <math>
                            <b>
                              <mfrac>
                                <mrow>
                                  <mi>1</mi>
                                </mrow>
                                <mrow>
                                  <mn>6</mn>
                                </mrow>
                              </mfrac>
                            </b>
                          </math>
                        </td>
                      </tr>
                      <tr className="tr-garis">
                        <td className="td-garis">Jumlah</td>
                        <td className="td-garis">1</td>
                      </tr>
                    </table>
                  </b>

                  <Card.Title>
                    <p style={{ color: 'red' }}>
                      *Selain menggunakan bilangan pecahan bisa juga ditulis
                      menggunakan bilangan desimal
                    </p>
                  </Card.Title>
                </Card>
              </Card.Body>
            </Card>
            <br />
            <Button
              className="d-flex float-end  text-center my-3"
              variant="info"
              onClick={toLatihan3}
            >
              Selanjutnya
            </Button>
            <Button
              onClick={toLatihan2}
              style={{ width: '8rem' }}
              className="my-3"
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
