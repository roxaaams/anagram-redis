import { useState, useCallback } from 'react';
import { getKey } from './redis/client';

export const items = [
  {
    label: 'Search',
    value: 'search',
  },
  {
    label: 'Exit',
    value: 'exit',
  },
];

export default () => {
  const [selection, updateSelection] = useState(null);
  const [query, updateQuery] = useState('');
  const [result, updateResult] = useState(null);
  const reset = useCallback(() => {
    updateSelection(null);
    updateQuery('');
    updateResult(null);
  }, [updateSelection, updateQuery, updateResult]);
  const setResult = useCallback(
    (value) => {
      reset();
      updateResult(value);
    },
    [reset, updateResult]
  );
  const setSelection = useCallback(
    (value) => {
      if (value && value.value === 'exit') {
        process.exit(0);
      }
      updateSelection(value);
      updateResult(null);
    },
    [updateSelection, updateResult]
  );
  const setQuery = useCallback(
    (value) => {
      updateQuery(value);
      updateResult(null);
    },
    [updateQuery, updateResult]
  );
  const execute = useCallback(async () => {
    switch (selection.value) {
      case 'search':
        getKey(query).then(setResult);
        break;
      default:
        setResult('Unknown Command');
        break;
    }
  }, [selection, query, setResult]);

  return {
    selection,
    setSelection,
    query,
    setQuery,
    execute,
    reset,
    result,
  };
};
