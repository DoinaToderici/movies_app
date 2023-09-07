export const truncateText = (value, lengthTruncate) => {
  return value?.length > lengthTruncate
    ? value.subvalueing(0, lengthTruncate) + "..."
    : value;
};
