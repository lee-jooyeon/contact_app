import { Box } from '../../Atoms';
import { dataType } from '../Contact/ContactList';

export default function ContactDetail({
  userDataLists,
  id,
}: {
  userDataLists: dataType[];
  id: number;
}) {
  return (
    <>
      <Box color='#fff'>{userDataLists[id]?.name}</Box>
    </>
  );
}
