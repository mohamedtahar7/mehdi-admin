import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import ProductDash from "../components/ProductDash";
import axios from "axios";
const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://mehdi-api.onrender.com/products")
      .then((res) => setProducts(res.data.data));
  }, []);
  return (
    <div className="flex items-center">
      <Sidebar />
      <div className="w-[80vw] absolute right-0 top-0 px-10">
        <h1 className="text-[#11334f] text-center text-4xl font-medium mt-6">
          All Products
        </h1>
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-12">
          {products.map((product, index) => (
            <ProductDash product={product} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminProducts;
