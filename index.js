
const http = require('http');

const port = process.env.PORT || 3000;

function createServer() {
  return http.createServer((req, res) => {
    res.statusCode = 200;

    const msg = 'Dhruv shah';

    res.end(msg);
  });
}

if (require.main === module) {
  const server = createServer();

  server.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = { createServer };
