import type { NextApiRequest, NextApiResponse } from 'next'
import {getHandler,patchHandler,deleteHandler} from '../../../../../conrollers/userControler'
import {getFromProductHandler} from '../../../../../conrollers/SpentController'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    if (req.method === 'GET') return getFromProductHandler(req, res);
    if(req.method === 'PUT') return patchHandler(req, res);
    if(req.method === 'DELETE') return deleteHandler(req, res);
    
    res
      .status(400)
      .json({ status: 400, message: "we can't handle this request" });
  }