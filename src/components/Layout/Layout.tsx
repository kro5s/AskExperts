import React, {useEffect} from 'react';
import Header from "../Sections/Header/Header.tsx";
import Footer from "../Sections/Footer/Footer.tsx";
import {useLocation} from "react-router-dom";
import pagesStore from '../../store/store.ts'
import {observer} from "mobx-react-lite";
import {pathsList} from "../../types/types.ts";


const Layout: React.FC<{ children: React.ReactNode }> = observer(({children}) => {
    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        //@ts-expect-error ugabuga
        pagesStore.changePage(pathsList[pathname.pathname])
    }, [pathname])
    return (
        <>
            <Header></Header>
            <main>
                {children}
            </main>
            <Footer></Footer>
        </>
    );
});

export default Layout;