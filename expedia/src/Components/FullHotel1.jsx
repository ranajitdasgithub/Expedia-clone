import { Box, Grid, Heading, Img, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getDataHotel1 } from "./Api"
import Footer from "./Footer"
import Navbar from "./Navbar"
import SingleHotel from "./SingleHotel"
import UpperFooter from "./UpperFooter"

function FullHotel1(){
    const [data,setData]=useState([])
    useEffect(()=>{
     getDataHotel1()
     .then((res)=>{
         setData(res.data)
     })
     .catch((err)=>{
         console.log(err)
     })
    },[])
    console.log(data,"hotel")
    return(<>
    <Navbar/>
    <Box position='relative' py='2rem' w='90%' m='auto'>
        <Img borderRadius='10px' w='100%' h='400px' src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        <Heading color='whitesmoke' position='absolute' top='11rem' left='2rem' fontSize='52px'>The views looks even better as a VIP</Heading>
        <Text>As a VIP you see the world from our highest rated and best quality properties. Staying at one of these places gives you a few special perks and extra rewards points for Expedia Rewards members. Even up to 4x points when you book it through the app. That’s a whole lot of points.</Text>
    </Box>
    <Box w='92%' m='auto' my='1rem'>
    <Grid templateColumns='repeat(3, 1fr)' gap={6}>
       {data.map((ele)=>(
        <SingleHotel value={ele}/>
       ))}
    </Grid>
    </Box>
    <UpperFooter/>
    <Footer/>
    
    </>)
}
export default FullHotel1