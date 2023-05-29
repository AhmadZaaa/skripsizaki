import { Col, Row, Card, Button, Container, Accordion } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import NavBarPeluang from '../../../components/NavBarPeluang';
import Sidebar from '../../../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import '../../../assets/style/style.css';

export default function Latihan7() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [jawabanA1, setJawabanA1] = useState('');
  const [jawabanA2, setJawabanA2] = useState('');
  const [jawabanA3, setJawabanA3] = useState('');
  const [jawabanA4, setJawabanA4] = useState('');

  const navigate = useNavigate();

  const toContohSoal9to11 = () => {
    navigate('/contohsoal9to11');
  };

  const toquiz2 = () => {
    navigate('/quiz2');
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
        <Col md={isSidebarOpen ? 8 : 12} className="m-2">
          <Container>
            <Card className=" shadow" bg="light">
              <Card.Header className="text-center d-flex justify-content-center">
                <Button variant="secondary" style={{ width: '18rem' }}>
                  Latihan 7
                </Button>
              </Card.Header>
              <Accordion className="m-2" style={{ width: '18rem' }}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Instruksi</Accordion.Header>
                  <Accordion.Body>
                    Jawablah pertanyaan dibawah ini dengan benar
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Card.Body>
                <p>
                  Tentukan peluang mendapatkan mata dadu sama atau mata dadu
                  berjumlah 5.
                </p>
                <Card.Text>
                  1. Apakah kedua kejadian ini saling lepas atau tidak saling
                  lepas?
                </Card.Text>
                <Card.Text>
                  <b>Jawab</b> :{' '}
                  <input
                    style={{
                      border:
                        jawabanA1 === 'YA'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    className="mx-1 mt-1 mb-1"
                    type="text"
                    placeholder="..."
                    value={jawabanA1}
                    onChange={(e) => {
                      setJawabanA1(e.target.value.toUpperCase());
                    }}
                  />
                </Card.Text>
                <Card.Text>
                  2. Peluang mendapatkan mata dadu yang sama adalah P(A)=
                  <math>
                    <b>
                      <mfrac>
                        <mrow>
                          <mi>?</mi>
                        </mrow>
                        <mrow>
                          <mn>36</mn>
                        </mrow>
                      </mfrac>
                    </b>
                  </math>
                </Card.Text>
                <Card.Text>
                  <b>Jawab</b> :{' '}
                  <input
                    style={{
                      border:
                        jawabanA2 === '6' ? '2px solid green' : '2px solid red',
                    }}
                    className="mx-1 mt-1 mb-1"
                    type="text"
                    placeholder="..."
                    value={jawabanA2}
                    onChange={(e) => {
                      setJawabanA2(e.target.value);
                    }}
                  />
                </Card.Text>
                <Card.Text>
                  3. Peluang mendapatkan mata dadu jumlah 5 adalah P(B) =
                  <math>
                    <b>
                      <mfrac>
                        <mrow>
                          <mi>?</mi>
                        </mrow>
                        <mrow>
                          <mn>36</mn>
                        </mrow>
                      </mfrac>
                    </b>
                  </math>{' '}
                </Card.Text>
                <Card.Text>
                  <b>Jawab</b> :{' '}
                  <input
                    style={{
                      border:
                        jawabanA3 === '4' ? '2px solid green' : '2px solid red',
                    }}
                    className="mx-1 mt-1 mb-1"
                    type="text"
                    placeholder="..."
                    value={jawabanA3}
                    onChange={(e) => {
                      setJawabanA3(e.target.value);
                    }}
                  />
                </Card.Text>
                <Card.Text>
                  4. Peluang mendapatkan mata dadu sama dan mata dadu berjumlah
                  5 adalah?
                </Card.Text>
                <Card.Text>
                  <b>Jawab</b> :{' '}
                  <input
                    style={{
                      border:
                        jawabanA4 === '10/36'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    className="mx-1 mt-1 mb-1"
                    type="text"
                    placeholder="..."
                    value={jawabanA4}
                    onChange={(e) => {
                      setJawabanA4(e.target.value);
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>

            <Button
              className="d-flex float-end  text-center mt-3"
              variant="info"
              onClick={toquiz2}
            >
              Selanjutnya
            </Button>
            <Button
              onClick={toContohSoal9to11}
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
