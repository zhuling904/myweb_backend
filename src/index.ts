import express from 'express';
import { dbConnect } from './db';
import { API } from './routes';

/** ==================路由模块======================= */

const app = express();

dbConnect()
  .then((res) => {
    // 使用首页路由模块
    app.use('/api', API.webInfo);
    // 作品页面路由模块
    app.use('/api', API.works);
    // 关于我页面路由模块
    app.use('/api', API.about);
  })
  .catch((err) => {
    throw new Error('发生错误');
  });

app.listen(3001, function () {
  // 监听端口
  console.log('server listening on 3001');
});
