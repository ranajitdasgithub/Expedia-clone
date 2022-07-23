import { Box, Button, Center, Flex,Img, Input, InputGroup, InputLeftElement, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import {ChevronDownIcon } from '@chakra-ui/icons'
import iconObj from "../../AllData/Icon"
function Flights(){
    return (
    <div>
        <Box display="flex" justifyContent='flex-end'>
                    <Menu>
                        <MenuButton bg="none" fontSize='13px' color='blue' as={Button} rightIcon={<ChevronDownIcon/>} >
                            1 traveler
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Travelers</MenuItem>
                            <MenuItem>Room 1</MenuItem>
                            <MenuItem>Adults</MenuItem>
                            <MenuItem>Children Ages 0 to 17</MenuItem>
                            <MenuItem><Input placeholder="Child age"/></MenuItem>
                            <MenuItem></MenuItem>
                            <MenuItem>Add another room</MenuItem>
                            <MenuItem><Button bg='blue'>Done</Button></MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton bg="none" fontSize='13px' color='blue' as={Button} rightIcon={<ChevronDownIcon/>} >
                            Economy
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Travelers</MenuItem>
                            <MenuItem>Room 1</MenuItem>
                            <MenuItem>Adults</MenuItem>
                            <MenuItem>Children Ages 0 to 17</MenuItem>
                            <MenuItem><Input placeholder="Child age"/></MenuItem>
                            <MenuItem></MenuItem>
                            <MenuItem>Add another room</MenuItem>
                            <MenuItem><Button bg='blue'>Done</Button></MenuItem>
                        </MenuList>
                    </Menu>
         </Box>
                    <Box >
                    <Center>
                        <Flex gap='20px'>
                        <InputGroup>
                            <Input  w='400px'
                                pr='5.5rem'
                                placeholder='   Leaving from'
                               
                            />
                            <InputLeftElement width='4.5rem'>
                            <Img w="19px" h="19px" src={iconObj.location}/>
                            </InputLeftElement>
                            <InputGroup ml='1rem' mr='-5rem'>
                            <Input  w='320px'
                                pr='5.5rem'
                                placeholder='   Going to'
                               
                            />
                            <InputLeftElement width='4.5rem'>
                            <Img w="19px" h="19px" src={iconObj.location}/>
                            </InputLeftElement>
                            </InputGroup>
                            </InputGroup>
                            <InputGroup>
                            <Input
                                placeholder='  Departing'
                            />
                            <InputLeftElement>
                            <Img w="19px" h="19px" src={iconObj.calendar}/>
                            </InputLeftElement>
                            </InputGroup>
                            <InputGroup>
                            <Input
                                placeholder='  Returning'
                            />
                            <InputLeftElement >
                            <Img w="19px" h="19px" src={iconObj.calendar}/>
                            </InputLeftElement>
                            </InputGroup>
                        </Flex>
                        </Center>
                    </Box>
                   
                    <Button my='1rem' px='4rem' py='24px' colorScheme='blue'>Search</Button>
    </div>
    )
}
export default Flights