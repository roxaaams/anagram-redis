import { assert } from 'chai';
import { describe, it } from 'mocha';
import _ from 'lodash';
import { getKey, setKey } from '../redis/client';

describe('anagrams searching', () => {
  it('should exist at least 1 anagram of roxana', () => {
    const word = 'roxana';
    getKey(word).then((result) => {
      assert(result.length > 0, true);
    });
  });

  it('should insert a new word and return a unique anagram', () => {
    const word = 'newRoxanaAnagram';
    setKey(word);
    getKey(word).then((result) => {
      assert(result.length === 1, true);
    });
  });

  it('should not exist anagrams of newNotRoxanaAnagram', () => {
    const word = 'newNotRoxanaAnagram';
    getKey(word).then((result) => {
      assert(result.length === 0, true);
    });
  });

  it('should insert several words and return them as anagrams for', () => {
    const word = 'abac';

    const anagrams = ['abac', 'caba', 'aabc', 'bcaa', 'acab'];
    anagrams.forEach((perm) => setKey(perm));

    getKey(word).then((result) => {
      assert(_.isEmpty(_.xor(anagrams, result)), true);
    });
  });
});
