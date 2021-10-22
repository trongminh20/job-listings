import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import Tag from './Tag';

const Item = (props) => {
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

            {
                props._tags.map(t => {
                    return <Tag _tagName={t} />
                })
            }

        </div>
    )
}

export default Item;