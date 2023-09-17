import { BsFillCartFill, BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="bg-[#11334f] fixed top-0 h-screen w-[20vw]">
      <Link to={"/"} className="flex items-center justify-center pt-6">
        <img
          className="sm:w-48 w-40"
          src={"https://i.postimg.cc/W1BsKp5s/LOGO-VIDE-2.png"}
          alt="uniconfort meuble logo"
        />
      </Link>
      <div className="flex flex-col items-center mt-20 gap-4">
        <Link
          to={"/admin/products"}
          className="flex hover:opacity-80 transition-all justify-center gap-4 items-center"
        >
          <BsFillCartFill className="text-white" size={30} />
          <h2 className="text-white text-xl">View All Products</h2>
        </Link>
        <Link
          to={"/admin/add"}
          className="flex hover:opacity-80 transition-all gap-4 items-center justify-center"
        >
          <BsFillCartPlusFill className="text-white" size={30} />
          <h2 className="text-xl text-white">Add a Product</h2>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
