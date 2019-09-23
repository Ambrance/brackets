module.exports = function check(str, bracketsConfig) {
  let configStr = bracketsConfig.toString().split(',').join('');
  let configArr = [];
  for (let i = 0; i < configStr.length; i += 2) {
    configArr.push(configStr.slice(i, i + 2));
  }
  while (configArr.some(elem => str.includes(elem))) {
    for (let k = 0; k < configArr.length; k++) {
      if (str.includes(configArr[k])) {
        str = str.replace(configArr[k], '');
      }
    }
  }
  if (str.length !== 0) {
    return false;
  }
  return true;
}
