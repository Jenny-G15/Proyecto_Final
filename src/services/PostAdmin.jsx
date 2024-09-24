async function PostAdmin(email,codigo,) {
    try {
      const AdminData = {
        email,
        codigo,
      };
      const response = await fetch("http://localhost:3000/admin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(AdminData),
      });
      return await response.json();
    } catch (error) {
      console.error("usuario invalido:", error);
      throw error;
    }
}

export default PostAdmin