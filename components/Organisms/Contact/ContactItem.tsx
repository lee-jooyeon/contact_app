import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import theme from '../../../styles/theme';
import { Box, ListWrap, List, Span } from '../../Atoms';
import { dataType } from './ContactList';

export interface dataProps {
  data: dataType;
}

export default function ContactItem({ data }: dataProps) {
  const router = useRouter();
  const { id, name, number, group } = data;

  return (
    <ListWrap>
      <List
        position='relative'
        display='flex'
        padding='15px 0px'
        margin='0px 15px'
        borderBottom='1px solid #fff'
        color={theme.colors.white}
        onClick={() =>
          router.push(
            {
              pathname: `/contact/detail/${id}`,
              query: { id: id, name: name, number: number, group: group },
            },
            `/contact/detail/${id}`
          )
        }
      >
        <Span
          color={theme.colors.black}
          background='#eeeeee'
          display='inline-block'
          width='50px'
          height='50px'
          borderRadius='50%'
          textAlign='center'
          lineHeight='50px'
          fontSize='13px'
        >
          {name}
        </Span>
        <Span
          paddingLeft='15px'
          alignSelf='center'
          color={theme.colors.white}
          fontSize='14px'
          flex={1}
          marginBottom='17px'
        >
          {number}
        </Span>
        <Box
          marginRight='10px'
          position='absolute'
          left='60px'
          top='45px'
          alignSelf='center'
          backgroundColor={
            group === 'family'
              ? '#59d58a'
              : group === 'friends'
              ? '#65a0d7'
              : '#d587dd'
          }
          fontSize='10px'
          width='52px'
          lineHeight='18px'
          borderRadius='15px'
          textAlign='center'
          color={theme.colors.white}
          css={css`
            text-transform: uppercase;
          `}
        >
          {group}
        </Box>
        {/* <Span>{id}</Span> */}
      </List>
    </ListWrap>
  );
}
