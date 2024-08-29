import { Route, Routes } from "react-router-dom";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import PricingPage from "./landing_page/pricing/PricingPage";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./landing_page/NotFound";

function App() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/pricing" element={<PricingPage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/products" element={<ProductPage />}></Route>
            <Route path="/support" element={<SupportPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>

        </Routes>
    );
}

export default App;