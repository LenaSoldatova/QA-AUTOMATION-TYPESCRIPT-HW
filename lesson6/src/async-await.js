async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        processData(data);
        return data;
    } catch (error) {
        console.error("Error data:", error);
    }
}

function processData(data) {
    console.log("Data:", data);
}

const url = 'https://catfact.ninja/docs/api-docs.json';
fetchData(url);

// Manual rejection
async function fetchWithManualRejection(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        console.log("Data:", data);
        throw new Error("Manual rejection");
    } catch (error) {
        console.error("Error:", error.message);
    }
}

fetchWithManualRejection("https://catfact.ninja/docs/api-docs.json");
