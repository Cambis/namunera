// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[...slug]/index.tsx";
import * as $1 from "./routes/index.tsx";
import * as $2 from "./routes/projects/[slug]/index.tsx";
import * as $3 from "./routes/projects/index.tsx";
import * as $$0 from "./islands/LikeCounter.tsx";

const manifest = {
  routes: {
    "./routes/[...slug]/index.tsx": $0,
    "./routes/index.tsx": $1,
    "./routes/projects/[slug]/index.tsx": $2,
    "./routes/projects/index.tsx": $3,
  },
  islands: {
    "./islands/LikeCounter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
