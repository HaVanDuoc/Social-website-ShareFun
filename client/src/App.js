import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './Layouts/';
import { publicRoutes } from './routes';

function App() {
    return (
        <div className="__havanduoc">
            <BrowserRouter>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = route.layout || DefaultLayout;

                        const Page = route.page;
                        return (
                            <Route
                                exact
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
            </BrowserRouter>
        </div>
    );
}

export default App;
