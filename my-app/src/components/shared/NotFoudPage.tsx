import React from 'react';
import { Link } from 'react-router-dom';

const NotFoudPage: React.FC = () => (
    <div style={{ textAlign: 'center', marginTop: '10vh' }}>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link to="/">Go back to Home</Link>
    </div>
);

export default NotFoudPage;