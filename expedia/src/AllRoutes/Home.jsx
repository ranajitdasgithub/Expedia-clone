import { Box, Button, Center, Checkbox, Container, Flex, HStack, Img, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import { BellIcon, ChevronDownIcon } from '@chakra-ui/icons'
import iconObj from "./HomeIconUrl/Icon"
import Stay from "./HomeIconUrl/Stay"
import HomeMiddle from "./Components/HomeMiddle"

function Home(){
    return (
        <Container  m='0' p='0' maxW="100%">
            
        <Box w="100%" h='5rem' display='flex' borderBottom='1px' borderColor='gray.300'>
        <HStack spacing="27rem">
            <Box id="navbarleft" display="flex">
                
            <Box display="flex" alignItems="center" ml="70px" ><Img h="75%" src="https://www.expedia.com/_dms/header/logo.svg?locale=en_US&siteid=1&2"/></Box>
            <Box>
            <Menu>
                <MenuButton bg="none" as={Button} rightIcon={<ChevronDownIcon/>} >
                    More travel
                </MenuButton>
                <MenuList>
                    <MenuItem><Img mr='10px' w="17px" h="17px" src={iconObj.a}/>Stays</MenuItem>
                    <MenuItem><Img mr='10px' w="17px" h="17px" src={iconObj.b}/>Flights</MenuItem>
                    <MenuItem><Img mr='10px' w="17px" h="17px" src={iconObj.c}/>Cars</MenuItem>
                    <MenuItem><Img mr='10px' w="17px" h="17px" src={iconObj.d}/>Packages</MenuItem>
                    <MenuItem><Img mr='10px' w="17px" h="17px" src={iconObj.e}/>Things to do</MenuItem>
                    <MenuItem><Img mr='10px' w="17px" h="17px" src={iconObj.f}/>Cruises</MenuItem>
                    <MenuItem>Deals</MenuItem>
                    <MenuItem>Groups & meetings</MenuItem>
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
                <Box>Sign in</Box>
                </Flex>
             </Box>
             </HStack>
        </Box>
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
                    <p>two!</p>
                    </TabPanel>
                    <TabPanel>
                    <p>three!</p>
                    </TabPanel>
                    <TabPanel>four</TabPanel>
                    <TabPanel>five</TabPanel>
                    <TabPanel>six</TabPanel>
                </TabPanels>
            </Tabs>
            
            </Box>
        </Box>

        <HomeMiddle/>
      </Container>
    )
}
export default Home