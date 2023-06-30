import axios from 'axios';

export async function generateImage(prompt: string) {
  const response = await axios.post('https://api.dalle.ai/generate', {
    prompt,
    max_tokens: 512,
  });

  if (response.status !== 200) {
    throw new Error('Failed to generate image');
  }

  return response.data.image;
}