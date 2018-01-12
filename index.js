

function add(a,b){
  return a + b
}

function subtract(a, b){
  return a - b
}

function multiply(a, b){
  return a * b
}

function divide(a, b){
  return a / b
}

function inc(n){
  n += 1
  return n
}

function dec(n){
  n -= 1
  return n
}

function makeInt(n){
  if(typeof(n) != "integer"){
    return parseInt(n)
  }else{
    return NaN
  }
}

function preserveDecimal(n){
  if(typeof(n) != "float"){
    return parseFloat(n)
  }else{
    return NaN
  }
}
