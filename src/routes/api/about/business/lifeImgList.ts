export function dealAddLifeImgList(req: any, res: any) {
  const { lifeImgListToAdd } = req.body;
  if (
    !lifeImgListToAdd.title ||
    !lifeImgListToAdd.desc ||
    !lifeImgListToAdd.time ||
    !lifeImgListToAdd.url
  ) {
    return res
      .status(400)
      .json({ error: 'Missing required lifeImgListToAdd parameters' });
  }

  return lifeImgListToAdd;
}

export function dealDelLifeImgList(req: any, res: any) {
  const { lifeImgListNameToRemove } = req.body;
  if (!lifeImgListNameToRemove) {
    return res
      .status(400)
      .json({ error: 'Missing required lifeImgListNameToRemove parameters' });
  }

  return lifeImgListNameToRemove;
}
