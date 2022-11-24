import { Box } from '../../components/Atoms';
import CommonHeader from '../../components/Molecules/CommonHeader';
import ContactList from '../../components/Organisms/Contact/ContactList';

export default function Contact() {
  return (
    <Box background='#22223a' minHeight='100vh' overflow='hidden'>
      <CommonHeader />
      <ContactList />
    </Box>
  );
}
