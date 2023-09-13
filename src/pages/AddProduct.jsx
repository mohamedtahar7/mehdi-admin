import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import { categories } from "../utils/categories";
import { apiLink } from "../utils/apiLink";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [dimensions, setDimensions] = useState("");
  const newCategories = [
    categories[1],
    categories[2],
    categories[3],
    categories[4],
  ];
  const images = [image1, image2];
  const navigate = useNavigate();
  const handleCreate = () => {
    const data = { name, price, category, description, images, dimensions };
    axios
      .post(`${apiLink}/products`, data)
      .then(() => {
        alert("Product Added Successfully!");
        navigate("/admin/products");
      })
      .catch((err) => {
        alert("An error happened, please check console");
        console.log(err);
      });
  };
  return (
    <div className="flex items-center">
      <Sidebar />
      <div className="w-[80vw] absolute right-0 top-0 px-10">
        <h1 className="text-[#11334f] text-center text-4xl font-medium mt-6">
          Add A Product
        </h1>
        <div className="flex mt-16 flex-col items-center gap-4">
          <input
            className="py-1 px-4 bg-gray-300 placeholder-black w-[40%]"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="py-1 px-4 bg-gray-300 placeholder-black w-[40%]"
            placeholder="Price"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <select
            className="py-1 px-4 bg-gray-300 placeholder-black w-[40%]"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Choose a Category</option>
            {newCategories.map((category, index) => (
              <option value={category}>{category}</option>
            ))}
          </select>
          <input
            className="py-1 px-4 bg-gray-300 placeholder-black w-[40%]"
            type="text"
            placeholder="Image 1"
            value={image1}
            onChange={(e) => {
              setImage1(e.target.value);
            }}
          />
          <input
            className="py-1 px-4 bg-gray-300 placeholder-black w-[40%]"
            type="text"
            placeholder="Image 2"
            value={image2}
            onChange={(e) => setImage2(e.target.value)}
          />
          <input
            className="py-1 px-4 bg-gray-300 placeholder-black w-[40%]"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="py-1 px-4 bg-gray-300 placeholder-black w-[40%]"
            type="text"
            placeholder="Dimensions"
            value={dimensions}
            onChange={(e) => setDimensions(e.target.value)}
          />
          <button
            className="bg-[#11334f] text-xl py-2 px-4 rounded-lg text-white"
            onClick={handleCreate}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
