import axios from "axios"
export function getData(){
    return axios.get("http://localhost:4000/logindata")
}
export  function getDataHotel(){
    return axios.get("http://localhost:4000/hoteldata")
}