import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Home } from "./components/Home";

const App = () => {
  return (
    <div className="w-full pt-16 px-4 flex flex-col my-0 mx-auto max-w-6xl">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
