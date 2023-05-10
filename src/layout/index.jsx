// packages
import { Outlet } from 'react-router-dom';
import { Fragment } from 'react';
//
import Header from './Header';
import Footer from './Footer';


const Layout = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Layout;