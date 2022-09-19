FROM node:16.15.0-alpine AS base

ENV PATH "./node_modules/.bin:$PATH"

WORKDIR /app

FROM base AS dev

RUN apk add --no-cache git netcat-openbsd curl

COPY ./docker/tuutei/docker-entrypoint.sh /usr/bin/docker-entrypoint.sh
RUN chmod +x /usr/bin/docker-entrypoint.sh
ENTRYPOINT [ "/usr/bin/docker-entrypoint.sh" ]

CMD ["yarn", "codegen"]
