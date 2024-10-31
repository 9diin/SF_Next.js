import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/styles/globals.css";

/** 페이지 */
import HomePage from "@/views/Home";
import AboutPage from "@/views/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about/:id" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
