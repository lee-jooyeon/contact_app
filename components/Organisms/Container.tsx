import { ReactNode } from 'react';
import { Box } from '../Atoms';

export default function Container({ children }: { children: ReactNode }) {
  return <Box>{children}</Box>;
}
