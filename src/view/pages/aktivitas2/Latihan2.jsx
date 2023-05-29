import { Col, Row, Card, Button, Container, Accordion } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import NavBarPeluang from '../../../components/NavBarPeluang';
import Sidebar from '../../../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import '../../../assets/style/style.css';

export default function Latihan2() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [jawabanA1, setJawabanA1] = useState('');
  const [jawabanA2, setJawabanA2] = useState('');
  const [jawabanA3, setJawabanA3] = useState('');
  const [jawabanA4, setJawabanA4] = useState('');
  const [jawabanA5, setJawabanA5] = useState('');

  const navigate = useNavigate();

  const toMateri3 = () => {
    navigate('/materi3');
  };

  const toContoh2 = () => {
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
            <Card className=" shadow" bg="light">
              <Card.Header className="text-center d-flex justify-content-center">
                <Button variant="secondary" style={{ width: '18rem' }}>
                  Latihan 2
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

                <Card className="shadow">
                  <Card.Text>
                    1. Jumlah mata dadu yang muncul 2 atau 3
                  </Card.Text>
                  <Card.Text>
                    <b>Jawab</b> :{' '}
                    <input
                      style={{
                        marginLeft: '-50px',
                        border:
                          jawabanA1 === '0,083'
                            ? '2px solid green'
                            : '2px solid red',
                      }}
                      className="mx-1 mt-1 mb-1"
                      type="text"
                      placeholder="..."
                      value={jawabanA1}
                      onChange={(e) => {
                        setJawabanA1(e.target.value);
                      }}
                    />
                  </Card.Text>
                  <Card.Text>
                    2. Jumlah mata dadu yang muncul lebih besar daripada 3
                  </Card.Text>
                  <Card.Text>
                    <b>Jawab</b> :{' '}
                    <input
                      style={{
                        marginLeft: '-50px',
                        border:
                          jawabanA2 === '0,917'
                            ? '2px solid green'
                            : '2px solid red',
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
                    3. Jumlah mata dadu yang muncul 5 atau 8
                  </Card.Text>
                  <Card.Text>
                    <b>Jawab</b> :{' '}
                    <input
                      style={{
                        marginLeft: '-50px',
                        border:
                          jawabanA3 === '0,250'
                            ? '2px solid green'
                            : '2px solid red',
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
                    Jumlah mata dadu yang muncul lebih besar daripada 9
                  </Card.Text>
                  <Card.Text>
                    <b>Jawab</b> :{' '}
                    <input
                      style={{
                        marginLeft: '-50px',
                        border:
                          jawabanA4 === '0,153'
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
                  <Card.Text>
                    5. Jumlah mata dadu yang muncul dengan salah satu dadu 3
                  </Card.Text>
                  <Card.Text>
                    <b>Jawab</b> :{' '}
                    <input
                      style={{
                        marginLeft: '-50px',
                        border:
                          jawabanA5 === '0,305'
                            ? '2px solid green'
                            : '2px solid red',
                      }}
                      className="mx-1 mt-1 mb-1"
                      type="text"
                      placeholder="..."
                      value={jawabanA5}
                      onChange={(e) => {
                        setJawabanA5(e.target.value);
                      }}
                    />
                  </Card.Text>
                </Card>
              </Card.Body>
            </Card>

            <Button
              className="d-flex float-end my-3"
              variant="info"
              onClick={toMateri3}
            >
              Selanjutnya
            </Button>
            <Button
              style={{ width: '8rem' }}
              className="my-3 "
              onClick={toContoh2}
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
