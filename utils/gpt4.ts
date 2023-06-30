import axios from 'axios';

const GPT4_API_URL = process.env.GPT4_API_URL;
const GPT4_API_KEY = process.env.GPT4_API_KEY;

export const constructProjectBreakdown = async (projectRequest: string) => {
  const response = await axios.post(
    GPT4_API_URL,
    {
      prompt: projectRequest,
      max_tokens: 500,
    },
    {
      headers: {
        'Authorization': `Bearer ${GPT4_API_KEY}`,
      },
    }
  );

  return response.data.choices[0].text.trim();
};

export const generatePriceList = async (supplyList: string) => {
  const response = await axios.post(
    GPT4_API_URL,
    {
      prompt: supplyList,
      max_tokens: 500,
    },
    {
      headers: {
        'Authorization': `Bearer ${GPT4_API_KEY}`,
      },
    }
  );

  return response.data.choices[0].text.trim();
};

export const generateImagePrompt = async (projectBreakdown: string) => {
  const response = await axios.post(
    GPT4_API_URL,
    {
      prompt: projectBreakdown,
      max_tokens: 500,
    },
    {
      headers: {
        'Authorization': `Bearer ${GPT4_API_KEY}`,
      },
    }
  );

  return response.data.choices[0].text.trim();
};

export const generateFinalLayout = async (originalBreakdown: string, priceList: string, projectSketch: string) => {
  const response = await axios.post(
    GPT4_API_URL,
    {
      prompt: `${originalBreakdown}\n${priceList}\n${projectSketch}`,
      max_tokens: 1000,
    },
    {
      headers: {
        'Authorization': `Bearer ${GPT4_API_KEY}`,
      },
    }
  );

  return response.data.choices[0].text.trim();
};