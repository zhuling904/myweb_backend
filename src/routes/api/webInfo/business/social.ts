export function dealAddSocial(req: any, res: any) {
  const { socialToAdd } = req.body;
  if (!socialToAdd || !socialToAdd.title || !socialToAdd.link) {
    return res
      .status(400)
      .json({ error: 'Missing required socialToAdd parameters' });
  }

  return socialToAdd;
}

export function dealDelSocial(req: any, res: any) {
  const { socialNameToRemove } = req.body;
  if (!socialNameToRemove) {
    return res
      .status(400)
      .json({ error: 'Missing required socialNameToRemove parameters' });
  }

  return socialNameToRemove;
}
