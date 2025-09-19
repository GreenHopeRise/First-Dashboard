import React, { use, useState } from "react";
import { products as Data } from "../data/productsData";
import { GrDocumentUpdate } from "react-icons/gr";
import { MdAddCircleOutline, MdAssignmentAdd, MdOutlineDeleteSweep, MdOutlineManageSearch } from "react-icons/md";
import { FaPersonWalkingArrowLoopLeft, FaPersonWalkingArrowRight } from "react-icons/fa6";
const Products = () => {
  const [products, setProducts] = useState(Data);

  // Table Sorting function
  const [sortAsc, setSortAsc] = useState(true);
  const sortByName = () => {
    const sorted = [...products].sort((a, b) =>
      sortAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setProducts(sorted);
    setSortAsc(!sortAsc);
  };

  // Search or Filtering
  const [query, setQuery] = useState("");
  const filterProduct = products.filter(
    (product) =>
      product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
      product.category.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 10;
  const lastProductIndex = currentPage * productPerPage;
  const firstProductIndex = lastProductIndex - productPerPage;
  const currentProductPage = filterProduct.slice(
    firstProductIndex,
    lastProductIndex
  );

  // Data Add Update
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(null);
  const [updateProductId, setUpdateProductId] = useState(null);
  const handleAdd = (e) => {
    e.preventDefault();
    if (!name || !price || !category || !stock) {
      alert("Please fill all fields");
      return;
    }
    if (updateProductId !== null) {
      const updateProduct = products.map((product) =>
        product.id === updateProductId
          ? { ...product, name, price, category, stock }
          : product
      );
      setProducts(updateProduct);
      setUpdateProductId(null);
      setName("");
      setPrice("");
      setCategory("");
      setStock("");
      return;
    }
    const newProduct = {
      id: products.length + 1,
      name,
      price,
      category,
      stock,
    };
    setProducts([newProduct, ...products]);
    setName("");
    setPrice("");
    setCategory("");
    setStock("");
  };

  // Delete 
  const handleDelete = (id)=>{
    const newProducts = products.filter((product)=>product.id !== id)
    setProducts(newProducts)
  }


  // xml here
  return (
    <div className="overflow-x-auto bg-gray-50 rounded-lg shadow-lg shadow-blue-200 mt-3 p-6">
      <h2 className="font-bold text-3xl mb-6 text-blue-500 text-shadow-sm text-shadow-blue-100 ">Products</h2>
      <input
        type="text"
        placeholder='🔍  by name or catecory'
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        className="border border-gray-300 focus:right-2 focus:ring-blue-400 focus:border-blue-400 px-4 py-3 mb-6 rounded-md transition duration-200 bg-green-50 shadow-lg shadow-green-100 w-1/2"
      />
      <table className="min-w-full bg-white shadow-xl shadow-green-100 ">
        <thead>
          <tr className="bg-green-200">
            <th className="px-6 py-3  border-b border-green-300 text-left text-sm font-semibold text-gray-700  ">
              Index
            </th>
            <th
              className="px-6 py-3  border-b border-green-300 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:text-blue-600"
              onClick={sortByName}
              title={sortAsc?'Sort Descending':'Sort Ascending'}
              
            >
              Name {sortAsc ? "↑" : "↓"}
            </th>
            <th className="px-6 py-3  border-b border-green-300 text-left text-sm font-semibold text-gray-700 ">
              Price
            </th>
            <th className="px-6 py-3  border-b border-green-300 text-left text-sm font-semibold text-gray-700 ">
              Category
            </th>
            <th className="px-6 py-3  border-b border-green-300 text-left text-sm font-semibold text-gray-700 ">
              Stock
            </th>
            <th className="px-6 py-3  border-b border-green-300 text-left text-sm font-semibold text-gray-700 ">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {currentProductPage.map((product) => (
            <tr
              key={product.id}
              className="text-gray-700 hover:bg-blue-50 transition-colors "
            >
              <td className="px-6 py-4 border-t bg-green-50 border-gray-200">
                {product.id}
              </td>
              <td className="px-6 py-4 border-t bg-green-50 border-gray-200">
                {product.name}
              </td>
              <td className="px-6 py-4 border-t bg-green-50 border-gray-200">
                ${product.price}
              </td>
              <td className="px-6 py-4 border-t bg-green-50 border-gray-200">
                {product.category}
              </td>
              <td className="px-6 py-4 border-t bg-green-50 border-gray-200">
                {product.stock}
              </td>
              <td className="px-6 py-4 border-t bg-green-50 border-gray-200">
                <div className="flex gap-3">
                  {/* Update Button */}
                  <button
                    className="p-2 shadow-lg shadow-blue-200 rounded-full bg-blue-100 cursor-pointer text-blue-600 hover:bg-blue-200 transition"
                    title="Update"
                    onClick={() => {
                      setUpdateProductId(product.id);
                      setName(product.name);
                      setPrice(product.price);
                      setCategory(product.category);
                      setStock(product.stock);
                    }}
                  >
                    <GrDocumentUpdate size={18} />
                  </button>

                  {/* Delete Button */}
                  <button
                    className="p-2 shadow-lg shadow-red-200 cursor-pointer rounded-full bg-red-100 text-red-600 hover:bg-red-200 transition"
                    title="Delete"
                    onClick={()=>handleDelete(product.id)}
                  >
                    <MdOutlineDeleteSweep size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex gap-3 mt-6 justify-center items-center">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md font-medium transition-colors ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed text-gray-600 "
              : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 cursor-pointer"
          }`}
        >
          <FaPersonWalkingArrowLoopLeft />
        </button>
        <span className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 shadow-lg rounded">
          {currentPage}/{Math.ceil(filterProduct.length / productPerPage)}
        </span>
        
        <button
          className={`px-4 py-2 rounded-md font-medium transition-colors  ${
            currentPage === Math.ceil(filterProduct.length / productPerPage)
              ? "bg-gray-300 cursor-not-allowed text-gray-600"
              : "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200 cursor-pointer"
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(filterProduct.length / productPerPage)
          }
        >
          <FaPersonWalkingArrowRight />
        </button>
        
      </div>
      <div className="mt-8">
        <form
          className="flex flex-col sm:flex-row gap-4 items-center justify-center"
          onSubmit={handleAdd}
        >
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border shadow-lg border-gray-300 rounded-md px-4 bg-green-50 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-green-100 w-full sm:w-1/4"
          />
          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border shadow-lg border-gray-300 rounded-md px-4 py-3 bg-green-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-green-100 w-full sm:w-1/4"
          />
          <input
            type="text"
            placeholder="Enter category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border shadow-lg border-gray-300 rounded-md px-4 py-3 bg-green-50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-green-100 w-full sm:w-1/4"
          />
          <input
            type="number"
            placeholder="Enter stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="border shadow-lg border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 shadow-green-100 w-full sm:w-1/4 bg-green-50 "
          />
          <button type="submit"
          className="border-none  rounded-full p-3 bg-green-100 hover:bg-green-300 cursor-pointer transition shadow-lg shadow-green-200 text-green-600 hover:text-green-800">
            <MdAddCircleOutline className="size-6 "/>
          </button>
        </form>
      </div>
    </div>
  );
};
export default Products;