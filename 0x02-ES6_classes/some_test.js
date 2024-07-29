const some_list = ['mike', 67];

console.log(some_list);
console.log(Array.isArray(some_list));


function isStringArray(arr){
  return arr.every(i => typeof i === 'string');
}


console.log(isStringArray(some_list));