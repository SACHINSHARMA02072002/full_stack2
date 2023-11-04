import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Wel from "./wel";
import Footer from "./Footer";
import ButtonUsage from "./Button";
import Lyout from "./Lyout";
import Home from "./Home";
import Blogs from "./Blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <React.StrictMode>
  //     <div>
  //       <Footer />

  //       <App />

  //       <Wel />

  //       <ButtonUsage />
  //     </div>
  //   </React.StrictMode>
  // );

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Lyout />} />
      <Route index element={<Home />} />
      <Route path="Blogs" element={<Blogs/>} />
    </Routes>
  </BrowserRouter>
);
