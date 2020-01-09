import React from 'react';

const Gallery = (props) => {

    return (
        <div>
            {props.items && props.items.map((item, index) => {
                let { title, imageLinks, infoLink } = item.volumeInfo;
                return (
                    <a
                        key={index}
                        className="book"
                        href={infoLink}
                        target="blank"
                    >
                        <img
                            src={imageLinks != undefined ? imageLinks.thumbnail : ''}
                            alt="book image"
                            className="book-img"
                        />
                        <div className="book-text">
                            {title}
                        </div>
                    </a>
                )
            })}
        </div>
    )
}



export default Gallery;