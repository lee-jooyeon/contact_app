import axios from 'axios';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import NavBack from '../../../../assets/topNavigator/common/NavBack';
import { Box, Span } from '../../../../components/Atoms';
import { dataType } from '../../../../components/Organisms/Contact/ContactList';
import ContactDetail from '../../../../components/Organisms/Detail/ContactDetail';

export default function Detail() {
  const router = useRouter();
  // const { id } = router.query;
  const [userDataLists, setUserDataLists] = useState<dataType[]>([]);

  // const getNewList = async (post: dataType) => {
  //   const { data } = await axios({
  //     url: 'https://my-json-server.typicode.com/lee-jooyeon/contacts/db',
  //     method: 'POST',
  //     data: {
  //       id: post.id,
  //       name: post.name,
  //       group: post.group,
  //       number: post.number,
  //     },
  //   });
  //   return data;
  // };

  useEffect(() => {
    const getNewList = async () => {
      try {
        const res = await axios.get(
          'https://my-json-server.typicode.com/lee-jooyeon/contacts/db'
        );
        setUserDataLists(res.data.lists);
      } catch {
        console.error;
      }
    };
    getNewList();
  }, []);

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
      <ContactDetail
        userDataLists={userDataLists}
        id={Number(router?.query?.id) - 1}
      />
    </Box>
  );
}
