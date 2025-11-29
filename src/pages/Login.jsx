import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("https://mercadojg-backend.vercel.app/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Error al iniciar sesión");
        return;
      }

      alert("Login exitoso");
      console.log("TOKEN:", data.token);
    } catch (err) {
      setError("Error de conexión");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Iniciar Sesión</h2>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="Correo"
          className="w-full border px-3 py-2 rounded-lg"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full border px-3 py-2 rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg">
          Entrar
        </button>
      </form>
    </div>
  );
}
