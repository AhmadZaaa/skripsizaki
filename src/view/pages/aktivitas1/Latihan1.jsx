import { Col, Row, Card, Button, Container, Accordion } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import NavBarPeluang from '../../../components/NavBarPeluang';
import Sidebar from '../../../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import '../../../assets/style/style.css';

export default function Latihan1() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [jawabanA1, setJawabanA1] = useState('');
  const [jawabanA2, setJawabanA2] = useState('');
  const [jawabanA3, setJawabanA3] = useState('');
  const [jawabanA4, setJawabanA4] = useState('');
  const [jawabanB1, setJawabanB1] = useState('');
  const [jawabanB2, setJawabanB2] = useState('');
  const [jawabanB3, setJawabanB3] = useState('');
  const [jawabanB4, setJawabanB4] = useState('');

  const navigate = useNavigate();

  const toMateri2 = () => {
    navigate('/materi2');
  };

  const toMateri1 = () => {
    navigate('/materi1');
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
            <Card className=" shadow" bg="light">
              <Card.Header className="text-center d-flex justify-content-center">
                <Button variant="secondary" style={{ width: '18rem' }}>
                  Latihan 1
                </Button>
              </Card.Header>

              <Card.Body>
                <Accordion className="m-2" style={{ width: '18rem' }}>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="shadow">
                      Instruksi
                    </Accordion.Header>
                    <Accordion.Body>
                      Isilah titik-titik dibawah ini dengan benar
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

                <Card.Text>
                  Pada sebuah kantong terdapat lima kelereng berukuran sama
                  dengan nomor 1 sampai dengan 5. Ketika sebuah kelereng diambil
                  dari kantong, tentukan: <br />
                  a. peluang terambilnya kelereng bernomor genap <br />
                  b. peluang terambilnya kelereng bernomor ganjil
                </Card.Text>

                <Card.Title>Jawab:</Card.Title>

                <Card.Text
                  className="shadow"
                  style={{ backgroundColor: 'white' }}
                >
                  <p className="m-3">
                    a. Peluang terambilnya kelereng bernomor genap
                  </p>
                  <span style={{ paddingLeft: '50px' }}>
                    n(S) =
                    <input
                      style={{
                        border:
                          jawabanA1 === '5'
                            ? '2px solid green'
                            : '2px solid red',
                      }}
                      className="mx-1 m-1"
                      type="text"
                      value={jawabanA1}
                      placeholder="..."
                      onChange={(e) => {
                        setJawabanA1(e.target.value);
                      }}
                    />
                  </span>
                  <br />
                  <span style={{ paddingLeft: '50px' }}>
                    n(A) =
                    <input
                      className="mx-1 m-1"
                      type="text"
                      value={jawabanA2}
                      placeholder="..."
                      onChange={(e) => {
                        setJawabanA2(e.target.value);
                      }}
                      style={{
                        border:
                          jawabanA2 === '2'
                            ? '2px solid green'
                            : '2px solid red',
                      }}
                    />
                  </span>
                  <br />
                  <p style={{ paddingLeft: '50px' }}>
                    P(A) =
                    <div className="frac">
                      <span>
                        <input
                          style={{
                            marginLeft: '0px',
                            border:
                              jawabanA3 === '2'
                                ? '2px solid green'
                                : '2px solid red',
                          }}
                          type="text"
                          value={jawabanA3}
                          placeholder="..."
                          onChange={(e) => {
                            setJawabanA3(e.target.value);
                          }}
                        />
                      </span>
                      <span className="symbol">/</span>
                      <span className="bottom">
                        <input
                          type="text"
                          style={{
                            marginLeft: '0px',
                            border:
                              jawabanA4 === '5'
                                ? '2px solid green'
                                : '2px solid red',
                          }}
                          placeholder="..."
                          value={jawabanA4}
                          onChange={(e) => {
                            setJawabanA4(e.target.value);
                          }}
                        />
                      </span>
                    </div>
                  </p>
                  {/* <Button onClick={CekJawabanA1}> Cek Jawaban </Button> */}
                </Card.Text>

                <Card.Text
                  className="shadow "
                  style={{ backgroundColor: 'white' }}
                >
                  <p className="m-3">
                    b. Peluang terambilnya kelereng bernomor genap
                  </p>
                  <span style={{ paddingLeft: '50px' }}>
                    n(S) =
                    <input
                      style={{
                        marginLeft: '-50px',
                        border:
                          jawabanB1 === '5'
                            ? '2px solid green'
                            : '2px solid red',
                      }}
                      className="mx-1 "
                      type="text"
                      placeholder="..."
                      value={jawabanB1}
                      onChange={(e) => {
                        setJawabanB1(e.target.value);
                      }}
                    />
                  </span>
                  <br />
                  <span style={{ paddingLeft: '50px' }}>
                    n(A) =
                    <input
                      style={{
                        marginLeft: '-50px',
                        border:
                          jawabanB2 === '3'
                            ? '2px solid green'
                            : '2px solid red',
                      }}
                      className="mx-1 mt-1 mb-1"
                      type="text"
                      placeholder="..."
                      value={jawabanB2}
                      onChange={(e) => {
                        setJawabanB2(e.target.value);
                      }}
                    />
                  </span>
                  <br />
                  <p style={{ paddingLeft: '50px' }}>
                    P(A) =
                    <div className="frac">
                      <span>
                        <input
                          style={{
                            marginLeft: '0px',
                            border:
                              jawabanB3 === '3'
                                ? '2px solid green'
                                : '2px solid red',
                          }}
                          type="text"
                          placeholder="..."
                          value={jawabanB3}
                          onChange={(e) => {
                            setJawabanB3(e.target.value);
                          }}
                        />
                      </span>
                      <span className="symbol">/</span>
                      <span className="bottom">
                        <input
                          style={{
                            marginLeft: '0px',
                            border:
                              jawabanB4 === '5'
                                ? '2px solid green'
                                : '2px solid red',
                          }}
                          type="text"
                          placeholder="..."
                          value={jawabanB4}
                          onChange={(e) => {
                            setJawabanB4(e.target.value);
                          }}
                        />
                      </span>
                    </div>
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
            <Button
              className="d-flex float-end my-3"
              variant="info"
              onClick={toMateri2}
            >
              Selanjutnya
            </Button>
            <Button
              style={{ width: '8rem' }}
              className="my-3"
              onClick={toMateri1}
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
