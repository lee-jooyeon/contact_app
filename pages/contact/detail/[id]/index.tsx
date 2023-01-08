import styled from '@emotion/styled';
import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useSetRecoilState } from 'recoil';

import callIcon from 'assets/Images/common/call.png';
import facetimeIcon from 'assets/Images/common/facetime.png';
import msgIcon from 'assets/Images/common/message.png';
import NavBack from 'assets/topNavigator/common/NavBack';
import { Box, ListWrap, Span } from 'components/Atoms';
import ImageItem from 'components/Molecules/ImgLists/ImageItem';
import { dataType } from 'components/Organisms/Contact/ContactList';
import Error404 from 'pages/404';
import { renderState } from 'states/renderState';
import theme from 'styles/theme';

export interface UserProps {
  userDataLists: dataType[];
  id: number;
}

const List = styled('li')`
  margin-bottom: 15px;
  padding: 20px 15px;
  background: #ffffff;
  border-radius: 10px;
  & > div {
    margin-bottom: 10px;
    font-size: 17px;
    font-weight: 600;
  }
  & > span {
    text-align: center;
    font-size: 17px;
    color: #278deb;
  }
`;

export default function Detail({ userDataLists, id }: UserProps) {
  const router = useRouter();
  const isBackState = useSetRecoilState(renderState);
  // const { id } = router.query;
  // const userId = Number(router?.query?.id) - 1;
  // const [userDataLists, setUserDataLists] = useState<dataType[]>([]);

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

  return (
    <Box padding="15px 10px">
      <Span
        onClick={() => {
          isBackState(true);
          router.back();
        }}
      >
        <NavBack />
      </Span>
      {userDataLists[id] !== undefined ? (
        <ListWrap>
          <Box textAlign="center" marginBottom="50px">
            <ImageItem url={userDataLists[id].url} />
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            textAlign="center"
            marginBottom="50px"
            color={theme.colors.white}
          >
            <Span>
              <Image
                className="imgBox"
                src={msgIcon}
                alt="image"
                width={50}
                height={50}
                layout="fixed"
              />
              <Box marginTop="10px" color={theme.colors.white}>
                Message
              </Box>
            </Span>
            <Span>
              <Image
                className="imgBox"
                src={callIcon}
                alt="image"
                width={50}
                height={50}
                layout="fixed"
              />
              <Box marginTop="10px" color={theme.colors.white}>
                Message
              </Box>
            </Span>
            <Span className="contactItem">
              <Image
                className="imgBox"
                src={facetimeIcon}
                alt="image"
                width={50}
                height={50}
                layout="fixed"
              />
              <Box marginTop="10px" color={theme.colors.white}>
                Message
              </Box>
            </Span>
          </Box>
          <List>
            <Box>Name</Box>
            <Span>{userDataLists[id].name}</Span>
          </List>
          <List>
            <Box>Group</Box>
            <Span>{userDataLists[id].group}</Span>
          </List>
          <List>
            <Box>Number</Box>
            <Span>{userDataLists[id].number}</Span>
          </List>
        </ListWrap>
      ) : (
        <Error404 />
      )}
    </Box>
  );
}

// getServerSideProps가 반환하는 데이터를 사용하여 페이지를 사전 렌더링 하려면
export const getServerSideProps = async (
  context: GetServerSidePropsContext,
) => {
  const id = Number(context.params?.id) - 1;
  const URL = `http://localhost:3000/api/detail/${id}`;
  const res = await axios.get(URL);
  console.log('context:', context);
  console.log('id:', typeof id);

  try {
    return {
      props: {
        id,
        userDataLists: res.data.lists,
      },
    };
  } catch (error) {
    console.log(error);
  }
};
