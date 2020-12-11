import { serve } from "https://deno.land/std@0.80.0/http/server.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const HOST: string = config().HOST || "localhost";
const PORT: number = Number(config().PORT) || 3000;

const s = serve({port: PORT, hostname: HOST});

console.log(`Deno 🏃 on port ${PORT}`);

for await (const req of s) {
  req.respond({ body: "Hello World 🌎" });
}
