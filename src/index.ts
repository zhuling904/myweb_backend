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
    console.log('✅ ~ err:', err);
    throw new Error('发生错误');
  });

// 本地开发使用，服务器用nginx设置允许跨域访问该服务
// app.all('*', function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'X-Requested-With');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.listen(3001, function () {
  // 监听端口
  console.log('server listening on 3001');
});
