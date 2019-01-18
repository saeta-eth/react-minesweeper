const fillRandomBoolean = (mines, max) =>
  Array.from({ length: mines }, () => Math.floor(Math.random() * max));

export default fillRandomBoolean;
