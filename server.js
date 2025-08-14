import http from "http";
const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  res.writeHead(201, { "content-type": "text/html" });
  res.end("<h1>Hola musio</h1>");
});

server.listen(PORT, () => console.log(`server runnin at port ${PORT}`));
