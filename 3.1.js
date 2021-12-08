const γ = input.reduce((acc, val) => {
    Array.from(val).forEach((bit, i) => {
	    acc[i] = acc[i] || {};
	    acc[i][bit] = acc[i][bit] || 0;
	    acc[i][bit]++;
	});
    return acc;
}, [])
.map(counter => Object.keys(counter).reduce((i,j) => counter[i]>=counter[j] ? i : j))
.reduce((acc, val) => acc + val, '');
const ε = Array.from(γ).reduce((acc, i) => acc + (1 - parseInt(i, 10)), '');
parseInt(γ, 2) * parseInt(ε, 2);
