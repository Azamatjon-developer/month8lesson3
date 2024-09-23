import { useEffect, useState } from "react";
import { useAxios } from "../hooks/UseAxios";
import { ProductType } from './ProductType'; // Assuming you have a separate ProductType file

const Products = () => {
  const [products, setProducts] = useState<Array<ProductType>>([]);

  useEffect(() => {
    useAxios("/products").then((res) => {
      setProducts(
        res.data.products.map((item: any) => {
          const data: ProductType = {
            id: item.id,
            title: item.title,
            brands: item.brands,
            price: item.price,
            description: item.description,
            imgUrl: item.images[0],
            category: item.category,
          };
          return data;
        })
      );
    });
  }, []);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-10">My  Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <img
              className="w-full h-48 object-cover"
              src={product.imgUrl}
              alt={product.title}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">{product.title}</h3>
              <p className="text-gray-500">{product.brands}</p>
              <p className="text-lg font-bold text-indigo-600">${product.price}</p>
              <p className="text-gray-600 mt-4">{product.description}</p>
              <p className="text-gray-400 text-sm mt-2">{product.category}</p>
              <button className="mt-6 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
