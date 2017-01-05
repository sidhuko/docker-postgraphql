#!/usr/bin/env bash

#
# PostgraphQL start script
#

if [ -z ${PGSQL_WATCH+x} ];
then
postgraphql -c $PGSQL_CONNECTION -s $PGSQL_SCHEMA -e $PGSQL_SECRET
else
postgraphql -w -c $PGSQL_CONNECTION -s $PGSQL_SCHEMA -e $PGSQL_SECRET 
fi
