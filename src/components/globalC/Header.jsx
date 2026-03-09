import { NavLink } from "react-router-dom"
import "./styles/Header.css"
import { useState } from "react"
import { useProductsCount } from "../../context/CartContext"

export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { count, setCount } = useProductsCount();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <img src="/src/assets/main.png" alt="Logo" />
                    <button className="menu-h" onClick={toggleMenu}><img src="/src/assets/menu-h.svg" alt="Menu" /></button>
            <nav className={`${isMenuOpen ? 'menu-open' : ''}`}>
                <ul>
                    <li><NavLink className='nav-link' to="/">Home</NavLink></li>
                    <li><NavLink className='nav-link' to="/about">About</NavLink></li>
                    <li><NavLink className='nav-link' to="/products">Products</NavLink></li>
                    <li><NavLink className='nav-link' to="/contact">Contact</NavLink></li>
                    <li><NavLink className='nav-link' to="/private/shoppingcart"><img src="/src/assets/shopping-cart.svg" alt="Cart" /><span>{count}</span></NavLink></li>
                    <li><NavLink className='nav-link' to="/login"><img src="/src/assets/account-svg.svg" alt="Account" /></NavLink></li>
                    <li><button onClick={() => localStorage.setItem("loged", "true")}>Log in</button></li>
                </ul>
            </nav>
        </header>
    )
}