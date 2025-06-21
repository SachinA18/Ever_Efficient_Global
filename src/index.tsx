
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ElementLight from "./screens/ElementLight";
import Service from "./screens/ServicesSection";
import AboutUs from "./screens/AboutSection";
import Contact from "./screens/ContactSection";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElementLight />} />
        <Route path="/Services" element={<Service />} />
        <Route path="/About" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
