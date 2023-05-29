import {
  Col,
  Row,
  Card,
  Button,
  Container,
  Table,
  Accordion,
} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import NavBarPeluang from '../../../components/NavBarPeluang';
import Sidebar from '../../../components/Sidebar';
import { useNavigate } from 'react-router-dom';
import '../../../assets/style/style.css';

export default function Materi4() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Percobaan
  const [lemparKoin1A, setLemparKoin1A] = useState('');
  const [lemparKoin1B, setLemparKoin1B] = useState('');

  const [lemparKoin2A, setLemparKoin2A] = useState('');
  const [lemparKoin2B, setLemparKoin2B] = useState('');

  const [lemparKoin3A, setLemparKoin3A] = useState('');
  const [lemparKoin3B, setLemparKoin3B] = useState('');

  const [lemparKoin4A, setLemparKoin4A] = useState('');
  const [lemparKoin4B, setLemparKoin4B] = useState('');

  const [lemparKoin5A, setLemparKoin5A] = useState('');
  const [lemparKoin5B, setLemparKoin5B] = useState('');

  const [lemparKoin6A, setLemparKoin6A] = useState('');
  const [lemparKoin6B, setLemparKoin6B] = useState('');

  const [lemparKoin7A, setLemparKoin7A] = useState('');
  const [lemparKoin7B, setLemparKoin7B] = useState('');

  const [lemparKoin8A, setLemparKoin8A] = useState('');
  const [lemparKoin8B, setLemparKoin8B] = useState('');

  const [lemparKoin9A, setLemparKoin9A] = useState('');
  const [lemparKoin9B, setLemparKoin9B] = useState('');

  const [lemparKoin10A, setLemparKoin10A] = useState('');
  const [lemparKoin10B, setLemparKoin10B] = useState('');

  const [jawabanB1, setJawabanB1] = useState('');
  const [jawabanB2, setJawabanB2] = useState('');
  const [jawabanB3, setJawabanB3] = useState('');
  const [jawabanB4, setJawabanB4] = useState('');

  const [jawabanC1, setJawabanC1] = useState('');
  const [jawabanC2, setJawabanC2] = useState('');
  const [jawabanC3, setJawabanC3] = useState('');
  const [jawabanC4, setJawabanC4] = useState('');
  const navigate = useNavigate();

  const toLatihan3 = () => {
    navigate('/latihan3to4');
  };

  const toQuiz1 = () => {
    navigate('/quiz1');
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

  const [coins, setCoins] = useState([
    {
      face: null,
      imgSrc: 'foto/angka.png',
    },
    {
      face: null,
      imgSrc: 'foto/gambar.png',
    },
  ]);

  const headsImgSrc = 'foto/angka.png';
  const tailsImgSrc = 'foto/gambar.png';

  const flipCoin = () => {
    const updatedCoins = coins.map((coin) => {
      const randomNum = Math.random();
      const face = randomNum < 0.5 ? 'heads' : 'tails';
      const imgSrc = face === 'heads' ? headsImgSrc : tailsImgSrc;
      return { ...coin, face, imgSrc };
    });
    setCoins(updatedCoins);
  };

  const [salahSatuGambar, setSalahSatugambar] = useState(0);
  const [salahSatuAngka, setSalahSatuAngka] = useState(0);
  const [duaBuahAngka, setDuaBuahAngka] = useState(0);
  const [duaBuahGambar, setDuaBuahGambar] = useState(0);
  const [peluangDuaGambar, setPeluangDuaGambar] = useState(0);
  const [peluangDuaAngka, setPeluangDuaAngka] = useState(0);
  const [peluangSatuGambar, setPeluangSatuGambar] = useState(0);
  const [peluangSatuAngka, setPeluangSatuAngka] = useState(0);
  const savePercobaan = () => {
    let duaGambar = 0;
    let duaAngka = 0;
    let satuGambar = 0;
    let satuAngka = 0;

    //dua Gambar
    if (lemparKoin1A === 'g' && lemparKoin1B === 'g') {
      duaGambar++;
    }
    if (lemparKoin2A === 'g' && lemparKoin2B === 'g') {
      duaGambar++;
    }
    if (lemparKoin3A === 'g' && lemparKoin3B === 'g') {
      duaGambar++;
    }
    if (lemparKoin4A === 'g' && lemparKoin4B === 'g') {
      duaGambar++;
    }
    if (lemparKoin5A === 'g' && lemparKoin5B === 'g') {
      duaGambar++;
    }
    if (lemparKoin6A === 'g' && lemparKoin6B === 'g') {
      duaGambar++;
    }
    if (lemparKoin7A === 'g' && lemparKoin7B === 'g') {
      duaGambar++;
    }
    if (lemparKoin8A === 'g' && lemparKoin8B === 'g') {
      duaGambar++;
    }
    if (lemparKoin9A === 'g' && lemparKoin9B === 'g') {
      duaGambar++;
    }
    if (lemparKoin10A === 'g' && lemparKoin10B === 'g') {
      duaGambar++;
    }

    //dua Angka
    if (lemparKoin1A === 'a' && lemparKoin1B === 'a') {
      duaAngka++;
    }
    if (lemparKoin2A === 'a' && lemparKoin2B === 'a') {
      duaAngka++;
    }
    if (lemparKoin3A === 'a' && lemparKoin3B === 'a') {
      duaAngka++;
    }
    if (lemparKoin4A === 'a' && lemparKoin4B === 'a') {
      duaAngka++;
    }
    if (lemparKoin5A === 'a' && lemparKoin5B === 'a') {
      duaAngka++;
    }
    if (lemparKoin6A === 'a' && lemparKoin6B === 'a') {
      duaAngka++;
    }
    if (lemparKoin7A === 'a' && lemparKoin7B === 'a') {
      duaAngka++;
    }
    if (lemparKoin8A === 'a' && lemparKoin8B === 'a') {
      duaAngka++;
    }
    if (lemparKoin9A === 'a' && lemparKoin9B === 'a') {
      duaAngka++;
    }
    if (lemparKoin10A === 'a' && lemparKoin10B === 'a') {
      duaAngka++;
    }

    //Salah satu angka

    if (lemparKoin1A === 'a' || lemparKoin1B === 'a') {
      satuAngka++;
    }
    if (lemparKoin2A === 'a' || lemparKoin2B === 'a') {
      satuAngka++;
    }
    if (lemparKoin3A === 'a' || lemparKoin3B === 'a') {
      satuAngka++;
    }
    if (lemparKoin4A === 'a' || lemparKoin4B === 'a') {
      satuAngka++;
    }
    if (lemparKoin5A === 'a' || lemparKoin5B === 'a') {
      satuAngka++;
    }
    if (lemparKoin6A === 'a' || lemparKoin6B === 'a') {
      satuAngka++;
    }
    if (lemparKoin7A === 'a' || lemparKoin7B === 'a') {
      satuAngka++;
    }
    if (lemparKoin8A === 'a' || lemparKoin8B === 'a') {
      satuAngka++;
    }
    if (lemparKoin9A === 'a' || lemparKoin9B === 'a') {
      satuAngka++;
    }
    if (lemparKoin10A === 'a' || lemparKoin10B === 'a') {
      satuAngka++;
    }

    //salah satu gambar
    if (lemparKoin1A === 'g' || lemparKoin1B === 'g') {
      satuGambar++;
    }
    if (lemparKoin2A === 'g' || lemparKoin2B === 'g') {
      satuGambar++;
    }
    if (lemparKoin3A === 'g' || lemparKoin3B === 'g') {
      satuGambar++;
    }
    if (lemparKoin4A === 'g' || lemparKoin4B === 'g') {
      satuGambar++;
    }
    if (lemparKoin5A === 'g' || lemparKoin5B === 'g') {
      satuGambar++;
    }
    if (lemparKoin6A === 'g' || lemparKoin6B === 'g') {
      satuGambar++;
    }
    if (lemparKoin7A === 'g' || lemparKoin7B === 'g') {
      satuGambar++;
    }
    if (lemparKoin8A === 'g' || lemparKoin8B === 'g') {
      satuGambar++;
    }
    if (lemparKoin9A === 'g' || lemparKoin9B === 'g') {
      satuGambar++;
    }
    if (lemparKoin10A === 'g' || lemparKoin10B === 'g') {
      satuGambar++;
    }

    let p2G = parseFloat(duaGambar / 10);
    let p2A = parseFloat(duaAngka / 10);
    let p1G = parseFloat(satuGambar / 10);
    let p1A = parseFloat(satuAngka / 10);

    console.log('p2A' + p2A);
    setPeluangDuaAngka(p2A);
    setPeluangSatuAngka(p1A);
    setPeluangDuaGambar(p2G);
    setPeluangSatuGambar(p1G);
    setDuaBuahAngka(duaAngka);
    setDuaBuahGambar(duaGambar);
    setSalahSatuAngka(satuAngka);
    setSalahSatugambar(satuGambar);
  };

  return (
    <>
      <NavBarPeluang handleToggleSidebar={handleToggleSidebar} />
      <Row>
        <Col md={isSidebarOpen ? 3 : 0}>{isSidebarOpen && <Sidebar />}</Col>
        <Col md={isSidebarOpen ? 8 : 12}>
          <Container className="mx-1">
            <h1 style={{ color: 'black' }}>Ayok Mencoba</h1>
            <div style={{ textAlign: 'justify' }}>
              <p>
                Setelah kalian memahami ruang sampel, peluang kejadian, dan
                distribusi peluang. Sekarang kalian mencoba sendiri menentukan
                percobaan ke -1 sampai percobaan 10 tekan instruksi untuk
                mengetahui cara mengisi tabel
              </p>
            </div>
            <Accordion className="m-2" style={{ width: '22srem' }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Instruksi</Accordion.Header>
                <Accordion.Body>
                  1. Tekan lempar Koin untuk melemparkan dua buah koin secara
                  bersamaan <br />
                  2. Setelah Mucul di sebelah kiri anda adalah koin logam 1 dan
                  di sebelah kanan anda adalah koin logam 2 <br />
                  3. Tuliskan hasilanya di tabel Percobaan lakukan sebanyak 10
                  kali 4. Apabila sudah terisi semua tekan tombol simpan
                  percobaan <br />
                  5. Kemudian isi tabel banyak muncul sesuai percobaan dilakukan
                  diatas <br />
                  6. isi tabel peluang muncul{' '}
                  <b>
                    {' '}
                    *gunakan desimal misal{' '}
                    <span style={{ color: 'red' }}> 0.1</span> untuk
                    menjawabnya*
                  </b>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <Card className="shadow" bg="light">
              <Card.Header className="text-center d-flex justify-content-center">
                <Button variant="secondary" style={{ width: '18rem' }}>
                  Latihan 3
                </Button>
              </Card.Header>
              <Card.Body>
                <Row className="justify-content-center mt-4">
                  {coins.map((coin, index) => (
                    <Col key={index} xs="auto" className="mb-4">
                      {coin.face && (
                        <img
                          style={{ width: '200px', height: '200px' }}
                          src={coin.imgSrc}
                          alt={coin.face}
                        />
                      )}
                    </Col>
                  ))}
                </Row>

                <Row className="justify-content-center mt-4 mb-4">
                  <Button
                    variant="info"
                    style={{ width: '18rem' }}
                    onClick={flipCoin}
                  >
                    lempar koin
                  </Button>
                </Row>

                <Row className="justify-content-center mt-4 mb-4">
                  <Card>
                    <Table striped bordered responsive>
                      <thead>
                        <tr>
                          <th>Percobaan</th>
                          <th>Uang Logam 1</th>
                          <th>Uang Logam 2</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Percobaan Ke - 1</td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin1A.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin1A(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin1B.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin1B(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Percobaan Ke - 2</td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin2A.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin2A(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin2B.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin2B(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Percobaan Ke - 3</td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin3A.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin3A(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin3B.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin3B(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Percobaan Ke - 4</td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin4A.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin4A(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin4B.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin4B(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Percobaan Ke - 5</td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin5A.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin5A(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin5B.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin5B(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Percobaan Ke - 6</td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin6A.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin6A(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin6B.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin6B(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Percobaan Ke - 7</td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin7A.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin7A(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin7B.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin7B(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Percobaan Ke - 8</td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin8A.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin8A(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin8B.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin8B(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Percobaan Ke - 9 </td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin9A.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin9A(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin9B.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin9B(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>Percobaan Ke - 10</td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin10A.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin10A(e.target.value);
                              }}
                            />
                          </td>
                          <td>
                            <input
                              className="mx-1 mt-1 mb-1"
                              type="text"
                              placeholder="A atau G"
                              value={lemparKoin10B.toUpperCase()}
                              onChange={(e) => {
                                setLemparKoin10B(e.target.value);
                              }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Button
                      onClick={savePercobaan}
                      className="my-1  mx-auto"
                      style={{ width: '18rem' }}
                    >
                      Simpan Percobaan
                    </Button>
                  </Card>
                </Row>
                <br />
                <table className="tabel-tengah">
                  <tr className="tr-garis">
                    <td
                      className="td-garis"
                      style={{ paddingLeft: '60px', paddingRight: '60px' }}
                    >
                      Muncul
                    </td>
                    <td className="td-garis">Banyak</td>
                  </tr>
                  <tr className="tr-garis">
                    <td className="td-garis"> Dua Buah Gambar</td>
                    <td className="td-garis">
                      <input
                        style={{
                          border:
                            jawabanB1 == duaBuahGambar
                              ? '2px solid green'
                              : '2px solid red',
                        }}
                        className="mx-1 mt-1 mb-1"
                        type="number"
                        placeholder="..."
                        value={jawabanB1}
                        onChange={(e) => {
                          setJawabanB1(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr className="tr-garis">
                    <td className="td-garis">Dua Buah Angka</td>
                    <td className="td-garis">
                      <input
                        style={{
                          border:
                            jawabanB2 == duaBuahAngka
                              ? '2px solid green'
                              : '2px solid red',
                        }}
                        className="mx-1 mt-1 mb-1"
                        type="number"
                        placeholder="..."
                        value={jawabanB2}
                        onChange={(e) => {
                          setJawabanB2(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr className="tr-garis">
                    <td className="td-garis">Salah Satu Angka</td>
                    <td className="td-garis">
                      <input
                        style={{
                          border:
                            jawabanB3 == salahSatuAngka
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
                    </td>
                  </tr>
                  <tr className="tr-garis">
                    <td className="td-garis">Salah Satu Gambar</td>
                    <td className="td-garis">
                      <input
                        style={{
                          border:
                            jawabanB4 == salahSatuGambar
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
                    </td>
                  </tr>
                </table>
                <br />
                <table className="tabel-tengah">
                  <tr className="tr-garis">
                    <td
                      className="td-garis"
                      style={{ paddingLeft: '60px', paddingRight: '60px' }}
                    >
                      Muncul
                    </td>
                    <td className="td-garis">peluang</td>
                  </tr>
                  <tr className="tr-garis">
                    <td className="td-garis"> Dua Buah Gambar</td>
                    <td className="td-garis">
                      <input
                        style={{
                          border:
                            jawabanC1 == peluangDuaGambar
                              ? '2px solid green'
                              : '2px solid red',
                        }}
                        className="mx-1 mt-1 mb-1"
                        type="number"
                        placeholder="..."
                        value={jawabanC1}
                        onChange={(e) => {
                          setJawabanC1(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr className="tr-garis">
                    <td className="td-garis">Dua Buah Angka</td>
                    <td className="td-garis">
                      <input
                        style={{
                          border:
                            jawabanC2 == peluangDuaAngka
                              ? '2px solid green'
                              : '2px solid red',
                        }}
                        className="mx-1 mt-1 mb-1"
                        type="number"
                        placeholder="..."
                        value={jawabanC2}
                        onChange={(e) => {
                          setJawabanC2(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr className="tr-garis">
                    <td className="td-garis">Salah Satu Angka</td>
                    <td className="td-garis">
                      <input
                        style={{
                          border:
                            jawabanC3 == peluangSatuAngka
                              ? '2px solid green'
                              : '2px solid red',
                        }}
                        className="mx-1 mt-1 mb-1"
                        type="text"
                        placeholder="..."
                        value={jawabanC3}
                        onChange={(e) => {
                          setJawabanC3(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                  <tr className="tr-garis">
                    <td className="td-garis">Salah Satu Gambar</td>
                    <td className="td-garis">
                      <input
                        style={{
                          border:
                            jawabanC4 == peluangSatuGambar
                              ? '2px solid green'
                              : '2px solid red',
                        }}
                        className="mx-1 mt-1 mb-1"
                        type="text"
                        placeholder="..."
                        value={jawabanC4}
                        onChange={(e) => {
                          setJawabanC4(e.target.value);
                        }}
                      />
                    </td>
                  </tr>
                </table>
              </Card.Body>
            </Card>
            <Button
              className="d-flex float-end  text-center my-3"
              variant="info"
              onClick={toQuiz1}
            >
              Selanjutnya
            </Button>
            <Button
              onClick={toLatihan3}
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
