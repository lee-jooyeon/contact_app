import { css } from '@emotion/react';
import { useRouter } from 'next/router';

import { Box, List, Span } from 'components/Atoms';
import { dataType } from 'components/Organisms/Contact/ContactList';
import theme from 'styles/theme';

export interface dataProps {
  data: dataType;
}

export default function ContactItem({ data }: dataProps) {
  const router = useRouter();
  const { id, name, group, number } = data;

  return (
    <List
      position="relative"
      display="flex"
      padding="15px 0px"
      margin="0px 15px"
      borderBottom="1px solid #fff"
      color={theme.colors.white}
      onClick={() => {
        sessionStorage.setItem('userKey', JSON.stringify(id)); // id 값을 -> JSON 형태로 object(객체)를 서버에 보내기 전에 JSON으로 변환
        sessionStorage.setItem('scrollKey', `${window.scrollY}`);
        router.push({
          pathname: `/contact/detail/${id}`,
        });
      }}
    >
      <Span
        color={theme.colors.black}
        background="#eeeeee"
        display="inline-block"
        width="50px"
        height="50px"
        borderRadius="50%"
        textAlign="center"
        lineHeight="50px"
        fontSize="13px"
      >
        {name}
      </Span>
      <Span
        paddingLeft="15px"
        alignSelf="center"
        color={theme.colors.white}
        fontSize="14px"
        flex={1}
        marginBottom="17px"
      >
        {number}
      </Span>
      <Box
        marginRight="10px"
        position="absolute"
        left="60px"
        top="45px"
        alignSelf="center"
        backgroundColor={
          group === 'family'
            ? '#59d58a'
            : group === 'friends'
            ? '#65a0d7'
            : '#d587dd'
        }
        fontSize="10px"
        width="52px"
        lineHeight="18px"
        borderRadius="15px"
        textAlign="center"
        color={theme.colors.white}
        css={css`
          text-transform: uppercase;
        `}
      >
        {group}
      </Box>
    </List>
  );
}
