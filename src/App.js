import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
//pages
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import Error from "./pages/Error";
import SingleRooms from "./pages/SingleRooms";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Provide the `element` prop for the root path */}
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:slug" element={<SingleRooms />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
