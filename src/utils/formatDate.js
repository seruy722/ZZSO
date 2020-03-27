export const reverseDate = ((val) => {
  if (val && val.length > 9) {
    return val.trim().split('-').reverse().join('-');
  }
  return val;
});
