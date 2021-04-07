import React, { useState } from 'react'
import { AppRouter } from './AppRouter'
import { UserContext } from './UserContext'

export const MainApp = () => {
    /**
     * UserContext es como un componente, al usarlo, por ser un useContext debe tener el .Provider
     * UserContext me permite pasar informacion entre componentes
    */
   const [user, setUser] = useState({});
   
    return (
        <UserContext.Provider value={{user, setUser}}>
            <AppRouter/>
        </UserContext.Provider>
    )
}
