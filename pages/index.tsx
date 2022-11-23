import { css, keyframes } from '@emotion/react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import contacts from '../assets/Images/common/contacts.png';
import { Box, Button, Span } from '../components/Atoms';
import theme from '../styles/theme';

const Home: NextPage = () => {
  const router = useRouter();
  const moving = keyframes`
    0 {
      -webkit-transform: scale(0);
      transform: scale(0);  
    }
    50% {
      -webkit-transform: scale(0.5);
      transform: scale(0.5);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
`;
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
        <Box
          css={css`
            animation: ${moving} 2s ease ease-in-out;
          `}
        >
          <Image
            src={contacts}
            alt='image'
            width={80}
            height={80}
            layout='fixed'
          />
        </Box>
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

export default Home;
