import axios from 'axios';
import { useRouter } from 'next/router';
import NavBack from '../../../../assets/topNavigator/common/NavBack';
import { Box, Span } from '../../../../components/Atoms';
import { dataType } from '../../../../components/Organisms/Contact/ContactList';
import ContactDetail from '../../../../components/Organisms/Detail/ContactDetail';
import Error404 from '../../../404';

export interface UserProps {
  userDataLists: dataType;
}

export default function Detail({ userDataLists }: UserProps) {
  const router = useRouter();
  // const { id } = router.query;
  // const userId = Number(router?.query?.id) - 1;
  // const [userDataLists, setUserDataLists] = useState<dataType[]>([]);
  console.log(userDataLists);

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
      {/* {userDataLists[userId] !== undefined ? (
        <ContactDetail userDataLists={userDataLists} id={userId} />
      ) : (
        <Error404 />
      )} */}
    </Box>
  );
}

// getServerSideProps가 반환하는 데이터를 사용하여 페이지를 사전 렌더링 하려면
export const getServerSideProps = async (context: any) => {
  const { userId } = context.query;
  try {
    const res = await axios.get('http://localhost:3000/api/detail');
    if (res.status === 200) {
      const userDataLists = res.data.lists;
      return {
        props: {
          userDataLists: {
            id: userId,
            name: userDataLists.name,
            group: userDataLists.group,
            number: userDataLists.number,
          },
        },
      };
    }
    return { props: {} };
  } catch (error) {
    console.log(error);
    return { props: {} };
  }
};

// export const useUserProps: GetServerSideProps<UserProps> = async (context) ={'>'} {
//   const { cookies } = context.req;
//   const { kilometer_session } = cookies;

//   const user: User = makeAnnonymousUser();

//   if (kilometer_session) {
//     try {
//       const axios = customAxios();
//       const { data } = (await axios({
//         url: '/api/user/me',
//         method: 'GET',
//         headers: {
//           Authorization: kilometer_session,
//         },
//       })) as AxiosResponse<TGetUserResponse>;

//       user.id = data.id;
//       user.name = data.name;
//       user.email = data.email;
//       user.imageUrl = data.imageUrl;
//       user.gender = data.gender;
//       user.birthdate = moment(data.birthdate).format('YYYY-MM-DD');
//       user.phoneNumber = data.phoneNumber;
//       user.isLogin = true;
//     } catch (err) {
//       console.log(err);
//     }
//   }

//   return { props: { user } };
// };
