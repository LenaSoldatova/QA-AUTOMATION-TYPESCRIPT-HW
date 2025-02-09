function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            processData(data);
            return data;
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

function processData(data) {
    console.log("Data:", data);
}

const url = 'https://catfact.ninja/docs/api-docs.json';
fetchData(url);

// Manual rejection
const p = fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Data:", data);
        return Promise.reject(new Error("Manual rejection"));
    });

p.then(data => console.log("Get data:", data)).catch(error => console.error("Error:", error.message));

