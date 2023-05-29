import { Col, Row, Card, Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import NavBarPeluang from '../../../components/NavBarPeluang';
import Sidebar from '../../../components/Sidebar';
import { useNavigate } from 'react-router-dom';

export default function ContohSoal2to5() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const toMateri2 = () => {
    navigate('/materi2');
  };

  const toLatihan2 = () => {
    navigate('/latihan2');
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
            <h1 style={{ color: 'black' }}>CONTOH SOAL</h1>
            <Card className="mb-2 mx-1 shadow " bg="light">
              <Card.Header style={{ border: 'none' }}>
                Contoh Soal 2
              </Card.Header>
              <Card.Body className="bgDasar2">
                <Card.Text>
                  Berapakah peluang munculnya kejadian jumlah mata dadu 11?
                </Card.Text>
                <Card.Title>
                  <Card className="shadow">
                    <Card.Title style={{ color: 'red' }}>
                      RUMUS : P(A) =
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
                    </Card.Title>
                  </Card>
                </Card.Title>
                <Card.Title>Jawab :</Card.Title>
                <Card.Text>
                  <b> A </b> = Peluang munculnya jumlah mata dadu 11 ada dua
                  yaitu{' '}
                  <span style={{ color: 'red' }}>
                    <b>(5,6) </b>
                  </span>
                  dan{' '}
                  <span style={{ color: 'red' }}>
                    <b>(6,5) </b>
                  </span>
                </Card.Text>
                <Card.Text>
                  sehingga peluang kejadian jumlah mata dadu 11 adalah P(A) =
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
                  =
                  <math>
                    <mfrac>
                      <mrow>
                        <mi>1</mi>
                      </mrow>
                      <mrow>
                        <mn>18</mn>
                      </mrow>
                    </mfrac>
                  </math>
                  = 0,055
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-2 mx-1 shadow " bg="light">
              <Card.Header style={{ border: 'none' }}>
                Contoh Soal 3
              </Card.Header>
              <Card.Body className="bgDasar2">
                <Card.Text>
                  Berapakah peluang muncul salah satu mata dadu 2?
                </Card.Text>
                <Card.Title>
                  <Card className="shadow">
                    <Card.Title style={{ color: 'red' }}>
                      RUMUS : P(A) =
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
                    </Card.Title>
                  </Card>
                </Card.Title>
                <Card.Title>Jawab :</Card.Title>
                <Card.Text>
                  <b> A </b> = Peluang muncul salah satu mata dadu 2 yaitu{' '}
                  <span style={{ color: 'red' }}>
                    <b>
                      (2,1), (2,2), (2,3), (2,4), (2,5), (2,6), (1,2), (3,2),
                      (4,2), (5,2), (6,2){' '}
                    </b>
                  </span>
                </Card.Text>
                <Card.Text>
                  Sehingga peluang kejadian muncul salah satu mata dadu dua
                  adalah P(A) =
                  <math>
                    <mfrac>
                      <mrow>
                        <mi>11</mi>
                      </mrow>
                      <mrow>
                        <mn>36</mn>
                      </mrow>
                    </mfrac>
                  </math>
                  = 0,305
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-2 mx-1 shadow " bg="light">
              <Card.Header style={{ border: 'none' }}>
                Contoh Soal 4
              </Card.Header>
              <Card.Body className="bgDasar2">
                <Card.Text>
                  Berapakah peluang munculnya mata dadu yang sama berjumlah 8?
                </Card.Text>
                <Card.Title>
                  <Card className="shadow">
                    <Card.Title style={{ color: 'red' }}>
                      RUMUS : P(A) =
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
                    </Card.Title>
                  </Card>
                </Card.Title>
                <Card.Title>Jawab :</Card.Title>
                <Card.Text>
                  <b> A </b> = Peluang muncul jumlah dengan 8 dan memiliki mata
                  dadu sama yaitu{' '}
                  <span style={{ color: 'red' }}>
                    <b>(4,4)</b>
                  </span>
                </Card.Text>
                <Card.Text>
                  sehingga peluang kejadian muncul angka sama dan berjumlah 8
                  adalah P(A) =
                  <math>
                    <mfrac>
                      <mrow>
                        <mi>1</mi>
                      </mrow>
                      <mrow>
                        <mn>36</mn>
                      </mrow>
                    </mfrac>
                  </math>
                  = 0,027
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-2 mx-1 shadow " bg="light">
              <Card.Header style={{ border: 'none' }}>
                Contoh Soal 5
              </Card.Header>
              <Card.Body className="bgDasar2">
                <Card.Text>
                  Berapakah peluang munculnya mata dadu berjumlah yang sama?
                </Card.Text>
                <Card.Title>
                  <Card className="shadow">
                    <Card.Title style={{ color: 'red' }}>
                      RUMUS : P(A) =
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
                    </Card.Title>
                  </Card>
                </Card.Title>
                <Card.Title>Jawab :</Card.Title>
                <Card.Text>
                  <b> A </b> = Peluang muncul jumlah dengan 8 dan memiliki mata
                  dadu sama yaitu{' '}
                  <span style={{ color: 'red' }}>
                    <b>(4,4)</b>
                  </span>
                </Card.Text>
                <Card.Text>
                  Peluang munculnya mata dadu yang sama ada 6 angka sama yaitu
                  P(A) =
                  <math>
                    <mfrac>
                      <mrow>
                        <mi>6</mi>
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
                        <mi>1</mi>
                      </mrow>
                      <mrow>
                        <mn>6</mn>
                      </mrow>
                    </mfrac>
                  </math>
                  = 0,166
                </Card.Text>
              </Card.Body>
            </Card>

            <Button
              className="d-flex float-end  text-center mt-2"
              variant="info"
              onClick={toLatihan2}
            >
              Selanjutnya
            </Button>
            <Button
              onClick={toMateri2}
              style={{ width: '8rem' }}
              className="m-2"
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
