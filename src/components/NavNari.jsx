import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from "react-router-dom";
import "../styles/Navbar.css";


function NavNari() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/NariHome" className="nav-link">Inicio</Nav.Link>
            <Nav.Link href="#link" className="nav-link">Promociones</Nav.Link>
            <NavDropdown title="" id="basic-nav-dropdown" className="nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Destacados</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/SobreNosotros' className="nav-link" eventKey="link-1">Sobre Nosotros</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Servicios</NavDropdown.Item>
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
