export default deleteProducto = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Error al eliminar producto');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
};
