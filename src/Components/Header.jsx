import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Header = () => {
    const { headerState } = useContext(AppContext);
    const [headerBgUrl, setHeaderBgUrl] = headerState;

    const setHeaderBg = () => {
        window.addEventListener('resize', () => {
            if (window.innerWidth < 799) {
                setHeaderBgUrl('./images/bg-header-mobile.svg');
            } else {
                setHeaderBgUrl('./images/bg-header-desktop.svg');
            }
        })
    }
    return (
        <div className="header">
            <script>
                {
                    window.onload = function () {
                        setHeaderBg();
                    }
                }
            </script>
            <img className="header--bg" src={headerBgUrl} alt="" />
        </div>
    );
}

export default Header;