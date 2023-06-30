import { NextApiRequest, NextApiResponse } from 'next';
import { ProjectBreakdown, PriceList } from '../../types';
import { generateFinalLayout } from '../../utils/gpt4';

export default async function finalLayout(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { originalBreakdown, priceList, projectSketch } = req.body;

    try {
      const finalLayout: string = await generateFinalLayout(originalBreakdown as ProjectBreakdown, priceList as PriceList, projectSketch as string);

      res.status(200).json({ finalLayout });
    } catch (error) {
      res.status(500).json({ error: 'Failed to generate final layout' });
    }
  } else {
    res.status(405).json({ error: 'We only support POST' });
  }
}