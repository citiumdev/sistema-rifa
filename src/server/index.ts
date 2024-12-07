import { Hono } from "hono";
import hello from "./hello";

const app = new Hono().route("/hello", hello);

export default app;
export type AppType = typeof app;
