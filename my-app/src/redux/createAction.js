/**
 * Validate data and return a simple action object
 * @param {string} type
 * @param {object} [data]
 */
export const createAction = (type, data) => {
  if (data && data.type) {
    throw new Error('Type is a reserved name !');
  }

  if (data) {
    Object.keys(data).forEach((key) => {
      if (data[key] === undefined) {
        throw new Error(`${key} is undefined !`);
      }
    });
  }

  return {
    type,
    ...data,
  };
};
