import React from 'react';

//creates html for each photo
const Photo = (props) => (
    <li>
        <img src={`https://live.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt={props.title} />
    </li>
)

export default Photo