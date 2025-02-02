const complexObject = {
    name: "Object",
    details: {
        id: 1,
        type: "sample",
        attributes: { speed: "fast", efficiency: "efficient", reliability: "reliable" }
    }
};

function printObject(obj, indent = "") {
    for (const [key, value] of Object.entries(obj)) {
        if (typeof value === "object" ) {
            console.log(`${indent}${key}:`);
            printObject(value, indent + "  ");
        } else {
            console.log(`${indent}${key}: ${value}`);
        }
    }
}

printObject(complexObject);

