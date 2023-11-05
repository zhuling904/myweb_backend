export function dealAddExperience(req: any, res: any) {
  const { experienceToAdd } = req.body;
  if (
    !experienceToAdd ||
    !experienceToAdd.title ||
    !experienceToAdd.time ||
    !experienceToAdd.function
  ) {
    return res
      .status(400)
      .json({ error: 'Missing required experienceToAdd parameters' });
  }

  return experienceToAdd;
}

export function dealDelExperience(req: any, res: any) {
  const { experienceNameToRemove } = req.body;
  if (!experienceNameToRemove) {
    return res
      .status(400)
      .json({ error: 'Missing required experienceNameToRemove parameters' });
  }

  return experienceNameToRemove;
}
