export function dealSkillToAdd(req: any, res: any) {
  const { skillToAdd } = req.body;
  if (!skillToAdd) {
    return res
      .status(400)
      .json({ error: 'Missing required skillToAdd parameters' });
  }

  return skillToAdd;
}

export function dealSkillToRemove(req: any, res: any) {
  const { skillToRemove } = req.body;
  if (!skillToRemove) {
    return res
      .status(400)
      .json({ error: 'Missing required skillToRemove parameters' });
  }

  return skillToRemove;
}
