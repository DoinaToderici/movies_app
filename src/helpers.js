export const truncateText = (value, lengthTruncate) => {
  return value?.length > lengthTruncate
    ? value.substring(0, lengthTruncate) + "..."
    : value;
};
