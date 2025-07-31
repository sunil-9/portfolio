import React from 'react';
import { Box } from '@chakra-ui/react';
import NavBar from './NavBar';
import Footer from './Footer';

function Layout({children}) {
    return (
        <>
            <NavBar/>
            <Box 
                as="main"
                pt={{ base: "12", md: "0" }}  // Add top padding for mobile top bar
                pb={{ base: "65px", md: "0" }} // Add bottom padding for mobile bottom nav
            >
                {children}
            </Box>
            <Footer/>
        </>
    )
}

export default Layout;
