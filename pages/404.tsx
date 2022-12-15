import { useRouter } from 'next/router';

import Lottie from 'react-lottie';
import { Box, Button, List, ListWrap, Span } from 'components/Atoms';
import ErrorDog from 'public/lottie/error-doggy.json';
import theme from 'styles/theme';

export default function Error404() {
  const router = useRouter();
  return (
    <Box display="flex" justifyContent="center">
      <ListWrap alignSelf="center" textAlign="center">
        <List color={theme.colors.white} fontSize="70px" fontWeight={500}>
          404
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: ErrorDog,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            height={250}
            width="100%"
          />
          <Span
            margin="30px 0px 20px"
            display="block"
            fontSize="23px"
            lineHeight="24px"
          >
            Page Not Found
          </Span>
          <Span display="block" fontSize="15px" lineHeight="20px">
            The page you were looking for doesn't exist anymore.
          </Span>
        </List>
        <Button
          background="#4b61cf"
          color={theme.colors.white}
          marginTop="35px"
          width="200px"
          height="60px"
          borderRadius="50px"
          fontSize="20px"
          textAlign="center"
          fontWeight={500}
          onClick={() => router.push('/')}
        >
          Back to Home
        </Button>
      </ListWrap>
    </Box>
  );
}
