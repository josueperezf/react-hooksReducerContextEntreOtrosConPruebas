import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const HomeScreen = () => {
    /**
     * UserContext es un archivo que cree, al cual le defini su favores en el mainApp, y los mismo estan disponibles en cualquiera de sus componentes
     */
    const {user} = useContext(UserContext);
    console.log(user);
    return (
        <div>
            <h1>HomeScreen</h1>
            <hr/>
            <pre>
                { JSON.stringify(user, null, 4) }
            </pre>
        </div>
    )
}
