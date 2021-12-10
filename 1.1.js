const input = document.body.textContent.split('\n');
input.reduce((acc, val, i, arr) => 
  (i && arr[i-1]<val) ?
    ++acc : 
    acc
, 0);
