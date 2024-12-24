const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetcher = async (endpoint: string, options?: RequestInit) => {
    console.info(`Fetcheddddd ${BASE_URL}${endpoint}`)
    const fullUrl = `${BASE_URL}${endpoint}`;

    try {
        const res = await fetch(fullUrl, {
          ...options,
          headers: {
            "Content-Type": "application/json",
            ...(options?.headers || {}),
          },
        });
    
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
    
        return await res.json();
      } catch (error) {
        console.error(`Fetch failed for URL: ${fullUrl}`, error);
        throw error; // Lempar error agar ditangani di tempat lain
      }
}