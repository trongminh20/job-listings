import React, { useContext, useEffect } from 'react';
import { AppContext } from './AppContext';

const Header = () => {
    const { headerState, windowState } = useContext(AppContext);
    const [headerBgUrl, setHeaderBgUrl] = headerState;
    const [windowWidth, setWindowWidth] = windowState;
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }
    const setHeaderBg = () => {
        if (window.innerWidth < 799) {
            setHeaderBgUrl('./images/bg-header-mobile.svg');
        } else {
            setHeaderBgUrl('./images/bg-header-desktop.svg');
        }
    }
    //detect event resize window without using window.onload() 
    useEffect(() => {
        window.addEventListener('resize', setHeaderBg);
        return () => {
            window.removeEventListener('resize', setHeaderBg);
        }
    }, []);

    return (
        <div className="header">
            <img className="header--bg" src={headerBgUrl} alt="" />
        </div>
    );
}

export default Header;