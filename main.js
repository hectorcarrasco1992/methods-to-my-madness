function slice(string, start = 0, end = string.length) {
  let newStr = ''
  for (let i=start; i<end; i++) {
    newStr = newStr + string[i]
  }
  return newStr
}

function repeat(str, repetitions) {
  let newStr = ''
  let count = 0
  for ( let i = 0; i < repetitions; i++){
    newStr = newStr + str
    
  }
  return newStr
    
  
}

function startsWith(string, substring) {
  let correct = true
  let incorrect = false
  if(string[0] === substring[0]){
    return correct

  }else return incorrect

  
 
}

function endsWith(str, substring) {
  let correct = true
  let incorrect = false
  if(str[str.length -1] === substring[substring.length-1]){
    return correct

  }else return incorrect
  

  
  
}

function includes(arr, item) {
  for (let i = 0; i < arr.length; i++){
  if( arr[i] === item){
    return true
    
  } 
    
    
    
  }
  return false
}

function join(arr, separator = '') {
  
}


function split(str, separator) {
  
}

function trimStart(str) {
}

function trimEnd(str) {
}


module.exports = {
  slice,
  repeat,
  startsWith,
  endsWith,
  includes,
  join,
  split,
  trimStart,
  trimEnd,
}
