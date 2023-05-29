import { Col, Row, Card, Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import NavBarPeluang from '../../../components/NavBarPeluang';
import Sidebar from '../../../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import '../../../assets/style/style.css';

export default function ContohSoal7to8() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const toLatihan5 = () => {
    navigate('/latihan6');
  };

  const toMateri5 = () => {
    navigate('/materi5');
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
      <Row style={{ textAlign: 'justify' }}>
        <Col md={isSidebarOpen ? 3 : 0}>{isSidebarOpen && <Sidebar />}</Col>
        <Col md={isSidebarOpen ? 8 : 12}>
          <Container className="mx-1">
            <Card className="mb-2 mx-1 shadow " bg="light">
              <Card.Header style={{ border: 'none' }}>
                Contoh Soal 7
              </Card.Header>
              <Card.Body className="bgDasar2">
                <Card.Text>
                  Terdapat 10 kartu dalam satu kantong yang sudah diberi nomor 1
                  sampai 10. Kemudian diambil 1 kartu secara acak, kejadian A
                  merupakan peluang terambilnya nomor prima, dan kejadian B
                  merupakan peluang terambilnya kartu dengan nomor ganjil.
                  Tentukan apakah kejadian A dan B merupakan peluang kejadian
                  saling lepas?
                </Card.Text>
                <Card.Title>Penyelesaian : </Card.Title>
                <Card.Text>
                  <b>1. Tentukan peluang kejadian A</b>
                </Card.Text>
                <Card.Text>
                  A = kejadian terambilnya nomor prima = {'{2,3,5,7}'} <br />
                  P(A) ={' '}
                  <math>
                    <mfrac>
                      <mrow>
                        <mi>4</mi>
                      </mrow>
                      <mrow>
                        <mn>10</mn>
                      </mrow>
                    </mfrac>
                  </math>
                </Card.Text>
                <Card.Text>
                  <b>2. Tentukan Peluang Kejadian B</b>
                </Card.Text>
                <Card.Text>
                  B = kejadian terambilnya nomor ganjil = {'{1,3,5,7,9}'} <br />
                  P(B) ={' '}
                  <math>
                    <mfrac>
                      <mrow>
                        <mi>5</mi>
                      </mrow>
                      <mrow>
                        <mn>10</mn>
                      </mrow>
                    </mfrac>
                  </math>
                </Card.Text>
                <Card.Text>
                  <b>3. Hitung Irisannya</b>
                </Card.Text>
                <Card.Text>
                  Terdapat irisan pada A n B = {'{3,5,7}'} <br />
                  P(A n B) ={' '}
                  <math>
                    <mfrac>
                      <mrow>
                        <mi>3</mi>
                      </mrow>
                      <mrow>
                        <mn>10</mn>
                      </mrow>
                    </mfrac>
                  </math>
                </Card.Text>
                <Card.Text>
                  <b>4. Hitung Peluang Kejadian dengan rumus :</b>
                </Card.Text>
                <Card className="shadow my-3" style={{ width: '23rem' }}>
                  <Card.Title style={{ color: 'red' }}>
                    P(A U B) = P(A) + P(B) – P(A n B)
                  </Card.Title>
                </Card>
                <Card.Text>
                  <Card className="shadow my-3" style={{ width: '23rem' }}>
                    P(A U B) = P(A) + P(B) – P(A n B) <br /> = 4/10 + 5/10 –
                    3/10
                    <br /> = 9/10 – 3/10 <br /> = 6/10
                  </Card>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-2 mx-1 shadow " bg="light">
              <Card.Header style={{ border: 'none' }}>
                Contoh Soal 8
              </Card.Header>
              <Card.Body className="bgDasar2">
                <Card.Text>
                  Sebuah dadu dilemparkan satu kali, kejadian A merupakan
                  peluang muncul mata dadu genap dan kejadian B merupakan
                  peluang muncul mata dadu habis dibagi 3. Tentukan apakah
                  kejadian A dan B merupakan peluang kejadian tidak saling
                  lepas?
                </Card.Text>
                <Card.Title>Penyelesaian : </Card.Title>
                <Card.Text>
                  <b>1. Tentukan peluang kejadian A</b>
                </Card.Text>
                <Card.Text>
                  A = kejadian muncul mata dadu genap = {'{2,4,6}'} <br />
                  P(A) ={' '}
                  <math>
                    <mfrac>
                      <mrow>
                        <mi>3</mi>
                      </mrow>
                      <mrow>
                        <mn>6</mn>
                      </mrow>
                    </mfrac>
                  </math>
                </Card.Text>
                <Card.Text>
                  <b>2. Tentukan Peluang Kejadian B</b>
                </Card.Text>
                <Card.Text>
                  B = kejadian muncul mata dadu habis dibagi 3 = {'{3,6}'}{' '}
                  <br />
                  P(B) ={' '}
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
                </Card.Text>
                <Card.Text>
                  <b>3. Hitung Irisannya</b>
                </Card.Text>
                <Card.Text>
                  Terdapat irisan pada A n B = {'{6}'} <br />
                  P(A n B) ={' '}
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
                </Card.Text>
                <Card.Text>
                  <b>4. Hitung Peluang Kejadian dengan rumus :</b>
                </Card.Text>
                <Card className="shadow my-3" style={{ width: '23rem' }}>
                  <Card.Title style={{ color: 'red' }}>
                    P(A U B) = P(A) + P(B) – P(A n B)
                  </Card.Title>
                </Card>
                <Card.Text>
                  <Card className="shadow my-3" style={{ width: '23rem' }}>
                    P(A U B) = P(A) + P(B) – P(A n B) <br /> = 3/6 + 1/6 – 1/6
                    <br /> = 4/6 – 1/6 <br /> = 3/6 <br /> = 1/2
                  </Card>
                </Card.Text>
              </Card.Body>
            </Card>

            <Button
              className="d-flex float-end  text-center my-3"
              variant="info"
              onClick={toLatihan5}
            >
              Selanjutnya
            </Button>
            <Button
              onClick={toMateri5}
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
