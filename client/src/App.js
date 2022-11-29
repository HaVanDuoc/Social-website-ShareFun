import axios from 'axios';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModalLoginContainer from './containers/LoginModalContainer';
import { DefaultLayout } from './Layouts/';
import { selectedModalLogin } from './redux/reducers/ModalReducer';
import { publicRoutes } from './routes';

function App() {
    const isModal = useSelector(selectedModalLogin)
    const dispatch = useDispatch()

    const checkCurrentUser = useCallback(async () => {
        try {
            const token = localStorage.getItem("token")

            const option = {
                method: "get",
                url: "/auth/",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
            
            const response = await axios(option)

            if (response.data.data.user) {
                const { user } = response.data.data
                dispatch({ type: "CURRENT_USER", payload: { user } })
            }
        } catch (error) {
            console.log(error);
        }
    }, [dispatch])

    useEffect(() => { checkCurrentUser() }, [checkCurrentUser])

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
