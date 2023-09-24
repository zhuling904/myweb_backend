//2. 导入 mongoose
import mongoose from 'mongoose';
import { DB_CONFIG } from './config';
const dbUrl = `mongodb://${DB_CONFIG.DB_HOST}:${DB_CONFIG.DB_PORT}/${DB_CONFIG.DB_NAME}`
export async function dbConnect() {
    //3. 连接数据库 
    mongoose.set('strictQuery', true);
    const db = await mongoose.connect(dbUrl);
    return db
}