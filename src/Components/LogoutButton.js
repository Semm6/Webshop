import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const LogoutButton = () => {

    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && ( //if user is logged in the logout button shows
        <button onClick={() => logout()}>
            Log out
        </button>
        )
    )
}

export default LogoutButton