import { BrowserRouter, Routes, Route } from "react-router-dom";
/** 페이지 */
import HomePage from "./views/home/Home";
import AboutPage from "./views/about/About";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<HomePage />}></Route>
                <Route path="about/:id" element={<AboutPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
