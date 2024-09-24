import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import getAdmin from '../services/GetAdmin';
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function LoginAdmin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [codigo, setCodigo] = useState('');

  const loguearAdmin = async (event) => {
    event.preventDefault();

    try {
      let admins = await getAdmin();
      let adminExist = admins.find((admin) => admin.email === email 
        && admin.codigo === codigo);

      if (adminExist) {
        toast.success("¡Inicio de sesión exitoso!");
        navigate("/AdminNari");
      } else {
        toast.error("Email o código incorrectos"); 
        console.log("Email o código incorrectos");
      }
    } catch (error) {
      console.log("Fallo el try", error);
      toast.error("Error al intentar iniciar sesión. Inténtalo de nuevo."); 
    }

    console.log('Email:', email);
    console.log('Código:', codigo);
  };

  return (
    <div>
      <Container className='ctn-principal'>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={6}>
            <h2 className="text-center mb-4">Login</h2>
            <Form onSubmit={loguearAdmin}>
              <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  id="email"
                  type="email"
                  placeholder="Ingrese email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Código</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Ingrese código"
                  value={codigo}
                  onChange={(event) => setCodigo(event.target.value)}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="button-register">
                Iniciar sesión
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <ToastContainer 
        position="top-right" 
        autoClose={5000} 
        hideProgressBar={false} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover 
      />
    </div>
  );
}

export default LoginAdmin;
