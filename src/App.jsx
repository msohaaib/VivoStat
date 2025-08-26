import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Blog from "./Pages/Blogs";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Channels from "./Pages/Channels";
import Features from "./Pages/Features";
import Pricing from "./Pages/Pricing";

function AppLayout() {
  const location = useLocation();

  // List of routes where Navbar & Footer should be hidden
  const hiddenLayoutRoutes = ["/login", "/signup"];

  // Check if current path matches one of the hidden routes
  const hideLayout = hiddenLayoutRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-[rgb(255,255,250)]">
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/channels" element={<Channels />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/pricing" element={<Pricing />} />
        {/* Example future page */}
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
      </Routes>
      {!hideLayout && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
