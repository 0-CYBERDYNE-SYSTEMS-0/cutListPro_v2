import { NextApiRequest, NextApiResponse } from 'next';
import { ProjectBreakdown } from '../../components/ProjectBreakdown';
import { PriceList } from '../../components/PriceList';
import { homeDepotPriceCheck } from '../../utils/homeDepot';

export default async function priceCheck(req: NextApiRequest, res: NextApiResponse) {
  const { originalBreakdown }: { originalBreakdown: ProjectBreakdown } = req.body;

  try {
    const supplyList = originalBreakdown.supplyList;
    const priceList: PriceList = await homeDepotPriceCheck(supplyList);

    res.status(200).json({ priceList });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate price list' });
  }
}