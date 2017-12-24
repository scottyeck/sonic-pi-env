import osc from 'node-osc';
import fs from 'fs';
import path from 'path';

const getFilename = filename => path.join(process.cwd(), filename);

const play = function play(guiId) {
  return function handlePlay() {
    const [filename] = this.parent.args;
    const file = fs.readFileSync(getFilename(filename), 'utf-8');
    const client = new osc.Client('127.0.0.1', 4557);
    client.send('/run-code', guiId, file, () => {
      client.kill();
    });
  };
};

export default play;
