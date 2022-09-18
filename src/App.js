import { Routes, Route, Link } from "react-router-dom";
import { SomeList } from "./pages/SomeList";
import { NavList } from "./components/NavList";
import { HomePage } from "./pages/HomePage";
import { StarRating } from "./pages/StarRating";
import { ListingPage } from "./pages/ListingPage";
import { FormPage } from "./pages/FormPage";
import Scoped from "./pages/Scoped";
import Nav from "./components/data/Nav";

import "./App.css";
import "./css/reset.css";
import "./css/header.css";

function App() {
  const nav = new Nav();

  return (
    <>
      <NavList items={nav.links} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/some-list" element={<SomeList />} />
        <Route path="/scoped" element={<Scoped />} />
        <Route path="/stars" element={<StarRating />} />
        <Route path="/listing" element={<ListingPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </>
  );
}

export default App;
