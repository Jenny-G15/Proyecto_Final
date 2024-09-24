import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import getAdmin from '../services/GetAdmin';
import postAdmin from '../services/PostAdmin'; 
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Asegúrate de importar el CSS
import "../styles/register.css";

async function registerAdmin(email, codigo) { 
  try {
    let admins = await getAdmin();
    let adminExist = admins.some(admin => admin.adminemail === email);
    
    if (adminExist) {
      toast.error("Este administrador ya existe."); // Notificación de error
      return false; // Indica que el registro no fue exitoso
    } else {
      await postAdmin(email, codigo);
      toast.success("Registro exitoso."); // Notificación de éxito
      return true; // Indica que el registro fue exitoso
    }
  } catch (error) {
    console.log("Error al registrar", error);
    toast.error("Error al registrar. Inténtalo de nuevo."); // Notificación de error
    return false; // Indica que hubo un error
  }  
}

function RegisterAdmin() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    codigo: ''
  });

  const hacerValidacion = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerUser = async (event) => {
    event.preventDefault();
    const { email, codigo } = formData;
    
    const isRegistered = await registerAdmin(email, codigo);
    
    if (isRegistered) {
      navigate("/LoginAdmin"); // Navega solo si el registro fue exitoso
    }
  };
  
  return (
    <div>
      <Container className='ctn-principal'>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={6}>
            <h2 className="text-center mb-4">Regístrese</h2>
            <Form onSubmit={registerUser}>
              <Form.Group className="mb-3">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={hacerValidacion}
                  placeholder="Ingrese correo electrónico"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Código</Form.Label>
                <Form.Control
                  type="password"
                  name="codigo"
                  value={formData.codigo}
                  onChange={hacerValidacion}
                  placeholder="Ingrese código admin"
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="button-register">Registrarse</Button>
              <Link to="/LoginAdmin" className="ml-3">
                Iniciar sesión
              </Link>
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

export default RegisterAdmin;
