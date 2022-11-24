import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '../../../styles/theme';
import { Box, ListWrap, List, Span } from '../../Atoms';

interface data {
  data: dataProps;
}

interface dataProps {
  id: number;
  name: string;
  group: string;
  number: string;
}

export default function ContactItem(props: data) {
  const contactLists = props.data;

  return (
    <ListWrap>
      <List
        position='relative'
        display='flex'
        padding='15px 0px'
        margin='0px 15px'
        borderBottom='1px solid #fff'
        color={theme.colors.white}
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
          {contactLists.name}
        </Span>
        <Span
          paddingLeft='15px'
          alignSelf='center'
          color={theme.colors.white}
          fontSize='14px'
          flex={1}
          marginBottom='17px'
        >
          {contactLists.number}
        </Span>
        <Box
          marginRight='10px'
          position='absolute'
          left='60px'
          top='45px'
          alignSelf='center'
          backgroundColor={
            contactLists.group === 'family'
              ? '#59d58a'
              : contactLists.group === 'friends'
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
          {contactLists.group}
        </Box>
        {/* <Span>{contactLists.id}</Span> */}
      </List>
    </ListWrap>
  );
}
