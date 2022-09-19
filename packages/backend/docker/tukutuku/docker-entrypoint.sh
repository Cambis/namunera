#!/bin/sh

set -e

composer install

# Wait for the db
until nc -z -v -w30 $SS_DATABASE_SERVER '3306'; do
  echo 'Waiting for database...'
  sleep 1
done
echo "Database is up and running!"

exec "$@"
