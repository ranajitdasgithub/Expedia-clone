import { Routes, Route } from "react-router-dom";
import LogIn from "../Components/LogIn";
import SignUp from "../Components/SignUp";
import Home from "./Home";
function AllRoutes(){
    return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
      </Routes>
    )
}
export default AllRoutes