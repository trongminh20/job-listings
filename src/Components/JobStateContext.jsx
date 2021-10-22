import React, { useState, createContext } from 'react';
import { data } from '../data.js';
export const JobContext = createContext();

export const JobContextProvider = (props) => {
    const [jobs, setJobs] = useState(data);

    return (
        <JobContext.Provider value={[jobs, setJobs]}>
            {props.children}
        </JobContext.Provider>
    )
}