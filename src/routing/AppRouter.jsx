import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home, About, Login, Products } from "../public";
import { NotFoundPage } from "./NotFoundPage";
import { AdminGuard } from "./AdminGuard";
import { AdminRouter } from "./AdminRouter";
import { GuestGuard } from "./GuestGuard";

export const AppRouter = ({ children }) => {
  return (
    <HashRouter>
      <Routes>
        {/* Rutas públicas con GuestGuard */}
        <Route element={<GuestGuard />}>
          <Route path="Login" element={<Login />} />
        </Route>

        {/* Rutas principales */}
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />

        {/* Redirigir root a /home */}
        <Route path="/" element={<Navigate to="home" />} />

        {/* Rutas privadas con AdminGuard */}
        <Route element={<AdminGuard />}>
          <Route path="private/*" element={<AdminRouter />} />
        </Route>

        {/* NotFound */}
        <Route path="404" element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to="404" />} />
      </Routes>

      {children}
    </HashRouter>
  );
};