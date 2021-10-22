import React, { useState, createContext } from 'react';
import { data } from '../data.js';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [jobs, setJobs] = useState(data);

    const [headerBgUrl, setHeaderBgUrl] = useState((window.innerWidth < 799) ? './images/bg-header-mobile.svg' : './images/bg-header-desktop.svg');

    return (
        <AppContext.Provider value={{
            jobState: [jobs, setJobs],
            headerState: [headerBgUrl, setHeaderBgUrl]
        }}>
            {props.children}
        </AppContext.Provider>
    );
}
