module.exports = function check(str, bracketsConfig) {
  for(let i = 0; i < bracketsConfig.length; i++) {
    if(typeof bracketsConfig[i] != "string")bracketsConfig[i] = bracketsConfig[i].join('');
  }
  for(let i = 0; i < 100; i++) {
    for(let j = 0; j < bracketsConfig.length; j++) {
      str = str.replace(bracketsConfig[j], '');
    }
  }
  if(str == '') return true;
  else return false;
}
