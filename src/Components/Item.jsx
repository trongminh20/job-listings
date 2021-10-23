import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import Tag from './Tag';
import { data } from '../data';
const Item = (props) => {
    const { jobState } = useContext(AppContext);
    const [jobs, setJobs] = jobState;
    const filter = (e) => {
        let newList = [...data];
        let val = e.target.value;
        let filtered = [];
        newList.forEach(t => {
            if (t.role === val) {
                filtered.push(t)
            }
            if (t.tools.indexOf(val) !== -1) {
                filtered.push(t);
            }
            if (t.languages.indexOf(val) !== -1) {
                filtered.push(t);
            }
        })
        setJobs(filtered);
    }

    return (
        <div className="list-item">
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
                        return <Tag _tagName={t} _value={t} _tagFilter={filter} />
                    })
                }
            </div>
        </div>
    )
}

export default Item;