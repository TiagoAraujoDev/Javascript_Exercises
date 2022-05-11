let finance = {
  outgoing: [1000, 69.5, 121.30, 782.75,],
  incoming: [2000,34, 1500, 400,98]
}

function financeSum(array) {
  let Sum = 0
  for (i = 0; i < array.length; i++) {
    Sum += array[i]
  }
  return Sum
}

let balance

function financeAnalyzer() {
  const incomingSum = financeSum(finance.incoming)
  const outgoingSum = financeSum(finance.outgoing)

  balance = incomingSum - outgoingSum
  let financePositive = incomingSum > outgoingSum
  let financeNegative = incomingSum < outgoingSum

  if (financeNegative) {
    result = 'BE CAREFUL, you might get financially broken!'
  } else if (financePositive) {
    result = 'You are building your future!'
  } else {
    result = 'You need to organize yourself financially!'
  }

  return result
}

console.log(`${financeAnalyzer()} Your balance is US$ ${balance}!`)
