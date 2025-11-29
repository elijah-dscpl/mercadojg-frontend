import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Publicar from "./pages/Publicar";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/publicar" element={<Publicar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
