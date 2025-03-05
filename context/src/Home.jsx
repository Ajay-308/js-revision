import React, { useContext } from 'react';
import { UserContext } from './context/useContext';

export const Home = () => {
    const user = useContext(UserContext);

    return (
        <div>
            <h1>Home</h1>
            <div>{user}</div>
        </div>
    );
};
