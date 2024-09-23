import Navbar from "./components/Navbar";
import ProductsRoutes from "./Routes";

export interface NavbarType {
  path: string;
  title: string;
}

const App = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg py-5">
        <div className="container mx-auto flex justify-around items-center">
          <h1 className="text-3xl font-bold text-white">My Store</h1>
          <nav className="flex space-x-8">
            <Navbar item={{ path: "/", title: "Product" }} />
            <Navbar item={{ path: "/orders", title: "Orders" }} />
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
