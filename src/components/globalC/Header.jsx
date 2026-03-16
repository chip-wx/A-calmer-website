import { NavLink } from "react-router-dom"
import "./styles/Header.css"
import { useState } from "react"
import { useProductsCount } from "../../context/CartContext"
import logoCart from "../../assets/shopping-cart.svg"
import mainImage from "../../assets/main.png"
import logoH from "../../assets/menu-h.svg"
import login from "../../assets/account-svg.svg"


export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { count, setCount } = useProductsCount();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <img src={mainImage} alt="Logo" />
                    <button className="menu-h" onClick={toggleMenu}><img src={logoH} alt="Menu" /></button>
            <nav className={`${isMenuOpen ? 'menu-open' : ''}`}>
                <ul>
                    <li><NavLink className='nav-link' to="/">Home</NavLink></li>
                    <li><NavLink className='nav-link' to="/about">About</NavLink></li>
                    <li><NavLink className='nav-link' to="/products">Products</NavLink></li>
                    <li><NavLink className='nav-link' to="/contact">Contact</NavLink></li>
                    <li><NavLink className='nav-link' to="/private/shoppingcart"><img src={logoCart} alt="Cart" /><span>{count}</span></NavLink></li>
                    <li><NavLink className='nav-link' to="/login"><img src={login} alt="Account" /></NavLink></li>
                    <li><button onClick={() => localStorage.setItem("loged", "true")}>Log in</button></li>
                </ul>
            </nav>
        </header>
    )
}