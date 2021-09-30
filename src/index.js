/* eslint-disable no-constant-condition */
/* eslint-disable no-console */
/* eslint-disable no-await-in-loop */
import input from 'input';
import { getKey } from './redis/client';

(async () => {
  while (true) {
    const selection = await input.select('Menu: ', ['search', 'exit']);
    if (selection === 'exit') {
      process.exit(0);
    }
    const line = await input.text(`${selection[0].toUpperCase()}${selection.substr(1)} :`);
    switch (selection) {
      case 'search':
        getKey(line).then((result) => {
          if (result.length < 1) {
            console.log('Not found!');
          } else {
            console.log(result);
          }
        });
        break;
      default:
        console.log('Unknown Command!');
        break;
    }
    await new Promise((r) => setTimeout(r, 800));
  }
})();
