import Nav from 'react-bootstrap/Nav';
import "../styles/home.css";

function NavAside() {
  return (
    <Nav defaultActiveKey="/home" className="vertical-nav">
      <Nav.Link href="/home" className="nav-link" eventKey="home">Inicio</Nav.Link>
      <Nav.Link href="#link-1" className="nav-link" eventKey="link-1">Sobre Nosotros</Nav.Link>
      <Nav.Link href="#link-2" className="nav-link" eventKey="link-2">Servicios</Nav.Link>
      <Nav.Link href="#disabled" className="nav-link disabled" eventKey="disabled" disabled>
        Contacto
      </Nav.Link>
    </Nav>
  );
}

export default NavAside;
