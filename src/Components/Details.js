import React from 'react';

const Details = (props) => {

    let { title, imageLinks, publishedDate, publisher, description } = props.location.state.item.volumeInfo;
    return (
        <div className="Global">
            <img
                src={imageLinks != undefined ? imageLinks.thumbnail : ''}
                alt="book image"
            />
            <div><label>Tittle : {title}</label></div>
            <div><label>Description : {description}</label></div>
            <div><label>Published Date : {publishedDate}</label></div>
            <div><label>Publisher : {publisher}</label></div>

        </div>
    );
}


export default Details;