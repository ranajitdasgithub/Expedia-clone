import { ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Button, Heading, Img, Input, InputGroup, InputLeftElement, InputRightElement, Text } from "@chakra-ui/react"
import iconObj from "../HomeIconUrl/Icon"

function HomeMiddle(){
    return (<>
        <Box border='1px' borderColor="gray.300" borderRadius='12px' w='91%' h='280px' m='auto' display="flex" justifyContent='space-between' gap='20px'>
            <Box><Img w='100%' h='100%' borderLeftRadius='12px' src={iconObj.middleImg}/></Box>
            <Box w='50%'>
                <Text textAlign='left' fontSize='4xl' fontFamily='sans-serif'>Our app takes you further</Text>
                <Text textAlign='left'>When you book on the app you can save up to 25% on select hotels while earning double the points with every booking. With these app deals you'll save even more on trips, and that means you can take more trips, and manage it all on the go.</Text>
                <Text textAlign='left' fontSize='2xl'>Text yourself a download link for easy access</Text>
                <Box display='flex' gap='15px'>
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
    
    </>)
}
export default HomeMiddle
