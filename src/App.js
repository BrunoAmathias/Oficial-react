import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio";
import Navbar from "./layouts/Navbar";
import Container from "./layouts/container";
import Footer from "./layouts/footer";

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cardapio" element={<Cardapio/>}/>
      </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
