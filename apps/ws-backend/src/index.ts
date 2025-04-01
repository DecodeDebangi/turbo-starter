import { WebSocketServer } from "ws";
import { prismaClient } from "@repo/db/client";

const server = new WebSocketServer({ port: 8080 });

server.on("connection", async (socket) => {
  socket.send("Connected to WebSocket server at port: 8080");

  socket.on("error", console.error);
  socket.on("close", () => console.log("Connection closed"));
  socket.on("message", async (data) => {
    console.log(`Received message: ${data}`);
    socket.send(`Received message: ${data}`);
  });

  const res = await prismaClient.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });
});
