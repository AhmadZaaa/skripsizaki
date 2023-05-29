import { Col, Row, Card, Button, Accordion, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import NavBarPeluang from '../../../components/NavBarPeluang';
import Sidebar from '../../../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import '../../../assets/style/style.css';

export default function Latihan3to4() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [jawabanA3, setJawabanA3] = useState('');
  const [jawabanA4, setJawabanA4] = useState('');
  const [jawabanA6, setJawabanA6] = useState('');
  const [jawabanA7, setJawabanA7] = useState('');
  const [jawabanA8, setJawabanA8] = useState('');
  const [jawabanA9, setJawabanA9] = useState('');
  const [jawabanA10, setJawabanA10] = useState('');
  const [jawabanA11, setJawabanA11] = useState('');
  const [jawabanA12, setJawabanA12] = useState('');

  const [jawabanB1, setJawabanB1] = useState('');
  const [jawabanB2, setJawabanB2] = useState('');
  const [jawabanB3, setJawabanB3] = useState('');
  const [jawabanB4, setJawabanB4] = useState('');

  const navigate = useNavigate();

  const toMateri3 = () => {
    navigate('/materi3');
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
      <Row style={{ textAlign: 'justify' }}>
        <Col md={isSidebarOpen ? 3 : 0}>{isSidebarOpen && <Sidebar />}</Col>
        <Col md={isSidebarOpen ? 8 : 12}>
          <Container className="mx-1">
            <Card className="shadow" bg="light">
              <Card.Header className="text-center d-flex justify-content-center">
                <Button variant="secondary" style={{ width: '18rem' }}>
                  Latihan 3
                </Button>
              </Card.Header>

              <Accordion className="m-2 shadow" style={{ width: '18rem' }}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Instruksi</Accordion.Header>
                  <Accordion.Body>
                    Jawablah pertanyaan dibawah ini dengan benar
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Card.Body>
                <Card.Text>
                  <table className="tabel-tengah shadow">
                    <tr className="tr-garis">
                      <td className="td-garis">Jumlah Mata Dadu Muncul</td>
                      <td className="td-garis">Peluang</td>
                    </tr>
                    <tr className="tr-garis">
                      <td className="td-garis">2</td>
                      <td className="td-garis">0,028</td>
                    </tr>
                    <tr className="tr-garis">
                      <td className="td-garis">3</td>
                      <td className="td-garis">
                        <input
                          style={{
                            marginLeft: '-50px',
                            border:
                              jawabanA3 === '0,056'
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
                      </td>
                    </tr>
                    <tr className="tr-garis">
                      <td className="td-garis">4</td>
                      <td className="td-garis">
                        <input
                          style={{
                            marginLeft: '-50px',
                            border:
                              jawabanA4 === '0,083'
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
                      </td>
                    </tr>
                    <tr className="tr-garis">
                      <td className="td-garis">5</td>
                      <td className="td-garis">0,111</td>
                    </tr>
                    <tr className="tr-garis">
                      <td className="td-garis">6</td>
                      <td className="td-garis">
                        <input
                          style={{
                            marginLeft: '-50px',
                            border:
                              jawabanA6 === '0,139'
                                ? '2px solid green'
                                : '2px solid red',
                          }}
                          className="mx-1 mt-1 mb-1"
                          type="text"
                          placeholder="..."
                          value={jawabanA6}
                          onChange={(e) => {
                            setJawabanA6(e.target.value);
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="tr-garis">
                      <td className="td-garis">7</td>
                      <td className="td-garis">
                        <input
                          style={{
                            marginLeft: '-50px',
                            border:
                              jawabanA7 === '0,167'
                                ? '2px solid green'
                                : '2px solid red',
                          }}
                          className="mx-1 mt-1 mb-1"
                          type="text"
                          placeholder="..."
                          value={jawabanA7}
                          onChange={(e) => {
                            setJawabanA7(e.target.value);
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="tr-garis">
                      <td className="td-garis">8</td>
                      <td className="td-garis">
                        <input
                          style={{
                            marginLeft: '-50px',
                            border:
                              jawabanA8 === '0,139'
                                ? '2px solid green'
                                : '2px solid red',
                          }}
                          className="mx-1 mt-1 mb-1"
                          type="text"
                          placeholder="..."
                          value={jawabanA8}
                          onChange={(e) => {
                            setJawabanA8(e.target.value);
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="tr-garis">
                      <td className="td-garis">9</td>
                      <td className="td-garis">
                        <input
                          style={{
                            marginLeft: '-50px',
                            border:
                              jawabanA9 === '0,111'
                                ? '2px solid green'
                                : '2px solid red',
                          }}
                          className="mx-1 mt-1 mb-1"
                          type="text"
                          placeholder="..."
                          value={jawabanA9}
                          onChange={(e) => {
                            setJawabanA9(e.target.value);
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="tr-garis">
                      <td className="td-garis">10</td>
                      <td className="td-garis">
                        <input
                          style={{
                            marginLeft: '-50px',
                            border:
                              jawabanA10 === '0,083'
                                ? '2px solid green'
                                : '2px solid red',
                          }}
                          className="mx-1 mt-1 mb-1"
                          type="text"
                          placeholder="..."
                          value={jawabanA10}
                          onChange={(e) => {
                            setJawabanA10(e.target.value);
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="tr-garis">
                      <td className="td-garis">11</td>
                      <td className="td-garis">
                        <input
                          style={{
                            marginLeft: '-50px',
                            border:
                              jawabanA11 === '0,056'
                                ? '2px solid green'
                                : '2px solid red',
                          }}
                          className="mx-1 mt-1 mb-1"
                          type="text"
                          placeholder="..."
                          value={jawabanA11}
                          onChange={(e) => {
                            setJawabanA11(e.target.value);
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="tr-garis">
                      <td className="td-garis">12</td>
                      <td className="td-garis">
                        <input
                          style={{
                            marginLeft: '-50px',
                            border:
                              jawabanA12 === '0,028'
                                ? '2px solid green'
                                : '2px solid red',
                          }}
                          className="mx-1 mt-1 mb-1"
                          type="text"
                          placeholder="..."
                          value={jawabanA12}
                          onChange={(e) => {
                            setJawabanA12(e.target.value);
                          }}
                        />
                      </td>
                    </tr>
                    <tr className="tr-garis">
                      <td className="td-garis">Jumlah</td>
                      <td className="td-garis">1</td>
                    </tr>
                  </table>
                </Card.Text>
              </Card.Body>
            </Card>
            <br />
            <h4>
              Untuk memantapkan pemahaman kalian tentang distribusi peluang
              lengkapi distribusi peluang pada Tabel 3, kemudian jawab
              pertanyaan dibawah ini
            </h4>
            <br />
            <Card className="shadow mt-3" bg="light">
              <Card.Header className="text-center d-flex justify-content-center">
                <Button variant="secondary" style={{ width: '18rem' }}>
                  Latihan 4
                </Button>
              </Card.Header>
              <Accordion className="m-2 shadow" style={{ width: '18rem' }}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Instruksi</Accordion.Header>
                  <Accordion.Body>
                    Jawablah pertanyaan dibawah ini dengan benar
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <Card.Body>
                <Card.Text>1. Berapakah jumlah dari semua peluang ?</Card.Text>
                <Card.Text>
                  <b>Jawab</b> :{' '}
                  <input
                    style={{
                      marginLeft: '-50px',
                      border:
                        jawabanB1 === '1' ? '2px solid green' : '2px solid red',
                    }}
                    className="mx-1 mt-1 mb-1"
                    type="text"
                    placeholder="..."
                    value={jawabanB1}
                    onChange={(e) => {
                      setJawabanB1(e.target.value);
                    }}
                  />
                </Card.Text>
                <Card.Text>
                  2. Berapakah peluang dari Lebih besar dari 3 ?
                </Card.Text>
                <Card.Text>
                  <b>Jawab</b> :{' '}
                  <input
                    style={{
                      marginLeft: '-50px',
                      border:
                        jawabanB2 === '0,916'
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
                </Card.Text>
                <Card.Text>3. Berapakah peluang kurang dari 3</Card.Text>
                <Card.Text>
                  <b>Jawab</b> :{' '}
                  <input
                    style={{
                      marginLeft: '-50px',
                      border:
                        jawabanB3 === '0,972'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    className="mx-1 mt-1 mb-1"
                    type="text"
                    placeholder="..."
                    value={jawabanB3}
                    onChange={(e) => {
                      setJawabanB3(e.target.value);
                    }}
                  />
                </Card.Text>
                <Card.Text>4. Lebih kecil dari 4</Card.Text>
                <Card.Text>
                  <b>Jawab</b> :{' '}
                  <input
                    style={{
                      marginLeft: '-50px',
                      border:
                        jawabanB4 === '0,028'
                          ? '2px solid green'
                          : '2px solid red',
                    }}
                    className="mx-1 mt-1 mb-1"
                    type="text"
                    placeholder="..."
                    value={jawabanB4}
                    onChange={(e) => {
                      setJawabanB4(e.target.value);
                    }}
                  />
                </Card.Text>
              </Card.Body>
            </Card>

            <Button
              className="d-flex float-end  text-center my-3"
              variant="info"
              onClick={toMateri4}
            >
              Selanjutnya
            </Button>
            <Button
              onClick={toMateri3}
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
