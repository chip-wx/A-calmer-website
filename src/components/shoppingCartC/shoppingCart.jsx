import './shoppingCart.css'
import { InfoCart } from "./components/infoCart";
import { InfoPay } from "./components/InfoPay";

export const ShoppingCartC = () => {
    return (
        <div className="shopping-cart">
            <div className="modal">
                <h1>Your List</h1>
                <InfoCart />
                <InfoPay />
            </div>
        </div>
    )
}