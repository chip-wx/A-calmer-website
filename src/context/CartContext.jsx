import { createContext, useContext, useState } from "react";

const Emptyvalue = 0;
const ProductsCountContext = createContext(undefined);
const ShoppingCartContext = createContext(undefined);

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const value = { cart, setCart };
    return (
        <ShoppingCartContext.Provider value={value}>
            {children}
        </ShoppingCartContext.Provider>
    )
}

export const useShoppingCart = () => {
    const context = useContext(ShoppingCartContext);
    if (context === undefined) {
        throw new Error('useShoppingCart must be used within a ShoppingCartProvider');
    }
    return context;
}



export const ProductsCountProvider = ({ children }) => {
    const [count, setCount] = useState(Emptyvalue);
    const value = { count, setCount };
    return (
        <ProductsCountContext.Provider value={value}>
            {children}
        </ProductsCountContext.Provider>
    )
}

export const useProductsCount = () => {
    const context = useContext(ProductsCountContext);
    if (context === undefined) {
        throw new Error('useProductsCount must be used within a ProductsCountProvider');
    }
    return context;
}
