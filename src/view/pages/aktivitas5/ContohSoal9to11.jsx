import { Col, Row, Card, Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import NavBarPeluang from '../../../components/NavBarPeluang';
import Sidebar from '../../../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import '../../../assets/style/style.css';

export default function ContohSoal9to11() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const toLatihan7 = () => {
    navigate('/latihan7');
  };

  const toMateri6 = () => {
    navigate('/materi6');
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
            <Card className="mb-2 mx-1 shadow " bg="light">
              <Card.Header style={{ border: 'none' }}>
                Contoh Soal 9
              </Card.Header>
              <Card.Body className="bgDasar2">
                <Card.Text>
                  Terdapat 10 kartu dalam satu kantong yang sudah diberi nomor 1
                  sampai 10. Kemudian diambil 1 kartu secara acak, kejadian A
                  merupakan peluang terambilnya nomor prima ganjil, dan kejadian
                  B merupakan peluang terambilnya kartu dengan nomor genap.
                  Tentukan apakah kejadian A dan B merupakan peluang kejadian
                  saling lepas?
                </Card.Text>
                <Card.Title>Penyelesaian : </Card.Title>
                <Card.Text>
                  <b>1. Tentukan peluang kejadian A</b>
                </Card.Text>
                <Card.Text>
                  A = kejadian terambilnya nomor prima ganjil = {'{3,5,7}'}
                  P(A) ={' '}
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
                  <b>2. Tentukan Peluang Kejadian B</b>
                </Card.Text>
                <Card.Text>
                  B = kejadian terambilnya nomor genap = {'{2,4,6,8,10}'} <br />
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
                  Tidak terdapat irisan pada A n B <br />
                  P(A n B) ={' '}
                </Card.Text>
                <Card.Text>
                  <b>4. Hitung Peluang Kejadian dengan rumus :</b>
                </Card.Text>
                <Card className="shadow my-3" style={{ width: '23rem' }}>
                  <Card.Title style={{ color: 'red' }}>
                    P(A U B) = P(A) + P(B)
                  </Card.Title>
                </Card>
                <Card.Text>
                  <Card className="shadow my-3" style={{ width: '23rem' }}>
                    P(A U B) = P(A) + P(B) <br /> = 3/10 + 5/10
                    <br /> = 8/10
                  </Card>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-2 mx-1 shadow " bg="light">
              <Card.Header style={{ border: 'none' }}>
                Contoh Soal 10
              </Card.Header>
              <Card.Body className="bgDasar2">
                <Card.Text>
                  Terdapat 10 kartu dalam satu kantong yang sudah diberi nomor 1
                  sampai 10. Kemudian diambil 1 kartu secara acak, kejadian A
                  merupakan peluang terambilnya nomor prima ganjil, dan kejadian
                  B merupakan peluang terambilnya kartu dengan nomor genap.
                  Tentukan apakah kejadian A dan B merupakan peluang kejadian
                  saling lepas?
                </Card.Text>
                <Card.Title>Penyelesaian : </Card.Title>
                <Card.Text>
                  <b>1. Tentukan peluang kejadian A</b>
                </Card.Text>
                <Card.Text>
                  A = kejadian terambilnya nomor prima ganjil = {'{3,5,7}'}
                  P(A) ={' '}
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
                  <b>2. Tentukan Peluang Kejadian B</b>
                </Card.Text>
                <Card.Text>
                  B = kejadian terambilnya nomor genap = {'{2,4,6,8,10}'}
                  <br />
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
                  Tidak terdapat irisan pada A n B = {'{ }'} <br />
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
                    P(A U B) = P(A) + P(B) <br /> = 3/10 + 5/10
                    <br /> = 8/10
                  </Card>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-2 mx-1 shadow " bg="light">
              <Card.Header style={{ border: 'none' }}>
                Contoh Soal 10
              </Card.Header>
              <Card.Body className="bgDasar2">
                <Card.Text>
                  Terdapat 10 kartu dalam satu kantong yang sudah diberi nomor 1
                  sampai 10. Kemudian diambil 1 kartu secara acak, kejadian A
                  merupakan peluang terambilnya nomor prima ganjil, dan kejadian
                  B merupakan peluang terambilnya kartu dengan nomor genap.
                  Tentukan apakah kejadian A dan B merupakan peluang kejadian
                  saling lepas?
                </Card.Text>
                <Card.Title>Penyelesaian : </Card.Title>
                <Card.Text>
                  <b>1. Tentukan peluang kejadian A</b>
                </Card.Text>
                <Card.Text>
                  A = kejadian terambilnya nomor prima ganjil = {'{3,5,7}'}
                  P(A) ={' '}
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
                  <b>2. Tentukan Peluang Kejadian B</b>
                </Card.Text>
                <Card.Text>
                  B = kejadian terambilnya nomor genap = {'{2,4,6,8,10}'}
                  <br />
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
                  Tidak terdapat irisan pada A n B = {'{ }'} <br />
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
                    P(A U B) = P(A) + P(B) <br /> = 3/10 + 5/10
                    <br /> = 8/10
                  </Card>
                </Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-2 mx-1 shadow " bg="light">
              <Card.Header style={{ border: 'none' }}>
                Contoh Soal 11
              </Card.Header>
              <Card.Body className="bgDasar2">
                <Card.Text>
                  Pada pelemparan dua buah dadu tunjukkan bahwa kejadian muncul
                  mata dadu dengan jumlah tujuh atau munculnya mata dadu yang
                  sama merupakan peluang kejadian saling lepas?
                </Card.Text>
                <Card.Title>Penyelesaian : </Card.Title>
                <Card.Text>
                  <b>1. Tentukan peluang kejadian A</b>
                </Card.Text>
                <Card.Text>
                  A = kejadian muncul mata dadu berjumlah 7 ={' '}
                  {'{(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)}'}
                  P(A) ={' '}
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
                </Card.Text>
                <Card.Text>
                  <b>2. Tentukan Peluang Kejadian B</b>
                </Card.Text>
                <Card.Text>
                  B =kejadian muncul mata dadu yang sama ={' '}
                  {'{ (1,1) ,(2,2), (3,3), (4,4), (5,5), (6,6) }'}
                  <br />
                  P(B) ={' '}
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
                </Card.Text>
                <Card.Text>
                  <b>3. Hitung Irisannya</b>
                </Card.Text>
                <Card.Text>
                  Tidak terdapat irisan pada A n B = {'{ }'} <br />
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
                    P(A U B) = P(A) + P(B) <br /> = 6/36 + 6/36
                    <br /> = 12/36
                  </Card>
                </Card.Text>
              </Card.Body>
            </Card>

            <Button
              className="d-flex float-end  text-center mt-3"
              variant="info"
              onClick={toLatihan7}
            >
              Selanjutnya
            </Button>
            <Button
              onClick={toMateri6}
              style={{ width: '8rem' }}
              className="mt-3"
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
