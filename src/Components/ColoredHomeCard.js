import { Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

function ColoredHomeCard({ image, text, soon }) {
  return (
    <VStack
      spacing={5}
      p={{ base: 6, md: 12 }}
      bg={'secondary.400'}
      my={{ base: 4, md: 0 }}
      w={{ base: 300, md: 280 }}
      borderRadius={10}
    >
      <Image src={image} height={'100px'} width={'100px'} />
      <Text color={'white'} fontWeight={'bold'} fontSize={30}>
        {text}
      </Text>
      {soon && (
        <Text color={'primary.400'} fontWeight={'bold'} fontSize={16}>
          coming soon
        </Text>
      )}
    </VStack>
  );
}

export default ColoredHomeCard;
