import React, { useCallback, useEffect, useState } from 'react';
import convertToBase64 from '../controller/ConverToBase64';
import PostProductos from '../services/PostCard';
import "../styles/admin.css";
import GetProductos from '../services/GetCards';
import deleteProducto from '../services/DeleteCards';
import updateProducto from '../services/Put';

function Admin() {
  const [producto, setProductos] = useState([]);
  const [baseImage, setBaseImage] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [editando, setEditando] = useState(false);
  const [nombre, setnombre] = useState("");
  const [precio, setprecio] = useState("");
  const [descripcion, setdescripcion] = useState("");
  const [id, setid] = useState("");
  const [imagen, setimagen] = useState("");

  const agregandoImagen = async (event) => {
    const file = event.target.files[0];

    try {
      const base64Image = await convertToBase64(file);
      setBaseImage(base64Image);
    } catch (error) {
      console.error('Error while converting to Base64:', error);
    }
  };

  const load_product = useCallback(() => {
    const fetchProducts = async () => {
      try {
        const response = await GetProductos();
        setProductos(response);
      } catch (error) {
        console.error("Error fetching Products", error);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => load_product(), [load_product]);

  const addProduct = async (e) => {
    e.preventDefault();

    try {
      await PostProductos(baseImage, name, price, description);
      resetForm();
    } catch {
      console.error('Falla el post de productos');
    }

    load_product()
  };

  const resetForm = () => {
    setName('');
    setPrice('');
    setDescription('');
    setBaseImage(null);
  };

  const empezarEdicion = (id, imagen) => {
    setEditando(true);
    setid(id);
    setimagen(imagen);
  };

  const guardarEdicion = async (id, imagen, nombre, precio, descripcion) => {
    console.log("id", id, "nombre", nombre, "precio", precio, "descripcion", descripcion);

    try {
      const response = await updateProducto(id, imagen, nombre, precio, descripcion);
      load_product();
      console.log(response);
      setEditando(false);
    } catch (error) {
      console.error('Error al editar', error);
    }
    
  };

  const eliminarProducto = async (id) => {
    await deleteProducto(id);
    load_product(); // Recargar productos después de eliminar
  };

  console.log(producto);
  

  return (
    <div id="agregar-producto">
      <form id="form-agregar-producto" onSubmit={addProduct}>
        <input
          type="file"
          id="input-imagen"
          name="image"
          placeholder="Imagen (base64)"
          onChange={agregandoImagen}
          required
        />
        <input
          type="text"
          id="input-nombre"
          name='nombre'
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          id="input-precio"
          name="price"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          id="input-descripcion"
          name="description"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <div className="button-container">
          <button type="submit" className="btn-agregar">Agregar producto</button>
          <button type="button" className="btn-cancelar" onClick={resetForm}>Cancelar</button>
        </div>
      </form>

      {editando && (
        <div id="editar-producto" className="formulario-edicion">
          <h3>Editar Producto</h3>
          <input
            type="text"
            onChange={(e) => setnombre(e.target.value)}
            placeholder="Nombre"
            className="input-field"
          />
          <input
            type="text"
            onChange={(e) => setprecio(e.target.value)}
            placeholder="Precio"
            className="input-field"
          />
          <input
            type="text"
            onChange={(e) => setdescripcion(e.target.value)}
            placeholder="Descripción"
            className="input-field"
          />
          <div className="button-container">
            <button className="btn guardar" 
              onClick={() => guardarEdicion(id, imagen, nombre, precio, descripcion)}>Guardar</button>
            <button className="btn cancelar" onClick={() => setEditando(false)}>Cancelar</button>
          </div>
        </div>
      )}

      <div className="cardProducts">
        {producto.map((product) => (
          <div key={product.id} className="product-card ">
            <img src={product.imagen} alt={product.nombre} style={{ width: '100px', height: '100px' }} />
            <h3>{product.nombre}</h3>
            <p>Precio: {product.precio}</p>
            <p>{product.descripcion}</p>
            <button onClick={() => eliminarProducto(product.id)}>Eliminar</button>
            <button onClick={() => empezarEdicion(product.id, product.imagen)}>Editar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
