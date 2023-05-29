import { Accordion, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <Accordion defaultActiveKey={['0']} className="mt-2  shadow">
      <Accordion.Item eventKey="0" style={{ border: 'none' }}>
        <Accordion.Header style={{ border: 'none' }}>
          Distribusi Peluang
        </Accordion.Header>
        <Accordion.Body style={{ border: 'none' }}>
          <ListGroup style={{ border: 'none' }}>
            <NavLink
              to="/materi1"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Mengingat kembali
            </NavLink>
            <br />
            <NavLink
              to="/latihan1"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Latihan
            </NavLink>
            <br />
            <NavLink
              to="/materi2"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Ayok Bereksplorasi
            </NavLink>
            <br />
            <NavLink
              to="/contohsoal2to5"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Contoh Soal
            </NavLink>
            <br />
            <NavLink
              to="/latihan2"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Latihan 2
            </NavLink>
            <br />
            <NavLink
              to="/materi3"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Ayok Berpikir
            </NavLink>
            <br />
            <NavLink
              to="/latihan3to4"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Latihan 3 dan 4
            </NavLink>
            <br />
            <NavLink
              to="/materi4"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Ayok Mencoba
            </NavLink>
            <br />
            <NavLink
              to="/quiz1"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Kuis 1
            </NavLink>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" style={{ border: 'none' }}>
        <Accordion.Header>Aturan Penjumlahan</Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <br />
            <NavLink
              to="/materi5"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Tidak Saling Lepas
            </NavLink>
            <br />
            <NavLink
              to="/contohsoal7to8"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Contoh Soal
            </NavLink>
            <br />
            <NavLink
              to="/latihan6"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Latihan 5
            </NavLink>
            <br />
            <NavLink
              to="/materi6"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Saling Lepas
            </NavLink>
            <br />
            <NavLink
              to="/contohsoal9to11"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Contoh Soal
            </NavLink>
            <br />
            <NavLink
              to="/latihan7"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              latihan 7
            </NavLink>
            <br />
            <NavLink
              to="/quiz2"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Kuis 2
            </NavLink>
            <br />

            <NavLink
              to="/quizakhir"
              style={({ isActive }) => ({
                color: isActive ? '#71C9CE' : 'black',
                textDecoration: 'none',
              })}
            >
              Kuis Akhir
            </NavLink>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}
