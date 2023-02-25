import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "../screens/Products";
import MainProduct from "../screens/MainProduct"

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Product />} />
                <Route path="mainproduct" element={<MainProduct />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;