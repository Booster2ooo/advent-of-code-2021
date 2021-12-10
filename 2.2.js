const input = document.body.textContent.split('\n');
const data = input.reduce((acc, val) => {
    let [move, amount] = val.split(' ');
    amount = parseInt(amount, 10);
    if (move === 'forward') { acc.h += amount; acc.d += acc.a * amount; }
    if (move === 'down') { acc.a += amount }
    if (move === 'up') { acc.a -= amount }
	return acc;
}, { h: 0, d:0, a:0 });
data.h * data.d;
