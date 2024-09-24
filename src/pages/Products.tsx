import { useEffect, useState } from 'react'
import { useAxios } from '../hooks/UseAxios'
import ProductItem from '../components/ProductItem'

export interface ProductType {
  id: number
  title: string
  brands: string
  price: number
  description: string
  imgUrl: string
  category: string
}
const Products = () => {
  const [products, setProducts] = useState<Array<ProductType>>([])

  useEffect(() => {
    useAxios('/products').then((res) => {
      localStorage.setItem("products", JSON.stringify(res.data.products))
      setProducts(
        res.data.products.map((item: any) => {
          const data: ProductType = {
            id: item.id,
            title: item.title,
            brands: item.brands,
            price: item.price,
            description: item.description,
            imgUrl: item.images && item.images.length > 0 ? item.images[0] : 'placeholder.jpg',
            category: item.category,
          }
          return data
        }),
      )
    })
  }, [])

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-4xl font-bold text-center mb-10">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((item: ProductType)=> <ProductItem key={item.id} item={item}/>)}          
      </div>
    </div>
  )
}

export default Products
