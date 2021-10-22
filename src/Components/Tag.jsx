import Ract from 'react';

const Tag = (props) => {
    return (
        <button className="tag--btn" onClick={props._tagFilter}>{props._tagName}</button>

    )
}

export default Tag;