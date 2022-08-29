import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './Layouts/';
import { Login } from './pages';
import { publicRoutes } from './routes';
import AuthContext from './store/AuthContext';

function App() {
    const [state] = useContext(AuthContext);
    const { user } = state;

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
                                    user ? (
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    ) : (
                                        <Login />
                                    )
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
