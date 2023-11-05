import { MODLES } from '../../../models';

export interface SOCIAL {
  name: string;
  link: string;
  info?: string;
}

export interface WEBINFO {
  author?: string;
  roles?: string[];
  motto?: string;
  avatarImg?: string;
  social?: SOCIAL[];
  likes?: number;
  visitors: number;
}

const authorDataToAdd = {
  author: '朱领',
  roles: ['前端工程师', '篮球爱好者'],
  motto: '或许你不相信现在的我，但你可以期待未来的我。',
  social: [
    {
      title: 'Juejin',
      link: 'https://juejin.cn/user/3109845573069422',
    },
    {
      title: 'Github',
      link: 'https://github.com/HushanCode',
    },
    {
      title: 'CodeSandbox',
      link: 'https://codesandbox.io/u/hushancode',
    },
    {
      title: 'KnowledgeBase',
      link: 'https://nextjs-notion-starter-kit-phi-gray.vercel.app/?vercelToolbarCode=q7e6XSyBgBIeMSk',
      info: '知识库',
    },
    {
      title: 'Email',
      link: '',
      info: '514034541@qq.com',
    },
    {
      title: 'WeChat',
      link: '',
      info: 'Doerr_33',
    },
  ],
  avatarImg:
    'https://img2.baidu.com/it/u=3392960719,3424012588&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
  likes: 1,
  visitors: 1,
};

/** 新增一条数据 */
export async function addWebInfo() {
  const isExist = await checkWebInfoExist();
  if (isExist) {
    console.log('数据已经存在');
    return;
  }
  return await MODLES.webInfo.create(authorDataToAdd);
}

/** 查询是否存在数据 */
export async function checkWebInfoExist() {
  try {
    const document = await MODLES.webInfo.findOne({ author: '朱领' }).exec();
    if (document) {
      console.log('文档存在:', document);
      return true;
    } else {
      console.log('文档不存在');
      return false;
    }
  } catch (err) {
    console.error('查询文档失败:', err);
    return false;
  }
}

/** 获取webInfo数据 */
export async function getWebInfo() {
  try {
    const document = await MODLES.webInfo.findOne({ author: '朱领' }).exec();
    if (document) {
      console.log('文档存在:', document);
      return document;
    } else {
      console.log('文档不存在');
      return null;
    }
  } catch (err) {
    console.error('查询文档失败:', err);
    return null;
  }
}

/** 更新webInfo的数据： 任意字段 */
export async function updateWebInfoPartial(
  id: string,
  updateData: Partial<WEBINFO>,
) {
  try {
    const updatedWebInfo = await MODLES.webInfo
      .findOneAndUpdate({ _id: id }, { $set: updateData }, { new: true })
      .exec();
    if (updatedWebInfo) {
      console.log('网站信息部分更新成功:', updatedWebInfo);
      return true;
    } else {
      console.log('网站信息不存在，无法部分更新');
      return false;
    }
  } catch (err) {
    console.error('网站信息更新失败:', err);
    return false;
  }
}

/** 删除roles中的指定内容 */
export async function removeRoleFromWebInfo(id: string, roleToRemove: string) {
  try {
    const updatedRoles = await MODLES.webInfo
      .findByIdAndUpdate(
        { _id: id },
        { $pull: { roles: roleToRemove } },
        { new: true },
      )
      .exec();

    if (updatedRoles) {
      console.log(`角色 "${roleToRemove}" 已从roles中移除:`, updatedRoles);
      return true;
    } else {
      console.log('角色信息不存在，无法执行删除操作');
      return false;
    }
  } catch (err) {
    console.error('从角色信息中删除角色失败:', err);
    return false;
  }
}

/** 创建一个函数来向 roles 数组中添加指定内容 */
export async function addRoleToWebInfo(id: string, roleToAdd: string) {
  try {
    const updatedRoles = await MODLES.webInfo
      .findByIdAndUpdate(
        { _id: id },
        { $push: { roles: roleToAdd } },
        { new: true },
      )
      .exec();

    if (updatedRoles) {
      console.log(`角色 "${roleToAdd}" 已添加到信息中:`, updatedRoles);
      return true;
    } else {
      console.log('信息不存在，无法执行添加操作');
      return false;
    }
  } catch (err) {
    console.error('向信息中添加角色失败:', err);
    return false;
  }
}

/** 创建一个函数来在 roles 数组的指定位置插入内容 */
export async function insertRoleAtPosition(
  id: string,
  roleToInsert: string,
  position: number,
) {
  try {
    const updatedRoles = await MODLES.webInfo
      .findByIdAndUpdate(
        { _id: id },
        { $push: { roles: { $each: [roleToInsert], $position: position } } },
        { new: true },
      )
      .exec();

    if (updatedRoles) {
      console.log(
        `角色 "${roleToInsert}" 已插入到作者信息中的位置 ${position}:`,
        updatedRoles,
      );
      return updatedRoles;
    } else {
      console.log('作者信息不存在，无法执行插入操作');
      return null;
    }
  } catch (err) {
    console.error('在作者信息中插入角色失败:', err);
    return null;
  }
}

/** 创建一个函数来向 social 数组中添加指定内容 */
export async function addSocialToWebInfo(id: string, socialToAdd: SOCIAL) {
  try {
    const updatedSocial = await MODLES.webInfo
      .findByIdAndUpdate(
        { _id: id },
        { $push: { social: socialToAdd } },
        { new: true },
      )
      .exec();

    if (updatedSocial) {
      console.log(
        `社交链接 "${socialToAdd.name}" 已添加到作者信息中:`,
        updatedSocial,
      );
      return true;
    } else {
      console.log('作者信息不存在，无法执行添加操作');
      return false;
    }
  } catch (err) {
    console.error('向作者信息中添加社交链接失败:', err);
    return false;
  }
}

/** 创建一个函数来从 social 数组中删除指定内容 */
export async function removeSocialFromWebInfo(
  id: string,
  socialNameToRemove: string,
) {
  try {
    const updatedSocial = await MODLES.webInfo
      .findByIdAndUpdate(
        { _id: id },
        { $pull: { social: { name: socialNameToRemove } } },
        { new: true },
      )
      .exec();

    if (updatedSocial) {
      console.log(
        `社交链接 "${socialNameToRemove}" 已从信息中移除:`,
        updatedSocial,
      );
      return true;
    } else {
      console.log('作者信息不存在，无法执行删除操作');
      return false;
    }
  } catch (err) {
    console.error('从作者信息中删除社交链接失败:', err);
    return false;
  }
}

/** 创建一个函数来在 social 数组的指定位置插入内容 */
export async function insertSocialAtPosition(
  id: string,
  socialToInsert: SOCIAL,
  position: number,
) {
  try {
    const updatedSocial = await MODLES.webInfo
      .findByIdAndUpdate(
        { _id: id },
        { $push: { social: { $each: [socialToInsert], $position: position } } },
        { new: true },
      )
      .exec();

    if (updatedSocial) {
      console.log(
        `社交链接 "${socialToInsert.name}" 已插入到信息中的位置 ${position}:`,
        updatedSocial,
      );
      return updatedSocial;
    } else {
      console.log('信息不存在，无法执行插入操作');
      return null;
    }
  } catch (err) {
    console.error('在信息中插入社交链接失败:', err);
    return null;
  }
}

/** 更新点赞likes数量 */
export async function updateLikes(
  id: string,
  action: 'increment' | 'decrement',
) {
  console.log('✅ ~ action:', action);
  try {
    const updatedLike = await MODLES.webInfo
      .findByIdAndUpdate(
        { _id: id },
        {
          $inc: {
            likes: action === 'increment' ? 1 : -1,
          },
        },
        { new: true },
      )
      .exec();
    if (updatedLike) {
      console.log(`点赞成功`, updatedLike);
      return true;
    } else {
      console.log('点赞失败');
      return false;
    }
  } catch (err) {
    console.error('点赞失败:', err);
    return false;
  }
}

/** 更新访问量数量 */
export async function updateVisitors(id: string) {
  try {
    const updateVisitors = await MODLES.webInfo
      .findByIdAndUpdate(
        { _id: id },
        {
          $inc: {
            visitors: 1,
          },
        },
        { new: true },
      )
      .exec();
    if (updateVisitors) {
      console.log(`新增访问量成功`, updateVisitors);
      return true;
    } else {
      console.log('新增访问量失败');
      return false;
    }
  } catch (err) {
    console.error('新增访问量失败:', err);
    return false;
  }
}
