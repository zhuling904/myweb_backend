import { MODLES } from '../../../models';

export interface WORKS {
  type: string;
  subType: string;
  tags: string[];
  title: string;
  desc: string;
  coverImg?: string;
  link: string;
  avatarImg?: string;
  likes?: number;
  visitors?: number;
}

const worksDataToAdd = {
  type: 'animation',
  subType: '推荐',
  tags: ['动画', 'CSS'],
  title: '拖拽排序',
  desc: '一个拖拽排序列表',
  coverImg:
    'https://img2.baidu.com/it/u=3392960719,3424012588&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
  link: 'https://img2.baidu.com/it/u=3392960719,3424012588&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
  avatarImg:
    'https://img2.baidu.com/it/u=3392960719,3424012588&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500',
  likes: 1,
  visitors: 1,
};

/** 新增一条数据 */
export async function addWorks() {
  return await MODLES.works.create(worksDataToAdd);
}

/** 新增作品 */
export async function addOneWorks(updateData: WORKS) {
  try {
    const document = await MODLES.works.create(updateData);
    if (document) {
      console.log('添加作品成功');
      return true;
    } else {
      console.log('添加作品失败');
      return false;
    }
  } catch (err) {
    console.error('添加作品失败:', err);
    return false;
  }
}

/** 获取works数据 */
export async function getAllWorks() {
  try {
    const document = await MODLES.works.find().exec();
    if (document) {
      console.log('作品列表存在:', document);
      return document;
    } else {
      console.log('作品列表不存在');
      return false;
    }
  } catch (err) {
    console.error('查询作品列表失败:', err);
    return false;
  }
}

/** 获取一个work的数据 */
export async function getOneWorks(id: string) {
  try {
    const document = await MODLES.works
      .findOne({
        _id: id,
      })
      .exec();
    if (document) {
      console.log('作品存在:', document);
      return true;
    } else {
      console.log('作品不存在');
      return false;
    }
  } catch (err) {
    console.error('查询作品失败:', err);
    return false;
  }
}

/** 删除指定work */
export async function delOneWork(id: string) {
  try {
    const document = await MODLES.works
      .findOneAndRemove({
        _id: id,
      })
      .exec();
    if (document) {
      console.log('作品已删除:', document);
      return true;
    } else {
      console.log('作品不存在');
      return false;
    }
  } catch (err) {
    console.error('删除作品失败:', err);
    return false;
  }
}

/** 更新works的数据： 任意字段 */
export async function updateWorksPartial(
  id: string,
  updateData: Partial<WORKS>,
) {
  try {
    const updatedWorks = await MODLES.works
      .findOneAndUpdate({ _id: id }, { $set: updateData }, { new: true })
      .exec();
    if (updatedWorks) {
      console.log('作品信息部分更新成功:', updatedWorks);
      return true;
    } else {
      console.log('作品信息不存在，无法部分更新');
      return false;
    }
  } catch (err) {
    console.error('作品信息更新失败:', err);
    return false;
  }
}

/** 删除tags中的指定内容 */
export async function removeTagFromWorks(id: string, tagToRemoves: string) {
  try {
    const updatedTags = await MODLES.works
      .findByIdAndUpdate(
        { _id: id },
        { $pull: { tags: tagToRemoves } },
        { new: true },
      )
      .exec();

    if (updatedTags) {
      console.log(`标签 "${tagToRemoves}" 已从tags中移除:`, updatedTags);
      return true;
    } else {
      console.log('标签信息不存在，无法执行删除操作');
      return true;
    }
  } catch (err) {
    console.error('从标签信息中删除角色失败:', err);
    return true;
  }
}

/** 创建一个函数来向 tags 数组中添加指定内容 */
export async function addTagsToWorks(id: string, tagToAdd: string) {
  try {
    const updatedTags = await MODLES.works
      .findByIdAndUpdate(
        { _id: id },
        { $push: { tags: tagToAdd } },
        { new: true },
      )
      .exec();

    if (updatedTags) {
      console.log(`标签 "${tagToAdd}" 已添加到信息中:`, updatedTags);
      return true;
    } else {
      console.log('标签列表不存在，无法执行添加操作');
      return false;
    }
  } catch (err) {
    console.error('向标签列表中添加标签失败:', err);
    return false;
  }
}

/** 创建一个函数来在 tags 数组的指定位置插入内容 */
export async function insertTagsAtPosition(
  id: string,
  tagToInsert: string,
  position: number,
) {
  try {
    const updatedTags = await MODLES.works
      .findByIdAndUpdate(
        { _id: id },
        { $push: { tags: { $each: [tagToInsert], $position: position } } },
        { new: true },
      )
      .exec();

    if (updatedTags) {
      console.log(
        `标签 "${updatedTags}" 已插入到标签列表中的位置 ${position}:`,
        updatedTags,
      );
      return true;
    } else {
      console.log('标签信息不存在，无法执行插入操作');
      return false;
    }
  } catch (err) {
    console.error('在标签列表中插入标签失败:', err);
    return false;
  }
}
