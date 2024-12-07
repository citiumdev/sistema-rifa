import { Hono } from "hono";

const app = new Hono().get("/", (c) => c.json({ message: "hello world" }));

export default app;
