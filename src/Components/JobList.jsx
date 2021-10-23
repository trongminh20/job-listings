import React, { useContext } from 'react';
//states
import { AppContext } from './AppContext';
//components
import Item from './Item';

const JobList = () => {
    const { jobState } = useContext(AppContext);
    const [jobs, setJobs] = jobState;


    return (
        <div className="job--list">
            {
                jobs.map(j => {
                    let tags = [j.role,
                    ...j.tools, ...j.languages]
                    return <Item _logo={j.logo}
                        _company={j.company}
                        _status={j.new}
                        _feature={j.feature}
                        _postAt={j.postedAt}
                        _constract={j.contract}
                        _location={j.location}
                        _position={j.position}
                        _tags={tags} />
                })
            }
        </div>
    )

}

export default JobList;