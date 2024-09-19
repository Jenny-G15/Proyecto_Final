async function PostProductos(imagen, nombre, precio, descripcion) {
  try {
    const productData = {
      imagen,
      nombre,
      precio,
      descripcion
    };
    console.log('Sending Product Data:', productData);
    
    const response = await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    return await response.json();
  } catch (error) {
    console.error("producto invalido:", error);
    throw error;
  }
}

export default PostProductos