import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const [visible, setVisible] = useState(false);

  const location = useLocation(); // using this hook we get path of url
  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center rounded-xl shadow-xl mb-5 ">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search"
          className="flex-1 outline-none bg-inherit text-sm lg:text-lg"
        />
        <img src={assets.search_icon} alt="" className="w-4" />
      </div>
      <img
        src={assets.cross_icon}
        alt=""
        className="inline w-3 cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
