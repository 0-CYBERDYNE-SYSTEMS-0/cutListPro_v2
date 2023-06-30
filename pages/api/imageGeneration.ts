import { NextApiRequest, NextApiResponse } from 'next';
import { generateImage } from '../../utils/dalle2';

export default async function imageGeneration(req: NextApiRequest, res: NextApiResponse) {
  const { originalBreakdown } = req.body;

  try {
    const image = await generateImage(originalBreakdown);
    res.status(200).json({ image });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate image' });
  }
}