import express from 'express';
import bodyParser from 'body-parser';
import { findWebInfo, updateWebInfo } from './db';
const webInfoRouter = express.Router();

let jsonParser = bodyParser.json();
webInfoRouter.get('/webInfo', (req, res) => {
  findWebInfo()
    .then((data) => {
      console.log('✅ ~ res更新成功:', data);
      res.json(data);
    })
    .catch((err) => {
      console.log('✅ ~ err更新失败:', err);
    });
});

webInfoRouter.post('/webInfo', jsonParser, (req, res) => {
  //获取请求体数据
  console.log('✅ ~ req.body:', req.body);
  const { type, social, roles, motto } = req.body;
  updateWebInfo({
    type,
    roles,
    motto,
    social,
  })
    .then((res) => {
      console.log('✅ ~ res:', res);
    })
    .catch((err) => {
      console.log('✅ ~ err:', err);
    });
  res.json({ name: '获取请求体数据' });
});

export default webInfoRouter;
