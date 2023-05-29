import { useState } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function LoginSiswa() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();
  const handleLogin = () => {
    // Check if the username and password are correct

    const correctUsername = 'siswa1'; // Use dataGuru.nama instead of loginGuru.nama
    const correctPassword = 'siswa1'; // Use dataGuru.password instead of loginGuru.password

    if (username === correctUsername && password === correctPassword) {
      setIsLoggedIn(true);
      navigate('/materi1');
    } else {
      alert('Invalid username or password');
    }
  };

  if (!isLoggedIn) {
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
            <h2>Login Siswa</h2>
            <input
              type="text"
              placeholder="Nama"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <br />
            <Button variant="info" onClick={handleLogin}>
              Login
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  // Render other components or redirect to another page for logged-in state
}
