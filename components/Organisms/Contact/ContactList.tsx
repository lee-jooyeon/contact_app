import { css } from '@emotion/react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import { Box, ListWrap } from 'components/Atoms';
import ContactItem from 'components/Organisms/Contact/ContactItem';
import Loading from 'public/lottie/loading.json';

// 자식 컴포넌트에 넘겨주기 위해 export 정의
export type dataType = {
  id: number;
  name: string;
  group: string;
  number: string;
  url: string | null;
};

export default function ContactList() {
  // lists Array state에 제네릭 타입을 지정해 줍니다.
  const [lists, setLists] = useState<dataType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const booksKey = JSON.parse(localStorage.getItem('booksKey')); //  오브젝트 서버로부터 JSON을 받는다면 parse을 이용해서 JSON 문자열을 object 객체로 변환한다.
    if (booksKey !== null && booksKey.length > 0) {
      setLists(booksKey);
    } else {
      const getLists = async () => {
        try {
          const res = await axios.get('http://localhost:3000/api/detail/id');
          // console.log(res.data.lists);
          setLists(res.data.lists);
          setIsLoading(false);
        } catch {
          console.error;
        }
      };
      getLists();
    }
  }, []);

  useEffect(() => {
    const scroll = parseInt(localStorage.getItem('scrollKey'));
    window.scrollTo(0, scroll);
  }, [lists]);

  return (
    <ListWrap>
      <Box>
        {!isLoading &&
          lists.map((data) => <ContactItem data={data} key={data.id} />)}
        <Box
          position="absolute"
          top="70%"
          left="50%"
          css={css`
            transform: translate(-50%, -50%);
          `}
        >
          {isLoading && (
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: Loading,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice',
                },
              }}
              height={100}
              width="100%"
            />
          )}
        </Box>
      </Box>
    </ListWrap>
  );
}
