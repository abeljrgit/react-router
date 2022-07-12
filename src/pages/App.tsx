import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Error from "./Error";
import SharedLayout from "./SharedLayout";
import SingleProduct from "./SingleProduct";
import Dashboard from "./Dashboard";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import SharedProductLayout from "./SharedProductLayout";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      {/* <nav>our navbar</nav> */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productId" element={<SingleProduct />} />
          </Route>

          <Route path="login" element={<Login setUser={setUser} />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="dashboard" element={<div>dashboard</div>}>
          <Route path="stats" element={<div>stats</div>} />
        </Route>
      </Routes>
      {/* <footer>our footer</footer> */}
    </BrowserRouter>
  );
}

export default App;
