import { Route, Routes } from "react-router-dom"
import { Orders, Products } from "../pages"

const ProductsRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </div>
  )
}

export default ProductsRoutes
