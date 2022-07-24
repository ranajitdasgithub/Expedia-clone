import { StarIcon } from "@chakra-ui/icons"
import { Badge, Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

function SingleHotel({value}) {
    console.log(value,"value")
    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    }
  
    return (
      <Box  position='relative' maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image h='300px' w='100%' src={value.url} alt={value.name} />
  
        <Box p='6'>
          <Box display='flex' alignItems='baseline'>
            <Badge position="absolute" top='5' borderRadius='full' px='2' py='0.5' bg='black' color='white'fontSize='10px'>
              VIP Access
            </Badge>
          </Box>
  
          <Box
            fontWeight='semibold'
            as='h4'
            lineHeight='tight'
            noOfLines={1}
            textAlign='start'
          >
            {value.name}
          </Box>
          <Text textAlign='start'>{value.place}</Text>
  
          <Box display='flex' mt='2' alignItems='center'>
            {value.rating}/5
            <Box  as='span' ml='2' color='gray.600' fontSize='16px'>
              ({value.review} reviews)
            </Box>
          </Box> 
        </Box>
        <Flex>
        <Box w='81%' mt='-1rem' borderBottom='1px' borderColor='gray.400'></Box>
        <Box position='absolute' bottom='2.8rem' right='3' background='yellow' borderRadius='15px' fontSize='12px' p='5px' >30% off</Box>
        </Flex>
        <Text mt='25px' fontSize='20px' fontWeight='700' ml='76%'>${value.price}</Text>
      </Box>
    )
  }
  export default SingleHotel