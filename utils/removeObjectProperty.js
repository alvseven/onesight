const removeObjectProperty = (object, ...keys) => {
  for (let key of keys) {
    delete object[key];
  }
  return object;
};

export { removeObjectProperty };
