import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "jotai";
import { Toaster } from "@/components/ui/toaster";

/** 우리가 만든 페이지 컴포넌트 */
import HomePage from "./views/Home";
import BookmarkPage from "./views/Bookmark";

function App() {
    return (
        <Provider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/bookmark" element={<BookmarkPage />}></Route>
                </Routes>
                <Toaster />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
