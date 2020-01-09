import React from 'react';

const Spinner = () => {

    return (
        <div className="loading">
            <div className="spinner-grow text-primary" role="status"></div>
            <div className="spinner-grow text-danger" role="status"></div>
            <div className="spinner-grow text-warning" role="status"></div>
            <div className="spinner-grow text-primary" role="status"></div>
            <div className="spinner-grow text-info" role="status"></div>
            <div className="spinner-grow text-primary" role="status"></div>
        </div>
    )
}



export default Spinner;