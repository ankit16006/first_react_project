import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
// import "C:Users/Ankit/Desktop/Reactjs/project1/node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "C:Users/Ankit/Desktop/Reactjs/project1/node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import Home from "./files/Home";
import About from "./files/About";
import Contact from "./files/Contact";
import Service from "./files/Service";
import Navbar from "./files/Navbar";
import Footer from "./files/Footer";
import Order from "./order/Order";
import Tip from "./order/components/Cart/TipCal/Tip";
import { Routes, Route } from "react-router-dom";

const App = ()  => {
  return(
<>
<Navbar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact"element={<Contact />}/>
  <Route path="/service" element={<Service />}/>
  <Route path="/order" element={<Order />}/>
  <Route path="tip" element={<Tip />}/>
  {/* <Redirect to="/" /> */}

</Routes>
<Footer />

</>
  );
}
export default App;
