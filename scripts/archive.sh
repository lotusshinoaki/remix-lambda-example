#!/bin/bash
set -e

rm -rf rollout
rollup -c rollup.config.js

cd rollout
mv server.js index.cjs
zip ../archive.zip . -r
