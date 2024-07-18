import React, {Suspense} from 'react';
import Header from "../Header";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Header/>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet/>
            </Suspense>
        </>
    );
};

export default Layout;