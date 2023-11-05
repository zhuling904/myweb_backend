type ACTION = 'increment' | 'decrement';

interface updateLike {
  action: ACTION;
}
export function dealLikeData(req: any, res: any) {
  const { action } = req.body;

  // 验证action参数，必须是'increment'或'decrement'
  if (action !== 'increment' && action !== 'decrement') {
    return res.status(400).json({ error: 'Invalid action parameter' });
  }

  // 构建更新字段
  const updateFields: updateLike = { action: 'increment' };

  if (action) {
    updateFields.action = action;
  }

  return updateFields.action;
}
