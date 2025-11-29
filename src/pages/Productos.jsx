import { useEffect, useState } from "react";
import { BACKEND_URL } from "./config";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch(`${BACKEND_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProductos(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6">Productos disponibles</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {productos.map((prod) => (
          <div key={prod.id} className="bg-white shadow rounded-lg p-4">
            {prod.imagen_url && (
              <img
                src={prod.imagen_url}
                alt={prod.titulo}
                className="w-full h-40 object-cover rounded-md"
              />
            )}
            <h3 className="text-xl font-semibold mt-2">{prod.titulo}</h3>
            <p className="text-gray-600">{prod.descripcion}</p>
            <p className="text-blue-600 font-bold mt-1">{prod.precio} CUP</p>
          </div>
        ))}
      </div>
    </div>
  );
}
