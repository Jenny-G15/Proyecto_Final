import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import logo from "../img/logo.jpeg";
import "../styles/Navbar.css";
import GetProductos from '../services/GetCards'; 
import Ventana from "../components/Ventana"; 

function NavNari() {
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await GetProductos();
      setProductos(data);
      setFilteredProductos(data);
    };
    fetchProductos();
  }, []);

  const inputEntrada = (e) => {
    setInputValue(e.target.value);
  };

  const busqueda = () => {
    const filtered = productos.filter((producto) =>
      (producto.nombre && producto.nombre.toLowerCase().includes(inputValue.toLowerCase())) ||
      (producto.descripcion && producto.descripcion.toLowerCase().includes(inputValue.toLowerCase()))
    );
    setFilteredProductos(filtered);
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Link to={'/'}>
            <img src={logo} className='imgLogo' alt="Logo" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/RegisterAdmin" className="nav-link">Administración</Nav.Link>
              <Nav.Link href="/NariHome" className="nav-link">Inicio</Nav.Link>
              <Nav.Link as={Link} to='/SobreNosotros' className="nav-link">Sobre Nosotros</Nav.Link>
              <NavDropdown title="Servicios" id="basic-nav-dropdown" className="nav-dropdown">
                <NavDropdown.Item href="#servicios">Servicios</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#contacto">Contáctanos</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <div className="containerSearch">
              <input
                type="text"
                id='searchBarText'
                value={inputValue}
                onChange={inputEntrada}
                className="inputSearch"
                placeholder="Buscar productos..."
              />
              <button
                onClick={busqueda}
                className="buttonSearch"
              >
                Buscar
              </button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Ventana
        show={showModal}
        Close={cerrarModal}
        results={filteredProductos}
      />
    </>
  );
}

export default NavNari;
