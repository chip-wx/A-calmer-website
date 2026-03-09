import { Navigate, Route, Routes } from "react-router-dom"
import { NotFoundPage } from "./NotFoundPage"

export const NotFound = ({children}) => {

    return (
        <Routes>
            {children}
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to={'/404'} />} />
        </Routes>
    )
}