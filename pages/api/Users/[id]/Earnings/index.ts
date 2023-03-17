import type { NextApiRequest, NextApiResponse } from 'next'
import {getFromUserHandler} from '../../../../../conrollers/EarnedController'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'GET') return getFromUserHandler(req, res);
    
    res
      .status(400)
      .json({ status: 400, message: "we can't handle this request" });
  }