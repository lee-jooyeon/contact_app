import { css, keyframes } from '@emotion/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import contacts from '../assets/Images/common/contacts.png';
import { Box, Button, Span } from '../components/Atoms';
import theme from '../styles/theme';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <Box
      background='#22223a'
      position='relative'
      minHeight='100vh'
      overflow='hidden'
    >
      <Box
        position='absolute'
        top='50%'
        left='50%'
        textAlign='center'
        css={css`
          transform: translate(-50%, -50%);
        `}
      >
        <Image
          src={contacts}
          alt='image'
          width={100}
          height={100}
          layout='fixed'
          css={css`
            animation: ${moving} 2s infinite;
          `}
        />
        <Button
          marginTop='25px'
          width='150px'
          height='50px'
          borderRadius='50px'
          fontSize='15px'
          textAlign='center'
          background='#84ffb5'
          color={theme.colors.white}
          onClick={() => router.push('/contact')}
        >
          Contacts
        </Button>
      </Box>
    </Box>
  );
};

const moving = keyframes`
    0 {
      transform: scale(0.7); 
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
`;

export default Home;
