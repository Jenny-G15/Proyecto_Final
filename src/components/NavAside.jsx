import Nav from 'react-bootstrap/Nav';
import "../styles/home.css";

function NavAside() {
  return (
    <Nav defaultActiveKey="/home" className="vertical-nav">
      <Nav.Link href="/home" className="nav-link" eventKey="home">Inicio</Nav.Link>
      <Nav.Link href="#aboutUs" className="nav-link" eventKey="link-1">Sobre Nosotros</Nav.Link>
      <Nav.Link href="#servicios" className="nav-link" eventKey="link-2">Servicios</Nav.Link>
      <Nav.Link href="#contacto" className="nav-link" eventKey="link-3">Contacto</Nav.Link>
    </Nav>
  );
}

export default NavAside;
