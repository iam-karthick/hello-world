import React from 'react';
import './App.css';

function Tweet(props){
    return(
        <div className="tweet">
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <h4>Number of Likes</h4>
        </div>
    )
}

export default Tweet;