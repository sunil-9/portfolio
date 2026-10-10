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
                pt={4}
                pb={{ base: "24px", md: "0" }}
            >
                {children}
            </Box>
            <Footer/>
        </>
    )
}

export default Layout;
