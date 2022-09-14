FROM denoland/deno:alpine-1.25.2 AS base

WORKDIR /app

FROM base AS dev

USER deno

EXPOSE 8000

CMD [ "run", "-A", "--watch=static/,routes/", "dev.ts" ]
