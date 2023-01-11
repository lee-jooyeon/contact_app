import { css } from '@emotion/react';
import useAxios from 'util/hooks/useAxios';
import { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { useRecoilValue } from 'recoil';

import { Box, ListWrap } from 'components/Atoms';
import ContactItem from 'components/Organisms/Contact/ContactItem';
import Loading from 'public/lottie/loading.json';
import { renderState } from 'states/renderState';

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
  // const [lists, setLists] = useState<dataType[]>([]);
  const lists = useAxios('http://localhost:3000/api/detail/id');
  const [isLoading, setIsLoading] = useState(false);

  const setRenderState = useRecoilValue(renderState);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const getLists = async () => {
  //     try {
  //       const res = await axios.get('http://localhost:3000/api/detail/id');
  //       // console.log(res.data.lists);
  //       setLists(res.data.lists);
  //       setIsLoading(false);
  //     } catch {
  //       console.error;
  //     }
  //   };
  //   getLists();
  // }, []);

  useEffect(() => {
    const scroll = sessionStorage.getItem('scrollKey') || '{}';
    if (setRenderState === true) {
      const scrollKey: number = parseInt(scroll);
      window.scrollTo(0, scrollKey);
    }
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
