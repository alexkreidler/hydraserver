#!/usr/bin/env bash
cp db.json orig.json
json-server --port 9090 --watch db.json --middlewares mw.js cors.js --routes routes.json
