
const { test } = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../index');

test('Server should return HTTP 200 and correct message', async () => {
  const server = createServer();

  await new Promise((resolve) => {
    server.listen(0, '127.0.0.1', resolve);
  });

  try {
    const port = server.address().port;

    const response = await fetch(`http://127.0.0.1:${port}`);

    const body = await response.text();

    assert.strictEqual(response.status, 200);
    assert.strictEqual(body, 'Dhruv shah');
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  }
});
