import { BrowserRouter, Routes, Route } from "react-router-dom";
/** 우리가 만든 페이지 컴포넌트 */
import HomePage from "./views/Home";
import BookmarkPage from "./views/Bookmark";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route path="/bookmark" element={<BookmarkPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
