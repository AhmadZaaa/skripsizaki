import { Card, Container, ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function SideBarGuru() {
  return (
    <Container className="mt-3">
      <Card>
        <ListGroup>
          <NavLink
            to="/kuissatuhasil"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#71C9CE' : 'white',
              textDecoration: 'none',
              color: 'black',
              borderStartEndRadius: '5px',
            })}
          >
            Nilai Kuis 1
          </NavLink>
          <br />
          <NavLink
            to="/kuisduahasil"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#71C9CE' : 'white',
              textDecoration: 'none',
              color: 'black',
              borderStartEndRadius: '5px',
            })}
          >
            Nilai Kuis 2
          </NavLink>
          <br />
          <NavLink
            to="/evaluasihasil"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#71C9CE' : 'white',
              textDecoration: 'none',
              color: 'black',
              borderStartEndRadius: '5px',
            })}
          >
            Nilai Evaluasi
          </NavLink>
        </ListGroup>
      </Card>
    </Container>
  );
}
