import Navbar from "./components/Navbar";
import ProductsRoutes from "./Routes";

export interface NavbarType {
  path: string;
  title: string;
}

const App = () => {
  const NavbarType1 = { path: "/", title: "Product" }
  const NavbarType2 = { path: "/orders", title: "Orders" }
  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 shadow-lg py-5">
        <div className="container mx-auto flex justify-around items-center">
          <h1 className="text-3xl font-bold text-white">My Store</h1>
          <nav className="flex space-x-8">
            <Navbar item={NavbarType1} />
            <Navbar item={NavbarType2} />
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
