export function dealRoleToAdd(req: any, res: any) {
  const { roleToAdd } = req.body;
  if (!roleToAdd) {
    return res
      .status(400)
      .json({ error: 'Missing required roleToAdd parameters' });
  }

  return roleToAdd;
}

export function dealRoleToRemove(req: any, res: any) {
  const { roleToRemove } = req.body;
  if (!roleToRemove) {
    return res
      .status(400)
      .json({ error: 'Missing required roleToRemove parameters' });
  }

  return roleToRemove;
}
