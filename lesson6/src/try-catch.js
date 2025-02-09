async function fetchDataWithFallback(primaryUrl, fallbackUrl) {
    try {
        return await fetchWithHandling(primaryUrl);
    } catch (error) {
        console.warn(`Error primaryUrl: ${error.message}`);
        try {
            return await fetchWithHandling(fallbackUrl);
        } catch (fallbackError) {
            console.error(`Error fallbackUrl: ${fallbackError.message}`);
            throw new Error("Error fetching data");
        }
    }
}

async function fetchWithHandling(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
    }
    return await response.json();
}

const primaryUrl = 'https://catfactninja/docs/api-docs.json';
const fallbackUrl = 'https://catfact.ninja/docs/api-docs.json';

fetchDataWithFallback(primaryUrl, fallbackUrl)
    .then(data => console.log("Get data:", data))
    .catch(error => console.error("Error:", error.message));
