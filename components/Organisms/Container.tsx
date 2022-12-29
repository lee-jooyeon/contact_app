import { ReactNode } from 'react';

import { Box } from 'components/Atoms';

export default function Container({ children }: { children: ReactNode }) {
  return (
    <Box background="#22223a" position="relative" minHeight="100vh">
      {children}
    </Box>
  );
}
