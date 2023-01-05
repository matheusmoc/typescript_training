import { useRef } from "react"
import { Link } from "react-router-dom"
import { useLoggedUser } from "../../shared/hooks"; 


export const Dashboard = () => {
    const counterRef = useRef(0);
    const {userName, logout} = useLoggedUser() //custom hook


    return(
        <div>
        <p>Dashboard</p>

        <p>{userName}</p>
        <p>Contador: {counterRef.current}</p>

        <button onClick={()=>counterRef.current++}>Somar</button>
        <button onClick={()=>console.log(counterRef.current)}>Log</button>
        <button onClick={logout}>Log</button>
        <Link to={'/login'}>Login</Link>
        </div>
    )
}