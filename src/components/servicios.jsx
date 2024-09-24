import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/services.css'; 

const servicesData = [
  {
    title: 'Grabado Láser Personalizado',
    description: 'Ofrecemos grabado láser personalizado en una variedad de materiales, incluyendo madera, acrílico y metal.',
  },
  {
    title: 'Impresión Digital de Alta Calidad',
    description: 'Realizamos impresión digital de alta calidad para todo tipo de productos, desde tarjetas de presentación hasta carteles.',
  },
  {
    title: 'Etiquetas Personalizadas',
    description: 'Creamos etiquetas personalizadas para tus productos, ideales para branding y marketing.',
  },
  {
    title: 'Prototipado Rápido',
    description: 'Proporcionamos servicios de prototipado rápido, permitiéndote ver y probar tus diseños antes de la producción final.',
  },
  {
    title: 'Artículos Promocionales',
    description: 'Fabricamos artículos promocionales grabados, perfectos para eventos y marketing empresarial.',
  },
];

const servicios = () => {
  return (
    <Container className="services-container" id="servicios">
      <h2 className="text-center mb-4">Servicios Brindados</h2>
      <Row>
        {servicesData.map((service, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card>
              <Card.Body className='cardServices'>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default servicios;
