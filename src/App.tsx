import { json } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProductType } from "./pages/Products";
import ProductsRoutes from "./Routes";
import { Orders } from "./pages";
import { useContext } from "react";
import { Context } from "./context/Context";

export interface NavbarType {
  path: string;
  title: string;
}

const App = () => {
  const NavbarType1 = { path: "/", title: "Product" }
  const NavbarType2 = { path: "/orders", title: "Orders" }
  const {orderList} = useContext(Context)
  const context:string | null = localStorage.getItem("products")
  const products : Array<ProductType> | null = context ? JSON.parse(context) : [];
  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg py-5">
        <div className="container mx-auto flex justify-around items-center">
          <h1 className="text-3xl font-bold text-white">My Store</h1>
          <nav  className="flex space-x-8">
            <Navbar productCount={products?products.length : 0} item={NavbarType1} />
            <Navbar productCount={orderList.length ? orderList.length : 0} item={NavbarType2} />
          </nav>
        </div>
      </header>
      <main className="">
        <ProductsRoutes />
      </main>
    </>
  );
};

export default App;
