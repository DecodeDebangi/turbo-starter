import express from "express";
import { prismaClient } from "@repo/db/client";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const newUser = await prismaClient.user.create({
    data: { username, password },
  });
  res.json({ message: "User created", id: newUser.id });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
