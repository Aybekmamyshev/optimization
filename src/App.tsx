import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./component/Layout";
import RegisterPage from "./pages/RegisterPage";
import PrivateRouter from "./component/PrivateRouter";
import {lazy, Suspense} from "react";



const HomePage = lazy(() => import('./pages/HomePage'))
const HeroPage = lazy(() => import('../src/pages/HeroPage'))
const HeroSingle = lazy(() => import('../src/pages/HeroSingle'))
const LocationPage = lazy(() => import('../src/pages/Location'))
const EpisodePage = lazy(() => import('../src/pages/EpisodePage'))
const NotFound = lazy(() => import('../src/pages/NotFound'))



function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(

            <>
                <Route path={'/'} element={<PrivateRouter><Layout/></PrivateRouter>}>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/hero'} element={<HeroPage/>}/>
                    <Route path={'/hero/:id/'} element={<HeroSingle/>}/>
                    <Route path={'/location'} element={<LocationPage/>}/>
                    <Route path={'/episode'} element={<EpisodePage/>}/>
                    <Route path={'/*'} element={<NotFound/>}/>
                </Route>

                <Route path={'/register'} element={<RegisterPage/>}/>
            </>
        )
    )
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;
