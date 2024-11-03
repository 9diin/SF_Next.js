import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "jotai";

/** 페이지 */
import HomePage from "./views/home/Home";

function App() {
    return (
        <Provider>
            <BrowserRouter>
                <Routes>
                    <Route index path="/" element={<HomePage />}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
