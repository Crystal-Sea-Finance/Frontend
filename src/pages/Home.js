import {
  Container,
  Stack,
  VStack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react';

import HeaderImg from '../assets/images/header.png';
import ColouredBackground from '../assets/images/coloured_background.png';
import WhiteBackground from '../assets/images/white_background.png';
import Navbar from '../Components/Navbar';
import ColoredHomeCard from '../Components/ColoredHomeCard';
import SwapIcon from '../assets/icons/landing_swap.png';
import PoolIcon from '../assets/icons/landing_pool.png';
import FarmsIcon from '../assets/icons/landing_farms.png';
import LendIcon from '../assets/icons/landing_lend.png';
import StakeIcon from '../assets/icons/landing_stake.png';
import VoteIcon from '../assets/icons/landing_vote.png';
export default function Home() {
  return (
    <>
      <Flex
        w={'100%'}
        backgroundRepeat='no-repeat'
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        backgroundImage={ColouredBackground}
      >
        <Container maxW={'7xl'}>
          <Navbar />
          <Stack
            align={'center'}
            spacing={{ base: 8, md: 10 }}
            py={{ base: 20, md: 28 }}
            pt={{ base: 20, md: 10 }}
            direction={{ base: 'column', md: 'row' }}
          >
            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
              >
                <Text
                  color='white'
                  as={'h1'}
                  position={'relative'}
                  _after={{
                    content: "''",
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'red.400',
                    zIndex: -1,
                  }}
                >
                  Join the best cryptocurrency Exchange
                </Text>
              </Heading>
              <Text color={'white'}>
                Start investing now on crystalsea you can learn, buy and sell
                cryptocurrency assets with the best quality.
              </Text>
              <Stack
                spacing={{ base: 4, sm: 6 }}
                direction={{ base: 'column', sm: 'row' }}
              >
                <Button
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                  colorScheme={'red'}
                  bg={'primary.400'}
                  _hover={{ bg: 'red.500' }}
                >
                  Get started
                </Button>
                <Button
                  color='primary.400'
                  rounded={'full'}
                  size={'lg'}
                  fontWeight={'normal'}
                  px={6}
                >
                  How It Works
                </Button>
              </Stack>
            </Stack>
            <Flex
              flex={1}
              justify={'center'}
              align={'center'}
              position={'relative'}
              w={'full'}
            >
              <Box
                position={'relative'}
                height={'400px'}
                rounded={'2xl'}
                width={'full'}
                overflow={'hidden'}
              >
                <Image
                  alt={'Hero Image'}
                  fit={'cover'}
                  align={'center'}
                  w={'100%'}
                  h={'100%'}
                  src={HeaderImg}
                />
              </Box>
            </Flex>
          </Stack>
        </Container>
      </Flex>
      <Flex
        w={'full'}
        backgroundRepeat='no-repeat'
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        backgroundImage={WhiteBackground}
      >
        <VStack
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          px={{ base: 10, md: 28 }}
          pt={{ base: 20, md: 10 }}
        >
          <Text>About Us</Text>
          <Text>
            Crystalsea is a diverse multichain De-Fi ecosystem which consists of
            a launchpad, contract auditing, blockchain gaming, token vesting and
            liquidity locking services. Crystalsea is the first platform that
            implemented NFTs into launchpad, investors will be able to purchase
            limited NFTs which will grant LIFETIME allocations for every project
            that launches on the platform.
          </Text>
          <Flex
            mx={{ md: 10 }}
            direction={{ base: 'column', md: 'row' }}
            justifyContent={'space-between'}
            w={'full'}
          >
            <VStack>
              <Text fontSize={48} fontWeight={'bold'}>
                10+
              </Text>
              <Text fontSize={16}>Blockchain Support</Text>
            </VStack>
            <VStack>
              <Text fontSize={48} fontWeight={'bold'}>
                Deflationary
              </Text>
              <Text fontSize={16}>Ecosystem Model</Text>
            </VStack>
            <VStack>
              <Text fontSize={48} fontWeight={'bold'}>
                NO KYC
              </Text>
              <Text fontSize={16}>Fully Decentralised</Text>
            </VStack>
          </Flex>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justifyContent={'space-between'}
            w={'full'}
          >
            <ColoredHomeCard image={SwapIcon} text={'Swap'} />
            <ColoredHomeCard image={PoolIcon} text={'Pool'} />
            <ColoredHomeCard image={FarmsIcon} text={'Farms'} soon />
          </Flex>
          <Flex
            direction={{ base: 'column', md: 'row' }}
            justifyContent={'space-between'}
            w={'full'}
          >
            <ColoredHomeCard image={LendIcon} text={'Lend'} soon />
            <ColoredHomeCard image={StakeIcon} text={'Stake'} soon />
            <ColoredHomeCard image={VoteIcon} text={'Vote'} soon />
          </Flex>
        </VStack>
      </Flex>
    </>
  );
}
