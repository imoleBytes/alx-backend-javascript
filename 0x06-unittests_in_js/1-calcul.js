

function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  let result;

  switch (type) {
    case 'SUM':
      result = roundedA + roundedB;            
      break;
    
    case 'SUBTRACT':
      result = roundedA - roundedB;            
      break;

    case 'DIVIDE':
      if (roundedB === 0) {
        result = 'Error';
        break;
      }
      result = roundedA / roundedB;            
      break;  
    default:
      break;
  }
  return result;
}

console.log(calculateNumber('DIVIDE', 4,0));

module.exports = calculateNumber;
