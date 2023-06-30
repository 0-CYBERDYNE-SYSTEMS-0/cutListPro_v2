import { NextApiRequest, NextApiResponse } from 'next';
import { gpt4 } from '../../utils/gpt4';

export default async function constructProject(req: NextApiRequest, res: NextApiResponse) {
  const { projectRequest } = req.body;

  try {
    const originalBreakdown = await gpt4(projectRequest);

    res.status(200).json({ originalBreakdown });
  } catch (error) {
    res.status(500).json({ error: 'Failed to construct project' });
  }
}