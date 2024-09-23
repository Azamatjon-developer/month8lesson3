import { useContext } from "react";
import { Context } from "../context/Context";
import { ProductType } from "./Products";
import ProductItem from "../components/ProductItem";

const Orders = () => {
  const { orderList } = useContext(Context);

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold text-center mb-10">My  Orders products</h2>
      {orderList.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">You have no orders yet.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {orderList.map((item: ProductType) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Orders;
