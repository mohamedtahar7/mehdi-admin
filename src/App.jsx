import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminProducts from "./pages/AdminProducts";
import AddProducts from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import DeleteProduct from "./pages/DeleteProduct";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Admin />} />
      <Route path="/admin/products" element={<AdminProducts />} />
      <Route path="/admin/add" element={<AddProducts />} />
      <Route path="/admin/edit/:id" element={<EditProduct />} />
      <Route path="/admin/delete/:id" element={<DeleteProduct />} />
    </Routes>
  );
}

export default App;
