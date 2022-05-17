#!/bin/bash

source .env.sh
psql -h $PG_HOST -p $PG_PORT -U $PG_USER $PG_DB
