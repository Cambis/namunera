#!/bin/sh
set -e

yarn check --verify-tree || yarn install

# Wait for the app
until nc -z -v -w30 backend 80; do
  echo 'Waiting for web server...'
  sleep 1
done
echo "Web server is up and running!"

exec "$@"
