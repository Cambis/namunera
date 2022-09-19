FROM brettt89/silverstripe-web:8.1-apache AS base

FROM base AS dev

COPY --from=composer:2.1.0 /usr/bin/composer /usr/bin/composer

ENV PATH "./vendor/bin:$PATH"

RUN apt-get update -qq && \
  DEBIAN_FRONTEND=noninteractive apt-get install -qqy \
    git \
    netcat \
    zip \
    unzip \
  --no-install-recommends && \
  rm -rf /var/lib/apt/lists*

COPY ./docker/tukutuku/docker-entrypoint.sh /usr/bin/docker-entrypoint.sh
RUN chmod +x /usr/bin/docker-entrypoint.sh
ENTRYPOINT [ "/usr/bin/docker-entrypoint.sh" ]

EXPOSE 80

CMD [ "apachectl", "-D", "FOREGROUND" ]
