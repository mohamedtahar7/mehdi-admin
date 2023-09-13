import Sidebar from "../components/Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { apiLink } from "../utils/apiLink";
const DeleteProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleDelete = () => {
    axios
      .delete(`${apiLink}/products/${id}`)
      .then(() => {
        alert("Product deleted Successfully");
        navigate("/admin/products");
      })
      .catch((err) => {
        alert("An error has occured, please check console");
        console.log(err);
      });
  };
  return (
    <div className="flex items-center">
      <Sidebar />
      <div className="w-[80vw] pt-24 absolute right-0 top-0 px-10">
        <h1 className="text-[#11334f] text-4xl text-center font-medium">
          Are You sure you want to delete this Product
        </h1>
        <div className="flex mt-5 items-center justify-center gap-10">
          <button
            onClick={handleDelete}
            className="text-xl py-2 px-4 rounded-lg text-white bg-red-600"
          >
            Yes, Delete It
          </button>
          <button
            onClick={() => navigate("/admin/products")}
            className="text-xl text-white py-2 px-4 rounded-lg bg-green-600"
          >
            No, Keep It
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
