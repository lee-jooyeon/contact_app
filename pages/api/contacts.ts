//  /api/detail
// GET, POST /api/detail trigger
import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(
      'mongodb+srv://jooyeon:infinite1986@cluster0.awatltw.mongodb.net/contacts?retryWrites=true&w=majority',
    );
    const db = client.db();

    const contactsCollection = db.collection('contacts');
    const result = await contactsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: 'contacts insterted!' });
  } else {
    res.status(500).json({ message: 'error' });
  }
}
