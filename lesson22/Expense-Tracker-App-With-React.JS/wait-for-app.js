const http = require('http');

const host = process.env.APP_HOST || 'host.docker.internal';
const port = process.env.APP_PORT || 3000;

const timeout = 15000;
const interval = 1000;

const url = `http://${host}:${port}`;

console.log(`Waiting for ${url} ...`);

let elapsed = 0;

const timer = setInterval(() => {
  const req = http.get(url, (res) => {
    if (res.statusCode === 200) {
      console.log(`App is ready at ${url}`);
      clearInterval(timer);
      process.exit(0);
    } else {
      console.log(`Status: ${res.statusCode}`);
    }
  });

  req.on('error', () => {
    console.log(`Still waiting for ${url}...`);
  });

  req.end();

  elapsed += interval;
  if (elapsed >= timeout) {
    console.error(`Timeout waiting for ${url}`);
    clearInterval(timer);
    process.exit(1);
  }
}, interval);
