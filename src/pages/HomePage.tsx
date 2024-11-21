// pages/HomePage.tsx
import React, { useState, useEffect } from 'react';
import { Box, Text, List, ListItem, Flex, Spacer } from '@chakra-ui/react';
import Header from '../components/Header';
import { fetchPhones, Phone } from '../api';

const HomePage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);

  useEffect(() => {
    const phoneData = fetchPhones();
    setPhones(phoneData);
  }, []);

  return (
    <>
    
    <Flex minHeight="100%" minWidth="100%" justify="center"  align="center" position="fixed" width="100%"  bgColor={"white"}>
    <Header />
        <Box p={4} bg="white" borderRadius="md" boxShadow="lg" position="relative" maxW="600px"  mx="auto" > 
          <Text fontSize="2xl" fontWeight="bold" mb={4} textAlign="center">
            Welcome to the Phone Store!
          </Text>
          <Text mb={4} textAlign="center">Select your favorite phone from our wide range of options.</Text>
          <List spacing={3}>
            {phones.map((phone) => (
              <ListItem
                key={phone.id}
                p={3}
                borderWidth="1px"
                borderRadius="md"
                boxShadow="sm"
                bg="gray.100"
              >
                <Flex>
                  <Text fontSize="lg">{phone.model}</Text>
                  <Spacer />
                  <Text fontWeight="bold">${phone.price}</Text>
                </Flex>
              </ListItem>
            ))}
          </List>
        </Box>
    </Flex>
    </>
  );
};

export default HomePage;