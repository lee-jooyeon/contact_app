import axios from 'axios';
import { useEffect, useState } from 'react';

import { Box } from '../../Atoms';
import ContactItem from './ContactItem';

export type dataType = {
  id: number;
  name: string;
  group: string;
  number: string;
};

export default function ContactList() {
  const [lists, setLists] = useState<dataType[]>([]);

  useEffect(() => {
    const getLists = async () => {
      try {
        const res = await axios.get(
          'https://my-json-server.typicode.com/lee-jooyeon/contacts/db'
        );
        setLists(res.data.lists);
        console.log(res.data.lists);
      } catch {
        console.error;
      }
    };
    getLists();
  }, []);

  return (
    <>
      <Box>
        {lists.map(data => (
          <ContactItem data={data} key={data.id} />
        ))}
      </Box>
    </>
  );
}
