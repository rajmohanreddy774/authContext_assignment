import { useContext } from "react";
import { LogContext } from "../context/logContext";
import "./toggle.css"


export const Navbar = ()=>{
    const {isAuth , handleAuth} = useContext(LogContext)
    
     return (
			<div>

				<button onClick={()=>handleAuth()}>{isAuth ? "Logout" : "Login"}</button>
				<button>Users</button>
                <h3>Status : {isAuth ? "Login" : "Loggedout"}</h3>
			</div>
		);
}