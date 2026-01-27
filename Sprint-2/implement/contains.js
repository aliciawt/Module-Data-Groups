function contains(object, target) {
  if (!object || typeof object !== "object" || Array.isArray(object)) {
    return false;
  }
  for (const property in object) {
    if (property === target) {
      return true;
    }
  }
  return false;
}

module.exports = contains;
