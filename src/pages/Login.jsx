import { useState } from "react";
import { BACKEND_URL } from "../config";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch(`${BACKEND_URL}/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        // backend envía msg para errores
        setError(data.msg || "Error al iniciar sesión");
        return;
      }

      // Login exitoso: guardamos el usuario
      localStorage.setItem("user", JSON.stringify(data.user));
      alert(`Bienvenido, ${data.user.name}`);

      // Redirigir a otra página si quieres
      window.location.href = "/"; // o "/produ
