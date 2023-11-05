import express from 'express';
import bodyParser from 'body-parser';
import {
  addRoleToWebInfo,
  addSocialToWebInfo,
  addWebInfo,
  getWebInfo,
  removeRoleFromWebInfo,
  removeSocialFromWebInfo,
  updateLikes,
  updateVisitors,
  updateWebInfoPartial,
} from './db';
import { dealWebInfoUpdateData } from './business/update';
import { dealLikeData } from './business/likes';
import { dealRoleToAdd, dealRoleToRemove } from './business/roles';
import { dealAddSocial, dealDelSocial } from './business/social';
import { logHelper } from '../../../utils';
const webInfoRouter = express.Router();

let jsonParser = bodyParser.json();
/** 获取网页信息 */
webInfoRouter.get('/webInfo', async (req, res) => {
  const webInfo = await getWebInfo();
  res.json(webInfo);
});

// 更新网站信息: 可更新任意字段信息
webInfoRouter.post('/webInfo/update', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const updateData = dealWebInfoUpdateData(req, res);
  const result = await updateWebInfoPartial(id, updateData);
  logHelper(result, res);
});

// 更新点赞
webInfoRouter.post('/webInfo/update/likes', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const updateData = dealLikeData(req, res);
  const result = await updateLikes(id, updateData);
  logHelper(result, res);
});

// 更新访问量
webInfoRouter.post('/webInfo/update/visitors', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const result = await updateVisitors(id);
  logHelper(result, res);
});

// 增加角色
webInfoRouter.post('/webInfo/roles/add', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const roleToAdd = dealRoleToAdd(req, res);
  const result = await addRoleToWebInfo(id, roleToAdd);
  logHelper(result, res);
});

// 删除角色列表
webInfoRouter.post('/webInfo/roles/del', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const roleToRemove = dealRoleToRemove(req, res);
  const result = await removeRoleFromWebInfo(id, roleToRemove);
  logHelper(result, res);
});

// 增加社交链接
webInfoRouter.post('/webInfo/social/add', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const socialToAdd = dealAddSocial(req, res);
  const result = await addSocialToWebInfo(id, socialToAdd);
  logHelper(result, res);
});

// 删除社交链接
webInfoRouter.post('/webInfo/social/del', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const socialNameToRemove = dealDelSocial(req, res);
  const result = await removeSocialFromWebInfo(id, socialNameToRemove);
  logHelper(result, res);
});

export default webInfoRouter;
