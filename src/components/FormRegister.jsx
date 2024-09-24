import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import getUsers from '../services/GetUsers';
import postUsers from '../services/PostUsers'; 
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import "../styles/register.css";

async function registerUser(username, email, password) { 
  try {
    let users = await getUsers();
    let userExist = users.some(user => user.username === username);
    
    if (userExist) {
      toast.error("Este usuario ya existe"); 
      return false; 
    } else {
      await postUsers(username, email, password);
      toast.success("Registro exitoso"); 
      return true; 
    }
  } catch (error) {
    console.log("Error al registrar", error);
    toast.error("Error al registrar. Inténtalo de nuevo."); 
    return false; 
  }  
}

function FormRegister() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const hacerValidacion = (event) => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value});
  };

  const registrarUsuario = async (event) => {
    event.preventDefault();
    const { username, email, password } = formData;
    
    const isRegistered = await registerUser(username, email, password);
    
    if (isRegistered) {
      navigate("/"); 
    }
  };
  
  return (
    <div>
      <Container className='ctn-principal'>
        <Row className="justify-content-md-center mt-5">
          <Col xs={12} md={6}>
            <h2 className="text-center mb-4">Regístrese</h2>
            <Form onSubmit={registrarUsuario}>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Nombre de Usuario</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={hacerValidacion}
                  placeholder="Ingrese nombre de usuario"
                />
              </Form.Group>

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
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={hacerValidacion}
                  placeholder="Ingrese contraseña"
                />
              </Form.Group>

              <Button variant="primary" type="submit"
               className="button-register">Registrarse</Button>
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

export default FormRegister;
