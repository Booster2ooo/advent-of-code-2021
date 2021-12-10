const input = document.body.textContent.split('\n');
input.reduce((acc, val, i, arr) => 
  (i>2 && arr[i-1]+arr[i-2]+arr[i-3]<arr[i]+arr[i-1]+arr[i-2]) ?
    ++acc : 
    acc
, 0);
