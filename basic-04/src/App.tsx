import { BrowserRouter, Routes, Route } from "react-router-dom";
/** 페이지 */
import HomePage from "./views/home/Home";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<HomePage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
