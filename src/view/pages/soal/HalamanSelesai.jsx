import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function HalamanSelesai() {
  const navigate = useNavigate();

  const toDashboard = () => {
    navigate('/');
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <Card
        style={{ width: '700px' }}
        className="text-center shadow"
        border="2"
      >
        <Card.Body>
          <Card.Img
            variant="top"
            src="/foto/peluang.png"
            style={{ width: '300px' }}
            className="rounded"
          />
          <h2>Peluang</h2>
          <h2>Selamat Anda Telah Menyelesaikan Pemebelajaran</h2>

          <Button variant="info" onClick={toDashboard}>
            Kembali Ke Halaman Awal
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
