import { Hono } from "hono";
import { handle } from "hono/vercel";
import routes from "@/server";

export const runtime = "edge";

const app = new Hono().route("/api", routes);

export const GET = handle(app);
export const POST = handle(app);
export const PUT = handle(app);
export const DELETE = handle(app);
