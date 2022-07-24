
import { Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import getData from "./Api"

function UserProfile(){
    const [dataa,setData]=useState([])
   useEffect(()=>{
    getData()
    .then((res)=>{
        setData(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
   },[])
   console.log(dataa)
    return (<>
    <Button>On</Button>
    <h1>Hey it is the user page</h1>
    </>)
}
export default UserProfile