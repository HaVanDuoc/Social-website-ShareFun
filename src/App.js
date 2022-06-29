import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";
import { publicRoutes } from "./routes";

function App() {
    return (
        <Router>
            <div className="__havanduoc">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout = DefaultLayout; // DefaultLayout is default
                        const Page = route.page;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
