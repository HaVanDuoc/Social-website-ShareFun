import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";

function App() {
    return (
        <Router>
            <div className="__havanduoc">
                <Routes>
                    {publicRoutes.map((route) => {
                        const Page = route.page;
                        return <Route path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
