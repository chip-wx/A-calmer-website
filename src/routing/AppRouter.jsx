import { BrowserRouter, Navigate, Route } from "react-router-dom"
import { Home, About, Login, Products } from "../public"
import { NotFound } from "./NotFound"
import { AdminGuard } from "./AdminGuard"
import { AdminRouter } from "./AdminRouter"
import { GuestGuard } from "./GuestGuard"

export const AppRouter = ({children}) => {
    return (
        <BrowserRouter>
            <NotFound>
                <Route element={<GuestGuard/>}>
                    <Route path="/Login" element={<Login />} />
                </Route>
                
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path='/' element={<Navigate to='/home' />} />
                <Route element={<AdminGuard/>}>
                    <Route path="/private/*" element={<AdminRouter />} />
                </Route>
            </NotFound>
            {children}
        </BrowserRouter>
    )
}

