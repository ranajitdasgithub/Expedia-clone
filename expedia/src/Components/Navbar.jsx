import { Box, Button, Center, Checkbox, Container, Flex, HStack, Img, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons'
import iconObj from "../AllData/Icon"
import SignIn from "./SignIn"
import { Link } from "react-router-dom"
import "./Navbar.css"
function Navbar(){
    return (<>
     <Box w="100%" h='5rem' display='flex' borderBottom='1px' borderColor='gray.300'>
        <HStack spacing="27rem">
            <Box id="navbarleft" display="flex">
           <Link to="/">    
            <Box display="flex" alignItems="center" ml="70px" ><Img h="60%" src={iconObj.Logo}/></Box>
            </Link> 
            <Box>
            <Menu>
                <MenuButton className="moreTravel" mt='-3px' bg="none" as={Button} rightIcon={<ChevronDownIcon/>} >
                    More travel
                </MenuButton>
                <MenuList>
                    <Link to='/fullhotel'>
                    <MenuItem><Img mr='10px' w="17px" h="17px" src={iconObj.a}/>Stays</MenuItem>
                    </Link>
                    <Link to='/fullhotel1'>
                    <MenuItem><Img mr='10px' w="17px" h="17px" src={iconObj.b}/>Flights</MenuItem>
                    </Link>
                    <Link to='/fullhotel'>
                    <MenuItem><Img mr='10px' w="17px" h="17px" src={iconObj.c}/>Cars</MenuItem>
                    </Link>
                    <Link to='/fullhotel1'>
                    <MenuItem><Img mr='10px' w="17px" h="17px" src={iconObj.d}/>Packages</MenuItem>
                    </Link>
                    <Link to='/fullhotel'>
                    <MenuItem><Img mr='10px' w="17px" h="17px" src={iconObj.e}/>Things to do</MenuItem>
                    </Link>
                    <Link to='/fullhotel1'>
                    <MenuItem><Img mr='10px' w="17px" h="17px" src={iconObj.f}/>Cruises</MenuItem>
                    </Link>
                    <Link to='/fullhotel'>
                    <MenuItem>Deals</MenuItem>
                    <MenuItem>Groups & meetings</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
            </Box>
            </Box>
            <Box id="navboxright" >
                <Flex gap="2rem">
                <Box display="flex" alignItem="center"><Box><Img mt="5px" mr='10px' w="17px" h="17px" src={iconObj.world}/></Box> <Text>English</Text></Box>
                <Box>List your property</Box>
                <Box>Support</Box>
                <Box>Trips</Box>
                <Box><BellIcon w={6} h={6}/></Box>
                <Box><SignIn/></Box>
                </Flex>
             </Box>
             </HStack>
        </Box>
    </>)
}
export default Navbar