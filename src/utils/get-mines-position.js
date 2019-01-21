import chunk from 'lodash.chunk';

const getMinesPosition = (quantity, max) => {
  const positions = Array.from({ length: quantity * 2 }, () =>
    Math.floor(Math.random() * max)
  );

  const mines = chunk(positions, 2);

  // https://stackoverflow.com/a/44014849/1741027
  const filter = Array.from(new Set(mines.map(JSON.stringify)), JSON.parse)
    .length;

  const isRepeat = filter !== quantity;

  if (isRepeat) getMinesPosition(quantity, max);

  return mines;
};

export default getMinesPosition;
