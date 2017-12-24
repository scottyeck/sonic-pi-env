import program from 'commander';

import play from './commands/play';

const guiId = '';

program.command('play').action(play(guiId));

program.parse(process.argv);
