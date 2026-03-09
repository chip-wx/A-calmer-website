import { Navigate, Outlet } from "react-router-dom"

export const AdminGuard = () => {
    const token = localStorage.getItem("loged")

    return token ? <Outlet/> : <Navigate to='/login' />
    
}