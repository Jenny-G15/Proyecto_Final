const updateProducto = async (id, imagen, nombre, precio, descripcion) => {
    try {
        const response = await fetch(`http://localhost:3000/products/`+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id,
                 imagen,
                 nombre,
                 precio, 
                 descripcion
            }),
        });
        if (!response.ok) {
            throw new Error('Error al actualizar tarea');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default updateProducto