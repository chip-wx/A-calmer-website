import { useShoppingCart } from "../../../context/CartContext";


export const InfoCart = () => {
    const {cart} = useShoppingCart();
    return(
        <div className="products-cart">
            {cart.map(item => <div key={item.id} className="product">
                <img src={item.image} alt={item.name} />
                <div className="info">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                </div>
            </div>)}
        </div>
    )

}