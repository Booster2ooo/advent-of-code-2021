const filter = (arr, pos, bit) => {
  const counters = arr.map(val => parseInt(val[pos], 10)).reduce((acc, val) => {
	  acc[val]++;
	  return acc;
  }, [0,0]);
  let crit = counters[0]>counters[1] ? 0 : 1;
  if (!bit) crit = 1 - crit;
  return arr.filter(val => parseInt(val[pos], 10) === crit);
};
let oxigen = [...input];
let co2 = [...input];
for(let i = 0; i<12; i++) {
  if (oxigen.length>1) {
    oxigen = filter(oxigen, i , 1);
  }
  if (co2.length>1) {
    co2 = filter(co2, i , 0);
  }
}
parseInt(oxigen,2) * parseInt(co2,2);
