const input = document.body.textContent.split('\n').filter(line => !!line);
class Point { 
  constructor(x,y) { 
    this.x = x; 
    this.y = y;
  } 
}
class Line {
  constructor(start, end) {
    this.start = start; 
    this.end = end;
    this.dx = this.end.x - this.start.x;
    this.dy = this.end.y - this.start.y;
    this.isVertical = !this.dx;
    this.isHorizontal = !this.dy;
  }
}
const lines = input.map(line => {
  let [startCoords,endCoords] = line.split(' -> ');
  let start = new Point(...startCoords.split(',').map(i => parseInt(i, 10)));
  let end = new Point(...endCoords.split(',').map(i => parseInt(i, 10)));
  return new Line(start, end);
})
.filter(line => line.isVertical || line.isHorizontal)
.reduce((acc, line) => {
  if (line.isVertical) {
    const x = line.start.x;
    acc[x] = acc[x] || {};
    for(let y = Math.min(line.start.y, line.end.y), c = Math.max(line.start.y, line.end.y); y<=c; y++) {
      acc[x][y] = (acc[x][y] || 0)+1;
    }
  }
  else {
    const y = line.start.y;
    for(let x = Math.min(line.start.x, line.end.x), c = Math.max(line.start.x, line.end.x); x<=c; x++) {
      acc[x] = acc[x] || {};
      acc[x][y] = (acc[x][y] || 0)+1;
    }
  }
  return acc;
}, {});
Object.values(lines).flatMap(l => Object.values(l)).filter(i => i >= 2).length;
