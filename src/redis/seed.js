/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */

import { createReadStream } from 'fs';
import { createInterface } from 'readline';
import { once } from 'events';
import path from 'path';
import { setKey } from './client';

(async () => {
  try {
    const targetPath = path.resolve(__dirname, '../../', 'data/wordlist.txt');

    const rl = createInterface({
      input: createReadStream(targetPath),
      crlfDelay: Infinity,
    });

    rl.on('line', (line) => setKey(line));

    await once(rl, 'close');

    console.log('File processed.');
  } catch (err) {
    console.error(err);
  }
})().then(() => process.exit(0));
