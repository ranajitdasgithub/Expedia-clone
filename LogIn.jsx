import { ArrowBackIcon } from "@chakra-ui/icons"
import { Box, Button, Checkbox, Flex, Heading, Img, Input, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import iconObj from "../AllData/Icon"

function LogIn(){
    const navigate=useNavigate()
    const handleArrowBack=()=>{
        navigate("/")
    }
    return (<>
    <Box py='.7rem' borderBottom='1px' borderColor='gray.400' >
        <Flex>
       <ArrowBackIcon onClick={handleArrowBack} ml='1rem' w='2.5rem' h='1.5rem'/>
       <Img ml='38%' src={iconObj.Logo}/>
       </Flex>
    </Box>
    <Box w='28%' m='auto' textAlign='start'>
        <Heading my='1.5rem'>Sign in</Heading>
        <Stack spacing={6}>
            <Input p='1rem' borderRadius='10px' placeholder='Email address' size='lg' />
            <Input p='1rem' borderRadius='10px' placeholder='Password' type='password' size='lg' />
            <Checkbox>This is a public or shared device</Checkbox>
            <Text fontSize='15px'>By signing in, I agree to the Expedia
                <a href={iconObj.terms} style={{color:"blue",fontSize:"14px"}}> Terms and Conditions.</a>
                <a href={iconObj.privacy} style={{color:"blue",fontSize:"14px"}}> Privacy Statement </a> and 
                <a href={iconObj.rewards} style={{color:"blue",fontSize:"14px"}}> Expedia Rewards Terms and Condtions</a>
                 </Text>
        </Stack>
        <Button px='43%' py='1.5rem' my='1rem' color='white' bg='blue' >Sign in</Button>
    </Box>
    <Box textAlign='center'>
        <Stack>
        <a style={{color:"blue",fontSize:"15px"}} href="">Forgot password?</a>
        <span>Dont't have an account? <Link style={{color:"blue",fontSize:"15px"}}  to="/signup">Create one</Link></span>
        <span>or continue with</span>
        </Stack>
        <Box ml='46%' mt='1rem'>
            <Flex gap='2rem'>
            <Img w='1.1rem' src={iconObj.apple} />
            <Img w='1.1rem' src={iconObj.facebook} />
            <Img w='1.1rem' src={iconObj.gmail} />
            </Flex>
        </Box>
    </Box>
    </>)
}
export default LogIn