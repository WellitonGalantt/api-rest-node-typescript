import { server } from "./server/server";

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(3000, () => {
  console.log("Server is running on port http://localhost:3000");
});