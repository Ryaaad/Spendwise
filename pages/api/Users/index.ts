import type { NextApiRequest, NextApiResponse } from 'next'
import {getAllHandler,postHandler} from '../../../conrollers/userControler'

// export default function handler(
 
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'GET') return getAllHandler(req, res);
    if(req.method === 'POST') return postHandler(req, res);
    res
      .status(400)
      .json({ status: 400, message: "we can't handle this request" });
  }