import { useShoppingCart } from "../../../context/CartContext";

export const InfoPay = () => {
    const {cart} = useShoppingCart();
    const total = cart.reduce((acc, item) => acc + item.price, 0);
    return(
        <div className="info-pay">
            <p className="total">Total: </p>
            <span>${total}</span>
        </div>
    )
}