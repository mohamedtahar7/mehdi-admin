import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const ProductDash = ({ product }) => {
  const { name, images, category, _id, price } = product;
  return (
    <div className="relative border-2 border-gray-300">
      <div className="p-5">
        <img src={images[0]} alt="product image" />
        <h2 className="text-center text-[#11334f] text-xl ">{name}</h2>
        <div className="flex items-center justify-center">
          <h2 className="text-center text-[#11334f] text-xl">{price} DA</h2>
        </div>
      </div>
      <div className="absolute bottom-0 right-1 flex gap-2 items-center">
        <Link to={`/admin/edit/${_id}`}>
          <AiFillEdit size={30} className="text-yellow-600" />
        </Link>
        <Link to={`/admin/delete/${_id}`}>
          <AiFillDelete size={30} className="text-red-600" />
        </Link>
      </div>
    </div>
  );
};

export default ProductDash;
