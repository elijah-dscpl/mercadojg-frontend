import { Link } from "react-router-dom";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600">
            MercadoJG
          </Link>
          <div className="space-x-4">
            <Link to="/productos" className="text-gray-700 hover:text-blue-600">Productos</Link>
            <Link to="/publicar" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Publicar
            </Link>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
}
