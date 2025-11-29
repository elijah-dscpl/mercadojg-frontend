import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="text-center min-h-screen flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl font-bold text-gray-800">
        Bienvenido a MercadoJG
      </h1>
      <p className="text-gray-600 mt-4 max-w-md">
        El marketplace de Jagüey Grande: Compra, vende y conecta con tu pueblo.
      </p>

      <div className="mt-8">
        <Link
          to="/productos"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Ver productos
        </Link>
      </div>
    </div>
  );
}
