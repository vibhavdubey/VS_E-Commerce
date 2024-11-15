import { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import ProductItem from "../components/ProductItem";
import Title from "../components/Title";
import { ShopContext } from "../context/ShopContext";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relavent");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      // if the category is present we will remove it
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      // if the category is not present we will add it
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        // we are converting our name and search to filter the products.
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }
    setFilterProducts(productsCopy);
  };

  const sortProduct = () => {
    let filterProductCopy = filterProducts.slice();
    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
        break;

      default:
        applyFilter();
        break;
    }
  };

  // we will remove this useEffect because we have added our logic in applyFilter function.
  // useEffect(() => {
  //   setFilterProducts(products);
  // }, []);

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  // useEffect(() => {
  //   console.log(category);
  //   console.log(subCategory);
  // }, [category, subCategory]);

  return (
    <div className="flex flex-col md:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p
          className="my-2 text-xl lg:text-2xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS{" "}
          <img
            src={assets.dropdown_icon}
            alt=""
            className={`h-3 md:hidden ${showFilter ? "rotate-90" : ""}`}
          />
        </p>
        {/* category filter */}
        <div
          className={`bg-gray-100 pl-5 py-3 mt-6 shadow-2xl shadow-orange-50 rounded-xl
            ${showFilter ? "" : "hidden"} md:block`}
        >
          <p className="mb-3 text-sm lg:text-lg font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm lg:text-lg font-light  text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Men"}
                onChange={toggleCategory}
              />
              Men
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Women"}
                onChange={toggleCategory}
              />
              Women
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Kids"}
                onChange={toggleCategory}
              />
              Kids
            </p>
          </div>
        </div>
        {/* subcategory filter */}
        <div
          className={`bg-gray-100 pl-5 py-3 my-5 shadow-2xl shadow-orange-50 rounded-xl
            ${showFilter ? "" : "hidden"} md:block`}
        >
          <p className="mb-3 text-sm lg:text-lg font-medium">Type</p>
          <div className="flex flex-col gap-2 text-sm lg:text-lg font-light text-gray-700 ">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Topwear"}
                onChange={toggleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Bottomwear"}
                onChange={toggleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"Winterwere"}
                onChange={toggleSubCategory}
              />
              Winterwere
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />
          {/* product sort */}
          {/* <select
            onChange={(e) => setSortType(e.target.value)}
            className="shadow-xl bg-gray-100 text-sm px-2 rounded-xl "
          >
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select> */}

          <select
            onChange={(e) => setSortType(e.target.value)}
            className="shadow-md bg-gray-100 text-gray-700 text-sm lg:text-lg px-3 py-2 rounded-lg border border-gray-200 hover:bg-gray-200 focus:border-blue-500 focus:outline-none transition duration-200 ease-in-out appearance-none"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        {/* map products */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gay-y-6">
          {filterProducts &&
            filterProducts.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }} // Delay creates a staggered effect
              >
                <ProductItem
                  key={index}
                  name={item.name}
                  id={item._id}
                  price={item.price}
                  image={item.image}
                />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
