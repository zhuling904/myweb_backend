import express from 'express';
import bodyParser from 'body-parser';

import { logHelper } from '../../../utils';
import {
  addAbout,
  addExperienceToAbout,
  addLifeImgListToAbout,
  addSkillToAbout,
  getAbout,
  removeExperienceFromAbout,
  removeLifeImgListFromAbout,
  removeSkillFromAbout,
  updateAboutPartial,
} from './db';
import { dealAboutUpdateData } from './business/update';
import { dealSkillToAdd, dealSkillToRemove } from './business/skills';
import { dealAddExperience, dealDelExperience } from './business/experience';
import { dealAddLifeImgList, dealDelLifeImgList } from './business/lifeImgList';

const aboutRouter = express.Router();

let jsonParser = bodyParser.json();

/** 获取关于我信息 */
aboutRouter.get('/about', async (req, res) => {
  addAbout();
  const aboutInfo = await getAbout();
  res.json(aboutInfo);
});

// 更新网站信息: 可更新任意字段信息
aboutRouter.post('/about/update', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const updateData = dealAboutUpdateData(req, res);
  const result = await updateAboutPartial(id, updateData);
  logHelper(result, res);
});

// 增加技能
aboutRouter.post('/about/skills/add', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const skillToAdd = dealSkillToAdd(req, res);
  const result = await addSkillToAbout(id, skillToAdd);
  logHelper(result, res);
});

// 删除技能
aboutRouter.post('/about/skills/del', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const skillToRemove = dealSkillToRemove(req, res);
  const result = await removeSkillFromAbout(id, skillToRemove);
  logHelper(result, res);
});

// 增加经历
aboutRouter.post('/about/experience/add', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const experienceToAdd = dealAddExperience(req, res);
  const result = await addExperienceToAbout(id, experienceToAdd);
  logHelper(result, res);
});

// 删除经历
aboutRouter.post('/about/experience/del', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const experienceNameToRemove = dealDelExperience(req, res);
  const result = await removeExperienceFromAbout(id, experienceNameToRemove);
  logHelper(result, res);
});

// 增加日常生活
aboutRouter.post('/about/lifeImgList/add', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const lifeImgListToAdd = dealAddLifeImgList(req, res);
  const result = await addLifeImgListToAbout(id, lifeImgListToAdd);
  logHelper(result, res);
});

// 删除日常生活
aboutRouter.post('/about/lifeImgList/del', jsonParser, async (req, res) => {
  const { id } = req.body;
  if (!id) return res.status(400).json({ error: 'Invalid id parameter' });
  const lifeImgListNameToRemove = dealDelLifeImgList(req, res);
  const result = await removeLifeImgListFromAbout(id, lifeImgListNameToRemove);
  logHelper(result, res);
});

export default aboutRouter;
