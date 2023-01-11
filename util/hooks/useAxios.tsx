import axios from 'axios';
import { useEffect, useState } from 'react';

import { dataType } from 'components/Organisms/Contact/ContactList';

export default function useAxios(url: any) {
  const [lists, setLists] = useState<dataType[]>([]);

  useEffect(() => {
    const getLists = async () => {
      try {
        const res = await axios.get(url);
        setLists(res.data.lists);
      } catch {
        console.error;
      }
    };
    getLists();
  }, []);
  return lists;
}
