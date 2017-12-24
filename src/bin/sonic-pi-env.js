#!/usr/bin/env node

import osc from 'node-osc';
import fs from 'fs';
import path from 'path';

import program from 'commander';

const guiId = '';

const getFilename = filename => {
  return path.join(process.cwd(), filename);
};

program.command('play').action(function() {
  const [filename] = this.parent.args;
  const file = fs.readFileSync(getFilename(filename), 'utf-8');
  const client = new osc.Client('127.0.0.1', 4557);
  client.send('/run-code', guiId, file, () => {
    client.kill();
  });
});

program.parse(process.argv);
