import Image from 'next/image';
import { css } from '@emotion/react';
import { Box } from 'components/Atoms';

interface urlProps {
  url: string | null;
}

export default function ImageItem(props: urlProps) {
  const url = props.url;
  const prefix =
    process.env.NODE_ENV === 'production'
      ? 'https://github.com/lee-jooyeon/contact_app'
      : '';

  return (
    <Box marginBottom="10px">
      <Image
        src={`${prefix}/images/lists/${url}`}
        alt="image"
        width={100}
        height={100}
        layout="fixed"
        css={css`
          border-radius: 50%;
        `}
      />
    </Box>
  );
}
