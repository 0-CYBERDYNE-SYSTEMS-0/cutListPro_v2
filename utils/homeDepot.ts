import axios from 'axios';

interface Item {
  name: string;
  quantity: number;
}

interface Price {
  name: string;
  price: number;
  link: string;
}

export async function getPriceList(supplyList: Item[], zipCode: string): Promise<Price[]> {
  const priceList: Price[] = [];

  for (const item of supplyList) {
    const response = await axios.get(`https://api.homedepot.com/v1/location/${zipCode}/product/${item.name}`);
    const product = response.data.product;
    const price = product.price;
    const link = product.url;

    priceList.push({
      name: item.name,
      price,
      link,
    });
  }

  return priceList;
}