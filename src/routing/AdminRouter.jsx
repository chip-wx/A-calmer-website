import { Navigate, Routes, Route } from "react-router-dom"
import { ShoppingCart } from "../private/ShoppingCart"
import { UserProfile } from "../private/UserProfile"



export const AdminRouter = () => {
    return (
        <Routes>
            <Route path='/shoppingcart' element={<ShoppingCart />} />
            <Route path='/userprofile' element={<UserProfile />} />
            <Route path='/' element={<Navigate to='shoppingcart' />} />
        </Routes>
    )
}