import React from 'react';
import { Box, Color, useInput } from 'ink';
import Input from 'ink-text-input';
import Select from 'ink-select-input';

import useQuery, { items } from './useQuery';

export default () => {
  const { selection, setSelection, query, setQuery, execute, reset, result } = useQuery();
  useInput((input, key) => {
    if (key.escape) {
      reset();
    }
    if (input === 'q') {
      process.exit(0);
    }
  });
  return (
    <Box flexDirection="column">
      <Box>
        <Color green>Query: </Color>
        {!selection ? (
          <Select items={items} onSelect={setSelection} />
        ) : (
          <Input value={query} onChange={setQuery} onSubmit={execute} />
        )}
      </Box>
      <Box>{result && <Color blue>{result.join(', ')}</Color>}</Box>
    </Box>
  );
};
