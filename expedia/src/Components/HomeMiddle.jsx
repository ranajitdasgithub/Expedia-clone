import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Button, Heading, Img, Input, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import iconObj from "../AllData/Icon"


function HomeMiddle(){
    return (<>
        <Box border='1px' borderColor="gray.300" borderRadius='12px' w='91%' h='290px' m='auto' display="flex" justifyContent='space-between' gap='20px'>
            <Box><Img w='100%' h='100%' borderLeftRadius='12px' src={iconObj.middleImg}/></Box>
            <Box w='50%'>
                <Text textAlign='left' fontSize='4xl' fontFamily='sans-serif'>Our app takes you further</Text>
                <Text textAlign='left'>When you book on the app you can save up to 25% on select hotels while earning double the points with every booking. With these app deals you'll save even more on trips, and that means you can take more trips, and manage it all on the go.</Text>
                <Text textAlign='left' fontSize='2xl'>Text yourself a download link for easy access</Text>
                <Box my='1rem' display='flex' gap='15px'>
                <InputGroup>
                            <Input
                                py='1.4rem'
                                placeholder='Country code'
                            />
                            <InputRightElement>
                            <ChevronDownIcon/>
                            </InputRightElement>
                </InputGroup>
                    <Input py='1.4rem' placeholder="Phone number" />
                    <Button bg='blue' color='white' px='5rem' py='1.5rem' >Get the app</Button>
                </Box>
                <Text fontSize='12px' textAlign='left'>By providing your number, you agree to receive a one-time automated text message with a link to get the app. Standard text message rates may apply.</Text>
            </Box>
            <Box mx='20px'><Img mt='2rem' w='100%' h='60%' src={iconObj.qr}/><Text>Scan the QR code</Text></Box>
        </Box>
        {/* Image section middle */}
        <Box position='relative' w="90%"  m='2rem auto'>
            <Img w='100%' h='500px' borderRadius='12px'  src={iconObj.getmoreImg}/>
            <Box h='300px' w='380px' position='absolute' top='9rem' left='4rem'>
                <Text pr='100px' color='white' fontSize='40px' textAlign='start' lineHeight='40px' fontWeight='600'>Get more to go more</Text>
                <Text mt='25px' pr='10px' color='white' fontSize='16px' textAlign='start' lineHeight='20px' fontWeight='400'>Members can double dip on rewards. Sign up for free and start getting points on top of airline miles.</Text>
                <Button bg='blue' color='white' display='flex' mt='15px' py='1.5rem'>See flight deals</Button>
            </Box>
        </Box>
        {/* Here to help you section */}
        <Box w="91%"  m='2rem auto'>
            <Heading my='2rem' textAlign='start' fontFamily='sans-serif'>Here to help keep you on the move</Heading>
            <Box textAlign='start' display='flex' justifyContent='space-evenly'>
                <Box cursor='pointer' position='relative' p='1rem' pr='7rem' border='1px' borderColor='gray.300' borderRadius='10px'>
                    <Text mt='-9px' mb='7px' fontSize="lg" fontWeight='600'>Change or cancel trip</Text>
                    <Text fontSize="12px" fontWeight='400'>Make updates to your itinery or cancel a booking</Text>
                    <Box  position='absolute' top='10px' right='14px'><Img w='12px' src={iconObj.pen} /></Box>
                </Box>
                <Box cursor='pointer' position='relative' p='1rem' pr='7rem' border='1px' borderColor='gray.300' borderRadius='10px'>
                    <Text mt='-9px' mb='7px'  fontSize="lg" fontWeight='600'>Use a credit or coupon</Text>
                    <Text fontSize="12px" fontWeight='400'>Apply a coupon code or credit to a new trip</Text>
                    <Box  position='absolute' top='10px' right='14px'><Img w='14px' src={iconObj.dollar} /></Box>
                </Box>
                <Box cursor='pointer' position='relative' p='1rem' pr='7rem' border='1px' borderColor='gray.300' borderRadius='10px'>
                    <Text mt='-9px' mb='7px' fontSize="lg" fontWeight='600'>Track your refund</Text>
                    <Text fontSize="12px" fontWeight='400'>Check the status of a refund currently in progress</Text>
                    <Box  position='absolute' top='10px' right='14px'><Img w='16px' src={iconObj.chat} /></Box>
                </Box>
            </Box>
        </Box>
        {/* Lower middle 5 image section */}
        <Box  w="91%"  m='2rem auto' display="flex" gap='26px' textAlign='start'>
            <Link to='/fullhotel'>
            <Box cursor='pointer'>
                <Img borderRadius='10px' w='100%' src={iconObj.m1} />
                <Text fontSize="12px" mt='14px' fontWeight='400'>VIP ACCESS</Text>
                <Text fontSize="16px" fontWeight='600'>The view looks even better as a VIP</Text>
            </Box>
            </Link>
            <Link to='/fullhotel1'>
            <Box cursor='pointer'>
                <Img borderRadius='10px' w='100%' src={iconObj.m2} />
                <Text fontSize="12px" mt='14px' fontWeight='400'>GRAB YOUR KEYS</Text>
                <Text fontSize="16px" fontWeight='600'>You need a change of scenery</Text>
            </Box>
            </Link>
            <Link to="/fullhotel">
            <Box cursor='pointer'>
                <Img borderRadius='10px' w='100%' src={iconObj.m3} />
                <Text fontSize="12px" mt='14px' fontWeight='400'>BROADEN YOUR HORIZONS</Text>
                <Text fontSize="16px" fontWeight='600'>There's a whole lo of world out there-go see more of it</Text>
            </Box>
            </Link>
        </Box>
        <Box  w="91%"  m='2rem auto' display="flex" gap='26px' textAlign='start'>
            <Link to="/fullhotel1">
            <Box cursor='pointer'>
                <Img borderRadius='10px' w='100%' src={iconObj.m4} />
                <Text fontSize="12px" mt='14px' fontWeight='400'>FOR THE LOVE OF SUMMER</Text>
                <Text fontSize="16px" fontWeight='600'>Chase the sun to someplace extraordinary</Text>
            </Box>
            </Link>
            <Link to="/fullhotel">
            <Box cursor='pointer'>
                <Img borderRadius='10px' w='100%' src={iconObj.m5} />
                <Text fontSize="12px" mt='14px' fontWeight='400'>YOUR BEACH BLISS AWAITS</Text>
                <Text fontSize="16px" fontWeight='600'>Experience ultimate relaxation with a coastal getaway</Text>
            </Box>
            </Link>
        </Box>
    
    </>)
}
export default HomeMiddle
