const URL = `https://aihorde.net/api/v2`;

async function GenerateImage(prompt) {
  try {
    const response = await fetch(`${URL}/generate/async`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: import.meta.env.VITE_HORDE_API_KEY,
      },
      body: JSON.stringify({
        prompt: prompt,
        params: {
          cfg_scale: 7.5,
          height: 512,
          width: 512,
          steps: 20
        }
      }),
    });

    if (!response.ok) throw new Error("Initial request failed");

    const data = await response.json();
    const imageUrl = await checkStatus(data.id);
    
    return imageUrl;
  } catch (error) {
    console.error("Generation Error:", error);
    return null;
  }
}

async function checkStatus(id) {
  let attempts = 0;
  let waitTime = 15000;

  while (attempts < 50) {
    try {
      const response = await fetch(`${URL}/generate/status/${id}`);
      
      if (response.status === 429) {
        console.warn("Rate limited! Waiting longer...");
        await new Promise((r) => setTimeout(r, 15000));
        continue;
      }

      const data = await response.json();

      if (data.done) {
        return data.generations[0].img;
      }

      attempts++;
      console.log(`Checking status... Attempt ${attempts}`);
      await new Promise((r) => setTimeout(r, waitTime));
      
    } catch (error) {
      console.error("Status check failed:", error);
      break;
    }
  }
  return null;
}

export default GenerateImage;
