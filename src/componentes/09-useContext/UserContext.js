import { createContext } from 'react'
/**
 * UserContext permite compartir informacion entre componentes, 
 * para este ejemplo, requireo este componentes en MainApp, debe de colocarse al final .Provider, 
 * la propiedad value que alli indiquemos estara disponible entre todos los componentes q lo compartan
 * para obtener su informacion se usa el hook seria, useContext(mi-user-context)
 */
export const UserContext = createContext(null);