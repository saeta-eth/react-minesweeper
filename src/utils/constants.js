const createConstants = (...constants) =>
  constants.reduce((acc, constant) => {
    acc[constant] = constant;
    return acc;
  }, {});

export default createConstants;
