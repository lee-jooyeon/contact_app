import { Box } from '../../Atoms';
import { dataType } from '../Contact/ContactList';

interface dataProps {
  data: dataType;
}

export default function ContactDetail({ data }: dataProps) {
  return (
    <>
      <Box>{data.name}</Box>
    </>
  );
}
