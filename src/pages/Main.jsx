
import { Outlet } from "react-router-dom";
import Home from "./Home";




const Main = () => {
    return (
        <div>
            
            <Outlet></Outlet>
           
        </div>
    );
};

export default Main;