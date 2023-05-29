import { Container, Card, Stack, Button } from 'react-bootstrap';
import NavBarPeluang from '../../../components/NavBarPeluang';
import { useNavigate } from 'react-router-dom';
import Footer from '../../../components/Footer';

export default function Dashboard() {
  const navigate = useNavigate();

  const toMateri1 = () => {
    navigate('/materi1');
  };

  const toCapaianPembelajaran = () => {
    navigate('/capaiansiswa');
  };

  const toLoginSiswa = () => {
    navigate('/loginsiswa');
  };

  return (
    <>
      <NavBarPeluang />
      <div className="position-fixed top-10 end-0 p-3">
        <Button onClick={toLoginSiswa} variant="dark">
          login
        </Button>
      </div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '80vh' }}
      >
        <Card style={{ width: '700px' }} className="text-center" border="0">
          <Card.Body>
            <Card.Img
              variant="top"
              src="/foto/peluang.png"
              style={{ width: '300px' }}
              className="rounded"
            />
            <h1>Peluang</h1>
            <h2>Materi Kelas 10 SMA 11</h2>
            <Stack
              gap={4}
              direction="horizontal"
              className="d-flex justify-content-center"
            >
              <Button
                variant="light"
                onClick={toMateri1}
                style={{ width: '150px' }}
              >
                Materi
              </Button>

              <Button
                variant="light"
                onClick={toCapaianPembelajaran}
                style={{ width: '150px' }}
              >
                Capaian Pembelajaran
              </Button>
            </Stack>
          </Card.Body>
        </Card>
      </Container>

      <Footer />
    </>
  );
}
