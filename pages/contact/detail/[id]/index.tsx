import { GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { useRouter } from 'next/router';
import NavBack from '../../../../assets/topNavigator/common/NavBack';
import { Box, List, ListWrap, Span } from '../../../../components/Atoms';
import ImageItem from '../../../../components/Molecules/ImgLists/ImageItem';
import { dataType } from '../../../../components/Organisms/Contact/ContactList';
import theme from '../../../../styles/theme';
import Error404 from '../../../404';
import { SP } from 'next/dist/shared/lib/utils';

export interface UserProps {
  userDataLists: dataType[];
  id: number;
}

export default function Detail({ userDataLists, id }: UserProps) {
  const router = useRouter();
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
    <Box padding='15px 10px'>
      <Span onClick={() => router.back()}>
        <NavBack />
      </Span>
      {userDataLists[id] !== undefined ? (
        <ListWrap>
          <List color={theme.colors.white}>
            <Box textAlign='center'>
              <ImageItem url={userDataLists[id].url} />
            </Box>
            <Span>{userDataLists[id].name}</Span>
            <Span>{userDataLists[id].group}</Span>
            <Span>{userDataLists[id].number}</Span>
          </List>
        </ListWrap>
      ) : (
        <Error404 />
      )}
      {userDataLists.map(lists => (
        <ListWrap>
          <List color={theme.colors.white}>
            <Span>{lists.name}</Span>
            {/* <Box textAlign='center'>
              <ImageItem url={lists[id].url} />
            </Box>
            <Span>{lists[id].name}</Span>
            <Span>{lists[id].group}</Span>
            <Span>{lists[id].number}</Span> */}
          </List>
        </ListWrap>
      ))}
    </Box>
  );
}

// getServerSideProps가 반환하는 데이터를 사용하여 페이지를 사전 렌더링 하려면
export const getServerSideProps = async (
  context: GetServerSidePropsContext
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
