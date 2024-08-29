// src/components/NotFound.js

import React from 'react';

const NotFound = () => {
    return (
        <div className='d-flex flex-wrap' style={styles.container}>
            <div style={styles.textContainer}>
                <h1 style={styles.heading}>404</h1>
                <h2 style={styles.subheading}>Parikshit couldn't find that page</h2>
                <p style={styles.text}>
                    We couldn’t find the page you were looking for. Visit{' '}
                    <a href="/" style={styles.link}>Zerodha’s home page</a>.
                </p>
            </div>
            <div style={styles.imageContainer}>
                <img
                    src="media/images/myImg.png"
                    alt="Child"
                    style={styles.image}
                />
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        padding: '0 15%', // Some padding for the content
        backgroundColor: '#fff',
    },
    textContainer: {
        flex: 1,
        padding: '20px',
        maxWidth: '500px',
    },
    heading: {
        fontSize: '2rem',
        color: '#333',
        marginBottom: '10px',
    },
    subheading: {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '10px',
    },
    text: {
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '20px',
    },
    link: {
        color: '#007bff',
        textDecoration: 'none',
    },
    imageContainer: {
        flex: 1,
        textAlign: 'center',
    },
    image: {
        height: "30rem",
        borderRadius: '8px',
    },
};

export default NotFound;
