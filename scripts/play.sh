#!/usr/bin/sh

source $(pwd)/scripts/common.sh

set -e .

$NODE_BIN/babel-node src/index.js play ./tunes/lit-me-up.rb