import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function CapaianPembelajaran() {
  const navigate = useNavigate();

  const toDashboard = () => {
    navigate('/');
  };

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '80vh' }}
    >
      <Card
        style={{ width: '700px' }}
        className="text-center shadow m-4"
        border="2"
      >
        <Card.Body>
          <h2>Siswa Diharapkan</h2>
          <h4>
            1. Dapat menentukan ruang sampel sebuah kejadian dengan benar.
          </h4>
          <h4> 2. Dapat membuat distribusi peluang kejadian dengan benar.</h4>
          <h4>
            3. Dapat membedakan antara kejadian saling lepas dan kejadian tidak
            saling lepas dengan benar.
          </h4>
          <h4>
            4. Dapat menggunakan aturan penjumlahan untuk menentukan peluang dua
            kejadian saling lepas dengan benar.
          </h4>
          <h4>
            5. Dapat memodifikasi aturan penjumlahan untuk menentukan peluang
            dua kejadian tidak saling lepas dengan benar
          </h4>
          <Button variant="info" onClick={toDashboard}>
            Kembali Ke Halaman Awal
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
