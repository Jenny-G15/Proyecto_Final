export default updateProducto = async (id, nombre, descripcion, precio, imagen) => {
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                 nombre,
                 descripcion,
                precio, 
                imagen
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