import { WORKS } from '../db';

export function dealAddOneWork(req: any, res: any) {
  const {
    type,
    tags,
    title,
    desc,
    coverImg = '',
    link = '',
    avatarImg = '',
    likes = 1,
    visitors = 1,
  } = req.body;
  const updateData: Partial<WORKS> = {};
  // 更新类型
  if (!type) {
    return res.status(400).json({ error: 'Invalid type format' });
  }

  // 更新标签
  if (!tags || !Array.isArray(tags)) {
    return res.status(400).json({ error: 'Invalid tags format' });
  }

  // 更新title
  if (!title) {
    return res.status(400).json({ error: 'Invalid title format' });
  }

  // 更新描述
  if (!desc) {
    return res.status(400).json({ error: 'Invalid desc format' });
  }

  // link链接
  if (!link) {
    return res.status(400).json({ error: 'Invalid link format' });
  }

  updateData.type = type;
  updateData.tags = tags;
  updateData.title = title;
  updateData.desc = desc;
  updateData.coverImg = coverImg
    ? coverImg
    : 'https://img2.baidu.com/it/u=3392960719,3424012588&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500';
  updateData.link = link;
  updateData.avatarImg = avatarImg
    ? avatarImg
    : 'https://img2.baidu.com/it/u=3392960719,3424012588&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500';
  updateData.likes = 0;
  updateData.visitors = 0;

  return updateData;
}
