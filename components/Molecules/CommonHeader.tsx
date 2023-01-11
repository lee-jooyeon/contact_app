import Image from 'next/image';
import { useRouter } from 'next/router';

import Box from '../Atoms/Box';

import emoji from 'assets/Images/common/emoji_.png';
import NavBack from 'assets/topNavigator/common/NavBack';
import NavPlus from 'assets/topNavigator/common/NavPlus';
import { FlexBox, Span } from 'components/Atoms';
import theme from 'styles/theme';

export default function CommonHeader() {
  const router = useRouter();

  return (
    <Box>
      <FlexBox padding="15px 10px" justifyContent="space-between">
        <Span onClick={() => router.back()}>
          <NavBack />
        </Span>
        <Box
          lineHeight="30px"
          fontWeight={500}
          color={theme.colors.white}
          alignSelf="center"
        >
          Contacts
        </Box>
        <Span onClick={() => router.push('/contact/new/')}>
          <NavPlus />
        </Span>
      </FlexBox>
      <Box
        margin="30px 15px 0px"
        paddingBottom="15px"
        borderBottom="1px solid #eeeeee"
        textAlign="center"
      >
        <Image
          src={emoji}
          alt="image"
          width={100}
          height={120}
          layout="fixed"
        />
        <Span display="block" marginTop="15px" color={theme.colors.white}>
          JOOYEON
        </Span>
      </Box>
    </Box>
  );
}
