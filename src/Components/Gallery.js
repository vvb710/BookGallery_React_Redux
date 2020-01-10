import React from 'react';
import { Link } from 'react-router-dom';

const Gallery = (props) => {

    return (
        <div>
            {props.items && props.items.map((item, index) => {
                let { title, imageLinks, infoLink } = item.volumeInfo;
                return (
                    <div key={index} className="book">
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
                            {/* <li className="book-text"><Link to={{ pathname: "/details", state: { item } }}> {title}</Link></li> */}
                        </a>
                        <li className="ribbion"><Link style={{ color: "white" }} to={{ pathname: "/details", state: { item } }}> {title}</Link></li>

                    </div>
                )
            })}
        </div>
    )
}



export default Gallery;