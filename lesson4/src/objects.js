const complexObject = {
    name: "Object",
    details: {
        id: 1,
        type: "sample",
        attributes: { speed: "fast", efficiency: "efficient", reliability: "reliable" }
    },
    
    print(indent = "") {
        for (const [key, value] of Object.entries(this)) {
            if (typeof value === "object" && key !== "print") { 
                console.log(`${indent}${key}:`);
                this.printNested(value, indent + "  ");
            } else if (key !== "print") {
                console.log(`${indent}${key}: ${value}`);
            }
        }
    },
    printNested(obj, indent = "") {
        for (const [key, value] of Object.entries(obj)) {
            if (typeof value === "object") {
                console.log(`${indent}${key}:`);
                this.printNested(value, indent + "  ");
            } else {
                console.log(`${indent}${key}: ${value}`);
            }
        }
    }
};

complexObject.print();

