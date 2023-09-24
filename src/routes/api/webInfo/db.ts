import { MODLES } from '../../../models';

export interface SOCIAL {
  name: string;
  link: string;
}

export interface WEBINFO {
  author?: string;
  roles?: string[];
  motto?: string;
  social?: SOCIAL[];
}

/** 增加 */
export async function addWebInfo(options: WEBINFO) {
  const { author, roles, motto, social } = options;
  const webInfo = await findWebInfo();
  /** 已经添加过了，直接返回 */
  if (webInfo.length != 0) console.log('✅ ~ 已经添加过了，直接返回:');
  await MODLES.webInfo.create({
    author,
    roles,
    motto,
    social,
  });
}

/** 删除 */
export async function delWebInfo() {
  await MODLES.webInfo.deleteOne();
}

/** 查找 */
export async function findWebInfo() {
  return (await MODLES.webInfo.find()) as Array<WEBINFO>;
}

/** 更新 */
export async function updateWebInfo(options: WEBINFO & { type: string }) {
  const { author, roles, motto, social } = options;
  return await MODLES.webInfo.updateOne({
    author,
    roles,
    motto,
    social,
  });
}
