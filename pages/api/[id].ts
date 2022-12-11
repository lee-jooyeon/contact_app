//  /api/detail
// GET /api/detail trigger

// import type { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method === 'GET') {
//     const data = res.status(201).json({
//       lists: [
//         {
//           id: 1,
//           name: 'Mom',
//           group: 'family',
//           number: '010-1234-5678',
//         },
//         {
//           id: 2,
//           name: 'Dad',
//           group: 'family',
//           number: '010-2314-6533',
//         },
//         {
//           id: 3,
//           name: 'Suzy',
//           group: 'friends',
//           number: '010-8789-3523',
//         },
//         {
//           id: 4,
//           name: 'Hani',
//           group: 'friends',
//           number: '010-1234-5678',
//         },
//         {
//           id: 5,
//           name: 'Aspyn',
//           group: 'work',
//           number: '010-5673-7777',
//         },
//         {
//           id: 6,
//           name: 'Minzy',
//           group: 'friends',
//           number: '010-3322-5566',
//         },
//         {
//           id: 7,
//           name: 'Joy',
//           group: 'friends',
//           number: '010-3365-8878',
//         },
//         {
//           id: 8,
//           name: 'Joy',
//           group: 'friends',
//           number: '010-3365-8878',
//         },
//         {
//           id: 9,
//           name: 'Jina',
//           group: 'friends',
//           number: '010-6678-9988',
//         },
//         {
//           id: 10,
//           name: 'Sol',
//           group: 'work',
//           number: '010-2356-6789',
//         },
//         {
//           id: 11,
//           name: 'Irene',
//           group: 'work',
//           number: '010-7897-6677',
//         },
//         {
//           id: 12,
//           name: 'Jenny',
//           group: 'friends',
//           number: '010-7767-1111',
//         },
//         {
//           id: 13,
//           name: 'Lisa',
//           group: 'friends',
//           number: '010-1245-8765',
//         },
//         {
//           id: 14,
//           name: 'Rosie',
//           group: 'friends',
//           number: '010-9089-1023',
//         },
//         {
//           id: 15,
//           name: 'Jisoo',
//           group: 'friends',
//           number: '010-1205-2389',
//         },
//       ],
//     });
//     const id = req.query;
//     const userId = Number(id) - 1;
//   } else {
//     res.status(500).json({ message: 'error' });
//   }
// }
