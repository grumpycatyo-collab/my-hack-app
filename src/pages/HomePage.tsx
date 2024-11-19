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
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Flex flex="1" bg="gray.200" maxW="100%" justify="center" align="center">
        <Box p={4} bg="white" borderRadius="md" boxShadow="lg" alignSelf={"center"}>
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
    </Flex>
  );
};

export default HomePage;