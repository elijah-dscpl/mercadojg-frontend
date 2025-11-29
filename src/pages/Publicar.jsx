import { useState } from "react";
import { BACKEND_URL } from "./config";

export default function Publicar() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [message, setMessage] = useState("");

  const handlePublicar = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(`${BACKEND_URL}/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo: title, descripcion: description, precio: price, imagen_url: image, negocio_id: businessId }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Error al publicar producto");
        return;
      }

      setMessage("Producto publicado con éxito");
      setTitle(""); setDescription(""); setPrice(""); setImage(""); setBusinessId("");
    } catch {
      setMessage("Error de conexión");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form onSubmit={handlePublicar} className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Publicar Producto</h2>

        {message && <p className="text-green-600 text-sm">{message}</p>}

        <input placeholder="ID del negocio" className="w-full border px-3 py-2 rounded-lg" value={businessId} onChange={(e) => setBusinessId(e.target.value)} required />
        <input placeholder="Título" className="w-full border px-3 py-2 rounded-lg" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input placeholder="Descripción" className="w-full border px-3 py-2 rounded-lg" value={description} onChange={(e) => setDescription(e.target.value)} />
        <input placeholder="Precio" type="number" className="w-full border px-3 py-2 rounded-lg" value={price} onChange={(e) => setPrice(e.target.value)} required />
        <input placeholder="URL de imagen" className="w-full border px-3 py-2 rounded-lg" value={image} onChange={(e) => setImage(e.target.value)} />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">Publicar</button>
      </form>
    </div>
  );
}
