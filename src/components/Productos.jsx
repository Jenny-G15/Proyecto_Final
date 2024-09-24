import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container } from 'react-bootstrap';
import "../styles/home.css"
import GetProductos from '../services/GetCards';
import React, { useCallback,useEffect, useState } from 'react';

function Productos() {


  const [productos, setProductos] = useState([]);

  const load_product=useCallback(()=>{
    const fetchProducts = async () => {
      try {
        const response = await GetProductos();
        setProductos(response);
      } catch (error) {
        console.error("Error fetching Products", error);
      }
    };
    fetchProducts()
   })
  
  useEffect(()=>load_product(),[load_product])
  return (
    <>
    <Container className='ctn-productos py-5'>
      {productos.map((product) => (
  <Card  key={product.id} className="productNari col-md-3">
    <Card.Img src={product.imagen} alt={product.name} variant="top" />
    <Card.Body>
      <Card.Title>{product.nombre}</Card.Title>
      <Card.Text className="price">
        {product.precio}
      </Card.Text>
      <Card.Text className="description">
        {product.descripcion}
      </Card.Text>
      <Button variant="primary" className='w-100 d-block add-to-cart-btn'>Agregar al carrito</Button>
    </Card.Body>
  </Card>
))}
      </Container>
    </>
  );
}

export default Productos;