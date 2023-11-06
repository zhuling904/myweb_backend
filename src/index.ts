import express from 'express';
import { dbConnect } from './db';
import { API } from './routes';

/** ==================路由模块======================= */

const app = express();

dbConnect()
  .then((res) => {
    // 允许所有域的跨域请求
    app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
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
