import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModalLoginContainer from './containers/LoginModalContainer';
import { DefaultLayout } from './Layouts/';
import { selectedModalLogin } from './redux/reducers/ModalReducer';
import { publicRoutes } from './routes';

function App() {

    const isModal = useSelector(selectedModalLogin)

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
                                        {isModal && <ModalLoginContainer />}
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
