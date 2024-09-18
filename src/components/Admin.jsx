import React, { useState } from 'react';
import convertToBase64 from '../controller/ConverToBase64'
import PostProductos from '../services/PostCard'
 
const Admin = () => {
  const [baseImage, setBaseImage]= useState(null)
  const [name, setName]= useState('')
  const [price, setPrice]= useState('')
  const [description, setDescription]= useState('')

  
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
  
    try {
      const base64Image = await convertToBase64(file);
      setBaseImage(base64Image);
    } catch (error) {
      console.error('Error while converting to Base64:', error);
    }
  };

  
  // const fetchProducts = async () => {
  //   const data = await GetCards();
  //   setProducts(data);
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const AgregarCambio= (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const addProduct = async (e) => {
    e.preventDefault();
    await PostProductos(baseImage, name, price, description)
    // fetchProducts();
  };

  // const deleteProduct = async (id) => {
  //   await deleteProducto(id);
  //   fetchProducts();
  // };

  // const editProduct = (product) => {
  //   setFormData(product);
  //   setIsEditing(true);
  // };

  // const updateProduct = async (e) => {
  //   e.preventDefault();
  //   await fetch(`http://localhost:3000/products/${formData.id}`, {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(formData),
  //   });
  //   resetForm();
  //   fetchProducts();
  // };

  const resetForm = () => {
    setName('')    
    setPrice('')
    setDescription('')
  };

  return (
    <div>
      <form onSubmit={addProduct}>
        <input
          type="file"
          name="image"
          placeholder="Imagen (base64)"
          onChange={handleFileUpload}
          required
        />
         <input
          type="text"
          name='nombre'
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          name="price"
          placeholder="Precio"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Agregar producto</button>
        <button type="button" onClick={resetForm}>Cancelar</button>
      </form>
    </div>
  );
};

export default Admin;
