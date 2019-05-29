function deepCopy (value = null) {
  if (!value) {
    throw new Error('Value is required');
  }
  
  let fixData = {};
  let copiedArr = [];
  
  if (checkType(value) == 'object') {
    Object.keys(value).forEach((key) => {      
      fixData[key] = deepCopy(value[key]);
    });
  } else {
    if (checkType(value) == 'array') {
      copiedArr = Array.from(value).slice();
      fixData = [];
      for (let i = 0; i < copiedArr.length; i++) {
        fixData.push((deepCopy(copiedArr[i])));
      }
    } else {
      fixData = value;
    }
  }

  return fixData;
}

function checkType (data) {
  if (typeof(data) == 'object' && !Array.isArray(data) && typeof(data.getMonth) !== 'function') {
    return 'object';
  }
  if (typeof(data) == 'object' && Array.isArray(data) && typeof(data.getMonth) !== 'function') {
    return 'array';
  }

  return null;
}

module.exports = {
  deepCopy
}