import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "./stylesheets/alignments.css";
import "./stylesheets/custom.css";
import "./stylesheets/form-elements.css";
import "./stylesheets/sizes.css";
import "./stylesheets/theme.css";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import SellerProperties from "./pages/Seller/SellerProperties";
import CreateProperty from "./pages/createProperty/PropertyForm";
import PropertyPage from "./pages/PropertyPage";
import { useSelector } from "react-redux";

function App() {
  const { loading } = useSelector((state) => state.loaders);
  return (
    <div className="App">
      {loading && (
        <div className="loader-parent">
          <div className="loader"></div>
        </div>
      )}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/seller-properties"
            element={
              <ProtectedRoute>
                <SellerProperties />
              </ProtectedRoute>
            }
          />
          <Route
            path="/add-property"
            element={
              <ProtectedRoute>
                <CreateProperty />
              </ProtectedRoute>
            }
          />
          <Route
            path="/user/property/:id"
            element={
              <ProtectedRoute>
                <PropertyPage />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
