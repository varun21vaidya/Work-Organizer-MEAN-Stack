exports.ValidateName = function (name) {
  if (name.trim().length !== 0) {
    return true;
  }
  return false;
};

exports.ValidateCategory = function (category) {
  if (
    category.toLowerCase() === 'hardware' ||
    category.toLowerCase() === 'software' ||
    category.toLowerCase() === 'os' ||
    category.toLowerCase() === 'others'
  ) {
    return true;
  }
  return false;
};
