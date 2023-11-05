const subscriptionKey = process.env.REACT_APP_VISION_KEY;
const endpoint = process.env.REACT_APP_VISION_ENDPOINT; 

const analyzeImage = async (imageUrl) => {
  
  try {
    const response = await fetch(`${endpoint}`, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ url: imageUrl })
    });

    if (!response.ok) {
      throw new Error(`Azure AI API call failed with status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error calling Azure AI Vision service:', error);
    throw error;
  }
};

export default analyzeImage;
