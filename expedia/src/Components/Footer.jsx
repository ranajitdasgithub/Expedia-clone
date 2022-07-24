import { Box, Button, Img, Text } from "@chakra-ui/react"
import iconObj from "../AllData/Icon"

function Footer(){
    return (<>
        <Box lineHeight='27px' textAlign='start' display='flex' justifyContent='space-between' w='90%' m='auto' pb='30px' borderBottom='1px' borderColor='gray.400'>
            <Box><a href="https://www.expediagroup.com/home/default.aspx"><Img src={iconObj.expediaLogo} /></a></Box>
            <Box>
                <Text fontWeight='500' fontSize='15px'>Company</Text>
                <Box fontSize='12px' color='blue.500'>
                <Text>About</Text>
                <Text>Job</Text>
                <Text>List your property</Text>
                <Text>Partnership</Text>
                <Text>Newsroom</Text>
                <Text>Investor Relations</Text>
                <Text>Advertising</Text>
                </Box>
            </Box>
            <Box>
                <Text fontWeight='500' fontSize='15px'>Explore</Text>
                <Box fontSize='12px' color='blue.500'>
                <Text>United States of America travel guide</Text>
                <Text>Hotels in United States of America</Text>
                <Text>Vacation rentals in United States of America</Text>
                <Text>Vacation packages in United States of America</Text>
                <Text>Domestic flights</Text>
                <Text>Car rentals in United States of America</Text>
                <Text>All accommodation types</Text>
                </Box>
            </Box>
            <Box>
                <Text fontWeight='500' fontSize='15px'>Policies</Text>
                <Box fontSize='12px' color='blue.500'>
                <Text>Privacy policy</Text>
                <Text>Terms of use</Text>
                <Text>Vrbo terms and conditions</Text>
                <Text>Expedia Rewards Terms</Text>
                <Text>Accessibility</Text>
                <Text>Do not sell my personal information</Text>
                </Box>
            </Box>
            <Box>
                <Text fontWeight='500' fontSize='15px'>Help</Text>
                <Box fontSize='12px' color='blue.500'>
                <Text>Support</Text>
                <Text>Cancel your hotel or vacation rental booking</Text>
                <Text>Cancel your flight</Text>
                <Text>Refund timelines, policies & processes</Text>
                <Text>Use an Expedia coupon</Text>
                <Text>International travel documents</Text>
                </Box>
            </Box>
        </Box>
        <Box my='2rem' fontSize='12px' lineHeight='25px'>
            <Text>Expedia, Inc. is not responsible for content on external Web sites.</Text>
            <Text>© 2022 Expedia, Inc., an Expedia Group company. All rights reserved. Expedia and the Airplane Logo are trademarks or registered trademarks of Expedia, Inc. CST# 2029030-50.</Text>
        </Box>
        <Box position='fixed' bottom='5' right='10' color='blue.500'><a href=""><Button bg='white' boxShadow='md' borderRadius='25px'><Img w='17px' mr='6px' src={iconObj.chatBlue}/>Help</Button></a></Box>
    </>)
}
export default Footer