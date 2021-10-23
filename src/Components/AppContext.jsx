import React, { useState, createContext } from 'react';
import { data } from '../data.js';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    //data's state will be used for filter
    const [jobs, setJobs] = useState(data);
    //update header image when resize window
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
