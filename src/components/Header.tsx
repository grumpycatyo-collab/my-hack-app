// components/Header.tsx
import React from 'react';
import { Box, Flex, Heading, Spacer, Button } from '@chakra-ui/react';

export const Header: React.FC = () => {
  return (
    <Flex as="header" align="center" justify="space-between" padding={4} backgroundColor="blue.500">
      <Heading size="lg" color="white">
        Phone Store
      </Heading>
      <Spacer />
      <Box>
        <Button colorScheme="teal" mr={4}>
          Sign In
        </Button>
        <Button colorScheme="teal" variant="outline">
          Sign Up
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;