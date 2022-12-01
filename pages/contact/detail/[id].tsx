import { useRouter } from 'next/router';
import NavBack from '../../../assets/topNavigator/common/NavBack';
import { Box, Span } from '../../../components/Atoms';
import { dataProps } from '../../../components/Organisms/Contact/ContactItem';
import { dataType } from '../../../components/Organisms/Contact/ContactList';
import ContactDetail from '../../../components/Organisms/Detail/ContactDetail';

export default function Detail() {
  const router = useRouter();
  const data = router.query;

  return (
    <Box
      position='relative'
      padding='15px 10px'
      minHeight='100vh'
      overflow='hidden'
      background='#22223a'
    >
      <Span onClick={() => router.back()}>
        <NavBack />
      </Span>
      <ContactDetail data={data} />
    </Box>
  );
}
