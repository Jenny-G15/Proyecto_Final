import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import logo  from "../img/logo.jpeg";
import "../styles/Navbar.css";


function NavNari() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <img src={logo} Link to="/"  className='imgLogo'/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link as={Link} to="/RegisterAdmin" className="nav-link">Administracion</Nav.Link>
            <Nav.Link href="/NariHome" className="nav-link">Inicio</Nav.Link>
            <Nav.Link as={Link} to='/SobreNosotros' className="nav-link">Sobre Nosotros</Nav.Link>
            <NavDropdown title="" id="basic-nav-dropdown" className="nav-dropdown">
              <NavDropdown.Item href="#servicios">Servicios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contacto">Contactanos</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavNari;
