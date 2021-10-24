import React, { useState, createContext } from 'react';
import { data } from '../data.js';

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    //data's state will be used for filter
    const [jobs, setJobs] = useState(data);
    //update header image when resize window
    const [headerBgUrl, setHeaderBgUrl] = useState((window.innerWidth < 799) ? './images/bg-header-mobile.svg' : './images/bg-header-desktop.svg');
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    //update tags filters
    const [tags, setTags] = useState([]);

    return (
        <AppContext.Provider value={{
            jobState: [jobs, setJobs],
            headerState: [headerBgUrl, setHeaderBgUrl],
            tagState: [tags, setTags],
            windowState: [windowWidth, setWindowWidth]
        }}>
            {props.children}
        </AppContext.Provider>
    );
}
