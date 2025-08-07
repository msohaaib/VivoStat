import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Blog from "./Pages/Blogs";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Channels from "./Pages/Channels";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[rgb(255,255,250)]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
