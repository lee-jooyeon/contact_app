import { useRouter } from 'next/router';

import Box from '../Atoms/Box';
import { FlexBox } from '../Atoms';
import NavBack from '../../assets/topNavigator/common/NavBack';
import NavPlus from '../../assets/topNavigator/common/NavPlus';

export default function CommonHeader() {
  const router = useRouter();

  return (
    <FlexBox padding='15px 10px' justifyContent='space-between'>
      <Box onClick={() => router.back()}>
        <NavBack />
      </Box>
      <Box lineHeight='30px' fontWeight={500} alignSelf='center'>
        Contacts
      </Box>
      <Box>
        <NavPlus />
      </Box>
    </FlexBox>
  );
}
