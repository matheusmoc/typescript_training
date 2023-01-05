import { useContext } from "react"
import { UserLoggedContext } from "../contexts"

export const useLoggedUser = () =>{
    const context = useContext(UserLoggedContext)
    return context;
}