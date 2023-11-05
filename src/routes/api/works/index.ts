import express from 'express';
import bodyParser from 'body-parser';

import { logHelper } from '../../../utils';
import {
  addOneWorks,
  addTagsToWorks,
  delOneWork,
  getAllWorks,
  removeTagFromWorks,
  updateWorksPartial,
} from './db';
import { dealWorksUpdateData } from './business/update';
import { dealAddOneWork } from './business/add';
import { dealTagsToAdd, dealTagsToRemove } from './business/tags';
const worksRouter = express.Router();

let jsonParser = bodyParser.json();

/** 获取作品信息信息 */
worksRouter.get('/works', async (req, res) => {
  const worksList = await getAllWorks();
  res.json(worksList);
});

/** 更新作品信息: 可更新任意字段信息 */
worksRouter.post('/works/update', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const updateData = dealWorksUpdateData(req, res);
  const result = await updateWorksPartial(id, updateData);
  logHelper(result, res);
});

/** 删除作品信息: 删除指定作品 */
worksRouter.post('/works/del', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const result = await delOneWork(id);
  logHelper(result, res);
});

/** 添加作品*/
worksRouter.post('/works/add', jsonParser, async (req, res) => {
  const updateData = dealAddOneWork(req, res);
  const result = await addOneWorks(updateData);
  logHelper(result, res);
});

// 增加角色
worksRouter.post('/works/tags/add', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const tagToAdd = dealTagsToAdd(req, res);
  const result = await addTagsToWorks(id, tagToAdd);
  logHelper(result, res);
});

// 删除角色列表
worksRouter.post('/works/tags/del', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const tagToRemoves = dealTagsToRemove(req, res);
  const result = await removeTagFromWorks(id, tagToRemoves);
  logHelper(result, res);
});

export default worksRouter;
