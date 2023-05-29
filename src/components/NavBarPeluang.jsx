import { Container, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NavBarPeluang = ({ handleToggleSidebar }) => {
  const navigate = useNavigate();

  const toDashboard = () => {
    navigate('/');
  };

  return (
    <Navbar
      bg="light"
      expand="lg"
      className="mx-2"
      style={{ position: 'sticky', top: 0, zIndex: 100 }}
    >
      <Navbar.Toggle
        aria-controls="navbar-toggle"
        onClick={handleToggleSidebar}
      />
      <Navbar.Brand onClick={toDashboard} style={{ cursor: 'pointer' }}>
        MATERI PELUANG
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBarPeluang;
