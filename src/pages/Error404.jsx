import React from "react";
import { Link } from 'react-router-dom';
import '../css/Error404.css';

export default function Error404() {
    return (
        <div className="error-container">
            <h1 className="error-title">404 - Page Not Found</h1>
            <p className="error-message">Sorry, the page you are looking for does not exist.</p>
            <button className="error-button">
                <Link to="/" className="error-link">Home</Link>
            </button>
        </div>
    );
};
