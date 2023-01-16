//  /api/detail
// GET /api/detail trigger

import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'GET') {
    const data = res.status(201).json({
      lists: [
        {
          id: 1,
          name: 'Mom',
          group: 'family',
          number: '010-1234-5678',
          url: 'user.png',
        },
        {
          id: 2,
          name: 'Dad',
          group: 'family',
          number: '010-2314-6533',
          url: 'user.png',
        },
        {
          id: 3,
          name: 'Suzy',
          group: 'friends',
          number: '010-8789-3523',
          url: 'memoji01.png',
        },
        {
          id: 4,
          name: 'Hani',
          group: 'friends',
          number: '010-1234-5678',
          url: 'memoji05.png',
        },
        {
          id: 5,
          name: 'Aspyn',
          group: 'work',
          number: '010-5673-7777',
          url: 'memoji03.png',
        },
        {
          id: 6,
          name: 'Minzy',
          group: 'friends',
          number: '010-3322-5566',
          url: 'user.png',
        },
        {
          id: 7,
          name: 'Joy',
          group: 'friends',
          number: '010-3365-8878',
          url: 'memoji04.png',
        },
        {
          id: 8,
          name: 'Jina',
          group: 'friends',
          number: '010-6678-9988',
          url: 'memoji06.png',
        },
        {
          id: 9,
          name: 'Sol',
          group: 'work',
          number: '010-2356-6789',
          url: 'user.png',
        },
        {
          id: 10,
          name: 'Irene',
          group: 'work',
          number: '010-7897-6677',
          url: 'memoji07.png',
        },
        {
          id: 11,
          name: 'Jenny',
          group: 'friends',
          number: '010-7767-1111',
          url: 'user.png',
        },
        {
          id: 12,
          name: 'Lisa',
          group: 'friends',
          number: '010-1245-8765',
          url: 'memoji08.png',
        },
        {
          id: 13,
          name: 'Rosie',
          group: 'friends',
          number: '010-9089-1023',
          url: 'memoji09.png',
        },
        {
          id: 14,
          name: 'Jisoo',
          group: 'friends',
          number: '010-1205-2389',
          url: 'memoji10.png',
        },
      ],
    });
  } else {
    res.status(500).json({ message: 'error' });
  }
}
