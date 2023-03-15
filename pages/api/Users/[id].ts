import type { NextApiRequest, NextApiResponse } from 'next'
import {getHandler,patchHandler} from '../../../conrollers/userControler'

// export default function handler(
 
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'GET') return getHandler(req, res);
    if(req.method === 'PUT') return patchHandler(req, res);
    res
      .status(400)
      .json({ status: 400, message: "we can't handle this request" });
  }