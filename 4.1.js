const input = document.body.textContent.split('\n');
const numbers = input[0].split(',').map(val => parseInt(val, 10));
const grids = input.filter((val, i) => i && !!val).reduce((acc, val, i) => {
  const gIndex = Math.floor(i / 5);
  const cells = val.split(' ').filter(val => !!val).map(v => ({ number: parseInt(v, 10), marked: 0 }));
  if (i % 5 === 0) {
    acc[gIndex] = cells;
  }
  else {
    acc[gIndex].push(...cells);
  }
  return acc;
}, []);
const bingo = (grid) => {
  let winner;
  for (let i = 0; i < 5; i++) {
    const line = grid.slice(i * 5, i * 5 + 5);
    const col = grid.filter((val, idx) => idx % 5 === i);
    if (line.every(cell => cell.marked)) {
      winner = line;
      break;
    }
    if (col.every(cell => cell.marked)) {
      winner = col;
      break;
    }
  }
  if (winner) return grid;
};
let score;
for (let num of numbers) {
  let winner;
  for (let grid of grids) {
    const cell = grid.find(c => c.number === num);
    if (cell) {
      cell.marked = 1;
      if (bingo(grid)) {
        winner = grid;
        break;
      }
    }
  }
  if (winner) {
    score = winner.filter(cell => !cell.marked).map(cell => cell.number).reduce((acc, val) => acc + val, 0) * num;
    break;
  }
}
