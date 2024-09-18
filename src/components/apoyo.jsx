import React, { useState } from 'react';

// Componente de Producto (tarjeta)
const ProductoCard = ({ producto, eliminarProducto }) => {
  return (
    <div style={styles.card}>
      <h3>{producto.nombre}</h3>
      <button onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
    </div>
  );
};

// Componente principal
const App = () => {
  const [productos, setProductos] = useState([]);
  const [nombreProducto, setNombreProducto] = useState('');

  const agregarProducto = () => {
    if (nombreProducto.trim()) {
      setProductos([
        ...productos,
        { id: productos.length + 1, nombre: nombreProducto },
      ]);
      setNombreProducto('');
    }
  };

  const eliminarProducto = (id) => {
    setProductos(productos.filter((producto) => producto.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1>Agregar Productos</h1>
      <input
        type="text"
        value={nombreProducto}
        onChange={(e) => setNombreProducto(e.target.value)}
        placeholder="Nombre del producto"
      />
      <button onClick={agregarProducto}>Agregar</button>

      <div style={styles.cardsContainer}>
        {productos.map((producto) => (
          <ProductoCard
            key={producto.id}
            producto={producto}
            eliminarProducto={eliminarProducto}
          />
        ))}
      </div>
    </div>
  );
};


const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  cardsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    width: '150px',
    textAlign: 'center',
  },
};

export default App;