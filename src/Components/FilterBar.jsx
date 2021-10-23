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

    const compareArrs = (arr1, arr2) => {
        let len = arr1.length;
        let result = false;
        for (let i = 0; i < len; i++) {
            if (arr2.indexOf(arr1[i]) >= 0) {
                result = true;
            }
            break;
        }
        return result;
    }

    const delTag = e => {
        let newTags = [...tags];
        let newJobsList = [...data];
        let filtered = [];
        newTags = newTags.filter(t => { return t !== e.target.value });
        newJobsList.forEach(j => {
            const { tools, role, languages } = j;

            if (newTags.indexOf(role) >= 0) {
                filtered.push(j);
            }
            if (compareArrs(tools, newTags) === true) {
                filtered.push(j)
            }
            if (compareArrs(languages, newTags) === true) {
                filtered.push(j)
            }
        });

        setTags(newTags);

        if (newTags.length === 0) {
            setJobs(data);
        } else {
            setJobs(filtered);
        }
    }


    if (tags.length !== 0) {
        return (
            <div className='tag--bar'>
                <div className='main--bar'>
                    <div className="tag--list">
                        {tags.map(t => {
                            return <div className="filter--tag">
                                <p>{t}</p>
                                <button onClick={delTag} value={t}>x</button>
                            </div>
                        })}
                    </div>

                </div>
                <button className="clear--btn" onClick={() => {
                    clearAll()
                }}>Clear</button>
            </div>
        );
    } else {
        return <></>
    }
}

export default FilterBar;