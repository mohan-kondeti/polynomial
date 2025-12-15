const fs = require('fs');

function decodeValue(base, value) {
    return parseInt(value, base);
}

function lagrangeInterpolation(points) {
    let secret = 0;

    for (let i = 0; i < points.length; i++) {
        const [xi, yi] = points[i];
        let li = 1;

        for (let j = 0; j < points.length; j++) {
            if (i !== j) {
                const [xj] = points[j];
                li *= (0 - xj) / (xi - xj);
            }
        }

        secret += yi * li;
    }

    return Math.round(secret);
}
function findSecret(filename) {
    const data = JSON.parse(fs.readFileSync(filename, 'utf8'));
    const { n, k } = data.keys;
    const points = [];
    for (let i = 1; i <= n; i++) {
        const share = data[i.toString()];
        if (share) {
            const x = i;
            const y = decodeValue(share.base, share.value);
            points.push([x, y]);
            console.log(`Loaded share ${i}: (${x}, ${y})`);
        }
    }
    if (points.length < k) {
        throw new Error("Not enough shares to reconstruct the secret");
    }
    const selectedPoints = points.slice(0, k);
    const secret = lagrangeInterpolation(selectedPoints);
    console.log(`\nRecovered Secret: ${secret}`);
    return secret;
}
console.log("Running Test Case 1");
findSecret("testcase1.json");
console.log("\nRunning Test Case 2");
findSecret("testcase2.json");
