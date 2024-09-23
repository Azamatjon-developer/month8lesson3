import React, { createContext, ReactNode, useState } from 'react'
import { ProductType } from '../pages/Products'

interface orderContextType {
  orderList: Array<ProductType>
  setOrderList: React.Dispatch<React.SetStateAction<Array<ProductType>>>
}

export const Context = createContext<orderContextType>({
  orderList: [],
  setOrderList: () => {},
})

export const OrderContext: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [orderList, setOrderList] = useState<Array<ProductType>>([])
  return (
    <Context.Provider value={{ orderList, setOrderList }}>
      {children}
    </Context.Provider>
  )
}
