import React, { useContext } from 'react'
import { UserContext } from './context/useContext';  // Import the context, not the provider

export const Login = () => {
    const user = useContext(UserContext);   // Use the context directly
    return (
        <>
            <h1>Login page</h1>
            <div>{user}</div>
        </>
    )
}
