import { MODLES } from '../../../models';
interface experience {
  title: string;
  time: string;
  function: string;
}

interface lifeImgList {
  title: string;
  desc: string;
  time: string;
  url: string;
}
export interface ABOUT {
  author: string;
  introduce: string;
  skills: string[];
  experience: experience[];
  future: string;
  lifeImgList: lifeImgList[];
}

const aboutDataToAdd = {
  author: '朱领',
  introduce:
    '一个热爱生活和分享技术的前端工程师。我希望能够通过我的博客，与大家分享我的生活态度、经历和技术的学习，希望带给大家一些启发和帮助！',
  skills: ['HTML', 'CSS', 'JS', 'TS', 'React', 'Webpack'],
  experience: {
    title: '即时设计',
    time: '2022年7月1日-至今',
    function: '前端工程师，图形学方向，编辑器开发，主要成果-即时白板',
  },
  future: '图形学方向，资深前端工程师',
  lifeImgList: [
    {
      title: '一张图片',
      desc: '描述',
      time: '2022年7月1日',
      url: 'https://img2.baidu.com/it/u=3392960719,3424012588&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
    },
  ],
};

/** 查询是否存在数据 */
export async function checkAboutExist() {
  try {
    const document = await MODLES.about.findOne({ author: '朱领' }).exec();
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

/** 新增一条数据 */
export async function addAbout() {
  const isExist = await checkAboutExist();
  if (isExist) {
    console.log('数据已经存在');
    return;
  }
  return await MODLES.about.create(aboutDataToAdd);
}

/** 获取about数据 */
export async function getAbout() {
  try {
    const document = await MODLES.about.findOne({ author: '朱领' }).exec();
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

/** 更新about的数据： 任意字段 */
export async function updateAboutPartial(
  id: string,
  updateData: Partial<ABOUT>,
) {
  try {
    const updatedAbout = await MODLES.about
      .findOneAndUpdate({ _id: id }, { $set: updateData }, { new: true })
      .exec();
    if (updatedAbout) {
      console.log('about信息部分更新成功:', updatedAbout);
      return true;
    } else {
      console.log('about信息不存在，无法部分更新');
      return false;
    }
  } catch (err) {
    console.error('about信息更新失败:', err);
    return false;
  }
}

/** 删除skills中的指定内容 */
export async function removeSkillFromAbout(id: string, skillToRemove: string) {
  try {
    const updatedSkills = await MODLES.about
      .findByIdAndUpdate(
        { _id: id },
        { $pull: { skills: skillToRemove } },
        { new: true },
      )
      .exec();

    if (updatedSkills) {
      console.log(`技能 "${skillToRemove}" 已从skills中移除:`, updatedSkills);
      return true;
    } else {
      console.log('技能信息不存在，无法执行删除操作');
      return false;
    }
  } catch (err) {
    console.error('从技能信息中删除技能失败:', err);
    return false;
  }
}

/** 创建一个函数来向 skills 数组中添加指定内容 */
export async function addSkillToAbout(id: string, skillToAdd: string) {
  try {
    const updatedSkills = await MODLES.about
      .findByIdAndUpdate(
        { _id: id },
        { $push: { skills: skillToAdd } },
        { new: true },
      )
      .exec();

    if (updatedSkills) {
      console.log(
        `技能 "${skillToAdd}" 已添加到技能列表信息中:`,
        updatedSkills,
      );
      return true;
    } else {
      console.log('信息不存在，无法执行添加操作');
      return false;
    }
  } catch (err) {
    console.error('向技能信息中添加角色失败:', err);
    return false;
  }
}

/** 删除experience中的指定内容 */
export async function removeExperienceFromAbout(
  id: string,
  experienceToRemove: string,
) {
  try {
    const updatedExperiences = await MODLES.about
      .findByIdAndUpdate(
        { _id: id },
        { $pull: { experience: { title: experienceToRemove } } },
        { new: true },
      )
      .exec();

    if (updatedExperiences) {
      console.log(
        `职业经历 "${experienceToRemove}" 已从experiences中移除:`,
        updatedExperiences,
      );
      return true;
    } else {
      console.log('职业经历信息不存在，无法执行删除操作');
      return false;
    }
  } catch (err) {
    console.error('从职业经历信息中删除技能失败:', err);
    return false;
  }
}

/** 创建一个函数来向 experience 数组中添加指定内容 */
export async function addExperienceToAbout(
  id: string,
  experienceToAdd: experience,
) {
  try {
    const updatedExperience = await MODLES.about
      .findByIdAndUpdate(
        { _id: id },
        { $push: { experience: experienceToAdd } },
        { new: true },
      )
      .exec();

    if (updatedExperience) {
      console.log(
        `职业经历 "${experienceToAdd}" 已添加到职业经历列表信息中:`,
        updatedExperience,
      );
      return true;
    } else {
      console.log('职业经历信息不存在，无法执行添加操作');
      return false;
    }
  } catch (err) {
    console.error('向职业经历信息中添加经历失败:', err);
    return false;
  }
}

/** 删除lifeImgList中的指定内容 */
export async function removeLifeImgListFromAbout(
  id: string,
  lifeImgListNameToRemove: string,
) {
  try {
    const updatedLifeImgList = await MODLES.about
      .findByIdAndUpdate(
        { _id: id },
        { $pull: { lifeImgList: { title: lifeImgListNameToRemove } } },
        { new: true },
      )
      .exec();

    if (updatedLifeImgList) {
      console.log(
        `日常生活 "${lifeImgListNameToRemove}" 已从lifeImgList中移除:`,
        updatedLifeImgList,
      );
      return true;
    } else {
      console.log('日常生活信息不存在，无法执行删除操作');
      return false;
    }
  } catch (err) {
    console.error('从日常生活信息中删除技能失败:', err);
    return false;
  }
}

/** 创建一个函数来向 lifeImgList 数组中添加指定内容 */
export async function addLifeImgListToAbout(
  id: string,
  lifeImgListToAdd: experience,
) {
  try {
    const updatedLifeImgList = await MODLES.about
      .findByIdAndUpdate(
        { _id: id },
        { $push: { lifeImgList: lifeImgListToAdd } },
        { new: true },
      )
      .exec();

    if (updatedLifeImgList) {
      console.log(
        ` "${lifeImgListToAdd}" 已添加到日常生活列表信息中:`,
        updatedLifeImgList,
      );
      return true;
    } else {
      console.log('日常生活信息不存在，无法执行添加操作');
      return false;
    }
  } catch (err) {
    console.error('向日常生活信息中添加经历失败:', err);
    return false;
  }
}
