import React from "react";
import FeatureProducts from "../Components/Home/FeatureProducts/FeatureProducts";
import img1 from "../Assets/images/Products/p1.png";
import img2 from "../Assets/images/Products/p2.webp";
import img3 from "../Assets/images/Products/p3.webp";
import img4 from "../Assets/images/Products/p4.webp";

const Products = () => {
  const products = [
    {
      _id: 1,
      productName: "Nature Hazmina Plus",
      price: "800",
      image: `${img1}`,
    },
    {
      _id: 2,
      productName: "Nature Hazmina Plus",
      price: "600",
      image: `${img2}`,
    },
    {
      _id: 3,
      productName: "Karkuma Superfood",
      price: "500",
      image: `${img3}`,
    },
    {
      _id: 4,
      productName: "Nature Hazmina Plus",
      price: "700",
      image: `${img4}`,
    },
    {
      _id: 5,
      productName: "Nature Hazmina Plus",
      price: "600",
      image: `${img4}`,
    },
    {
      _id: 6,
      productName: "Nature Hazmina Plus",
      price: "600",
      image: `${img4}`,
    },
  ];
  return (
    <div className="md:px-[103px]">
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <div className="  border border-blue-gray-300 p-11">
            <h1 className="text-2xl font-semibold">Products Categories</h1>
            <div className="mt-8">
              <div className="flex items-center mt-4 mb-8">
                <input type="checkbox" className="w-5 h-5 mr-5" />
                <label>All Medicine</label>
              </div>
              <div className="flex items-center mt-4 mb-8">
                <input type="checkbox" className="w-5 h-5 mr-5" />
                <label>Organic Medicine</label>
              </div>
              <div className="flex items-center mt-4 mb-8">
                <input type="checkbox" className="w-5 h-5 mr-5" />
                <label>Inorganic Medicine</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-3">
          <div className=" flex gap-6 flex-wrap mx-auto justify-center ">
            {products.map((product) => (
              <div className="w-72" key={product._id}>
                <div className="w-72 h-80 p-4 px-8 rounded-xl border-2 border-whiteSmoke ">
                  <h2 className="bg-primary w-10 text-xs rounded-sm ml-44 text-white mt-3">
                    Sale!
                  </h2>
                  <img
                    src={product.image}
                    alt=""
                    className="w-44 mx-auto  h-52 mt-7"
                  />
                </div>
                <div>
                  <h1 className="text-secondary text-sm mt-2">
                    {product.productName}
                  </h1>
                  <p className="text-lightPrimary text-sm mt-2">
                    Tk {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
