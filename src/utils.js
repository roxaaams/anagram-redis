/* eslint-disable no-underscore-dangle */
export const sortString = (str) => {
  return [...str].sort((a, b) => a.localeCompare(b)).join("");
}