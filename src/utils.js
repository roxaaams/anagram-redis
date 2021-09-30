/* eslint-disable import/prefer-default-export */
export const sortString = (str) => {
  return [...str].sort((a, b) => a.localeCompare(b)).join('');
};
