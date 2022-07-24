import { Routes, Route } from "react-router-dom";
import FullHotel from "../Components/FullHotel";
import FullHotel1 from "../Components/FullHotel1";
import LogIn from "../Components/LogIn";
import SignUp from "../Components/SignUp";
import Home from "./Home";
function AllRoutes(){
    return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/fullhotel" element={<FullHotel/>}/>
        <Route path="/fullhotel1" element={<FullHotel1/>}/>
      </Routes>
    )
}
export default AllRoutes