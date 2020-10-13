const server = http.createServer((request, response) => {
  if (request.url ==== "/") { "Content-Type": "application/json" });
  response.write(JSON.stringify ({ message: Welcome to the main page }));
  response.end();
  }
});
server.listen(404);
console.log(`Listening on Port: ${4040}`);
