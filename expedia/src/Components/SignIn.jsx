import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
    Box,
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const navigate=useNavigate()
    const handleLogin=()=>{
            navigate("/login")
    }
    const handleSignup=()=>{
        navigate("/signup")
}
    return (
      <>
        <Button bg='none' mt='-.5rem' ml='-1.6rem' onClick={onOpen}>Sign in</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            
              <Box w='85%' m='auto' lineHeight='3rem' textAlign='start' borderBottom='1px' borderColor='gray.400'>
                <ModalHeader>You could be getting lower prices</ModalHeader>
                <Text>Save 10% or more on thousands of prpperties.</Text>
                <Button onClick={handleLogin} w='100%' bg='blue' color='white'>Sign in</Button>
                <Button  onClick={handleSignup} ml='31%' mt='1rem' textAlign='center'>Sign up, it`s free</Button>
                <Text>List of favorites</Text>
                <Text>Expedia Rewards</Text>
              </Box>
              <Text my='1rem' pl='2.2rem'>Feedback</Text>
              <ModalCloseButton />
          </ModalContent>
        </Modal>
      </>
    )
  }
export default SignIn