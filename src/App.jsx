import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import Plans from "./pages/plans/Plans";
import Trainers from "./pages/trainers/Trainers";
import NotFound from "./notFound/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="gallery" element={<Gallery />}></Route>
        <Route path="plans" element={<Plans />}></Route>
        <Route path="trainers" element={<Trainers />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
