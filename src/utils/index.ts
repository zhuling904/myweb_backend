export function logHelper(result: boolean, res: any) {
  if (result) {
    res.status(200).json({
      msg: '更新成功',
    });
  } else {
    res.status(400).json({
      msg: '更新失败',
    });
  }
}
