import DetailMovie from "@/pages/movies/DetailMovie";
import ListFavorite from "@/pages/movies/ListFavorite";
import Index from "@/pages";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Index />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<DetailMovie />} path="/detail/:id" />
        <Route element={<ListFavorite />} path="/list-favorite" />

        <Route
          element={<p className="text-white font-semibold text-2xl text-center">page not found </p>}
          path="*"
        />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
