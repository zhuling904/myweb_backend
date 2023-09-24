import express from 'express';
import { dbConnect } from './db';
import { API } from './routes';

/** ==================路由模块======================= */ 

const app = express(); 

dbConnect().then(res => {
    console.log("✅ ~ 数据库连接成功:");
    app.use('/api', API.webInfo);
})
.catch(err => {
    throw new Error('发生错误');
})

app.listen(3001, function () { // 监听端口
    console.log("server listening on 3001");
})


