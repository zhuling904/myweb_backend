import express from 'express';
import bodyParser from 'body-parser';
import {
  addRoleToWebInfo,
  addWebInfo,
  getWebInfo,
  insertRoleAtPosition,
} from './db';
const webInfoRouter = express.Router();

let jsonParser = bodyParser.json();
const id = '6546706d07504e27d0e297fb';
/** 获取网页信息 */
webInfoRouter.get('/webInfo', async (req, res) => {
  const webInfo = await getWebInfo();
  res.json(webInfo);
});

webInfoRouter.post('/webInfo', jsonParser, (req, res) => {});

export default webInfoRouter;
