import { useContext } from 'react';
import { ProductType } from '../pages/Products';
import { FaShoppingBasket } from "react-icons/fa";
import { IoIosRemove } from "react-icons/io";

import { Context } from '../context/Context';
import toast from 'react-hot-toast';

const ProductItem: React.FC<{ item: ProductType }> = ({ item }) => {
    const {setOrderList,orderList} = useContext(Context)
    const locationPath = location.pathname
    function handleRemoveItem (id:number) {
      const removeItem = orderList.findIndex((item : ProductType) => item.id == id)
      orderList.splice(removeItem, 1)
      setOrderList([...orderList]) 
    } 
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
      <img
        src={item.imgUrl}
        alt={item.title}
        className="w-full h-56 object-cover rounded-t-lg"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          {item.title}
        </h3>
        <p className="text-gray-500 mb-4">{item.brands}</p>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {item.description}
        </p>
        <p className="text-indigo-400 font-medium mb-4 text-sm uppercase">
          {item.category}
        </p>
        <p className="text-2xl font-bold text-indigo-600 mb-4">
          ${item.price}
        </p>
        {locationPath == "/orders" ?   <button onClick={() => {
          handleRemoveItem(item.id)
          toast.success("Product removed successfully")
        }} className="flex items-center justify-center mt-4 w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition-colors duration-300">
           Remove 
          <IoIosRemove className="ml-2 text-[24px]" />
        </button> :   <button onClick={() => {
          setOrderList([...orderList,item])
          toast.success("Product added successfully")
        }} className="flex items-center justify-center mt-4 w-full bg-indigo-500 text-white py-3 rounded-lg hover:bg-indigo-600 transition-colors duration-300">
          Order Now
          <FaShoppingBasket className="ml-2 text-[24px]" />
        </button>}
      
      </div>
    </div>
  );
}

export default ProductItem;
