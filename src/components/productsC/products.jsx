import "./products.css";
import { Selections, ForYou } from "./productsList";
import { ProductCard } from "./productCard";
import { useShoppingCart } from "../../context/CartContext";
import { useProductsCount } from "../../context/CartContext";

export const ProductsC = () => {
    const { cart, setCart } = useShoppingCart();
    const {count, setCount} = useProductsCount();

    const addToCart = (item) => {
        setCart([...cart, item]);
        setCount(count + 1);
        console.log(item)
    };
    
    return (
        <section className="e-commerce">
            <h1>A Calmer e-commerce</h1>

            <div className="selectedContainer">
                <h2>Our Top Selections</h2>
                <div className="products">
                    {Selections.map(item => (
                        <ProductCard key={item.id} item={item} addToCart={addToCart} />
                    ))}
                </div>
            </div>

            <div className="forYouContainer">
                <h2>For You</h2>
                <div className="products">
                    {ForYou.map(item => (
                        <ProductCard key={item.id} item={item} addToCart={addToCart} />
                    ))}
                </div>
            </div>
        </section>
    );
};
