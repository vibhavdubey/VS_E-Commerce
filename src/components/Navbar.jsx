import { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import { MdLightMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const Navbar = () => {
  const { setShowSearch, getCartCount } = useContext(ShopContext);
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [rotate, setRotate] = useState(0);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const toggleTheme = () => {
    setIsLightTheme((prevTheme) => !prevTheme);
    setRotate((prev) => prev + 180);
  };
  useEffect(() => {
    document.body.style.background = isLightTheme
      ? "white"
      : "linear-gradient(to right, #4CC9FE, #86D293)";

    return () => {
      document.body.style.background = "";
    };
  }, [isLightTheme]);

  return (
    <div className="flex items-center justify-between py-5 px-2 rounded-xl shadow-gray-200 font-medium shadow-lg mb-10">
      <Link to="/VS_E-Commerce/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/VS_E-Commerce"
          className="flex flex-col items-center gap-1"
        >
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/VS_E-Commerce/collection"
          className="flex flex-col items-center gap-1"
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/VS_E-Commerce/about"
          className="flex flex-col items-center gap-1 "
        >
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/VS_E-Commerce/contact"
          className="flex flex-col items-center gap-1"
        >
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-6">
        <div
          className="text-2xl transition-transform duration-300"
          style={{
            transform: `rotate(${rotate}deg)`,
            transformOrigin: "center",
          }}
        >
          {isLightTheme ? (
            <MdLightMode onClick={toggleTheme} className="cursor-pointer" />
          ) : (
            <MdOutlineLightMode
              onClick={toggleTheme}
              className="cursor-pointer"
            />
          )}
        </div>

        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />

        <div className="group relative">
          <Link to="/VS_E-Commerce/login">
            <img
              src={assets.profile_icon}
              className="w-5 cursor-pointer"
              alt=""
            />
          </Link>

          {/* dropdown */}
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p
                className="cursor-pointer hover:text-black"
                onClick={() => navigate("/VS_E-Commerce/orders")}
              >
                Orders
              </p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>

        <Link to="/VS_E-Commerce/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
          onClick={() => setVisible(true)}
        />
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all 
          ${visible ? "w-full" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            className="flex items-center gap-4 p-3 cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="" />
            <p>Back</p>
          </div>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/VS_E-Commerce/"
          >
            HOME
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/VS_E-Commerce/collection"
          >
            COLLECTION
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/VS_E-Commerce/about"
          >
            ABOUT
          </NavLink>

          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border"
            to="/VS_E-Commerce/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
