export function dealTagsToAdd(req: any, res: any) {
  const { tagToAdd } = req.body;
  if (!tagToAdd) {
    return res
      .status(400)
      .json({ error: 'Missing required tagToAdd parameters' });
  }

  return tagToAdd;
}

export function dealTagsToRemove(req: any, res: any) {
  const { tagToRemoves } = req.body;
  if (!tagToRemoves) {
    return res
      .status(400)
      .json({ error: 'Missing required tagToRemoves parameters' });
  }

  return tagToRemoves;
}
