const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  // Fork workers equal to the number of CPU cores
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Handle events when a worker exits and create a new one
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork();
  });
} else {
  // Each worker process runs this code

  // Create an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello from worker process ' + process.pid);
  }).listen(3000);

  console.log(`Worker ${process.pid} started`);
}
