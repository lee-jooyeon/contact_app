import { Box } from '../../components/Atoms';
import CommonHeader from '../../components/Molecules/CommonHeader';
import ContactList from '../../components/Organisms/Contact/ContactList';

export default function Contact() {
  return (
    <Box>
      <CommonHeader />
      <ContactList />
    </Box>
  );
}
