import { Box, Center, Container, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"

import Stay from "../Components/TabFile/Stay"
import HomeMiddle from "../Components/HomeMiddle"
import UpperFooter from "../Components/UpperFooter"
import Footer from "../Components/Footer"
import Flights from "../Components/TabFile/Flights"
import { useEffect, useState } from "react"
import Navbar from "../Components/Navbar"
import { getData } from "../Components/Api"

function Home(){
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
    console.log(dataa,"eta")
    return (
        <Container  m='0' p='0' maxW="100%">
            
       <Navbar/>
        <Box id="tabBar" w="90%" border="1px solid" h='auto' m='auto' my='4rem' borderRadius='10px' borderColor="gray.300">
            <Box id="tablist" w='97%' m='auto' mt='20px'>
                
            <Tabs>
            <Center>
                <TabList >
                
                    <Tab>Stays</Tab>
                    <Tab>Flights</Tab>
                    <Tab>Cars</Tab>
                    <Tab>Packages</Tab>
                    <Tab>Things to Do</Tab>
                    <Tab>Cruises</Tab>
                    
                </TabList>
                </Center>
               
                <TabPanels>
                    <TabPanel>
                        <Stay/>
                    </TabPanel>
                    <TabPanel>
                        <Flights/>
                    </TabPanel>
                    <TabPanel>
                    <Stay/>
                    </TabPanel>
                    <TabPanel><Flights/></TabPanel>
                    <TabPanel><Stay/></TabPanel>
                    <TabPanel><Flights/></TabPanel>
                </TabPanels>
            </Tabs>
            
            </Box>
        </Box>

        <HomeMiddle/>
        <UpperFooter/>
        <Footer/>
      </Container>
    )
}
export default Home