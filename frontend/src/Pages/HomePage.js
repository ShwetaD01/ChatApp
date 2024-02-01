import React from 'react'
import { Container , Box,Text, Tabs,TabList, Tab, TabPanels, TabPanel} from '@chakra-ui/react'
import Signup from '../components/Authentication/SignUp';
import Login from '../components/Authentication/Login';
const HomePage = () => {
  return (
    <Container>
    <Box  d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px">

      <Text fontSize="4xl" fontFamily="Verdana, Geneva, Tahoma, sans-serif">Buddy Ping</Text>
    </Box>
    <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
    <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em">
            <Tab>Login</Tab>
            <Tab>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>


    </Box>
    
    </Container>
  )
}

export default HomePage
