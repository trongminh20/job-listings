import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import Tag from './Tag';
import { data } from '../data';
const Item = (props) => {
    const { jobState, tagState } = useContext(AppContext);
    const [jobs, setJobs] = jobState;
    const [tags, setTags] = tagState;


    const filter = (e) => {
        let newList = [...data];
        //get value to be filtered
        let val = e.target.value;
        //filtered jobs
        let filtered = [];
        //tags for filtering
        let filterTags = [...tags];

        //add filter values
        filterTags.push(val);

        // remove duplicated value
        filterTags = filterTags.filter((value, index) => {
            return filterTags.indexOf(value) == index;
        })
        setTags(filterTags);

        //adding job fit with condition in tags list
        newList.forEach(job => {
            if (filterTags.indexOf(job.role) >= 0) {
                filtered.push(job);
            }
            if (job.tools.indexOf(val) >= 0) {
                filtered.push(job);
            }
            if (job.languages.indexOf(val) >= 0) {
                filtered.push(job);
            }
        })
        // remove duplicated job after adding
        filtered = filtered.filter((value, index) => {
            return filtered.indexOf(value) === index;
        })

        setJobs(filtered);

    }



    return (
        <div className="item">
            <div className="logo">
                <img src={props._logo} alt="" />
            </div>
            <div className="main-info">
                <div className="company-info">
                    <p>{props._company}</p>
                    <div>{props._status}</div>
                    <div>{props._feature}</div>
                </div>
                <h4>{props._position}</h4>
                <div className="posting-info">
                    <p>{props._postAt} - {props._constract} - {props._location}</p>
                </div>
            </div>
            <div className="tags">
                {
                    props._tags.map(t => {
                        return <Tag _tagName={t} _value={t} _tagFilter={filter} _oldList={data} />
                    })
                }
            </div>
        </div>
    )
}

export default Item;