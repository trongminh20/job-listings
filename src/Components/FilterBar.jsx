import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import { data } from '../data';
const FilterBar = (props) => {
    const { jobState, tagState } = useContext(AppContext);

    const [tags, setTags] = tagState;
    const [jobs, setJobs] = jobState;
    const clearAll = () => {
        setTags([]);
        setJobs(data);
    }
    if (tags.length !== 0) {
        return (
            <div className='tag--bar'>
                <div className="tag--list">
                    {tags.map(t => {
                        return <p>{t}</p>
                    })}
                </div>
                <button onClick={() => {
                    clearAll()
                }}>Clear</button>
            </div>
        );
    } else {
        return <div className='filter--bar'></div>
    }
}

export default FilterBar;